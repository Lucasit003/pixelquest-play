/* improve20-r7a-nov1 #8: a worn trail colour (game/prizes.js, a daily keepsake) drawn behind the hero's feet while he runs: fading dots in
   the trail's colour with a spark now and then. An effect drawn by code (no sprite, no icon). Cosmetic only: it reads the hero's position
   and nothing else, and nothing in combat, the balance sim or learning reads it. Positions are kept here (one hero on screen at a time; a jump of more than 48 px, a door or a level start, starts afresh). */
const LIFE=.6,MAX=32;
/* a trail colour's shadow: the same hue at SHADE of its brightness (#rrggbb in, #rrggbb out) */
export const SHADE=.38;
const shades=new Map();
export const trailShade=hex=>{if(!shades.has(hex)){const n=parseInt(String(hex).slice(1),16)||0,f=v=>Math.round(v*SHADE).toString(16).padStart(2,'0');shades.set(hex,'#'+f(n>>16&255)+f(n>>8&255)+f(n&255));}return shades.get(hex);};
const tr={pts:[],last:null,key:''};
export function drawTrail(c,p,trail,now=globalThis.performance?.now?.()??Date.now(),motion=true){if(!c||!p)return;
 if(!trail){tr.pts.length=0;tr.last=null;return;}const t=now/1000;if(tr.key!==trail.key){tr.pts.length=0;tr.key=trail.key;}
 const d=tr.last?Math.hypot(p.x-tr.last.x,p.y-tr.last.y):0;if(!tr.last||d>48){tr.pts.length=0;tr.last={x:p.x,y:p.y};}else if(d>=3){tr.pts.push({x:tr.last.x,y:tr.last.y,t,n:tr.n=(tr.n|0)+1});tr.last={x:p.x,y:p.y};}
 const life=motion?LIFE:LIFE*.6;while(tr.pts.length&&(t-tr.pts[0].t>life||tr.pts.length>MAX))tr.pts.shift();if(!tr.pts.length)return;
 c.save();c.lineCap='round';c.lineJoin='round';
 /* improve20-r9c-nov1 #3 (the light trails, Frost and Starlight, washed out on Oakhaven's pale cobbles and the plaza): a soft shadow ribbon in the
    trail's own colour, darkened (trailShade), lies 1 px under the ribbon and 1.5 px wider each side, so the trail has an edge on light stone and
    still reads as the same colour on grass and dirt; the ribbon itself is a touch stronger (.55, was .45). Calm: no glow, no added flicker. */
 const sh=trailShade(trail.color);for(let i=1;i<tr.pts.length;i++){const q=tr.pts[i],o=tr.pts[i-1],a=Math.max(0,1-(t-q.t)/life);c.globalAlpha=.42*a;c.strokeStyle=sh;c.lineWidth=5+5*a;c.beginPath();c.moveTo(Math.round(o.x),Math.round(o.y-1));c.lineTo(Math.round(q.x),Math.round(q.y-1));c.stroke();}
 /* the ribbon through the points, then the dots (each on a dark rim) and sparks */
 for(let i=1;i<tr.pts.length;i++){const q=tr.pts[i],o=tr.pts[i-1],a=Math.max(0,1-(t-q.t)/life);c.globalAlpha=.55*a;c.strokeStyle=trail.color;c.lineWidth=2+5*a;c.beginPath();c.moveTo(Math.round(o.x),Math.round(o.y-2));c.lineTo(Math.round(q.x),Math.round(q.y-2));c.stroke();}
 for(const q of tr.pts){const a=Math.max(0,1-(t-q.t)/life),r=1.5+3*a,x=Math.round(q.x),y=Math.round(q.y-2);c.globalAlpha=.6*a;c.fillStyle=sh;c.beginPath();c.arc(x,y+.5,r+1,0,Math.PI*2);c.fill();c.globalAlpha=.8*a;c.fillStyle=trail.color;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
  if(q.n%2===0){c.globalAlpha=.95*a;c.fillStyle=trail.spark||trail.color;const k=Math.max(1,Math.round(3*a));c.fillRect(x+((q.n*7)%9)-4,Math.round(y-4-6*(1-a)),k,k);}}
 c.restore();}
/* the points held now (tools/sim/improve20-r7a-nov1-scenes.mjs reads it mid-run) */
export const trailPoints=()=>tr.pts.length;
