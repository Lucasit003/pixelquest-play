// Middle School topic (Grade 8, C3 D2.His.14.6-8 with D2.Geo.5.6-8): change over time from census records. Every
// answer is computed from the fictional census in its own question: a change is a later count minus an earlier one,
// a percent change divides that by the earlier count, an average yearly change divides it by the years between,
// and a per-person figure divides a total by the population. Every town and count is fictional.
const fmt=n=>n.toLocaleString('en-US');
const C=[
 {town:'Ashcombe',rows:[[1800,2000,400],[1810,2500,480],[1820,3000,600],[1830,3600,720],[1840,4500,900]]},
 {town:'Bellmoor',rows:[[1850,8000,1600],[1860,10000,2000],[1870,12500,2500],[1880,11000,2400],[1890,13200,2640]]},
 {town:'Crowhurst',rows:[[1700,1200,300],[1710,1500,330],[1720,1800,400],[1730,1440,360],[1740,2160,480]]},
 {town:'Dalton Mills',rows:[[1820,4000,800],[1830,6000,1000],[1840,9000,1500],[1850,10800,1800],[1860,12000,2000]]},
 {town:'Eskby',rows:[[1880,25000,5000],[1890,30000,6000],[1900,27000,6000],[1910,32400,6480],[1920,40500,8100]]}];
