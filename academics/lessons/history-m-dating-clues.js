// Middle School topic (Grade 6, C3 D2.His.1.6-8): dating events from clues. Every answer is computed from the
// fictional record in its own question: one event has a known year, and each clue places another event a stated
// number of years before or after an event already dated, so every year follows by adding or subtracting along
// the clues. No two events share a year. Every town and event is fictional.
const T=[
 {town:'Brindle',ev:['the mill opened','the bridge was built','the school opened','the great fire broke out','the market began','the church bells were cast'],nn:['the mill opening','the bridge building','the school opening','the great fire','the market starting','the bell casting'],anchor:1820,clues:[[1,0,15],[2,1,-7],[3,2,3],[4,0,-6],[5,3,12]]},
 {town:'Corran',ev:['the harbour was dug','the lighthouse was lit','the fish market opened','the storm wrecked the pier','the pier was rebuilt','the ferry began'],nn:['the harbour digging','the lighthouse lighting','the fish market opening','the pier wreck','the pier rebuilding','the ferry starting'],anchor:1764,clues:[[1,0,9],[2,0,-4],[3,1,11],[4,3,2],[5,2,20]]},
 {town:'Dunmere',ev:['the town charter was signed','the wall was finished','the first fair was held','the plague struck','the guildhall was built','the river flooded'],nn:['the charter signing','the wall finishing','the first fair','the plague year','the guildhall building','the river flood'],anchor:1402,clues:[[1,0,22],[2,1,-13],[3,2,31],[4,1,5],[5,4,-17]]},
 {town:'Eskby',ev:['the railway arrived','the station burned','the new station opened','the park opened','the library opened','the tram line opened'],nn:['the railway arriving','the station fire','the new station opening','the park opening','the library opening','the tram line opening'],anchor:1851,clues:[[1,0,18],[2,1,2],[3,0,-9],[4,3,25],[5,2,14]]},
 {town:'Fennick',ev:['the abbey was founded','the abbey was enlarged','the village grew up','the bridge fell','the stone bridge was built','the abbey closed'],nn:['the abbey founding','the abbey enlarging','the village growing up','the bridge collapse','the stone bridge building','the abbey closing'],anchor:1135,clues:[[1,0,48],[2,0,-12],[3,1,-20],[4,3,6],[5,1,90]]},
 {town:'Galloway Cross',ev:['the crossroads inn opened','the turnpike road was built','the coaching yard opened','the inn was sold','the post office opened','the inn closed'],nn:['the inn opening','the turnpike building','the coaching yard opening','the inn sale','the post office opening','the inn closing'],anchor:1712,clues:[[1,0,-8],[2,1,15],[3,2,9],[4,3,-21],[5,3,37]]}];
