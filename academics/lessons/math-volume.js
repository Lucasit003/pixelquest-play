// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Count the cubes that fill a box by multiplying its three sides. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
// 28 Oct (elfact): step 3 said volume is "the three sides multiplied" for any solid; it now says the volume of a box.
export default {
 id:"math-e-volume",subject:"math",level:3,grade:5,standard:"CCSS 5.MD.C.5",
 title:"Volume of a box",goal:"Count the cubes that fill a box by multiplying its three sides.",points:20,
 skills:{"layer":"One layer of cubes","stack":"Stacking the layers","back":"Working back to a side"},
 steps:[
 {skill:"layer",say:"Volume is how many unit cubes fill a solid shape.",pic:[{"t":"array","r":3,"c":4}],eq:"one layer: 4 x 3 = 12 cubes"},
 {skill:"layer",say:"The bottom layer is a rectangle of cubes: 4 across and 3 deep is 12 cubes.",pic:[{"t":"array","r":3,"c":4}],eq:"12 cubes in a layer",
  check:{"prompt":"A different box is 5 cubes across and 2 cubes deep. How many cubes are in its bottom layer?","answer":10,"options":[10,7,20,52],"hint":"Multiply across by deep.","pic":{"t":"array","r":2,"c":5}}},
 {skill:"stack",say:"Stack two of those layers and you have 24 cubes.",pic:[{"t":"blocks","ten":2,"one":4,"count":true}],eq:"12 x 2 = 24 cubes"},
 {skill:"stack",say:"So the volume of a box is its three lengths multiplied: across, deep, and high.",pic:[{"t":"word","base":"4 x 3 x 2"}],eq:"4 x 3 x 2 = 24 cubic cm",
  check:{prompt:"A box is 4 cm across, 3 cm deep and 2 cm high. What is its volume in cubic centimetres?",answer:24,options:[24,9,12,18],hint:"Multiply all three sides.",pic:{"t":"word","base":"4 x 3 x 2"}}},
 {skill:"back",say:"Backwards: a box of 24 cubes that is 4 across and 3 deep must be 2 high.",pic:[{"t":"word","base":"24 / 12"}],eq:"24 / 12 = 2",
  check:{"prompt":"Work backwards: a box holds 60 cubes, and one layer is 12 cubes. How many layers high is it?","answer":5,"options":[5,48,12,72],"hint":"Divide the total by one layer.","pic":{"t":"word","base":"60 / 12"}}},
 {skill:"layer",say:"Find one layer, then count the layers.  That is the volume.",pic:[{"t":"array","r":3,"c":5}]}],
 items(add){
  const _SKIP=new Set(["A box is 4 cubes across and 3 cubes deep. How many cubes are in one layer?","A box is 4 cm across, 3 cm deep and 2 cm high. What is its volume in cubic centimetres?","A box holds 24 cubes. One layer is 12 cubes. How many layers high is it?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let w=2;w<=10;w++)for(let h=2;h<=10;h++)for(let d=2;d<=6;d++)_P.push([w,h,d]);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [w,h,d]=_P[_i],r=w*h*d;
add("stack","A box is "+(w)+" cm across, "+(h)+" cm deep and "+(d)+" cm high. What is its volume in cubic centimetres?",r,{"t":"word","base":""+(w)+" x "+(h)+" x "+(d)+""},""+(w)+" x "+(h)+" x "+(d)+" = "+(r)+" cubic centimetres.");}}
{const _P=[];
for(let w=2;w<=12;w++)for(let h=2;h<=12;h++)_P.push([w,h,1]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [w,h,d]=_P[_i],r=w*h;
add("layer","A box is "+(w)+" cubes across and "+(h)+" cubes deep. How many cubes are in one layer?",r,{"t":"array","r":h,"c":w},""+(w)+" x "+(h)+" = "+(r)+" cubes in a layer.");}}
{const _P=[];
for(let a=12;a<=144;a++)for(let b=2;b<=12;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("back","A box holds "+(a)+" cubes and one layer is "+(b)+" cubes. How many layers high is it?",r,{"t":"word","base":""+(a)+" cubes"},""+(a)+" divided by "+(b)+" is "+(r)+" layers.");}}
 }};
