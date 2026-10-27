// Middle School topic (Grade 6, CCSS 6.SP.A.3, 6.SP.B.5c): mean, median and range. The data sets come
// from a small fixed number generator (deterministic, so the pool is the same on every load), and
// every answer is computed from the listed values: the mean is the total divided by the count (each
// set is built so that it divides exactly), the median is the middle value in order (or the halfway
// point of the two middle values), and the range is the greatest minus the least. All data are fictional.
const CTX=[
 {say:n=>`A fictional football team scored these goals in ${n} games`,unit:'goals',per:'per game',lo:0,hi:9},
 {say:n=>`Minutes a fictional student spent reading on ${n} days`,unit:'minutes',per:'per day',lo:10,hi:45},
 {say:n=>`Heights of ${n} fictional seedlings in centimetres`,unit:'cm',per:'',lo:4,hi:22},
 {say:n=>`Points scored in ${n} rounds of a fictional quiz`,unit:'points',per:'per round',lo:2,hi:20},
 {say:n=>`Rainfall in millimetres on ${n} fictional days`,unit:'mm',per:'per day',lo:0,hi:16},
 {say:n=>`Ages of ${n} fictional cousins`,unit:'years',per:'',lo:3,hi:17}];
/* A linear congruential generator with a fixed seed: deterministic numbers, no randomness. */
let seed=20261007;const next=()=>(seed=(seed*1103515245+12345)%2147483648);
const SETS=[];
for(let i=0;SETS.length<48&&i<500;i++){
 const c=CTX[i%CTX.length],n=[5,6,7,5,7][i%5],span=c.hi-c.lo+1,v=Array.from({length:n},()=>c.lo+next()%span);
 /* Nudge the values until the total divides exactly by the count, keeping every value in range. */
 let r=v.reduce((a,b)=>a+b,0)%n,k=0;while(r){const j=k++%n;if(v[j]<c.hi){v[j]++;r=(r+1)%n;}else if(k>4*n)break;}
 if(r)continue;
 const sorted=[...v].sort((a,b)=>a-b),mid=n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2,mean=v.reduce((a,b)=>a+b,0)/n;
 if(sorted[0]===sorted[n-1])continue;
 const key=v.join(',');if(SETS.some(s=>s.key===key))continue;
 SETS.push({c,v,n,key,sorted,mean,median:mid,range:sorted[n-1]-sorted[0]});}
const list=v=>v.join(', ');
const plot=(s,hint)=>({t:'dots',values:s.v,min:s.c.lo,max:s.c.hi,unit:s.c.unit,...(hint?{hint:true}:{})});
export default {
id:'math-m-mean-median-range',subject:'math',level:4,grade:6,standard:'CCSS 6.SP.A.3, 6.SP.B.5c',
title:'Mean, median and range',
goal:'Find the mean, the median and the range of a small data set, and say what each one tells you.',
points:20,
skills:{mean:'The mean',median:'The median',range:'The range'},
steps:[
 {skill:'mean',say:'The mean shares the total out equally. Goals in five games: 3, 1, 4, 1, 6. The total is 15, and 15 ÷ 5 = 3, so the mean is 3 goals per game.',eq:'(3 + 1 + 4 + 1 + 6) ÷ 5 = 3',pic:{t:'dots',title:'Goals in five games',values:[3,1,4,1,6],min:0,max:8,unit:'goals',mean:3,solve:true}},
 {skill:'mean',say:'The mean is the balance point: the values above it make up exactly for the values below it. It does not have to be one of the values in the list.',pic:{t:'dots',title:'Goals in five games',values:[3,1,4,1,6],min:0,max:8,unit:'goals',mean:3,solve:true},
  check:{prompt:'Try it: a fictional student read for 20, 35, 25 and 40 minutes on four days. What is the mean number of minutes per day?',answer:30,options:[30,25,120],hint:'Add the four values, then divide the total by 4.',pic:{t:'dots',values:[20,35,25,40],min:15,max:45,unit:'minutes'}}},
 {skill:'median',say:'The median is the middle value once the data are in order. In order, 3, 1, 4, 1, 6 becomes 1, 1, 3, 4, 6, so the median is 3.',eq:'1, 1, [3], 4, 6',pic:{t:'dots',title:'Goals in five games',values:[3,1,4,1,6],min:0,max:8,unit:'goals',median:3,solve:true}},
 {skill:'median',say:'With an even number of values, the median is halfway between the two middle ones. For 2, 4, 7, 9 it is halfway between 4 and 7, which is 5.5.',eq:'(4 + 7) ÷ 2 = 5.5',pic:{t:'dots',values:[2,4,7,9],min:0,max:10,median:5.5,solve:true},
  check:{prompt:'Try it: seven fictional seedlings are 12, 7, 15, 9, 11, 7 and 14 cm tall. What is the median height in centimetres?',answer:11,options:[11,9,15],hint:'Put the seven heights in order and take the fourth one.',pic:{t:'dots',values:[12,7,15,9,11,7,14],min:4,max:18,unit:'cm'}}},
 {skill:'range',say:'The range shows how spread out the data are: the greatest value minus the least. For 1, 1, 3, 4, 6 the range is 6 - 1 = 5.',eq:'6 - 1 = 5',pic:{t:'dots',title:'Goals in five games',values:[3,1,4,1,6],min:0,max:8,unit:'goals'}},
 {skill:'range',say:'Two data sets can share a mean and still be spread out very differently. 4, 5, 5, 6 and 1, 3, 7, 9 both have a mean of 5, but their ranges are 2 and 8.',pic:{t:'setups',title:'Same mean, different spread',head:'',rows:[['data','4, 5, 5, 6','1, 3, 7, 9'],['mean','20 ÷ 4 = 5','20 ÷ 4 = 5'],['range','6 - 4 = 2','9 - 1 = 8']],cols:['Set A','Set B']},
  check:{prompt:'Try it: rainfall on five fictional days was 4, 0, 12, 7 and 2 mm. What is the range in millimetres?',answer:12,options:[12,5,25],hint:'Take the least value away from the greatest.',pic:{t:'dots',values:[4,0,12,7,2],min:0,max:14,unit:'mm'}}}],
progression:{requires:['math-e-divide-remainder','math-e-add-decimals'],operations:3,demand:'Total and divide for the mean, order the data for the median (halfway between two middle values when the count is even), and subtract the extremes for the range.'},
items(add){
 for(const s of SETS){const head=`${s.c.say(s.n)}: ${list(s.v)}.`;
  add('mean',`${head} What is the mean${s.c.per?` number of ${s.c.unit} ${s.c.per}`:''}?`,s.mean,plot(s),`The total is ${s.v.reduce((a,b)=>a+b,0)} and there are ${s.n} values, so the mean is ${s.v.reduce((a,b)=>a+b,0)} ÷ ${s.n} = ${s.mean}.`);
  add('median',`${head} What is the median?`,s.median,plot(s),`In order: ${list(s.sorted)}. ${s.n%2?`The middle value is ${s.median}.`:`The two middle values are ${s.sorted[s.n/2-1]} and ${s.sorted[s.n/2]}, and halfway between them is ${s.median}.`}`);
  add('range',`${head} What is the range?`,s.range,plot(s),`The greatest value is ${s.sorted[s.n-1]} and the least is ${s.sorted[0]}, so the range is ${s.sorted[s.n-1]} - ${s.sorted[0]} = ${s.range}.`);}
}
};
