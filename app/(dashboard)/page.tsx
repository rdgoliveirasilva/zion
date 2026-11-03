import { prisma } from "@/lib/prisma";
import { OverviewClient } from "./overview-client";

export const dynamic = 'force-dynamic';

export default async function OverviewPage() {
  // Busca as transações mais recentes
  const dbTransactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' },
    take: 50,
  });

  // Busca as contas
  const dbAccounts = await prisma.account.findMany();

  // 👇 Convertemos os dados do Prisma para o formato que o Client Component espera
  // Isso resolve o erro de `null` vs `undefined` na categoria.
const transactions = dbTransactions.map(t => ({
    id: t.id,
    description: t.description,
    amount: t.amount,
    date: t.date,
    type: t.type,
    status: t.status,
    category: t.category, // 👈 Passa direto (pode ser null)
  }));


  // O mesmo para as contas (garantindo que o dueDate seja passado corretamente)
  const accounts = dbAccounts.map(a => ({
    id: a.id,
    name: a.name,
    balance: a.balance,
    type: a.type,
    dueDate: a.dueDate ?? undefined,
  }));

  return <OverviewClient transactions={transactions} accounts={accounts} />;
}