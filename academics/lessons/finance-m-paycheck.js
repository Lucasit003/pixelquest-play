// Middle School topic (Grade 6, Jump$tart Employment and Income, grade 8 benchmark): gross pay and net pay.
// Every answer is computed here in whole cents, so no amount is ever rounded: gross pay is the hourly rate times
// the hours (or a yearly salary shared into equal paychecks), net pay is gross pay minus the stated deductions,
// and the share deducted is the total deductions divided by the gross pay, as a percent. Real tax rules are more
// complicated than one flat rate, so every tax here is a fictional flat percent or a stated dollar amount, and
// each question says which. People, jobs, rates and deductions are all fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Rosa','Kai','Amara','Jonah','Priya','Mateo','Lena','Tariq','June','Felix','Noor','Owen'];
const stub=(title,rows)=>({t:'setups',title,head:'Pay stub',rows,cols:['Amount']});
const PCT=' Type the number without the % sign.';
export default {
id:'finance-m-paycheck',subject:'finance',level:4,grade:6,standard:'Jump$tart Employment and Income, grade 8 benchmark',
title:'Gross pay and net pay',
goal:'Work out gross pay from an hourly rate or a yearly salary, take away the stated deductions to find net pay, and find what share of gross pay was deducted.',
points:20,
skills:{gross:'Gross pay',net:'Net pay',share:'The share deducted'},
steps:[
 {skill:'gross',say:'Gross pay is everything a job pays for a pay period before anything is taken out. A fictional job pays $12.50 an hour, so 16 hours of work earns 16 × $12.50 = $200.00 of gross pay.',eq:'16 × $12.50 = $200.00',pic:stub('One pay period',[['pay per hour','$12.50'],['hours worked','16'],['gross pay','$200.00']])},
 {skill:'gross',say:'A salary is a set amount for a whole year, paid out in equal paychecks. Paid every two weeks, a year usually has 26 paychecks, so a fictional salary of $28,600.00 is $28,600.00 ÷ 26 = $1,100.00 of gross pay on each one.',eq:'$28,600.00 ÷ 26 = $1,100.00',pic:{t:'setups',title:'A yearly salary',head:'Salary',rows:[['yearly salary','$28,600.00'],['paychecks a year','26'],['gross per paycheck','$1,100.00']],cols:['Amount']},
  check:{prompt:'Try it: a fictional job pays $11.50 an hour. What is the gross pay for 10 hours of work, in dollars?',answer:115,options:[115,21.5,1150,11.5],hint:'Multiply the pay per hour by the number of hours worked.',pic:stub('One pay period',[['pay per hour','$11.50'],['hours worked','10']])}},
 {skill:'net',say:'Deductions are amounts taken out of gross pay before it is paid, such as taxes or a health plan. Net pay, often called take-home pay, is what is left: gross pay minus every deduction. $200.00 with $20.00 of taxes and $15.00 for a health plan taken out leaves $165.00.',eq:'$200.00 − $20.00 − $15.00 = $165.00',pic:stub('A fictional pay stub',[['gross pay','$200.00'],['taxes','$20.00'],['health plan','$15.00'],['net pay','$165.00']])},
 {skill:'net',say:'Real tax rules are more complicated than one flat rate, so this topic uses fictional flat rates to keep the arithmetic clear. A flat 10% of $200.00 is $20.00, which leaves $180.00 of net pay.',eq:'$200.00 − $20.00 = $180.00',pic:stub('A fictional flat tax',[['gross pay','$200.00'],['flat tax rate','10%'],['tax taken out','$20.00'],['net pay','$180.00']]),
  check:{prompt:'Try it: gross pay is $300.00, and a fictional flat 10% is taken out for taxes. Nothing else is deducted. What is the net pay, in dollars?',answer:270,options:[270,30,290,330],hint:'Find 10% of $300.00, then take it away from $300.00.',pic:stub('A fictional flat tax',[['gross pay','$300.00'],['flat tax rate','10%']])}},
 {skill:'share',say:'To see what share of gross pay was deducted, divide the total deductions by the gross pay and write the result as a percent. $30.00 out of $200.00 is 30 ÷ 200 = 0.15, which is 15%.',eq:'30 ÷ 200 = 0.15 = 15%',pic:stub('Deductions as a share',[['gross pay','$200.00'],['all deductions','$30.00'],['share deducted','15%']])},
 {skill:'share',say:'Net pay and the deductions together make up all of the gross pay, so their two percents add up to 100%. When 15% is deducted, the other 85% is take-home pay.',eq:'15% + 85% = 100%',pic:{t:'tape',title:'Gross pay in 20 equal parts of 5%',rows:[{label:'deducted',n:3},{label:'net pay',n:17}],groups:1},
  check:{prompt:'Try it: a fictional paycheck shows gross pay of $400.00, and the deductions add up to $72.00. What percent of the gross pay was deducted? Type the number without the % sign.',answer:18,options:[18,72,82],hint:'Divide $72.00 by $400.00, then write the result as a percent.',pic:stub('Deductions as a share',[['gross pay','$400.00'],['all deductions','$72.00']])}}],
progression:{requires:['finance-e-wages-and-hours','finance-e-earning'],operations:3,demand:'Multiply a rate by hours or divide a salary into paychecks, find a flat percent of gross pay to the cent, subtract every deduction, and turn the total deducted into a percent of gross pay.'},
items(add){
 /* Gross pay: an hourly rate times the hours worked. */
 let i=0;
 for(const r of [950,1025,1175,1240,1360,1425,1580,1650])for(const h of [12,18,24,30]){const who=NAMES[i++%NAMES.length],g=r*h;
  add('gross',`${who} earns ${money(r)} an hour at a fictional part-time job and works ${h} hours in one pay period. What is ${who}'s gross pay for the period, in dollars?`,g/100,stub('One pay period',[['pay per hour',money(r)],['hours worked',`${h}`]]),`Gross pay is the rate times the hours: ${h} × ${money(r)} = ${money(g)}.`);}
 /* Gross pay from a yearly salary in equal paychecks, kept only where each paycheck is an exact number of cents. */
 const PERIODS=[[12,'once a month'],[24,'twice a month'],[26,'every two weeks'],[52,'once a week']];
 for(const s of [2080000,2496000,2535000,2600000,2700000,3120000,3150000,3640000])for(const [n,how] of PERIODS){if(s%n)continue;
  add('gross',`A fictional job pays a yearly salary of ${money(s)}, paid in ${n} equal paychecks (${how}). What is the gross pay on each paycheck, in dollars?`,s/n/100,{t:'setups',title:'A yearly salary',head:'Salary',rows:[['yearly salary',money(s)],['paychecks a year',`${n}`]],cols:['Amount']},`Share the salary equally: ${money(s)} ÷ ${n} = ${money(s/n)} on each paycheck.`);}
 /* Net pay: gross pay minus two stated dollar deductions. */
 [48000,52500,61000,64800,72000,85000,93600,110000].forEach((g,k)=>[[9,2575],[12,3840]].forEach(([p,o],j)=>{const t=Math.floor(g*p/100)+(k*37+j*19)%50,net=g-t-o,who=NAMES[(k*2+j+3)%NAMES.length];
  add('net',`${who}'s gross pay for one fictional pay period is ${money(g)}. The pay stub lists two deductions: ${money(t)} for taxes and ${money(o)} for a health plan. What is the net pay, in dollars?`,net/100,stub('A fictional pay stub',[['gross pay',money(g)],['taxes',money(t)],['health plan',money(o)]]),`Net pay is gross pay minus every deduction: ${money(g)} − ${money(t)} − ${money(o)} = ${money(net)}.`);}));
 /* Net pay after a fictional flat tax on hourly gross pay, kept only where the tax is an exact number of cents. */
 let q=0;
 for(const r of [1000,1150,1240,1375,1500,1620])for(const [h,p] of [[20,8],[25,10],[16,12],[30,15]]){const g=r*h;if(g*p%100)continue;const tax=g*p/100,who=NAMES[(q++ +5)%NAMES.length];
  add('net',`${who} earns ${money(r)} an hour for ${h} hours. A fictional flat ${p}% of gross pay is withheld for taxes, and nothing else is taken out. What is ${who}'s net pay, in dollars?`,(g-tax)/100,stub('A fictional flat tax',[['pay per hour',money(r)],['hours worked',`${h}`],['flat tax rate',`${p}%`]]),`Gross pay is ${h} × ${money(r)} = ${money(g)}. The flat ${p}% is ${money(tax)}, so net pay is ${money(g)} − ${money(tax)} = ${money(g-tax)}.`);}
 /* Net pay on a salaried paycheck after a flat fictional tax and a stated retirement savings deduction. */
 for(const g of [56000,64000,75000,88000,120000,135000])for(const [p,d] of [[10,4500],[15,6000]]){const tax=g*p/100,net=g-tax-d;
  add('net',`Each paycheck from a fictional salaried job is ${money(g)} gross. A flat ${p}% is withheld for taxes and ${money(d)} goes to a retirement savings plan. What is the net pay on each paycheck, in dollars?`,net/100,stub('A fictional paycheck',[['gross pay',money(g)],['flat tax rate',`${p}%`],['retirement savings',money(d)]]),`The flat ${p}% of ${money(g)} is ${money(tax)}. Net pay is ${money(g)} − ${money(tax)} − ${money(d)} = ${money(net)}.`);}
 /* The share deducted (or kept), a whole-number percent of gross pay; each paycheck is built from that percent. */
 [40000,48000,50000,60000,64000,72000,80000,90000,125000,150000].forEach((g,k)=>[12,16,20,25].forEach((p,j)=>{const D=g*p/100,form=(k+j)%3;
  if(form===0){const t=Math.floor(D*7/10),o=D-t;
   add('share',`Gross pay on a fictional paycheck is ${money(g)}. Deductions are ${money(t)} for taxes and ${money(o)} for a health plan. What percent of the gross pay was deducted in all?${PCT}`,p,stub('A fictional pay stub',[['gross pay',money(g)],['taxes',money(t)],['health plan',money(o)]]),`All deductions: ${money(t)} + ${money(o)} = ${money(D)}. Then ${money(D)} ÷ ${money(g)} = ${p/100}, which is ${p}%.`);}
  else if(form===1)add('share',`A fictional paycheck shows gross pay of ${money(g)} and net pay of ${money(g-D)}. What percent of the gross pay was taken out in deductions?${PCT}`,p,stub('A fictional pay stub',[['gross pay',money(g)],['net pay',money(g-D)]]),`Deductions are ${money(g)} − ${money(g-D)} = ${money(D)}, and ${money(D)} ÷ ${money(g)} = ${p/100}, which is ${p}%.`);
  else add('share',`A fictional paycheck shows gross pay of ${money(g)} and net pay of ${money(g-D)}. What percent of the gross pay is net pay?${PCT}`,100-p,stub('A fictional pay stub',[['gross pay',money(g)],['net pay',money(g-D)]]),`${money(g-D)} ÷ ${money(g)} = ${(100-p)/100}, which is ${100-p}%. The other ${p}% was deducted.`);}));
}
};
