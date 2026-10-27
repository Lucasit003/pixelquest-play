// Middle School topic (Grade 8, Jump$tart Employment and Income, grade 8 benchmark): income tax in brackets. Every
// answer is computed here from the fictional bracket table in its own question: each slice of income is taxed at
// its own rate, the marginal rate is the rate on the next dollar, and the effective rate is the total tax ÷ the
// income. Incomes are whole thousands, so every tax is a whole number of dollars. No real tax system is described.
const usd=d=>`$${d.toLocaleString('en-US')}`;
/* A system: [[top of the bracket, rate %], ...], the last bracket open-ended. */
const SYS=[
 {name:'Arland',b:[[10000,10],[40000,20],[Infinity,30]]},
 {name:'Brevia',b:[[8000,5],[30000,15],[Infinity,25]]},
 {name:'Corvel',b:[[5000,0],[25000,10],[Infinity,20]]},
 {name:'Dunmore',b:[[12000,10],[50000,22],[Infinity,32]]}];
const tax=(S,I)=>{let t=0,lo=0;for(const [hi,r] of S.b){if(I>lo)t+=(Math.min(I,hi)-lo)*r/100;lo=hi;}return Math.round(t);};
const marginal=(S,I)=>S.b.find(([hi])=>I<hi)[1];
const rules=S=>{let lo=0;return S.b.map(([hi,r],k)=>{const s=k===0?`the first ${usd(hi)} at ${r}%`:hi===Infinity?`income above ${usd(lo)} at ${r}%`:`income from ${usd(lo)} to ${usd(hi)} at ${r}%`;lo=hi;return s;});};
const said=S=>{const r=rules(S);return `The fictional country of ${S.name} taxes ${r.slice(0,-1).join(', ')} and ${r.at(-1)}.`;};
const table=(S,rows=[])=>{let lo=0;return {t:'setups',title:`Fictional ${S.name} tax brackets`,head:'Income slice',rows:[...S.b.map(([hi,r])=>{const row=[hi===Infinity?`above ${usd(lo)}`:`${usd(lo)} to ${usd(hi)}`,`${r}%`];lo=hi;return row;}),...rows],cols:['Rate']};};
const slices=(S,I)=>{let lo=0;const out=[];for(const [hi,r] of S.b){if(I>lo)out.push(`${r}% of ${usd(Math.min(I,hi)-lo)} = ${usd(Math.round((Math.min(I,hi)-lo)*r/100))}`);lo=hi;}return out.join(', ');};
const short=p=>Math.abs(p*10-Math.round(p*10))<1e-9;
export default {
id:'finance-m-taxes-brackets',subject:'finance',level:4,grade:8,standard:'Jump$tart Employment and Income, grade 8 benchmark',
title:'Income tax brackets',
goal:'Work out the income tax in a system of brackets, find the marginal rate on the next dollar, and find the effective rate on the whole income.',
points:20,
skills:{tax:'Tax in brackets',marginal:'Marginal rate',effective:'Effective rate'},
steps:[
 {skill:'tax',say:'Income tax helps pay for schools, roads and other public services. Many systems use brackets: each slice of income is taxed at its own rate, and a higher rate applies only to the dollars above each line, never to the whole income.',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]})},
 {skill:'tax',say:'In a fictional system with 10% on the first $10,000 and 20% on income above $10,000, an income of $25,000 pays 10% of $10,000 = $1,000 plus 20% of $15,000 = $3,000, a tax of $1,000 + $3,000 = $4,000.',eq:'1,000 + 3,000 = 4,000',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]},[['income','$25,000'],['tax','$4,000']]),
  check:{prompt:'Try it: a fictional system taxes the first $10,000 of income at 10% and the rest at 20%. How much tax is due on an income of $18,000, in dollars?',answer:2600,options:[2600,3600,1800],hint:'10% of $10,000, plus 20% of the $8,000 above it.',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]},[['income','$18,000'],['tax','?']])}},
 {skill:'marginal',say:'The marginal rate is the rate on the next dollar earned: the rate of the highest bracket the income reaches. On $25,000 in that system the marginal rate is 20%, because the last dollars earned sit in the 20% slice.',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]},[['income','$25,000'],['marginal rate','20%']])},
 {skill:'marginal',say:'Crossing into a higher bracket never taxes your whole income at the higher rate, so a raise always leaves you with more money after tax. A $1,000 raise from $25,000 adds only 20% of $1,000, which is $200 of tax, and keeps the other $800.',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]},[['raise','$1,000'],['extra tax','$200'],['kept','$800']]),
  check:{prompt:'Try it: a fictional system taxes the first $8,000 at 5%, income from $8,000 to $30,000 at 15%, and income above $30,000 at 25%. What is the marginal rate on an income of $42,000, in percent?',answer:25,options:[25,15,5],hint:'Which slice holds the last dollars of $42,000?',pic:table(SYS[1],[['income','$42,000'],['marginal rate','?']])}},
 {skill:'effective',say:'The effective rate is the total tax divided by the income: $4,000 ÷ $25,000 = 0.16, which is 16%. Because the lower slices are taxed at lower rates, the effective rate is below the marginal rate.',eq:'4,000 ÷ 25,000 = 0.16',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]},[['tax','$4,000'],['income','$25,000'],['effective rate','16%']])},
 {skill:'effective',say:'Two people in the same system can share a marginal rate and still pay different effective rates. On $50,000 the tax is $1,000 + $8,000 = $9,000, an effective rate of 9,000 ÷ 50,000 = 0.18, which is 18%, while the marginal rate is still 20%.',pic:table({name:'Ostra',b:[[10000,10],[Infinity,20]]},[['income','$50,000'],['tax','$9,000'],['effective rate','18%']]),
  check:{prompt:'Try it: a fictional worker earns $40,000 in a year and pays $6,000 in income tax. What is the effective tax rate, in percent?',answer:15,options:[15,6,25],hint:'Divide the tax by the income.',pic:{t:'setups',title:'A fictional worker',head:'',rows:[['income','$40,000'],['tax','$6,000'],['effective rate','?']],cols:['Value']}}}],
