// Middle School topic (Grade 8, Jump$tart Financial Decision Making, grade 8 benchmark): inflation and purchasing
// power. Every answer is computed here in whole cents: a price grows by the stated inflation rate each year, each
// year on the year before's price; purchasing power is how many of an item a sum buys; and the real return is
// taken, as the topic says, as about the interest rate minus the inflation rate. Every price and rate is fictional.
const usd=c=>`$${(c/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const ITEM={15:'pizza',20:'phone case',25:'haircut',40:'board game',50:'video game',60:'backpack',75:'pair of jeans',80:'bike helmet',120:'pair of sneakers',200:'skateboard',250:'bicycle',300:'tablet'};
const SNACK=[['snack bar','snack bars'],['notebook','notebooks'],['bus ride','bus rides'],['juice box','juice boxes'],['comic book','comic books'],['sticker pack','sticker packs']];
export default {
id:'finance-m-inflation',subject:'finance',level:4,grade:8,standard:'Jump$tart Financial Decision Making, grade 8 benchmark',
title:'Inflation and purchasing power',
goal:'Work out how prices grow with inflation over one or two years, how much a sum of money can buy before and after prices rise, and whether savings keep up.',
points:20,
skills:{price:'Prices that rise',power:'What money buys',real:'Real returns'},
steps:[
 {skill:'price',say:'Inflation is a general rise in prices over time. With 4% inflation, something that costs $50.00 this year costs about $50.00 × 1.04 = $52.00 next year: the old price plus 4% of it.',eq:'50 × 1.04 = 52',pic:tab('A fictional price',[['this year','$50.00'],['inflation','4%'],['next year','$52.00']])},
 {skill:'price',say:'Inflation builds on itself: each year’s rise is figured on the year before’s price. At 10% a year, $100.00 becomes $110.00 after one year and $110.00 × 1.1 = $121.00 after two, not $120.00.',eq:'100 × 1.1 × 1.1 = 121',pic:tab('10% a year',[['start','$100.00'],['after 1 year','$110.00'],['after 2 years','$121.00']]),
  check:{prompt:'Try it: with fictional inflation of 5% a year, a $40.00 game costs how much after one year, in dollars?',answer:42,options:[42,45,40.05],hint:'5% of $40.00 is $2.00. Add it to the price.',pic:tab('A fictional game',[['price now','$40.00'],['inflation','5% a year'],['after 1 year','?']])}},
 {skill:'power',say:'Purchasing power is how much your money can buy. If a fictional snack rises from $2.00 to $2.50, then $10.00 buys 10 ÷ 2 = 5 snacks before the rise, but only 10 ÷ 2.5 = 4 after it.',pic:tab('$10.00 of snacks',[['at $2.00 each','5 snacks'],['at $2.50 each','4 snacks']])},
 {skill:'power',say:'Cash kept in a drawer loses purchasing power when prices rise. $100.00 is still $100.00, but after prices rise 25% it buys only what $80.00 bought before, because 100 ÷ 1.25 = 80.',eq:'100 ÷ 1.25 = 80',pic:tab('$100.00 in a drawer',[['prices rise','25%'],['buys what used to cost','$80.00']]),
  check:{prompt:'Try it: a fictional notebook costs $3.00 and then rises to $4.00. How many notebooks does $24.00 buy after the rise?',answer:6,options:[6,8,2],hint:'Divide $24.00 by the new price.',pic:tab('Fictional notebooks',[['old price','$3.00'],['new price','$4.00'],['money','$24.00'],['notebooks after','?']])}},
 {skill:'real',say:'Savings that earn interest can keep up with rising prices. The real return is about the interest rate minus the inflation rate: 5% interest while prices rise 3% is a real return of about 5 - 3 = 2% a year.',eq:'real return ≈ interest - inflation',pic:tab('Real return',[['interest','5%'],['inflation','3%'],['real return','about 2%']])},
 {skill:'real',say:'If inflation is higher than the interest rate, the real return is negative: the savings grow, but they buy less than before. 2% interest while prices rise 6% loses about 6 - 2 = 4% of purchasing power a year.',pic:tab('Falling behind',[['interest','2%'],['inflation','6%'],['purchasing power','about 4% less each year']]),
  check:{prompt:'Try it: a fictional savings account pays 7% interest a year while inflation is 4% a year. About what is the real return, in percent?',answer:3,options:[3,11,28],hint:'Take the inflation rate away from the interest rate.',pic:tab('A fictional account',[['interest','7%'],['inflation','4%'],['real return','?']])}}],
progression:{requires:['finance-m-simple-compound','math-m-percent-change'],operations:3,demand:'Grow a price by a percent once or twice, divide a sum by a price before and after a rise, and subtract one rate from another.'},
items(add){
 let i=0;
 /* A price after one year, and after two years of the same rate, kept to whole cents (the Try-it's $40.00 at 5% is left out). */
 for(const P of [20,40,60,80,120,250,15,300])for(const r of [2,5,10]){if(P===40&&r===5)continue;const c=P*100,y1=c*(100+r)/100,y2=c*(100+r)*(100+r)/10000,o=ITEM[P];
  add('price',`With fictional inflation of ${r}% a year, a ${o} that costs ${usd(c)} now will cost how much after one year, in dollars?`,y1/100,tab(`A fictional ${o}`,[['price now',usd(c)],['inflation',`${r}% a year`],['after 1 year','?']]),`${r}% of ${usd(c)} is ${usd(y1-c)}, so it will cost ${usd(c)} + ${usd(y1-c)} = ${usd(y1)}.`);
  if(Number.isInteger(y2)&&r!==2)add('price',`With fictional inflation of ${r}% a year for two years, a ${o} that costs ${usd(c)} now will cost how much after two years, in dollars?`,y2/100,tab(`A fictional ${o}`,[['price now',usd(c)],['inflation',`${r}% a year`],['after 2 years','?']]),`After one year ${usd(y1)}; ${r}% more on that gives ${usd(y2)} after two years.`);}
 /* The inflation rate from an old and a new price. */
 for(const [P,r] of [[50,6],[80,5],[25,8],[200,3],[60,15],[120,10],[40,12],[75,4]]){const c=P*100,y=c*(100+r)/100,o=ITEM[P];
  add('price',`A fictional ${o} cost ${usd(c)} last year and costs ${usd(y)} this year. By what percent did its price rise?`,r,tab(`A fictional ${o}`,[['last year',usd(c)],['this year',usd(y)],['rise','?']]),`It rose ${usd(y-c)}, and ${usd(y-c)} ÷ ${usd(c)} is ${r}%.`);}
 /* How many a sum buys before and after a rise (the Try-it's notebooks at $4.00 with $24.00 is left out). */
 [[2,2.5,10],[3,4,24],[4,5,40],[1.5,2,12],[5,6,60],[2.5,3,30],[6,8,48],[1.2,1.5,6],[8,10,80],[0.75,1,6],[3.5,4,28],[2,4,16]].forEach(([a,b,m],j)=>{const [one,many]=SNACK[j%SNACK.length];
  if(m===24&&b===4)return;
  const before=m*100/Math.round(a*100),after=m*100/Math.round(b*100),lead=`A fictional ${one} costs ${usd(a*100)}, and then its price rises to ${usd(b*100)}.`,pic=tab(`Fictional ${many}`,[['old price',usd(a*100)],['new price',usd(b*100)],['money',usd(m*100)]]);
  add('power',`${lead} How many ${many} does ${usd(m*100)} buy after the rise?`,after,pic,`${usd(m*100)} ÷ ${usd(b*100)} = ${after} ${after===1?one:many}.`);
  add('power',`${lead} How many fewer ${many} does ${usd(m*100)} buy after the rise than before it?`,before-after,pic,`Before: ${usd(m*100)} ÷ ${usd(a*100)} = ${before}. After: ${usd(m*100)} ÷ ${usd(b*100)} = ${after}. That is ${before-after} fewer.`);});
 /* What cash buys after prices rise, in old dollars. */
 for(const [m,r] of [[100,25],[200,25],[80,25],[60,100],[150,100],[160,60],[320,60],[500,25],[48,60],[1000,25]]){const old=m*100*100/(100+r);
  add('power',`${NM(i++)} keeps ${usd(m*100)} in cash in a drawer while fictional prices rise ${r}%. The cash now buys only as much as a smaller sum bought before the rise. What is that smaller sum, in dollars?`,old/100,tab('Cash in a drawer',[['cash',usd(m*100)],['prices rise',`${r}%`],['buys what used to cost','?']]),`Each dollar now buys 1 ÷ ${(100+r)/100} as much, so ${usd(m*100)} ÷ ${(100+r)/100} = ${usd(old)}.`);}
 /* About the real return, keeping up or falling behind, and which account does better. */
 for(const [a,f] of [[5,3],[6,2],[4,1],[7,4],[8,3],[3,1],[9,5],[2,6],[1,4],[3,7],[2,5],[4,9]]){const n=NM(i++),pic=tab(`${n}’s fictional account`,[['interest',`${a}% a year`],['inflation',`${f}% a year`]]);
  if(a>f)add('real',`${n}’s fictional savings account pays ${a}% interest a year while inflation is ${f}% a year. About what is the real return, in percent?`,a-f,pic,`About ${a} - ${f} = ${a-f}% a year.`);
  else add('real',`${n}’s fictional savings account pays ${a}% interest a year while inflation is ${f}% a year. About what percent of purchasing power do the savings lose each year?`,f-a,pic,`Prices rise faster than the savings grow: about ${f} - ${a} = ${f-a}% a year.`);
  add('real',`${n}’s fictional savings account pays ${a}% interest a year while prices rise ${f}% a year. Do the savings keep up with prices: yes or no?`,a>f?'yes':'no',pic,a>f?`${a}% is more than ${f}%, so the savings grow faster than prices.`:`${a}% is less than ${f}%, so prices grow faster than the savings.`);}
 [[[5,2],[7,6]],[[3,1],[6,5]],[[4,4],[9,6]],[[8,6],[5,1]],[[2,1],[10,8]],[[6,3],[4,2]],[[9,8],[3,1]],[[7,2],[8,5]]].forEach(([[a1,f1],[a2,f2]],j)=>{const r1=a1-f1,r2=a2-f2,big=r1>r2?'A':'B';
  add('real',`In fictional country A, an account pays ${a1}% interest while prices rise ${f1}% a year. In fictional country B, an account pays ${a2}% interest while prices rise ${f2}% a year. Which account has the higher real return: A or B?`,big,{t:'setups',title:'Two fictional accounts',head:'',rows:[['interest',`${a1}%`,`${a2}%`],['inflation',`${f1}%`,`${f2}%`]],cols:['Country A','Country B']},`Real returns: A about ${a1} - ${f1} = ${r1}%, B about ${a2} - ${f2} = ${r2}%, so ${big} is higher.`,[`account ${big.toLowerCase()}`,`country ${big.toLowerCase()}`]);});
}
};
const NM=k=>['Ana','Bo','Cal','Dina','Eli','Fay','Gus','Hana','Ivan','Jade','Kai','Luz'][k%12];
