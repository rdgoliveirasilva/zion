"use client";
import { createContext, useContext } from "react";
import { useJsonResource } from "@/lib/client-data";
import { CATEGORIES } from "@/lib/categories";

export type CategoryOption = { value: string; label: string; color?: string; archived?: boolean };
const Context = createContext<{ categories: CategoryOption[]; refresh: () => Promise<void> }>({ categories: CATEGORIES, refresh: async () => {} });
export function CategoriesProvider({ children }: { children: React.ReactNode }) {
  const { data, reload: refresh } = useJsonResource<CategoryOption[]>("/api/categories");
  const categories = data || CATEGORIES;
  return <Context.Provider value={{ categories, refresh }}>{children}</Context.Provider>;
}
export const useCategories = () => useContext(Context);
