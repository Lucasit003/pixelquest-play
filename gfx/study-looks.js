/* improve25-r25t-nov5 #1: the worn study looks (game/study-looks.js), drawn by code, under the hero sprite and never on it (heroes stay
   unmodified; no art file). Cosmetic only: these read the hero's position, facing and weapon points and nothing reads them back.
   - Step sparkles (drawStepTrail): a footfall every STEP px walked, left and right feet in turn, in the look's colour on a 1 px darker rim
     (R9C: light colours washed out on Oakhaven's pale cobbles), rising a touch and fading in LIFE s. At most MAX on screen (FIGHT_MAX in a
     level), so it stays cheap on phones and never builds a cloud.
   - Weapon glow (drawWeaponGlow): a soft halo in the look's colour at the weapon hand (handAt), under the sprite, so the hero's outline is
     never covered; on a swing a short crescent of at most TIP_MAX fading glints sweeps in front of the hero.
   In a fight (opts.fight) both are fainter and smaller, so enemies, telegraphs and pickups always read through them. With motion reduced
   nothing twinkles, rises or pulses: the steps fade where they fell and the glow holds still. */
export const STEP=14,LIFE=.9,MAX=10,FIGHT_MAX=6,TIP_MAX=6,SWING_AGE=.45;
const SWINGS=new Set(['light0','light1','light2','heavy','cast']);
export const swinging=p=>!!p&&(SWINGS.has(p.anim)||String(p.anim||'').startsWith('ab-'))&&(+p.animAge||0)<SWING_AGE;
const rgb=hex=>{const n=parseInt(String(hex).slice(1),16)||0;return [n>>16&255,n>>8&255,n&255];};
const shade=(hex,k=.42)=>{const [r,g,b]=rgb(hex);return `rgb(${Math.round(r*k)},${Math.round(g*k)},${Math.round(b*k)})`;};
/* the rainbow glow's colour now (still when motion is reduced) */
const hueNow=(look,s,motion)=>look.shape==='rainbow'?`hsl(${Math.round(motion?(s*60)%360:30)},95%,68%)`:look.color;
const st={pts:[],last:null,key:'',n:0,tips:[]};
export const stepPoints=()=>st.pts.length;
export const tipPoints=()=>st.tips.length;
export function resetStudyLooks(){st.pts.length=0;st.tips.length=0;st.last=null;}
/* one footfall's shape, centred on x,y at size k (1 = full) */
function mark(c,shape,x,y,k,col,light){const r=Math.max(1,Math.round(2.6*k));
 if(shape==='leaf'){c.fillStyle=col;c.fillRect(x-r,y,r*2,Math.max(1,r-1));c.fillRect(x-Math.max(1,r-1),y-1,Math.max(1,r*2-2),1);c.fillStyle=light;c.fillRect(x,y-1,1,1);return;}
 if(shape==='flake'){c.fillStyle=col;c.fillRect(x-r,y,r*2+1,1);c.fillRect(x,y-r,1,r*2+1);c.fillStyle=light;c.fillRect(x-1,y-1,1,1);c.fillRect(x+1,y+1,1,1);c.fillRect(x+1,y-1,1,1);c.fillRect(x-1,y+1,1,1);return;}
 if(shape==='star'){c.fillStyle=col;c.fillRect(x-r,y,r*2+1,1);c.fillRect(x,y-r,1,r*2+1);c.fillRect(x-1,y-1,3,3);c.fillStyle=light;c.fillRect(x,y,1,1);return;}
 /* spark */c.fillStyle=col;c.fillRect(x-r,y,r*2+1,1);c.fillRect(x,y-r,1,r*2+1);c.fillStyle=light;c.fillRect(x,y,1,1);}
