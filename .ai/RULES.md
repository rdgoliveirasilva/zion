# Regras de trabalho

- Confira código, testes e documentos de domínio antes de afirmar o comportamento atual. Se documentação e código divergirem, registre a divergência; não invente regras financeiras.
- Mantenha saldo consolidado, faturas, extrato, categorias e conciliação consistentes. Não recrie movimentações importadas, não conte pagamento de fatura duas vezes e não altere IDs, valores ou datas originais por efeito de categorização.
- Trate `.env`, chaves Pluggy e dados bancários como sensíveis. Não registre segredos, transações pessoais ou respostas financeiras em logs, testes ou documentação.
- Mudanças de persistência exigem migração aditiva revisada e validação. Não execute reset/db push em banco com dados. Siga `prisma/migrations/README.md`.
- Escolha testes para falhas reais: cálculo financeiro, duplicação, limites de data, autenticação, reconciliação e cache obsoleto. Use o nível mais barato que detecte a falha; não persiga contagem ou cobertura por si só.
- Mudanças visuais seguem componentes, cores, espaçamento e navegação existentes. Verifique desktop/mobile quando a mudança afetar layout.
- Consulte a skill local pertinente em `.agents/skills/` para trabalho especializado. Mudanças de comportamento duradouras devem ter contrato revisável; se OpenSpec estiver instalado futuramente, use seu fluxo/skill aprovado. Hoje não há instalação OpenSpec verificada.
- Para comportamento atual de bibliotecas, provedores e ferramentas, confira documentação oficial recente. Se Context7 não estiver disponível, use documentação oficial; não dependa de configuração global oculta.
- Inspeção e edição locais não autorizam por si só commit, push, PR, merge ou deploy. Execute essas ações quando o pedido do usuário ou contexto da sessão as autorizar. Verifique identidade local e histórico antes de um commit autorizado. Não acrescente atribuição promocional de IA em commits ou artefatos.
- Preserve alterações preexistentes; mantenha instruções compartilhadas neste diretório, com `AGENTS.md` e `CLAUDE.md` curtos e independentes.
