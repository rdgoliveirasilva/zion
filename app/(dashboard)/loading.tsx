"use client";
import { useEffect, useState } from "react";
import { RefreshPageButton } from "@/components/ui/refresh-page-button";

export default function DashboardLoading() {
  const [slow, setSlow] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setSlow(true), 12000); return () => clearTimeout(timer); }, []);
  return <div role="status" aria-label="Carregando página" className="mx-auto w-full max-w-6xl space-y-5 p-4 md:p-8">
    <p className="text-sm text-muted-foreground">{slow ? "A conexão está demorando. Você pode trocar de página ou tentar novamente." : "Carregando…"}</p>
    {slow && <RefreshPageButton />}
    <div aria-hidden="true" className="space-y-5 motion-safe:animate-pulse"><div className="h-8 w-44 rounded-xl bg-secondary" /><div className="grid gap-5 md:grid-cols-3"><div className="h-48 rounded-3xl bg-secondary md:col-span-2" /><div className="h-48 rounded-3xl bg-secondary" /></div><div className="h-64 rounded-3xl bg-secondary" /></div>
  </div>;
}
