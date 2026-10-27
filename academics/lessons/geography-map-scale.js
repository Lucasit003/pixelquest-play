// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Use a map's scale to turn centimetres on the page into real kilometres on the ground. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"geography-e-map-scale",subject:"geography",level:3,grade:5,standard:"NCSS Theme 3",
 title:"Map scale and distance",goal:"Use a map's scale to turn centimetres on the page into real kilometres on the ground.",points:20,
 skills:{"read":"Reading the scale","far":"Working out the real distance","back":"Working backwards to the map"},
 steps:[
 {skill:"read",say:"A map is the world shrunk down.  The scale tells you by how much.",pic:[{"t":"ruler","unit":"cm","max":10,"from":0,"to":4}],eq:"1 cm on the map = 5 km on the ground"},
 {skill:"far",say:"If 1 cm is 5 km, then 3 cm on the map is 3 lots of 5 km, which is 15 km.",pic:[{"t":"line","max":15,"jumps":3,"hop":5}],eq:"3 x 5 = 15 km",
  check:{prompt:"The scale is 1 cm = 5 km. A road measures 4 cm on the map. How many kilometres is it?",answer:20,options:[20,9,45,54],hint:"4 lots of 5 km.",pic:{"t":"line","max":20,"jumps":4,"hop":5}}},
 {skill:"far",say:"Longer on the map means further on the ground: 8 cm at the same scale is 40 km.",pic:[{"t":"line","max":40,"jumps":8,"hop":5}],eq:"8 x 5 = 40 km"},
 {skill:"back",say:"It works the other way too.  30 km at 5 km to the centimetre is 6 cm on the map.",pic:[{"t":"ruler","unit":"cm","max":10,"from":0,"to":6}],eq:"30 / 5 = 6 cm",
  check:{prompt:"The scale is 1 cm = 5 km. A river is 35 km long. How many centimetres is that on the map?",answer:7,options:[7,30,40,175],hint:"How many 5s are in 35?",pic:{"t":"pair","a":"35 km","b":"5 km/cm"}}},
 {skill:"back",say:"Real distance divided by the scale gives the centimetres to measure.",pic:[{"t":"ruler","unit":"cm","max":10,"from":0,"to":3}],eq:"km / scale = cm"},
 {skill:"read",say:"Read the scale first.  Multiply to leave the map, divide to come back to it.",pic:[{"t":"ruler","unit":"cm","max":10,"from":0,"to":5}],
  check:{"prompt":"The scale is 1 cm = 10 km. Two towns are 6 cm apart on the map. How many kilometres apart are they?","answer":60,"options":[60,16,4,600],"hint":"Leaving the map, multiply: 6 lots of 10 km.","pic":{"t":"ruler","unit":"cm","max":10,"from":0,"to":6}}}],
 items(add){
  const _SKIP=new Set(["The scale is 1 cm = 5 km. A road measures 4 cm on the map. How many kilometres is it?","The scale is 1 cm = 5 km. A river is 35 km long. How many centimetres is that on the map?","On a map, do you multiply or divide by the scale to find the real distance?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=2;a<=30;a++)for(let b=2;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("far","The scale is 1 cm = "+(b)+" km. A road measures "+(a)+" cm on the map. How far is it really?",r,{"t":"ruler","unit":"cm","max":30,"from":0,"to":a},""+(a)+" lots of "+(b)+" km is "+(r)+" km.");}}
{const _P=[];
for(let a=10;a<=200;a++)for(let b=2;b<=10;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("back","The scale is 1 cm = "+(b)+" km. A road is "+(a)+" km long. How many centimetres is it on the map?",r,{"t":"pair","a":a+" km","b":b+" km/cm"},""+(a)+" km divided by "+(b)+" km to the centimetre is "+(r)+" cm.");}}
{const _P=[];
for(let a=2;a<=20;a++)for(let b=2;b<=10;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,140),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("read","A map says 1 cm = "+(b)+" km. Two towns are "+(a)+" cm apart on it. How many kilometres apart are they?",r,{"t":"ruler","unit":"cm","max":30,"from":0,"to":a},""+(a)+" cm at "+(b)+" km each is "+(r)+" km.");}}
 }};
