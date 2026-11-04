import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasSession } from "@/lib/session";

export async function PUT(request: Request) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  try {
    const { month, amount } = await request.json();
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month) || !Number.isSafeInteger(amount) || amount <= 0 || amount > 2147483647) throw new Error();
    return NextResponse.json(await prisma.spendingGoal.upsert({ where: { month }, create: { month, amount }, update: { amount } }));
  } catch { return NextResponse.json({ error: "Informe um mês e uma meta válida." }, { status: 400 }); }
}
