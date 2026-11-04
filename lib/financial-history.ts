import { financialDay } from "./statement";
import { isCardBillPayment, monthOffset, PAID_STATUSES } from "./commitment-rules";

export const money = (cents: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);
export function lastTwelveMonths(today = financialDay()) {
  return Array.from({ length: 12 }, (_, i) => monthOffset(today.slice(0,7), -i));
}
export function monthLabel(month: string) {
  return new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(month + "-15T12:00:00Z"));
}
type Movement = { amount: number; date: string | Date; type: string; status: string; description: string; isBillPayment?: boolean; category?: string | null };
export function monthlyExpenses(transactions: Movement[], month: string, today = financialDay()) {
  return transactions.filter(t => {
    const day = financialDay(t.date);
    return day <= today && day.slice(0,7) === month && !t.isBillPayment && !isCardBillPayment(t.description) &&
      (t.type === "expense" || (t.type === "bill" && PAID_STATUSES.has(t.status)));
  });
}
export function commitmentColor(description: string, categoryColor = "#8b5cf6") {
  const name = description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (/nubank|\bnu\b/.test(name)) return "#820ad1";
  if (/itau/.test(name)) return "#ea580c";
  return categoryColor;
}
export function institutionLabel(names: string[]) {
  const normalized = names.join(" ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (/nubank|\bnu\b/.test(normalized)) return "Nubank";
  if (/itau/.test(normalized)) return "Itaú";
  return "";
}

type Invoice = { id: string; key: string; amount: number; dueDate: Date | string; transactionId?: string | null; status: string };
type Payment = Movement & { id: string; accountId: string | null; commitment?: { id: string } | null };
// Only confirmed payments on this card, with the exact amount and calendar
// period, qualify. A payment must identify exactly one unpaid invoice.
export function invoicePaymentMatches(invoices: Invoice[], payments: Payment[], today: string) {
  const pairs = invoices.filter(b => b.status !== "paid" && b.amount > 0).map(bill => {
    const cardId = bill.key.split(":")[1];
    const month = financialDay(bill.dueDate).slice(0,7);
    const candidates = payments.filter(tx => tx.accountId === cardId && tx.amount === bill.amount &&
      tx.type === "income" && PAID_STATUSES.has(tx.status) && financialDay(tx.date) <= today &&
      financialDay(tx.date).slice(0,7) === month && (tx.isBillPayment || isCardBillPayment(tx.description)) &&
      (!tx.commitment || tx.commitment.id === bill.id));
    return { bill, candidates };
  });
  return pairs.flatMap(({ bill, candidates }) => candidates.length === 1 &&
    pairs.filter(p => p.candidates.some(t => t.id === candidates[0].id)).length === 1
    ? [{ commitmentId: bill.id, transactionId: candidates[0].id }] : []);
}
