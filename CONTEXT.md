# CONTEXT.md — Zion

> Documento de contexto do projeto. Toda decisão de arquitetura, stack e convenção
> deve estar registrada aqui. Se você é um agente de IA ou um novo desenvolvedor
> entrando neste projeto, **leia este arquivo primeiro**.

---

## 1. Visão Geral

**Zion** é um assistente financeiro pessoal, de uso **individual** (single-user), 
construído como um **PWA instalável** para parecer e se comportar como um aplicativo 
nativo (iOS/Android/Desktop). Seu objetivo é centralizar a administração das finanças 
pessoais do dono do app, com foco em:

- **Integração Open Finance** via **Pluggy** (usando o conector **MeuPluggy** para contas pessoais no **Itaú** e **Nubank**).
- **Controle financeiro simples e rápido** — lançamento manual em poucos toques, 
  visualização clara de saldos, gastos por categoria, orçamentos e metas.
- **Separação de Contextos:** O saldo consolidado considera apenas contas correntes. Faturas de cartão de crédito são tratadas separadamente como "Contas a Pagar" ou "Faturas".
- **Experiência "app-like"** — instalação na home screen, ícone próprio, 
  funcionamento offline básico e notificações de atualização.

---

## 2. Stack Técnica

### Core
| Camada | Tecnologia | Versão alvo |
|---|---|---|
| Framework | Next.js (App Router) | 16+ (Turbopack) |
| Linguagem | TypeScript (strict) | 5.x |
| Gerenciador de pacotes | npm | latest |
| Runtime | Node.js | 20 LTS |

### Frontend
| Camada | Tecnologia |
|---|---|
| Estilização | Tailwind CSS (v3) + CSS Variables (Light/Dark) |
| Componentes | Shadcn/UI (Radix UI) |
| Ícones | Lucide React |
| Formulários | React Hook Form + Zod |
| Temas | `next-themes` (Padrão: Light) |
| Notificações | `sonner` (Toasts) |

### Backend / Dados
| Camada | Tecnologia |
|---|---|
| API | Next.js Route Handlers (`app/api/`) |
| Autenticação | Sistema Próprio via Cookie (`zion_session`) |
| ORM | Prisma 7 (com `@prisma/adapter-pg`) |
| Banco | PostgreSQL (Neon) |

### Integrações
| Camada | Tecnologia |
|---|---|
| Open Finance | Pluggy (`pluggy-sdk` + `react-pluggy-connect`) |

---

## 3. Arquitetura e Estrutura de Pastas

```text
zion/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx       # Tela de Login (Mobile/Desktop + Lembrar de mim)
│   ├── (dashboard)/
│   │   ├── layout.tsx         # Server Component: Verifica cookie e protege a rota
│   │   ├── client-layout.tsx  # Client Component: Estado do Modal e Navegação
│   │   ├── nav.tsx            # Sidebar (Desktop) e Bottom Nav (Mobile) + Logout
│   │   ├── page.tsx           # Busca dados do Prisma e passa para o Client
│   │   ├── overview-client.tsx# Visão Geral, Filtros de Extrato e Cards
│   │   ├── accounts/          # Tela de Contas (Open Finance + Manual)
│   │   ├── transactions/      # Extrato completo com busca e exclusão
│   │   └── quick-actions-modal.tsx # Modal de novas transações
│   ├── api/
│   │   ├── accounts/          # CRUD de contas
│   │   ├── auth/login/        # Valida credenciais e cria o cookie
│   │   ├── logout/            # Limpa o cookie
│   │   ├── transactions/      # CRUD de transações
│   │   └── pluggy/
│   │       ├── connect-token/ # Gera o token do widget
│   │       └── sync/          # Sincroniza contas e transações da Pluggy
│   ├── globals.css            # Variáveis de tema (Light/Dark) e animações
│   ├── layout.tsx             # Root Layout (Provedores e Toaster)
│   └── manifest.ts            # Manifesto do PWA
├── components/
│   ├── ui/                    # Componentes do Shadcn + PluggyConnectButton
│   └── ...
├── lib/
│   ├── prisma.ts              # Instância do Prisma com adaptador PG
│   ├── statement.ts           # Funções de data/fuso horário (America/Sao_Paulo)
│   ├── pluggy-sync.ts         # Lógica compartilhada de sincronização
│   └── utils.ts               # Função cn()
├── prisma/
│   └── schema.prisma          # Modelos Account e Transaction
├── public/images/             # Assets (zion-hero, zion-logo)
└── .env                       # Credenciais (Zion, Pluggy, Neon)
```

