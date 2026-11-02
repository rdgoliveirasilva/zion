import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientLayout from "./client-layout";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get("zion_session")?.value;

  if (!session) {
    redirect("/login");
  }

  return <ClientLayout>{children}</ClientLayout>;
}