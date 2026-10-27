// Middle School topic (Grade 7, Jump$tart Employment and Income, grade 8 benchmark): commission, tips and split bills.
// Every answer is computed here in whole cents: a commission is the stated percent of sales, and sales are the
// commission divided by that percent; a tip is the stated percent of the bill, and a split bill is the bill plus the
// tip shared equally, used only where it divides exactly; and total earnings are base pay plus commission. Real pay
// plans can have tiers, limits and taxes taken out, and tipping customs differ from place to place, so every job,
// rate and tip here is fictional and stated in the question: one flat commission rate on all sales, pay before
// taxes, and a tip figured on the bill as given, with no tax added. People, shops and amounts are fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Marco','Ines','Kofi','Hazel','Yusuf','Freya','Diego','Lin','Sasha','Tobias','Amina','Reid'];
/* A rate in tenths of a percent: 25 is 2.5%. */
const pct=t=>`${t/10}%`;
/* 'an 8%', 'an 18%', 'a 15%'. */
const an=n=>/^(8\d?|11|18)(\.\d)?$/.test(String(n))?'an':'a';
const sheet=(title,rows,cols=['Amount'])=>({t:'setups',title,head:'Item',rows,cols});
export default {
id:'finance-m-commission-tips',subject:'finance',level:4,grade:7,standard:'Jump$tart Employment and Income, grade 8 benchmark',
title:'Commission and tips',
goal:'Work out a commission as a percent of sales, a tip as a percent of a bill and each person\'s share of a split bill, and total earnings from base pay plus commission.',
points:20,
skills:{commission:'Commission on sales',tip:'Tips and split bills',earnings:'Base pay plus commission'},
steps:[
 {skill:'commission',say:'A commission is pay figured as a percent of what a worker sells. A fictional 5% commission on $2,400.00 of sales is 0.05 × $2,400.00 = $120.00.',eq:'5% of $2,400.00 = $120.00',pic:sheet('A fictional sales job',[['sales','$2,400.00'],['commission rate','5%'],['commission','$120.00']])},
 {skill:'commission',say:'Working back, the sales are the commission divided by the rate: a $90.00 commission at 6% means $90.00 ÷ 0.06 = $1,500.00 of sales. The rate is the commission divided by the sales: $90.00 ÷ $1,500.00 = 0.06, which is 6%.',eq:'$90.00 ÷ 0.06 = $1,500.00',pic:sheet('Working back',[['commission','$90.00'],['commission rate','6%'],['sales','$1,500.00']]),
  check:{prompt:'Try it: a fictional salesperson earns a 4% commission. How much commission is earned on $3,500.00 of sales, in dollars?',answer:140,options:[140,875,14,3640],hint:'4% is 0.04: multiply $3,500.00 by 0.04.',pic:sheet('A fictional sales job',[['sales','$3,500.00'],['commission rate','4%']])}},
 {skill:'tip',say:'A tip is extra money given for service, often figured as a percent of the bill. How much to tip is a choice, and customs differ from place to place, so each question here states its percent, and the tip is figured on the bill as given, with no tax added. A fictional 15% tip on a $40.00 bill is $6.00, so the total is $46.00.',eq:'$40.00 + 0.15 × $40.00 = $46.00',pic:sheet('A fictional bill',[['bill','$40.00'],['tip at 15%','$6.00'],['total','$46.00']])},
 {skill:'tip',say:'To split a bill evenly, add the tip first, then divide the total by the number of people: ($40.00 + $6.00) ÷ 4 = $11.50 each.',eq:'$46.00 ÷ 4 = $11.50',pic:{t:'tape',title:'A $46.00 total in 4 equal shares',rows:[{label:'share',n:4}],groups:1},
  check:{prompt:'Try it: a fictional lunch bill is $60.00, and the group adds a 20% tip and splits the total evenly among 4 people. How much does each person pay, in dollars?',answer:18,options:[18,15,12,3],hint:'Add 20% of $60.00 to the bill, then divide by 4.',pic:sheet('A fictional lunch',[['bill','$60.00'],['tip','20%'],['people','4']])}},
 {skill:'earnings',say:'Many sales jobs pay base pay plus commission. A fictional job pays $300.00 a week plus 8% of sales; with $2,000.00 of sales that is $300.00 + $160.00 = $460.00 for the week.',eq:'$300.00 + 0.08 × $2,000.00 = $460.00',pic:sheet('A fictional week',[['base pay','$300.00'],['commission rate','8%'],['sales','$2,000.00']])},
 {skill:'earnings',say:'A higher commission rate does not always pay more, so compare total earnings. With $2,000.00 of sales, Job A at $300.00 + 8% pays $460.00, but Job B at $400.00 + 4% pays $480.00.',eq:'$300 + $160 = $460; $400 + $80 = $480',pic:sheet('Two fictional jobs, $2,000.00 of sales',[['base pay','$300.00','$400.00'],['commission rate','8%','4%'],['total','$460.00','$480.00']],['Job A','Job B']),
  check:{prompt:'Try it: Job A pays a fictional $250.00 a week plus 10% of sales. Job B pays $350.00 a week plus 5% of sales. With $1,500.00 of sales in a week, which job pays more: A or B?',answer:'B',options:['A','B'],hint:'Work out each job\'s total: base pay plus the commission on $1,500.00.',pic:sheet('Two fictional jobs',[['base pay','$250.00','$350.00'],['commission rate','10%','5%'],['sales','$1,500.00','$1,500.00']],['Job A','Job B'])}},
 {skill:'earnings',say:'Real pay plans can have tiers, limits and taxes taken out, so every job here is fictional: the stated base pay plus one flat commission rate on all sales, before taxes.',pic:{t:'setups',title:'This topic\'s simplifications',head:'In every job',rows:[['commission','one flat rate on all sales'],['base pay','as stated'],['taxes','not taken out']],cols:['Here']}}],
progression:{requires:['finance-m-paycheck','finance-e-wages-and-hours'],operations:3,demand:'Find a percent of sales or of a bill to the cent, divide by the rate to work back to sales, add a tip before splitting a bill, and compare two jobs by total earnings rather than by their commission rates.'},
items(add){
 let w=0;const who=()=>NAMES[w++%NAMES.length];
 /* Commission on sales, some at rates with a half percent. */
 const CR=[50,40,60,80,100,120,150,25,75,30,90,35,45,65];
 [240000,375000,182500,96000,450000,128000,310000,64000,152000,87500,520000,216000,148000,99000].forEach((S,k)=>{const t=CR[k];if(S*t%1000)return;const C=S*t/1000,n=who();
  add('commission',`${n} earns a fictional ${pct(t)} commission on everything ${n} sells. How much commission does ${n} earn on ${money(S)} of sales, in dollars?`,C/100,sheet('A fictional sales job',[['sales',money(S)],['commission rate',pct(t)]]),`${pct(t)} of ${money(S)} is ${money(S)} × ${t/1000} = ${money(C)}.`);});
 /* Sales worked back from a commission (the trap: multiplying by the rate instead of dividing by it). */
 [[5,320000],[8,145000],[4,262500],[6,198000],[10,87500],[12,155000],[3,410000],[7,230000],[15,96000],[9,180000]].forEach(([r,S])=>{const C=S*r/100,n=who();
  add('commission',`At a fictional job with ${an(r)} ${r}% commission on sales, ${n} earned ${money(C)} in commission. What were ${n}'s sales, in dollars?`,S/100,sheet('Working back',[['commission',money(C)],['commission rate',`${r}%`]]),`The commission is ${r}% of the sales, so the sales are ${money(C)} ÷ ${r/100} = ${money(S)}. Check: ${r}% of ${money(S)} is ${money(C)}.`);});
 /* The commission rate, a whole-number percent. */
 [[6,250000],[4,180000],[8,312500],[5,96000],[12,140000],[3,520000],[10,73500],[7,200000]].forEach(([r,S])=>{const C=S*r/100,n=who();
  add('commission',`${n} earned a ${money(C)} commission on ${money(S)} of sales at a fictional job. What is the commission rate, as a percent?`,r,sheet('A fictional sales job',[['sales',money(S)],['commission',money(C)]]),`${money(C)} ÷ ${money(S)} = ${r/100}, which is ${r}%.`);});
 /* Tips: the tip, the total with the tip, and an even split of the total. */
 [[4800,15],[6250,20],[3500,18],[8900,10],[12400,25],[5600,15],[7250,20],[9500,18],[4200,22],[15000,15]].forEach(([B,t])=>{const T=B*t/100,n=who();
  add('tip',`A fictional restaurant bill is ${money(B)}, and ${n} leaves ${an(t)} ${t}% tip on the bill. How much is the tip, in dollars?`,T/100,sheet('A fictional bill',[['bill',money(B)],['tip',`${t}%`]]),`${t}% of ${money(B)} is ${money(B)} × ${t/100} = ${money(T)}.`);});
 [[3600,15],[5400,20],[7800,18],[2950,20],[11000,15],[4500,22],[6800,25],[8400,10],[13200,18],[2700,20]].forEach(([B,t])=>{const T=B*t/100,n=who();
  add('tip',`${n}'s fictional lunch bill is ${money(B)}. With ${an(t)} ${t}% tip on the bill added, what is the total paid, in dollars?`,(B+T)/100,sheet('A fictional bill',[['bill',money(B)],['tip',`${t}%`]]),`The tip is ${t}% of ${money(B)} = ${money(T)}, so the total is ${money(B)} + ${money(T)} = ${money(B+T)}.`);});
 [[8000,20,4],[6000,15,3],[12000,18,4],[4500,20,2],[9600,25,5],[7200,15,6],[15000,20,6],[5400,10,3],[10500,20,7],[13600,25,8],[6400,15,4],[18000,18,5]].forEach(([B,t,p])=>{const T=B*t/100,all=B+T;if(all%p)return;
  add('tip',`${p} friends share a fictional dinner bill of ${money(B)}. They add ${an(t)} ${t}% tip on the bill and split the total evenly. How much does each person pay, in dollars?`,all/p/100,sheet('A fictional dinner',[['bill',money(B)],['tip',`${t}%`],['people',`${p}`]]),`The tip is ${money(T)}, so the total is ${money(all)}, and ${money(all)} ÷ ${p} = ${money(all/p)} each.`);});
 /* Base pay plus commission: total earnings, and sales worked back from a total. */
 [[30000,5,240000],[25000,8,150000],[40000,3,520000],[35000,6,185000],[20000,10,96000],[45000,4,312500],[28000,7,230000],[32000,12,87500],[22500,9,160000],[38000,5,415000]].forEach(([b,r,S])=>{const C=S*r/100,n=who();
  add('earnings',`A fictional job pays ${money(b)} a week plus ${an(r)} ${r}% commission on sales. ${n} sells ${money(S)} this week. What are ${n}'s total earnings for the week, before taxes, in dollars?`,(b+C)/100,sheet('A fictional week',[['base pay',money(b)],['commission rate',`${r}%`],['sales',money(S)]]),`The commission is ${r}% of ${money(S)} = ${money(C)}, so the week pays ${money(b)} + ${money(C)} = ${money(b+C)}.`);});
 [[30000,5,180000],[25000,6,250000],[40000,4,375000],[35000,8,142500],[20000,10,215000],[28000,3,460000],[45000,12,95000],[32000,7,200000]].forEach(([b,r,S])=>{const C=S*r/100,T=b+C,n=who();
  add('earnings',`A fictional job pays ${money(b)} a week plus ${an(r)} ${r}% commission on sales. ${n} earned ${money(T)} in all this week, before taxes. How much did ${n} sell, in dollars?`,S/100,sheet('A fictional week',[['base pay',money(b)],['commission rate',`${r}%`],['total earned',money(T)]]),`The commission was ${money(T)} − ${money(b)} = ${money(C)}, so the sales were ${money(C)} ÷ ${r/100} = ${money(S)}.`);});
 /* Which job pays more: one has the higher base pay, the other the higher rate. In a trap the job with the LOWER rate
    pays more, because sales are below the break-even point; traps and plain pairs alternate, and the job that pays
    more is Job A in half of each. */
 for(let i=0;i<11;i++){const bL=20000+2500*(i%4),bH=bL+10000+5000*(i%3),rL=2+i%3,rH=rL+3+i%3,even=(bH-bL)*100/(rH-rL);
  [Math.round(even*(0.5+0.05*(i%4))/10000)*10000,Math.round(even*(1.4+0.1*(i%3))/10000)*10000].forEach((S,h)=>{const base={b:bH,r:rL,pay:bH+S*rL/100},rate={b:bL,r:rH,pay:bL+S*rH/100},more=base.pay>rate.pay?base:rate,less=more===base?rate:base,winA=(i+h)%2===0,[A,B]=winA?[more,less]:[less,more],ans=winA?'A':'B';
   add('earnings',`Two fictional jobs pay base pay plus commission. Job A pays ${money(A.b)} a week plus ${A.r}% of sales. Job B pays ${money(B.b)} a week plus ${B.r}% of sales. With ${money(S)} of sales in a week, which job pays more: A or B?`,ans,sheet('Two fictional jobs',[['base pay',money(A.b),money(B.b)],['commission rate',`${A.r}%`,`${B.r}%`],['sales',money(S),money(S)]],['Job A','Job B']),`Job A: ${money(A.b)} + ${A.r}% of ${money(S)} = ${money(A.pay)}. Job B: ${money(B.b)} + ${B.r}% of ${money(S)} = ${money(B.pay)}. Job ${ans} pays more.`,[`job ${ans.toLowerCase()}`]);});}
}
};