4. Modelo de Dados (Prisma)
Account: Representa contas bancárias e cartões de crédito. Possui type ("checking", "credit"), balance (em centavos), pluggyAccountId e dueDate (para cartões).

Transaction: Representa movimentações financeiras. Possui type ("expense", "income", "bill"), status ("paid", "pending"), category e accountId (chave estrangeira para Account).

Convenções:

Valores monetários sempre em centavos (integer).

Datas importadas preservam o instante informado pela Pluggy. O extrato usa America/Sao_Paulo para exibição e filtros, por meio de lib/statement.ts. Lançamentos manuais usam a data escolhida ancorada ao meio-dia.

5. Sistema de Autenticação (Single-User)
Credenciais: Variáveis de ambiente (ZION_EMAIL, ZION_PASSWORD, AUTH_SECRET).

Rota de Login (/api/auth/login): Cria um cookie zion_session. Aceita o parâmetro remember (se true, dura 30 dias; se false, é um cookie de sessão).

Proteção: Feita estritamente no layout.tsx da pasta (dashboard). Não usamos middleware.ts ou proxy.ts (causavam loops de redirecionamento).

Logout: Rota em /api/logout que apaga o cookie.

6. Integração Open Finance (Pluggy)
MeuPluggy: Como o Zion é pessoal, usamos o conector MeuPluggy para evitar custos com o plano Trial. O usuário conecta os bancos no site do MeuPluggy e autoriza a leitura no widget do Zion.

Sincronização: O onSuccess do widget chama /api/pluggy/sync. A rotina compartilhada lib/pluggy-sync.ts busca contas e transações do último ano até hoje e também é chamada pelo webhook. Saldo utilizado vem dos dados da conta. Faturas são consultadas em /bills por lib/pluggy-bills.ts e selecionadas pelo mês de vencimento. As gravações são atômicas e serializadas por conexão no PostgreSQL.

Atualização Manual: Implementado um botão "Atualizar" no cabeçalho da Visão Geral. Ele chama a rota /api/pluggy/sync com um POST vazio. A rota foi adaptada para, caso não receba um itemId, buscar todos os pluggyItemId distintos no banco e sincronizar todas as conexões de uma vez.

Tela de Loading: Modal com limite de tempo e fechamento; a lista de contas é atualizada ao terminar. Widget Pluggy renderizado por portal fora do contêiner animado.

Itaú: Havia movimentações na Pluggy, mas nenhuma importada no Zion. A conexão foi reprocessada e 363 movimentações foram salvas; repetir a importação adicionou zero duplicatas. Não atribuir essa falha à indisponibilidade de dados do banco sem consultar a Pluggy.

Delay: O botão "Atualizar" e o webhook dependem do tempo de processamento da Pluggy e dos limites do Open Finance. Transações recentes podem levar alguns minutos para aparecer.

7. UI/UX e Design System
Temas: Suporta Modo Claro e Escuro. O padrão é o Light. As cores usam variáveis CSS (--background, --primary, etc.) mapeadas no tailwind.config.js.

Mobile: Foco na ergonomia. O Login usa bottom-sheet. O Dashboard tem Bottom Nav com botão flutuante central (Nova Transação) e botão de tema no topo.

Desktop: Sidebar fixa com logo e botão de logout.

Animações: animate-slide-up (entrada de elementos) e animate-gradient-text (texto com gradiente em movimento).

Categorias: As transações são categorizadas com ícones e cores (Alimentação, Transporte, Moradia, etc.) mapeados no objeto CATEGORY_MAP em overview-client.tsx e quick-actions-modal.tsx.

Filtro do Extrato: Histórico é o padrão; há Período, busca por nome e paginação de 15 resultados.

