# Migrações da Home

`00000000000000_baseline` representa as tabelas Account e Transaction anteriores à reformulação.
`20261104000000_home_commitments` adiciona metadados de categorização/importação, regras recorrentes e compromissos. Não exclui nem altera IDs, valores, datas ou descrições das movimentações existentes.

No PostgreSQL configurado neste projeto, a baseline foi registrada e a migração aditiva aplicada em 04/11/2026. O teste prévio executou o SQL em uma transação revertida e confirmou a preservação das 1.712 movimentações.

Para outros ambientes:

- Banco vazio: `npx prisma migrate deploy` aplica ambas as migrações.
- Banco legado sem histórico de migrações: primeiro comparar a estrutura com a baseline. Somente se corresponder, executar `npx prisma migrate resolve --applied 00000000000000_baseline`, seguido de `npx prisma migrate deploy`.
- Banco já migrado: executar apenas `npx prisma migrate deploy` antes de publicar o código. Nunca executar reset ou usar db push para essa atualização.
- O build continua gerando o Prisma Client e não aplica migrações automaticamente.

Validação: `node --test tests/*.test.mjs`, `npx tsc --noEmit`, `npm run build`.
`node scripts/check-home-migration.mjs` testa o SQL **apenas antes da primeira aplicação** e sempre reverte a transação.
`node scripts/check-commitments.mjs` testa a conciliação no esquema já migrado, com fixtures e todas as alterações revertidas. Requer DATABASE_URL local e não publica dados de teste.

Regras recorrentes geram uma ocorrência por período até 12 meses à frente. A conciliação exige conta, descrição normalizada, valor exato, período e uma movimentação identificada. Casos ambíguos continuam pendentes; a movimentação explicitamente selecionada pelo usuário pode ser vinculada. Categorias manuais têm prioridade. Valores ou descrições diferentes não são considerados pagamento automaticamente. Repetir a criação da mesma regra mantém o calendário e o valor original.

Compras recorrentes no cartão ficam identificadas como incluídas na fatura e não entram novamente no total de compromissos. A fatura usa o cálculo já existente e o pagamento pode ser confirmado pelo fluxo de pagamentos. Pagamentos identificados de fatura são excluídos da análise de gastos. A confirmação manual reutiliza uma movimentação correspondente disponível antes de criar um pagamento avulso.

## Categorias, metas e arquivo de 12 meses

`20261104010000_categories_and_goals` foi aplicada em 04/11/2026 após validação com rollback. Cria Category (com as oito categorias preexistentes e IDs preservados) e SpendingGoal (uma meta por mês em centavos), adicionando apenas o indicador estimated em Commitment. Não altera o histórico de transações.

Categorias são arquivadas em vez de excluídas. Renomear altera o rótulo, não o identificador salvo nas transações e regras. Metas são específicas do mês escolhido. O arquivo de faturas usa apenas dados oficiais disponíveis, sem inventar meses ausentes. Pagamento automático de fatura exige movimento de crédito confirmado no mesmo cartão, no mesmo mês e com valor exato; correspondências ambíguas não são conciliadas.
