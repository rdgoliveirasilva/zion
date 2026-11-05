"use client";
import { Download } from "lucide-react";

export function DownloadCsv({ filename, headers, rows, subtle = false }: { filename: string; headers: string[]; rows: (string | number)[][]; subtle?: boolean }) {
  function download() {
    const escape = (value: string | number) => {
      let text = String(value);
      if (typeof value === "string" && /^[=+\-@\t\r]/.test(text)) text = "'" + text;
      return '"' + text.replace(/"/g, '""') + '"';
    };
    const csv = '\uFEFF' + [headers, ...rows].map(row => row.map(escape).join(';')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url; link.download = filename; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <button onClick={download} className={subtle ? "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-foreground" : "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-accent"}><Download className="h-4 w-4" />{subtle ? "Exportar CSV" : "Baixar arquivo CSV"}</button>;
}
