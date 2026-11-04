// Integration check: fixtures and all reconciliation writes are rolled back.
import 'dotenv/config';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
const moduleUrl = source => 'data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(source)).toString('base64');
const read = file => readFileSync(new URL(file, import.meta.url), 'utf8');
const helpers = moduleUrl(read('../lib/commitment-rules.ts'));
const statement = moduleUrl(read('../lib/statement.ts'));
const history = moduleUrl(read('../lib/financial-history.ts').replace('"./statement"', JSON.stringify(statement)).replace('"./commitment-rules"', JSON.stringify(helpers)));
const source = read('../lib/commitments.ts').split('export async function loadCommitments')[0]
  .replace(/^import .* from "(?:@\/lib\/prisma|@\/generated\/prisma|\.\/pluggy-bills)";\r?\n/gm, '')
  .replace('"./statement"', JSON.stringify(statement)).replace('"./commitment-rules"', JSON.stringify(helpers)).replace('"./financial-history"', JSON.stringify(history));
const { reconcileCommitments } = await import(moduleUrl(source));
const categoryModule = moduleUrl(read('../lib/categories.ts'));
const routeSource = read('../app/api/transactions/route.ts')
  .replace('import { hasSession } from "@/lib/session";', 'const hasSession = async () => true;')
  .replace('import { prisma } from "@/lib/prisma";', 'const prisma = { $transaction: callback => callback(globalThis.integrationTransaction), category: { findFirst: args => globalThis.integrationTransaction.category.findFirst(args) } };')
  .replace('import { NextResponse } from "next/server";', 'const NextResponse = Response;')
  .replace('"@/lib/categories"', JSON.stringify(categoryModule))
  .replace('"@/lib/commitment-rules"', JSON.stringify(helpers))
  .replace('"@/lib/statement"', JSON.stringify(statement))
  .replace('"@/lib/commitments"', JSON.stringify(moduleUrl(source)));
