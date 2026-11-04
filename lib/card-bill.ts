export type CurrentCardBill = { amount: number; dueDate: string; estimated?: boolean; reconciliationCents?: number };
type Bill = { id: string; dueDate: Date | string; totalAmount: number };
// Due dates are calendar dates, not timestamps: preserve the provider's YYYY-MM-DD.
export function selectCurrentBill(bills: Bill[], month: string): CurrentCardBill | null {
  const unique = [...new Map(bills.map(b => [b.id, b])).values()];
  const current = unique.filter(b => (typeof b.dueDate === "string" ? b.dueDate : b.dueDate.toISOString()).slice(0, 7) === month);
  if (!current.length) return null;
  const dates = current.map(b => (typeof b.dueDate === "string" ? b.dueDate : b.dueDate.toISOString()).slice(0, 10)).sort();
  return { amount: current.reduce((sum, b) => sum + Math.round(b.totalAmount * 100), 0), dueDate: dates[0] };
}


type ForecastTransaction = {
  id: string;
  amount: number;
  type: string;
  description: string;
  operationType?: string | null;
  status?: string;
  creditCardMetadata?: { billForecastDate?: string; billId?: string } | null;
};

// Forecast period identifies the actual installment's bill, not the original purchase month.
export function estimateCurrentBill(transactions: ForecastTransaction[], bills: Bill[], month: string): CurrentCardBill | null {
  const unique = [...new Map(transactions.map(tx => [tx.id, tx])).values()];
  const billMonths = new Map(bills.map(b => [b.id, (typeof b.dueDate === "string" ? b.dueDate : b.dueDate.toISOString()).slice(0, 7)]));
  const current = unique.filter(tx => {
    const metadata = tx.creditCardMetadata;
    if (metadata?.billForecastDate !== month) return false;
    if (metadata.billId && billMonths.has(metadata.billId) && billMonths.get(metadata.billId) !== month) return false;
    const description = tx.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
    // Payments settle the previous invoice; they are not refunds of current purchases.
    if (tx.type === "CREDIT" && (tx.operationType === "PAGAMENTO_FATURA" || /^(pagamento recebido|pagamento de fatura|pagamento da fatura)$/.test(description))) return false;
    return true;
  });
  if (!current.length) return null;
  const latest = [...bills].sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime())[0];
  if (!latest) return null; // Do not invent a due date without a known billing schedule.
  const dueDay = Number((typeof latest.dueDate === "string" ? latest.dueDate : latest.dueDate.toISOString()).slice(8, 10));
  const [year, monthNumber] = month.split("-").map(Number);
  const day = Math.min(dueDay, new Date(Date.UTC(year, monthNumber, 0)).getUTCDate());
  return {
    amount: current.reduce((sum, tx) => sum + (tx.type === "CREDIT" ? -1 : 1) * Math.round(Math.abs(tx.amount) * 100), 0),
    dueDate: month + "-" + String(day).padStart(2, "0"),
    estimated: true,
  };
}


// Reconcile only cent-level discrepancies against the bank's aggregate, never a fixed deduction.
// Large differences or missing forecast periods must not replace the transaction-based estimate.
export function reconcileEstimatedBill(bill: CurrentCardBill | null, transactions: ForecastTransaction[], month: string, usedBalance: number): CurrentCardBill | null {
  if (!bill?.estimated || !Number.isFinite(usedBalance)) return bill;
  const unique = [...new Map(transactions.map(tx => [tx.id, tx])).values()];
  if (unique.some(tx => tx.status === "PENDING" && !tx.creditCardMetadata?.billForecastDate)) return bill;
  const futureCents = unique.filter(tx => (tx.creditCardMetadata?.billForecastDate ?? "") > month)
    .reduce((sum, tx) => sum + (tx.type === "CREDIT" ? -1 : 1) * Math.round(Math.abs(tx.amount) * 100), 0);
  const bankCurrentCents = Math.round(usedBalance * 100) - futureCents;
  const difference = bankCurrentCents - bill.amount;
  if (difference === 0 || Math.abs(difference) > 2) return bill;
  return { ...bill, amount: bankCurrentCents, reconciliationCents: difference };
}
