import { NextResponse } from "next/server";
import { syncPluggyItem } from "@/lib/pluggy-sync";
import { authenticateWebhook, SYNC_EVENTS } from "@/lib/pluggy-webhook";
export const runtime = "nodejs";
export const maxDuration = 120;
export async function POST(request: Request) {
  const secret = process.env.PLUGGY_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: "Webhook não configurado." }, { status: 503 });
  if (!authenticateWebhook(request.headers.get("x-pluggy-secret"), secret)) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "JSON inválido." }, { status: 400 }); }
  if (typeof body?.event !== "string") return NextResponse.json({ error: "Evento inválido." }, { status: 400 });
  if (!SYNC_EVENTS.has(body.event)) return NextResponse.json({ received: true, ignored: true });
  if (typeof body.itemId !== "string" || !body.itemId.trim()) return NextResponse.json({ error: "itemId obrigatório." }, { status: 400 });
  try {
    const result = await syncPluggyItem(body.itemId);
    return NextResponse.json({ received: true, ...result });
  } catch (error) {
    console.error("Falha ao processar webhook Pluggy", error);
    return NextResponse.json({ error: "Sincronização não concluída. Reenvie o evento." }, { status: 500 });
  }
}
