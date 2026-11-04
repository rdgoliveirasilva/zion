import { scheduleCommitmentRefresh } from "@/lib/commitment-refresh";
import { loadStatementPage } from "@/lib/statement-query";
import { prisma } from "@/lib/prisma";
import { loadCommitments } from "@/lib/commitments";
import { financialDay } from "@/lib/statement";
import { monthOffset, spendingSummary } from "@/lib/commitment-rules";
import { OverviewClient } from "./overview-client";
export const dynamic = 'force-dynamic';
export const maxDuration = 120;
export default async function OverviewPage() {
  scheduleCommitmentRefresh();
  const now = new Date(), today = financialDay(now);
  const [commitments, statement, accounts, recent, paid] = await Promise.all([
    loadCommitments(), loadStatementPage(undefined, now),
    prisma.account.findMany({ select: { id: true, name: true, balance: true, type: true, dueDate: true } }),
    prisma.transaction.findMany({ where: { date: { gte: new Date(monthOffset(today.slice(0,7), -1) + "-01T00:00:00-03:00"), lte: now } }, select: { amount: true, date: true, type: true, status: true, description: true, isBillPayment: true } }),
    prisma.transaction.aggregate({ where: { type: { in: ["expense", "bill"] }, status: { not: "pending" }, date: { lte: now } }, _sum: { amount: true } }),
  ]);
  return <OverviewClient statement={statement} spending={spendingSummary(recent, today)} totalExpenses={paid._sum.amount || 0} accounts={accounts} commitments={commitments} />;
}
