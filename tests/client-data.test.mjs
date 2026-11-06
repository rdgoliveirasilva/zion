import assert from 'node:assert/strict';
import test, { beforeEach, afterEach } from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = readFileSync(new URL('../lib/client-data.ts', import.meta.url), 'utf8').split('export function useJsonResource')[0].replace(/^import .* from "react";\r?\n/m, '');
const { loadClientData, notifyDataChanged } = await import('data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(source)).toString('base64'));
const original = { fetch: globalThis.fetch, window: globalThis.window, setTimeout: globalThis.setTimeout, clearTimeout: globalThis.clearTimeout };
beforeEach(() => { globalThis.window = new EventTarget(); window.location = { replace() {} }; notifyDataChanged(); });
afterEach(() => Object.assign(globalThis, original));

test('concurrent requests share a fetch and navigation reuses fresh data', async () => {
  let requests = 0;
  globalThis.fetch = async () => { requests++; return Response.json([{ id: 'saved' }]); };
  const [a,b] = await Promise.all([loadClientData('/data'), loadClientData('/data')]);
  assert.deepEqual(a,b); await loadClientData('/data'); assert.equal(requests,1);
});
test('mutations invalidate data and a late old response cannot replace fresh data', async () => {
  let finishOld;
  globalThis.fetch = () => new Promise(resolve => { finishOld = resolve; });
  const old = loadClientData('/data');
  notifyDataChanged();
  globalThis.fetch = async () => Response.json({ version: 2 });
  assert.deepEqual(await loadClientData('/data'), { version: 2 });
  finishOld(Response.json({ version: 1 })); await old;
  assert.deepEqual(await loadClientData('/data'), { version: 2 });
});
test('failed responses are not cached and retry can succeed', async () => {
  globalThis.fetch = async () => Response.json({ error: 'Unavailable' }, { status: 503 });
  await assert.rejects(loadClientData('/data'), /Unavailable/);
  globalThis.fetch = async () => Response.json({ ok: true });
  assert.deepEqual(await loadClientData('/data'), { ok: true });
});
test('hung requests abort rather than leaving an infinite spinner', async () => {
  globalThis.setTimeout = callback => { queueMicrotask(callback); return 0; };
  globalThis.clearTimeout = () => {};
  globalThis.fetch = (_, { signal }) => new Promise((_, reject) => signal.addEventListener('abort', () => reject(new Error('aborted'))));
  await assert.rejects(loadClientData('/data'), /conexão demorou/);
});
test('expired authentication clears data and returns to login', async () => {
  let location;
  window.location.replace = value => { location = value; };
  globalThis.fetch = async () => new Response(null, { status: 401 });
  await assert.rejects(loadClientData('/data'), /sessão expirou/);
  assert.equal(location, '/login');
});

test('transaction changes preserve fresh account options while invalidating statements', async () => {
  let optionsRequests = 0, statementRequests = 0;
  globalThis.fetch = async url => {
    if (url.includes('view=options')) { optionsRequests++; return Response.json([{id:'synthetic'}]); }
    statementRequests++; return Response.json({transactions:[]});
  };
  await loadClientData('/api/accounts?view=options'); await loadClientData('/api/statement');
  let change;
  window.addEventListener('zion:data-changed', event => { change = event.detail; }, {once:true});
  notifyDataChanged({removedTransactionId:'synthetic'});
  await loadClientData('/api/accounts?view=options'); await loadClientData('/api/statement');
  assert.equal(optionsRequests,1); assert.equal(statementRequests,2);
  assert.deepEqual(change,{removedTransactionId:'synthetic'});
});
