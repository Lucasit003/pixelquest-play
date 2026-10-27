// Middle School topic (Grade 6, NGSS MS-PS2-2 and MS-PS3-1 foundations): speed, distance and time. Every
// answer is computed from the numbers in its own question with the one rule this lesson states for a steady
// speed, in its three forms: speed = distance ÷ time, distance = speed × time, time = distance ÷ speed. Two
// movers are compared by their speeds, never by their distances or times alone. Every speed is steady and
// every mover is fictional, so nothing here is a fact about a real vehicle, animal or person.
const MS=[{n:'toy car',v:'rolls',sp:[1.5,2,2.5,3,4]},{n:'robot',v:'rolls',sp:[0.5,1,1.5,2]},{n:'runner',v:'runs',sp:[3,4,5,6,7.5]},{n:'swimmer',v:'swims',sp:[0.5,1,1.5,2]},{n:'drone',v:'flies',sp:[6,8,10,12,15]}];
const KH=[{n:'cyclist',v:'rides',sp:[12,15,18,20,24]},{n:'train',v:'travels',sp:[60,80,90,120]},{n:'ferry',v:'sails',sp:[15,20,25,30]},{n:'hiker',v:'walks',sp:[3,4,5]}];
/* Metres and seconds for the small movers, kilometres and hours for the big ones. */
const KINDS=[...MS.map(m=>({...m,du:'m',dw:'metres',tu:'seconds',su:'m/s',T:[4,5,8,10]})),...KH.map(m=>({...m,du:'km',dw:'kilometres',tu:'hours',su:'km/h',T:[2,3,4]}))];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const table=(title,rows,cols=['The trip'])=>({t:'setups',title,head:'Quantity',rows,cols});
export default {
id:'science-m-speed',subject:'science',level:4,grade:6,standard:'NGSS MS-PS2-2, MS-PS3-1 (foundations: speed, distance and time)',
title:'Speed, distance and time',
goal:'Work out a steady speed from a distance and a time, turn the rule around to find a distance or a time, and compare two movers by their speeds.',
points:20,
skills:{speed:'Finding a speed',solve:'Finding a distance or a time',compare:'Comparing two movers'},
steps:[
 {skill:'speed',say:'Speed tells how far something moves in each unit of time. A fictional toy car that rolls 4 m every second has a speed of 4 metres per second, written 4 m/s. After 5 seconds it has rolled 20 m.',eq:'4 m each second for 5 seconds = 20 m',pic:{t:'line',max:20,hop:4,jumps:5,solve:true}},
 {skill:'speed',say:'For a steady speed, divide the distance by the time. A fictional train goes 240 km in 3 hours: 240 ÷ 3 = 80, so its speed is 80 kilometres per hour, written 80 km/h.',eq:'speed = distance ÷ time = 240 ÷ 3 = 80 km/h',pic:table('A steady train trip',[['distance','240 km'],['time','3 hours'],['speed','80 km/h']]),
  check:{prompt:'Try it: a fictional drone flies 150 m in 6 seconds at a steady speed. What is its speed in m/s?',answer:25,options:[25,900,144],hint:'Divide the distance by the time: 150 ÷ 6.',pic:table('A steady drone flight',[['distance','150 m'],['time','6 seconds'],['speed','?']])}},
 {skill:'speed',say:'Real movers speed up and slow down. For a whole trip, distance ÷ time gives the average speed: the steady speed that would cover the same distance in the same time.',eq:'(30 km + 10 km) ÷ 2 hours = 20 km/h',pic:table('A trip that changes speed',[['first hour','30 km'],['second hour','10 km'],['whole trip','40 km in 2 hours'],['average speed','20 km/h']],['Distance'])},
 {skill:'solve',say:'Turn the rule around to find a distance: distance = speed × time. A fictional cyclist riding at a steady 12 km/h for 3 hours covers 12 × 3 = 36 km.',eq:'distance = speed × time = 12 × 3 = 36 km',pic:{t:'line',max:40,hop:12,jumps:3,solve:true}},
 {skill:'solve',say:'To find a time, divide the distance by the speed: time = distance ÷ speed. A fictional ferry at a steady 15 km/h takes 60 ÷ 15 = 4 hours to cross 60 km.',eq:'time = distance ÷ speed = 60 ÷ 15 = 4 hours',pic:{t:'line',max:60,hop:15,jumps:4,solve:true},
  check:{prompt:'Try it: a fictional bus travels 210 km at a steady 70 km/h. How many hours does the trip take?',answer:3,options:[3,140,280],hint:'Divide the distance by the speed: 210 ÷ 70.',pic:table('A steady bus trip',[['distance','210 km'],['speed','70 km/h'],['time','?']])}},
 {skill:'compare',say:'To compare two movers, find each speed first. Runner A runs 40 m in 8 seconds, which is 5 m/s. Runner B runs 30 m in 5 seconds, which is 6 m/s. B is faster even though A went further.',eq:'40 ÷ 8 = 5 m/s,  30 ÷ 5 = 6 m/s',pic:table('Two fictional runners',[['distance','40 m','30 m'],['time','8 seconds','5 seconds'],['speed','5 m/s','6 m/s']],['Runner A','Runner B'])},
 {skill:'compare',say:'A faster mover covers more distance in the same time, and needs less time for the same distance. Compare the speeds, never the distances or the times on their own.',pic:table('Two fictional carts',[['distance','36 m','50 m'],['time','4 seconds','10 seconds']],['Cart P','Cart Q']),
  check:{prompt:'Try it: cart P rolls 36 m in 4 seconds. Cart Q rolls 50 m in 10 seconds. Both keep a steady speed. Which cart is faster: P or Q?',answer:'P',options:['P','Q'],hint:'Work out how many metres each cart rolls in one second.',pic:table('Two fictional carts',[['distance','36 m','50 m'],['time','4 seconds','10 seconds']],['Cart P','Cart Q'])}}],
progression:{requires:['science-e-push-pull','math-e-multiply-bigger','math-e-decimals'],operations:2,demand:'Choose the right form of speed = distance ÷ time for the unknown, keep the units together (m with seconds, km with hours), and compare two movers by their speeds.'},
items(add){
 /* One question per steady trip; the trips take turns asking for the speed, the distance or the time. */
 let k=0;
 for(const m of KINDS)for(const s of m.sp)for(const t of m.T){const d=s*t;if(!Number.isInteger(d))continue;const form=k++%4;
  if(form===0||form===2)add('speed',`A fictional ${m.n} ${m.v} ${d} ${m.du} in ${t} ${m.tu} at a steady speed. What is the ${m.n}'s speed in ${m.su}?`,s,table(`A steady ${m.n}`,[['distance',`${d} ${m.du}`],['time',`${t} ${m.tu}`],['speed','?']]),`speed = distance ÷ time = ${d} ÷ ${t} = ${s} ${m.su}.`);
  else if(form===1)add('solve',`A fictional ${m.n} ${m.v} at a steady ${s} ${m.su} for ${t} ${m.tu}. How many ${m.dw} does the ${m.n} travel?`,d,Number.isInteger(s)&&d<=60?{t:'line',max:Math.ceil((d+1)/10)*10,hop:s,jumps:t,hint:true}:table(`A steady ${m.n}`,[['speed',`${s} ${m.su}`],['time',`${t} ${m.tu}`],['distance','?']]),`distance = speed × time = ${s} × ${t} = ${d} ${m.du}.`);
  else add('solve',`A fictional ${m.n} ${m.v} ${d} ${m.du} at a steady ${s} ${m.su}. How many ${m.tu} does the trip take?`,t,table(`A steady ${m.n}`,[['distance',`${d} ${m.du}`],['speed',`${s} ${m.su}`],['time','?']]),`time = distance ÷ speed = ${d} ÷ ${s} = ${t} ${m.tu}.`);}
 /* Two movers of one kind. In half the pairs the faster one goes the shorter distance (a short time), so the
    distances alone never answer it; which letter is faster alternates. A third of the pairs ask by how much. */
 let c=0;
 for(const m of KINDS){const ok=s=>m.T.filter(t=>Number.isInteger(s*t));
  for(let i=0;i<m.sp.length;i++)for(let j=i+1;j<m.sp.length;j++){const slow=m.sp[i],fast=m.sp[j],ts=ok(slow),tf=ok(fast),cat=c%4;
   const trap=cat===0||cat===2,fastIsA=cat===0||cat===3;
   const tF=trap?tf[0]:tf[tf.length-1],tS=trap?ts[ts.length-1]:ts[0];
   if(tF===tS||(trap&&fast*tF>=slow*tS))continue;
   c++;
   const [sA,tA,sB,tB]=fastIsA?[fast,tF,slow,tS]:[slow,tS,fast,tF],dA=sA*tA,dB=sB*tB,win=fastIsA?'A':'B',N=cap(m.n);
   const head=`${N} A ${m.v} ${dA} ${m.du} in ${tA} ${m.tu}. ${N} B ${m.v} ${dB} ${m.du} in ${tB} ${m.tu}. Both keep a steady speed.`;
   const pic=table(`Two fictional ${m.n}s`,[['distance',`${dA} ${m.du}`,`${dB} ${m.du}`],['time',`${tA} ${m.tu}`,`${tB} ${m.tu}`]],[`${N} A`,`${N} B`]);
   if(c%3===0)add('compare',`${head} How much faster, in ${m.su}, is the faster ${m.n}?`,fast-slow,pic,`A goes ${dA} ÷ ${tA} = ${sA} ${m.su} and B goes ${dB} ÷ ${tB} = ${sB} ${m.su}, so the faster one is ${fast} - ${slow} = ${fast-slow} ${m.su} faster.`);
   else add('compare',`${head} Which ${m.n} is faster: A or B?`,win,pic,`A goes ${dA} ÷ ${tA} = ${sA} ${m.su} and B goes ${dB} ÷ ${tB} = ${sB} ${m.su}, so ${win} is faster.`,[`${m.n} ${win.toLowerCase()}`]);}}
}
};
