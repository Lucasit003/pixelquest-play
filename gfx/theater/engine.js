/* Lesson Theater: small cutscenes for lesson steps, drawn from downloaded pack art only
   (docs/STYLE_GUIDE.md rule 0). A scene is data (dist/gfx/theater/scenes/*.js): a stage (a Tiled map
   carved from Oakhaven and baked by tools/bake-theater.mjs), a cast of sprite actors on the shared
   atlas contract (gfx/actors/sprites.js), sky sprites, weather overlays, and a timeline of beats.
   Only the factual overlays are drawn in code: labels, the chain of causes, the inset map with its
   arrows, the cycle diagram and captions, all inside 9-slice frames from the game's UI pack.

   Time: evaluate(scene,t) is a pure fold of the beats up to scene time t, so any moment can be drawn
   from scratch (scrubbing, reduced motion, a part that starts mid-scene, video export). Loops (idle
   breathing, flags, rain) run on a separate wall clock so the picture stays alive after the action
   ends. No timers here: the caller owns both clocks.

   Coordinates: stage pixels, one art pixel per picture unit, the same scale as the game world. The
   picture is 640 x 280 (gfx/lesson-art.js PIC_W x PIC_H); the camera is its top-left corner on the stage.

   Scene script (see scenes/bridge.js):
     {id, title, stage:{map,w,h}, view:{x,y}, alt:{default, <part>:...},
      cast:[{id, atlas:'theater-...', x, y, face:1|-1, state?, tags?, layer?:'world'|'sky', hidden?, shadow?, head?, z?, phase?}],
      fx:[{id, atlas, alpha, layers?, y?, clip?}]            full-picture loops, tiled (rain, god rays, birds)
      inset:{x,y,w,h,title,field:[x0,x1],features,units}      top-down map diagram; units follow tagged actors
      ring:{x,y,w,h,stages:[...]}                              cycle diagram
      beats:[...], length}
   Beats, in time order (validateScene checks): {at, do, who?, ...}. `who` is an id, '#tag' or a list.
     part {name}        starts a part; a lesson step shows one part: pic {t:'theater',scene,part}
     walk/run {to:[x,y] | by:[dx,dy] | x | y, dur | speed, stagger, keepFace, state}
     face {face}   spawn/hide {dur, stagger}   emote {icon, dur}   say {text, dur}
     attack/attack2/hurt/turn/jump/block/cheer/act {state?, times, dur, loop, hold}   play an atlas state
     camera {x, y, dur}   label {id, text, x, y, align, w, point:[x,y], kind:'cause'|'title', bold, solve, until}
     unlabel {id}   chain {id,x,y,w} + line {id,text} (numbered chain of causes)   arrow {id, from, to, team, dashed, dur}
     inset {show}   ring {mark, turn}   set {id | who, <field>: value, dur} tweens alpha, x, y, grade.warm, grade.dark ...
     tryit {}           where a Try-it question pauses (the end of a step's part); the video tool reads it */
import {drawSprite} from '../actors/sprites.js';

export const VIEW_W=640,VIEW_H=280;
const BASE=new URL('../../assets/theater/',import.meta.url);

/* ---------- assets: stage images and the UI atlas, loaded once, never blocking ---------- */
const images=new Map();
let ui=null,uiLoading=false;
function image(file){const had=images.get(file);if(had&&(had.started||typeof Image==='undefined'))return had;const r=had||{img:null,ready:false,started:false};images.set(file,r);
 if(typeof Image==='undefined')return r;r.started=true;
 try{const im=new Image();im.onload=()=>{r.img=im;r.ready=true;};im.onerror=()=>{};im.src=new URL(file,BASE).href;}catch{}
 return r;}
function uiAtlas(){if(ui)return ui;if(!uiLoading&&typeof fetch!=='undefined'){uiLoading=true;
  fetch(new URL('ui.json',BASE)).then(r=>r.json()).then(meta=>{const r=image(meta.image||'ui.png');ui={meta,r};}).catch(()=>{});}
 return null;}
const uiReady=()=>{const u=uiAtlas();return u&&u.r.ready?u:null;};
export function preloadScene(scene){image(scene.stage.map+'.webp');image(scene.stage.map+'-front.webp');uiAtlas();}

/* ---------- compile: beats -> per-actor tracks (cached per scene object) ---------- */
const DEF={walk:40,run:95};
const VERB_DUR={attack:.34,attack2:.5,hurt:.3,cheer:1.6,jump:.5,turn:.25,emote:1.6,say:2.2,act:1,point:1};
const compiled=new WeakMap();
const lerp=(a,b,u)=>a+(b-a)*u,clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),smooth=u=>u*u*(3-2*u);
function selector(scene,who){const ids=[];for(const w of [].concat(who||[])){if(typeof w!=='string')continue;
 if(w[0]==='#'){for(const c of scene.cast)if((c.tags||[]).includes(w.slice(1)))ids.push(c.id);}else ids.push(w);}return ids;}
