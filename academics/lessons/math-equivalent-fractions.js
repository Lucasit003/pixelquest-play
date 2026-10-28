// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Cut the same amount into more parts, and the fraction looks different but is worth the same. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-equivalent-fractions",subject:"math",level:3,grade:4,standard:"CCSS 4.NF.A.1",
 title:"Fractions that are the same size",goal:"Cut the same amount into more parts, and the fraction looks different but is worth the same.",points:20,
 skills:{"same":"Fractions worth the same","make":"Making an equal fraction","small":"Cutting it down"},
 steps:[
 {skill:"same",say:"Half a bar and two quarters of the same bar cover exactly the same amount.",pic:[{"t":"bars","rows":[{"parts":2,"shade":1},{"parts":4,"shade":2}]}],eq:"1/2 = 2/4"},
 {skill:"make",say:"Cut every part in two and you get twice as many parts, and twice as many shaded.",pic:[{"t":"bars","rows":[{"parts":3,"shade":1},{"parts":6,"shade":2}]}],eq:"1/3 = 2/6",
  check:{prompt:"1/3 is the same as how many sixths? Give the top number.",answer:2,options:[2,1,3,6],hint:"Each third splits into two sixths.",pic:{"t":"bars","rows":[{"parts":3,"shade":1},{"parts":6,"shade":null,"fill":2}]}}},
 {skill:"make",say:"So multiply the top and the bottom by the same number, and the fraction is worth the same.",pic:[{"t":"bar","parts":8,"shade":2}],eq:"1/4 = 2/8 = 3/12"},
 {skill:"small",say:"It works backwards too.  4/8 has 4 shaded of 8, and that is the same as 1/2.",pic:[{"t":"bars","rows":[{"parts":8,"shade":4},{"parts":2,"shade":1}]}],eq:"4/8 = 1/2",
  check:{"prompt":"Write 6/8 with the fewest parts you can.","answer":"3/4","options":["3/4","6/8","1/4","3/8"],"hint":"Divide the top and the bottom by 2.","pic":{"t":"bar","parts":8,"shade":6}}},
 {skill:"same",say:"Only the number of parts changes.  The amount covered does not.",pic:[{"t":"bars","rows":[{"parts":5,"shade":2},{"parts":10,"shade":4}]}],eq:"2/5 = 4/10"},
 {skill:"small",say:"Divide the top and bottom by the same number to write it with fewer parts.",pic:[{"t":"bar","parts":12,"shade":3}],eq:"3/12 = 1/4",
  check:{prompt:"Write 3/12 with as few parts as you can.",answer:"1/4",options:["1/4","3/4","1/3","2/8"],hint:"Divide the top and the bottom by 3.",pic:{"t":"bar","parts":12,"shade":3}}}],
 items(add){
  /* 28 Oct (elfact): denominators 21 and 22 printed "21ths" and "22ths"; _ord gives 21sts and 22nds (only those prompts changed). */
  const _ord=d=>d+(d%100>=11&&d%100<=13?"th":d%10===1?"st":d%10===2?"nd":d%10===3?"rd":"th");
  const _SKIP=new Set(["1/3 is the same as how many sixths? Give the top number.","Write 4/8 with as few parts as you can.","Write 3/12 with as few parts as you can."]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let b=2;b<=12;b++)for(let a=1;a<b;a++)for(let k=2;k<=4;k++){const d=b*k;if(d<=24)_P.push([a,b,a*k,d]);}
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=c;
add("make",""+(a)+"/"+(b)+" is the same as how many "+(_ord(d))+"s? Give the top number.",r,{"t":"bars","rows":[{"parts":b,"shade":a},{"parts":d,"shade":c}]},"Each of the "+(b)+" parts splits up, so "+(a)+"/"+(b)+" = "+(c)+"/"+(d)+".");}}
{const _g=(x,y)=>y?_g(y,x%y):x;const _P=[];
for(let b=4;b<=24;b++)for(let a=1;a<b;a++)if(_g(a,b)>1)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_k=_g(a,b),r=(a/_k)+'/'+(b/_k);
add("small","Write "+(a)+"/"+(b)+" with as few parts as you can.",r,{"t":"bar","parts":b,"shade":a},""+(a)+"/"+(b)+" cuts down to "+(r)+".");}}
{const _P=[];
for(let b=2;b<=10;b++)for(let d=2;d<=10;d++)for(let a=1;a<b;a++)for(let c=1;c<d;c++)if(a*d!==c*b)_P.push([a,b,c,d]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=(a*d>c*b?a+'/'+b:c+'/'+d);
add("same","Which is bigger: "+(a)+"/"+(b)+" or "+(c)+"/"+(d)+"?",r,{"t":"bars","rows":[{"parts":b,"shade":a},{"parts":d,"shade":c}]},""+(r)+" covers more of the bar.");}}
 }};
