// Middle School topic (Grade 6, C3 D2.Geo.2.6-8): latitude and longitude together. Every answer is computed from the
// coordinates in its own question with the rules the lesson states. N latitudes and E longitudes count as positive and
// S and W as negative. A place is in one north-south and one east-west hemisphere. Farther north means a larger signed
// latitude, and farther east a larger signed longitude. Degrees apart along one kind of line is the difference of the
// signed values. A move due north or south changes only the latitude, and a move due east or west only the longitude.
// No place sits on the equator or the prime meridian, no move ends on them, and no pair of places or move crosses the
// 180° line. Every town, place, ship and plane is fictional; nothing here is a fact asserted by a model. Extends
// geography-e-latitude (latitude only) and geography-e-time-zones (longitude only).
const LAT=d=>`${Math.abs(d)}°${d>0?'N':'S'}`,LON=d=>`${Math.abs(d)}°${d>0?'E':'W'}`,AT=(a,b)=>`${LAT(a)}, ${LON(b)}`;
const WORD={N:'north',S:'south',E:'east',W:'west'};
/* Ways to type a coordinate such as 25°S: "25 S", "25S", "25 degrees south" and so on (case never matters). */
const coordAcc=s=>{const [,n,L]=s.match(/^(\d+)°([NSEW])$/),w=WORD[L];return [`${n}° ${L}`,`${n}${L}`,`${n} ${L}`,`${n} degrees ${L}`,`${n}° ${w}`,`${n} ${w}`,`${n} degrees ${w}`,`${n}°${w}`];};
const HEMI=(a,b)=>`${a>0?'northern':'southern'} and ${b>0?'eastern':'western'}`;
const hemiAcc=(a,b)=>{const ns=a>0?'north':'south',ew=b>0?'east':'west';return [`${ns}ern and ${ew}ern hemispheres`,`${ns} and ${ew}`,`${ns}ern, ${ew}ern`,`${ew}ern and ${ns}ern`,`${ns}${ew}`];};
const two=(A,B)=>({t:'setups',title:'Two fictional places',head:'Place',rows:[['Place A',LAT(A[0]),LON(A[1])],['Place B',LAT(B[0]),LON(B[1])]],cols:['Latitude','Longitude']});
const one=(what,a,b)=>({t:'setups',title:`A fictional ${what}`,head:'Place',rows:[[what,LAT(a),LON(b)]],cols:['Latitude','Longitude']});
const LATV=[-70,-60,-50,-40,-30,-20,-10,10,20,30,40,50,60,70];
const LONV=[-150,-120,-100,-80,-60,-40,-20,20,40,60,80,100,120,150];
const apartWhy=(x,y,axis)=>{const line=axis==='latitude'?'equator':'prime meridian',f=axis==='latitude'?LAT:LON;
 return (x>0)===(y>0)?`Both are on the same side of the ${line}, so subtract: ${Math.max(Math.abs(x),Math.abs(y))} − ${Math.min(Math.abs(x),Math.abs(y))} = ${Math.abs(x-y)} degrees of ${axis}.`
  :`${f(x)} and ${f(y)} are on opposite sides of the ${line}, so add: ${Math.abs(x)} + ${Math.abs(y)} = ${Math.abs(x-y)} degrees of ${axis}.`;};
