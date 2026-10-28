// Original geography lesson. Fictional village map with three fixed places (well, farm, school); every
// answer is computed from the grid coordinates the generator itself assigns to those places (column letters
// A-E west to east, row numbers 1-5 north to south, matching the gridmap primitive).
const KEYNAMES=['well','farm','school'],SYM=['circle','triangle','square'],PLACES=KEYNAMES.map(n=>'the '+n);
const KEY=KEYNAMES.map((name,i)=>({symbol:SYM[i],name}));
const L=c=>String.fromCharCode(65+c),posLabel=(c,r)=>`${L(c)}${r+1}`;
const joinList=a=>a.length===2?a.join(' and '):a.slice(0,-1).join(', ')+', and '+a[a.length-1];
const mapSentence=marks=>'On this village map, '+joinList(marks.map(m=>`${PLACES[m.i]} is at ${posLabel(m.at[0],m.at[1])}`))+'. ';
const pic=marks=>({t:'gridmap',cols:5,rows:5,key:KEY,marks:marks.map(m=>({at:m.at,symbol:SYM[m.i]}))});
export default {
id:"geography-e-where-is-it",
subject:"geography",
level:3,
grade:2,
title:"Where is it on the map",
goal:"Describe where a place is on a map using left, right, above, below, next to and between.",
standard:"Geographic skills: describe relative location with left, right, above, below, next to and between",
points:20,
skills:{"side":"Left, right, above or below","between":"Which place is between","next":"Is it next to"},
steps:[
{"skill":"side","say":"On a map with north at the top, going up the page means going north. Columns go from west to east, so a place in an earlier column is to the left; a place in an earlier row is above, nearer the top of the map.","pic":pic([{i:0,at:[1,1]},{i:1,at:[3,1]}])},
{"skill":"side","say":"Compare only the direction the question asks about. Two places in the same row differ in column, so compare left and right; two places in the same column differ in row, so compare above and below.","pic":pic([{i:0,at:[2,0]},{i:2,at:[2,3]}]),"check":{"prompt":"Try-it: the well sits at grid square B2 and the farm sits at grid square D2 on this village map. Is the well left or right of the farm: left or right?","answer":"left","options":["left","right"],"hint":"Column B comes before column D going west to east.","pic":pic([{i:0,at:[1,1]},{i:1,at:[3,1]}])}},
{"skill":"next","say":"Next to means sharing a side: the two places are one square apart in the same row or the same column. Places that are only diagonal from each other, or two or more squares apart, are not next to each other.","pic":pic([{i:0,at:[1,2]},{i:1,at:[2,2]}])},
{"skill":"next","say":"Check the row and column of both places before answering. If the row is the same and the columns are one apart, or the column is the same and the rows are one apart, the places are next to each other.","pic":pic([{i:1,at:[2,2]},{i:2,at:[2,4]}]),"check":{"prompt":"Try-it: the farm sits at grid square C3 and the school sits at grid square C5 on this village map. Is the farm next to the school: yes or no?","answer":"no","options":["yes","no"],"hint":"Rows 3 and 5 are two apart, not one.","pic":pic([{i:1,at:[2,2]},{i:2,at:[2,4]}])}},
{"skill":"between","say":"When three places sit in the same row or the same column, the one in the middle position, between the two outer ones, is between them.","pic":pic([{i:0,at:[0,2]},{i:1,at:[2,2]},{i:2,at:[4,2]}])},
{"skill":"between","say":"Line the three places up in column or row order first, then name the one sitting between the two outer places.","pic":pic([{i:2,at:[1,0]},{i:0,at:[1,2]},{i:1,at:[1,4]}]),"check":{"prompt":"Try-it: the well sits at grid square B3, the farm sits at grid square B5, and the school sits at grid square B1 on this village map. Which place is between the other two: the well, the farm or the school?","answer":"the well","options":["the well","the farm","the school"],"hint":"B3 sits between B1 and B5 in the same column.","pic":pic([{i:2,at:[1,0]},{i:0,at:[1,2]},{i:1,at:[1,4]}])}}],
progression:{"requires":["geography-e-map-key"],"operations":1,"demand":"Read grid coordinates for two or three places and compare them by row or column to answer left, right, above, below, next to or between."},
items(add){
  /* 28 Oct (elfact): every why in this topic started with a lower-case letter ("dog is living."); each now starts with a capital. */
  {const _a0=add;add=(s,p,a,pic,why,acc)=>_a0(s,p,a,pic,typeof why==="string"?why.charAt(0).toUpperCase()+why.slice(1):why,acc);}
 const PAIR=[[0,1],[1,2],[0,2]];
 PAIR.forEach(([i,j])=>{['row','col'].forEach(mode=>{for(let base=0;base<5;base++){
  const off=(base%4)+1;let ci,ri,cj,rj;
  if(mode==='row'){ri=rj=base;ci=base;cj=(ci+off)%5;}else{ci=cj=base;ri=base;rj=(ri+off)%5;}
  const posI=[ci,ri],posJ=[cj,rj];
  [[i,posI,j,posJ],[j,posJ,i,posI]].forEach(([subj,posS,ref,posR])=>{
   const answer=mode==='row'?(posS[0]<posR[0]?'left':'right'):(posS[1]<posR[1]?'above':'below');
   const marks=[{i:subj,at:posS},{i:ref,at:posR}];
   const prompt=mapSentence(marks)+(mode==='row'?`Is ${PLACES[subj]} left or right of ${PLACES[ref]}: left or right?`:`Is ${PLACES[subj]} above or below ${PLACES[ref]}: above or below?`);
   const expl=mode==='row'?`Column ${L(posS[0])} comes ${answer==='left'?'before':'after'} column ${L(posR[0])} going west to east, so ${PLACES[subj]} is to the ${answer}.`
    :`Row ${posS[1]+1} is ${answer==='above'?'nearer the top (north)':'nearer the bottom (south)'} than row ${posR[1]+1}, so ${PLACES[subj]} is ${answer}.`;
   add('side',prompt,answer,pic(marks),expl);
  });
 }});});
 const TRIPLES=[[0,1,2],[1,2,3],[2,3,4],[0,2,4]],PERMS=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
 TRIPLES.forEach(triple=>{['row','col'].forEach(mode=>{PERMS.forEach(perm=>{
  const marks=triple.map((coord,slot)=>({i:perm[slot],at:mode==='row'?[coord,triple[1]%5]:[triple[1]%5,coord]}));
  const first=marks[0],mid=marks[1],last=marks[2];
  /* the location sentence is built in place-index order, not grid order, so the answer's position in the
     sentence does not reveal it; the question itself never names the outer pair, only "the other two". */
  const sentenceMarks=[...marks].sort((a,b)=>a.i-b.i);
  const prompt=mapSentence(sentenceMarks)+`Which place is between the other two: ${PLACES[0]}, ${PLACES[1]} or ${PLACES[2]}?`;
  const expl=mode==='row'?`Column ${L(mid.at[0])} sits between columns ${L(first.at[0])} and ${L(last.at[0])} in the same row, so ${PLACES[mid.i]} is between them.`
   :`Row ${mid.at[1]+1} sits between rows ${first.at[1]+1} and ${last.at[1]+1} in the same column, so ${PLACES[mid.i]} is between them.`;
  add('between',prompt,PLACES[mid.i],pic(marks),expl,[KEYNAMES[mid.i]]);
 });});});
 const CATS=[['row',1],['col',1],['row',2],['col',2],['diag',1]];
 PAIR.forEach(([i,j])=>{CATS.forEach(([kind,span])=>{for(let anchor=0;anchor<4-span+1;anchor++){
  let posI,posJ;
  if(kind==='row'){posI=[anchor,2];posJ=[anchor+span,2];}
  else if(kind==='col'){posI=[2,anchor];posJ=[2,anchor+span];}
  else{posI=[anchor,anchor];posJ=[anchor+span,anchor+span];}
  const answer=(kind!=='diag')&&span===1?'yes':'no',marks=[{i,at:posI},{i:j,at:posJ}];
  const prompt=mapSentence(marks)+`Is ${PLACES[i]} next to ${PLACES[j]}: yes or no?`;
  const expl=kind==='diag'?`${PLACES[i]} and ${PLACES[j]} are diagonal from each other, not sharing a side, so they are not next to each other.`
   :answer==='yes'?`${PLACES[i]} and ${PLACES[j]} are one square apart in the same ${kind==='row'?'row':'column'}, so they are next to each other.`
   :`${PLACES[i]} and ${PLACES[j]} are ${span} squares apart in the same ${kind==='row'?'row':'column'}, more than one apart, so they are not next to each other.`;
  add('next',prompt,answer,pic(marks),expl);
 }});});
}
};
