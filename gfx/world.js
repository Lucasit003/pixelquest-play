import {drawTownGround,drawTownDetail,TOWN_DETAILS,townHeight} from './town-art.js';
import {actor,portrait as spritePortrait} from './actors/render.js';
import {drawAsset,ASSETS} from './assets.js';
import {BUILDINGS,TOWN,MAP,REGIONS,regionAt,pathX,ENCOUNTERS} from '../game/maps.js';
import {drawDamageText} from '../ui/juice.js';/* v2:ui */
import {drawPixelText,measurePixelText} from '../ui/canvas-ui.js';import {labelObstacles,stageBannerObstacles} from '../ui/stage-banners.js';
/* v2:levels -- stage scenes: the biomes agent's baked Tiled maps (gfx/biomes) under and over the actors. */
import {STAGE,chapterBiome,stageKey} from '../game/stage.js';
import {drawStage,drawStageForeground,stageEntities} from './biomes/index.js';
/* chapter ambience: fireflies, embers, mist (14 Oct world polish) */
import {drawAmbience} from './ambience.js';
/* v2:hub */ import {hubReady,drawHub,drawHubMap,hubGrade} from '../scenes/town.js';
/* v2:enemies -- combat VFX from downloaded sheets, and the sprite-height hp bar and telegraph for enemies */
import {drawEffect,drawShot,effectDepth} from './combat-fx.js'
import {drawSprite} from './actors/sprites.js';import {shakeOffset,squash,cooldownView,DODGE_CD,killSquash,comboView} from '../game/feel.js';
/* PixelLab props for the hero's own placed things (9 Oct): the Summoner's totems, the Ranger's traps, the Paladin's sanctuary */
const TOTEM_SPRITE={'wolf-totem':'fx-hr-wolf-totem','stone-totem':'fx-hr-stone-totem','bear-trap':'fx-hr-trap','snare-trap':'fx-hr-vines','sanctuary':'fx-hr-sanctum','consecration':'fx-hr-runes'};
import {legacyTelegraph,enemyTop} from '../scenes/enemy-ai.js';
/* v2:heroes -- companions are downloaded sprites too */
import {drawPet,petFollow} from './actors/pet-sprites.js';
import {companionEntity} from './actors/companion-sprites.js';
export {BUILDINGS,actor};
export const rect=(c,x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));};
const ellipse=(c,x,y,rx,ry,color)=>{c.fillStyle=color;c.beginPath();c.ellipse(Math.round(x),Math.round(y),rx,ry,0,0,Math.PI*2);c.fill();};
const rand=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x);};
export function label(c,text,x,y,color='#e8e1c4',size=7,align='center'){c.font=`${size}px monospace`;c.textAlign=align;c.textBaseline='alphabetic';c.fillStyle='#152023';c.fillText(text,Math.round(x+1),Math.round(y+1));c.fillStyle=color;c.fillText(text,Math.round(x),Math.round(y));}
/* Portraits are busts cropped from the hero's own downloaded sprite (the generated portraits were removed, 8 Oct). */
export function portrait(cv,cls){spritePortrait(cv,cls);}
const terrainCache=new Map(),propCache=new Map();
function stroke(c,points,col,width){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle=col;c.lineWidth=width;c.lineJoin='round';c.lineCap='round';c.stroke();}
function root(c,x,y,size,seed,col='#394d3b'){const points=[[x,y]];for(let i=1;i<=7;i++)points.push([x+i*size/7,y+Math.sin(i+seed)*size*.13]);stroke(c,points,'#243530',5);stroke(c,points,col,3);stroke(c,points.map(([x,y])=>[x,y-1]),'#7c816045',1);for(let i=2;i<6;i++)stroke(c,[points[i],[points[i][0]+size*.1,points[i][1]-size*.2],[points[i][0]+size*.25,points[i][1]-size*.25]],col,2);}
function cobble(c,x,y,w,h,seed=0){c.save();c.beginPath();c.rect(x,y,w,h);c.clip();rect(c,x,y,w,h,'#686e58');let row=0;for(let yy=y;yy<y+h;yy+=5,row++)for(let xx=x-8;xx<x+w;xx+=8){const r=rand(xx*2+yy+seed),sx=xx+(row%2)*4,sy=yy+(r>.8?1:0);rect(c,sx,sy,7,4,r>.65?'#a6a18a':r>.3?'#969780':'#858b75');rect(c,sx+1,sy,5,1,'#b8b196');rect(c,sx+1,sy+3,5,1,'#737961');if(r>.8)rect(c,sx+3,sy+1,2,1,'#b5af93');if(r<.13)rect(c,sx,sy+3,2,2,'#60754e');}c.restore();}
function meadow(c,height,town){if(town)rect(c,0,0,700,height,'#405c3b');for(let y=0;y<height;y+=2)for(let x=0;x<700;x+=2){if(!town&&y>950)continue;const n=Math.sin(x/29+Math.sin(y/41))*Math.cos(y/37)+Math.sin(x/73+y/59)*.6,r=rand(x*3+y*71);rect(c,x,y,2,2,n>.55?'#4d6740':n<-.55?'#365338':'#425f3b');if(r>.86){rect(c,x,y,1,1,n>.3?'#74844d':'#5b7646');if(r>.975){rect(c,x,y-2,1,2,'#6d834c');rect(c,x+1,y-1,1,1,'#879359');rect(c,x-1,y,1,1,'#304e32');}}}}
function wornRoad(c,pts,width,seed){stroke(c,pts,'#60714b',width+5);stroke(c,pts,'#9b9573',width);stroke(c,pts,'#aaa080',width-4);c.save();c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.lineWidth=width-3;c.lineCap='round';c.lineJoin='round';for(let y=0;y<TOWN.height;y+=2)for(let x=100;x<590;x+=2){const r=rand(x*7+y*31+seed);if(r<.64||!c.isPointInStroke(x,y))continue;rect(c,x,y,r>.94?2:1,1,r>.86?'#c4b38f':r>.74?'#8e896b':'#b3a482');}c.restore();}
function terrain(town){const key=town?'town':'journey';if(terrainCache.has(key))return terrainCache.get(key);const cv=document.createElement('canvas');cv.width=700;cv.height=town?TOWN.height:MAP.height;const c=cv.getContext('2d');rect(c,0,0,700,cv.height,'#3c5942');for(let y=0;y<cv.height;y+=4)for(let x=0;x<700;x+=4){const r=rand(x*3+y*71),stone=!town&&y>950,indoor=!town&&y>1160;const palette=indoor?['#424c47','#46514b','#4d5750','#3d4944']:stone?['#606856','#68715b','#727560','#4d604a']:['#3c5a40','#435f43','#4b6747','#38523d'];rect(c,x,y,4,4,palette[Math.floor(r*4)]);if(r>.72){rect(c,x,y-2,1,3,indoor?'#636a5866':'#81936466');rect(c,x+2,y,1,2,indoor?'#263d3733':'#263e3533');}}
 meadow(c,cv.height,town);
 if(town){drawTownGround(c);
 }else{
 // Broad tonal patches first, so the grass reads as ground rather than uniform noise.
 for(let i=0;i<240;i++){const y=rand(i+91)*1150,x=rand(i+140)*700;
  c.globalAlpha=.15;ellipse(c,x,y,18+rand(i+7)*46,(11+rand(i+29)*26),rand(i+3)>.5?'#4f6d4e':'#33502f');}
 c.globalAlpha=1;
 const road=[];for(let y=0;y<MAP.height;y+=12)road.push([pathX(y),y]);
 stroke(c,road,'#66714f',99);stroke(c,road,'#939074',91);stroke(c,road,'#8a866a',81);
 // Encounters happen in clearings, not at arbitrary points on a corridor. Widening
 // the road here gives the fight a place and keeps the arena readable. Kept modest:
 // the camera only shows ~300 units across, and a large disc swallows the whole frame.
 for(const e of ENCOUNTERS){if(e.y>1150)continue;const ex=pathX(e.y),r=58+((e.wave*29)%16);
  // Two soft layers, not concentric rings - hard edges read as banding at this scale.
  c.globalAlpha=.55;ellipse(c,ex,e.y+10,r,r*.6,'#8b886c');
  c.globalAlpha=.4;ellipse(c,ex,e.y+10,r-13,r*.6-9,'#948f72');c.globalAlpha=1;
  for(let i=0;i<34;i++){const a=rand(e.y+i)*6.283,d=Math.sqrt(rand(e.y*3+i))*r;
   rect(c,ex+Math.cos(a)*d,e.y+10+Math.sin(a)*d*.6,2,1,rand(i+e.y)>.5?'#9a9376':'#7d7a5f');}}
 // The road was three flat strokes covering the middle third of the screen.
 // Ruts, verge gravel and encroaching grass give the eye something to hold.
 for(let y=0;y<MAP.height;y+=2){
  const px=pathX(y),half=40+Math.sin(y/210)*7,wob=Math.sin(y/64)*2.4;
  rect(c,px-17+wob,y,4,2,rand(y*1.3)>.35?'#7f7b60':'#89846b');
  rect(c,px+13+wob,y,4,2,rand(y*2.1)>.35?'#7f7b60':'#89846b');
  if(rand(y*3.7)>.5){const s=rand(y*5.1)*7;rect(c,px-half+s,y,3,2,'#7b8463');rect(c,px+half-s,y,3,2,'#7b8463');}
  if(rand(y*7.3)>.86){const gx=px+(rand(y*11)-.5)*half*1.7;rect(c,gx,y,2,2,'#aba385');rect(c,gx+1,y+1,1,1,'#6f6c55');}
  if(rand(y*13.1)>.945){c.globalAlpha=.5;ellipse(c,px+(rand(y*17)-.5)*half*1.3,y,5+rand(y)*6,2+rand(y+3)*2,'#7d7659');c.globalAlpha=1;}}
for(let y=700;y<1160;y+=13){const spread=Math.min(170,(y-650)/2);cobble(c,pathX(y)-spread/2,y,spread,11,y);}for(let y=1140;y<MAP.height;y+=16)for(let x=164;x<540;x+=24){const r=rand(x+y),v=rand(x*3+y*7);
  if(v>.965)continue;// the occasional missing flagstone
  rect(c,x,y,22,14,v>.72?'#6e756a':r>.5?'#697066':'#5d675d');rect(c,x,y,22,1,v>.72?'#8d9585':'#889080');
  rect(c,x,y+13,22,1,'#47574c');
  if(r>.8)stroke(c,[[x+4,y],[x+8,y+5],[x+7,y+10]],'#435448',1);
  if(v<.13){c.globalAlpha=.4;ellipse(c,x+11,y+7,9,5,'#5c7358');c.globalAlpha=1;}}rect(c,295,1150,78,MAP.height-1150,'#64433f');rect(c,298,1150,72,MAP.height-1150,'#774b43');for(let y=1152;y<MAP.height;y+=12){rect(c,299,y,2,8,'#b59b64');rect(c,367,y,2,8,'#b59b64');if(y%36===0){stroke(c,[[315,y],[334,y+8],[353,y],[334,y-8],[315,y]],'#aa805655',1);}}for(let i=0;i<105;i++){const y=rand(i+801)*MAP.height,x=rand(i+12)>.5?450+rand(i+20)*150:80+rand(i+20)*140;root(c,x,y,30+rand(i+8)*70,i,y>1600?'#527b65':'#4a5e42');}for(let y=1150;y<MAP.height;y+=160){rect(c,135,y,19,135,'#293c35');rect(c,553,y,19,135,'#293c35');}cobble(c,256,2075,158,85);for(let i=0;i<4;i++){rect(c,256-i*6,2080+i*8,158+i*12,7,'#92927b');rect(c,256-i*6,2080+i*8,158+i*12,1,'#b6ab8c');}}
 terrainCache.set(key,cv);return cv;}
