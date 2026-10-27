// Middle School topic (Grade 6, C3 D2.His.13.6-8): corroboration across several accounts. Every answer is computed
// from the fictional accounts written out in its own question, with the rules the lesson states: an account by
// someone who saw the event is independent; an account copied from another adds no new evidence and counts as the
// account it came from (a copy of a copy leads back to the first account). A claim's support is the number of
// independent accounts behind it. It is corroborated when at least two independent accounts support it, and it stands
// on one account only when just one does. A copy only ever repeats claims its source makes. Every event, account and
// claim is fictional. Extends history-e-weighing-evidence (a copy adds no observation) and
// history-e-firsthand-accounts (who saw it) from two or three sources to four, chains of copies and many claims.
const L='ABCD';
/* Each account is [who saw it, or null for a copy; the letter it was copied from, or null; its claim keys]. */
const EVENTS=[
 {ev:'the fire at Saltmere granary',y:1712,short:'Saltmere granary fire',
  claims:{night:'it began at night',roof:'the roof fell in',bell:'a bell was rung',carts:'two carts were saved',rain:'rain put it out'},
  acc:[['a watchman',null,'night roof bell carts'],[null,'A','night roof carts'],['a miller',null,'night bell rain'],[null,'C','night rain']]},
 {ev:'the flood at Brayford',y:1788,short:'Brayford flood',
  claims:{dawn:'the water rose at dawn',wheel:'the mill wheel broke',horse:'a horse was swept away',bridge:'the bridge held',boats:'boats were tied up'},
  acc:[['a ferryman',null,'dawn wheel horse bridge'],[null,'C','dawn horse boats'],['a farmer',null,'dawn horse boats'],['a baker',null,'dawn bridge']]},
 {ev:'the storm at Kettle Cove',y:1754,short:'Kettle Cove storm',
  claims:{east:'an east wind blew',sank:'three boats sank',light:'the lighthouse went dark',mast:'a mast washed ashore',hail:'hail fell'},
  acc:[[null,'B','east sank'],[null,'D','east sank light'],['a fisherman',null,'east light hail'],['a harbourmaster',null,'east sank light mast']]},
 {ev:'the comet seen over Ashwell',y:1744,short:'Ashwell comet',
  claims:{tail:'it had a long tail',west:'it rose in the west',green:'it glowed green',week:'it was seen for a week',dogs:'dogs howled'},
  acc:[['a schoolmaster',null,'tail west week'],['a shepherd',null,'tail green week dogs'],[null,'B','tail green dogs']]},
 {ev:'the royal visit to Pellham',y:1765,short:'Pellham royal visit',
  claims:{rain:'it rained all day',coach:'the coach was late',speech:'the queen gave a speech',bells:'church bells rang',feast:'a feast was held'},
  acc:[['an innkeeper',null,'rain coach bells feast'],['a weaver',null,'coach speech bells'],[null,'A','rain coach feast'],['a blacksmith',null,'rain bells']]},
 {ev:'the opening of the Marrow canal',y:1792,short:'Marrow canal opening',
  claims:{barge:'a barge led the way',band:'a band played',gate:'a lock gate stuck',crowd:'a crowd lined the banks',fell:'a man fell in'},
  acc:[[null,'C','barge band'],['a carter',null,'barge crowd fell'],[null,'D','barge band crowd'],['a clerk',null,'barge band gate crowd']]},
 {ev:'the frost fair at Dunmere',y:1739,short:'Dunmere frost fair',
  claims:{ice:'the river froze solid',ox:'an ox was roasted',tents:'tents stood on the ice',skate:'children skated',crack:'the ice cracked'},
  acc:[['a printer',null,'ice ox tents skate'],['a tailor',null,'ice ox crack'],['a potter',null,'ice tents skate'],[null,'C','ice tents']]},
 {ev:'the fall of the Thornby church tower',y:1690,short:'Thornby tower falls',
  claims:{gale:'a gale was blowing',noon:'it fell at noon',bell:'the bell cracked',hurt:'no one was hurt',dust:'dust filled the street'},
  acc:[[null,'C','gale noon hurt'],['a mason',null,'noon dust'],['a vicar',null,'gale noon bell hurt'],[null,'C','gale bell']]}];
