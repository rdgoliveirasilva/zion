"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Loader2, Plus, CheckCircle2 } from "lucide-react";
import { toast } from "sonner"; // 👈 Importa o toast

const PluggyConnect = dynamic(
  () => import("react-pluggy-connect").then((mod) => mod.PluggyConnect),
  { ssr: false }
);

export function PluggyConnectButton() {
  const [connectToken, setConnectToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleOpenWidget = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/pluggy/connect-token", { method: "POST" });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error);
      
      setConnectToken(data.accessToken);
    } catch (error) {
      console.error("Erro ao abrir widget:", error);
      toast.error("Erro ao conectar com o banco.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSuccess = async (itemData: any) => {
    setConnectToken(null);
    setIsSyncing(true); // 👈 Ativa a tela de loading

    try {
      const res = await fetch("/api/pluggy/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId: itemData.item.id }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro na sincronização");

      // 👇 Notificação de Sucesso
      toast.success("Tudo pronto!", {
        description: "Suas contas e transações foram sincronizadas.",
        duration: 5000,
      });
      
      // Espera 1.5s para o usuário ver o toast antes de recarregar
      setTimeout(() => window.location.reload(), 1500);
      
    } catch (error: any) {
      console.error("Erro na sincronização:", error);
      toast.error("Erro ao sincronizar", {
        description: "A conexão foi salva, mas os dados ainda estão sendo processados. Tente novamente em alguns minutos.",
        duration: 6000,
      });
      setTimeout(() => window.location.reload(), 2000);
    } finally {
      setIsSyncing(false);
    }
  };

  const onError = (error: any) => {
    console.error("Erro na conexão:", error);
    setConnectToken(null);
    toast.error("Falha na conexão", {
      description: "Não foi possível conectar ao banco.",
    });
  };

  return (
    <>
      <button 
        onClick={handleOpenWidget}
        disabled={isLoading || isSyncing}
        className="flex items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-fuchsia-500 disabled:opacity-70"
      >
        {isLoading || isSyncing ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
        {isSyncing ? "Sincronizando..." : "Conectar Banco"}
      </button>

      {connectToken && (
        <PluggyConnect
          connectToken={connectToken}
          onSuccess={onSuccess}
          onError={onError}
          includeSandbox={false}
        />
      )}

      {/* ==========================================
          TELA DE CARREGAMENTO (OVERLAY FULLSCREEN)
          ========================================== */}
      {isSyncing && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0014]/90 backdrop-blur-md">
          <div className="relative flex flex-col items-center max-w-sm text-center px-6">
            
            {/* Spinner Animado */}
            <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-t-4 border-fuchsia-500 animate-spin" />
              <div className="absolute inset-2 rounded-full border-b-4 border-purple-400 animate-spin direction-reverse" />
              <CheckCircle2 className="h-10 w-10 text-fuchsia-400 animate-pulse" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Sincronizando dados</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Estamos baixando suas contas e transações do Open Finance. <br/><br/>
              <span className="text-fuchsia-400 font-medium">Não feche esta janela.</span> Isso pode levar alguns segundos.
            </p>
          </div>
        </div>
      )}
    </>
  );
}