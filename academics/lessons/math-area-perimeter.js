// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Measure the space inside a rectangle and the distance around its edge. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-area-perimeter",subject:"math",level:3,grade:4,standard:"CCSS 4.MD.A.3",
 title:"Area and perimeter",goal:"Measure the space inside a rectangle and the distance around its edge.",points:20,
 skills:{"area":"The space inside","around":"The distance around","side":"Working back to a side"},
 steps:[
 {skill:"area",say:"Area is the space inside a shape, counted in squares.",pic:[{"t":"array","r":3,"c":4}],eq:"3 rows of 4 squares"},
 {skill:"area",say:"A rectangle 4 across and 3 down holds 12 squares, so its area is 12 square centimetres.",pic:[{"t":"array","r":3,"c":4}],eq:"4 x 3 = 12 square cm",
  check:{"prompt":"A rectangle on squared paper is 5 cm across and 3 cm down. What is its area in square centimetres?","answer":15,"options":[15,8,16,30],"hint":"Multiply the two sides.","pic":{"t":"array","r":3,"c":5}}},
 {skill:"around",say:"Perimeter is the distance right round the edge.  Walk all four sides and add them up.",pic:[{"t":"array","r":3,"c":4}],eq:"4 + 3 + 4 + 3 = 14 cm"},
 {skill:"around",say:"Two sides are the same and the other two are the same, so add the width and height and double it.",pic:[{"t":"array","r":2,"c":5}],eq:"2 x (5 + 2) = 14 cm",
  check:{prompt:"A rectangle is 5 cm across and 2 cm down. What is its perimeter in centimetres?",answer:14,options:[14,10,7,20],hint:"Add the two sides, then double.",pic:{"t":"array","r":2,"c":5}}},
 {skill:"side",say:"Work backwards from the area: if it is 20 square cm and one side is 4, the other is 5.",pic:[{"t":"array","r":4,"c":5}],eq:"20 / 4 = 5 cm",
  check:{"prompt":"Work backwards: a rectangle has an area of 24 square cm and one side is 8 cm. How long is the other side?","answer":3,"options":[3,16,32,192],"hint":"Divide the area by the side you know.","pic":{"t":"array","r":3,"c":8}}},
 {skill:"area",say:"Area multiplies the two sides.  Perimeter adds them and doubles.",pic:[{"t":"array","r":3,"c":6}],eq:"area 18, perimeter 18"}],
 items(add){
  const _SKIP=new Set(["A rectangle is 4 cm across and 3 cm down. What is its area in square centimetres?","A rectangle is 5 cm across and 2 cm down. What is its perimeter in centimetres?","A rectangle has an area of 20 square cm and one side is 4 cm. How long is the other side?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let w=2;w<=12;w++)for(let h=2;h<=12;h++)_P.push([w,h,1]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [w,h,d]=_P[_i],r=w*h;
add("area","A rectangle is "+(w)+" cm across and "+(h)+" cm down. What is its area in square centimetres?",r,{"t":"array","r":h,"c":w},""+(w)+" x "+(h)+" = "+(r)+" square centimetres.");}}
{const _P=[];
for(let w=2;w<=12;w++)for(let h=2;h<=12;h++)_P.push([w,h,1]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [w,h,d]=_P[_i],r=2*(w+h);
add("around","A rectangle is "+(w)+" cm across and "+(h)+" cm down. What is its perimeter in centimetres?",r,{"t":"array","r":h,"c":w},""+(w)+" + "+(h)+" doubled is "+(r)+" centimetres.");}}
{const _P=[];
for(let a=12;a<=144;a++)for(let b=2;b<=12;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("side","A rectangle has an area of "+(a)+" square cm and one side is "+(b)+" cm. How long is the other side?",r,{"t":"word","base":""+(a)+" sq cm"},""+(a)+" divided by "+(b)+" is "+(r)+" centimetres.");}}
 }};
