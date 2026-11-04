import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { loadCommitments } from "@/lib/commitments";
import { OverviewClient } from "./overview-client";
import { Loader2 } from "lucide-react";

export const dynamic = 'force-dynamic';

// Componente interno que busca os dados (pode demorar)
async function DashboardData() {
  const commitments = await loadCommitments();

  const dbTransactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' },
    include: { account: { select: { name: true, type: true } } },
    where: { OR: [{ date: { lte: new Date() } }, { type: "bill", status: "pending" }] },
  });

  const dbAccounts = await prisma.account.findMany();

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

  const accounts = dbAccounts.map(a => ({
    id: a.id,
    name: a.name,
    balance: a.balance,
    type: a.type,
    dueDate: a.dueDate ?? undefined,
  }));

  return <OverviewClient transactions={transactions} accounts={accounts} commitments={commitments} />;
}

// A página em si carrega imediatamente e mostra o loading
export default function OverviewPage() {
  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-8 pb-24 md:pb-8">
      {/* Cabeçalho fixo que aparece na hora */}
      <header className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-pulse">
        <div>
          <div className="h-8 w-48 bg-secondary rounded mb-2"></div>
          <div className="h-4 w-64 bg-secondary rounded"></div>
        </div>
      </header>

      {/* Enquanto os dados carregam, mostra esse spinner */}
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-32">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Carregando suas finanças...</p>
        </div>
      }>
        <DashboardData />
      </Suspense>
    </div>
  );
}