8. Próximos Passos (Roadmap)
Fase 1 — Concluída
☑ Autenticação e proteção de rotas
☑ Banco de dados (Neon) e Prisma
☑ Tela de Contas e Sincronização Pluggy
☑ Tela de Transações (Extrato, Filtros e Exclusão)
☑ Modo Light/Dark e Categorias
Fase 2 — Webhooks implementados e configurados
☑ Configurar os quatro eventos e headers na Pluggy.
☑ Implementar app/api/pluggy/webhook/route.ts com autenticação e importação compartilhada.
☑ Implementar botão de "Atualizar" manual na Visão Geral.
□ Confirmar uma entrega automática real no painel Events da Pluggy.
Fase 3 — Futuro
□ Tela de Orçamentos (/budgets)
□ Relatórios e Gráficos (/reports)
□ PWA Completo (Service Worker com Serwist)
Atualização operacional — 02/11/2026
Produção: https://meuzion.vercel.app

Endpoint: https://meuzion.vercel.app/api/pluggy/webhook

Eventos ativos existentes: item/created, item/updated, transactions/created, transactions/updated. Os quatro cadastros foram atualizados via API com o header x-pluggy-secret, sem criar novos cadastros.

O valor do header corresponde a PLUGGY_WEBHOOK_SECRET, salvo no .env local e configurado em produção. Não registrar o valor em documentação, logs ou Git. .env permanece ignorado pelo Git.

Validação em produção: POST autenticado com evento de diagnóstico não suportado retornou HTTP 200 e { "received": true, "ignored": true }. Isso confirma o endpoint e a autenticação; não equivale a uma entrega automática originada pela Pluggy.

Headers personalizados da Pluggy são configurados somente pela API. Para visualizar os cadastros: Dashboard > Applications > lápis da aplicação > Webhooks. Para acompanhar entregas: Events.

Código da integração: commit fe97958; build e seis testes passaram. Guia complementar: PLUGGY-WEBHOOKS.md.

Limitações: Eventos de exclusão não são processados; conciliação usa conta, descrição, valor e data. O webhook não agenda atualizações bancárias: depende dos eventos e da atualização da conexão na Pluggy.

## Faturas abertas — 03/11/2026

- Fatura oficial do mês tem prioridade. Sem ela, a prévia usa billForecastDate dos lançamentos da Pluggy, incluindo parcelas já disponibilizadas para aquele mês, estornos e encargos. Não duplica nem inventa a próxima parcela.
- Pagamentos de faturas anteriores são excluídos da prévia. A tela identifica o valor como estimado.
- Nubank: usuário confirmou fechamento no dia 08 e vencimento no dia 15; o ciclo de novembro inicia em 08/10. O mês previsto informado pela instituição determina a inclusão de cada parcela.
- Divergência encontrada: lançamentos de novembro somavam R$ 1.829,84; saldo consolidado R$ 2.974,05 menos R$ 1.144,23 de parcelas futuras resultava em R$ 1.829,82, confirmado pelo usuário. Não foi encontrado lançamento isolado explicando os R$ 0,02; todos os valores recebidos tinham duas casas decimais.
- Conciliação da estimativa: usa saldo consolidado menos lançamentos dos meses futuros apenas quando a diferença para a soma do ciclo é de até dois centavos e não existem pendências sem mês previsto. Não aplica desconto fixo nem altera faturas oficiais. O ajuste fica registrado em reconciliationCents.
- Compra adicional de R$ 6,20 ainda não constava na consulta à Pluggy; não inserir manualmente para evitar duplicidade na próxima atualização.

## Reformulação da Home — 04/11/2026

