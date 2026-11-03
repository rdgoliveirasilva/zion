"use client";

import { formatFinancialDate, statementIncludes } from "@/lib/statement";
import { TransactionAccountTags } from "@/components/ui/transaction-account-tags";
import { useState, useEffect } from "react";
import { 
  Search, Trash2, Filter, ArrowDownLeft, ArrowUpRight,
  Utensils, Car, Home, HeartPulse, GraduationCap, Gamepad2, ShoppingBag, MoreHorizontal, Loader2,
  Landmark, CreditCard
} from "lucide-react";

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
  category?: string;
  account?: {
    name: string;
    type: string;
  };
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/transactions/all");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setTransactions(data);
    } catch (error) {
      console.error("Erro ao buscar transações", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja apagar esta transação?")) return;

    try {
      const res = await fetch(`/api/transactions/all?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setTransactions(transactions.filter(t => t.id !== id));
      }
    } catch (error) {
      alert("Erro ao deletar transação.");
    }
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || tx.category === filterCategory;
    const matchesType = filterType === "all" || tx.type === filterType;
    
    // 👇 Filtro: Só mostra o que já aconteceu (data de hoje ou passada)
    const isPastOrToday = statementIncludes(tx.date, "all");

    // 👇 Filtro: Ignora contas a pagar pendentes (faturas futuras)
    const isNotPendingBill = !(tx.type === "bill" && tx.status === "pending");

    return matchesSearch && matchesCategory && matchesType && isPastOrToday && isNotPendingBill;
  });

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value / 100);
  };

  const formatDate = formatFinancialDate;

  return (
    <div className="mx-auto w-full max-w-5xl p-4 md:p-8 animate-slide-up pb-24 md:pb-8">
      
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Transações</h1>
          <p className="mt-1 text-sm text-muted-foreground">Gerencie todo o seu histórico financeiro.</p>
        </div>
      </header>

      {/* Barra de Filtros */}
      <div className="mb-6 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar transação..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl bg-card border border-border p-3 pl-10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <select 
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="rounded-xl bg-card border border-border p-3 text-foreground focus:outline-none focus:border-primary appearance-none min-w-[150px]"
        >
          <option value="all">Todos os tipos</option>
          <option value="expense">Saídas</option>
          <option value="income">Entradas</option>
        </select>

        <select 
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="rounded-xl bg-card border border-border p-3 text-foreground focus:outline-none focus:border-primary appearance-none min-w-[150px]"
        >
          <option value="all">Todas as categorias</option>
          {Object.entries(CATEGORY_MAP).map(([key, value]) => (
            <option key={key} value={key}>{value.label}</option>
          ))}
        </select>
      </div>

      {/* Lista de Transações */}
      <div className="rounded-2xl bg-card border border-border overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Carregando histórico...</p>
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Filter className="h-8 w-8 text-muted-foreground/50 mb-2" />
            <p className="text-muted-foreground">Nenhuma transação encontrada com esses filtros.</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filteredTransactions.map((tx) => {
              const categoryData = CATEGORY_MAP[tx.category || "outros"] || CATEGORY_MAP.outros;
              const Icon = categoryData.icon;
              const isIncome = tx.type === "income";

              return (
                <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${categoryData.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-base">{tx.description}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-xs text-muted-foreground">{categoryData.label}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{formatDate(tx.date)}</span>
                        
                        <TransactionAccountTags account={tx.account} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className={`font-semibold ${isIncome ? 'text-green-500' : 'text-foreground'}`}>
                        {isIncome ? "+" : "-"} {formatMoney(tx.amount)}
                      </span>
                    </div>

                    <button 
                      onClick={() => handleDelete(tx.id)}
                      className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      title="Apagar transação"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}