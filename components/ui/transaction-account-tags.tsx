import { CreditCard, Landmark } from "lucide-react";

type TransactionAccount = { name: string; type: string };
export function TransactionAccountTags({ account }: { account?: TransactionAccount | null }) {
  if (!account) return <span className="text-[10px] text-muted-foreground">Sem conta vinculada</span>;
  return <span className="inline-flex flex-wrap items-center gap-1.5">
    <span className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
      <Landmark aria-hidden="true" className="h-3 w-3 shrink-0" />{account.name}
    </span>
    {account.type === "credit" && <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-400">
      <CreditCard aria-hidden="true" className="h-3 w-3 shrink-0" />Cartão de crédito
    </span>}
  </span>;
}
