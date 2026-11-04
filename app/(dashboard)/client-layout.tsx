"use client";

import { CategoriesProvider } from "@/components/ui/categories-provider";
import { useState } from "react";
import { DashboardNav } from "./nav";
import { QuickActionsModal } from "./quick-actions-modal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CategoriesProvider><div className="flex h-[100dvh] w-full bg-background overflow-hidden">
      <DashboardNav onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0 relative text-foreground">
        {children}
      </main>

      <QuickActionsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div></CategoriesProvider>
  );
}