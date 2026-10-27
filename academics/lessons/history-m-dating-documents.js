// Middle School topic (Grade 8, C3 D2.His.10.6-8 and D2.His.11.6-8): dating an undated document from what it says.
// Every answer is computed from the fictional town record and document in its own question, with the rules the
// lesson states: a document that mentions an event as having happened was written in or after that event's year;
// one that calls someone by an office was written while they held it; and one that speaks of a thing as still
// planned or standing was written before it opened or was lost. The earliest and latest possible years are the
// tightest of these limits, and a detail is an anachronism if its year falls after the date a document claims.
/* Facts: [what happened, year, how a document written before it would speak of it]. */
const TOWNS=[
 {town:'Aldbury',facts:[['the railway opened',1846,'speaks of the railway as still being planned'],['the town hall burned',1852,'describes the town hall as still standing'],['the new bridge opened',1855,'speaks of the new bridge as still being planned'],['the school was founded',1838,'speaks of the school as still being planned']],office:['Mayor Grey',1840,1849]},
 {town:'Brackwater',facts:[['the canal opened',1801,'speaks of the canal as still being dug'],['the mill flooded',1809,'says the mill has never flooded'],['the market hall opened',1812,'speaks of the market hall as still being built'],['the chapel was built',1795,'speaks of the chapel as still being planned']],office:['Mayor Penn',1798,1806]},
 {town:'Coldharbour',facts:[['the gasworks opened',1868,'speaks of the gasworks as still being built'],['the great storm struck',1874,'says the town has never had a great storm'],['the library opened',1879,'speaks of the library as still being planned'],['the pier was built',1861,'speaks of the pier as still being planned']],office:['Mayor Okafor',1865,1876]},
 {town:'Dunsby',facts:[['the telegraph arrived',1852,'speaks of the telegraph as still to come'],['the cholera outbreak ended',1857,'speaks of the cholera outbreak as still going on'],['the park opened',1863,'speaks of the park as still being planned'],['the bank was founded',1844,'speaks of the bank as still being planned']],office:['Mayor Hale',1850,1860]},
 {town:'Everleigh',facts:[['the tram line opened',1891,'speaks of the tram line as still being built'],['the theatre burned',1898,'describes the theatre as still standing'],['the electric lights arrived',1902,'speaks of electric lights as still to come'],['the museum opened',1885,'speaks of the museum as still being planned']],office:['Mayor Lin',1889,1900]}];
const label=e=>e.replace(/ (opened|burned|flooded|struck|ended|arrived|was founded|was built)$/,'');
const said=t=>`In the fictional town of ${t.town}: ${t.facts.map(([e,y])=>`${e} in ${y}`).join(', ')}, and ${t.office[0]} was mayor from ${t.office[1]} to ${t.office[2]}.`;
const pic=t=>({t:'setups',title:`Fictional ${t.town}: dated events`,head:'Event',rows:[...t.facts.map(([e,y])=>[e,`${y}`]),[`${t.office[0]} mayor`,`${t.office[1]}–${t.office[2]}`]],cols:['Year']});
/* A document: what it mentions as past, whether it names the mayor as mayor, and what it speaks of as still to come. */
const docs=t=>{const [f0,f1,f2,f3]=t.facts,[m,m0,m1]=t.office;return [
 {kind:'letter',past:[f0],mayor:true,future:[],lo:Math.max(f0[1],m0),hi:m1},
 {kind:'diary entry',past:[f3],mayor:false,future:[f0],lo:f3[1],hi:f0[1]-1},
 {kind:'newspaper notice',past:[f0,f3],mayor:true,future:[f1],lo:Math.max(f0[1],f3[1],m0),hi:Math.min(m1,f1[1]-1)},
 {kind:'shop ledger note',past:[f1],mayor:false,future:[f2],lo:f1[1],hi:f2[1]-1},
 {kind:'petition',past:[f3],mayor:true,future:[f0],lo:Math.max(f3[1],m0),hi:Math.min(m1,f0[1]-1)},
 {kind:'sermon',past:[f1,f2],mayor:false,future:[],lo:Math.max(f1[1],f2[1]),hi:null}];};
