/* Middle School topic (Grade 7, C3 D2.His.1.6-8 and D2.His.14.6-8): the Silk Roads and medieval trade, real history.
   Every question is built from FACTS below; each row was checked against the source listed under its id in
   docs/research/MHIST_OCT27.md (Britannica, UNESCO, the British Library's International Dunhuang Programme, the
   Smithsonian, the Met). Rows marked `about` are only compared with dates more than F.gap years away. Where sources
   disagree (Zhang Qian's start, the silkworm story), the row is hedged. Written in our own words. */
export const FACTS={
 gap:30,maxPairs:44,maxTriples:14,
 sides:['China','Mongolia','Venice','Morocco'],areas:['China','Uzbekistan','Iraq','Turkey','Italy','India','Morocco'],froms:['China','Central Asia','India'],
 events:[
  {id:'sr-e1',label:'Zhang Qian sets out from Han China',y:[-139],about:true,when:'about 139 BCE',note:'Some books give 138 BCE.'},
  {id:'sr-e2',label:'The first Mogao cave temples are made',y:[366],when:'366 CE'},
  {id:'sr-e3',label:'Faxian leaves China for India',y:[399],when:'399 CE'},
  {id:'sr-e4',label:'Silkworm eggs reach Constantinople',y:[550],about:true,when:'about 550 CE',note:'The story comes from the Byzantine writer Procopius.'},
  {id:'sr-e5',label:'Xuanzang sets out for India',y:[629],when:'629 CE'},
  {id:'sr-e6',label:'Xuanzang returns to China',y:[645],when:'645 CE'},
  {id:'sr-e7',label:'The Battle of Talas is fought',y:[751],when:'751 CE'},
  {id:'sr-e8',label:'Work begins on Baghdad',y:[762],when:'762 CE'},
  {id:'sr-e9',label:'The Diamond Sutra is printed',y:[868],when:'868 CE'},
  {id:'sr-e10',label:'Temüjin becomes Genghis Khan',y:[1206],when:'1206 CE'},
  {id:'sr-e11',label:'Kublai Khan names the Yuan dynasty',y:[1271],when:'1271 CE'},
  {id:'sr-e12',label:'Ibn Battuta begins his travels',y:[1325],when:'1325 CE'},
  {id:'sr-e13',label:'The Black Death reaches Sicily',y:[1347],when:'1347 CE'},
  {id:'sr-e14',label:'Zheng He’s first voyage sets sail',y:[1405],when:'1405 CE'},
  {id:'sr-e15',label:'Richthofen coins the name Silk Roads',y:[1877],when:'1877 CE'}],
 people:[
  {id:'sr-p1',name:'Zhang Qian',did:'was a Han envoy to Central Asia',side:'China',also:['sr-p2']},
  {id:'sr-p2',name:'Emperor Wu of Han',did:'sent Zhang Qian to the west',side:'China'},
  {id:'sr-p3',name:'Faxian',did:'was an early monk pilgrim to India',side:'China',also:['sr-p4']},
  {id:'sr-p4',name:'Xuanzang',did:'brought Buddhist texts back from India',side:'China'},
  {id:'sr-p5',name:'Justinian I',did:'ruled when silkworms reached Constantinople',side:'Byzantium'},
  {id:'sr-p6',name:'al-Mansur',did:'founded the city of Baghdad',side:'Abbasids'},
  {id:'sr-p7',name:'Genghis Khan',did:'founded the Mongol Empire',side:'Mongolia'},
  {id:'sr-p8',name:'Kublai Khan',did:'founded the Yuan dynasty in China',side:'Mongolia'},
  {id:'sr-p9',name:'Marco Polo',did:'spent about 17 years in Kublai’s China',side:'Venice'},
  {id:'sr-p10',name:'Ibn Battuta',did:'travelled for some 30 years from Morocco',side:'Morocco'},
  {id:'sr-p11',name:'Zheng He',did:'led seven Ming voyages across the ocean',side:'China'},
  {id:'sr-p12',name:'Ferdinand von Richthofen',did:'is credited with the name Silk Roads',side:'Germany'}],
 places:[
  {id:'sr-l1',name:'Chang’an',area:'China',what:'being the Tang capital, now Xi’an'},
  {id:'sr-l2',name:'Dunhuang',area:'China',what:'the Mogao Caves and the Diamond Sutra'},
  {id:'sr-l3',name:'Kashgar',area:'China',what:'its oasis at the foot of the Pamirs'},
  {id:'sr-l4',name:'Samarkand',area:'Uzbekistan',what:'being the heart of Sogdian trade'},
  {id:'sr-l5',name:'Baghdad',area:'Iraq',what:'being the Abbasid capital from 762'},
  {id:'sr-l6',name:'Constantinople',area:'Turkey',what:'being the Byzantine capital, now Istanbul'},
  {id:'sr-l7',name:'Venice',area:'Italy',what:'being Marco Polo’s home city'},
  {id:'sr-l8',name:'Calicut',area:'India',what:'being the port where Zheng He died'},
  {id:'sr-l9',name:'Messina',area:'Italy',what:'being where plague reached Sicily in 1347'},
  {id:'sr-l10',name:'Tangier',area:'Morocco',what:'being Ibn Battuta’s home town'}],
 things:[
  {id:'sr-t1',name:'silk',from:'China',what:'cloth made from silkworm thread'},
  {id:'sr-t2',name:'paper',from:'China',what:'a writing material later made in Baghdad'},
  {id:'sr-t3',name:'porcelain',from:'China',what:'fine ceramic fired at very high heat'},
  {id:'sr-t4',name:'the heavenly horses',from:'Central Asia',what:'prized horses from the Ferghana valley'},
  {id:'sr-t5',name:'Buddhism',from:'India',what:'a religion carried to China by monks'},
  {id:'sr-t6',name:'gunpowder',from:'China',what:'an explosive powder first used in fireworks'},
  {id:'sr-t7',name:'a caravanserai',what:'a roadside inn for caravans'},
  {id:'sr-t8',name:'the Bactrian camel',what:'a two-humped camel used in caravans'},
  {id:'sr-t9',name:'a paiza',what:'a Mongol pass that protected travellers'},
  {id:'sr-t10',name:'the Diamond Sutra',from:'China',what:'the oldest printed book with a date'}],
 causes:[
  {id:'sr-c1',cause:'Han China wanted allies against the Xiongnu',effect:'Zhang Qian was sent west',cy:-139,ey:-139},
  {id:'sr-c2',cause:'Zhang Qian made a second mission',effect:'Early routes to Central Asia opened',cy:-119,ey:-119,note:'UNESCO dates the second mission to 119 BCE.'},
  {id:'sr-c3',cause:'Monks smuggled silkworm eggs west',effect:'Silk was made in the Byzantine Empire',cy:550,ey:561,note:'The traditional story dates this to about 550 CE; the industry was set up by 561.'},
  {id:'sr-c4',cause:'Xuanzang brought back many scriptures',effect:'Xuanzang spent his life translating them',cy:645,ey:646},
  {id:'sr-c5',cause:'Mongol rulers protected the caravans',effect:'Overland trade across Eurasia revived',cy:1206,ey:1250,note:'Historians call this the Pax Mongolica, in the 1200s and 1300s.'},
  {id:'sr-c6',cause:'Plague struck the army besieging Kaffa',effect:'Genoese ships carried plague to Sicily',cy:1346,ey:1347,note:'Plague spread on many ships and routes, not on one fleet alone.'},
  {id:'sr-c7',cause:'Sea routes carried more and more trade',effect:'The overland caravan routes declined',cy:1400,ey:1500,note:'Sea routes had largely replaced them by the 1400s and 1500s.'}]
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
const ASK={side:n=>`Where did ${n} come from`,sideHead:'Home',sideWhy:p=>`${p.name} came from ${p.side}`,
 area:n=>`In which country is ${n} today`,areaHead:'Country today',from:n=>`Where did ${n} first come from`,fromHead:'First came from',fromWhy:x=>`first came from ${x.from}`};
const tl=events=>({t:'timeline',events});
export default {
id:'history-m-silk-roads',subject:'history',level:4,grade:7,standard:'C3 D2.His.1.6-8, D2.His.14.6-8',
title:'The Silk Roads and medieval trade',
goal:'Follow the land and sea routes that joined China to Central Asia, the Middle East and Europe: who travelled them, which cities and goods they linked, and what they spread.',
points:20,
skills:{time:'Dates and order',people:'Travellers and cities',why:'Goods, ideas and effects'},
steps:[
 {skill:'people',say:'The Silk Roads were not one road but a web of land and sea routes linking China with Central Asia, India, the Middle East and Europe. The name is modern: a German geographer, Ferdinand von Richthofen, is usually credited with it, in 1877.',pic:{t:'setups',title:'Stops along the land routes, east to west',head:'City',cols:['Country today'],rows:[['Chang’an (Xi’an)','China'],['Dunhuang','China'],['Kashgar','China'],['Samarkand','Uzbekistan'],['Baghdad','Iraq'],['Constantinople (Istanbul)','Turkey']]}},
 {skill:'time',say:'Around 139 BCE, Emperor Wu of Han sent the envoy Zhang Qian west to look for allies against the Xiongnu. He was captured on the way, but his reports and a later mission helped open the routes to Central Asia.',pic:tl(['c. 139 BCE Zhang Qian','366 Mogao caves','629 Xuanzang','762 Baghdad','1206 Genghis Khan','1405 Zheng He'])},
 {skill:'why',say:'Silk from China was among the most valuable goods, but caravans also carried ceramics, spices, precious stones and the famous horses of Ferghana. Merchants rested at caravanserais, roadside inns where camels were stabled and goods stored.',pic:{t:'setups',title:'Some goods and where they came from',head:'Goods',cols:['From'],rows:[['silk','China'],['porcelain','China'],['heavenly horses','Ferghana, Central Asia'],['spices','India and Southeast Asia']]}},
 {skill:'why',say:'Ideas travelled too. Buddhist monks carried their faith from India into China. Xuanzang left Chang’an in 629, studied in India and came home in 645 with scriptures he spent his life translating. At Dunhuang, cave temples were cut from 366 onward.',pic:{t:'setups',title:'Two monks on the routes',head:'Monk',cols:['Set out','Came home'],rows:[['Faxian','399','by sea, past Sri Lanka'],['Xuanzang','629','overland, in 645']]},
  check:{prompt:'Try it: Han emperors prized the "heavenly horses". Where did those horses come from?',answer:'Ferghana',options:['Ferghana','Venice','Morocco'],hint:'Think of the valley in Central Asia where the Han bought their horses.',pic:{t:'setups',title:'Han China’s problem',head:'',cols:['Han horses'],rows:[['Size','smaller than Central Asian breeds'],['Wanted','big, strong, fast horses']]}}},
 {skill:'time',say:'In 1206 Temüjin was chosen as Genghis Khan. As the Mongol Empire grew, its rulers protected caravans and gave merchants passes called paiza. Overland trade revived; Marco Polo of Venice set out in 1271 and spent about 17 years in China.',eq:'1206 Genghis Khan → 1271 Marco Polo sets out',pic:tl(['1206','1271','1325','1347'])},
 {skill:'people',say:'Sea routes mattered as much as land. Ships used the monsoon winds to cross the Indian Ocean. From 1405 to 1433 the Ming admiral Zheng He led seven great voyages to Southeast Asia, India, Arabia and East Africa. Later, sea trade replaced much of the overland caravan trade.',pic:{t:'setups',title:'Land and sea',head:'',cols:['Land routes','Sea routes'],rows:[['Moved by','camels and horses','ships and monsoon winds'],['Stopped at','oasis towns','ports']]},
  check:{prompt:'Try it: which came first, Genghis Khan taking power or Ibn Battuta beginning his travels?',answer:'Genghis Khan',options:['Genghis Khan','Ibn Battuta'],hint:'Genghis Khan rose in the early 1200s; Ibn Battuta set out more than a century later.',pic:{t:'setups',title:'Two names from the Mongol age',head:'Person',cols:['Home'],rows:[['Genghis Khan','Mongolia'],['Ibn Battuta','Morocco']]}}},
 {skill:'why',say:'The same routes carried disease. Plague came out of Inner Asia; in 1346 and 1347 it struck an army besieging the Crimean port of Kaffa, and Genoese ships carried it to Mediterranean ports. It reached Messina in Sicily in October 1347, the start of the Black Death in Europe.',pic:{t:'setups',title:'The plague moves west, 1346 to 1347',head:'Place',cols:['What happened'],rows:[['Kaffa, Crimea','plague strikes a besieging army'],['Constantinople','plague arrives by ship'],['Messina, Sicily','plague arrives, October 1347']]},
  check:{prompt:'Try it: which of these travellers commanded a great fleet of ships?',answer:'Zheng He',options:['Marco Polo','Zheng He','Xuanzang'],hint:'He was a Chinese admiral, not a monk or a merchant from Venice.',pic:{t:'setups',title:'Three travellers',head:'Traveller',cols:['Travelled as'],rows:[['Marco Polo','a Venetian merchant'],['Xuanzang','a Buddhist monk'],['the admiral','commander of a fleet']]}}}],
progression:{requires:['history-m-journeys','history-m-egypt-mesopotamia'],operations:2,demand:'Order medieval dates, match travellers, cities and goods to where they belong, and link a cause on the routes to its effect.'},
items(add){build(add,FACTS,ASK);}
};