- Ordem principal: Saldo Consolidado (cálculo preservado), Compromissos do Mês, Seus Gastos, Próximos Vencimentos e Extrato. Histórico/Período, busca, paginação de 15 itens e tags de conta/cartão preservados. Mobile: Início, Gastos, + e Análises; gestão de contas permanece acessível na Home.
- Modal compartilhado no extrato e em Transações permite categorizar e criar recorrência mensal, trimestral ou anual. Alterar categoria não muda valor, data ou ID. Categorias manuais prevalecem nas sincronizações.
- PostgreSQL: novos modelos Commitment e RecurringRule. Transaction recebe categorySource, isBillPayment e pluggyTransactionId único opcional. Importações novas começam em Outros; regras autorizadas podem aplicar a categoria. Identidade Pluggy evita duplicação em sincronizações, reaproveitando registros legados por correspondência exata na primeira importação.
- Migração aditiva aplicada ao banco configurado após teste com rollback: 1.712 movimentações preservadas. Baseline registrada para a estrutura legada. Instruções de outros ambientes e testes: prisma/migrations/README.md.
- Compromissos ficam separados das movimentações. Contas manuais existentes são reaproveitadas quando a correspondência é única; faturas mantêm o cálculo anterior. Compras recorrentes em cartão não entram novamente no total de compromissos. Pagamentos de fatura identificados são excluídos dos gastos.
- Conciliação conservadora por conta, descrição, valor, período e identidade; casos ambíguos permanecem pendentes. A escolha explícita de uma movimentação pode resolver sua identidade. Horizonte de geração: 12 meses à frente, renovado na abertura das telas e nas sincronizações. Uma regra já existente mantém valor e calendário; alterações de valor/descrição exigem conferência.
- Novas telas /commitments e análise real em /reports. Comparação de gastos usa o mês atual até hoje contra o mês anterior completo. Faturas sem confirmação de pagamento não são marcadas como pagas por semelhança de descrição.
- Validação: 17 testes unitários, TypeScript, build de produção, páginas autenticadas HTTP 200 e bloqueio HTTP 401 da edição sem sessão; teste de integração PostgreSQL com rollback verifica idempotência, categorias manuais, histórico, cartão e correspondências ambíguas. Não houve inspeção visual em dispositivo físico.

## Home, arquivos e configurações — revisão de 04/11/2026

- Extrato imediatamente abaixo do Saldo Consolidado na mesma coluna, inclusive no mobile. Removidos da Home os cards Faturas do mês e Contas Conectadas. Compromissos do Mês foi renomeado para Contas a pagar.
- Navegação: Início, Gastos, +, Análises e Configurações (dois destinos de cada lado do + no mobile). Configurações > Dados reutiliza a gestão de contas existente; /accounts continua disponível. Configurações > Categorias permite criar, renomear, escolher cor, arquivar e restaurar. Valores das categorias são estáveis, preservando o histórico ao renomear/arquivar; Outros não pode ser arquivada.
- Category e SpendingGoal persistidos no PostgreSQL pela migração aditiva 20261104010000_categories_and_goals; Commitment ganhou estimated. Migração testada com rollback e aplicada, preservando 1.712 movimentações. As oito categorias existentes foram cadastradas com os mesmos identificadores.
- Contas a pagar apresenta cards coloridos (Nubank roxo, Itaú laranja; demais usam a cor da categoria), arquivo dos últimos 12 meses com filtros Todas/Pagas/Não pagas, próximos meses e exportação CSV. O cartão chamado gold é identificado como Nubank pelas contas da mesma conexão Pluggy, sem presumir a instituição apenas pelo nome genérico.
- Histórico de faturas importa apenas faturas oficiais disponíveis na Pluggy. A fatura corrente mantém a lógica de estimativa/conciliação existente. Baixa automática exige crédito confirmado de pagamento de fatura no mesmo cartão, valor exato e mesmo mês, com correspondência única. Vincula a movimentação existente; não cria outro pagamento. Valores parciais, períodos diferentes e casos ambíguos continuam pendentes. A consulta real inicial encontrou 15 faturas e conciliou cinco pagamentos.
- Análises inclui arquivo de 12 meses, evolução mensal, gastos por categoria, meta individual por mês e progresso/restante/excesso. Metas não são copiadas automaticamente para outros meses. Arquivo CSV de 12 meses disponível. Gastos excluem pagamentos de fatura para não duplicar compras; meses sem importação são identificados como sem registros, sem presumir ausência de despesas.
- Validação desta revisão: 23 testes unitários, integração PostgreSQL revertida para categorias/metas/baixa de faturas, TypeScript e build; seis páginas locais HTTP 200 e rotas novas protegidas por sessão. A Home foi verificada por renderização HTTP; não houve validação visual em dispositivo físico.


## Desempenho e atualização do PWA — 04/11/2026