progression:{requires:['finance-m-paycheck','math-m-percent-change'],operations:3,demand:'Split an income at each bracket line, take each slice’s percent and add them, read the top slice’s rate, and divide the tax by the income.'},
items(add){
 const INC=[6000,9000,15000,20000,28000,36000,45000,60000,75000];
 SYS.forEach((S,j)=>{const R=said(S);
  INC.forEach((I,k)=>{const T=tax(S,I),eff=T*100/I;
   /* The total tax (every income), the marginal rate (every other one), the effective rate (where it is exact to one place). */
   add('tax',`${R} How much income tax is due on an income of ${usd(I)}, in dollars?`,T,table(S,[['income',usd(I)],['tax','?']]),`${slices(S,I)}, a total of ${usd(T)}.`);
   if((j+k)%2===0)add('marginal',`${R} What is the marginal tax rate on an income of ${usd(I)}, in percent?`,marginal(S,I),table(S,[['income',usd(I)],['marginal rate','?']]),`The last dollars of ${usd(I)} fall in the ${marginal(S,I)}% slice.`);
   if(short(eff)&&T>0)add('effective',`${R} What is the effective tax rate on an income of ${usd(I)}, in percent?`,+eff.toFixed(1),table(S,[['income',usd(I)],['effective rate','?']]),`The tax is ${usd(T)}, and ${usd(T)} ÷ ${usd(I)} is ${+eff.toFixed(1)}%.`);});
  /* A $1,000 or $2,000 raise inside one bracket, and the income kept after tax. */
  [[15000,1000],[33000,2000],[52000,1000],[21000,2000]].forEach(([I,d],k)=>{if(marginal(S,I)!==marginal(S,I+d-1))return;const extra=tax(S,I+d)-tax(S,I);
   add('marginal',`${R} A worker earning ${usd(I)} gets a ${usd(d)} raise. How much more income tax does the worker pay, in dollars?`,extra,table(S,[['income',usd(I)],['raise',usd(d)],['extra tax','?']]),`The whole raise falls in the ${marginal(S,I)}% slice: ${marginal(S,I)}% of ${usd(d)} = ${usd(extra)}.`);
   if(k%2===0)add('marginal',`${R} A worker earning ${usd(I)} gets a ${usd(d)} raise. How much of the raise does the worker keep after tax, in dollars?`,d-extra,table(S,[['income',usd(I)],['raise',usd(d)],['kept','?']]),`The raise is taxed at ${marginal(S,I)}%, which is ${usd(extra)}, so ${usd(d)} - ${usd(extra)} = ${usd(d-extra)} is kept.`);});});
 /* Effective rates from a stated tax (the Try-it's $6,000 on $40,000 is left out). */
 const NM=['Amara','Bram','Coral','Dario','Edda','Felix','Grete','Hollis','Inez','Jasper','Kenji','Lena'];
 [[30000,3600],[50000,8500],[24000,1920],[80000,16000],[45000,5400],[60000,10200],[18000,900],[72000,13680],[35000,4900],[90000,20700],[12000,600],[64000,9600]].forEach(([I,T],k)=>{const p=T*100/I;
  add('effective',`${NM[k]} earns ${usd(I)} in a year at a fictional job and pays ${usd(T)} in income tax. What is ${NM[k]}’s effective tax rate, in percent?`,p,{t:'setups',title:`${NM[k]}’s fictional year`,head:'',rows:[['income',usd(I)],['tax',usd(T)],['effective rate','?']],cols:['Value']},`${usd(T)} ÷ ${usd(I)} = ${p/100}, which is ${p}%.`);});
}
};
