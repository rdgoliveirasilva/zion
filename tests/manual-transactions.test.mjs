import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const statement = stripTypeScriptTypes(readFileSync(new URL('../lib/statement.ts', import.meta.url), 'utf8'));
const source = stripTypeScriptTypes(readFileSync(new URL('../app/api/transactions/route.ts', import.meta.url), 'utf8').replace(/^import .*;\r?\n/gm, ''));
const mock = { commitment: { create: async ({data}) => ({id:"bill", status:"pending", ...data}) }, account: { findUnique: async ({where}) => where.id === 'card' ? {id:'card', type:'credit'} : null }, category: { findFirst: async () => ({value:'outros'}) }, transaction: { create: async ({data}) => ({id:'saved', ...data}) } };
globalThis.__manualTransactions = mock;
const prefix = `const prisma = globalThis.__manualTransactions; const hasSession = async () => globalThis.__transactionSession !== false; const NextResponse = {json: (data, options) => Response.json(data, options)};`;
const { POST, PATCH, DELETE } = await import('data:text/javascript;base64,' + Buffer.from(statement + prefix + source).toString('base64'));
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

const mutation = (method, body) => new Request('http://localhost/api/transactions', {method, body:JSON.stringify(body)});
function mutationMock(original) {
  const calls = [];
  mock.$transaction = async action => action({
    $queryRaw: async () => [],
    account: mock.account,
    transaction: {
      findUniqueOrThrow: async () => original,
      findUnique: async () => original,
      update: async ({data}) => { calls.push(['edit',data]); return {...original,...data}; },
      delete: async () => { calls.push(['delete']); return original; },
    },
    commitment: { updateMany: async args => { calls.push(['unlink', args]); } },
  });
  return calls;
}
const manual = {id:'synthetic', description:'Original', amount:1000, categorySource:'manual', pluggyTransactionId:null};
test('manual edit changes name and cents, reopening a linked payable when amount changes', async () => {
  const calls = mutationMock(manual);
  const res = await PATCH(mutation('PATCH', {id:manual.id,category:'outros',description:'Corrected',amount:1990}));
  assert.equal(res.status,200); const data=await res.json();
  assert.equal(data.description,'Corrected'); assert.equal(data.amount,1990);
  assert.equal(calls[0][0],'unlink'); assert.deepEqual(calls[0][1].data,{transactionId:null,status:'pending'});
});
test('imported movements reject financial edits and deletion even after manual categorization', async () => {
  const calls = mutationMock({...manual,pluggyTransactionId:'imported'});
  assert.equal((await PATCH(mutation('PATCH',{id:manual.id, category:'outros',description:'Changed',amount:1}))).status,400);
  assert.equal((await DELETE(mutation('DELETE',{id:manual.id}))).status,409);
  assert.deepEqual(calls,[]);
});
test('invalid manual edits do not write; deletion unlinks before deleting', async () => {
  const calls = mutationMock(manual);
  for (const body of [{description:'',amount:100}, {description:'Name',amount:-1},{description:'Name',amount:1.5}]) assert.equal((await PATCH(mutation('PATCH',{id:manual.id,category:'outros',...body}))).status,400);
  assert.deepEqual(calls,[]);
  assert.equal((await DELETE(mutation('DELETE',{id:manual.id}))).status,200);
  assert.deepEqual(calls.map(c=>c[0]),['unlink','delete']);
});

test('editing and deleting require an authenticated session', async () => {
  globalThis.__transactionSession = false;
  try {
    assert.equal((await PATCH(mutation('PATCH',{id:'synthetic'}))).status,401);
    assert.equal((await DELETE(mutation('DELETE',{id:'synthetic'}))).status,401);
  } finally { globalThis.__transactionSession = true; }
});
test('formatted thousands are persisted as cents', async () => {
  const res = await submit({amount:'1.234,56'});
  assert.equal(res.status,201); assert.equal((await res.json()).amount,123456);
});

test('renaming preserves the paid link, and imported category edits remain available', async () => {
  let calls = mutationMock(manual);
  assert.equal((await PATCH(mutation('PATCH',{id:manual.id, category:'outros',description:'Renamed',amount:manual.amount}))).status,200);
  assert.deepEqual(calls.map(c=>c[0]),['edit']);
  calls = mutationMock({...manual,pluggyTransactionId:'imported'});
  assert.equal((await PATCH(mutation('PATCH',{id:manual.id,category:'outros'}))).status,200);
  assert.deepEqual(calls[0],['edit',{category:'outros',categorySource:'manual'}]);
});

test('manual account link can be changed or removed and reopens its payable', async () => {
  for (const accountId of ['card',null]) {
    const calls = mutationMock({...manual,accountId:'bank'});
    const res = await PATCH(mutation('PATCH',{id:manual.id,category:'outros',accountId}));
    assert.equal(res.status,200); assert.equal((await res.json()).accountId,accountId);
    assert.deepEqual(calls.map(c=>c[0]),['unlink','edit']);
  }
});
test('relink rejects missing accounts, imported transactions and income on credit cards', async () => {
  for (const [original,accountId] of [[manual,'missing'],[{...manual,pluggyTransactionId:'imported'},'card'],[{...manual,type:'income'},'card']]) {
    const calls = mutationMock(original);
    assert.equal((await PATCH(mutation('PATCH',{id:manual.id,category:'outros',accountId}))).status,400);
    assert.deepEqual(calls,[]);
  }
});
test('saving the same account preserves the paid link', async () => {
  const calls = mutationMock({...manual,accountId:'card'});
  assert.equal((await PATCH(mutation('PATCH',{id:manual.id,category:'outros',accountId:'card'}))).status,200);
  assert.deepEqual(calls.map(c=>c[0]),['edit']);
});

test('repeated deletion succeeds when the record is already gone', async () => {
  const calls = mutationMock(null);
  assert.equal((await DELETE(mutation('DELETE',{id:'already-deleted'}))).status,200);
  assert.deepEqual(calls,[]);
});
test('database contention is retryable and is not reported as invalid input', async () => {
  mock.$transaction = async () => { throw Object.assign(new Error('timeout'),{code:'P2028'}); };
  const response = await DELETE(mutation('DELETE',{id:'synthetic'}));
  assert.equal(response.status,503); assert.equal((await response.json()).retryable,true);
});
