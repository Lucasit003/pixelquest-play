/* Middle School topic (Grade 8, C3 D2.His.1.6-8 and D2.His.14.6-8): the American Revolution, 1763-1783, real history.
   Every question is built from FACTS below; each row was checked against the source listed under its id in
   docs/research/MHIST_OCT27.md (the National Archives, the Library of Congress, the National Park Service, the Office of
   the Historian, Britannica). Dates are exact; an event known only to its year spans that whole year, so it is never
   compared with another event of the same year. Written in our own words; no document is quoted at length. */
/* a date as a fraction of its year, so that dates in one year still sort; a year with no month spans the whole year */
const DAY=(y,m,d)=>y+(m-1)/12+(d-1)/400,Y=y=>[y,y+0.999];
export const FACTS={
 gap:0,maxPairs:46,maxTriples:16,
 sides:['Patriot','British'],areas:['Massachusetts','Pennsylvania','New York','New Jersey','Virginia'],froms:['Parliament','the Continental Congress','Thomas Paine'],
 events:[
  {id:'ar-e1',label:'The Proclamation of 1763',y:Y(1763),when:'1763'},
  {id:'ar-e2',label:'The Sugar Act',y:Y(1764),when:'1764'},
  {id:'ar-e3',label:'The Stamp Act',y:Y(1765),when:'1765'},
  {id:'ar-e4',label:'The Stamp Act is repealed',y:[DAY(1766,3,1),DAY(1766,3,31)],when:'March 1766'},
  {id:'ar-e5',label:'The Townshend Acts',y:Y(1767),when:'1767'},
  {id:'ar-e6',label:'The Boston Massacre',y:[DAY(1770,3,5)],when:'5 March 1770'},
  {id:'ar-e7',label:'The Boston Tea Party',y:[DAY(1773,12,16)],when:'16 December 1773'},
  {id:'ar-e8',label:'The First Continental Congress meets',y:[DAY(1774,9,5)],when:'5 September 1774'},
  {id:'ar-e9',label:'The fighting at Lexington and Concord',y:[DAY(1775,4,19)],when:'19 April 1775'},
  {id:'ar-e10',label:'Washington is chosen to lead the army',y:[DAY(1775,6,15)],when:'15 June 1775'},
  {id:'ar-e11',label:'The Battle of Bunker Hill',y:[DAY(1775,6,17)],when:'17 June 1775'},
  {id:'ar-e12',label:'Common Sense is published',y:[DAY(1776,1,10)],when:'10 January 1776'},
  {id:'ar-e13',label:'The Declaration of Independence is adopted',y:[DAY(1776,7,4)],when:'4 July 1776'},
  {id:'ar-e14',label:'The Battle of Trenton',y:[DAY(1776,12,26)],when:'26 December 1776'},
  {id:'ar-e15',label:'Burgoyne surrenders at Saratoga',y:[DAY(1777,10,17)],when:'17 October 1777'},
  {id:'ar-e16',label:'The army reaches Valley Forge',y:[DAY(1777,12,19)],when:'19 December 1777'},
  {id:'ar-e17',label:'The Treaty of Alliance with France',y:[DAY(1778,2,6)],when:'6 February 1778'},
  {id:'ar-e18',label:'The Articles of Confederation take effect',y:[DAY(1781,3,1)],when:'1 March 1781'},
  {id:'ar-e19',label:'Cornwallis surrenders at Yorktown',y:[DAY(1781,10,19)],when:'19 October 1781'},
  {id:'ar-e20',label:'The Treaty of Paris is signed',y:[DAY(1783,9,3)],when:'3 September 1783'}],
 people:[
  {id:'ar-p1',name:'George Washington',did:'commanded the Continental Army',side:'Patriot'},
  {id:'ar-p2',name:'Thomas Jefferson',did:'drafted the Declaration of Independence',side:'Patriot'},
  {id:'ar-p3',name:'Thomas Paine',did:'wrote the pamphlet Common Sense',side:'Patriot'},
  {id:'ar-p4',name:'John Adams',did:'defended the soldiers of the Boston Massacre',side:'Patriot',also:['ar-p9','ar-p8']},
  {id:'ar-p5',name:'Abigail Adams',did:'urged her husband to remember the ladies',side:'Patriot'},
  {id:'ar-p6',name:'Samuel Adams',did:'led Boston’s protests against British rule',side:'Patriot',also:['ar-p7','ar-p10']},
  {id:'ar-p7',name:'John Hancock',did:'was president of the Continental Congress',side:'Patriot'},
  {id:'ar-p8',name:'Benjamin Franklin',did:'helped win the alliance with France',side:'Patriot',also:['ar-p9']},
  {id:'ar-p9',name:'John Jay',did:'helped negotiate the Treaty of Paris',side:'Patriot',also:['ar-p4','ar-p8']},
  {id:'ar-p10',name:'Paul Revere',did:'rode to warn Hancock and Samuel Adams',side:'Patriot'},
  {id:'ar-p11',name:'Crispus Attucks',did:'was killed in the Boston Massacre'},
  {id:'ar-p12',name:'Lafayette',did:'was a French volunteer general',side:'Patriot'},
  {id:'ar-p13',name:'Baron von Steuben',did:'trained the army at Valley Forge',side:'Patriot',also:['ar-p1']},
  {id:'ar-p14',name:'Horatio Gates',did:'took Burgoyne’s surrender at Saratoga',side:'Patriot'},
  {id:'ar-p15',name:'John Burgoyne',did:'was the British general beaten at Saratoga',side:'British'},
  {id:'ar-p16',name:'Lord Cornwallis',did:'was the British general beaten at Yorktown',side:'British'},
  {id:'ar-p17',name:'Thomas Gage',did:'sent British troops toward Concord',side:'British'},
  {id:'ar-p18',name:'George III',did:'was king of Great Britain',side:'British'}],
 places:[
  {id:'ar-l1',name:'Lexington',area:'Massachusetts',what:'the first shots of the war',also:['ar-l2']},
  {id:'ar-l2',name:'Concord',area:'Massachusetts',what:'the supplies the British marched to seize'},
  {id:'ar-l3',name:'Boston',area:'Massachusetts',what:'the Massacre of 1770 and a tea protest'},
  {id:'ar-l4',name:'Breed’s Hill',area:'Massachusetts',what:'most of the Bunker Hill fighting'},
  {id:'ar-l5',name:'Philadelphia',area:'Pennsylvania',what:'the meetings of the Continental Congress'},
  {id:'ar-l6',name:'Valley Forge',area:'Pennsylvania',what:'the army’s winter camp of 1777 to 1778'},
  {id:'ar-l7',name:'Trenton',area:'New Jersey',what:'a surprise attack on Hessian soldiers'},
  {id:'ar-l8',name:'Saratoga',area:'New York',what:'Burgoyne’s surrender in 1777'},
  {id:'ar-l9',name:'Yorktown',area:'Virginia',what:'Cornwallis’s surrender in 1781'},
  {id:'ar-l10',name:'New York City',area:'New York',what:'the Stamp Act Congress of 1765'}],
 things:[
  {id:'ar-t1',name:'the Proclamation of 1763',from:'King George III',what:'barred settling west of the Appalachians'},
  {id:'ar-t2',name:'the Sugar Act',from:'Parliament',what:'enforced a tax on molasses'},
  {id:'ar-t3',name:'the Stamp Act',from:'Parliament',what:'taxed printed papers in the colonies'},
  {id:'ar-t4',name:'the Townshend Acts',from:'Parliament',what:'taxed imports such as glass and tea'},
  {id:'ar-t5',name:'the Tea Act',from:'Parliament',what:'gave one company a monopoly on tea'},
  {id:'ar-t6',name:'the Intolerable Acts',from:'Parliament',what:'closed Boston Harbor and punished Massachusetts'},
  {id:'ar-t7',name:'Common Sense',from:'Thomas Paine',what:'a pamphlet urging independence'},
  {id:'ar-t8',name:'the Declaration of Independence',from:'the Continental Congress',what:'announced the colonies were independent'},
  {id:'ar-t9',name:'the Articles of Confederation',from:'the Continental Congress',what:'the first national plan of government'},
  {id:'ar-t10',name:'the Treaty of Paris',what:'recognized the United States as independent'}],
 causes:[
  {id:'ar-c1',cause:'The war with France doubled Britain’s debt',effect:'Parliament taxed the colonists directly',cy:1763,ey:1765},
  {id:'ar-c2',cause:'Colonists boycotted British goods',effect:'Parliament repealed the Stamp Act',cy:1765,ey:1766,note:'British merchants hurt by the boycott pressed for repeal.',also:['ar-c3']},
  {id:'ar-c3',cause:'The Stamp Act taxed printed papers',effect:'Colonists boycotted British goods',cy:1765,ey:1765},
  {id:'ar-c4',cause:'Parliament sent more troops to Boston',effect:'Soldiers fired on a Boston crowd',cy:1768,ey:1770,note:'The troops were sent to keep order in Boston, the centre of resistance.'},
  {id:'ar-c5',cause:'The Tea Act created a tea monopoly',effect:'Colonists dumped tea into Boston Harbor',cy:1773,ey:1773},
  {id:'ar-c6',cause:'Colonists dumped tea into Boston Harbor',effect:'Parliament passed the Intolerable Acts',cy:1773,ey:1774,also:['ar-c7']},
  {id:'ar-c7',cause:'Parliament passed the Intolerable Acts',effect:'The First Continental Congress met',cy:1774,ey:1774},
  {id:'ar-c8',cause:'British troops marched to seize supplies',effect:'Fighting broke out at Lexington and Concord',cy:1775,ey:1775},
  {id:'ar-c9',cause:'The Americans won at Saratoga',effect:'France allied with the United States',cy:1777,ey:1778},
  {id:'ar-c10',cause:'Cornwallis surrendered at Yorktown',effect:'Major fighting came to an end',cy:1781,ey:1781,note:'The war formally ended with the Treaty of Paris in 1783.'}]
};
/* The question builder over FACTS. The same builder sits in all three real-history Middle topics (egypt-mesopotamia,
   silk-roads, american-revolution); only FACTS and the wording in ASK differ. Every answer is a row of FACTS, and every
   wrong choice is another row that cannot also be right: dates are compared only when they are far enough apart that
   "about" cannot swap them, a person or place listed in a row's `also` is never offered against it, and a wrong effect
   (or cause) is only drawn from a row whose effect came before the cause (or whose cause came after the effect). */
