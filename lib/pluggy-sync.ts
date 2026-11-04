import { refreshCommitments } from "@/lib/commitment-refresh";
import { revalidateTag } from "next/cache";
import { isCardBillPayment } from "@/lib/commitment-rules";
import { PluggyClient } from "pluggy-sdk";
import { prisma } from "@/lib/prisma";
import { financialDay, pluggyTransactionType } from "@/lib/statement";

export async function syncPluggyItem(itemId: string) {
    const client = new PluggyClient({
      clientId: process.env.PLUGGY_CLIENT_ID!,
      clientSecret: process.env.PLUGGY_CLIENT_SECRET!,
    });

    const accounts = await client.fetchAccounts(itemId);
    
    if (!accounts || accounts.results.length === 0) {
        throw new Error("Nenhuma conta encontrada na Pluggy.");
    }

    const snapshots = await Promise.all(accounts.results.map(async account => ({
      account, transactions: await client.fetchAllTransactions(account.id, {
        dateFrom: new Date(Date.now() - 366 * 86400000).toISOString().slice(0, 10),
        dateTo: financialDay(),
      }),
    })));

    const result = await prisma.$transaction(async db => {
    await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext(${itemId}))::text`;
    let totalSaved = 0;

    for (const { account: acc, transactions } of snapshots) {
      // 1. Salva ou atualiza a Conta
      const existingAccount = await db.account.findFirst({
        where: { pluggyAccountId: acc.id },
      });

      let dbAccountId = existingAccount?.id;
      let dueDate = null;
      if (acc.type === "CREDIT" && acc.creditData && acc.creditData.balanceDueDate) {
        dueDate = new Date(acc.creditData.balanceDueDate);
      }

      if (existingAccount) {
        await db.account.update({
          where: { id: existingAccount.id },
          data: {
            type: acc.type === "CREDIT" ? "credit" : "checking",
            name: acc.name || "Conta Pluggy",
            balance: Math.round((acc.balance || 0) * 100),
            dueDate: dueDate,
            pluggyItemId: itemId,
          },
        });
      } else {
        const newAccount = await db.account.create({
          data: {
            name: acc.name || "Conta Pluggy",
            type: acc.type === "CREDIT" ? "credit" : "checking",
            balance: Math.round((acc.balance || 0) * 100),
            dueDate: dueDate,
            pluggyItemId: itemId,
            pluggyAccountId: acc.id,
          },
        });
        dbAccountId = newAccount.id;
      }

      // 2. Busca as transações (Histórico de 1 ano)
      try {
        // One lookup per account, instead of one database round trip per transaction.
        const existing = await db.transaction.findMany({ where: { accountId: dbAccountId } });
        const key = (t: { description: string; amount: number; date: Date }) =>
          JSON.stringify([t.description, t.amount, t.date.toISOString()]);
        const byId = new Map(existing.filter(t => t.pluggyTransactionId).map(t => [t.pluggyTransactionId, t]));
        const legacy = existing.filter(t => !t.pluggyTransactionId);
        const claimed = new Set<string>();
        const today = financialDay();
        const seen = new Set<string>();
        const writes = [];
        for (const tx of transactions) {
          if (financialDay(tx.date) > today) continue;
          const data = {
            description: tx.description,
            isBillPayment: isCardBillPayment(tx.description, tx.operationType),
            amount: Math.round(Math.abs(tx.amount) * 100),
            date: new Date(tx.date),
            type: pluggyTransactionType(tx.type, tx.amount, acc.type),
            status: tx.status === "PENDING" ? "pending" : "paid",
          };
          const identity = tx.id;
          if (seen.has(identity)) continue;
          seen.add(identity);
          const old = byId.get(tx.id) ?? legacy.find(t => !claimed.has(t.id) && key(t) === key(data));
          if (old) claimed.add(old.id);
          if (old) {
            if (old.type !== data.type || old.status !== data.status || old.isBillPayment !== data.isBillPayment || !old.pluggyTransactionId) {
              writes.push(db.transaction.update({ where: { id: old.id }, data: { type: data.type, status: data.status, isBillPayment: data.isBillPayment, pluggyTransactionId: tx.id } }));
            }
          } else {
            writes.push(db.transaction.create({ data: { ...data, pluggyTransactionId: tx.id, category: "outros", accountId: dbAccountId } }));
            totalSaved++;
          }
        }
        for (let offset = 0; offset < writes.length; offset += 50) {
          await Promise.all(writes.slice(offset, offset + 50));
        }
      } catch (txError) {
        console.error(`Erro ao buscar transações da conta ${acc.id}:`, txError);
        throw txError;
      }
    }

    return { success: true, totalSaved };
    }, { maxWait: 10000, timeout: 90000 });
    revalidateTag("pluggy-bills", { expire: 0 });
    await refreshCommitments(true);
    return result;
}
