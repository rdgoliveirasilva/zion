import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
const source = readFileSync(new URL('../app/api/commitments/[id]/route.ts', import.meta.url), 'utf8').replace(/^import .*;\r?\n/gm, '');
const injected = `const NextResponse={json:(body,options={})=>({body,status:options.status||200})}; const hasSession=()=>globalThis.authenticated; const prisma=new Proxy({}, {get:(_,key)=>globalThis.actionsDb[key]}); const dueDateFor=(month,day)=>new Date(month+"-"+String(day).padStart(2,"0")+"T15:00:00Z"); const financialDay=date=>new Date(date).toISOString().slice(0,10); const normalizeMerchant=value=>value.toLowerCase(); const reconcileCommitments=async()=>{};\n`;
const { PATCH, DELETE } = await import('data:text/javascript;base64,' + Buffer.from(stripTypeScriptTypes(injected + source)).toString('base64'));
const context = id => ({ params: Promise.resolve({id}) });
const request = body => ({json:async()=>body});
function fixture() {
  const records = [
    {id:'old',ruleId:'rule',status:'paid',category:'outros'},
    {id:'now',ruleId:'rule',status:'pending',category:'outros',source:'recurring',amount:1000,dueDate:new Date('2026-11-10T15:00:00Z')},
    {id:'future',ruleId:'rule',status:'pending',category:'outros',source:'recurring',amount:1000,dueDate:new Date('2026-12-10T15:00:00Z')},
    {id:'card',ruleId:null,status:'pending',category:'outros',source:'card',amount:2000,dueDate:new Date('2026-11-15T15:00:00Z')},
  ];
  const db = {
    $queryRaw: async()=>{},
    commitment: {
      delete: async({where})=>{const index=records.findIndex(x=>x.id===where.id); return records.splice(index,1)[0];},
      findUnique: async({where})=>records.find(x=>x.id===where.id),
      findUniqueOrThrow: async({where})=>records.find(x=>x.id===where.id),
      update: async({where,data})=>Object.assign(records.find(x=>x.id===where.id),data),
      updateMany: async({where,data})=>{records.filter(x=>x.ruleId===where.ruleId).forEach(x=>Object.assign(x,data));},
      deleteMany: async({where})=>{for(let i=records.length-1;i>=0;i--)if(records[i].ruleId===where.ruleId&&records[i].status===where.status)records.splice(i,1);},
    },
    recurringRule:{update:async({data})=>{db.active=data.active??db.active;db.ruleCategory=data.category??db.ruleCategory;},create:async({data})=>({id:'new-rule',...data})},
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

test('editing a recurring occurrence preserves the rule and marks its manual values',async()=>{
  const {records}=fixture();
  const result=await PATCH(request({action:'edit',amount:1250,dueDate:'2026-11-12',category:'moradia',recurring:true}),context('now'));
  assert.equal(result.status,200);
  assert.equal(records.find(x=>x.id==='now').amount,1250);
  assert.equal(records.find(x=>x.id==='now').manualOverride,true);
  assert.equal(records.find(x=>x.id==='future').amount,1000);
});
test('edited invoice cannot be converted into a one-time account',async()=>{
  fixture();
  const result=await PATCH(request({action:'edit',amount:2100,dueDate:'2026-11-16',category:'moradia',recurring:false}),context('card'));
  assert.equal(result.status,400);
});

test('a manual account can become a monthly recurring rule without a new transaction',async()=>{
  const {records}=fixture();
  records.push({id:'manual',key:'manual:one',ruleId:null,status:'pending',category:'outros',source:'manual',description:'Internet',amount:1000,dueDate:new Date('2026-11-10T15:00:00Z')});
  const result=await PATCH(request({action:'edit',amount:1000,dueDate:'2026-11-10',category:'moradia',recurring:true}),context('manual'));
  assert.equal(result.status,200);
  assert.equal(records.find(x=>x.id==='manual').ruleId,'new-rule');
});

test('deletes only the selected standalone manual payable and preserves bank movements', async () => {
  const {records} = fixture();
  records.push({id:'manual',source:'manual',ruleId:null,status:'pending',transactionId:'bank-movement'});
  const response = await DELETE({},context('manual'));
  assert.equal(response.status,200);
  assert.equal(records.some(x=>x.id==='manual'),false);
  assert.equal(records.length,4);
  assert.equal((await DELETE({},context('manual'))).status,200);
});
