// Middle School topic (Grade 7, Jump$tart Spending and Saving, grade 8 benchmark): how long a saving goal takes. Every
// answer is computed here in whole cents: the amount still needed is the goal minus the starting amount; the time is
// that amount divided by the deposit and rounded UP to a whole number of weeks or months, because the goal is reached
// at the end of the first week (or month) the savings are at least the goal; two plans are compared by the week each
// first reaches the goal; and the amount to save each week is the amount needed divided by the weeks, exact to the
// cent, or rounded UP to a whole number of dollars where the question asks for whole dollars. Real savings can earn
// interest, and real plans change, so every plan here is fictional: the same deposit at the end of every week (or
// month), with no interest, no fees and no withdrawals. People and goals are fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Ana','Leo','Ivy','Omar','Gemma','Felix','Tara','Hugo','Nell','Raj','Cleo','Abel'];
const plan=(title,rows,cols=['Given'])=>({t:'setups',title,head:'Plan',rows,cols});
const NO=' with no interest and no withdrawals';
/* The whole number of weeks (or months) until start + periods × deposit is at least the goal. */
const periods=(need,d)=>Math.floor((need+d-1)/d);
const wk=n=>n===1?'1 week':`${n} weeks`;
export default {
id:'finance-m-saving-goals-time',subject:'finance',level:4,grade:7,standard:'Jump$tart Spending and Saving, grade 8 benchmark',
title:'Saving goals over time',
goal:'Work out how many weeks or months a saving goal takes, compare two saving plans, and find how much to save each week to reach a goal by a date.',
points:20,
skills:{time:'Time to reach a goal',compare:'Comparing two plans',perweek:'Saving enough each week'},
steps:[
 {skill:'time',say:'A saving goal is an amount you want to have by a certain time. The amount still needed is the goal minus what you already have: a fictional $180.00 goal with $60.00 saved needs $120.00 more.',eq:'$180.00 − $60.00 = $120.00',pic:plan('A fictional goal',[['goal','$180.00'],['saved so far','$60.00'],['still needed','$120.00']])},
 {skill:'time',say:'Saving $15.00 at the end of each week, $120.00 takes $120.00 ÷ $15.00 = 8 weeks. When the division is not whole, round up: $130.00 ÷ $15.00 is about 8.67, so after 8 weeks there is not quite enough, and the goal is reached in week 9.',eq:'130 ÷ 15 ≈ 8.67, so 9 weeks',pic:plan('A fictional goal',[['still needed','$130.00'],['saved each week','$15.00']]),
  check:{prompt:'Try it: Ana has $40.00 and saves $12.00 at the end of each week toward a fictional $166.00 goal. How many weeks does it take to reach the goal?',answer:11,options:[11,10,10.5,14],hint:'Find the amount still needed, divide by $12.00, and round up to a whole week.',pic:plan('A fictional goal',[['goal','$166.00'],['saved so far','$40.00'],['saved each week','$12.00']])}},
 {skill:'time',say:'Real savings can earn interest, and real plans change, so every plan in this topic is fictional: the same deposit at the end of every week or month, with no interest, no fees and no withdrawals.',pic:{t:'setups',title:'This topic\'s simplifications',head:'In every plan',rows:[['deposits','the same each time'],['interest','none'],['fees or withdrawals','none']],cols:['Here']}},
 {skill:'compare',say:'To compare two plans, find the week each one first reaches the goal. A bigger head start does not always win: for a $200.00 goal, Plan A starts with $80.00 and adds $10.00 a week, taking 12 weeks, while Plan B starts with $20.00 and adds $20.00 a week, taking 9 weeks.',eq:'$120.00 ÷ $10.00 = 12; $180.00 ÷ $20.00 = 9',pic:plan('Two fictional plans for $200.00',[['starts with','$80.00','$20.00'],['saves each week','$10.00','$20.00']],['Plan A','Plan B'])},
 {skill:'compare',say:'You can also compare the savings after the same number of weeks: the start plus the weeks times the deposit. After 10 weeks Plan A has $80.00 + 10 × $10.00 = $180.00, and Plan B has $20.00 + 10 × $20.00 = $220.00.',eq:'$80 + 10 × $10 = $180; $20 + 10 × $20 = $220',pic:plan('After 10 weeks',[['starts with','$80.00','$20.00'],['saves each week','$10.00','$20.00'],['after 10 weeks','$180.00','$220.00']],['Plan A','Plan B']),
  check:{prompt:'Try it: for a fictional $300.00 goal, Plan A starts with $120.00 and saves $15.00 a week. Plan B starts with $50.00 and saves $25.00 a week. Which plan reaches the goal first: A or B?',answer:'B',options:['A','B'],hint:'Find each plan\'s amount still needed and divide by its weekly deposit.',pic:plan('Two fictional plans for $300.00',[['starts with','$120.00','$50.00'],['saves each week','$15.00','$25.00']],['Plan A','Plan B'])}},
 {skill:'perweek',say:'Working backwards, the amount to save each week is the amount still needed divided by the weeks left. To have $250.00 in 8 weeks starting from $50.00, save $200.00 ÷ 8 = $25.00 a week. A date 56 days away is 56 ÷ 7 = 8 weeks away.',eq:'($250.00 − $50.00) ÷ 8 = $25.00',pic:plan('A fictional goal in 8 weeks',[['goal','$250.00'],['saved so far','$50.00'],['weeks left','8']])},
 {skill:'perweek',say:'When the amount must be a whole number of dollars, round up, because rounding down falls short: $200.00 ÷ 6 is about $33.33, so $34.00 a week is needed. $33.00 a week reaches only $198.00.',eq:'6 × $33.00 = $198.00; 6 × $34.00 = $204.00',pic:plan('A fictional goal in 6 weeks',[['still needed','$200.00'],['weeks left','6']]),
  check:{prompt:'Try it: Leo has $30.00 and wants a fictional $150.00 goal in 8 weeks, saving the same amount at the end of each week. How much must Leo save each week, in dollars?',answer:15,options:[15,18.75,3.75,120],hint:'Find the amount still needed, then share it equally over the 8 weeks.',pic:plan('A fictional goal in 8 weeks',[['goal','$150.00'],['saved so far','$30.00'],['weeks left','8']])}}],
progression:{requires:['finance-e-saving-each-week','finance-m-monthly-budget'],operations:3,demand:'Subtract what is saved from the goal, divide by the deposit and round up to whole weeks, compare two plans by the week each reaches the goal rather than by the head start, and divide the amount needed by the weeks left, rounding up to whole dollars when asked.'},
items(add){
 let w=0;const who=()=>NAMES[w++%NAMES.length];
 /* Weeks to a goal. Each row is [start, deposit, weeks, short]: the goal is start + weeks × deposit − short, so the
    answer is the stated weeks; in half the rows the division is not whole (the trap: dividing and dropping the rest). */
 [[3000,1500,10,0],[5000,2500,8,1000],[8000,2000,12,0],[2500,1250,9,500],[12000,3000,11,0],[15000,4500,7,2000],[4000,1800,13,0],[9500,2400,10,1400],[6500,1750,12,0],[10000,3500,9,1500],[2000,1500,15,0],[25000,5000,6,2500],[7000,2250,14,0],[11000,2750,8,1250],[5000,1600,16,0],[16000,3200,5,1200]].forEach(([S,D,n,r])=>{const G=S+n*D-r,need=G-S,x=who();
  add('time',`${x} has ${money(S)} and saves ${money(D)} at the end of each week toward a fictional goal of ${money(G)},${NO}. How many weeks does it take to reach the goal?`,periods(need,D),plan('A fictional goal',[['goal',money(G)],['saved so far',money(S)],['saved each week',money(D)]]),`Still needed: ${money(G)} − ${money(S)} = ${money(need)}. ${money(need)} ÷ ${money(D)} = ${Math.round(need/D*100)/100}${r?`, which rounds up to ${n}`:''}, so it takes ${wk(n)}.`);});
 /* Months to a goal, the same way. */
 [[20000,7500,8,0],[15000,6000,10,2500],[50000,12500,6,0],[8000,4000,9,1500],[30000,9000,7,0],[12000,5500,11,3000],[45000,15000,5,0],[25000,8000,12,4000],[10000,6500,8,0],[60000,20000,4,5000]].forEach(([S,D,n,r])=>{const G=S+n*D-r,need=G-S,x=who();
  add('time',`${x} has ${money(S)} saved and adds ${money(D)} at the end of each month toward a fictional goal of ${money(G)},${NO}. How many months does it take to reach the goal?`,periods(need,D),plan('A fictional goal',[['goal',money(G)],['saved so far',money(S)],['saved each month',money(D)]]),`Still needed: ${money(G)} − ${money(S)} = ${money(need)}. ${money(need)} ÷ ${money(D)} = ${Math.round(need/D*100)/100}${r?`, which rounds up to ${n}`:''}, so it takes ${n} month${n===1?'':'s'}.`);});
 /* How much is still needed after some weeks. */
 [[4000,1500,30000,9],[7500,2000,25000,6],[12000,3500,60000,10],[2500,1250,18000,8],[10000,2750,40000,7],[6000,1800,35000,12],[15000,4000,50000,5],[3000,2200,32000,11]].forEach(([S,D,G,k])=>{const left=G-S-k*D,x=who();
  add('time',`${x} has ${money(S)} and saves ${money(D)} at the end of each week toward a fictional goal of ${money(G)},${NO}. How much more does ${x} still need after ${wk(k)}, in dollars?`,left/100,plan('A fictional goal',[['goal',money(G)],['saved so far',money(S)],['saved each week',money(D)]]),`After ${wk(k)}: ${money(S)} + ${k} × ${money(D)} = ${money(S+k*D)}. Still needed: ${money(G)} − ${money(S+k*D)} = ${money(left)}.`);});
 /* Two plans for one goal: one has the bigger head start, the other the bigger weekly deposit. In a trap the plan with
    the SMALLER start reaches the goal first; traps and plain pairs alternate, and the faster plan is Plan A in half of
    each. Starting amounts are set from the weeks, so each plan's week count is exact by construction. */
 const GOALS=[45000,50000,60000,48000,55000,70000,52000,65000,58000,75000,62000,68000];
 const pair=(i,trap,G)=>{const Dh=1000+500*(i%3),Df=Dh+1500+500*(i%2),wh=trap?10+i%4:6+i%4,wf=trap?wh-2-(i%2):wh+2+(i%2);
  return [{S:G-wh*Dh+500*(i%2),D:Dh,n:wh},{S:G-wf*Df+250*(i%3),D:Df,n:wf}];};
 const two=(A,B,G)=>`For a fictional goal of ${money(G)}, Plan A starts with ${money(A.S)} and saves ${money(A.D)} at the end of each week. Plan B starts with ${money(B.S)} and saves ${money(B.D)} at the end of each week, and neither plan earns interest or makes withdrawals.`;
 const pics=(A,B,G)=>plan(`Two fictional plans for ${money(G)}`,[['starts with',money(A.S),money(B.S)],['saves each week',money(A.D),money(B.D)]],['Plan A','Plan B']);
 const how=(X,G,l)=>`Plan ${l} needs ${money(G-X.S)} more, and ${money(G-X.S)} ÷ ${money(X.D)} rounds up to ${wk(X.n)}`;
 for(let i=0;i<12;i++)[true,false].forEach((trap,h)=>{const G=GOALS[i],[H,F]=pair(i,trap,G),fast=H.n<F.n?H:F,slow=fast===H?F:H,fastA=(i+h)%2===0,[A,B]=fastA?[fast,slow]:[slow,fast],ans=fastA?'A':'B';
  add('compare',`${two(A,B,G)} Which plan reaches the goal first: A or B?`,ans,pics(A,B,G),`${how(A,G,'A')}. ${how(B,G,'B')}. Plan ${ans} reaches the goal first.`,[`plan ${ans.toLowerCase()}`]);});
 /* How many weeks sooner, with larger goals so the starting amounts are new. */
 for(let i=0;i<8;i++){const trap=i%2===0,G=GOALS[i]+5000*(i%3+1),[H,F]=pair(i,trap,G),[A,B]=i%3?[H,F]:[F,H];
  add('compare',`${two(A,B,G)} How many weeks sooner does the faster plan reach the goal?`,Math.abs(A.n-B.n),pics(A,B,G),`${how(A,G,'A')}. ${how(B,G,'B')}. The faster plan is ${Math.abs(A.n-B.n)} weeks sooner.`);}
 /* The gap between two plans after some weeks, before either reaches its goal. */
 [[8000,1500,2000,2500,4],[15000,1000,4000,3000,5],[12000,2000,3000,3500,4],[20000,1200,6000,2800,7],[9000,2500,1500,4000,3],[18000,1800,5000,3600,8]].forEach(([SA,DA,SB,DB,k],i)=>{const a=SA+k*DA,b=SB+k*DB,[A,B]=i%2?[{S:SB,D:DB},{S:SA,D:DA}]:[{S:SA,D:DA},{S:SB,D:DB}],eA=A.S+k*A.D,eB=B.S+k*B.D;
  add('compare',`Plan A starts with ${money(A.S)} and saves ${money(A.D)} at the end of each week. Plan B starts with ${money(B.S)} and saves ${money(B.D)} at the end of each week. Both plans are fictional,${NO}. After ${wk(k)}, what is the difference between the two plans' savings, in dollars?`,Math.abs(a-b)/100,plan('Two fictional plans',[['starts with',money(A.S),money(B.S)],['saves each week',money(A.D),money(B.D)]],['Plan A','Plan B']),`Plan A: ${money(A.S)} + ${k} × ${money(A.D)} = ${money(eA)}. Plan B: ${money(B.S)} + ${k} × ${money(B.D)} = ${money(eB)}. The difference is ${money(Math.abs(eA-eB))}.`);});
 /* How much each week, exact to the cent: [start, weeks, each week]. */
 [[5000,8,2500],[12000,10,1800],[3500,6,2750],[20000,12,1500],[7500,9,3250],[15000,15,2200],[4000,5,4600],[9000,16,1125],[25000,7,5500],[6000,14,1975],[11000,11,2400],[2500,4,6250]].forEach(([S,n,e])=>{const G=S+n*e,x=who();
  add('perweek',`${x} has ${money(S)} and wants ${money(G)} for a fictional goal in ${wk(n)}, saving the same amount at the end of each week${NO}. How much must ${x} save each week, in dollars?`,e/100,plan(`A fictional goal in ${wk(n)}`,[['goal',money(G)],['saved so far',money(S)],['weeks left',`${n}`]]),`Still needed: ${money(G)} − ${money(S)} = ${money(G-S)}, and ${money(G-S)} ÷ ${n} = ${money(e)} a week.`);});
 /* A date a whole number of weeks away, given in days. */
 [[8000,4,3500],[15000,6,2250],[2000,8,1750],[30000,10,4200],[6500,3,5500],[12500,5,3100],[4500,9,1600],[18000,12,2875]].forEach(([S,n,e],k)=>{const G=S+n*e,x=who(),why=['a concert','a trip','a bike','a camp'][k%4];
  add('perweek',`${x} has ${money(S)} saved and wants ${money(G)} for ${why}, a fictional goal ${7*n} days away, which is a whole number of weeks. Saving the same amount at the end of each week${NO}, how much must ${x} save each week, in dollars?`,e/100,plan('A fictional goal',[['goal',money(G)],['saved so far',money(S)],['days left',`${7*n}`]]),`${7*n} days is ${7*n} ÷ 7 = ${n} weeks. Still needed: ${money(G-S)}, and ${money(G-S)} ÷ ${n} = ${money(e)} a week.`);});
 /* Whole dollars each week, rounded UP; in half of these, rounding to the nearest dollar would fall short (the trap). */
 [[5000,28000,6],[10000,45000,8],[2500,20000,9],[15000,39000,7],[8000,50000,11],[3000,25000,12],[12000,36300,5],[6000,27500,13],[20000,60000,9],[4000,32000,15],[9500,41000,14],[7000,38000,6]].forEach(([S,G,n])=>{const need=G-S,d=Math.floor((need+100*n-1)/(100*n)),x=who();
  add('perweek',`${x} has ${money(S)} and needs ${money(G)} for a fictional goal in ${wk(n)}. Saving the same whole number of dollars at the end of each week${NO}, what is the least ${x} can save each week, in dollars?`,d,plan(`A fictional goal in ${wk(n)}`,[['goal',money(G)],['saved so far',money(S)],['weeks left',`${n}`]]),`Still needed: ${money(need)}. ${money(need)} ÷ ${n} is about ${money(Math.round(need/n))}, which rounds up to ${money(d*100)}: ${n} × ${money(d*100)} = ${money(n*d*100)} is enough, but ${n} × ${money(d*100-100)} = ${money(n*(d*100-100))} is not.`);});
}
};
