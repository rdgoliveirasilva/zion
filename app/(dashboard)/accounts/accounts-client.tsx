"use client";

import type { CurrentCardBill } from "@/lib/card-bill";
import { useJsonResource, notifyDataChanged } from "@/lib/client-data";
import { useState } from "react";
import { 
  Plus, Landmark, Trash2, Loader2, Wallet, 
  CreditCard, PiggyBank
} from "lucide-react";
import { PluggyConnectButton } from "@/components/ui/pluggy-connect";

interface Account {
  id: string;
  name: string;
  balance: number;
  type: string;
  currentBill?: CurrentCardBill | null;
}

export default function AccountsManager({ embedded = false }: { embedded?: boolean }) {
  const { data, loading: isLoading, error: loadError, reload: fetchAccounts } = useJsonResource<Account[]>("/api/accounts");
  const accounts = data || [];
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [type, setType] = useState("checking");
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, balance, type }),
      });

      if (!res.ok) throw new Error("Erro ao criar conta");

      setName("");
      setBalance("");
      setIsModalOpen(false);
      notifyDataChanged();
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja apagar esta conta?")) return;

    try {
      const res = await fetch(`/api/accounts?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        notifyDataChanged();
      }
    } catch (error) {
      alert("Erro ao deletar conta.");
    }
  };

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value / 100);
  };

  // Separando saldo de contas e cartões
  const checkingBalance = accounts
    .filter(acc => acc.type !== "credit")
    .reduce((acc, account) => acc + account.balance, 0);

  const creditBalance = accounts
    .filter(acc => acc.type === "credit")
    .reduce((acc, account) => acc + (account.currentBill?.amount ?? 0), 0);
  const hasBills = accounts.some(a => a.currentBill);

  const getIcon = (type: string) => {
    switch (type) {
      case "credit": return <CreditCard className="h-6 w-6" />;
      case "savings": return <PiggyBank className="h-6 w-6" />;
      default: return <Landmark className="h-6 w-6" />;
    }
  };

  return (
    <div className={embedded ? "w-full" : "mx-auto w-full max-w-5xl p-4 md:p-8 animate-slide-up pb-24 md:pb-8"}>
      
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Minhas Contas</h1>
          <p className="mt-1 text-sm text-muted-foreground">Gerencie suas contas bancárias e cartões.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <PluggyConnectButton onSynced={fetchAccounts} />
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Plus className="h-5 w-5" />
            Conta Manual
          </button>
        </div>
      </header>

      {/* CARDS DE SALDO */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        {/* Card de Contas */}
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-lg flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary-foreground/80">Saldo em Contas</p>
            <h2 className="mt-1 text-3xl font-bold">{formatMoney(checkingBalance)}</h2>
          </div>
          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Wallet className="h-6 w-6" />
          </div>
        </div>

        {/* Card de Cartão de Crédito */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Faturas do mês disponíveis</p>
            <h2 className="mt-1 text-3xl font-bold text-amber-700 dark:text-amber-400">{hasBills ? formatMoney(creditBalance) : "Não disponível"}</h2>
          </div>
          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
            <CreditCard className="h-6 w-6" />
          </div>
        </div>
      </div>

      {loadError && <div role="alert" className="mb-4 rounded-xl border border-border p-4 text-sm">{loadError} <button onClick={fetchAccounts} className="ml-2 text-primary underline">Tentar novamente</button></div>}
      {/* Lista de Contas */}
      {isLoading && !data ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : accounts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-card rounded-2xl border border-border">
          <Landmark className="h-10 w-10 text-muted-foreground/50 mb-2" />
          <p className="text-muted-foreground">Nenhuma conta cadastrada.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {accounts.map((account) => (
            <div key={account.id} className="group relative flex flex-col rounded-2xl bg-card p-5 border border-border shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${account.type === "credit" ? "bg-amber-500/10 text-amber-500" : "bg-primary/10 text-primary"}`}>
                  {getIcon(account.type)}
                </div>
                <button 
                  onClick={() => handleDelete(account.id)}
                  className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-semibold text-foreground text-lg">{account.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 capitalize">
                {account.type === "checking" ? "Conta Corrente" : account.type === "credit" ? "Cartão de Crédito" : "Poupança"}
              </p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{account.type === "credit" ? (account.currentBill?.estimated ? "Fatura aberta (estimada)" : "Fatura do mês") : "Saldo atual"}</span>
                <span className={`font-bold ${account.type === "credit" ? "text-amber-600 dark:text-amber-400" : "text-foreground"}`}>
                  {account.type === "credit" ? (account.currentBill ? formatMoney(account.currentBill.amount) : "Não disponível") : formatMoney(account.balance)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Nova Conta */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center">
          <div className="absolute inset-0" onClick={() => setIsModalOpen(false)} />
          
          <div className="relative z-10 w-full max-w-md rounded-t-3xl bg-card p-6 text-foreground animate-slide-up md:rounded-3xl border border-border shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Adicionar Conta</h2>
              <button onClick={() => setIsModalOpen(false)} className="rounded-full bg-secondary p-2 text-muted-foreground hover:text-foreground">
                <Plus className="h-5 w-5 rotate-45" />
              </button>
            </div>

            <form onSubmit={handleCreateAccount} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Nome do Banco / Conta</label>
                <input type="text" placeholder="Ex: Itaú, Nubank..." value={name} onChange={(e) => setName(e.target.value)} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Tipo de Conta</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary appearance-none">
                  <option value="checking">Conta Corrente</option>
                  <option value="credit">Cartão de Crédito</option>
                  <option value="savings">Poupança / Investimento</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Saldo Atual (R$)</label>
                <input type="text" placeholder="0,00" value={balance} onChange={(e) => setBalance(e.target.value)} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary" />
              </div>

              {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}

              <button type="submit" disabled={isSaving} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70">
                {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
                {isSaving ? "Salvando..." : "Salvar Conta"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
