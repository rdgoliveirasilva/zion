"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CATEGORIES } from "@/lib/categories";

export type CategoryOption = { value: string; label: string; color?: string; archived?: boolean };
const Context = createContext<{ categories: CategoryOption[]; refresh: () => Promise<void> }>({ categories: CATEGORIES, refresh: async () => {} });
export function CategoriesProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<CategoryOption[]>(CATEGORIES);
  const refresh = useCallback(async () => {
    const response = await fetch("/api/categories", { cache: "no-store" });
    if (!response.ok) throw new Error("Não foi possível carregar as categorias.");
    setCategories(await response.json());
  }, []);
  useEffect(() => { refresh().catch(() => {}); }, [refresh]);
  return <Context.Provider value={{ categories, refresh }}>{children}</Context.Provider>;
}
export const useCategories = () => useContext(Context);