export function compile(scene){if(compiled.has(scene))return compiled.get(scene);
 const A=new Map(),tw=new Map(),labels=[],chains=new Map(),arrows=[],cams=[],parts=[],tryits=[],insets=[],rings=[],strips=new Map(),stripList=[],globes=[],boards=[],boardNow=new Map();
 for(const c of scene.cast)A.set(c.id,{c,moves:[],acts:[],faces:[],fades:[],bubbles:[]});
 const posAt=(a,t)=>{let x=a.c.x,y=a.c.y;for(const m of a.moves){if(t<m.t0)break;const u=clamp((t-m.t0)/(m.t1-m.t0||1));x=lerp(m.x0,m.x1,m.ease?smooth(u):u);y=lerp(m.y0,m.y1,m.ease?smooth(u):u);}return [x,y];};
 const tween=(key,t0,t1,v)=>{if(!tw.has(key))tw.set(key,[]);tw.get(key).push({t0,t1,v});};
 let end=0;
 for(const b of scene.beats){const t=b.at||0,ids=selector(scene,b.who);let last=t;
  switch(b.do){
   case 'part':parts.push({name:b.name,at:t});break;
   case 'tryit':tryits.push(t);break;
   case 'walk':case 'run':ids.forEach((id,i)=>{const a=A.get(id);if(!a)return;const t0=t+(b.stagger||0)*i+(b.jitter?((id.charCodeAt(id.length-1)*37)%10)/10*b.jitter:0);
    const [x0,y0]=posAt(a,t0),x1=b.to?b.to[0]:b.x!=null?b.x:x0+(b.by?.[0]||0),y1=b.to?b.to[1]:b.y!=null?b.y:y0+(b.by?.[1]||0);
    const d=Math.hypot(x1-x0,y1-y0),dur=b.dur??d/(b.speed||DEF[b.do]),t1=t0+Math.max(.01,dur);
    a.moves.push({t0,t1,x0,y0,x1,y1,state:b.state||b.do,ease:!!b.ease});if(x1!==x0&&!b.keepFace)a.faces.push({t:t0,face:b.face??Math.sign(x1-x0)});last=Math.max(last,t1);});break;
   case 'face':ids.forEach(id=>A.get(id)?.faces.push({t,face:b.face}));break;
   case 'spawn':case 'hide':ids.forEach((id,i)=>A.get(id)?.fades.push({t:t+(b.stagger||0)*i,to:b.do==='spawn'?1:0,dur:b.dur??.35}));break;
   case 'emote':case 'say':ids.forEach((id,i)=>{const t0=t+(b.stagger||0)*i,t1=t0+(b.dur??VERB_DUR[b.do]);A.get(id)?.bubbles.push({t0,t1,icon:b.icon,text:b.text});last=Math.max(last,t1);});break;
   case 'camera':cams.push({t0:t,t1:t+(b.dur??1.5),x:b.x,y:b.y,zoom:b.zoom});last=t+(b.dur??1.5);break;
   case 'label':labels.push({...b,t0:t,t1:b.until??Infinity});break;
   case 'unlabel':for(const l of labels)if(l.id===b.id&&l.t1===Infinity)l.t1=t;break;
   case 'chain':chains.set(b.id,{...b,t0:t,t1:Infinity,lines:[]});break;
   case 'line':chains.get(b.id)?.lines.push({t0:t,text:b.text,tag:b.tag});break;
   case 'unchain':{const ch=chains.get(b.id);if(ch)ch.t1=t;break;}
   case 'arrow':arrows.push({...b,t0:t,t1:b.until??Infinity,dur:b.dur??1.2});last=t+(b.dur??1.2);break;
   case 'unarrow':for(const r of arrows)if(r.id===b.id&&r.t1===Infinity)r.t1=t;break;
   case 'inset':insets.push({t,show:b.show!==false});break;
   case 'ring':rings.push({t,show:b.show!==false,mark:b.mark,turn:b.turn});break;
   case 'strip':{const prev=strips.get(b.id);if(prev)prev.t1=t;const st={...b,t0:t,t1:Infinity,reveals:[{t,n:b.n??0}],focus:[]};strips.set(b.id,st);stripList.push(st);break;}
   case 'reveal':strips.get(b.id)?.reveals.push({t,n:b.n});break;
   case 'focus':strips.get(b.id)?.focus.push({t,i:b.i});break;
   case 'unstrip':{const st=strips.get(b.id);if(st)st.t1=t;break;}
   case 'globe':globes.push({t,show:b.show!==false});break;
   /* boards: word, coins, bar and table overlays; a new one with the same id replaces the old */
   case 'word':case 'coins':case 'bar':case 'table':case 'items':{const prev=boardNow.get(b.id);if(prev)prev.t1=t;const o={...b,kind:b.do,t0:t,t1:Infinity,events:[]};boardNow.set(b.id,o);boards.push(o);break;}
   case 'sort':case 'count':case 'cell':case 'unboard':{const o=boardNow.get(b.id);if(!o)break;if(b.do==='unboard')o.t1=t;else o.events.push({...b,t});break;}
   case 'set':{const t1=t+(b.dur||0),targets=b.who?ids:[b.id];targets.forEach((id,i)=>{for(const [k,v] of Object.entries(b))if(!['do','at','id','dur','who','stagger'].includes(k))tween(`${id}.${k}`,t+(b.stagger||0)*i,t1+(b.stagger||0)*i,v);});last=t1+(b.stagger||0)*targets.length;break;}
   default:{/* acting verbs: attack, attack2, hurt, cheer, jump, turn, block, point, act (state: ...) */
    ids.forEach((id,i)=>{const a=A.get(id);if(!a)return;const t0=t+(b.stagger||0)*i,times=b.times||1,per=b.dur?b.dur/times:(VERB_DUR[b.do]??1),t1=t0+per*times;
     a.acts.push({t0,t1,per,state:b.state||(b.do==='act'?'idle':b.do),loop:b.loop,hold:b.hold});last=Math.max(last,t1);});}
  }
  end=Math.max(end,last);}
 parts.sort((p,q)=>p.at-q.at);
 const length=scene.length??end;
 const out={A,tw,labels,chains:[...chains.values()],arrows,cams,parts,tryits,insets,rings,strips:stripList,globes,boards,length,posAt};
 compiled.set(scene,out);return out;}

