// First Elementary topic. Data plus one bounded generator; topic files never set XP.
export default {
 id:'math-e-arrays',subject:'math',level:3,grade:3,standard:'CCSS 3.OA.A.1, 3.OA.B.5',
 title:'Equal groups and arrays',goal:'Put things in equal rows, then count them fast.',points:20,
 skills:{groups:'Equal groups',arrays:'Arrays',skip:'Skip counting',facts:'Times facts',turn:'Turn-around facts'},
 steps:[
  {skill:'groups',say:'Here are 3 baskets. Each basket holds 4 apples.',pic:[{t:'groups',n:3,k:4}],eq:'3 groups of 4',
   check:{prompt:'How many apples are in 3 groups of 4?',answer:12,options:[12,7,16,34],hint:'Count one basket, then keep going: 4, 8, 12.'}},
  {skill:'arrays',say:'Tip each basket into a row. The apples become dots. 3 rows of 4 make an array.',pic:[{t:'array',r:3,c:4,from:'groups'}]},
  {skill:'skip',say:'Count the rows by jumping 4 at a time: 4, 8, 12.',pic:[{t:'line',max:20,hop:4,jumps:3}],dur:3},
  {skill:'facts',say:'3 rows of 4 is written 3 × 4. It makes 12.',pic:[{t:'array',r:3,c:4,count:'rows'}],eq:'3 × 4 = 12',
   check:{prompt:'Sam plants 2 rows of 5 seeds. How many seeds?',answer:10,options:[10,7,25,12],hint:'Count by 5s: 5, 10.',pic:{t:'array',r:2,c:5}}},
  {skill:'turn',say:'Turn the array on its side. Now it is 4 rows of 3.',pic:[{t:'array',r:3,c:4,turn:true}]},
  {skill:'turn',say:'Same dots, same total. 3 × 4 and 4 × 3 both make 12.',pic:[{t:'array',r:4,c:3,count:'rows'}],eq:'3 × 4 = 4 × 3',
   check:{"prompt":"Mia knows 7 × 2 = 14. How much is 2 × 7?","answer":14,"options":[14,9,27,72],"hint":"Turning an array does not change how many dots it has.","pic":{"t":"array","r":2,"c":7}}},
  {skill:'facts',say:'Bigger facts work the same way. 5 rows of 6: 6, 12, 18, 24, 30.',pic:[{t:'array',r:5,c:6,count:'rows'}],eq:'5 × 6 = 30',dur:3.5},
  {skill:'facts',say:'Equal groups make rows. Skip count the rows. Turn it around if that is easier.',pic:[{t:'array',r:3,c:4}],eq:'3 × 4 = 12'}],
 items(add){for(let a=2;a<=9;a++)for(let b=2;b<=9;b++){const n=a*b;
  if(a<=6)add('groups',`There are ${a} groups with ${b} in each group. How many in all?`,n,{t:'groups',n:a,k:b,hint:true},`${a} groups of ${b} is ${a} × ${b} = ${n}.`);
  add('arrays',`How many dots are in ${a} rows of ${b}?`,n,{t:'array',r:a,c:b},`${a} rows of ${b} is ${a} × ${b} = ${n}.`);
  if(a<=5)add('skip',`Skip count by ${b}s, ${a} jumps from 0. Where do you land?`,n,{t:'line',max:Math.ceil((n+b)/10)*10,hop:b,jumps:a,hint:true},`${a} jumps of ${b} is ${a} × ${b} = ${n}.`);
  if(a!==b)add('turn',`What number goes in the blank? ${a} × ${b} = ${b} × ___`,a,{t:'array',r:a,c:b,turn:true,hint:true},`Turning an array keeps the total, so ${a} × ${b} = ${b} × ${a}.`);
  add('facts',`What is ${a} × ${b}?`,n,{t:'array',r:a,c:b,hint:true},`${a} rows of ${b}: ${a} × ${b} = ${n}.`);}}};
