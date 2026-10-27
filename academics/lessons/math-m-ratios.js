// Middle School topic (Grade 6, CCSS 6.RP.A.1-3): ratios and unit rates. Every answer is computed from
// the numbers in its own question: a missing term of an equivalent ratio is the base term times the
// number of batches, a unit rate is a total divided by its count, and "the better rate" compares the
// two unit rates. Nothing here is a fact asserted by a model. All shops, mixes and runners are fictional.
const PAIRS=[[2,3],[3,4],[2,5],[3,5],[4,5],[3,7],[5,6],[4,7],[2,7],[5,8]];
const MIX=[
 {a:'cups of flour',b:'cups of milk',la:'flour',lb:'milk',say:(a,b)=>`A fictional pancake recipe uses ${a} cups of flour for every ${b} cups of milk.`},
 {a:'red tiles',b:'blue tiles',la:'red',lb:'blue',say:(a,b)=>`A mosaic pattern has ${a} red tiles for every ${b} blue tiles.`},
 {a:'scoops of oats',b:'scoops of raisins',la:'oats',lb:'raisins',say:(a,b)=>`A fictional trail mix uses ${a} scoops of oats for every ${b} scoops of raisins.`},
 {a:'cans of blue paint',b:'cans of yellow paint',la:'blue',lb:'yellow',say:(a,b)=>`A green paint is mixed from ${a} cans of blue paint for every ${b} cans of yellow paint.`},
 {a:'teachers',b:'students',la:'teachers',lb:'students',say:(a,b)=>`On a fictional school trip there are ${a} teachers for every ${b} students.`}];