function props(town){const key=town?'town':'journey';if(propCache.has(key))return propCache.get(key);const list=[];const add=(art,x,y,h,extra={})=>list.push({art,x,y,h,...extra});if(town){for(const [art,x,y,h]of [[0,51,107,111],[1,122,66,95],[0,294,47,94],[0,392,46,99],[1,617,113,111],[0,652,268,122],[2,607,204,92],[3,55,261,102],[0,56,487,132],[1,133,548,94],[0,604,548,131],[1,661,460,109],[1,25,368,82],[0,654,570,121]])add(art,x,y,h,{sway:true});
 for(const [x,y]of [[182,222],[493,220],[90,392],[600,390],[285,501]])add(8,x,y,15);
 for(const [x,y]of [[269,231],[408,231],[261,334],[421,334]])add(7,x,y,34,{light:true});
 add(10,207,348,31);add(11,339,284,48);}else{
// Props atlas: 0 oak 1 pine 2 rootbound 3 autumn | 4 column 5 ruin 6 throne 7 lamp | 8 flowers 9 rocks 10 cart 11 fountain.
// Each region draws from its own palette so interiors never grow flowering bushes on the flagstones.
 const PALETTE={forest:{canopy:[0,0,1,3,2],under:[8,9,9],n:150,base:66,vary:58,sway:true},
  castle:{canopy:[2,1,0],under:[9,9,8],n:74,base:58,vary:48,sway:true},
  hall:{canopy:[2],under:[9],n:34,base:52,vary:34},
  chamber:{canopy:[2],under:[9],n:26,base:48,vary:30}};
 // Keep the road walkable, and inside the halls stay off the wall bands and the carpet.
 const clearing=(x,y)=>ENCOUNTERS.some(e=>e.y<=1150&&Math.hypot((x-pathX(e.y))/1.6,y-e.y-10)<(58+((e.wave*29)%16))*.95);
 const open=(x,y)=>Math.abs(x-pathX(y))>=96&&!clearing(x,y)&&(y>1150?x>66&&x<636&&!(x>286&&x<382):x>16&&x<684);
 for(const r of REGIONS){const P=PALETTE[r.id];if(!P)continue;
  for(let i=0;i<P.n;i++){const s=i+r.start;
   const y=r.start+rand(s+632)*(r.end-r.start),x=20+rand(s+899)*660;
   if(!open(x,y))continue;
   add(P.canopy[Math.floor(rand(s+41)*P.canopy.length)],x,y,P.base+rand(s+765)*P.vary,{sway:P.sway});
   // A canopy piece plus a couple of smaller neighbours reads as woodland;
   // uniform scatter reads as wallpaper.
   for(let j=0,k=Math.floor(rand(s+7)*3);j<k;j++){
    const ax=x+(rand(s+j*13+3)-.5)*76,ay=y+(rand(s+j*17+9)-.5)*48;
    if(open(ax,ay))add(P.under[Math.floor(rand(s+j*5+2)*P.under.length)],ax,ay,13+rand(s+j+55)*20);}}}
for(let y=1170;y<2170;y+=130){add(4,175,y,78);add(4,522,y,78);add(7,195,y+38,42,{light:true});add(7,502,y+38,42,{light:true});}for(let i=0;i<8;i++){add(5,130+i*30,790+(i%2)*35,48);add(5,456+i*14,840+(i%2)*25,48);}add(6,335,2100,95);list.push({building:5,x:339,y:1044,h:178});add(2,471,1177,88);add(2,204,1742,91);}
 propCache.set(key,list);return list;}
