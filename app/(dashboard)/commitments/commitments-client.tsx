"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, ChevronDown, ChevronUp, Check, Trash2 } from "lucide-react";
import { CommitmentList, CommitmentSummary, type CommitmentView } from "@/components/ui/commitment-summary";
import { DownloadCsv } from "@/components/ui/download-csv";
import { useCategories } from "@/components/ui/categories-provider";
import { notifyDataChanged } from "@/lib/client-data";
import { money, monthLabel } from "@/lib/financial-history";
import { financialDay } from "@/lib/statement";

const PAGE_SIZE = 12;
const filters = [["all", "Todas"], ["paid", "Pagas"], ["pending", "Não pagas"]] as const;

export default function CommitmentsClient({ commitments, today }: { commitments: CommitmentView[]; today: string }) {
  const router = useRouter();
  const { categories } = useCategories();
  const currentMonth = today.slice(0, 7);
  const [items, setItems] = useState(commitments);
  const [open, setOpen] = useState<string[]>([currentMonth]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<"all" | "paid" | "pending">("all");
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const months = useMemo(() => {
    const all = [...new Set([currentMonth, ...items.map(c => financialDay(c.dueDate).slice(0, 7))])];
    return [currentMonth, ...all.filter(m => m !== currentMonth).sort((a, b) => b.localeCompare(a))];
  }, [items, currentMonth]);
  const pageCount = Math.max(1, Math.ceil(months.length / PAGE_SIZE));

  async function change(id: string, action: "pay" | "category" | "delete", category?: string) {
    if (action === "pay" && !window.confirm("Confirmar que esta conta já foi paga? Nenhuma transação será criada.")) return;
    if (action === "delete" && !window.confirm("Encerrar esta conta recorrente e remover as pendências? Pagamentos anteriores serão preservados.")) return;
    setBusy(id); setError("");
    try {
      const response = await fetch(`/api/commitments/${encodeURIComponent(id)}`, {
        method: action === "delete" ? "DELETE" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: action === "delete" ? undefined : JSON.stringify({ action, category }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível salvar.");
      if (action === "delete") {
        const ruleId = items.find(c => c.id === id)?.ruleId;
        setItems(previous => previous.filter(c => c.ruleId !== ruleId || c.status === "paid"));
      } else if (action === "pay") setItems(previous => previous.map(c => c.id === id ? { ...c, status: "paid" } : c));
      else {
        const ruleId = items.find(c => c.id === id)?.ruleId;
        setItems(previous => previous.map(c => c.ruleId === ruleId ? { ...c, category, color: categories.find(x => x.value === category)?.color } : c));
      }
      notifyDataChanged();
      router.refresh();
    } catch (e) { setError(e instanceof Error ? e.message : "Não foi possível salvar."); }
    finally { setBusy(""); }
  }

  function actions(c: CommitmentView) {
    if (!c.ruleId) return null;
    return <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
      <label className="text-xs text-muted-foreground">Categoria <select aria-label={`Categoria de ${c.description}`} value={c.category || "outros"} disabled={busy === c.id} onChange={e => void change(c.id, "category", e.target.value)} className="ml-1 rounded-lg border border-border bg-background px-2 py-1 text-foreground">{categories.filter(x => !x.archived || x.value === c.category).map(x => <option key={x.value} value={x.value}>{x.label}</option>)}</select></label>
      {c.status !== "paid" && <button type="button" disabled={busy === c.id} onClick={() => void change(c.id, "pay")} className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-green-700 hover:bg-green-500/10 disabled:opacity-50"><Check className="h-3 w-3" />Marcar paga</button>}
      <button type="button" disabled={busy === c.id} onClick={() => void change(c.id, "delete")} className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-red-600 hover:bg-red-500/10 disabled:opacity-50"><Trash2 className="h-3 w-3" />Excluir recorrência</button>
    </div>;
  }

  return <div className="mx-auto w-full max-w-5xl space-y-6 p-4 pb-24 md:p-8">
    <header><h1 className="text-2xl font-bold">Contas a pagar</h1><p className="mt-1 text-sm text-muted-foreground">Faturas e compromissos organizados por mês.</p></header>
    <CommitmentSummary commitments={items} today={today} month={currentMonth} formatMoney={money} showLink={false} showMonth />
    <section aria-label="Contas a pagar por mês" className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="font-semibold">Compromissos por mês</h2><div className="flex gap-1 rounded-xl bg-secondary p-1">{filters.map(([value, label]) => <button type="button" key={value} onClick={() => setFilter(value)} aria-pressed={filter === value} className={`rounded-lg px-3 py-2 text-xs ${filter === value ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}>{label}</button>)}</div></div>
      {error && <p role="alert" className="rounded-xl bg-red-500/10 p-3 text-sm text-red-600">{error}</p>}
      {months.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(month => {
        const monthly = items.filter(c => financialDay(c.dueDate).slice(0, 7) === month);
        const visible = monthly.filter(c => filter === "all" || (filter === "paid" ? c.status === "paid" : c.status !== "paid"));
        const overdue = monthly.filter(c => c.status !== "paid" && !c.coveredByCard && financialDay(c.dueDate) < today).reduce((sum, c) => sum + c.amount, 0);
        const expanded = open.includes(month);
        return <article key={month} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <button type="button" aria-expanded={expanded} aria-controls={`month-${month}`} onClick={() => setOpen(previous => expanded ? previous.filter(m => m !== month) : [...previous, month])} className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-accent/40"><span className="flex items-center gap-2 font-semibold capitalize"><CalendarDays className="h-5 w-5 text-primary" />{monthLabel(month)}{month === currentMonth && <span className="text-xs font-normal text-muted-foreground">Atual</span>}</span><span className="flex items-center gap-2 text-xs text-muted-foreground">{monthly.length} contas{expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</span></button>
          {expanded && <div id={`month-${month}`} className="border-t border-border p-4 md:p-5">{filter === "pending" && <p className="mb-4 text-sm font-medium text-red-600">Total atrasado: {money(overdue)}</p>}<CommitmentList commitments={visible} today={today} formatMoney={money} renderActions={actions} /><div className="mt-4 flex justify-end"><DownloadCsv subtle filename={`zion-contas-a-pagar-${month}.csv`} headers={["Descrição", "Vencimento", "Valor (R$)", "Categoria", "Pagamento", "Incluída na fatura"]} rows={monthly.map(c => [c.description, financialDay(c.dueDate), (c.amount / 100).toFixed(2).replace(".", ","), c.category || "outros", c.status === "paid" ? "Pago" : "Pendente", c.coveredByCard ? "Sim" : "Não"])} /></div></div>}
        </article>;
      })}
      {pageCount > 1 && <nav aria-label="Páginas dos meses" className="flex items-center justify-center gap-3 pt-3"><button type="button" disabled={page === 1} onClick={() => setPage(page - 1)} className="rounded-lg border border-border px-3 py-2 text-sm disabled:opacity-40">Anterior</button><span className="text-sm text-muted-foreground">{page} de {pageCount}</span><button type="button" disabled={page === pageCount} onClick={() => setPage(page + 1)} className="rounded-lg border border-border px-3 py-2 text-sm disabled:opacity-40">Próxima</button></nav>}
    </section>
  </div>;
}
