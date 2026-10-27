// Middle School topic (Grade 8, CCSS 7.G.B.4, 8.G.C.9): circles and the volume of cylinders, cones and
// spheres. Every answer uses π ≈ 3.14, as each question says, and is computed exactly to two decimal places
// (whole-number radii and heights times 3.14 only ever need two). Objects are fictional.
const r2=x=>Math.round(x*100)/100;
const PI=3.14;
export default {
id:'math-m-volume-round',subject:'math',level:4,grade:8,standard:'CCSS 7.G.B.4, 8.G.C.9',
title:'Circles, cylinders, cones and spheres',
goal:'Find the area and circumference of a circle, and the volume of a cylinder, a cone and a sphere, using π ≈ 3.14.',
points:20,
skills:{circle:'Circles',cylinder:'Cylinders and cones',sphere:'Spheres'},
steps:[
 {skill:'circle',say:'Every circle has the same ratio of distance around (circumference) to distance across (diameter): π, about 3.14. So C = π × d, or 2 × π × r, where r is the radius.',eq:'C = 2 × π × r',pic:{t:'setups',title:'A circle',head:'',rows:[['radius r','5 cm'],['diameter d','10 cm'],['circumference','3.14 × 10 = 31.4 cm']],cols:['Value']}},
 {skill:'circle',say:'The area of a circle is π × r × r. A circle of radius 5 cm has area 3.14 × 5 × 5 = 78.5 cm².',eq:'A = π × r² = 78.5',pic:{t:'setups',title:'Area of a circle',head:'',rows:[['radius','5 cm'],['r × r','25'],['area','3.14 × 25 = 78.5 cm²']],cols:['Value']},
  check:{prompt:'Try it: using π ≈ 3.14, what is the area of a circle with radius 3 cm, in cm²?',answer:28.26,options:[28.26,18.84,9.42],hint:'3.14 × 3 × 3.',pic:{t:'setups',title:'A circle',head:'',rows:[['radius','3 cm']],cols:['Value']}}},
 {skill:'cylinder',say:'A cylinder is a stack of circles: volume = (area of the circle) × height = π × r² × h. Radius 2 cm and height 10 cm: 3.14 × 4 × 10 = 125.6 cm³.',eq:'V = π × r² × h',pic:{t:'setups',title:'A cylinder',head:'',rows:[['radius','2 cm'],['height','10 cm'],['volume','3.14 × 4 × 10 = 125.6 cm³']],cols:['Value']}},
 {skill:'cylinder',say:'A cone with the same radius and height holds exactly one third of the cylinder: V = π × r² × h ÷ 3.',eq:'V = π × r² × h ÷ 3',pic:{t:'setups',title:'Cone and cylinder',head:'',rows:[['cylinder','125.6 cm³'],['cone, same r and h','125.6 ÷ 3 ≈ 41.87 cm³']],cols:['Volume']},
  check:{prompt:'Try it: using π ≈ 3.14, what is the volume of a cylinder with radius 3 cm and height 5 cm, in cm³?',answer:141.3,options:[141.3,47.1,94.2],hint:'3.14 × 3 × 3 × 5.',pic:{t:'setups',title:'A cylinder',head:'',rows:[['radius','3 cm'],['height','5 cm']],cols:['Value']}}},
 {skill:'sphere',say:'The volume of a sphere is 4 ÷ 3 × π × r × r × r. A ball of radius 3 cm: 4 ÷ 3 × 3.14 × 27 = 113.04 cm³.',eq:'V = 4/3 × π × r³',pic:{t:'setups',title:'A sphere',head:'',rows:[['radius','3 cm'],['r × r × r','27'],['volume','4 ÷ 3 × 3.14 × 27 = 113.04 cm³']],cols:['Value']}},
 {skill:'sphere',say:'Doubling the radius makes a sphere 2 × 2 × 2 = 8 times the volume, because the radius is cubed.',pic:{t:'setups',title:'Doubling the radius',head:'',rows:[['radius 3 cm','113.04 cm³'],['radius 6 cm','904.32 cm³']],cols:['Volume']},
  check:{prompt:'Try it: using π ≈ 3.14, what is the volume of a sphere with radius 6 cm, in cm³?',answer:904.32,options:[904.32,452.16,113.04],hint:'4 ÷ 3 × 3.14 × 216.',pic:{t:'setups',title:'A sphere',head:'',rows:[['radius','6 cm']],cols:['Value']}}}],
progression:{requires:['math-e-volume','math-m-exponents-scientific'],operations:3,demand:'Square or cube the radius, multiply by π ≈ 3.14 (and the height, or 4/3, or 1/3), and keep units straight.'},
items(add){
 const OBJ=['a fictional tin','a fictional water tank','a fictional candle','a fictional drum','a fictional vase'];
 /* Circles: circumference from radius or diameter, area from radius. */
 for(const r of [1,2,3,4,5,6,7,8,9,10,12]){
  add('circle',`Using π ≈ 3.14, what is the area of a circle with radius ${r} cm, in cm²?`,r2(PI*r*r),{t:'setups',title:'A circle',head:'',rows:[['radius',`${r} cm`]],cols:['Value']},`3.14 × ${r} × ${r} = ${r2(PI*r*r)} cm².`);
  add('circle',`Using π ≈ 3.14, what is the circumference of a circle with radius ${r} cm, in cm?`,r2(2*PI*r),{t:'setups',title:'A circle',head:'',rows:[['radius',`${r} cm`]],cols:['Value']},`2 × 3.14 × ${r} = ${r2(2*PI*r)} cm.`);
  add('circle',`Using π ≈ 3.14, what is the circumference of a circle with diameter ${2*r+1} cm, in cm?`,r2(PI*(2*r+1)),{t:'setups',title:'A circle',head:'',rows:[['diameter',`${2*r+1} cm`]],cols:['Value']},`3.14 × ${2*r+1} = ${r2(PI*(2*r+1))} cm.`);}
 /* Cylinders and cones (cones built with r²h divisible by 3, so the answer stays exact to two places). */
 let i=0;
 for(const r of [1,2,3,4,5,6])for(const h of [3,4,6,9,10]){const obj=OBJ[i++%OBJ.length],cyl=r2(PI*r*r*h);
  add('cylinder',`Using π ≈ 3.14, what is the volume of ${obj} shaped like a cylinder with radius ${r} cm and height ${h} cm, in cm³?`,cyl,{t:'setups',title:'A cylinder',head:'',rows:[['radius',`${r} cm`],['height',`${h} cm`]],cols:['Value']},`3.14 × ${r} × ${r} × ${h} = ${cyl} cm³.`);
  if((r*r*h)%3===0)add('cylinder',`Using π ≈ 3.14, what is the volume of a fictional cone with radius ${r} cm and height ${h} cm, in cm³?`,r2(PI*r*r*h/3),{t:'setups',title:'A cone',head:'',rows:[['radius',`${r} cm`],['height',`${h} cm`]],cols:['Value']},`3.14 × ${r} × ${r} × ${h} ÷ 3 = ${r2(PI*r*r*h/3)} cm³.`);}
 /* Spheres (radii that are multiples of 3 keep 4/3 × r³ whole). */
 for(const r of [3,6,9,12,15,18,21,24,27,30]){const v=r2(4/3*PI*r**3);
  add('sphere',`Using π ≈ 3.14, what is the volume of a fictional ball with radius ${r} cm, in cm³?`,v,{t:'setups',title:'A sphere',head:'',rows:[['radius',`${r} cm`]],cols:['Value']},`4 ÷ 3 × 3.14 × ${r} × ${r} × ${r} = ${v} cm³.`);
  add('sphere',`Using π ≈ 3.14, what is the volume of a fictional sphere with diameter ${2*r} cm, in cm³?`,v,{t:'setups',title:'A sphere',head:'',rows:[['diameter',`${2*r} cm`]],cols:['Value']},`The radius is ${r} cm, so 4 ÷ 3 × 3.14 × ${r}³ = ${v} cm³.`);}
 for(const k of [2,3,4,5])for(const v0 of [10,25,40]){
  add('sphere',`A fictional sphere has a volume of ${v0} cm³. Its radius is made ${k} times as long. What is its new volume, in cm³?`,v0*k**3,{t:'setups',title:'Scaling a sphere',head:'',rows:[['volume',`${v0} cm³`],['radius scaled by',`${k}`]],cols:['Value']},`Volume grows by ${k} × ${k} × ${k} = ${k**3}, so ${v0} × ${k**3} = ${v0*k**3} cm³.`);}
}
};
