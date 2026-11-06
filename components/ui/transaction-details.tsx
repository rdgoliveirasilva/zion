"use client";

import { currencyFromCents, currencyInputCents, formatCurrencyInput } from "@/lib/currency-input";
import { loadClientData, notifyDataChanged } from "@/lib/client-data";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCategories } from "@/components/ui/categories-provider";
import { financialDay, formatFinancialDate } from "@/lib/statement";
import { isCardBillPayment } from "@/lib/commitment-rules";
import { TransactionAccountTags } from "./transaction-account-tags";

export type EditableTransaction = {
  id: string; description: string; amount: number; date: Date | string;
  accountId?: string | null;
  categorySource?: string; pluggyTransactionId?: string | null;
  type: string; category?: string | null; isBillPayment?: boolean;
  account?: { name: string; type: string } | null;
};

export function TransactionDetails({ transaction: tx, onClose, onSaved }: {
  transaction: EditableTransaction; onClose: () => void; onSaved: () => void;
}) {
  const { categories } = useCategories();
  const dialog = useRef<HTMLDialogElement>(null);
  const manual = tx.categorySource === "manual" && !tx.pluggyTransactionId;
  const [accountId, setAccountId] = useState(tx.accountId || "");
  const [accounts, setAccounts] = useState<{ id: string; name: string; type: string }[]>([]);
  const [accountsLoading, setAccountsLoading] = useState(manual);
  const [accountsError, setAccountsError] = useState("");
  useEffect(() => {
    if (!manual) return;
    const controller = new AbortController();
    loadClientData<{ id: string; name: string; type: string }[]>("/api/accounts?view=options")
      .then(data => { if (!controller.signal.aborted) setAccounts(data); })
      .catch(e => { if (!controller.signal.aborted) setAccountsError(e.message); })
      .finally(() => { if (!controller.signal.aborted) setAccountsLoading(false); });
    return () => controller.abort();
  }, [manual]);
  const [description, setDescription] = useState(tx.description);
  const [amount, setAmount] = useState(currencyFromCents(tx.amount));
  const [category, setCategory] = useState(tx.category || "outros");
  const [step, setStep] = useState<"category" | "question" | "rule">("category");
  const [dueDay, setDueDay] = useState(Number(financialDay(tx.date).slice(8)));
  const [intervalMonths, setIntervalMonths] = useState(1);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const canRecur = tx.type === "expense" && !tx.isBillPayment && !isCardBillPayment(tx.description);
  useEffect(() => { dialog.current?.showModal(); }, []);
  async function save(recurring: boolean) {
    if (saving) return;
    if (manual && (!description.trim() || !Number.isSafeInteger(currencyInputCents(amount)) || currencyInputCents(amount) <= 0)) { setError("Informe nome e valor válidos."); return; }
    setSaving(true); setError("");
    try {
      const response = await fetch("/api/transactions", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: tx.id, category, recurring, dueDay, intervalMonths, ...(manual ? { description: description.trim(), amount: currencyInputCents(amount), accountId: accountId || null } : {}) }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Não foi possível salvar.");
      notifyDataChanged(); onSaved(); onClose();
    } catch (e) { setError(e instanceof Error ? e.message : "Tente novamente."); }
    finally { setSaving(false); }
  }
  async function remove() {
    if (saving || !window.confirm("Apagar este lançamento manual? Se houver uma conta a pagar vinculada, ela voltará a ficar pendente.")) return;
    setSaving(true); setError("");
    try {
      const response = await fetch("/api/transactions", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: tx.id }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Não foi possível apagar.");
      notifyDataChanged({ removedTransactionId: tx.id }); onSaved(); onClose();
    } catch (e) { setError(e instanceof Error ? e.message : "Tente novamente."); }
    finally { setSaving(false); }
  }
  const input = "w-full rounded-xl border border-border bg-background p-3 text-foreground";
  return createPortal(<dialog ref={dialog} onCancel={e => { e.preventDefault(); if (!saving) onClose(); }} aria-labelledby="transaction-title" className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-[90dvh] w-full max-w-none overflow-y-auto rounded-t-3xl border border-border bg-card p-6 text-foreground shadow-xl backdrop:bg-black/60 sm:inset-0 sm:m-auto sm:max-w-lg sm:rounded-3xl">
    <div className="flex items-start justify-between gap-4"><h2 id="transaction-title" className="text-xl font-bold">Detalhes da movimentação</h2><button disabled={saving} onClick={onClose} aria-label="Fechar detalhes" className="rounded-lg px-3 py-1 hover:bg-accent">✕</button></div>
    <p className="mt-5 break-words font-medium">{tx.description}</p>
    <p className="mt-1 text-2xl font-bold">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(tx.amount / 100)}</p>
    <p className="text-sm text-muted-foreground">{formatFinancialDate(tx.date)}</p><TransactionAccountTags account={tx.account} />
    {manual && <div className="mt-5 space-y-4">
      <label className="block space-y-2 text-sm">Nome<input disabled={saving} maxLength={200} value={description} onChange={e => setDescription(e.target.value)} className={input} /></label>
      <label className="block space-y-2 text-sm">Valor (R$)<input disabled={saving} type="text" inputMode="numeric" value={amount} onChange={e => setAmount(formatCurrencyInput(e.target.value))} className={input} /></label>
      <label className="block space-y-2 text-sm">Vínculo com conta ou cartão<select disabled={saving || accountsLoading || !!accountsError} value={accountId} onChange={e => setAccountId(e.target.value)} className={input}>
        <option value="">Sem vínculo</option>
        {!accounts.some(a => a.id === accountId) && accountId && <option value={accountId}>{tx.account?.name || "Vínculo atual"}</option>}
        {accounts.filter(a => tx.type !== "income" || a.type !== "credit").map(a => <option key={a.id} value={a.id}>{a.name} — {a.type === "credit" ? "Cartão" : "Conta"}</option>)}
      </select></label>
      {accountsLoading && <p className="text-xs text-muted-foreground">Carregando contas…</p>}
      {accountsError && <p role="alert" className="text-sm text-red-500">{accountsError}</p>}
      <p className="text-xs text-muted-foreground">Você pode trocar ou remover o vínculo. O saldo bancário não é alterado. Se houver uma conta a pagar vinculada, ela voltará a ficar pendente ao trocar o vínculo.</p>
    </div>}
    <label className="mt-5 block space-y-2 text-sm">Categoria<select disabled={saving} value={category} onChange={e => { setCategory(e.target.value); setStep(canRecur ? "question" : "category"); }} className={input}>{categories.filter(c => !c.archived || c.value === category).map(c => <option key={c.value} value={c.value}>{c.label}</option>)}</select></label>
    {step === "question" && <div className="mt-5 space-y-3"><p className="font-medium">Deseja transformar esta despesa em uma conta a pagar recorrente?</p><div className="flex gap-3"><button disabled={saving} onClick={() => save(false)} className="flex-1 rounded-xl border border-border p-3">{manual ? "Não, salvar alterações" : "Não, salvar categoria"}</button><button onClick={() => setStep("rule")} className="flex-1 rounded-xl bg-primary p-3 text-primary-foreground">Sim</button></div></div>}
    {step === "rule" && <div className="mt-5 space-y-4"><label className="block text-sm">Dia de vencimento<input type="number" min={1} max={31} value={dueDay} onChange={e => setDueDay(Number(e.target.value))} className={input} /></label><label className="block text-sm">Frequência<select value={intervalMonths} onChange={e => setIntervalMonths(Number(e.target.value))} className={input}><option value={1}>Mensal</option><option value={3}>Trimestral</option><option value={12}>Anual</option></select></label><p className="text-sm text-muted-foreground">Serão vinculadas movimentações da mesma conta, descrição e valor no período correspondente. Correspondências ambíguas ficam pendentes. Compras no cartão ficam incluídas na fatura, sem somar duas vezes. Uma regra já existente mantém seu calendário.</p><button disabled={saving || dueDay < 1 || dueDay > 31 || !Number.isInteger(dueDay)} onClick={() => save(true)} className="w-full rounded-xl bg-primary p-3 font-medium text-primary-foreground disabled:opacity-50">{saving ? "Salvando…" : "Confirmar categoria e recorrência"}</button><button disabled={saving} onClick={() => save(false)} className="w-full p-2 text-sm">{manual ? "Salvar sem recorrência" : "Salvar somente categoria"}</button></div>}
    {step === "category" && <button disabled={saving} onClick={() => manual ? save(false) : canRecur ? setStep("question") : save(false)} className="mt-5 w-full rounded-xl bg-primary p-3 text-primary-foreground">{saving ? "Salvando…" : manual ? "Salvar alterações" : "Salvar categoria"}</button>}
    {manual && <button disabled={saving} onClick={remove} className="mt-3 w-full rounded-xl border border-red-500/40 p-3 text-red-500 disabled:opacity-50">{saving ? "Processando…" : "Apagar lançamento manual"}</button>}
    {error && <p role="alert" className="mt-3 text-sm text-red-500">{error}</p>}
  </dialog>, document.body);
}