/* Part [from,to) in scene seconds; no part name means the whole scene. */
export function partRange(scene,part){const k=compile(scene);if(!part)return [0,k.length];
 const i=k.parts.findIndex(p=>p.name===part);if(i<0)throw new Error(`theater: scene ${scene.id} has no part ${part}`);
 return [k.parts[i].at,i+1<k.parts.length?k.parts[i+1].at:k.length];}

/* Value of a tweened field at time t (numbers interpolate; anything else switches at t0). */
function value(k,key,t,init){const list=k.tw.get(key);let v=init;if(!list)return v;
 for(const s of list){if(t<s.t0)break;if(typeof s.v==='number'&&typeof v==='number'&&s.t1>s.t0)v=lerp(v,s.v,smooth(clamp((t-s.t0)/(s.t1-s.t0))));else v=s.v;}return v;}

/* ---------- evaluate: the whole picture state at scene time t ---------- */
export function evaluate(scene,t,{rate=1,wall=t}={}){const k=compile(scene),actors=[];
 for(const [id,a] of k.A){const c=a.c;let [x,y]=k.posAt(a,t),state=c.state||'idle',st=wall+(c.phase||0),face=c.face||1,alpha=c.hidden?0:1;
  for(const f of a.faces)if(f.t<=t)face=f.face;
  for(const f of a.fades)if(f.t<=t)alpha=lerp(alpha,f.to,clamp((t-f.t)/f.dur));
  const mv=a.moves.find(m=>t>=m.t0&&t<m.t1);if(mv){state=mv.state;st=(t-mv.t0)*rate;}
  for(const ac of a.acts){if(t<ac.t0)continue;if(t<ac.t1){state=ac.state;st=ac.loop?(t-ac.t0)*rate:((t-ac.t0)%ac.per)*rate;}else if(ac.hold&&(!mv||mv.t0<ac.t0)){state=ac.state;st=99;}}
  const bubble=a.bubbles.filter(b=>t>=b.t0&&t<b.t1).pop()||null;
  x=value(k,`${id}.x`,t,x);y=value(k,`${id}.y`,t,y);alpha=value(k,`${id}.alpha`,t,alpha);state=value(k,`${id}.state`,t,state);
  actors.push({id,atlas:value(k,`${id}.atlas`,t,c.atlas),x,y,face,state,st,alpha,layer:c.layer||'world',z:c.z||0,bubble,shadow:c.shadow??true,fx:c.fx});}
 let cam={x:scene.view?.x||0,y:scene.view?.y||0},z=scene.view?.zoom||1;for(const m of k.cams)if(m.t0<=t&&m.zoom)z=m.zoom;
 for(const m of k.cams){if(t<m.t0)break;const u=smooth(clamp((t-m.t0)/(m.t1-m.t0||1))),fx=cam.x,fy=cam.y;cam={x:lerp(fx,m.x??fx,u),y:lerp(fy,m.y??fy,u)};
  if(t>=m.t1)cam={x:m.x??fx,y:m.y??fy};}
 const sw=scene.stage.w,sh=scene.stage.h;cam={x:Math.round(clamp(cam.x,0,Math.max(0,sw-VIEW_W/z))),y:Math.round(clamp(cam.y,0,Math.max(0,sh-VIEW_H/z))),z};
 const fx=(scene.fx||[]).map(f=>({...f,alpha:value(k,`${f.id}.alpha`,t,f.alpha??0)}));
 const grade={warm:value(k,'grade.warm',t,scene.grade?.warm||0),dark:value(k,'grade.dark',t,scene.grade?.dark||0)};
 const labels=k.labels.filter(l=>t>=l.t0&&t<l.t1).map(l=>({...l,age:t-l.t0}));
 const chains=k.chains.filter(c=>t>=c.t0&&t<c.t1).map(c=>({...c,lines:c.lines.filter(l=>t>=l.t0).map(l=>({...l,age:t-l.t0}))}));
 const arrows=k.arrows.filter(r=>t>=r.t0&&t<r.t1).map(r=>({...r,u:clamp((t-r.t0)/r.dur)}));
 let inset=false;for(const s of k.insets)if(s.t<=t)inset=s.show;
 let ring=null;for(const s of k.rings)if(s.t<=t)ring=s.show?{mark:s.mark,turn:s.turn,age:t-s.t}:null;
 const strips=k.strips.filter(x=>t>=x.t0&&t<x.t1).map(x=>{let n=0,nt=x.t0,focus=null;for(const r of x.reveals)if(r.t<=t){if(r.n!==n)nt=r.t;n=r.n;}for(const f of x.focus)if(f.t<=t)focus=f.i;return {...x,n,age:t-nt,focusI:focus};});
 let globe=false;for(const g of k.globes)if(g.t<=t)globe=g.show;const turn=value(k,'globe.turn',t,scene.globe?.turn||0);
 grade.night=value(k,'grade.night',t,scene.grade?.night||0);
 const boards=k.boards.filter(o=>t>=o.t0&&t<o.t1).map(o=>{const ev=o.events.filter(e=>e.t<=t);return {...o,age:t-o.t0,ev,now:t};});
 return {t,cam,actors,fx,grade,labels,chains,arrows,inset,ring,strips,boards,globe:globe?{turn}:null};}

/* ---------- text: Pixel Operator glyphs from the UI atlas, on their own 16 px grid ---------- */
export function textWidth(s,font='regular'){const u=uiReady();const g=u?.meta.font.glyphs[font];let w=0;
 for(const ch of String(s))w+=g?(g[ch]||g['?'])[1]:7;return w;}
export function wrap(s,max,font='regular'){const out=[];let line='';
 for(const word of String(s).split(/\s+/)){const t=line?line+' '+word:word;if(line&&textWidth(t,font)>max){out.push(line);line=word;}else line=t;}
 if(line)out.push(line);return out;}
