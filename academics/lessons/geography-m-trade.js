// Middle School topic (Grade 7, C3 D2.Geo.11.6-8 and D2.Eco.15.6-8): trade between places. Every answer is
// computed from the fictional figures in its own question: the trade balance = exports - imports (a surplus when
// exports are bigger, a deficit when imports are), a partner's share = its value ÷ the total × 100, and a change
// over time is the later value minus the earlier one (as a percent, ÷ the earlier value × 100). Every country,
// partner and figure is fictional, in millions of dollars.
const fmt=n=>n.toLocaleString('en-US');
const tab=(title,rows,cols=['Million $'])=>({t:'setups',title,head:'',rows,cols});
const LAND=['Aldmere','Bresca','Corvania','Dellin','Estova','Farrow','Galdris','Hollund','Istra','Jorvik Isles'];
const PARTNER=['Kessel','Lorn','Mabry','Norvale'];
export default {
id:'geography-m-trade',subject:'geography',level:4,grade:7,standard:'C3 D2.Geo.11.6-8, D2.Eco.15.6-8',
title:'Trade between countries',
goal:'Work out a country’s trade balance, the share of its exports that go to each partner, and how its trade changed over time.',
points:20,
skills:{balance:'Trade balance',share:'Shares of trade',change:'Trade over time'},
steps:[
 {skill:'balance',say:'Countries trade because places have different resources, skills and climates. Exports are goods and services sold to other countries; imports are those bought from them. A country sells what it makes well and buys what it lacks.',pic:tab('A fictional country in one year',[['exports','grain, timber'],['imports','oil, machines']],['Goods'])},
 {skill:'balance',say:'The trade balance is exports minus imports. Exports of 850 million dollars and imports of 620 million give a surplus of 850 - 620 = 230 million. When imports are bigger, the balance is a deficit.',eq:'850 - 620 = 230',pic:tab('Fictional Aldmere',[['exports','850'],['imports','620'],['balance','230 surplus']]),
  check:{prompt:'Try it: the fictional country of Bresca exported 470 million dollars of goods and imported 655 million dollars in one year. How big was its trade deficit, in millions of dollars?',answer:185,options:[185,1125,655],hint:'Take the exports from the imports.',pic:tab('Fictional Bresca',[['exports','470'],['imports','655'],['deficit','?']])}},
 {skill:'share',say:'A partner’s share of exports is its value ÷ the total exports × 100. If 300 of a country’s 1,200 million dollars of exports go to the fictional partner Kessel, Kessel takes 300 ÷ 1,200 × 100 = 25%.',eq:'300 ÷ 1,200 × 100 = 25',pic:tab('Exports by partner',[['Kessel','300'],['other partners','900'],['total','1,200']])},
 {skill:'share',say:'Relying on one partner is risky: if most exports go to one country and its demand falls, the exporter is hit hard. Spreading trade over several partners lowers that risk, the same idea as spreading out savings.',pic:tab('Two fictional exporters',[['country A','80% to one partner'],['country B','no partner over 30%']],['Exports'])
  ,check:{prompt:'Try it: the fictional country of Corvania exported 800 million dollars in all, and 200 million of it went to the fictional partner Lorn. What percent of Corvania’s exports went to Lorn?',answer:25,options:[25,40,4],hint:'200 ÷ 800 × 100.',pic:tab('Fictional Corvania',[['to Lorn','200'],['all exports','800'],['share to Lorn','?']])}},
 {skill:'change',say:'Comparing years shows how trade is changing. If exports grew from 500 to 650 million dollars, they rose by 650 - 500 = 150 million, which is 150 ÷ 500 × 100 = 30%.',eq:'150 ÷ 500 × 100 = 30',pic:tab('Fictional exports',[['first year','500'],['later year','650'],['rise','150']])},
 {skill:'change',say:'A balance can switch from surplus to deficit if imports grow faster than exports. Watch both columns, not one: exports that grow are good for sellers, but the balance depends on imports too.',pic:{t:'setups',title:'A fictional country over two years',head:'',rows:[['exports','600','660'],['imports','560','700'],['balance','40 surplus','40 deficit']],cols:['Year 1','Year 2']},
  check:{prompt:'Try it: the fictional country of Dellin exported 400 million dollars one year and 460 million dollars the next. By what percent did its exports grow?',answer:15,options:[15,60,6],hint:'The rise is 60. Divide by 400 and multiply by 100.',pic:tab('Fictional Dellin',[['first year','400'],['next year','460'],['growth','?']])}}],
progression:{requires:['finance-m-monthly-budget','math-m-ratios'],operations:2,demand:'Subtract imports from exports, divide a part by a total for a share, and find a change and a percent change between years.'},
items(add){
 let i=0;const L=()=>LAND[i++%LAND.length];
 /* Balance: the amount, and surplus or deficit (the Try-it's Bresca figures are left out). */
 for(const [x,m] of [[850,620],[300,540],[1200,980],[760,915],[2400,2150],[95,210],[1350,1500],[640,385],[5100,4600],[420,505],[980,720],[3300,3750]]){const c=L(),d=x-m;
  add('balance',`The fictional country of ${c} exported ${fmt(x)} million dollars of goods and imported ${fmt(m)} million dollars in one year. How big was its trade ${d>0?'surplus':'deficit'}, in millions of dollars?`,Math.abs(d),tab(`Fictional ${c}`,[['exports',fmt(x)],['imports',fmt(m)],[d>0?'surplus':'deficit','?']]),`${d>0?`${fmt(x)} - ${fmt(m)}`:`${fmt(m)} - ${fmt(x)}`} = ${fmt(Math.abs(d))}.`);
  add('balance',`The fictional country of ${c} exported ${fmt(x)} million dollars of goods and imported ${fmt(m)} million dollars in one year. Did it have a trade surplus or a trade deficit?`,d>0?'surplus':'deficit',tab(`Fictional ${c}`,[['exports',fmt(x)],['imports',fmt(m)]]),`Exports are ${d>0?'bigger':'smaller'} than imports, so it had a ${d>0?'surplus':'deficit'} of ${fmt(Math.abs(d))} million.`,[d>0?'a surplus':'a deficit',d>0?'trade surplus':'trade deficit']);}
 /* Working back: imports from exports and the balance. */
 for(const [x,bal] of [[900,150],[640,-210],[2200,480],[350,-95],[1500,-300],[780,260],[4100,700],[525,-175]]){const c=L(),m=x-bal;
  add('balance',`The fictional country of ${c} exported ${fmt(x)} million dollars of goods in one year and had a trade ${bal>0?'surplus':'deficit'} of ${fmt(Math.abs(bal))} million dollars. How many million dollars did it import?`,m,tab(`Fictional ${c}`,[['exports',fmt(x)],[bal>0?'surplus':'deficit',fmt(Math.abs(bal))],['imports','?']]),`imports = exports - balance = ${fmt(x)} ${bal>0?'-':'+'} ${fmt(Math.abs(bal))} = ${fmt(m)}.`);}
 /* Shares of exports by partner, and the biggest partner (the Try-it's Corvania and Lorn is left out). */
 const EXP=[[300,450,150,600],[240,120,360,80],[500,250,125,125],[90,210,60,240],[720,180,540,360],[160,40,120,80],[350,150,250,250],[66,264,110,110]];
 EXP.forEach((v,k)=>{const c=L(),tot=v.reduce((a,b)=>a+b,0),lead=`The fictional country of ${c} exported ${fmt(tot)} million dollars in all: ${v.map((x,j)=>`${fmt(x)} million to ${PARTNER[j]}`).join(', ')}.`,pic=tab(`Fictional ${c}: exports by partner`,v.map((x,j)=>[PARTNER[j],fmt(x)]),['Million $']);
  for(const j of [k%4,(k+2)%4]){const sh=v[j]*100/tot;if(Number.isInteger(sh*10))add('share',`${lead} What percent of ${c}’s exports went to the fictional partner ${PARTNER[j]}?`,sh,pic,`${fmt(v[j])} ÷ ${fmt(tot)} × 100 = ${sh}%.`);}
  const top=v.indexOf(Math.max(...v));if(v.filter(x=>x===v[top]).length===1)add('share',`${lead} Which partner bought the most of ${c}’s exports?`,PARTNER[top],pic,`${PARTNER[top]} bought ${fmt(v[top])} million, more than any other.`);
  add('share',`${lead} How many million dollars of exports went to partners other than ${PARTNER[k%4]}?`,tot-v[k%4],pic,`${fmt(tot)} - ${fmt(v[k%4])} = ${fmt(tot-v[k%4])}.`);});
 for(const [part,tot] of [[200,1000],[450,1800],[90,600],[330,1100],[75,250],[640,1600],[120,960],[540,900]]){const c=L(),p=PARTNER[i%4],sh=part*100/tot;
  add('share',`The fictional country of ${c} exported ${fmt(tot)} million dollars in all, and ${fmt(part)} million of it went to the fictional partner ${p}. What percent of ${c}’s exports went to ${p}?`,sh,tab(`Fictional ${c}`,[[`to ${p}`,fmt(part)],['all exports',fmt(tot)],['share','?']]),`${fmt(part)} ÷ ${fmt(tot)} × 100 = ${sh}%.`);}
 /* Change over time: the rise or fall, the percent change, and a balance that switched (the Try-it's Dellin is left out). */
 for(const [a,b] of [[500,650],[800,720],[1200,1500],[250,300],[640,480],[900,1170],[150,195],[2000,1700],[360,450],[750,600],[1600,2000],[440,550]]){const c=L(),d=b-a,pc=Math.abs(d)*100/a;
  add('change',`The fictional country of ${c} exported ${fmt(a)} million dollars one year and ${fmt(b)} million dollars the next. By how many million dollars did its exports ${d>0?'grow':'fall'}?`,Math.abs(d),tab(`Fictional ${c}`,[['first year',fmt(a)],['next year',fmt(b)],[d>0?'growth':'fall','?']]),`${d>0?`${fmt(b)} - ${fmt(a)}`:`${fmt(a)} - ${fmt(b)}`} = ${fmt(Math.abs(d))}.`);
  if(Number.isInteger(pc))add('change',`The fictional country of ${c} exported ${fmt(a)} million dollars one year and ${fmt(b)} million dollars the next. By what percent did its exports ${d>0?'grow':'fall'}?`,pc,tab(`Fictional ${c}`,[['first year',fmt(a)],['next year',fmt(b)],[d>0?'growth':'fall','?']]),`The change is ${fmt(Math.abs(d))}, and ${fmt(Math.abs(d))} ÷ ${fmt(a)} × 100 = ${pc}%.`);}
 [[[600,560],[660,700]],[[400,450],[480,430]],[[900,850],[950,1000]],[[300,340],[390,350]],[[1100,1000],[1050,1120]],[[520,600],[640,610]]].forEach(([[x1,m1],[x2,m2]])=>{const c=L(),b1=x1-m1,b2=x2-m2;
  add('change',`The fictional country of ${c} exported ${fmt(x1)} and imported ${fmt(m1)} million dollars in year 1, then exported ${fmt(x2)} and imported ${fmt(m2)} million dollars in year 2. In year 2, did it have a trade surplus or a trade deficit?`,b2>0?'surplus':'deficit',{t:'setups',title:`Fictional ${c}`,head:'',rows:[['exports',fmt(x1),fmt(x2)],['imports',fmt(m1),fmt(m2)]],cols:['Year 1','Year 2']},`Year 2: ${fmt(x2)} - ${fmt(m2)} = ${b2}, so a ${b2>0?'surplus':'deficit'}; year 1 was a ${b1>0?'surplus':'deficit'}.`,[b2>0?'a surplus':'a deficit']);});
}
};
