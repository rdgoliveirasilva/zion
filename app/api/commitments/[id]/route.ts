import { NextResponse } from "next/server";
import { hasSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  const { id } = await context.params;
  let body: { action?: string; category?: string };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Dados inválidos." }, { status: 400 }); }
  if (body.action !== "pay" && body.action !== "category") return NextResponse.json({ error: "Ação inválida." }, { status: 400 });
  try {
    const result = await prisma.$transaction(async db => {
      await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
      const commitment = await db.commitment.findUnique({ where: { id } });
      if (!commitment || !commitment.ruleId) throw new Error("Conta recorrente não encontrada.");
      if (body.action === "pay") {
        // A baixa manual não inventa uma transação bancária nem altera uma
        // movimentação importada. Uma conta pode ser paga antes do vencimento.
        return commitment.status === "paid" ? commitment : db.commitment.update({ where: { id }, data: { status: "paid" } });
      }
      const category = await db.category.findFirst({ where: { value: body.category, archived: false } });
      if (!category) throw new Error("Categoria indisponível.");
      await db.recurringRule.update({ where: { id: commitment.ruleId }, data: { category: category.value } });
      await db.commitment.updateMany({ where: { ruleId: commitment.ruleId }, data: { category: category.value } });
      return db.commitment.findUniqueOrThrow({ where: { id } });
    });
    return NextResponse.json(result);
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Não foi possível salvar." }, { status: 400 }); }
}

export async function DELETE(_request: Request, context: Context) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  const { id } = await context.params;
  try {
    await prisma.$transaction(async db => {
      await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
      const commitment = await db.commitment.findUnique({ where: { id } });
      if (!commitment?.ruleId) throw new Error("Conta recorrente não encontrada.");
      await db.recurringRule.update({ where: { id: commitment.ruleId }, data: { active: false } });
      // Preserva ocorrências pagas e o histórico; retira apenas pendências
      // desta regra, que não serão recriadas pela próxima conciliação.
      await db.commitment.deleteMany({ where: { ruleId: commitment.ruleId, status: "pending" } });
    });
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Não foi possível excluir." }, { status: 400 }); }
}
