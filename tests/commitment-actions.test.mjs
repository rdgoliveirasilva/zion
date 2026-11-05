import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = readFileSync(new URL('../app/api/commitments/[id]/route.ts', import.meta.url), 'utf8').replace(/^import .*;\r?\n/gm, '');
const injected = `const NextResponse={json:(body,options={})=>({body,status:options.status||200})}; const hasSession=()=>globalThis.authenticated; const prisma=new Proxy({}, {get:(_,key)=>globalThis.actionsDb[key]});\n`;
const { PATCH, DELETE } = await import('data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(injected + source)).toString('base64'));
const context = id => ({ params: Promise.resolve({id}) });
const request = body => ({json:async()=>body});
function fixture() {
  const records = [
    {id:'old',ruleId:'rule',status:'paid',category:'outros'},
    {id:'now',ruleId:'rule',status:'pending',category:'outros'},
    {id:'future',ruleId:'rule',status:'pending',category:'outros'},
    {id:'card',ruleId:null,status:'pending',category:'outros'},
  ];
  const db = {
    $queryRaw: async()=>{},
    commitment: {
      findUnique: async({where})=>records.find(x=>x.id===where.id),
      findUniqueOrThrow: async({where})=>records.find(x=>x.id===where.id),
      update: async({where,data})=>Object.assign(records.find(x=>x.id===where.id),data),
      updateMany: async({where,data})=>{records.filter(x=>x.ruleId===where.ruleId).forEach(x=>Object.assign(x,data));},
      deleteMany: async({where})=>{for(let i=records.length-1;i>=0;i--)if(records[i].ruleId===where.ruleId&&records[i].status===where.status)records.splice(i,1);},
    },
    recurringRule:{update:async({data})=>{db.active=data.active??db.active;db.ruleCategory=data.category??db.ruleCategory;}},
    category:{findFirst:async({where})=>where.value==='moradia'?{value:'moradia'}:null},
    transaction:{create:()=>{throw new Error('must not duplicate transactions')}},
  };
  globalThis.actionsDb={$transaction:callback=>callback(db)};
  globalThis.authenticated=true;
  return {records,db};
}
test('manual payment marks one recurrence without creating a bank movement',async()=>{
  const {records}=fixture();
  assert.equal((await PATCH(request({action:'pay'}),context('now'))).status,200);
  assert.equal(records.find(x=>x.id==='now').status,'paid');
  assert.equal(records.find(x=>x.id==='future').status,'pending');
});
test('category changes the rule and all its occurrences but leaves card bills alone',async()=>{
  const {records,db}=fixture();
  assert.equal((await PATCH(request({action:'category',category:'moradia'}),context('now'))).status,200);
  assert.equal(db.ruleCategory,'moradia');
  assert.equal(records.filter(x=>x.ruleId==='rule').every(x=>x.category==='moradia'),true);
  assert.equal(records.find(x=>x.id==='card').category,'outros');
});
test('deleting recurrence preserves paid history and removes pending occurrences',async()=>{
  const {records,db}=fixture();
  assert.equal((await DELETE({},context('now'))).status,200);
  assert.equal(db.active,false);
  assert.deepEqual(records.map(x=>x.id),['old','card']);
});
test('actions require a session and reject card bills',async()=>{
  fixture();globalThis.authenticated=false;
  assert.equal((await PATCH(request({action:'pay'}),context('now'))).status,401);
  globalThis.authenticated=true;
  assert.equal((await DELETE({},context('card'))).status,400);
});