/* Baking the 700x2250 journey terrain costs ~136ms, which lands as a visible hitch
   the first time the player leaves town. Doing it up front, while the welcome panel
   is on screen, moves that cost somewhere nobody is playing. */
export function prewarm(draw){try{terrain(true);terrain(false);props(true);props(false);if(draw)draw();}catch{}}
/* Difficulty-ladder elites (game/tiers.js MODS): a pulsing ground aura in the modifier's colour under the body (the sprite
   itself carries the same tint, enemy-ai.js), and the prefixed name with any wards left over the health bar. */
function modAura(c,e,t){const r=Math.max(12,Math.min(30,(e.scale||1)*13)),p=.5+.5*Math.sin((t||0)*5+(e.x||0)*.05),col=e.enraged?'#ff3b1f':e.modColor||'#ffe066';
 c.save();c.globalAlpha=.22+.18*p;ellipse(c,e.x,e.y+1,r+2,(r+2)*.38,col);c.globalAlpha=.35+.25*p;c.strokeStyle=col;c.lineWidth=1;c.beginPath();c.ellipse(Math.round(e.x),Math.round(e.y+1),r+3,(r+3)*.4,0,0,Math.PI*2);c.stroke();c.restore();}
/* browser check 14 Oct: 7px canvas text garbled the name, so it uses the UI's bitmap font, stays inside the view, and draws the
   wards as small diamonds (the font has no diamond glyph). */
/* oct24-ember-econ (playtest ch2 shot 16): a Swift Grave Wraith's name, pushed in from the view's edge, drew over the Imp
   Warchief beside it, and two elites drew their names over each other. A name tries its own spot, then hanging right or left
   off its foe, then a line higher, and takes the first spot clear of names already drawn this frame and of other foes' bodies;
   if none is, the first spot clear of names. {w,cx,y,l,r}: width, foe x, baseline, the view's edges; returns {x,y}. */
let LABELS=[],BODIES=[];
const hits=(a,b)=>a.l<b.r&&a.r>b.l&&a.t<b.b&&a.b>b.t;
/* oct25 phone tiers: `hud` (the DOM HUD and phone controls in world units) is avoided like a drawn name: at 740x360 "Shielded Prism
   Sentinel" ran under the Map/Journal/Menu buttons. With HUD in the way a name may also step beside it or below its spot. */
/* oct25-phone2 review: `t`/`b` are the view's top and bottom; a name never leaves them. When the spots above a foe are taken
   (HUD, phone buttons, the compact toast) it tries spots below, down past its feet, then the nearest free on-screen spot; the
   last resort is clamped into the view ("Shielded Prism Sentinel" was drawn half off the top at 740x360). */
export function placeLabel({w,cx,y,l=-1e9,r=1e9,t=-1e9,b=1e9},placed,bodies=[],self=null,hud=[]){const cl=x=>Math.round(Math.max(l,Math.min(r-w,x))),xs=[...new Set([cx-w/2,cx-14,cx+14-w,...hud.flatMap(o=>[o.l-w-2,o.r+2])].map(cl))],box=(x,yy)=>({l:x-1,r:x+w+1,t:yy-8,b:yy+1}),inView=yy=>yy-8>=t&&yy+1<=b,cy=yy=>Math.round(Math.max(t+8,Math.min(b-1,yy)));let loose=null,near=null;
 for(const k of hud.length?[0,1,2,3,4,5,6,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12]:[0,1,2,3,4,5,6])for(const x of (hud.length?xs:xs.slice(0,3))){const yy=y-10*k;if(!inView(yy))continue;const bx=box(x,yy);if(placed.some(o=>hits(bx,o)))continue;near??={x,y:yy};if(hud.some(o=>hits(bx,o)))continue;loose??={x,y:yy};if(bodies.some(o=>o.e!==self&&hits(bx,o)))continue;placed.push(bx);return {x,y:yy};}
 const at=loose||near||{x:xs[0],y:cy(y)};at.y=cy(at.y);placed.push(box(at.x,at.y));return at;}
/* oct24-ember-finale: an Emberkeep mini-boss with no modifier (Normal) still carries a small name ("Imp Warchief", no "Elite"),
   placed by the same no-overlap rules, so a child can tell it from the crowd */
