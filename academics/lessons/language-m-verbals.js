// Middle School topic (Grade 8, CCSS L.8.1a): verbals. Every sentence is built here from a template whose verbal
// and its kind are recorded: a gerund is an -ing word used as a noun (a subject or an object); a participle is an
// -ing or -ed word used as an adjective in front of a noun; and an infinitive is "to" plus a verb. The templates use
// each verbal in one clear role, and each sentence holds exactly one verbal.
const GER=['swimming','painting','cooking','hiking','reading','drawing','sailing','gardening'];
const PART=[['barking','dog','woke the whole street'],['broken','vase','lay on the floor'],['smiling','baby','reached for the toy'],['frozen','pond','glittered in the sun'],['howling','wind','rattled the windows'],['painted','fence','looked bright and new'],['sleeping','cat','ignored the noise'],['written','note','sat on the desk']];
const INF=[['to swim','wants'],['to paint','hopes'],['to cook','learned'],['to win','plans'],['to read','loves'],['to travel','decided'],['to sing','agreed'],['to leave','refused']];
const NAMES=['Mia','Leo','Ana','Sam','Ruth','Omar','Ivy','Theo'];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const build=(kind,k)=>{const n=NAMES[k%NAMES.length];
 if(kind==='gerund'){const alt=k>=8,m=NAMES[(k+(alt?3:0))%NAMES.length];return (k+(alt?1:0))%2===0?{s:`${cap(GER[k%8])} is ${m}’s favourite hobby.`,v:GER[k%8],role:'noun'}:{s:`${m} enjoys ${GER[k%8]} on weekends.`,v:GER[k%8],role:'noun'};}
 if(kind==='participle'){const [p,noun,rest]=PART[k%8];return {s:`The ${p} ${noun} ${rest}.`,v:p,role:'adjective'};}
 const [inf,verb]=INF[k%8];return {s:`${n} ${verb} ${inf}.`,v:inf,role:'noun'};};
