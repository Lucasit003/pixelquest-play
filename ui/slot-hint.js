/* improve20-p-oct31 #1: a press on an empty or locked ability slot used to drop the big centre toast ("Study at the Library to unlock
   and equip abilities.") over the hero mid-fight, queued behind the level's own toasts so it often came seconds late. It is now a
   small hint anchored by that hotbar slot, in plain words: what fills it, and what that needs. Pure: main.js measures the page and
   owns the element; these only build the words, pick a spot clear of the hero and rate-limit repeats. Never unlocks anything. */
import {ABILITIES} from '../game/abilities.js';
import {SUBJECTS} from '../game/data.js';
import {unlocked,xpLevel} from '../game/math.js';
import {activeLoadout,awakened} from '../academics/awakening.js';
import {lessonsToUnlock,finishLine} from '../academics/study-unlock.js';

/* What an ability still needs, as one short line: "Reach hero level 6 + master 2 more Math topics". */
export function needLine(save,a){
 const lv=xpLevel(a),levelLeft=(save.level||1)<lv,l=lessonsToUnlock(save,a),sub=SUBJECTS[a.subject]?.name||a.subject,parts=[];
 if(levelLeft)parts.push(`${parts.length?'reach':'Reach'} hero level ${lv}`);
 const fin=l.lessons>0&&finishLine(save,a,l);/* improve20-r7c-nov1 #3: a topic under way is named */
 if(fin)parts.push(parts.length?fin[0].toLowerCase()+fin.slice(1):fin);
 else if(l.lessons>0&&l.reachable)parts.push(`${parts.length?'master':'Master'} ${l.lessons} more ${sub} topic${l.lessons===1?'':'s'}`);
 else if(!l.reachable)parts.push(`${parts.length?'keep':'Keep'} studying ${sub}`);
 return parts.join(' + ');}
/* The locked ability the hero is closest to: fewest topics to master, then the lowest hero level (main.js nextUnlock's order). */
export function nextLocked(save,hero=save.hero){
 return (ABILITIES[hero]||[]).filter(a=>!unlocked(save,a)).map(a=>({a,t:lessonsToUnlock(save,a)}))
  .sort((x,y)=>(x.t.reachable?0:1)-(y.t.reachable?0:1)||x.t.lessons-y.t.lessons||xpLevel(x.a)-xpLevel(y.a)||x.a.gate-y.a.gate)[0]?.a||null;}
/* {title, line} for a press on slot i, or null when the slot holds a usable ability. */
export function slotHintText(save,slot,hero=save.hero){
 const list=ABILITIES[hero]||[],stored=save.loadouts?.[hero]?.[slot],held=list.find(a=>a.id===stored),ids=activeLoadout(save,hero);
 if(ids[slot]&&held&&unlocked(save,held))return null;
 if(!awakened(save))return {title:'No ability yet',line:'Finish a Library lesson to wake your first one'};
 if(held&&ids[slot]&&!unlocked(save,held))return {title:`${held.name} is locked`,line:needLine(save,held)};
 const spare=list.filter(a=>unlocked(save,a)&&!ids.includes(a.id));
 if(spare.length)return {title:'Empty slot',line:spare.length===1?`Equip ${spare[0].name} at Home`:'Equip an ability at Home'};
 const next=nextLocked(save,hero);
 return next?{title:`Next: ${next.name}`,line:needLine(save,next)}:{title:'Empty slot',line:'Equip an ability at Home'};}
/* Repeats: the words show again only after GAP ms, and at most CAP times a level (or a town visit); a press in between only
   shakes the slot. */
export const SLOT_HINT={ms:2600,gap:4000,cap:3};
export function slotHintDue(state,slot,now,scene){
 if(state.scene!==scene){state.scene=scene;state.shows=0;state.at={};}
 if(state.shows>=SLOT_HINT.cap||now-(state.at[slot]??-1e9)<SLOT_HINT.gap)return false;
 state.at[slot]=now;state.shows++;return true;}
/* Where the hint goes, in px of the stage: centred above the anchor (a slot's top centre), kept inside the stage, and slid sideways
   (or, failing that, lifted) until it clears every box in `avoid` (the hero's on-screen box, the bottom ability tip). */
const hit=(a,b)=>a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;
export function placeSlotHint({anchor,size,stage,avoid=[],gap=10,pad=8}){
 const clampX=x=>Math.max(pad,Math.min(stage.w-size.w-pad,x)),top0=Math.max(pad,anchor.top-gap-size.h),box=(left,top)=>({left,top,right:left+size.w,bottom:top+size.h});
 const want=clampX(anchor.x-size.w/2),xs=[want];
 for(const o of avoid){xs.push(clampX(o.left-8-size.w),clampX(o.right+8));}
 const clear=(l,t)=>!avoid.some(o=>hit(box(l,t),o));
 /* the caret must still reach the slot: a sideways slide keeps the anchor under the box */
 const reach=l=>anchor.x>=l+10&&anchor.x<=l+size.w-10;
 const near=xs.filter(l=>reach(l)&&clear(l,top0)).sort((a,b)=>Math.abs(a-want)-Math.abs(b-want))[0];
 if(near!==undefined)return {left:Math.round(near),top:Math.round(top0),caret:Math.round(anchor.x-near)};
 /* lifted: the lowest spot above whatever it would cover, so it stays as near the slot as it can */
 const lift=avoid.map(o=>o.top-8-size.h).filter(t=>t>=pad&&t<top0&&clear(want,t)).sort((a,b)=>b-a)[0];
 if(lift!==undefined)return {left:Math.round(want),top:Math.round(lift),caret:null};
 return {left:Math.round(want),top:Math.round(top0),caret:Math.round(anchor.x-want)};}