const said=c=>`A census of the fictional town of ${c.town} counted people and houses: ${c.rows.map(([y,p,h])=>`${y}, ${fmt(p)} people in ${fmt(h)} houses`).join('; ')}.`;
const pic=(c,hint)=>({t:'setups',title:`Fictional ${c.town} census`,head:'Year',rows:c.rows.map(([y,p,h])=>[`${y}`,fmt(p),fmt(h)]),cols:['People','Houses'],...(hint?{hint:true}:{})});
export default {
id:'history-m-census',subject:'history',level:4,grade:8,standard:'C3 D2.His.14.6-8, D2.Geo.5.6-8',
title:'Change over time from a census',
goal:'Use a series of census counts to find how much a population changed, its percent and yearly rates of growth, and figures per person or per house.',
points:20,
skills:{change:'Change between censuses',rate:'Rates of growth',per:'Per-person figures'},
steps:[
 {skill:'change',say:'A census counts everyone in a place on one day, usually every ten years. A series of censuses shows how a place grew or shrank. In fictional Ashcombe the population went from 2,000 in 1800 to 2,500 in 1810, a rise of 2,500 - 2,000 = 500.',eq:'2,500 - 2,000 = 500',pic:pic(C[0])},
 {skill:'change',say:'Compare any two censuses by subtracting, and watch for falls as well as rises: Bellmoor grew to 12,500 in 1870 but fell to 11,000 by 1880, a drop of 12,500 - 11,000 = 1,500.',eq:'12,500 - 11,000 = 1,500',pic:pic(C[1]),
  check:{prompt:'Try it: a census of the fictional town of Ashcombe counted 3,000 people in 1820 and 4,800 people in 1840. By how many people did the population grow from 1820 to 1840?',answer:1800,options:[1800,7800,900],hint:'Take the 1820 count from the 1840 count.',pic:{t:'setups',title:'Fictional Ashcombe census',head:'Year',rows:[['1820','3,000'],['1840','4,800']],cols:['People']}}},
 {skill:'rate',say:'A percent change makes growth comparable between big and small places: divide the change by the earlier count and multiply by 100. Ashcombe’s rise of 500 from 2,000 is 500 ÷ 2,000 × 100 = 25%.',eq:'500 ÷ 2,000 × 100 = 25',pic:pic(C[0])},
 {skill:'rate',say:'An average yearly change divides the change by the years between the counts. From 1800 to 1840 Ashcombe grew by 2,500 in 40 years, 2,500 ÷ 40 = 62.5 people a year on average, though the real growth came faster in some years than others.',eq:'2,500 ÷ 40 = 62.5',pic:pic(C[0]),
  check:{prompt:'Try it: a census of the fictional town of Dalton Mills counted 4,000 people in 1820 and 6,000 in 1830. By what percent did the population grow?',answer:50,options:[50,2000,33],hint:'The growth is 2,000. Divide by 4,000 and multiply by 100.',pic:{t:'setups',title:'Fictional Dalton Mills census',head:'Year',rows:[['1820','4,000'],['1830','6,000']],cols:['People']}}},
 {skill:'per',say:'Dividing one count by another gives a per-person or per-house figure. In 1800 Ashcombe had 2,000 people in 400 houses: 2,000 ÷ 400 = 5 people per house on average.',eq:'2,000 ÷ 400 = 5',pic:pic(C[0])},
 {skill:'per',say:'Per-house figures reveal crowding that totals hide. Dalton Mills grew from 4,000 to 6,000 people while its houses went from 800 to 1,000, so it went from 5 to 6 people per house: more crowded, not just bigger.',pic:pic(C[3]),
  check:{prompt:'Try it: a census of the fictional town of Eskby counted 28,000 people in 4,000 houses in 1890. How many people lived in each house, on average?',answer:7,options:[7,8,24],hint:'Divide the people by the houses.',pic:{t:'setups',title:'Fictional Eskby census',head:'Year',rows:[['1890','28,000','4,000']],cols:['People','Houses']}}}],
progression:{requires:['history-m-ledger-records','math-m-percent-change'],operations:3,demand:'Subtract census counts, divide a change by the earlier count or by the years between, and divide people by houses.'},
items(add){
 C.forEach((c,j)=>{const S=said(c),P=pic(c),R=c.rows;
  /* Changes between censuses (the Try-it's Ashcombe 1820 to 1840 is left out). */
  for(const [a,b] of [[0,1],[1,2],[2,3],[3,4],[0,4],[1,3]]){if(j===0&&a===2&&b===4)continue;const d=R[b][1]-R[a][1];if(d===0)continue;
   add('change',`${S} By how many people did the population ${d>0?'grow':'fall'} from ${R[a][0]} to ${R[b][0]}?`,Math.abs(d),P,`${d>0?`${fmt(R[b][1])} - ${fmt(R[a][1])}`:`${fmt(R[a][1])} - ${fmt(R[b][1])}`} = ${fmt(Math.abs(d))}.`);}
  const diffs=[0,1,2,3].map(k=>R[k+1][1]-R[k][1]),big=diffs.indexOf(Math.max(...diffs));
  if(diffs.filter(x=>x===diffs[big]).length===1)add('change',`${S} In which ten years did the population grow by the most people? Give the earlier census year.`,R[big][0],P,`The changes are ${diffs.map((d,k)=>`${R[k][0]}–${R[k+1][0]}: ${d>0?'+':''}${fmt(d)}`).join(', ')}, so the biggest rise starts in ${R[big][0]}.`);
  const fell=diffs.findIndex(d=>d<0);if(fell>=0)add('change',`${S} In which ten years did the population fall? Give the earlier census year.`,R[fell][0],P,`Between ${R[fell][0]} and ${R[fell+1][0]} the count went from ${fmt(R[fell][1])} to ${fmt(R[fell+1][1])}.`);
  add('change',`${S} By how many did the number of houses change from ${R[0][0]} to ${R[4][0]}?`,R[4][2]-R[0][2],P,`${fmt(R[4][2])} - ${fmt(R[0][2])} = ${fmt(R[4][2]-R[0][2])}.`);
  /* Percent changes and yearly rates (the Try-it's Dalton Mills 1820 to 1830 percent is left out). */
  for(const [a,b] of [[0,1],[1,2],[2,3],[3,4],[0,2],[0,4]]){if(j===3&&a===0&&b===1)continue;const d=R[b][1]-R[a][1],pc=Math.abs(d)*100/R[a][1];if(d===0||!Number.isInteger(pc*10))continue;
   add('rate',`${S} By what percent did the population ${d>0?'grow':'fall'} from ${R[a][0]} to ${R[b][0]}?`,pc,P,`The change is ${fmt(Math.abs(d))}, and ${fmt(Math.abs(d))} ÷ ${fmt(R[a][1])} × 100 = ${pc}%.`);}
  for(const [a,b] of [[0,4],[0,2],[2,4]]){const d=R[b][1]-R[a][1],yr=R[b][0]-R[a][0],r=Math.abs(d)/yr;if(!Number.isInteger(r*100))continue;
   add('rate',`${S} On average, by how many people a year did the population ${d>0?'grow':'fall'} from ${R[a][0]} to ${R[b][0]}?`,r,P,`${fmt(Math.abs(d))} over ${yr} years: ${fmt(Math.abs(d))} ÷ ${yr} = ${r}.`);}
  /* Per-house figures, and when the town was most crowded (the Try-it's Eskby 1890 is left out). */
  R.forEach(([y,p,h],k)=>{if(j===4&&y===1890)return;const pp=p/h;if(!Number.isInteger(pp*100))return;
   add('per',`${S} How many people lived in each house in ${y}, on average?`,pp,P,`${fmt(p)} ÷ ${fmt(h)} = ${pp}.`);});
  const per=R.map(([,p,h])=>p/h),most=per.indexOf(Math.max(...per));
  if(per.filter(x=>x===per[most]).length===1)add('per',`${S} In which census year were there the most people per house?`,R[most][0],P,`People per house: ${R.map(([y],k)=>`${y}: ${+per[k].toFixed(2)}`).join(', ')}, so ${R[most][0]} was the most crowded.`);
  add('per',`${S} If the ${R[4][0]} population were shared out evenly, how many people would that be for every 100 houses?`,R[4][1]*100/R[4][2],P,`${fmt(R[4][1])} ÷ ${fmt(R[4][2])} × 100 = ${R[4][1]*100/R[4][2]}.`);});
}
};
