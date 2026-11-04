"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Database, Tags, Plus, Pencil, Archive, RotateCcw } from "lucide-react";
import AccountsManager from "../accounts/accounts-client";
import { useCategories, type CategoryOption } from "@/components/ui/categories-provider";

export default function SettingsClient() {
  const [tab, setTab] = useState<"data" | "categories">("data");
  const { categories, refresh } = useCategories();
  const router = useRouter();
  const [editing, setEditing] = useState<CategoryOption | null>(null);
  const [label, setLabel] = useState("");
  const [color, setColor] = useState("#8b5cf6");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  function edit(category: CategoryOption | null) { setEditing(category); setLabel(category?.label || ""); setColor(category?.color || "#8b5cf6"); setMessage(""); }
  async function save(category?: CategoryOption) {
    setBusy(true); setMessage("");
    try {
      const value = category || { ...editing, label, color };
      const response = await fetch("/api/categories", { method: value.value ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(value) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      await refresh(); router.refresh(); edit(null); setMessage("Categoria salva.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Não foi possível salvar."); }
    finally { setBusy(false); }
  }
  return <div className="mx-auto w-full max-w-5xl space-y-6 p-4 pb-24 md:p-8">
    <header><h1 className="text-2xl font-bold">Configurações</h1><p className="mt-1 text-sm text-muted-foreground">Suas conexões e categorias em um só lugar.</p></header>
    <div className="flex gap-2 rounded-2xl bg-secondary p-1" role="tablist" aria-label="Configurações">
      {([['data', 'Dados', Database], ['categories', 'Categorias', Tags]] as const).map(([key, text, Icon]) => <button key={key} role="tab" aria-selected={tab === key} onClick={() => setTab(key)} className={`flex flex-1 items-center justify-center gap-2 rounded-xl p-3 text-sm font-medium ${tab === key ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}><Icon className="h-4 w-4" />{text}</button>)}
    </div>
    {tab === "data" ? <AccountsManager embedded /> : <div className="space-y-5">
      <form onSubmit={e => { e.preventDefault(); save(); }} className="space-y-4 rounded-2xl border border-border bg-card p-5">
        <h2 className="flex items-center gap-2 font-bold"><Plus className="h-5 w-5 text-primary" />{editing ? "Editar categoria" : "Criar categoria"}</h2>
        <div className="flex items-end gap-3"><label className="min-w-0 flex-1 text-sm">Nome<input required maxLength={40} value={label} onChange={e => setLabel(e.target.value)} placeholder="Ex.: Pets, Assinaturas…" className="mt-2 w-full rounded-xl border border-border bg-background p-3" /></label><label className="text-sm">Cor<input type="color" value={color} onChange={e => setColor(e.target.value)} className="mt-2 block h-12 w-14 rounded-lg bg-background p-1" /></label></div>
        <div className="flex gap-3"><button disabled={busy} className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-50">{busy ? "Salvando…" : "Salvar categoria"}</button>{editing && <button type="button" onClick={() => edit(null)} className="text-sm text-muted-foreground">Cancelar edição</button>}</div>
        <p role="status" className="text-sm text-muted-foreground">{message}</p>
      </form>
      <div className="rounded-2xl border border-border bg-card p-5"><h2 className="mb-1 font-bold">Suas categorias</h2><p className="mb-4 text-xs text-muted-foreground">Arquivar remove a categoria das novas escolhas e preserva o histórico.</p><div className="space-y-2">{categories.map(category => <div key={category.value} className={`flex items-center gap-3 rounded-xl border border-border p-3 ${category.archived ? "opacity-60" : ""}`}><span className="h-4 w-4 shrink-0 rounded-full" style={{ background: category.color || "#8b5cf6" }} /><span className="min-w-0 flex-1 break-words text-sm font-medium">{category.label}{category.archived && <small className="ml-2 font-normal">Arquivada</small>}</span><button disabled={busy} onClick={() => edit(category)} aria-label={`Editar ${category.label}`} className="rounded-lg p-2 hover:bg-accent"><Pencil className="h-4 w-4" /></button>{category.value !== "outros" && <button disabled={busy} onClick={() => save({ ...category, archived: !category.archived })} aria-label={`${category.archived ? "Restaurar" : "Arquivar"} ${category.label}`} className="rounded-lg p-2 hover:bg-accent">{category.archived ? <RotateCcw className="h-4 w-4" /> : <Archive className="h-4 w-4" />}</button>}</div>)}</div></div>
    </div>}
  </div>;
}
