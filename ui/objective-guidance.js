// A quiet direction cue for the opening study/adventure loop. nextStep remains the
// objective source of truth; this draws no route, changes no gates, and writes no save.
import {nextStep,nextPower} from '../game/next-step.js?v=room-context-2';
import {hubReady,hubState,hubGuidanceTarget,hubPlacing} from '../scenes/town.js';
import {icon} from './icons.js';

const EARLY_STEPS=new Set(['prologue','first-lesson','goblin-camp','start-lesson','quiz','practice','level-e2','level-up','earn-power']);
/* 25 Oct: a villager quest's town errand (talk to Hob, meet Wil at the Barracks) gets the arrow too */
export const tutorialGuidance=step=>EARLY_STEPS.has(step?.id)||/^quest-/.test(step?.id||'')&&['npc','building'].includes(step?.target?.kind);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const intersects=(a,b)=>a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;

/** Pure CSS-pixel placement, relative to the stage's padding box. The camera is the
 * actual rectangle returned by drawHub, including room-edge clamping. The up-arrow's
 * angle is measured from its placed center to the goal, after HUD avoidance. */
export function guidancePlacement({player,target,camera,viewport,obstacles=[],width=156,height=58,inset=14,edgeLabel={width:0,height:0}}){
 if(!player||!target||target.arrived||!camera?.width||!camera?.height||!viewport?.width||!viewport?.height)return null;
 const sx=viewport.width/camera.width,sy=viewport.height/camera.height;
 const project=p=>({x:viewport.left+(p.x-camera.x+camera.width/2)*sx,y:viewport.top+(p.y-camera.y+camera.height/2)*sy});
 const p=project(player),goal=project(target.aim||target),dx=goal.x-p.x,dy=goal.y-p.y,d=Math.hypot(dx,dy);
 if(!Number.isFinite(d)||d<1)return null;
 const edge={left:viewport.left+inset,right:viewport.left+viewport.width-inset,top:viewport.top+inset,bottom:viewport.top+viewport.height-inset};
 const offscreen=goal.x<edge.left||goal.x>edge.right||goal.y<edge.top||goal.y>edge.bottom;
 if(offscreen){
  const cx=(edge.left+edge.right)/2,cy=(edge.top+edge.bottom)/2,rx=goal.x-cx,ry=goal.y-cy,tx=rx?((rx>0?edge.right:edge.left)-cx)/rx:Infinity,ty=ry?((ry>0?edge.bottom:edge.top)-cy)/ry:Infinity,k=Math.min(tx>0?tx:Infinity,ty>0?ty:Infinity);
  /* polish4-oct27 (new-player playtest): the edge chip was a 36 px icon a child missed; it is now 52 px and names the place under it
     (above it in the lower half), and the chip and its name together stay inside the view and clear of the HUD */
  const x=cx+rx*k,y=cy+ry*k,size=52,lw=Math.max(size,edgeLabel.width||0),lh=edgeLabel.height?edgeLabel.height+4:0,below=y<cy,hx=lw/2,top=size/2+(below?0:lh),bottom=size/2+(below?lh:0);
  const fit=v=>({x:clamp(v.x,edge.left+hx,edge.right-hx),y:clamp(v.y,edge.top+top,edge.bottom-bottom)}),base=fit({x,y}),box=v=>({left:v.x-hx,top:v.y-top,right:v.x+hx,bottom:v.y+bottom});
  /* Slide along the edge until the chip clears the HUD (playtest 14 Oct: with the goal behind the minimap and
     hotbar corner, four fixed offsets all collided and the arrow vanished). */
  const spots=[base];for(let step=36;step<=720;step+=36)for(const delta of [-step,step]){spots.push(fit({x:base.x+delta,y:base.y}));spots.push(fit({x:base.x,y:base.y+delta}));}
  const free=v=>!obstacles.some(o=>intersects(box(v),o));
  /* exploit4-oct27: on a phone the dialogue box (bottom middle) and the action buttons (right) block every straight slide,
     so the chip vanished during Home's opening line; only then try diagonal steps too, nearest first */
  let spot=spots.find(free);
  if(!spot){const diag=[];for(let dy=36;dy<=360;dy+=36)for(let dx=36;dx<=720;dx+=36)for(const [a,b] of [[-dx,-dy],[dx,-dy],[-dx,dy],[dx,dy]])diag.push(fit({x:base.x+a,y:base.y+b}));
   spot=diag.sort((p,q)=>Math.hypot(p.x-base.x,p.y-base.y)-Math.hypot(q.x-base.x,q.y-base.y)).find(free);}
  if(!spot)return null;
  return{left:Math.round(spot.x-size/2),top:Math.round(spot.y-size/2),width:size,height:size,angle:Math.atan2(goal.y-spot.y,goal.x-spot.x)*180/Math.PI+90,edge:true,labelAbove:!below};
 }
 const limits={left:viewport.left+inset,right:viewport.left+viewport.width-inset-width,top:viewport.top+inset,bottom:viewport.top+viewport.height-inset-height};
 if(limits.right<limits.left||limits.bottom<limits.top)return null;
 const desired={x:p.x+dx/d*78-width/2,y:p.y+dy/d*78-16};
 const candidates=[desired];
 for(const radius of [64,112,164])for(let i=0;i<16;i++){
  const a=i*Math.PI/8;candidates.push({x:p.x+Math.cos(a)*radius-width/2,y:p.y+Math.sin(a)*radius-16});
 }
 // A few interior positions cover a small viewport whose HUD occupies both corners.
 for(const x of [0,.25,.5,.75,1])for(const y of [0,.25,.5,.75,1])candidates.push({x:limits.left+x*(limits.right-limits.left),y:limits.top+y*(limits.bottom-limits.top)});
 let best=null,score=Infinity;
 for(const point of candidates){
  const left=clamp(point.x,limits.left,limits.right),top=clamp(point.y,limits.top,limits.bottom);
  const box={left:left-6,right:left+width+6,top:top-6,bottom:top+height+6};
  if(obstacles.some(r=>intersects(box,r)))continue;
  const distance=(left-desired.x)**2+(top-desired.y)**2;
  if(distance<score){score=distance;best={left:Math.round(left),top:Math.round(top),width,height};}
 }
 if(!best)return null;
 best.angle=Math.atan2(goal.y-(best.top+16),goal.x-(best.left+width/2))*180/Math.PI+90;
 return best;
}