const first=e=>e.y[0],last=e=>e.y[e.y.length-1];
const apart=(a,b,gap)=>last(a)+(a.about||b.about?gap:0)<first(b);
const order=(a,b,gap)=>apart(a,b,gap)?[a,b]:apart(b,a,gap)?[b,a]:null;
const listOf=o=>o.length===2?`${o[0]} or ${o[1]}`:`${o.slice(0,-1).join(', ')} or ${o[o.length-1]}`;
const rot=(o,k)=>o.map((_,i)=>o[(i+k)%o.length]);
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const tbl=(title,head,cols,rows)=>({t:'setups',title,head,cols,rows,hint:true});
const ok=(a,b)=>a!==b&&!(a.also||[]).includes(b.id)&&!(b.also||[]).includes(a.id);
/* Two rows to set against `row`, drawn in a fixed order that starts at k; rows on the same side come first when asked. */
const foils=(rows,row,k,key,same)=>{const pool=rot(rows,k%rows.length).filter(r=>ok(r,row)&&r[key]&&r[key]!==row[key]);
 const pick=[];for(const r of same?[...pool.filter(r=>r.side===row.side),...pool.filter(r=>r.side!==row.side)]:pool)if(pick.length<2&&!pick.some(p=>p[key]===r[key]))pick.push(r);return pick;};
