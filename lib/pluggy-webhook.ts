import { timingSafeEqual } from "node:crypto";
export const SYNC_EVENTS = new Set(["item/created", "item/updated", "transactions/created", "transactions/updated"]);
export function authenticateWebhook(header: string | null, secret: string | undefined): boolean {
  if (!secret || !header) return false;
  const expected = Buffer.from(secret), actual = Buffer.from(header);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
