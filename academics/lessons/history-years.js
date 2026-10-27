// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Read years on a timeline: which came first, and how long there was in between. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"history-e-years",subject:"history",level:3,grade:4,standard:"NCSS Theme 2",
 title:"Working with years",goal:"Read years on a timeline: which came first, and how long there was in between.",points:20,
 skills:{"earlier":"Which year is earlier","between":"How many years between","age":"How old something is"},
 steps:[
 {skill:"earlier",say:"Our timelines use CE years, increasing from left to right. BCE year numbers work differently: 500 BCE came before 400 BCE.",pic:[{"t":"timeline","events":["1800","1850","1900","1950","2000"]}]},
 {skill:"earlier",say:"For the CE years in this lesson, the smaller number is the earlier year. 1850 came before 1900.",pic:[{"t":"word","base":"1850 before 1900"}],eq:"1850 is earlier than 1900",
  check:{prompt:"Which year came first: 1912 or 1875?",answer:1875,options:[1875,1912],hint:"The smaller number is the earlier year.",pic:{"t":"word","base":"1912 or 1875"}}},
 {skill:"between",say:"To find how long there was between two years, take the earlier year away from the later one.",pic:[{"t":"word","base":"1900 - 1850"}],eq:"1900 - 1850 = 50 years"},
 {skill:"between",say:"From 1850 to 1900 is 50 years.  That is half a century, because a century is a hundred years.",pic:[{"t":"word","base":"50 years"}],eq:"100 years = 1 century",
  check:{prompt:"How many years are there from 1900 to 1975?",answer:75,options:[75,65,85],hint:"Take 1900 away from 1975.",pic:{"t":"word","base":"1975 - 1900"}}},
 {skill:"age",say:"The same subtraction tells you how old something is.  Something built in 1900 was 60 years old in 1960.",pic:[{"t":"word","base":"1960 - 1900"}],eq:"1960 - 1900 = 60 years old"},
 {skill:"age",say:"Smaller year first on the timeline, bigger year later, and subtract to find the gap.",pic:[{"t":"timeline","events":["built","later","today"]}],
  check:{prompt:"A bridge was built in 1930. How old was it in 1980?",answer:50,options:[50,40,60],hint:"1980 take away 1930.",pic:{"t":"word","base":"1930 to 1980"}}}],
 items(add){
  const _SKIP=new Set(["Which year came first: 1912 or 1875?","How many years are there from 1900 to 1975?","A bridge was built in 1930. How old was it in 1980?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=1850;a<=1950;a++)for(let b=1850;b<=1950;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
add("earlier","Which year came first: "+(a)+" or "+(b)+"?",r,{"t":"word","base":""+(a)+" or "+(b)+""},"For these CE years the smaller number is earlier, so of "+(a)+" and "+(b)+" the earlier is "+(r)+".");}}
{const _P=[];
for(let a=1900;a<=2000;a++)for(let b=1800;b<=1899;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("between","How many years are there from "+(b)+" to "+(a)+"?",r,{"t":"word","base":""+(b)+" to "+(a)+""},"Take the earlier year from the later one: "+(a)+" - "+(b)+" = "+(r)+" years.");}}
{const _P=[];
for(let a=1900;a<=2000;a++)for(let b=1800;b<=1899;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("age","A house was built in "+(b)+". How old was it in "+(a)+"?",r,{"t":"word","base":b},""+(a)+" take away "+(b)+" is "+(r)+", so it was "+(r)+" years old.");}}
 }};