export function text(c,s,x,y,{font='regular',colour='light',align='left'}={}){const u=uiReady();if(!u)return 0;const m=u.meta.font,g=m.glyphs[font],row=m.rows[`${font}-${colour}`];
 let w=textWidth(s,font),cx=Math.round(align==='center'?x-w/2:align==='right'?x-w:x);const cy=Math.round(y);
 for(const ch of String(s)){const [gx,adv]=g[ch]||g['?'];if(ch!==' ')c.drawImage(u.r.img,gx,row,adv+1,m.h,cx,cy,adv+1,m.h);cx+=adv;}return w;}
export const LINE=14;

/* 9-slice from the UI atlas: corners at 1x, edges and centre tiled at 1x (never stretched). */
export function frame(c,name,x,y,w,h){const u=uiReady();if(!u)return false;const s=u.meta.slices[name];if(!s)return false;const im=u.r.img,i=s.inset;
 x=Math.round(x);y=Math.round(y);w=Math.round(w);h=Math.round(h);const cw=s.w-2*i,ch=s.h-2*i;
 const tile=(sx,sy,sw,sh,dx,dy,dw,dh)=>{for(let yy=0;yy<dh;yy+=sh)for(let xx=0;xx<dw;xx+=sw){const ww=Math.min(sw,dw-xx),hh=Math.min(sh,dh-yy);c.drawImage(im,sx,sy,ww,hh,dx+xx,dy+yy,ww,hh);}};
 tile(s.x+i,s.y+i,cw,ch,x+i,y+i,w-2*i,h-2*i);
 tile(s.x+i,s.y,cw,i,x+i,y,w-2*i,i);tile(s.x+i,s.y+s.h-i,cw,i,x+i,y+h-i,w-2*i,i);
 tile(s.x,s.y+i,i,ch,x,y+i,i,h-2*i);tile(s.x+s.w-i,s.y+i,i,ch,x+w-i,y+i,i,h-2*i);
 c.drawImage(im,s.x,s.y,i,i,x,y,i,i);c.drawImage(im,s.x+s.w-i,s.y,i,i,x+w-i,y,i,i);
 c.drawImage(im,s.x,s.y+s.h-i,i,i,x,y+h-i,i,i);c.drawImage(im,s.x+s.w-i,s.y+s.h-i,i,i,x+w-i,y+h-i,i,i);return true;}
export function icon(c,name,x,y){const u=uiReady();const s=u?.meta.icons[name];if(!s)return false;c.drawImage(u.r.img,s.x,s.y,s.w,s.h,Math.round(x),Math.round(y),s.w,s.h);return true;}

/* ---------- draw ---------- */
const INK='#2a2027',CREAM='#f4ecd6',GOLD='#e8c468';
const TEAM={red:'#b23a2c',blue:'#3b63c4',green:'#3f7d3a'};
function arrowLine(c,x0,y0,x1,y1,u,{colour=CREAM,width=2,head=6,dash}={}){const x=lerp(x0,x1,u),y=lerp(y0,y1,u);
 c.save();c.strokeStyle=colour;c.fillStyle=colour;c.lineWidth=width;if(dash)c.setLineDash?.(dash);c.beginPath();c.moveTo(x0,y0);c.lineTo(x,y);c.stroke();c.setLineDash?.([]);
 if(u>.15){const a=Math.atan2(y1-y0,x1-x0);c.beginPath();c.moveTo(x,y);c.lineTo(x-head*Math.cos(a-.5),y-head*Math.sin(a-.5));c.lineTo(x-head*Math.cos(a+.5),y-head*Math.sin(a+.5));c.closePath();c.fill();}
 c.restore();}
function drawFx(c,f,wall){if(f.alpha<=0.01)return;c.save();if(f.clip){c.beginPath();c.rect(...f.clip);c.clip();}c.globalAlpha*=f.alpha;const [w,h]=f.tile||[320,180];
 for(let pass=0;pass<(f.layers||1);pass++)for(let y=(f.y||0)-pass*67;y<VIEW_H;y+=h)for(let x=(f.x||0)-pass*143;x<VIEW_W;x+=w)drawSprite(c,f.atlas,f.state||'idle',wall+(f.phase||0)+pass*.53,x,y);c.restore();}
function bubble(c,a,cam,wall){const b=a.bubble;if(!b)return;const z=cam.z||1,x=Math.round((a.x-cam.x)*z),y=Math.round((a.y-cam.y-(a.head||48))*z);
 if(b.icon){const bob=Math.round(Math.sin(wall*5)*1);drawSprite(c,'theater-emote',b.icon,0,x,y-2+bob);return;}
 if(b.text){const lines=wrap(b.text,150),w=Math.max(...lines.map(l=>textWidth(l)))+16,h=lines.length*LINE+12;const bx=clamp(x-w/2,4,VIEW_W-w-4),by=y-h-2;
  if(!frame(c,'parchment',bx,by,w,h))return;lines.forEach((l,i)=>text(c,l,bx+8,by+5+i*LINE,{colour:'ink'}));}}
