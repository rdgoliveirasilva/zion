const reais = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function currencyFromCents(cents: number): string {
  return reais.format(cents / 100);
}

// A numeric keypad shifts digits through the cents positions: 1990 -> 19,90.
export function formatCurrencyInput(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits ? currencyFromCents(Number(digits)) : "";
}

export function currencyInputCents(value: string): number {
  if (!/^(?:\d+|\d{1,3}(?:\.\d{3})+),\d{2}$/.test(value)) return NaN;
  const cents = Number(value.replace(/[.,]/g, ""));
  return Number.isSafeInteger(cents) ? cents : NaN;
}
