/* Local learner profiles (v2:ui) for shared family and classroom devices. No accounts, no server:
   each profile's save lives in this browser under its own key, and the active one is copied into
   the game's save key (core/save.js KEY) before main.js reads it.

   How a switch works: switchProfile(id) stores the current save in the active profile's slot,
   marks the target as pending in sessionStorage and reloads. This module is imported by
   ui/index.js, which main.js imports, so its top level runs BEFORE main.js calls load(): it swaps
   the pending profile's save into KEY there, and main.js boots straight into that learner.

   localStorage: pixelquest.profiles = {active, list:[{id, name}]}, pixelquest.profile.<id> = save JSON. */
import {KEY,V8_KEY,V7_KEY,fresh} from '../core/save.js';
import {CLASSES} from '../game/data.js';
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
/* improve20-r14a-nov3 #7 (audit11 b15): the device's first learner kept the default "Player 1" beside "Leo". A profile still on its default
   name ("Player N", never typed by anyone: `named` marks a typed name) takes its save's hero name once one is typed (not the bare class
   name). nameFromHero runs when a game begins; fixDefaultNames runs once at import for profiles made before this. */
const DEFAULT_NAME=/^Player \d+$/;
const heroNameOf=v=>{let sv=v;try{if(typeof v==='string')sv=JSON.parse(v);}catch{return '';}const n=String(sv?.heroNames?.[sv?.hero]||'').trim().slice(0,20);return n&&!Object.values(CLASSES).some(c=>c.name===n)?n:'';};
const isDefault=p=>!!p&&!p.named&&DEFAULT_NAME.test(String(p.name||''));
/* improve20-r16a-nov3 #10: the title's hero-name field pre-fills a typed profile name, never a "Player N" */
export const isDefaultProfile=isDefault;
export function nameFromHero(save,id){const idx=readProfiles(),p=idx.list.find(x=>x.id===(id||idx.active));if(!isDefault(p))return false;const n=heroNameOf(save);if(!n)return false;p.name=n;writeProfiles(idx);return true;}
export function fixDefaultNames(){const L=ls();if(!L)return 0;const idx=readProfiles();let n=0;for(const p of idx.list){if(!isDefault(p))continue;let raw=null;try{raw=p.id===idx.active?activeRaw(L):L.getItem(SLOT(p.id));}catch{}const h=raw&&heroNameOf(raw);if(h){p.name=h;n++;}}if(n)writeProfiles(idx);return n;}
export function activeProfile(){const idx=readProfiles();return idx.list.find(p=>p.id===idx.active)||idx.list[0];}
/* What the picker shows for a profile: hero and level from its stored save, if any. */
export function profileSummary(id){
 const L=ls(),idx=readProfiles();let raw=null;
 try{raw=L&&(id===idx.active?activeRaw(L):L.getItem(SLOT(id)));}catch{}
 try{const s=raw?JSON.parse(raw):null;return s?{hero:s.hero,level:s.level||1,started:!!s.started}:{hero:null,level:1,started:false};}catch{return {hero:null,level:1,started:false};}
}
try{fixDefaultNames();}catch{}
/* Runs at import time, before main.js loads the save. */
(function applyPending(){
 const L=ls(),S=ss();if(!L||!S)return;
 const want=S.getItem(PENDING);if(!want)return;S.removeItem(PENDING);
 const idx=readProfiles();if(!idx.list.some(p=>p.id===want)||want===idx.active)return;
 try{
  const cur=activeRaw(L);if(cur)L.setItem(SLOT(idx.active),cur);
  /* An explicit fresh v5 save prevents load() from falling back to another learner's global rollback keys. */
  const next=L.getItem(SLOT(want));L.setItem(KEY,next??JSON.stringify(fresh()));
  /* improve20-r20m-nov4 #3: the learner switched away from is stamped `played` (ms), so the picker can lead with the last one played */
  const was=idx.list.find(p=>p.id===idx.active);if(was)was.played=Date.now();
  idx.active=want;writeProfiles(idx);
 }catch{}
})();
export function switchProfile(id,{persist}={}){
 const L=ls(),S=ss(),idx=readProfiles();if(!L||!S||id===idx.active)return false;
 try{persist?.();const cur=L.getItem(KEY);if(cur)L.setItem(SLOT(idx.active),cur);}catch{}
 S.setItem(PENDING,id);globalThis.location?.reload();return true;
}
/* id: only for a learner brought down from the grown-up's cloud saves (ui/account-sync.js), which keeps its id from the device that made it. */
export function addProfile(name,id){
 const idx=readProfiles(),clean=String(name||'').trim().slice(0,20)||`Player ${idx.list.length+1}`;
 if(id&&idx.list.some(p=>p.id===id))return idx.list.find(p=>p.id===id);
 const p={id:id&&/^[\w-]{1,64}$/.test(id)?id:uid(),name:clean,...(String(name||'').trim()?{named:true}:{})};idx.list.push(p);writeProfiles(idx);return p;
}
export function renameProfile(id,name){const idx=readProfiles(),p=idx.list.find(p=>p.id===id);if(!p)return false;p.name=String(name||'').trim().slice(0,20)||p.name;if(String(name||'').trim())p.named=true;writeProfiles(idx);return true;}
/* Never deletes the active learner (switch first), and never the last one. */
export function deleteProfile(id){
 const idx=readProfiles();if(id===idx.active||idx.list.length<2)return false;
 idx.list=idx.list.filter(p=>p.id!==id);writeProfiles(idx);try{ls()?.removeItem(SLOT(id));}catch{}return true;
}
/* improve20-r8c-nov1 #2 (audit7 d14): two kids on one device. With two or more learners, Continue first asks "Who is playing?"
   (ui/profiles-screen.js openWhoPlays). Picking another learner switches (a reload) and marks it here in sessionStorage, so the title
   that boots next carries straight on as that learner: one tap, never a second question. The mark only counts for the learner it names. */
const AUTO='pixelquest.autoContinue';
export const needsWhoPlays=()=>readProfiles().list.length>=2;
export function markAutoContinue(id){try{ss()?.setItem(AUTO,id);}catch{}}
export function takeAutoContinue(){const S=ss();if(!S)return false;let v=null;try{v=S.getItem(AUTO);S.removeItem(AUTO);}catch{}return !!v&&v===readProfiles().active;}
/* the learner's stored save as text (for "Export this save first"), or null */
export function profileRaw(id){const L=ls(),idx=readProfiles();try{return L?(id===idx.active?activeRaw(L):L.getItem(SLOT(id))):null;}catch{return null;}}
/* the grown-up check for Remove: the learner's name typed again (case and outer spaces do not matter) */
export const nameMatches=(name,typed)=>String(typed??'').trim().toLowerCase()===String(name??'').trim().toLowerCase()&&String(typed??'').trim().length>0;
