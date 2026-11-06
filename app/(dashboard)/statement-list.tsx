"use client";

import { memo, useEffect, useState } from "react";
import { DATA_CHANGED, useJsonResource, notifyDataChanged } from "@/lib/client-data";
import { Calendar, Trash2, Utensils, Car, Home, HeartPulse, GraduationCap, Gamepad2, ShoppingBag, MoreHorizontal } from "lucide-react";
import { financialDay, formatFinancialDate } from "@/lib/statement";
import { useCategories } from "@/components/ui/categories-provider";
import { TransactionAccountTags } from "@/components/ui/transaction-account-tags";

// Precisamos do mapa de categorias aqui para renderizar os ícones
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

export interface StatementTransaction {
  id: string;
  description: string;
  amount: number;
  date: Date | string;
  type: string;
  status: string;
  isBillPayment?: boolean;
  categorySource?: string;
  pluggyTransactionId?: string | null;
  category: string | null;
  accountId?: string | null;
  account?: { name: string; type: string } | null;
}

interface StatementListProps {
  initialPage?: StatementPage;
  allowDelete?: boolean;
  onSelect: (tx: StatementTransaction) => void;
  formatMoney: (value: number) => string;
}

export type StatementPage = { transactions: StatementTransaction[]; total: number; page: number; pageCount: number };

