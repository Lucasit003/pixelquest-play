// Middle School topic (Grade 7, extension of NGSS MS-PS2-3): series circuits and Ohm's law. The lesson states the
// model it uses: an ideal battery whose voltage stays fixed, wires with no resistance, and resistors that follow
// Ohm's law, V = I × R (voltage in volts, current in amperes, resistance in ohms). In a series circuit there is one
// path, so the same current flows through every part, the total resistance is the sum of the resistances, and the
// battery's voltage is shared between the resistors (each gets I × R). Every answer is computed from the numbers in
// its own question with those rules, and every value is a whole number. The middle-school standards treat electric
// forces and energy without Ohm's law, so this whole topic is an extension; every circuit is fictional.
const RS=[1,2,3,4,5,6,8,10,12,15,20],IS=[1,2,3,4,5,6];
const RP=[[1,2],[2,3],[1,5],[2,4],[3,5],[2,6],[3,9],[4,8],[5,7],[6,10],[8,10],[2,10],[4,6],[1,3]];
const R3=[[1,2,3],[2,3,5],[1,4,5],[2,2,8],[3,4,5],[2,5,8],[1,3,8],[4,4,4],[2,6,4],[5,5,2],[3,3,6],[1,2,9],[6,4,2],[3,6,9]];
const sum=a=>a.reduce((x,y)=>x+y,0);
const ohms=rs=>rs.length===2?`${rs[0]} Ω and ${rs[1]} Ω`:`${rs.slice(0,-1).map(r=>`${r} Ω`).join(', ')} and ${rs.at(-1)} Ω`;
const part=(title,rows)=>({t:'setups',title,head:'Quantity',rows,cols:['Value']});
const loop=(title,rs,rows=[])=>({t:'setups',title,head:'Part',rows:[...rows,...rs.map((r,i)=>[`resistor ${"ABCDEF"[i]}`,`${r} Ω`])],cols:['Value']});
export default {
id:'science-m-circuits',subject:'science',level:4,grade:7,standard:'NGSS MS-PS2-3 (extension: series circuits and Ohm’s law, V = I × R, go beyond the middle-school performance expectations)',
title:'Series circuits',
goal:'Use Ohm’s law, V = I × R, to find a voltage, a current or a resistance, add resistances in series, and find the current a battery drives around a series circuit.',
points:20,
skills:{ohm:'Using V = I × R',total:'Total resistance in series',current:'Current in a series circuit'},
steps:[
 {skill:'ohm',say:'An electric circuit is a closed loop that electric charge can flow around. Current, the rate of flow of charge, is measured in amperes (A). Voltage, the push that drives the current, is measured in volts (V). Resistance, how strongly a part opposes the current, is measured in ohms (Ω).',pic:{t:'setups',title:'Three circuit quantities',head:'Quantity',rows:[['current','amperes','A'],['voltage','volts','V'],['resistance','ohms','Ω']],cols:['Unit','Symbol']}},
 {skill:'ohm',say:'This topic uses Ohm’s law for each resistor: V = I × R. A current of 2 A through a 6 Ω resistor needs 2 × 6 = 12 V across it. Turn the law around as needed: I = V ÷ R and R = V ÷ I.',eq:'V = I × R = 2 × 6 = 12 V',pic:part('A fictional resistor',[['current','2 A'],['resistance','6 Ω'],['voltage','12 V']]),
  check:{prompt:'Try it: a fictional 9 V battery is connected to a single 3 Ω resistor. Using V = I × R, what current flows, in amperes?',answer:3,options:[3,27,6],hint:'Divide the voltage by the resistance: 9 ÷ 3.',pic:part('A fictional circuit',[['battery','9 V'],['resistor','3 Ω'],['current','?']])}},
 {skill:'total',say:'In a series circuit the parts are joined one after another in a single loop, so there is only one path and the same current flows through every part. The total resistance is the sum: R = R₁ + R₂ + R₃.',eq:'2 Ω + 3 Ω + 5 Ω = 10 Ω',pic:loop('A fictional series circuit',[2,3,5],[['total','10 Ω']])},
 {skill:'total',say:'Adding another resistor in series makes the total resistance bigger, so the same battery drives a smaller current. If any part of a series circuit breaks, the loop is open and no current flows anywhere in it.',pic:{t:'setups',title:'One fictional battery, more resistors',head:'Resistors in series',rows:[['one','smaller','larger'],['two','larger','smaller']],cols:['Total resistance','Current']},
  check:{prompt:'Try it: three fictional resistors of 4 Ω, 7 Ω and 9 Ω are joined in series. What is their total resistance, in ohms?',answer:20,options:[20,252,9],hint:'In series, add the resistances: 4 + 7 + 9.',pic:loop('Three fictional resistors',[4,7,9],[['total','?']])}},
 {skill:'current',say:'To find the current in a series circuit, add the resistances first, then divide the battery’s voltage by the total: I = V ÷ R. In this model the battery’s voltage stays fixed and the wires have no resistance. A fictional 12 V battery with 2 Ω and 4 Ω in series gives I = 12 ÷ 6 = 2 A.',eq:'R = 2 + 4 = 6 Ω,  I = 12 ÷ 6 = 2 A',pic:loop('A fictional series circuit',[2,4],[['battery','12 V'],['total','6 Ω'],['current','2 A']])},
 {skill:'current',say:'The battery’s voltage is shared between the resistors in series: each gets V = I × R, and these add up to the battery’s voltage. At 2 A, the 2 Ω resistor has 4 V across it and the 4 Ω resistor has 8 V, which make the battery’s 12 V.',eq:'2 × 2 = 4 V,  2 × 4 = 8 V,  4 + 8 = 12 V',pic:{t:'setups',title:'The 12 V shared at 2 A',head:'Resistor',rows:[['2 Ω','4 V'],['4 Ω','8 V'],['both','12 V']],cols:['Voltage']},
  check:{prompt:'Try it: a fictional 30 V battery is in series with resistors of 1 Ω and 5 Ω. Using V = I × R, what current flows, in amperes?',answer:5,options:[5,6,30],hint:'Add the resistances first: 1 + 5 = 6 Ω. Then divide 30 by 6.',pic:loop('A fictional series circuit',[1,5],[['battery','30 V'],['current','?']])}},
 {skill:'current',say:'Compare circuits by their currents, not by their batteries. A bigger battery can drive a smaller current if the resistance it pushes against is much bigger.',eq:'12 V ÷ 6 Ω = 2 A,  18 V ÷ 18 Ω = 1 A',pic:{t:'setups',title:'Two fictional circuits',head:'Quantity',rows:[['battery','12 V','18 V'],['total resistance','6 Ω','18 Ω'],['current','2 A','1 A']],cols:['Circuit A','Circuit B']}}],
progression:{requires:['math-m-expressions-equations','math-e-divide-remainder'],operations:2,demand:'Rearrange V = I × R for the unknown, add resistances in series, and divide a battery voltage by a total resistance.'},
items(add){
 /* Ohm's law for one resistor, three ways. */
 RS.forEach((R,i)=>{const I1=IS[(i*5+1)%6],I2=IS[(i+3)%6],I3=IS[(i*2)%6],R2=RS[(i*3+4)%RS.length],R3=RS[(i*7+2)%RS.length];
  add('ohm',`A current of ${I1} A flows through a fictional ${R} Ω resistor. Using V = I × R, what is the voltage across the resistor, in volts?`,I1*R,part('A fictional resistor',[['current',`${I1} A`],['resistance',`${R} Ω`],['voltage','?']]),`V = I × R = ${I1} × ${R} = ${I1*R} V.`);
  add('ohm',`A fictional resistor has ${I2*R2} V across it and a current of ${I2} A through it. Using V = I × R, what is its resistance, in ohms?`,R2,part('A fictional resistor',[['voltage',`${I2*R2} V`],['current',`${I2} A`],['resistance','?']]),`R = V ÷ I = ${I2*R2} ÷ ${I2} = ${R2} Ω.`);
  add('ohm',`A fictional ${R3} Ω resistor is connected on its own to a ${I3*R3} V battery. Using V = I × R, what current flows through it, in amperes?`,I3,part('A fictional circuit',[['battery',`${I3*R3} V`],['resistor',`${R3} Ω`],['current','?']]),`I = V ÷ R = ${I3*R3} ÷ ${R3} = ${I3} A.`);});
 /* Total resistance: add two or three in series, find a missing one from the total, or from a battery and a current. */
 [...RP.slice(0,6),...R3.slice(0,8)].forEach((rs,i)=>add('total',`A fictional series circuit has resistors of ${ohms(rs)}. What is the total resistance, in ohms?`,sum(rs),loop('A fictional series circuit',rs,[['total','?']]),`In series the resistances add: ${rs.join(' + ')} = ${sum(rs)} Ω.`));
 R3.slice(4,14).forEach((rs,i)=>{const [a,b,c]=[rs[i%3],rs[(i+1)%3],rs[(i+2)%3]],S=a+b+c;
  add('total',`Three fictional resistors in series have a total resistance of ${S} Ω. Two of them are ${a} Ω and ${b} Ω. What is the third, in ohms?`,c,loop('Three fictional resistors',[a,b],[['total',`${S} Ω`],['resistor C','?']]),`The three add up to ${S} Ω, so the third is ${S} - ${a} - ${b} = ${c} Ω.`);});
 RP.slice(4,14).forEach((rs,i)=>{const I=IS[(i*5+2)%6],V=I*sum(rs),[a,b]=i%2?rs:[rs[1],rs[0]];
  add('total',`A fictional ${V} V battery drives a current of ${I} A through two resistors in series. One of them is ${a} Ω. Using V = I × R, what is the other, in ohms?`,b,loop('A fictional series circuit',[a],[['battery',`${V} V`],['current',`${I} A`],['resistor B','?']]),`The total resistance is V ÷ I = ${V} ÷ ${I} = ${V/I} Ω, so the other resistor is ${V/I} - ${a} = ${b} Ω.`);});
 /* Current around a series circuit, and the share of the voltage across one resistor. */
 [...RP.slice(0,8),...R3.slice(6,12)].forEach((rs,i)=>{const I=IS[(i*7+3)%6],V=I*sum(rs);
  add('current',`A fictional ${V} V battery is connected in series with resistors of ${ohms(rs)}. Using V = I × R, what current flows, in amperes?`,I,loop('A fictional series circuit',rs,[['battery',`${V} V`],['current','?']]),`The total resistance is ${rs.join(' + ')} = ${sum(rs)} Ω, so I = V ÷ R = ${V} ÷ ${sum(rs)} = ${I} A.`);});
 [...RP.slice(2,10),...R3.slice(0,4)].forEach((rs,i)=>{const I=IS[(i*5+1)%6],V=I*sum(rs),one=rs[i%rs.length];if(rs.filter(r=>r===one).length>1)return;
  add('current',`A fictional ${V} V battery is connected in series with resistors of ${ohms(rs)}. Using V = I × R, what is the voltage across the ${one} Ω resistor, in volts?`,I*one,loop('A fictional series circuit',rs,[['battery',`${V} V`],[`voltage on ${one} Ω`,'?']]),`The total resistance is ${sum(rs)} Ω, so the current is ${V} ÷ ${sum(rs)} = ${I} A, and the ${one} Ω resistor has ${I} × ${one} = ${I*one} V across it.`);});
 /* Two circuits: in half the pairs the circuit with the bigger battery has the smaller current, so the batteries
    alone never answer it. The winner alternates between A and B. */
 const CIRC=[];RP.forEach((rs,i)=>{for(const I of [IS[i%6],IS[(i+3)%6]]){const V=I*sum(rs);if(V<=48)CIRC.push({rs,I,V});}});
 const trap=[],plain=[];
 for(let i=0;i<CIRC.length;i++)for(let j=i+1;j<CIRC.length;j++){const x=CIRC[i],y=CIRC[j];if(x.I===y.I||x.V===y.V)continue;const big=x.I>y.I?x:y,small=big===x?y:x;(big.V<small.V?trap:plain).push([x,y]);}
 const pairs=[];for(let i=0;pairs.length<24&&i<Math.max(trap.length,plain.length);i++){if(trap[i*5])pairs.push(trap[i*5]);if(plain[i*7])pairs.push(plain[i*7]);}
 pairs.forEach(([x,y],i)=>{const [A,B]=(i%2===0)===(x.I>y.I)?[x,y]:[y,x],win=A.I>B.I?'A':'B';
  add('current',`Circuit A is a fictional ${A.V} V battery in series with resistors of ${ohms(A.rs)}. Circuit B is a fictional ${B.V} V battery in series with resistors of ${ohms(B.rs)}. Using V = I × R, which circuit has the larger current: A or B?`,win,{t:'setups',title:'Two fictional series circuits',head:'Part',rows:[['battery',`${A.V} V`,`${B.V} V`],['resistors',A.rs.map(r=>`${r} Ω`).join(' + '),B.rs.map(r=>`${r} Ω`).join(' + ')]],cols:['Circuit A','Circuit B']},`A has ${A.V} ÷ ${sum(A.rs)} = ${A.I} A and B has ${B.V} ÷ ${sum(B.rs)} = ${B.I} A, so ${win} has the larger current.`,[`circuit ${win.toLowerCase()}`]);});
}
};
