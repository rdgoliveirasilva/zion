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
4. Modelo de Dados (Prisma)
Account: Representa contas bancárias e cartões de crédito. Possui type ("checking", "credit"), balance (em centavos), pluggyAccountId e dueDate (para cartões).

Transaction: Representa movimentações financeiras. Possui type ("expense", "income", "bill"), status ("paid", "pending"), category e accountId (chave estrangeira para Account).

Convenções:

Valores monetários sempre em centavos (integer).

Datas de transação ancoradas ao meio-dia (12:00) para evitar problemas de fuso horário (UTC) na exibição.

5. Sistema de Autenticação (Single-User)
Credenciais: Variáveis de ambiente (ZION_EMAIL, ZION_PASSWORD, AUTH_SECRET).

Rota de Login (/api/auth/login): Cria um cookie zion_session. Aceita o parâmetro remember (se true, dura 30 dias; se false, é um cookie de sessão).

Proteção: Feita estritamente no layout.tsx da pasta (dashboard). Não usamos middleware.ts ou proxy.ts (causavam loops de redirecionamento).

Logout: Rota em /api/logout que apaga o cookie.

6. Integração Open Finance (Pluggy)
MeuPluggy: Como o Zion é pessoal, usamos o conector MeuPluggy para evitar custos com o plano Trial. O usuário conecta os bancos no site do MeuPluggy e autoriza a leitura no widget do Zion.

Sincronização: O onSuccess do widget chama a rota /api/pluggy/sync, que busca as contas (último ano de transações), salva no banco vinculando ao accountId e busca as faturas de cartão (/bills).

Tela de Loading: Uma overlay em tela cheia (isSyncing) é exibida durante o processo de sync, seguida por um Toast de sucesso/erro.

Limitações Conhecidas: O Itaú não retorna faturas abertas via Open Finance. Para contornar, usamos o balanceDueDate (data de vencimento) da conta do cartão para exibir uma estimativa no card de faturas.

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
Fase 2 — Em andamento (Webhooks)
□ Configurar Webhook da Pluggy para atualização automática.
□ Criar a rota app/api/pluggy/webhook/route.ts.
Fase 3 — Futuro
□ Tela de Orçamentos (/budgets)
□ Relatórios e Gráficos (/reports)
□ PWA Completo (Service Worker com Serwist)
