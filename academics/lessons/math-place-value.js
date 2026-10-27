// Elementary topic: place value to 1,000. Generated questions, so every digit and total is computed.
const PLACE=['hundreds','tens','ones'],digit=(n,i)=>String(n)[i],pl=(c,w)=>`${c} ${c===1?w.slice(0,-1):w}`;
export default {
 id:'math-e-place-value',subject:'math',level:3,grade:2,standard:'CCSS 2.NBT.A.1, 2.NBT.A.3',
 title:'Hundreds, tens and ones',goal:'Read a three-digit number by its places, and build it from blocks.',points:20,
 skills:{digits:'Digits in places',build:'Building a number',expand:'Expanded form'},
 steps:[
  {skill:'digits',say:'A three-digit number has three places: hundreds, tens and ones.',pic:[{t:'blocks',h:2,ten:4,one:6}],eq:'246'},
  {skill:'digits',say:'In 246, the 2 means 2 hundreds, the 4 means 4 tens and the 6 means 6 ones.',pic:[{t:'blocks',h:2,ten:4,one:6,count:true}],eq:'200 + 40 + 6',
   check:{prompt:'In 358, what digit is in the tens place?',answer:5,options:[5,3,8],hint:'The tens place is the middle digit of a three-digit number.',pic:{t:'blocks',h:3,ten:5,one:8}}},
  {skill:'build',say:'Blocks show what each place is worth. A flat is 100, a rod is 10 and a cube is 1.',pic:[{t:'blocks',h:1,ten:1,one:1,count:true}]},
  {skill:'build',say:'3 flats, 1 rod and 7 cubes make 317.',pic:[{t:'blocks',h:3,ten:1,one:7,count:true}],eq:'300 + 10 + 7 = 317',
   check:{prompt:'Ava builds 4 flats, 2 rods and 5 cubes. What number did she build?',answer:425,options:[425,245,11],hint:'Flats are hundreds, rods are tens and cubes are ones.',pic:{t:'blocks',h:4,ten:2,one:5}}},
  {skill:'expand',say:'Writing a number as hundreds plus tens plus ones is called expanded form.',pic:[{t:'blocks',h:4,ten:3,one:2,count:true}],eq:'432 = 400 + 30 + 2'},
  {skill:'digits',say:'A zero holds a place. 407 has no tens, so its tens digit is 0.',pic:[{t:'blocks',h:4,ten:0,one:7,count:true}],eq:'407 = 400 + 0 + 7',
   check:{prompt:'In 609, what digit is in the tens place?',answer:0,options:[0,6,9],hint:'609 has no tens, and a zero holds the tens place.',pic:{t:'blocks',h:6,ten:0,one:9}}},
  {skill:'expand',say:'Every three-digit number works the same way: hundreds, then tens, then ones.',pic:[{t:'blocks',h:2,ten:7,one:3,count:true}],eq:'273 = 200 + 70 + 3'}],
 items(add){
  for(let h=1;h<=9;h++)for(const t of [0,3,6,9])for(const o of [2,5,7]){const n=100*h+10*t+o;
   PLACE.forEach((w,i)=>add('digits',`What digit is in the ${w} place of ${n}?`,+digit(n,i),{t:'blocks',h,ten:t,one:o,count:true,hint:true},`${n} is ${pl(h,'hundreds')}, ${pl(t,'tens')} and ${pl(o,'ones')}, so the ${w} digit is ${digit(n,i)}.`));}
  for(let h=1;h<=9;h++)for(const t of [0,1,4,7])for(const o of [0,3,8]){const n=100*h+10*t+o;
   add('build',`What number is ${pl(h,'hundreds')}, ${pl(t,'tens')} and ${pl(o,'ones')}?`,n,{t:'blocks',h,ten:t,one:o,count:true,hint:true},`${h*100} + ${t*10} + ${o} = ${n}.`);}
  for(let h=1;h<=9;h++)for(const t of [0,2,5,8])for(const o of [1,6,9]){const n=100*h+10*t+o;
   add('expand',`What is ${h*100} + ${t*10} + ${o}?`,n,{t:'blocks',h,ten:t,one:o,count:true,hint:true},`${pl(h,'hundreds')}, ${pl(t,'tens')} and ${pl(o,'ones')} make ${n}.`);}}};
