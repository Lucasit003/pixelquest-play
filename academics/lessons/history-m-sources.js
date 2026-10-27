// Middle School topic (Grade 7, C3 D2.His.9.6-8 and D2.His.10.6-8): primary and secondary sources. Every answer
// is computed from the fictional sources listed in its own question with the rule the lesson states: a source is
// primary if its maker took part in or saw the event, or if it was made in the same year as the event; otherwise
// it is secondary. How long after the event a source was made is the year made minus the event's year. Every event,
// maker and source is fictional.
const EV=[['a fire at Holloway Mill',1872],['a flood in the town of Brisk',1904],['the opening of the Corran canal',1821],['a strike at the Penhale docks',1911],['a storm that sank the ship Marigold',1853],['the founding of Elm Hill school',1890],['a royal visit to Tarrow',1838],['a bridge collapse at Fennick',1927],['a harvest fair at Ashby',1866],['an earthquake at Kesteven',1880]];
/* Source templates: [kind, years after the event, maker, relation]. Relation is 'took part', 'saw it' or 'was not there'. */
const KINDS=[
 ['diary',0,'a worker','took part'],['textbook',88,'a historian','was not there'],['newspaper report',0,'a reporter','was not there'],['memoir',38,'a child','saw it'],
 ['museum guidebook',129,'a guide','was not there'],['letter',0,'a visitor','saw it'],['documentary film',95,'a film maker','was not there'],['oral history interview',61,'a retired worker','took part'],
 ['photograph',0,'a passer-by','saw it'],['encyclopedia article',110,'an editor','was not there'],['court record',1,'a clerk','was not there'],['sketch',0,'an artist','saw it']];