const { PATCH } = await import(moduleUrl(routeSource));
function apiModule(file) {
  return moduleUrl(read(file)
    .replace('import { hasSession } from "@/lib/session";', 'const hasSession = async () => true;')
    .replace('import { prisma } from "@/lib/prisma";', 'const prisma = new Proxy({}, { get: (_, key) => globalThis.integrationTransaction[key] });')
    .replace('import { NextResponse } from "next/server";', 'const NextResponse = Response;')
    .replace('"@/lib/commitment-rules"', JSON.stringify(helpers)));
}
const categoryApi = await import(apiModule('../app/api/categories/route.ts'));
const goalApi = await import(apiModule('../app/api/spending-goals/route.ts'));
const request = body => new Request('http://local.test/api/check', { method: 'POST', body: JSON.stringify(body) });
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
const rollback = new Error('ROLLBACK_EXPECTED');
try {
  await prisma.$transaction(async db => {
    const account = await db.account.create({ data: { name: 'Integration rollback only', type: 'credit' } });
    const tx = await db.transaction.create({ data: { description: 'Integration merchant', accountId: account.id, amount: 1234, date: new Date('2026-10-04T15:00:00Z'), type: 'expense', status: 'paid', category: 'outros', categorySource: 'manual' } });
    globalThis.integrationTransaction = db;
    const categoryResponse = await categoryApi.POST(request({ label: `Integration ${account.id}`, color: '#14b8a6' }));
    assert.equal(categoryResponse.status, 201);
    const customCategory = await categoryResponse.json();
    const customMovement = await db.transaction.create({ data: { description: 'Custom category check', amount: 500, date: tx.date, type: 'expense' } });
    assert.equal((await PATCH(request({ id: customMovement.id, category: customCategory.value, recurring: false }))).status, 200);
    assert.equal((await categoryApi.PATCH(request({ ...customCategory, label: `Edited ${account.id}`, archived: true }))).status, 200);
    assert.equal((await db.transaction.findUnique({ where: { id: customMovement.id } })).category, customCategory.value);
    assert.equal((await PATCH(request({ id: tx.id, category: customCategory.value, recurring: false }))).status, 400);
    assert.equal((await goalApi.PUT(request({ month: '2099-12', amount: 10000 }))).status, 200);
    assert.equal((await goalApi.PUT(request({ month: '2099-12', amount: 15000 }))).status, 200);
    assert.equal(await db.spendingGoal.count({ where: { month: '2099-12' } }), 1);
    assert.equal((await db.spendingGoal.findUnique({ where: { month: '2099-12' } })).amount, 15000);
    const bill = await db.commitment.create({ data: { key: `card:${account.id}:2026-11`, description: 'Invoice integration', source: 'card', amount: 23456, dueDate: new Date('2026-11-15T15:00:00Z') } });
    const payment = await db.transaction.create({ data: { accountId: account.id, amount: 23456, date: new Date('2026-11-04T15:00:00Z'), type: 'income', status: 'paid', description: 'Pagamento recebido' } });
    for (const category of ['saude', 'outros']) {
      const response = await PATCH(new Request('http://local.test/api/transactions', { method: 'PATCH', body: JSON.stringify({ id: tx.id, category, recurring: false }) }));
      assert.equal(response.status, 200);
      const edited = await db.transaction.findUniqueOrThrow({ where: { id: tx.id } });
      assert.equal(edited.category, category);
      assert.equal(edited.amount, tx.amount); assert.equal(edited.id, tx.id);
      assert.equal(edited.date.toISOString(), tx.date.toISOString());
      assert.equal(await db.recurringRule.count({ where: { accountId: account.id } }), 0);
    }
    const rule = await db.recurringRule.create({ data: { matchKey: `integration:${account.id}`, description: 'integration merchant', accountId: account.id, amount: 1234, category: 'moradia', dueDay: 31, intervalMonths: 1, startMonth: '2026-10' } });
    const now = new Date('2026-11-04T15:00:00Z');
    await reconcileCommitments(db, now);
    const settledBill = await db.commitment.findUnique({ where: { id: bill.id } });
    assert.equal(settledBill.status, 'paid'); assert.equal(settledBill.transactionId, payment.id);
    const first = await db.commitment.findMany({ where: { ruleId: rule.id }, orderBy: { dueDate: 'asc' } });
    assert.equal(first[0].status, 'paid'); assert.equal(first[0].transactionId, tx.id);
    assert.ok(first.every(c => c.coveredByCard));
    assert.equal(first[1].status, 'pending'); assert.equal(first[1].transactionId, null);
    await reconcileCommitments(db, now);
    assert.equal(await db.commitment.count({ where: { ruleId: rule.id } }), first.length);
    const unchanged = await db.transaction.findUniqueOrThrow({ where: { id: tx.id } });
    for (const key of ['id', 'amount', 'description', 'category', 'categorySource']) assert.equal(unchanged[key], tx[key]);
    assert.equal(unchanged.date.toISOString(), tx.date.toISOString());
    const pending = await db.transaction.create({ data: { description: tx.description, accountId: account.id, amount: 1234, date: now, type: 'expense', status: 'pending', category: 'outros' } });
    await reconcileCommitments(db, now);
    assert.equal((await db.commitment.findUnique({ where: { key: `${rule.id}:2026-11` } })).status, 'pending');
    assert.equal((await db.transaction.findUnique({ where: { id: pending.id } })).category, 'moradia');
    await db.transaction.update({ where: { id: pending.id }, data: { status: 'paid' } });
    await reconcileCommitments(db, now);
    assert.equal((await db.commitment.findUnique({ where: { key: `${rule.id}:2026-11` } })).status, 'paid');
    for (let i = 0; i < 2; i++) await db.transaction.create({ data: { description: tx.description, accountId: account.id, amount: 1234, date: new Date('2026-12-03T15:00:00Z'), type: 'expense', status: 'paid' } });
    await reconcileCommitments(db, new Date('2026-12-04T15:00:00Z'));
    const ambiguous = await db.commitment.findUnique({ where: { key: `${rule.id}:2026-12` } });
    assert.equal(ambiguous.status, 'pending'); assert.equal(ambiguous.transactionId, null);
    const manual = await db.commitment.create({ data: { key: `manual:${account.id}`, source: 'manual', description: tx.description, amount: 1234, dueDate: new Date('2028-01-31T15:00:00Z') } });
    await reconcileCommitments(db, new Date('2027-01-04T15:00:00Z'));
    const reused = await db.commitment.findUnique({ where: { id: manual.id } });
    assert.equal(reused.ruleId, rule.id);
    assert.equal(await db.commitment.count({ where: { ruleId: rule.id, dueDate: new Date('2028-01-31T15:00:00Z') } }), 1);
    console.log('Validados: categorias criadas/renomeadas/arquivadas, metas mensais, baixa de fatura, idempotência e histórico imutável. Fixtures revertidas.');
    throw rollback;
  }, { timeout: 60000 });
} catch (e) { if (e !== rollback) throw e; }
finally { delete globalThis.integrationTransaction; await prisma.$disconnect(); }
