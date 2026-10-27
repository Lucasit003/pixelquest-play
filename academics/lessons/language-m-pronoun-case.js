// Middle School topic (Grade 6, CCSS L.6.1a): subject and object pronouns. Every sentence is put together here from a
// subject part or an object frame plus one pronoun, so the right case follows from where the pronoun was placed. A
// pronoun in the subject, before the action word, takes the subject form (I, he, she, we, they). A pronoun after an
// action word, or after a word such as to, for, at or of, takes the object form (me, him, her, us, them). A pair joined
// by "and" takes the same form the pronoun takes alone: that is the "take the other person out" test the lesson
// states. Every sentence is in the past tense, so the verb never changes with the pronoun and never hints at the
// answer. Each sentence holds exactly one pronoun. You and it are left out because they are the same in both cases.
// The sentences never use than, as, between or a linking verb (It was I), where usage guides disagree. The people are
// made up. Extends language-e-subject-agreement (finding the subject) and language-e-relative-pronouns.
const CASES=[['I','me'],['he','him'],['she','her'],['we','us'],['they','them']];
/* Pairs with a name use the three forms children most often get wrong after "and". */
const PAIRED=CASES.slice(0,3);
const NAMES=['Ana','Leo','Mia','Ravi','Kofi','Lena','Omar','Jade','Tariq','Nora','Ivy','Marco'];
const PRED=['painted the fence','carried the boxes to the hall','won the spelling bee','planted tomatoes in the garden','fixed the flat tire','baked bread for the fair','found a wallet on the bus','cleaned the art room','wrote a letter to the mayor','built a birdhouse','caught the early train','washed the dog'];
/* Object frames: the words before the pronoun end in an action word or a preposition, then an optional tail. */
const OBJ=[['The coach thanked',' after the game'],['Grandma invited',' to dinner'],['The librarian helped',' at the front desk'],['Mr. Diaz chose',' for the relay team'],['The puppy followed',' home'],['Ms. Park handed the maps to',''],['The new student sat next to',' at lunch'],['A driver waved at',' from the bus'],['Our neighbor baked a pie for',''],['The guide waited for',' at the corner'],['The judges gave a ribbon to',''],['Dad took a photo of',' by the lake']];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const last=s=>s.split(' ').pop();
/* Which choice is written first alternates, so the first-listed word is right about half the time. */
const ord=(k,a,b)=>k%2?`${b} or ${a}`:`${a} or ${b}`;
const said=s=>({t:'passages',title:'Read the sentence',texts:[s]});
const letterAccept=(right)=>[right,right.replace(/\.$/,'')];
export default {
id:'language-m-pronoun-case',subject:'language',level:4,grade:6,standard:'CCSS L.6.1a',
title:'Subject and object pronouns',
goal:'Choose I or me, he or him, she or her, we or us, and they or them by the pronoun’s job, and check a pair with the take-the-other-person-out test.',
points:20,
skills:{subject:'Subject pronouns',object:'Object pronouns',test:'The take-out test'},
steps:[
 {skill:'subject',say:'A subject pronoun names who does the action: I, he, she, we and they. An object pronoun names who receives the action, or comes after a word such as to, for, at or of: me, him, her, us and them.',pic:{t:'passages',title:'Two cases',texts:['Subject pronouns: I, he, she, we, they','Object pronouns: me, him, her, us, them']}},
 {skill:'subject',say:'Before the action word, use the subject form: She painted the fence, never Her painted the fence. When two people share the action, each still needs the subject form: Ana and I painted the fence.',pic:{t:'passages',title:'Doing the action',texts:['She painted the fence.','Ana and I painted the fence.']},
  check:{prompt:'Try it: fill in the blank: "Sam and ___ fed the ducks." Choose me or I.',answer:'I',options:['me','I'],hint:'Take Sam out and read it again: who fed the ducks?',pic:said('Sam and ___ fed the ducks.')}},
 {skill:'object',say:'After an action word, or after to, for, at or of, use the object form. The coach thanked him. Ms. Park handed the maps to us.',pic:{t:'passages',title:'Receiving the action',texts:['The coach thanked him after the game.','Ms. Park handed the maps to us.']}},
 {skill:'object',say:'Two people can receive the action too, and the pronoun keeps the object form: The coach thanked Ana and me, never Ana and I.',pic:{t:'passages',title:'A pair after the action',texts:['The coach thanked Ana and me after the game.']},
  check:{prompt:'Try it: fill in the blank: "Our aunt drove Sam and ___ to school." Choose she or her.',answer:'her',options:['she','her'],hint:'Take Sam out: Our aunt drove ___ to school.',pic:said('Our aunt drove Sam and ___ to school.')}},
 {skill:'test',say:'The take-out test: take the other person out and read the sentence with the pronoun alone. Ana and me painted the fence becomes Me painted the fence, which is wrong, so write Ana and I. The coach thanked Ana and I becomes The coach thanked I, which is wrong, so write Ana and me.',pic:{t:'passages',title:'Take the other person out',texts:['Ana and me painted the fence. → Me painted the fence. Wrong.','The coach thanked Ana and I. → The coach thanked I. Wrong.']}},
 {skill:'test',say:'Run the test even when a pair sounds formal. Leo and she won the race is right, because She won the race is right.',pic:{t:'passages',title:'Formal but right',texts:['Leo and she won the race. → She won the race. Right.']},
  check:{prompt:'Try it: is the pronoun right in "Sam and him fed the ducks."? Answer yes or no.',answer:'no',options:['yes','no'],hint:'Take Sam out and read: Him fed the ducks.',pic:said('Sam and him fed the ducks.')}}],
progression:{requires:['language-e-subject-agreement','language-e-relative-pronouns'],operations:2,demand:'Decide whether a pronoun does or receives the action, choose its case, and check a pronoun joined to a name by taking the name out.'},
items(add){
 let k=0;
 /* Subject pronouns: alone, then paired with a name. */
 CASES.forEach(([s,o],i)=>{for(let j=0;j<4;j++){const p=PRED[(i*4+j)%12],gap=`___ ${p}.`;
  add('subject',`Fill in the blank: "${gap}" Choose ${ord(k++,s,o)}.`,s,said(gap),`The pronoun does the action, so it takes the subject form: ${cap(s)} ${p}.`);}});
 PAIRED.forEach(([s,o],i)=>{for(let j=0;j<8;j++){const n=NAMES[(i*8+j)%12],p=PRED[(i*8+j*5+3)%12],gap=`${n} and ___ ${p}.`;
  add('subject',`Fill in the blank: "${gap}" Choose ${ord(k++,s,o)}.`,s,said(gap),`Take ${n} out: "${cap(s)} ${p}." is right, so the pair is ${n} and ${s}.`);}});
 /* Object pronouns: alone, then paired with a name. */
 CASES.forEach(([s,o],i)=>{for(let j=0;j<4;j++){const [v,tail]=OBJ[(i*4+j+2)%12],gap=`${v} ___${tail}.`;
  add('object',`Fill in the blank: "${gap}" Choose ${ord(k++,s,o)}.`,o,said(gap),`The pronoun comes after ${last(v)}, so it takes the object form: ${v} ${o}${tail}.`);}});
 PAIRED.forEach(([s,o],i)=>{for(let j=0;j<8;j++){const n=NAMES[(i*8+j+4)%12],[v,tail]=OBJ[(i*5+j*7+1)%12],gap=`${v} ${n} and ___${tail}.`;
  add('object',`Fill in the blank: "${gap}" Choose ${ord(k++,s,o)}.`,o,said(gap),`Take ${n} out: "${v} ${o}${tail}." is right, so the pair is ${n} and ${o}.`);}});
 /* The take-out test. (a) Is the pronoun in a pair right? Half of the sentences are right and half wrong. */
 PAIRED.forEach(([s,o],i)=>{for(let j=0;j<4;j++){const ok=(i+j)%2===0;
  const n=NAMES[(i*4+j+1)%12],p=PRED[(i*4+j+7)%12],used=ok?s:o,sent=`${n} and ${used} ${p}.`;
  add('test',`Is the pronoun right in "${sent}"? Answer yes or no.`,ok?'yes':'no',said(sent),`Take ${n} out: "${cap(used)} ${p}." is ${ok?'right':`wrong, so it should be ${n} and ${s}`}.`);
  const ok2=!ok,n2=NAMES[(i*4+j+6)%12],[v,tail]=OBJ[(i*4+j+5)%12],used2=ok2?o:s,sent2=`${v} ${n2} and ${used2}${tail}.`;
  add('test',`Is the pronoun right in "${sent2}"? Answer yes or no.`,ok2?'yes':'no',said(sent2),`Take ${n2} out: "${v} ${used2}${tail}." is ${ok2?'right':`wrong, so it should be ${n2} and ${o}`}.`);}});
 /* (b) Apply the test: which sentence is left when the other person is taken out? */
 PAIRED.forEach(([s,o],i)=>{for(let j=0;j<4;j++){const first=(i+j)%2===0;
  const n=NAMES[(i*4+j+3)%12],p=PRED[(i*4+j+2)%12],gap=`${n} and ___ ${p}.`,right=`${cap(s)} ${p}.`,wrong=`${cap(o)} ${p}.`;
  const [a,b]=first?[right,wrong]:[wrong,right];
  add('test',`Take ${n} out of "${gap}" Which is right: A "${a}" or B "${b}"?`,first?'A':'B',said(gap),`Alone, the pronoun does the action, so "${right}" is right, and the pair is ${n} and ${s}.`,letterAccept(right));
  const n2=NAMES[(i*4+j+8)%12],[v,tail]=OBJ[(i*4+j+9)%12],gap2=`${v} ${n2} and ___${tail}.`,right2=`${v} ${o}${tail}.`,wrong2=`${v} ${s}${tail}.`;
  const [a2,b2]=first?[wrong2,right2]:[right2,wrong2];
  add('test',`Take ${n2} out of "${gap2}" Which is right: A "${a2}" or B "${b2}"?`,first?'B':'A',said(gap2),`Alone, the pronoun comes after ${last(v)}, so "${right2}" is right, and the pair is ${n2} and ${o}.`,letterAccept(right2));}});
 /* (c) Name the pronoun's job in a sentence that is already right. */
 PAIRED.forEach(([s,o],i)=>{for(let j=0;j<2;j++){
  const n=NAMES[(i*2+j+5)%12],p=PRED[(i*2+j+9)%12],sent=`${n} and ${s} ${p}.`;
  add('test',`In "${sent}", is ${s} a subject pronoun or an object pronoun?`,'subject',said(sent),`${cap(s)} does the action (${p}), so it is a subject pronoun.`,['subject pronoun','a subject pronoun','a subject']);
  const n2=NAMES[(i*2+j+10)%12],[v,tail]=OBJ[(i*2+j+3)%12],sent2=`${v} ${n2} and ${o}${tail}.`;
  add('test',`In "${sent2}", is ${o} a subject pronoun or an object pronoun?`,'object',said(sent2),`${cap(o)} comes after ${last(v)}, so it is an object pronoun.`,['object pronoun','an object pronoun','an object']);}});
}
};
