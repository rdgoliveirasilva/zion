import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasSession } from "@/lib/session";
import { normalizeMerchant } from "@/lib/commitment-rules";

export async function GET() {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  return NextResponse.json(await prisma.category.findMany({ orderBy: { label: "asc" } }));
}
async function save(request: Request, create: boolean) {
  if (!await hasSession()) return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  try {
    const body = await request.json();
    const label = typeof body.label === "string" ? body.label.trim().replace(/\s+/g, " ") : "";
    if (!label || label.length > 40 || !/^#[0-9a-f]{6}$/i.test(body.color || "") || (body.archived !== undefined && typeof body.archived !== "boolean")) throw new Error();
    if (!create && body.value === "outros" && body.archived) return NextResponse.json({ error: "Outros deve permanecer disponível." }, { status: 400 });
    const data = { label, nameKey: normalizeMerchant(label), color: body.color, archived: body.archived ?? false };
    const category = create ? await prisma.category.create({ data: { ...data, value: `custom-${crypto.randomUUID()}` } })
      : await prisma.category.update({ where: { value: body.value }, data });
    return NextResponse.json(category, { status: create ? 201 : 200 });
  } catch { return NextResponse.json({ error: "Verifique nome e cor. Já pode existir uma categoria com esse nome." }, { status: 400 }); }
}
export const POST = (request: Request) => save(request, true);
export const PATCH = (request: Request) => save(request, false);
