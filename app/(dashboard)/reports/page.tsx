import { prisma } from "@/lib/prisma";
import { financialDay } from "@/lib/statement";
import { lastTwelveMonths, monthlyExpenses } from "@/lib/financial-history";
import ReportsClient from "./reports-client";
export const dynamic = "force-dynamic";
export default async function ReportsPage() {
  const today = financialDay();
  const months = lastTwelveMonths(today);
  const [transactions, categories, goals] = await Promise.all([
    prisma.transaction.findMany({ where: { date: { gte: new Date(months[11] + "-01T03:00:00Z"), lte: new Date() } } }),
    prisma.category.findMany(),
    prisma.spendingGoal.findMany({ where: { month: { in: months } } }),
  ]);
  const history = months.map(month => {
    const expenses = monthlyExpenses(transactions, month, today);
    const totals = new Map<string, number>();
    for (const tx of expenses) totals.set(tx.category || "outros", (totals.get(tx.category || "outros") || 0) + tx.amount);
    return { month, total: expenses.reduce((sum, t) => sum + t.amount, 0), count: expenses.length,
      categories: [...totals.entries()].map(([value, amount]) => { const category = categories.find(c => c.value === value); return { value, amount, label: category?.label || value, color: category?.color || "#6b7280" }; }).sort((a,b) => b.amount - a.amount) };
  });
  return <ReportsClient history={history} initialGoals={Object.fromEntries(goals.map(g => [g.month, g.amount]))} />;
}
