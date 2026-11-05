/* improve25-r25f-nov5 #4: the next power's glow at the hero's feet (game/hero-glow.js), in Oakhaven and its rooms (Home included) only, never in a
   level, the arena, the Rift or the Hall, so the floor marks of a fight stay the fight's (lead review: a ring read as a selection ring or a
   boss telegraph). Drawn by code, under the hero sprite and never on it: a soft warm pool of light with no outline, tinted by the ability's
   subject colour over a warm base, larger and brighter with each step (3, 6, 9 topics); from the second step a few slow motes rise from it.
   A slow breathing pulse and drifting motes; all still when motion is reduced. Cosmetic only. */
const rgb=hex=>{const n=parseInt(String(hex).slice(1),16)||0;return [n>>16&255,n>>8&255,n&255];};
export const GLOW_WARM='#ffa42a',GLOW_TINT=.3;
/* the pool's colour: the warm base with the subject colour mixed in (GLOW_TINT of it) */
export const glowTint=hex=>{const w=rgb(GLOW_WARM),s=rgb(hex);return w.map((v,i)=>Math.round(v*(1-GLOW_TINT)+s[i]*GLOW_TINT));};
export function drawHeroGlow(c,p,g,now=globalThis.performance?.now?.()??Date.now(),motion=true){if(!c||!p||!g||!(g.step>0))return;
 const st=Math.min(4,g.step),[r,gr,b]=glowTint(g.color),x=Math.round(p.x),y=Math.round(p.y),rx=34+5*st,s=now/1000,pulse=motion?.88+.12*Math.sin(s*1.6):1,a=Math.min(.75,.56+.05*st)*pulse;
 c.save();c.globalCompositeOperation='lighter';c.translate(x,y);c.scale(1,.45);
 const grd=c.createRadialGradient(0,0,0,0,0,rx);grd.addColorStop(0,`rgba(${r},${gr},${b},${a})`);grd.addColorStop(.5,`rgba(${r},${gr},${b},${a*.6})`);grd.addColorStop(1,`rgba(${r},${gr},${b},0)`);
 c.fillStyle=grd;c.beginPath();c.arc(0,0,rx,0,Math.PI*2);c.fill();c.restore();
 if(st<2)return;
 /* slow motes: a few soft specks rising from the pool and fading; held still in place when motion is reduced */
 c.save();c.globalCompositeOperation='lighter';const n=1+2*st;
 for(let i=0;i<n;i++){const ph=i/n,u=motion?(s*.22+ph)%1:.35+.4*((i*37)%10)/10,ang=ph*Math.PI*2+i*1.3,mx=Math.round(x+Math.cos(ang)*rx*.55*(1-u*.3)),my=Math.round(y-3-u*26+Math.sin(ang)*3),al=(motion?Math.sin(u*Math.PI):.7)*.8;
  const mg=c.createRadialGradient(mx,my,0,mx,my,3);mg.addColorStop(0,`rgba(255,240,200,${al})`);mg.addColorStop(1,`rgba(${r},${gr},${b},0)`);c.fillStyle=mg;c.fillRect(mx-3,my-3,6,6);}
 c.restore();}
