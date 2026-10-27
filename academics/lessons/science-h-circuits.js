// High School topic (Grade 9, NGSS HS-PS3-1): electric circuits as energy transfer. The lesson states the model it
// uses: an ideal battery or supply whose voltage stays fixed, wires with no resistance, and resistors that follow
// Ohm's law, V = I × R (volts, amperes, ohms). In series the resistances add and the same current flows through each
// part; in parallel each branch has the full battery voltage, two branches combine as (R1 × R2) ÷ (R1 + R2) and any
// number as 1 ÷ R = 1 ÷ R1 + 1 ÷ R2 + …. Electrical power is P = V × I, which with Ohm's law is also I² × R and
// V² ÷ R. Energy in kilowatt-hours is power in kW × time in hours, with 1 kW = 1000 W stated in each question that
// uses it, and cost = kWh × the price per kWh; every price is fictional. Every answer is computed from the numbers in
// its own question. An answer that is not a whole number is exact to one decimal place, and exactly those questions
// say "Give your answer to one decimal place." Every circuit, appliance and town is fictional.
const BIG=['heater','oven','space heater','pool pump','washing machine','dehumidifier'];
const SMALL=['lamp','fan','radio','laptop charger','fish tank pump','desk light'];
const TOWN=['Glimmerford','Quillhaven','Thornvale','Pebbleton','Mossbury','Brindlewood','Fernwick','Larkspur Bay'];
const r1=x=>Math.round(x*10)/10;
const cap=s=>s[0].toUpperCase()+s.slice(1);
const big=x=>String(x).replace(/\B(?=(\d{3})+(?!\d))/g,',');
/* "an 8 V supply", "an 18 V battery", "a 12 V battery". */
const an=x=>{const s=String(x);return /^8/.test(s)||/^1[18](?!\d)/.test(s)?'an':'a';};
const hrs=h=>h===1?'1 hour':`${h} hours`;
const WORD={2:'two',3:'three',4:'four',5:'five',6:'six'};
const DP=' Give your answer to one decimal place.';
const dp=x=>Number.isInteger(x)?'':DP;
const tab=(title,rows)=>({t:'setups',title,head:'Quantity',rows,cols:['Value']});
const par=(a,b)=>a*b/(a+b);
const ohms=rs=>rs.length===2?`${rs[0]} Ω and ${rs[1]} Ω`:`${rs.slice(0,-1).map(r=>`${r} Ω`).join(', ')} and ${rs.at(-1)} Ω`;
/* The three Try-its. The practice pool leaves out any question that repeats one of them with only the names changed. */
const TRY={ohm:'a fictional 24 V battery drives a current of 3 A through a single resistor. Using V = I × R, what is the resistance, in ohms?',
 resist:'fictional resistors of 4 Ω and 12 Ω are joined in parallel. What is their total resistance, in ohms?',
 power:'a fictional 2,500 W oven is used for 2 hours. The fictional town of Glimmerford charges 20 cents per kWh. Use 1 kW = 1000 W. How much does this cost, in cents?'};
