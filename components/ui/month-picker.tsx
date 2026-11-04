"use client";
import { monthLabel } from "@/lib/financial-history";
export function MonthPicker({ months, value, onChange, id }: { months: string[]; value: string; onChange: (month: string) => void; id: string }) {
  return <label htmlFor={id} className="block text-sm font-medium">Arquivo dos últimos 12 meses<select id={id} value={value} onChange={e => onChange(e.target.value)} className="mt-2 w-full rounded-xl border border-border bg-background p-3 capitalize">{months.map(month => <option key={month} value={month}>{monthLabel(month)}</option>)}</select></label>;
}