function labelBox(c,l,cam,solve,actors){if(l.solve&&!solve)return;if(l.stage){const z=cam.z||1,sx=(l.x-cam.x)*z,sy=(l.y-cam.y)*z;if(sx<-200||sx>VIEW_W+200||sy<-40||sy>VIEW_H+10)return;l={...l,x:sx,y:sy};}if(l.follow){const a=actors.find(a=>a.id===l.follow);if(!a||a.alpha<.5)return;l={...l,x:(a.x-cam.x)*(cam.z||1)+(l.dx||0),y:(a.y-cam.y)*(cam.z||1)+(l.dy??-70),align:l.align||'center'};}const max=l.w||260,font=l.bold?'bold':'regular',lines=wrap(l.text,max,font);
 const w=Math.max(...lines.map(s=>textWidth(s,font)))+14,h=lines.length*LINE+10;let x=l.x,y=l.y;
 if(l.align==='center')x-=w/2;else if(l.align==='right')x-=w;x=clamp(Math.round(x),2,VIEW_W-w-2);y=clamp(Math.round(y),2,VIEW_H-h-2);
 const pop=clamp(l.age/.25);c.save();c.globalAlpha*=pop;
 if(l.point){const px=(l.point[0]-cam.x)*(cam.z||1),py=(l.point[1]-cam.y)*(cam.z||1),ax=clamp(px,x+6,x+w-6),ay=py<y?y:y+h;arrowLine(c,ax,ay,px,py,1,{colour:l.kind==='cause'?GOLD:CREAM,width:2,head:6});}
 frame(c,'slot',x,y,w,h);lines.forEach((s,i)=>text(c,s,x+7,y+4+i*LINE,{font,colour:l.kind==='cause'||l.kind==='title'?'gold':'light'}));c.restore();}
function chainBox(c,ch){if(!ch.lines.length)return;const w=ch.w||300,font='regular',rows=[];
 ch.lines.forEach((l,i)=>wrap(`${i+1}. ${l.text}`,w-16,font).forEach((s,j)=>rows.push({s,last:i===ch.lines.length-1,age:l.age,indent:j?12:0})));
 const h=rows.length*LINE+10;frame(c,'slot',ch.x,ch.y,w,h);
 rows.forEach((r,i)=>{c.save();c.globalAlpha*=clamp(r.age/.3);text(c,r.s,ch.x+8+r.indent,ch.y+4+i*LINE,{font,colour:r.last?'gold':'light'});c.restore();});}
/* Inset map: a top-down diagram in a UI panel; features and unit positions come from the scene. */
function insetMap(c,scene,st){const m=scene.inset,k=compile(scene);if(!m||!st.inset)return;const {x,y,w,h}=m;
 if(!frame(c,'panel',x-8,y-8,w+16,h+16))return;
 c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.fillStyle=m.ground||'#5f8f45';c.fillRect(x,y,w,h);
 for(const f of m.features||[]){c.fillStyle=f.colour||'#3f8bc0';if(f.t==='rect')c.fillRect(x+f.x,y+f.y,f.w,f.h);}
 c.restore();
 for(const f of m.features||[])if(f.label)text(c,f.label,x+f.lx,y+f.ly,{colour:f.ink||'light'});
 const fx0=m.field[0],fx1=m.field[1],mx=v=>x+clamp((v-fx0)/(fx1-fx0))*w;
 for(const u of m.units||[]){const mem=st.actors.filter(a=>(scene.cast.find(c=>c.id===a.id)?.tags||[]).includes(u.tag)&&a.alpha>.5);if(!mem.length)continue;
  const ax=mem.reduce((s,a)=>s+a.x,0)/mem.length,bx=Math.round(mx(ax))-u.w/2,by=y+u.y;
  c.fillStyle=INK;c.fillRect(bx-1,by-1,u.w+2,u.h+2);c.fillStyle=TEAM[u.team]||u.colour;c.fillRect(bx,by,u.w,u.h);
  if(u.label)text(c,u.label,bx+u.w/2,by+u.h+1,{colour:'light',align:'center'});}
 for(const r of st.arrows)if(r.inset!==false)arrowLine(c,x+r.from[0],y+r.from[1],x+r.to[0],y+r.to[1],r.u,{colour:TEAM[r.team]||r.colour||GOLD,width:3,head:7,dash:r.dashed?[4,3]:null});
 if(m.title)text(c,m.title,x+3,y+1,{colour:'gold'});}
/* Cycle diagram: the four named steps round a ring with arrows; the current step is gold. */
function ringDiagram(c,scene,st){const g=scene.ring;if(!g||!st.ring)return;const {x,y,w,h}=g,cx=x+w/2,cy=y+h/2;
 if(!frame(c,'panel',x-8,y-8,w+16,h+16))return;
 const n=g.stages.length,ang=i=>-Math.PI/2+i*2*Math.PI/n,rx=w/2-8,ry=h/2-10;
 /* label anchors: top and bottom centred, the sides flush with the frame */
 const at=i=>{const a=ang(i),ca=Math.cos(a),sa=Math.sin(a);return {x:ca>.5?x+w-2:ca<-.5?x+2:cx,y:cy+sa*ry-7,align:ca>.5?'right':ca<-.5?'left':'center',ca,sa};};
 const node=i=>{const a=ang(i);return [cx+Math.cos(a)*rx*.62,cy+Math.sin(a)*ry*.78];};
 for(let i=0;i<n;i++){const [x0,y0]=node(i),[x1,y1]=node((i+1)%n),on=st.ring.turn&&g.stages[i]===st.ring.mark;
  arrowLine(c,lerp(x0,x1,.2),lerp(y0,y1,.2),lerp(x0,x1,.8),lerp(y0,y1,.8),1,{colour:on?GOLD:'#b9ab86',width:2,head:5});}
 g.stages.forEach((s,i)=>{const p=at(i),on=s===st.ring.mark;text(c,g.short?.[i]||s,p.x,p.y,{font:on?'bold':'regular',colour:on?'gold':'light',align:p.align});});}

/* Strip: a row of named boxes joined by arrows (a food chain, a timeline). Items appear one by one; the
   focused item is gold. Optional end labels (from/to) mark the direction, e.g. earlier ... later. */
