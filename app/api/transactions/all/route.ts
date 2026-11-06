import { DELETE as deleteManualTransaction } from "../route";
import { financialDayEnd } from "@/lib/statement";
import { hasSession } from "@/lib/session";
import { transactionViewSelect } from "@/lib/transaction-view";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
    const transactions = await prisma.transaction.findMany({
      where: { date: { lte: financialDayEnd() } },
      orderBy: { date: 'desc' }, // Ordena do mais recente para o mais antigo
      select: transactionViewSelect
    });
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar transações." }, { status: 500 });
  }
}

// Keep the old URL compatible with the same authenticated manual-only deletion.
export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  return deleteManualTransaction(new Request(request.url, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) }));
}
