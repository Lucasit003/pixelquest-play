// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Measure history in tens and hundreds of years, and read years that count backwards. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"history-e-decades-centuries",subject:"history",level:3,grade:5,standard:"NCSS Theme 2",
 title:"Decades, centuries and BC",goal:"Measure history in tens and hundreds of years, and read years that count backwards.",points:20,
 skills:{"decades":"Years into decades","centuries":"Years into centuries","bc":"Years before year one"},
 steps:[
 {skill:"decades",say:"Historians count in bigger steps than one year.  Ten years is a decade.",pic:[{"t":"timeline","events":["1900","1910","1920","1930"]}],eq:"10 years = 1 decade"},
 {skill:"decades",say:"So 40 years is 4 decades, and the years from 1900 to 1960 are 6 decades.",pic:[{"t":"line","max":60,"jumps":6,"hop":10}],eq:"60 years = 6 decades",
  check:{prompt:"How many decades are 70 years?",answer:7,options:[7,70,700,17],hint:"A decade is ten years.",pic:{"t":"line","max":70,"jumps":7,"hop":10}}},
 {skill:"centuries",say:"A hundred years is a century.  300 years is 3 centuries.",pic:[{"t":"line","max":300,"jumps":3,"hop":100}],eq:"100 years = 1 century"},
 {skill:"centuries",say:"From 1700 to 2000 is 300 years, which is 3 centuries.",pic:[{"t":"timeline","events":["1700","1800","1900","2000"]}],eq:"1700 to 2000 = 3 centuries",
  check:{prompt:"How many centuries are 400 years?",answer:4,options:[4,40,400,14],hint:"A century is a hundred years.",pic:{"t":"line","max":400,"jumps":4,"hop":100}}},
 {skill:"bc",say:"Years before year one count backwards and are written BC.  500 BC came before 200 BC.",pic:[{"t":"timeline","events":["500 BC","200 BC","year 1","2000"]}],eq:"500 BC is earlier than 200 BC"},
 {skill:"bc",say:"So with BC years, the bigger number is the earlier one.  That is the opposite of the years we live in.",pic:[{"t":"timeline","events":["earlier","500 BC","200 BC","later"]}],
  check:{prompt:"Which year came first: 300 BC or 100 BC?",answer:"300 BC",options:["300 BC","100 BC"],hint:"BC years count backwards toward year one.",pic:{"t":"timeline","events":["300 BC","100 BC"]}}}],
 items(add){
  const _SKIP=new Set(["How many decades are 70 years?","How many centuries are 400 years?","Which year came first: 300 BC or 100 BC?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=20;a<=990;a++)for(let b=10;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,130),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("decades","How many decades are "+(a)+" years?",r,{"t":"word","base":""+(a)+" years"},"A decade is ten years, and "+(a)+" divided by 10 is "+(r)+".");}}
{const _P=[];
for(let a=200;a<=2000;a++)for(let b=100;b<=100;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,130),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("centuries","How many centuries are "+(a)+" years?",r,{"t":"word","base":""+(a)+" years"},"A century is a hundred years, and "+(a)+" divided by 100 is "+(r)+".");}}
{const _P=[];
for(let a=100;a<=900;a++)for(let b=100;b<=900;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,130),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.max(a,b));
add("bc","Which year came first: "+(a)+" BC or "+(b)+" BC?",r,{"t":"timeline","events":[""+(a)+" BC",""+(b)+" BC"]},"BC years count backwards, so the bigger number is the earlier year: "+(r)+" BC.",[r+' '+"BC",r+"BC"]);}}
 }};
