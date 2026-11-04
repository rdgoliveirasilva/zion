"use client";

import { useState } from "react";
import { Calendar, Utensils, Car, Home, HeartPulse, GraduationCap, Gamepad2, ShoppingBag, MoreHorizontal } from "lucide-react";
import { financialDay, formatFinancialDate, statementIncludes } from "@/lib/statement";
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

interface StatementListProps {
  transactions: Transaction[];
  onSelect: (tx: Transaction) => void;
  formatMoney: (value: number) => string;
}

export function StatementList({ transactions, onSelect, formatMoney }: StatementListProps) {
  const { categories } = useCategories();
  
  // Estados locais do extrato
  const [filterType, setFilterType] = useState<"all" | "custom">("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  
  const today = financialDay();

  // Lógica de filtro
  const filteredTransactions = transactions.filter(tx =>
    !(tx.type === "bill" && tx.status === "pending") &&
    statementIncludes(tx.date, filterType, startDate, endDate) &&
    tx.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase())
  );

  // Lógica de paginação
  const pageCount = Math.max(1, Math.ceil(filteredTransactions.length / 15));
  const currentPage = Math.min(page, pageCount);
  const visibleTransactions = filteredTransactions.slice((currentPage - 1) * 15, currentPage * 15);
  const pageNumbers = Array.from(new Set([1, ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i), pageCount])).filter(n => n >= 1 && n <= pageCount).sort((a, b) => a - b);

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
      
      {/* Lista de Transações */}
      <div className="space-y-4">
        {filteredTransactions.length === 0 ? (
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
              <button type="button" key={tx.id} onClick={() => onSelect(tx)} className="flex w-full items-center justify-between gap-3 rounded-xl text-left hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary">
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
              </button>
            );
          })
        )}
      </div>

      {/* Paginação */}
      {filteredTransactions.length > 0 && (
        <nav aria-label="Paginação do extrato" className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <p aria-live="polite" className="text-xs text-muted-foreground">{(currentPage - 1) * 15 + 1}–{Math.min(currentPage * 15, filteredTransactions.length)} de {filteredTransactions.length}</p>
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
}