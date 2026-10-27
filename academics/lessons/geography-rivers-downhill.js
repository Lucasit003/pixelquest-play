// Original geography lesson. Fictional river points with spot heights in metres; every answer is
// computed by comparing the given heights (higher ground is upstream, nearer the source; lower
// ground is downstream, nearer the mouth). No fact table is used and no heights are ever equal.
// Heights are assigned to alphabetically-ordered town names through PERM3/PERM4, a permutation
// separate from ROT3/ROT4 (which only controls listing order), so which town gets the highest or
// lowest height varies across items and is not predictable from name order alone.
const TOWNS=['Ashby','Brill','Corran','Dunmore','Elden','Fenwick','Gorse','Harrow','Ivywood','Kestrel','Lowmere','Marrow','Oakdell','Pellow','Quarrymere'];
const H3=[[210,150,95],[188,124,62],[165,102,48],[142,88,33],[126,79,27],[101,66,21]];
const H4=[[225,168,112,54],[198,149,93,38],[176,131,82,36],[151,104,63,24]];
const ROT3=[[0,1,2],[1,2,0],[2,0,1]],ROT4=[[0,1,2,3],[1,2,3,0],[2,3,0,1],[3,0,1,2]];
const PERM3=[[0,1,2],[1,0,2],[2,1,0],[0,2,1],[1,2,0],[2,0,1]];
const PERM4=[[0,1,2,3],[1,0,3,2],[2,3,0,1],[3,2,1,0],[0,2,1,3],[1,3,0,2],[2,0,3,1],[3,1,2,0]];
const listJoin=a=>a.length<=1?a.join(''):a.slice(0,-1).join(', ')+' or '+a[a.length-1];
export default {
id:"geography-e-rivers-downhill",
subject:"geography",
level:3,
grade:4,
title:"Rivers flow downhill",
goal:"Use spot heights to tell which way a river flows and which town is nearer its source or its mouth.",
standard:"Physical geography: use elevation to reason about how water moves",
points:20,
skills:{"flow":"Which way the river flows","down":"Find which town is downstream","order":"Order towns from source to mouth"},
steps:[{"skill":"flow","say":"Water always flows downhill, from higher ground to lower ground. A river starts near its source, on higher ground, and ends at its mouth, on lower ground.","pic":{"t":"theater","scene":"river","part":"downhill"}},
{"skill":"down","say":"A town is downstream of another town on the same river when it sits at a lower height, closer to the mouth. Brill, at 85 m, is downstream of Ashby, at 120 m.","pic":{"t":"setups","title":"Along one river, from source to mouth","rows":[["Ashby",120],["Brill",85],["Corran",40]],"head":"Town","cols":["Height (m)"]},"check":{"prompt":"Along one river: Millbrook is at 150 m and Reedford is at 60 m. Which town is downstream of the other: Millbrook or Reedford?","answer":"Reedford","options":["Reedford","Millbrook"],"hint":"Downstream means lower ground, nearer the mouth.","pic":{"t":"setups","title":"Along one river","rows":[["Millbrook",150],["Reedford",60]],"head":"Town","cols":["Height (m)"]}}},
{"skill":"order","say":"Along a river with several towns, the one at the greatest height is nearest the source, and the one at the least height is nearest the mouth.","pic":{"t":"setups","title":"Along one river","rows":[["Ashby",120],["Brill",95],["Corran",70],["Dunmore",30]],"head":"Town","cols":["Height (m)"]}},
{"skill":"flow","say":"Because water flows from high ground to low ground, it flows from Ashby toward Corran, and not the other way, since Ashby sits higher.","pic":{"t":"setups","title":"Along one river","rows":[["Ashby",120],["Brill",85],["Corran",40]],"head":"Town","cols":["Height (m)"]},"check":{"prompt":"Along one river: Stonegate is at 175 m and Millbrook is at 60 m. Does the river flow from Stonegate toward Millbrook: yes or no?","answer":"yes","options":["yes","no"],"hint":"Compare the two heights; water flows from the higher one toward the lower one.","pic":{"t":"setups","title":"Along one river","rows":[["Stonegate",175],["Millbrook",60]],"head":"Town","cols":["Height (m)"]}}},
{"skill":"down","say":"Downstream is not just any lower ground: it only compares places along the same river, counting from the source toward the mouth.","pic":{"t":"setups","title":"Along one river","rows":[["Elden",140],["Fenwick",90],["Gorse",35]],"head":"Town","cols":["Height (m)"]}},
{"skill":"order","say":"To find which town is nearest the source among several, pick the one with the greatest height; to find the one nearest the mouth, pick the one with the least height.","pic":{"t":"setups","title":"Along one river","rows":[["Ashby",120],["Brill",95],["Corran",70],["Dunmore",30]],"head":"Town","cols":["Height (m)"]},"check":{"prompt":"Along one river: Pinehollow is at 210 m, Foxbridge is at 140 m, Reedmoor is at 85 m and Millbrook is at 30 m. Which town is nearest the mouth: Pinehollow, Foxbridge, Reedmoor or Millbrook?","answer":"Millbrook","options":["Pinehollow","Foxbridge","Reedmoor","Millbrook"],"hint":"The lowest height is nearest the mouth.","pic":{"t":"setups","title":"Along one river","rows":[["Pinehollow",210],["Foxbridge",140],["Reedmoor",85],["Millbrook",30]],"head":"Town","cols":["Height (m)"]}}}],
progression:{"requires":["geography-e-contour-lines"],"operations":2,"demand":"Compare spot heights along a river to tell which way it flows and which town is nearer the source or the mouth."},
items(add){
 for(let i=0;i<TOWNS.length-2;i++){
  const names=[TOWNS[i],TOWNS[i+1],TOWNS[i+2]],hs=H3[i%H3.length],rot=ROT3[i%3],perm=PERM3[(i+2)%PERM3.length];
  const hgt=names.map((_,k)=>hs[perm[k]]);
  const stmt=rot.map(k=>`${names[k]} is at ${hgt[k]} m`).join(', '),record=`Along one river: ${stmt}. `;
  const pic={t:'setups',title:'Along one river (given heights)',rows:rot.map(k=>[names[k],hgt[k]]),head:'Town',cols:['Height (m)']};
  for(let a=0;a<3;a++)for(let b=0;b<3;b++)if(a!==b){
   const up=hgt[a]>hgt[b];
   add('flow',record+`Does the river flow from ${names[a]} toward ${names[b]}: yes or no?`,up?'yes':'no',pic,up?`${names[a]} is higher, so water flows toward ${names[b]}.`:`${names[b]} is higher than ${names[a]}, so the river does not flow that way.`);
  }
  [[0,1],[1,2],[0,2]].forEach(([a,b],pi)=>{
   const swap=(i+pi)%2===1,x=swap?b:a,y=swap?a:b,down=hgt[x]<hgt[y]?names[x]:names[y];
   add('down',record+`Which town is downstream of the other: ${names[x]} or ${names[y]}?`,down,pic,`Downstream means lower ground, nearer the mouth: ${down} sits lower.`);
  });
  const listNames=rot.map(k=>names[k]),srcIdx=hgt.indexOf(Math.max(...hgt)),mouthIdx=hgt.indexOf(Math.min(...hgt));
  add('order',record+`Which town is nearest the source: ${listJoin(listNames)}?`,names[srcIdx],pic,`${names[srcIdx]} has the greatest height, so it is nearest the source.`);
  add('order',record+`Which town is nearest the mouth: ${listJoin(listNames)}?`,names[mouthIdx],pic,`${names[mouthIdx]} has the least height, so it is nearest the mouth.`);
 }
 for(let i=0;i<TOWNS.length-3;i++){
  const names=[TOWNS[i],TOWNS[i+1],TOWNS[i+2],TOWNS[i+3]],hs=H4[i%H4.length],rot=ROT4[i%4],perm=PERM4[(i+3)%PERM4.length];
  const hgt=names.map((_,k)=>hs[perm[k]]);
  const stmt=rot.map(k=>`${names[k]} is at ${hgt[k]} m`).join(', '),record=`Along one river: ${stmt}. `;
  const pic={t:'setups',title:'Along one river (given heights)',rows:rot.map(k=>[names[k],hgt[k]]),head:'Town',cols:['Height (m)']};
  const listNames=rot.map(k=>names[k]),srcIdx=hgt.indexOf(Math.max(...hgt)),mouthIdx=hgt.indexOf(Math.min(...hgt));
  add('order',record+`Which town is nearest the source: ${listJoin(listNames)}?`,names[srcIdx],pic,`${names[srcIdx]} has the greatest height, so it is nearest the source.`);
  add('order',record+`Which town is nearest the mouth: ${listJoin(listNames)}?`,names[mouthIdx],pic,`${names[mouthIdx]} has the least height, so it is nearest the mouth.`);
 }
}
};