export default {
id:'geography-m-coordinates',subject:'geography',level:4,grade:6,standard:'C3 D2.Geo.2.6-8',
title:'Latitude and longitude together',
goal:'Name the two hemispheres a place is in, tell which of two places is farther north, south, east or west, find how many degrees apart they are, and work out a new coordinate after a move.',
points:20,
skills:{hemi:'Two hemispheres',compare:'Compare two places',move:'Move by degrees'},
steps:[
 {skill:'hemi',say:'Every place on a globe has two coordinates. Latitude says how many degrees north (N) or south (S) of the equator it is. Longitude says how many degrees east (E) or west (W) of the prime meridian it is. Latitude is written first.',eq:'30°N, 40°E',pic:{t:'setups',title:'A fictional harbour',head:'Place',rows:[['Harbour','30°N','40°E']],cols:['Latitude','Longitude']}},
 {skill:'hemi',say:'The equator splits Earth into the northern and southern hemispheres, and the prime meridian splits it into the eastern and western hemispheres. A place on neither line is in two hemispheres at once: one from its N or S and one from its E or W.',pic:{t:'lines',axis:'lat',places:[{name:'Harbour',deg:30},{name:'Fort',deg:-45}]},
  check:{prompt:'Try it: a fictional island is at 40°S, 75°E. Which two hemispheres is it in?',answer:'southern and eastern',options:['southern and eastern','northern and eastern','southern and western','northern and western'],hint:'S puts it south of the equator, and E puts it east of the prime meridian.',pic:{t:'setups',title:'A fictional island',head:'Place',rows:[['Island','40°S','75°E']],cols:['Latitude','Longitude']}}},
 {skill:'compare',say:'To tell which place is farther north, compare only the latitudes. Every N latitude is north of every S latitude. Between two N latitudes the bigger number is farther north, and between two S latitudes the smaller number is farther north.',eq:'10°N is north of 60°S',pic:{t:'lines',axis:'lat',places:[{name:'Place A',deg:10},{name:'Place B',deg:-60}]}},
 {skill:'compare',say:'East and west work the same way with the longitudes. Every E longitude is east of every W longitude, and between two W longitudes the smaller number is farther east. The latitudes do not matter for east and west.',eq:'20°E is east of 50°W',pic:{t:'lines',axis:'lon',places:[{name:'Place A',deg:-50},{name:'Place B',deg:20}]},
  check:{prompt:'Try it: fictional Place A is at 10°N, 50°W and fictional Place B is at 30°S, 25°E. Which is farther east: A or B?',answer:'B',options:['B','A'],hint:'Look only at the longitudes. 25°E is east of the prime meridian and 50°W is west of it.',pic:{t:'setups',title:'Two fictional places',head:'Place',rows:[['Place A','10°N','50°W'],['Place B','30°S','25°E']],cols:['Latitude','Longitude']}}},
 {skill:'compare',say:'To find how far apart two places are along one kind of line, use only that coordinate. With the same letter, subtract. With different letters, add, because the equator or the prime meridian lies between them. 20°N and 15°S are 20 + 15 = 35 degrees of latitude apart.',eq:'30°W and 45°E: 30 + 45 = 75 degrees of longitude',pic:{t:'setups',title:'Two fictional places',head:'Place',rows:[['Place A','20°N','30°W'],['Place B','15°S','45°E']],cols:['Latitude','Longitude']}},
 {skill:'move',say:'A move due north or south changes only the latitude, and a move due east or west changes only the longitude. Count across a line when you pass it. From 20°N, a ship sailing 50° south reaches the equator after 20° and goes 50 − 20 = 30° more, to 30°S.',eq:'20°N, then 50° south: 30°S',pic:{t:'lines',axis:'lat',places:[{name:'Ship',deg:20}]}},
 {skill:'move',say:'East and west moves work the same way. From 35°W, a plane flying 60° east crosses the prime meridian after 35° and goes 60 − 35 = 25° more, to 25°E. The moves in this topic never reach the 180° line on the far side of the globe.',eq:'35°W, then 60° east: 25°E',pic:{t:'lines',axis:'lon',places:[{name:'Plane',deg:-35}]},
  check:{prompt:'Try it: a fictional plane at 25°N, 10°W flies due east through 40° of longitude. What is its longitude now?',answer:'30°E',options:['30°E','50°E','30°W','10°W'],hint:'It reaches the prime meridian after 10°, then has 30° more to fly east.',pic:{t:'lines',axis:'lon',places:[{name:'Plane',deg:-10}]}}}],
progression:{requires:['geography-e-latitude','geography-e-time-zones'],operations:3,demand:'Read two coordinates at once, pick the one a question is about, compare and measure across the equator and the prime meridian, and move one coordinate while the other stays fixed.'},
items(add){
 /* Two hemispheres: nine towns in each quarter of the globe, half written longitude first so the order is a trap. */
 const LATS=[5,15,25,35,45,55,65,75],LONS=[10,25,40,60,85,110,135,160,175],WHAT=['town','island','lighthouse','research station','harbour','village'];
 for(let k=0;k<9;k++)for(let q=0;q<4;q++){const a=(q<2?1:-1)*LATS[(k+q*3)%8],b=(q%2?-1:1)*LONS[(k*2+q)%9],what=WHAT[(k+q)%WHAT.length];
  const where=k%2?`at longitude ${LON(b)} and latitude ${LAT(a)}`:`at ${AT(a,b)}`;
  add('hemi',`A fictional ${what} is ${where}. Which two hemispheres is it in? Answer northern or southern, then eastern or western.`,HEMI(a,b),one(what,a,b),`${LAT(a)} is ${a>0?'north':'south'} of the equator and ${LON(b)} is ${b>0?'east':'west'} of the prime meridian, so it is in the ${HEMI(a,b)} hemispheres.`,hemiAcc(a,b));}
 /* Which is farther north, south, east or west: six of each, answers alternating A and B. */
 const DIRS=['north','east','south','west'],seen=new Set();let n=0;
 for(let j=0;n<24&&j<200;j++){const dir=DIRS[n%4],ax=dir==='north'||dir==='south'?0:1;let A=[LATV[(j*5+2)%14],LONV[(j*3+5)%14]],B=[LATV[(j*9+7)%14],LONV[(j*11+1)%14]];
  if(A[ax]===B[ax]||Math.abs(A[1]-B[1])>=180)continue;
  const sign=dir==='north'||dir==='east'?1:-1,want=n%2?'B':'A';if((sign*(A[ax]-B[ax])>0?'A':'B')!==want)[A,B]=[B,A];
  const p=`Fictional Place A is at ${AT(...A)} and fictional Place B is at ${AT(...B)}. Which is farther ${dir}: A or B?`;if(seen.has(p))continue;seen.add(p);n++;
  const f=ax?LON:LAT,line=ax?'prime meridian':'equator',x=A[ax],y=B[ax],other=want==='A'?'B':'A';
  const why=(x>0)!==(y>0)?`${f(want==='A'?x:y)} is on the ${dir} side of the ${line} and ${f(want==='A'?y:x)} is not.`:`both are on the same side of the ${line}, and ${f(want==='A'?x:y)} is farther ${dir} than ${f(want==='A'?y:x)}.`;
  add('compare',p,want,two(A,B),`Compare only the ${ax?'longitudes':'latitudes'}: ${why} So ${want} is farther ${dir} than ${other}.`,[`place ${want.toLowerCase()}`]);}
 /* Degrees apart along one kind of line: twelve of latitude and twelve of longitude, half on one side and half across. */
 let m=0;
 for(let j=0;m<24&&j<200;j++){const axis=m%2?'longitude':'latitude',ax=m%2,A=[LATV[(j*3+1)%14],LONV[(j*5+3)%14]],B=[LATV[(j*7+10+Math.floor(j/14))%14],LONV[(j*9+12+Math.floor(j/7))%14]];
  if(A[ax]===B[ax]||Math.abs(A[1]-B[1])>=180||((A[ax]>0)!==(B[ax]>0))!==(Math.floor(m/2)%2===0))continue;
  const p=`Fictional Place A is at ${AT(...A)} and fictional Place B is at ${AT(...B)}. How many degrees of ${axis} apart are they?`;if(seen.has(p))continue;seen.add(p);m++;
  add('compare',p,Math.abs(A[ax]-B[ax]),two(A,B),apartWhy(A[ax],B[ax],axis));}
 /* Moves due north, south, east or west. Most cross the equator or the prime meridian; one in six asks for the
    coordinate that does not change. Starts stay on the drawn grid (latitude to 70°, longitude to 90°). */
 const VEH=[{n:'ship',v:'sails'},{n:'plane',v:'flies'}],SLAT=[-60,-45,-35,-20,-10,10,25,35,50,65],SLON=[-85,-70,-50,-30,-15,15,30,45,70,90],K=[20,30,40,50,60,70,80,90,100,110];let c=0;
 for(let j=0;c<30&&j<400;j++){const a=SLAT[(j*3)%10],b=SLON[(j*7+2)%10],ns=j%2===0,k=K[(j*3+Math.floor(j/7))%10],veh=VEH[(j>>1)%2],toward=(j>>2)%3!==2;
  let dir,a2=a,b2=b;
  if(ns){dir=toward?(a>0?'south':'north'):(a>0?'north':'south');a2=a+(dir==='north'?k:-k);if(a2===0||Math.abs(a2)>80)continue;}
  else{dir=toward?(b>0?'west':'east'):(b>0?'east':'west');b2=b+(dir==='east'?k:-k);if(b2===0||Math.abs(b2)>170)continue;}
  const trap=c%6===5,askLat=ns!==trap,ask=askLat?'latitude':'longitude',ans=askLat?LAT(a2):LON(b2);
  const p=`A fictional ${veh.n} at ${AT(a,b)} ${veh.v} due ${dir} through ${k}° of ${ns?'latitude':'longitude'}. What is its ${ask} now?`;if(seen.has(p))continue;seen.add(p);c++;
  const from=ns?a:b,to=ns?a2:b2,f=ns?LAT:LON,line=ns?'equator':'prime meridian';
  const why=trap?`Moving due ${dir} changes only the ${ns?'latitude':'longitude'}, so the ${ask} stays ${ans}.`
   :(from>0)!==(to>0)?`It reaches the ${line} after ${Math.abs(from)}°, then goes ${k} − ${Math.abs(from)} = ${Math.abs(to)}° more, to ${f(to)}.`
   :Math.abs(to)>Math.abs(from)?`It moves away from the ${line}: ${Math.abs(from)} + ${k} = ${Math.abs(to)}, so ${f(to)}.`:`It stays on the same side of the ${line}: ${Math.abs(from)} − ${k} = ${Math.abs(to)}, so ${f(to)}.`;
  add('move',p,ans,{t:'lines',axis:ns?'lat':'lon',places:[{name:veh.n==='ship'?'Ship':'Plane',deg:from}]},why,coordAcc(ans));}
}
};