const money=x=>`$${x.toFixed(2)}`;
const tapePic=(m,a,b)=>({t:'tape',rows:[{label:m.la,n:a},{label:m.lb,n:b}],groups:1});
export default {
id:'math-m-ratios',subject:'math',level:4,grade:6,standard:'CCSS 6.RP.A.1, 6.RP.A.2, 6.RP.A.3a-b',
title:'Ratios and unit rates',
goal:'Use a ratio to find a missing amount, work out a unit rate, and compare two rates by their unit rates.',
points:20,
skills:{equiv:'Equivalent ratios',rate:'Unit rate',compare:'The better rate'},
steps:[
 {skill:'equiv',say:'A ratio compares two amounts. In a fictional paint mix there are 2 cans of blue for every 3 cans of yellow: the ratio of blue to yellow is 2 to 3, written 2:3.',eq:'blue : yellow = 2 : 3',pic:{t:'theater',scene:'ratios',part:'batch'}},
 {skill:'equiv',say:'Equivalent ratios repeat the same mix. Four batches use 4 × 2 = 8 cans of blue and 4 × 3 = 12 cans of yellow, so 8:12 is the same colour as 2:3.',eq:'2 : 3 = 8 : 12',pic:{t:'theater',scene:'ratios',part:'batches'},
  check:{prompt:'Try it: a fictional lemonade uses 3 lemons for every 5 cups of water. How many cups of water go with 12 lemons?',answer:20,options:[20,14,60,15],hint:'12 lemons is 4 batches of 3 lemons, and each batch needs 5 cups of water.',pic:{t:'tape',rows:[{label:'lemons',n:3},{label:'water',n:5}],groups:1}}},
 {skill:'rate',say:'A unit rate says how much there is for one: per hour, per item, per kilometre. Divide the first amount by the second.',eq:'45 km ÷ 3 hours',pic:{t:'setups',title:'A steady bike ride',head:'Amount',rows:[['kilometres','45','?'],['hours','3','1']],cols:['The ride','One hour']}},
 {skill:'rate',say:'A cyclist rides 45 km in 3 hours at a steady speed. 45 ÷ 3 = 15, so the unit rate is 15 km per hour: 15 km in each of the 3 hours.',eq:'45 ÷ 3 = 15 km per hour',pic:{t:'setups',title:'A steady bike ride',head:'Amount',rows:[['kilometres','45','15'],['hours','3','1']],cols:['The ride','One hour']},
  check:{prompt:'Try it: six fictional notebooks cost $9.00 in all, each the same price. What does one notebook cost, in dollars?',answer:1.5,options:[1.5,54,3,15],hint:'Divide the total cost by the number of notebooks.',pic:{t:'setups',title:'Six notebooks',head:'Amount',rows:[['cost','$9.00','?'],['notebooks','6','1']],cols:['All six','One']}}},
 {skill:'compare',say:'To compare two rates, find both unit rates first. Shop A sells 4 batteries for $6.00 and Shop B sells 6 for $8.40. A charges $1.50 a battery and B charges $1.40, so B is the better buy even though its total is bigger.',eq:'6 ÷ 4 = 1.50,  8.40 ÷ 6 = 1.40',pic:{t:'setups',title:'Two fictional shops',head:'Batteries',rows:[['total cost','$6.00','$8.40'],['batteries','4','6'],['cost of one','$1.50','$1.40']],cols:['Shop A','Shop B']}},
 {skill:'compare',say:'The bigger total is not always the better deal or the faster speed. Compare what one item costs, or how far in one hour, never the totals.',pic:{t:'setups',title:'Two fictional runners',head:'Amount',rows:[['kilometres','12','15'],['hours','2','3']],cols:['Runner P','Runner Q']},
  check:{prompt:'Try it: Runner P runs 12 km in 2 hours. Runner Q runs 15 km in 3 hours. Both keep a steady speed. Who is faster: P or Q?',answer:'P',options:['P','Q'],hint:'Find each runner’s kilometres in one hour.',pic:{t:'setups',title:'Two fictional runners',head:'Amount',rows:[['kilometres','12','15'],['hours','2','3']],cols:['Runner P','Runner Q']}}}],
progression:{requires:['math-e-divide-remainder','math-e-times-ten'],operations:2,demand:'Scale a ratio by a whole number of batches, divide a total by its count to get a unit rate, and compare two unit rates instead of two totals.'},
items(add){
 /* Equivalent ratios: k batches of a:b, asked from either side. */
 PAIRS.forEach(([a,b],i)=>{for(let k=2;k<=7;k++){const m=MIX[(i+k)%MIX.length],pic=tapePic(m,a,b);
  add('equiv',`${m.say(a,b)} How many ${m.b} go with ${a*k} ${m.a}?`,b*k,pic,`${a*k} ${m.a} is ${k} batches of ${a}, so it takes ${k} × ${b} = ${b*k} ${m.b}.`);
  add('equiv',`${m.say(a,b)} How many ${m.a} go with ${b*k} ${m.b}?`,a*k,pic,`${b*k} ${m.b} is ${k} batches of ${b}, so it takes ${k} × ${a} = ${a*k} ${m.a}.`);}});
 /* Unit rates: steady speeds, equal prices and steady paces, each total built from the rate. */
 for(const h of [2,3,4,5,6])for(const r of [4,7,9,12,15,18]){const d=r*h;
  add('rate',`A fictional cyclist rides ${d} km in ${h} hours at a steady speed. How many kilometres does she ride in one hour?`,r,{t:'setups',title:'A steady ride',head:'Amount',rows:[['kilometres',`${d}`,'?'],['hours',`${h}`,'1']],cols:['The ride','One hour']},`${d} ÷ ${h} = ${r} km in each hour.`);}
 const ITEMS_=['notebooks','pencil cases','water bottles','seed packets','tennis balls','paint brushes'];
 [0.25,0.5,0.75,1.25,1.5,2.25,2.5,3.75].forEach((pr,i)=>{for(const n of [3,4,6,8]){const thing=ITEMS_[(i+n)%ITEMS_.length],total=pr*n;
  add('rate',`${n} fictional ${thing} cost ${money(total)} in all, each the same price. What does one cost, in dollars?`,pr,{t:'setups',title:`${n} ${thing}`,head:'Amount',rows:[['cost',money(total),'?'],[thing,`${n}`,'1']],cols:[`All ${n}`,'One']},`${money(total)} ÷ ${n} = ${money(pr)} each.`);}});
 for(const m of [2,3,4,5])for(const w of [18,25,32,40,45]){
  add('rate',`A fictional typist types ${w*m} words in ${m} minutes at a steady pace. How many words does he type in one minute?`,w,{t:'setups',title:'A steady typist',head:'Amount',rows:[['words',`${w*m}`,'?'],['minutes',`${m}`,'1']],cols:['All of it','One minute']},`${w*m} ÷ ${m} = ${w} words a minute.`);}
 /* Better rate: two shops (lower price for one) or two runners (more km in one hour). Unit rates never tie,
    and in about half the pairs the better deal has the bigger total, so totals alone do not answer it. */
 const shops=[];for(const [nA,uA] of [[4,1.5],[5,1.2],[3,2.5],[6,0.75],[8,0.5],[2,3.25],[10,0.4],[4,2.25],[5,1.8],[3,1.75]])for(const [nB,uB] of [[6,1.4],[4,1.6],[5,2.2],[8,0.7],[3,0.6],[10,0.35],[2,3.5],[6,2.1],[12,0.45],[4,1.25]])if(uA!==uB)shops.push([nA,uA,nB,uB]);
 shops.filter((_,i)=>i%2===0).slice(0,40).forEach(([nA,uA,nB,uB],i)=>{const thing=['batteries','markers','apples','stickers','candles'][i%5],tA=nA*uA,tB=nB*uB,best=uA<uB?'A':'B';
  add('compare',`Shop A sells ${nA} ${thing} for ${money(tA)}. Shop B sells ${nB} ${thing} for ${money(tB)}. Which shop charges less for one: A or B?`,best,{t:'setups',title:'Two fictional shops',head:thing,rows:[['total cost',money(tA),money(tB)],[thing,`${nA}`,`${nB}`]],cols:['Shop A','Shop B']},`One costs ${money(uA)} at A and ${money(uB)} at B, so ${best} charges less for one.`,[`shop ${best.toLowerCase()}`]);});
 const runs=[];for(const [hP,rP] of [[2,6],[3,5],[4,7],[2,9],[5,4]])for(const [hQ,rQ] of [[3,5],[2,8],[4,6],[3,7],[6,3],[5,9]])if(rP!==rQ)runs.push([hP,rP,hQ,rQ]);
 runs.forEach(([hP,rP,hQ,rQ])=>{const dP=hP*rP,dQ=hQ*rQ,best=rP>rQ?'P':'Q';
  add('compare',`Runner P runs ${dP} km in ${hP} hours. Runner Q runs ${dQ} km in ${hQ} hours. Both keep a steady speed. Who is faster: P or Q?`,best,{t:'setups',title:'Two fictional runners',head:'Amount',rows:[['kilometres',`${dP}`,`${dQ}`],['hours',`${hP}`,`${hQ}`]],cols:['Runner P','Runner Q']},`P runs ${rP} km an hour and Q runs ${rQ}, so ${best} is faster.`,[`runner ${best.toLowerCase()}`]);});
}
};
