import { scheduleCommitmentRefresh } from "@/lib/commitment-refresh";
import { loadCommitments } from "@/lib/commitments";
import { financialDay } from "@/lib/statement";
import CommitmentsClient from "./commitments-client";
export const dynamic = "force-dynamic";
export const maxDuration = 120;
export default async function CommitmentsPage() {
  scheduleCommitmentRefresh();
  const commitments = await loadCommitments();
  return <CommitmentsClient commitments={commitments} today={financialDay()} />;
}
