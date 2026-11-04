# Comandos verificados no repositório

Execute na raiz com Node.js e dependências instaladas por `npm ci`. O banco e serviços externos precisam das variáveis de `.env.example` quando o comando acessá-los.

- `npm run dev` — Next.js local.
- `node --test tests/*.test.mjs` — suíte de testes de regras e falhas conhecidas.
- `npx tsc --noEmit` — verificação TypeScript.
- `npm run build` — gera Prisma Client e faz build de produção.
- `node scripts/check-statement.mjs` — integração de leitura do extrato no banco configurado.
- `node scripts/check-commitments.mjs` — valida conciliação em transação revertida no banco configurado.
- `npx prisma migrate status` — consulta estado das migrações; leia `prisma/migrations/README.md` antes de aplicá-las.

O script `npm run lint` existe no `package.json`, mas usa `next lint`, removido nas versões recentes do Next; não o trate como verificação válida até que seja corrigido. Testes de integração dependem de conectividade e não são pré-requisito para mudanças exclusivamente documentais.
