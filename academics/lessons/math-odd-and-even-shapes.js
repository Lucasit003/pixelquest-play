// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: A number is even when everything finds a partner. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-odd-and-even-shapes",subject:"math",level:3,grade:2,standard:"CCSS 2.OA.C.3",
 title:"Pairing up",goal:"A number is even when everything finds a partner.",points:20,
 skills:{"pairs":"Making pairs","left":"One left over","name":"Even or odd"},
 steps:[
 {skill:"pairs",say:"Let's look at 6 shapes.  We can pair them up perfectly.",pic:[{"t":"array","r":2,"c":3}],eq:"6 shapes"},
 {skill:"pairs",say:"Each pair has 2 shapes.  6 divided by 2 is 3 pairs.",pic:[{"t":"array","r":2,"c":3}],eq:"6 ÷ 2 = 3",
  check:{prompt:"Can you pair up 8 shapes perfectly? How many pairs are there?",answer:"4 pairs",options:["4 pairs","3 pairs","5 pairs"],hint:"8 divided by 2 is 4.",pic:{"t":"array","r":2,"c":4}}},
 {skill:"left",say:"Now let's look at 7 shapes.  We can make 3 pairs, but one shape is left over.",pic:[{"t":"array","r":1,"c":7}],eq:"7 shapes"},
 {skill:"left",say:"7 divided by 2 is 3 pairs with 1 left over.",pic:[{"t":"array","r":1,"c":7}],eq:"7 ÷ 2 = 3 R 1",
  check:{prompt:"If you have 9 shapes, how many pairs can you make? How many are left over?",answer:"4 pairs, 1 left over",options:["4 pairs, 1 left over","3 pairs, 2 left over","5 pairs, no left over"],hint:"9 divided by 2 is 4 with 1 left over.",pic:{"t":"array","r":1,"c":9}}},
 {skill:"name",say:"A whole number is even if it can be paired up perfectly, with no shapes left over.",pic:[{"t":"array","r":2,"c":3}],eq:"Even numbers"},
 {skill:"name",say:"A whole number is odd if there is one shape left over after pairing.",pic:[{"t":"array","r":1,"c":7}],eq:"Odd numbers",
  check:{prompt:"Is 10 an even or odd number?",answer:"even",options:["even","odd"],hint:"10 can be paired up perfectly with no shapes left over.",pic:{"t":"array","r":2,"c":5}}}],
 items(add){
  const _SKIP=new Set(["Can you pair up 8 shapes perfectly? How many pairs are there?","If you have 9 shapes, how many pairs can you make? How many are left over?","Is 10 an even or odd number?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["name","pairs","left"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["1","odd"],["2","even"],["3","odd"],["4","even"],["5","odd"],["6","even"],["7","odd"],["8","even"],["9","odd"],["10","even"],["11","odd"],["12","even"],["13","odd"],["14","even"],["15","odd"],["16","even"],["17","odd"],["18","even"],["19","odd"],["20","even"],["21","odd"],["22","even"],["23","odd"],["24","even"],["25","odd"],["26","even"],["27","odd"],["28","even"],["29","odd"],["30","even"],["31","odd"],["32","even"],["33","odd"],["34","even"],["35","odd"],["36","even"],["37","odd"],["38","even"],["39","odd"],["40","even"]],_A=[(x,r,labels)=>"Is "+(x)+" even or odd?",(x,r,labels)=>"Pair up "+(x)+" shapes. Is "+(x)+" even or odd?",(x,r,labels)=>"Can each of "+(x)+" toys have a partner? Is "+(x)+" even or odd?"],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="even or odd";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,{"t":"array","r":1,"c":Number(x)},_W[_j%_W.length](x,r,labels),_V(r));}
 }};
