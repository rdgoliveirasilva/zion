export const FINANCIAL_TIME_ZONE = "America/Sao_Paulo";
// Creating Intl formatters per row blocks the main thread on long statements.
const dayFormatter = new Intl.DateTimeFormat("en-CA", { timeZone: FINANCIAL_TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" });
export function financialDay(value: Date | string = new Date()): string {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parts = dayFormatter.formatToParts(new Date(value));
  return ["year", "month", "day"].map(key => parts.find(p => p.type === key)!.value).join("-");
}
export function statementIncludes(date: Date | string, period: "today" | "7d" | "custom" | "all", start = "", end = "", now = new Date()): boolean {
  const day = financialDay(date), today = financialDay(now);
  if (day > today) return false;
  if (period === "today") return day === today;
  if (period === "7d") {
    const from = new Date(today + "T12:00:00Z");
    from.setUTCDate(from.getUTCDate() - 7);
    return day >= from.toISOString().slice(0, 10);
  }
  if (period === "custom") return !!start && !!end && start <= end && day >= start && day <= end;
  return true;
}
export function formatFinancialDate(value: Date | string): string {
  return financialDay(value).split("-").reverse().join("/");
}
export function pluggyTransactionType(type: string | undefined, amount: number, accountType: string): "expense" | "income" {
  if (type === "DEBIT") return "expense";
  if (type === "CREDIT") return "income";
  return (accountType === "CREDIT" ? amount > 0 : amount < 0) ? "expense" : "income";
}

// Queries use the full Brazilian calendar day, matching statementIncludes.
export function financialDayEnd(now = new Date()): Date {
  return new Date(financialDay(now) + "T23:59:59.999-03:00");
}