/* p: the hero (x, y at the feet; moving), look: game/study-looks.js LOOK entry or null */
export function drawStepTrail(c,p,look,now=globalThis.performance?.now?.()??Date.now(),motion=true,{fight=false}={}){if(!c||!p)return;
 if(!look){if(st.pts.length||st.last){st.pts.length=0;st.last=null;}return;}const s=now/1000;if(st.key!==look.id){st.pts.length=0;st.key=look.id;}
 const d=st.last?Math.hypot(p.x-st.last.x,p.y-st.last.y):0;if(!st.last||d>48){st.pts.length=0;st.last={x:p.x,y:p.y};}
 else if(d>=STEP){st.n++;const side=st.n%2?1:-1,dx=(p.x-st.last.x)/d,dy=(p.y-st.last.y)/d;st.pts.push({x:p.x-dy*3*side,y:p.y+dx*1.5*side+2,t:s,n:st.n});st.last={x:p.x,y:p.y};}
 const life=motion?LIFE:LIFE*.7,cap=fight?FIGHT_MAX:MAX;while(st.pts.length&&(s-st.pts[0].t>life||st.pts.length>cap))st.pts.shift();if(!st.pts.length)return;
 const rim=shade(look.color),base=fight?.7:1;c.save();
 for(const q of st.pts){const u=Math.max(0,Math.min(1,(s-q.t)/life)),a=(1-u)*base,k=(fight?.8:1)*(motion?1-u*.35:1),x=Math.round(q.x),y=Math.round(q.y-(motion?u*5:0));
  /* the rim first (1 px down), then the mark; a twinkle on every other footfall while motion is on */
  c.globalAlpha=a*.7;mark(c,look.shape,x,y+1,k,rim,rim);c.globalAlpha=a;const tw=motion&&q.n%2===0&&Math.sin(s*14+q.n)>.4;mark(c,look.shape,x,y,k,tw?look.light:look.color,look.light);
  /* two specks thrown up beside it (fixed offsets from the footfall's own number, never random), rising a little faster */
  const sy=Math.round(motion?u*4:0);for(const [ox,oy,cl] of [[-5+(q.n*3)%3,-3,look.color],[4-(q.n*5)%3,-5,look.light]]){c.globalAlpha=a*.9;c.fillStyle=rim;c.fillRect(x+ox,y+oy-sy+1,2,2);c.fillStyle=cl;c.fillRect(x+ox,y+oy-sy,2,2);}}
 c.restore();}
/* the hero's scale: the anchors' default chest point sits 16 art px in front of the feet (gfx/actors/hero-sprites.js anchorsFromMeta), so
   their distance gives the drawn scale in town (.85) and in a level alike; .85 when there are none */
export const lookScale=(p,a)=>{const k=a?.tip&&p?Math.abs(a.tip.x-p.x)/16:0;return k>.2&&k<6?k:.85;};
/* where the glow sits: the hero's weapon hand, in front of the body at hand height (the PixelLab atlases carry no per-frame weapon points, so
   the hand is the one place every class holds its weapon: sword, staff, bow, daggers, axe, focus) */
