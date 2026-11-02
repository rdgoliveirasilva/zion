import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password, remember } = await request.json();

    const validEmail = process.env.ZION_EMAIL;
    const validPassword = process.env.ZION_PASSWORD;

    if (email !== validEmail || password !== validPassword) {
      return NextResponse.json({ error: "E-mail ou senha incorretos." }, { status: 401 });
    }

    // Cria a resposta
    const response = NextResponse.json({ success: true });

    // Se "remember" for true, o cookie dura 30 dias. Se não, é um cookie de sessão.
    const maxAge = remember ? 60 * 60 * 24 * 30 : undefined;

    // Salva o cookie direto na resposta
    response.cookies.set({
      name: "zion_session",
      value: process.env.AUTH_SECRET || "default_secret",
      httpOnly: false, // Mantido false para o Next.js conseguir ler no Client-Side
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: maxAge, 
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Erro interno no servidor." }, { status: 500 });
  }
}