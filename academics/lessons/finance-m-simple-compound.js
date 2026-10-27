// Middle School topic (Grade 6, Jump$tart Investing, grade 8 benchmark): simple and compound interest over two or
// three years. Every answer is computed here in whole cents. Simple interest is the starting amount × the yearly
// rate × the years. Compound interest multiplies the balance by (100% + the rate) once a year, and a starting
// amount is used only when every year's interest is an exact number of cents, so nothing is ever rounded. Every
// plan is fictional and keeps to the same simplifications, stated in each question: one fixed yearly rate,
// interest added once a year, and no deposits or withdrawals. People and plans are fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Maya','Eli','Sana','Theo','Lucia','Dev','Hana','Omar','Ruby','Finn','Asha','Leo'];
/* Balances at the end of each year, compounding once a year; null unless every year's interest is a whole number of cents. */
const grow=(c,r,n)=>{const b=[c];for(let y=0;y<n;y++){const x=b[y]*(100+r);if(x%100)return null;b.push(x/100);}return b;};
const times=r=>`1.${String(r).padStart(2,'0')}`;
const plan=(title,rows,cols=['Given'])=>({t:'setups',title,head:'Plan',rows,cols});
export default {
id:'finance-m-simple-compound',subject:'finance',level:4,grade:6,standard:'Jump$tart Investing, grade 8 benchmark',
title:'Simple and compound interest',
goal:'Work out simple interest and compound interest over two or three years, and tell which plan ends higher and by how much.',
points:20,
skills:{simple:'Simple interest',compound:'Compound interest',compare:'Simple or compound'},
steps:[
 {skill:'simple',say:'On savings, interest is money a bank or credit union pays you for keeping your money with it. Simple interest is figured on the starting amount only, so it is the same every year. At a fictional 5% simple interest, $200.00 earns $10.00 a year, which is $30.00 over 3 years.',eq:'$200.00 × 0.05 × 3 = $30.00',pic:{t:'setups',title:'Simple interest at 5% a year',head:'Year',rows:[['1','$10.00','$210.00'],['2','$10.00','$220.00'],['3','$10.00','$230.00']],cols:['Interest','Balance']}},
 {skill:'simple',say:'For simple interest, multiply the starting amount by the yearly rate and by the number of years. The ending balance is the starting amount plus that interest.',eq:'interest = starting amount × rate × years',pic:plan('A fictional plan',[['starting amount','$200.00'],['simple interest a year','5%'],['years','3']]),
  check:{prompt:'Try it: a fictional plan pays 4% simple interest a year on the starting amount. How much interest does $700.00 earn in 3 years, with no deposits or withdrawals, in dollars?',answer:84,options:[84,28,784,700],hint:'4% of $700.00 is the interest for one year, and there are 3 years.',pic:plan('A fictional plan',[['starting amount','$700.00'],['simple interest a year','4%'],['years','3']])}},
 {skill:'compound',say:'Compound interest is figured on the whole balance, and the balance includes interest already added. With a fictional 10% added once a year, $200.00 grows to $220.00 after one year, and the second year\'s 10% is figured on $220.00, not on $200.00.',eq:'$200.00 → $220.00 → $242.00',pic:{t:'setups',title:'Compound interest at 10% a year',head:'Year',rows:[['1','$200.00','$20.00','$220.00'],['2','$220.00','$22.00','$242.00']],cols:['Start','Interest','End']}},
 {skill:'compound',say:'Adding 10% is the same as multiplying by 1.10, so multiply once for each year: $200.00 × 1.10 × 1.10 = $242.00. The interest is $42.00, which is $2.00 more than simple interest at 10% pays over the same 2 years.',eq:'$200.00 × 1.10 × 1.10 = $242.00',pic:plan('A fictional plan',[['starting amount','$200.00'],['yearly rate, compounded','10%'],['years','2']]),
  check:{prompt:'Try it: a fictional plan pays 10% interest a year, compounded once a year. What is the balance after 2 years if $300.00 goes in and nothing is added or taken out, in dollars?',answer:363,options:[363,360,330,366],hint:'Multiply $300.00 by 1.10, then multiply that answer by 1.10 again.',pic:plan('A fictional plan',[['starting amount','$300.00'],['yearly rate, compounded','10%'],['years','2']])}},
 {skill:'compare',say:'With the same rate, starting amount and number of years, compound interest ends higher whenever there are 2 or more years, because it also earns interest on the interest already added.',eq:'$242.00 is more than $240.00',pic:plan('The same 10% for 2 years',[['starting amount','$200.00','$200.00'],['yearly rate','10%','10%'],['after 2 years','$240.00','$242.00']],['Simple','Compound'])},
 {skill:'compare',say:'A higher rate does not always end higher. On a fictional $1,000.00 for 3 years, 11% simple interest ends at $1,330.00, while 10% compounded once a year ends at $1,331.00.',eq:'$1,000.00 × 1.10 × 1.10 × 1.10 = $1,331.00',pic:plan('Two fictional plans for 3 years',[['starting amount','$1,000.00','$1,000.00'],['yearly rate','11%','10%'],['interest','simple','compounded yearly'],['after 3 years','$1,330.00','$1,331.00']],['Plan A','Plan B']),
  check:{prompt:'Try it: two fictional plans each start with $600.00 for 2 years, with nothing added or taken out. Plan A pays 16% simple interest a year. Plan B pays 15% a year, compounded once a year. Which plan ends with more: A or B?',answer:'B',options:['A','B'],hint:'Work out both: A adds 2 × 16% of $600.00, and B multiplies $600.00 by 1.15 twice.',pic:plan('Two fictional plans for 2 years',[['starting amount','$600.00','$600.00'],['yearly rate','16%','15%'],['interest','simple','compounded yearly']],['Plan A','Plan B'])}},
 {skill:'compare',say:'Real accounts can add interest more often than once a year, change their rates, or charge fees. Every plan in this topic keeps one fictional yearly rate, adds interest once a year, and has no deposits or withdrawals.',pic:{t:'setups',title:'This topic\'s simplifications',head:'In every plan',rows:[['yearly rate','stays the same'],['interest added','once a year'],['deposits or withdrawals','none']],cols:['Here']}}],
progression:{requires:['finance-e-interest','finance-e-saving-each-week'],operations:3,demand:'Multiply amount × rate × years for simple interest, multiply by 1 + the rate once for each year for compound interest, and compare the two ending balances instead of the two rates.'},
items(add){
 let w=0;
 /* Simple interest: the interest over the years, or the ending balance. */
 const SRN=[[2,3],[3,2],[4,3],[5,2],[6,3],[8,2]];
 [20000,25000,40000,50000,60000,75000,80000,120000,150000,200000,250000,300000].forEach((P,k)=>SRN.forEach(([r,n],j)=>{if((j+k)%2)return;const y=P*r/100,I=y*n,who=NAMES[w++%NAMES.length],pic=plan('A fictional savings plan',[['starting amount',money(P)],['simple interest a year',`${r}%`],['years',`${n}`]]);
  const head=`A fictional savings plan pays ${r}% simple interest a year on the starting amount. ${who} puts in ${money(P)} and makes no deposits or withdrawals.`;
  if(((j+k)>>1)%2===0)add('simple',`${head} How much interest does the plan pay in ${n} years, in dollars?`,I/100,pic,`Each year pays ${r}% of ${money(P)} = ${money(y)}. Over ${n} years that is ${n} × ${money(y)} = ${money(I)}.`);
  else add('simple',`${head} What is the balance after ${n} years, in dollars?`,(P+I)/100,pic,`The interest is ${money(P)} × ${r/100} × ${n} = ${money(I)}, so the balance is ${money(P)} + ${money(I)} = ${money(P+I)}.`);}));
 /* Compound interest, once a year: the ending balance, all the interest, or the interest added in the last year. */
 const cand=[];
 for(const [r,n] of [[10,2],[5,2],[4,2],[8,2],[12,2],[15,2],[20,2],[10,3],[5,3],[4,3],[8,3],[12,3],[15,3],[20,3]])for(const P of [40000,50000,62500,80000,100000,125000,160000,200000,250000]){const b=grow(P,r,n);if(b)cand.push([P,r,n,b]);}
 cand.filter((_,i)=>i%5<2).forEach(([P,r,n,b],i)=>{const who=NAMES[w++%NAMES.length],end=b[n],pic=plan('A fictional savings plan',[['starting amount',money(P)],['yearly rate, compounded',`${r}%`],['years',`${n}`]]),path=b.map(money).join(' → ');
  const head=`A fictional savings plan pays ${r}% interest a year, compounded once a year: each year's interest is added to the balance. ${who} puts in ${money(P)} and makes no deposits or withdrawals.`;
  if(i%3===0)add('compound',`${head} What is the balance after ${n} years, in dollars?`,end/100,pic,`Multiply by ${times(r)} once a year: ${path}.`);
  else if(i%3===1)add('compound',`${head} How much interest does the plan pay in all over ${n} years, in dollars?`,(end-P)/100,pic,`Multiply by ${times(r)} once a year: ${path}. The interest is ${money(end)} − ${money(P)} = ${money(end-P)}.`);
  else add('compound',`${head} How much interest is added in year ${n}, in dollars?`,(end-b[n-1])/100,pic,`Year by year: ${path}. Year ${n} adds ${r}% of ${money(b[n-1])}, which is ${money(end-b[n-1])}.`);});
 /* Which plan ends higher: simple at one rate or compound at another. In the first list compounding at the LOWER rate
    still wins (the trap); in the second the higher simple rate wins; in the third compounding has the higher rate too.
    Ending balances always differ by at least $1.00, and the compound plan is Plan A in every other question. */
 const PL=[40000,50000,62500,80000,100000,125000,160000,200000,250000];
 const WHICH=[...[[10,11,3],[12,13,3],[15,16,3],[15,17,3],[20,21,3],[20,22,3],[20,23,3],[20,24,3],[15,16,2],[20,21,2]].map(x=>[...x,2]),
  ...[[10,12,3],[10,11,2],[5,6,2],[5,6,3],[8,9,3],[8,9,2],[4,5,3],[12,14,3],[15,18,3],[20,25,3],[12,13,2],[15,17,2],[4,5,2]].map((x,i)=>[...x,i<7?2:1]),
  ...[[10,8,2],[8,6,3],[5,4,3],[12,10,2],[15,12,3],[20,15,2]].map(x=>[...x,1])];
 let v=0;
 WHICH.forEach(([r,s,n,take],k)=>{let got=0;for(let j=0;j<PL.length&&got<take;j++){const P=PL[(k*2+j+5)%PL.length],b=grow(P,r,n);if(!b)continue;const S=P+P*s*n/100,C=b[n];if(Math.abs(C-S)<100)continue;got++;
  const compA=v++%2===0,cl=compA?'A':'B',sl=compA?'B':'A',win=C>S?cl:sl,who=NAMES[w++%NAMES.length];
  const sSay=`Plan ${sl} pays ${s}% simple interest a year on the starting amount.`,cSay=`Plan ${cl} pays ${r}% interest a year, compounded once a year.`;
  const rows=compA?[['starting amount',money(P),money(P)],['yearly rate',`${r}%`,`${s}%`],['interest','compounded yearly','simple'],['years',`${n}`,`${n}`]]:[['starting amount',money(P),money(P)],['yearly rate',`${s}%`,`${r}%`],['interest','simple','compounded yearly'],['years',`${n}`,`${n}`]];
  add('compare',`${compA?cSay:sSay} ${compA?sSay:cSay} ${who} can put ${money(P)} in either fictional plan for ${n} years, with no deposits or withdrawals. Which plan ends with more money: A or B?`,win,plan(`Two fictional plans for ${n} years`,rows,['Plan A','Plan B']),`Plan ${sl}: ${money(P)} + ${n} × ${money(P*s/100)} = ${money(S)}. Plan ${cl}: ${b.map(money).join(' → ')}. Plan ${win} ends higher, by ${money(Math.abs(C-S))}.`,[`plan ${win.toLowerCase()}`]);}});
 /* How much more compounding ends with than simple interest at the same rate. */
 [[10,2],[5,3],[8,2],[20,3],[12,2],[4,3],[15,2],[10,3],[5,2],[20,2],[15,3],[8,3]].forEach(([r,n],k)=>{const P=PL.map((_,j)=>PL[(k*3+j)%PL.length]).find(x=>grow(x,r,n)),b=grow(P,r,n),S=P+P*r*n/100,d=b[n]-S;
  add('compare',`Two fictional plans each pay ${r}% a year on ${money(P)} for ${n} years, with no deposits or withdrawals. One pays simple interest on the starting amount; the other compounds once a year. How much more does the compound plan end with, in dollars?`,d/100,plan(`The same ${r}% for ${n} years`,[['starting amount',money(P),money(P)],['yearly rate',`${r}%`,`${r}%`],['years',`${n}`,`${n}`]],['Simple','Compound']),`Simple: ${money(P)} + ${n} × ${money(P*r/100)} = ${money(S)}. Compound: ${b.map(money).join(' → ')}. The difference is ${money(b[n])} − ${money(S)} = ${money(d)}.`);});
}
};
