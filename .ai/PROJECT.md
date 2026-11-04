# Mapa do Zion

Aplicação de finanças pessoais em Next.js 16 (App Router), React 19, TypeScript, Prisma 7 e PostgreSQL. Importa contas/transações e faturas pela Pluggy. O deploy usa Vercel; `npm run build` gera o Prisma Client antes do build Next.

- `app/(auth)/login/`: entrada e sessão; `lib/session.ts` verifica o cookie.
- `app/(dashboard)/`: Home, extrato/transações, contas, compromissos, análises e configurações. `client-layout.tsx` e `nav.tsx` sustentam a navegação.
- `app/api/`: rotas HTTP. `app/api/pluggy/webhook/route.ts` recebe eventos autenticados; `lib/pluggy-sync.ts` importa dados.
- `lib/statement-query.ts`: consulta paginada do extrato; `lib/commitments.ts` lê/concilia compromissos; `lib/commitment-refresh.ts` atualiza os snapshots de faturas fora da renderização.
- `prisma/schema.prisma` e `prisma/migrations/`: modelo e migrações. `generated/prisma/` é gerado pelo build. Consulte `prisma/migrations/README.md` antes de qualquer mudança no banco.
- `tests/*.test.mjs`: testes de regras financeiras, webhook, extrato e cache; `scripts/check-commitments.mjs` e `scripts/check-statement.mjs` consultam o banco configurado.
- `app/globals.css` e componentes em `components/`: linguagem visual existente. Preserve a navegação responsiva e as tags de contas/cartões.

`CONTEXT.md` registra decisões financeiras anteriores; consulte apenas as seções pertinentes. `PLUGGY-WEBHOOKS.md` descreve a integração operacional. `.env.example` lista nomes de variáveis; `.env` contém valores locais e deve permanecer fora do Git.

Skills de Prisma estão em `.agents/skills/` e `skills-lock.json`. Não há OpenSpec configurado neste repositório nesta revisão; uma mudança de comportamento deve primeiro verificar se um fluxo de especificação já foi adicionado. Não suponha uma versão ou comandos OpenSpec ausentes.
