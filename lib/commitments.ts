import { currentCardBill } from "./pluggy-bills";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/generated/prisma";
import { financialDay } from "./statement";
import { PAID_STATUSES, normalizeMerchant, monthOffset, monthsBetween, dueDateFor } from "./commitment-rules";

export async function reconcileCommitments(db: Prisma.TransactionClient, now = new Date()) {
  await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
  const rules=await db.recurringRule.findMany({where:{active:true}});
  const currentMonth=financialDay(now).slice(0,7);
  for(const rule of rules) {
    const account=rule.accountId?await db.account.findUnique({where:{id:rule.accountId},select:{type:true}}):null;
    const matches=(await db.transaction.findMany({where:{accountId:rule.accountId,amount:rule.amount,type:"expense",isBillPayment:false},include:{account:true,commitment:true},orderBy:{date:"asc"}}))
      .filter(tx=>normalizeMerchant(tx.description)===rule.description);
    // Never overwrite a manual choice, including an explicit choice of Outros.
    const inherited=matches.filter(tx=>tx.categorySource!=="manual").map(tx=>tx.id);
    if(inherited.length) await db.transaction.updateMany({where:{id:{in:inherited}},data:{category:rule.category,categorySource:"rule"}});
    for(let offset=0;offset<=monthsBetween(rule.startMonth,monthOffset(currentMonth,12));offset+=rule.intervalMonths) {
      const month=monthOffset(rule.startMonth,offset);
      const candidates=matches.filter(tx=>financialDay(tx.date).slice(0,7)===month);
      const key=rule.id+":"+month;
      let existing=await db.commitment.findUnique({where:{key}});
      if (!existing) {
        const manual = (await db.commitment.findMany({ where: { source: "manual", ruleId: null, amount: rule.amount } }))
          .filter(c => financialDay(c.dueDate).slice(0,7) === month && normalizeMerchant(c.description) === rule.description);
        if (manual.length === 1) existing = await db.commitment.update({ where: { id: manual[0].id }, data: { key, ruleId: rule.id } });
        // Do not add another obligation when existing manual entries are ambiguous.
        else if (manual.length > 1) continue;
      }
      const available=candidates.filter(tx=>!tx.commitment || tx.commitment.key===key);
      if (!existing && candidates.length && !available.length) continue;
      // Ambiguous same-period matches remain pending for explicit review.
      const candidate=available.length===1?available[0]:undefined;
      const paid=!!candidate && PAID_STATUSES.has(candidate.status) && financialDay(candidate.date)<=financialDay(now);
      const data={description:rule.description,amount:rule.amount,dueDate:dueDateFor(month,rule.dueDay),category:rule.category,coveredByCard:account?.type==="credit",ruleId:rule.id};
      if(!existing) await db.commitment.create({data:{...data,key,status:paid?"paid":"pending",transactionId:candidate?.id}});
      else if(existing.status!=="paid") await db.commitment.update({where:{id:existing.id},data:{...data,status:paid?"paid":"pending",transactionId:candidate?.id ?? existing.transactionId}});
    }
  }
}
export async function loadCommitments() {
  const accounts = await prisma.account.findMany({ where: { type: "credit" } });
  const bills = await Promise.all(accounts.map(async account => ({ account, bill: await currentCardBill(account) })));
  await prisma.$transaction(async db => {
    await db.$queryRaw`SELECT pg_advisory_xact_lock(hashtext('zion-commitments'))::text`;
    for (const { account, bill } of bills) {
      if (!bill) continue;
      const key = `card:${account.id}:${bill.dueDate.slice(0,7)}`;
      const existing = await db.commitment.findUnique({ where: { key } });
      const data = { description: `Fatura ${account.name}`, amount: bill.amount, dueDate: dueDateFor(bill.dueDate.slice(0,7), Number(bill.dueDate.slice(8,10))), source: "card" };
      if (!existing) await db.commitment.create({ data: { ...data, key } });
      else if (existing.status !== "paid") await db.commitment.update({ where: { key }, data });
    }
  }, { timeout: 60000 });
  await prisma.$transaction(db=>reconcileCommitments(db),{timeout:60000});
  return prisma.commitment.findMany({orderBy:{dueDate:"asc"}});
}
