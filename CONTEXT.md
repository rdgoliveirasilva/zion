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

Sincronização: O onSuccess do widget chama /api/pluggy/sync. A rotina compartilhada lib/pluggy-sync.ts busca contas e transações do último ano até hoje e também é chamada pelo webhook. Saldo e vencimento do cartão vêm dos dados da conta; não há chamada ao endpoint /bills. As gravações são atômicas e serializadas por conexão no PostgreSQL.

Tela de Loading: Modal com limite de tempo e fechamento; a lista de contas é atualizada ao terminar. Widget Pluggy renderizado por portal fora do contêiner animado. Não adicionar botão manual de sincronização: preferência do usuário por atualização via webhooks.

Itaú: havia movimentações na Pluggy, mas nenhuma importada no Zion. A conexão foi reprocessada e 363 movimentações foram salvas; repetir a importação adicionou zero duplicatas. Não atribuir essa falha à indisponibilidade de dados do banco sem consultar a Pluggy.

7. UI/UX e Design System
Temas: Suporta Modo Claro e Escuro. O padrão é o Light. As cores usam variáveis CSS (--background, --primary, etc.) mapeadas no tailwind.config.js.

Mobile: Foco na ergonomia. O Login usa bottom-sheet. O Dashboard tem Bottom Nav com botão flutuante central (Nova Transação) e botão de tema no topo.

Desktop: Sidebar fixa com logo e botão de logout.

Animações: animate-slide-up (entrada de elementos) e animate-gradient-text (texto com gradiente em movimento).

Categorias: As transações são categorizadas com ícones e cores (Alimentação, Transporte, Moradia, etc.) mapeados no objeto CATEGORY_MAP em overview-client.tsx e quick-actions-modal.tsx.

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
□ Confirmar uma entrega automática real no painel Events da Pluggy.
Fase 3 — Futuro
□ Tela de Orçamentos (/budgets)
□ Relatórios e Gráficos (/reports)
□ PWA Completo (Service Worker com Serwist)


## Atualização operacional — 02/11/2026

- Produção: https://meuzion.vercel.app
- Endpoint: https://meuzion.vercel.app/api/pluggy/webhook
- Eventos ativos existentes: `item/created`, `item/updated`, `transactions/created`, `transactions/updated`. Os quatro cadastros foram atualizados via API com o header `x-pluggy-secret`, sem criar novos cadastros.
- O valor do header corresponde a `PLUGGY_WEBHOOK_SECRET`, salvo no `.env` local e configurado em produção. Não registrar o valor em documentação, logs ou Git. `.env` permanece ignorado pelo Git.
- Validação em produção: POST autenticado com evento de diagnóstico não suportado retornou HTTP 200 e `{ "received": true, "ignored": true }`. Isso confirma o endpoint e a autenticação; não equivale a uma entrega automática originada pela Pluggy.
- Headers personalizados da Pluggy são configurados somente pela API. Para visualizar os cadastros: Dashboard > Applications > lápis da aplicação > Webhooks. Para acompanhar entregas: Events.
- Código da integração: commit `fe97958`; build e seis testes passaram. Guia complementar: `PLUGGY-WEBHOOKS.md`.
- Limitações: eventos de exclusão não são processados; conciliação usa conta, descrição, valor e data. O webhook não agenda atualizações bancárias: depende dos eventos e da atualização da conexão na Pluggy.
