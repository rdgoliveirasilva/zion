"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Short-lived memory only: never store banking responses in localStorage or SW.
const entries = new Map<string, { value?: unknown; expires: number; promise?: Promise<unknown> }>();
export const DATA_CHANGED = "zion:data-changed";
export function notifyDataChanged(change?: { removedTransactionId?: string; createdTransaction?: unknown }) {
  const options = change ? entries.get("/api/accounts?view=options") : undefined;
  entries.clear();
  if (options && options.expires > Date.now()) entries.set("/api/accounts?view=options", options);
  window.dispatchEvent(change ? new CustomEvent(DATA_CHANGED, { detail: change }) : new Event(DATA_CHANGED));
}

export async function loadClientData<T>(url: string, force = false): Promise<T> {
  if (force) entries.delete(url);
  const previous = entries.get(url);
  if (previous?.promise) return previous.promise as Promise<T>;
  if (previous?.value !== undefined && previous.expires > Date.now()) return previous.value as T;
  const entry: { value?: unknown; expires: number; promise?: Promise<unknown> } = { expires: 0 };
  if (entries.size >= 40) entries.delete(entries.keys().next().value!);
  entries.set(url, entry);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  entry.promise = (async () => {
    try {
      const response = await fetch(url, { cache: "no-store", signal: controller.signal });
      if (response.status === 401) { entries.clear(); window.location.replace("/login"); throw new Error("Sua sessão expirou."); }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Não foi possível carregar os dados.");
      entry.value = data; entry.expires = Date.now() + 20000;
      return data;
    } catch (error) {
      if (entries.get(url) === entry) entries.delete(url);
      if (controller.signal.aborted) throw new Error("A conexão demorou. Tente novamente.");
      throw error;
    } finally { clearTimeout(timer); entry.promise = undefined; }
  })();
  return entry.promise as Promise<T>;
}

export function useJsonResource<T>(url: string, initialData?: T) {
  const [result, setResult] = useState<{ url: string; data?: T }>(() => ({ url, data: entries.get(url)?.value as T | undefined }));
  const data = (result.url === url ? result.data : undefined) ?? initialData;
  const [loading, setLoading] = useState(data === undefined);
  const [error, setError] = useState("");
  const version = useRef(0);
  const load = useCallback(async (force = false) => {
    const request = ++version.current;
    setLoading(true); setError("");
    try {
      const result = await loadClientData<T>(url, force);
      if (request === version.current) setResult({ url, data: result });
    } catch (e) { if (request === version.current) setError(e instanceof Error ? e.message : "Erro ao carregar os dados."); }
    finally { if (request === version.current) setLoading(false); }
  }, [url]);
  const reload = useCallback(() => load(true), [load]);
  useEffect(() => {
    void load();
    const refresh = () => { void load(); };
    window.addEventListener(DATA_CHANGED, refresh);
    return () => { version.current++; window.removeEventListener(DATA_CHANGED, refresh); };
  }, [load]);
  return { data, loading, error, reload };
}