const build=e=>{const acc=e.acc.map(([who,from,keys],i)=>({L:L[i],who,from,keys:keys.split(' ')}));
 const by=Object.fromEntries(acc.map(a=>[a.L,a])),root=a=>a.from?root(by[a.from]):a.L;
 const listed=k=>acc.filter(a=>a.keys.includes(k)).map(a=>a.L),roots=k=>[...new Set(acc.filter(a=>a.keys.includes(k)).map(root))].sort();
 return {...e,acc,root,listed,roots,keys:Object.keys(e.claims)};};
const said=E=>`Fictional accounts of ${E.ev} in ${E.y}. `+E.acc.map(a=>`Account ${a.L}, ${a.from?`copied from account ${a.from}`:`by ${a.who} who saw it`}: ${a.keys.map(k=>E.claims[k]).join('; ')}.`).join(' ');
const table=E=>({t:'setups',title:`Fictional accounts: ${E.short}, ${E.y}`,head:'Claim',rows:[['who wrote it',...E.acc.map(a=>a.from?`copied ${a.from}`:'saw it')],...E.keys.map(k=>[E.claims[k],...E.acc.map(a=>a.keys.includes(k)?'yes':'—')])],cols:E.acc.map(a=>a.L)});
const and=l=>l.length<2?l.join(''):`${l.slice(0,-1).join(', ')} and ${l[l.length-1]}`;
const cap=s=>s[0].toUpperCase()+s.slice(1);
const or=l=>`${l.slice(0,-1).join(', ')} or ${l[l.length-1]}`;
/* Why a claim has the support it has: which accounts list it, and which of them are copies. */
const why=(E,k)=>{const li=E.listed(k),r=E.roots(k),cp=li.filter(x=>!r.includes(x));
 return `Account${li.length>1?'s':''} ${and(li)} list${li.length>1?'':'s'} it. `+(cp.length?`${and(cp.map(x=>`${x} is a copy of ${E.acc.find(a=>a.L===x).from}`))}, so ${cp.length>1?'they add':'it adds'} nothing new. `:'')+`That leaves ${r.length} independent account${r.length>1?'s':''}: ${and(r)}.`;};
