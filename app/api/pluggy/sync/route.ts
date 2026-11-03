import { NextResponse } from "next/server";
import { syncPluggyItem } from "@/lib/pluggy-sync";
export const maxDuration = 120;
export async function POST(request: Request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "JSON inválido." }, { status: 400 }); }
  if (typeof body?.itemId !== "string" || !body.itemId.trim()) return NextResponse.json({ error: "itemId não fornecido." }, { status: 400 });
  try { return NextResponse.json(await syncPluggyItem(body.itemId)); }
  catch (error) {
    console.error("Falha na sincronização Pluggy", error);
    return NextResponse.json({ error: "Não foi possível concluir a sincronização." }, { status: 500 });
  }
}
