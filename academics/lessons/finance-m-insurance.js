// Middle School topic (Grade 8, Jump$tart Risk Management and Insurance, grade 8 benchmark): premiums,
// deductibles and choosing a plan. Every answer is computed here in whole cents from the numbers in its own
// question: a year of premiums is 12 monthly payments, on each covered claim the policyholder pays up to the
// deductible and the insurer pays the rest (up to a stated limit, where there is one), and a plan's cost for a year
// is its premiums plus what the policyholder pays on claims. Every policy is fictional, with no other fees or rules.
const usd=c=>`$${(c/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const KIND=['phone','bike','car','renter’s','pet','laptop','camera','scooter'];
const NM=['Ari','Bea','Cy','Dot','Emil','Flor','Gil','Hope','Ike','Juna','Kip','Lia'];
const plan=(m,d)=>`${usd(m)} a month with a ${usd(d)} deductible`;
export default {
id:'finance-m-insurance',subject:'finance',level:4,grade:8,standard:'Jump$tart Risk Management and Insurance, grade 8 benchmark',
title:'Insurance: premiums and deductibles',
goal:'Find the cost of a year of premiums, split a claim between the deductible and what the insurer pays, and compare two plans for a year.',
points:20,
skills:{premium:'Premiums',claim:'Deductibles and claims',compare:'Comparing plans'},
steps:[
 {skill:'premium',say:'Insurance shares the cost of losses that are rare but expensive. Many people each pay a premium, a regular price for the policy, and the insurer uses that money to pay for the losses of the few who have them.',pic:tab('How insurance works',[['many people','each pay a premium'],['a few people','have a covered loss'],['the insurer','pays toward those losses']])},
 {skill:'premium',say:'Premiums can be paid each month or each year. A fictional phone policy at $45.00 a month costs 12 × $45.00 = $540.00 for a year.',eq:'12 × 45 = 540',pic:tab('A fictional phone policy',[['each month','$45.00'],['months','12'],['each year','$540.00']]),
  check:{prompt:'Try it: a fictional bike policy costs $18.50 a month. How much is that for a year, in dollars?',answer:222,options:[222,18.5,240],hint:'Multiply the monthly premium by 12.',pic:tab('A fictional bike policy',[['each month','$18.50'],['each year','?']])}},
 {skill:'claim',say:'When you make a claim for a covered loss, you pay the deductible first and the insurer pays the rest. With a $500.00 deductible, a $2,000.00 repair costs you $500.00, and the insurer pays $2,000.00 - $500.00 = $1,500.00.',pic:tab('A fictional claim',[['repair','$2,000.00'],['you pay','$500.00'],['insurer pays','$1,500.00']])},
 {skill:'claim',say:'If a loss costs less than the deductible, you pay all of it and the insurer pays nothing: a $300.00 repair under a $500.00 deductible is all yours. Each new claim has its own deductible.',pic:tab('A small claim',[['repair','$300.00'],['deductible','$500.00'],['insurer pays','$0.00']]),
  check:{prompt:'Try it: a fictional car policy has a $250.00 deductible. A covered repair costs $1,100.00. How much does the insurer pay, in dollars?',answer:850,options:[850,1100,250],hint:'Take the deductible away from the cost of the repair.',pic:tab('A fictional car claim',[['repair','$1,100.00'],['deductible','$250.00'],['insurer pays','?']])}},
 {skill:'compare',say:'A plan with a lower premium usually has a higher deductible. To compare plans for a year, add each plan’s premiums to what you would pay yourself on that year’s claims.',pic:{t:'setups',title:'Two fictional plans',head:'',rows:[['premium','lower','higher'],['deductible','higher','lower']],cols:['Plan A','Plan B']}},
 {skill:'compare',say:'With one $1,000.00 claim, plan A at $30.00 a month with a $500.00 deductible costs 12 × 30 + 500 = 860 dollars for the year. Plan B at $50.00 a month with a $100.00 deductible costs 12 × 50 + 100 = 700 dollars, so plan B costs less that year.',pic:{t:'setups',title:'A year with one $1,000.00 claim',head:'',rows:[['premiums','$360.00','$600.00'],['you pay on the claim','$500.00','$100.00'],['total','$860.00','$700.00']],cols:['Plan A','Plan B']},
  check:{prompt:'Try it: fictional plan A costs $20.00 a month with a $1,000.00 deductible. Plan B costs $40.00 a month with a $200.00 deductible. In a year with no claims, which plan costs less: A or B?',answer:'A',options:['A','B'],hint:'With no claims, only the premiums count.',pic:{t:'setups',title:'Two fictional plans',head:'',rows:[['each month','$20.00','$40.00'],['deductible','$1,000.00','$200.00']],cols:['Plan A','Plan B']}}}],
progression:{requires:['finance-m-monthly-budget','finance-e-real-cost'],operations:3,demand:'Multiply or divide a premium by 12, split a cost at the deductible (and a limit), and add a year of premiums to the cost of the claims.'},
items(add){
 let i=0;
 const k=()=>KIND[i%KIND.length],n=()=>NM[i%NM.length];
 /* A year of premiums, and a month from a year (the Try-it's $18.50 bike policy is left out). */
 for(const m of [1250,2400,3550,4500,6225,875,1599,2995,5150,10800,3375,4120]){const K=k();i++;
  add('premium',`A fictional ${K} policy costs ${usd(m)} a month. How much does it cost for a year, in dollars?`,12*m/100,tab(`A fictional ${K} policy`,[['each month',usd(m)],['each year','?']]),`12 × ${usd(m)} = ${usd(12*m)}.`);
  add('premium',`A fictional ${K} policy costs ${usd(12*m)} a year, paid as 12 equal monthly premiums. How much is each monthly premium, in dollars?`,m/100,tab(`A fictional ${K} policy`,[['each year',usd(12*m)],['each month','?']]),`${usd(12*m)} ÷ 12 = ${usd(m)}.`);}
 /* Paying twice a year instead of monthly, and a discount on the yearly premium. */
 for(const [m,h] of [[4000,22000],[2500,14400],[6000,33000],[1800,9900],[7500,42000],[3200,18000]]){const K=k();i++;
  add('premium',`A fictional ${K} policy costs ${usd(m)} a month, or ${usd(h)} every six months. How much is saved in a year by paying every six months?`,(12*m-2*h)/100,tab(`A fictional ${K} policy`,[['monthly',usd(m)],['every six months',usd(h)],['saved in a year','?']]),`Monthly: 12 × ${usd(m)} = ${usd(12*m)}. Twice a year: 2 × ${usd(h)} = ${usd(2*h)}. Saved: ${usd(12*m-2*h)}.`);}
 for(const [y,p] of [[60000,10],[84000,15],[48000,5],[120000,20],[36000,10],[90000,12]]){const K=k(),c=y*(100-p)/100;i++;
  add('premium',`A fictional insurer charges ${usd(y)} a year for a ${K} policy and takes ${p}% off for a safe record. What does the policy cost for the year after the discount, in dollars?`,c/100,tab(`A fictional ${K} policy`,[['yearly premium',usd(y)],['discount',`${p}%`],['after the discount','?']]),`${p}% of ${usd(y)} is ${usd(y-c)}, so it costs ${usd(y)} - ${usd(y-c)} = ${usd(c)}.`);}
 /* Splitting one claim at the deductible (the Try-it's $250.00 and $1,100.00 is left out), and losses below it. */
 for(const d of [10000,25000,50000,100000])for(const c of [40000,120000,250000,8000,30000,500000]){if(d===25000&&c===110000)continue;const K=k(),you=Math.min(c,d),ins=c-you,who=i%2===0;i++;
  add('claim',`A fictional ${K} policy has a ${usd(d)} deductible. A covered loss costs ${usd(c)}. How much ${who?'does the insurer pay':'does the policyholder pay'}, in dollars?`,(who?ins:you)/100,tab(`A fictional ${K} claim`,[['loss',usd(c)],['deductible',usd(d)],[who?'insurer pays':'policyholder pays','?']]),c<=d?`The loss is no more than the deductible, so the policyholder pays all ${usd(c)} and the insurer pays $0.00.`:`The policyholder pays the ${usd(d)} deductible and the insurer pays ${usd(c)} - ${usd(d)} = ${usd(ins)}.`);}
 /* Two claims in one year, each with its own deductible. */
 for(const [d,a,b] of [[50000,120000,30000],[25000,80000,60000],[100000,40000,250000],[20000,15000,90000],[50000,200000,75000],[30000,45000,20000]]){const K=k(),you=Math.min(a,d)+Math.min(b,d);i++;
  add('claim',`A fictional ${K} policy has a ${usd(d)} deductible on each claim. In one year there are two covered losses, of ${usd(a)} and ${usd(b)}. How much does the policyholder pay in all, in dollars?`,you/100,tab(`A fictional ${K} policy`,[['deductible each claim',usd(d)],['first loss',usd(a)],['second loss',usd(b)],['policyholder pays','?']]),`On ${usd(a)} the policyholder pays ${usd(Math.min(a,d))}, and on ${usd(b)} pays ${usd(Math.min(b,d))}: ${usd(you)} in all.`);}
 /* A limit on what the insurer pays. */
 for(const [d,L,c] of [[50000,500000,800000],[25000,200000,150000],[100000,300000,500000],[50000,1000000,700000],[20000,100000,180000],[50000,250000,250000]]){const K=k(),ins=Math.min(c-d,L);i++;
  add('claim',`A fictional ${K} policy has a ${usd(d)} deductible and pays at most ${usd(L)} on a claim. A covered loss costs ${usd(c)}. How much does the insurer pay, in dollars?`,ins/100,tab(`A fictional ${K} policy`,[['deductible',usd(d)],['limit',usd(L)],['loss',usd(c)],['insurer pays','?']]),c-d>L?`After the deductible, ${usd(c-d)} is left, but the limit is ${usd(L)}, so the insurer pays ${usd(L)}.`:`After the deductible, ${usd(c-d)} is left, within the ${usd(L)} limit, so the insurer pays ${usd(ins)}.`);}
 /* A plan's cost for a year, and which of two plans costs less (the Try-it's no-claim year with $20.00 and $40.00 is left out). */
 const PLANS=[[2000,100000,4000,20000],[3000,50000,5000,10000],[2500,75000,4500,25000],[1500,150000,3500,30000],[4000,40000,6500,5000],[1800,120000,3800,20000]];
 const LOSS=[0,20000,60000,150000];
 PLANS.forEach(([ma,da,mb,db],j)=>LOSS.forEach((L,q)=>{if(j===0&&L===0)return;const who=n();i++;
  const A=12*ma+Math.min(L,da),B=12*mb+Math.min(L,db),yr=L?`a year with one covered loss of ${usd(L)}`:'a year with no claims';
  const lead=`Fictional plan A costs ${plan(ma,da)}. Plan B costs ${plan(mb,db)}.`,pic={t:'setups',title:'Two fictional plans',head:'',rows:[['each month',usd(ma),usd(mb)],['deductible',usd(da),usd(db)],['loss this year',usd(L),usd(L)]],cols:['Plan A','Plan B']};
  if(A===B)return;
  if((j+q)%3===0){const which=(j+q)%2?'B':'A',v=which==='A'?A:B;add('compare',`${lead} For ${yr}, what does plan ${which} cost ${who} in all, in dollars?`,v/100,pic,`Premiums 12 × ${usd(which==='A'?ma:mb)} = ${usd(12*(which==='A'?ma:mb))}, plus ${usd(v-12*(which==='A'?ma:mb))} paid on claims: ${usd(v)}.`);}
  else{const cheap=A<B?'A':'B';add('compare',`${lead} For ${yr}, which plan costs ${who} less: A or B?`,cheap,pic,`Plan A: ${usd(12*ma)} + ${usd(A-12*ma)} = ${usd(A)}. Plan B: ${usd(12*mb)} + ${usd(B-12*mb)} = ${usd(B)}. Plan ${cheap} costs less.`,[`plan ${cheap.toLowerCase()}`]);
   add('compare',`${lead} For ${yr}, how much more does the more expensive plan cost ${who}, in dollars?`,Math.abs(A-B)/100,pic,`Plan A costs ${usd(A)} and plan B costs ${usd(B)}, a difference of ${usd(Math.abs(A-B))}.`);}}));
}
};
