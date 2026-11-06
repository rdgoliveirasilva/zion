import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const statement = stripTypeScriptTypes(readFileSync(new URL('../lib/statement.ts', import.meta.url), 'utf8'));
const source = stripTypeScriptTypes(readFileSync(new URL('../app/api/transactions/route.ts', import.meta.url), 'utf8').replace(/^import .*;\r?\n/gm, ''));
const mock = { commitment: { create: async ({data}) => ({id:"bill", status:"pending", ...data}) }, account: { findUnique: async ({where}) => where.id === 'card' ? {id:'card', type:'credit'} : null }, category: { findFirst: async () => ({value:'outros'}) }, transaction: { create: async ({data}) => ({id:'saved', ...data}) } };
globalThis.__manualTransactions = mock;
const prefix = `const prisma = globalThis.__manualTransactions; const hasSession = async () => true; const NextResponse = {json: (data, options) => Response.json(data, options)};`;
const { POST } = await import('data:text/javascript;base64,' + Buffer.from(statement + prefix + source).toString('base64'));
const submit = body => POST(new Request('http://localhost/api/transactions', {method:'POST', body:JSON.stringify({description:'Synthetic purchase', amount:'19,90', date:'2026-01-01', category:'outros', type:'expense', ...body})}));
test('manual payment keeps cents, cleared status and Brazilian date', async () => {
  const response = await submit({}); const data = await response.json();
  assert.equal(response.status, 201); assert.equal(data.amount, 1990); assert.equal(data.status, 'cleared'); assert.equal(data.date, '2026-01-01T15:00:00.000Z');
});
test('receipt is income and a card purchase preserves account identity without updating balance', async () => {
  assert.equal((await (await submit({type:'income'})).json()).type, 'income');
  const response = await submit({cardPurchase:true, accountId:'card'});
  assert.equal(response.status, 201); assert.equal((await response.json()).accountId, 'card');
});
test('rejects missing card, invalid amount, invalid day and invalid type', async () => {
  for (const body of [{cardPurchase:true}, {amount:'19abc'}, {amount:'Infinity'}, {date:'2026-02-30'}, {type:'transfer'}, {type:'income',accountId:'card'}]) assert.equal((await submit(body)).status, 400);
});

test('future payable is a pending commitment rather than a bank movement', async () => {
  const response = await submit({type:'bill', date:'2099-01-01'});
  const data = await response.json();
  assert.equal(response.status, 201); assert.equal(data.status, 'pending'); assert.equal(data.source, 'manual'); assert.equal(data.amount, 1990);
});
