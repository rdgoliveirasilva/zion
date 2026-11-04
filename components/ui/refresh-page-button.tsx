"use client";
import { RefreshCw } from "lucide-react";
import { useState } from "react";

export function RefreshPageButton() {
  const [offline, setOffline] = useState(false);
  function refresh() {
    if (!navigator.onLine) { setOffline(true); return; }
    // A real reload also recovers from stale JS after a deployment. It reads
    // saved data and does not start a full banking import.
    window.location.reload();
  }
  return <div className="flex flex-wrap items-center justify-end gap-2">
    {offline && <span role="status" className="text-xs text-muted-foreground">Sem conexão. Conecte-se e tente novamente.</span>}
    <button type="button" onClick={refresh} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium text-foreground shadow-sm hover:bg-accent" aria-label="Atualizar página"><RefreshCw className="h-4 w-4" />Atualizar página</button>
  </div>;
}
