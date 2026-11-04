import { unstable_cache } from "next/cache";
import { PluggyClient } from "pluggy-sdk";
import { selectCurrentBill, estimateCurrentBill, reconcileEstimatedBill } from "./card-bill";
import { financialDay } from "./statement";

const loadBills = unstable_cache(async (accountId: string) => {
  const client = new PluggyClient({ clientId: process.env.PLUGGY_CLIENT_ID!, clientSecret: process.env.PLUGGY_CLIENT_SECRET! });
  const first = await client.fetchCreditCardBills(accountId, { page: 1, pageSize: 100 });
  const bills = [...first.results];
  for (let page = 2; page <= first.totalPages; page++) {
    bills.push(...(await client.fetchCreditCardBills(accountId, { page, pageSize: 100 })).results);
  }
  return bills;
}, ["credit-card-bill-history-v1"], { revalidate: 60 });

const loadBill = unstable_cache(async (accountId: string, month: string) => {
  const client = new PluggyClient({ clientId: process.env.PLUGGY_CLIENT_ID!, clientSecret: process.env.PLUGGY_CLIENT_SECRET! });
  const bills = await loadBills(accountId);
  const official = selectCurrentBill(bills, month);
  if (official) return official;
  const transactions = await client.fetchAllTransactions(accountId);
  const estimated = estimateCurrentBill(transactions, bills, month);
  const account = await client.fetchAccount(accountId);
  return reconcileEstimatedBill(estimated, transactions, month, account.balance);
}, ["current-credit-card-bill-v3"], { revalidate: 60 });

export async function currentCardBill(account: { type: string; pluggyAccountId: string | null }) {
  if (account.type !== "credit" || !account.pluggyAccountId) return null;
  try { return await loadBill(account.pluggyAccountId, financialDay().slice(0, 7)); }
  catch { return null; }
}

export async function cardBillArchive(account: { type: string; pluggyAccountId: string | null }) {
  if (account.type !== "credit" || !account.pluggyAccountId) return [];
  try {
    const bills = await loadBills(account.pluggyAccountId);
    const months = [...new Set(bills.map(b => new Date(b.dueDate).toISOString().slice(0,7)))];
    return months.map(month => selectCurrentBill(bills, month)!);
  } catch { return []; }
}