/* A teaching example and two more for the Try-its, none of them used in the question pool. */
const BALLOON={t:'setups',title:'Fictional accounts: Wendle balloon, 1785',head:'Claim',rows:[['who wrote it','saw it','copied A','saw it'],['it landed in a field','yes','yes','yes'],['two men were aboard','yes','yes','—'],['a dog ran after it','yes','—','yes']],cols:['A','B','C']};
const HAIL={t:'setups',title:'Fictional accounts: Lindow hailstorm, 1771',head:'Claim',rows:[['who wrote it','saw it','saw it','copied B'],['hail broke windows','yes','yes','yes'],['lightning struck a barn','—','yes','yes']],cols:['A','B','C']};
export default {
id:'history-m-corroboration',subject:'history',level:4,grade:6,standard:'C3 D2.His.13.6-8',
title:'Corroboration across accounts',
goal:'Trace each account to where its information came from, count the independent accounts behind a claim, tell which claims two independent accounts corroborate, and find the claim that stands on one account only.',
points:20,
skills:{count:'Counting independent support',corroborate:'Corroborated claims',single:'Claims on one account only'},
steps:[
 {skill:'count',say:'Historians test a claim by checking it against other accounts of the same event. Here are three fictional accounts of a balloon landing. A and C were written by people who saw it. B was copied from A.',pic:BALLOON},
 {skill:'count',say:'A copy is not new evidence. B only repeats what A said, so A and B together are one independent account. Count where the information came from, not how many pages repeat it. The claim that two men were aboard is listed twice but has one independent account behind it.',pic:BALLOON,
  check:{prompt:'Try it: in fictional accounts of a balloon landing at Wendle in 1785, account A, by a farmer who saw it, and account B, copied from account A, both say two men were aboard. Account C, by a carter who saw it, does not. How many independent accounts support the claim that two men were aboard?',answer:1,options:[1,2,3],hint:'B is a copy of A, so A and B count as one account.',pic:BALLOON}},
 {skill:'count',say:'A copy of a copy still leads back to the first account. If D was copied from C and C was copied from A, then A, C and D are all one independent account. Follow every copy back before you count.',pic:{t:'setups',title:'A copy of a copy',head:'Account',rows:[['A','saw it','A'],['C','copied A','A'],['D','copied C','A']],cols:['Where it came from','Leads back to']}},
 {skill:'corroborate',say:'A claim is corroborated when at least two independent accounts support it. In the balloon accounts, A and C both say it landed in a field, and both writers saw it, so that claim is corroborated. So is the dog: A and C again.',pic:BALLOON,
  check:{prompt:'Try it: in the fictional Wendle balloon accounts, A and C were written by people who saw the landing and B was copied from A. A, B and C all say it landed in a field. Is the claim that it landed in a field corroborated by at least two independent accounts: yes or no?',answer:'yes',options:['yes','no'],hint:'A and C are two independent accounts, whatever B says.',pic:BALLOON}},
 {skill:'corroborate',say:'Agreement between a copy and its original corroborates nothing, however many copies there are. Corroboration does not prove a claim either: two honest witnesses can both be wrong. It makes a claim stronger.',pic:BALLOON},
 {skill:'single',say:'A claim that stands on one independent account only has nothing to check it against. It may still be true, so a historian marks it as uncertain and looks for another independent account of the same event.',pic:HAIL},
 {skill:'single',say:'In these fictional hailstorm accounts, C was copied from B. Lightning striking a barn is listed twice, by B and its copy C, so it stands on B alone. Hail breaking windows is corroborated by A and B.',pic:HAIL,
  check:{prompt:'Try it: fictional accounts of a 1771 hailstorm at Lindow: A and B saw it, and C copied B. All three say hail broke windows; B and C say lightning struck a barn. Which claim rests on one independent account?',answer:'lightning struck a barn',options:['lightning struck a barn','hail broke windows'],hint:'Follow C back to B, then count the accounts behind each claim.',pic:HAIL}}],
progression:{requires:['history-e-weighing-evidence','history-e-firsthand-accounts'],operations:2,demand:'Follow each copy back to the account it came from, then count the distinct independent accounts that list a claim and compare that count with two.'},
items(add){
 const seen=new Set(),once=(skill,prompt,...rest)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,...rest);};
 let turn=0;
 /* Three-option choices with exactly one right answer, the right one in each position in turn. */
 const choices=(right,wrong,cap)=>{const out=[];for(let i=0;i<wrong.length;i++)for(let j=i+1;j<wrong.length;j++)for(const r of right){if(out.length>=cap)return out;const o=[wrong[i],wrong[j]];o.splice(turn++%3,0,r);out.push([r,o]);}return out;};
 EVENTS.map(build).forEach(E=>{const head=said(E),pic=table(E),n=k=>E.roots(k).length,acc=k=>[k];
  const obs=E.acc.filter(a=>!a.from).map(a=>a.L);
  once('count',`${head} How many of the accounts are independent?`,obs.length,pic,`Only ${and(obs)} ${obs.length>1?'were':'was'} written by someone who saw it; ${and(E.acc.filter(a=>a.from).map(a=>`${a.L} is a copy`))}. So ${obs.length} accounts are independent.`);
  for(const k of E.keys){const c=E.claims[k],s=n(k);
   once('count',`${head} How many independent accounts support the claim that ${c}?`,s,pic,why(E,k));
   once('corroborate',`${head} Is the claim that ${c} corroborated by at least two independent accounts: yes or no?`,s>=2?'yes':'no',pic,`${why(E,k)} ${s>=2?'Two or more independent accounts agree, so it is corroborated.':'One independent account is not enough, so it is not corroborated.'}`);
   if(s===1){const r=E.roots(k)[0];
    once('single',`${head} The claim that ${c} stands on one independent account. Which account is it?`,r,pic,`${why(E,k)} So the claim rests on account ${r}.`,[`account ${r}`.toLowerCase()]);}}
  const strong=E.keys.filter(k=>n(k)>=2),weak=E.keys.filter(k=>n(k)===1);
  for(const [r,o] of choices(strong,weak,3))
   once('corroborate',`${head} Which of these claims is corroborated by at least two independent accounts: ${or(o.map(k=>E.claims[k]))}?`,E.claims[r],pic,`${cap(o.map(k=>`${E.claims[k]}: ${n(k)} independent account${n(k)>1?'s':''}`).join('; '))}. Only ${E.claims[r]} has two or more.`,acc(r));
  for(const [r,o] of choices(weak,strong,3))
   once('single',`${head} Which of these claims stands on one independent account only: ${or(o.map(k=>E.claims[k]))}?`,E.claims[r],pic,`${cap(o.map(k=>`${E.claims[k]}: ${n(k)} independent account${n(k)>1?'s':''}`).join('; '))}. Only ${E.claims[r]} rests on a single account.`,acc(r));});
}
};
