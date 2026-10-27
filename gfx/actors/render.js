// Actor drawing. Heroes are downloaded sprite atlases drawn by hero-sprites.js, exactly as their artists made
// them; enemies draw from their own atlases in scenes/enemy-ai.js. The code-drawn limb figure, the painted
// cutout skin and the generated class portraits were removed on 8 Oct (owner rule: no drawn heroes).
// What remains here: the status overlays drawn over an actor (shield ring, freeze, root, poison motes),
// equipment anchors for projectiles and effects, and the hero bust used wherever a portrait used to be.
import {drawHero,heroAnchors,anchorsFromMeta,drawHeroBust} from './hero-sprites.js';
import {appearance} from './definitions.js';
function rect(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(Math.round(x),Math.round(y),Math.max(1,Math.round(w)),Math.max(1,Math.round(h)));}
function line(c,ax,ay,bx,by,color,width=1){ax=Math.round(ax);ay=Math.round(ay);bx=Math.round(bx);by=Math.round(by);const dx=Math.abs(bx-ax),dy=-Math.abs(by-ay),sx=ax<bx?1:-1,sy=ay<by?1:-1;let err=dx+dy;for(let n=0;n<300;n++){rect(c,ax-width/2,ay-width/2,width,width,color);if(ax===bx&&ay===by)break;const e=2*err;if(e>=dy){err+=dy;ax+=sx;}if(e<=dx){err+=dx;ay+=sy;}}}
/* Draws an actor: the hero atlas (or nothing while it loads), then status overlays. Non-hero actors draw
   through their own sprite path; anything else draws nothing rather than a code-drawn stand-in. */
export function actor(c,a,time=0){if(!drawHero(c,a,time)||a.ghost)return;actorFx(c,a,time,Math.round(a.x),Math.round(a.y-(a.z||0)),appearance(a));}
function actorFx(c,a,time,x,y,id){
 /* no shield outline around the hero (owner, 8 Oct): the HUD shows the shield, and abilities that grant one draw their own effect (Iron Bulwark's plates) */
 if(a.statusTime>0){c.save();if(a.status==='freeze'){c.fillStyle='#b7e7ff44';c.beginPath();c.moveTo(x-14,y);c.lineTo(x-17,y-25);c.lineTo(x-10,y-47);c.lineTo(x+12,y-45);c.lineTo(x+18,y-17);c.lineTo(x+14,y);c.closePath();c.fill();c.strokeStyle='#b7e7ff';c.stroke();}
  else if(a.status==='root'){for(let i=0;i<3;i++)line(c,x-10+i*10,y,x-15+i*12,y-18,'#789d62',2);}
  else{const col=a.status==='poison'?'#91c958':'#f0d595';for(let i=0;i<3;i++)rect(c,x+Math.cos(time*3+i*2.1)*13,y-49+Math.sin(time*3+i*2.1)*3,2,2,col);}c.restore();}}
export function clearActorCache(){}
/* Grip, tip and strike edge in world coordinates, honouring facing, actor scale and jump height. Heroes read
   their atlas' per-frame weapon points; anything else gets a chest-height point in front of it. */
export function equipmentAnchors(a,time=0){return heroAnchors(a,time)||anchorsFromMeta(a,null,time);}
export const equipmentPoint=(a,time=0)=>equipmentAnchors(a,time).tip;
/* Wherever a portrait is shown: a bust cropped from the hero's own sprite, at a whole-number scale. */
export function portrait(canvas,cls){drawHeroBust(canvas,cls?.appearance||cls?.name?.toLowerCase()||'warrior');}
