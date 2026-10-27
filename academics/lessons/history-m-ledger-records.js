// Middle School topic (Grade 7, C3 D2.His.10.6-8): reading a period record and its limits. Every answer is
// computed from the fictional record in its own question: totals and differences add or subtract the listed
// counts, a rate is the change divided by the years between two entries, and a record can answer a question only
// if it has a column for that kind of information and an entry for that year. Every town, port and record is
// fictional; nothing here is a fact about the past.
const R=[
 {who:'the fictional port of Saltmere',what:'bales of wool shipped',unit:'bales',col:'bales shipped',rows:[[1620,340],[1625,410],[1630,380],[1635,520],[1640,610]],has:['the year','the number of bales shipped'],lacks:['who bought the wool','the price of a bale','wool sent overland']},
 {who:'the fictional mill at Brannock',what:'sacks of flour ground',unit:'sacks',col:'sacks ground',rows:[[1702,1200],[1706,1440],[1710,1320],[1714,1680],[1718,1800]],has:['the year','the number of sacks ground'],lacks:['who worked at the mill','the weather that year','flour sold in other towns']},
 {who:'the fictional parish of Elmstead',what:'baptisms recorded',unit:'baptisms',col:'baptisms',rows:[[1550,48],[1560,62],[1570,55],[1580,71],[1590,90]],has:['the year','the number of baptisms'],lacks:['families who left the parish','children born in other parishes','the names of the parents']},
 {who:'the fictional toll bridge at Corran',what:'carts that paid the toll',unit:'carts',col:'carts tolled',rows:[[1801,2150],[1803,2390],[1805,2270],[1807,2630],[1809,2810]],has:['the year','the number of carts that paid'],lacks:['carts that crossed for free','what the carts carried','people who crossed on foot']},
 {who:'the fictional guild of Varrow weavers',what:'new members admitted',unit:'members',col:'new members',rows:[[1460,14],[1465,21],[1470,17],[1475,26],[1480,32]],has:['the year','the number of new members'],lacks:['members who left the guild','weavers outside the guild','how much the members earned']}];
