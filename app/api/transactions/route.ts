import { hasSession } from "@/lib/session";
import { normalizeMerchant, isCardBillPayment, PAID_STATUSES } from "@/lib/commitment-rules";
import { financialDay } from "@/lib/statement";
import { reconcileCommitments } from "@/lib/commitments";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  if (!await hasSession()) return NextResponse.json({error:"Não autorizado."},{status:401});
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const status = searchParams.get("status");

  try {
    if (type === "bill") return NextResponse.json((await prisma.commitment.findMany({ where: status ? { status } : {}, orderBy: { dueDate: "asc" } })).map(c => ({ ...c, type: "bill", date: c.dueDate })));
    const whereClause: any = {};
    if (type) whereClause.type = type;
    if (status) whereClause.status = status;

    const transactions = await prisma.transaction.findMany({
      where: whereClause,
      orderBy: { date: 'asc' }
    });
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar dados." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  try {
    const body = await request.json();
    const { description, amount, date, type, linkedBillId, category, accountId, cardPurchase } = body;

    if (category && (typeof category !== "string" || !await prisma.category.findFirst({where:{value:category,archived:false}}))) return NextResponse.json({error:"Categoria indisponível."},{status:400});
    if (!["expense", "income", "bill"].includes(type) || (linkedBillId && type !== "expense") || (cardPurchase && (type !== "expense" || linkedBillId))) return NextResponse.json({ error: "Tipo de lançamento inválido." }, { status: 400 });
    if (typeof description !== "string" || !description.trim()) return NextResponse.json({ error: "Informe a descrição." }, { status: 400 });
    const rawAmount = String(amount).trim();
    const normalized = rawAmount.includes(",") ? rawAmount.replace(/\./g, "").replace(",", ".") : rawAmount;
    const numericAmount = /^\d+(\.\d{1,2})?$/.test(normalized) ? Number(normalized) : NaN;
    const amountInCents = Math.round(numericAmount * 100);
    if (!Number.isSafeInteger(amountInCents) || amountInCents <= 0 || amountInCents > 2147483647) return NextResponse.json({ error: "Valor inválido." }, { status: 400 });
    const safeDate = new Date(`${date}T12:00:00-03:00`);
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(safeDate.getTime()) || financialDay(safeDate) !== date) return NextResponse.json({ error: "Data inválida." }, { status: 400 });
    if (type !== "bill" && date > financialDay()) return NextResponse.json({ error: "Use uma conta a pagar para datas futuras." }, { status: 400 });
    const account = accountId ? await prisma.account.findUnique({ where: { id: accountId } }) : null;
    if ((accountId && !account) || (cardPurchase && account?.type !== "credit") || (!cardPurchase && account?.type === "credit")) return NextResponse.json({ error: "Selecione uma conta compatível com o lançamento." }, { status: 400 });

    // Se estiver pagando uma conta a pagar existente
    if (linkedBillId) {
      const paid = await prisma.$transaction(async db => {
        await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
        const commitment = await db.commitment.findFirstOrThrow({ where: { OR: [{ id: linkedBillId }, { transactionId: linkedBillId }] } });
        if (commitment.status === "paid") return commitment;
        if (amountInCents !== commitment.amount) throw new Error("O valor deve corresponder ao compromisso.");
        if (financialDay(safeDate) > financialDay()) throw new Error("Um pagamento não pode ter data futura.");
        const linked = commitment.transactionId ? await db.transaction.findUnique({ where: { id: commitment.transactionId } }) : null;
        const matches = (await db.transaction.findMany({ where: { ...(account ? { accountId: account.id } : {}), amount: amountInCents, type: "expense", status: { in: ["paid", "cleared", "reconciled"] }, commitment: null } })).filter(t =>
          financialDay(t.date) === financialDay(safeDate) &&
          (commitment.source === "card" ? t.isBillPayment || isCardBillPayment(t.description) : normalizeMerchant(t.description) === normalizeMerchant(commitment.description))
        );
        if (matches.length > 1) throw new Error("Há mais de uma movimentação correspondente. Categorize a movimentação exata pelo extrato.");
        const payment = linked?.type === "expense" ? await db.transaction.update({ where: { id: linked.id }, data: { status: "paid" } })
          : matches[0] ?? await db.transaction.create({ data: { description: commitment.description, amount: amountInCents, date: safeDate, type: "expense", status: "paid", category: category || commitment.category, categorySource: "manual", accountId: account?.id, isBillPayment: commitment.source === "card" } });
        return db.commitment.update({ where: { id: commitment.id }, data: { status: "paid", transactionId: payment.id } });
      });
      return NextResponse.json(paid);
    }
    if (type === "bill") {
      const commitment = await prisma.commitment.create({ data: { key: "manual:" + crypto.randomUUID(), description: description || "Conta a pagar", amount: amountInCents, dueDate: safeDate, category: category || "outros", source: "manual" } });
      return NextResponse.json(commitment, { status: 201 });
    }

    // Se for um pagamento avulso ou criação de conta a pagar
    const transaction = await prisma.transaction.create({
      data: {
        description: description || "Sem descrição",
        amount: amountInCents,
        date: safeDate,
        type: type || "expense",
        status: "cleared",
        accountId: account?.id,
        category: category || "outros",
        categorySource: "manual",
      },
    });

    return NextResponse.json(transaction, { status: 201 });
  } catch (error: any) {
    console.error("ERRO NA API DE TRANSAÇÃO:", error);
    return NextResponse.json(
      { error: error.message || "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
export async function PATCH(request: Request) {
  if(!await hasSession()) return NextResponse.json({error:"Não autorizado."},{status:401});
  try {
    const body=await request.json();
    if(typeof body.id!=="string" || (typeof body.category !== "string" || !await prisma.category.findFirst({where:{value:body.category,archived:false}}))) return NextResponse.json({error:"Categoria inválida."},{status:400});
    if(body.recurring && (!Number.isInteger(body.dueDay)||body.dueDay<1||body.dueDay>31||![1,3,12].includes(body.intervalMonths))) return NextResponse.json({error:"Vencimento ou frequência inválidos."},{status:400});
    const result=await prisma.$transaction(async db=>{
      await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
      const original=await db.transaction.findUniqueOrThrow({where:{id:body.id}});
      if(body.recurring && (original.type!=="expense" || original.isBillPayment || isCardBillPayment(original.description))) throw new Error("Selecione uma despesa, não um pagamento de fatura.");
      const updated=await db.transaction.update({where:{id:original.id},data:{category:body.category,categorySource:"manual"}});
      if(body.recurring) {
        const description=normalizeMerchant(original.description);
        const matchKey=JSON.stringify([original.accountId,description]);
        const candidates=(await db.transaction.findMany({where:{accountId:original.accountId,amount:original.amount,type:"expense"},orderBy:{date:"asc"}})).filter(t=>normalizeMerchant(t.description)===description);
        const data={description,accountId:original.accountId,amount:original.amount,category:body.category,dueDay:body.dueDay,intervalMonths:body.intervalMonths,startMonth:financialDay(candidates[0]?.date ?? original.date).slice(0,7)};
        const rule = await db.recurringRule.upsert({where:{matchKey},create:{...data,matchKey},update:{category:body.category}});
        const linked = await db.commitment.findUnique({where:{transactionId:original.id}});
        if (linked && !linked.ruleId && linked.source !== "card") {
          await db.commitment.update({where:{id:linked.id},data:{ruleId:rule.id,key:rule.id+":"+financialDay(original.date).slice(0,7)}});
        }
        await reconcileCommitments(db);
        // The user's selected movement is an explicit identity, even if other
        // same-value movements made automatic matching ambiguous this month.
        const occurrence = await db.commitment.findUnique({ where: { key: rule.id + ":" + financialDay(original.date).slice(0,7) } });
        if (occurrence && occurrence.amount === original.amount && !occurrence.transactionId && !linked) {
          await db.commitment.update({ where: { id: occurrence.id }, data: { transactionId: original.id, status: PAID_STATUSES.has(original.status) && financialDay(original.date) <= financialDay() ? "paid" : "pending" } });
        }
      }
      return updated;
    },{timeout:60000});
    return NextResponse.json(result);
  } catch { return NextResponse.json({error:"Não foi possível salvar. Verifique a movimentação e tente novamente."},{status:400}); }
}
