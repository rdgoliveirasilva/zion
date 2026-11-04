"use client";

import { notifyDataChanged } from "@/lib/client-data";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCategories } from "@/components/ui/categories-provider";
import { financialDay, formatFinancialDate } from "@/lib/statement";
import { isCardBillPayment } from "@/lib/commitment-rules";
import { TransactionAccountTags } from "./transaction-account-tags";

export type EditableTransaction = {
  id: string; description: string; amount: number; date: Date | string;
  type: string; category?: string | null; isBillPayment?: boolean;
  account?: { name: string; type: string } | null;
};

export function TransactionDetails({ transaction: tx, onClose, onSaved }: {
  transaction: EditableTransaction; onClose: () => void; onSaved: () => void;
}) {
  const { categories } = useCategories();
  const dialog = useRef<HTMLDialogElement>(null);
  const [category, setCategory] = useState(tx.category || "outros");
  const [step, setStep] = useState<"category" | "question" | "rule">("category");
  const [dueDay, setDueDay] = useState(Number(financialDay(tx.date).slice(8)));
  const [intervalMonths, setIntervalMonths] = useState(1);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const canRecur = tx.type === "expense" && !tx.isBillPayment && !isCardBillPayment(tx.description);
  useEffect(() => { dialog.current?.showModal(); }, []);
  async function save(recurring: boolean) {
    setSaving(true); setError("");
    try {
      const response = await fetch("/api/transactions", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: tx.id, category, recurring, dueDay, intervalMonths }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Não foi possível salvar.");
      notifyDataChanged(); onSaved(); onClose();
    } catch (e) { setError(e instanceof Error ? e.message : "Tente novamente."); }
    finally { setSaving(false); }
  }
  const input = "w-full rounded-xl border border-border bg-background p-3 text-foreground";
  return createPortal(<dialog ref={dialog} onCancel={e => { e.preventDefault(); if (!saving) onClose(); }} aria-labelledby="transaction-title" className="fixed inset-x-0 bottom-0 top-auto m-0 max-h-[90dvh] w-full max-w-none overflow-y-auto rounded-t-3xl border border-border bg-card p-6 text-foreground shadow-xl backdrop:bg-black/60 sm:inset-0 sm:m-auto sm:max-w-lg sm:rounded-3xl">
    <div className="flex items-start justify-between gap-4"><h2 id="transaction-title" className="text-xl font-bold">Detalhes da movimentação</h2><button disabled={saving} onClick={onClose} aria-label="Fechar detalhes" className="rounded-lg px-3 py-1 hover:bg-accent">✕</button></div>
    <p className="mt-5 break-words font-medium">{tx.description}</p>
    <p className="mt-1 text-2xl font-bold">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(tx.amount / 100)}</p>
    <p className="text-sm text-muted-foreground">{formatFinancialDate(tx.date)}</p><TransactionAccountTags account={tx.account} />
    <label className="mt-5 block space-y-2 text-sm">Categoria<select disabled={saving} value={category} onChange={e => { setCategory(e.target.value); setStep(canRecur ? "question" : "category"); }} className={input}>{categories.filter(c => !c.archived || c.value === category).map(c => <option key={c.value} value={c.value}>{c.label}</option>)}</select></label>
    {step === "question" && <div className="mt-5 space-y-3"><p className="font-medium">Deseja transformar esta despesa em uma conta a pagar recorrente?</p><div className="flex gap-3"><button disabled={saving} onClick={() => save(false)} className="flex-1 rounded-xl border border-border p-3">Não, salvar categoria</button><button onClick={() => setStep("rule")} className="flex-1 rounded-xl bg-primary p-3 text-primary-foreground">Sim</button></div></div>}
    {step === "rule" && <div className="mt-5 space-y-4"><label className="block text-sm">Dia de vencimento<input type="number" min={1} max={31} value={dueDay} onChange={e => setDueDay(Number(e.target.value))} className={input} /></label><label className="block text-sm">Frequência<select value={intervalMonths} onChange={e => setIntervalMonths(Number(e.target.value))} className={input}><option value={1}>Mensal</option><option value={3}>Trimestral</option><option value={12}>Anual</option></select></label><p className="text-sm text-muted-foreground">Serão vinculadas movimentações da mesma conta, descrição e valor no período correspondente. Correspondências ambíguas ficam pendentes. Compras no cartão ficam incluídas na fatura, sem somar duas vezes. Uma regra já existente mantém seu calendário.</p><button disabled={saving || dueDay < 1 || dueDay > 31 || !Number.isInteger(dueDay)} onClick={() => save(true)} className="w-full rounded-xl bg-primary p-3 font-medium text-primary-foreground disabled:opacity-50">{saving ? "Salvando…" : "Confirmar categoria e recorrência"}</button><button disabled={saving} onClick={() => save(false)} className="w-full p-2 text-sm">Salvar somente categoria</button></div>}
    {step === "category" && <button disabled={saving} onClick={() => canRecur ? setStep("question") : save(false)} className="mt-5 w-full rounded-xl bg-primary p-3 text-primary-foreground">{saving ? "Salvando…" : "Salvar categoria"}</button>}
    {error && <p role="alert" className="mt-3 text-sm text-red-500">{error}</p>}
  </dialog>, document.body);
}
