"use client";
import { RefreshPageButton } from "@/components/ui/refresh-page-button";
export default function DashboardError({ reset }: { error: Error; reset: () => void }) {
  return <section role="alert" className="mx-auto max-w-lg space-y-4 p-6"><h1 className="text-xl font-bold">Não foi possível carregar os dados</h1><p className="text-sm text-muted-foreground">Tente novamente. A navegação continua disponível.</p><div className="flex flex-wrap gap-3"><button onClick={reset} className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground">Tentar novamente</button><RefreshPageButton /></div></section>;
}
