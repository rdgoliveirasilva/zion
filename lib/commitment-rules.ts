export const PAID_STATUSES = new Set(["paid", "cleared", "reconciled"]);
const spendingDayFormatter = new Intl.DateTimeFormat("en-CA", { timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit" });
export function normalizeMerchant(value: string) { return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim(); }
export function monthOffset(month: string, offset: number) { const [y,m] = month.split("-").map(Number); return new Date(Date.UTC(y,m-1+offset,1)).toISOString().slice(0,7); }
export function monthsBetween(start: string, end: string) { const [a,b]=start.split("-").map(Number), [c,d]=end.split("-").map(Number); return (c-a)*12+d-b; }
export function dueDateFor(month: string, day: number) { const [y,m]=month.split("-").map(Number); return new Date(Date.UTC(y,m-1,Math.min(day,new Date(Date.UTC(y,m,0)).getUTCDate()),15)); }
export function dueStatus(status: string, dueDay: string, today: string) {
  if (status === "paid") return "paid";
  if (dueDay < today) return "overdue";
  if (dueDay === today) return "today";
  return (Date.parse(dueDay)-Date.parse(today))/86400000 <= 7 ? "soon" : "future";
}
export function isCardBillPayment(description: string, operationType?: string | null) {
  return operationType === "PAGAMENTO_FATURA" || /^(pagamento (de |da )?fatura|pagamento recebido)( |$)/.test(normalizeMerchant(description));
}
export function spendingSummary(transactions: {amount:number;date:Date|string;type:string;status:string;isBillPayment?:boolean;description:string}[], today:string) {
  const month=today.slice(0,7), previous=monthOffset(month,-1);
  let current=0, prior=0;
  for(const tx of transactions) {
    const day=typeof tx.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(tx.date) ? tx.date : spendingDayFormatter.format(new Date(tx.date));
    if(day>today || tx.isBillPayment || isCardBillPayment(tx.description) || !(tx.type==="expense" || (tx.type==="bill" && PAID_STATUSES.has(tx.status)))) continue;
    if(day.slice(0,7)===month) current+=tx.amount;
    if(day.slice(0,7)===previous) prior+=tx.amount;
  }
  return {current, previous:prior, variation:prior===0?null:((current-prior)/prior)*100};
}