- Corrigidos os gargalos das alterações de cache/componentização: leituras de compromissos não fazem mais chamadas Pluggy nem conciliação/escritas durante a renderização. Snapshots são atualizados após a resposta (intervalo de cinco minutos por worker) e após sincronizações/webhooks; a leitura usa os dados já persistidos. Cache das faturas é invalidado após importação.
- Extrato e Transações reutilizam StatementList e a consulta paginada /api/statement: 15 registros por página, histórico completo consultável, busca sem acentos, período, categorias, tags e modal preservados. Resumos são calculados no servidor; a Home não envia o histórico inteiro ao navegador.
- Formatadores de data/moeda reutilizados, relatórios agrupados uma vez por mês, modais carregados sob demanda. Corrigida também a conciliação de regras manuais sem conta vinculada.
- Cache cliente somente em memória por 20 segundos, deduplicação, invalidação após alterações e proteção contra respostas antigas. Consultas têm timeout e erro com tentativa novamente. Navegação tem loading/error boundaries, indicação de destino e volta ao topo ao trocar de página. Login evita requisição duplicada e tem timeout.
- Botão Atualizar página disponível também no PWA: recarrega a aplicação sem solicitar importação bancária. Não foi criado cache offline de dados financeiros.
- Validação: build de produção/TypeScript e 29 testes aprovados; integração do extrato conferiu 1703 registros elegíveis, páginas sem duplicação, busca e filtros; conciliação validada com transação revertida. Páginas principais HTTP 200 e API sem sessão HTTP 401.
- Medições locais (não representam latência em celular): Home de aproximadamente 599 KB para 101 KB, extrato paginado 4 KB em vez de baixar 439 KB de histórico. Benchmark sintético com 1712 registros manteve resultados: filtro 486→25 ms, resumo 156→5 ms. Sem migração de banco; sem validação visual em dispositivo físico.


## Contas a pagar em meses expansíveis — 05/11/2026

- A página `/commitments` começa pelo resumo do mês atual (total, pago e restante), seguido de menus de meses expansíveis, 12 por página. O mês atual abre por padrão; filtros Todas/Pagas/Não pagas se aplicam aos meses e Não pagas informa o total atrasado. Cada mês exporta seu próprio CSV.
- Ocorrências vinculadas a RecurringRule permitem marcar paga manualmente sem criar movimentação bancária, mudar categoria da regra e de suas ocorrências, ou encerrar a recorrência. A exclusão desativa a regra, elimina somente pendências dessa regra e preserva ocorrências pagas e transações históricas. Faturas de cartão não são tratadas como regra recorrente editável.
- A API `PATCH/DELETE /api/commitments/[id]` exige sessão e serializa alterações com o bloqueio de conciliação. Nenhuma migração foi necessária. Build, TypeScript e testes de ações/financeiros devem ser verificados antes do envio.


## Compromissos do mês e edição — 05/11/2026

- `/commitments` exibe o resumo, depois Compromissos do mês (mês atual aberto) e Compromissos por mês com Futuro/Passado. Futuro cobre os 13 meses seguintes em ordem crescente, Passado mostra meses com registros em ordem decrescente; os painéis são paginados 12 por página.
- Todas as ocorrências podem ser editadas: valor, dia de vencimento e categoria. Contas manuais podem ativar recorrência mensal; desativar uma recorrência conserva a ocorrência selecionada e o histórico pago e retira pendências futuras. Faturas de cartão continuam automáticas pelo banco e não permitem desligar essa origem. Vencimento de faturas e ocorrências recorrentes pode mudar de dia dentro do mês; mudar de mês exigiria reidentificar a competência e o vínculo com pagamento.
- `manualOverride` em Commitment (`20261105010000_commitment_manual_override`) preserva alterações financeiras individuais nas próximas sincronizações sem alterar transações bancárias. Mudança isolada de categoria não interrompe a atualização automática do valor. A conciliação continua buscando pagamento único por valor ajustado, conta, descrição e mês. A migração aditiva foi aplicada ao PostgreSQL configurado antes do push.


## Lançamentos manuais — 06/11/2026

