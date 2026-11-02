import { prisma } from "@/lib/prisma";
import { OverviewClient } from "./overview-client";

export const dynamic = 'force-dynamic';

export default async function OverviewPage() {
  // Busca as transações mais recentes
  const transactions = await prisma.transaction.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  // Busca as contas para somar o saldo consolidado
  const accounts = await prisma.account.findMany();

  return <OverviewClient transactions={transactions} accounts={accounts} />;
}