const L='ABCD';
const primary=s=>s.rel!=='was not there'||s.off===0;
const rel=s=>s.rel==='was not there'?'who was not there':s.rel==='saw it'?'who saw it':'who took part';
const build=j=>{const [ev,y]=EV[j];const picks=[0,1,2,3].map(k=>KINDS[(j*5+k*3)%KINDS.length]);return {ev,y,src:picks.map(([kind,off,maker,r],k)=>({L:L[k],kind,off,maker,rel:r,made:y+off}))};};
const said=E=>`A fictional event: ${E.ev} in ${E.y}. ${E.src.map(s=>`Source ${s.L} is ${/^[aeiou]/.test(s.kind)?'an':'a'} ${s.kind} made in ${s.made} by ${s.maker} ${rel(s)}.`).join(' ')}`;
const pic=E=>({t:'setups',title:`Fictional sources: ${E.ev}, ${E.y}`,head:'Source',rows:E.src.map(s=>[s.L,s.kind,`${s.made}`,s.rel]),cols:['Kind','Made','Maker']});
const RULE='In this topic, a source is primary if its maker took part in or saw the event, or if it was made in the same year as the event.';
export default {
id:'history-m-sources',subject:'history',level:4,grade:7,standard:'C3 D2.His.9.6-8, D2.His.10.6-8',
title:'Primary and secondary sources',
goal:'Sort sources into primary and secondary by a stated rule, work out how long after an event a source was made, and choose the source that best fits a historian’s question.',
points:20,
skills:{classify:'Primary or secondary',time:'Time from the event',choose:'Choosing a source'},
steps:[
 {skill:'classify',say:'A primary source comes from the time of an event or from someone who was there: a diary, a letter, a photograph, a court record. A secondary source is made later by someone who was not there, using other sources: a textbook, an encyclopedia, a documentary.',pic:{t:'setups',title:'Two kinds of source',head:'',rows:[['primary','made then, or by someone who was there'],['secondary','made later, by someone who was not there']],cols:['Means']}},
 {skill:'classify',say:'This topic uses one rule: a source is primary if its maker took part in or saw the event, or if it was made in the same year as the event. A memoir written 38 years later by someone who saw the fire is still primary; a textbook written 88 years later by a historian is secondary.',pic:pic(build(0)),
  check:{prompt:'Try it: a fictional event: a flood in the town of Brisk in 1904. Source B is a museum guidebook made in 2033 by a guide who was not there. Using the rule that a source is primary if its maker took part in or saw the event, or if it was made in the same year, is source B primary or secondary?',answer:'secondary',options:['primary','secondary'],hint:'Was the guide there, and was the guidebook made in 1904?',pic:{t:'setups',title:'A fictional source',head:'Source',rows:[['B','museum guidebook','2033','was not there']],cols:['Kind','Made','Maker']}}},
 {skill:'time',say:'How close a source is to its event matters. Subtract the event’s year from the year the source was made: a memoir made in 1910 about a fire in 1872 was made 1910 - 1872 = 38 years later, when memories may have faded or changed.',eq:'1910 - 1872 = 38',pic:pic(build(0))},
 {skill:'time',say:'A source made in the same year is 0 years from the event. Being close in time is useful, but it is not everything: a report written that day by someone who was not there may still get details wrong.',pic:pic(build(0)),
  check:{prompt:'Try it: a fictional event: a royal visit to Tarrow in 1838. Source C is a documentary film made in 1933 by a film maker who was not there. How many years after the event was source C made?',answer:95,options:[95,105,1933],hint:'Subtract 1838 from 1933.',pic:{t:'setups',title:'A fictional source',head:'Source',rows:[['C','documentary film','1933','was not there']],cols:['Kind','Made','Maker']}}},
 {skill:'choose',say:'The best source depends on the question. To learn what it felt like to be there, choose a source by someone who took part or saw it. To learn how historians now explain the event, a secondary source that compares many records can be the better choice.',pic:{t:'setups',title:'Question and source',head:'Question',rows:[['what it was like','someone who was there'],['how it is explained now','a secondary source']],cols:['Best source']}},
 {skill:'choose',say:'When two sources both fit, compare them: the one made closer to the event is usually the better witness, and a source by someone who took part can tell what an onlooker could not see.',pic:pic(build(0)),
  check:{prompt:'Try it: a fictional event: a fire at Holloway Mill in 1872. Source A is a diary made in 1872 by a worker who took part. Source B is a textbook made in 1960 by a historian who was not there. A historian wants an account by someone who was there. Which source fits: A or B?',answer:'A',options:['A','B'],hint:'Which maker was there?',pic:{t:'setups',title:'Two fictional sources',head:'Source',rows:[['A','diary','1872','took part'],['B','textbook','1960','was not there']],cols:['Kind','Made','Maker']}}}],
progression:{requires:['history-e-primary-secondary','history-m-corroboration'],operations:2,demand:'Apply a two-part rule to each source, subtract an event year from a year made, and match a historian’s question to the right kind of source.'},
items(add){
 EV.forEach((_,j)=>{const E=build(j),S=said(E),P=pic(E);
  E.src.forEach((s,k)=>{
   /* Primary or secondary by the stated rule. */
   add('classify',`${S} ${RULE} Is source ${s.L} primary or secondary?`,primary(s)?'primary':'secondary',P,primary(s)?(s.rel!=='was not there'?`Its maker ${s.rel==='saw it'?'saw the event':'took part'}, so it is primary.`:`It was made in ${s.made}, the year of the event, so it is primary.`):`Its maker was not there and it was made ${s.off} years later, so it is secondary.`);
   /* Years from the event. */
   if((j+k)%2===0||s.off>0)add('time',`${S} How many years after the event was source ${s.L} made?`,s.off,P,`${s.made} - ${E.y} = ${s.off}.`);});
  /* Counts, and the source closest in time. */
  const np=E.src.filter(primary).length;
  add('classify',`${S} ${RULE} How many of the four sources are primary?`,np,P,`Primary: ${E.src.filter(primary).map(s=>s.L).join(', ')||'none'}.`);
  const byTime=[...E.src].sort((a,b)=>b.off-a.off);
  if(byTime[0].off!==byTime[1].off)add('time',`${S} Which source was made the longest time after the event? Answer with its letter.`,byTime[0].L,P,`Source ${byTime[0].L} was made ${byTime[0].off} years after the event, later than any other.`,[`source ${byTime[0].L.toLowerCase()}`]);
  /* Choosing between two sources for a question. */
  for(let k=0;k<4;k+=2){const a=E.src[k],b=E.src[k+1],swap=(j+k)%4>=2,[x,y]=swap?[b,a]:[a,b];
   const there=s=>s.rel!=='was not there';
   if(there(x)!==there(y))add('choose',`${S} A historian wants an account by someone who was there. Which source fits: ${x.L} or ${y.L}?`,there(x)?x.L:y.L,P,`Source ${there(x)?x.L:y.L}’s maker ${there(x)?x.rel:y.rel}; source ${there(x)?y.L:x.L}’s maker was not there.`,[`source ${(there(x)?x.L:y.L).toLowerCase()}`]);
   if(x.off!==y.off)add('choose',`${S} Which source was made closer in time to the event: ${x.L} or ${y.L}?`,x.off<y.off?x.L:y.L,P,`Source ${x.L} was made ${x.off} years after it and source ${y.L} ${y.off} years after, so ${x.off<y.off?x.L:y.L} is closer.`,[`source ${(x.off<y.off?x.L:y.L).toLowerCase()}`]);}
  const sec=E.src.filter(s=>!primary(s));
  if(sec.length===1)add('choose',`${S} ${RULE} Which one source is secondary? Answer with its letter.`,sec[0].L,P,`Every other source is primary; ${sec[0].L} was made ${sec[0].off} years later by someone who was not there.`,[`source ${sec[0].L.toLowerCase()}`]);});
}
};