- Menu: registrar pagamento, registrar compra no cartão, adicionar conta a pagar e registrar recebimento. Recebimento persiste como income; compras e pagamentos como expense; contas futuras como Commitment pendente.
- Datas do formulário e limites do extrato usam o calendário de São Paulo, incluindo o dia inteiro, para não ocultar lançamentos ancorados ao meio-dia nem selecionar amanhã à noite.
- Compra manual exige vínculo com uma conta de cartão existente. Pagamentos e recebimentos permitem vínculo opcional com conta bancária. O vínculo identifica a origem sem alterar Account.balance, que continua informado pelo banco.
- Valores positivos em reais são validados em centavos; datas inválidas e movimentações futuras são rejeitadas. Contas a pagar aceitam vencimento futuro. O cadastro confirma sucesso e invalida as consultas locais.


### Edição, vínculos e entrada de valores

- Detalhes do extrato e da Home permitem editar nome/valor e apagar lançamentos com categoria de origem manual e sem ID Pluggy. Movimentações importadas continuam com edição de categoria, preservando nome, valor e data bancários. A API verifica essa distinção e exige sessão.
- Exclusão desvincula a movimentação e reabre o compromisso associado como pendente. Alterar o valor também retira a baixa anterior; renomear conserva o vínculo. Operações são atômicas sob o lock de compromissos. O saldo bancário não é modificado.
- Campos monetários de lançamentos, edição, contas a pagar, metas e saldo usam formatação brasileira enquanto se digita: 1990 vira 19,90 e 123456 vira 1.234,56. A conversão para centavos preserva separadores de milhar; campo vazio continua vazio.
- Detalhes de lançamentos manuais permitem trocar ou remover o vínculo com conta/cartão. Recebimentos aceitam somente conta bancária. Trocar o vínculo reabre o compromisso associado, preserva saldo bancário e não modifica movimentações importadas.


### Exclusão e desempenho

- DELETE manual é idempotente: registro já removido retorna sucesso. Validação de pedido retorna 400; movimentação importada retorna 409; indisponibilidade/timeout retorna 503 com possibilidade de repetir. A transação de exclusão permite aguardar o lock da atualização de compromissos, mantendo reabertura do compromisso e exclusão atômicas.
- Conciliação lê os compromissos em lote e evita regravar ocorrências pendentes sem alterações. Formulários consultam somente opções de contas, sem buscar faturas ou agendar sincronização. Opções frescas são compartilhadas e preservadas nas inclusões/exclusões; contas a pagar só são consultadas quando essa modalidade é selecionada.
- Após confirmação do servidor, o extrato insere/remove o lançamento localmente e atualiza os dados em segundo plano. Falhas conservam a movimentação visível e exibem o motivo retornado pela API. Botão de exclusão na lista fica desabilitado durante a operação.

### Validação e pendências

- Última implementação enviada para `main`: `e254f52`, após `8655b8c` (formulários e datas), `7ce9e4a` (edição e formatação) e `6f25113` (edição de vínculo). Não houve alteração de schema nem migração nesta revisão.
- Validação local concluída: 55 testes aprovados, `npx tsc --noEmit` e `npm run build`. Testes cobrem autenticação, valores formatados, edição e remoção de vínculo, proteção de movimentações importadas, exclusão repetida, falha transitória do banco e invalidação de cache.
- Teste sintético da conciliação: 14 ocorrências pendentes sem alterações usam uma leitura de compromissos e nenhuma gravação. Isso verifica a redução de trabalho; não representa uma medição de latência em produção ou em celular.
- O 400 relatado na exclusão não foi reproduzido em produção. O código anterior convertia todas as exceções em 400 e usava o limite padrão da transação ao esperar o bloqueio compartilhado com a atualização de compromissos; contenção/timeout é uma hipótese, não uma causa confirmada. O tratamento atual distingue pedido inválido, origem importada e falha operacional.
- A tentativa mais recente de `node scripts/check-commitments.mjs`, que usa transação revertida, ficou sem resposta e foi encerrada sem confirmação de sucesso. Não considerar essa execução como integração aprovada, nem substituir por ela as validações históricas registradas acima.
- Pendente: confirmar criação, edição de vínculo e exclusão no ambiente publicado, verificar a interface em desktop/mobile e medir a latência real. Push concluído não comprova que o deploy terminou ou que a falha relatada desapareceu em produção.

- Contas a pagar manuais avulsas também exibem Excluir conta. DELETE remove somente o Commitment selecionado, preservando a movimentação bancária vinculada; recorrências mantêm encerramento da regra e preservação de ocorrências pagas. Faturas automáticas permanecem protegidas.
