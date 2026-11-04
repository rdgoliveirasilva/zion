import { unstable_cache } from "next/cache";
import { currentCardBill, cardBillArchive } from "./pluggy-bills";
import { invoicePaymentMatches, lastTwelveMonths, institutionLabel } from "./financial-history";
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
  const ruleAccountIds = rules.map(r => r.accountId).filter(Boolean) as string[];
  const allTransactions = ruleAccountIds.length 
    ? await db.transaction.findMany({
        where: { accountId: { in: ruleAccountIds }, type: "expense", isBillPayment: false },
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

    for (let offset = 0; offset <= monthsBetween(rule.startMonth, monthOffset(currentMonth, 12)); offset += rule.intervalMonths) {
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
      else if (existing.status !== "paid") await db.commitment.update({ where: { id: existing.id }, data: { ...data, status: paid ? "paid" : "pending", transactionId: candidate?.id ?? existing.transactionId } });
    }
  }
}

// Função original, que realmente vai no banco e monta os dados
async function fetchCommitments() {
  const allAccounts = await prisma.account.findMany();
  const accounts = allAccounts.filter(account => account.type === "credit");
  
  if (accounts.length === 0) {
    return prisma.commitment.findMany({ orderBy: { dueDate: "asc" } });
  }

  const months = lastTwelveMonths();
  const bills = (await Promise.all(accounts.map(async account => {
    const [current, archive] = await Promise.all([currentCardBill(account), cardBillArchive(account)]);
    const byMonth = new Map(archive.filter(b => months.includes(b.dueDate.slice(0, 7))).map(b => [b.dueDate.slice(0, 7), b]));
    if (current) byMonth.set(current.dueDate.slice(0, 7), current);
    return [...byMonth.values()].map(bill => ({ account, bill }));
  }))).flat();

  for (const { account, bill } of bills) {
    if (!bill) continue;
    const key = `card:${account.id}:${bill.dueDate.slice(0, 7)}`;
    const existing = await prisma.commitment.findUnique({ where: { key } });
    const bank = institutionLabel([account.name, ...allAccounts.filter(a => account.pluggyItemId && a.pluggyItemId === account.pluggyItemId).map(a => a.name)]);
    const name = bank && !institutionLabel([account.name]) ? `${bank} · ${account.name}` : account.name;
    const data = { description: `Fatura ${name}`, amount: bill.amount, dueDate: dueDateFor(bill.dueDate.slice(0, 7), Number(bill.dueDate.slice(8, 10))), source: "card", estimated: bill.estimated ?? false };
    
    if (!existing) await prisma.commitment.create({ data: { ...data, key } });
    else if (existing.status !== "paid") await prisma.commitment.update({ where: { key }, data });
    else if (existing.description !== data.description) await prisma.commitment.update({ where: { key }, data: { description: data.description } });
  }

  await prisma.$transaction(db => reconcileCommitments(db), { timeout: 60000 });

  const [commitments, categories] = await Promise.all([
    prisma.commitment.findMany({ orderBy: { dueDate: "asc" } }),
    prisma.category.findMany()
  ]);
  
  return commitments.map(c => ({ ...c, color: categories.find(category => category.value === c.category)?.color }));
}

// Exportamos a versão com cache de 30 segundos
export const loadCommitments = unstable_cache(fetchCommitments, ['zion-commitments-cache'], { revalidate: 30 });