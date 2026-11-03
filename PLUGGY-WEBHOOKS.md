# Webhooks da Pluggy

## Ativação em produção

1. Gere uma chave aleatória de pelo menos 32 bytes (por exemplo, `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`). Guarde-a fora do Git.
2. Na Vercel, no projeto Zion, adicione `PLUGGY_WEBHOOK_SECRET` em Settings > Environment Variables, no ambiente Production, com essa chave. Faça um novo deploy para aplicar a variável.
3. Na Pluggy, registre estes quatro eventos, todos com a URL `https://meuzion.vercel.app/api/pluggy/webhook`:
   - `item/created`
   - `item/updated`
   - `transactions/created`
   - `transactions/updated`
4. Em cada cadastro, configure o header `x-pluggy-secret` com exatamente a mesma chave. Não use o client secret da Pluggy e não coloque a chave na URL.
5. Reenvie um evento real pelo painel e confirme resposta HTTP 200 e a atualização dos dados no Zion.

Se o painel não disponibilizar headers personalizados, use POST /webhooks na API da Pluggy com os campos `event`, `url` e `headers: { "x-pluggy-secret": "SUA_CHAVE" }`.

## Comportamento

O webhook busca novamente os dados diretamente na Pluggy, sem seguir links recebidos no payload. As gravações de cada conexão são atômicas e serializadas por um bloqueio no PostgreSQL, inclusive quando o callback do navegador e o webhook chegam juntos. Eventos repetidos reconciliam os registros existentes pelo critério de conta, descrição, valor e data usado pela integração atual.

Respostas: 503 sem configuração; 401 para chave incorreta; 400 para payload inválido; 500 se a importação falhar; 200 depois de salvar os dados ou ignorar um evento não suportado. Não há confirmação de sucesso antes de concluir a importação.

A integração importa o último ano até hoje. Eventos de exclusão não são processados. A identidade atual por atributos não distingue duas transações com descrição, valor e data exatamente iguais; mudanças desses atributos podem exigir conciliação. A atualização automática depende dos eventos enviados pela Pluggy e da configuração de atualização da conexão na plataforma; o webhook não agenda consultas ao banco.

Referência: https://docs.pluggy.ai/en/docs/developer-tools/webhooks-ref
