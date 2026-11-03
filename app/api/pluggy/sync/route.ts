import { NextResponse } from "next/server";
import { PluggyClient } from "pluggy-sdk";
import { prisma } from "@/lib/prisma";

import { financialDay, pluggyTransactionType } from "@/lib/statement";

export const maxDuration = 120;

export async function POST(request: Request) {
  try {
    const { itemId } = await request.json();

    if (!itemId) {
      return NextResponse.json({ error: "itemId não fornecido." }, { status: 400 });
    }

    const client = new PluggyClient({
      clientId: process.env.PLUGGY_CLIENT_ID!,
      clientSecret: process.env.PLUGGY_CLIENT_SECRET!,
    });

    const accounts = await client.fetchAccounts(itemId);
    
    if (!accounts || accounts.results.length === 0) {
        return NextResponse.json({ error: "Nenhuma conta encontrada na Pluggy." }, { status: 400 });
    }

    let totalSaved = 0;

    for (const acc of accounts.results) {
      // 1. Salva ou atualiza a Conta
      const existingAccount = await prisma.account.findFirst({
        where: { pluggyAccountId: acc.id },
      });

      let dbAccountId = existingAccount?.id;
      let dueDate = null;
      if (acc.type === "CREDIT" && acc.creditData && acc.creditData.balanceDueDate) {
        dueDate = new Date(acc.creditData.balanceDueDate);
      }

      if (existingAccount) {
        await prisma.account.update({
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
        const newAccount = await prisma.account.create({
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
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        
        const transactions = await client.fetchAllTransactions(acc.id, { dateFrom: oneYearAgo.toISOString().split("T")[0],
          dateTo: financialDay(),
         });

        console.log(`Buscando transações para ${acc.name}: ${transactions.length} encontradas.`);

        // One lookup per account, instead of one database round trip per transaction.
        const existing = await prisma.transaction.findMany({ where: { accountId: dbAccountId } });
        const key = (t: { description: string; amount: number; date: Date }) =>
          JSON.stringify([t.description, t.amount, t.date.toISOString()]);
        const byKey = new Map(existing.map(t => [key(t), t]));
        const today = financialDay();
        const seen = new Set<string>();
        const writes = [];
        for (const tx of transactions) {
          if (financialDay(tx.date) > today) continue;
          const data = {
            description: tx.description,
            amount: Math.round(Math.abs(tx.amount) * 100),
            date: new Date(tx.date),
            type: pluggyTransactionType(tx.type, tx.amount, acc.type),
            status: tx.status === "PENDING" ? "pending" : "paid",
          };
          const identity = key(data);
          if (seen.has(identity)) continue;
          seen.add(identity);
          const old = byKey.get(identity);
          if (old) {
            if (old.type !== data.type || old.status !== data.status) {
              writes.push(prisma.transaction.update({ where: { id: old.id }, data: { type: data.type, status: data.status } }));
            }
          } else {
            writes.push(prisma.transaction.create({ data: { ...data, category: "outros", accountId: dbAccountId } }));
            totalSaved++;
          }
        }
        for (let offset = 0; offset < writes.length; offset += 50) {
          await prisma.$transaction(writes.slice(offset, offset + 50));
        }
      } catch (txError) {
        console.error(`Erro ao buscar transações da conta ${acc.id}:`, txError);
        throw txError;
      }
    }

    return NextResponse.json({ success: true, message: `Sincronização concluída! ${totalSaved} novas transações.` });
  } catch (error: any) {
    console.error("ERRO NA SINCRONIZAÇÃO PLUGGY:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao sincronizar." },
      { status: 500 }
    );
  }
}