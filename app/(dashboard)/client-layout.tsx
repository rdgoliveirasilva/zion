"use client";

import { CategoriesProvider } from "@/components/ui/categories-provider";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { DashboardNav } from "./nav";
import dynamic from "next/dynamic";
import { RefreshPageButton } from "@/components/ui/refresh-page-button";
const QuickActionsModal = dynamic(() => import("./quick-actions-modal").then(m => m.QuickActionsModal), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const main = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => { main.current?.scrollTo({ top: 0 }); }, [pathname]);

  return (
    <CategoriesProvider><div className="flex h-[100dvh] w-full bg-background overflow-hidden">
      <DashboardNav onOpenModal={() => setIsModalOpen(true)} />

      <main ref={main} className="min-w-0 flex-1 overflow-y-auto pb-20 md:pb-0 relative text-foreground">
        <div className="sticky top-0 z-30 flex justify-end bg-background/95 px-4 py-2"><RefreshPageButton /></div>
        {children}
      </main>

      {isModalOpen && <QuickActionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />}
    </div></CategoriesProvider>
  );
}
