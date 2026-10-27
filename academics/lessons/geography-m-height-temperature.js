// Middle School topic (Grade 7, C3 D2.Geo.2.6-8 and D2.Geo.5.6-8): height and temperature. Every answer is computed
// from the numbers in its own question with the rule the lesson states: in this topic the air cools by 6.5°C for
// every 1,000 m of height (the standard average; real days vary with weather). So a place's temperature is the lower
// temperature minus 6.5 for each 1,000 m it is higher, and a height difference is the temperature difference ÷ 6.5
// × 1,000. Every place, mountain and reading is fictional.
const r1=x=>Math.round(x*100)/100;
const fmt=n=>n.toLocaleString('en-US');
const t=x=>`${r1(x)}°C`;
const RULE='In this topic the air cools by 6.5°C for every 1,000 m of height.';
const PL=['Mount Arvel','Brannoch Peak','Coldridge','Dunsmore Fell','Eagle Crag','Fernhill Top','Greymantle','Highcairn','Iron Tor','Juniper Ridge','Kestrel Pike','Lantern Hill'];
const tab=(title,rows,hint)=>({t:'setups',title,head:'',rows,cols:['Value'],...(hint?{hint:true}:{})});
export default {
id:'geography-m-height-temperature',subject:'geography',level:4,grade:7,standard:'C3 D2.Geo.2.6-8, D2.Geo.5.6-8',
title:'Height and temperature',
goal:'Use a stated cooling rate to work out the temperature higher up a mountain, the height from a temperature difference, and which of two places is colder.',
points:20,
skills:{cool:'Temperature higher up',height:'Height from temperature',compare:'Comparing places'},
steps:[
 {skill:'cool',say:'The higher you climb, the colder the air gets. On average the air cools by about 6.5°C for every 1,000 m of height, and this topic uses that rule. Real days vary with the weather, but the rule explains why mountain tops can be snowy above warm valleys.',pic:tab('The cooling rule',[['every 1,000 m higher','6.5°C colder']])},
 {skill:'cool',say:'If a fictional valley at sea level is 20°C, a summit 2,000 m above it is about 20 - 2 × 6.5 = 7°C. For 500 m, use half the rate: 3.25°C colder.',eq:'20 - 2 × 6.5 = 7',pic:tab('A fictional mountain',[['valley','20°C'],['summit height','2,000 m higher'],['summit','7°C']]),
  check:{prompt:'Try it: in this topic the air cools by 6.5°C for every 1,000 m of height. A fictional town is 18°C, and a hut stands 3,000 m higher. About what is the temperature at the hut, in °C?',answer:-1.5,options:[-1.5,1.5,15],hint:'3 × 6.5 = 19.5. Take that from 18.',pic:tab('A fictional climb',[['town','18°C'],['hut','3,000 m higher'],['hut temperature','?']])}},
 {skill:'height',say:'Turn the rule around to find a height difference: divide the temperature difference by 6.5 and multiply by 1,000. Readings of 15°C at the bottom and 2°C at the top differ by 13°C, so the top is 13 ÷ 6.5 × 1,000 = 2,000 m higher.',eq:'13 ÷ 6.5 × 1,000 = 2,000',pic:tab('Two fictional readings',[['bottom','15°C'],['top','2°C'],['height difference','2,000 m']])},
 {skill:'height',say:'Below zero works the same way: from 4°C down to -9°C is a drop of 13°C, again 2,000 m. Count the drop across zero carefully: 4 - (-9) is 4 + 9.',pic:tab('Across zero',[['lower reading','4°C'],['higher reading','-9°C'],['drop','13°C']]),
  check:{prompt:'Try it: in this topic the air cools by 6.5°C for every 1,000 m of height. A fictional climber reads 14°C at the start and -5.5°C at the top of a peak. How many metres did the climber go up?',answer:3000,options:[3000,1950,850],hint:'The drop is 14 - (-5.5) = 19.5°C. Divide by 6.5 and multiply by 1,000.',pic:tab('A fictional climb',[['start','14°C'],['top','-5.5°C'],['height climbed','?']])}},
 {skill:'compare',say:'To compare two places, work out each temperature from the same starting point. On a fictional 20°C day at sea level, a town at 800 m is 20 - 5.2 = 14.8°C, colder than a beach town at 0 m but warmer than a pass at 1,600 m.',eq:'20 - 5.2 = 14.8',pic:tab('A fictional 20°C day',[['beach, 0 m','20°C'],['town, 800 m','14.8°C'],['pass, 1,600 m','9.6°C']])},
 {skill:'compare',say:'Height can matter more than distance from the equator: a city high in the mountains near the equator can be cooler than a lowland city far from it. Always compare heights first when the rest is the same.',pic:tab('Height matters',[['mountain city','high and cool'],['lowland city','low and warm']]),
  check:{prompt:'Try it: in this topic the air cools by 6.5°C for every 1,000 m of height. On a day when sea level is 24°C, fictional village A is 600 m up and fictional village B is 2,000 m up. Which village is colder: A or B?',answer:'B',options:['A','B'],hint:'The higher village is colder.',pic:tab('A fictional 24°C day',[['village A','600 m'],['village B','2,000 m']])}}],
progression:{requires:['geography-m-climographs','math-m-negative-numbers'],operations:2,demand:'Multiply a height in thousands of metres by 6.5 and subtract, divide a temperature drop by 6.5, and compare across zero.'},
items(add){
 let i=0;const P=()=>PL[i++%PL.length];
 /* Temperature at a height (the Try-it's 18°C and 3,000 m is left out). */
 for(const base of [20,15,25,10,30,8])for(const h of [1000,2000,3000,500,1500,4000]){if(base===18&&h===3000)continue;const top=base-h/1000*6.5,p=P();
  add('cool',`${RULE} The fictional valley below ${p} is ${t(base)}, and the summit is ${fmt(h)} m higher. About what is the temperature at the summit, in °C?`,r1(top),tab(`Fictional ${p}`,[['valley',t(base)],['summit',`${fmt(h)} m higher`],['summit temperature','?']]),`${h/1000} × 6.5 = ${r1(h/1000*6.5)}, and ${base} - ${r1(h/1000*6.5)} = ${r1(top)}°C.`);}
 for(const [base,h] of [[22,1000],[16,2000],[28,4000],[12,1000],[19,2000],[26,3000],[14,500],[9,1500],[31,2000],[6,1000],[24,1500],[17,500]]){const top=base-h/1000*6.5,p=P();
  add('cool',`${RULE} It is ${t(base)} at the foot of fictional ${p}. How many degrees colder is it ${fmt(h)} m higher up?`,r1(h/1000*6.5),tab(`Fictional ${p}`,[['foot',t(base)],['climb',`${fmt(h)} m`],['how much colder','?']]),`${h/1000} × 6.5 = ${r1(h/1000*6.5)}°C colder.`);}
 /* Height from a temperature drop (the Try-it's 12°C to -1°C is left out). */
 for(const [lo,hi] of [[15,2],[20,7],[10,-3],[25,5.5],[18,-1.5],[8,-5],[30,17],[22,9],[5,-8],[16,-3.5],[27,1],[11,4.5]]){const drop=lo-hi,hgt=drop/6.5*1000,p=P();if(!Number.isInteger(hgt))continue;
  add('height',`${RULE} A fictional climber on ${p} reads ${t(lo)} at the start and ${t(hi)} at the top. How many metres did the climber go up?`,hgt,tab(`Fictional ${p}`,[['start',t(lo)],['top',t(hi)],['height climbed','?']]),`The drop is ${lo} - (${hi}) = ${r1(drop)}°C, and ${r1(drop)} ÷ 6.5 × 1,000 = ${fmt(hgt)} m.`);}
 for(const [base,top] of [[20,7],[15,-4.5],[24,11],[10,3.5],[26,0],[12,-1]]){const hgt=(base-top)/6.5*1000,p=P();if(!Number.isInteger(hgt))continue;
  add('height',`${RULE} On a fictional day it is ${t(base)} at sea level and ${t(top)} at the top of ${p}. How high is the top above sea level, in metres?`,hgt,tab(`Fictional ${p}`,[['sea level',t(base)],['top',t(top)],['height','?']]),`${base} - (${top}) = ${r1(base-top)}°C colder, which is ${fmt(hgt)} m.`);}
 for(const drop of [6.5,13,19.5,26,3.25,9.75]){const p=P();
  add('height',`${RULE} The top of fictional ${p} is ${drop}°C colder than its foot. How many metres higher is the top?`,drop/6.5*1000,tab(`Fictional ${p}`,[['colder by',`${drop}°C`],['height','?']]),`${drop} ÷ 6.5 × 1,000 = ${fmt(drop/6.5*1000)} m.`);}
 /* Comparing two places (the Try-it's 600 m against 2,000 m is left out). */
 [[[24,600],[24,2000]],[[20,1500],[20,400]],[[18,0],[18,1000]],[[26,2500],[26,1800]],[[15,300],[15,900]],[[22,3000],[22,2200]],[[28,100],[28,1200]],[[12,700],[12,200]],[[19,2600],[19,1400]],[[23,500],[23,3500]],[[10,1100],[10,100]],[[27,800],[27,2400]]].forEach(([[s1,h1],[s2,h2]],k)=>{if(h1===600&&h2===2000)return;const t1=s1-h1/1000*6.5,t2=s2-h2/1000*6.5,w=t1<t2?'A':'B';
  add('compare',`${RULE} On a day when sea level is ${t(s1)}, fictional village A is ${fmt(h1)} m up and fictional village B is ${fmt(h2)} m up. Which village is colder: A or B?`,w,tab(`A fictional ${t(s1)} day`,[['village A',`${fmt(h1)} m`],['village B',`${fmt(h2)} m`]]),`A is about ${t(t1)} and B about ${t(t2)}, so ${w} is colder.`,[`village ${w.toLowerCase()}`]);
  add('compare',`${RULE} On a day when sea level is ${t(s1)}, fictional village A is ${fmt(h1)} m up and fictional village B is ${fmt(h2)} m up. How many degrees warmer is the warmer village?`,r1(Math.abs(t1-t2)),tab(`A fictional ${t(s1)} day`,[['village A',`${fmt(h1)} m`],['village B',`${fmt(h2)} m`]]),`They are ${fmt(Math.abs(h1-h2))} m apart in height: ${Math.abs(h1-h2)/1000} × 6.5 = ${r1(Math.abs(t1-t2))}°C.`);});
 for(const [s,h,cut] of [[20,3500,0],[12,2000,0],[25,4000,0],[8,1000,0],[16,2400,0],[30,4200,0],[5,600,0],[18,2800,0]]){const top=s-h/1000*6.5,p=P();
  add('compare',`${RULE} On a day when sea level is ${t(s)}, is the top of fictional ${p}, ${fmt(h)} m up, below freezing (under 0°C): yes or no?`,top<cut?'yes':'no',tab(`Fictional ${p}`,[['sea level',t(s)],['height',`${fmt(h)} m`]]),`${s} - ${h/1000} × 6.5 = ${r1(top)}°C, which is ${top<0?'below':'not below'} freezing.`);}
}
};
