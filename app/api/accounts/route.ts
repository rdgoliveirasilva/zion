import { currentCardBill } from "@/lib/pluggy-bills";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const accounts = await prisma.account.findMany({
      orderBy: { createdAt: 'asc' }
    });
    return NextResponse.json(await Promise.all(accounts.map(async account => ({
      ...account, currentBill: await currentCardBill(account),
    }))));
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar contas." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, balance, type, color } = body;

    // Converte o valor (ex: "8.250,50") para centavos (inteiro)
    const numericBalance = parseFloat(String(balance).replace(/\./g, "").replace(",", "."));
    
    if (isNaN(numericBalance)) {
      return NextResponse.json({ error: "Saldo inválido." }, { status: 400 });
    }

    const balanceInCents = Math.round(numericBalance * 100);

    const account = await prisma.account.create({
      data: {
        name,
        balance: balanceInCents,
        type: type || "checking",
        color: color || "bg-gray-500", // Futura customização
      },
    });

    return NextResponse.json(account, { status: 201 });
  } catch (error: any) {
    console.error("ERRO AO CRIAR CONTA:", error);
    return NextResponse.json({ error: "Erro ao criar conta." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "ID não fornecido." }, { status: 400 });

    // 1. Apaga todas as transações vinculadas à conta
    await prisma.transaction.deleteMany({
      where: { accountId: id }
    });

    // 2. Apaga a conta em si
    await prisma.account.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao deletar conta." }, { status: 500 });
  }
}