const NOUN=new RegExp(`\\b(${[...BIG,...SMALL,...TOWN].sort((a,b)=>b.length-a.length).join('|')})\\b`,'g');
const same=p=>p.replace(NOUN,'thing');
export default {
id:'science-h-circuits',subject:'science',level:5,grade:9,standard:'NGSS HS-PS3-1 (supporting energy calculations; not full computational-model coverage)',
title:'Electric circuits',
goal:'Use Ohm’s law, combine resistances in series and in parallel, and work out the power an appliance uses, the energy it uses in kilowatt-hours and what that costs.',
points:20,
skills:{ohm:'Using Ohm’s law',resist:'Series and parallel resistance',power:'Power and energy cost'},
steps:[
 {skill:'ohm',say:'Current is the rate of charge flow, in amperes (A). Voltage is electric potential difference: energy transferred per unit charge, in volts (V). Resistance is measured in ohms (Ω). Here we model steady direct current and positive, constant resistances that obey Ohm’s law, V = I × R. A current of 0.5 A through a fictional 12 Ω resistor needs 0.5 × 12 = 6 V.',eq:'V = I × R = 0.5 × 12 = 6 V',pic:tab('A fictional resistor',[['current','0.5 A'],['resistance','12 Ω'],['voltage','6 V']])},
 {skill:'ohm',say:'Turn the law around as needed: I = V ÷ R and R = V ÷ I. A fictional 9 V supply across a 6 Ω lamp drives a current of 9 ÷ 6 = 1.5 A. In this topic a battery’s voltage stays fixed, wires have no resistance, and lamps are modeled as ohmic resistors; real lamps need not keep a constant resistance.',eq:'I = V ÷ R = 9 ÷ 6 = 1.5 A',pic:tab('A fictional lamp',[['supply','9 V'],['resistance','6 Ω'],['current','1.5 A']]),
  check:{prompt:`Try it: ${TRY.ohm}`,answer:8,options:[8,72,21],hint:'Divide the voltage by the current: 24 ÷ 3.',pic:tab('A fictional circuit',[['battery','24 V'],['current','3 A'],['resistance','?']])}},
 {skill:'resist',say:'In series, parts are joined end to end on one path. The same current flows through each one, and the resistances add: R = R₁ + R₂ + R₃. Fictional resistors of 4 Ω, 6 Ω and 10 Ω in series make 4 + 6 + 10 = 20 Ω. The battery’s voltage is shared between them.',eq:'R = 4 + 6 + 10 = 20 Ω',pic:tab('Three fictional resistors in series',[['resistor A','4 Ω'],['resistor B','6 Ω'],['resistor C','10 Ω'],['total','20 Ω']])},
 {skill:'resist',say:'In parallel, parts sit on side-by-side branches, and each branch gets the full battery voltage. For two branches, R = (R₁ × R₂) ÷ (R₁ + R₂). Fictional 6 Ω and 3 Ω in parallel give 6 × 3 ÷ (6 + 3) = 18 ÷ 9 = 2 Ω. For two or more finite, positive branch resistances, the total is less than the smallest branch resistance.',eq:'R = 6 × 3 ÷ (6 + 3) = 2 Ω',pic:tab('Two fictional resistors in parallel',[['branch A','6 Ω'],['branch B','3 Ω'],['total','2 Ω']]),
  check:{prompt:`Try it: ${TRY.resist}`,answer:3,options:[3,16,8],hint:'Multiply them, 4 × 12 = 48, and add them, 4 + 12 = 16. Then divide 48 by 16.',pic:tab('Two fictional resistors in parallel',[['branch A','4 Ω'],['branch B','12 Ω'],['total','?']])}},
 {skill:'resist',say:'For more branches, add the reciprocals: 1 ÷ R = 1 ÷ R₁ + 1 ÷ R₂ + 1 ÷ R₃. Branches of 6 Ω, 3 Ω and 2 Ω give 1 ÷ 6 + 1 ÷ 3 + 1 ÷ 2 = 1, so R is 1 Ω. Equal branches are quicker: three 6 Ω branches give 6 ÷ 3 = 2 Ω.',eq:'1 ÷ 6 + 1 ÷ 3 + 1 ÷ 2 = 1,  R = 1 Ω',pic:tab('Three fictional branches in parallel',[['branch A','6 Ω'],['branch B','3 Ω'],['branch C','2 Ω'],['total','1 Ω']])},
 {skill:'resist',say:'To combine a series resistor with a parallel pair, reduce the pair first and add the series resistance. Then use I = V ÷ R to find the battery current. A fictional 12 V battery across 6 Ω and 3 Ω in parallel sees 2 Ω in all, so it supplies 12 ÷ 2 = 6 A. The branches carry 12 ÷ 6 = 2 A and 12 ÷ 3 = 4 A, which add up to 6 A.',eq:'I = 12 ÷ 2 = 6 A = 2 A + 4 A',pic:tab('A fictional 12 V parallel circuit',[['total resistance','2 Ω'],['current in the 6 Ω branch','2 A'],['current in the 3 Ω branch','4 A'],['battery current','6 A']])},
 {skill:'power',say:'Electrical power is P = V × I, in watts (W). A fictional 12 V lamp drawing 2 A uses 12 × 2 = 24 W. With Ohm’s law this also gives P = I² × R and P = V² ÷ R. A current of 3 A through a 4 Ω coil uses 3² × 4 = 36 W.',eq:'P = V × I = 12 × 2 = 24 W,  P = I² × R = 3² × 4 = 36 W',pic:tab('Two fictional parts',[['12 V lamp at 2 A','24 W'],['4 Ω coil at 3 A','36 W']])},
 {skill:'power',say:'For constant power, energy used = power × time. All appliance powers here are constant fictional values; calculated costs include only the energy charge, not fees or taxes. Energy companies count it in kilowatt-hours (kWh): 1 kWh is 1 kW used for 1 hour, and 1 kW = 1000 W. A fictional 2,000 W heater used for 3 hours uses 2 × 3 = 6 kWh. At a fictional price of 15 cents per kWh, that costs 6 × 15 = 90 cents.',eq:'2 kW × 3 h = 6 kWh,  cost = 6 × 15 = 90 cents',pic:tab('A fictional heater',[['power','2,000 W = 2 kW'],['time','3 hours'],['energy','6 kWh'],['price','15 cents per kWh'],['cost','90 cents']]),
  check:{prompt:`Try it: ${TRY.power}`,answer:100,options:[100,50,5],hint:'2,500 W is 2.5 kW, and 2.5 × 2 = 5 kWh. Multiply that by the 20 cents.',pic:tab('A fictional oven',[['power','2,500 W'],['time','2 hours'],['price','20 cents per kWh'],['cost','?']])}}],
progression:{requires:['science-m-circuits','science-m-heat-energy'],operations:3,demand:'Rearrange V = I × R, add series resistances and combine parallel ones with a product over a sum or reciprocals, and multiply a power by a time and a price.'},
items(add){
 /* A question that repeats a Try-it with only the names changed is skipped, so no Try-it comes back as practice. */
 const tried=new Set(Object.values(TRY).map(p=>same(cap(p)))),seen=new Set();
 const put=(skill,prompt,answer,pic,why,accept)=>{if(tried.has(same(prompt))||seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,why,accept);};
 let k=0;const Bg=()=>BIG[k++%BIG.length],Sm=()=>SMALL[k++%SMALL.length],Tn=()=>TOWN[k++%TOWN.length];
 /* Ohm's law three ways (the Try-it's 24 V and 3 A are left out). */
 [[4,0.5],[6,2],[8,1.5],[10,3],[12,2.5],[20,4],[24,0.5],[30,1.5],[5,5],[15,2],[9,0.5],[40,3]].forEach(([R,I])=>{const V=r1(I*R);
  put('ohm',`A fictional ${R} Ω heating coil carries a current of ${I} A. Using V = I × R, what is the voltage across the coil, in volts?${dp(V)}`,V,tab('A fictional heating coil',[['resistance',`${R} Ω`],['current',`${I} A`],['voltage','?']]),`V = I × R = ${I} × ${R} = ${V} V.`);});
 [[12,4],[9,6],[24,8],[6,12],[230,46],[120,60],[9,2],[18,4],[12,24],[36,9],[15,10],[48,16]].forEach(([V,R])=>{const I=r1(V/R);
  put('ohm',`A fictional lamp with a resistance of ${R} Ω is connected to ${an(V)} ${V} V supply. Using V = I × R, what current flows through it, in amperes?${dp(I)}`,I,tab('A fictional lamp',[['supply',`${V} V`],['resistance',`${R} Ω`],['current','?']]),`I = V ÷ R = ${V} ÷ ${R} = ${I} A.`);});
 [[12,2],[9,3],[6,0.5],[36,4],[20,2.5],[15,1.5],[48,6],[9,1.5],[10,4],[30,4],[18,1.2],[24,0.5]].forEach(([V,I])=>{const R=r1(V/I);
  put('ohm',`A fictional ${V} V battery drives a current of ${I} A through a single resistor. Using V = I × R, what is the resistance, in ohms?${dp(R)}`,R,tab('A fictional circuit',[['battery',`${V} V`],['current',`${I} A`],['resistance','?']]),`R = V ÷ I = ${V} ÷ ${I} = ${R} Ω.`);});
 /* Series: the battery's voltage is shared, each resistor getting I × R. */
 [[12,2,4],[12,4,2],[9,1,2],[9,2,1],[20,3,7],[24,5,3],[6,4,8],[18,4,5],[30,10,5],[10,6,4],[15,2,8],[12,9,3]].forEach(([V,a,b])=>{const I=V/(a+b),Va=r1(I*a);
  put('ohm',`A fictional ${a} Ω resistor and a fictional ${b} Ω resistor are joined in series across ${an(V)} ${V} V battery. Using V = I × R, how many volts are across the ${a} Ω resistor?${dp(Va)}`,Va,tab('A fictional series circuit',[['battery',`${V} V`],['resistor A',`${a} Ω`],['resistor B',`${b} Ω`],[`voltage across ${a} Ω`,'?']]),`The total is ${a} + ${b} = ${a+b} Ω, so I = ${V} ÷ ${a+b} = ${I} A, and the ${a} Ω resistor has ${I} × ${a} = ${Va} V across it.`);});
 /* Parallel: each branch has the full battery voltage. */
 [[12,4,6],[12,6,4],[9,3,6],[6,12,4],[24,8,12],[10,4,5],[18,9,6],[20,5,20],[15,10,6],[36,12,18],[9,2,3],[30,15,10]].forEach(([V,a,b])=>{const I=r1(V/a);
  put('ohm',`A fictional ${V} V battery is connected across a parallel pair of ${a} Ω and ${b} Ω resistors. Using V = I × R, what current flows through the ${a} Ω resistor, in amperes?${dp(I)}`,I,tab('A fictional parallel circuit',[['battery',`${V} V`],['branch A',`${a} Ω`],['branch B',`${b} Ω`],[`current in ${a} Ω`,'?']]),`Each branch has the full ${V} V, so I = ${V} ÷ ${a} = ${I} A.`);});
 /* Series totals. */
 [[3,5],[10,22],[4,8,12],[1.5,2.5],[47,33],[100,220],[6,9,15],[2,7,11],[12,18,30],[5,5,10]].forEach(rs=>{const R=r1(rs.reduce((x,y)=>x+y,0));
  put('resist',`Fictional resistors of ${ohms(rs)} are joined in series. What is their total resistance, in ohms?${dp(R)}`,R,tab('Fictional resistors in series',[...rs.map((r,i)=>[`resistor ${'ABCDEF'[i]}`,`${r} Ω`]),['total','?']]),`In series the resistances add: ${rs.join(' + ')} = ${R} Ω.`);});
 /* Two in parallel: product over sum. Only pairs whose total is exact to one decimal place are used, and the
    Try-it's 4 Ω and 12 Ω and the worked example's 3 Ω and 6 Ω are left out. */
 const L2=[2,3,4,5,6,8,10,12,15,20,24,30,40,60],P2=[];
 for(const a of L2)for(const b of L2)if(a<b&&Number.isInteger(a*b*10/(a+b))&&!(a===3&&b===6))P2.push([a,b]);
 P2.filter((_,i)=>i%3===0).slice(0,18).forEach(([a,b])=>{const R=r1(par(a,b));
  put('resist',`Fictional resistors of ${a} Ω and ${b} Ω are joined in parallel. What is their total resistance, in ohms?${dp(R)}`,R,tab('Two fictional resistors in parallel',[['branch A',`${a} Ω`],['branch B',`${b} Ω`],['total','?']]),`R = (${a} × ${b}) ÷ (${a} + ${b}) = ${a*b} ÷ ${a+b} = ${R} Ω.`);});
 /* Equal branches: the resistance divided by the number of branches (the worked example's three 6 Ω is left out). */
 [[2,10],[3,12],[4,20],[2,8],[5,30],[3,9],[4,6],[2,5],[6,60],[3,15]].forEach(([N,R])=>{const T=r1(R/N);
  put('resist',`A fictional circuit has ${WORD[N]} ${R} Ω resistors joined in parallel. What is their total resistance, in ohms?${dp(T)}`,T,tab('Equal fictional branches',[['branches',WORD[N]],['each branch',`${R} Ω`],['total','?']]),`With ${N} equal branches, R = ${R} ÷ ${N} = ${T} Ω.`);});
 /* Three different branches: add the reciprocals (the worked example's 2 Ω, 3 Ω and 6 Ω are left out). */
 const L3=[2,3,4,6,8,9,10,12,15,18,20,24,30,36,60],P3=[];
 for(const a of L3)for(const b of L3)for(const c of L3)if(a<b&&b<c){const n=a*b*c,d=a*b+b*c+a*c;if((n*10)%d===0&&!(a===2&&b===3&&c===6))P3.push([a,b,c]);}
 P3.filter((_,i)=>i%2===0).slice(0,12).forEach(([a,b,c])=>{const R=r1(a*b*c/(a*b+b*c+a*c));
  put('resist',`Fictional resistors of ${a} Ω, ${b} Ω and ${c} Ω are joined in parallel. What is their total resistance, in ohms?${dp(R)}`,R,tab('Three fictional resistors in parallel',[['branch A',`${a} Ω`],['branch B',`${b} Ω`],['branch C',`${c} Ω`],['total','?']]),`1 ÷ R = 1 ÷ ${a} + 1 ÷ ${b} + 1 ÷ ${c} = ${a*b+b*c+a*c} ÷ ${a*b*c}, so R = ${a*b*c} ÷ ${a*b+b*c+a*c} = ${R} Ω.`);});
 /* A resistor in series with a parallel pair. */
 [[5,6,3],[4,12,12],[1,4,4],[10,20,30],[3,10,15],[2,6,12],[8,5,20],[1.5,3,6]].forEach(([s,a,b])=>{const R=r1(s+par(a,b));
  put('resist',`A fictional ${s} Ω resistor is joined in series with a parallel pair of ${a} Ω and ${b} Ω resistors. What is the total resistance, in ohms?${dp(R)}`,R,tab('A fictional mixed circuit',[['series resistor',`${s} Ω`],['parallel branch A',`${a} Ω`],['parallel branch B',`${b} Ω`],['total','?']]),`The pair gives (${a} × ${b}) ÷ (${a} + ${b}) = ${r1(par(a,b))} Ω, and adding the series resistor gives ${s} + ${r1(par(a,b))} = ${R} Ω.`);});
 /* The current a battery supplies to a parallel pair or a series chain. */
 [[12,4,12],[9,3,6],[24,6,12],[6,2,2],[12,12,6],[18,9,18],[20,10,40],[30,20,30]].forEach(([V,a,b])=>{const R=par(a,b),I=r1(V/R);
  put('resist',`A fictional ${V} V battery is connected across a parallel pair of ${a} Ω and ${b} Ω resistors. Using V = I × R, what total current does the battery supply, in amperes?${dp(I)}`,I,tab('A fictional parallel circuit',[['battery',`${V} V`],['branch A',`${a} Ω`],['branch B',`${b} Ω`],['battery current','?']]),`The pair gives (${a} × ${b}) ÷ (${a} + ${b}) = ${r1(R)} Ω, so I = ${V} ÷ ${r1(R)} = ${I} A.`);});
 [[12,1,2,3],[9,2,3,4],[24,5,4,3],[6,3,3,6],[20,2,3,5],[15,4,4,2]].forEach(([V,...rs])=>{const R=rs.reduce((x,y)=>x+y,0),I=r1(V/R);
  put('resist',`A fictional series circuit has ${an(V)} ${V} V battery and resistors of ${ohms(rs)}, one after another. Using V = I × R, what current does the battery drive, in amperes?${dp(I)}`,I,tab('A fictional series circuit',[['battery',`${V} V`],...rs.map((r,i)=>[`resistor ${'ABCDEF'[i]}`,`${r} Ω`]),['current','?']]),`The total is ${rs.join(' + ')} = ${R} Ω, so I = ${V} ÷ ${R} = ${I} A.`);});
 /* Power three ways: V × I, I² × R and V² ÷ R, and a current from a power. */
 [[12,2],[230,4],[9,0.5],[6,1.5],[120,2.5],[24,3],[230,10],[3,0.5],[18,2],[12,0.25]].forEach(([V,I])=>{const d=V*I>=500?Bg():Sm(),Pw=r1(V*I);
  put('power',`A fictional ${d} runs on ${V} V and draws a current of ${I} A. What is its power, in watts?${dp(Pw)}`,Pw,tab(`A fictional ${d}`,[['voltage',`${V} V`],['current',`${I} A`],['power','?']]),`P = V × I = ${V} × ${I} = ${Pw} W.`);});
 [[2,5],[3,4],[4,10],[0.5,20],[5,2],[1.5,8],[10,3],[6,1.5]].forEach(([I,R])=>{const Pw=r1(I*I*R);
  put('power',`A current of ${I} A flows through a fictional ${R} Ω heating coil. What power does the coil use, in watts?${dp(Pw)}`,Pw,tab('A fictional heating coil',[['current',`${I} A`],['resistance',`${R} Ω`],['power','?']]),`P = I² × R = ${I}² × ${R} = ${Pw} W.`);});
 [[12,6],[9,3],[6,4],[24,12],[10,5],[20,8],[3,2],[30,20]].forEach(([V,R])=>{const Pw=r1(V*V/R);
  put('power',`A fictional ${R} Ω resistor is connected on its own across ${an(V)} ${V} V battery. What power does it use, in watts?${dp(Pw)}`,Pw,tab('A fictional resistor',[['battery',`${V} V`],['resistance',`${R} Ω`],['power','?']]),`P = V² ÷ R = ${V}² ÷ ${R} = ${Pw} W.`);});
 [[60,12],[2300,230],[1200,120],[36,12],[900,230],[45,9],[1500,120],[24,6]].forEach(([Pw,V])=>{const raw=Pw/V;if(Math.abs(raw*10-Math.round(raw*10))>1e-9)return;const d=Pw>=500?Bg():Sm(),I=r1(raw);
  put('power',`A fictional ${big(Pw)} W ${d} runs on ${V} V. What current does it draw, in amperes?${dp(I)}`,I,tab(`A fictional ${d}`,[['power',`${big(Pw)} W`],['voltage',`${V} V`],['current','?']]),`I = P ÷ V = ${big(Pw)} ÷ ${V} = ${I} A.`);});
 /* Energy in kilowatt-hours. */
 [[2000,3],[1500,4],[100,10],[60,5],[3000,2],[500,6],[2500,3],[1200,0.5],[800,5],[40,25]].forEach(([W,h])=>{const d=W>=500?Bg():Sm(),E=r1(W/1000*h);
  put('power',`A fictional ${big(W)} W ${d} is used for ${h} hours. Use 1 kW = 1000 W. How much energy does it use, in kilowatt-hours (kWh)?${dp(E)}`,E,tab(`A fictional ${d}`,[['power',`${big(W)} W`],['time',`${h} hours`],['energy','?']]),`${big(W)} W is ${(W/1000)} kW, and ${(W/1000)} × ${h} = ${E} kWh.`);});
 /* The cost: kWh × the price per kWh (the Try-it's 2,500 W for 2 hours at 20 cents is left out). */
 [[2000,4,15],[1500,2,20],[3000,3,12],[1000,6,25],[500,8,30],[2500,4,10],[100,20,15],[60,50,20],[1200,5,18],[2000,1.5,30],[800,10,12],[3000,0.5,24]].forEach(([W,h,c])=>{const d=W>=500?Bg():Sm(),town=Tn(),E=r1(W/1000*h),cost=r1(E*c);
  put('power',`A fictional ${big(W)} W ${d} is used for ${h} hours. The fictional town of ${town} charges ${c} cents per kWh. Use 1 kW = 1000 W. How much does this cost, in cents?${dp(cost)}`,cost,tab(`A fictional ${d} in ${town}`,[['power',`${big(W)} W`],['time',`${h} hours`],['price',`${c} cents per kWh`],['cost','?']]),`${big(W)} W for ${h} hours is ${(W/1000)} × ${h} = ${E} kWh, and ${E} × ${c} = ${cost} cents.`);});
 /* Two heaters. In half the pairs the heater with the higher power uses less energy, because it runs for a shorter time,
    so the power alone never answers it. The winner alternates between A and B. */
 const CMP=[[2000,1,500,6],[1500,2,1000,4],[3000,1,800,5],[2500,2,1200,3],[1000,5,2000,2],[500,8,1500,3],[2000,3,1000,4],[1200,4,3000,2],[800,6,2000,2],[3000,2,1500,3]];
 CMP.forEach(([p1,h1,p2,h2],i)=>{const x={p:p1,h:h1},y={p:p2,h:h2},e=b=>b.p*b.h,[A,B]=(i%2===0)===(e(x)>e(y))?[x,y]:[y,x],win=e(A)>e(B)?'A':'B';
  put('power',`Fictional heater A uses ${big(A.p)} W for ${hrs(A.h)}. Fictional heater B uses ${big(B.p)} W for ${hrs(B.h)}. Which heater uses more energy: A or B?`,win,{t:'setups',title:'Two fictional heaters',head:'Quantity',rows:[['power',`${big(A.p)} W`,`${big(B.p)} W`],['time',hrs(A.h),hrs(B.h)]],cols:['Heater A','Heater B']},`A uses ${A.p/1000} × ${A.h} = ${r1(e(A)/1000)} kWh and B uses ${B.p/1000} × ${B.h} = ${r1(e(B)/1000)} kWh, so heater ${win} uses more energy.`,[`heater ${win}`]);});
}
};
