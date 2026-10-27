// Middle School topic (Grade 7, C3 D2.Geo.2.6-8): slopes from contour maps. Every answer is computed from the
// numbers in its own question: crossing a contour line uphill adds one contour interval (downhill takes one away),
// the rise is the difference of two elevations, a gradient of "1 in N" means N metres along for each metre up
// (N = horizontal distance ÷ rise), a percent grade is rise ÷ horizontal distance × 100, and on a ratio-scale map
// 1 cm stands for the scale number of centimetres on the ground. Every hill, path and map is fictional.
const fmt=n=>n.toLocaleString('en-US');
const tab=(title,rows,hint)=>({t:'setups',title,head:'',rows,cols:['Value'],...(hint?{hint:true}:{})});
const HILL=['Brackenridge','Cold Fell','Harrow Top','Mossy Knoll','Pike Edge','Raven Crag','Stonyhurst','Thornback'];
export default {
id:'geography-m-gradient',subject:'geography',level:4,grade:7,standard:'C3 D2.Geo.2.6-8',
title:'Gradients from contour maps',
goal:'Use contour lines to find an elevation and a rise, work out a slope’s gradient as 1 in N and as a percent, and compare how steep two paths are.',
points:20,
skills:{rise:'Rise from contours',gradient:'Gradient',compare:'Comparing slopes'},
steps:[
 {skill:'rise',say:'Contour lines join places of equal height, and the contour interval is the height between neighbouring lines. On a fictional map with an interval of 20 m, a path starting at 140 m that crosses 5 lines uphill ends at 140 + 5 × 20 = 240 m.',eq:'140 + 5 × 20 = 240',pic:tab('A fictional path uphill',[['start','140 m'],['contour interval','20 m'],['lines crossed uphill','5'],['end','240 m']])},
 {skill:'rise',say:'The rise between two points is the higher elevation minus the lower. From 240 m down to 90 m is a drop of 240 - 90 = 150 m. Going downhill, each line crossed takes one interval away.',eq:'240 - 90 = 150',pic:tab('Two fictional points',[['top','240 m'],['bottom','90 m'],['drop','150 m']]),
  check:{prompt:'Try it: on a fictional map with a contour interval of 10 m, a path starts at 230 m and crosses 7 contour lines going downhill. What is the elevation at the end, in metres?',answer:160,options:[160,300,223],hint:'Each line downhill takes away 10 m.',pic:tab('A fictional path downhill',[['start','230 m'],['contour interval','10 m'],['lines crossed downhill','7'],['end','?']])}},
 {skill:'gradient',say:'A gradient compares the rise with the horizontal distance. "1 in 20" means 20 m along for every 1 m up. A path that rises 60 m over 1,200 m has a gradient of 1 in 20, because 1,200 ÷ 60 = 20.',eq:'1,200 ÷ 60 = 20',pic:tab('A fictional path',[['rise','60 m'],['horizontal distance','1,200 m'],['gradient','1 in 20']])},
 {skill:'gradient',say:'Road signs often give a gradient as a percent: the rise ÷ the horizontal distance × 100. The same path is 60 ÷ 1,200 × 100 = 5%. A steeper slope has a smaller N and a bigger percent.',eq:'60 ÷ 1,200 × 100 = 5',pic:tab('The same path',[['rise','60 m'],['horizontal distance','1,200 m'],['grade','5%']]),
  check:{prompt:'Try it: a fictional path rises 40 m over a horizontal distance of 800 m. Its gradient is 1 in what number?',answer:20,options:[20,32,5],hint:'Divide the horizontal distance by the rise.',pic:tab('A fictional path',[['rise','40 m'],['horizontal distance','800 m'],['gradient','1 in ?']])}},
 {skill:'compare',say:'On a map, lines that are close together mean a steep slope, and lines far apart mean a gentle one. To compare two paths exactly, work out each gradient: 1 in 12 is steeper than 1 in 20, because the path climbs 1 m in a shorter distance.',pic:tab('Two fictional paths',[['path A','1 in 12'],['path B','1 in 20']])},
 {skill:'compare',say:'Map distances need the scale first. On a 1:25,000 map, 1 cm stands for 25,000 cm, which is 250 m, so a path 4 cm long covers 4 × 250 = 1,000 m. If it rises 50 m, its gradient is 1 in 20, because 1,000 ÷ 50 = 20.',eq:'4 × 250 = 1,000',pic:tab('A fictional 1:25,000 map',[['path on the map','4 cm'],['on the ground','1,000 m'],['rise','50 m']]),
  check:{prompt:'Try it: fictional path A rises 30 m over 600 m, and fictional path B rises 45 m over 540 m. Which path is steeper: A or B?',answer:'B',options:['A','B'],hint:'A is 1 in 20. Work out B’s gradient.',pic:{t:'setups',title:'Two fictional paths',head:'',rows:[['rise','30 m','45 m'],['horizontal distance','600 m','540 m']],cols:['Path A','Path B']}}}],
progression:{requires:['geography-e-contour-lines','math-m-ratios'],operations:2,demand:'Add or subtract contour intervals, divide a distance by a rise or a rise by a distance, and turn map centimetres into metres with a ratio scale.'},
items(add){
 let i=0;const H=()=>HILL[i++%HILL.length];
 /* Elevations by counting contour lines, and rises between two points (the Try-it's 230 m, 10 m, 7 down is left out). */
 for(const [iv,start] of [[10,230],[20,140],[25,300],[50,450],[5,85],[10,120],[20,360],[25,175],[50,800],[5,60]])for(const [n,up] of [[4,true],[7,false],[3,false],[6,true]]){if(iv===10&&start===230&&n===7&&!up)continue;const end=start+(up?1:-1)*n*iv,h=H();if(end<0)continue;
  add('rise',`On a fictional map of ${h} with a contour interval of ${iv} m, a path starts at ${start} m and crosses ${n} contour lines going ${up?'uphill':'downhill'}. What is the elevation at the end, in metres?`,end,tab(`A fictional path on ${h}`,[['start',`${start} m`],['contour interval',`${iv} m`],[`lines crossed ${up?'uphill':'downhill'}`,`${n}`],['end','?']]),`${start} ${up?'+':'-'} ${n} × ${iv} = ${end} m.`);}
 for(const [a,b,iv] of [[340,120,20],[95,15,5],[600,350,50],[275,200,25],[180,60,20],[420,300,10]]){const h=H();
  add('rise',`On a fictional map of ${h}, the summit is at ${a} m and the car park at ${b} m, with a contour interval of ${iv} m. How many contour lines does a path from the car park to the summit cross, counting the summit's line but not the car park's?`,(a-b)/iv,tab(`Fictional ${h}`,[['summit',`${a} m`],['car park',`${b} m`],['contour interval',`${iv} m`],['lines crossed','?']]),`The rise is ${a} - ${b} = ${a-b} m, and ${a-b} ÷ ${iv} = ${(a-b)/iv} lines.`);}
 /* Gradients as 1 in N and as a percent (the Try-it's 40 m over 800 m is left out). */
 for(const [r,d] of [[50,1000],[30,900],[25,500],[80,1200],[60,600],[45,1350],[20,1000],[100,1500],[75,600],[40,1600],[15,300],[90,2700]]){const h=H(),N=d/r,pct=r*100/d;
  add('gradient',`A fictional path up ${h} rises ${r} m over a horizontal distance of ${fmt(d)} m. Its gradient is 1 in what number?`,N,tab(`A fictional path up ${h}`,[['rise',`${r} m`],['horizontal distance',`${fmt(d)} m`],['gradient','1 in ?']]),`${fmt(d)} ÷ ${r} = ${N}, so the gradient is 1 in ${N}.`);
  if(Number.isInteger(pct*10))add('gradient',`A fictional road up ${h} rises ${r} m over a horizontal distance of ${fmt(d)} m. What is its grade, as a percent?`,pct,tab(`A fictional road up ${h}`,[['rise',`${r} m`],['horizontal distance',`${fmt(d)} m`],['grade','?']]),`${r} ÷ ${fmt(d)} × 100 = ${pct}%.`);}
 for(const [N,d] of [[20,800],[15,600],[25,1500],[12,960],[40,2000],[8,400]]){const h=H();
  add('gradient',`A fictional path up ${h} has a gradient of 1 in ${N} over a horizontal distance of ${fmt(d)} m. How many metres does it rise?`,d/N,tab(`A fictional path up ${h}`,[['gradient',`1 in ${N}`],['horizontal distance',`${fmt(d)} m`],['rise','?']]),`It rises 1 m for every ${N} m along: ${fmt(d)} ÷ ${N} = ${d/N} m.`);}
 for(const [pc,d] of [[6,500],[5,1200],[8,750],[4,2500],[10,350],[12,600],[3,1500],[15,400]]){const h=H();
  add('gradient',`A fictional road up ${h} has a grade of ${pc}% over a horizontal distance of ${fmt(d)} m. How many metres does it rise?`,pc*d/100,tab(`A fictional road up ${h}`,[['grade',`${pc}%`],['horizontal distance',`${fmt(d)} m`],['rise','?']]),`${pc}% of ${fmt(d)} m is ${pc} × ${fmt(d)} ÷ 100 = ${pc*d/100} m.`);}
 /* Comparing two paths, and paths measured on a ratio-scale map (the Try-it's 30/600 against 45/540 is left out). */
 const CMP=[[50,1000,40,600],[60,1800,30,1200],[25,750,45,900],[80,1600,90,1350],[35,700,20,500],[100,2500,60,1200],[45,1350,55,1100],[70,1400,40,1000],[30,450,50,1000],[24,720,36,900]];
 const g=[];CMP.forEach(([ra,da,rb,db],k)=>{const Na=da/ra,Nb=db/rb;if(Na===Nb)return;const w=Na<Nb?'A':'B';g.push(w);
  add('compare',`Fictional path A rises ${ra} m over ${fmt(da)} m, and fictional path B rises ${rb} m over ${fmt(db)} m. Which path is steeper: A or B?`,w,{t:'setups',title:'Two fictional paths',head:'',rows:[['rise',`${ra} m`,`${rb} m`],['horizontal distance',`${fmt(da)} m`,`${fmt(db)} m`]],cols:['Path A','Path B']},`A is 1 in ${Na} and B is 1 in ${Nb}; the smaller N is steeper, so ${w}.`,[`path ${w.toLowerCase()}`]);
  if(k%2===0)add('compare',`Fictional path A rises ${ra} m over ${fmt(da)} m, and fictional path B rises ${rb} m over ${fmt(db)} m. What is the N in the gradient 1 in N of the steeper path?`,Math.min(Na,Nb),{t:'setups',title:'Two fictional paths',head:'',rows:[['rise',`${ra} m`,`${rb} m`],['horizontal distance',`${fmt(da)} m`,`${fmt(db)} m`]],cols:['Path A','Path B']},`A is 1 in ${Na} and B is 1 in ${Nb}; the steeper is 1 in ${Math.min(Na,Nb)}.`);});
 for(const [sc,cm,r] of [[25000,4,50],[50000,3,75],[10000,8,40],[25000,6,100],[50000,2,25],[20000,5,50],[10000,12,60],[25000,2,25]]){const m=sc*cm/100,h=H();
  add('compare',`On a fictional 1:${fmt(sc)} map of ${h}, a path measures ${cm} cm and rises ${r} m. Its gradient is 1 in what number?`,m/r,tab(`A fictional 1:${fmt(sc)} map`,[['path on the map',`${cm} cm`],['rise',`${r} m`],['gradient','1 in ?']]),`${cm} cm on the map is ${cm} × ${fmt(sc)} = ${fmt(sc*cm)} cm, which is ${fmt(m)} m. Then ${fmt(m)} ÷ ${r} = ${m/r}.`);
  add('compare',`On a fictional 1:${fmt(sc)} map of ${h}, a path measures ${cm} cm. How many metres long is it on the ground, measured flat?`,m,tab(`A fictional 1:${fmt(sc)} map`,[['path on the map',`${cm} cm`],['on the ground','?']]),`${cm} × ${fmt(sc)} = ${fmt(sc*cm)} cm, and 100 cm = 1 m, so ${fmt(m)} m.`);}
}
};
