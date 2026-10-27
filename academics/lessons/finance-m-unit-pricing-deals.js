// Middle School topic (Grade 7, Jump$tart Spending and Saving, grade 8 benchmark): comparing deals in two steps. Every
// answer is computed here in whole cents: a 'buy 2, get 1 free' deal charges for 2 of every full group of 3, and
// any items past the last full group cost full price; a 'buy 1, get 1 half off' deal charges half price for every
// second item of a pair; a percent off is taken from each item's price, used only where it is an exact number of
// cents; a bulk pack's cost per item is the pack price divided by the count, used only where it divides exactly;
// and two offers are compared by the cost of the same number of items or by the cost per ounce. The Elementary
// topic finds one price from a pack price; here that is only the first of two steps. Real deals can have limits,
// need a coupon or store card, and have sales tax added, so every deal here is fictional, has no limits, and every
// price is before tax. Shops, people and prices are all fictional.
const money=c=>`$${String(Math.floor(c/100)).replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${String(c%100).padStart(2,'0')}`;
const NAMES=['Zoe','Theo','Lola','Ari','Esme','Nico','Pia','Malik','Rosa','Ian','Suki','Bram'];
const tag=(title,rows,cols=['Given'])=>({t:'setups',title,head:'Deal',rows,cols});
/* Items paid for under 'buy a, get 1 free': a of every full group of a + 1, and full price for the rest. */
/* 'an 8-ounce', 'an 18-ounce', 'a 16-ounce'. */
const an=n=>/^(8\d?|11|18)$/.test(String(n))?'an':'a';
const paidFor=(n,a)=>Math.floor(n/(a+1))*a+n%(a+1);
const GOODS=[['juice box','juice boxes',150],['granola bar','granola bars',90],['notebook','notebooks',240],['pack of gum','packs of gum',120],['bag of chips','bags of chips',180],['candle','candles',450],['pair of socks','pairs of socks',360],['bottle of water','bottles of water',105],['tennis ball','tennis balls',210],['gel pen','gel pens',135],['bath bomb','bath bombs',390],['yogurt cup','yogurt cups',84]];
export default {
id:'finance-m-unit-pricing-deals',subject:'finance',level:4,grade:7,standard:'Jump$tart Spending and Saving, grade 8 benchmark',
title:'Comparing deals',
goal:'Work out what a buy-and-get-free deal really charges, find the saving from buying in bulk, and compare a deal with a percent off by what you actually pay.',
points:20,
skills:{bundle:'Buy-and-get-free deals',bulk:'Bulk or single',compare:'A deal or a percent off'},
steps:[
 {skill:'bundle',say:'A \'buy 2, get 1 free\' deal means every group of 3 costs the price of 2. At a fictional $1.50 each, 3 juice boxes cost 2 × $1.50 = $3.00, which is $1.00 for each box.',eq:'2 × $1.50 = $3.00; $3.00 ÷ 3 = $1.00 each',pic:{t:'tape',title:'Buy 2, get 1 free',rows:[{label:'paid',n:2},{label:'free',n:1}],groups:1}},
 {skill:'bundle',say:'The deal only counts full groups. For 7 juice boxes there are 2 full groups of 3, so 4 are paid for and 2 are free, and the 7th box costs full price: 5 × $1.50 = $7.50.',eq:'7 = 3 + 3 + 1, so pay for 2 + 2 + 1 = 5',pic:tag('7 juice boxes, buy 2, get 1 free',[['full groups of 3','2'],['paid in the groups','4'],['left over at full price','1'],['paid for in all','5']]),
  check:{prompt:'Try it: fictional granola bars cost $0.90 each with a \'buy 2, get 1 free\' deal. How much do 6 bars cost, in dollars?',answer:3.6,options:[3.6,5.4,1.8,2.7],hint:'6 bars make 2 full groups of 3, and each group costs the price of 2.',pic:tag('A fictional deal',[['price each','$0.90'],['deal','buy 2, get 1 free'],['how many','6']])}},
 {skill:'bulk',say:'A bulk pack holds many of the same item for one price. Divide the pack price by the count to get the cost of each one, then compare it with the single price. A fictional 12-pack of water for $9.00 is $0.75 a bottle, against $1.25 for one bottle.',eq:'$9.00 ÷ 12 = $0.75 each',pic:tag('A fictional store',[['one bottle','$1.25'],['12-pack','$9.00']])},
 {skill:'bulk',say:'The saving on a whole pack is the saving on each item times the count: ($1.25 − $0.75) × 12 = $6.00. Bigger is not always cheaper, so work out the cost of each one, or the cost per ounce, before deciding.',eq:'($1.25 − $0.75) × 12 = $6.00',pic:tag('A fictional store',[['one bottle','$1.25'],['12-pack','$9.00'],['each, in the pack','$0.75']]),
  check:{prompt:'Try it: a fictional store sells one can of soup for $1.40 or a 6-pack for $7.20. How much is saved on each can by buying the 6-pack, in dollars?',answer:0.2,options:[0.2,1.2,6.6],hint:'Divide $7.20 by 6, then take that from $1.40.',pic:tag('A fictional store',[['one can','$1.40'],['6-pack','$7.20']])}},
 {skill:'compare',say:'A percent off takes that percent from every item. 30% off a fictional $3.00 item is $0.90 off, so it costs $2.10. On the same price, \'buy 2, get 1 free\' charges $2.00 each for a full group of 3, so it is like 33⅓% off.',eq:'$3.00 − $0.90 = $2.10; 2 × $3.00 ÷ 3 = $2.00',pic:tag('The same $3.00 item, buying 3',[['30% off each','$2.10 each'],['buy 2, get 1 free','$2.00 each']])},
 {skill:'compare',say:'When two shops charge different prices, compare what you would pay in all, not the size of the discount or the price on the tag. Real deals can have limits, need a coupon or store card, and have sales tax added, so every deal here is fictional, has no limits, and every price is before tax.',pic:{t:'setups',title:'This topic\'s simplifications',head:'In every deal',rows:[['limits','none'],['coupons or cards','not needed'],['prices','before tax']],cols:['Here']},
  check:{prompt:'Try it: two fictional shops sell the same notebook. Shop A charges $2.70 each with \'buy 2, get 1 free\'. Shop B charges $2.40 each with 20% off. You buy 3. Which shop charges less for the 3: A or B?',answer:'A',options:['A','B'],hint:'Shop A charges for 2 of the 3. Shop B takes 20% off each of the 3.',pic:tag('Two fictional shops',[['price each','$2.70','$2.40'],['offer','buy 2, get 1 free','20% off']],['Shop A','Shop B'])}}],
progression:{requires:['finance-e-unit-price','finance-m-sales-tax'],operations:3,demand:'Count the full groups a deal covers and price the rest at full price, divide a pack price by its count before comparing, and compare two offers by the total paid rather than by the tag price or the size of the discount.'},
items(add){
 let w=0;const who=()=>NAMES[w++%NAMES.length];
 /* 'Buy a, get 1 free': the cost of a number of items. In half of them some items are left over past the last full
    group and cost full price (the trap: the deal is not two-thirds of every item). */
 GOODS.forEach(([one,many,p],k)=>{const a=[2,1,3][k%3],q=(a+1)*(2+(k>>1)%2)+(k%2?1+(k>>2)%a:0),paid=paidFor(q,a),n=who();
  add('bundle',`A fictional shop sells ${many} at ${money(p)} each with a 'buy ${a}, get 1 free' deal. ${n} buys ${q} of them. How much does ${n} pay, in dollars?`,paid*p/100,tag('A fictional deal',[['price each',money(p)],['deal',`buy ${a}, get 1 free`],['how many',`${q}`]]),`${q} makes ${Math.floor(q/(a+1))} full group${Math.floor(q/(a+1))===1?'':'s'} of ${a+1}${q%(a+1)?` and ${q%(a+1)} more at full price`:''}, so ${paid} are paid for: ${paid} × ${money(p)} = ${money(paid*p)}.`);});
 /* The cost of each item in one full group, kept only where it divides exactly. */
 GOODS.forEach(([one,many,p],k)=>{const a=[2,1,3][(k+1)%3];if(a*p%(a+1))return;const each=a*p/(a+1);
  add('bundle',`With a fictional 'buy ${a}, get 1 free' deal on ${many} priced at ${money(p)} each, what does each one really cost when you buy exactly ${a+1}, in dollars?`,each/100,tag('A fictional deal',[['price each',money(p)],['deal',`buy ${a}, get 1 free`]]),`${a+1} cost the price of ${a}: ${a} × ${money(p)} = ${money(a*p)}, and ${money(a*p)} ÷ ${a+1} = ${money(each)} each.`);});
 /* 'Buy 1, get 1 half off': every second item of a pair is half price, and an odd one out is full price. */
 GOODS.forEach(([one,many,p],k)=>{if(p%2||k%3===2)return;const q=4+k%5,pairs=Math.floor(q/2),cost=pairs*(p+p/2)+(q%2)*p;
  add('bundle',`A fictional shop has a 'buy 1, get 1 half off' deal on ${many} at ${money(p)} each: the second one of every pair is half price. How much do ${q} of them cost, in dollars?`,cost/100,tag('A fictional deal',[['price each',money(p)],['deal','buy 1, get 1 half off'],['how many',`${q}`]]),`${q} makes ${pairs} pairs${q%2?' and 1 more at full price':''}. Each pair costs ${money(p)} + ${money(p/2)} = ${money(p+p/2)}, so ${q} cost ${money(cost)}.`);});
 /* How much a 'buy a, get 1 free' deal saves against full price. */
 GOODS.forEach(([one,many,p],k)=>{if(k%3===1)return;const a=[2,3][k%2],q=(a+1)*(1+k%3)+k%2,paid=paidFor(q,a),n=who();
  add('bundle',`A fictional shop sells ${many} at ${money(p)} each with a 'buy ${a}, get 1 free' deal. How much does ${n} save with the deal on ${q} of them, compared with paying full price for all ${q}, in dollars?`,(q-paid)*p/100,tag('A fictional deal',[['price each',money(p)],['deal',`buy ${a}, get 1 free`],['how many',`${q}`]]),`${q} makes ${Math.floor(q/(a+1))} full group${Math.floor(q/(a+1))===1?'':'s'} of ${a+1}, so ${q-paid} ${q-paid===1?'is':'are'} free: ${q-paid} × ${money(p)} = ${money((q-paid)*p)} saved.`);});
 /* Bulk or single: the saving on each item, and the saving on a whole order of packs. */
 const PACKS=[['roll of paper towels','rolls of paper towels',225,8,1440],['bottle of sports drink','bottles of sports drink',175,12,1680],['bag of popcorn','bags of popcorn',120,10,950],['battery','batteries',150,16,1600],['cup of applesauce','cups of applesauce',95,6,480],['bar of soap','bars of soap',180,8,1200],['pencil','pencils',45,24,720],['can of cat food','cans of cat food',130,12,1260],['pouch of juice','pouches of juice',110,10,900],['box of tissues','boxes of tissues',240,6,1170]];
 PACKS.forEach(([one,many,u,n,P])=>{const e=P/n;
  add('bulk',`A fictional store sells one ${one} for ${money(u)} or ${an(n)} ${n}-pack for ${money(P)}. How much is saved on each ${one} by buying the ${n}-pack, in dollars?`,(u-e)/100,tag('A fictional store',[[`one ${one}`,money(u)],[`${n}-pack`,money(P)]]),`In the pack each one is ${money(P)} ÷ ${n} = ${money(e)}, so each saves ${money(u)} − ${money(e)} = ${money(u-e)}.`);});
 PACKS.forEach(([one,many,u,n,P],k)=>{if(k>=8)return;const j=2+k%3,m=n*j,who_=who(),save=m*u-j*P;
  add('bulk',`A fictional store sells one ${one} for ${money(u)} or ${an(n)} ${n}-pack for ${money(P)}. ${who_} needs ${m} ${many}. How much does ${who_} save by buying ${j} packs instead of ${m} singles, in dollars?`,save/100,tag('A fictional store',[[`one ${one}`,money(u)],[`${n}-pack`,money(P)],['how many needed',`${m}`]]),`${m} singles cost ${m} × ${money(u)} = ${money(m*u)}. ${j} packs cost ${j} × ${money(P)} = ${money(j*P)}. The saving is ${money(save)}.`);});
 /* Which size costs less per ounce. In a trap the BIGGER size costs more per ounce; traps and plain pairs alternate,
    and the cheaper size is Size A in half of each. Prices are whole cents per ounce, so nothing is rounded. */
 const SIZES=[['peanut butter','jar',[16,40],[22,19]],['shampoo','bottle',[12,30],[45,38]],['honey','jar',[8,24],[60,52]],['laundry soap','bottle',[50,100],[14,12]],['cereal','box',[12,18],[33,29]],['olive oil','bottle',[16,34],[56,49]],['dish soap','bottle',[20,38],[17,15]],['salsa','jar',[16,24],[25,23]],['maple syrup','bottle',[12,32],[95,84]],['coffee','bag',[12,30],[62,55]]];
 SIZES.forEach(([what,box,[small,big],[cs,cb]],i)=>[true,false].forEach((trap,h)=>{const [cSmall,cBig]=trap?[cb,cs]:[cs,cb],cheapSmall=cSmall<cBig,small_=small+(h?2:0)*(i%2?1:2),big_=big+(h?4:0);
  const sizes=[{oz:small_,c:cSmall},{oz:big_,c:cBig}],cheap=cheapSmall?sizes[0]:sizes[1],dear=cheapSmall?sizes[1]:sizes[0],cheapA=(i+h)%2===0,[A,B]=cheapA?[cheap,dear]:[dear,cheap],ans=cheapA?'A':'B';
  add('bulk',`A fictional store sells ${what} in two sizes. Size A is ${an(A.oz)} ${A.oz}-ounce ${box} for ${money(A.oz*A.c)}. Size B is ${an(B.oz)} ${B.oz}-ounce ${box} for ${money(B.oz*B.c)}. Which size costs less per ounce: A or B?`,ans,tag(`Fictional ${what}`,[['ounces',`${A.oz}`,`${B.oz}`],['price',money(A.oz*A.c),money(B.oz*B.c)]],['Size A','Size B']),`Size A: ${money(A.oz*A.c)} ÷ ${A.oz} = ${money(A.c)} an ounce. Size B: ${money(B.oz*B.c)} ÷ ${B.oz} = ${money(B.c)} an ounce. Size ${ans} costs less per ounce.`,[`size ${ans.toLowerCase()}`]);}));
 /* A deal against a percent off at two shops, buying 3. In a trap the shop that charges less in all has the HIGHER
    tag price; traps and plain pairs alternate, and the cheaper shop is Shop A in half of each. Each row is
    [deal shop's price, percent-off shop's price, percent off]. */
 const TRAP=[[270,240,20],[460,420,25],[330,300,10],[750,600,15],[390,350,20],[510,500,30],[480,500,40],[900,1000,45],[380,400,50],[640,700,40],[290,300,40],[1150,1200,40]];
 const PLAIN=[[240,270,20],[450,480,25],[300,320,30],[600,650,10],[360,380,15],[780,900,40],[500,450,40],[320,280,50],[700,600,45],[260,200,30],[950,800,25],[420,340,20]];
 const ITEMS=['notebook','phone charger','water bottle','sketchbook','pack of markers','pair of earbuds','lunch box','puzzle','bike light','scarf','mug','yo-yo'];
 const offer=(x,d)=>x.deal?`with a 'buy 2, get 1 free' deal`:`with ${d}% off each one`;
 const two=(pD,pP,d,cheapA)=>{const deal={deal:true,p:pD,cost:2*pD},cut={deal:false,p:pP,cost:3*pP*(100-d)/100},cheap=deal.cost<cut.cost?deal:cut,dear=cheap===deal?cut:deal,[A,B]=cheapA?[cheap,dear]:[dear,cheap];
  const say=x=>x.deal?`2 × ${money(x.p)} = ${money(x.cost)}`:`3 × ${money(x.p*(100-d)/100)} = ${money(x.cost)}`;
  return {A,B,ans:cheapA?'A':'B',head:`Two fictional shops sell the same ITEM. Shop A charges ${money(A.p)} each ${offer(A,d)}. Shop B charges ${money(B.p)} each ${offer(B,d)}. NAME buys 3.`,pic:tag('Two fictional shops',[['price each',money(A.p),money(B.p)],['offer',A.deal?'buy 2, get 1 free':`${d}% off`,B.deal?'buy 2, get 1 free':`${d}% off`],['how many','3','3']],['Shop A','Shop B']),why:`Shop A: ${say(A)}. Shop B: ${say(B)}.`};};
 TRAP.forEach((t,i)=>[t,PLAIN[i]].forEach(([pD,pP,d],h)=>{const c=two(pD,pP,d,(i+h)%2===0),n=who();
  add('compare',`${c.head.replace('ITEM',ITEMS[(i*2+h)%ITEMS.length]).replace('NAME',n)} Which shop charges less for the 3: A or B?`,c.ans,c.pic,`${c.why} Shop ${c.ans} charges less.`,[`shop ${c.ans.toLowerCase()}`]);}));
 /* How much less the cheaper offer charges, at double the prices above, so the numbers are new. */
 TRAP.forEach((t,i)=>{const [pD,pP,d]=i%2?PLAIN[i]:t,c=two(pD*2,pP*2,d,i%3===0),diff=Math.abs(c.A.cost-c.B.cost),n=who();
  add('compare',`${c.head.replace('ITEM',ITEMS[(i*5+3)%ITEMS.length]).replace('NAME',n)} How much less does the cheaper shop charge for the 3, in dollars?`,diff/100,c.pic,`${c.why} The difference is ${money(Math.max(c.A.cost,c.B.cost))} − ${money(Math.min(c.A.cost,c.B.cost))} = ${money(diff)}.`);});
}
};
