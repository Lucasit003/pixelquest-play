/* Local learner profiles (v2:ui) for shared family and classroom devices. No accounts, no server:
   each profile's save lives in this browser under its own key, and the active one is copied into
   the game's save key (core/save.js KEY) before main.js reads it.

   How a switch works: switchProfile(id) stores the current save in the active profile's slot,
   marks the target as pending in sessionStorage and reloads. This module is imported by
   ui/index.js, which main.js imports, so its top level runs BEFORE main.js calls load(): it swaps
   the pending profile's save into KEY there, and main.js boots straight into that learner.

   localStorage: pixelquest.profiles = {active, list:[{id, name}]}, pixelquest.profile.<id> = save JSON. */
import {KEY,V8_KEY,V7_KEY,fresh} from '../core/save.js';
/* the active save may still sit under an older key until the first v9 write */
const activeRaw=L=>L.getItem(KEY)??L.getItem(V8_KEY)??L.getItem(V7_KEY);
const INDEX='pixelquest.profiles',SLOT=id=>'pixelquest.profile.'+id,PENDING='pixelquest.pendingProfile';
const ls=()=>{try{return globalThis.localStorage||null;}catch{return null;}};
const ss=()=>{try{return globalThis.sessionStorage||null;}catch{return null;}};
const uid=()=>Math.random().toString(36).slice(2,8);
export function readProfiles(){
 const L=ls();if(!L)return {active:null,list:[]};
 let idx=null;try{idx=JSON.parse(L.getItem(INDEX)||'null');}catch{}
 if(!idx||!Array.isArray(idx.list)||!idx.list.length){idx={active:'p1',list:[{id:'p1',name:'Player 1'}]};try{L.setItem(INDEX,JSON.stringify(idx));}catch{}}
 if(!idx.list.some(p=>p.id===idx.active))idx.active=idx.list[0].id;
 return idx;
}
const writeProfiles=idx=>{try{ls()?.setItem(INDEX,JSON.stringify(idx));}catch{}};
export function activeProfile(){const idx=readProfiles();return idx.list.find(p=>p.id===idx.active)||idx.list[0];}
/* What the picker shows for a profile: hero and level from its stored save, if any. */
export function profileSummary(id){
 const L=ls(),idx=readProfiles();let raw=null;
 try{raw=L&&(id===idx.active?activeRaw(L):L.getItem(SLOT(id)));}catch{}
 try{const s=raw?JSON.parse(raw):null;return s?{hero:s.hero,level:s.level||1,started:!!s.started}:{hero:null,level:1,started:false};}catch{return {hero:null,level:1,started:false};}
}
/* Runs at import time, before main.js loads the save. */
(function applyPending(){
 const L=ls(),S=ss();if(!L||!S)return;
 const want=S.getItem(PENDING);if(!want)return;S.removeItem(PENDING);
 const idx=readProfiles();if(!idx.list.some(p=>p.id===want)||want===idx.active)return;
 try{
  const cur=activeRaw(L);if(cur)L.setItem(SLOT(idx.active),cur);
  /* An explicit fresh v5 save prevents load() from falling back to another learner's global rollback keys. */
  const next=L.getItem(SLOT(want));L.setItem(KEY,next??JSON.stringify(fresh()));
  idx.active=want;writeProfiles(idx);
 }catch{}
})();
export function switchProfile(id,{persist}={}){
 const L=ls(),S=ss(),idx=readProfiles();if(!L||!S||id===idx.active)return false;
 try{persist?.();const cur=L.getItem(KEY);if(cur)L.setItem(SLOT(idx.active),cur);}catch{}
 S.setItem(PENDING,id);globalThis.location?.reload();return true;
}
export function addProfile(name){
 const idx=readProfiles(),clean=String(name||'').trim().slice(0,20)||`Player ${idx.list.length+1}`;
 const p={id:uid(),name:clean};idx.list.push(p);writeProfiles(idx);return p;
}
export function renameProfile(id,name){const idx=readProfiles(),p=idx.list.find(p=>p.id===id);if(!p)return false;p.name=String(name||'').trim().slice(0,20)||p.name;writeProfiles(idx);return true;}
/* Never deletes the active learner (switch first), and never the last one. */
export function deleteProfile(id){
 const idx=readProfiles();if(id===idx.active||idx.list.length<2)return false;
 idx.list=idx.list.filter(p=>p.id!==id);writeProfiles(idx);try{ls()?.removeItem(SLOT(id));}catch{}return true;
}
