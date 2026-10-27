// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Add fractions of the same whole by counting the parts, when the parts are the same size. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-add-fractions",subject:"math",level:3,grade:4,standard:"CCSS 4.NF.B.3",
 title:"Adding fractions",goal:"Add fractions of the same whole by counting the parts, when the parts are the same size.",points:20,
 skills:{"like":"Same-size parts","take":"Taking some away","count":"Counting the parts"},
 steps:[
 {skill:"count",say:"A fraction counts parts of one whole.  3/8 means three of the eight parts.",pic:[{"t":"bar","parts":8,"shade":3}],eq:"3/8"},
 {skill:"like",say:"If the parts are the same size, adding is just counting them.  3/8 and 2/8 make 5/8.",pic:[{"t":"bar","parts":8,"shade":5}],eq:"3/8 + 2/8 = 5/8",
  check:{"prompt":"Add the sixths: what is 2/6 + 3/6?","answer":"5/6","options":["5/6","5/12","6/6","1/6"],"hint":"Add the tops and keep the bottom.","pic":{"t":"bar","parts":6,"shade":5}}},
 {skill:"like",say:"The bottom number does not change, because the parts did not change size.",pic:[{"t":"bar","parts":6,"shade":4}],eq:"1/6 + 3/6 = 4/6"},
 {skill:"take",say:"Taking away works the same way: 5/8 take away 2/8 leaves 3/8.",pic:[{"t":"bar","parts":8,"shade":3}],eq:"5/8 - 2/8 = 3/8",
  check:{"prompt":"Take away the tenths: what is 7/10 - 4/10?","answer":"3/10","options":["3/10","3/20","11/10","4/10"],"hint":"Take the tops away and keep the bottom.","pic":{"t":"bar","parts":10,"shade":3}}},
 {skill:"count",say:"When the top reaches the bottom, the parts fill one whole: 4/4 is 1.",pic:[{"t":"bar","parts":4,"shade":4}],eq:"4/4 = 1 whole",
  check:{"prompt":"How many sixths make one whole?","answer":6,"options":[6,3,12,1],"hint":"The bottom number tells you.","pic":{"t":"bar","parts":6,"shade":6}}},
 {skill:"like",say:"Same-size parts: add the tops and keep the bottom.",pic:[{"t":"bar","parts":10,"shade":7}],eq:"4/10 + 3/10 = 7/10"}],
 items(add){
  const _SKIP=new Set(["What is 3/8 + 2/8?","What is 5/8 - 2/8?","How many quarters make one whole?","What is 4/10 + 1/10?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let b=3;b<=12;b++)for(let a=1;a<b;a++)for(let c=1;a+c<b;c++)_P.push([a,b,c,b]);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=(a+c)+'/'+b;
add("like","What is "+(a)+"/"+(b)+" + "+(c)+"/"+(b)+"?",r,{"t":"bar","parts":b,"shade":a},"The parts are the same size, so add the tops: "+(a)+" + "+(c)+" over "+(b)+".",[String(a+c)+'/'+String(b)]);}}
{const _P=[];
for(let b=2;b<=12;b++)for(let a=1;a<b;a++)for(let k=2;k<=4;k++){const d=b*k;if(d<=24)_P.push([a,b,a*k,d]);}
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b,c,d]=_P[_i],r=c;
add("count","How many "+(d)+"ths cover the same amount as "+(a)+"/"+(b)+"? Give the top number.",r,{"t":"bars","rows":[{"parts":b,"shade":a},{"parts":d,"shade":c}]},""+(a)+"/"+(b)+" is the same amount as "+(c)+"/"+(d)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=1;b<=11;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("take","A bar is cut into 12 parts. You have "+(a)+" of them and give away "+(b)+". How many parts are left?",r,{"t":"bar","parts":12,"shade":a},""+(a)+" parts take away "+(b)+" parts leaves "+(r)+" parts, which is "+(r)+"/12.");}}
 }};
