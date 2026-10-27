// Original history lesson. Fictional Oakhaven sources (a diary, a letter, a newspaper line, a shop sign) are
// built from a fact frame (a year that can be looked up, or a present-day count of named things) or an opinion
// frame (a superlative, an "I think ... is [feeling]" line, a "should" recommendation, or a "too [judgment]"
// line), so whether a line is a fact or an opinion, which word signals the opinion, and how a fact could be
// checked all follow mechanically from which frame built the sentence (CCSS RI.3: tell facts from opinions
// in a source). The small fact table below (subjects, features, years, counts, and the one plain verb/action/
// judgment word chosen to fit each subject) holds only certain, elementary, made-up details for a fictional
// village; nothing in it is a real historical claim.
const SUBJ=[['the mill','mill','grinding stones','built','painted a brighter colour','noisy'],
 ['the stone bridge','bridge','arches','built','given a new railing','narrow'],
 ['the bakery','bakery','ovens','built','given a new sign','crowded'],
 ['the schoolhouse','schoolhouse','windows','built','given a new roof','crowded'],
 ['the market square','square','market stalls','built','cleaned more often','crowded'],
 ['the village well','well','stone steps','built','fixed at last','plain'],
 ['the chapel','chapel','bells','built','painted a brighter colour','loud'],
 ['the inn','inn','guest rooms','built','cleaned more often','crowded'],
 ['the orchard','orchard','apple trees','planted','pruned more often','small'],
 ['the town hall','hall','meeting rooms','built','given a new roof','plain']];
