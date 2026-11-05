import { invoicePaymentMatches } from "./financial-history";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma";
import { financialDay } from "./statement";
import { PAID_STATUSES, normalizeMerchant, monthOffset, monthsBetween, dueDateFor } from "./commitment-rules";

export async function reconcileCommitments(db: Prisma.TransactionClient, now = new Date()) {
  await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;

  const invoices = await db.commitment.findMany({ where: { source: "card", status: "pending" } });
  const payments = invoices.length
    ? await db.transaction.findMany({
        where: { accountId: { in: invoices.map(b => b.key.split(":")[1]) }, type: "income", status: { in: [...PAID_STATUSES] } },
        include: { commitment: { select: { id: true } } }
      })
    : [];

  for (const match of invoicePaymentMatches(invoices, payments, financialDay(now))) {
    await db.commitment.update({ where: { id: match.commitmentId }, data: { status: "paid", transactionId: match.transactionId } });
    await db.transaction.update({ where: { id: match.transactionId }, data: { isBillPayment: true } });
  }

  const rules = await db.recurringRule.findMany({ where: { active: true } });
  const currentMonth = financialDay(now).slice(0, 7);

  // OTIMIZAÇÃO: Busca todas as transações relevantes de uma vez para as regras
  const ruleAccountIds = [...new Set(rules.flatMap(r => r.accountId ? [r.accountId] : []))];
  const hasManualRules = rules.some(r => r.accountId === null);
  const allTransactions = rules.length
    ? await db.transaction.findMany({
        where: { OR: [{ accountId: { in: ruleAccountIds } }, ...(hasManualRules ? [{ accountId: null }] : [])], type: "expense", isBillPayment: false },
        include: { account: true, commitment: true },
      })
    : [];

  for (const rule of rules) {
    const account = rule.accountId ? await db.account.findUnique({ where: { id: rule.accountId }, select: { type: true } }) : null;

    // OTIMIZAÇÃO: Filtra localmente em vez de buscar no banco dentro do loop
    const matches = allTransactions
      .filter(tx => tx.accountId === rule.accountId && tx.amount === rule.amount)
      .filter(tx => normalizeMerchant(tx.description) === rule.description)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const inherited = matches.filter(tx => tx.categorySource !== "manual").map(tx => tx.id);
    if (inherited.length) await db.transaction.updateMany({ where: { id: { in: inherited } }, data: { category: rule.category, categorySource: "rule" } });

    for (let offset = 0; offset <= monthsBetween(rule.startMonth, monthOffset(currentMonth, 13)); offset += rule.intervalMonths) {
      const month = monthOffset(rule.startMonth, offset);
      const candidates = matches.filter(tx => financialDay(tx.date).slice(0, 7) === month);
      const key = rule.id + ":" + month;

      let existing = await db.commitment.findUnique({ where: { key } });

      if (!existing) {
        const manual = (await db.commitment.findMany({ where: { source: "manual", ruleId: null, amount: rule.amount } }))
          .filter(c => financialDay(c.dueDate).slice(0, 7) === month && normalizeMerchant(c.description) === rule.description);
        if (manual.length === 1) existing = await db.commitment.update({ where: { id: manual[0].id }, data: { key, ruleId: rule.id } });
        else if (manual.length > 1) continue;
      }

      const available = candidates.filter(tx => !tx.commitment || tx.commitment.key === key);
      if (!existing && candidates.length && !available.length) continue;

      const candidate = available.length === 1 ? available[0] : undefined;
      const paid = !!candidate && PAID_STATUSES.has(candidate.status) && financialDay(candidate.date) <= financialDay(now);
      const data = { description: rule.description, amount: rule.amount, dueDate: dueDateFor(month, rule.dueDay), category: rule.category, coveredByCard: account?.type === "credit", ruleId: rule.id };

      if (!existing) await db.commitment.create({ data: { ...data, key, status: paid ? "paid" : "pending", transactionId: candidate?.id } });
      else if (existing.status !== "paid" && existing.manualOverride) {
        const adjusted = allTransactions.filter(tx => tx.accountId === rule.accountId && tx.amount === existing.amount &&
          normalizeMerchant(tx.description) === rule.description && financialDay(tx.date).slice(0, 7) === month &&
          (!tx.commitment || tx.commitment.id === existing.id));
        if (adjusted.length === 1 && PAID_STATUSES.has(adjusted[0].status) && financialDay(adjusted[0].date) <= financialDay(now)) {
          await db.commitment.update({ where: { id: existing.id }, data: { status: "paid", transactionId: adjusted[0].id } });
        }
      }
      else if (existing.status !== "paid" && !existing.manualOverride) await db.commitment.update({ where: { id: existing.id }, data: { ...data, status: paid ? "paid" : "pending", transactionId: candidate?.id ?? existing.transactionId } });
    }
  }
}

// Page reads never wait for Pluggy, acquire write locks or reconcile rules.
export async function loadCommitments() {
  const [commitments, categories] = await Promise.all([
    prisma.commitment.findMany({ orderBy: { dueDate: "asc" } }),
    prisma.category.findMany({ select: { value: true, color: true } }),
  ]);
  const colors = new Map(categories.map(c => [c.value, c.color]));
  return commitments.map(c => ({ ...c, color: colors.get(c.category) }));
}
