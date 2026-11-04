import { cookies } from "next/headers";
export async function hasSession() { return (await cookies()).get("zion_session")?.value === (process.env.AUTH_SECRET || "default_secret"); }