export const handAt=(p,k)=>({x:p.x+(p.facing<0?-1:1)*8*k,y:p.y-(p.z||0)-15*k});
/* anchors: equipmentAnchors(p, time) (read for the scale); swing: the hero is mid-attack (swinging(p)) */
export function drawWeaponGlow(c,p,look,anchors,swing=false,now=globalThis.performance?.now?.()??Date.now(),motion=true,{fight=false}={}){if(!c||!p)return;
 if(!look){st.tips.length=0;return;}const s=now/1000,col=hueNow(look,s,motion),[r,g,b]=col.startsWith('#')?rgb(col):hsl(col),k=lookScale(p,anchors),h=handAt(p,k),face=p.facing<0?-1:1;
 const cx=Math.round(h.x),cy=Math.round(h.y),pulse=motion?.88+.12*Math.sin(s*2.2):1,rad=Math.round(((fight?10:12)+(swing?3:0))*k*1.4),f=fight?.6:1;
 c.save();
 /* a soft tint of the look's colour on what is behind the hand (reads on pale cobbles too), then an additive core */
 let grd=c.createRadialGradient(cx,cy,0,cx,cy,rad);grd.addColorStop(0,`rgba(${r},${g},${b},${.5*f*pulse})`);grd.addColorStop(.6,`rgba(${r},${g},${b},${.2*f*pulse})`);grd.addColorStop(1,`rgba(${r},${g},${b},0)`);c.fillStyle=grd;c.beginPath();c.arc(cx,cy,rad,0,Math.PI*2);c.fill();
 c.globalCompositeOperation='lighter';const r2=Math.round(rad*.55);grd=c.createRadialGradient(cx,cy,0,cx,cy,r2);grd.addColorStop(0,`rgba(${r},${g},${b},${.45*f*pulse*(swing?1.25:1)})`);grd.addColorStop(1,`rgba(${r},${g},${b},0)`);c.fillStyle=grd;c.beginPath();c.arc(cx,cy,r2,0,Math.PI*2);c.fill();
 /* three motes circling the hand (held in place when motion is reduced), in the look's light colour on a dark rim */
 c.globalCompositeOperation='source-over';const lc=look.shape==='rainbow'?col:look.light,dk=shade(look.shape==='rainbow'?'#7a5cff':look.color,.35);for(let i=0;i<3;i++){const an=(motion?s*1.4:0)+i*2.094,mx=Math.round(cx+Math.cos(an)*rad*.62),my=Math.round(cy+Math.sin(an)*rad*.4);c.globalAlpha=.8*f;c.fillStyle=dk;c.fillRect(mx-1,my,3,2);c.fillStyle=lc;c.fillRect(mx-1,my-1,2,2);}c.globalAlpha=1;
 /* the swing: a short crescent of glints in front of the hero, swept by the swing's own progress; at most TIP_MAX, none when motion is reduced */
 if(swing&&motion){const u=Math.min(1,(+p.animAge||0)/SWING_AGE),R=20*k,ox=p.x+face*3*k,oy=p.y-(p.z||0)-20*k,ang=-1.1+2.2*u,q={x:ox+face*Math.cos(ang)*R,y:oy+Math.sin(ang)*R,t:s};const lt=st.tips.at(-1);if(!lt||Math.hypot(q.x-lt.x,q.y-lt.y)>=2)st.tips.push(q);}else st.tips.length=0;
 while(st.tips.length&&(s-st.tips[0].t>.2||st.tips.length>TIP_MAX))st.tips.shift();
 for(const q of st.tips){const u=Math.max(0,Math.min(1,(s-q.t)/.2)),a=(1-u)*(fight?.5:.7),x=Math.round(q.x),y=Math.round(q.y),kk=Math.max(2,Math.round(3*k));
  const mg=c.createRadialGradient(x,y,0,x,y,kk+1);mg.addColorStop(0,`rgba(255,255,255,${a})`);mg.addColorStop(.5,`rgba(${r},${g},${b},${a*.75})`);mg.addColorStop(1,`rgba(${r},${g},${b},0)`);c.fillStyle=mg;c.fillRect(x-kk-1,y-kk-1,2*kk+2,2*kk+2);}
 c.restore();}
/* "hsl(h,s%,l%)" -> [r,g,b] (the rainbow glow) */
function hsl(str){const m=/hsl\((\d+),(\d+)%,(\d+)%\)/.exec(str);if(!m)return [255,255,255];const h=+m[1]/360,sa=+m[2]/100,l=+m[3]/100,q=l<.5?l*(1+sa):l+sa-l*sa,pp=2*l-q,f=t=>{t=(t+1)%1;return t<1/6?pp+(q-pp)*6*t:t<.5?q:t<2/3?pp+(q-pp)*(2/3-t)*6:pp;};return [f(h+1/3),f(h),f(h-1/3)].map(v=>Math.round(v*255));}
