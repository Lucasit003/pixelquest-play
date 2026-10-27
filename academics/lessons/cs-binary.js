// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Write a number using only ones and noughts, the way a computer stores it. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-binary",subject:"cs",level:3,grade:5,standard:"CSTA 1B-DA-06 (extends to 2-DA-07)",
 title:"Binary numbers",goal:"Write a number using only ones and noughts, the way a computer stores it.",points:20,
 skills:{"place":"What each column is worth","write":"Writing a number in binary","read":"Reading binary back"},
 steps:[
 {skill:"place",say:"A computer stores everything with two states: on and off, written 1 and 0.",pic:[{"t":"tiles","seq":["1","0","1","1"]}]},
 {skill:"place",say:"Each column is worth twice the one to its right: 1, 2, 4, 8, 16, and so on.",pic:[{"t":"tiles","seq":["8","4","2","1"]}],eq:"8 4 2 1",
  check:{"prompt":"Keep doubling: in binary, what is the sixth column from the right worth?","answer":32,"options":[32,16,64,6],"hint":"1, 2, 4, 8, 16, then double again.","pic":{"t":"tiles","seq":[null,"16","8","4","2","1"],"fill":"32"}}},
 {skill:"read",say:"So 1011 is 8 and 2 and 1, which is 11.",pic:[{"t":"tiles","seq":["1","0","1","1"]}],eq:"8 + 2 + 1 = 11",
  check:{"prompt":"Add up the columns: what number is 1101 in binary?","answer":13,"options":[13,1101,11,7],"hint":"Add the columns with a 1: 8, 4 and 1.","pic":{"t":"tiles","seq":["1","1","0","1"]}}},
 {skill:"write",say:"To write 5, take the biggest column that fits: 4, then 1 left over.  That is 101.",pic:[{"t":"tiles","seq":["1","0","1"]}],eq:"5 = 101",
  check:{"prompt":"Take the biggest column that fits first: write 6 in binary.","answer":"110","options":["110","101","011","6"],"hint":"4 and 2 make 6.","pic":{"t":"tiles","seq":["1","1","0"]}}},
 {skill:"write",say:"Each whole number has one binary form without extra zeros at the front. Adding a leading zero does not change its value: 110 and 0110 both mean 6.",pic:[{"t":"tiles","seq":["1","1","0"]}],eq:"6 = 110"},
 {skill:"read",say:"Add up the columns with a 1 in them, and you have the number back.",pic:[{"t":"tiles","seq":["1","0","0","1"]}],eq:"1001 = 9"}],
 items(add){
  const _SKIP=new Set(["In binary, what is the fourth column from the right worth?","What number is 1011 in binary?","Write 5 in binary."]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];for(let n=1;n<=63;n++)_P.push(n);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],bits=n.toString(2),bit=bits.length,r=bits;
add("write","Write "+(n)+" in binary.",r,{"t":"word","base":n},""+(n)+" is "+(bits)+" in binary.");}}
{const _P=[];for(let n=1;n<=63;n++)_P.push(n);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],bits=n.toString(2),bit=bits.length,r=n;
add("read","What number is "+(bits)+" in binary?",r,{"t":"word","base":bits},""+(bits)+" adds up to "+(n)+".");}}
{const _P=[];for(let k=0;k<8;k++)_P.push(k);
const _n=Math.min(_P.length,8),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const _k=_P[_i],n=Math.pow(2,_k),bits=n.toString(2),bit=_k+1,r=n;
add("place","In binary, what is the column "+(bit)+" places from the right worth?",r,{"t":"tiles","seq":["8","4","2","1"]},"Counting from the right, column "+(bit)+" is worth "+(r)+".");}}
 }};
