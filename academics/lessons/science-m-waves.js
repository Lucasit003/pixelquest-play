// Middle School topic (Grade 8, NGSS MS-PS4-1): waves. Every answer is computed from the numbers in its own
// question: wavelength = length ÷ number of waves, frequency = waves ÷ seconds, amplitude = half the crest-to-
// trough height, speed = frequency × wavelength (turned around as needed), and period = 1 ÷ frequency. Every
// value is chosen so the answer is exact. Sound questions state the speed they use (340 m/s). Waves are fictional.
const r4=x=>Math.round(x*10000)/10000;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const MEDIA=['rope','spring','string','cable','slinky','ribbon'];
export default {
id:'science-m-waves',subject:'science',level:4,grade:8,standard:'NGSS MS-PS4-1',
title:'Waves: wavelength, frequency and speed',
goal:'Measure a wave’s wavelength, frequency and amplitude, use speed = frequency × wavelength, and link the period to the frequency.',
points:20,
skills:{parts:'Wavelength, frequency and amplitude',speed:'Wave speed',period:'Period and frequency'},
steps:[
 {skill:'parts',say:'A wave carries energy from place to place without carrying the matter along with it. A crest is a high point and a trough is a low point. The wavelength is the distance from one crest to the next, and the amplitude is the height of a crest above the rest position, half the height from crest to trough.',pic:tab('A fictional rope wave',[['crest to next crest','4 m'],['crest to trough height','60 cm'],['amplitude','30 cm']])},
 {skill:'parts',say:'The frequency is the number of waves that pass a point each second, measured in hertz (Hz). A fictional buoy that bobs up and down 12 times in 4 seconds has a frequency of 12 ÷ 4 = 3 Hz. If 6 complete waves fit along 18 m of rope, each wavelength is 18 ÷ 6 = 3 m.',eq:'frequency = 12 ÷ 4 = 3 Hz',pic:tab('A fictional buoy',[['bobs','12 times'],['time','4 seconds'],['frequency','3 Hz']]),
  check:{prompt:'Try it: a fictional rope holds 5 complete waves along 35 m. What is the wavelength, in metres?',answer:7,options:[7,175,30],hint:'Share the 35 m between the 5 waves.',pic:tab('A fictional rope',[['complete waves','5'],['length','35 m'],['wavelength','?']])}},
 {skill:'speed',say:'Each second, frequency waves pass, and each one is a wavelength long, so wave speed = frequency × wavelength. A fictional wave with a frequency of 3 Hz and a wavelength of 4 m travels 3 × 4 = 12 m every second.',eq:'v = f × λ = 3 × 4 = 12 m/s',pic:tab('A fictional wave',[['frequency','3 Hz'],['wavelength','4 m'],['speed','12 m/s']])},
 {skill:'speed',say:'Turn the rule around as needed: wavelength = speed ÷ frequency, and frequency = speed ÷ wavelength. A fictional wave moving at 20 m/s with a frequency of 5 Hz has a wavelength of 20 ÷ 5 = 4 m.',eq:'λ = v ÷ f = 20 ÷ 5 = 4 m',pic:tab('A fictional wave',[['speed','20 m/s'],['frequency','5 Hz'],['wavelength','4 m']]),
  check:{prompt:'Try it: a fictional water wave has a frequency of 2 Hz and a wavelength of 6 m. What is its speed, in m/s?',answer:12,options:[12,3,8],hint:'Multiply the frequency by the wavelength.',pic:tab('A fictional water wave',[['frequency','2 Hz'],['wavelength','6 m'],['speed','?']])}},
 {skill:'speed',say:'Sound waves in air all travel at about the same speed, roughly 340 m/s, so a sound with a higher frequency has a shorter wavelength. At 340 m/s, a 170 Hz hum has a wavelength of 340 ÷ 170 = 2 m, and a 680 Hz whistle has a wavelength of 340 ÷ 680 = 0.5 m.',pic:tab('Sound at 340 m/s',[['170 Hz','2 m'],['680 Hz','0.5 m']])},
 {skill:'period',say:'The period is the time one complete wave takes to pass, in seconds. Period = 1 ÷ frequency, so a 4 Hz wave has a period of 1 ÷ 4 = 0.25 s: four waves pass every second, each taking a quarter of a second.',eq:'T = 1 ÷ f = 1 ÷ 4 = 0.25 s',pic:tab('A fictional 4 Hz wave',[['waves each second','4'],['period','0.25 s']])},
 {skill:'period',say:'Going the other way, frequency = 1 ÷ period: a fictional wave with a period of 0.5 s has a frequency of 1 ÷ 0.5 = 2 Hz. In a number of seconds, frequency × seconds waves pass, so 2 Hz for 10 seconds is 2 × 10 = 20 waves.',eq:'f = 1 ÷ T = 1 ÷ 0.5 = 2 Hz',pic:tab('A fictional wave',[['period','0.5 s'],['frequency','2 Hz'],['waves in 10 s','20']]),
  check:{prompt:'Try it: a fictional wave has a frequency of 5 Hz. What is its period, in seconds?',answer:0.2,options:[0.2,5,0.5],hint:'Divide 1 by the frequency.',pic:tab('A fictional wave',[['frequency','5 Hz'],['period','?']])}}],
progression:{requires:['science-m-speed','math-m-ratios'],operations:2,demand:'Divide a length by a count or a count by a time, multiply or divide frequency and wavelength, and take 1 ÷ a frequency or a period.'},
items(add){
 let i=0;
 /* Wavelength from complete waves along a length (the Try-it's 5 waves along 20 m of rope is left out). */
 for(const n of [2,3,4,6,8])for(const l of [2,3,5,7,9]){const m=MEDIA[i++%MEDIA.length];
  add('parts',`A fictional ${m} holds ${n} complete waves along ${n*l} m. What is the wavelength, in metres?`,l,tab(`A fictional ${m}`,[['complete waves',`${n}`],['length',`${n*l} m`],['wavelength','?']]),`Each wave is ${n*l} ÷ ${n} = ${l} m long.`);}
 /* Frequency from bobs counted over a time. */
 for(const f of [2,3,4,5,6])for(const s of [2,5,10]){
  add('parts',`A fictional buoy bobs up and down ${f*s} times in ${s} seconds. What is the frequency of the waves, in hertz?`,f,tab('A fictional buoy',[['bobs',`${f*s} times`],['time',`${s} seconds`],['frequency','?']]),`frequency = ${f*s} ÷ ${s} = ${f} Hz.`);}
 /* Amplitude is half the crest-to-trough height. */
 for(const h of [3,5,8,12,15,20,25,40]){
  add('parts',`A fictional wave measures ${2*h} cm from the top of a crest to the bottom of a trough. What is its amplitude, in centimetres?`,h,tab('A fictional wave',[['crest to trough',`${2*h} cm`],['amplitude','?']]),`The amplitude is half the crest-to-trough height: ${2*h} ÷ 2 = ${h} cm.`);}
 /* Speed from frequency and wavelength, and each turned around (the Try-it's 2 Hz and 6 m are left out). */
 for(const f of [2,3,4,5,8,10])for(const l of [0.5,3,4,6,9]){if(f===2&&l===6)continue;const v=r4(f*l),m=MEDIA[i++%MEDIA.length],k=i%3;
  if(k===0)add('speed',`A fictional wave on a ${m} has a frequency of ${f} Hz and a wavelength of ${l} m. What is its speed, in m/s?`,v,tab(`A fictional ${m} wave`,[['frequency',`${f} Hz`],['wavelength',`${l} m`],['speed','?']]),`speed = ${f} × ${l} = ${v} m/s.`);
  else if(k===1)add('speed',`A fictional wave on a ${m} travels at ${v} m/s with a frequency of ${f} Hz. What is its wavelength, in metres?`,l,tab(`A fictional ${m} wave`,[['speed',`${v} m/s`],['frequency',`${f} Hz`],['wavelength','?']]),`wavelength = ${v} ÷ ${f} = ${l} m.`);
  else add('speed',`A fictional wave on a ${m} travels at ${v} m/s with a wavelength of ${l} m. What is its frequency, in hertz?`,f,tab(`A fictional ${m} wave`,[['speed',`${v} m/s`],['wavelength',`${l} m`],['frequency','?']]),`frequency = ${v} ÷ ${l} = ${f} Hz.`);}
 /* Sound at a stated 340 m/s. */
 const SRC=['whistle','drum','flute','bell','horn','buzzer','chime','siren'];
 [[3400,0.1],[34,10],[68,5],[85,4],[136,2.5],[170,2],[340,1],[680,0.5],[1360,0.25],[1700,0.2]].forEach(([f,l],j)=>{const s=SRC[j%SRC.length];
  add('speed',`In this question sound travels at 340 m/s in air. A fictional ${s} makes a sound with a frequency of ${f} Hz. What is its wavelength, in metres?`,l,tab(`A fictional ${s}`,[['speed of sound','340 m/s'],['frequency',`${f} Hz`],['wavelength','?']]),`wavelength = 340 ÷ ${f} = ${l} m.`);
  if(j%2)add('speed',`In this question sound travels at 340 m/s in air. A fictional ${s} makes a sound with a wavelength of ${l} m. What is its frequency, in hertz?`,f,tab(`A fictional ${s}`,[['speed of sound','340 m/s'],['wavelength',`${l} m`],['frequency','?']]),`frequency = 340 ÷ ${l} = ${f} Hz.`);});
 /* Period from frequency and frequency from period (the Try-it's 5 Hz is left out of the first). */
 for(const f of [2,4,8,10,20,25,40,50]){
  add('period',`A fictional wave has a frequency of ${f} Hz. What is its period, in seconds?`,r4(1/f),tab('A fictional wave',[['frequency',`${f} Hz`],['period','?']]),`period = 1 ÷ ${f} = ${r4(1/f)} s.`);}
 for(const T of [0.5,0.25,0.2,0.1,0.05,2,4,5]){
  add('period',`A fictional wave has a period of ${T} s. What is its frequency, in hertz?`,r4(1/T),tab('A fictional wave',[['period',`${T} s`],['frequency','?']]),`frequency = 1 ÷ ${T} = ${r4(1/T)} Hz.`);}
 /* Waves passing in a time, and the time a number of waves takes. */
 for(const f of [2,3,5])for(const s of [4,6,15]){
  add('period',`A fictional wave has a frequency of ${f} Hz. How many complete waves pass a point in ${s} seconds?`,f*s,tab('A fictional wave',[['frequency',`${f} Hz`],['time',`${s} seconds`],['waves','?']]),`${f} waves each second for ${s} seconds: ${f} × ${s} = ${f*s} waves.`);}
 for(const T of [0.5,0.2,2,3])for(const n of [6,10,15]){
  add('period',`A fictional wave has a period of ${T} s. How many seconds do ${n} complete waves take to pass a point?`,r4(T*n),tab('A fictional wave',[['period',`${T} s`],['waves',`${n}`],['time','?']]),`Each wave takes ${T} s, so ${n} waves take ${n} × ${T} = ${r4(T*n)} s.`);}
}
};