function stripBox(c,g){const items=g.items,n=Math.min(g.n,items.length);if(!n&&!g.always)return;
 const gap=g.gap??18,pad=g.pad??7,lines=items.map(s=>g.wrap?wrap(s,g.wrap,'bold'):[s]),rows=Math.max(...lines.map(l=>l.length));
 const ws=lines.map(l=>Math.max(...l.map(s=>textWidth(s,'bold')))+2*pad),total=ws.reduce((a,b)=>a+b,0)+gap*(items.length-1),h=rows*LINE+8;
 let x=Math.round((g.x??VIEW_W/2)-total/2);const y=Math.round(g.y);
 if(g.from||g.to){const fw=textWidth(g.from||''),tw=textWidth(g.to||'');frame(c,'slot',x-fw-18,y-3,total+fw+tw+36,h+6);if(g.from)text(c,g.from,x-fw-9,y+h/2-7,{colour:'light'});if(g.to)text(c,g.to,x+total+9,y+h/2-7,{colour:'light'});}
 items.forEach((s,i)=>{const w=ws[i],on=i===g.focusI;if(i<n){c.save();if(i===n-1)c.globalAlpha*=clamp(g.age/.3);frame(c,'slot',x,y,w,h);
   lines[i].forEach((ln,j)=>text(c,ln,x+w/2,y+4+j*LINE+(rows-lines[i].length)*LINE/2,{colour:on?'gold':'light',font:on?'bold':'regular',align:'center'}));c.restore();}
  if(i<n-1)arrowLine(c,x+w+3,y+h/2,x+w+gap-3,y+h/2,1,{colour:GOLD,width:2,head:5});x+=w+gap;});}
/* Boards: factual overlays in UI frames. */
const COIN={q:{v:25,icon:'coin-silver',name:'quarter'},d:{v:10,icon:'coin-silver',name:'dime'},n:{v:5,icon:'coin-silver',name:'nickel'},p:{v:1,icon:'coin-copper',name:'penny'}};
function bigText(c,s,x,y,colour,font='bold'){c.save();c.translate(Math.round(x),Math.round(y));c.scale(2,2);text(c,s,0,0,{colour,font});c.restore();return textWidth(s,font)*2;}
function board(c,o){const pop=clamp(o.age/.3);c.save();c.globalAlpha*=pop;
 if(o.kind==='word'){const base=o.base,suf=o.suffix||'',w=(textWidth(base,'bold')+textWidth(suf,'bold'))*2+28,h=48,x=Math.round((o.x??VIEW_W/2)-w/2),y=Math.round(o.y??12);
  frame(c,'slot',x,y,w,h);const bw=bigText(c,base,x+14,y+6,'light');if(suf)bigText(c,suf,x+14+bw,y+6,'gold');
  if(o.mark){const m=base.slice(-o.mark),mx=x+14+(textWidth(base.slice(0,base.length-o.mark),'bold'))*2,mw=textWidth(m,'bold')*2;c.fillStyle=GOLD;c.fillRect(mx,y+h-9,mw,3);}
  if(o.note)text(c,o.note,x+w/2,y+h+2,{colour:'light',align:'center'});}
 if(o.kind==='coins'){const list=o.coins.map((k,i)=>({k,i})),sorted=[...list].sort((a,b)=>COIN[b.k].v-COIN[a.k].v||a.i-b.i);
  const se=o.ev.filter(e=>e.do==='sort').pop(),u=se?smooth(clamp((o.now-se.t)/(se.dur||1.2))):0,n=o.ev.filter(e=>e.do==='count').reduce((m,e)=>e.n,0);
  const gap=46,w=list.length*gap+20,h=78,x=Math.round((o.x??VIEW_W/2)-w/2),y=Math.round(o.y??190);frame(c,'slot',x,y,w,h);
  let run=0;const totals=sorted.map(e=>run+=COIN[e.k].v);
  list.forEach(e=>{const si=sorted.indexOf(e),px=x+10+lerp(e.i,si,u)*gap,py=y+18;icon(c,COIN[e.k].icon,px+7,py);text(c,`${COIN[e.k].v}¢`,px+23,py+33,{colour:'light',align:'center'});
   if(u>=1&&si<n)text(c,String(totals[si]),px+23,y+2,{colour:'gold',font:'bold',align:'center'});});
  if(o.title)text(c,o.title,x+w/2,y+h+2,{colour:'light',align:'center'});}
 /* items (8 Oct, Middle School in the theater's style, owner #44): rows of pixel-art things, one row per kind, in batches
    side by side. {rows:[{label,atlas,n}], groups, from (batches already on the board, shown at once), totals (each row's
    count written at its end), result:{atlas,label} (one of it under every batch: what each batch makes), x, y, title} */
 if(o.kind==='items'){const G=o.groups||1,step=22,gg=14,lw=Math.max(...o.rows.map(r=>textWidth(r.label,'bold')),o.result?textWidth(o.result.label||'','bold'):0)+16,most=Math.max(...o.rows.map(r=>r.n)),gw=most*step+12,
   rh=44,nr=o.rows.length+(o.result?1:0),tw=o.totals?36:0,w=lw+G*gw+(G-1)*gg+tw+16,h=nr*rh+12+(o.title?LINE+2:0),x=Math.round((o.x??VIEW_W/2)-w/2),y=Math.round(o.y??120);
  frame(c,'slot',x,y,w,h);let yy=y+6;if(o.title){text(c,o.title,x+w/2,yy,{colour:'gold',font:'bold',align:'center'});yy+=LINE+2;}
  const from=o.from||0,seen=(g,k,row)=>g<from||o.age>=.25+((g-from)*most*o.rows.length+row*most+k)*.07,gx=g=>x+8+lw+g*(gw+gg);
  for(let g=1;g<G;g++){const lx=gx(g)-gg/2;c.fillStyle=GOLD;for(let dy=yy+2;dy<yy+nr*rh-4;dy+=6)c.fillRect(Math.round(lx),dy,1,3);}
  o.rows.forEach((r,ri)=>{const by=yy+ri*rh+rh-4;text(c,r.label,x+8,by-rh/2-4,{colour:'light',font:'bold'});
   for(let g=0;g<G;g++)for(let k=0;k<r.n;k++)if(seen(g,k,ri))drawSprite(c,r.atlas,'idle',0,gx(g)+6+k*step+(most-r.n)*step/2,by);
   if(o.totals&&seen(G-1,r.n-1,ri))text(c,String(r.n*G),x+w-8-tw/2,by-rh/2-4,{colour:'gold',font:'bold',align:'center'});});
  if(o.result){const ri=o.rows.length,by=yy+ri*rh+rh-4;c.fillStyle='#ffffff22';c.fillRect(x+6,yy+ri*rh-1,w-12,1);text(c,o.result.label||'',x+8,by-rh/2-4,{colour:'gold',font:'bold'});
   for(let g=0;g<G;g++)if(seen(g,most-1,o.rows.length-1))drawSprite(c,o.result.atlas,'idle',0,gx(g)+gw/2-6,by);}}
 if(o.kind==='bar'){const {goal,saved,unit='$'}=o,w=o.w||300,x=Math.round((o.x??VIEW_W/2)-w/2),y=Math.round(o.y??200),top=o.rest!=null?16:0,h=44+top,iw=w-24,fill=Math.round(iw*saved/goal),by=y+10+top;
  frame(c,'slot',x,y,w,h);c.fillStyle='#d6ae52';c.fillRect(x+12,by,fill,10);c.fillStyle='#3a3530';c.fillRect(x+12+fill,by,iw-fill,10);
  text(c,`saved ${unit}${saved}`,x+12,by+14,{colour:'gold'});text(c,`goal ${unit}${goal}`,x+w-12,by+14,{colour:'light',align:'right'});
  /* rest: true writes the amount still needed over the empty part; a string (e.g. '?') stands in for it, so a Try-it is never answered */
  if(o.rest!=null){c.strokeStyle=GOLD;c.lineWidth=1;c.strokeRect(x+12+fill+.5,by-.5,iw-fill-1,11);text(c,o.rest===true?`${unit}${goal-saved} more`:o.rest==='?'?'more: ?':String(o.rest),x+12+fill+(iw-fill)/2,y+5,{colour:o.rest===true?'gold':'light',font:'bold',align:'center'});}}
 if(o.kind==='table'){const rows=o.rows.map(r=>[...r]);for(const e of o.ev)if(e.do==='cell'&&rows[e.r])rows[e.r][e.c]=e.v;
  const cw=[...(o.colW||o.cols.map((h,j)=>Math.max(textWidth(h,'bold'),...rows.map(r=>textWidth(String(r[j]??''))))+14))],tw0=o.title?textWidth(o.title,'bold')+20:0;if(cw.reduce((a,b)=>a+b,0)+12<tw0)cw[cw.length-1]+=tw0-cw.reduce((a,b)=>a+b,0)-12;const w=cw.reduce((a,b)=>a+b,0)+12,rh=LINE+2,h=(rows.length+1)*rh+12+(o.title?LINE:0);
  const x=Math.round((o.x??VIEW_W/2)-(o.align==='left'?0:w/2)),y=Math.round(o.y??12);frame(c,'slot',x,y,w,h);let yy=y+5;
  if(o.title){text(c,o.title,x+w/2,yy,{colour:'gold',font:'bold',align:'center'});yy+=LINE;}
  let xx=x+6;o.cols.forEach((hd,j)=>{text(c,hd,xx+cw[j]/2,yy,{colour:'gold',font:'bold',align:'center'});xx+=cw[j];});yy+=rh;
  const hi=o.ev.filter(e=>e.do==='cell').pop();rows.forEach((r,i)=>{let x2=x+6;r.forEach((v,j)=>{const on=hi&&hi.r===i&&hi.c===j&&o.now-hi.t<1.2;text(c,String(v??''),x2+cw[j]/2,yy,{colour:on?'gold':'light',font:on?'bold':'regular',align:'center'});x2+=cw[j];});yy+=rh;});}
 c.restore();}

