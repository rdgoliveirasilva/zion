"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { StatementList, type StatementTransaction } from "../statement-list";
import { money } from "@/lib/financial-history";
const TransactionDetails = dynamic(() => import("@/components/ui/transaction-details").then(m => m.TransactionDetails), { ssr: false });
export default function TransactionsPage() {
  const [selected, setSelected] = useState<StatementTransaction | null>(null);
  return <div className="mx-auto w-full max-w-5xl space-y-6 p-4 pb-24 md:p-8">
    <header><h1 className="text-2xl font-bold">Transações</h1><p className="mt-1 text-sm text-muted-foreground">Seu histórico completo, com busca e filtros.</p></header>
    <StatementList onSelect={setSelected} formatMoney={money} allowDelete />
    {selected && <TransactionDetails key={selected.id} transaction={selected} onClose={() => setSelected(null)} onSaved={() => {}} />}
  </div>;
}
