// Original history lesson. A fictional Oakhaven record says when each thing FIRST ARRIVED IN
// OAKHAVEN (e.g. "The first bicycle came to Oakhaven in 1885"). These are local, made-up village
// dates for this game, not claims about when anything was really invented anywhere -- the first
// step says so. A dated scene cannot show something whose Oakhaven arrival year is later than the
// scene's year: that is an anachronism (C3 D2.His.1.3-5: chronological reasoning). Every arrival
// year below is a certain fact of this fictional record, not a historical claim, and every answer
// below is computed by comparing years the question itself states -- nothing is looked up.
const ITEMS=[["water wheel",1790],["stone bridge",1802],["printing press",1815],["iron plough",1829],
 ["steam train",1841],["gas street lamps",1856],["sewing machine",1869],["bicycle",1885],
 ["telephone",1899],["motor car",1912],["radio",1925],["tractor",1938],["television",1952],
 ["washing machine",1963],["calculator",1975],["video game console",1986],["mobile phone",1998],
 ["tablet computer",2009],["electric scooter",2020]];
const cap=s=>s[0].toUpperCase()+s.slice(1),L='ABC';
const came=(name,year)=>`The first ${name} came to Oakhaven in ${year}.`;
export default {
id:"history-e-anachronisms",
subject:"history",
level:3,
grade:5,
title:"Spotting things out of time",
goal:"Use a fictional record's arrival dates to tell whether an object could appear in a dated scene, spot the one that could not, and find the earliest year a scene with two objects could be from.",
standard:"C3 D2.His.1.3-5 / chronological reasoning: identify anachronisms",
points:20,
skills:{"could":"Could it be in this scene","odd":"Spot the one out of time","earliest":"Find the earliest possible year"},
steps:[{"skill":"could","say":"An Oakhaven record can say when something first arrived in the village, like the first bicycle coming to Oakhaven in 1885. These are made-up dates for this fictional village, not real facts about when anything was truly invented anywhere in the world.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":[came("bicycle",1885),came("telephone",1899)]}},
{"skill":"could","say":"A scene cannot show something before it arrived. If the bicycle first came to Oakhaven in 1885, a scene dated 1873 cannot show a bicycle: that would be an anachronism, something out of its time.","pic":{"t":"rule","cond":"year 1885 or later?","yes":"could appear","no":"cannot appear","input":"scene dated 1873","pick":"no"},"check":{"prompt":"The first bicycle came to Oakhaven in 1885. A record describes a scene from 1888. Could the bicycle appear in that scene: yes or no?","answer":"yes","options":["yes","no"],"hint":"Is 1888 after 1885 or before it?","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":[came("bicycle",1885),"Scene dated 1888."]}}},
{"skill":"odd","say":"A dated scene can show several things at once, but only one of them needs to be out of place to make the whole scene wrong. Check every object's arrival year against the scene's year, one at a time.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["Scene dated 1900.",came("telephone",1899),came("radio",1925),came("bicycle",1885)]}},
{"skill":"odd","say":"Only one object needs to fail the check to be the odd one out; the others can all have arrived long before the scene's year or only just before it, and that is still fine.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["Scene dated 1900.",came("telephone",1899),came("radio",1925),came("bicycle",1885)]},"check":{"prompt":"A record describes a scene from Oakhaven dated 1900. It shows three things: A) the telephone (arrived 1899), B) the radio (arrived 1925), C) the bicycle (arrived 1885). Which one could not be in that scene: A, B or C?","answer":"B","options":["A","B","C"],"hint":"Which arrival year comes after 1900?","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["Scene dated 1900.",came("telephone",1899),came("radio",1925),came("bicycle",1885)]}}},
{"skill":"earliest","say":"If a scene shows two things, it must be dated on or after both of their arrival years. So the earliest the scene could be from is the later of the two arrival years, not the earlier one.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":[came("bicycle",1885),came("telephone",1899)]}},
{"skill":"earliest","say":"Pick the later year, not the earlier one: the scene has to wait for the slower arrival, so an earlier item already being there does not help it appear sooner.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":[came("bicycle",1885),came("telephone",1899)]},"check":{"prompt":"A record shows both the first bicycle (arrived 1885 in Oakhaven) and the first mobile phone (arrived 1998 in Oakhaven) in the same scene. What is the earliest year that scene could be from?","answer":1998,"options":[1885,1998],"hint":"Which of the two years comes later?","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":[came("bicycle",1885),came("mobile phone",1998)]}}}],
progression:{"requires":["history-e-decades-centuries","history-e-causes-consequences"],"operations":2,"demand":"Compare a scene's year against one or more arrival years to rule an object in or out, and use the later of two arrival years to find the earliest a scene could be from."},
items(add){
 const N=ITEMS.length;
 const couldPic=(name,year,sceneYear)=>({t:'passages',title:'Fictional Oakhaven record',texts:[came(name,year),`Scene dated ${sceneYear}.`]});
 ITEMS.forEach(([name,year],i)=>{
  /* The electric scooter (the last, most recent item) would push +7/+14 scenes past the fictional
     record's present day of 2025, describing a scene that has not happened yet; use smaller
     positive offsets for it so every scene year stays at or before 2025. */
  const offs=i===N-1?[-15,-8,2,4]:[-15,-8,7,14];
  offs.forEach(d=>{const sceneYear=year+d,yes=d>0;
   add('could',`${came(name,year)} A record describes a scene from ${sceneYear}. Could the ${name} appear in that scene: yes or no?`,yes?'yes':'no',
    couldPic(name,year,sceneYear),yes?`The scene is dated after ${year}, when the ${name} had already arrived.`:`The scene is dated before ${year}, when the ${name} had not arrived yet.`);});
 });
 for(let i=2;i<N;i++){
  const [oddName,oddYear]=ITEMS[i],Y=oddYear-5;
  const pairs=i===2?[[1,0]]:[[i-1,i-2],...(i-3>=0?[[i-1,i-3],[i-2,i-3]]:[])];
  pairs.forEach((pair,pIdx)=>{
   const pos=(i+pIdx)%3,arr=new Array(3);arr[pos]=i;const others=[pair[0],pair[1]];let oi=0;
   for(let k=0;k<3;k++)if(k!==pos)arr[k]=others[oi++];
   const texts=arr.map(idx=>came(ITEMS[idx][0],ITEMS[idx][1])),letter=L[pos];
   const list=arr.map((idx,k)=>`${L[k]}) the ${ITEMS[idx][0]} (arrived ${ITEMS[idx][1]})`).join(', ');
   const pic={t:'passages',title:'Fictional Oakhaven record',texts:[`Scene dated ${Y}.`,...texts]};
   add('odd',`A record describes a scene from Oakhaven dated ${Y}. It shows three things: ${list}. Which one could not be in that scene: A, B or C?`,letter,pic,
    `The ${oddName} arrived in ${oddYear}, after the scene's year of ${Y}; the other two had already arrived.`);
  });
 }
 for(let j=2;j<N;j++)for(let i=Math.max(0,j-4);i<j;i++){
  const [nameA,yearA]=ITEMS[i],[nameB,yearB]=ITEMS[j],ans=Math.max(yearA,yearB);
  /* ITEMS is sorted by year, so j's year is always the later one; if it were always written
     second in the prompt, a child could just type the last year they read without comparing.
     Swap which one is written first on alternating pairs so the answer sits in either position. */
  const swap=(i+j)%2===1,name1=swap?nameB:nameA,year1=swap?yearB:yearA,name2=swap?nameA:nameB,year2=swap?yearA:yearB;
  add('earliest',`A record shows both the first ${name1} (arrived ${year1} in Oakhaven) and the first ${name2} (arrived ${year2} in Oakhaven) in the same scene. What is the earliest year that scene could be from?`,ans,
   {t:'passages',title:'Fictional Oakhaven record',texts:[came(name1,year1),came(name2,year2)]},
   `The scene needs both to have already arrived, so it must be from ${ans} or later, the later of the two arrival years.`);
 }
}
};
