import assert from 'node:assert/strict';
import test from 'node:test';
import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';
const read = name => readFileSync(new URL('../lib/'+name,import.meta.url),'utf8');
const url = source => 'data:text/javascript;base64,'+Buffer.from(stripTypeScriptTypes(source)).toString('base64');
const statement = url(read('statement.ts'));
const rules = url(read('commitment-rules.ts'));
const history = url(read('financial-history.ts').replace('"./statement"',JSON.stringify(statement)).replace('"./commitment-rules"',JSON.stringify(rules)));
const source = read('commitments.ts').split('export async function loadCommitments')[0].replace(/^import .* from "(?:@\/lib\/prisma|@\/generated\/prisma)";\r?\n/gm,'').replace('"./statement"',JSON.stringify(statement)).replace('"./commitment-rules"',JSON.stringify(rules)).replace('"./financial-history"',JSON.stringify(history));
const {reconcileCommitments} = await import(url(source));
const {dueDateFor,monthOffset} = await import(rules);
test('unchanged recurring commitments are read once and cause no writes', async () => {
  const rule = {id:'rule',description:'Synthetic',amount:1000,category:'outros',accountId:null,startMonth:'2026-11',dueDay:6,intervalMonths:1};
  const stored = Array.from({length:14},(_,i) => {
    const month=monthOffset('2026-11',i);
    return {id:String(i),key:'rule:'+month,description:rule.description,amount:1000,category:'outros',coveredByCard:false,ruleId:'rule',source:'recurring',status:'pending',transactionId:null,dueDate:dueDateFor(month,6)};
  });
  let reads=0, writes=0;
  const db = {$queryRaw:async()=>[],commitment:{findMany:async()=>{reads++;return stored;},update:async()=>{writes++;},create:async()=>{writes++;}},recurringRule:{findMany:async()=>[rule]},transaction:{findMany:async()=>[]}};
  await reconcileCommitments(db,new Date('2026-11-06T15:00:00Z'));
  assert.equal(reads,1); assert.equal(writes,0);
});
