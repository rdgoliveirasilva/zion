import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Apaga o cookie da sessão
  response.cookies.set({
    name: "zion_session",
    value: "",
    httpOnly: false,
    expires: new Date(0), // Define a data de expiração no passado para apagar
    path: "/",
  });

  return response;
}