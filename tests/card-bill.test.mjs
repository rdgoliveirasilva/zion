import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const js = stripTypeScriptTypes(readFileSync(new URL('../lib/card-bill.ts', import.meta.url), 'utf8'));
const { selectCurrentBill } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
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
