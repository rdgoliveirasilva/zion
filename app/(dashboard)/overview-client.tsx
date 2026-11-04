"use client";

import { financialDay, formatFinancialDate, statementIncludes } from "@/lib/statement";
import { TransactionAccountTags } from "@/components/ui/transaction-account-tags";
import type { CurrentCardBill } from "@/lib/card-bill";
import Link from "next/link";
import { TransactionDetails } from "@/components/ui/transaction-details";
import { CommitmentSummary, CommitmentList, type CommitmentView } from "@/components/ui/commitment-summary";
import { spendingSummary } from "@/lib/commitment-rules";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Eye, EyeOff, CheckCircle2, ChevronDown, ChevronUp, 
  ArrowDownLeft, ArrowUpRight, Wallet, Landmark, Calendar, Clock,
  Utensils, Car, Home, HeartPulse, GraduationCap, Gamepad2, ShoppingBag, MoreHorizontal,
  CreditCard, LogOut, Loader2 // 👈 Importei o Loader2
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { toast } from "sonner"; // 👈 Importei o toast

const CATEGORY_MAP: Record<string, { label: string, icon: any, color: string }> = {
  alimentacao: { label: "Alimentação", icon: Utensils, color: "text-orange-500 bg-orange-500/10" },
  transporte: { label: "Transporte", icon: Car, color: "text-blue-500 bg-blue-500/10" },
  moradia: { label: "Moradia", icon: Home, color: "text-purple-500 bg-purple-500/10" },
  saude: { label: "Saúde", icon: HeartPulse, color: "text-red-500 bg-red-500/10" },
  educacao: { label: "Educação", icon: GraduationCap, color: "text-indigo-500 bg-indigo-500/10" },
  lazer: { label: "Lazer", icon: Gamepad2, color: "text-pink-500 bg-pink-500/10" },
  compras: { label: "Compras", icon: ShoppingBag, color: "text-teal-500 bg-teal-500/10" },
  outros: { label: "Outros", icon: MoreHorizontal, color: "text-gray-500 bg-gray-500/10" },
};

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date;
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
  currentBill: CurrentCardBill | null;
}

