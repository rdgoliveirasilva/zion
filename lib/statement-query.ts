import { prisma } from "./prisma";
import type { Prisma } from "@/generated/prisma";
import { transactionViewSelect } from "./transaction-view";
import { financialDay, financialDayEnd } from "./statement";
import { normalizeMerchant } from "./commitment-rules";

export async function loadStatementPage(params = new URLSearchParams(), now = new Date()) {
  const page = Math.max(1, Math.min(100000, Number.parseInt(params.get("page") || "1", 10) || 1));
  const search = normalizeMerchant((params.get("search") || "").slice(0,200));
  const start = params.get("start") || "", end = params.get("end") || "";
  const today = financialDay(now);
  const custom = params.get("period") === "custom";
  const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const empty = { transactions: [], total: 0, page, pageCount: 1 };
  if (custom && (!datePattern.test(start) || !datePattern.test(end) || start > end || start > today)) return empty;
  const from = custom ? new Date(start + "T00:00:00-03:00") : undefined;
  const until = custom ? new Date(Math.min(financialDayEnd(now).getTime(), new Date(end + "T23:59:59.999-03:00").getTime())) : financialDayEnd(now);
  if ((from && !Number.isFinite(from.getTime())) || !Number.isFinite(until.getTime())) return empty;
  const where: Prisma.TransactionWhereInput = {
    date: { ...(from ? { gte: from } : {}), lte: until },
    NOT: { type: "bill", status: "pending" },
  };
  const type = params.get("type"), category = params.get("category");
  if (type && type !== "all") where.type = type;
  if (category && category !== "all") where.category = category;
  // Preserve the existing accent-insensitive search without requiring a
  // destructive database extension/migration. Only IDs/descriptions are read.
  if (search) {
    const candidates = await prisma.transaction.findMany({ where, select: { id: true, description: true } });
    const ids = candidates.filter(t => normalizeMerchant(t.description).includes(search)).map(t => t.id);
    if (!ids.length) return empty;
    where.id = { in: ids };
  }
  const [total, transactions] = await Promise.all([
    prisma.transaction.count({ where }),
    prisma.transaction.findMany({ where, orderBy: [{ date: "desc" }, { id: "desc" }], skip: (page - 1) * 15, take: 15, select: transactionViewSelect }),
  ]);
  return { transactions, total, page, pageCount: Math.max(1, Math.ceil(total / 15)) };
}
