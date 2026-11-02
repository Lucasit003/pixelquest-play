/* ownernotes-c-nov1 (owner: "make the mages basic attack look better"): the Mage's basic bolt, drawn in code (effects only; the
   cast pose is the Mage's own PixelLab 'shoot' frames). Looks and feel only: combat.js keeps the damage, timing, speed and range.
   A shot with s.mbolt draws as a glowing orb with a white core, a tapering trail and sparkles shed behind it; 'mbolt-charge' is the
   glow gathering at the staff tip during the wind-up and its flash at release; 'mbolt-hit' is the impact (flash, ring, sparks).
   Colours follow the staff's element (game/gear.js WEAPON_SHOT): the base staff is arcane violet, Briarwood nature green, Molten
   Core fire, Astral Spire holy gold. */
export const MBOLT={
 arcane:{core:'#ffffff',mid:'#d7c9ff',glow:'#9b7bff',deep:'#5a3fd6'},
 nature:{core:'#f6ffe8',mid:'#b8f28c',glow:'#5fd35a',deep:'#2b8a3e'},
 fire:{core:'#fffbe0',mid:'#ffd36a',glow:'#ff8a2a',deep:'#d23c14'},
 holy:{core:'#ffffff',mid:'#fff3b8',glow:'#ffd659',deep:'#d99a22'},
 ice:{core:'#ffffff',mid:'#d8f6ff',glow:'#7fd8f5',deep:'#2f8fc4'}};
export const mboltColours=el=>MBOLT[el]||MBOLT.arcane;
const hash=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
function glow(c,x,y,r,col,a){const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,col);g.addColorStop(1,'rgba(0,0,0,0)');c.globalAlpha=a;c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);}
/* the bolt in flight: (x, y) is the drawn centre (ground y minus the launch height) */
export function drawMageBolt(c,s,time=0){const C=mboltColours(s.element||'arcane'),x=s.x,y=s.y-(s.h??24),sp=Math.hypot(s.vx,s.vy)||1,ux=s.vx/sp,uy=s.vy/sp,age=s.age??((s.a?.range||240)/(s.a?.speed||230)-(s.life||0)),pulse=1+.12*Math.sin(age*38);
 c.save();c.globalCompositeOperation='lighter';
 /* trail: a tapering streak of fading discs behind the orb, longest once it is up to speed */
 const L=Math.min(30,8+age*140);for(let i=7;i>=1;i--){const k=i/7,tx=x-ux*L*k,ty=y-uy*L*k;glow(c,tx,ty,7*(1-k)+2,C.glow,.5*(1-k));}
 c.globalAlpha=.55;c.strokeStyle=C.mid;c.lineWidth=3;c.lineCap='round';c.beginPath();c.moveTo(x-ux*L*.8,y-uy*L*.8);c.lineTo(x,y);c.stroke();
 /* sparkles shed along the path, each living a short while and drifting off the line */
 for(let i=0;i<6;i++){const ph=(age*9+i/6)%1,seed=Math.floor(age*9+i/6)*7+i,d=6+ph*L,off=(hash(seed)-.5)*10*ph,px=x-ux*d-uy*off,py=y-uy*d+ux*off-ph*4;c.globalAlpha=(1-ph)*.9;c.fillStyle=ph<.4?C.core:C.mid;const z=ph<.3?2:1;c.fillRect(Math.round(px),Math.round(py),z,z);}
 /* the orb: wide soft halo, bright ring, white core */
 glow(c,x,y,16*pulse,C.glow,.6);glow(c,x,y,9*pulse,C.mid,.9);
 c.globalCompositeOperation='source-over';c.globalAlpha=1;c.fillStyle=C.deep;c.beginPath();c.arc(Math.round(x),Math.round(y),5.2*pulse,0,Math.PI*2);c.fill();
 c.fillStyle=C.mid;c.beginPath();c.arc(Math.round(x),Math.round(y),4.1*pulse,0,Math.PI*2);c.fill();c.fillStyle=C.core;c.beginPath();c.arc(Math.round(x+ux),Math.round(y+uy-.5),2.1,0,Math.PI*2);c.fill();
 /* a four-point glint that turns as it flies */
 c.globalCompositeOperation='lighter';c.globalAlpha=.8;c.fillStyle=C.core;const a=age*14,gl=5+2*Math.sin(age*30);for(let i=0;i<4;i++){const an=a+i*Math.PI/2;c.fillRect(Math.round(x+Math.cos(an)*gl),Math.round(y+Math.sin(an)*gl),1,1);}
 c.restore();return true;}
/* the cast: light gathers at the staff tip (f.dx, f.dy from the hero's feet), then flashes as the bolt leaves at f.release */
function drawCharge(c,f,t){const C=mboltColours(f.element),x=f.x+(f.dx||0),y=f.y+(f.dy||0),rel=f.release||.11;c.save();c.globalCompositeOperation='lighter';
 if(t<rel){const k=t/rel;glow(c,x,y,4+8*k,C.glow,.35+.5*k);for(let i=0;i<5;i++){const an=i*1.26+t*9,d=13*(1-k)+2;c.globalAlpha=.4+.6*k;c.fillStyle=i%2?C.mid:C.core;c.fillRect(Math.round(x+Math.cos(an)*d),Math.round(y+Math.sin(an)*d),1,1);}}
 else{const k=Math.min(1,(t-rel)/.16);glow(c,x,y,16*(1-k*.4),C.mid,.9*(1-k));c.globalAlpha=1-k;c.strokeStyle=C.core;c.lineWidth=1.5;c.beginPath();c.arc(x,y,3+11*k,0,Math.PI*2);c.stroke();
  c.fillStyle=C.core;for(let i=0;i<4;i++){const an=i*Math.PI/2+Math.PI/4,d=3+10*k;c.fillRect(Math.round(x+Math.cos(an)*d),Math.round(y+Math.sin(an)*d),2,2);}}
 c.restore();return true;}
/* the impact at the bolt's last centre: a white flash, an element ring that opens and thins, eight sparks thrown out and falling */
function drawHit(c,f,t){const C=mboltColours(f.element),x=f.x,y=f.y-(f.h??20),k=Math.min(1,t/(f.max||.3));c.save();c.globalCompositeOperation='lighter';
 if(t<.07)glow(c,x,y,20,C.core,.9*(1-t/.07));glow(c,x,y,18*(1-k*.3),C.glow,.6*(1-k));
 c.globalAlpha=1-k;c.strokeStyle=C.mid;c.lineWidth=3*(1-k)+.5;c.beginPath();c.ellipse(x,y,4+18*Math.sqrt(k),3+12*Math.sqrt(k),0,0,Math.PI*2);c.stroke();
 for(let i=0;i<8;i++){const an=i*Math.PI/4+.3,v=26+hash(i+f.seed||0)*16,px=x+Math.cos(an)*v*t*1.6,py=y+Math.sin(an)*v*t*1.1+60*t*t;c.globalAlpha=1-k;c.fillStyle=i%2?C.core:C.mid;const z=k<.5?2:1;c.fillRect(Math.round(px),Math.round(py),z,z);}
 c.restore();return true;}
export function drawMageFx(c,f,t){return f.type==='mbolt-charge'?drawCharge(c,f,t):f.type==='mbolt-hit'?drawHit(c,f,t):false;}
