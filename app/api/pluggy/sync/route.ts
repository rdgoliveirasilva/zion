import { NextResponse } from "next/server";
import { syncPluggyItem } from "@/lib/pluggy-sync";
import { prisma } from "@/lib/prisma";

export const maxDuration = 120;

export async function POST(request: Request) {
  let body = {};
  try { 
    body = await request.json(); 
  } catch { 
    // Se não vier JSON (como no botão Atualizar), ignoramos o erro e seguimos com body vazio
    body = {}; 
  }

  const itemId = (body as any)?.itemId;

  try {
    // 👇 Se um itemId foi enviado (pelo widget), sincroniza apenas ele
    if (typeof itemId === "string" && itemId.trim()) {
      return NextResponse.json(await syncPluggyItem(itemId));
    }

    // 👇 Se não veio itemId (pelo botão Atualizar), busca todas as conexões no banco
    const accountsWithItems = await prisma.account.findMany({
      where: { pluggyItemId: { not: null } },
      select: { pluggyItemId: true },
      distinct: ['pluggyItemId'],
    });

    if (accountsWithItems.length === 0) {
      return NextResponse.json({ error: "Nenhuma conexão Pluggy encontrada para sincronizar." }, { status: 400 });
    }

    let totalSaved = 0;
    // Roda a sincronização para cada itemId encontrado
    for (const acc of accountsWithItems) {
      if (!acc.pluggyItemId) continue;
      const result = await syncPluggyItem(acc.pluggyItemId);
      // Assumindo que a sua função syncPluggyItem retorna um objeto com a contagem
      if (result && typeof result === 'object' && 'saved' in result) {
        totalSaved += (result as any).saved || 0;
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Sincronização global concluída!",
      saved: totalSaved 
    });

  } catch (error) {
    console.error("Falha na sincronização Pluggy", error);
    return NextResponse.json({ error: "Não foi possível concluir a sincronização." }, { status: 500 });
  }
}