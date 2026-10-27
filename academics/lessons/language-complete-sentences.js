// Original language lesson. Each sentence is assembled from a subject part and an action part, so whether it is complete,
// and what a fragment is missing, is known from how it was built (CCSS L.4.1f: recognize and correct fragments).
const SUBJ=['the tall miller','my little brother','the old bridge keeper','two hungry goats','the baker from Oakhaven','our teacher','a boy with a red cap','the farmer next door','three noisy geese','the girl by the well'];
const PRED=['carried the sacks to the cart','painted the gate green','fed the chickens before school','found a coin in the mud','rang the bell at noon','chased a hen across the square','fixed the broken wheel','enjoyed a book under the oak tree','swept the steps of the hall','sang a song on the way home'];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const ASK='Is it a complete sentence or a fragment?';
export default {
id:"language-e-complete-sentences",
subject:"language",
level:3,
grade:4,
title:"Complete sentences and fragments",
goal:"Check that a sentence has a subject and an action and can stand alone, and fix a fragment.",
standard:"CCSS L.4.1f: produce complete sentences; recognize and correct fragments",
points:20,
skills:{"kind":"Complete or fragment","missing":"Find what is missing","fix":"Fix a fragment"},
steps:[{"skill":"kind","say":"A complete sentence has a subject (who or what it is about) and a predicate (what it says about the subject). In this lesson the predicate is always an action: what someone did. The tall miller is the subject; carried the sacks to the cart is the action.","pic":{"t":"passages","title":"Subject + action","texts":["The tall miller carried the sacks to the cart."]}},
{"skill":"kind","say":"A fragment is missing a part, so it cannot stand alone. \"The tall miller by the river.\" has a subject but no action. It never says what the miller did.","pic":{"t":"passages","title":"Is anything missing?","texts":["The tall miller by the river."]},"check":{"prompt":"\"Two hungry goats in the lane.\" Complete sentence or fragment?","answer":"fragment","options":["fragment","complete sentence"],"hint":"What did the goats do? The words do not say.","pic":{"t":"passages","title":"Read it","texts":["Two hungry goats in the lane."]}}},
{"skill":"missing","say":"\"Painted the gate green.\" has an action but no subject: it never says who painted it. A fragment can be missing the subject or the action. (A command such as \"Sit down.\" is different: it speaks to you, so you is the understood subject. This lesson does not use commands.)","pic":{"t":"passages","title":"Is anything missing?","texts":["Painted the gate green."]}},
{"skill":"missing","say":"A group of words that starts with because can have both parts and still be a fragment: \"Because our teacher rang the bell.\" It leaves us waiting for what happened because of it.","pic":{"t":"passages","title":"Still waiting","texts":["Because our teacher rang the bell."]},"check":{"prompt":"Is a subject or an action missing from \"Swept the steps of the hall.\"?","answer":"a subject","options":["a subject","an action"],"hint":"Ask who swept the steps.","pic":{"t":"passages","title":"Read it","texts":["Swept the steps of the hall."]}}},
{"skill":"fix","say":"To fix a fragment, add the missing part. \"The tall miller by the river\" needs an action: The tall miller by the river carried the sacks to the cart.","pic":{"t":"passages","title":"Fixed","texts":["The tall miller by the river carried the sacks to the cart."]}},
{"skill":"fix","say":"To fix a because fragment, join it to a complete sentence: Because our teacher rang the bell, the children came inside.","pic":{"t":"passages","title":"Fixed","texts":["Because our teacher rang the bell, the children came inside."]},"check":{"prompt":"Which words make \"Found a coin in the mud.\" complete if you add them at the start: \"The farmer\" or \"In the lane\"?","answer":"The farmer","options":["The farmer","In the lane"],"hint":"It needs someone who did the finding.","pic":{"t":"passages","title":"Read it","texts":["Found a coin in the mud."]}}}],
progression:{"requires":["language-e-subject-agreement","language-e-parts-of-speech"],"operations":2,"demand":"Check a group of words for both a subject and an action, notice a clause that cannot stand alone, and add the missing part."},
items(add){
 const pic=t=>({t:'passages',title:'Read it',texts:[t]});
 SUBJ.forEach((s,i)=>{
  for(let k=0;k<4;k++){const t=`${cap(s)} ${PRED[(i+k*3)%10]}.`;add('kind',`"${t}" ${ASK}`,'complete sentence',pic(t),'It has a subject and an action, and it stands alone.',['complete','a complete sentence']);}
  const place=['by the river','in the lane','near the mill','at the market'][i%4],noAct=`${cap(s)} ${place}.`,noSub=`${cap(PRED[i])}.`,p=PRED[(i+5)%10];
  add('kind',`"${noAct}" ${ASK}`,'fragment',pic(noAct),`It says who, but not what ${s} did.`);
  add('missing',`"${noAct}" What is missing: a subject or an action?`,'an action',pic(noAct),`We know who, not what they did.`,['action','a verb','verb']);
  const two=(right,wrong)=>i%2?[`A, "${wrong}", or B, "${right}"`,'B']:[`A, "${right}", or B, "${wrong}"`,'A'];
  const [endChoice,endKey]=two(p,['on a sunny day','with a smile','after lunch','in the morning'][i%4]);
  add('fix',`Which words make "${noAct}" complete if you add them at the end: ${endChoice}?`,endKey,pic(noAct),`It needs an action: ${p}.`,[p]);
  add('kind',`"${noSub}" ${ASK}`,'fragment',pic(noSub),'It says what was done, but not who did it.');
  add('missing',`"${noSub}" What is missing: a subject or an action?`,'a subject',pic(noSub),'Ask who did it.',['subject']);
  const [startChoice,startKey]=two(cap(SUBJ[(i+3)%10]),['Very quickly','In the morning','Near the gate','After lunch'][(i+1)%4]);
  add('fix',`Which words make "${noSub}" complete if you add them at the start: ${startChoice}?`,startKey,pic(noSub),`It needs a subject: ${SUBJ[(i+3)%10]}.`,[SUBJ[(i+3)%10]]);
  for(const k of [1,2]){const b=`Because ${s} ${PRED[(i+k*4)%10]}.`;add('kind',`"${b}" ${ASK}`,'fragment',pic(b),'A because part cannot stand alone; it needs a sentence to finish the thought.');}
 });
}
};