const SUP=['finest','prettiest','loveliest','worst','dullest'],ADJ=['boring','lovely','wonderful','dreadful','charming'];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const diary=s=>`A diary entry says: "${s}"`,letterSays=s=>`A letter says: "${s}"`,news=s=>`The newspaper printed: "${s}"`,sign=s=>`A shop sign reads: "${s}"`;
const pic=w=>({t:'passages',title:'Fictional Oakhaven source',texts:[w]});
export default {
id:"history-e-fact-opinion",
subject:"history",
level:3,
grade:3,
title:"Fact or opinion in a source",
goal:"Tell a checkable fact from a judgment, name the word that signals an opinion, and decide how a fact could be checked.",
standard:"C3 D2.His.10.3-5 / CCSS RI.3: tell facts from opinions in a source",
points:20,
skills:{"sort":"Fact or opinion","clue":"Find the opinion word","check":"How to check a fact"},
steps:[
{"skill":"sort","say":"A fact is something you can check, such as a date in a record or a count. In these questions, fact means a line you could check. If checking shows the line is wrong, it is not a true fact.","pic":{"t":"passages","title":"A fictional Oakhaven diary","texts":["A diary entry says: The toy shop was built in 1889."]}},
{"skill":"sort","say":"An opinion is what someone thinks or feels, and it cannot be proved true for everyone. Judgment words like best, worst, finest, boring, lovely, or I think are strong clues that a line is an opinion.","pic":{"t":"passages","title":"A fictional Oakhaven letter","texts":["A letter says: The toy shop is the prettiest in Oakhaven."]},
 "check":{"prompt":"A diary entry says: \"The toy shop is the prettiest in Oakhaven.\" Fact or opinion?","answer":"opinion","options":["fact","opinion"],"hint":"Look for a judgment word such as prettiest.","pic":{"t":"passages","title":"Read it","texts":["A diary entry says: The toy shop is the prettiest in Oakhaven."]}}},
{"skill":"clue","say":"To find the clue word, look for the one word that shows someone's feeling or judgment rather than something you could check, such as best, boring, or should.","pic":{"t":"passages","title":"Spot the clue","texts":["A letter says: I think the toy shop is dull."]}},
{"skill":"clue","say":"In a should line, the word should is itself the clue: it recommends an action instead of reporting one that already happened.","pic":{"t":"passages","title":"Spot the clue","texts":["A letter says: The toy shop should open earlier."]},
 "check":{"prompt":"A letter says: \"I think the toy shop is dull.\" Which word shows it is an opinion: shop, is or dull?","answer":"dull","options":["shop","is","dull"],"hint":"Which word tells how someone feels, not something that can be checked.","pic":{"t":"passages","title":"Read it","texts":["A letter says: I think the toy shop is dull."]}}},
{"skill":"check","say":"Here, cannot be checked means a feeling or judgment cannot be proved just by counting or looking up a date. People can still give reasons for their opinions, and we can look at those reasons.","pic":{"t":"rule","cond":"Is it an opinion?","yes":"it cannot be checked","no":"count or look it up"}},
{"skill":"check","say":"Check a factual claim before accepting it as a fact. A diary can contain mistakes, so compare it with other evidence.","pic":{"t":"passages","title":"Check it","texts":["A diary entry says: The toy shop was built in 1889."]},
 "check":{"prompt":"A diary entry says: \"The toy shop was built in 1889.\" How could someone check it: count it, look at a record, or it cannot be checked?","answer":"look at a record","options":["count it","look at a record","it cannot be checked"],"hint":"It names a year, so look for a record from that time.","pic":{"t":"passages","title":"Read it","texts":["A diary entry says: The toy shop was built in 1889."]}}}
],
progression:{"requires":["history-e-reading-records","language-e-parts-of-speech"],"operations":2,"demand":"Tell a checkable fact from a judgment or feeling, name the single word that signals an opinion, and decide whether a fact is checked by counting, by a record, or is a personal judgment that cannot be settled by counting or checking a date."},
items(add){
 SUBJ.forEach(([name,core,feature,verb,act,too],i)=>{
  const Name=cap(name),y1=1800+i*13,y2=y1+50,n1=2+(i%5),n2=n1+2,sup=SUP[i%5],adj=ADJ[i%5],rot=i%3;
  const pick3=arr=>[arr[rot%3],arr[(rot+1)%3],arr[(rot+2)%3]];
  [y1,y2].forEach(y=>{const w=diary(`${Name} was ${verb} in ${y}.`);
   add('sort',`${w} Fact or opinion?`,'fact',pic(w),'It names a year, and a year can be checked.',['a fact']);
   add('check',`${w} How could someone check it: count it, look at a record, or it cannot be checked?`,'look at a record',pic(w),'It names a year, so someone could look for a record from that time.',['check a record','a record','record','look at records','check the records','look it up']);});
  [n1,n2].forEach(n=>{const w=sign(`${Name} has ${n} ${feature}.`);
   add('sort',`${w} Fact or opinion?`,'fact',pic(w),'It names a number of things that could be counted.',['a fact']);
   add('check',`${w} How could someone check it: count it, look at a record, or it cannot be checked?`,'count it',pic(w),'It names a number of things that could be counted right now.',['counting it','count them','count']);});
  {const w=news(`${Name} is the ${sup} in Oakhaven.`);
   add('sort',`${w} Fact or opinion?`,'opinion',pic(w),`${cap(sup)} is a judgment; not everyone would agree.`,['an opinion']);
   const [a,b,c]=pick3([core,sup,'Oakhaven']);
   add('clue',`${w} Which word shows it is an opinion: ${a}, ${b} or ${c}?`,sup,pic(w),`${cap(sup)} says what someone thinks is best, not something that can be checked.`);}
  {const w=letterSays(`I think ${name} is ${adj}.`);
   add('sort',`${w} Fact or opinion?`,'opinion',pic(w),`${cap(adj)} is a feeling, not something everyone could check.`,['an opinion']);
   const [a,b,c]=pick3([core,'is',adj]);
   add('clue',`${w} Which word shows it is an opinion: ${a}, ${b} or ${c}?`,adj,pic(w),`${cap(adj)} tells how someone feels about it.`);}
  {const w=letterSays(`${Name} should be ${act}.`);
   add('sort',`${w} Fact or opinion?`,'opinion',pic(w),'Should recommends an action rather than reporting one that happened.',['an opinion']);
   const [a,b,c]=pick3([core,'should','be']);
   add('clue',`${w} Which word shows it is an opinion: ${a}, ${b} or ${c}?`,'should',pic(w),'Should recommends what someone thinks ought to happen.');
   add('check',`${w} How could someone check it: count it, look at a record, or it cannot be checked?`,'it cannot be checked',pic(w),'Should is a judgment about what someone thinks ought to happen, not something that can be counted or looked up.',['cannot be checked',"can't be checked","it can't be checked",'cannot check it','no one can check it']);}
  {const w=sign(`${Name} is too ${too} for Oakhaven.`);
   add('sort',`${w} Fact or opinion?`,'opinion',pic(w),'Too shows a personal judgment about how much is too much.',['an opinion']);
   const [a,b,c]=pick3([core,'too','for']);
   add('clue',`${w} Which word shows it is an opinion: ${a}, ${b} or ${c}?`,'too',pic(w),"Too signals someone's judgment, not a fact that could be checked.");
   add('check',`${w} How could someone check it: count it, look at a record, or it cannot be checked?`,'it cannot be checked',pic(w),'Too shows a personal judgment, not something that can be counted or looked up.',['cannot be checked',"can't be checked","it can't be checked",'cannot check it','no one can check it']);}
 });
}
};
