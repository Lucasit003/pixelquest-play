// Original geography lesson. Fictional towns on a simplified globe grid, using the idealised model that each 15° of longitude
// is one hour of clock time (360° / 24 h). Real time-zone borders follow countries and are not this regular; the lesson says so.
const TOWNS=['Ashby','Brill','Corran','Dunmore','Elden','Fairholt','Glenn','Haverly'];
const deg=d=>d===0?'0°':`${Math.abs(d)}°${d>0?'E':'W'}`;
const clock=h=>{const x=((h%24)+24)%24;return x===0?'midnight':x===12?'noon':x<12?`${x} am`:`${x-12} pm`;};
export default {
id:"geography-e-time-zones",
subject:"geography",
level:3,
grade:5,
title:"Longitude and time zones",
goal:"Read longitude east and west of the prime meridian, turn degrees into hours, and work out the clock time somewhere else.",
standard:"Geographic skills: use longitude to reason about location and time",
points:20,
skills:{"read":"East or west, earlier or later","hours":"Degrees to hours","clock":"Find the clock time"},
steps:[{"skill":"read","say":"Lines of longitude run from pole to pole. The prime meridian is 0°. Places to its east are written with E, places to its west with W, up to 180°.","pic":{"t":"lines","axis":"lon","places":[{"name":"Ashby","deg":-45},{"name":"Brill","deg":30}]}},
{"skill":"read","say":"Earth turns toward the east, so the sun rises first in the east. Places farther east reach noon earlier, so their clocks are ahead: later in the day than places to their west.","pic":{"t":"lines","axis":"lon","places":[{"name":"Ashby","deg":-45},{"name":"Brill","deg":30}]},"check":{"prompt":"Brill is at 30°E and Ashby is at 45°W. In this model, is the clock time in Brill earlier or later than in Ashby?","answer":"later","options":["later","earlier"],"hint":"Brill is farther east, so its clocks are ahead.","pic":{"t":"lines","axis":"lon","places":[{"name":"Ashby","deg":-45},{"name":"Brill","deg":30}]}}},
{"skill":"hours","say":"Earth turns 360° in 24 hours, so it turns 15° each hour. In this model, every 15° of longitude is one hour of clock time.","pic":{"t":"lines","axis":"lon","places":[{"name":"Corran","deg":0},{"name":"Dunmore","deg":45}]}},
{"skill":"hours","say":"To compare two places, find how many degrees apart they are, then divide by 15. Across the prime meridian, add: 30°W and 30°E are 60° apart, which is 4 hours.","pic":{"t":"lines","axis":"lon","places":[{"name":"Elden","deg":-30},{"name":"Fairholt","deg":30}]},"check":{"prompt":"In this model, how many hours apart are the clocks at 15°W and 60°E?","answer":5,"options":[5,3,4],"hint":"15 + 60 = 75 degrees, and 75 ÷ 15 = 5.","pic":{"t":"lines","axis":"lon","places":[{"name":"A","deg":-15},{"name":"B","deg":60}]}}},
{"skill":"clock","say":"To find a clock time, count the hours and move forward if you go east, back if you go west. If it is noon at 0°, it is 3 pm at 45°E and 9 am at 45°W.","pic":{"t":"lines","axis":"lon","places":[{"name":"Glenn","deg":-45},{"name":"Corran","deg":0},{"name":"Dunmore","deg":45}]}},
{"skill":"clock","say":"Real time zones bend around countries and islands, and some places use half hours or summer time. This model shows the idea behind them, not the times in any real place.","pic":{"t":"lines","axis":"lon","places":[{"name":"Glenn","deg":-45},{"name":"Dunmore","deg":45}]},"check":{"prompt":"In this model it is 10 am at 0°. What time is it at 30°W? Answer like 3 pm.","answer":"8 am","options":["8 am","noon","9 am"],"hint":"30° west is 2 hours earlier.","pic":{"t":"lines","axis":"lon","places":[{"name":"Here","deg":0},{"name":"There","deg":-30}]}}}],
progression:{"requires":["geography-e-latitude","geography-e-map-scale"],"operations":3,"demand":"Measure degrees across the prime meridian, convert them to hours, and move a clock forward or back by direction."},
items(add){
 const D=[-90,-75,-60,-45,-30,-15,0,15,30,45,60,75,90];let n=0;
 D.forEach((a,i)=>D.forEach((b,j)=>{if(j<=i)return;n++;const [x,y]=n%2?[a,b]:[b,a],A=TOWNS[n%8],B=TOWNS[(n+3)%8],pic={t:'lines',axis:'lon',places:[{name:A,deg:x},{name:B,deg:y}]},given=`In the 15°-per-hour model, ${A} is at ${deg(x)} and ${B} is at ${deg(y)}. `,h=Math.abs(x-y)/15;
  add('read',given+`Is the clock time in ${B} earlier or later than in ${A}?`,y>x?'later':'earlier',pic,`${B} is farther ${y>x?'east, so its clock is ahead':'west, so its clock is behind'}.`);
  add('hours',given+`How many hours apart are their clocks?`,h,pic,`${Math.abs(x-y)}° ÷ 15 = ${h}.`);
  {const t=[6,8,9,10,11,13,14][n%7],u=t+(y-x)/15;if(u<1||u>23||u===12)return;
   add('clock',given+`It is ${clock(t)} in ${A}. What time is it in ${B}? Answer like 8 am.`,clock(u),pic,`${h} hour${h===1?'':'s'} ${y>x?'later (east)':'earlier (west)'}: ${clock(u)}.`,(c=>[c.replace(' ',''),c.replace(' am',' a.m.').replace(' pm',' p.m.'),c.replace(' ',':00 '),c.replace(' ',':00')])(clock(u)));}
 }));
}
};
