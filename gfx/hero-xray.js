/* improve20-a-oct31 #1: the hero seen through a boss or an elite. The kid-appeal playtest (shots 09 and 18) lost the hero
   completely behind the Bog King and the Sleeper, so kids died without seeing what hit them. When a boss or an elite is
   drawn over the hero (it stands nearer the camera and its body crosses his box), the hero's own frame is drawn again on
   top, cut to the boss's opaque pixels: a 1 px pale outline round a see-through dark fill. Nothing is drawn by hand: the
   outline is the hero's frame, thresholded and grown by one pixel, the way the town shows him behind roofs (scenes/town.js
   silhouette, GHOST). Effects only; no new figure. */
import {enemyTop} from '../scenes/enemy-ai.js';
import {spriteMeta} from './actors/sprites.js';
export const XRAY={color:'#fff1a6',fill:'rgba(55,83,102,.5)',share:.15,w:140,h:120,up:96,box:{half:10,top:44}};
/* the bosses and elites drawn over the hero this frame: nearer the camera than him, and their body crosses his box */
export function heroCovers(state){const p=state?.player;if(!p||!state.level||p.hp<=0&&!p.down)return [];const B=XRAY.box,hx0=p.x-B.half,hx1=p.x+B.half,hy0=p.y-(p.z||0)-B.top,hy1=p.y;
 return (state.enemies||[]).filter(e=>(e.boss||e.elite)&&e.hp>0&&!e.decoy&&!(e.entering>0)&&e.y>p.y&&!(e.alpha===0)).filter(e=>{const m=spriteMeta(e.sprite),k=Math.max(1,e.scale||1),top=enemyTop(e),half=Math.max((e.y-top)*.32,(m?.width?m.width*.38:(m?.shadow?.[0]||16))*k);return e.x-half<hx1&&e.x+half>hx0&&top<hy1&&e.y>hy0;});}
let cv=null,mk=null,ed=null;
const make=()=>{const n=()=>{const x=document.createElement('canvas');x.width=XRAY.w;x.height=XRAY.h;return x;};cv=n();mk=n();ed=n();};
/* c is in world coordinates (the stage camera's transform). drawHero(g) and drawCover(g,e) draw into a context that is already
   translated to world space. Returns true when the outline was drawn. */
/* improve20-p-oct31 perf: the three canvases are read back (getImageData) or fed to each other every frame a boss covers the hero, so
   they are CPU canvases (willReadFrequently); Chrome warned on each */
export function drawHeroXray(c,state,drawHero,drawCover){const over=heroCovers(state);if(!over.length||typeof document==='undefined')return false;if(!cv)make();
 const W=XRAY.w,H=XRAY.h,RF={willReadFrequently:true},g=cv.getContext('2d',RF),m=mk.getContext('2d',RF),edge=ed.getContext('2d',RF);if(!g?.getImageData||!m||!edge)return false;const p=state.player,bx=Math.round(p.x)-W/2,by=Math.round(p.y)-XRAY.up;
 g.setTransform(1,0,0,1,0,0);g.globalCompositeOperation='source-over';g.clearRect(0,0,W,H);g.imageSmoothingEnabled=false;g.translate(-bx,-by);drawHero(g);g.setTransform(1,0,0,1,0,0);
 /* only the hero's solid pixels: a soft glow or shadow would fill in as a blob */
 const px=g.getImageData(0,0,W,H),d=px.data;let body=0;for(let i=3;i<d.length;i+=4){d[i]=d[i]>127?255:0;if(d[i])body++;}if(!body)return false;g.putImageData(px,0,0);
 g.globalCompositeOperation='source-in';g.fillStyle=XRAY.color;g.fillRect(0,0,W,H);
 m.setTransform(1,0,0,1,0,0);m.globalCompositeOperation='source-over';m.clearRect(0,0,W,H);m.imageSmoothingEnabled=false;m.translate(-bx,-by);for(const e of over)drawCover(m,e);m.setTransform(1,0,0,1,0,0);
 {const mp=m.getImageData(0,0,W,H),md=mp.data;for(let i=3;i<md.length;i+=4)md[i]=md[i]>127?255:0;m.putImageData(mp,0,0);}
 /* grow the body by one pixel for the outline, then fill the inside with the see-through dark */
 edge.setTransform(1,0,0,1,0,0);edge.globalCompositeOperation='source-over';edge.clearRect(0,0,W,H);edge.drawImage(cv,0,0);
 g.globalCompositeOperation='source-over';for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]])g.drawImage(ed,dx,dy);g.globalCompositeOperation='destination-out';g.drawImage(ed,0,0);
 edge.globalCompositeOperation='source-in';edge.fillStyle=XRAY.fill;edge.fillRect(0,0,W,H);g.globalCompositeOperation='source-over';g.drawImage(ed,0,0);
 g.globalCompositeOperation='destination-in';g.drawImage(mk,0,0);g.globalCompositeOperation='source-over';
 /* a hero only brushed by a boss's edge is plainly visible: draw him only when a real share of him is covered */
 const after=g.getImageData(0,0,W,H).data;let hid=0;for(let i=3;i<after.length;i+=4)if(after[i])hid++;if(hid<body*XRAY.share)return false;
 c.drawImage(cv,bx,by);return true;}
/* the last outline canvas, for tests and shot tools */
export const xrayCanvas=()=>cv;
