// Original language lesson. Sentences are built from a verb table and a tense, so each tense name and verb form is known
// from construction (CCSS L.5.1b-c: form and use the perfect tenses; show time with tense). The irregular forms are standard English.
const VERBS=[['walk','walks','walked','walked','to the market'],['finish','finishes','finished','finished','the fence'],['open','opens','opened','opened','the gate'],['paint','paints','painted','painted','the door'],['carry','carries','carried','carried','the basket'],['plant','plants','planted','planted','the beans'],
 ['eat','eats','ate','eaten','the pie'],['write','writes','wrote','written','a letter'],['take','takes','took','taken','the cart'],['see','sees','saw','seen','the parade'],['go','goes','went','gone','to the mill'],['draw','draws','drew','drawn','a map']];
const WHO=[['I',false],['She',true],['They',false],['The baker',true],['We',false]];
/* [base, he/she form, past, past participle, rest of the sentence]; one = he/she/it or a singular noun. */
const FORM={'past':([b,s,p]) =>p,'present':([b,s],one)=>one?s:b,'future':([b])=>'will '+b,'present perfect':([b,s,p,pp],one)=>(one?'has ':'have ')+pp,'past perfect':([b,s,p,pp])=>'had '+pp,'future perfect':([b,s,p,pp])=>'will have '+pp};
const SIMPLE=['past','present','future'],PERFECT=['present perfect','past perfect','future perfect'];
export default {
id:"language-e-perfect-tenses",
subject:"language",
level:3,
grade:5,
title:"The perfect tenses",
goal:"Form the present, past and future perfect with has, have, had and will have, and name the tense a sentence uses.",
standard:"CCSS L.5.1b-c: form and use the perfect verb tenses; use tense to show time",
points:20,
skills:{"name":"Name the tense","form":"Form a perfect tense","helper":"Choose has, have or had"},
steps:[{"skill":"name","say":"Simple tenses show when: She walked (past), she walks (present), she will walk (future). The perfect tenses link an action to another time. In this lesson they show an action finished by a certain time. (The present perfect can also show something still going on: I have lived here for years.)","pic":{"t":"passages","title":"Simple tenses","texts":["She walked to the market.","She walks to the market.","She will walk to the market."]}},
{"skill":"helper","say":"A perfect tense uses a helper verb and the past participle. Present perfect: has or have + walked. She has walked. They have walked. It is finished now.","pic":{"t":"passages","title":"Present perfect","texts":["She has walked to the market.","They have walked to the market."]},"check":{"prompt":"Complete in the present perfect with has or have: \"The twins ___ planted the beans.\"","answer":"have","options":["have","has"],"hint":"The twins are more than one, so use have.","pic":{"t":"passages","title":"Choose the helper","texts":["The twins ___ planted the beans."]}}},
{"skill":"helper","say":"Past perfect uses had for everyone: I had walked, she had walked, they had walked. It shows an action finished before another past time.","pic":{"t":"passages","title":"Past perfect","texts":["She had walked to the market before the rain began."]}},
{"skill":"form","say":"Future perfect uses will have: by noon, she will have walked to the market. The walk will be finished by then.","pic":{"t":"passages","title":"Future perfect","texts":["By noon, she will have walked to the market."]},"check":{"prompt":"Write the future perfect of plant for this sentence: \"By Friday, we ___ the beans.\"","answer":"will have planted","options":["will have planted","will plant","had planted"],"hint":"Future perfect is will have + the past participle.","pic":{"t":"passages","title":"Form the tense","texts":["By Friday, we ___ the beans."]}}},
{"skill":"form","say":"Some verbs have an irregular past participle. Eat: ate, has eaten. Write: wrote, has written. Go: went, has gone. Use the participle, not the past, after has, have and had.","pic":{"t":"passages","title":"Irregular participles","texts":["eat: ate, eaten","write: wrote, written","go: went, gone","see: saw, seen"]}},
{"skill":"name","say":"To name a perfect tense, look at the helper: has or have is present perfect, had is past perfect, and will have is future perfect.","pic":{"t":"passages","title":"Read the helper","texts":["has / have + participle: present perfect","had + participle: past perfect","will have + participle: future perfect"]},"check":{"prompt":"\"The farmer had fixed the wheel before the storm.\" Which tense: present perfect, past perfect or future perfect?","answer":"past perfect","options":["past perfect","present perfect","future perfect"],"hint":"The helper is had.","pic":{"t":"passages","title":"Name the tense","texts":["The farmer had fixed the wheel before the storm."]}}}],
progression:{"requires":["language-e-subject-agreement","language-e-joining-words"],"operations":2,"demand":"Choose a helper that agrees with the subject, add the right participle, and read a tense from its helper."},
items(add){
 const say=(who,one,v,t)=>`${who} ${FORM[t](v,one)} ${v[4]}.`,pic=(title,t)=>({t:'passages',title,texts:[t]});
 VERBS.forEach((v,i)=>{
  [...SIMPLE,...PERFECT].forEach((t,j)=>{const [who,one]=WHO[(i+j)%5],s=say(who,one,v,t),simple=SIMPLE.includes(t);
   add('name',`"${s}" Which tense: ${simple?'past, present or future':'present perfect, past perfect or future perfect'}?`,t,pic('Name the tense',s),simple?`${FORM[t](v,one)} is the simple ${t}.`:`The helper ${FORM[t](v,one).split(' ').slice(0,-1).join(' ')} makes it ${t}.`,simple?[`simple ${t}`,`${t} tense`,`simple ${t} tense`]:[t.replace(' ','-'),`${t} tense`]);});
  PERFECT.forEach((t,j)=>[0,2].forEach(k=>{const [who,one]=WHO[(i+j+k)%5],gap=`${who} ___ ${v[4]}.`,want=FORM[t](v,one);
   add('form',`Write the ${t} of ${v[0]} for this sentence: "${gap}"`,want,pic('Form the tense',gap),`${t}: ${want}.`);}));
  WHO.forEach(([who,one],k)=>{if((i+k)%2)return;const gap=`${who} ___ ${v[3]} ${v[4]}.`;
   add('helper',`Complete in the present perfect with has or have: "${gap}"`,one?'has':'have',pic('Choose the helper',gap),`Use ${one?'has':'have'} with ${who}.`);});
 });
}
};
