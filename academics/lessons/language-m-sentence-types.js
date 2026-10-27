// Middle School topic (Grade 7, CCSS L.7.1a, L.7.1b): clauses and the four sentence types. Every sentence is built
// here from parts whose roles are recorded: independent clauses (a subject and a verb that can stand alone),
// dependent clauses (the same, opened by a subordinating word, so they cannot stand alone), and the joining words.
// The type follows from what was joined: one independent clause is simple; two joined with a comma and a
// coordinating conjunction is compound; an independent clause with a dependent clause is complex; and two
// independent clauses with a dependent clause is compound-complex. Every answer comes from that record.
/* Each row is a set of parts that make sense together: [independent clause, dependent clause, conjunction, second independent clause]. */
const T=[
 ['the bus was late',['because','the road was icy'],'so','we walked to school'],['the team practised',['although','it was cold'],'but','the coach left early'],
 ['the river rose',['after','the storm passed'],'so','the bridge was closed'],['Leo fixed the gate',['before','the guests arrived'],'but','the latch still stuck'],
 ['the market opened',['when','the bell rang'],'and','the crowds arrived'],['we went outside',['after','the rain stopped'],'and','the sun came out'],
 ['Mia packed her bag',['while','the soup cooled'],'but','she forgot her map'],['the lights flickered',['when','the wind picked up'],'and','the radio went quiet'],
 ['Grandpa told a story',['while','we ate dinner'],'and','everyone laughed'],['we went home',['since','the shop was closed'],'so','the trip was short'],
 ['the cat hid under the bed',['until','the storm ended'],'but','the dog stayed calm'],['Sam finished his model',['before','dinner was ready'],'and','he painted it blue']];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const dc=([w,c])=>`${w} ${c}`;
/* Build a sentence of a type from one row of parts, recording its clauses. */
const build=(type,k)=>{const [a,d,cc,b]=T[k%T.length],front=k%2===0;
 if(type==='simple')return {text:`${cap(a)}.`,ic:[a],dc:[],type};
 if(type==='compound')return {text:`${cap(a)}, ${cc} ${b}.`,ic:[a,b],dc:[],cc,type};
 if(type==='complex')return front?{text:`${cap(dc(d))}, ${a}.`,ic:[a],dc:[d],type}:{text:`${cap(a)} ${dc(d)}.`,ic:[a],dc:[d],type};
 return {text:`${cap(a)} ${dc(d)}, ${cc} ${b}.`,ic:[a,b],dc:[d],cc,type:'compound-complex'};};
