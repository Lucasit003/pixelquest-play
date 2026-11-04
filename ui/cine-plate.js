/* The cinematic caption's plate (improve20-t-oct31 #18; docs/playtest/audit2-oct31/REPORT.md item 10). The ending slides drew their
   words straight over the sprites: the Sleeper's lines ran across the hero's face and the cat. The caption now rides the UI's own
   plate (ui/skin/pl-plate.png, style.css #overlay .cine-caption), and it never sits over a face: it starts at the bottom, over the
   letterbox bar, and moves to the top while a head (the hero's, the pet's, the boss's) is under it. Pure: callers pass rectangles.
   faceBoxes: screen rectangles of the heads in view, from the stage camera (gfx/world.js: the camera's centre sits at the middle of
   the camW x camH view, scaled by zoom) and the canvas's on-screen rectangle. A boss's head is the top part of its sprite. */
export function faceBoxes({rect,viewW,viewH,camera,zoom=1,player=null,pet=false,bosses=[]}){
 if(!rect?.width||!rect?.height||!camera||!viewW||!viewH)return [];
 const kx=rect.width/viewW,ky=rect.height/viewH,X=x=>rect.left+(viewW/2+(x-camera.x)*zoom)*kx,Y=y=>rect.top+(viewH/2+(y-camera.y)*zoom)*ky,
  box=(x,t,b,hw,who)=>({who,l:X(x-hw),r:X(x+hw),t:Y(t),b:Y(b)}),out=[];
 if(player){const z=player.z||0;out.push(box(player.x,player.y-58-z,player.y-22-z,16,'hero'));
  if(pet){const px=player.x-22*(player.facing||1),py=player.y+9;out.push(box(px,py-28,py-4,15,'pet'));}}
 for(const e of bosses){const h=Math.max(40,e.h||72);out.push(box(e.x,e.y-h-6,e.y-h*.4,Math.max(18,h*.34),'boss'));}
 return out;}
/* which side the plate goes: the one with no face under it; if both have one, the one covering less; a tie keeps the current side,
   so the plate never flips back and forth. margin: the plate's gap from the edge (style.css: 3% of the view's height). */
export function plateSide({faces=[],host,plate,top=false,margin=0}){
 const h=plate.bottom-plate.top,hit=(t,b)=>faces.reduce((n,f)=>n+Math.max(0,Math.min(b,f.b)-Math.max(t,f.t))*Math.max(0,Math.min(plate.right,f.r)-Math.max(plate.left,f.l)),0),
  low=hit(host.bottom-margin-h,host.bottom-margin),high=hit(host.top+margin,host.top+margin+h);
 return top?(high>0&&low<high?'bottom':'top'):(low>0&&high<low?'top':'bottom');}
/* a spoken line (it opens with a quotation mark) carries its speaker's name on a small tab over the plate */
export const spoken=text=>/^[“"]/.test(String(text||'').trim());
export function withSpeaker(list,who){return who?list.map(b=>b&&!b.by&&!b.card&&!b.view&&spoken(b.text)?{...b,by:who}:b):list;}
/* improve20-r20a-nov4 #2: a tall boss's ending on a short view (main.js cineFrame), as pure arithmetic. Screen values are CSS px from the
   canvas top; k is CSS px per world row. The bottom letterbox gives up only the px still missing for the body (H rows) plus gap rows above
   and below it, never below minBar; the shot's centre row cy puts the body's middle in the middle of the room left, kept where gfx/world.js
   can draw it (camTop+vh/2-40 .. camTop+vh/2). Returns {barH, barTop, cy}. */
export function tallFit({plateBottom,barTop,barH,minBar=0,H,k,vh,camTop=0,kingY,gap=6}){
 const top=plateBottom+gap*k,miss=top+(H+gap)*k-barTop,nb=miss>0?Math.max(minBar,barH-Math.ceil(miss)):barH,bt=barTop+(barH-nb),mid=(top+bt-gap*k)/2,T=Math.round(camTop)+vh/2;
 return {barH:nb,barTop:bt,cy:Math.max(T-40,Math.min(T,Math.round(kingY-H/2-(mid/k-vh/2))))};}
