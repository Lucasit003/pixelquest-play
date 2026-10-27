// Middle School topic (Grade 8, Jump$tart Employment and Income, grade 8 benchmark): running a small business.
// Every answer is computed here in whole cents: revenue = price × number sold, costs = fixed costs + the cost of
// each item × number sold, profit = revenue - costs, the profit on each item = price - the cost of each item, and
// the break-even number is the fixed costs ÷ the profit on each item, rounded up to a whole item. Every business is
// fictional, with no taxes or other costs beyond those stated.
const usd=c=>`$${(c/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const ceil=(a,b)=>Math.floor((a+b-1)/b);
/* [business, one item, items, price, cost of each item, fixed costs], in cents. */
const BIZ=[
 ['lemonade stand','cup','cups',150,40,2200],['bracelet stall','bracelet','bracelets',400,100,3000],['bake sale','muffin','muffins',200,50,4200],
 ['car wash','wash','washes',800,150,5200],['sticker shop','sticker sheet','sticker sheets',300,75,1800],['plant stall','seedling','seedlings',350,120,4600],
 ['t-shirt booth','t-shirt','t-shirts',1500,650,12000],['popcorn cart','bag','bags',250,60,5700],['candle table','candle','candles',900,350,8250],
 ['dog-walking service','walk','walks',1200,200,6000],['badge stall','badge','badges',500,180,2560],['smoothie stand','smoothie','smoothies',450,190,7800]];
const NUMS=[[40,80,120],[25,45,60],[20,90,150],[10,30,45],[15,40,100],[20,60,70],[10,25,40],[50,100,140],[12,30,50],[8,20,35],[10,40,64],[25,50,90]];
export default {
id:'finance-m-business-profit',subject:'finance',level:4,grade:8,standard:'Jump$tart Employment and Income, grade 8 benchmark',
title:'Running a small business',
goal:'Work out a small business’s revenue, costs and profit, the profit on each item, and how many items it must sell to break even.',
points:20,
skills:{profit:'Revenue, costs and profit',margin:'Profit on each item',breakeven:'Breaking even'},
steps:[
 {skill:'profit',say:'A business’s revenue is the money it takes in from sales: the price × the number sold. A fictional lemonade stand that sells 80 cups at $1.50 has revenue of 80 × $1.50 = $120.00.',eq:'80 × 1.50 = 120',pic:tab('A fictional lemonade stand',[['price','$1.50 a cup'],['cups sold','80'],['revenue','$120.00']])},
 {skill:'profit',say:'Profit = revenue - costs. Fixed costs stay the same however much you sell, such as a $22.00 stall fee; the cost of each item grows with sales, such as $0.40 for each cup and its lemons. 80 cups cost $22.00 + 80 × $0.40 = $54.00, so the profit is $120.00 - $54.00 = $66.00.',eq:'120 - 54 = 66',pic:tab('A fictional lemonade stand',[['revenue','$120.00'],['fixed costs','$22.00'],['cost of 80 cups','$32.00'],['profit','$66.00']]),
  check:{prompt:'Try it: a fictional stall sells 50 bracelets at $4.00 each. It pays a $30.00 table fee and $1.00 for the beads in each bracelet. What is its profit, in dollars?',answer:120,options:[120,170,200],hint:'Revenue is $200.00. Take away the $30.00 fee and the $50.00 of beads.',pic:tab('A fictional bracelet stall',[['bracelets sold','50'],['price','$4.00'],['table fee','$30.00'],['beads for each','$1.00'],['profit','?']])}},
 {skill:'margin',say:'The profit on each item is the price minus the cost of that item: $1.50 - $0.40 = $1.10 a cup. Every cup sold adds $1.10 toward paying the fixed costs, and once those are paid, toward profit.',eq:'1.50 - 0.40 = 1.10',pic:tab('Each fictional cup',[['price','$1.50'],['cost','$0.40'],['profit on each','$1.10']])},
 {skill:'margin',say:'A profit margin compares the profit with the revenue: $66.00 ÷ $120.00 = 0.55, a margin of 55%, so 55 cents of every dollar taken in is profit.',eq:'66 ÷ 120 = 0.55',pic:tab('A fictional lemonade stand',[['profit','$66.00'],['revenue','$120.00'],['margin','55%']]),
  check:{prompt:'Try it: a fictional stand sells caps for $12.00 that cost it $7.50 each. How much profit does it make on each cap, in dollars?',answer:4.5,options:[4.5,19.5,7.5],hint:'Take the cost away from the price.',pic:tab('A fictional cap stand',[['price','$12.00'],['cost of each','$7.50'],['profit on each','?']])}},
 {skill:'breakeven',say:'The break-even point is where revenue equals costs, so the profit is zero. Divide the fixed costs by the profit on each item: $22.00 ÷ $1.10 = 20 cups. Sell more and the stand makes a profit; sell fewer and it makes a loss.',eq:'22 ÷ 1.10 = 20',pic:tab('Breaking even',[['fixed costs','$22.00'],['profit on each cup','$1.10'],['cups to break even','20']])},
 {skill:'breakeven',say:'When the division is not whole, round up to the next whole item. A $25.00 fee at $1.10 a cup gives 25 ÷ 1.1 ≈ 22.7, so the stand needs 23 cups: after 22 cups it is still a little short.',pic:tab('Rounding up',[['fixed costs','$25.00'],['profit on each cup','$1.10'],['cups to break even','23']]),
  check:{prompt:'Try it: a fictional bake sale pays $36.00 for a table and makes $1.50 on each muffin after ingredients. How many muffins must it sell to break even?',answer:24,options:[24,36,54],hint:'Divide the $36.00 by the $1.50 made on each muffin.',pic:tab('A fictional bake sale',[['table','$36.00'],['made on each muffin','$1.50'],['muffins to break even','?']])}}],
progression:{requires:['finance-m-commission-tips','math-m-two-step-equations'],operations:3,demand:'Multiply a price by a count, add fixed and per-item costs, subtract, and divide fixed costs by the profit on each item, rounding up.'},
items(add){
 BIZ.forEach(([biz,one,many,p,v,F],j)=>{const name=`a fictional ${biz}`,Name=`A fictional ${biz}`,lead=`${Name} sells ${many} at ${usd(p)} each. Each ${one} costs it ${usd(v)} in supplies, and its fixed costs are ${usd(F)}.`;
  const pic=(rows)=>tab(Name,[['price',usd(p)],['cost of each',usd(v)],['fixed costs',usd(F)],...rows]);
  NUMS[j].forEach((n,k)=>{const R=p*n,C=F+v*n,P=R-C;
   if(k===0)add('profit',`${Name} sells ${n} ${many} at ${usd(p)} each. What is its revenue, in dollars?`,R/100,tab(Name,[['price',usd(p)],[`${many} sold`,`${n}`],['revenue','?']]),`${n} × ${usd(p)} = ${usd(R)}.`);
   if(k===1)add('profit',`${lead} What are its total costs for ${n} ${many}, in dollars?`,C/100,pic([[`${many} sold`,`${n}`],['total costs','?']]),`${usd(F)} + ${n} × ${usd(v)} = ${usd(C)}.`);
   if(P!==0)add('profit',`${lead} If it sells ${n} ${many}, ${P>0?'what profit does it make':'how much money does it lose'}, in dollars?`,Math.abs(P)/100,pic([[`${many} sold`,`${n}`],[P>0?'profit':'loss','?']]),`Revenue ${n} × ${usd(p)} = ${usd(R)}; costs ${usd(F)} + ${n} × ${usd(v)} = ${usd(C)}; ${P>0?`profit ${usd(R)} - ${usd(C)} = ${usd(P)}`:`a loss of ${usd(C)} - ${usd(R)} = ${usd(-P)}`}.`);});
  /* Profit on each item, the price for a wanted profit on each, and a margin. */
  add('margin',`${Name} sells each ${one} for ${usd(p)}, and each ${one} costs it ${usd(v)} in supplies. How much profit does it make on each ${one}, in dollars?`,(p-v)/100,tab(Name,[['price',usd(p)],['cost of each',usd(v)],['profit on each','?']]),`${usd(p)} - ${usd(v)} = ${usd(p-v)}.`);
  const want=[50,100,125,200,75,150][j%6];
  add('margin',`Each ${one} costs ${name} ${usd(v)} in supplies. What price must it charge to make ${usd(want)} of profit on each ${one}, in dollars?`,(v+want)/100,tab(Name,[['cost of each',usd(v)],['profit wanted on each',usd(want)],['price','?']]),`${usd(v)} + ${usd(want)} = ${usd(v+want)}.`);
  const n=NUMS[j][2],R=p*n,P=R-F-v*n,m=P*100/R;
  if(P>0&&Number.isInteger(m))add('margin',`${lead} It sells ${n} ${many}. What is its profit margin, the profit as a percent of revenue?`,m,pic([[`${many} sold`,`${n}`],['margin','?']]),`Revenue ${usd(R)}, profit ${usd(P)}, and ${usd(P)} ÷ ${usd(R)} is ${m}%.`);
  /* Break-even counts, and the number for a target profit. */
  const e=ceil(F,p-v);
  add('breakeven',`${lead} How many ${many} must it sell to break even?`,e,pic([[`${many} to break even`,'?']]),`It makes ${usd(p-v)} on each ${one}, and ${usd(F)} ÷ ${usd(p-v)} = ${+(F/(p-v)).toFixed(2)}${F%(p-v)?`, so it needs ${e}`:''}.`);
  add('breakeven',`${Name} makes ${usd(p-v)} on each ${one} after supplies, and has fixed costs of ${usd(F)}. How many ${many} must it sell to cover the fixed costs?`,e,tab(Name,[['made on each',usd(p-v)],['fixed costs',usd(F)],[`${many} needed`,'?']]),`${usd(F)} ÷ ${usd(p-v)} = ${+(F/(p-v)).toFixed(2)}${F%(p-v)?`, rounded up to ${e}`:''}.`);
  const T=[2000,5000,3000,4000][j%4],t=ceil(F+T,p-v);
  add('breakeven',`${lead} How many ${many} must it sell to make a profit of at least ${usd(T)}?`,t,pic([['profit wanted',usd(T)],[`${many} needed`,'?']]),`It must cover ${usd(F)} + ${usd(T)} = ${usd(F+T)}, and ${usd(F+T)} ÷ ${usd(p-v)} = ${+((F+T)/(p-v)).toFixed(2)}${(F+T)%(p-v)?`, rounded up to ${t}`:''}.`);
  /* One more or one fewer than break-even. */
  const s=j%2?e+3:Math.max(1,e-2),Ps=p*s-F-v*s;
  if(Ps!==0)add('breakeven',`${lead} It breaks even at ${e} ${many}. If it sells ${s} ${many}, does it make a profit or a loss?`,Ps>0?'profit':'loss',pic([[`${many} sold`,`${s}`]]),`${s} is ${Ps>0?'more':'fewer'} than ${e}, so it makes a ${Ps>0?'profit':'loss'} of ${usd(Math.abs(Ps))}.`);});
}
};