const TYPES=['simple','compound','complex','compound-complex'];
const pic=s=>({t:'setups',title:'A sentence',head:'',rows:[['sentence',s.text]],cols:['Text']});
export default {
id:'language-m-sentence-types',subject:'language',level:4,grade:7,standard:'CCSS L.7.1a, L.7.1b',
title:'Clauses and sentence types',
goal:'Tell independent clauses from dependent ones, name the words that join them, and sort sentences into simple, compound, complex and compound-complex.',
points:20,
skills:{clauses:'Independent and dependent clauses',types:'The four sentence types',joining:'Joining clauses'},
steps:[
 {skill:'clauses',say:'A clause has a subject and a verb. An independent clause makes sense on its own: "the river rose". A dependent clause starts with a subordinating word such as because, when or although, so it cannot stand alone: "because the road was icy" leaves you waiting for more.',pic:{t:'setups',title:'Two kinds of clause',head:'Clause',rows:[['the river rose','independent: stands alone'],['because the road was icy','dependent: needs more']],cols:['Kind']}},
 {skill:'clauses',say:'Subordinating words include because, after, when, although, if, while, before, until and since. When one starts a clause, that clause is dependent. The coordinating conjunctions and, but and so join two clauses of equal weight instead.',pic:{t:'setups',title:'Joining words',head:'Kind',rows:[['subordinating','because, after, when, although, if, while, before, until, since'],['coordinating','and, but, so']],cols:['Words']},
  check:{prompt:'Try it: in the sentence "The lights went out when the wind picked up.", is "when the wind picked up" an independent clause or a dependent clause?',answer:'dependent',options:['independent','dependent'],hint:'Does it start with a subordinating word? Could it stand alone?',pic:{t:'setups',title:'A sentence',head:'',rows:[['sentence','The lights went out when the wind picked up.']],cols:['Text']}}},
 {skill:'types',say:'A simple sentence is one independent clause. A compound sentence joins two independent clauses with a comma and a coordinating conjunction: "The bus was late, so we stayed inside."',pic:{t:'setups',title:'Simple and compound',head:'Type',rows:[['simple','The bus was late.'],['compound','The bus was late, so we stayed inside.']],cols:['Example']}},
 {skill:'types',say:'A complex sentence has one independent clause and at least one dependent clause: "We stayed inside because the road was icy." A compound-complex sentence has two independent clauses and a dependent clause: "We stayed inside because the road was icy, but Leo fixed the gate."',pic:{t:'setups',title:'Complex and compound-complex',head:'Type',rows:[['complex','1 independent + 1 dependent'],['compound-complex','2 independent + 1 dependent']],cols:['Clauses']},
  check:{prompt:'Try it: what type of sentence is "The market opened, and the team practised."? Answer simple, compound, complex or compound-complex.',answer:'compound',options:['simple','compound','complex','compound-complex'],hint:'Count the independent clauses, then look for a dependent one.',pic:{t:'setups',title:'A sentence',head:'',rows:[['sentence','The market opened, and the team practised.']],cols:['Text']}}},
 {skill:'joining',say:'The joining word shows how ideas connect. Because and since give a cause, although and but show a contrast, after, before, when, while and until show time, if sets a condition, and so gives a result.',pic:{t:'setups',title:'What joining words show',head:'Meaning',rows:[['cause','because, since'],['contrast','although, but'],['time','after, before, when, while, until'],['condition','if'],['result','so']],cols:['Words']}},
 {skill:'joining',say:'When a dependent clause comes first, put a comma after it: "Because the road was icy, we stayed inside." When it comes last, no comma is needed: "We stayed inside because the road was icy."',pic:{t:'setups',title:'Where the comma goes',head:'Order',rows:[['dependent first','Because the road was icy, we stayed inside.'],['dependent last','We stayed inside because the road was icy.']],cols:['Example']},
  check:{prompt:'Try it: which word joins the clauses in "Mia packed her bag before the guests arrived."?',answer:'before',options:['before','packed','the'],hint:'Find the word that starts the dependent clause.',pic:{t:'setups',title:'A sentence',head:'',rows:[['sentence','Mia packed her bag before the guests arrived.']],cols:['Text']}}}],
progression:{requires:['language-e-complete-sentences','language-e-joining-words'],operations:2,demand:'Find each clause’s subject and verb, spot the subordinating or coordinating word, count the clauses of each kind, and name the type.'},
items(add){
 const MEAN={because:'cause',since:'cause',although:'contrast',after:'time',before:'time',when:'time',while:'time',until:'time',if:'condition'};
 /* Sentence types, built from parts. */
 for(let k=0;k<12;k++)for(const type of TYPES){const s=build(type,k);
  add('types',`What type of sentence is "${s.text}"? Answer simple, compound, complex or compound-complex.`,s.type,pic(s),`It has ${s.ic.length} independent clause${s.ic.length>1?'s':''}${s.dc.length?` and a dependent clause, "${dc(s.dc[0])}"`:' and no dependent clause'}, so it is ${s.type}.`,s.type==='compound-complex'?['compound complex']:[]);}
 /* Clauses: how many independent clauses, and whether a quoted part is independent or dependent. */
 for(let k=0;k<12;k++){const type=TYPES[(k+1)%4],s=build(type,k+3);
  add('clauses',`How many independent clauses are in "${s.text}"?`,s.ic.length,pic(s),`Independent: ${s.ic.map(c=>`"${c}"`).join(' and ')}.${s.dc.length?` "${dc(s.dc[0])}" is dependent.`:''}`);
  const s2=build(k%2?'complex':'compound-complex',k+7),part=k%3===0?s2.ic[0]:dc(s2.dc[0]),kind=k%3===0?'independent':'dependent';
  add('clauses',`In the sentence "${s2.text}", is "${part}" an independent clause or a dependent clause?`,kind,pic(s2),kind==='dependent'?`It starts with "${s2.dc[0][0]}", a subordinating word, so it cannot stand alone.`:`It has a subject and a verb and makes sense alone, so it is independent.`);}
 for(let k=0;k<8;k++){const s=build('compound',k+2),part=k%2?s.ic[1]:s.ic[0];
  add('clauses',`In the sentence "${s.text}", is "${part}" an independent clause or a dependent clause?`,'independent',pic(s),`Both clauses of a compound sentence can stand alone; "${s.cc}" only joins them.`);}
 /* Joining: the joining word, what it shows, and the comma rule. */
 for(let k=0;k<12;k++){const s=build(k%2?'complex':'compound',k+1),w=s.dc.length?s.dc[0][0]:s.cc;
  add('joining',`Which word joins the clauses in "${s.text}"?`,w,pic(s),s.dc.length?`"${w}" starts the dependent clause and joins it to the rest.`:`The coordinating conjunction "${w}" joins the two independent clauses.`);
  if(s.dc.length)add('joining',`In "${s.text}", what does the joining word "${w}" show: cause, contrast, time or condition?`,MEAN[w],pic(s),`"${w}" shows ${MEAN[w]}.`);}
 const CMB=[['the road was icy','we stayed inside','cause','because'],['it was cold','the team practised','contrast','although'],['the bell rang','the lights flickered','time','after'],['the bus is late','we will walk to school','condition','if'],['the shop was closed','Sam finished his model','cause','since'],['the soup cooled','Grandpa told a story','time','while']];
 CMB.forEach(([d,i,mean,w],k)=>{const opts=['because','although','after','if'].filter(x=>MEAN[x]!==MEAN[w]||x===w);const options=[...new Set([w,...opts])].slice(0,3);
  add('joining',`To join "${cap(i)}." and "${cap(d)}." into one sentence that shows ${mean}, which word fits: ${options.slice(0,-1).join(', ')} or ${options.at(-1)}?`,w,pic({text:`${cap(i)}. ${cap(d)}.`}),`Only "${w}" shows ${mean}: "${cap(i)} ${w} ${d}."`);});
 for(let k=0;k<8;k++){const [i,d]=T[(k+3)%T.length],first=k%2===0,ok=k%4<2,text=first?(ok?`${cap(dc(d))}, ${i}.`:`${cap(dc(d))} ${i}.`):(ok?`${cap(i)} ${dc(d)}.`:`${cap(i)}, ${dc(d)}.`);
  add('joining',`This topic’s comma rule: put a comma after a dependent clause that comes first, and no comma before one that comes last. Does "${text}" follow the rule: yes or no?`,ok?'yes':'no',pic({text}),first?(ok?'The dependent clause comes first and is followed by a comma.':'The dependent clause comes first, so it needs a comma after it.'):(ok?'The dependent clause comes last, with no comma before it.':'The dependent clause comes last, so it should have no comma before it.'));}
}
};
