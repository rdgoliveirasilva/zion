import { after } from "next/server";
import { prisma } from "./prisma";
import { currentCardBill, cardBillArchive } from "./pluggy-bills";
import { lastTwelveMonths, institutionLabel } from "./financial-history";
import { dueDateFor } from "./commitment-rules";
import { reconcileCommitments } from "./commitments";

const runtime = globalThis as typeof globalThis & { zionCommitmentRefresh?: { next: number; inFlight: Promise<void> | null } };
const state = runtime.zionCommitmentRefresh ??= { next: 0, inFlight: null };

// Refresh stored snapshots independently of page rendering. Calls in the same
// worker share a promise; the database lock protects concurrent workers.
export function refreshCommitments(force = false): Promise<void> {
  if (state.inFlight) return force ? state.inFlight.then(() => refreshCommitments()) : state.inFlight;
  state.inFlight = updateSnapshots().finally(() => { state.inFlight = null; });
  return state.inFlight;
}

async function updateSnapshots() {
  const allAccounts = await prisma.account.findMany();
  const months = lastTwelveMonths();
  const bills = (await Promise.all(allAccounts.filter(a => a.type === "credit").map(async account => {
    const [current, archive] = await Promise.all([currentCardBill(account), cardBillArchive(account)]);
    const byMonth = new Map(archive.filter(b => months.includes(b.dueDate.slice(0,7))).map(b => [b.dueDate.slice(0,7), b]));
    if (current) byMonth.set(current.dueDate.slice(0,7), current);
    return [...byMonth.values()].map(bill => ({ account, bill }));
  }))).flat();

  await prisma.$transaction(async db => {
    await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
    const existing = new Map((await db.commitment.findMany({ where: { source: "card" } })).map(c => [c.key, c]));
    for (const { account, bill } of bills) {
      const key = `card:${account.id}:${bill.dueDate.slice(0,7)}`;
      const bank = institutionLabel([account.name, ...allAccounts.filter(a => account.pluggyItemId && a.pluggyItemId === account.pluggyItemId).map(a => a.name)]);
      const name = bank && !institutionLabel([account.name]) ? `${bank} · ${account.name}` : account.name;
      const data = { description: `Fatura ${name}`, amount: bill.amount, dueDate: dueDateFor(bill.dueDate.slice(0,7), Number(bill.dueDate.slice(8,10))), source: "card", estimated: bill.estimated ?? false };
      const old = existing.get(key);
      if (!old) await db.commitment.create({ data: { ...data, key } });
      else if (old.status !== "paid" && (old.amount !== data.amount || old.description !== data.description || old.estimated !== data.estimated || old.dueDate.getTime() !== data.dueDate.getTime())) await db.commitment.update({ where: { key }, data });
      else if (old.description !== data.description) await db.commitment.update({ where: { key }, data: { description: data.description } });
    }
    await reconcileCommitments(db);
  }, { maxWait: 10000, timeout: 60000 });
}

export function scheduleCommitmentRefresh() {
  if (Date.now() < state.next) return;
  state.next = Date.now() + 5 * 60_000;
  after(async () => {
    try { await refreshCommitments(); }
    catch { state.next = Date.now() + 60_000; console.error("Atualização de compromissos adiada; mantendo os dados salvos."); }
  });
}
