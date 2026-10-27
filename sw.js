/* Offline service worker (v2:perf). Registered by core/loader.js as a module worker once the title is up.
   - install: caches the core (core/asset-manifest.js PRECACHE: the page, every module main.js reaches, styles,
     fonts, the UI skin, the title, hub and world-map art, the prologue and the first level). A file an older
     version already holds is copied across when its content hash is unchanged, so an update downloads only what
     changed. Copies come from the HTTP cache when they match the manifest's hash (the first visit has just
     downloaded them), else from the network.
   - fetch: cache first. Anything else the game loads (other levels, enemies, music, narration) is cached the first
     time it is played, so the game keeps working offline after one online session. Nothing is ever fetched that
     the game did not ask for; no analytics, no third parties.
   - VERSION (a hash of every file) names the cache: a new build gets a new cache, unchanged entries move over,
     the old cache is deleted, and the new worker takes over at once (skipWaiting + clients.claim).
   Saves never touch this: they live in localStorage. */
import {VERSION,PRECACHE,FILES} from './core/asset-manifest.js';
const CACHE='pq-'+VERSION,CLIPS='pq-narration';
const SCOPE=self.registration?.scope||new URL('./',self.location).href;
const pathOf=url=>{const u=new URL(url);u.search='';u.hash='';return u.href.startsWith(SCOPE)?decodeURIComponent(u.href.slice(SCOPE.length))||'index.html':null;};
const keyOf=p=>new URL(p,SCOPE).href;
const entry=p=>{const i=p.lastIndexOf('/'),d=i<0?'':p.slice(0,i+1);return FILES[d]?.[p.slice(i+1)]||null;};
/* narration clips are named by a hash of their text and voice: one name never changes content, so they keep their own cache */
const isClip=p=>/^assets\/narration\/[^/]+\.mp3$/.test(p);
async function sha8(buf){const h=new Uint8Array(await crypto.subtle.digest('SHA-256',buf));let s='';for(let i=0;i<4;i++)s+=h[i].toString(16).padStart(2,'0');return s;}
const matches=async(res,want)=>!want||await sha8(await res.clone().arrayBuffer())===want;
async function fill(cache,p,olds=[]){const key=keyOf(p);if(await cache.match(key))return true;const want=entry(p)?.[1];
 if(want)for(const o of olds){const r=await o.match(key);if(r&&await matches(r,want)){await cache.put(key,r);return true;}}
 /* the HTTP cache's copy only when it is the manifest's exact content; otherwise the server's current file (a
    manifest older than the files must never stop the game installing) */
 for(const mode of want?['force-cache','reload']:['no-cache']){try{const r=await fetch(key,{cache:mode});if(r.status!==200)continue;if(mode==='force-cache'&&!await matches(r,want))continue;await cache.put(key,r);return true;}catch{}}
 return false;}
async function pool(list,n,fn){const out=[];let i=0;await Promise.all(Array.from({length:n},async()=>{while(i<list.length){const k=i++;out[k]=await fn(list[k]);}}));return out;}
const older=async()=>Promise.all((await caches.keys()).filter(k=>k.startsWith('pq-')&&k!==CACHE&&k!==CLIPS).map(k=>caches.open(k)));

self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE),olds=await older();
 const ok=await pool(PRECACHE,6,p=>fill(c,p,olds));
 /* the page and its code must all be there, or this version is not installed (the previous one keeps serving) */
 const bad=PRECACHE.filter((p,i)=>!ok[i]&&(p==='index.html'||/\.(js|css)$/.test(p)));if(bad.length)throw new Error('precache incomplete: '+bad.slice(0,5).join(', '));
 await self.skipWaiting();})());});

self.addEventListener('activate',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE);
 for(const k of await caches.keys()){if(!k.startsWith('pq-')||k===CACHE||k===CLIPS)continue;const o=await caches.open(k);
  /* what was played under the old version moves across when its content is unchanged */
  for(const req of await o.keys()){const p=pathOf(req.url),want=p&&entry(p)?.[1];if(!want||await c.match(req))continue;const r=await o.match(req);if(r&&await matches(r,want))await c.put(req,r);}
  await caches.delete(k);}
 await self.clients.claim();})());});

/* the page reports what it loaded before this worker took over */
self.addEventListener('message',e=>{if(e.data?.type!=='cache'||!Array.isArray(e.data.paths))return;
 e.waitUntil((async()=>{const c=await caches.open(CACHE),k=await caches.open(CLIPS);await pool(e.data.paths.filter(p=>typeof p==='string'&&p!=='sw.js'),4,p=>fill(isClip(p)?k:c,p));})());});

self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;
 const p=req.mode==='navigate'?'index.html':pathOf(req.url);if(!p||p==='sw.js')return;
 e.respondWith(respond(req,p));});
async function respond(req,p){const c=await caches.open(isClip(p)?CLIPS:CACHE),key=keyOf(p);let hit=await c.match(key);
 if(!hit){try{const r=await fetch(req.mode==='navigate'?key:req);if(r.status===200&&r.type==='basic')c.put(key,r.clone()).catch(()=>{});return r;}
  catch(err){hit=req.mode==='navigate'?await c.match(keyOf('index.html')):null;if(!hit)return Response.error();}}
 const range=req.headers.get('range');return range?partial(hit,range):hit;}
/* media elements (narration) ask for byte ranges; answer from the cached whole file */
async function partial(res,range){const m=/bytes=(\d*)-(\d*)/.exec(range);if(!m)return res;const buf=await res.arrayBuffer(),n=buf.byteLength;
 let a=m[1]===''?Math.max(0,n-(+m[2]||0)):+m[1],b=m[2]===''||m[1]===''?n-1:Math.min(n-1,+m[2]);if(a>=n||a>b)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${n}`}});
 return new Response(buf.slice(a,b+1),{status:206,headers:{'Content-Type':res.headers.get('Content-Type')||'application/octet-stream','Content-Range':`bytes ${a}-${b}/${n}`,'Content-Length':String(b-a+1),'Accept-Ranges':'bytes'}});}
