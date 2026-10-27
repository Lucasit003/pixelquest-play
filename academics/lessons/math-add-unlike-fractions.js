// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Rewrite one fraction so both have the same size parts, then add them. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-add-unlike-fractions",subject:"math",level:3,grade:5,standard:"CCSS 5.NF.A.1",
 title:"Adding fractions with different parts",goal:"Rewrite one fraction so both have the same size parts, then add them.",points:20,
 skills:{"rewrite":"Rewriting one fraction","add":"Adding them","pick":"Picking the bottom number"},
 steps:[
 {skill:"pick",say:"To add halves and quarters by counting parts, first express them as equal-sized parts: one half is two quarters.",pic:[{"t":"bars","rows":[{"parts":2,"shade":1},{"parts":4,"shade":1}]}],eq:"1/2 + 1/4"},
 {skill:"rewrite",say:"Cut the halves into quarters: 1/2 is the same as 2/4.",pic:[{"t":"bars","rows":[{"parts":4,"shade":2},{"parts":4,"shade":1}]}],eq:"1/2 = 2/4",
  check:{"prompt":"Write 1/2 as sixths. What is the top number?","answer":3,"options":[3,1,6,2],"hint":"Each half is three sixths.","pic":{"t":"bars","rows":[{"parts":2,"shade":1},{"parts":6,"shade":3}]}}},
 {skill:"add",say:"Now the parts match, so add the tops: 2/4 and 1/4 make 3/4.",pic:[{"t":"bar","parts":4,"shade":3}],eq:"2/4 + 1/4 = 3/4",
  check:{"prompt":"Make the parts match: what is 1/4 + 1/8?","answer":"3/8","options":["3/8","2/12","1/12","2/8"],"hint":"Make them both eighths first: 1/4 is 2/8.","pic":{"t":"bar","parts":8,"shade":3}}},
 {skill:"pick",say:"Use the bigger bottom number when the smaller one divides into it, like 3 into 6.",pic:[{"t":"bars","rows":[{"parts":3,"shade":1},{"parts":6,"shade":1}]}],eq:"1/3 + 1/6"},
 {skill:"rewrite",say:"1/3 is 2/6, so 1/3 and 1/6 make 3/6.",pic:[{"t":"bar","parts":6,"shade":3}],eq:"2/6 + 1/6 = 3/6",
  check:{"prompt":"Make the parts match: what is 1/5 + 1/10?","answer":"3/10","options":["3/10","2/15","1/15","2/10"],"hint":"1/5 is the same as 2/10.","pic":{"t":"bar","parts":10,"shade":3}}},
 {skill:"add",say:"Same-size parts first, then add the tops.  The bottom number stays as it is.",pic:[{"t":"bar","parts":8,"shade":5}],eq:"1/2 + 1/8 = 5/8"}],
 items(add){
  const _SKIP=new Set(["Write 1/2 as quarters. What is the top number?","What is 1/2 + 1/4?","What is 1/3 + 1/6?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let b=2;b<=6;b++)for(let k=2;k<=4;k++){const d=b*k;if(d>24)continue;
 for(let a=1;a<b;a++)for(let c=1;c<d;c++)if(a*k+c<d)_P.push([a,b,c,d]);}
const _n=Math.min(_P.length,170),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=(a*(d/b)+c)+'/'+d;
add("add","What is "+(a)+"/"+(b)+" + "+(c)+"/"+(d)+"?",r,{"t":"bars","rows":[{"parts":b,"shade":a},{"parts":d,"shade":c}]},"Rewrite "+(a)+"/"+(b)+" over "+(d)+", then add the tops: "+(r)+".");}}
{const _P=[];
for(let b=2;b<=12;b++)for(let a=1;a<b;a++)for(let k=2;k<=4;k++){const d=b*k;if(d<=24)_P.push([a,b,a*k,d]);}
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=c;
add("rewrite","Write "+(a)+"/"+(b)+" with "+(d)+" parts instead. What is the top number?",r,{"t":"bars","rows":[{"parts":b,"shade":a},{"parts":d,"shade":c}]},""+(a)+"/"+(b)+" is the same amount as "+(c)+"/"+(d)+".");}}
{const _P=[];
for(let b=2;b<=8;b++)for(let d=2;d<=8;d++)for(let a=1;a<b;a++)for(let c=1;c<d;c++)if(a*d!==c*b)_P.push([a,b,c,d]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=(a*d>c*b?a+'/'+b:c+'/'+d);
add("pick","Which covers more of one whole: "+(a)+"/"+(b)+" or "+(c)+"/"+(d)+"?",r,{"t":"bars","rows":[{"parts":b,"shade":a},{"parts":d,"shade":c}]},"Put them over the same bottom number and "+(r)+" is bigger.");}}
 }};
