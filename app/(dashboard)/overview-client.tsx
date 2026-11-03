"use client";

import { financialDay, formatFinancialDate, statementIncludes } from "@/lib/statement";
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
  transactions, 
  accounts 
}: { 
  transactions: Transaction[];
  accounts: Account[];
}) {
  const router = useRouter();
  const [showValues, setShowValues] = useState(true);
  const [expandExplain, setExpandExplain] = useState(false);
  const [filterType, setFilterType] = useState<"today" | "7d" | "custom">("7d");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const baseBalance = accounts
    .filter(acc => acc.type !== "credit")
    .reduce((acc, account) => acc + account.balance, 0);

  const creditCards = accounts.filter(acc => acc.type === "credit");
  const totalCredit = creditCards.reduce((acc, account) => acc + account.balance, 0);

  const totalExpenses = transactions
    .filter(t => (t.type === "expense" || t.type === "bill") && t.status !== "pending" && statementIncludes(t.date, "all"))
    .reduce((acc, t) => acc + t.amount, 0);

  const pendingBills = transactions.filter(
    t => t.type === "bill" && t.status === "pending"
  );

  const filteredTransactions = transactions.filter(tx =>
    !(tx.type === "bill" && tx.status === "pending") &&
    statementIncludes(tx.date, filterType, startDate, endDate)
  );

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
        <div className="md:col-span-2 space-y-6">
          
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

          {/* EXTRATO */}
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-foreground">Extrato</h3>
              
              <div className="flex bg-secondary p-1 rounded-xl flex-wrap">
                <button onClick={() => setFilterType("today")} className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${filterType === "today" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>Hoje</button>
                <button onClick={() => setFilterType("7d")} className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${filterType === "7d" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>7 dias</button>
                <button onClick={() => setFilterType("custom")} className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${filterType === "custom" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>Período</button>
              </div>
            </div>

            {filterType === "custom" && (
              <div className="mb-4 flex items-center gap-2 animate-slide-up">
                <input type="date" max={today} value={startDate} onChange={(e) => setStartDate(e.target.value)} className="flex-1 rounded-xl bg-background border border-border p-2 text-sm text-foreground focus:outline-none focus:border-primary" />
                <span className="text-muted-foreground text-sm">até</span>
                <input type="date" max={today} value={endDate} onChange={(e) => setEndDate(e.target.value)} className="flex-1 rounded-xl bg-background border border-border p-2 text-sm text-foreground focus:outline-none focus:border-primary" />
              </div>
            )}
            
            <div className="space-y-4">
              {filteredTransactions.length === 0 ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <Calendar className="h-8 w-8 text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground">Nenhuma transação encontrada neste período.</p>
                </div>
              ) : (
                filteredTransactions.map((tx) => {
                  const categoryData = CATEGORY_MAP[tx.category || "outros"] || CATEGORY_MAP.outros;
                  const Icon = categoryData.icon;
                  const isIncome = tx.type === "income";

                  return (
                  <div key={tx.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${categoryData.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{tx.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {categoryData.label} • {formatDate(tx.date)}
                        </p>
                      </div>
                    </div>
                    <span className={`font-semibold ${isIncome ? 'text-green-500' : 'text-foreground'}`}>
                      {isIncome ? "+" : "-"} {formatMoney(tx.amount)}
                    </span>
                  </div>
                )})
              )}
            </div>
          </div>
        </div>

        {/* COLUNA LATERAL */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-500" /> Contas a Pagar
            </h3>
            <div className="space-y-3">
              {pendingBills.length > 0 ? (
                pendingBills.map(bill => {
                  const categoryData = CATEGORY_MAP[bill.category || "outros"] || CATEGORY_MAP.outros;
                  return (
                    <div key={bill.id} className="flex flex-col rounded-xl bg-amber-500/10 p-3 border border-amber-500/20">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-amber-700 dark:text-amber-400">{bill.description}</span>
                        <span className="font-bold text-amber-700 dark:text-amber-400">{formatMoney(bill.amount)}</span>
                      </div>
                      <span className="text-xs text-amber-600/80 dark:text-amber-500 mt-1">
                        {categoryData.label} • Vence em: {formatDate(bill.date)}
                      </span>
                    </div>
                  )
                })
              ) : (
                <div className="rounded-xl bg-secondary p-3 border border-border">
                  <p className="text-sm font-medium text-foreground">Tudo em dia!</p>
                  <p className="text-xs text-muted-foreground mt-1">Nenhuma conta pendente.</p>
                </div>
              )}
            </div>
          </div>

          {/* CARD DE FATURA DE CARTÃO */}
          {creditCards.length > 0 && (
            <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
              <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-amber-500" /> Faturas de Cartão
              </h3>
              <div className="space-y-3">
                {creditCards.map(card => (
                  <div key={card.id} className="flex flex-col rounded-xl bg-amber-500/10 p-3 border border-amber-500/20 gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-amber-700 dark:text-amber-400">{card.name}</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400">{formatMoney(card.balance)}</span>
                    </div>
                    {card.dueDate && (
                      <span className="text-xs text-amber-600/80 dark:text-amber-500">
                        Vencimento: {formatDate(card.dueDate)}
                      </span>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-border flex justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Total</span>
                  <span className="font-bold text-amber-600">{formatMoney(totalCredit)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
            <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" /> Contas Conectadas
            </h3>
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
    </div>
  );
}