function build(add,F,ASK){
 const seen=new Set(),once=(skill,prompt,answer,pic,why)=>{if(seen.has(prompt))throw new Error('repeated prompt: '+prompt);seen.add(prompt);add(skill,prompt,answer,pic,cap(why));};
 const ev=F.events,when=e=>`${e.label}: ${e.when}`,sorted=[...ev].sort((a,b)=>first(a)-first(b)),timeRows=es=>[...es].sort((a,b)=>first(a)-first(b)).map(e=>[e.label,e.when]);
 /* time: which of two happened first or later */
 const pairs=[];ev.forEach((a,i)=>ev.forEach((b,j)=>{if(j>i&&order(a,b,F.gap))pairs.push([a,b]);}));
 const step=Math.max(1,Math.ceil(pairs.length/F.maxPairs));
 pairs.filter((_,i)=>i%step===0).forEach(([a,b],i)=>{const [e1,e2]=order(a,b,F.gap),word=i%2?'later':'first',x=i%4<2?[a,b]:[b,a],ans=word==='first'?e1:e2;
  once('time',`Which happened ${word}: ${x[0].label} or ${x[1].label}?`,ans.label,tbl('In time order','Event',['When'],timeRows([a,b])),`${when(e1)}. ${when(e2)}. So the ${word==='first'?'earlier':'later'} one is: ${ans.label}${e1.about||e2.about?', even allowing for the uncertainty in the dates':''}.`);});
 /* time: first or last of three */
 let n3=0;for(const d of [1,2,3])for(let i=0;i+2*d<sorted.length&&n3<F.maxTriples;i+=2){const t=[sorted[i],sorted[i+d],sorted[i+2*d]];if(!order(t[0],t[1],F.gap)||!order(t[1],t[2],F.gap))continue;
  const word=n3%2?'last':'first',ans=word==='first'?t[0]:t[2],shown=rot(t,n3%3);n3++;
  once('time',`Which of these happened ${word}: ${listOf(shown.map(e=>e.label))}?`,ans.label,tbl('In time order','Event',['When'],timeRows(t)),`In time order: ${t.map(when).join('; ')}.`);}
 /* time: when did it happen */
 ev.forEach((e,i)=>{const far=rot(ev,i+1).filter(o=>o!==e&&o.when!==e.when&&order(o,e,F.gap*2));const pick=[];for(const o of far)if(pick.length<2&&!pick.some(p=>p.when===o.when))pick.push(o);if(pick.length<2)return;
  const opts=rot([e,...pick],i%3).map(o=>o.when);
  once('time',`${e.label}. When was that: ${listOf(opts)}?`,e.when,tbl('Dates','Event',['When'],timeRows([e,...pick])),`${when(e)}.${e.note?' '+e.note:''}`);});
 /* people: who did it, what they did, which side, and one true-or-false statement each */
 F.people.forEach((p,i)=>{const f=foils(F.people,p,i+1,'did',true);if(f.length<2)return;
  const names=rot([p,...f],i%3).map(o=>o.name),dids=rot([p,...f],(i+1)%3).map(o=>o.did),rows=[p,...f].map(o=>[o.name,o.did]);
  once('people',`Who ${p.did}: ${listOf(names)}?`,p.name,tbl('Who did what','Person',['Known for'],rows),`${p.name} ${p.did}.${p.note?' '+p.note:''}`);
  once('people',`Which of these describes ${p.name}: ${listOf(dids)}?`,p.did,tbl('Who did what','Person',['Known for'],rows),`${p.name} ${p.did}. ${f[0].name} ${f[0].did}, and ${f[1].name} ${f[1].did}.`);
  if(ASK.side&&F.sides.includes(p.side)){const s=F.sides.length<=3?rot(F.sides,i%F.sides.length):rot([p.side,...F.sides.filter(x=>x!==p.side).slice(i%2,i%2+2)],i%3);
   once('people',`${ASK.side(p.name)}: ${listOf(s)}?`,p.side,tbl('Who did what','Person',[ASK.sideHead],[[p.name,p.side]]),`${p.name} ${p.did}: ${ASK.sideWhy(p)}.`);}
  const t=i%2===0,o=f[0];
  once('people',`True or false: ${p.name} ${t?p.did:o.did}.`,t?'true':'false',tbl('Who did what','Person',['Known for'],t?[[p.name,p.did]]:[[p.name,p.did],[o.name,o.did]]),t?`True: ${p.name} ${p.did}.`:`False: it was ${o.name} who ${o.did}. ${p.name} ${p.did}.`);});
 /* places: what each is known for, and where it is */
 F.places.forEach((p,i)=>{const f=foils(F.places,p,i+1,'what',false);if(f.length<2)return;
  once('people',`Which place is known for ${p.what}: ${listOf(rot([p,...f],i%3).map(o=>o.name))}?`,p.name,tbl('Places','Place',[ASK.areaHead,'Known for'],[p,...f].map(o=>[o.name,o.area,o.what])),`${p.name} (${p.area}) is known for ${p.what}.`);
  if(p.area&&F.areas.includes(p.area)){const a=[p.area,...rot(F.areas.filter(x=>x!==p.area),i).slice(0,F.areas.length>2?2:1)];
   once('people',`${ASK.area(p.name)}: ${listOf(rot(a,i%a.length))}?`,p.area,tbl('Places','Place',[ASK.areaHead],[[p.name,p.area]]),`${p.name} is in ${p.area}: it is known for ${p.what}.`);}});
 /* things: where each came from (or who made it), and what it was */
 F.things.forEach((x,i)=>{const f=foils(F.things,x,i+1,'what',false);if(f.length<2)return;
  once('why',`Which description fits ${x.name}: ${listOf(rot([x,...f],i%3).map(o=>o.what))}?`,x.what,tbl('Things and ideas','Thing',['What it was'],[x,...f].map(o=>[o.name,o.what])),`${x.name}: ${x.what}.${x.note?' '+x.note:''}`);
  if(x.from&&F.froms.includes(x.from)){const a=[x.from,...rot(F.froms.filter(y=>y!==x.from),i).slice(0,F.froms.length>2?2:1)];
   once('why',`${ASK.from(x.name)}: ${listOf(rot(a,i%a.length))}?`,x.from,tbl('Things and ideas','Thing',[ASK.fromHead],[[x.name,x.from]]),`${x.name} (${x.what}) ${ASK.fromWhy(x)}.`);}});
 /* causes and effects, both ways */
 const C=F.causes;
 C.forEach((c,i)=>{const fe=rot(C,i+1).filter(o=>ok(o,c)&&(c.cy==null||o.ey==null||o.ey<c.cy)).slice(0,2);
  if(fe.length===2)once('why',`${c.cause}. What did that lead to: ${listOf(rot([c,...fe],i%3).map(o=>o.effect))}?`,c.effect,tbl('Cause and effect','Cause',['Effect'],[[c.cause,c.effect]]),`${c.cause}. That led to this: ${c.effect}.${fe.some(o=>o.ey!=null)&&c.cy!=null?' The other choices happened before it.':''}${c.note?' '+c.note:''}`);
  const fc=rot(C,i+2).filter(o=>ok(o,c)&&(c.ey==null||o.cy==null||o.cy>c.ey)).slice(0,2);
  if(fc.length===2)once('why',`${c.effect}. What helped cause that: ${listOf(rot([c,...fc],(i+1)%3).map(o=>o.cause))}?`,c.cause,tbl('Cause and effect','Cause',['Effect'],[[c.cause,c.effect]]),`${c.cause}. That led to this: ${c.effect}.${fc.some(o=>o.cy!=null)&&c.ey!=null?' The other choices happened after it.':''}${c.note?' '+c.note:''}`);});
}
const ASK={side:n=>`Which side was ${n} on`,sideHead:'Side',sideWhy:p=>`${p.name} was on the ${p.side} side`,
 area:n=>`In which present-day state is ${n}`,areaHead:'State today',from:n=>`Where did ${n} come from`,fromHead:'Made by',fromWhy:x=>`came from ${x.from}`};
