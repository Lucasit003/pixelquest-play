/* Cloud-save sync (accounts-nov1). Local-first: the game always plays from localStorage; a signed-in grown-up adds a
   cloud copy of each learner (ui/profiles.js) in Supabase (core/cloud.js). Nothing here runs while cloud-config.js is empty.

   - Upload: every local save of the active learner (core/save.js setSaveHook) schedules an upload DEBOUNCE_MS later; a
     hidden page or pagehide flushes at once (keepalive when the body is small enough). An upload upserts the learner
     (local_id + nickname) and its save. Once a cloud copy is known, the save is replaced only where its updated_at still
     equals the one this device last saw (updateSave): another device's newer save is never overwritten by a stale one;
     that learner is held and the newer-cloud card asks instead.
   - Reconcile (on sign-in and on each boot while signed in): per learner, compare the cloud row with this device by
     updated_at and a content hash (canonical JSON, since jsonb reorders keys). Cloud-only learners join "Who is playing?".
     A cloud copy that changed and differs from this device raises a card (onNewer); nothing is overwritten silently.
   - Choosing on the card backs up whatever is replaced to localStorage `pixelquest.backup.<time>` (the newest
     MAX_BACKUPS kept; if the backup cannot be written, nothing is replaced). Using the cloud copy for the learner who
     is playing goes through PENDING_KEY and a reload, applied at import time before main.js loads the save, so the
     game's own unload save cannot write the old progress back over it.
   - Offline or failed uploads queue in `pq.sync`.queue ("Will sync when online") and retry on the online event, the
     next save, Sync now or the next boot.
   localStorage: pq.sync = {learners:{[local_id]:{cloudId,name,seen,hash,hold}},queue:[local_id],last:ms} */
import {cloud as defaultCloud} from '../core/cloud.js';
import {KEY,V8_KEY,V7_KEY,VERSION,setSaveHook} from '../core/save.js';
import {readProfiles,addProfile} from './profiles.js';
export const SYNC_KEY='pq.sync',PENDING_KEY='pq.cloudPending',BACKUP_PREFIX='pixelquest.backup.',DEBOUNCE_MS=10000,MAX_BYTES=1000000,MAX_BACKUPS=3;
const SLOT=id=>'pixelquest.profile.'+id;
const L=()=>{try{return globalThis.localStorage||null;}catch{return null;}};
let client=defaultCloud,timer=null,dirty=false,persistFn=null;
export const useCloud=c=>{client=c;};export const currentCloud=()=>client;
export const signedIn=()=>!!(client.on&&client.session());
/* status: idle | syncing | ok | offline | error; listeners redraw the Grown-ups block */
let status={state:'idle',detail:''};const watchers=new Set();
export const syncStatus=()=>({...status,last:meta().last||0,queued:meta().queue.length});
export const onSyncStatus=fn=>{watchers.add(fn);return ()=>watchers.delete(fn);};
const setStatus=(state,detail='')=>{status={state,detail};for(const fn of watchers){try{fn(syncStatus());}catch{}}};
export function meta(){let m=null;try{m=JSON.parse(L()?.getItem(SYNC_KEY)||'null');}catch{}return {last:0,...(m&&typeof m==='object'?m:{}),learners:m?.learners&&typeof m.learners==='object'?m.learners:{},queue:Array.isArray(m?.queue)?m.queue:[]};}
const putMeta=m=>{try{L()?.setItem(SYNC_KEY,JSON.stringify(m));}catch{}};
const editRec=(id,f)=>{const m=meta();m.learners[id]={...m.learners[id],...f};putMeta(m);return m;};
export const clearSync=()=>{try{L()?.removeItem(SYNC_KEY);L()?.removeItem(PENDING_KEY);}catch{}clearTimeout(timer);timer=null;dirty=false;setStatus('idle');};
export function canon(v){if(Array.isArray(v))return '['+v.map(canon).join(',')+']';if(v&&typeof v==='object')return '{'+Object.keys(v).sort().filter(k=>v[k]!==undefined).map(k=>JSON.stringify(k)+':'+canon(v[k])).join(',')+'}';return JSON.stringify(v)??'null';}
export function hashSave(v){const s=canon(v);let h1=0xdeadbeef,h2=0x41c6ce57;for(let i=0;i<s.length;i++){const c=s.charCodeAt(i);h1=Math.imul(h1^c,2654435761);h2=Math.imul(h2^c,1597334677);}
 h1=Math.imul(h1^(h1>>>16),2246822507)^Math.imul(h2^(h2>>>13),3266489909);h2=Math.imul(h2^(h2>>>16),2246822507)^Math.imul(h1^(h1>>>13),3266489909);return (h2>>>0).toString(36)+(h1>>>0).toString(36)+':'+s.length;}
