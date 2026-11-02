import { NextResponse } from "next/server";
import { PluggyClient } from "pluggy-sdk";
import { prisma } from "@/lib/prisma";

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
         });

        console.log(`Buscando transações para ${acc.name}: ${transactions.length} encontradas.`);

        for (const tx of transactions) {
          const exists = await prisma.transaction.findFirst({
            where: {
              description: tx.description,
              amount: Math.round(Math.abs(tx.amount) * 100),
              date: new Date(tx.date),
              accountId: dbAccountId,
            },
          });

          if (!exists) {
            await prisma.transaction.create({
              data: {
                description: tx.description,
                amount: Math.round(Math.abs(tx.amount) * 100),
                date: new Date(tx.date),
                type: tx.amount < 0 ? "expense" : "income",
                status: "paid",
                category: "outros",
                accountId: dbAccountId,
              },
            });
            totalSaved++;
          }
        }
      } catch (txError) {
        console.error(`Erro ao buscar transações da conta ${acc.id}:`, txError);
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