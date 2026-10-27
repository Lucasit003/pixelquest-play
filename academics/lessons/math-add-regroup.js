// Elementary topic: adding two-digit numbers with regrouping. Generated questions; every sum stays under 100.
const tens=n=>Math.floor(n/10),ones=n=>n%10;
export default {
 id:'math-e-add-regroup',subject:'math',level:3,grade:2,standard:'CCSS 2.NBT.B.5',
 title:'Adding with regrouping',goal:'Add the ones, trade ten ones for a ten, then add the tens.',points:20,
 skills:{ones:'Add the ones',trade:'Trade ten ones',tens:'Add the tens',sums:'Two-digit sums'},
 steps:[
  {skill:'ones',say:'Here is 46: 4 tens and 6 ones. We will add 27 to it.',pic:[{t:'blocks',ten:4,one:6,count:true}],eq:'46 + 27'},
  {skill:'ones',say:'27 brings 2 more tens and 7 more ones. Add the ones first: 6 ones and 7 ones make 13 ones.',pic:[{t:'blocks',ten:6,one:13,count:true}],eq:'6 + 7 = 13',
   check:{"prompt":"For 38 + 24, how many ones do 8 ones and 4 ones make?","answer":12,"options":[12,11,2],"hint":"Count on from 8: 9, 10, 11, 12.","pic":{"t":"blocks","ten":5,"one":12}}},
  {skill:'trade',say:'13 ones is too many for the ones place. Trade 10 ones for 1 ten.',pic:[{t:'blocks',ten:6,one:13,regroup:true}],dur:3.5},
  {skill:'trade',say:'Now there are 7 tens and 3 ones.',pic:[{t:'blocks',ten:7,one:3,count:true}],eq:'46 + 27 = 73',
   check:{prompt:'Max has 5 tens and 12 ones. After trading 10 ones for a ten, how many tens does he have?',answer:6,options:[6,5,17],hint:'Ten ones make one more ten.',pic:{t:'blocks',ten:5,one:12,regroup:true}}},
  {skill:'tens',say:'Try 28 + 17. The ones make 15, so trade 10 of them for a ten. Now count the tens: 2 tens, 1 ten and the new ten make 4 tens.',pic:[{t:'blocks',ten:3,one:15,regroup:true}],eq:'28 + 17 = 45',dur:3.5},
  {skill:'sums',say:'When the ones make less than 10, there is nothing to trade: 32 + 45 = 77.',pic:[{t:'blocks',ten:7,one:7,count:true}],eq:'32 + 45 = 77',
   check:{prompt:'Sara adds 59 and 24. What is the total?',answer:83,options:[83,73,713],hint:'9 + 4 = 13 ones. Trade 10 ones for a ten, then add the tens: 5 + 2 + 1 = 8.',pic:{t:'blocks',ten:7,one:13,regroup:true}}},
  {skill:'sums',say:'Ones first, trade if there are ten or more, then the tens. That is adding with regrouping.',pic:[{t:'blocks',ten:8,one:3,count:true}],eq:'59 + 24 = 83'}],
 items(add){
  const pairs=[];
  for(let a=12;a<=79;a++)for(let b=13;b<=79;b++)if(a+b<100&&(a*7+b*3)%9===0)pairs.push([a,b]);
  for(const [a,b] of pairs){const s=a+b,o=ones(a)+ones(b),carry=o>=10;
   add('sums',`What is ${a} + ${b}?`,s,{t:'blocks',ten:tens(a)+tens(b),one:o,regroup:carry,hint:true},carry?`${ones(a)} + ${ones(b)} = ${o} ones: trade 10 for a ten. Tens: ${tens(a)} + ${tens(b)} + 1 = ${tens(s)}. So ${a} + ${b} = ${s}.`:`Ones: ${ones(a)} + ${ones(b)} = ${o}. Tens: ${tens(a)} + ${tens(b)} = ${tens(s)}. So ${a} + ${b} = ${s}.`);
   if(carry){
    add('ones',`In ${a} + ${b}, how many ones do the ones add up to before trading?`,o,{t:'blocks',ten:tens(a)+tens(b),one:o,hint:true},`${ones(a)} + ${ones(b)} = ${o}.`);
    add('tens',`In ${a} + ${b}, after trading, what digit is in the tens place of the answer?`,tens(s),{t:'blocks',ten:tens(a)+tens(b),one:o,regroup:true,hint:true},`${tens(a)} + ${tens(b)} + 1 traded ten = ${tens(s)}.`);}}
  for(let t=1;t<=8;t++)for(let o=10;o<=18;o+=2)add('trade',`You have ${t} ${t===1?'ten':'tens'} and ${o} ones. Trade 10 ones for a ten. How many tens do you have now?`,t+1,{t:'blocks',ten:t,one:o,regroup:true,hint:true},`Ten ones make one more ten: ${t} + 1 = ${t+1} tens, with ${o-10} ones left.`);}};
