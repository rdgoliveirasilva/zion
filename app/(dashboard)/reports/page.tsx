import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { spendingSummary } from "@/lib/commitment-rules";
import { financialDay } from "@/lib/statement";
import { CATEGORIES } from "@/lib/categories";

export const dynamic = "force-dynamic";
export default async function ReportsPage() {
  const transactions = await prisma.transaction.findMany({ where: { date: { lte: new Date() } } });
  const today = financialDay(), summary = spendingSummary(transactions, today);
  const money = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value / 100);
  return <main className="mx-auto w-full max-w-4xl space-y-6 p-4 pb-24 md:p-8"><Link href="/" className="text-sm text-primary">← Início</Link><h1 className="text-2xl font-bold">Análises de gastos</h1><section className="rounded-2xl border border-border bg-card p-6"><p className="text-muted-foreground">Gastos do mês</p><p className="mt-2 text-3xl font-bold">{money(summary.current)}</p><p className="mt-2 text-sm text-muted-foreground">Mês anterior: {money(summary.previous)} · {summary.variation === null ? "Sem base de comparação" : `${summary.variation.toFixed(1).replace(".", ",")}% de variação`}</p></section><section className="rounded-2xl border border-border bg-card p-6"><h2 className="mb-4 text-lg font-bold">Por categoria</h2><div className="space-y-4">{CATEGORIES.map(category => {
    const total = spendingSummary(transactions.filter(tx => (tx.category || "outros") === category.value), today).current;
    return <div key={category.value}><div className="flex justify-between text-sm"><span>{category.label}</span><strong>{money(total)}</strong></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full bg-primary" style={{ width: `${summary.current ? total / summary.current * 100 : 0}%` }} /></div></div>;
  })}</div><p className="mt-5 text-xs text-muted-foreground">Pagamentos de fatura são excluídos para evitar contar novamente as compras. Comparação do mês corrente até hoje com o mês anterior completo.</p><Link href="/transactions" className="mt-4 inline-block text-sm text-primary">Ver transações</Link></section></main>;
}
