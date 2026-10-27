// Every question here is computed by a generator, answers included; nothing was asserted by the
// model. A shift code moves each letter a fixed number of places along the alphabet, wrapping
// from Z back to A; decoding moves the same number of places backward, wrapping from A back to
// Z. The only fact table used is the 26-letter alphabet itself and a list of common, elementary
// short words (all everyday 3-4 letter nouns, nothing borderline), so every answer follows
// mechanically from the shift and the letters given in the question.
const ALPHA='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const idx=c=>ALPHA.indexOf(c);
const shiftChar=(c,k)=>ALPHA[(idx(c)+k+26)%26];
const unshiftChar=(c,k)=>ALPHA[((idx(c)-k)%26+26)%26];
const shiftWord=(w,k)=>w.split('').map(c=>shiftChar(c,k)).join('');
const unshiftWord=(w,k)=>w.split('').map(c=>unshiftChar(c,k)).join('');
const places=k=>k===1?'1 place':`${k} places`;
const WORDS=['CAT','DOG','SUN','MAP','PEN','BOX','CUP','HAT','BUS','FOX','JAM','KEY','LEG','MUD','NET','OWL','PIG','RUG','FISH','BIRD','TREE','LEAF','STAR','MOON'];
const ALGO_ENC={t:'program',title:'Shift cipher',lines:['1. find the letter','2. move forward by the shift','3. wrap from Z back to A']};
const ALGO_DEC={t:'program',title:'Shift cipher',lines:['1. find the coded letter','2. move backward by the shift','3. wrap from A back to Z']};
export default {
id:"cs-e-secret-codes",
subject:"cs",
level:3,
grade:5,
title:"Secret codes",
goal:"Encode and decode a letter or short word with a shift code, and find the shift between a letter and its code.",
standard:"CSTA 1B-DA-06 / data representation: encode and decode information",
points:20,
skills:{"encode":"Shift forward to encode","decode":"Shift backward to decode","shift":"Find the shift"},
steps:[
{"skill":"encode","say":"A shift code moves each letter forward along the alphabet by a fixed number of places, called the shift. With a shift of 3, the letter A becomes D.","pic":{"t":"passages","title":"A shift code","texts":["Shift of 3.","A becomes D."]}},
{"skill":"encode","say":"Near the end of the alphabet a shift wraps around: after Z comes A again, never a letter outside the alphabet. With a shift of 3, X becomes A.","pic":{"t":"passages","title":"Wrapping around","texts":["Shift of 3.","X becomes A."]},"check":{"prompt":"Using a shift of 2, what does the letter 'Y' become?","answer":"A","options":["Z","A","B"],"hint":"Count 2 letters forward from Y, wrapping from Z back to A.","pic":{"t":"passages","title":"Read it","texts":["Shift of 2.","Letter: Y"]}}},
{"skill":"decode","say":"Decoding undoes a shift code: move each letter backward by the same number of places instead of forward. With a shift of 3, D decodes back to A.","pic":{"t":"passages","title":"Undo the shift","texts":["Shift of 3.","D decodes to A."]}},
{"skill":"decode","say":"Decoding wraps around too: moving backward from A lands on Z, not off the front of the alphabet. With a shift of 4, C decodes back to Y.","pic":{"t":"passages","title":"Wrapping around","texts":["Shift of 4.","C decodes to Y."]},"check":{"prompt":"Using a shift of 4, what letter was coded as 'B'?","answer":"X","options":["F","X","E"],"hint":"Count 4 letters backward from B, wrapping from A back to Z.","pic":{"t":"passages","title":"Read it","texts":["Shift of 4.","Coded letter: B"]}}},
{"skill":"shift","say":"The shift between a letter and its code is how many places forward the plain letter moves to reach its coded letter, wrapping past Z if needed. B moves 3 places to reach E, so the shift is 3.","pic":{"t":"pair","a":"B","b":"E"}},
{"skill":"shift","say":"The count also wraps past Z when it needs to: X moves 6 places to reach D.","pic":{"t":"pair","a":"X","b":"D"},"check":{"prompt":"The letter 'W' was coded as 'B'. What is the shift?","answer":5,"options":[21,5,4],"hint":"Count forward from W to B, wrapping past Z; that count is the shift.","pic":{"t":"pair","a":"W","b":"B"}}}],
progression:{"requires":["cs-e-binary"],"operations":2,"demand":"Move a letter forward or backward along the alphabet by a given number of places, wrap past either end, and count the places between a letter and its code."},
items(add){
 const _SKIP=new Set(["Using a shift of 2, what does the letter 'Y' become?","Using a shift of 4, what letter was coded as 'B'?","The letter 'W' was coded as 'B'. What is the shift?"]),_add=add;
 add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
 for(let k=1;k<=25;k++){
  const l1=(7*k)%26,L1=ALPHA[l1],r1=shiftChar(L1,k);
  add("encode",`Using a shift of ${k}, what does the letter '${L1}' become?`,r1,ALGO_ENC,`Move '${L1}' forward ${places(k)}, wrapping from Z back to A, to reach '${r1}'.`);
  const l2=((7*k)%26+13)%26,L2=ALPHA[l2],r2=shiftChar(L2,k);
  add("encode",`Using a shift of ${k}, what does the letter '${L2}' become?`,r2,ALGO_ENC,`Move '${L2}' forward ${places(k)}, wrapping from Z back to A, to reach '${r2}'.`);
  const d1=((7*k)%26+19)%26,D1=ALPHA[d1],c1=shiftChar(D1,k);
  add("decode",`Using a shift of ${k}, what letter was coded as '${c1}'?`,D1,ALGO_DEC,`Move '${c1}' backward ${places(k)}, wrapping from A back to Z, to reach '${D1}'.`);
  const d2=((7*k)%26+6)%26,D2=ALPHA[d2],c2=shiftChar(D2,k);
  add("decode",`Using a shift of ${k}, what letter was coded as '${c2}'?`,D2,ALGO_DEC,`Move '${c2}' backward ${places(k)}, wrapping from A back to Z, to reach '${D2}'.`);
  const sl1=((7*k)%26+3)%26,SL1=ALPHA[sl1],sc1=shiftChar(SL1,k);
  add("shift",`The letter '${SL1}' was coded as '${sc1}'. What is the shift?`,k,{"t":"pair","a":SL1,"b":sc1},`'${sc1}' is ${places(k)} after '${SL1}' in the alphabet, wrapping past Z if needed.`);
  const sl2=((7*k)%26+16)%26,SL2=ALPHA[sl2],sc2=shiftChar(SL2,k);
  add("shift",`The letter '${SL2}' was coded as '${sc2}'. What is the shift?`,k,{"t":"pair","a":SL2,"b":sc2},`'${sc2}' is ${places(k)} after '${SL2}' in the alphabet, wrapping past Z if needed.`);
 }
 WORDS.forEach((w,i)=>{
  const k=((i*11)%25)+1,enc=shiftWord(w,k);
  add("encode",`Using a shift of ${k}, what does the word '${w}' become?`,enc,ALGO_ENC,`Shift each letter of '${w}' forward ${places(k)}, wrapping from Z back to A: '${enc}'.`);
  const k2=((i*7+21)%25)+1,coded=shiftWord(w,k2);
  add("decode",`Using a shift of ${k2}, what word was coded as '${coded}'?`,w,ALGO_DEC,`Shift each letter of '${coded}' backward ${places(k2)}, wrapping from A back to Z: '${w}'.`);
 });
}
};
