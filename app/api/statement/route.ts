import { NextResponse } from "next/server";
import { hasSession } from "@/lib/session";
import { loadStatementPage } from "@/lib/statement-query";

export async function GET(request: Request) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  try { return NextResponse.json(await loadStatementPage(new URL(request.url).searchParams)); }
  catch { return NextResponse.json({ error: "Não foi possível carregar o extrato. Tente novamente." }, { status: 503 }); }
}
