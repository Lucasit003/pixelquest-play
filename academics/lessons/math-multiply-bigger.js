// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Multiply a two-digit number by a one-digit number by splitting it into tens and ones. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
/* 25 Oct (learning-loop playtest): a fixed stride that divides an inner loop's length only ever picked some of its values (every "x 2" or "x 6", never "x 7"). The stride picks stay exactly as they were, and half as many again are added, drawn by a fixed-seed hash (the same items every load) so every value turns up. */
const _spread=(L,s,n)=>{const o=[];for(let i=0;i<L;i+=s)o.push(i);const seen=new Set(o),want=o.length+Math.ceil(n/2);let h=2654435761;for(let k=1;o.length<want&&k<=8*L;k++){h=Math.imul(h^h>>>15,2246822519)+k>>>0;const i=h%L;if(!seen.has(i)){seen.add(i);o.push(i);}}return o;};
export default {
 id:"math-e-multiply-bigger",subject:"math",level:3,grade:4,standard:"CCSS 4.NBT.B.5",
 title:"Multiplying bigger numbers",goal:"Multiply a two-digit number by a one-digit number by splitting it into tens and ones.",points:20,
 skills:{"split":"Splitting into tens and ones","parts":"Multiplying each part","whole":"Putting it back together"},
 steps:[
 {skill:"split",say:"A bigger multiplication is two small ones. Split the bigger number into its tens and its ones.",pic:[{"t":"blocks","ten":2,"one":3,"count":true}],eq:"23 = 20 + 3"},
 {skill:"parts",say:"To work out 23 times 4, multiply the tens first: 20 times 4 is 80.",pic:[{"t":"blocks","ten":8,"one":0,"count":true}],eq:"20 x 4 = 80",
  check:{"prompt":"Tens first: what is 30 x 4?","answer":120,"options":[120,34,70,124],"hint":"3 x 4 is 12, so 30 x 4 is 120.","pic":{"t":"blocks","ten":12,"one":0,"count":true}}},
 {skill:"parts",say:"Then the ones: 3 times 4 is 12.",pic:[{"t":"array","r":3,"c":4}],eq:"3 x 4 = 12"},
 {skill:"whole",say:"Add the two answers together. 80 and 12 make 92, so 23 times 4 is 92.",pic:[{"t":"blocks","ten":8,"one":12,"regroup":true,"count":true}],eq:"80 + 12 = 92",
  check:{"prompt":"Split 24 into 20 and 4. What is 24 x 3?","answer":72,"options":[72,62,66,612],"hint":"20 x 3 is 60 and 4 x 3 is 12.","pic":{"t":"blocks","ten":7,"one":2}}},
 {skill:"split",say:"Try 36 times 5. Split 36 into 30 and 6.",pic:[{"t":"blocks","ten":3,"one":6,"count":true}],eq:"36 = 30 + 6"},
 {skill:"parts",say:"30 times 5 is 150, and 6 times 5 is 30.",pic:[{"t":"array","r":6,"c":5}],eq:"30 x 5 = 150, 6 x 5 = 30",
  check:{"prompt":"Tens first: what is 40 x 5?","answer":200,"options":[200,45,205,90],"hint":"4 x 5 is 20, so 40 x 5 is 200.","pic":{"t":"word","base":"40 x 5"}}},
 {skill:"whole",say:"150 and 30 make 180. Split it, multiply each part, add them back.",pic:[{"t":"blocks","h":1,"ten":8,"count":true}],eq:"36 x 5 = 180"}],
 items(add){
  const _SKIP=new Set(["What is 20 x 4?","What is 23 x 4?","What is 30 x 5?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=11;a<=99;a++)for(let b=2;b<=9;b++)if(a%10!==0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=_r;
add("whole","What is "+(a)+" x "+(b)+"?",r,{"t":"word","base":""+(a)+" x "+(b)+""},""+(a)+" is "+(ta)+"0 + "+(oa)+". "+(ta)+"0 x "+(b)+" = "+(tensTimes)+" and "+(oa)+" x "+(b)+" = "+(onesTimes)+". "+(tensTimes)+" + "+(onesTimes)+" = "+(r)+".");}}
{const _P=[];
for(let a=11;a<=99;a++)for(let b=2;b<=9;b++)if(a%10>=2)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=oa*b;
add("parts","You are working out "+(a)+" x "+(b)+". The ones of "+(a)+" are "+(oa)+". What is "+(oa)+" x "+(b)+"?",r,{"t":"word","base":""+(a)+" x "+(b)+""},""+(oa)+" x "+(b)+" = "+(r)+". That is the ones part of "+(a)+" x "+(b)+".");}}
{const _P=[];
for(let a=11;a<=99;a++)for(let b=2;b<=9;b++)if(a%10!==0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(const _i of _spread(_P.length,_st,_n)){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,tensTimes=ta*10*b,onesTimes=oa*b,r=ta*10*b;
add("split","You are working out "+(a)+" x "+(b)+". The tens of "+(a)+" are worth "+(ta)+"0. What is "+(ta)+"0 x "+(b)+"?",r,{"t":"blocks","ten":ta,"one":oa},""+(ta)+"0 x "+(b)+" = "+(r)+". That is the tens part of "+(a)+" x "+(b)+".");}}
 }};
