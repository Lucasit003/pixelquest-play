// Middle School topic (Grade 7, C3 D2.Geo.1.6-8 with D2.Geo.5.6-8): time zones as offsets from UTC, and travel
// across them. Every answer is computed from the offsets and times in its own question: the hours between two
// zones are the difference of their offsets, a local time moves by that difference, and a flight's local arrival
// time is its departure time plus the flight time plus the change of offset. Times are whole hours on the 24-hour
// clock. Every city is fictional, and real zone borders, daylight saving and half-hour zones are left out.
const C=[['Ashby',0],['Brill',5],['Corran',2],['Dunmore',-7],['Elden',-3],['Fairholt',9],['Glenn',-5],['Haverly',4],['Ostra',1],['Penhale',-8],['Quill',8],['Rivet',-1]];
const utc=o=>o===0?'UTC':`UTC${o>0?'+':'−'}${Math.abs(o)}`;
const hh=h=>`${String(h).padStart(2,'0')}:00`;
const wrap=h=>((h%24)+24)%24;
const dayOf=h=>h<0?'the day before':h>=24?'the next day':'the same day';
const city=([n,o])=>`${n} (${utc(o)})`;
const pic=(rows,hint)=>({t:'setups',title:'Fictional cities and their zones',head:'City',rows,cols:['Zone','Local time'],...(hint?{hint:true}:{})});
export default {
id:'geography-m-time-travel',subject:'geography',level:4,grade:7,standard:'C3 D2.Geo.1.6-8, D2.Geo.5.6-8',
title:'Time zones and travel',
goal:'Use time zones written as offsets from UTC to find the hours between two places, convert a local time, and work out when a flight lands in local time.',
points:20,
skills:{offset:'Hours between zones',convert:'Converting a time',flight:'Flights across zones'},
steps:[
 {skill:'offset',say:'Clocks around the world are set from Coordinated Universal Time, UTC. A zone is written as an offset from it: UTC+2 is 2 hours ahead of UTC, and UTC−3 is 3 hours behind. Real zone borders follow countries, and some zones use half hours, but every city here keeps a whole-hour zone.',pic:pic([['Corran','UTC+2','2 hours ahead'],['Ashby','UTC','UTC itself'],['Elden','UTC−3','3 hours behind']])},
 {skill:'offset',say:'The hours between two zones are the difference of their offsets. Corran (UTC+2) and Elden (UTC−3) are 2 - (-3) = 5 hours apart, and Corran, with the bigger offset, is ahead. Two zones on the same side subtract: UTC+9 is 9 - 2 = 7 hours ahead of UTC+2.',eq:'2 - (-3) = 5 hours',pic:pic([['Corran','UTC+2','ahead'],['Elden','UTC−3','5 hours behind Corran']]),
  check:{prompt:'Try it: the fictional city of Brill is in UTC+5 and the fictional city of Glenn is in UTC−5. How many hours ahead of Glenn is Brill?',answer:10,options:[10,0,5],hint:'Take Glenn’s offset from Brill’s: 5 - (-5).',pic:pic([['Brill','UTC+5','?'],['Glenn','UTC−5','?']])}},
 {skill:'convert',say:'To convert a local time, add the difference when moving to a zone that is ahead, and subtract it when moving to one that is behind. At 10:00 in Corran (UTC+2), it is 5 hours earlier in Elden (UTC−3): 05:00.',eq:'10 - 5 = 5, so 05:00',pic:pic([['Corran','UTC+2','10:00'],['Elden','UTC−3','05:00']])},
 {skill:'convert',say:'Past midnight the date changes. At 22:00 in Ashby (UTC), Brill (UTC+5) is 5 hours ahead: 22 + 5 = 27, which is 03:00 the next day. Going back past midnight gives the day before.',eq:'22 + 5 - 24 = 3',pic:pic([['Ashby','UTC','22:00'],['Brill','UTC+5','03:00 the next day']]),
  check:{prompt:'Try it: when it is 09:00 in the fictional city of Haverly (UTC+4), what hour is it in the fictional city of Rivet (UTC−1), on the 24-hour clock?',answer:4,options:[4,14,5],hint:'Rivet is 4 - (-1) = 5 hours behind Haverly.',pic:pic([['Haverly','UTC+4','09:00'],['Rivet','UTC−1','?']])}},
 {skill:'flight',say:'A flight’s arrival in local time is its departure time, plus the hours in the air, plus the change in offset from the starting zone to the landing zone. Flying from Ashby (UTC) at 08:00 for 6 hours to Brill (UTC+5): 8 + 6 + 5 = 19, so it lands at 19:00 Brill time.',eq:'8 + 6 + 5 = 19',pic:pic([['Ashby','UTC','departs 08:00'],['Brill','UTC+5','lands 19:00']])},
 {skill:'flight',say:'Flying west, the change in offset is negative, so a long flight can land at a local time not much later than it left. From Corran (UTC+2) at 12:00 for 9 hours to Penhale (UTC−8), the change is -10: 12 + 9 - 10 = 11, landing at 11:00 the same day.',eq:'12 + 9 - 10 = 11',pic:pic([['Corran','UTC+2','departs 12:00'],['Penhale','UTC−8','lands 11:00']]),
  check:{prompt:'Try it: a fictional flight leaves Ostra (UTC+1) at 10:00 and flies for 7 hours to Fairholt (UTC+9). At what hour does it land in Fairholt local time, on the 24-hour clock?',answer:1,options:[1,17,9],hint:'10 + 7 + 8 = 25. Past 24, start a new day.',pic:pic([['Ostra','UTC+1','departs 10:00'],['Fairholt','UTC+9','?']])}}],
progression:{requires:['geography-e-time-zones','math-m-negative-numbers'],operations:3,demand:'Subtract signed offsets, add or subtract the difference from a clock time, wrap past midnight, and add a flight time to a change of zone.'},
items(add){
 const N=C.length;
 /* Hours between two zones (the Try-it's Brill and Glenn are left out). */
 for(let i=0;i<N;i++)for(const s of [3,5,8]){const a=C[i],b=C[(i+s)%N],d=a[1]-b[1];if(d===0||(a[0]==='Brill'&&b[0]==='Glenn'))continue;const [x,y]=d>0?[a,b]:[b,a];
  add('offset',`The fictional city of ${x[0]} is in ${utc(x[1])} and the fictional city of ${y[0]} is in ${utc(y[1])}. How many hours ahead of ${y[0]} is ${x[0]}?`,x[1]-y[1],pic([[x[0],utc(x[1]),'?'],[y[0],utc(y[1]),'?']]),`${x[1]} - ${y[1]<0?`(${y[1]})`:y[1]} = ${x[1]-y[1]} hours.`);}
 for(const [p,q] of [[3,1],[5,9],[2,6],[0,10],[7,11],[4,8]]){const a=C[p],b=C[q];if(a[1]===b[1])continue;const ahead=a[1]>b[1]?a:b;
  add('offset',`The fictional cities of ${a[0]} (${utc(a[1])}) and ${b[0]} (${utc(b[1])}) keep different times. Which city’s clocks are ahead: ${a[0]} or ${b[0]}?`,ahead[0],pic([[a[0],utc(a[1]),'?'],[b[0],utc(b[1]),'?']]),`${utc(ahead[1])} is the bigger offset, so ${ahead[0]} is ahead.`);}
 /* Converting a local time (the Try-it's 09:00 Haverly to Rivet is left out). */
 for(let i=0;i<N;i++)for(const [s,h] of [[2,9],[7,22],[4,3]]){const a=C[i],b=C[(i+s)%N];if(a[1]===b[1]||(a[0]==='Haverly'&&b[0]==='Rivet'&&h===9))continue;const t=h+b[1]-a[1];
  add('convert',`When it is ${hh(h)} in the fictional city of ${city(a)}, what hour is it in the fictional city of ${city(b)}, on the 24-hour clock?`,wrap(t),pic([[a[0],utc(a[1]),hh(h)],[b[0],utc(b[1]),'?']]),`${b[0]} is ${Math.abs(b[1]-a[1])} hours ${b[1]>a[1]?'ahead':'behind'}: ${h} ${b[1]>a[1]?'+':'-'} ${Math.abs(b[1]-a[1])} = ${t}${t!==wrap(t)?`, which is ${hh(wrap(t))} ${dayOf(t)}`:''}.`);
  if(t!==wrap(t)&&i%2===0)add('convert',`When it is ${hh(h)} on Monday in the fictional city of ${city(a)}, what day is it in the fictional city of ${city(b)}?`,t<0?'Sunday':'Tuesday',pic([[a[0],utc(a[1]),`${hh(h)} Monday`],[b[0],utc(b[1]),'?']]),`${h} ${b[1]>a[1]?'+':'-'} ${Math.abs(b[1]-a[1])} = ${t}, which crosses midnight into ${t<0?'Sunday':'Tuesday'}.`);}
 /* Flights: the local arrival hour, the day it lands, and the flight time from two local times
    (the Try-it's Ostra to Fairholt is left out). */
 const FL=[[0,1,8,6],[2,9,12,9],[8,5,10,7],[3,7,14,5],[5,11,23,4],[6,2,6,11],[10,4,20,8],[11,3,7,3],[9,0,16,10],[1,6,1,12],[7,10,18,6],[4,8,9,13],[2,3,21,2],[5,1,15,9],[11,7,5,14],[0,9,13,8]];
 FL.forEach(([p,q,h,d],k)=>{const a=C[p],b=C[q];if(a[0]==='Ostra'&&b[0]==='Fairholt')return;const t=h+d+b[1]-a[1],lead=`A fictional flight leaves ${city(a)} at ${hh(h)} local time and flies for ${d} hours to ${city(b)}.`,P=pic([[a[0],utc(a[1]),`departs ${hh(h)}`],[b[0],utc(b[1]),'?']]);
  add('flight',`${lead} At what hour does it land in ${b[0]} local time, on the 24-hour clock?`,wrap(t),P,`${h} + ${d} ${b[1]-a[1]>=0?'+':'-'} ${Math.abs(b[1]-a[1])} = ${t}${t!==wrap(t)?`, which is ${hh(wrap(t))} ${dayOf(t)}`:''}.`);
  if(k%2===0)add('flight',`${lead} In ${b[0]} local time, does it land on the same day it left ${a[0]}, the next day, or the day before?`,dayOf(t),P,`It lands at ${h} + ${d} ${b[1]-a[1]>=0?'+':'-'} ${Math.abs(b[1]-a[1])} = ${t} on the departure day’s count, which is ${dayOf(t)}.`,[dayOf(t).replace(/^the /,''),dayOf(t)==='the same day'?'same':dayOf(t)==='the next day'?'next':'before']);
  else{const arr=wrap(t),days=t<0?-1:t>=24?1:0;add('flight',`A fictional flight leaves ${city(a)} at ${hh(h)} local time and lands in ${city(b)} at ${hh(arr)} local time${days?` ${days>0?'the next day':'the day before'}`:' the same day'}. How many hours was it in the air?`,d,pic([[a[0],utc(a[1]),`departs ${hh(h)}`],[b[0],utc(b[1]),`lands ${hh(arr)}`]]),`Turn the landing into ${a[0]} time: ${arr} ${a[1]-b[1]>=0?'+':'-'} ${Math.abs(a[1]-b[1])}${days?` ${days>0?'+ 24':'- 24'}`:''} = ${h+d}. Then ${h+d} - ${h} = ${d} hours.`);}});
}
};
