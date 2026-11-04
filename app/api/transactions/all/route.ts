import { hasSession } from "@/lib/session";
import { transactionViewSelect } from "@/lib/transaction-view";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    const transactions = await prisma.transaction.findMany({
      where: { date: { lte: new Date() } },
      orderBy: { date: 'desc' }, // Ordena do mais recente para o mais antigo
      select: transactionViewSelect
    });
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar transações." }, { status: 500 });
  }
}

// Deleta uma transação
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID não fornecido." }, { status: 400 });
    }

    await prisma.transaction.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao deletar transação." }, { status: 500 });
  }
}