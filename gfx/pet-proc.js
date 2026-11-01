/* improve20-w-nov1 #13 (a8): a pet's bonus made visible. Code draws only small effects here (sparks, a ring of rune ticks, a shield arc,
   a glint, a dust puff); the pet itself is always its own downloaded sprite (gfx/actors/pet-sprites.js). f.still = reduced motion: no
   travel, no spin, no growth, just a short fade in place. f.pet is the pet key, f.life/f.max its time left. */
export function drawPetProc(c,f){const k=Math.max(0,Math.min(1,1-f.life/f.max)),still=!!f.still,x=Math.round(f.x),y=Math.round(f.y);c.save();
 switch(f.pet){
  case 'fire':{c.fillStyle='rgba(255,140,60,.35)';c.beginPath();c.ellipse(x,y-4,7+(still?0:5*k),5+(still?0:3*k),0,0,Math.PI*2);c.fill();for(let i=0;i<8;i++){const a=-Math.PI/2+(i-3.5)*.36,v=still?8:12+i%3*8,px=x+Math.cos(a)*v*(still?1:k*2),py=y-6+Math.sin(a)*v*(still?1:k*2)+(still?0:14*k*k);c.fillStyle=i%2?'#ffe08a':'#ff8a3d';c.fillRect(Math.round(px),Math.round(py),3,3);}break;}
  case 'study':{const r=still?18:14+8*k,rot=still?0:k*Math.PI;c.strokeStyle='#cbbfff';c.lineWidth=2.5;c.beginPath();c.ellipse(x,y,r,r*.42,0,0,Math.PI*2);c.stroke();c.strokeStyle='#f1ecff';c.lineWidth=1.5;for(let i=0;i<8;i++){const a=rot+i*Math.PI/4,cx=x+Math.cos(a)*r,cy=y+Math.sin(a)*r*.42;c.beginPath();c.moveTo(cx-2,cy-2);c.lineTo(cx+2,cy+2);c.moveTo(cx+2,cy-2);c.lineTo(cx-2,cy+2);c.stroke();}break;}
  case 'defence':{const g=still?1:.85+.3*k,rx=15*g,ry=22*g,cy=y-20;c.fillStyle='rgba(170,215,255,.16)';c.beginPath();c.ellipse(x,cy,rx,ry,0,0,Math.PI*2);c.fill();c.strokeStyle='#bfe3ff';c.lineWidth=2;c.stroke();c.strokeStyle='#ffffff';c.globalAlpha*=.75;c.lineWidth=1.5;c.beginPath();c.ellipse(x,cy,rx-3,ry-3,0,Math.PI*1.15,Math.PI*1.6);c.stroke();break;}
  case 'loot':{const s=still?4:2+5*Math.sin(Math.PI*k);c.strokeStyle='#fff6c2';c.lineWidth=1;c.beginPath();c.moveTo(x-s,y-6);c.lineTo(x+s,y-6);c.moveTo(x,y-6-s);c.lineTo(x,y-6+s);c.stroke();c.fillStyle='#ffffff';c.fillRect(x,y-6,1,1);break;}
  case 'speed':{if(still)break;c.fillStyle='rgba(214,206,180,.7)';for(let i=0;i<3;i++){const r=1.5+3*k,px=x-(f.dir||1)*(4+i*5+6*k),py=y-1-i%2*2-2*k;c.beginPath();c.arc(px,py,r,0,Math.PI*2);c.fill();}break;}}
 c.restore();return true;}