const KINDS=['gerund','participle','infinitive'];
const pic=(rows,hint)=>({t:'setups',title:'Verbals',head:'Sentence',rows,cols:['Verbal'],...(hint?{hint:true}:{})});
export default {
id:'language-m-verbals',subject:'language',level:4,grade:8,standard:'CCSS L.8.1a',
title:'Gerunds, participles and infinitives',
goal:'Find the verbal in a sentence, say whether it is a gerund, a participle or an infinitive, and say what job it does.',
points:20,
skills:{kind:'Naming the verbal',find:'Finding the verbal',job:'What the verbal does'},
steps:[
 {skill:'kind',say:'A verbal is formed from a verb but does a different job in the sentence. There are three kinds. A gerund is an -ing word used as a noun: "Swimming is Mia’s favourite hobby."',pic:pic([['Swimming is Mia’s favourite hobby.','gerund: swimming']])},
 {skill:'kind',say:'A participle is an -ing or -ed word used as an adjective to describe a noun: "The barking dog woke the whole street", "The broken vase lay on the floor." An infinitive is "to" plus a verb: "Leo wants to swim."',pic:pic([['The barking dog woke the whole street.','participle: barking'],['Leo wants to swim.','infinitive: to swim']]),
  check:{prompt:'Try it: in the sentence "The frozen pond glittered in the sun.", is "frozen" a gerund, a participle or an infinitive?',answer:'participle',options:['participle','gerund','infinitive'],hint:'It describes the pond.',pic:pic([['The frozen pond glittered in the sun.','?']])}},
 {skill:'find',say:'To find a verbal, look for a verb form that is not the main verb. In "Ana enjoys cooking on weekends", the main verb is "enjoys"; "cooking" is what she enjoys, so it is a gerund.',pic:pic([['Ana enjoys cooking on weekends.','main verb: enjoys; verbal: cooking']])},
 {skill:'find',say:'Not every -ing word is a verbal: in "Mia is swimming", "is swimming" is the main verb. And "to" before a noun, as in "to the shop", is not an infinitive; an infinitive needs a verb after "to".',pic:pic([['Mia is swimming.','main verb, not a verbal'],['to the shop','not an infinitive']]),
  check:{prompt:'Try it: which word or words make up the verbal in "Theo decided to travel."?',answer:'to travel',options:['to travel','decided','Theo'],hint:'Look for "to" plus a verb.',pic:pic([['Theo decided to travel.','?']])}},
 {skill:'job',say:'A gerund always works as a noun: it can be the subject ("Hiking is fun") or the object ("Sam loves hiking"). A participle works as an adjective: it describes a noun.',pic:pic([['Hiking is fun.','gerund as a noun'],['the smiling baby','participle as an adjective']])},
 {skill:'job',say:'Ask what the verbal is doing. If you can replace it with a noun such as "football" ("Football is Ruth’s favourite hobby"), it is working as a noun. If it answers "which one?" about a noun ("the painted fence"), it is working as an adjective.',pic:pic([['Painting is Ruth’s favourite hobby.','noun job'],['The painted fence looked bright and new.','adjective job']]),
  check:{prompt:'Try it: in "The howling wind rattled the windows.", does the verbal "howling" work as a noun or as an adjective?',answer:'adjective',options:['adjective','noun'],hint:'Does it describe the wind?',pic:pic([['The howling wind rattled the windows.','?']])}}],
progression:{requires:['language-e-parts-of-speech','language-m-sentence-types'],operations:2,demand:'Find the main verb, pick out the verb form doing another job, name it by its form and role, and say whether it acts as a noun or an adjective.'},
items(add){
 const OPTS='a gerund, a participle or an infinitive';
 for(let k=0;k<16;k++)for(const kind of KINDS){if((kind!=='gerund')&&k>=8)continue;const b=build(kind,k);
  /* The kind of verbal (the Try-it's frozen pond is left out). */
  if(b.v!=='frozen')add('kind',`In the sentence "${b.s}", is "${b.v}" ${OPTS}?`,kind,pic([[b.s,'?']]),kind==='gerund'?`"${b.v}" is an -ing word used as a noun.`:kind==='participle'?`"${b.v}" describes the ${PART[k%8][1]}, so it is a participle.`:`"${b.v}" is "to" plus a verb.`);
  /* Finding the verbal (the Try-it's "Theo decided to travel." is left out). */
  if(b.s!=='Theo decided to travel.')add('find',`Which word or words make up the verbal in "${b.s}"?`,b.v,pic([[b.s,'?']]),`The main verb is ${kind==='participle'?`"${PART[k%8][2].split(' ')[0]}"`:kind==='infinitive'?`"${INF[k%8][1]}"`:b.s.includes(' is ')?'"is"':'"enjoys"'}; the verbal is "${b.v}".`,kind==='infinitive'?[b.v.replace(/^to /,'')]:[]);
  /* The job: gerunds as nouns, participles as adjectives (the Try-it's howling wind is left out). */
  if(kind!=='infinitive'&&b.v!=='howling')add('job',`In "${b.s}", does the verbal "${b.v}" work as a noun or as an adjective?`,b.role,pic([[b.s,'?']]),b.role==='noun'?`"${b.v}" names an activity: it works as a noun.`:`"${b.v}" describes the ${PART[k%8][1]}: it works as an adjective.`);}
 /* An -ing word after is/are belongs to the main verb; after another verb such as enjoys, it is a gerund. */
 GER.forEach((g,k)=>{const n=NAMES[(k+3)%8],main=`${n} is ${g} this afternoon.`,ver=`${n} really likes ${g}.`;
  add('find',`In "${main}", is "${g}" part of the main verb or a verbal?`,'main verb',pic([[main,'?']]),`"is ${g}" is the main verb: it says what ${n} is doing right now.`,['part of the main verb']);
  add('find',`In "${ver}", is "${g}" part of the main verb or a verbal?`,'verbal',pic([[ver,'?']]),`The main verb is "likes"; "${g}" names what ${n} likes, so it is a verbal, a gerund.`,['a verbal','gerund']);});
 /* Which of two sentences uses a given kind of verbal. */
 for(let k=0;k<12;k++){const want=KINDS[k%3],other=KINDS[(k+1)%3],a=build(want,k%8),b=build(other,(k+3)%8),first=k%2===0;
  add('kind',`Which sentence uses ${want==='infinitive'?'an':'a'} ${want}: A "${first?a.s:b.s}" or B "${first?b.s:a.s}"?`,first?'A':'B',pic([[`A ${first?a.s:b.s}`,'?'],[`B ${first?b.s:a.s}`,'?']]),`"${a.v}" in "${a.s}" is ${want==='infinitive'?'an':'a'} ${want}; "${b.v}" is ${other==='infinitive'?'an':'a'} ${other}.`,[first?'a':'b']);}
}
};
