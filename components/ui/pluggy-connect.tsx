"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Loader2, Plus, X } from "lucide-react";
import { toast } from "sonner";

const PluggyConnect = dynamic(() => import("react-pluggy-connect").then(mod => mod.PluggyConnect), { ssr: false });

export function PluggyConnectButton({ onSynced }: { onSynced?: () => Promise<void> }) {
  const router = useRouter();
  const [connectToken, setConnectToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const active = useRef(false);
  const controller = useRef<AbortController | null>(null);
  const button = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    if (isSyncing) dialog.current?.showModal();
  }, [isSyncing]);
  useEffect(() => {
    if (!connectToken && !isSyncing) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; button.current?.focus(); };
  }, [connectToken, isSyncing]);

  const sync = async (id: string) => {
    if (active.current) return;
    active.current = true;
    setConnectToken(null);
    setIsSyncing(true);
    const abort = new AbortController();
    controller.current = abort;
    const timeout = window.setTimeout(() => abort.abort(), 125000);
    try {
      const res = await fetch("/api/pluggy/sync", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId: id }), signal: abort.signal,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro na sincronização");
      toast.success("Contas e transações sincronizadas.");
    } catch {
      toast.error("A sincronização não foi concluída. Confira os dados e tente sincronizar novamente.");
    } finally {
      window.clearTimeout(timeout);
      active.current = false;
      setIsSyncing(false);
      controller.current = null;
      router.refresh();
      try { await onSynced?.(); } catch { toast.error("Não foi possível atualizar a lista de contas."); }
    }
  };

  const open = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/pluggy/connect-token", { method: "POST", signal: AbortSignal.timeout(20000) });
      const data = await res.json();
      if (!res.ok || !data.accessToken) throw new Error("Token indisponível");
      setConnectToken(data.accessToken);
    } catch { toast.error("Não foi possível abrir a conexão com o banco. Tente novamente."); }
    finally { setIsLoading(false); }
  };

  return <>
    <button ref={button} onClick={open} disabled={isLoading || isSyncing}
      className="flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-500 disabled:opacity-70">
      {isLoading || isSyncing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
      {isSyncing ? "Sincronizando..." : "Conectar Banco"}
    </button>
    {connectToken && createPortal(
      <div className="fixed inset-0 z-[100] h-[100dvh] w-screen">
        <PluggyConnect connectToken={connectToken} includeSandbox={false} allowFullscreen language="pt"
          onSuccess={({ item }) => sync(item.id)} onClose={() => setConnectToken(null)}
          onError={() => { setConnectToken(null); toast.error("Não foi possível conectar ao banco."); }}
          onLoadError={() => { setConnectToken(null); toast.error("Não foi possível carregar a conexão."); }} />
      </div>, document.body)}
    {isSyncing && createPortal(
      <dialog ref={dialog} onCancel={() => controller.current?.abort()}
        className="m-auto w-[calc(100%_-_2rem)] max-w-md rounded-2xl border border-border bg-card p-6 text-foreground shadow-2xl backdrop:bg-black/60">
        <button autoFocus aria-label="Fechar sincronização" onClick={() => controller.current?.abort()} className="absolute right-3 top-3 rounded-lg p-2 hover:bg-accent"><X className="h-5 w-5" /></button>
        <div role="status" className="flex flex-col items-center gap-4 py-6 text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <h2 className="text-xl font-bold">Sincronizando dados</h2>
          <p className="text-sm text-muted-foreground">Estamos buscando suas contas e transações. Isso pode levar até dois minutos.</p>
        </div>
      </dialog>, document.body)}
  </>;
}