/* oct24-ch3: the Veilmoor's mini-bosses too ("Veil Seer": no "Elite", no "The") */
/* oct24-veil-econ: a foe's floating number starts 12 px over its head, or over its name when the name was drawn this frame */
export const floatY=(e,t)=>Math.min(enemyTop(e)-12,e.labelAt===t?e.labelTop-2:1e9);
export const miniNamed=(state,e)=>!!(e?.elite&&!e.mod&&['emberkeep','veilmoor'].includes(state?.level?.chapter));
/* the DOM HUD plates and phone controls, from camera pixels into this frame's world units (once per frame) */
let HUDW=null;const hudWorld=(c,T)=>{if(HUDW)return HUDW;const kx=c.canvas.width/(STAGE.camW||480),ky=c.canvas.height/(STAGE.camH||270);return HUDW=(c.canvas?.ownerDocument?stageBannerObstacles(c.canvas,STAGE.camW||480,STAGE.camH||270,true):[]).map(o=>({l:(o.left*kx-T.e)/T.a,r:(o.right*kx-T.e)/T.a,t:(o.top*ky-T.f)/T.d,b:(o.bottom*ky-T.f)/T.d}));};
function modLabel(c,e,now){let y=Math.round(enemyTop(e))-(e.hp<e.maxHp?10:4);const name=String(e.name||'').split(',')[0].replace(e.mod?/^$/:/^Elite (The )?/,''),col=e.enraged?'#ff8a5c':e.modColor||(e.mod?'#ffe066':'#f4d9a6'),n=e.ward>0?e.ward:0,tw=measurePixelText(name),w=tw+(n?2+n*7:0),T=c.getTransform(),l=-T.e/T.a+3,r=(c.canvas.width-T.e)/T.a-3,at=placeLabel({w,cx:e.x,y,l,r,t:-T.f/T.d+1,b:(c.canvas.height-T.f)/T.d-1},LABELS,BODIES,e,hudWorld(c,T)),x0=at.x;y=at.y;e.labelTop=y-9;e.labelAt=now;
 if(drawPixelText(c,name,x0,y,{color:col})===false){label(c,name+(n?' '+'+'.repeat(n):''),e.x,y,col,7);return;}
 for(let i=0;i<n;i++){const px=x0+tw+4+i*7,py=y-6;for(const [dy,hw] of [[0,0],[1,1],[2,2],[3,1],[4,0]]){rect(c,px+2-hw-1,py+dy-1,hw*2+3,3,'#1a0f0b');}for(const [dy,hw] of [[0,0],[1,1],[2,2],[3,1],[4,0]])rect(c,px+2-hw,py+dy,hw*2+1,1,dy<2?'#e6f4ff':col);}}
function glow(c,x,y,r,col,mid='#e8c2781a'){c.save();const g=c.createRadialGradient(x,y,1,x,y,r);g.addColorStop(0,col);g.addColorStop(.45,mid);g.addColorStop(1,'#e8c27800');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);c.restore();}
// Each region gets its own light. tint grades the frame, vig closes the edges,
// motes keep the air alive. Tuned by eye against tools/render-review.mjs output.
const ATMOSPHERE={
 town:{tint:'#ffe4b6',tintA:.26,vig:.40,mote:'#ffeec4',moteA:.40,drift:5,n:16,ray:0},
 forest:{tint:'#cfeeb0',tintA:.30,vig:.52,mote:'#e8f7b4',moteA:.50,drift:8,n:24,ray:.06},
 castle:{tint:'#c2d2e6',tintA:.30,vig:.60,mote:'#d8e0e4',moteA:.32,drift:4,n:14,ray:.035},
 hall:{tint:'#a4dcc6',tintA:.38,vig:.70,mote:'#a6ecce',moteA:.46,drift:3,n:20,ray:0},
 chamber:{tint:'#8fdcc4',tintA:.46,vig:.80,mote:'#aef5d8',moteA:.55,drift:3,n:26,ray:0}};
// Foreground occlusion. Drawn in screen space after every entity so the camera
// genuinely passes beneath it, and flipped vertically so the leaf mass hangs from
// the top edge with the trunk off-frame. Each cluster owns a stretch of road: it
// grows into the frame as you walk under it and withdraws again, which reads as
// depth without ever parking foliage over the middle where the fighting happens.
// It composites through a scratch layer so the whole thing can be tinted down in
// one pass -- foliage this close to the lens is out of the light.
const canopyCache=new Map();let fgLayer=null,fgShade=null;
function canopy(region){if(canopyCache.has(region))return canopyCache.get(region);
 const cfg=region==='forest'?{step:74,y0:-60,y1:1180,a:.92,px:.34,tall:1}:{step:150,y0:600,y1:1190,a:.66,px:.22,tall:.82};
 const list=[];
 for(let i=0,y=cfg.y0;y<cfg.y1;i++,y+=cfg.step){const s=i*13+(region==='forest'?11:701),lane=i%3;
  list.push({y:y+(rand(s+5)-.5)*cfg.step*.6,r:cfg.step*1.5,px:cfg.px,
   x:lane===0?-52+rand(s+3)*78:lane===1?408+rand(s+3)*78:70+rand(s+3)*340,
   h:Math.round((lane===2?236+rand(s+17)*96:296+rand(s+17)*128)*cfg.tall/24)*24,
   drop:lane===2?26+rand(s+23)*30:104+rand(s+23)*86,
   art:[0,0,3,2][Math.floor(rand(s+41)*4)],a:cfg.a*(.72+rand(s+53)*.28)});}
 canopyCache.set(region,list);return list;}
function overhang(c,state,cx,cy,t){if(state.zone==='town')return;const id=regionAt(cy).id;if(id!=='forest'&&id!=='castle')return;
 if(!fgLayer){fgLayer=document.createElement('canvas');fgShade=document.createElement('canvas');fgLayer.width=fgShade.width=480;fgLayer.height=fgShade.height=270;}
 const g=fgLayer.getContext('2d');g.clearRect(0,0,480,270);g.imageSmoothingEnabled=false;let any=false;
 for(const k of canopy(id)){const u=(cy-k.y)/k.r;if(u<=-1||u>=1)continue;const w=Math.cos(u*Math.PI/2)**.7;
  const sw=state.motion?Math.sin(t*.42+k.y*.09)*4+Math.sin(t*.19+k.x)*2:0;
  g.save();g.scale(1,-1);drawAsset(g,'props',k.art,k.x-(cx-350)*k.px+sw,k.h-k.drop*w,k.h,k.a*w);g.restore();any=true;}
 if(!any)return;
 // A silhouette of the same layer, dropped a few pixels, is what separates the
 // overhang from the identically-green trees behind it. Without it the canopy
 // simply vanishes into the mid-ground.
 const sh=fgShade.getContext('2d');sh.clearRect(0,0,480,270);sh.imageSmoothingEnabled=false;sh.drawImage(fgLayer,0,0);
 sh.save();sh.globalCompositeOperation='source-atop';sh.fillStyle='#050f10';sh.fillRect(0,0,480,270);sh.restore();
 g.save();g.globalCompositeOperation='source-atop';g.fillStyle='rgba(8,19,20,.62)';g.fillRect(0,0,480,270);g.restore();
 c.save();c.globalAlpha=.34;c.drawImage(fgShade,0,11);c.globalAlpha=.2;c.drawImage(fgShade,0,20);c.restore();c.drawImage(fgLayer,0,0);}
