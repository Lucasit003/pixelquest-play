// Middle School topic (Grade 8, C3 D2.His.14.6-8 and D2.His.15.6-8): chains of causes. Every answer is computed from
// the fictional chain in its own question, with the rules the lesson states: an event with one cause happens when
// that cause happens; "together" means it needed all of its causes; "either ... was enough" means any one of its
// causes would do; and a starting event happens unless the question removes it. A cause is necessary for an event if
// removing it alone stops the event. Every town and event is fictional.
/* A scenario: events [name, year] (in time order), and links {to, from:[...], mode:'one'|'and'|'or'}. */
const S=[
 {town:'Aldbury',ev:[['the drought',1820],['the new tax',1821],['the poor harvest',1821],['the bank failure',1822],['the comet sighting',1822],['the bread riot',1823],['the council’s fall',1824]],
  links:[{to:'the poor harvest',from:['the drought'],mode:'one'},{to:'the bread riot',from:['the poor harvest','the new tax'],mode:'and'},{to:'the council’s fall',from:['the bread riot','the bank failure'],mode:'or'}]},
 {town:'Brindle',ev:[['the mill fire',1850],['the cold winter',1851],['the lost jobs',1851],['the river flood',1852],['the new church',1852],['the families leaving',1853],['the school closing',1855]],
  links:[{to:'the lost jobs',from:['the mill fire'],mode:'one'},{to:'the families leaving',from:['the lost jobs','the cold winter'],mode:'or'},{to:'the school closing',from:['the families leaving','the river flood'],mode:'and'}]},
 {town:'Corran',ev:[['the gold find',1871],['the new road',1872],['the rush of miners',1873],['the water shortage',1874],['the town band',1874],['the fever outbreak',1875],['the hospital opening',1876]],
  links:[{to:'the rush of miners',from:['the gold find','the new road'],mode:'and'},{to:'the fever outbreak',from:['the rush of miners','the water shortage'],mode:'and'},{to:'the hospital opening',from:['the fever outbreak'],mode:'one'}]},
 {town:'Dunmere',ev:[['the port opening',1790],['the war at sea',1791],['the busy trade',1792],['the royal wedding',1793],['the shipyard growth',1794],['the new houses',1796],['the town charter',1798]],
  links:[{to:'the busy trade',from:['the port opening'],mode:'one'},{to:'the shipyard growth',from:['the busy trade','the war at sea'],mode:'or'},{to:'the new houses',from:['the shipyard growth'],mode:'one'},{to:'the town charter',from:['the new houses'],mode:'one'}]},
 {town:'Elmsford',ev:[['the railway arrival',1840],['the cheap coal',1841],['the factory opening',1842],['the circus visit',1843],['the strike',1845],['the wage rise',1846],['the union hall',1847]],
  links:[{to:'the factory opening',from:['the railway arrival','the cheap coal'],mode:'or'},{to:'the strike',from:['the factory opening'],mode:'one'},{to:'the wage rise',from:['the strike'],mode:'one'},{to:'the union hall',from:['the wage rise','the strike'],mode:'and'}]},
 {town:'Farrowby',ev:[['the dam building',1900],['the dry summer',1901],['the lake forming',1902],['the canal plan',1903],['the eclipse',1904],['the farm growth',1905],['the market fair',1906]],
  links:[{to:'the lake forming',from:['the dam building'],mode:'one'},{to:'the farm growth',from:['the lake forming','the canal plan'],mode:'or'},{to:'the market fair',from:['the farm growth','the dry summer'],mode:'and'}]}];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const and=l=>l.length<2?l.join(''):`${l.slice(0,-1).join(', ')} and ${l.at(-1)}`;
