import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const status = searchParams.get("status");

  try {
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
  try {
    const body = await request.json();
    const { description, amount, date, type, status, linkedBillId, category } = body;

    const numericAmount = parseFloat(String(amount).replace(",", "."));
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return NextResponse.json({ error: "Valor inválido." }, { status: 400 });
    }

    const amountInCents = Math.round(numericAmount * 100);

    // Ancoragem da data ao meio-dia para evitar problemas de fuso horário
    let safeDate = new Date();
    if (date) {
      const [year, month, day] = date.split("-");
      safeDate = new Date(Number(year), Number(month) - 1, Number(day), 12, 0, 0);
    }

    // Se estiver pagando uma conta a pagar existente
    if (linkedBillId) {
      const updatedBill = await prisma.transaction.update({
        where: { id: linkedBillId },
        data: { 
          status: "paid", // Atualiza o status
          date: safeDate, // Muda a data para a data do pagamento
          category: category // Atualiza a categoria se for alterada
        }
      });
      // Retorna a conta atualizada SEM criar uma nova transação para evitar duplicidade
      return NextResponse.json(updatedBill, { status: 200 });
    }

    // Se for um pagamento avulso ou criação de conta a pagar
    const transaction = await prisma.transaction.create({
      data: {
        description: description || "Sem descrição",
        amount: amountInCents,
        date: safeDate,
        type: type || "expense",
        status: status || "pending", 
        category: category || "outros",
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