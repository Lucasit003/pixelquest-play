// Elementary topic: weather records. A fictional Oakhaven weather record counts how many days of
// each weather type (sunny, rainy, cloudy, windy) happened over 2 or 3 weeks; every answer is read
// straight off the table or computed from its counts (NGSS 3-ESS2-1: represent weather data in
// tables to describe typical conditions). No borderline facts are used: the four weather words are
// treated as separate, non-overlapping categories, and every record's four counts are kept distinct
// so "most common" and "least common" never tie.
const WEATHER=['sunny','rainy','cloudy','windy'];
const cap=w=>w[0].toUpperCase()+w.slice(1);
const dw=n=>n===1?'day':'days';
const OPTS='sunny, rainy, cloudy or windy';
/* Each shape is 4 distinct day-counts that sum to the record's total; permuting which weather gets
   which count (below, non-cyclically) spreads which weather is most/least common evenly across the
   four words, without the most-common word always sitting right before the least-common one. */
const SETS=[{weeks:2,total:14,shapes:[[0,1,4,9],[0,2,3,9]]},{weeks:3,total:21,shapes:[[0,3,8,10],[1,2,6,12]]}];
const PERMS=[[0,1,2,3],[2,0,3,1],[1,3,0,2],[3,2,1,0]];
const PAIR_SETS=[[[0,1],[1,2],[2,3]],[[2,3],[0,2],[1,3]]];
const NOT_SETS=[[0,1],[2,3]];
const tableFor=(weeks,c)=>({t:'setups',title:`${weeks}-week weather record`,rows:WEATHER.map(w=>[cap(w),c[w]]),head:'Weather',cols:['Days']});
const EX={weeks:2,total:14,c:{sunny:6,rainy:3,cloudy:4,windy:1}};
const exRecord='Oakhaven kept a weather record for 2 weeks (14 days). '+WEATHER.map(w=>`${cap(w)}: ${EX.c[w]} ${dw(EX.c[w])}.`).join(' ')+' ';
const exPic=tableFor(EX.weeks,EX.c);
export default {
id:"science-e-weather-data",
subject:"science",
level:3,
grade:3,
title:"Weather records",
goal:"Read a weather record's table, say which weather was most or least common, and compare counts.",
standard:"NGSS 3-ESS2-1: represent weather data in tables to describe typical conditions",
points:20,
skills:{"read":"Read a count from the table","most":"Most or least common","compare":"Compare two counts"},
steps:[{"skill":"read","say":"Oakhaven keeps a weather record for a few weeks at a time. It counts how many days were sunny, rainy, cloudy or windy, and puts the counts in a table. To answer a question, find the weather word in the table and read the number of days next to it.","pic":{"t":"theater","scene":"weather","part":"record"}},
{"skill":"read","say":"The table's numbers always add up to the record's total days, because this record counted each day under just one weather type.","pic":exPic,"check":{"prompt":exRecord+"How many days were cloudy?","answer":4,"options":[4,3,6],"hint":"Find Cloudy in the table and read the number next to it.","pic":exPic}},
{"skill":"most","say":"The weather with the biggest number in the table was the most common in that record, and the weather with the smallest number was the least common. In this fictional record no two weather types share the same count, so there is always one clear answer.","pic":exPic},
{"skill":"most","say":"To find the most common weather, compare all four numbers and pick the biggest one; to find the least common, pick the smallest.","pic":exPic,"check":{"prompt":exRecord+`Which weather type was most common: ${OPTS}?`,"answer":"sunny","options":["sunny","rainy","cloudy","windy"],"hint":"Look for the biggest number in the table.","pic":exPic}},
{"skill":"compare","say":"To find how many more days one weather had than another, subtract the smaller count from the bigger count. To find how many days were not a weather type, subtract that weather's count from the record's total.","pic":exPic},
{"skill":"compare","say":"A record like this only describes the weeks it counted, not the whole year: a record with many sunny days does not mean every week of the year is sunny that often.","pic":exPic,"check":{"prompt":exRecord+"How many more sunny days were there than windy days?","answer":5,"options":[5,3,7],"hint":"Subtract the smaller count (Windy) from the bigger count (Sunny).","pic":exPic}}],
progression:{"requires":["science-e-water-cycle"],"operations":2,"demand":"Read counts from a table, find the biggest and smallest among four counts, and subtract two counts or a count from a total."},
items(add){
 let ri=0;
 for(const set of SETS){
  for(const shape of set.shapes){
   for(let r=0;r<4;r++){
    const arr=[0,0,0,0];
    for(let k=0;k<4;k++)arr[PERMS[r][k]]=shape[k];
    const c={};WEATHER.forEach((w,idx)=>c[w]=arr[idx]);
    const record=`Oakhaven kept a weather record for ${set.weeks} weeks (${set.total} days). `+WEATHER.map(w=>`${cap(w)}: ${c[w]} ${dw(c[w])}.`).join(' ')+' ';
    const pic=tableFor(set.weeks,c);
    WEATHER.forEach(w=>add('read',record+`How many days were ${w}?`,c[w],pic,`The table shows ${cap(w)}: ${c[w]} ${dw(c[w])}.`));
    const maxW=WEATHER.reduce((a,b)=>c[a]>=c[b]?a:b),minW=WEATHER.reduce((a,b)=>c[a]<=c[b]?a:b);
    add('most',record+`Which weather type was most common: ${OPTS}?`,maxW,pic,`${cap(maxW)} has the highest count in the table, ${c[maxW]} ${dw(c[maxW])}.`);
    add('most',record+`Which weather type was least common: ${OPTS}?`,minW,pic,`${cap(minW)} has the lowest count in the table, ${c[minW]} ${dw(c[minW])}.`);
    PAIR_SETS[r%2].forEach(([i,j])=>{
     const wi=WEATHER[i],wj=WEATHER[j],big=c[wi]>=c[wj]?wi:wj,small=big===wi?wj:wi,diff=c[big]-c[small];
     add('compare',record+`How many more ${big} days were there than ${small} days?`,diff,pic,`${cap(big)} had ${c[big]} ${dw(c[big])} and ${cap(small)} had ${c[small]} ${dw(c[small])}, a difference of ${diff}.`);
    });
    NOT_SETS[ri%2].forEach(idx=>{
     const w=WEATHER[idx],notCount=set.total-c[w];
     add('compare',record+`How many days were NOT ${w}?`,notCount,pic,`${set.total} days total minus ${c[w]} ${dw(c[w])} of ${w} leaves ${notCount}.`);
    });
    ri++;
   }
  }
 }
}
};
