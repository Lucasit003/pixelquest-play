// Original history lesson. The Oakhaven village census is fictional; every population count below was
// chosen by hand for this exercise (invented data, not a real record), and every answer is computed
// straight from that chosen table: the read count, the rise-or-fall amount and direction, the ten-year
// gap with the biggest rise, and whether the population rose every gap all follow mechanically from the
// numbers in SERIES (C3 D2.His.2.3-5: compare life in specific historical time periods using data).
const SERIES=[[1455,[150,225,385,495,700]],[1500,[120,260,410,480,690]],[1545,[140,230,410,670,800]],
 [1590,[820,690,540,470,310]],[1635,[850,650,560,420,360]],[1680,[300,520,610,430,380]],
 [1725,[250,410,515,420,210]],[1770,[500,340,290,410,610]],[1815,[560,470,300,505,600]],
 [1860,[230,400,340,480,435]],[1905,[310,405,275,490,415]],[1950,[180,310,405,580,640]]];
const EX_A={y0:1400,v:[220,310,380,340,460]},EX_B={y0:1340,v:[150,260,230,410,380]};
const yearsOf=y0=>[0,1,2,3,4].map(i=>y0+i*10);
const picOf=(y0,v)=>({t:'setups',title:'Oakhaven census',rows:yearsOf(y0).map((y,i)=>[y,v[i]]),head:'Year',cols:['People']});
export default {
id:"history-e-village-census",
subject:"history",
level:3,
grade:4,
title:"Reading a village census",
goal:"Read a population count from a census table, find how much it rose or fell between two years, and compare ten-year gaps without inventing a cause.",
standard:"C3 D2.His.2.3-5: compare life in specific historical time periods using data",
points:20,
skills:{"read":"Read a count from the census","change":"Find how much it rose or fell","trend":"Compare the ten-year gaps"},
steps:[
{"skill":"read","say":"A census counts how many people lived in a place at one moment. The Oakhaven census counted the village every ten years, and each row of the table names a year and the number of people counted that year.","pic":picOf(EX_A.y0,EX_A.v)},
{"skill":"read","say":"To find the population for a certain year, look for that year's row in the census table and read the number written there.","pic":picOf(EX_A.y0,EX_A.v),"check":{"prompt":"Try it: according to the Oakhaven census below, how many people lived there in 1420?","answer":380,"options":[380,310,340],"hint":"Find the row for 1420 and read the number next to it.","pic":picOf(EX_A.y0,EX_A.v)}},
{"skill":"change","say":"To find how the population changed between two census years, compare the two counts. If the later count is bigger, it rose; if it is smaller, it fell.","pic":picOf(EX_A.y0,EX_A.v)},
{"skill":"change","say":"The size of the change is how far apart the two counts are. Subtract the smaller count from the bigger count to find by how many it rose or fell.","pic":picOf(EX_A.y0,EX_A.v),"check":{"prompt":"Try it: according to the Oakhaven census below, between 1410 and 1430, did the population rise or fall?","answer":"rise","options":["rise","fall"],"hint":"Compare the 1410 count and the 1430 count.","pic":picOf(EX_A.y0,EX_A.v)}},
{"skill":"trend","say":"These fictional census tables give population counts for the listed years. Real censuses can also record details such as ages and households. It does not say why the number went up or down, so we should not guess a cause that the census itself does not give. To compare ten-year gaps, work out each gap's change and see which is the largest rise.","pic":picOf(EX_B.y0,EX_B.v)},
{"skill":"trend","say":"The population does not have to rise every ten years. Some gaps in a census can be a fall even though the count is higher by the last year shown.","pic":picOf(EX_B.y0,EX_B.v),"check":{"prompt":"Try it: according to the Oakhaven census below, which ten-year gap had the biggest rise in population: 1340 to 1350, 1360 to 1370 or 1370 to 1380?","answer":"1360 to 1370","options":["1340 to 1350","1360 to 1370","1370 to 1380"],"hint":"Work out the change for each gap; the biggest rise is the largest increase, not the largest fall.","pic":picOf(EX_B.y0,EX_B.v)}}],
progression:{"requires":["history-e-years","history-e-change-and-continuity"],"operations":2,"demand":"Read a count from a census table, subtract to find a rise or fall between two years, and compare several ten-year gaps without inventing a cause for the change."},
items(add){
 SERIES.forEach(([y0,v])=>{
  const years=yearsOf(y0),pic=picOf(y0,v);
  years.forEach((y,i)=>add('read',`According to the Oakhaven census, how many people lived there in ${y}?`,v[i],pic,`The census shows ${v[i]} people living in Oakhaven in ${y}.`));
  for(let i=0;i<4;i++){
   const yA=years[i],yB=years[i+1],vA=v[i],vB=v[i+1],diff=vB-vA,dir=diff>0?'rise':'fall',past=diff>0?'rose':'fell',big=Math.max(vA,vB),small=Math.min(vA,vB);
   add('change',`According to the Oakhaven census, by how many did the population rise or fall between ${yA} and ${yB}?`,Math.abs(diff),pic,`${vB} and ${vA}: subtract the smaller count from the bigger count: ${big} - ${small} = ${Math.abs(diff)}, so the population ${past} by ${Math.abs(diff)}.`);
   add('change',`According to the Oakhaven census, between ${yA} and ${yB}, did the population rise or fall?`,dir,pic,`${vB} is ${diff>0?'more':'less'} than ${vA}, so the population ${past} between ${yA} and ${yB}.`,dir==='rise'?['rose','went up','up','increased','increase','it rose','it went up']:['fell','went down','down','decreased','decrease','it fell','it went down']);
  }
  const gaps=[0,1,2,3].map(i=>v[i+1]-v[i]),labels=[0,1,2,3].map(i=>`${years[i]} to ${years[i+1]}`),allRise=gaps.every(g=>g>0);
  const upExplain=allRise?`Every ten-year gap in this census is a rise, so the population went up every ten years.`:
   (()=>{const fi=gaps.findIndex(g=>g<0);return `From ${years[fi]} to ${years[fi+1]} the population fell, so it did not go up every ten years.`;})();
  add('trend',`According to the Oakhaven census from ${years[0]} to ${years[4]}, did the population go up every ten years: yes or no?`,allRise?'yes':'no',pic,upExplain);
  const pos=gaps.map((g,i)=>({g,i})).filter(x=>x.g>0);
  if(pos.length){
   const best=pos.reduce((a,b)=>b.g>a.g?b:a),list=labels.slice(0,-1).join(', ')+' or '+labels[labels.length-1],lab=labels[best.i],ya=years[best.i],yb=years[best.i+1];
   add('trend',`According to the Oakhaven census, which ten-year gap had the biggest rise in population: ${list}?`,lab,pic,`The gap from ${years[best.i]} to ${years[best.i+1]} rose by ${best.g}, more than any other ten-year gap shown.`,[lab.replace(' to ','-'),`from ${lab}`,`${ya} - ${yb}`,`${ya}–${yb}`,`between ${ya} and ${yb}`,`${ya} and ${yb}`]);
  }
 });
}
};
