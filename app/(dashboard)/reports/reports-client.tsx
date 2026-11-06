"use client";
import { currencyFromCents, currencyInputCents, formatCurrencyInput } from "@/lib/currency-input";
import { useState } from "react";
import { Target, TrendingUp, Wallet } from "lucide-react";
import { money, monthLabel } from "@/lib/financial-history";
import { DownloadCsv } from "@/components/ui/download-csv";
import { MonthPicker } from "@/components/ui/month-picker";

export type MonthSpending = { month: string; total: number; count: number; categories: { value: string; label: string; color: string; amount: number }[] };
export default function ReportsClient({ history, initialGoals }: { history: MonthSpending[]; initialGoals: Record<string, number> }) {
  const [month, setMonth] = useState(history[0].month);
  const [goals, setGoals] = useState(initialGoals);
  const [amount, setAmount] = useState(initialGoals[history[0].month] ? currencyFromCents(initialGoals[history[0].month]) : "");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  function selectMonth(value: string) { setMonth(value); setAmount(goals[value] ? currencyFromCents(goals[value]) : ""); setMessage(""); }
  const selected = history.find(h => h.month === month)!;
  const previous = history[history.indexOf(selected) + 1];
  const variation = previous?.total ? (selected.total - previous.total) / previous.total * 100 : null;
  const goal = goals[month];
  const percentage = goal ? Math.round(selected.total / goal * 100) : 0;
  const max = Math.max(...history.map(h => h.total), 1);
  async function saveGoal(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMessage("");
    try {
      const cents = currencyInputCents(amount);
      const response = await fetch("/api/spending-goals", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ month, amount: cents }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setGoals(current => ({ ...current, [result.month]: result.amount }));
      setMessage("Meta salva.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Não foi possível salvar."); }
    finally { setBusy(false); }
  }
  return <div className="mx-auto w-full max-w-5xl space-y-6 p-4 pb-24 md:p-8">
    <header><h1 className="text-2xl font-bold">Análises</h1><p className="mt-1 text-sm text-muted-foreground">Entenda seus gastos e planeje os próximos passos.</p></header>
    <DownloadCsv filename="zion-gastos-12-meses.csv" headers={["Mês", "Gastos (R$)", "Movimentações", "Meta (R$)"]} rows={history.map(h => [h.month, (h.total / 100).toFixed(2).replace(".", ","), h.count, goals[h.month] ? (goals[h.month] / 100).toFixed(2).replace(".", ",") : "Não definida"])} />
    <MonthPicker months={history.map(h => h.month)} value={month} onChange={selectMonth} id="spending-month" />
    <div className="grid gap-5 md:grid-cols-2">
      <section className="rounded-3xl bg-gradient-to-br from-primary to-primary/75 p-6 text-primary-foreground"><Wallet className="mb-4 h-6 w-6 opacity-80" /><p className="text-sm capitalize opacity-80">Gastos de {monthLabel(month)}</p><p className="mt-2 text-3xl font-bold">{money(selected.total)}</p><p className="mt-3 text-sm opacity-80">{variation === null ? "Sem base de comparação no mês anterior" : `${variation > 0 ? "+" : ""}${variation.toFixed(1).replace(".", ",")}% em relação ao mês anterior`}</p><p className="mt-1 text-xs opacity-70">{selected.count ? `${selected.count} movimentações registradas` : "Sem movimentações registradas neste mês"}</p></section>
      <section className="rounded-3xl border border-border bg-card p-6"><h2 className="flex items-center gap-2 font-bold"><Target className="h-5 w-5 text-primary" />Meta de gastos do mês</h2>{goal ? <><div className="mt-4 flex justify-between gap-2 text-sm"><span>{money(selected.total)} de {money(goal)}</span><strong className={selected.total > goal ? "text-red-500" : "text-primary"}>{percentage}%</strong></div><div role="progressbar" aria-label="Meta consumida" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.min(percentage, 100)} className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className={`h-full ${selected.total > goal ? "bg-red-500" : "bg-primary"}`} style={{ width: `${Math.min(percentage, 100)}%` }} /></div><p className={`mt-2 text-sm ${selected.total > goal ? "text-red-500" : "text-muted-foreground"}`}>{selected.total > goal ? `${money(selected.total - goal)} acima da meta` : `${money(goal - selected.total)} disponíveis na meta`}</p></> : <p className="mt-3 text-sm text-muted-foreground">Defina quanto pretende gastar em {monthLabel(month)}.</p>}<form onSubmit={saveGoal} className="mt-4"><label className="text-xs font-medium" htmlFor="goal-amount">Meta mensal (R$)</label><div className="mt-1 flex gap-2"><input id="goal-amount" type="text" inputMode="numeric" required value={amount} onChange={e => setAmount(formatCurrencyInput(e.target.value))} className="min-w-0 flex-1 rounded-xl border border-border bg-background p-3" /><button disabled={busy} className="rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground disabled:opacity-50">{busy ? "…" : "Salvar"}</button></div><p role="status" className="mt-2 text-xs text-muted-foreground">{message}</p></form></section>
    </div>
    <section className="rounded-2xl border border-border bg-card p-5"><h2 className="mb-5 flex items-center gap-2 font-bold"><TrendingUp className="h-5 w-5 text-primary" />Evolução dos últimos 12 meses</h2><div className="grid grid-cols-6 gap-x-2 gap-y-5 sm:grid-cols-12">{[...history].reverse().map(h => <button key={h.month} onClick={() => selectMonth(h.month)} aria-pressed={month === h.month} aria-label={`${monthLabel(h.month)}: ${money(h.total)}`} className="min-w-0 rounded-lg p-1 text-center hover:bg-accent"><div className="flex h-24 items-end justify-center"><div className={`w-5 rounded-t-md ${month === h.month ? "bg-primary" : "bg-primary/30"}`} style={{ height: `${h.total / max * 100}%` }} /></div><span className="mt-2 block text-[10px] uppercase text-muted-foreground">{monthLabel(h.month).slice(0,3)}<br />{h.month.slice(0,4)}</span></button>)}</div></section>
    <section className="rounded-2xl border border-border bg-card p-5"><h2 className="mb-4 font-bold">Gastos por categoria</h2><div className="space-y-4">{selected.categories.length ? selected.categories.map(category => <div key={category.value}><div className="flex justify-between gap-3 text-sm"><span className="flex min-w-0 items-center gap-2"><span className="h-2 w-2 shrink-0 rounded-full" style={{ background: category.color }} />{category.label}</span><strong className="shrink-0">{money(category.amount)}</strong></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full" style={{ background: category.color, width: `${selected.total ? category.amount / selected.total * 100 : 0}%` }} /></div></div>) : <p className="text-sm text-muted-foreground">Sem gastos registrados neste mês.</p>}</div><p className="mt-5 text-xs text-muted-foreground">O mês atual considera os gastos até hoje. Pagamentos de fatura não são somados novamente às compras. Meses sem dados importados não comprovam ausência de gastos.</p></section>
  </div>;
}
