import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = stripTypeScriptTypes(readFileSync(new URL('../lib/currency-input.ts', import.meta.url),'utf8'));
const {formatCurrencyInput,currencyFromCents,currencyInputCents} = await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
test('typing cents, grouping thousands, pasting and clearing preserve values', () => {
  assert.equal(formatCurrencyInput('1'),'0,01');
  assert.equal(formatCurrencyInput('19'),'0,19');
  assert.equal(formatCurrencyInput('1990'),'19,90');
  assert.equal(formatCurrencyInput('123456'),'1.234,56');
  assert.equal(formatCurrencyInput('R$ 1.234,56'),'1.234,56');
  assert.equal(formatCurrencyInput(''),'');
  for(const cents of [0,1,1990,123456,2147483647]) assert.equal(currencyInputCents(currencyFromCents(cents)),cents);
  assert.ok(Number.isNaN(currencyInputCents('')));
  assert.ok(Number.isNaN(currencyInputCents('-1,00')));
});