const rawOf=(id,idx=readProfiles())=>{const S=L();if(!S)return null;try{return id===idx.active?S.getItem(KEY)??S.getItem(V8_KEY)??S.getItem(V7_KEY):S.getItem(SLOT(id));}catch{return null;}};
const parse=raw=>{try{return raw?JSON.parse(raw):null;}catch{return null;}};
/* A coarse label for "on <device>": the kind of computer and browser, nothing that identifies a person. */
export function deviceName(nav=globalThis.navigator){const ua=String(nav?.userAgent||'');
 const os=/iPad/.test(ua)||/Macintosh/.test(ua)&&nav?.maxTouchPoints>1?'iPad':/iPhone/.test(ua)?'iPhone':/Android/.test(ua)?'Android':/CrOS/.test(ua)?'Chromebook':/Windows/.test(ua)?'Windows PC':/Mac/.test(ua)?'Mac':/Linux/.test(ua)?'Linux PC':'another device';
 const br=/Edg\//.test(ua)?'Edge':/Firefox\//.test(ua)?'Firefox':/Chrome\//.test(ua)?'Chrome':/Safari\//.test(ua)?'Safari':'';return br?`${os} (${br})`:os;}
const failState=r=>r?.error==='offline'||r?.error==='timeout'?'offline':'error';
function queue(id,r){const m=meta();if(!m.queue.includes(id))m.queue.push(id);putMeta(m);setStatus(failState(r),r?.error||'');return {ok:false,error:r?.error||'server'};}
/* Uploads one learner. held: another device saved since this one last looked; the card decides. */
export async function upload(id,{keepalive=false,retry=true}={}){
 if(!signedIn())return {ok:false,error:'off'};
 const idx=readProfiles(),p=idx.list.find(p=>p.id===id);if(!p){const m=meta();m.queue=m.queue.filter(q=>q!==id);putMeta(m);return {ok:false,error:'gone'};}
 let rec=meta().learners[id]||{};if(rec.hold)return {ok:false,error:'held'};
 const raw=rawOf(id,idx);if(!raw)return {ok:true,skipped:true};
 if(raw.length>MAX_BYTES){setStatus('error','too-big');return {ok:false,error:'too-big'};}
 const data=parse(raw);if(!data)return {ok:false,error:'broken'};
 const h=hashSave(data);if(rec.cloudId&&rec.seen&&rec.hash===h&&!meta().queue.includes(id))return {ok:true,skipped:true};
 setStatus('syncing');
 let cloudId=rec.cloudId;
 if(!cloudId||rec.name!==p.name){const r=await client.upsertLearner({local_id:id,name:p.name},{keepalive});if(!r.ok)return queue(id,r);cloudId=r.data[0].id;}
 const row={learner_id:cloudId,save_version:Number.isInteger(data.version)?data.version:VERSION,data,device:deviceName()};
 const r=rec.seen&&cloudId===rec.cloudId?await client.updateSave(row,rec.seen,{keepalive}):await client.insertSave(row,{keepalive});
 if(r.ok&&Array.isArray(r.data)&&!r.data.length){editRec(id,{cloudId,hold:true});setStatus('ok','held');checkLater?.(id);return {ok:false,error:'held'};}
 if(!r.ok){
  /* the cloud learner was deleted elsewhere: forget its id and make it again, once */
  if(retry&&rec.cloudId&&(r.error==='conflict'||r.status===403||r.status===404)){editRec(id,{cloudId:null,seen:null});return upload(id,{keepalive,retry:false});}
  return queue(id,r);
 }
 const m=editRec(id,{cloudId,name:p.name,seen:r.data?.[0]?.updated_at||null,hash:h,hold:false});m.queue=m.queue.filter(q=>q!==id);m.last=Date.now();putMeta(m);setStatus('ok');return {ok:true};
}
let checkLater=null;
/* Uploads the active learner (if a save happened since) and everything queued. */
export async function flush({keepalive=false}={}){
 clearTimeout(timer);timer=null;if(!signedIn())return {ok:false,error:'off'};
 if(pendingApply())return {ok:false,error:'pending'};
 const ids=new Set(meta().queue);if(dirty)ids.add(readProfiles().active);dirty=false;
 let ok=true;for(const id of ids){const r=await upload(id,{keepalive});if(!r.ok&&r.error!=='held')ok=false;}
 return {ok};
}
export function scheduleUpload(){if(!signedIn())return;dirty=true;clearTimeout(timer);timer=setTimeout(()=>{flush();},DEBOUNCE_MS);timer?.unref?.();}
export function backup(source,id,name,data){
 const S=L();if(!S)return false;
 try{S.setItem(BACKUP_PREFIX+Date.now(),JSON.stringify({source,learner:id,name,at:new Date().toISOString(),data}));}catch{return false;}
 try{const keys=[];for(let i=0;i<S.length;i++){const k=S.key(i);if(k?.startsWith(BACKUP_PREFIX))keys.push(k);}keys.sort((a,b)=>+a.slice(BACKUP_PREFIX.length)-+b.slice(BACKUP_PREFIX.length)).slice(0,-MAX_BACKUPS).forEach(k=>S.removeItem(k));}catch{}
 return true;
}
const pendingApply=()=>parse((()=>{try{return L()?.getItem(PENDING_KEY);}catch{return null;}})());
/* Runs at import time, before main.js loads the save: the cloud copy chosen on the card becomes the playing learner's save. */
export function applyPending(){
 const S=L(),p=pendingApply();if(!S||!p)return false;
 try{S.removeItem(PENDING_KEY);if(p.id!==readProfiles().active||!p.data)return false;S.setItem(KEY,JSON.stringify(p.data));return true;}catch{return false;}
}
applyPending();
/* The card's two answers. Neither runs without a backup of what it replaces. */
export function useCloudCopy(card,{reload=()=>globalThis.location?.reload()}={}){
 const idx=readProfiles(),cur=parse(rawOf(card.local_id,idx));
 if(cur&&!backup('device',card.local_id,card.name,cur))return {ok:false,error:'backup'};
 editRec(card.local_id,{cloudId:card.cloudId,seen:card.updated_at,hash:hashSave(card.data),hold:false});
 const m=meta();m.queue=m.queue.filter(q=>q!==card.local_id);putMeta(m);
 try{if(card.local_id===idx.active){L().setItem(PENDING_KEY,JSON.stringify({id:card.local_id,data:card.data}));dirty=false;clearTimeout(timer);reload();}
  else L().setItem(SLOT(card.local_id),JSON.stringify(card.data));}catch{return {ok:false,error:'storage'};}
 return {ok:true,reloading:card.local_id===idx.active};
}
export async function keepDeviceCopy(card){
 if(!backup('cloud',card.local_id,card.name,card.data))return {ok:false,error:'backup'};
 editRec(card.local_id,{cloudId:card.cloudId,seen:card.updated_at,hold:false,hash:null});
 return upload(card.local_id);
}
/* Compares every learner here with the cloud; uploads what only this device has or changed, brings down cloud-only
   learners, and returns the cards for cloud copies that are newer and different. */
export async function reconcile({onNewer}={}){
 if(!signedIn())return {ok:false,error:'off'};
 setStatus('syncing');
 const [lr,sr]=await Promise.all([client.learners(),client.saves()]);
 if(!lr.ok||!sr.ok){setStatus(failState(lr.ok?sr:lr),(lr.ok?sr:lr).error);return {ok:false,error:(lr.ok?sr:lr).error};}
 const idx=readProfiles(),saves=new Map((sr.data||[]).map(r=>[r.learner_id,r])),inCloud=new Set(),added=[],cards=[],ups=[];
 for(const row of lr.data||[]){
  const sv=saves.get(row.id),local=idx.list.find(p=>p.id===row.local_id);
  const m=meta(),rec=m.learners[row.local_id]||{};if(rec.cloudId!==row.id){editRec(row.local_id,{cloudId:row.id,seen:null,hash:null});rec.seen=null;}
  if(!sv)continue;inCloud.add(row.local_id);
  const raw=local?rawOf(local.id,idx):null,mine=parse(raw),mh=mine?hashSave(mine):null;
  if(local&&rec.seen&&rec.seen===sv.updated_at){if(mh&&mh!==rec.hash)ups.push(local.id);continue;}
  const d=await client.saveData(row.id),cr=d.ok&&d.data?.[0];if(!cr)continue;
  const ch=hashSave(cr.data);
  if(!local){addProfile(row.name,row.local_id);try{L().setItem(SLOT(row.local_id),JSON.stringify(cr.data));}catch{continue;}editRec(row.local_id,{cloudId:row.id,name:row.name,seen:cr.updated_at,hash:ch,hold:false});added.push(row.name);continue;}
  if(!mine||ch===mh){if(!mine&&local.id!==idx.active)try{L().setItem(SLOT(local.id),JSON.stringify(cr.data));}catch{}editRec(local.id,{seen:cr.updated_at,hash:ch,hold:false});if(!mine&&local.id===idx.active)cards.push({local_id:local.id,name:local.name,cloudId:row.id,updated_at:cr.updated_at,device:cr.device||'',data:cr.data});continue;}
  editRec(local.id,{hold:true});cards.push({local_id:local.id,name:local.name,cloudId:row.id,updated_at:cr.updated_at,device:cr.device||'',data:cr.data});
 }
 for(const p of idx.list)if(!inCloud.has(p.id)&&rawOf(p.id,idx))ups.push(p.id);
 let failed=0;for(const id of new Set(ups))if(!(await upload(id)).ok)failed++;
 if(!failed){const m=meta();m.last=Date.now();putMeta(m);setStatus('ok');}
 for(const c of cards)onNewer?.(c);
 return {ok:!failed,added,cards,uploaded:ups.length-failed};
}
/* Wiring, once per page: save hook, page hide, back online, and a reconcile on boot when signed in. */
let wired=false;
export function initSync({persist,onNewer}={}){
 persistFn=persist||null;checkLater=id=>reconcile({onNewer});
 if(wired)return;wired=true;
 setSaveHook(()=>scheduleUpload());
 const w=globalThis.window,d=globalThis.document;
 const hide=()=>{if(!signedIn()||pendingApply())return;try{persistFn?.();}catch{}flush({keepalive:true});};
 w?.addEventListener?.('pagehide',hide);d?.addEventListener?.('visibilitychange',()=>{if(d.hidden)hide();});
 w?.addEventListener?.('online',()=>{if(signedIn()&&meta().queue.length)flush();});
 if(signedIn())Promise.resolve().then(()=>reconcile({onNewer}));
}