/* Globe: Earth from above the North Pole, the Sun to the left. The half facing the Sun is lit; a marker for
   Oakhaven goes round once per full spin (turn 0..1). Factual diagram, drawn in code inside a UI panel. */
function globeDiagram(c,scene,st){const g=scene.globe;if(!g||!st.globe)return;const {x,y,w,h}=g,r=Math.min(w*.3,h/2-20),cx=x+w*.62,cy=y+h/2;
 if(!frame(c,'panel',x-8,y-8,w+16,h+16))return;
 icon(c,'sun',x+4,cy-16);text(c,'Sun',x+20,cy+16,{colour:'gold',align:'center'});
 c.save();c.fillStyle='#1d2b4a';c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.fill();c.fillStyle='#3f8bc0';c.beginPath();c.arc(cx,cy,r,Math.PI/2,Math.PI*1.5);c.fill();
 c.strokeStyle=CREAM;c.lineWidth=1;c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.stroke();c.restore();
 const a=Math.PI+st.globe.turn*Math.PI*2,mx=cx+Math.cos(a)*(r-5),my=cy-Math.sin(a)*(r-5);
 c.save();c.fillStyle=GOLD;c.fillRect(Math.round(mx)-3,Math.round(my)-3,6,6);c.restore();
 text(c,'day',cx-r*.6,cy+r+1,{colour:'light',align:'center'});text(c,'night',cx+r*.6,cy+r+1,{colour:'light',align:'center'});
 if(g.title)text(c,g.title,x+w/2,y+1,{colour:'gold',align:'center'});}