const atmosphereAt=(state,p)=>state.level?(ATMOSPHERE[{forest:'forest',lava:'castle',mystic:'hall'}[chapterBiome(stageKey(state.level))]]||ATMOSPHERE.forest):state.zone==='town'?ATMOSPHERE.town:(ATMOSPHERE[regionAt(p.y).id]||ATMOSPHERE.forest);
function grade(c,atm,t,motion,cam=null){
 /* v2:ui-mobile -- the grade covers the camera view (480x270 on desktop, smaller on phones) */const VW=STAGE.camW,VH=STAGE.camH,VK=VW/480;
 c.save();
 c.globalCompositeOperation='multiply';c.globalAlpha=atm.tintA;rect(c,0,0,VW,VH,atm.tint);
 /* Owner #9 (8 Oct, "lighting more professional"): light with a direction. Warm sun falls from the top left and the far
    corner cools a little (soft-light, so colours keep their saturation); slow cloud shadows drift across the ground in
    world space, so they slide under the camera like real shade; a few faint sunbeams lean in from the top. */
 const lin=(...a)=>{const g=c.createLinearGradient?.(...a);return g?.addColorStop?g:null;};
 if(atm.sun&&lin(0,0,1,1)){c.globalCompositeOperation='soft-light';c.globalAlpha=atm.sun;const g=lin(0,0,VW,VH);g.addColorStop(0,'#ffe9b8');g.addColorStop(.62,'#ffffff00');g.addColorStop(1,'#52608a');c.fillStyle=g;c.fillRect(0,0,VW,VH);}
 if(atm.clouds&&cam&&c.createRadialGradient){c.globalCompositeOperation='multiply';c.globalAlpha=1;const L=cam.x-VW/2,T=cam.y-VH/2,span=2400,drift=motion?t*7:0;
  for(let i=0;i<5;i++){const wx=((rand(i+61)*span+drift*(.8+rand(i+5)*.5))%span+span)%span,wy=rand(i+97)*1800;
   for(const ox of [-span,0,span]){const sx=wx+ox-L,sy=wy-T;if(sx<-260||sx>VW+260||sy<-200||sy>VH+200)continue;const r=150+rand(i+33)*90;
    c.save();c.translate(sx,sy);c.scale(1,.55);const g=c.createRadialGradient(0,0,0,0,0,r);g.addColorStop(0,`rgba(70,86,110,${atm.clouds})`);g.addColorStop(.6,`rgba(90,104,126,${atm.clouds*.55})`);g.addColorStop(1,'rgba(255,255,255,0)');
    c.fillStyle=g;c.fillRect(-r,-r,r*2,r*2);c.restore();}}}
 if(atm.beams&&lin(0,0,1,1)){c.globalCompositeOperation='screen';for(let i=0;i<3;i++){const x0=(VW*(.22+i*.24)+(motion?Math.sin(t*.13+i*1.7)*14:0)),w=34+i*14,a=atm.beams*(motion?.65+Math.sin(t*.4+i*2.3)*.35:.8);
   c.globalAlpha=a;const g=lin(0,0,0,VH*.75);g.addColorStop(0,'#fff1c8');g.addColorStop(1,'#fff1c800');c.fillStyle=g;c.beginPath();c.moveTo(x0,0);c.lineTo(x0+w,0);c.lineTo(x0+w-VH*.45,VH*.75);c.lineTo(x0-VH*.45,VH*.75);c.closePath();c.fill();}}
 c.globalCompositeOperation='source-over';c.globalAlpha=1;
 const v=c.createRadialGradient(VW/2,VH*130/270,40*VK,VW/2,VH*130/270,258*VK);
 v.addColorStop(0,'rgba(6,14,16,0)');v.addColorStop(.55,`rgba(6,14,16,${atm.vig*.22})`);v.addColorStop(1,`rgba(6,14,16,${atm.vig})`);
 c.fillStyle=v;c.fillRect(0,0,VW,VH);
 // Under reduced motion the motes stay put and stop twinkling. They remain visible -
 // the setting removes movement, it does not strip the scene.
 const ta=motion?t:0;
 for(let i=0;i<atm.n;i++){
  const sp=.35+rand(i+71)*1.5,x=(rand(i+453)*VW+ta*(i%2?sp:-sp)+VW)%VW,
   y=(rand(i+922)*VH+ta*atm.drift*(.3+rand(i+8)*.7))%VH+(motion?Math.sin(t*.6+i)*6:0);
  c.globalAlpha=atm.moteA*(motion?.5+Math.sin(t*1.4+i*2.1)*.5:.7);
  rect(c,x,y,rand(i+300)>.8?2:1,rand(i+300)>.8?2:1,atm.mote);}
 c.restore();}
function drawSlime(c,a,t){const pulse=a.wind>0?Math.sin(t*18)*2:Math.sin(t*4)*1.3;const frost=a.variant==='frost';const sc=(frost?1.2:1)*(a.scale||1);const x=Math.round(a.x),y=Math.round(a.y);ellipse(c,x,y,13*sc,4,'#182c2866');c.save();c.translate(x,y);c.scale(sc,sc);const poly=(pts,col)=>{c.fillStyle=col;c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fill();};poly([[-16,-3],[-16,-12-pulse],[-12,-21-pulse],[-5,-27-pulse],[5,-27-pulse],[12,-22-pulse],[17,-11],[17,-3]],'#193d3a');poly([[-13,-5],[-13,-13-pulse],[-9,-21-pulse],[-3,-24-pulse],[6,-23-pulse],[12,-16-pulse],[14,-7]],a.color);poly([[-12,-7],[-12,-14],[-7,-21],[1,-24],[3,-19],[-3,-15],[-6,-7]],frost?'#c1eff0':'#a0d9a1');rect(c,-7,-20,5,2,'#e4f5c899');rect(c,1,-13,3,4,'#203631');rect(c,9,-13,3,4,'#203631');rect(c,4,-6,4,1,'#253d35');if(frost)for(let i=0;i<3;i++)poly([[-11+i*10,-22],[-9+i*10,-31],[-4+i*10,-22]],'#c3ebee');c.restore();}
/* The companion: a downloaded animal sprite that follows the hero (gfx/actors/pet-sprites.js). town.js calls it through the kit. */
const companion=drawPet;
/* v2:enemies -- every combat effect is a downloaded sheet (gfx/combat-fx.js); only damage text is drawn by the UI. Sprite
   effects keep full strength for most of their life and fade over the last third. */
/* Red at the screen's edge: a flash when the hero is struck, and a slow breathing glow below 30% health (held still under
   reduced motion, and the flash is off there). */
/* Dodge recharge (0.7 s): a thin arc round the hero's feet fills clockwise, then blinks once full. Drawn on the ground so
   it reads on desktop and phones alike. */
function dodgeRing(c,p){const v=cooldownView(p.dodgeCd,DODGE_CD,p.ringWas||0);p.ringWas=p.dodgeCd||0;if(v.ready)p.ringBlink=.16;const blink=p.ringBlink>0;if(!v.cooling&&!blink)return;
 if(blink)p.ringBlink-=1/60;const x=Math.round(p.x),y=Math.round(p.y)+1;c.save();c.lineWidth=1;c.strokeStyle=blink?'rgba(255,246,214,.9)':'rgba(16,10,8,.45)';c.beginPath();c.ellipse(x,y,11,4,0,0,Math.PI*2);c.stroke();
 if(!blink){c.strokeStyle='rgba(240,226,180,.85)';c.beginPath();c.ellipse(x,y,11,4,0,-Math.PI/2,-Math.PI/2+Math.PI*2*(1-v.frac));c.stroke();}c.restore();}
