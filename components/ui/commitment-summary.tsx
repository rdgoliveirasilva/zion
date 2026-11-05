import Link from "next/link";
import type { ReactNode } from "react";
import { CreditCard, Repeat2 } from "lucide-react";
import { commitmentColor } from "@/lib/financial-history";
import { monthLabel } from "@/lib/financial-history";
import { dueStatus } from "@/lib/commitment-rules";
import { financialDay, formatFinancialDate } from "@/lib/statement";

export type CommitmentView = { id: string; description: string; amount: number; dueDate: Date | string; status: string; coveredByCard: boolean; color?: string; source?: string; estimated?: boolean; ruleId?: string | null; category?: string; manualOverride?: boolean };
const statuses = {
  paid: ["Pago", "text-green-600 bg-green-500/10"],
  soon: ["Vence em até 7 dias", "text-yellow-600 bg-yellow-500/10"],
  today: ["Vence hoje", "text-orange-600 bg-orange-500/10"],
  overdue: ["Atrasado · pagamento não identificado", "text-red-600 bg-red-500/10"],
  future: ["Pendente", "text-muted-foreground bg-secondary"],
};
export function CommitmentList({ commitments, today, formatMoney, renderActions }: { commitments: CommitmentView[]; today: string; formatMoney: (amount: number) => string; renderActions?: (commitment: CommitmentView) => ReactNode }) {
  return <div className="space-y-3">{commitments.length ? commitments.map(c => {
    const [label, color] = statuses[dueStatus(c.status, financialDay(c.dueDate), today)];
    const accent = commitmentColor(c.description, c.color);
    const Icon = c.source === "card" ? CreditCard : Repeat2;
    return <div key={c.id} style={{ borderLeftColor: accent, backgroundImage: `linear-gradient(120deg, ${accent}14, transparent 80%)` }} className="rounded-2xl border border-l-4 border-border p-4"><div className="mb-3 flex items-center gap-2"><span className="rounded-xl p-2" style={{ color: accent, background: accent + "20" }}><Icon className="h-5 w-5" /></span><span className="text-xs font-medium text-muted-foreground">{c.source === "card" ? "Cartão de crédito" : "Conta a pagar"}{c.estimated && " · Estimativa"}{c.manualOverride && " · Ajuste manual"}</span></div><div className="flex justify-between gap-3"><p className="min-w-0 break-words font-medium">{c.description}</p><span className="shrink-0 font-semibold">{formatMoney(c.amount)}</span></div><p className="mt-1 text-xs text-muted-foreground">{formatFinancialDate(c.dueDate)}{c.coveredByCard && " · Incluída na fatura"}</p><span className={`mt-2 inline-block rounded-lg px-2 py-1 text-xs ${color}`}>{label}</span>{renderActions?.(c)}</div>;
  }) : <p className="py-4 text-sm text-muted-foreground">Nenhum compromisso neste período.</p>}</div>;
}
export function CommitmentSummary({ commitments, today, month = today.slice(0,7), formatMoney, showLink = true, showMonth = false }: { commitments: CommitmentView[]; today: string; month?: string; formatMoney: (amount: number) => string; showLink?: boolean; showMonth?: boolean }) {
  const monthly = commitments.filter(c => !c.coveredByCard && financialDay(c.dueDate).slice(0, 7) === month);
  const total = monthly.reduce((s, c) => s + c.amount, 0), paid = monthly.filter(c => c.status === "paid").reduce((s, c) => s + c.amount, 0);
  const progress = total ? Math.round(paid / total * 100) : 0;
  return <section className="rounded-2xl border border-border bg-card p-6 shadow-sm"><h3 className="text-lg font-bold">Contas a pagar</h3>{showMonth && <p className="mt-1 text-xs capitalize text-muted-foreground">{monthLabel(month)}</p>}<p className="mt-3 text-sm text-muted-foreground">Total a pagar</p><p className="text-2xl font-bold">{formatMoney(total)}</p><div className="mt-4 flex justify-between gap-2 text-sm"><span>Já pago<br /><strong className="text-green-600">{formatMoney(paid)}</strong></span><span>Restante<br /><strong>{formatMoney(total - paid)}</strong></span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-label="Compromissos pagos" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}><div className="h-full bg-primary" style={{ width: `${progress}%` }} /></div><p className="mt-1 text-right text-xs text-muted-foreground">{progress}% pago</p>{showLink && <Link href="/commitments" className="mt-4 block rounded-xl bg-primary/10 p-3 text-center text-sm font-medium text-primary">Ver contas a pagar</Link>}</section>;
}
