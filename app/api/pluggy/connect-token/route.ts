import { NextResponse } from "next/server";
import { PluggyClient } from "pluggy-sdk";

export async function POST() {
  try {
    const client = new PluggyClient({
      clientId: process.env.PLUGGY_CLIENT_ID!,
      clientSecret: process.env.PLUGGY_CLIENT_SECRET!,
    });

    // Gera o token de conexão
    const connectToken = await client.createConnectToken();

    return NextResponse.json({ accessToken: connectToken.accessToken });
  } catch (error: any) {
    console.error("Erro ao gerar token da Pluggy:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao gerar token." },
      { status: 500 }
    );
  }
}