/* juice-oct27 combo counter (game/feel.js comboView): from 5 hits in a row, "N HITS" on the right of the stage, under the boss
   bar; the number hops up 2 px on each hit (never flashes) and warms from cream to gold to orange as the chain grows. */
const COMBO_COL=['#f4ead2','#ffd96b','#ffb547','#ff8a3d'];
/* exploit4-oct27: on a phone the right edge holds the interact and Defend buttons, which hid the combo; there it sits on the left, below the hero panel and gold, above the stick */
export function comboAnchor(phone,W=STAGE.camW,H=STAGE.camH){return phone?{x:14,y:Math.round(H*.42),align:'left'}:{x:W-14,y:Math.round(H*.3),align:'right'};}
const phoneView=c=>!!c?.canvas?.ownerDocument?.documentElement?.classList?.contains('m-mode');
function drawCombo(c,s){const v=comboView(s.hitChain,s.time||0);if(!v)return;const A=comboAnchor(phoneView(c)),y=A.y,pop=v.pop&&s.motion!==false;c.save();c.globalAlpha*=v.alpha;
 if(A.align==='left'){const nw=measurePixelText(String(v.n),{scale:1,bold:true})||String(v.n).length*7;drawPixelText(c,String(v.n),A.x,y-(pop?2:0),{scale:1,color:COMBO_COL[v.tier],outline:'#1a0f0b',bold:true,align:'left'});drawPixelText(c,'HITS',A.x+nw+4,y,{scale:1,color:'#f4ead2',outline:'#1a0f0b',bold:false,align:'left'});c.restore();return;}
 const x=A.x;
 drawPixelText(c,String(v.n),x-(measurePixelText('HITS',{scale:1})||28)-4,y-(pop?2:0),{scale:1,color:COMBO_COL[v.tier],outline:'#1a0f0b',bold:true,align:'right'});
 drawPixelText(c,'HITS',x,y,{scale:1,color:'#f4ead2',outline:'#1a0f0b',bold:false,align:'right'});c.restore();}
function hurtVignette(c,s,t){const p=s.player;if(!p||!(p.hp>0)||!p.maxHp)return;const low=p.hp/p.maxHp<.3?.28+(s.motion?.08*Math.sin(t*5.5):0):0,a=Math.max(low,(s.hurtFlash||0)/.3*.34);if(a<=.01)return;
 const g=c.createRadialGradient(240,135,100,240,135,290);g.addColorStop(0,'rgba(150,18,18,0)');g.addColorStop(1,`rgba(150,18,18,${a.toFixed(3)})`);c.save();c.fillStyle=g;c.fillRect(0,0,480,270);c.restore();}
/* oct24-endgame: the whole path a floating word travels (ui/juice.js drawDamageText: up to 26 px of rise plus 14 for a third
   stacked number, 12 px text) kept out of the obstacles (camera pixels; ox/oy is the view's top-left in world pixels) */
export function clearLabel(f,obs,ox,oy){const big=(f.size||12)>=16||!!f.big,rise=(big?26:20)+14,half=(measurePixelText(String(f.text),{bold:big})||String(f.text).length*7)/2+3,sx=f.x-ox;let y=f.y;
 for(const o of [...obs].sort((a,b)=>a.top-b.top)){const top=y-oy-rise-13,bot=y-oy+13;if(sx+half>o.left&&sx-half<o.right&&top<o.bottom&&bot>o.top)y=o.bottom+oy+rise+14;}
 return y===f.y?f:{...f,y};}
function effect(c,f){const life=Math.max(0,f.life/f.max);c.save();if(f.type==='text'){c.globalAlpha=life;drawDamageText(c,f,life);}else{c.globalAlpha=Math.min(1,life*3);drawEffect(c,f);}c.restore();}
/* v2:levels -- a stage is drawn at exactly 2x (docs/STYLE_GUIDE.md rule 2): the camera sits on whole world
   units, shake moves in whole screen pixels, and actors are drawn at whole-unit positions. */
const snap=a=>({...a,x:Math.round(a.x),y:Math.round(a.y)});
const stageOpts=(state,t)=>({level:state.level,biome:stageKey(state.level),map:state.layout?.map||null,camX:Math.round(state.cinematicShot&&state.camera?state.camera.x-STAGE.camW/2:state.camX||0),camTop:Math.round(state.camTop||0),width:state.layout?.width||STAGE.viewW,height:state.layout?.height||STAGE.height,t,motion:state.motion,hero:state.player});
function stageBackdrop(c,state,t){drawStage(c,{...stageOpts(state,t),interleave:true});}
function stageFront(c,state,t){drawStageForeground(c,stageOpts(state,t));}
/* Ground shadows on a stage: Mixel's MainC_Shadow (20x12 in a 32 px cell, dist/assets/town/shadow.png), the same
   downloaded sprite the hub uses, at 1:1. Sprite enemies bring their own (enemy-ai.js). */
