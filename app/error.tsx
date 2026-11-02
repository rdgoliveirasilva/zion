"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opcional: logar o erro em um serviço de monitoramento
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Ops! Algo deu errado.</h2>
      <p className="text-gray-500">
        Ocorreu um erro inesperado no Zion. Por favor, tente novamente.
      </p>
      <Button
        onClick={() => reset()}
        className="mt-4 bg-[#6b21a8] hover:bg-[#581c87] text-white"
      >
        Tentar novamente
      </Button>
    </div>
  );
}