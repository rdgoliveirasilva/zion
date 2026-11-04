"use client";

import { financialDay } from "@/lib/statement";
import Link from "next/link";
import { CommitmentSummary, CommitmentList, type CommitmentView } from "@/components/ui/commitment-summary";
import type { StatementPage } from "./statement-list";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye, EyeOff, ChevronDown, ChevronUp,
  ArrowDownLeft, Landmark,
  LogOut
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { money } from "@/lib/financial-history";
import dynamic from "next/dynamic";
const TransactionDetails = dynamic(() => import("@/components/ui/transaction-details").then(m => m.TransactionDetails), { ssr: false });
import { StatementList } from "./statement-list";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date | string;
  type: string;
  status: string;
  isBillPayment?: boolean;
  category: string | null;
  accountId?: string | null;
  account?: { name: string; type: string } | null;
}

interface Account {
  id: string;
  name: string;
  balance: number;
  type: string;
  dueDate?: Date | null;
}

export function OverviewClient({
  statement, spending, totalExpenses,
  accounts,
  commitments
}: {
  statement: StatementPage;
  spending: { current: number; previous: number; variation: number | null };
  totalExpenses: number;
  accounts: Account[];
  commitments: CommitmentView[];
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<Transaction | null>(null);
  const [showValues, setShowValues] = useState(true);
  const [expandExplain, setExpandExplain] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST", signal: AbortSignal.timeout(10000) });
    window.location.replace("/login");
  };

  const formatMoney = useCallback((value: number) => showValues ? money(value) : "••••••", [showValues]);

  const today = financialDay();
  const upcoming = useMemo(() => commitments.filter(c => financialDay(c.dueDate).slice(0,7) === today.slice(0,7) || c.status !== "paid").slice(0,5), [commitments, today]);

  const baseBalance = accounts
    .filter(acc => acc.type !== "credit")
    .reduce((acc, account) => acc + account.balance, 0);

  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-8 animate-slide-up pb-24 md:pb-8">

      <header className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start justify-between w-full md:w-auto">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Olá, Rodrigo 👋</h1>
            <p className="mt-1 text-sm text-muted-foreground">Aqui está o seu resumo consolidado.</p>
          </div>
          <div className="md:hidden mt-1 flex items-center gap-2">
            <ThemeToggle />
            <button onClick={handleLogout} className="p-2 text-muted-foreground hover:text-red-500 transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => setShowValues(!showValues)} className="flex items-center gap-2 rounded-xl bg-card px-3 py-2 text-sm font-medium text-foreground border border-border transition-colors hover:bg-accent">
            {showValues ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            {showValues ? "Ocultar" : "Mostrar"}
          </button>


        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 min-w-0 space-y-6">

          {/* CARD PRINCIPAL */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-primary-foreground/80">Saldo Consolidado</p>
              <span className="text-xs text-primary-foreground/80 bg-white/10 px-2 py-1 rounded-md">Open Finance</span>
            </div>

            <h2 className="mt-2 text-4xl font-bold tracking-tight">{formatMoney(baseBalance)}</h2>

            <button
              onClick={() => setExpandExplain(!expandExplain)}
              className="mt-3 flex items-center gap-1 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Ver detalhes das contas
              {expandExplain ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {expandExplain && (
              <div className="mt-4 space-y-3 rounded-2xl bg-black/10 p-4 text-sm animate-slide-up">
                {accounts.filter(acc => acc.type !== "credit").length > 0 ? (
                  accounts.filter(acc => acc.type !== "credit").map(acc => (
                    <div key={acc.id} className="flex justify-between text-primary-foreground/90">
                      <span className="flex items-center gap-2"><Landmark className="h-4 w-4" /> {acc.name}</span>
                      <span className="font-medium">{formatMoney(acc.balance)}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-primary-foreground/70 italic">Nenhuma conta vinculada ainda.</p>
                )}
              </div>
            )}

            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <ArrowDownLeft className="h-4 w-4 text-red-300" />
                <span>Saídas (pagas): {formatMoney(totalExpenses)}</span>
              </div>
            </div>
          </div>

          {/* 👇 AQUI ENTRA O NOVO COMPONENTE DE EXTRATO 👇 */}
          <StatementList
            initialPage={statement}
            onSelect={setSelected}
            formatMoney={formatMoney}
          />

        </div>

        <aside className="space-y-6">
          <CommitmentSummary commitments={commitments} today={today} formatMoney={formatMoney} />
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold">Seus Gastos</h3><p className="mt-3 text-3xl font-bold">{formatMoney(spending.current)}</p>
            <p className="mt-2 text-sm text-muted-foreground">{spending.variation === null ? "Sem base de comparação no mês anterior" : `${spending.variation > 0 ? "+" : ""}${spending.variation.toFixed(1).replace(".", ",")}% em relação ao mês anterior`}</p>
            <Link href="/reports" className="mt-4 inline-block rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">Analisar gastos</Link>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm"><h3 className="mb-4 text-lg font-bold">Próximos Vencimentos</h3><CommitmentList commitments={upcoming} today={today} formatMoney={formatMoney} /><Link href="/commitments" className="mt-4 block text-center text-sm font-medium text-primary">Ver todos</Link></section>
        </aside>
      </div>
      {selected && <TransactionDetails key={selected.id} transaction={selected} onClose={() => setSelected(null)} onSaved={() => router.refresh()} />}
    </div>
  );
}