const years=t=>{const y=[t.anchor];for(const [i,j,d] of t.clues)y[i]=y[j]+d;return y;};
const cap=s=>s[0].toUpperCase()+s.slice(1);
const clueSaid=(t,[i,j,d])=>`${cap(t.ev[i])} ${Math.abs(d)} year${Math.abs(d)===1?'':'s'} ${d>0?'after':'before'} ${t.ev[j]}.`;
const said=t=>`In the fictional town of ${t.town}, ${t.ev[0]} in ${t.anchor}. ${t.clues.map(c=>clueSaid(t,c)).join(' ')}`;
const pic=(t,hint)=>({t:'setups',title:`Fictional ${t.town}: clues`,head:'Event',rows:[[t.ev[0],`${t.anchor}`],...t.clues.map(([i,j,d])=>[t.ev[i],`${Math.abs(d)} years ${d>0?'after':'before'} ${t.ev[j]}`])],cols:['When'],...(hint?{hint:true}:{})});
export default {
id:'history-m-dating-clues',subject:'history',level:4,grade:6,standard:'C3 D2.His.1.6-8',
title:'Dating events from clues',
goal:'Work out the year of each event from one known date and clues that say how many years before or after, then order the events and find the years between them.',
points:20,
skills:{year:'Finding a year from clues',order:'Putting events in order',gap:'Years between events'},
steps:[
 {skill:'year',say:'Records often give one firm date and say when other things happened compared with it. In the fictional town of Brindle, the mill opened in 1820, and the bridge was built 15 years after the mill, so the bridge dates from 1820 + 15 = 1835.',eq:'1820 + 15 = 1835',pic:pic(T[0])},
 {skill:'year',say:'A clue can point back as well: the school opened 7 years before the bridge, so 1835 - 7 = 1828. Work along the clues one at a time, always from an event you have already dated.',eq:'1835 - 7 = 1828',pic:pic(T[0]),
  check:{prompt:'Try it: in the fictional town of Brindle, the mill opened in 1820, the bridge was built 15 years after the mill, the school opened 7 years before the bridge, and the great fire broke out 3 years after the school opened. In what year was the great fire?',answer:1831,options:[1831,1825,1838],hint:'The school was 1828. Add 3.',pic:pic(T[0])}},
 {skill:'order',say:'Once every event has a year, put them in order from the earliest. Brindle: the market began in 1814, the mill opened in 1820, the school in 1828, the fire in 1831, the bridge in 1835 and the church bells, cast 12 years after the fire, in 1843.',pic:{t:'timeline',events:['1814','1820','1828','1831','1835','1843']}},
 {skill:'order',say:'Be careful with "before": the market began 6 years before the mill, so it is the earliest of these events, even though its clue comes later in the record.',eq:'1820 - 6 = 1814',pic:pic(T[0]),
  check:{prompt:'Try it: in the fictional town of Corran, the harbour was dug in 1764. The lighthouse was lit 9 years after the harbour was dug. The fish market opened 4 years before the harbour was dug. Which came first: the lighthouse lighting or the fish market opening?',answer:'the fish market opening',options:['the fish market opening','the lighthouse lighting'],hint:'Work out both years: 1764 + 9 and 1764 - 4.',pic:pic(T[1])}},
 {skill:'gap',say:'To find the years between two events, date both, then subtract the earlier year from the later one. From the market (1814) to the bridge (1835) is 1835 - 1814 = 21 years.',eq:'1835 - 1814 = 21',pic:pic(T[0])},
 {skill:'gap',say:'Sometimes the gap can be added straight from the clues: the bridge came 15 years after the mill and the mill 6 years after the market, so the bridge came 15 + 6 = 21 years after the market.',eq:'15 + 6 = 21',pic:pic(T[0]),
  check:{prompt:'Try it: in the fictional town of Eskby, the railway arrived in 1851. The station burned 18 years after the railway arrived. The new station opened 2 years after the station burned. How many years after the railway arrived did the new station open?',answer:20,options:[20,16,2],hint:'Add the two gaps: 18 + 2.',pic:pic(T[3])}}],
progression:{requires:['history-m-bce-ce','history-e-order-from-clues'],operations:2,demand:'Add or subtract a gap from a dated event, chain clues, compare years to order events, and subtract one year from another.'},
items(add){
 T.forEach((t,j)=>{const S=said(t),P=pic(t),Y=years(t),n=t.ev.length;
  /* The year of each event (the Try-it's Brindle fire is left out). */
  for(let i=1;i<n;i++){if(j===0&&i===3)continue;
   add('year',`${S} When ${t.ev[i]}, what year was it?`,Y[i],P,`Follow the clues from ${t.anchor}: ${t.clues.slice(0,t.clues.findIndex(c=>c[0]===i)+1).map(([a,b,d])=>`${t.ev[a]} = ${Y[b]} ${d>0?'+':'-'} ${Math.abs(d)} = ${Y[a]}`).join('; ')}.`);}
  /* Order: which of two came first, the earliest and the latest (the Try-it's Corran pair is left out). */
  for(const [a,b] of [[1,2],[3,4],[2,5],[1,4],[0,3]]){if(j===1&&a===1&&b===2)continue;const first=Y[a]<Y[b]?a:b,swap=(j+a)%2===1,[x,y]=swap?[b,a]:[a,b];
   add('order',`${S} Which came first: ${t.nn[x]} or ${t.nn[y]}?`,t.nn[first],P,`${cap(t.nn[a])} was in ${Y[a]} and ${t.nn[b]} in ${Y[b]}, so ${t.nn[first]} came first.`,[t.nn[first].replace(/^the /,'')]);}
  const ord=[...Y.keys()].sort((p,q)=>Y[p]-Y[q]);
  add('order',`${S} Which event came earliest?`,t.nn[ord[0]],P,`In order: ${ord.map(k=>`${t.nn[k]} (${Y[k]})`).join(', ')}.`,[t.nn[ord[0]].replace(/^the /,'')]);
  add('order',`${S} Which event came last?`,t.nn[ord.at(-1)],P,`In order: ${ord.map(k=>`${t.nn[k]} (${Y[k]})`).join(', ')}.`,[t.nn[ord.at(-1)].replace(/^the /,'')]);
  /* Gaps between two events (the Try-it's Eskby gap is left out). */
  for(const [a,b] of [[0,5],[2,4],[1,3],[3,5],[2,1],[4,5]]){if(j===3&&a===2&&b===1)continue;const g=Math.abs(Y[a]-Y[b]);
   add('gap',`${S} How many years passed between ${t.nn[a]} and ${t.nn[b]}?`,g,P,`${Math.max(Y[a],Y[b])} - ${Math.min(Y[a],Y[b])} = ${g} years.`);}});
}
};
