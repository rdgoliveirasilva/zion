"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // Importando useRouter
import { Home, Receipt, PieChart, Wallet, Plus, LogOut, Settings } from "lucide-react"; // Importando LogOut
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function DashboardNav({ onOpenModal }: { onOpenModal: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Início", href: "/", icon: Home },
    { name: "Gastos", href: "/transactions", icon: Receipt },
    { name: "Análises", href: "/reports", icon: PieChart },
    { name: "Configurações", href: "/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
      router.refresh(); // Limpa o cache de navegação do Next.js
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <>
      {/* SIDEBAR DESKTOP */}
      <aside className="hidden w-64 flex-col border-r border-border bg-card md:flex">
        <div className="flex h-16 items-center justify-between px-4 mt-4">
          <div className="relative h-16 w-44 shrink-0">
            <Image 
              src="/images/zion-logo.png" 
              alt="Zion" 
              fill 
              className="object-contain object-left" 
              priority
            />
          </div>
          <ThemeToggle />
        </div>

        <nav className="flex-1 space-y-1 px-3 pt-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/settings" && pathname === "/accounts");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 space-y-2">
          <button 
            onClick={onOpenModal} 
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Plus className="h-5 w-5" />
            Nova Transação
          </button>
          
          {/* Botão de Logout Desktop */}
          <button 
            onClick={handleLogout} 
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary/50 px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-red-500/10 hover:text-red-500"
          >
            <LogOut className="h-5 w-5" />
            Sair da conta
          </button>
        </div>
      </aside>

      {/* NAV MOBILE */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-16 items-center justify-around border-t border-border bg-card px-2 pb-safe md:hidden">
        {navItems.slice(0, 2).map((item) => {
          const isActive = pathname === item.href || (item.href === "/settings" && pathname === "/accounts");
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex flex-col items-center justify-center w-16 h-full gap-1 ${isActive ? "text-primary" : "text-muted-foreground"}`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}

        <div className="relative -top-5">
          <button 
            onClick={onOpenModal} 
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-95"
          >
            <Plus aria-label="Nova transação" className="h-6 w-6" />
          </button>
        </div>

        {navItems.slice(2).map((item) => {
          const isActive = pathname === item.href || (item.href === "/settings" && pathname === "/accounts");
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex flex-col items-center justify-center w-16 h-full gap-1 ${isActive ? "text-primary" : "text-muted-foreground"}`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}