const tl=events=>({t:'timeline',events});
export default {
id:'history-m-american-revolution',subject:'history',level:4,grade:8,standard:'C3 D2.His.1.6-8, D2.His.14.6-8',
title:'The American Revolution, 1763-1783',
goal:'Put the road to independence in order, from the Proclamation of 1763 to the Treaty of Paris, match its people, places and documents, and explain how each step led to the next.',
points:20,
skills:{time:'Dates and order',people:'People and places',why:'Laws, documents, causes and effects'},
steps:[
 {skill:'why',say:'Britain won the French and Indian War in 1763, but the war doubled its national debt. Parliament decided the colonists should help pay, and for the first time taxed them directly. In 1763 a royal proclamation also barred settlement west of the Appalachian Mountains.',eq:'war debt → new taxes → protest',pic:tl(['1763 Proclamation','1764 Sugar Act','1765 Stamp Act','1767 Townshend Acts'])},
 {skill:'why',say:'The Stamp Act of 1765 taxed printed papers. Colonists argued that only their own elected assemblies could tax them. Delegates from nine colonies met in New York, and many colonists boycotted British goods. Parliament repealed the act in March 1766, but said it could still tax the colonies.',pic:{t:'setups',title:'Laws from London',head:'Law',cols:['Year','What it did'],rows:[['Sugar Act','1764','enforced a tax on molasses'],['Stamp Act','1765','taxed printed papers'],['Townshend Acts','1767','taxed glass, paper, tea and more'],['Tea Act','1773','gave one company a tea monopoly']]},
  check:{prompt:'Try it: after the Stamp Act, colonists stopped buying British goods. What did Parliament do in 1766?',answer:'repealed the Stamp Act',options:['repealed the Stamp Act','passed the Tea Act','closed Boston Harbor'],hint:'British merchants were losing sales, and they pressed Parliament to undo the tax.',pic:{t:'setups',title:'A boycott',head:'Who',cols:['What happened'],rows:[['Colonists','stopped buying British goods'],['British merchants','lost sales and complained']]}}},
 {skill:'time',say:'Tension grew in Boston. On 5 March 1770 soldiers fired into a crowd, killing five people; Crispus Attucks was among the first to fall. On 16 December 1773, protesters against the Tea Act threw 342 chests of tea into Boston Harbor. Parliament answered with the Intolerable Acts of 1774.',eq:'5 March 1770 → 16 December 1773 → 1774',pic:tl(['1770 Boston Massacre','1773 Tea Party','1774 Intolerable Acts','1774 First Congress'])},
 {skill:'time',say:'On 19 April 1775 the first shots were fired at Lexington, and fighting followed at Concord. Congress chose George Washington to command the new Continental Army on 15 June 1775, two days before the Battle of Bunker Hill, which was fought mostly on Breed’s Hill.',pic:tl(['19 Apr 1775','15 Jun 1775','17 Jun 1775']),
  check:{prompt:'Try it: which came first, Washington being chosen to lead the army or the Battle of Bunker Hill?',answer:'Washington chosen to lead',options:['Washington chosen to lead','the Battle of Bunker Hill'],hint:'Compare the two dates in June 1775 day by day.',pic:{t:'setups',title:'Two events of June 1775',head:'Event',cols:['Where'],rows:[['Congress picks a commander','Philadelphia'],['The fight on Breed’s Hill','near Boston']]}}},
 {skill:'why',say:'In January 1776 Thomas Paine’s pamphlet Common Sense urged a complete break with Britain, and it sold widely. On 2 July Congress voted for independence, and on 4 July 1776 it adopted the Declaration of Independence, drafted mainly by Thomas Jefferson, in Philadelphia.',pic:{t:'setups',title:'Two documents of 1776',head:'Document',cols:['By','When'],rows:[['Common Sense','Thomas Paine','January 1776'],['Declaration of Independence','Congress; drafted by Jefferson','July 1776']]}},
 {skill:'people',say:'The war turned at Saratoga, where the British general Burgoyne surrendered on 17 October 1777. The victory helped persuade France to sign a Treaty of Alliance on 6 February 1778. At Valley Forge, from February 1778, Baron von Steuben drilled Washington’s army.',pic:{t:'setups',title:'Who helped the American side',head:'Person',cols:['Role'],rows:[['Benjamin Franklin','diplomat in Paris'],['Lafayette','French volunteer general'],['Baron von Steuben','trained the army'],['Horatio Gates','general at Saratoga']]}},
 {skill:'time',say:'American and French forces trapped Lord Cornwallis at Yorktown, Virginia, and he surrendered on 19 October 1781. That ended the major fighting. In the Treaty of Paris, signed on 3 September 1783 by John Adams, Benjamin Franklin and John Jay for the United States, Britain recognized American independence.',eq:'19 October 1781 → 3 September 1783',pic:tl(['1777 Saratoga','1778 French alliance','1781 Yorktown','1783 Treaty of Paris']),
  check:{prompt:'Try it: which victory helped bring France into the war on the American side?',answer:'Saratoga',options:['Saratoga','Lexington','Bunker Hill'],hint:'Look for the battle where a whole British army surrendered in 1777.',pic:{t:'setups',title:'Three battles',head:'Battle',cols:['Year'],rows:[['Lexington','1775'],['Bunker Hill','1775'],['Saratoga','1777']]}}}],
progression:{requires:['history-m-cause-chains','history-m-sources'],operations:2,demand:'Order dated events to the day, match people, places and documents to their roles, and trace each British law and colonial response to what it led to.'},
items(add){build(add,FACTS,ASK);}
};
