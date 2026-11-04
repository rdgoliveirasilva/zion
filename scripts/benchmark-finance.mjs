// CPU benchmark only: no database, secrets or financial records are read.
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
const moduleUrl = text => 'data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(text)).toString('base64');
const rows = Array.from({ length: 1712 }, (_, i) => ({ amount: 100, date: new Date(Date.UTC(2026, i % 11, 1 + i % 27, 15)), type: 'expense', status: 'paid', description: 'Benchmark', category: 'outros' }));
async function measure(read) {
  const { statementIncludes } = await import(moduleUrl(read('lib/statement.ts')));
  const { spendingSummary } = await import(moduleUrl(read('lib/commitment-rules.ts')));
  const start = performance.now();
  const filtered = rows.filter(tx => statementIncludes(tx.date, 'all', '', '', new Date('2026-11-04T15:00:00Z')));
  const middle = performance.now();
  const summary = spendingSummary(rows, '2026-11-04');
  return { filterMs: Math.round(middle - start), summaryMs: Math.round(performance.now() - middle), count: filtered.length, summary };
}
const before = await measure(file => execFileSync('git', ['show', `a8aa508:${file}`], { encoding: 'utf8' }));
const after = await measure(file => readFileSync(file, 'utf8'));
assert.equal(after.count, before.count); assert.deepEqual(after.summary, before.summary);
console.log(JSON.stringify({ rows: rows.length, before: { filterMs: before.filterMs, summaryMs: before.summaryMs }, after: { filterMs: after.filterMs, summaryMs: after.summaryMs }, sameResults: true }, null, 2));
