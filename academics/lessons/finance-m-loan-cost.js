// Middle School topic (Grade 6, Jump$tart Credit and Debt, grade 8 benchmark): what borrowing costs. Every answer is
// computed here in whole cents: interest is simple, the amount borrowed × the yearly rate × a whole number of
// years; the total repaid is the amount borrowed plus that interest; an equal monthly payment is the total ÷ the
// number of months, used only where it divides exactly; and two loans for the same amount are compared by their
// total cost. Real loans add more rules (fees, and interest figured on the amount still owed as it is paid down),
// so every loan here is fictional and keeps to those stated simplifications. People and lenders are fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Sam','Lina','Jae','Bea','Hugo','Tess','Arjun','Mila','Cole','Nora','Ezra','Iris'];
const yrs=n=>n===1?'1 year':`${n} years`;
const loan=(title,rows,cols=['Given'])=>({t:'setups',title,head:'Loan',rows,cols});
export default {
id:'finance-m-loan-cost',subject:'finance',level:4,grade:6,standard:'Jump$tart Credit and Debt, grade 8 benchmark',
title:'What a loan costs',
goal:'Work out the simple interest on a loan and the total repaid, split the total into equal monthly payments, and compare two loans by their total cost.',
points:20,
skills:{owe:'Interest and total repaid',payment:'Equal monthly payments',compare:'Comparing two loans'},
steps:[
 {skill:'owe',say:'Borrowing means using someone else\'s money now and paying it back later. A lender usually charges interest for this, so you pay back more than you borrowed.',pic:loan('A fictional loan',[['amount borrowed','$800.00'],['yearly rate','6%'],['years','2']])},
 {skill:'owe',say:'In this topic, interest is simple: the amount borrowed × the fictional yearly rate × the years. $800.00 at 6% for 2 years is $800.00 × 0.06 × 2 = $96.00 of interest, so the total repaid is $896.00.',eq:'$800.00 + $96.00 = $896.00',pic:loan('A fictional loan',[['amount borrowed','$800.00'],['yearly rate','6%'],['years','2'],['interest','$96.00'],['total repaid','$896.00']]),
  check:{prompt:'Try it: Sam borrows $1,500.00 from a fictional lender at 4% simple interest a year for 3 years. What is the total repaid, in dollars?',answer:1680,options:[1680,180,1560,1500],hint:'Find the interest, $1,500.00 × 0.04 × 3, then add it to the amount borrowed.',pic:loan('A fictional loan',[['amount borrowed','$1,500.00'],['yearly rate','4%'],['years','3']])}},
 {skill:'payment',say:'Many loans are paid back in equal monthly payments. Divide the total repaid by the number of months: 2 years is 24 months, so a total of $1,320.00 is $1,320.00 ÷ 24 = $55.00 a month.',eq:'$1,320.00 ÷ 24 = $55.00',pic:loan('Equal monthly payments',[['total repaid','$1,320.00'],['months','24'],['each payment','$55.00']])},
 {skill:'payment',say:'Always count the months, not the years. A 3-year loan paid monthly has 3 × 12 = 36 payments, and a 5-year one has 60.',eq:'3 years × 12 = 36 payments',pic:loan('Counting payments',[['1 year','12 payments'],['3 years','36 payments'],['5 years','60 payments']],['Monthly']),
  check:{prompt:'Try it: a fictional loan has a total of $960.00 to repay in equal monthly payments over 2 years. How much is each payment, in dollars?',answer:40,options:[40,480,80,20],hint:'2 years is 24 months: divide $960.00 by 24.',pic:loan('Equal monthly payments',[['total repaid','$960.00'],['years','2']])}},
 {skill:'compare',say:'To compare two loans for the same amount, compare their total cost. A lower rate is not always cheaper: $1,000.00 at 6% for 4 years costs $240.00 in interest, but at 8% for 2 years it costs $160.00.',eq:'$1,000 × 0.06 × 4 = $240; $1,000 × 0.08 × 2 = $160',pic:loan('Two fictional loans for $1,000.00',[['yearly rate','6%','8%'],['years','4','2'],['interest','$240.00','$160.00']],['Loan A','Loan B']),
  check:{prompt:'Try it: two fictional loans are offered for $2,500.00. Loan A charges 5% simple interest a year for 4 years. Loan B charges 7% for 2 years. Which loan costs less in total: A or B?',answer:'B',options:['A','B'],hint:'Work out the interest on each loan: amount × rate × years.',pic:loan('Two fictional loans for $2,500.00',[['yearly rate','5%','7%'],['years','4','2']],['Loan A','Loan B'])}},
 {skill:'compare',say:'A smaller monthly payment can still cost more in total, because it is paid for more months. Real loans add more rules, such as fees and interest figured on the amount still owed as it is paid down, so every loan here is a fictional one with simple interest on the full amount for whole years.',pic:{t:'setups',title:'This topic\'s simplifications',head:'In every loan',rows:[['interest','simple, on the full amount'],['time','whole years'],['fees','none']],cols:['Here']}}],
progression:{requires:['finance-e-borrowing','finance-e-interest'],operations:3,demand:'Multiply amount × rate × years for the interest, add it to the amount borrowed, divide the total by 12 × the years for a monthly payment, and compare two loans by their total cost rather than their rates.'},
items(add){
 let w=0;const who=()=>NAMES[w++%NAMES.length];
 /* Interest owed, or the total repaid, on a simple-interest loan. */
 const LP=[50000,80000,120000,150000,180000,200000,240000,300000,360000,500000];
 const LRN=[[4,2],[5,3],[6,2],[7,3],[8,4],[9,2],[10,3],[12,2]];
 LP.forEach((P,k)=>LRN.forEach(([r,n],j)=>{if((j+k)%2)return;const I=P*r*n/100,n_=who(),pic=loan('A fictional loan',[['amount borrowed',money(P)],['yearly rate',`${r}%`],['years',`${n}`]]);
  const head=`${n_} borrows ${money(P)} from a fictional lender at ${r}% simple interest a year for ${yrs(n)}.`;
  if(((j+k)>>1)%2===0)add('owe',`${head} How much interest is owed, in dollars?`,I/100,pic,`Interest is ${money(P)} × ${r/100} × ${n} = ${money(I)}.`);
  else add('owe',`${head} What is the total repaid, loan plus interest, in dollars?`,(P+I)/100,pic,`Interest is ${money(P)} × ${r/100} × ${n} = ${money(I)}, so the total repaid is ${money(P)} + ${money(I)} = ${money(P+I)}.`);}));
 /* Equal monthly payments from a loan, kept only where the total divides exactly by the months. */
 const fit=[];
 for(const P of [60000,90000,120000,144000,180000,240000,300000,360000,420000,480000])for(const [r,n] of [[5,2],[6,3],[4,4],[8,2],[10,3],[3,5],[9,1],[12,2],[7,4],[5,5]]){const T=P+P*r*n/100;if(T%(12*n)===0)fit.push([P,r,n,T]);}
 fit.filter((_,i)=>i%3===0).forEach(([P,r,n,T])=>{const m=12*n;
  add('payment',`A fictional loan of ${money(P)} at ${r}% simple interest a year for ${yrs(n)} is repaid in equal monthly payments. How much is each payment, in dollars?`,T/m/100,loan('A fictional loan',[['amount borrowed',money(P)],['yearly rate',`${r}%`],['years',`${n}`]]),`Interest is ${money(P)} × ${r/100} × ${n} = ${money(T-P)}, so the total is ${money(T)}. Over ${m} months each payment is ${money(T)} ÷ ${m} = ${money(T/m)}.`);});
 /* Equal monthly payments from a stated total. */
 [4575,6250,3810,8925,12500,5340,2795,9900,15275,7120,4480,10650].forEach((pay,k)=>{const n=2+k%4,m=12*n,T=pay*m;
  add('payment',`The total to repay on a fictional loan is ${money(T)}, paid in equal monthly payments over ${yrs(n)}. How much is each payment, in dollars?`,pay/100,loan('Equal monthly payments',[['total repaid',money(T)],['years',`${n}`]]),`${yrs(n)} is ${m} months, so each payment is ${money(T)} ÷ ${m} = ${money(pay)}.`);});
 /* The interest paid, from the monthly payment, the years and the amount borrowed. */
 [[120000,2,5600],[90000,3,2875],[150000,2,6890],[200000,4,4625],[60000,1,5350],[240000,3,7775],[180000,5,3410],[300000,2,13950],[75000,3,2340],[360000,4,8260],[45000,2,2015],[500000,5,9480]].forEach(([P,n,pay])=>{const m=12*n,T=pay*m,I=T-P,n_=who();
  add('payment',`${n_} repays a fictional ${money(P)} loan with equal monthly payments of ${money(pay)} for ${yrs(n)}. How much interest does ${n_} pay in all, in dollars?`,I/100,loan('A fictional loan',[['amount borrowed',money(P)],['monthly payment',money(pay)],['years',`${n}`]]),`${yrs(n)} is ${m} payments, so the total repaid is ${m} × ${money(pay)} = ${money(T)}. The interest is ${money(T)} − ${money(P)} = ${money(I)}.`);});
 /* Two loans for the same amount: which costs less in total, and by how much. In a trap the cheaper loan has the
    HIGHER rate, because it is shorter; traps and plain pairs alternate, and the cheaper loan is Loan A in half of each. */
 const TERMS=[[4,5],[5,4],[6,3],[6,4],[7,2],[8,2],[8,3],[9,2],[10,2],[12,1],[5,3],[4,4],[3,5],[10,1],[7,3]],trapL=[],plainL=[];
 TERMS.forEach((x,i)=>TERMS.forEach((y,j)=>{if(j<=i||x[0]===y[0]||x[0]*x[1]===y[0]*y[1])return;const [lo,hi]=x[0]*x[1]<y[0]*y[1]?[x,y]:[y,x];(lo[0]>hi[0]?trapL:plainL).push([lo,hi]);}));
 const pick=(l,c)=>l.filter((_,i)=>i%Math.floor(l.length/c)===0).slice(0,c);
 const T15=pick(trapL,21),P15=pick(plainL,21);
 const cmp=(lo,hi,cheapA,P)=>{const [a,b]=cheapA?[lo,hi]:[hi,lo],ans=cheapA?'A':'B',IA=P*a[0]*a[1]/100,IB=P*b[0]*b[1]/100;
  return {ans,IA,IB,head:`Two fictional loans are offered for ${money(P)}. Loan A charges ${a[0]}% simple interest a year for ${yrs(a[1])}. Loan B charges ${b[0]}% simple interest a year for ${yrs(b[1])}.`,pic:loan(`Two fictional loans for ${money(P)}`,[['yearly rate',`${a[0]}%`,`${b[0]}%`],['years',`${a[1]}`,`${b[1]}`]],['Loan A','Loan B']),why:`Loan A costs ${money(P)} × ${a[0]/100} × ${a[1]} = ${money(IA)} in interest and Loan B costs ${money(P)} × ${b[0]/100} × ${b[1]} = ${money(IB)}.`};};
 for(let i=0;i<15;i++)[T15[i],P15[i]].forEach(([lo,hi],h)=>{const P=LP[(i*3+h*5)%LP.length],c=cmp(lo,hi,(i+h)%2===0,P);
  add('compare',`${c.head} Which loan costs less in total: A or B?`,c.ans,c.pic,`${c.why} Loan ${c.ans} costs less in total.`,[`loan ${c.ans.toLowerCase()}`]);});
 for(let i=15;i<21;i++)[T15[i],P15[i]].forEach(([lo,hi],h)=>{const P=LP[(i*7+h*3+1)%LP.length],c=cmp(lo,hi,(i+h)%2===1,P),d=Math.abs(c.IA-c.IB);
  add('compare',`${c.head} How much less does the cheaper loan cost in total, in dollars?`,d/100,c.pic,`${c.why} The difference is ${money(Math.max(c.IA,c.IB))} − ${money(Math.min(c.IA,c.IB))} = ${money(d)}.`);});
}
};