const CSS=`
.objective-guide{position:absolute;z-index:2;width:max-content;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center;contain:layout style;animation:objective-guide-bob 1.1s steps(2,end) infinite}
.objective-guide[hidden]{display:none!important}
.objective-guide .ico{transform-origin:center;filter:drop-shadow(1px 2px 0 #130d09)}
.objective-guide.edge{width:52px;height:52px;box-sizing:border-box;justify-content:center;background:#17203b;border:3px solid #e8be62;box-shadow:2px 2px 0 #100d15;image-rendering:pixelated}
.objective-guide.edge .ico{width:34px;height:34px}
.objective-guide.edge .objective-guide-label{position:absolute;left:50%;top:calc(100% + 4px);transform:translateX(-50%);padding:1px 8px;font-size:14px}
.objective-guide.edge.label-above .objective-guide-label{top:auto;bottom:calc(100% + 4px)}
.objective-guide-label{max-width:none;white-space:nowrap;box-sizing:border-box;padding:3px 10px;color:#fff1c8;font:700 16px/1.05 var(--ui, sans-serif);text-shadow:1px 1px 0 #120c08;border:4px solid transparent;border-image:url("${new URL('./skin/pl-plate.png',import.meta.url)}") 8 8 8 8 fill/9px round}
@keyframes objective-guide-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
@media(prefers-reduced-motion:reduce){.objective-guide{animation:none}}
:root[data-motion="reduced"] .objective-guide{animation:none}
`;
/* first-hour playtest 24 Oct: the keyboard bar along the bottom was missing, so an edge arrow sat on top of its keycaps */
const HUD='.hero-hud,.hud-sub,#objective,#map-btn,#hotbar,#next-unlock,#prompt span,.dpad,.touch-actions,#toast.show,#keyboard-actions,#ui-dialogue.show';
/* exploit4-oct27: the open dialogue box is an obstacle too (the edge chip and its name sat under Home's opening line and Wil's Barracks line) */

