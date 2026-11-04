import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const js = stripTypeScriptTypes(readFileSync(new URL('../lib/card-bill.ts', import.meta.url), 'utf8'));
const { selectCurrentBill, estimateCurrentBill, reconcileEstimatedBill } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
test('November bill excludes future installments and used limit', () => {
  const bills = [
    { id: 'nov', dueDate: '2026-11-09T00:00:00.000Z', totalAmount: 1522.74 },
    { id: 'dec', dueDate: '2026-12-09T00:00:00.000Z', totalAmount: 87.25 },
    { id: 'jan', dueDate: '2027-01-09T00:00:00.000Z', totalAmount: 87.25 },
  ];
  assert.deepEqual(selectCurrentBill(bills, '2026-11'), { amount: 152274, dueDate: '2026-11-09' });
  assert.deepEqual(selectCurrentBill(bills, '2027-01'), { amount: 8725, dueDate: '2027-01-09' });
});
test('calendar due date does not shift to previous month in Brazil', () => {
  assert.deepEqual(selectCurrentBill([{ id: 'a', dueDate: new Date('2026-11-01T00:00:00Z'), totalAmount: 10 }], '2026-11'), { amount: 1000, dueDate: '2026-11-01' });
});
test('missing bill remains unknown; zero bill is a valid result; duplicates are not summed twice', () => {
  assert.equal(selectCurrentBill([], '2026-11'), null);
  const b = { id: 'zero', dueDate: '2026-11-09', totalAmount: 0 };
  assert.deepEqual(selectCurrentBill([b,b], '2026-11'), { amount: 0, dueDate: '2026-11-09' });
});

test('open bill counts current installments once, excludes future months and previous invoice payment', () => {
  const previous = [{ id: 'oct', dueDate: '2026-10-15', totalAmount: 500 }];
  const tx = (id, amount, period, description = 'Compra', type = 'DEBIT') => ({ id, amount, type, description, creditCardMetadata: { billForecastDate: period } });
  const installment = tx('second', 100, '2026-11', 'Compra 2/2');
  const result = estimateCurrentBill([
    installment, installment,
    tx('first', 100, '2026-10', 'Compra 1/2'),
    tx('future', 100, '2026-12', 'Outra compra 3/3'),
    tx('purchase', 50, '2026-11'),
    tx('refund', -10, '2026-11', 'Estorno', 'CREDIT'),
    tx('payment', -500, '2026-11', 'Pagamento recebido', 'CREDIT'),
    { ...tx('codedPayment', -100, '2026-11', 'Pagamento', 'CREDIT'), operationType: 'PAGAMENTO_FATURA' },
  ], previous, '2026-11');
  assert.deepEqual(result, { amount: 14000, dueDate: '2026-11-15', estimated: true });
});
test('does not invent the next installment or reuse one already billed', () => {
  const previous = [{ id: 'oct', dueDate: '2026-10-15', totalAmount: 500 }];
  assert.equal(estimateCurrentBill([{id: 'a', amount: 100, type: 'DEBIT', description: 'Compra 1/2', creditCardMetadata: { billId: 'oct', billForecastDate: '2026-11' }}], previous, '2026-11'), null);
  assert.equal(estimateCurrentBill([{id: 'a', amount: 100, type: 'DEBIT', description: 'Compra 1/2'}], previous, '2026-11'), null);
});

test('reconciles bank balance less future installments instead of hard-coding a two-cent deduction', () => {
  const bill = { amount: 182984, dueDate: '2026-11-15', estimated: true };
  const future = [{id:'future',amount:1144.23,type:'DEBIT',description:'Parcelas futuras',status:'PENDING',creditCardMetadata:{billForecastDate:'2026-12'}}];
  assert.equal(reconcileEstimatedBill(bill, future, '2026-11', 2974.05).amount, 182982);
  assert.equal(reconcileEstimatedBill(bill, future, '2026-11', 2974.05).reconciliationCents, -2);
  assert.equal(reconcileEstimatedBill(bill, future, '2026-11', 2974.07).amount, 182984);
  assert.equal(reconcileEstimatedBill({...bill, amount:183604}, future, '2026-11', 2980.25).amount, 183602);
});
test('does not reconcile missing forecasts, large differences or an official bill', () => {
  const bill = {amount:10000,dueDate:'2026-11-15',estimated:true};
  assert.deepEqual(reconcileEstimatedBill(bill, [], '2026-11', 120), bill);
  assert.deepEqual(reconcileEstimatedBill(bill, [{id:'a',amount:1,type:'DEBIT',description:'Compra',status:'PENDING'}], '2026-11', 99.98), bill);
  const official = {...bill,estimated:false};
  assert.deepEqual(reconcileEstimatedBill(official, [], '2026-11', 99.98), official);
});
