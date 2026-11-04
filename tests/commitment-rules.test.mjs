import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = readFileSync(new URL('../lib/commitment-rules.ts', import.meta.url), 'utf8');
const { dueStatus, dueDateFor, monthOffset, monthsBetween, spendingSummary, normalizeMerchant } = await import('data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(source)).toString('base64'));

test('paid takes precedence; today, overdue, seven-day boundary and future are distinct', () => {
  assert.equal(dueStatus('paid', '2026-10-01', '2026-11-04'), 'paid');
  assert.equal(dueStatus('pending', '2026-11-03', '2026-11-04'), 'overdue');
  assert.equal(dueStatus('pending', '2026-11-04', '2026-11-04'), 'today');
  assert.equal(dueStatus('pending', '2026-11-11', '2026-11-04'), 'soon');
  assert.equal(dueStatus('pending', '2026-11-12', '2026-11-04'), 'future');
});
test('recurrence clamps the day, preserves leap years and crosses years', () => {
  assert.equal(dueDateFor('2028-02', 31).toISOString(), '2028-02-29T15:00:00.000Z');
  assert.equal(dueDateFor('2027-02', 31).toISOString(), '2027-02-28T15:00:00.000Z');
  assert.equal(monthOffset('2026-12', 3), '2027-03');
  assert.equal(monthsBetween('2026-11', '2027-02'), 3);
});
test('spending excludes future entries, income and invoice payment without counting commitments', () => {
  const tx = (amount, date, extra = {}) => ({ amount, date, type: 'expense', status: 'paid', description: 'Compra', ...extra });
  const result = spendingSummary([
    tx(500, '2026-11-03T15:00:00Z'), tx(500, '2026-10-03T15:00:00Z'),
    tx(100, '2026-11-01T02:00:00Z'), // October in Brazil
    tx(500, '2026-11-03T15:00:00Z', { isBillPayment: true }),
    tx(500, '2026-11-03T15:00:00Z', { description: 'Pagamento de fatura' }),
    tx(700, '2026-12-03T15:00:00Z'), tx(800, '2026-11-03T15:00:00Z', { type: 'income' }),
    tx(900, '2026-11-03T15:00:00Z', { type: 'bill', status: 'pending' }),
  ], '2026-11-04');
  assert.equal(result.current, 500); assert.equal(result.previous, 600);
  assert.ok(Math.abs(result.variation + 16.6666667) < 0.00001);
  assert.equal(spendingSummary([], '2026-11-04').variation, null);
});
test('merchant matching does not conflate installment numbers or similar names', () => {
  assert.equal(normalizeMerchant('  FARMÁCIA  Central '), 'farmacia central');
  assert.notEqual(normalizeMerchant('Loja 1/2'), normalizeMerchant('Loja 2/2'));
});
