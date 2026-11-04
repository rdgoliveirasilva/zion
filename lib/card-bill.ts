export type CurrentCardBill = { amount: number; dueDate: string };
type Bill = { id: string; dueDate: Date | string; totalAmount: number };
// Due dates are calendar dates, not timestamps: preserve the provider's YYYY-MM-DD.
export function selectCurrentBill(bills: Bill[], month: string): CurrentCardBill | null {
  const unique = [...new Map(bills.map(b => [b.id, b])).values()];
  const current = unique.filter(b => (typeof b.dueDate === "string" ? b.dueDate : b.dueDate.toISOString()).slice(0, 7) === month);
  if (!current.length) return null;
  const dates = current.map(b => (typeof b.dueDate === "string" ? b.dueDate : b.dueDate.toISOString()).slice(0, 10)).sort();
  return { amount: current.reduce((sum, b) => sum + Math.round(b.totalAmount * 100), 0), dueDate: dates[0] };
}