let shadowImg=null;
function groundShadow(c,x,y){if(typeof Image==='undefined')return;if(!shadowImg){shadowImg=new Image();shadowImg.src=new URL('../assets/town/shadow.png',import.meta.url).href;}if(shadowImg.complete&&shadowImg.naturalWidth)c.drawImage(shadowImg,Math.round(x)-16,Math.round(y)-17);}
export function drawWorld(c,state,t){LABELS=[];HUDW=null;BODIES=(state.enemies||[]).filter(e=>e.hp>0).map(e=>{const top=enemyTop(e),hw=Math.max(10,(e.y-top)*.32);return {e,l:e.x-hw,r:e.x+hw,t:top,b:e.y};});const {player:p,enemies,fx,shots,totems}=state,stage=!!state.level,town=!stage&&state.zone==='town',height=town?TOWN.height:MAP.height,zoom=stage?STAGE.zoom:1.6;
 /* v2:hub */ if(town&&hubReady()){state.camera=drawHub(c,state,t,{actor,companion,effect});grade(c,hubGrade(state.motion),t,state.motion,state.camera);return;}
let cx=Math.max(150,Math.min(550,p.x)),cy=Math.max(85,Math.min(height-85,p.y));/* v2:ui-mobile -- a stage renders through the camera view (STAGE.camW x camH; 480x270 on desktop) */if(stage){cx=Math.round(state.camX||0)+STAGE.camW/2;cy=Math.round(state.camTop||0)+STAGE.camH/2;}if(state.cinematicShot){cx=state.cinematicShot.x;cy=state.cinematicShot.y;if(stage){const top=Math.round(state.camTop||0),lw=state.layout?.width;/* playtest ch2: a cutscene beat framed off the scrolling camera showed a black strip (the stage was drawn for camX only); stageOpts now draws the shot's own view, kept inside the level */cx=Math.round(lw>STAGE.camW?Math.max(STAGE.camW/2,Math.min(lw-STAGE.camW/2,cx)):cx);cy=Math.round(Math.max(top+STAGE.camH/2-40,Math.min(cy,top+STAGE.camH/2)));}}state.camera={x:cx,y:cy,width:stage?STAGE.camW:300,height:stage?STAGE.camH:169};c.save();c.clearRect(0,0,480,270);const [shake,shakeY]=shakeOffset(state.shake,state.shakeTime,state.shakeMax,t,state.motion);c.translate(Math.round((stage?STAGE.camW/2:240)-cx*zoom+shake),Math.round((stage?STAGE.camH/2:142)-cy*zoom+shakeY));c.scale(zoom,zoom);c.imageSmoothingEnabled=false;if(stage)stageBackdrop(c,state,t);else c.drawImage(terrain(town),0,0);const entities=[],lights=[];const vx=stage?STAGE.camW/2+60:230,vy=stage?STAGE.camH/2+40:95,visible=(x,y,h=100)=>x>cx-vx&&x<cx+vx&&y>cy-vy&&y-h<cy+vy;
 for(const prop of stage?[]:props(town)){if(!visible(prop.x,prop.y,prop.h))continue;
  // Sway used to be a rounded +-0.5px translate, i.e. nothing. Foliage now shears
  // about its own base -- the trunk stays planted, the crown leans -- with the
  // amplitude, phase and rate all keyed off the prop so no two move together.
  if(prop.sway&&prop.ph===undefined){prop.ph=rand(prop.x*3.1+prop.y*1.7)*6.28;prop.fr=.46+rand(prop.x*1.9+prop.y*5.3)*.5;prop.amp=prop.h*.036+.4;}
  entities.push({y:prop.y,draw:()=>{ellipse(c,prop.x,prop.y,prop.h*.3,prop.h*.065,'#172c2444');
   const lean=prop.sway&&state.motion?(Math.sin(t*prop.fr+prop.ph)*.66+Math.sin(t*prop.fr*2.37+prop.ph*1.7)*.34)*prop.amp:0;
   const hide=p.y<prop.y&&p.y>prop.y-prop.h&&Math.abs(p.x-prop.x)<prop.h*.35;
   if(lean){const k=lean/prop.h;c.save();c.transform(1,0,k,1,-k*prop.y,0);}
   drawAsset(c,prop.building===undefined?'props':'buildings',prop.building??prop.art,prop.x,prop.y,prop.h,hide?.5:1);
   if(lean)c.restore();}});if(prop.light)lights.push([prop.x,prop.y-prop.h+6,30,prop.y]);}
 if(town){for(const detail of TOWN_DETAILS)if(visible(detail.x,detail.y,detail.h))entities.push({y:detail.y,draw:()=>drawTownDetail(c,detail)});for(const b of BUILDINGS)if(visible(b.x,b.y,townHeight(b))){entities.push({y:b.y,draw:()=>{ellipse(c,b.x+4,b.y,b.w*.48,12,'#14292155');drawAsset(c,'buildings',b.art,b.x,b.y,townHeight(b),p.y<b.y&&p.y>b.y-townHeight(b)&&Math.abs(p.x-b.x)<b.w*.4?.45:1);label(c,b.sign,b.x,b.y+13,'#e7d8ab',6);}});lights.push([b.x,b.y-24,26,b.y]);}for(const npc of [{x:257,y:239,appearance:'mage',weapon:'staff'},{x:418,y:255,appearance:'ranger',weapon:'bow'},{x:499,y:375,appearance:'summoner',weapon:'focus'}])if(visible(npc.x,npc.y,50))entities.push({y:npc.y,draw:()=>actor(c,{...npc,hp:1,plain:true,scale:.87,direction:'down',facing:npc.x>335?-1:1},t)});const f=TOWN.fountain;for(let i=0;i<5;i++)rect(c,f.x-9+i*4,f.y-9+((t*15+i*3)%7),1,2,'#d3e4bd99');}
 for(const f of fx.filter(f=>f.ground))effect(c,f);
 if(!town&&state.travel){const target=state.travel;label(c,'THE PATH CONTINUES',target.x,target.y-5,'#e2c487',7);for(let i=0;i<3;i++){stroke(c,[[target.x-5,target.y+10+i*7],[target.x,target.y+14+i*7],[target.x+5,target.y+10+i*7]],'#d7c78b',1);}}
 if(stage)for(const m of state.party||[])entities.push(companionEntity(c,m,t,groundShadow));
 for(const al of state.allies||[])entities.push({y:al.y,draw:()=>{const fade=Math.min(1,al.life/.3,al.still?(al.max-al.life)/.25:1);if(!al.still)groundShadow(c,al.x,al.y);drawSprite(c,al.sprite,al.state,al.stateT,Math.round(al.x),Math.round(al.y),{facing:al.facing,alpha:fade*(al.kind==='guardian'?1:.88)});}});
 /* dodge afterimages (the hero's own frames, fading) and the coins a fallen enemy throws (combat.js deathFx) */
 for(const g of state.trails||[])entities.push({y:g.y-.5,draw:()=>{c.save();c.globalAlpha=.34*g.life/g.max;actor(c,stage?snap(g):g,t);c.restore();}});
 for(const k of state.coins||[])if(k.age>=0)entities.push({y:k.y,draw:()=>drawSprite(c,'theater-coin-gold','idle',0,Math.round(k.x),Math.round(k.y-k.z),{scale:.2})});
 for(const a of totems){ellipse(c,a.x,a.y,a.radius,a.radius*.6,a.protect?'#89bca91c':'#73d9c311');const id=a.a?.id,lie=a.trap||a.a?.kind==='aura';const spr=TOTEM_SPRITE[id]||(a.trap?'fx-hr-trap':a.protect?'fx-hr-stone-totem':'fx-hr-wolf-totem');
  /* the Ranger's traps and the Paladin's sanctuary lie flat on the ground (drawn under everyone); totems stand and depth-sort */
  if(lie)drawEffect(c,{type:'prop',sprite:spr,x:a.x,y:a.y,life:1,max:1});else entities.push({y:a.y,draw:()=>{drawEffect(c,{type:'prop',sprite:spr,x:a.x,y:a.y,life:1,max:1});glow(c,a.x,a.y-18,18,'#6cdbc43a');}});}
 for(const e of enemies){if(e.hp<=0&&!(e.deathTime>0))continue;if(!visible(e.x,e.y,100))continue;if(e.wind>0)legacyTelegraph(c,e,t);entities.push({y:e.y,draw:()=>{const a=stage?snap(e):e,[qx,qy]=e.hp>0?squash((e.knock||0)*(e.boss?.5:1),state.motion):killSquash(e.boss?0:e.killPop,state.motion),sq=qx!==1;if(e.mod&&e.hp>0)modAura(c,a,t);if(sq){c.save();c.translate(a.x,a.y);c.scale(qx,qy);c.translate(-a.x,-a.y);}if(state.drawEnemy?.(c,a,t));else if(stage&&(groundShadow(c,a.x,a.y),false));else if(e.appearance==='slime')drawSlime(c,a,t);else actor(c,a,t);if(sq)c.restore();if(e.hp>0&&e.hp<e.maxHp&&!e.boss){const hb=Math.round(enemyTop(e))-7;rect(c,Math.round(e.x)-15,hb,30,4,'#152c29');rect(c,Math.round(e.x)-14,hb+1,Math.round(28*e.hp/e.maxHp),2,'#d3ba87');}/* oct24-veil-econ (playtest ch3, minor): a named foe's name stays up while its damage number shows; the number rises from above the name (labelTop) */if((e.mod||miniNamed(state,e))&&e.hp>0)modLabel(c,e,t);else e.labelAt=null;if(e.exposed>0&&!(e.labelUntil>state.time))label(c,'∨',e.x,Math.round(enemyTop(e))-7,'#e0b3fa',10);if(e.marked>0&&!(e.labelUntil>state.time))label(c,'⊕',e.x,Math.round(enemyTop(e))-9,'#b3e6a4',10);}});}
 /* v2:enemies */if(state.enemyLayer)entities.push(...state.enemyLayer(c,t));for(const f of fx)if(!f.ground&&f.type!=='text')entities.push({y:effectDepth(f),draw:()=>effect(c,f)});
 /* v2:levels */if(stage)entities.push(...stageEntities(c,stageOpts(state,t)));
 entities.push({y:p.y,draw:()=>{if(stage)groundShadow(c,p.x,p.y);if(stage)dodgeRing(c,p);actor(c,stage?{...snap(p),noShadow:true}:p,t);}});if(state.pet){const px=Math.round(p.x-22*p.facing),py=Math.round(p.y+9),pf=petFollow(state.pet,px,py,t,p.facing,state.motion!==false,p.moving);entities.push({y:pf.y,draw:()=>drawPet(c,state.pet,px,py,t,p.moving,p.facing,state.motion)});}entities.sort((a,b)=>a.y-b.y).forEach(e=>e.draw());
 // Shots fly at the height they were launched from - the weapon tip - while x/y stay
 // on the ground plane for collision.
 for(const s of shots)drawShot(c,s);/* oct24-balance2: on a tall boss its label ("ARMOUR CRACKED!") rose under the rally banner ("GUARD DOWN, ATTACK!", scenes stage-view y 54); while that banner is up an enemy's label starts low enough that its 26 px rise ends below it */const rb=state.rally&&state.run&&state.flow==='boss'&&(state.rally.ended==null||state.run.time-state.rally.ended<1.5)?(state.camTop||0)+100:-1e9;/* oct24-endgame (playtest ch3 minor): "SHIELDED" and "ARMOUR CRACKED!" rose under the move warning or the HUD portrait (both draw over the world); a label whose rise would meet one starts below it */const obs=stage?labelObstacles(c.canvas,STAGE.camW,STAGE.camH):[];for(const f of fx)if(!f.ground&&f.type==='text'){const g=f.enemy?{...f,x:f.enemy.x,y:Math.max(rb,floatY(f.enemy,t))}:f;effect(c,obs.length?clearLabel(g,obs,cx-STAGE.camW/2,cy-STAGE.camH/2):g);}const atm=atmosphereAt(state,p);for(const [x,y,r,gy]of lights){glow(c,x,y,r*1.3,'#f7d38a4d','#eec27722');if(gy!==undefined)ellipse(c,x,gy,r*.8,r*.28,'#f0c67a26');}if(atm.ray&&!stage)for(let i=0;i<6;i++){const off=i*104+(state.motion?Math.sin(t*.05+i)*14:0);c.fillStyle=`rgba(228,238,186,${atm.ray})`;c.beginPath();c.moveTo(cx-250+off,cy-100);c.lineTo(cx-196+off,cy-100);c.lineTo(cx-272+off,cy+100);c.lineTo(cx-292+off,cy+100);c.closePath();c.fill();}
 if(stage)stageFront(c,state,t);c.restore();if(stage)drawAmbience(c,{chapter:chapterBiome(stageKey(state.level)),t,camX:state.camX||0,W:STAGE.camW,H:STAGE.camH,motion:state.motion!==false});if(stage){hurtVignette(c,state,t);drawCombo(c,state);}if(!stage){overhang(c,state,cx,cy,t);grade(c,atm,t,state.motion);}}
