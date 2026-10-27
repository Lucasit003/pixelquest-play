// Middle School topic (Grade 6, CCSS L.6.1b): intensive and reflexive pronouns. Every sentence is put together here
// from a subject, a -self pronoun and either an action with its own object (intensive) or an action that needs the
// -self word as its object (reflexive), so each answer follows from how the sentence was built:
//  - the -self word always points back to the subject, so its form comes from the subject (I → myself, we →
//    ourselves, he, my uncle, Grandpa → himself, she, my aunt, Grandma → herself, they and plural nouns →
//    themselves, the city → itself);
//  - intensive: the -self word sits right after the subject, or at the very end after an action that already has
//    its object (My aunt herself baked the cake. My aunt baked the cake herself.). It only adds emphasis, so it can
//    be taken out and a complete sentence is left;
//  - reflexive: the -self word is the object of the action or of to, for or at (My aunt cut herself on a sharp
//    rock.). Taking it out leaves a broken sentence (My aunt cut on a sharp rock.).
// Reflexive actions were chosen so that they cannot stand without an object: excused, cut, introduced, taught,
// reminded, blamed, saw, enjoyed, told and treated, and to/for/at phrases. Actions that also work alone (washed,
// dressed, prepared, behaved) and "baked herself a cake" patterns are left out, because there the -self word could
// be dropped and the test would have two answers. You and yourself are left out: you can be one person or several.
// The people are made up. Follows language-m-pronoun-case in the same grade; builds on language-e-relative-pronouns
// and language-e-parts-of-speech.
const WHO=[['I','myself'],['We','ourselves'],['He','himself'],['She','herself'],['They','themselves'],['My uncle','himself'],['My aunt','herself'],['Grandpa','himself'],['Grandma','herself'],['The twins','themselves'],['The players','themselves'],['My cousins','themselves']];
/* The city only appears with intensive sentences. */
const CITY=['The city','itself'],CITY_DO=['paid for the new bridge','planted the oak trees','built the skate park'];
const DO=['baked the cake','painted the mural','built the treehouse','planned the whole trip','fixed the leaky sink','wrote the class play','carried the heavy boxes','sewed the costumes','planted the oak tree','cooked the dinner','washed the car','cleaned the attic'];
const SELF=[['excused',' from the table'],['cut',' on a sharp rock'],['introduced',' to the new class'],['taught',' to juggle'],['reminded',' to lock the gate'],['blamed',' for the broken vase'],['saw',' in the shop window'],['enjoyed',' at the fair'],['told',' to stay calm'],['treated',' to a big lunch'],['talked to',' on the long walk'],['made a sandwich for',''],['wrote a note to',''],['laughed at',' in the mirror']];
const FORMS=['myself','ourselves','himself','herself','themselves','itself'];
/* Non-standard forms are offered as wrong choices only. */
const NONSTANDARD={himself:'hisself',themselves:'theirselves'};
const lower=s=>s==='I'?s:s[0].toLowerCase()+s.slice(1);
const said=s=>({t:'passages',title:'Read the sentence',texts:[s]});
const ord=(k,a,b)=>k%2?`${b} or ${a}`:`${a} or ${b}`;
const wrongFor=(self,k)=>NONSTANDARD[self]&&k%3===0?NONSTANDARD[self]:FORMS.filter(f=>f!==self)[k%5];
const ALL=[...WHO,CITY];
const doFor=(i,j)=>ALL[i]===CITY?CITY_DO[j%3]:DO[(i*3+j)%12];
const intensive=(i,j,end)=>{const [S,self]=ALL[i],d=doFor(i,j);return end?`${S} ${d} ${self}.`:`${S} ${self} ${d}.`;};
const reflexive=(i,j)=>{const [S,self]=WHO[i],[v,tail]=SELF[(i*2+j)%14];return `${S} ${v} ${self}${tail}.`;};
const KIND={intensive:['intensive pronoun','an intensive pronoun','an intensive'],reflexive:['reflexive pronoun','a reflexive pronoun','a reflexive']};
export default {
id:'language-m-intensive-pronouns',subject:'language',level:4,grade:6,standard:'CCSS L.6.1b',
title:'Intensive and reflexive pronouns',
goal:'Choose the -self pronoun that matches the subject, tell an intensive pronoun from a reflexive one, and test whether it can be taken out.',
points:20,
skills:{form:'The right -self form',kind:'Intensive or reflexive',remove:'Can it be taken out'},
steps:[
 {skill:'form',say:'A -self pronoun points back to the subject of its sentence, so its form must match the subject: I and myself, we and ourselves, he and himself, she and herself, they and themselves, it and itself.',pic:{t:'passages',title:'Match the subject',texts:['I → myself    we → ourselves','he → himself    she → herself','they → themselves    it → itself']}},
 {skill:'form',say:'Find the subject first. My aunt is one woman, so the word is herself. The twins are two people, so the word is themselves. Hisself and theirselves are not standard English.',pic:{t:'passages',title:'Find the subject first',texts:['My aunt baked the cake herself.','The twins taught themselves to juggle.']},
  check:{prompt:'Try it: fill in the blank: "My brothers repaired the old bike ___." Choose themselves or himself.',answer:'themselves',options:['themselves','himself'],hint:'How many people are in the subject, my brothers?',pic:said('My brothers repaired the old bike ___.')}},
 {skill:'kind',say:'A reflexive pronoun is the object: the subject does the action to itself. My aunt cut herself: she is the one who was cut. It can also come after to, for or at: She made a sandwich for herself.',pic:{t:'passages',title:'Reflexive: the action comes back',texts:['My aunt cut herself on a sharp rock.','She made a sandwich for herself.']}},
 {skill:'kind',say:'An intensive pronoun only adds emphasis. It sits right after the subject, or at the end after an action that already has its object: My aunt herself baked the cake. My aunt baked the cake herself.',pic:{t:'passages',title:'Intensive: extra emphasis',texts:['My aunt herself baked the cake.','My aunt baked the cake herself.']},
  check:{prompt:'Try it: in "Grandpa himself mended the fence.", is himself intensive or reflexive?',answer:'intensive',options:['intensive','reflexive'],hint:'Is himself the thing that was mended, or does it only add emphasis?',pic:said('Grandpa himself mended the fence.')}},
 {skill:'remove',say:'The take-out test: cover the -self word and read what is left. My aunt herself baked the cake becomes My aunt baked the cake: still complete, so herself is intensive. My aunt cut herself on a sharp rock becomes My aunt cut on a sharp rock: broken, so herself is reflexive.',pic:{t:'passages',title:'Cover the -self word',texts:['My aunt baked the cake. Complete: intensive.','My aunt cut on a sharp rock. Broken: reflexive.']}},
 {skill:'remove',say:'A reflexive pronoun is needed to finish the sentence, so it can never be taken out. An intensive pronoun can always go, because the sentence was already complete.',pic:{t:'passages',title:'Needed or extra',texts:['Reflexive: needed. It cannot be taken out.','Intensive: extra. It can be taken out.']},
  check:{prompt:'Try it: can herself be taken out of "Mom reminded herself to buy milk." and still leave a complete sentence: yes or no?',answer:'no',options:['yes','no'],hint:'Read it without herself: Mom reminded to buy milk.',pic:said('Mom reminded herself to buy milk.')}}],
progression:{requires:['language-e-relative-pronouns','language-e-parts-of-speech'],operations:2,demand:'Match a -self pronoun to its subject, decide whether it is the object of the action or only emphasis, and prove it by taking it out.'},
items(add){
 let k=0;
 /* Form: an intensive blank after the subject, one at the end, and two reflexive blanks. */
 ALL.forEach(([S,self],i)=>{
  for(const end of [false,true]){const d=doFor(i,end?1:0),gap=end?`${S} ${d} ___.`:`${S} ___ ${d}.`,wrong=wrongFor(self,k);
   add('form',`Fill in the blank: "${gap}" Choose ${ord(k++,self,wrong)}.`,self,said(gap),`The subject is ${lower(S)}, so the -self word is ${self}.`);}
  if(ALL[i]===CITY)return;
  for(const j of [0,1]){const [v,tail]=SELF[(i*2+j+5)%14],gap=`${S} ${v} ___${tail}.`,wrong=wrongFor(self,k);
   add('form',`Fill in the blank: "${gap}" Choose ${ord(k++,self,wrong)}.`,self,said(gap),`The subject is ${lower(S)}, so the -self word is ${self}.`);}
 });
 /* Kind: one sentence, intensive or reflexive. */
 ALL.forEach(([S,self],i)=>{
  const s1=intensive(i,2,i%2===0);
  add('kind',`In "${s1}", is ${self} an intensive pronoun or a reflexive pronoun?`,'intensive',said(s1),`${self[0].toUpperCase()+self.slice(1)} only adds emphasis; the action already has its object.`,KIND.intensive);
  if(ALL[i]===CITY)return;
  const s2=reflexive(i,0);
  add('kind',`In "${s2}", is ${self} an intensive pronoun or a reflexive pronoun?`,'reflexive',said(s2),`${self[0].toUpperCase()+self.slice(1)} is the object: ${lower(S)} did the action to ${self}.`,KIND.reflexive);
 });
 /* Kind: two sentences with the same subject; which one uses the -self word one way? */
 WHO.forEach(([S,self],i)=>{const want=i%2?'intensive':'reflexive',int=intensive(i,3,i%4<2),ref=reflexive(i,1),aFirst=Math.floor(i/2)%2===0;
  const right=want==='intensive'?int:ref,wrong=want==='intensive'?ref:int,[a,b]=aFirst?[right,wrong]:[wrong,right];
  add('kind',`Which sentence uses ${self} as ${want==='intensive'?'an intensive':'a reflexive'} pronoun: A "${a}" or B "${b}"?`,aFirst?'A':'B',{t:'passages',title:'Two sentences',texts:[a,b]},`In "${right}", ${self} ${want==='intensive'?'only adds emphasis':'is the object of the action'}.`,[right,right.replace(/\.$/,'')]);});
 /* Remove: could the -self word be taken out? Yes for intensive, no for reflexive. */
 ALL.forEach(([S,self],i)=>{
  const s1=intensive(i,4,i%2===1);
  add('remove',`Can ${self} be taken out of "${s1}" and still leave a complete sentence: yes or no?`,'yes',said(s1),`Without ${self} it reads "${s1.replace(' '+self,'')}", which is complete, so ${self} is intensive.`);
  if(ALL[i]===CITY)return;
  const s2=reflexive(i,(i+1)%2+2);
  add('remove',`Can ${self} be taken out of "${s2}" and still leave a complete sentence: yes or no?`,'no',said(s2),`Without ${self} it reads "${s2.replace(' '+self,'')}", which is broken, so ${self} is reflexive.`);
 });
}
};
