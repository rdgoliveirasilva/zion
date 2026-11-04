import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = readFileSync(new URL('../lib/commitments.ts', import.meta.url), 'utf8').split('export async function loadCommitments')[1];
const { loadCommitments } = await import('data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes('const prisma = new Proxy({}, { get: (_, key) => globalThis.readOnlyDb[key] });\nexport async function loadCommitments' + source)).toString('base64'));
test('page reads use saved commitments without locks or banking calls, and see edits immediately', async () => {
  let color = '#000000';
  const record = Object.freeze({ id: 'stored', amount: 100, category: 'outros', status: 'paid' });
  globalThis.readOnlyDb = {
    commitment: { findMany: async () => [record] },
    category: { findMany: async () => [{ value: 'outros', color }] },
    $transaction: () => { throw new Error('A page must not run reconciliation'); },
  };
  try {
    assert.deepEqual(await loadCommitments(), [{ ...record, color }]);
    color = '#ff0000';
    assert.deepEqual(await loadCommitments(), [{ ...record, color }]);
    assert.equal(record.amount, 100);
  } finally { delete globalThis.readOnlyDb; }
});