/** Call update after drawWorld so world.camera is current; hide before the map's
 * early-return branch. Layout and objective work are capped at 10 Hz, never per frame. */
export function createObjectiveGuidance({stage,canvas,getStep=nextStep,getTarget=hubGuidanceTarget,ready=hubReady,isPlacing=hubPlacing}={}){
 const doc=stage?.ownerDocument;
 if(!doc||!canvas)return {update(){},hide(){},destroy(){}};
 let style=doc.getElementById('objective-guide-style');
 if(!style){style=doc.createElement('style');style.id='objective-guide-style';style.textContent=CSS;doc.head.append(style);}
 const el=doc.createElement('div');el.className='objective-guide';el.hidden=true;
 el.innerHTML=icon('up')+'<span class="objective-guide-label"></span>';
 el.setAttribute('role','img');stage.append(el);
 const arrow=el.querySelector('.ico'),label=el.querySelector('.objective-guide-label');
 let last=-Infinity;
 const hide=()=>{el.hidden=true;};
 return {element:el,hide,destroy(){el.remove();},update({world,save,now=0,blocked=false,point=null}={}){
  if(blocked||!save?.started||!world||world.paused||world.level||world.zone!=='town'||!ready()||isPlacing()||doc.querySelector('dialog[open]')){hide();return;}
  if(now-last<100)return;last=now;
  /* oct25-followups2: during the controls tutorial's "use something" step, the arrow points at the closest usable thing instead */
  const step=point?{text:'Try using '+point.label}:getStep(save,{room:hubState().room});
  if(!point&&!tutorialGuidance(step)){hide();return;}
  const target=point?{...point,label:point.label}:getTarget(step.target,nextPower(save)?.subject);
  if(!target||target.arrived){hide();return;}
  const r=canvas.getBoundingClientRect(),sr=stage.getBoundingClientRect();
  if(!r.width||!r.height){hide();return;}
  label.textContent='This way: '+target.label;el.setAttribute('aria-label',`This way: ${target.label}. ${step.text}`);
  el.hidden=false;
  const offset={x:sr.left+(stage.clientLeft||0),y:sr.top+(stage.clientTop||0)};
  const viewport={left:r.left-offset.x,top:r.top-offset.y,width:r.width,height:r.height};
  const obstacles=[...stage.querySelectorAll(HUD)].filter(n=>!n.hidden).map(n=>n.getBoundingClientRect()).filter(r=>r.width&&r.height)
   .map(r=>({left:r.left-offset.x,top:r.top-offset.y,right:r.right-offset.x,bottom:r.bottom-offset.y}));
  /* The ornate frame covers 13*u inside the canvas; keep the whole label inside the visible world. */
  const unit=parseFloat(doc.defaultView?.getComputedStyle(stage).getPropertyValue('--u'))||1;
  const inset=doc.documentElement.classList.contains('m-mode')?14:Math.max(14,13*unit+4);
  const edgeLabel=el.classList.contains('edge')?{width:label.offsetWidth||150,height:label.offsetHeight||24}:{width:150,height:24};
  const at=guidancePlacement({player:world.player,target,camera:world.camera,viewport,obstacles,width:el.classList.contains('edge')?156:el.offsetWidth||156,height:el.classList.contains('edge')?58:el.offsetHeight||58,inset,edgeLabel});
  if(!at){hide();return;}
  el.classList.toggle('edge',!!at.edge);el.classList.toggle('label-above',!!at.labelAbove);
  el.style.left=`${at.left}px`;el.style.top=`${at.top}px`;arrow.style.transform=`rotate(${at.angle}deg)`;
 }};
}
