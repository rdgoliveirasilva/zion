// Read-only integration check against a consistent snapshot of the real history.
import 'dotenv/config';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
const read = name => readFileSync(new URL('../lib/' + name, import.meta.url), 'utf8');
const url = source => 'data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(source)).toString('base64');
const statementUrl = url(read('statement.ts')), rulesUrl = url(read('commitment-rules.ts'));
const { financialDay } = await import(statementUrl);
const { normalizeMerchant } = await import(rulesUrl);
const source = read('statement-query.ts')
  .replace('import { prisma } from "./prisma";', 'const prisma = new Proxy({}, { get: (_, key) => globalThis.statementDb[key] });')
  .replace('"./statement"', JSON.stringify(statementUrl))
  .replace('"./commitment-rules"', JSON.stringify(rulesUrl))
  .replace('"./transaction-view"', JSON.stringify(url(read('transaction-view.ts'))));
const { loadStatementPage } = await import(url(source));
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
try {
  await prisma.$transaction(async db => {
    globalThis.statementDb = db;
    const now = new Date();
    const all = (await db.transaction.findMany({ orderBy: [{ date: 'desc' }, { id: 'desc' }] })).filter(t => t.date <= now && !(t.type === 'bill' && t.status === 'pending'));
    const page = await loadStatementPage(undefined, now);
    assert.equal(page.total, all.length); assert.deepEqual(page.transactions.map(t => t.id), all.slice(0,15).map(t => t.id));
    const second = await loadStatementPage(new URLSearchParams({ page: '2' }), now);
    assert.deepEqual(second.transactions.map(t => t.id), all.slice(15,30).map(t => t.id));
    assert.ok(!second.transactions.some(t => page.transactions.some(p => p.id === t.id)));
    if (all.length) {
      const chosen = all.find(t => /[áéíóúãç]/i.test(t.description)) || all[0];
      const query = normalizeMerchant(chosen.description).slice(0,30);
      const searched = await loadStatementPage(new URLSearchParams({ search: query }), now);
      assert.equal(searched.total, all.filter(t => normalizeMerchant(t.description).includes(query)).length);
      const day = financialDay(chosen.date);
      const dated = await loadStatementPage(new URLSearchParams({ period: 'custom', start: day, end: day }), now);
      assert.equal(dated.total, all.filter(t => financialDay(t.date) === day).length);
      const typed = await loadStatementPage(new URLSearchParams({ type: chosen.type, category: chosen.category || 'all' }), now);
      assert.equal(typed.total, all.filter(t => t.type === chosen.type && (!chosen.category || t.category === chosen.category)).length);
    }
    const invalid = await loadStatementPage(new URLSearchParams({ period: 'custom', start: '2026-11-04', end: '2026-11-01' }), now);
    assert.equal(invalid.total, 0);
    console.log(`Extrato validado: ${all.length} registros acessíveis, 15 por página, ordenação estável, busca sem acentos e filtros preservados.`);
  }, { timeout: 60000, isolationLevel: 'RepeatableRead' });
} finally { delete globalThis.statementDb; await prisma.$disconnect(); }