export function drawMap(canvas,state,full=false){/* v2:hub */if(state.zone==='town'&&hubReady())return drawHubMap(canvas,state,full);const c=canvas.getContext('2d'),town=state.zone==='town';const w=canvas.width,h=canvas.height;c.clearRect(0,0,w,h);rect(c,0,0,w,h,'#142a2b');const totalH=town?TOWN.height:MAP.height;const scale=full?Math.min((w-30)/700,(h-30)/totalH):.19;const ox=full?(w-700*scale)/2:w/2-state.player.x*scale,oy=full?15:h/2-state.player.y*scale;c.save();c.beginPath();c.rect(4,4,w-8,h-8);c.clip();c.translate(ox,oy);c.scale(scale,scale);c.imageSmoothingEnabled=false;c.drawImage(terrain(town),0,0);for(const prop of props(town)){drawAsset(c,prop.building===undefined?'props':'buildings',prop.building??prop.art,prop.x,prop.y,prop.h);}if(town){for(const detail of TOWN_DETAILS)drawTownDetail(c,detail);for(const b of BUILDINGS){drawAsset(c,'buildings',b.art,b.x,b.y,townHeight(b));if(full)label(c,b.sign,b.x,b.y+20,'#fff0cc',14);}}else if(full){for(const [i,y]of [[0,170],[1,780],[2,1300],[3,1940]]){ellipse(c,pathX(y),y,11,11,'#debb74');label(c,['ELDERWOOD','BROKEN GATE','ROOTBOUND HALLS','KING’S CHAMBER'][i],pathX(y)+22,y+6,'#f2dfae',22,'left');}}for(const e of state.enemies.filter(e=>e.hp>0))ellipse(c,e.x,e.y,8,8,'#e99677');ellipse(c,state.player.x,state.player.y,14,14,'#f4deb0');ellipse(c,state.player.x,state.player.y,6,6,'#fff8d8');if(state.camera){c.strokeStyle='#f7e8bd55';c.lineWidth=3;c.strokeRect(state.camera.x-150,state.camera.y-85,300,169);}c.restore();if(!full){label(c,'N',w/2,12,'#b8c4b2',8);c.strokeStyle='#8d8667';c.lineWidth=1;c.strokeRect(.5,.5,w-1,h-1);}}
