import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const js = stripTypeScriptTypes(readFileSync(new URL('../lib/pluggy-webhook.ts', import.meta.url), 'utf8'));
const { authenticateWebhook, SYNC_EVENTS } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
test('webhook fails closed without a configured secret or with incorrect credentials', () => {
  assert.equal(authenticateWebhook(null, undefined), false);
  assert.equal(authenticateWebhook('secret', undefined), false);
  assert.equal(authenticateWebhook(null, 'secret'), false);
  assert.equal(authenticateWebhook('SECRET', 'secret'), false);
  assert.equal(authenticateWebhook('wrong-length', 'secret'), false);
  assert.equal(authenticateWebhook('secret', 'secret'), true);
});
test('only completed data events trigger imports', () => {
  for (const event of ['item/created', 'item/updated', 'transactions/created', 'transactions/updated']) assert.equal(SYNC_EVENTS.has(event), true);
  for (const event of ['item/login_succeeded', 'item/error', 'item/deleted', 'transactions/deleted']) assert.equal(SYNC_EVENTS.has(event), false);
});