export function OverviewClient({ 
  transactions, 
  accounts, commitments
}: { 
  transactions: Transaction[];
  accounts: Account[];
  commitments: CommitmentView[];
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<Transaction | null>(null);
  const [showValues, setShowValues] = useState(true);
  const [expandExplain, setExpandExplain] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "custom">("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // 👇 Novos estados para o botão de atualizar
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // Envia um POST vazio
      const res = await fetch("/api/pluggy/sync", { method: "POST" });
      
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Dados atualizados com sucesso!");
        router.refresh(); 
      } else {
        throw new Error(data.error || "Falha na sincronização");
      }
    } catch (error: any) {
      toast.error(error.message || "Erro ao atualizar. Tente novamente.");
    } finally {
      setIsRefreshing(false);
    }
  };

  const formatMoney = (value: number) => {
    if (!showValues) return "••••••";
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value / 100);
  };

  const formatDate = formatFinancialDate;
  const today = financialDay();
  const spending = spendingSummary(transactions, today);
  const upcoming = commitments.filter(c => financialDay(c.dueDate).slice(0,7) === today.slice(0,7) || c.status !== "paid").slice(0,5);

  const baseBalance = accounts
    .filter(acc => acc.type !== "credit")
    .reduce((acc, account) => acc + account.balance, 0);

  const creditCards = accounts.filter(acc => acc.type === "credit");
  const availableBills = creditCards.filter(card => card.currentBill !== null);
  const totalCredit = availableBills.reduce((sum, card) => sum + card.currentBill!.amount, 0);

  const totalExpenses = transactions
    .filter(t => (t.type === "expense" || t.type === "bill") && t.status !== "pending" && statementIncludes(t.date, "all"))
    .reduce((acc, t) => acc + t.amount, 0);

  const filteredTransactions = transactions.filter(tx =>
    !(tx.type === "bill" && tx.status === "pending") &&
    statementIncludes(tx.date, filterType, startDate, endDate) &&
    tx.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase())
  );

  const pageCount = Math.max(1, Math.ceil(filteredTransactions.length / 15));
  const currentPage = Math.min(page, pageCount);
  const visibleTransactions = filteredTransactions.slice((currentPage - 1) * 15, currentPage * 15);
  const pageNumbers = Array.from(new Set([1, ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i), pageCount])).filter(n => n >= 1 && n <= pageCount).sort((a, b) => a - b);

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
          
          {/* 👇 BOTÃO ATUALIZAR SUBSTITUINDO A DIV VERDE */}
          <button 
            onClick={handleRefresh} 
            disabled={isRefreshing}
            className="flex items-center gap-2 rounded-xl bg-green-500/10 px-3 py-2 text-sm font-medium text-green-600 dark:text-green-400 border border-green-500/20 transition-colors hover:bg-green-500/20 disabled:opacity-70"
          >
            {isRefreshing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">{isRefreshing ? "Atualizando..." : "Atualizar"}</span>
            <span className="sm:hidden">{isRefreshing ? "..." : "Atualizar"}</span>
          </button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="contents">
          
          {/* CARD PRINCIPAL */}
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-xl">
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

          <CommitmentSummary commitments={commitments} today={today} formatMoney={formatMoney} />
          <section className="md:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold">Seus Gastos</h3><p className="mt-3 text-3xl font-bold">{formatMoney(spending.current)}</p>
            <p className="mt-2 text-sm text-muted-foreground">{spending.variation === null ? "Sem base de comparação no mês anterior" : `${spending.variation > 0 ? "+" : ""}${spending.variation.toFixed(1).replace(".", ",")}% em relação ao mês anterior`}</p>
            <Link href="/reports" className="mt-4 inline-block rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">Analisar gastos</Link>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm"><h3 className="mb-4 text-lg font-bold">Próximos Vencimentos</h3><CommitmentList commitments={upcoming} today={today} formatMoney={formatMoney} /><Link href="/commitments" className="mt-4 block text-center text-sm font-medium text-primary">Ver todos</Link></section>
          {/* EXTRATO */}
          <div className="md:col-span-2 min-w-0 rounded-2xl bg-card p-6 shadow-sm border border-border">
            <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-foreground">Extrato</h3>
              
              <div className="flex bg-secondary p-1 rounded-xl flex-wrap">
                <button onClick={() => { setFilterType("all"); setPage(1); }} className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${filterType === "all" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>Histórico</button>
                <button onClick={() => { setFilterType("custom"); setPage(1); }} className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${filterType === "custom" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>Período</button>
              </div>
            </div>

            <div className="mb-4 space-y-2">
              <label htmlFor="statement-search" className="text-sm font-medium text-foreground">Pesquisar por nome</label>
              <input id="statement-search" type="search" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} placeholder="Buscar movimentação..." className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            {filterType === "custom" && (
              <div className="mb-4 flex flex-wrap items-center gap-2 animate-slide-up">
                <input type="date" max={today} value={startDate} onChange={(e) => { setStartDate(e.target.value); setPage(1); }} className="min-w-0 flex-1 rounded-xl bg-background border border-border p-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                <span className="text-muted-foreground text-sm">até</span>
                <input type="date" max={today} value={endDate} onChange={(e) => { setEndDate(e.target.value); setPage(1); }} className="min-w-0 flex-1 rounded-xl bg-background border border-border p-2 text-sm text-foreground focus:outline-none focus:border-primary" />
              </div>
            )}
            
            <div className="space-y-4">
              {filteredTransactions.length === 0 ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <Calendar className="h-8 w-8 text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground">Nenhuma transação encontrada neste período.</p>
                </div>
              ) : (
                visibleTransactions.map((tx) => {
                  const categoryData = CATEGORY_MAP[tx.category || "outros"] || CATEGORY_MAP.outros;
                  const Icon = categoryData.icon;
                  const isIncome = tx.type === "income";

                  return (
                  <button type="button" key={tx.id} onClick={() => setSelected(tx)} className="flex w-full items-center justify-between gap-3 rounded-xl text-left hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${categoryData.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="break-words font-medium text-foreground">{tx.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {categoryData.label} • {formatDate(tx.date)}
                        </p>
                        <TransactionAccountTags account={tx.account} />
                      </div>
                    </div>
                    <span className={`shrink-0 text-sm font-semibold ${isIncome ? 'text-green-500' : 'text-foreground'}`}>
                      {isIncome ? "+" : "-"} {formatMoney(tx.amount)}
                    </span>
                  </button>
                )})
              )}
            </div>
            {filteredTransactions.length > 0 && <nav aria-label="Paginação do extrato" className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <p aria-live="polite" className="text-xs text-muted-foreground">{(currentPage - 1) * 15 + 1}–{Math.min(currentPage * 15, filteredTransactions.length)} de {filteredTransactions.length}</p>
              <div className="flex flex-wrap items-center gap-1">
                <button aria-label="Página anterior" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} className="h-9 rounded-lg border border-border px-3 text-sm hover:bg-accent disabled:opacity-40">‹</button>
                {pageNumbers.map((number, index) => <span key={number} className="inline-flex items-center gap-1">
                  {index > 0 && number > pageNumbers[index - 1] + 1 && <span className="px-1 text-muted-foreground">…</span>}
                  <button aria-label={`Página ${number}`} aria-current={currentPage === number ? "page" : undefined} onClick={() => setPage(number)} className={`h-9 min-w-9 rounded-lg px-2 text-sm font-medium ${currentPage === number ? "bg-primary text-primary-foreground" : "border border-border hover:bg-accent"}`}>{number}</button>
                </span>)}
                <button aria-label="Próxima página" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)} className="h-9 rounded-lg border border-border px-3 text-sm hover:bg-accent disabled:opacity-40">›</button>
              </div>
            </nav>}
          </div>
        </div>

        {/* COLUNA LATERAL */}
        <div className="space-y-6">
          {/* CARD DE FATURA DE CARTÃO */}
          {creditCards.length > 0 && (
            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-amber-500" /> Faturas do mês
              </h3>
              <div className="space-y-3">
                {creditCards.map(card => (
                  <div key={card.id} className="flex flex-col rounded-xl bg-amber-500/10 p-3 border border-amber-500/20 gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-amber-700 dark:text-amber-400">{card.name}</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400">{card.currentBill ? formatMoney(card.currentBill.amount) : "Não disponível"}</span>
                    </div>
                    {card.currentBill?.estimated && <span className="text-xs text-amber-600 dark:text-amber-400">Fatura aberta — valor estimado</span>}
                    {card.currentBill && (
                      <span className="text-xs text-amber-600/80 dark:text-amber-500">
                        Vencimento: {formatDate(card.currentBill.dueDate)}
                      </span>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-border flex justify-between">
                  <span className="text-sm font-medium text-muted-foreground">{availableBills.length < creditCards.length ? "Total disponível" : availableBills.some(card => card.currentBill?.estimated) ? "Total com estimativas" : "Total do mês"}</span>
                  <span className="font-bold text-amber-600">{availableBills.length ? formatMoney(totalCredit) : "Não disponível"}</span>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" /> Contas Conectadas
            </h3>
            <Link href="/accounts" className="mb-4 inline-block text-sm font-medium text-primary">Gerenciar contas</Link>
            <div className="space-y-3">
              {accounts.length > 0 ? (
                 accounts.map(acc => (
                  <div key={acc.id} className="flex items-center justify-between rounded-xl bg-secondary p-3">
                    <span className="font-medium text-foreground">{acc.name}</span>
                    <span className="font-semibold text-foreground">{formatMoney(acc.balance)}</span>
                  </div>
                ))
              ) : (
                <div className="rounded-xl bg-secondary p-3 border border-border">
                  <p className="text-sm font-medium text-foreground">Nenhuma conta</p>
                  <p className="text-xs text-muted-foreground mt-1">Conecte via Open Finance.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {selected && <TransactionDetails key={selected.id} transaction={selected} onClose={() => setSelected(null)} onSaved={() => router.refresh()} />}
    </div>
  );
}
