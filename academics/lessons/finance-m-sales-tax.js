// Middle School topic (Grade 6, Jump$tart Spending and Saving, grade 8 benchmark): sales tax as a percent of a
// price. Every answer is computed here in whole cents, and every price and rate is chosen so the tax comes out to
// an exact cent: the tax is the price times the rate, the total is the price plus the tax, and the price before
// tax is the total divided by (100% + the rate). Real sales tax rates differ from place to place, and some things
// are taxed at a different rate or not at all, so every rate here is a fictional one stated in the question.
// Towns, shops, people and prices are all fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Jo','Ana','Ben','Mei','Sol','Ivy','Raj','Eva','Tom','Zara','Luis','Kim'];
const GOODS=[['backpack',3500],['bike helmet',4800],['phone case',1250],['board game',2800],['pair of jeans',4250],['desk lamp',3600],['soccer ball',2250],['video game',6000],['hoodie',3800],['watch',7500],['skateboard',8400],['paint set',1875]];
const THINGS=[['notebooks',275],['pens',125],['T-shirts',1200],['water bottles',950],['candles',650],['puzzles',1450]];
const RATES=[4,5,6,7,8,9];
/* A rate is used on an amount only when the tax is a whole number of cents. */
const exact=(c,r)=>c*r%100===0;
const receipt=(title,rows)=>({t:'setups',title,head:'Receipt',rows,cols:['Amount']});
export default {
id:'finance-m-sales-tax',subject:'finance',level:4,grade:6,standard:'Jump$tart Spending and Saving, grade 8 benchmark',
title:'Sales tax',
goal:'Find the sales tax on a price as a percent, add it to find the total cost, and work back from a total to the price before tax.',
points:20,
skills:{tax:'The tax amount',total:'The total cost',before:'The price before tax'},
steps:[
 {skill:'tax',say:'A sales tax is a percent of a price that is added on when you pay. Real rates differ from place to place, and some things are taxed at a different rate or not at all, so every rate in this topic is a fictional one stated in the question.',pic:receipt('A fictional shop',[['price','$25.00'],['sales tax rate','6%']])},
 {skill:'tax',say:'Percent means per hundred, so a 6% tax is 6 cents on every dollar of the price. On a $25.00 price the tax is 25 × 6 cents = 150 cents, which is $1.50.',eq:'6% of $25.00 = 0.06 × 25 = $1.50',pic:receipt('A fictional shop',[['price','$25.00'],['sales tax rate','6%'],['sales tax','$1.50']]),
  check:{prompt:'Try it: a fictional town adds an 8% sales tax. How much tax is added to a $40.00 jacket, in dollars?',answer:3.2,options:[3.2,32,43.2,0.32],hint:'8% is 8 cents on every dollar: multiply 40 by 0.08.',pic:receipt('A fictional shop',[['price','$40.00'],['sales tax rate','8%']])}},
 {skill:'total',say:'The total cost is the price plus the tax: $25.00 + $1.50 = $26.50. In one step, multiply the price by 1.06, which is the whole price (100%) plus 6% more.',eq:'$25.00 × 1.06 = $26.50',pic:receipt('A fictional receipt',[['price','$25.00'],['sales tax at 6%','$1.50'],['total cost','$26.50']])},
 {skill:'total',say:'When several things are taxed at the same rate, you can add the prices first and find the tax once, because a percent of a sum is the sum of the percents. Two $12.50 books with a fictional 8% tax: $25.00 + $2.00 = $27.00.',eq:'($12.50 + $12.50) × 1.08 = $27.00',pic:receipt('Two books',[['book 1','$12.50'],['book 2','$12.50'],['sales tax rate','8%']]),
  check:{prompt:'Try it: with a fictional 5% sales tax, what is the total cost of a $60.00 pair of shoes, in dollars?',answer:63,options:[63,3,65,60.05],hint:'Find 5% of $60.00 and add it to the price, or multiply the price by 1.05.',pic:receipt('A fictional shop',[['price','$60.00'],['sales tax rate','5%']])}},
 {skill:'before',say:'With a 6% tax, the total is 106% of the price before tax. To go back to the price before tax, divide the total by 1 + the rate: $26.50 ÷ 1.06 = $25.00. Check by working forward: 6% of $25.00 is $1.50, and $25.00 + $1.50 = $26.50.',eq:'$26.50 ÷ 1.06 = $25.00',pic:receipt('Working back',[['total paid','$26.50'],['sales tax rate','6%'],['price before tax','$25.00']])},
 {skill:'before',say:'Taking 6% off the total does not undo the tax, because the tax was 6% of the smaller price, not of the total. 6% of $26.50 is $1.59, and $26.50 − $1.59 = $24.91, which is not the $25.00 price.',eq:'$26.50 − $1.59 = $24.91, not $25.00',pic:receipt('A common slip',[['total paid','$26.50'],['6% of the total','$1.59'],['total minus that','$24.91'],['real price','$25.00']]),
  check:{prompt:'Try it: Jo paid $54.00 for a lamp, and that included a fictional 8% sales tax. What was the price before tax, in dollars?',answer:50,options:[50,49.68,46,58.32],hint:'Divide the total by 1.08, then check by adding 8% back on.',pic:receipt('Working back',[['total paid','$54.00'],['sales tax rate','8%']])}}],
progression:{requires:['finance-e-discounts','finance-e-prices-going-up'],operations:2,demand:'Find a percent of a price to the cent, add it on for the total, and divide by 1 + the rate (not subtract the rate from the total) to work back to the price before tax.'},
items(add){
 /* The tax on one item, at three fictional rates per item where the tax is an exact number of cents. */
 GOODS.forEach(([g,p],k)=>{for(let j=0;j<3;j++){const r=RATES[(k+j)%6];if(!exact(p,r))continue;const tax=p*r/100;
  add('tax',`A fictional town adds a ${r}% sales tax. A ${g} is priced at ${money(p)}. How much is the sales tax on it, in dollars?`,tax/100,receipt('A fictional shop',[['price',money(p)],['sales tax rate',`${r}%`]]),`${r}% of ${money(p)} is ${r} cents on every dollar: ${p/100} × 0.${String(r).padStart(2,'0')} = ${money(tax)}.`);}});
 /* The tax on several of the same item: price times count first, then the rate. */
 let w=0;
 THINGS.forEach(([thing,u],k)=>{for(const n of [2,3,4]){const sub=n*u,r=[0,1,2,3,4,5].map(j=>RATES[(k+n+j)%6]).find(x=>exact(sub,x)),tax=sub*r/100,who=NAMES[w++%NAMES.length];
  add('tax',`${who} buys ${n} ${thing} at ${money(u)} each in a fictional city with a ${r}% sales tax. How much sales tax is added, in dollars?`,tax/100,receipt('A fictional city',[['price of one',money(u)],['how many',`${n}`],['sales tax rate',`${r}%`]]),`The ${n} ${thing} cost ${n} × ${money(u)} = ${money(sub)}, and ${r}% of ${money(sub)} is ${money(tax)}.`);}});
 /* The total cost of one item: price plus tax. */
 GOODS.forEach(([g,p],k)=>{for(let j=3;j<5;j++){const r=RATES[(k+j)%6];if(!exact(p,r))continue;const tax=p*r/100;
  add('total',`With a fictional ${r}% sales tax, what is the total cost of a ${g} priced at ${money(p)}, in dollars?`,(p+tax)/100,receipt('A fictional shop',[['price',money(p)],['sales tax rate',`${r}%`]]),`The tax is ${r}% of ${money(p)} = ${money(tax)}, so the total is ${money(p)} + ${money(tax)} = ${money(p+tax)}.`);}});
 /* The total cost of two different items taxed together. */
 for(const step of [5,3])GOODS.forEach(([a,pa],k)=>{const [b,pb]=GOODS[(k+step)%GOODS.length],sub=pa+pb,r=[0,1,2,3,4,5].map(j=>RATES[(k+step+j)%6]).find(x=>exact(sub,x)),tax=sub*r/100,who=NAMES[w++%NAMES.length];
  add('total',`${who} buys a ${a} for ${money(pa)} and a ${b} for ${money(pb)}. A fictional ${r}% sales tax is added to the whole purchase. What is the total cost, in dollars?`,(sub+tax)/100,receipt('A fictional receipt',[[a,money(pa)],[b,money(pb)],['sales tax rate',`${r}%`]]),`The prices add to ${money(sub)}. ${r}% of that is ${money(tax)}, so the total is ${money(sub)} + ${money(tax)} = ${money(sub+tax)}.`);});
 /* Working back from a total: the price before tax, or the part of the total that was tax. */
 GOODS.forEach(([g,p],k)=>{for(let j=0;j<4;j++){const r=RATES[(k+j+1)%6];if(!exact(p,r))continue;const tax=p*r/100,T=p+tax,who=NAMES[w++%NAMES.length];
  if((k+j)%2===0)add('before',`After a fictional ${r}% sales tax was added, ${who} paid ${money(T)} for a ${g}. What was the price before tax, in dollars?`,p/100,receipt('Working back',[['total paid',money(T)],['sales tax rate',`${r}%`]]),`The total is ${100+r}% of the price, so the price is ${money(T)} ÷ 1.${String(r).padStart(2,'0')} = ${money(p)}. Check: ${r}% of ${money(p)} is ${money(tax)}, and ${money(p)} + ${money(tax)} = ${money(T)}.`);
  else add('before',`${who} paid ${money(T)} for a ${g}, and that included a fictional ${r}% sales tax. How much of it was sales tax, in dollars?`,tax/100,receipt('Working back',[['total paid',money(T)],['sales tax rate',`${r}%`]]),`The price before tax is ${money(T)} ÷ 1.${String(r).padStart(2,'0')} = ${money(p)}, so the tax was ${money(T)} − ${money(p)} = ${money(tax)}.`);}});
}
};
