// Middle School topic (Grade 6, NGSS MS-LS1-1): magnification with a compound light microscope. Every answer is computed
// from the numbers in its own question with the rules the lesson states: total magnification = eyepiece ×
// objective, actual size = image size ÷ magnification, image size = actual size × magnification, and
// 1 mm = 1,000 µm. Lens powers are common markings (eyepieces 5×-20×, objectives 4×-100×, totals up to 1000×).
// The slides are fictional; each specimen's size was kept inside its real range (bacteria 1-4 µm long, yeast
// cells 4-8 µm, pollen grains 20-40 µm, cheek cells 50-60 µm, onion skin cells and paramecia 100-250 µm long,
// human hairs 70-90 µm wide), and every image size is a whole or half millimetre.
const EYE=[5,10,15,20],OBJ=[4,10,20,40,60,100],TOTALS=[40,50,100,150,200,400,600,1000];
const SPEC=[{n:'bacterium',a:'a',w:'long',s:[1,2,4]},{n:'yeast cell',a:'a',w:'across',s:[4,5,8]},{n:'pollen grain',a:'a',w:'across',s:[20,25,30,40]},{n:'cheek cell',a:'a',w:'across',s:[50,60]},
 {n:'onion skin cell',a:'an',w:'long',s:[100,150,250]},{n:'paramecium',a:'a',w:'long',s:[120,200,250]},{n:'human hair',a:'a',w:'wide',s:[70,80,90]}];
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const cap=s=>s[0].toUpperCase()+s.slice(1);
const lens=(rows,title='A fictional microscope')=>({t:'setups',title,head:'Lens',rows,cols:['Magnification']});
const sizes=(n,rows)=>({t:'setups',title:`A ${n} on a fictional slide`,head:'Quantity',rows,cols:['Value']});
export default {
id:'science-m-magnification',subject:'science',level:4,grade:6,standard:'NGSS MS-LS1-1',
title:'Magnification',
goal:'Work out the total magnification of a microscope, then use it to find the actual size of a specimen or the size of its image, in micrometres and millimetres.',
points:20,
skills:{total:'Total magnification',actual:'Actual size',image:'Image size'},
steps:[
 {skill:'total',say:'A compound light microscope magnifies with two lenses: the eyepiece you look through, and the objective lens just above the specimen. Each lens is marked with how many times it magnifies, such as 10×.',pic:lens([['eyepiece','10×'],['objective lenses','4×, 10×, 40×']],'Lenses of a fictional microscope')},
 {skill:'total',say:'Total magnification = eyepiece × objective. A 10× eyepiece with a 4× objective magnifies 10 × 4 = 40 times, written 40×. With the 40× objective it is 10 × 40 = 400×.',eq:'10 × 4 = 40×,  10 × 40 = 400×',pic:{t:'line',max:40,hop:10,jumps:4,solve:true},
  check:{prompt:'Try it: a fictional microscope has a 15× eyepiece and a 10× objective lens. What is the total magnification? Type the number.',answer:150,options:[150,25,5],hint:'Multiply the eyepiece by the objective: 15 × 10.',pic:lens([['eyepiece','15×'],['objective','10×'],['total','?']])}},
 {skill:'actual',say:'Cells are tiny, so they are measured in micrometres, written µm. 1 mm = 1,000 µm, so 0.02 mm is 0.02 × 1,000 = 20 µm.',eq:'1 mm = 1,000 µm',pic:{t:'setups',title:'Millimetres and micrometres',head:'Length',rows:[['1 mm','1,000 µm'],['0.1 mm','100 µm'],['0.02 mm','20 µm']],cols:['Equals']}},
 {skill:'actual',say:'The image is bigger than the real object by the magnification, so actual size = image size ÷ magnification. At 400×, an image 8 mm across means a real object 8 ÷ 400 = 0.02 mm across, which is 20 µm.',eq:'8 mm ÷ 400 = 0.02 mm = 20 µm',pic:sizes('cell',[['image size','8 mm'],['magnification','400×'],['actual size','0.02 mm = 20 µm']]),
  check:{prompt:'Try it: at a total magnification of 100×, the image of a fictional cell is 5 mm across. What is the cell’s actual size in µm?',answer:50,options:[50,500,0.05,5],hint:'5 ÷ 100 gives the size in mm. Multiply by 1,000 to change mm to µm.',pic:sizes('cell',[['image size','5 mm'],['magnification','100×'],['actual size','? µm']])}},
 {skill:'image',say:'To go the other way, multiply: image size = actual size × magnification. A 25 µm pollen grain at 400× makes an image 25 × 400 = 10,000 µm across, which is 10,000 ÷ 1,000 = 10 mm.',eq:'25 µm × 400 = 10,000 µm = 10 mm',pic:sizes('pollen grain',[['actual size','25 µm'],['magnification','400×'],['image size','10,000 µm = 10 mm']])},
 {skill:'image',say:'Keep track of the units. Change mm to µm by multiplying by 1,000, and change µm to mm by dividing by 1,000.',pic:{t:'setups',title:'Changing units',head:'From',rows:[['mm to µm','× 1,000'],['µm to mm','÷ 1,000']],cols:['Do this']},
  check:{prompt:'Try it: a fictional cell is 50 µm across. How wide is its image at 40× total magnification, in mm?',answer:2,options:[2,2000,0.2,90],hint:'50 × 40 gives the image size in µm. Divide by 1,000 to change it to mm.',pic:sizes('cell',[['actual size','50 µm'],['magnification','40×'],['image size','? mm']])}}],
progression:{requires:['math-e-multiply-bigger','math-e-times-ten','math-e-decimals'],operations:2,demand:'Multiply two lens powers, then multiply or divide a size by the magnification and change between millimetres and micrometres by a factor of 1,000.'},
items(add){
 /* Total magnification: every eyepiece and objective pair up to 1000×, asked forwards, then backwards for one lens. */
 const pairs=[];for(const e of EYE)for(const o of OBJ)if(e*o<=1000)pairs.push([e,o]);
 pairs.forEach(([e,o],i)=>{
  add('total',`A fictional microscope has a ${e}× eyepiece and a ${o}× objective lens. What is the total magnification? Type the number.`,e*o,lens([['eyepiece',`${e}×`],['objective',`${o}×`],['total','?']]),`total = eyepiece × objective = ${e} × ${o} = ${e*o}×.`);
  if(i%2)add('total',`A fictional microscope with a ${e}× eyepiece gives a total magnification of ${e*o}×. What is the magnification of the objective lens? Type the number.`,o,lens([['eyepiece',`${e}×`],['objective','?'],['total',`${e*o}×`]]),`eyepiece × objective = total, so the objective is ${e*o} ÷ ${e} = ${o}×.`);
  else add('total',`A fictional microscope with a ${o}× objective lens gives a total magnification of ${e*o}×. What is the magnification of the eyepiece? Type the number.`,e,lens([['eyepiece','?'],['objective',`${o}×`],['total',`${e*o}×`]]),`eyepiece × objective = total, so the eyepiece is ${e*o} ÷ ${o} = ${e}×.`);});
 /* Sizes: each specimen size with each total that gives a whole or half millimetre image from 1 to 60 mm.
    They take turns asking for the actual size (µm) and the image size (mm). */
 let k=0;
 for(const sp of SPEC)for(const a of sp.s)for(const M of TOTALS){if((2*a*M)%1000)continue;const img=a*M/1000;if(img<1||img>60)continue;
  if(k++%2===0)add('actual',`At a total magnification of ${M}×, the image of ${sp.a} ${sp.n} on a fictional slide measures ${img} mm ${sp.w}. What is its actual size in µm?`,a,sizes(sp.n,[['image size',`${img} mm`],['magnification',`${M}×`],['actual size','? µm']]),`actual size = image size ÷ magnification = ${img} ÷ ${M} = ${a/1000} mm, and ${a/1000} × 1,000 = ${a} µm.`);
  else add('image',`${cap(sp.a)} ${sp.n} on a fictional slide is ${a} µm ${sp.w}. At a total magnification of ${M}×, how ${sp.w==='long'?'long':'wide'} is its image in mm?`,img,sizes(sp.n,[['actual size',`${a} µm`],['magnification',`${M}×`],['image size','? mm']]),`image size = actual size × magnification = ${a} × ${M} = ${fmt(a*M)} µm, and ${fmt(a*M)} ÷ 1,000 = ${img} mm.`);}
}
};
