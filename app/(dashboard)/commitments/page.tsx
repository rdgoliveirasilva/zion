import { loadCommitments } from "@/lib/commitments";
import { financialDay } from "@/lib/statement";
import CommitmentsClient from "./commitments-client";
export const dynamic = "force-dynamic";
export default async function CommitmentsPage() {
  const commitments = await loadCommitments();
  return <CommitmentsClient commitments={commitments} today={financialDay()} />;
}
