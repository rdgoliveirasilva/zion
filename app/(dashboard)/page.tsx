import { currentCardBill } from "@/lib/pluggy-bills";
import { prisma } from "@/lib/prisma";
import { loadCommitments } from "@/lib/commitments";
import { OverviewClient } from "./overview-client";

export const dynamic = 'force-dynamic';

export default async function OverviewPage() {
  const commitments = await loadCommitments();
  // Busca as transações mais recentes
  const dbTransactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' },
    include: { account: { select: { name: true, type: true } } },
    where: { OR: [{ date: { lte: new Date() } }, { type: "bill", status: "pending" }] },
  });

  // Busca as contas
  const dbAccounts = await prisma.account.findMany();

  // Categorias ausentes devem ser null, conforme esperado pelo cliente.
  const transactions = dbTransactions.map(t => ({
    id: t.id,
    description: t.description,
    amount: t.amount,
    date: t.date,
    type: t.type,
    status: t.status,
    category: t.category ?? null,
    isBillPayment: t.isBillPayment,
    account: t.account,
  }));


  // O mesmo para as contas (garantindo que o dueDate seja passado corretamente)
  const accounts = await Promise.all(dbAccounts.map(async a => ({
    id: a.id,
    name: a.name,
    balance: a.balance,
    type: a.type,
    dueDate: a.dueDate ?? undefined,
    currentBill: await currentCardBill(a),
  })));

  return <OverviewClient transactions={transactions} accounts={accounts} commitments={commitments} />;
}
