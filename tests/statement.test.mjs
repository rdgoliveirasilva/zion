import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = readFileSync(new URL('../lib/statement.ts', import.meta.url), 'utf8');
const js = stripTypeScriptTypes(source);
const { financialDayEnd, financialDay, formatFinancialDate, statementIncludes, pluggyTransactionType } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
const now = new Date('2026-11-02T15:00:00Z');
test('future installments are excluded from every statement period', () => {
  for (const period of ['today', '7d', 'all', 'custom']) {
    assert.equal(statementIncludes('2027-01-15T15:00:00Z', period, '2026-01-01', '2027-02-01', now), false);
  }
});
test('late purchases stay on the Brazilian calendar day', () => {
  assert.equal(financialDay('2026-11-02T02:00:00Z'), '2026-11-01');
  assert.equal(formatFinancialDate('2026-11-02T02:00:00Z'), '01/11/2026');
  assert.equal(statementIncludes('2026-11-02T02:00:00Z', 'today', '', '', now), false);
  assert.equal(statementIncludes('2026-11-02T03:00:00Z', 'today', '', '', now), true);
});
test('seven days has both bounds; custom includes its end date', () => {
  assert.equal(statementIncludes('2026-10-26T15:00:00Z', '7d', '', '', now), true);
  assert.equal(statementIncludes('2026-10-25T15:00:00Z', '7d', '', '', now), false);
  assert.equal(statementIncludes('2026-11-01T15:00:00Z', 'custom', '2026-10-30', '2026-11-01', now), true);
  assert.equal(statementIncludes('2026-11-01T15:00:00Z', 'custom', '2026-11-02', '2026-11-01', now), false);
});
test('credit purchases are expenses, bank credits and card refunds are credits', () => {
  assert.equal(pluggyTransactionType('DEBIT', 100, 'CREDIT'), 'expense');
  assert.equal(pluggyTransactionType('CREDIT', -100, 'CREDIT'), 'income');
  assert.equal(pluggyTransactionType('CREDIT', 100, 'BANK'), 'income');
  assert.equal(pluggyTransactionType('DEBIT', -100, 'BANK'), 'expense');
  assert.equal(pluggyTransactionType(undefined, 100, 'CREDIT'), 'expense');
});

test('morning queries include noon-anchored payments but exclude the next Brazilian day', () => {
  const morning = new Date('2026-11-06T09:00:00Z');
  const end = financialDayEnd(morning);
  assert.equal(end.toISOString(), '2026-11-07T02:59:59.999Z');
  assert.ok(new Date('2026-11-06T15:00:00Z') <= end);
  assert.ok(new Date('2026-11-07T03:00:00Z') > end);
});
