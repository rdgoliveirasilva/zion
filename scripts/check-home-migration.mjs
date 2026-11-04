// Dry run only: PostgreSQL DDL and backfill are rolled back, including on errors.
import 'dotenv/config';
import { Client } from 'pg';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const db = new Client({ connectionString: process.env.DATABASE_URL });
try {
  await db.connect();
  await db.query('BEGIN');
  const fingerprint = `SELECT count(*)::int AS count, md5(coalesce(string_agg(concat_ws('|',id,description,amount,type,date,"accountId",status,category),E'\\n' ORDER BY id),'')) AS hash FROM "Transaction"`;
  const before = (await db.query(fingerprint)).rows[0];
  const sql = readFileSync(new URL('../prisma/migrations/20261104000000_home_commitments/migration.sql', import.meta.url), 'utf8').replace(/^BEGIN;/, '').replace(/COMMIT;\s*$/, '');
  await db.query(sql);
  const after = (await db.query(fingerprint)).rows[0];
  assert.deepEqual(after, before);
  const expected = (await db.query(`SELECT count(*)::int AS count FROM "Transaction" WHERE type='bill'`)).rows[0].count;
  const actual = (await db.query(`SELECT count(*)::int AS count FROM "Commitment"`)).rows[0].count;
  assert.equal(actual, expected);
  console.log(`Migração validada em transação revertida: ${before.count} movimentações preservadas; ${actual} compromissos legados vinculados.`);
} finally {
  await db.query('ROLLBACK').catch(() => {});
  await db.end();
}
