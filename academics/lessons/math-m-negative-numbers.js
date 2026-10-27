// Middle School topic (Grade 6, CCSS 6.NS.C.5, 6.NS.C.6, 6.NS.C.7): negative numbers and absolute value.
// Every answer is computed from the integers in its own question: the greater of two numbers is
// Math.max, absolute value is the distance from zero, and the distance between two numbers on a line
// is the absolute value of their difference. Temperatures, depths and places are fictional.
const lineFor=(nums,hint=true)=>{const lo=Math.min(0,...nums),hi=Math.max(0,...nums),pad=lo<-20||hi>20?5:2;return {t:'numline',min:Math.floor((lo-pad)/5)*5,max:Math.ceil((hi+pad)/5)*5,marks:nums.map(v=>({v})),...(hint?{hint:true}:{})};};
/* A fixed, spread set of integer pairs (deterministic, no randomness): at least one negative in each, never
   equal, and no pair twice in either order. */
const PAIRS=[];{const seen=new Set();for(let i=0;PAIRS.length<60&&i<400;i++){const a=-(((i*7)%23)+1),b=((i*11)%37)-16,k=[Math.min(a,b),Math.max(a,b)].join();if(a===b||seen.has(k))continue;seen.add(k);PAIRS.push(i%2?[a,b]:[b,a]);}}
export default {
id:'math-m-negative-numbers',subject:'math',level:4,grade:6,standard:'CCSS 6.NS.C.5, 6.NS.C.6, 6.NS.C.7',
title:'Negative numbers and absolute value',
goal:'Compare positive and negative numbers, find an absolute value, and find how far apart two numbers are on a number line.',
points:20,
skills:{compare:'Comparing numbers',abs:'Absolute value',distance:'Distance on a number line'},
steps:[
 {skill:'compare',say:'Numbers below zero are negative. On a number line they sit to the left of zero, and the further left a number is, the smaller it is. -7 is less than -3, even though 7 is more than 3.',eq:'-7 < -3',pic:{t:'numline',min:-10,max:10,marks:[{v:-7},{v:-3}]}},
 {skill:'compare',say:'Negative numbers describe temperatures below zero, depths below sea level, and money owed. -12°C is colder than -5°C because -12 is further below zero.',eq:'-12 < -5',pic:{t:'numline',title:'Temperatures (°C)',min:-15,max:5,marks:[{v:-12,label:'-12°'},{v:-5,label:'-5°'}]},
  check:{prompt:'Try it: which is greater, -9 or -4?',answer:-4,options:[-4,-9],hint:'The number further to the right on the number line is greater.',pic:{t:'numline',min:-10,max:2,marks:[{v:-9},{v:-4}]}}},
 {skill:'abs',say:'The absolute value of a number is its distance from zero, so it is never negative. |-6| = 6 and |6| = 6: both numbers are 6 steps from zero.',eq:'|-6| = |6| = 6',pic:{t:'numline',min:-8,max:8,marks:[{v:-6},{v:6}],span:[-6,0],solve:true}},
 {skill:'abs',say:'A depth of -40 m means 40 m below sea level. The absolute value tells how far from zero; the sign tells which side.',eq:'|-40| = 40',pic:{t:'numline',title:'Height above sea level (m)',min:-50,max:10,marks:[{v:-40,label:'-40 m'}],span:[-40,0],solve:true},
  check:{prompt:'Try it: what is the absolute value of -15?',answer:15,options:[15,-15,0],hint:'Absolute value is the distance from zero, which is never negative.',pic:{t:'numline',min:-20,max:5,marks:[{v:-15}]}}},
 {skill:'distance',say:'When two numbers are on opposite sides of zero, add their distances from zero. -4 and 6 are 4 + 6 = 10 apart.',eq:'4 + 6 = 10',pic:{t:'numline',min:-8,max:8,marks:[{v:-4},{v:6}],span:[-4,6],solve:true}},
 {skill:'distance',say:'When both numbers are on the same side of zero, subtract their distances from zero. -9 and -2 are 9 - 2 = 7 apart.',eq:'9 - 2 = 7',pic:{t:'numline',min:-10,max:2,marks:[{v:-9},{v:-2}],span:[-9,-2],solve:true},
  check:{prompt:'Try it: the temperature was -5°C at dawn and 8°C at noon. By how many degrees did it rise?',answer:13,options:[13,3,-13],hint:'From -5 up to 0 is 5 degrees, then from 0 up to 8 is 8 more.',pic:{t:'numline',title:'Temperatures (°C)',min:-10,max:10,marks:[{v:-5,label:'-5°'},{v:8,label:'8°'}]}}}],
progression:{requires:['math-e-place-value'],operations:2,demand:'Order numbers on both sides of zero, read absolute value as distance from zero, and add or subtract distances depending on which side of zero two numbers are.'},
items(add){
 /* Comparing: the greater (or the colder, or the deeper) of two numbers. */
 PAIRS.forEach(([a,b],i)=>{
  const kind=i%3;
  if(kind===0)add('compare',`Which is greater: ${a} or ${b}?`,Math.max(a,b),lineFor([a,b]),`${Math.max(a,b)} is further right on the number line, so it is greater.`);
  else if(kind===1)add('compare',`At dawn it was ${a}°C in one fictional town and ${b}°C in another. Which temperature was colder? Type the number.`,Math.min(a,b),lineFor([a,b]),`${Math.min(a,b)} is further below zero, so ${Math.min(a,b)}°C is colder.`);
  else add('compare',`A fictional diver is at ${a} m and a turtle is at ${b} m, where negative means below sea level. Which height is lower? Type the number.`,Math.min(a,b),lineFor([a,b]),`${Math.min(a,b)} is further left on the number line, so it is lower.`);});
 /* Absolute value: plain, in context, and which of two is further from zero (never a tie). */
 for(let v=-30;v<=30;v++){if(v===0||(v>0&&v%3))continue;add('abs',`What is the absolute value of ${v}?`,Math.abs(v),lineFor([v]),`${v} is ${Math.abs(v)} steps from zero, so its absolute value is ${Math.abs(v)}.`);}
 for(const d of [-6,-14,-23,-37,-48,-55,-72,-81,-96,-110,-125,-140])add('abs',`A fictional submarine is at ${d} m, where negative means below sea level. How many metres below sea level is it?`,-d,lineFor([d]),`The distance from 0 to ${d} is ${-d}, so it is ${-d} m below sea level.`);
 PAIRS.slice(0,40).forEach(([a,b])=>{if(Math.abs(a)===Math.abs(b))return;const big=Math.abs(a)>Math.abs(b)?a:b;
  add('abs',`Which number has the greater absolute value: ${a} or ${b}?`,big,lineFor([a,b]),`|${a}| = ${Math.abs(a)} and |${b}| = ${Math.abs(b)}, so ${big} is further from zero.`);});
 /* Distance between two numbers, across zero and on the same side, plain and in context. */
 PAIRS.forEach(([a,b],i)=>{const lo=Math.min(a,b),hi=Math.max(a,b),dist=hi-lo;
  if(i%2===0)add('distance',`On a number line, how far apart are ${a} and ${b}?`,dist,lineFor([a,b]),lo<0&&hi>0?`${-lo} + ${hi} = ${dist}: the distances from zero add across zero.`:`${Math.abs(lo)} and ${Math.abs(hi)} are on the same side of zero: ${Math.max(Math.abs(lo),Math.abs(hi))} - ${Math.min(Math.abs(lo),Math.abs(hi))} = ${dist}.`);
  else add('distance',`The temperature in a fictional village was ${lo}°C at 6 a.m. and ${hi}°C at noon. By how many degrees did it rise?`,dist,lineFor([lo,hi]),`From ${lo} up to ${hi} is ${dist} degrees.`);});
 for(const [fish,bird] of [[-8,15],[-12,30],[-25,9],[-4,22],[-17,17],[-30,45],[-6,11],[-21,14],[-9,27],[-14,6]])
  add('distance',`A fictional fish swims at ${fish} m and a gull flies straight above it at ${bird} m, where 0 is sea level. How many metres apart are they?`,bird-fish,lineFor([fish,bird]),`${-fish} m below plus ${bird} m above sea level is ${bird-fish} m.`);
}
};
