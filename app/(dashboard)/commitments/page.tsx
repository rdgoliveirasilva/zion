import Link from "next/link";
import { loadCommitments } from "@/lib/commitments";
import { CommitmentList, CommitmentSummary } from "@/components/ui/commitment-summary";
import { financialDay } from "@/lib/statement";

export const dynamic = "force-dynamic";
export default async function CommitmentsPage() {
  const commitments = await loadCommitments();
  const today = financialDay();
  const formatMoney = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value / 100);
  return <main className="mx-auto w-full max-w-4xl space-y-6 p-4 pb-24 md:p-8"><Link href="/" className="text-sm text-primary">← Início</Link><h1 className="text-2xl font-bold">Contas a pagar</h1><p className="text-sm text-muted-foreground">Histórico e próximos vencimentos. Para registrar um pagamento confirmado, use o botão + e selecione a conta. Valores incluídos na fatura não são somados novamente.</p><CommitmentSummary commitments={commitments} today={today} formatMoney={formatMoney} /><section className="rounded-2xl border border-border bg-card p-5"><h2 className="mb-4 text-lg font-bold">Todos os compromissos</h2><CommitmentList commitments={commitments} today={today} formatMoney={formatMoney} /></section></main>;
}
