// Middle School topic (Grade 8, C3 D2.His.14.6-8 with D2.Eco.1.6-8): real and nominal prices. Every answer is
// computed from the fictional price index in its own question: the index is 100 in its base year, a price from
// year A in year B's money is the price × index B ÷ index A, a percent change in the index is the change ÷ the
// earlier index × 100, and a wage buys more in the year whose real value is higher. The country, its money and every
// figure are fictional.
const IDX={1900:25,1910:30,1920:50,1930:40,1940:60,1950:100,1960:125,1970:160,1980:250};
const YRS=Object.keys(IDX).map(Number);
const r2=x=>Math.round(x*100)/100;
const said='In fictional Vellmark, a price index set to 100 in 1950 was '+YRS.map(y=>`${IDX[y]} in ${y}`).join(', ')+'.';
const pic=(rows,hint)=>({t:'setups',title:'Fictional Vellmark price index (1950 = 100)',head:'Year',rows:rows||YRS.map(y=>[`${y}`,`${IDX[y]}`]),cols:['Index'],...(hint?{hint:true}:{})});
const ITEMS=[['a loaf of bread',0.2],['a bus ride',0.1],['a pair of boots',4],['a bicycle',20],['a newspaper',0.05],['a train ticket',2],['a radio',30],['a winter coat',12]];
const fmtC=x=>`${+x.toFixed(2)} crowns`;
export default {
id:'history-m-real-prices',subject:'history',level:4,grade:8,standard:'C3 D2.His.14.6-8, D2.Eco.1.6-8',
title:'Real and nominal prices',
goal:'Read a price index, turn a past price into another year’s money, and compare prices and wages across time in real terms.',
points:20,
skills:{index:'Reading a price index',convert:'Converting prices',compare:'Comparing in real terms'},
steps:[
 {skill:'index',say:'Prices rise over time, so a price from long ago cannot be compared straight with one today. A price index tracks the cost of a typical basket of goods. It is set to 100 in a base year: in fictional Vellmark, 1950 = 100, and the index was 50 in 1920, so things cost half as much then.',pic:pic()},
 {skill:'index',say:'The percent change in the index measures inflation between two years. From 1920 to 1950 Vellmark’s index went from 50 to 100, a rise of 100 - 50 = 50, which is 50 ÷ 50 × 100 = 100%: prices doubled. From 1920 to 1930 the index fell, and so did prices.',eq:'50 ÷ 50 × 100 = 100',pic:pic(),
  check:{prompt:'Try it: in fictional Vellmark, a price index set to 100 in 1950 was 100 in 1950 and 125 in 1960. By what percent did prices rise from 1950 to 1960?',answer:25,options:[25,125,20],hint:'The index rose by 25 from 100.',pic:pic([['1950','100'],['1960','125']])}},
 {skill:'convert',say:'A nominal price is the price as written at the time. To turn it into another year’s money, multiply by the later index and divide by the earlier one. Bread at 0.2 crowns in 1920 is 0.2 × 100 ÷ 50 = 0.4 crowns in 1950 money.',eq:'0.2 × 100 ÷ 50 = 0.4',pic:pic([['1920','50'],['1950','100']])},
 {skill:'convert',say:'The same rule works in either direction. A 30-crown radio in 1970 is 30 × 100 ÷ 160 = 18.75 crowns in 1950 money. Prices given in one year’s money are called real prices for that year.',eq:'30 × 100 ÷ 160 = 18.75',pic:pic([['1950','100'],['1970','160']]),
  check:{prompt:'Try it: in fictional Vellmark, a price index set to 100 in 1950 was 25 in 1900. A pair of boots cost 4 crowns in 1900. What is that in 1950 money, in crowns?',answer:16,options:[16,1,100],hint:'Multiply 4 by 100, then divide by 25.',pic:pic([['1900','25'],['1950','100']])}},
 {skill:'compare',say:'To compare prices from two years, put both into the same year’s money. A bicycle cost 20 crowns in 1940 (index 60) and 50 crowns in 1970 (index 160). In 1950 money that is about 33.33 and 31.25 crowns, so the bicycle was really a little cheaper in 1970, though its price tag was higher.',pic:pic([['1940','60'],['1970','160']])},
 {skill:'compare',say:'Wages work the same way. A worker paid 6 crowns a week in 1930 (index 40) earned 6 × 100 ÷ 40 = 15 crowns in 1950 money; one paid 30 crowns in 1960 (index 125) earned 30 × 100 ÷ 125 = 24. The 1960 wage really bought more.',eq:'30 × 100 ÷ 125 = 24',pic:pic([['1930','40'],['1960','125']]),
  check:{prompt:'Try it: in fictional Vellmark, a price index set to 100 in 1950 was 50 in 1920 and 250 in 1980. A weekly wage was 10 crowns in 1920 and 40 crowns in 1980. In which year did the wage buy more: 1920 or 1980?',answer:1920,options:[1920,1980],hint:'Turn both into 1950 money: 10 × 100 ÷ 50 and 40 × 100 ÷ 250.',pic:pic([['1920','50'],['1980','250']])}}],
progression:{requires:['history-m-ledger-records','finance-m-inflation'],operations:3,demand:'Find a percent change in an index, multiply a price by one index and divide by another, and compare two prices once both are in the same year’s money.'},
items(add){
 /* Index changes (the Try-it's 1950 to 1960 is left out). */
 for(let i=0;i<YRS.length;i++)for(const s of [1,2,3]){const a=YRS[i],b=YRS[i+s];if(!b||(a===1950&&b===1960))continue;const d=IDX[b]-IDX[a],pc=Math.abs(d)*100/IDX[a];if(d===0||!Number.isInteger(pc*100))continue;
  add('index',`${said} By what percent did prices ${d>0?'rise':'fall'} from ${a} to ${b}?`,r2(pc),pic(),`The index went from ${IDX[a]} to ${IDX[b]}, a change of ${Math.abs(d)}; ${Math.abs(d)} ÷ ${IDX[a]} × 100 = ${r2(pc)}%.`);}
 for(const [a,b] of [[1920,1980],[1900,1950],[1910,1940],[1930,1970],[1900,1980],[1940,1960],[1920,1960],[1910,1970]]){const k=IDX[b]/IDX[a];if(!Number.isInteger(k*100))continue;
  add('index',`${said} How many times as high were prices in ${b} as in ${a}?`,r2(k),pic(),`${IDX[b]} ÷ ${IDX[a]} = ${r2(k)}.`);}
 add('index',`${said} Between which two listed years did prices fall? Give the earlier year.`,1920,pic(),'The index dropped from 50 in 1920 to 40 in 1930, the only fall.');
 add('index',`${said} In which listed year did prices first reach at least double their 1900 level?`,1920,pic(),'Double 25 is 50, first reached in 1920.');
 /* Converting a price into another year's money (the Try-it's 1900 boots is left out). */
 ITEMS.forEach(([item,base],k)=>{[[1900,1950],[1920,1950],[1940,1980],[1960,1950],[1910,1970],[1930,1960]].forEach(([a,b],z)=>{const f=[1,2,3][(k+z)%3],p=r2(f*base*IDX[a]/25),v=r2(f*base*IDX[b]/25);if(item==='a pair of boots'&&a===1900&&b===1950)return;
  add('convert',`${said} ${item[0].toUpperCase()+item.slice(1)} cost ${fmtC(p)} in ${a}. What is that in ${b} money, in crowns?`,v,pic([[`${a}`,`${IDX[a]}`],[`${b}`,`${IDX[b]}`]]),`${+p.toFixed(2)} × ${IDX[b]} ÷ ${IDX[a]} = ${v} crowns.`);});});
 /* Comparing two prices or wages in real terms (the Try-it's 1920 and 1980 wages are left out). */
 const W=[[6,1930,30,1960],[10,1920,40,1980],[5,1910,12,1940],[8,1940,20,1970],[3,1900,15,1950],[25,1960,32,1970],[12,1930,40,1980],[4,1910,9,1930],[18,1940,40,1960],[2,1900,7,1920],[20,1950,30,1970],[9,1930,10,1940],[15,1960,20,1980],[7,1920,6,1930],[11,1940,24,1970],[3,1910,4,1920],[45,1970,50,1980],[16,1950,18,1960]];
 W.forEach(([w1,y1,w2,y2],k)=>{if(y1===1920&&y2===1980)return;const v1=w1*100/IDX[y1],v2=w2*100/IDX[y2];if(Math.abs(v1-v2)<1e-9)return;const win=v1>v2?y1:y2;
  add('compare',`${said} A weekly wage was ${w1} crowns in ${y1} and ${w2} crowns in ${y2}. In which year did the wage buy more: ${y1} or ${y2}?`,win,pic([[`${y1}`,`${IDX[y1]}`],[`${y2}`,`${IDX[y2]}`]]),`In 1950 money: ${w1} × 100 ÷ ${IDX[y1]} = ${r2(v1)} and ${w2} × 100 ÷ ${IDX[y2]} = ${r2(v2)}, so ${win}.`);
  if(Number.isInteger(v1*100)&&Number.isInteger(v2*100))add('compare',`${said} A weekly wage was ${w1} crowns in ${y1} and ${w2} crowns in ${y2}. In 1950 money, how many crowns more did the better-off worker earn each week?`,r2(Math.abs(v1-v2)),pic([[`${y1}`,`${IDX[y1]}`],[`${y2}`,`${IDX[y2]}`]]),`${r2(v1)} and ${r2(v2)} in 1950 money: a difference of ${r2(Math.abs(v1-v2))}.`);});
 const PR=[['a bicycle',20,1940,50,1970],['a winter coat',3,1910,10,1950],['a radio',30,1950,48,1970],['a train ticket',1,1920,4,1980],['a pair of boots',2,1900,9,1940],['a newspaper',0.1,1940,0.25,1960],['a loaf of bread',0.1,1910,0.3,1960],['a bus ride',0.05,1920,0.04,1930],['a bicycle',8,1930,60,1980],['a radio',12,1940,15,1950]];
 PR.forEach(([item,p1,y1,p2,y2])=>{const v1=p1*100/IDX[y1],v2=p2*100/IDX[y2];if(Math.abs(v1-v2)<1e-9)return;
  add('compare',`${said} ${item[0].toUpperCase()+item.slice(1)} cost ${fmtC(p1)} in ${y1} and ${fmtC(p2)} in ${y2}. In real terms, did its price rise or fall?`,v2>v1?'rise':'fall',pic([[`${y1}`,`${IDX[y1]}`],[`${y2}`,`${IDX[y2]}`]]),`In 1950 money: ${r2(v1)} then ${r2(v2)} crowns, so the real price ${v2>v1?'rose':'fell'}.`,[v2>v1?'rose':'fell']);});
}
};
