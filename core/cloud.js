/* Cloud client (accounts-nov1): a small fetch wrapper for Supabase Auth (GoTrue) and REST (PostgREST). No supabase-js.
   - Grown-ups sign in with an emailed 6-digit code: POST /auth/v1/otp {email,create_user:true}, then POST /auth/v1/verify
     {type:'email',email,token}. The session lives in localStorage `pq.account` = {access_token,refresh_token,expires_at (ms),
     user:{id,email}}, where email is stored MASKED ("p•••@gmail.com"): the full address is never written to this device.
   - The access token is refreshed (POST /auth/v1/token?grant_type=refresh_token) when it has under REFRESH_EARLY ms left;
     refresh tokens rotate, and only one refresh runs at a time. A refresh the server refuses (4xx) signs out cleanly; local
     saves are never touched by anything here.
   - REST: upsert/select of `learners` and `saves`, and rpc/delete_my_account. The client never sends `owner`: the
     database default (auth.uid()) fills it and row-level security checks it (supabase/migrations).
   - Every call times out (TIMEOUT_MS), never throws, and resolves {ok,status,data,error} with error one of off, offline,
     timeout, rate, code, auth, conflict, server. With an empty cloud-config.js `on` is false and nothing touches the network. */
import {SUPABASE_URL,SUPABASE_ANON_KEY} from './cloud-config.js';
export const SESSION_KEY='pq.account',REFRESH_EARLY=120000,TIMEOUT_MS=12000,CODE_LIFE_MS=15*60000;
const lsOf=()=>{try{return globalThis.localStorage||null;}catch{return null;}};
export const maskEmail=e=>{const m=/^([^@\s])[^@\s]*@([^@\s]+)$/.exec(String(e||'').trim());return m?`${m[1]}•••@${m[2]}`:'';};
export const validEmail=e=>/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(e||'').trim())&&String(e).length<=254;
function errorOf(status,data){
 const code=String(data?.error_code||data?.code||data?.error||'');
 if(status===429||/rate_limit/.test(code))return 'rate';
 if(code==='otp_expired'||code==='otp_invalid')return 'code';
 if(status===401||/jwt|invalid_grant|refresh_token|session_not_found|bad_jwt|PGRST30/i.test(code))return 'auth';
 if(status===409||code==='23505'||code==='23503')return 'conflict';
 return 'server';
}
export function createCloud({url=SUPABASE_URL,key=SUPABASE_ANON_KEY,fetch:fetchFn=null,storage=lsOf,now=()=>Date.now(),timeoutMs=TIMEOUT_MS}={}){
 const base=String(url||'').trim().replace(/\/+$/,''),on=!!(base&&key&&/^https:\/\//.test(base)||/^http:\/\/(localhost|127\.0\.0\.1)[:/]/.test(base)&&key);
 const read=()=>{try{const v=JSON.parse(storage()?.getItem(SESSION_KEY)||'null');return v&&v.refresh_token&&v.access_token?v:null;}catch{return null;}};
 const write=v=>{try{if(v)storage()?.setItem(SESSION_KEY,JSON.stringify(v));else storage()?.removeItem(SESSION_KEY);}catch{}};
 const listeners=new Set(),emit=()=>{for(const fn of listeners){try{fn(read());}catch{}}};
 const sessionOf=(d,email)=>({access_token:d.access_token,refresh_token:d.refresh_token,expires_at:Number.isFinite(+d.expires_at)&&+d.expires_at>0?+d.expires_at*1000:now()+(+d.expires_in||3600)*1000,user:{id:String(d.user?.id||''),email:maskEmail(d.user?.email)||email||''}});
 let sentAt=0,refreshing=null;
 async function call(path,{method='GET',body,token,prefer,keepalive=false}={}){
  if(!on)return {ok:false,status:0,error:'off'};
  if(globalThis.navigator&&globalThis.navigator.onLine===false)return {ok:false,status:0,error:'offline'};
  const ac=typeof AbortController==='function'?new AbortController():null,t=setTimeout(()=>ac?.abort(),timeoutMs);t?.unref?.();
  try{
   const headers={apikey:key,Authorization:'Bearer '+(token||key)};if(body!==undefined)headers['Content-Type']='application/json';if(prefer)headers.Prefer=prefer;
   const text=body===undefined?undefined:JSON.stringify(body);
   const res=await (fetchFn||globalThis.fetch)(base+path,{method,headers,body:text,signal:ac?.signal,keepalive:!!(keepalive&&(text||'').length<60000),credentials:'omit',cache:'no-store',redirect:'error'});
   const raw=await res.text().catch(()=>'');let data=null;try{data=raw?JSON.parse(raw):null;}catch{}
   return res.ok?{ok:true,status:res.status,data}:{ok:false,status:res.status,data,error:errorOf(res.status,data)};
  }catch(e){return {ok:false,status:0,error:e?.name==='AbortError'?'timeout':'offline'};}
  finally{clearTimeout(t);}
 }
 /* A refresh the server refuses means the session is over (expired, revoked or already rotated elsewhere). */
 async function refresh(){
  const s=read();if(!s)return null;
  const r=await call('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:s.refresh_token}});
  if(r.ok&&r.data?.access_token&&r.data?.refresh_token){write(sessionOf(r.data,s.user?.email));emit();return r.data.access_token;}
  if(r.status>=400&&r.status<500&&r.status!==429){write(null);emit();return null;}
  return s.expires_at>now()?s.access_token:null;
 }
 async function token({force=false}={}){
  const s=read();if(!s)return null;
  if(!force&&s.expires_at-now()>REFRESH_EARLY)return s.access_token;
  return refreshing??=refresh().finally(()=>{refreshing=null;});
 }
 async function rest(path,opts={}){
  if(!on)return {ok:false,status:0,error:'off'};
  let tok=await token();if(!tok)return {ok:false,status:0,error:read()?'offline':'auth'};
  let r=await call('/rest/v1'+path,{...opts,token:tok});
  if(r.status===401&&read()){tok=await token({force:true});if(!tok)return {ok:false,status:401,error:'auth'};r=await call('/rest/v1'+path,{...opts,token:tok});}
  return r;
 }
 const q=encodeURIComponent,UPSERT='resolution=merge-duplicates,return=representation',SAVE_COLS='learner_id,updated_at,device,save_version';
 return {
  on,session:read,onChange(fn){listeners.add(fn);return ()=>listeners.delete(fn);},
  async sendCode(email){
   email=String(email||'').trim();if(!validEmail(email))return {ok:false,status:0,error:'email'};
   const r=await call('/auth/v1/otp',{method:'POST',body:{email,create_user:true}});if(r.ok)sentAt=now();return r;
  },
  /* Supabase answers a wrong and an expired code the same way (403 otp_expired): the code's 15 minutes tell them apart. */
  async verify(email,code){
   email=String(email||'').trim();const token=String(code||'').replace(/\D/g,'');
   if(!validEmail(email))return {ok:false,status:0,error:'email'};if(token.length!==6)return {ok:false,status:0,error:'wrong'};
   const r=await call('/auth/v1/verify',{method:'POST',body:{type:'email',email,token}});
   if(r.ok&&r.data?.access_token&&r.data?.refresh_token){write(sessionOf(r.data,maskEmail(email)));emit();return {ok:true,status:r.status};}
   if(r.ok)return {ok:false,status:r.status,error:'server'};
   if(r.error==='code'||r.status===403)return {...r,error:sentAt&&now()-sentAt>CODE_LIFE_MS?'expired':'wrong'};
   return r;
  },
  token,refresh,
  /* Ends the session on this device at once; the server logout is a courtesy (it revokes the refresh token). */
  async signOut(){const s=read();write(null);emit();if(s)await call('/auth/v1/logout?scope=local',{method:'POST',token:s.access_token});return {ok:true};},
  async deleteAccount(){const r=await rest('/rpc/delete_my_account',{method:'POST',body:{}});if(r.ok){write(null);emit();}return r;},
  async upsertLearner({local_id,name},o={}){const r=await rest('/learners?on_conflict=owner,local_id&select=id,local_id,name,updated_at',{method:'POST',body:[{local_id:String(local_id).slice(0,64),name:String(name||'').slice(0,24)}],prefer:UPSERT,...o});return r.ok&&!r.data?.[0]?.id?{ok:false,status:r.status,error:'server'}:r;},
  async insertSave(row,o={}){return rest(`/saves?on_conflict=learner_id&select=${SAVE_COLS}`,{method:'POST',body:[row],prefer:UPSERT,...o});},
  /* Only replaces the cloud copy this device last saw: an empty answer means another device saved since. */
  async updateSave(row,seen,o={}){const {learner_id,...rest_}=row;return rest(`/saves?learner_id=eq.${q(learner_id)}&updated_at=eq.${q(seen)}&select=${SAVE_COLS}`,{method:'PATCH',body:rest_,prefer:'return=representation',...o});},
  learners(){return rest('/learners?select=id,local_id,name,updated_at&order=created_at.asc');},
  saves(){return rest(`/saves?select=${SAVE_COLS}`);},
  saveData(learnerId){return rest(`/saves?select=${SAVE_COLS},data&learner_id=eq.${q(learnerId)}`);}
 };
}
export const cloud=createCloud();