const said=r=>`A record kept by ${r.who} lists ${r.what}: ${r.rows.map(([y,n])=>`${y}, ${n.toLocaleString('en-US')}`).join('; ')}.`;
const pic=(r,hint)=>({t:'setups',title:`Record of ${r.who.replace(/^the /,'')}`,head:'Year',rows:r.rows.map(([y,n])=>[`${y}`,n.toLocaleString('en-US')]),cols:[r.col],...(hint?{hint:true}:{})});
const fmt=n=>n.toLocaleString('en-US');
export default {
id:'history-m-ledger-records',subject:'history',level:4,grade:7,standard:'C3 D2.His.10.6-8',
title:'Reading a record and its limits',
goal:'Total and compare the entries in a period record, work out a rate of change between two entries, and say what the record can and cannot show.',
points:20,
skills:{totals:'Totals and differences',rate:'Rates of change',limits:'What a record can show'},
steps:[
 {skill:'totals',say:'Historians often work from records kept at the time: a port’s shipping book, a mill’s accounts, a parish register. Each row is one entry. This fictional record from Saltmere lists the bales of wool shipped in five years.',pic:pic(R[0])},
 {skill:'totals',say:'Add entries for a total and subtract them for a change. From 1620 to 1625 the shipments rose from 340 to 410 bales, an increase of 410 - 340 = 70. Across all five years Saltmere shipped 340 + 410 + 380 + 520 + 610 = 2,260 bales.',eq:'410 - 340 = 70',pic:pic(R[0]),
  check:{prompt:'Try it: a record kept by the fictional mill at Brannock lists sacks of flour ground: 1702, 1,200; 1706, 1,440; 1710, 1,320. By how many sacks did the amount fall from 1706 to 1710?',answer:120,options:[120,240,2760],hint:'Subtract the 1710 entry from the 1706 entry.',pic:{t:'setups',title:'Record of fictional mill at Brannock',head:'Year',rows:[['1702','1,200'],['1706','1,440'],['1710','1,320']],cols:['sacks ground']}}},
 {skill:'rate',say:'A rate tells how fast something changed: the change divided by the years between the entries. From 1620 to 1640 Saltmere’s shipments grew from 340 to 610 bales, a change of 270 in 20 years, which is 270 ÷ 20 = 13.5 bales a year on average.',eq:'270 ÷ 20 = 13.5',pic:pic(R[0])},
 {skill:'rate',say:'An average rate hides the ups and downs: Saltmere’s shipments fell between 1625 and 1630 before rising again. Compare rates over different stretches to see where change was fastest. From 1630 to 1635 the rise was 140 bales in 5 years, 140 ÷ 5 = 28 a year.',eq:'140 ÷ 5 = 28',pic:pic(R[0]),
  check:{prompt:'Try it: a record kept by the fictional parish of Elmstead lists baptisms recorded: 1550, 48; 1590, 90. On average, by how many baptisms a year did the count rise between 1550 and 1590?',answer:1.05,options:[1.05,42,2.1],hint:'The change is 90 - 48 = 42, over 40 years.',pic:{t:'setups',title:'Record of fictional parish of Elmstead',head:'Year',rows:[['1550','48'],['1590','90']],cols:['baptisms']}}},
 {skill:'limits',say:'A record can only answer questions it was made to answer. It needs a column for that kind of information and an entry for that year. Saltmere’s book lists the year and the bales shipped, so it cannot say who bought the wool, and it has no entry for 1627.',pic:{t:'setups',title:'What Saltmere’s book holds',head:'',rows:[['years listed','1620, 1625, 1630, 1635, 1640'],['columns','year, bales shipped']],cols:['Record']}},
 {skill:'limits',say:'Silence in a record is not proof that nothing happened. A toll bridge’s book counts the carts that paid, so carts that crossed for free and people on foot never appear in it, even if there were many of them.',pic:{t:'setups',title:'A fictional toll book',head:'',rows:[['counted','carts that paid'],['not counted','free carts, people on foot']],cols:['Record']},
  check:{prompt:'Try it: a record kept by the fictional toll bridge at Corran lists carts that paid the toll: 1801, 2,150; 1803, 2,390. It has columns only for the year and the number of carts that paid. Can it show how many people crossed on foot in 1801: yes or no?',answer:'no',options:['yes','no'],hint:'Does the record have a column for people on foot?',pic:{t:'setups',title:'Record of fictional toll bridge at Corran',head:'Year',rows:[['1801','2,150'],['1803','2,390']],cols:['carts tolled']}}}],
progression:{requires:['history-m-bce-ce','math-m-percent-change'],operations:2,demand:'Add or subtract entries, divide a change by the years between entries, and match a question against the record’s columns and years.'},
items(add){
 R.forEach((r,j)=>{const S=said(r),P=pic(r),ys=r.rows.map(x=>x[0]),ns=r.rows.map(x=>x[1]);
  /* Totals, increases and decreases, and the largest entry. */
  add('totals',`${S} What is the total of all five entries, in ${r.unit}?`,ns.reduce((a,b)=>a+b,0),pic(r,true),`${ns.map(fmt).join(' + ')} = ${fmt(ns.reduce((a,b)=>a+b,0))}.`);
  for(let k=0;k<4;k++){const [y1,a]=r.rows[k],[y2,b]=r.rows[k+1];if(j===1&&k===1)continue;
   add('totals',`${S} By how many ${r.unit} did the ${b>a?'amount rise':'amount fall'} from ${y1} to ${y2}?`,Math.abs(b-a),P,`${b>a?`${fmt(b)} - ${fmt(a)}`:`${fmt(a)} - ${fmt(b)}`} = ${fmt(Math.abs(b-a))}.`);}
  const hi=r.rows.reduce((m,x)=>x[1]>m[1]?x:m),lo=r.rows.reduce((m,x)=>x[1]<m[1]?x:m);
  add('totals',`${S} What is the difference between the largest and the smallest entry, in ${r.unit}?`,hi[1]-lo[1],pic(r,true),`The largest is ${fmt(hi[1])} (${hi[0]}) and the smallest is ${fmt(lo[1])} (${lo[0]}): ${fmt(hi[1]-lo[1])}.`);
  add('totals',`${S} In which listed year is the entry largest?`,hi[0],P,`The largest entry is ${fmt(hi[1])}, in ${hi[0]}.`);
  /* Average rates between two entries, kept to at most two decimal places. */
  [[0,4],[0,2],[1,3],[2,4],[0,1],[3,4]].forEach(([p,q])=>{const [y1,a]=r.rows[p],[y2,b]=r.rows[q],rate=(b-a)/(y2-y1);if(Math.abs(rate*100-Math.round(rate*100))>1e-9||j===2&&p===0&&q===4)return;
   add('rate',`${S} On average, by how many ${r.unit} a year did the entries ${b>a?'rise':'fall'} between ${y1} and ${y2}?`,Math.abs(rate),P,`The change is ${fmt(Math.abs(b-a))} over ${y2-y1} years: ${fmt(Math.abs(b-a))} ÷ ${y2-y1} = ${Math.abs(rate)}.`);});
  /* The stretch with the fastest change. */
  const steps=[0,1,2,3].map(k=>(r.rows[k+1][1]-r.rows[k][1])/(r.rows[k+1][0]-r.rows[k][0])),best=steps.indexOf(Math.max(...steps));
  add('rate',`${S} Between which two listed years did the entries rise fastest? Give the earlier year.`,r.rows[best][0],P,`The yearly changes are ${steps.map((s,k)=>`${r.rows[k][0]}–${r.rows[k+1][0]}: ${s>0?'+':''}${+s.toFixed(2)}`).join(', ')}, so the fastest rise starts in ${r.rows[best][0]}.`);
  /* Percent change across the whole record, where it is a whole number. */
  const pc=(ns[4]-ns[0])*100/ns[0];if(Number.isInteger(pc))add('rate',`${S} By what percent did the entries grow from ${ys[0]} to ${ys[4]}?`,pc,P,`The growth is ${fmt(ns[4]-ns[0])}, and ${fmt(ns[4]-ns[0])} ÷ ${fmt(ns[0])} is ${pc}%.`);
  /* What the record can and cannot show: a column and a year are both needed. */
  const lead=`${S} It has columns only for ${r.has[0]} and ${r.has[1]}.`;
  const asks=[[r.has[1],ys[1],true],[r.has[1],ys[3],true],[r.has[1],ys[0]+1,false],[r.has[1],ys[2],true],[r.lacks[0],ys[1],false],[r.lacks[1],ys[2],false],[r.lacks[2],ys[4],false],[r.has[1],ys[4],true]];
  asks.forEach(([what,y,ok])=>add('limits',`${lead} Can it show ${what} in ${y}: yes or no?`,ok?'yes':'no',P,ok?`It has a column for ${what} and an entry for ${y}.`:r.has.includes(what)?`It has that column, but no entry for ${y}.`:`It has no column for ${what}, so it cannot show it in any year.`));});
}
};
