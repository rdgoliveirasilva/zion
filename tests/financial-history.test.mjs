import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const read = name => readFileSync(new URL('../lib/' + name, import.meta.url), 'utf8');
const url = text => 'data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(text)).toString('base64');
const source = read('financial-history.ts').replace('"./statement"', JSON.stringify(url(read('statement.ts')))).replace('"./commitment-rules"', JSON.stringify(url(read('commitment-rules.ts'))));
const { lastTwelveMonths, monthlyExpenses, invoicePaymentMatches, commitmentColor, institutionLabel } = await import(url(source));
const invoice = { id: 'invoice', key: 'card:nubank:2026-11', amount: 182982, dueDate: '2026-11-15', status: 'pending' };
const payment = { id: 'tx', accountId: 'nubank', amount: 182982, date: '2026-11-04T15:00:00Z', status: 'paid', type: 'income', description: 'Pagamento recebido', isBillPayment: true };

test('archive has exactly twelve distinct months across a year boundary', () => {
  const months = lastTwelveMonths('2026-01-04');
  assert.equal(months.length, 12); assert.equal(new Set(months).size, 12);
  assert.equal(months[0], '2026-01'); assert.equal(months[11], '2025-02');
});
test('monthly history respects Brazilian date boundaries and excludes invoice payments', () => {
  const base = { ...payment, type: 'expense', isBillPayment: false, description: 'Compra', amount: 100 };
  const transactions = [base, { ...base, date: '2026-11-01T02:00:00Z' }, { ...base, date: '2026-12-01T15:00:00Z' }, { ...base, description: 'Pagamento de fatura' }, payment];
  assert.equal(monthlyExpenses(transactions, '2026-11', '2026-11-04').length, 1);
  assert.equal(monthlyExpenses(transactions, '2026-10', '2026-11-04').length, 1);
});
test('an exact confirmed payment on the same card settles one invoice', () => {
  assert.deepEqual(invoicePaymentMatches([invoice], [payment], '2026-11-04'), [{ commitmentId: 'invoice', transactionId: 'tx' }]);
});
test('wrong bank, amount, period, pending, future and refund never settle an invoice', () => {
  for (const changes of [{ accountId: 'itau' }, { amount: 182981 }, { date: '2026-10-15' }, { status: 'pending' }, { date: '2026-11-05' }, { description: 'Estorno', isBillPayment: false }, { type: 'expense' }, { commitment: { id: 'already-used' } }]) {
    assert.deepEqual(invoicePaymentMatches([invoice], [{ ...payment, ...changes }], '2026-11-04'), []);
  }
});
test('ambiguous payments or invoices cannot reuse the same settlement', () => {
  assert.deepEqual(invoicePaymentMatches([invoice], [payment, { ...payment, id: 'another' }], '2026-11-04'), []);
  assert.deepEqual(invoicePaymentMatches([invoice, { ...invoice, id: 'other-invoice' }], [payment], '2026-11-04'), []);
  assert.deepEqual(invoicePaymentMatches([{ ...invoice, status: 'paid' }], [payment], '2026-11-04'), []);
});
test('bank colors stay distinct, while other commitments use their category color', () => {
  assert.equal(commitmentColor('Fatura Nubank'), '#820ad1');
  assert.equal(commitmentColor('Fatura Itaú'), '#ea580c');
  assert.equal(commitmentColor('Internet', '#14b8a6'), '#14b8a6');
  assert.equal(institutionLabel(['gold', 'Nu Pagamentos S.A. - Instituição de Pagamento']), 'Nubank');
  assert.equal(institutionLabel(['gold']), '');
});
