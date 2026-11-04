import { unstable_cache } from "next/cache";
import { PluggyClient } from "pluggy-sdk";
import { selectCurrentBill } from "./card-bill";
import { financialDay } from "./statement";

const loadBill = unstable_cache(async (accountId: string, month: string) => {
  const client = new PluggyClient({ clientId: process.env.PLUGGY_CLIENT_ID!, clientSecret: process.env.PLUGGY_CLIENT_SECRET! });
  const first = await client.fetchCreditCardBills(accountId, { page: 1, pageSize: 100 });
  const bills = [...first.results];
  for (let page = 2; page <= first.totalPages; page++) {
    bills.push(...(await client.fetchCreditCardBills(accountId, { page, pageSize: 100 })).results);
  }
  return selectCurrentBill(bills, month);
}, ["current-credit-card-bill"], { revalidate: 60 });

export async function currentCardBill(account: { type: string; pluggyAccountId: string | null }) {
  if (account.type !== "credit" || !account.pluggyAccountId) return null;
  try { return await loadBill(account.pluggyAccountId, financialDay().slice(0, 7)); }
  catch { return null; }
}