export const StatementList = memo(function StatementList({ initialPage, allowDelete = false, onSelect, formatMoney }: StatementListProps) {
  const { categories } = useCategories();
  
  // Estados locais do extrato
  const [filterType, setFilterType] = useState<"all" | "custom">("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  
  const today = financialDay();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [actionError, setActionError] = useState("");
  useEffect(() => { const timer = setTimeout(() => setQuery(search), 250); return () => clearTimeout(timer); }, [search]);
  const params = new URLSearchParams({ page: String(page), search: query, period: filterType, start: startDate, end: endDate, category, type });
  const defaultPage = page === 1 && !query && filterType === "all" && category === "all" && type === "all";
  const { data, loading, error, reload } = useJsonResource<StatementPage>("/api/statement?" + params.toString(), defaultPage ? initialPage : undefined);
  const pageCount = data?.pageCount || 1;
  const currentPage = Math.min(page, pageCount);
  const [created, setCreated] = useState<StatementTransaction[]>([]);
  const [removedIds, setRemovedIds] = useState<Set<string>>(() => new Set());
  const [deletingIds, setDeletingIds] = useState<Set<string>>(() => new Set());
  useEffect(() => {
    const changed = (event: Event) => {
      const change = (event as CustomEvent<{ removedTransactionId?: string; createdTransaction?: StatementTransaction }>).detail;
      const id = change?.removedTransactionId;
      if (change?.createdTransaction) setCreated(previous => [change.createdTransaction!, ...previous.filter(tx => tx.id !== change.createdTransaction!.id)]);
      if (id) setRemovedIds(previous => new Set([...previous, id]));
    };
    window.addEventListener(DATA_CHANGED, changed);
    return () => window.removeEventListener(DATA_CHANGED, changed);
  }, []);
  useEffect(() => {
    if (data) setCreated(previous => previous.filter(tx => !data.transactions.some(saved => saved.id === tx.id)));
  }, [data]);
  const savedIds = new Set((data?.transactions || []).map(tx => tx.id));
  const additions = defaultPage ? created.filter(tx => !savedIds.has(tx.id) && !removedIds.has(tx.id)) : [];
  const visibleTransactions = [...additions, ...(data?.transactions || [])].filter(tx => !removedIds.has(tx.id)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() || b.id.localeCompare(a.id)).slice(0, 15);
  const total = data?.total || 0;
  useEffect(() => { if (data && page > data.pageCount) setPage(data.pageCount); }, [data, page]);
  const pageNumbers = Array.from(new Set([1, currentPage - 1, currentPage, currentPage + 1, pageCount])).filter(n => n >= 1 && n <= pageCount).sort((a,b) => a-b);
  async function remove(id: string) {
    if (!confirm("Tem certeza que deseja apagar esta transação?")) return;
    if (deletingIds.has(id)) return;
    setDeletingIds(previous => new Set([...previous, id]));
    setActionError("");
    try {
      const response = await fetch("/api/transactions", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Não foi possível apagar a transação.");
      notifyDataChanged({ removedTransactionId: id });
    } catch (e) { setActionError(e instanceof Error ? e.message : "Tente novamente."); }
    finally { setDeletingIds(previous => { const next = new Set(previous); next.delete(id); return next; }); }
  }

  return (
    <div className="min-w-0 rounded-2xl bg-card p-6 shadow-sm border border-border">
      {/* Cabeçalho e Filtros */}
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
      
      {allowDelete && <div className="mb-4 grid grid-cols-2 gap-2"><label className="text-xs">Categoria<select value={category} onChange={e => { setCategory(e.target.value); setPage(1); }} className="mt-1 w-full rounded-xl border border-border bg-background p-2 text-sm"><option value="all">Todas</option>{categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}</select></label><label className="text-xs">Tipo<select value={type} onChange={e => { setType(e.target.value); setPage(1); }} className="mt-1 w-full rounded-xl border border-border bg-background p-2 text-sm"><option value="all">Todos</option><option value="expense">Despesas</option><option value="income">Recebimentos</option></select></label></div>}
      {(error || actionError) && <p role="alert" className="mb-4 text-sm text-red-500">{error || actionError} <button onClick={reload} className="underline">Tentar novamente</button></p>}
      {loading && <p role="status" className="mb-3 text-xs text-muted-foreground">Carregando movimentações…</p>}
      {/* Lista de Transações */}
      <div className="space-y-4">
        {total === 0 && !loading ? (
          <div className="py-8 text-center flex flex-col items-center">
            <Calendar className="h-8 w-8 text-muted-foreground/50 mb-2" />
            <p className="text-sm text-muted-foreground">Nenhuma transação encontrada neste período.</p>
          </div>
        ) : (
          visibleTransactions.map((tx) => {
            const customCategory = categories.find(c => c.value === tx.category);
            const categoryData = { ...(CATEGORY_MAP[tx.category || "outros"] || CATEGORY_MAP.outros), label: customCategory?.label || "Outros" };
            const Icon = categoryData.icon;
            const isIncome = tx.type === "income";

            return (
              <div key={tx.id} className="flex items-center gap-2"><button type="button" onClick={() => onSelect(tx)} className="flex w-full items-center justify-between gap-3 rounded-xl text-left hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary">
                <div className="flex min-w-0 items-center gap-3">
                  <div style={customCategory?.color ? { color: customCategory.color, backgroundColor: customCategory.color + "18" } : undefined} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${categoryData.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="break-words font-medium text-foreground">{tx.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {categoryData.label} • {formatFinancialDate(tx.date)}
                    </p>
                    <TransactionAccountTags account={tx.account} />
                  </div>
                </div>
                <span className={`shrink-0 text-sm font-semibold ${isIncome ? 'text-green-500' : 'text-foreground'}`}>
                  {isIncome ? "+" : "-"} {formatMoney(tx.amount)}
                </span>
              </button>{allowDelete && tx.categorySource === "manual" && !tx.pluggyTransactionId && <button aria-busy={deletingIds.has(tx.id)} disabled={deletingIds.has(tx.id)} onClick={() => remove(tx.id)} aria-label={`Apagar ${tx.description}`} className="shrink-0 rounded-lg p-2 text-muted-foreground hover:text-red-500"><Trash2 className={`h-4 w-4 ${deletingIds.has(tx.id) ? "animate-pulse" : ""}`} /></button>}</div>
            );
          })
        )}
      </div>

      {/* Paginação */}
      {total > 0 && (
        <nav aria-label="Paginação do extrato" className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <p aria-live="polite" className="text-xs text-muted-foreground">{(currentPage - 1) * 15 + 1}–{Math.min(currentPage * 15, total)} de {total}</p>
          <div className="flex flex-wrap items-center gap-1">
            <button aria-label="Página anterior" disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)} className="h-9 rounded-lg border border-border px-3 text-sm hover:bg-accent disabled:opacity-40">‹</button>
            {pageNumbers.map((number, index) => <span key={number} className="inline-flex items-center gap-1">
              {index > 0 && number > pageNumbers[index - 1] + 1 && <span className="px-1 text-muted-foreground">…</span>}
              <button aria-label={`Página ${number}`} aria-current={currentPage === number ? "page" : undefined} onClick={() => setPage(number)} className={`h-9 min-w-9 rounded-lg px-2 text-sm font-medium ${currentPage === number ? "bg-primary text-primary-foreground" : "border border-border hover:bg-accent"}`}>{number}</button>
            </span>)}
            <button aria-label="Próxima página" disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)} className="h-9 rounded-lg border border-border px-3 text-sm hover:bg-accent disabled:opacity-40">›</button>
          </div>
        </nav>
      )}
    </div>
  );
});