const linkSaid=l=>l.mode==='one'?`${cap(l.from[0])} led to ${l.to}.`:l.mode==='and'?`${cap(l.from[0])} and ${l.from[1]} together led to ${l.to}.`:`Either ${l.from[0]} or ${l.from[1]} was enough to cause ${l.to}.`;
const said=s=>`In the fictional town of ${s.town}, the events were ${and(s.ev.map(([n,y])=>`${n} (${y})`))}. ${s.links.map(linkSaid).join(' ')}`;
const happens=(s,e,gone)=>{if(e===gone)return false;const l=s.links.find(x=>x.to===e);if(!l)return true;const r=l.from.map(f=>happens(s,f,gone));return l.mode==='or'?r.some(Boolean):r.every(Boolean);};
const ancestors=(s,e)=>{const l=s.links.find(x=>x.to===e);if(!l)return [];return [...new Set(l.from.flatMap(f=>[f,...ancestors(s,f)]))];};
const steps=(s,a,b)=>{if(a===b)return 0;const l=s.links.find(x=>x.to===b);if(!l)return Infinity;return 1+Math.min(...l.from.map(f=>steps(s,a,f)));};
const year=(s,e)=>s.ev.find(x=>x[0]===e)[1];
const pic=s=>({t:'setups',title:`Fictional ${s.town}: causes`,head:'Event',rows:s.links.map(l=>[l.to,l.mode==='one'?l.from[0]:l.mode==='and'?`${l.from.join(' + ')} (all needed)`:`${l.from.join(' or ')} (either)`]),cols:['Caused by']});
export default {
id:'history-m-cause-chains',subject:'history',level:4,grade:8,standard:'C3 D2.His.14.6-8, D2.His.15.6-8',
title:'Chains of causes',
goal:'Follow a chain of causes from start to finish, test whether an event would still have happened without one cause, and tell long-term causes from immediate ones.',
points:20,
skills:{chain:'Following a chain',necessary:'Necessary causes',timing:'Long-term and immediate causes'},
steps:[
 {skill:'chain',say:'Historians explain an event by tracing the chain of causes behind it. In fictional Aldbury the drought led to the poor harvest; the poor harvest and a new tax together led to a bread riot; and either the riot or a bank failure was enough to bring the council down.',pic:pic(S[0])},
 {skill:'chain',say:'Count the links to see how far back a cause sits. From the drought to the council’s fall is three links: drought to harvest, harvest to riot, riot to fall. The drought is a distant cause; the riot is a close one.',pic:pic(S[0]),
  check:{prompt:'Try it: in fictional Aldbury the drought led to the poor harvest, the poor harvest and the new tax together led to the bread riot, and the riot or the bank failure could each cause the council’s fall. How many links lead from the drought to the bread riot?',answer:2,options:[2,1,3],hint:'Drought to harvest is one link. Then harvest to riot.',pic:pic(S[0])}},
 {skill:'necessary',say:'Test a cause by imagining it away. The bread riot needed both the poor harvest and the new tax, so without the new tax there is no riot. A cause that the event cannot happen without is a necessary cause.',pic:pic(S[0])},
 {skill:'necessary',say:'When either of two causes was enough, removing one does not stop the event. The council would still have fallen without the riot, because the bank failure alone was enough. So the riot was not necessary for the council’s fall.',pic:pic(S[0]),
  check:{prompt:'Try it: in fictional Aldbury, either the bread riot or the bank failure was enough to cause the council’s fall, and both happened. If the bank failure had not happened, would the council still have fallen: yes or no?',answer:'yes',options:['yes','no'],hint:'Was the bread riot alone enough?',pic:pic(S[0])}},
 {skill:'timing',say:'A long-term cause builds up over time, years before the event; the immediate cause is the last link, the trigger just before it. For the bread riot of 1823, the drought of 1820 is a long-term cause and the poor harvest of 1821, together with the new tax, is the immediate one.',pic:pic(S[0])},
 {skill:'timing',say:'To find the earliest cause of an event, follow every link back from it and pick the event with the earliest year. Events that do not lead to it, however early, are not its causes.',pic:pic(S[0]),
  check:{prompt:'Try it: in fictional Corran the gold find (1871) and the new road (1872) led to the rush of miners (1873), then the rush and the water shortage (1874) led to the fever (1875). Which cause of the fever is the earliest?',answer:'the gold find',options:['the gold find','the new road','the water shortage'],hint:'Follow every link back from the fever and compare the years.',pic:pic(S[2])}}],
progression:{requires:['history-e-causes-consequences','history-m-reigns'],operations:3,demand:'Follow links back through a chain, apply "together" and "either" rules to a removed cause, and compare the years of the causes.'},
items(add){
 const yn=[];
 S.forEach((s,j)=>{const T=said(s),P=pic(s),last=s.ev.at(-1)[0];
  /* Following the chain: what directly led to an event with one cause, and how many links between two events (the Try-it's Aldbury drought to riot is left out). */
  s.links.filter(l=>l.mode==='one').forEach(l=>add('chain',`${T} What directly led to ${l.to}?`,l.from[0],P,`The chain says ${l.from[0]} led to ${l.to}.`,[l.from[0].replace(/^the /,'')]));
  for(const e of s.ev.map(x=>x[0]))for(const z of [last,s.links[1].to]){const n=steps(s,e,z);if(!Number.isFinite(n)||n<1||(j===0&&e==='the drought'&&z==='the bread riot'))continue;
   add('chain',`${T} Counting the shortest way, how many links lead from ${e} to ${z}?`,n,P,`Following the links back from ${z}, ${e} is ${n} link${n>1?'s':''} away.`);}
  /* Necessary causes: remove one event and test the last event (the Try-it's Aldbury bank failure is left out). */
  for(const e of s.ev.map(x=>x[0]).filter(x=>x!==last)){if(j===0&&e==='the bank failure')continue;const still=happens(s,last,e);
   add('necessary',`${T} If ${e} had not happened, would ${last} still have happened: yes or no?`,still?'yes':'no',P,still?`Even without ${e}, every link still holds or another cause was enough, so ${last} still happens.`:`Without ${e}, a link breaks that ${last} depends on, so it does not happen.`);yn.push(still?'yes':'no');}
  const mid=s.links[1].to;for(const e of ancestors(s,mid)){const nec=!happens(s,mid,e);
   add('necessary',`${T} Was ${e} a necessary cause of ${mid}: yes or no?`,nec?'yes':'no',P,nec?`Without ${e}, ${mid} would not have happened.`:`${cap(mid)} could still have happened without ${e}.`);yn.push(nec?'yes':'no');}
  /* Timing: the earliest cause of the last event and of the middle event (the Try-it's Corran fever is left out), and the immediate cause. */
  for(const z of [last,mid]){if(j===2&&z==='the fever outbreak')continue;const an=ancestors(s,z),early=an.reduce((m,e)=>year(s,e)<year(s,m)?e:m);if(an.filter(e=>year(s,e)===year(s,early)).length>1)continue;
   add('timing',`${T} Which cause of ${z} is the earliest?`,early,P,`The causes of ${z} are ${and(an)}; the earliest is ${early} (${year(s,early)}).`,[early.replace(/^the /,'')]);}
  for(const l of s.links)if(l.mode==='one')add('timing',`${T} What is the immediate cause of ${l.to}, the last link just before it?`,l.from[0],P,`${cap(l.from[0])} leads straight to ${l.to}.`,[l.from[0].replace(/^the /,'')]);
  const an=ancestors(s,last);
  add('timing',`${T} How many years passed between the earliest cause of ${last} and ${last} itself?`,year(s,last)-Math.min(...an.map(e=>year(s,e))),P,`The earliest cause is in ${Math.min(...an.map(e=>year(s,e)))} and ${last} in ${year(s,last)}: ${year(s,last)-Math.min(...an.map(e=>year(s,e)))} years.`);
  const not=s.ev.map(x=>x[0]).filter(e=>e!==last&&!an.includes(e));
  for(const e of [...not,an[j%an.length]])add('timing',`${T} Is ${e} one of the causes of ${last}, near or far back: yes or no?`,an.includes(e)?'yes':'no',P,an.includes(e)?`Following the links back from ${last} reaches ${e}.`:`No chain of links runs from ${e} to ${last}.`);});
}
};
