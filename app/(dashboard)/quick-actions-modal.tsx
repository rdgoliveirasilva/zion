"use client";

import { currencyFromCents, formatCurrencyInput } from "@/lib/currency-input";
import { useRouter } from "next/navigation";
import { notifyDataChanged } from "@/lib/client-data";
import { useCategories } from "@/components/ui/categories-provider";
import { financialDay } from "@/lib/statement";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import {
  X, ArrowDownLeft, CreditCard,
  CalendarPlus, ArrowUpRight, ChevronLeft, Check, Loader2
} from "lucide-react";

interface QuickActionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ActionType = "menu" | "pagamento" | "cartao" | "conta" | "recebimento";


export function QuickActionsModal({ isOpen, onClose }: QuickActionsModalProps) {
  const router = useRouter();
  const { categories } = useCategories();
  const [currentAction, setCurrentAction] = useState<ActionType>("menu");

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(financialDay());
  const [category, setCategory] = useState("outros");
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [accounts, setAccounts] = useState<{ id: string; name: string; type: string }[]>([]);
  const [accountId, setAccountId] = useState("");
  const [accountsError, setAccountsError] = useState("");
  useEffect(() => {
    if (!isOpen) return;
    const controller = new AbortController();
    setAccountsError("");
    fetch("/api/accounts", { cache: "no-store", signal: controller.signal })
      .then(async res => { if (!res.ok) throw new Error("Não foi possível carregar as contas. Reabra o formulário para tentar novamente."); return res.json(); })
      .then(setAccounts).catch(err => { if (!controller.signal.aborted) setAccountsError(err.message); });
    return () => controller.abort();
  }, [isOpen]);

  const [paymentMode, setPaymentMode] = useState<"avulso" | "conta">("avulso");
  const [pendingBills, setPendingBills] = useState<any[]>([]);
  const [selectedBillId, setSelectedBillId] = useState("");

  useEffect(() => {
    if (isOpen && currentAction === "pagamento") {
      fetch("/api/transactions?type=bill&status=pending", { signal: AbortSignal.timeout(15000) })
        .then(async res => { if (!res.ok) throw new Error("Não foi possível carregar as contas a pagar."); return res.json(); })
        .then(data => setPendingBills(data))
        .catch(err => setErrorMsg(err.message));
    }
  }, [isOpen, currentAction]);

  if (!isOpen) return null;

  const handleClose = () => {
    setAccountId("");
    setDate(financialDay());
    setCurrentAction("menu");
    setDescription("");
    setAmount("");
    setCategory("outros");
    setErrorMsg("");
    setPaymentMode("avulso");
    setSelectedBillId("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;
    setIsSaving(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description,
          amount,
          date,
          category,
          type: currentAction === "conta" ? "bill" : currentAction === "recebimento" ? "income" : "expense",
          accountId: accountId || undefined,
          cardPurchase: currentAction === "cartao",
          status: currentAction === "conta" ? "pending" : "cleared",
          linkedBillId: currentAction === "pagamento" && paymentMode === "conta" ? selectedBillId : undefined,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Erro no servidor (Status ${res.status}).`);
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao salvar");

      toast.success("Lançamento salvo com sucesso.");
      handleClose();
      notifyDataChanged();
      router.refresh();

    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const actions = [
    { id: "pagamento", name: "Registrar pagamento", icon: ArrowDownLeft, color: "text-red-500", bg: "bg-red-500/10" },
    { id: "cartao", name: "Registrar compra no cartão", icon: CreditCard, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: "conta", name: "Adicionar conta a pagar", icon: CalendarPlus, color: "text-amber-500", bg: "bg-amber-500/10" },
    { id: "recebimento", name: "Registrar recebimento", icon: ArrowUpRight, color: "text-green-500", bg: "bg-green-500/10" },
  ];

  const CategorySelect = () => (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground">Categoria</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary appearance-none"
      >
        {categories.filter(c => !c.archived || c.value === category).map(cat => (
          <option key={cat.value} value={cat.value}>{cat.label}</option>
        ))}
      </select>
    </div>
  );

  const accountSelect = (
    <div className="space-y-1">
      <label className="text-xs font-medium text-muted-foreground" htmlFor="transaction-account">{currentAction === "cartao" ? "Vincular ao cartão" : "Vincular à conta (opcional)"}</label>
      <select id="transaction-account" value={accountId} onChange={e => setAccountId(e.target.value)} required={currentAction === "cartao"} className="w-full rounded-xl bg-background border border-border p-3">
        <option value="">{currentAction === "cartao" ? "Selecione o cartão..." : "Sem vínculo"}</option>
        {accounts.filter(a => currentAction === "cartao" ? a.type === "credit" : a.type !== "credit").map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
      </select>
      {accountsError && <p role="alert" className="text-sm text-red-500">{accountsError}</p>}
      <p className="text-xs text-muted-foreground">O vínculo identifica o lançamento. O saldo bancário continua sendo o informado pelo banco.</p>
    </div>
  );

  const renderForm = () => {
    if (currentAction === "pagamento") {
      return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
          <div className="flex bg-secondary p-1 rounded-xl mb-4">
            <button type="button" onClick={() => setPaymentMode("avulso")} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${paymentMode === "avulso" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Pix / Avulso</button>
            <button type="button" onClick={() => setPaymentMode("conta")} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${paymentMode === "conta" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Conta a Pagar</button>
          </div>

          {paymentMode === "conta" && (
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Selecione a conta</label>
              <select
                value={selectedBillId}
                onChange={(e) => {
                  setSelectedBillId(e.target.value);
                  const bill = pendingBills.find(b => b.id === e.target.value);
                  if (bill) {
                    setDescription(bill.description);
                    setAmount(currencyFromCents(bill.amount));
                    setCategory(bill.category || "outros");
                  }
                }}
                required
                className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary appearance-none"
              >
                <option value="">Selecione...</option>
                {pendingBills.map(bill => (
                  <option key={bill.id} value={bill.id}>
                    {bill.description} - R$ {(bill.amount / 100).toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {paymentMode === "avulso" && (
             <div className="space-y-1">
               <label className="text-xs font-medium text-muted-foreground">Descrição</label>
               <input type="text" placeholder="Ex: Pix para João" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
             </div>
          )}

          <CategorySelect />
          {accountSelect}

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Valor (R$)</label>
              <input type="text" inputMode="numeric" placeholder="0,00" value={amount} onChange={(e) => setAmount(formatCurrencyInput(e.target.value))} required readOnly={paymentMode === "conta"} className={`w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary ${paymentMode === "conta" ? "opacity-70" : ""}`} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Data</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary" />
            </div>
          </div>

          {errorMsg && <p className="text-sm text-red-500 font-medium">{errorMsg}</p>}

          <button type="submit" disabled={isSaving} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70">
            {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Check className="h-5 w-5" />}
            {isSaving ? "Salvando..." : "Salvar Pagamento"}
          </button>
        </form>
      );
    }

    if (["conta", "cartao", "recebimento"].includes(currentAction)) {
       return (
        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up">
          <p className="text-sm text-muted-foreground">{currentAction === "conta" ? "Adicione uma conta futura." : currentAction === "cartao" ? "Registre uma compra que ainda não apareceu no cartão." : "Registre um valor recebido."}</p>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Descrição</label>
            <input type="text" placeholder="Ex: Aluguel" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          </div>

          <CategorySelect />
          {currentAction !== "conta" && accountSelect}

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Valor (R$)</label>
              <input type="text" inputMode="numeric" placeholder="0,00" value={amount} onChange={(e) => setAmount(formatCurrencyInput(e.target.value))} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">{currentAction === "conta" ? "Vencimento" : "Data"}</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full rounded-xl bg-background border border-border p-3 text-foreground focus:outline-none focus:border-primary" />
            </div>
          </div>
          {errorMsg && <p className="text-sm text-red-500 font-medium">{errorMsg}</p>}
          <button type="submit" disabled={isSaving} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-70">
            {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Check className="h-5 w-5" />}
            {isSaving ? "Salvando..." : currentAction === "conta" ? "Salvar Conta" : currentAction === "cartao" ? "Salvar Compra" : "Salvar Recebimento"}
          </button>
        </form>
       );
    }

    return (
      <div className="flex flex-col items-center justify-center py-10 text-center animate-slide-up">
        <p className="text-muted-foreground mb-2">Formulário de {actions.find(a => a.id === currentAction)?.name}</p>
        <p className="text-sm text-muted-foreground/70">Em construção...</p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm md:items-center">
      <div className="absolute inset-0" onClick={isSaving ? undefined : handleClose} />

      <div className="relative z-10 w-full max-w-md rounded-t-3xl bg-card p-6 text-foreground animate-slide-up md:rounded-3xl border border-border shadow-2xl max-h-[90vh] overflow-y-auto">

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {currentAction !== "menu" && (
              <button disabled={isSaving} onClick={() => setCurrentAction("menu")} className="rounded-full bg-secondary p-2 text-muted-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <h2 className="text-xl font-bold">
              {currentAction === "menu" ? "O que deseja fazer?" : actions.find(a => a.id === currentAction)?.name}
            </h2>
          </div>
          <button onClick={isSaving ? undefined : handleClose} className="rounded-full bg-secondary p-2 text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {currentAction === "menu" ? (
          <div className="grid grid-cols-2 gap-3 animate-slide-up">
            {actions.map((action) => (
              <button key={action.id} onClick={() => { setAccountId(""); setErrorMsg(""); setCurrentAction(action.id as ActionType); }} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-secondary/50 p-4 transition-all hover:bg-secondary hover:border-border/80">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${action.bg}`}>
                  <action.icon className={`h-6 w-6 ${action.color}`} />
                </div>
                <span className="text-sm font-medium text-center leading-tight text-foreground">{action.name}</span>
              </button>
            ))}
          </div>
        ) : (
          renderForm()
        )}
      </div>
    </div>
  );
}
