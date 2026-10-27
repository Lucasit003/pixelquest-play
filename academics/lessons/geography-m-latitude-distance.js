// Middle School topic (Grade 8, C3 D2.Geo.1.6-8 and D2.Geo.3.6-8): distances along a meridian. Every answer is
// computed from the latitudes in its own question with the rule the lesson states, 1 degree of latitude = 111 km
// (the real figure is close to this everywhere): two places on the same line of longitude are their latitude
// difference apart in degrees (added when they are on opposite sides of the equator), times 111 km; and a trip's
// time is its distance divided by its speed. Every place is fictional.
const lat=d=>d===0?'0°':`${Math.abs(d)}°${d>0?'N':'S'}`;
const fmt=n=>n.toLocaleString('en-US');
const tab=(title,rows,hint)=>({t:'setups',title,head:'Place',rows,cols:['Latitude'],...(hint?{hint:true}:{})});
const PL=['Arden','Brisa','Calder','Dovran','Embry','Fennel','Garron','Hythe','Isola','Juniper','Korra','Linden','Merrow','Nolan'];
export default {
id:'geography-m-latitude-distance',subject:'geography',level:4,grade:8,standard:'C3 D2.Geo.1.6-8, D2.Geo.3.6-8',
title:'Distances along a meridian',
goal:'Find how many degrees of latitude separate two places on the same meridian, turn degrees into kilometres at 111 km a degree, and work out travel times along it.',
points:20,
skills:{degrees:'Degrees apart',distance:'Kilometres from degrees',travel:'Travel along a meridian'},
steps:[
 {skill:'degrees',say:'Lines of latitude circle the Earth parallel to the equator, which is 0°. Places north of it have latitudes in °N, places south in °S, up to 90° at each pole. Two places on the same line of longitude, a meridian, lie due north and south of each other.',pic:tab('Latitudes',[['North Pole','90°N'],['equator','0°'],['South Pole','90°S']])},
 {skill:'degrees',say:'On the same side of the equator, subtract the latitudes: 52°N and 38°N are 52 - 38 = 14 degrees apart. On opposite sides, add them, because the equator lies between: 20°N and 15°S are 20 + 15 = 35 degrees apart.',eq:'20 + 15 = 35',pic:tab('Two pairs of places',[['52°N and 38°N','14° apart'],['20°N and 15°S','35° apart']]),
  check:{prompt:'Try it: the fictional towns of Arden (34°N) and Brisa (12°S) lie on the same meridian. How many degrees of latitude apart are they?',answer:46,options:[46,22,34],hint:'They are on opposite sides of the equator, so add.',pic:tab('Two fictional towns',[['Arden','34°N'],['Brisa','12°S']])}},
 {skill:'distance',say:'Every degree of latitude is about the same length, and this topic uses 1° = 111 km. So places 14 degrees apart on a meridian are 14 × 111 = 1,554 km apart.',eq:'14 × 111 = 1,554',pic:tab('1° of latitude = 111 km',[['14° apart','1,554 km']])},
 {skill:'distance',say:'Turn the rule around to find degrees from a distance: 777 km is 777 ÷ 111 = 7 degrees. Lines of longitude are different: they meet at the poles, so a degree of longitude shrinks away from the equator, and this rule is only for latitude.',eq:'777 ÷ 111 = 7',pic:tab('Kilometres to degrees',[['777 km','7°']]),
  check:{prompt:'Try it: using 1° of latitude = 111 km, how many kilometres apart are two fictional places on the same meridian at 10°N and 25°N?',answer:1665,options:[1665,15,3885],hint:'They are 15 degrees apart. Multiply by 111.',pic:tab('Two fictional places',[['first place','10°N'],['second place','25°N']])}},
 {skill:'travel',say:'Travel time is distance ÷ speed. A fictional ship sailing due south along a meridian at 37 km an hour covers 1,110 km, which is 10 degrees, in 1,110 ÷ 37 = 30 hours.',eq:'1,110 ÷ 37 = 30',pic:tab('A fictional voyage',[['distance','10°, 1,110 km'],['speed','37 km an hour']])},
 {skill:'travel',say:'To find where a traveller ends up, turn the distance into degrees and count them off from the start. Starting at 5°N and flying 1,665 km due south is 15 degrees, which crosses the equator and ends at 10°S.',pic:tab('A fictional flight due south',[['start','5°N'],['distance','1,665 km = 15°'],['end','10°S']]),
  check:{prompt:'Try it: a fictional plane flies due north along a meridian at 555 km an hour, from 8°S to 22°N. Using 1° of latitude = 111 km, how many hours does the flight take?',answer:6,options:[6,30,14],hint:'The trip is 30 degrees, 3,330 km. Divide by 555.',pic:tab('A fictional flight',[['start','8°S'],['end','22°N']])}}],
progression:{requires:['geography-e-latitude','geography-m-coordinates'],operations:3,demand:'Subtract or add latitudes across the equator, multiply or divide by 111, and divide a distance by a speed.'},
items(add){
 let i=0;const P=()=>PL[i++%PL.length];
 /* Degrees apart, same side and opposite sides (the Try-it's 34°N and 12°S is left out). */
 for(const [a,b] of [[52,38],[20,-15],[61,47],[-8,-30],[45,-5],[12,3],[-40,-18],[70,25],[33,-33],[-55,-2],[18,-27],[48,8],[-12,9],[66,40],[5,-41]]){const x=P(),y=P(),d=Math.abs(a-b);
  add('degrees',`The fictional towns of ${x} (${lat(a)}) and ${y} (${lat(b)}) lie on the same meridian. How many degrees of latitude apart are they?`,d,tab('Two fictional towns',[[x,lat(a)],[y,lat(b)]]),(a>0)===(b>0)?`Same side of the equator: ${Math.max(Math.abs(a),Math.abs(b))} - ${Math.min(Math.abs(a),Math.abs(b))} = ${d}.`:`Opposite sides: ${Math.abs(a)} + ${Math.abs(b)} = ${d}.`);}
 for(const [a,b] of [[30,-45],[-60,25],[15,-14],[-35,36],[50,-49],[-22,40],[8,-9],[-70,65]]){const x=P(),y=P(),w=Math.abs(a)>Math.abs(b)?x:y;
  add('degrees',`The fictional towns of ${x} (${lat(a)}) and ${y} (${lat(b)}) lie on the same meridian. Which town is farther from the equator: ${x} or ${y}?`,w,tab('Two fictional towns',[[x,lat(a)],[y,lat(b)]]),`${x} is ${Math.abs(a)}° from the equator and ${y} is ${Math.abs(b)}°, so ${w} is farther.`);}
 for(const a of [40,-25,63,-8,15,-52,0,77,-31,22,-66,9]){const x=P(),toN=90-a;
  add('degrees',`The fictional town of ${x} is at ${lat(a)}. How many degrees of latitude is it from the North Pole, at 90°N?`,toN,tab('A fictional town',[[x,lat(a)],['North Pole','90°N']]),a>=0?`90 - ${a} = ${toN}.`:`It is ${-a}° south of the equator, and the pole is 90° north of it: ${-a} + 90 = ${toN}.`);}
 /* Kilometres from degrees, and degrees from kilometres (the Try-it's 10°N to 25°N is left out). */
 for(const [a,b] of [[10,30],[-5,15],[40,52],[-20,-50],[3,-9],[60,68],[25,-25],[-14,-2],[35,57],[7,-33],[48,71],[-28,4]]){const d=Math.abs(a-b);
  add('distance',`Using 1° of latitude = 111 km, how many kilometres apart are two fictional places on the same meridian at ${lat(a)} and ${lat(b)}?`,d*111,tab('Two fictional places',[['first place',lat(a)],['second place',lat(b)]]),`They are ${d} degrees apart: ${d} × 111 = ${fmt(d*111)} km.`);}
 for(const d of [3,8,12,20,25,6,40,15,9,30]){
  add('distance',`Using 1° of latitude = 111 km, two fictional places on the same meridian are ${fmt(d*111)} km apart. How many degrees of latitude apart are they?`,d,tab('Two fictional places',[['distance',`${fmt(d*111)} km`],['degrees apart','?']]),`${fmt(d*111)} ÷ 111 = ${d}.`);}
 for(const a of [12,-30,45,-7,60,-18,3,-41,26,-55]){const x=P();
  add('distance',`Using 1° of latitude = 111 km, how many kilometres is the fictional town of ${x}, at ${lat(a)}, from the equator, measured along its meridian?`,Math.abs(a)*111,tab('A fictional town',[[x,lat(a)],['equator','0°']]),`${Math.abs(a)} × 111 = ${fmt(Math.abs(a)*111)} km.`);}
 /* Travel: time, end latitude after a distance (the Try-it's 8°S to 22°N flight is left out). */
 for(const [a,b,v] of [[50,40,37],[10,-20,555],[-5,25,111],[60,30,74],[-30,-10,37],[0,45,333],[35,-5,222],[-12,24,444],[42,18,148],[20,-16,333]]){const d=Math.abs(a-b)*111;if(d%v)continue;const x=P();
  add('travel',`A fictional ${v<200?'ship':'plane'} travels due ${b>a?'north':'south'} along a meridian at ${v} km an hour, from ${lat(a)} to ${lat(b)}. Using 1° of latitude = 111 km, how many hours does the trip take?`,d/v,tab(`A fictional ${v<200?'voyage':'flight'}`,[['start',lat(a)],['end',lat(b)]]),`The trip is ${Math.abs(a-b)} degrees, ${fmt(d)} km, and ${fmt(d)} ÷ ${v} = ${d/v} hours.`);}
 for(const [a,dir,deg] of [[5,-1,15],[40,-1,12],[-20,1,30],[-3,1,10],[60,-1,25],[12,-1,20],[-45,1,50],[28,-1,8]]){const e=a+dir*deg,km=deg*111;
  add('travel',`Using 1° of latitude = 111 km, a fictional traveller starts at ${lat(a)} and goes ${fmt(km)} km due ${dir>0?'north':'south'}. At what latitude does the trip end? Give the number of degrees, then N or S.`,e===0?'0°':lat(e),tab('A fictional trip',[['start',lat(a)],['distance',`${fmt(km)} km`],['end','?']]),`${fmt(km)} km is ${deg} degrees; ${a>0?a:-a}°${a>0?'N':'S'} ${dir>0?'north':'south'} by ${deg} ends at ${lat(e)}.`,[`${Math.abs(e)} ${e>0?'n':'s'}`,`${Math.abs(e)}${e>0?'n':'s'}`,`${Math.abs(e)} degrees ${e>0?'north':'south'}`,`${Math.abs(e)}° ${e>0?'n':'s'}`]);}
 for(const [a,b,h] of [[10,40,6],[-20,10,5],[55,35,4],[-36,-6,4],[0,30,6],[48,12,9],[-15,15,4],[25,-11,4],[70,50,5],[-44,-4,8]]){const d=Math.abs(a-b)*111;
  add('travel',`A fictional plane flies due ${b>a?'north':'south'} along a meridian from ${lat(a)} to ${lat(b)} in ${h} hours. Using 1° of latitude = 111 km, what is its speed, in km an hour?`,d/h,tab('A fictional flight',[['start',lat(a)],['end',lat(b)],['time',`${h} hours`]]),`The trip is ${Math.abs(a-b)} degrees, ${fmt(d)} km; ${fmt(d)} ÷ ${h} = ${fmt(d/h)} km an hour.`);}
 for(const [d,h] of [[1110,10],[2220,4],[555,5],[3330,6],[777,7],[4440,8]]){
  add('travel',`A fictional plane flies ${fmt(d)} km due north along a meridian in ${h} hours. Using 1° of latitude = 111 km, how many degrees of latitude does it cover each hour?`,d/111/h,tab('A fictional flight',[['distance',`${fmt(d)} km`],['time',`${h} hours`]]),`${fmt(d)} km is ${d/111} degrees, and ${d/111} ÷ ${h} = ${d/111/h} degrees an hour.`);}
}
};
