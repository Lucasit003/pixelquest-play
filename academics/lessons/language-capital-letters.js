// Original language lesson. Every sentence is built word by word in items(), with exactly one word deliberately
// left lowercase, so which word is wrong and why follow mechanically from how the sentence was assembled.
// The only fixed fact tables are: the seven days, ten months (May and August left out, since "may" and "august"
// are common words too and would be ambiguous when shown lowercase), ten fictional villager names and eight
// fictional place names -- all chosen to have no ordinary lowercase meaning, so a lowercase example is never a
// second valid word. Seasons are never capitalized in this lesson (CCSS L.3.2: capitalize appropriate words).
const DAYS=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
const MONTHS=['january','february','march','april','june','july','september','october','november','december'];
const NAMES=['priya','theo','nora','oscar','milo','ava','leo','felix','nadia','dara'];
const PLACES=['oakhaven','fernbrook','ashford','millbrook','cedarville','brookside','elmwood','thornwood'];
const DAY_T=[['the','class','meets','every','#'],['our','market','opens','every','#']];
const MONTH_T=[['the','fair','happens','every','#'],['the','market','opens','every','#']];
const NAME_T=[['the','dog','followed','#','home'],['a','letter','was','sent','to','#']];
const PLACE_T=[['our','class','visited','#','yesterday'],['the','fair','traveled','to','#']];
const START=[['the','bakery','opens','at','nine'],['our','neighbors','packed','a','picnic','basket'],['a','kind','letter','arrived','this','morning'],['two','workers','repaired','the','old','fence'],['every','child','brought','a','small','gift'],['both','dogs','slept','by','the','fire'],['many','villagers','watched','the','parade'],['some','birds','nested','in','the','barn'],['one','farmer','planted','new','seeds'],['all','the','windows','were','left','open'],['a','gentle','rain','fell','all','afternoon'],['each','pupil','carried','a','wooden','box']];
const LABEL={day:'a day',month:'a month',name:'a name',place:'a place',start:'the start of a sentence'};
const ACCEPT={day:['day','a day of the week','day of the week'],month:['month'],name:['name','a person','person'],place:['place'],start:['start of a sentence','start','the start','start of the sentence','the start of the sentence','first word']};
const cap=w=>w[0].toUpperCase()+w.slice(1);
const buildCases=(values,templates,count)=>{const out=[];for(let i=0;i<count;i++){const v=values[i%values.length],t=templates[Math.floor(i/values.length)%templates.length];out.push(t.map(w=>w==='#'?v:w));}return out;};
const CASES=[
 ...buildCases(DAYS,DAY_T,12).map(words=>({category:'day',words,idx:words.findIndex(w=>DAYS.includes(w))})),
 ...buildCases(MONTHS,MONTH_T,12).map(words=>({category:'month',words,idx:words.findIndex(w=>MONTHS.includes(w))})),
 ...buildCases(NAMES,NAME_T,12).map(words=>({category:'name',words,idx:words.findIndex(w=>NAMES.includes(w))})),
 ...buildCases(PLACES,PLACE_T,12).map(words=>({category:'place',words,idx:words.findIndex(w=>PLACES.includes(w))})),
 ...START.map(words=>({category:'start',words,idx:0}))
];
const render=(c,flawed)=>c.words.map((w,i)=>{const shouldCap=i===0||(c.category!=='start'&&i===c.idx);const on=shouldCap&&!(flawed&&i===c.idx);return on?cap(w):w;}).join(' ')+'.';
export default {
id:"language-e-capital-letters",
subject:"language",
level:3,
grade:3,
title:"Capital letters",
goal:"Find the word that needs a capital letter and say why: a day, a month, a name, a place, or the start of a sentence.",
standard:"CCSS L.3.2: capitalize appropriate words",
points:20,
skills:{"which":"Which word needs a capital","check":"Is it capitalized correctly","why":"Why it needs a capital"},
steps:[
{"skill":"which","say":"A capital letter starts every sentence, and it also begins the names of people, pets, places, and the days of the week and the months of the year.","pic":{"t":"passages","title":"Read the sentence","texts":["Oscar walked to Oakhaven on Monday."]}},
{"skill":"which","say":"To find the missing capital, read every word and ask whether it names a day, a month, a person, a pet or a place, or whether it starts the sentence.","pic":{"t":"passages","title":"One word is wrong","texts":["Nora fixed the fence on tuesday."]},"check":{"prompt":"\"Every friday, the twins visit Oakhaven.\" Which word needs a capital letter: every, friday or oakhaven?","answer":"friday","options":["friday","every","oakhaven"],"hint":"It names a day of the week.","pic":{"t":"passages","title":"Read the sentence","texts":["Every friday, the twins visit Oakhaven."]}}},
{"skill":"why","say":"In this lesson a word needs a capital for one of five reasons: it starts the sentence, or it is a day, a month, a name, or a place. Seasons such as spring, summer, autumn and winter do not get a capital just for being a season.","pic":{"t":"passages","title":"Five reasons","texts":["Starts the sentence","A day","A month","A name","A place"],"small":true}},
{"skill":"why","say":"The word I is always a capital letter, wherever it sits in a sentence, because it always stands for the person speaking.","pic":{"t":"passages","title":"Always capital","texts":["Yesterday I fixed the gate."]},"check":{"prompt":"In \"The market opens every September, right after the harvest.\", why does \"September\" need a capital letter: a day, a month, a name, a place, or the start of a sentence?","answer":"a month","options":["a month","a day","a place"],"hint":"It names one of the twelve months.","pic":{"t":"passages","title":"Read the sentence","texts":["The market opens every September, right after the harvest."]}}},
{"skill":"check","say":"To check a whole sentence, look at its first word and at every day, month, name and place inside it: these need capital letters. Other rules also apply: the pronoun I and words such as English need capitals too.","pic":{"t":"passages","title":"Checking a sentence","texts":["Milo was born in April.","the dog followed leo home."]}},
{"skill":"check","say":"If even one of those words is missing its capital letter, the whole sentence is capitalized incorrectly.","pic":{"t":"passages","title":"Checking a sentence","texts":["The class meets every wednesday."]},"check":{"prompt":"\"our class visited Fernbrook yesterday.\" Is this sentence capitalized correctly: yes or no?","answer":"no","options":["no","yes"],"hint":"Look at the very first word.","pic":{"t":"passages","title":"Read the sentence","texts":["our class visited Fernbrook yesterday."]}}}],
progression:{"requires":["language-e-parts-of-speech"],"operations":2,"demand":"Read a built sentence, spot the one word missing its capital letter, and say which of five reasons — start of sentence, day, month, name or place — explains why it needs one."},
items(add){
 CASES.forEach((c,gi)=>{
  const flawedText=render(c,true),correctText=render(c,false),wrongWord=c.words[c.idx],correctWord=cap(wrongWord);
  const fillers=c.words.map((w,i)=>i).filter(i=>i!==c.idx&&i!==0);
  const f0=c.words[fillers[gi%fillers.length]],f1=c.words[fillers[(gi+1)%fillers.length]];
  const rot=gi%3,opts=rot===0?[wrongWord,f0,f1]:rot===1?[f0,wrongWord,f1]:[f0,f1,wrongWord];
  const pic={t:'passages',title:'Read the sentence',texts:[flawedText]},picOk={t:'passages',title:'Read the sentence',texts:[correctText]};
  add('which',`"${flawedText}" Which word needs a capital letter: ${opts[0]}, ${opts[1]} or ${opts[2]}?`,wrongWord,pic,
   c.category==='start'?`It is the first word of the sentence.`:`It names ${LABEL[c.category]}.`);
  const useFlawed=gi%2===0,checkText=useFlawed?flawedText:correctText;
  add('check',`"${checkText}" Is this sentence capitalized correctly: yes or no?`,useFlawed?'no':'yes',
   {t:'passages',title:'Read the sentence',texts:[checkText]},useFlawed?`"${wrongWord}" is missing its capital letter.`:`Every day, month, name and place has its capital letter, and so does the first word.`);
  add('why',`In "${cap(correctText)}", why does "${correctWord}" need a capital letter: a day, a month, a name, a place, or the start of a sentence?`,LABEL[c.category],
   picOk,c.category==='start'?`"${correctWord}" is the first word of the sentence.`:`"${correctWord}" names ${LABEL[c.category]}.`,ACCEPT[c.category]);
 });
}
};
