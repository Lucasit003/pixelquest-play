// Middle School topic (Grade 7, CCSS 7.RP.A.3): percent change, discounts and markups. Every answer is
// computed with integer arithmetic in cents: percent change = change ÷ original × 100, a price after a
// p% change is original × (100 ± p) ÷ 100, and an original price is new × 100 ÷ (100 ± p). Numbers are
// chosen so every answer is a whole number of dollars or a whole percent. Prices and shops are fictional.
const money=c=>`$${(c/100).toFixed(2).replace(/\.00$/,'')}`;
const THINGS=['jacket','bike','game','pair of trainers','backpack','lamp','board game','scooter','tent','guitar'];
export default {
id:'math-m-percent-change',subject:'math',level:4,grade:7,standard:'CCSS 7.RP.A.3',
title:'Percent change, discounts and markups',
goal:'Find a percent increase or decrease, work out a price after a discount or markup, and find the price before a change.',
points:20,
skills:{change:'Percent change',after:'Price after a change',before:'Price before a change'},
steps:[
 {skill:'change',say:'Percent change compares the change with the ORIGINAL amount. A price that goes from $40 to $50 changes by $10, and 10 ÷ 40 = 0.25, so it rose by 25%.',eq:'10 ÷ 40 × 100 = 25%',pic:{t:'setups',title:'A fictional price rise',head:'',rows:[['original','$40'],['new','$50'],['change','$10'],['change ÷ original','10 ÷ 40 = 25%']],cols:['Amount']}},
 {skill:'change',say:'A decrease works the same way. From $50 down to $40 is a $10 change, but 10 ÷ 50 = 0.2, so it fell by 20%. The original is the starting value, so the two percents differ.',eq:'10 ÷ 50 × 100 = 20%',pic:{t:'setups',title:'A fictional price drop',head:'',rows:[['original','$50'],['new','$40'],['change','$10'],['change ÷ original','10 ÷ 50 = 20%']],cols:['Amount']},
  check:{prompt:'Try it: a fictional ticket price rose from $20 to $26. By what percent did it rise?',answer:30,options:[30,6,23],hint:'The change is $6. Divide it by the original $20.',pic:{t:'setups',title:'A ticket price',head:'',rows:[['original','$20'],['new','$26']],cols:['Amount']}}},
 {skill:'after',say:'A 25% discount leaves 75% of the price to pay. A $80 jacket at 25% off costs 80 × 0.75 = $60.',eq:'80 × 75 ÷ 100 = 60',pic:{t:'setups',title:'A fictional sale',head:'',rows:[['price','$80'],['discount','25%'],['you pay','75% of $80 = $60']],cols:['Amount']}},
 {skill:'after',say:'A markup adds a percent of the price. A shop that marks up a $40 lamp by 30% sells it for 40 × 1.3 = $52.',eq:'40 × 130 ÷ 100 = 52',pic:{t:'setups',title:'A fictional markup',head:'',rows:[['cost to the shop','$40'],['markup','30%'],['selling price','130% of $40 = $52']],cols:['Amount']},
  check:{prompt:'Try it: a fictional $60 backpack is on sale for 15% off. What is the sale price, in dollars?',answer:51,options:[51,45,9],hint:'You pay 85% of $60.',pic:{t:'setups',title:'A backpack on sale',head:'',rows:[['price','$60'],['discount','15%']],cols:['Amount']}}},
 {skill:'before',say:'To undo a change, divide by the percent that is left. After 20% off a game costs $36, which is 80% of the old price, so the old price was 36 ÷ 0.8 = $45.',eq:'36 × 100 ÷ 80 = 45',pic:{t:'setups',title:'Undoing a discount',head:'',rows:[['sale price','$36'],['discount','20%'],['sale price is','80% of the original'],['original','36 ÷ 0.8 = $45']],cols:['Amount']}},
 {skill:'before',say:'Do not add the percent back onto the new price: 36 plus 20% of 36 is $43.20, not $45, because the 20% was taken from the bigger original.',pic:{t:'setups',title:'A common slip',head:'',rows:[['right','36 ÷ 0.8 = $45'],['wrong','36 × 1.2 = $43.20']],cols:['Working']},
  check:{prompt:'Try it: after a 25% markup, a fictional scooter sells for $100. What did it cost before the markup, in dollars?',answer:80,options:[80,75,125],hint:'$100 is 125% of the cost: divide by 1.25.',pic:{t:'setups',title:'Undoing a markup',head:'',rows:[['selling price','$100'],['markup','25%']],cols:['Amount']}}}],
progression:{requires:['math-m-ratios','finance-e-discounts'],operations:3,demand:'Divide a change by the original for percent change, multiply by what is left (or added) for a new price, and divide by it to undo a change.'},
items(add){
 const PCT=[5,10,15,20,25,30,40,50,60,75];
 /* Percent change: original and new are whole dollars, and so is the percent. */
 let i=0;
 for(const p of PCT)for(const old of [20,40,60,80,120,160,200,300]){if((old*p)%100)continue;const d=old*p/100,up=i%2===0,thing=THINGS[i++%THINGS.length],nw=up?old+d:old-d;
  if(nw<=0)continue;
  add('change',`The price of a fictional ${thing} ${up?'rose':'fell'} from $${old} to $${nw}. By what percent did it ${up?'rise':'fall'}?`,p,{t:'setups',title:`A fictional ${thing}`,head:'',rows:[['original',`$${old}`],['new',`$${nw}`]],cols:['Amount']},`The change is $${d}, and ${d} ÷ ${old} × 100 = ${p}%.`);}
 /* Price after a discount or markup. */
 let j=0;
 for(const p of PCT)for(const old of [20,40,60,80,90,120,150,240]){const cents=old*(100+(j%2?p:-p));if(cents%100||j%2===0&&p>=75){j++;continue;}const nw=cents/100,disc=j%2===0,thing=THINGS[j++%THINGS.length];
  add('after',disc?`A fictional $${old} ${thing} is on sale for ${p}% off. What is the sale price, in dollars?`:`A shop marks up a fictional ${thing} that cost it $${old} by ${p}%. What is the selling price, in dollars?`,nw,{t:'setups',title:disc?'A sale':'A markup',head:'',rows:[[disc?'price':'cost',`$${old}`],[disc?'discount':'markup',`${p}%`]],cols:['Amount']},disc?`You pay ${100-p}% of $${old}: ${old} × ${100-p} ÷ 100 = $${nw}.`:`The price is ${100+p}% of $${old}: ${old} × ${100+p} ÷ 100 = $${nw}.`);}
 /* Price before a change: the original is a whole number of dollars. */
 let k=0;
 for(const p of PCT)for(const orig of [20,40,60,80,100,120,160,200]){const disc=k%2===1;if(disc&&p>=75){k++;continue;}const cents=orig*(100+(disc?-p:p));if(cents%100){k++;continue;}const nw=cents/100,thing=THINGS[k++%THINGS.length];
  add('before',disc?`After a ${p}% discount, a fictional ${thing} costs $${nw}. What was the price before the discount, in dollars?`:`After a ${p}% markup, a fictional ${thing} sells for $${nw}. What did it cost before the markup, in dollars?`,orig,{t:'setups',title:disc?'Undoing a discount':'Undoing a markup',head:'',rows:[[disc?'sale price':'selling price',`$${nw}`],[disc?'discount':'markup',`${p}%`]],cols:['Amount']},`$${nw} is ${disc?100-p:100+p}% of the original, so the original is ${nw} × 100 ÷ ${disc?100-p:100+p} = $${orig}.`);}
}
};
