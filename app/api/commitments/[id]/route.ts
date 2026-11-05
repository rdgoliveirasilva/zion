import { NextResponse } from "next/server";
import { hasSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { dueDateFor, normalizeMerchant } from "@/lib/commitment-rules";
import { financialDay } from "@/lib/statement";
import { reconcileCommitments } from "@/lib/commitments";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: Context) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  const { id } = await context.params;
  let body: { action?: string; category?: string; amount?: number; dueDate?: string; recurring?: boolean };
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Dados inválidos." }, { status: 400 }); }
  if (!["pay", "category", "edit"].includes(body.action || "")) return NextResponse.json({ error: "Ação inválida." }, { status: 400 });
  try {
    const result = await prisma.$transaction(async db => {
      await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
      const commitment = await db.commitment.findUnique({ where: { id } });
      if (!commitment) throw new Error("Conta não encontrada.");
      if (body.action === "pay") {
        // A baixa manual não inventa uma transação bancária nem altera uma
        // movimentação importada. Uma conta pode ser paga antes do vencimento.
        return commitment.status === "paid" ? commitment : db.commitment.update({ where: { id }, data: { status: "paid" } });
      }
      const category = await db.category.findFirst({ where: { value: body.category, archived: false } });
      if (!category) throw new Error("Categoria indisponível.");
      if (body.action === "category") {
        if (commitment.ruleId) {
          await db.recurringRule.update({ where: { id: commitment.ruleId }, data: { category: category.value } });
          await db.commitment.updateMany({ where: { ruleId: commitment.ruleId }, data: { category: category.value } });
        } else await db.commitment.update({ where: { id }, data: { category: category.value } });
        return db.commitment.findUniqueOrThrow({ where: { id } });
      }
      if (!Number.isSafeInteger(body.amount) || body.amount! <= 0 || body.amount! > 2147483647 || typeof body.dueDate !== "string" || !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(body.dueDate) || typeof body.recurring !== "boolean") throw new Error("Informe valor, vencimento e recorrência válidos.");
      const dueDate = dueDateFor(body.dueDate.slice(0, 7), Number(body.dueDate.slice(8, 10)));
      if (financialDay(dueDate) !== body.dueDate) throw new Error("Data de vencimento inválida.");
      if ((commitment.ruleId || commitment.source === "card") && body.dueDate.slice(0, 7) !== financialDay(commitment.dueDate).slice(0, 7)) throw new Error("Nesta conta, altere o dia dentro do mesmo mês.");
      if (commitment.source === "card" && !body.recurring) throw new Error("Faturas automáticas continuam vinculadas ao cartão.");
      if (commitment.transactionId && commitment.status === "paid" && body.amount !== commitment.amount) throw new Error("O valor pago já está vinculado a uma movimentação. Edite apenas o compromisso antes do pagamento.");
      const changedFinancialFields = body.amount !== commitment.amount || dueDate.getTime() !== commitment.dueDate.getTime();
      const data = { amount: body.amount!, dueDate, category: category.value, manualOverride: commitment.manualOverride || changedFinancialFields };
      if (commitment.ruleId && !body.recurring) {
        await db.recurringRule.update({ where: { id: commitment.ruleId }, data: { active: false } });
        await db.commitment.deleteMany({ where: { ruleId: commitment.ruleId, status: "pending", id: { not: id }, dueDate: { gte: commitment.dueDate } } });
        return db.commitment.update({ where: { id }, data: { ...data, ruleId: null } });
      }
      if (!commitment.ruleId && body.recurring && commitment.source !== "card") {
        const month = body.dueDate.slice(0, 7);
        const rule = await db.recurringRule.create({ data: { matchKey: `manual:${id}`, description: normalizeMerchant(commitment.description), accountId: null, amount: body.amount!, category: category.value, dueDay: Number(body.dueDate.slice(8, 10)), intervalMonths: 1, startMonth: month } });
        const result = await db.commitment.update({ where: { id }, data: { ...data, ruleId: rule.id, key: `${rule.id}:${month}` } });
        await reconcileCommitments(db);
        return result;
      }
      if (commitment.ruleId && category.value !== commitment.category) {
        await db.recurringRule.update({ where: { id: commitment.ruleId }, data: { category: category.value } });
        await db.commitment.updateMany({ where: { ruleId: commitment.ruleId }, data: { category: category.value } });
      }
      return db.commitment.update({ where: { id }, data });
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