const docSaid=(t,d)=>{const parts=[];if(d.past.length)parts.push(`mentions that ${d.past.map(p=>p[0]).join(' and that ')}`);if(d.mayor)parts.push(`calls ${t.office[0]} the mayor`);for(const f of d.future)parts.push(f[2]);return `An undated fictional ${d.kind} ${parts.length>1?`${parts.slice(0,-1).join(', ')} and ${parts.at(-1)}`:parts[0]}.`;};
const RULES='A document was written in or after the year of any event it mentions as past, while anyone it calls mayor held office, and before the year of anything it speaks of as not having happened yet.';
export default {
id:'history-m-dating-documents',subject:'history',level:4,grade:8,standard:'C3 D2.His.10.6-8, D2.His.11.6-8',
title:'Dating a document from its contents',
goal:'Use what an undated document mentions to find the earliest and latest years it could have been written, and spot details that do not fit a claimed date.',
points:20,
skills:{earliest:'The earliest possible year',window:'The dating window',anachronism:'Spotting anachronisms'},
steps:[
 {skill:'earliest',say:'Many old documents carry no date, but what they say can date them. A letter that mentions the railway opening in fictional Aldbury cannot have been written before the railway opened in 1846. The latest event a document mentions as past sets its earliest possible year.',pic:pic(TOWNS[0])},
 {skill:'earliest',say:'Each detail adds a limit, and the tightest limit wins. A notice that mentions both the school’s founding (1838) and the railway (1846) must date from 1846 or later; the school alone would only have said 1838 or later.',pic:pic(TOWNS[0]),
  check:{prompt:'Try it: in the fictional town of Aldbury the school was founded in 1838 and the town hall burned in 1852. An undated fictional notice mentions that the school was founded and that the town hall burned. What is the earliest year it could have been written?',answer:1852,options:[1852,1838,1845],hint:'It must come after both events. Which is later?',pic:{t:'setups',title:'Fictional Aldbury: dated events',head:'Event',rows:[['the school was founded','1838'],['the town hall burned','1852']],cols:['Year']}}},
 {skill:'window',say:'Other details set a latest year. Calling Grey the mayor means the letter was written while Grey held office, 1840 to 1849. Speaking of the bridge that opened in 1855 as still being planned means it was written before 1855, so 1854 at the latest.',pic:pic(TOWNS[0])},
 {skill:'window',say:'Put the limits together to get a window. A letter that mentions the railway (1846) and calls Grey the mayor (to 1849) was written between 1846 and 1849: 1849 - 1846 = 3 years apart, so any of 4 years.',eq:'1849 - 1846 = 3',pic:pic(TOWNS[0]),
  check:{prompt:'Try it: in the fictional town of Dunsby the telegraph arrived in 1852, and Mayor Hale was mayor from 1850 to 1860. An undated fictional letter mentions that the telegraph arrived and calls Mayor Hale the mayor. What is the latest year it could have been written?',answer:1860,options:[1860,1852,1850],hint:'Hale had to be mayor when it was written.',pic:{t:'setups',title:'Fictional Dunsby: dated events',head:'Event',rows:[['the telegraph arrived','1852'],['Mayor Hale mayor','1850–1860']],cols:['Year']}}},
 {skill:'anachronism',say:'An anachronism is something that does not belong to the time a document claims. A diary dated 1842 that mentions the railway opening is suspect, because the railway opened in 1846: either the date is wrong or the diary was written later.',pic:pic(TOWNS[0])},
 {skill:'anachronism',say:'To test a claimed date, check every detail’s year against it. Events mentioned as past must be no later than the date; offices must be held on that date; things spoken of as not yet happened must still be in the future.',pic:pic(TOWNS[0]),
  check:{prompt:'Try it: in the fictional town of Aldbury the railway opened in 1846 and the town hall burned in 1852. A fictional diary dated 1850 mentions that the railway opened and that the town hall burned. Which detail is an anachronism: the railway or the town hall?',answer:'the town hall',options:['the town hall','the railway'],hint:'Which event happened after 1850?',pic:{t:'setups',title:'Fictional Aldbury: dated events',head:'Event',rows:[['the railway opened','1846'],['the town hall burned','1852']],cols:['Year']}}}],
progression:{requires:['history-m-sources','history-m-bce-ce'],operations:2,demand:'Take the latest year among past events, limit it by an office and by things still to come, and test a claimed date against each detail.'},
items(add){
 const yn=[];
 TOWNS.forEach((t,j)=>{const T=said(t),P=pic(t);
  docs(t).forEach((d,k)=>{const D=docSaid(t,d);
   /* Earliest and latest possible years, and the window's width (the Try-its' Aldbury letter is left out of the latest). */
   add('earliest',`${T} ${D} ${RULES} What is the earliest year it could have been written?`,d.lo,P,`The latest limit from below is ${d.lo}${d.mayor&&d.lo===t.office[1]?`, when ${t.office[0]} became mayor`:''}.`);
   if(d.hi!==null&&!(j===0&&k===0))add('window',`${T} ${D} ${RULES} What is the latest year it could have been written?`,d.hi,P,`The tightest limit from above is ${d.hi}${d.future.length&&d.hi===d.future[0][1]-1?`, the year before ${d.future[0][0]}`:''}.`);
   if(d.hi!==null)add('window',`${T} ${D} ${RULES} How many different years could it have been written in, counting both ends?`,d.hi-d.lo+1,P,`From ${d.lo} to ${d.hi}: ${d.hi} - ${d.lo} + 1 = ${d.hi-d.lo+1} years.`);
   /* Could it have been written in a given year? */
   for(const y of new Set(d.hi===null?[d.lo+1,d.lo+20,d.lo-1,d.lo-3]:[d.lo+1,d.hi,d.lo-1,d.hi+1])){const ok=y>=d.lo&&(d.hi===null||y<=d.hi);
    add('window',`${T} ${D} ${RULES} Could it have been written in ${y}: yes or no?`,ok?'yes':'no',P,ok?`${y} is inside the window ${d.lo}${d.hi===null?' or later':`–${d.hi}`}.`:`${y} is outside the window ${d.lo}${d.hi===null?' or later':`–${d.hi}`}.`);yn.push(ok?'yes':'no');}});
  /* Anachronisms: a document dated between two events mentions both. */
  const fs=[...t.facts].sort((a,b)=>a[1]-b[1]);
  for(let i=0;i+1<fs.length;i++){const [a,ya]=fs[i],[b,yb]=fs[i+1],y=ya+Math.floor((yb-ya)/2);if(y===ya||(j===0&&a==='the railway opened'))continue;const first=i%2===0;
   add('anachronism',`${T} A fictional diary dated ${y} mentions that ${first?a:b} and that ${first?b:a}. Which detail is an anachronism: ${label(first?a:b)} or ${label(first?b:a)}?`,label(b),P,`${b[0].toUpperCase()+b.slice(1)} in ${yb}, after the diary’s date of ${y}; ${a} in ${ya}, before it.`,[label(b).replace(/^the /,'')]);}
  for(const [y,ok] of [[t.office[1]+1,true],[t.office[2]+2,false],[t.office[1]-1,false],[t.office[2]-1,true]]){
   add('anachronism',`${T} A fictional letter dated ${y} calls ${t.office[0]} the mayor. Is that detail an anachronism: yes or no?`,ok?'no':'yes',P,ok?`${t.office[0]} was mayor in ${y}.`:`${t.office[0]} was not mayor in ${y}; the term ran ${t.office[1]}–${t.office[2]}.`);yn.push(ok?'no':'yes');}
  const late=fs.at(-1),early=fs[0];
  add('anachronism',`${T} A fictional diary claims to date from ${early[1]-2}. How many of the four listed events could it truthfully mention as past?`,t.facts.filter(f=>f[1]<=early[1]-2).length,P,`Every listed event happened in ${early[1]} or later, after ${early[1]-2}.`);
  add('anachronism',`${T} A fictional diary claims to date from ${late[1]}. How many of the four listed events could it truthfully mention as past?`,4,P,`All four happened by ${late[1]}.`);});
}
};