/* Draw scene time s (beats) at wall time `wall` (loops) into a 640x280 picture context. */
export function drawScene(c,scene,s,{wall=s,rate=1,solve=false}={}){const st=evaluate(scene,s,{rate,wall});
 c.save();c.imageSmoothingEnabled=false;
 c.fillStyle='#253d32';c.fillRect(0,0,VIEW_W,VIEW_H);
 const back=image(scene.stage.map+'.webp'),fore=image(scene.stage.map+'-front.webp'),cam=st.cam;
 const z=cam.z||1,vw=VIEW_W/z,vh=VIEW_H/z;
 if(back.ready)c.drawImage(back.img,cam.x,cam.y,vw,vh,0,0,VIEW_W,VIEW_H);
 c.save();if(z!==1)c.scale(z,z);
 const world=st.actors.filter(a=>a.layer==='world').sort((p,q)=>p.y-q.y||p.z-q.z);
 for(const a of world){if(a.alpha<=0.01)continue;if(a.shadow)drawSprite(c,'theater-shadow',a.shadow===true?'s':a.shadow,0,a.x-cam.x,a.y-cam.y,{alpha:.3*a.alpha});
  drawSprite(c,a.atlas,a.state,a.st,a.x-cam.x,a.y-cam.y,{facing:a.face,alpha:a.alpha});}
 c.restore();if(fore.ready)c.drawImage(fore.img,cam.x,cam.y,vw,vh,0,0,VIEW_W,VIEW_H);c.save();if(z!==1)c.scale(z,z);
 for(const a of st.actors.filter(a=>a.layer==='sky').sort((p,q)=>p.z-q.z)){if(a.alpha<=0.01)continue;drawSprite(c,a.atlas,a.state,a.st,a.x-cam.x,a.y-cam.y,{facing:a.face,alpha:a.alpha});}
 c.restore();
 for(const f of st.fx)drawFx(c,f,wall);
 /* Full-picture colour grade (the one code-made visual rule 0 allows): sun warmth, rain gloom. */
 if(st.grade.warm>0.01){c.save();c.globalAlpha=.16*st.grade.warm;c.fillStyle='#ffc46a';c.fillRect(0,0,VIEW_W,VIEW_H);c.restore();}
 if(st.grade.dark>0.01){c.save();c.globalAlpha=.32*st.grade.dark;c.fillStyle='#1e2a3c';c.fillRect(0,0,VIEW_W,VIEW_H);c.restore();}
 if(st.grade.night>0.01){c.save();c.globalAlpha=.62*st.grade.night;c.fillStyle='#0d1530';c.fillRect(0,0,VIEW_W,VIEW_H);c.restore();}
 /* glow layer: pack light textures and flames drawn over the grade, so lamps shine at night */
 for(const a of st.actors.filter(a=>a.layer==='glow')){if(a.alpha<=0.01)continue;c.save();if(z!==1)c.scale(z,z);if(a.fx==='add')c.globalCompositeOperation='lighter';drawSprite(c,a.atlas,a.state,a.st,a.x-cam.x,a.y-cam.y,{facing:a.face,alpha:a.alpha});c.restore();}
 for(const a of world)if(a.bubble&&a.alpha>.5)bubble(c,{...a,head:scene.cast.find(x=>x.id===a.id)?.head},cam,wall);
 insetMap(c,scene,st);ringDiagram(c,scene,st);globeDiagram(c,scene,st);
 for(const ch of st.chains)chainBox(c,ch);
 for(const g of st.strips)stripBox(c,g);
 for(const o of st.boards)board(c,o);
 for(const l of st.labels)labelBox(c,l,cam,solve,st.actors);
 c.restore();return st;}

/* ---------- checks used by the tests and the scene registry ---------- */
export function validateScene(scene,{atlasExists}={}){const errs=[],ids=new Set(scene.cast.map(c=>c.id));
 if(!scene.id)errs.push('scene has no id');if(!scene.stage?.map||!scene.stage.w||!scene.stage.h)errs.push('scene has no stage map and size');
 if(ids.size!==scene.cast.length)errs.push('cast ids repeat');
 let prev=-Infinity;scene.beats.forEach((b,i)=>{const t=b.at||0;if(t<prev)errs.push(`beat ${i} (${b.do}) at ${t}s is before the beat above it`);prev=t;
  for(const id of selector(scene,b.who))if(!ids.has(id))errs.push(`beat ${i} names unknown actor ${id}`);
  if(b.who&&!selector(scene,b.who).length)errs.push(`beat ${i} selects nobody (${b.who})`);});
 const atlases=new Set([...scene.cast.map(c=>c.atlas),...(scene.fx||[]).map(f=>f.atlas),...scene.beats.filter(b=>b.do==='set'&&b.atlas).map(b=>b.atlas),...itemAtlases(scene)]);
 if(scene.beats.some(b=>b.do==='emote'))atlases.add('theater-emote');if(scene.cast.some(c=>(c.layer||'world')==='world'&&c.shadow!==false))atlases.add('theater-shadow');
 if(atlasExists)for(const a of atlases)if(!atlasExists(a))errs.push(`atlas ${a} does not exist`);
 const parts=scene.beats.filter(b=>b.do==='part').map(b=>b.name);if(new Set(parts).size!==parts.length)errs.push('part names repeat');
 return errs;}
const itemAtlases=scene=>scene.beats.filter(b=>b.do==='items').flatMap(b=>[...b.rows.map(r=>r.atlas),b.result?.atlas].filter(Boolean));
export const atlasesOf=scene=>[...new Set([...itemAtlases(scene),...scene.cast.map(c=>c.atlas),...(scene.cast.some(c=>(c.layer||'world')==='world'&&c.shadow!==false)?['theater-shadow']:[]),...(scene.fx||[]).map(f=>f.atlas),...(scene.beats.some(b=>b.do==='emote')?['theater-emote']:[])])];
