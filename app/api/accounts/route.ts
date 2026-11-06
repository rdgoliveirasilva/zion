import { financialDay } from "@/lib/statement";
import { scheduleCommitmentRefresh } from "@/lib/commitment-refresh";
import { hasSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const maxDuration = 120;
export async function GET(request: Request) {
  try {
    if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    if (new URL(request.url).searchParams.get("view") === "options") return NextResponse.json(await prisma.account.findMany({ select: { id: true, name: true, type: true }, orderBy: { createdAt: "asc" } }));
    scheduleCommitmentRefresh();
    const [accounts, bills] = await Promise.all([
      prisma.account.findMany({ orderBy: { createdAt: 'asc' } }),
      prisma.commitment.findMany({ where: { source: "card" } }),
    ]);
    const month = financialDay().slice(0,7);
    const byKey = new Map(bills.map(b => [b.key, b]));
    return NextResponse.json(accounts.map(account => {
      const bill = byKey.get(`card:${account.id}:${month}`);
      return { ...account, currentBill: bill ? { amount: bill.amount, dueDate: financialDay(bill.dueDate), estimated: bill.estimated } : null };
    }));
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