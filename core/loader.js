/* Boot loader (v2:perf). Loaded first by index.html, before main.js, and kept free of static imports so the loading
   screen shows after one small request. It:
   - shows a loading screen in the game's own skin (ui/skin panel, crest, rod-and-gold progress bar, Pixel Operator)
     with real progress: the bytes of the boot set (every module main.js reaches, the title's art and the hub's)
     observed through Resource Timing, weighted by core/asset-manifest.js;
   - flattens the module waterfall with <link rel=modulepreload> for the whole boot graph;
   - holds the title until its own art is in (perfBoot, called from main.js boot());
   - loads each scene's assets through the game's own loaders (core/asset-groups.js), loads on explicit scene entry, holds a level until its stage and atlases are ready (no invisible enemies), and
     releases biome maps and atlases that are no longer needed so decoded memory stays bounded;
   - registers the offline service worker (sw.js) once the title is up;
   - stops identical HUD writes from rebuilding the DOM every frame (guardWrites).
   Nothing here draws art; the loading screen is pack UI pieces laid out by CSS (docs/STYLE_GUIDE.md Rule 0). */
const LIVE=typeof window!=='undefined'&&typeof document!=='undefined'&&typeof PerformanceObserver==='function'&&!/jsdom/i.test(globalThis.navigator?.userAgent||'');
const BASE=new URL('../',import.meta.url);
const rel=u=>{try{const x=new URL(u,BASE);if(x.origin!==BASE.origin||!x.pathname.startsWith(BASE.pathname))return null;return decodeURIComponent(x.pathname.slice(BASE.pathname.length))||'index.html';}catch{return null;}};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
/* exposed for tools/perf-measure.mjs and the tests */
export const loaderState={done:new Set(),expect:new Map(),pct:0,shownAt:0,hiddenAt:0,titleReady:false,scene:null,level:null,gated:0,released:{biomes:0,sprites:0},sw:null};
const S=loaderState;let M=null,G=null,C=null,el=null,watch=null;
const held=new Map();
const manifest=LIVE?import('./asset-manifest.js').then(m=>(M=m)).catch(()=>null):Promise.resolve(null);
const size=p=>{if(!M)return 20000;const i=p.lastIndexOf('/'),d=i<0?'':p.slice(0,i+1);return M.FILES[d]?.[p.slice(i+1)]?.[0]??20000;};
const exists=p=>{if(!M)return true;const i=p.lastIndexOf('/'),d=i<0?'':p.slice(0,i+1);return !!M.FILES[d]?.[p.slice(i+1)];};

/* ---------- the loading screen ---------- */
const CSS=`#pq-loading{position:fixed;inset:0;z-index:2147483000;display:grid;place-items:center;background:#0b0806;font:400 16px/1.4 'Pixel Operator',ui-monospace,monospace;color:#f1e6cc;-webkit-font-smoothing:none;transition:opacity .3s steps(3)}
#pq-loading .pq-load-panel{visibility:hidden}#pq-loading.pq-ready .pq-load-panel{visibility:visible}#pq-loading.pq-over{background:#0b0806c0}#pq-loading.pq-out{opacity:0;pointer-events:none}
#pq-loading .pq-load-panel{width:min(440px,86vw);display:flex;flex-direction:column;align-items:center;padding:8px 18px 14px;border-style:solid;border-width:28px;border-color:transparent;border-image:url(${new URL('ui/skin/panel.png',BASE).href}) 24 fill/48px round;image-rendering:pixelated}
#pq-loading .pq-load-crest{width:180px;height:72px;background:url(${new URL('ui/skin/crest.png',BASE).href}) center/100% 100% no-repeat;image-rendering:pixelated}
#pq-loading h1{margin:4px 0 0;font:700 32px/1 'Pixel Operator',ui-monospace,monospace;letter-spacing:2px;color:#e8c47a;text-shadow:0 2px 0 #2a1408}
#pq-loading .pq-load-sub{display:flex;align-items:center;gap:12px;margin:8px 0 12px;color:#c2b08c}
#pq-loading .pq-load-sub i{display:block;width:56px;height:14px;background:url(${new URL('ui/skin/divider.png',BASE).href}) right/auto 100% no-repeat;image-rendering:pixelated}
#pq-loading .pq-load-sub i:last-child{transform:scaleX(-1)}
#pq-loading .progress{width:100%;margin:4px 0 8px}#pq-loading .progress i{width:0;transition:width .2s steps(4)}
#pq-loading small{color:#c2b08c;min-height:1.4em}
#pq-loading{background:#0b0806 url(${new URL('ui/skin/keyart.webp',BASE).href}) center/cover no-repeat;image-rendering:pixelated}
#pq-loading::after{content:'';position:absolute;inset:0;background:linear-gradient(#0b080640,transparent 30%,transparent 62%,#0b0806d0);pointer-events:none}
#pq-loading .pq-load-panel{position:absolute;inset:0;z-index:1;width:auto;justify-content:space-between;padding:max(6vh,16px) 16px max(5vh,14px);border:0;border-image:none}
#pq-loading .pq-load-logo{display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 3px 0 #0b0806a0)}
#pq-loading .pq-load-foot{width:min(440px,86vw);display:flex;flex-direction:column;align-items:center}
#pq-loading .pq-load-sub span{color:#f1e6cc;text-shadow:0 2px 0 #0b0806}
#pq-loading .pq-load-logo h1{font-size:clamp(32px,6vw,56px);text-shadow:0 3px 0 #2a1408,2px 0 0 #2a1408,-2px 0 0 #2a1408,0 -2px 0 #2a1408}
#pq-loading .pq-load-crest{width:clamp(150px,22vw,240px);height:clamp(60px,8.8vw,96px)}`;
let styled=false;
function screen(){if(el||!LIVE)return el;
 if(!styled){styled=true;const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);}
 el=document.createElement('div');el.id='pq-loading';el.setAttribute('role','progressbar');el.setAttribute('aria-label','Loading PixelQuest');el.setAttribute('aria-valuemin','0');el.setAttribute('aria-valuemax','100');
 el.innerHTML=`<div class="pq-load-panel"><div class="pq-load-logo"><span class="pq-load-crest" aria-hidden="true"></span><h1>PIXELQUEST</h1><div class="pq-load-sub"><i></i><span data-load-title>THE THORN KINGDOM</span><i></i></div></div><div class="pq-load-foot"><div class="progress xp"><i></i></div><small data-load-note>Opening the gates…</small></div></div>`;
 document.body.appendChild(el);S.shownAt=performance.now();
 /* the panel shows once its own pack pieces are in (never half-skinned); they jump the queue ahead of the modules */
 const e=el,ready=()=>e.classList.add('pq-ready');Promise.race([preloadSkin(),sleep(2500)]).then(ready);
 return el;}
const SKIN=['keyart.webp','crest.png','divider.png','rod.png','fill-gold.png'],skinHeld=[];
/* Scene changes reuse the same five images; retaining another set on every loading screen leaked their handlers. */
let skinReady=null;
export function preloadSkin(create=()=>new Image()){if(skinReady)return skinReady;let failed=false;return skinReady=Promise.all(SKIN.map(f=>new Promise(r=>{const im=create();try{im.fetchPriority='high';}catch{}const done=()=>{im.onload=im.onerror=null;r();};im.onload=done;im.onerror=()=>{failed=true;done();};im.src=new URL('ui/skin/'+f,BASE).href;skinHeld.push(im);}))).then(()=>{if(failed){skinReady=null;skinHeld.length=0;}});}
function paint(pct,note,reset){if(!el)return;pct=Math.max(reset?0:S.pct,Math.min(100,Math.round(pct)));S.pct=pct;el.setAttribute('aria-valuenow',String(pct));el.querySelector('.progress i').style.width=pct+'%';if(note!=null)el.querySelector('[data-load-note]').textContent=note;}
function hide(){if(!el)return;const e=el;el=null;S.hiddenAt=performance.now();e.classList.add('pq-out');setTimeout(()=>e.remove(),400);}
/* progress over the expected set: bytes of paths whose responses have completed */
function progress(){let a=0,b=0;for(const [p,n] of S.expect){b+=n;if(S.done.has(p))a+=n;}return b?a/b*100:0;}
function expect(paths){for(const p of paths)if(p&&exists(p))S.expect.set(p,size(p));}

/* ---------- boot: observe, preload the module graph ---------- */
if(LIVE){
 try{performance.setResourceTimingBufferSize?.(4000);}catch{}
 try{new PerformanceObserver(list=>{for(const e of list.getEntries()){const p=rel(e.name);if(p)S.done.add(p);}if(el&&!S.level)paint(Math.min(99,progress()));}).observe({type:'resource',buffered:true});}catch{}
 const start=()=>{screen();paint(0);};
 if(document.body)start();else document.addEventListener('DOMContentLoaded',start,{once:true});
 manifest.then(m=>{if(!m)return;
  const mods=m.PRECACHE.filter(p=>/\.js$/.test(p)&&!/^assets\/(worldmap|biomes)\//.test(p)&&p!=='core/asset-manifest.js');
  /* the whole boot set up front, so the bar only ever moves forward: modules, styles, fonts, the UI skin and the
     title's art (every hero for class select, the part of the hub behind the menu); perfBoot adds the exact group */
  const boot=[...m.PRECACHE.filter(p=>/^(fonts\/.*\.ttf|ui\/(skin|font)\/[^/]*\.png)$/.test(p)),...(m.TITLE||[])];
  expect([...mods,'style.css',...boot]);
  const have=new Set([...document.querySelectorAll('link[rel=modulepreload],script[type=module][src]')].map(n=>rel(n.href||n.src)));
  for(const p of mods){if(have.has(p)||S.done.has(p))continue;const l=document.createElement('link');l.rel='modulepreload';l.href=new URL(p,BASE).href;document.head.appendChild(l);}
  /* the title's art starts now, beside the code, instead of after main.js has run: images keep the link busy while
     the many small modules wait on round trips. Same URLs the game asks for later, so nothing loads twice. */
  for(const p of boot){if(/\.json$/.test(p)){fetch(new URL(p,BASE)).catch(()=>{});continue;}if(/\.ttf$/.test(p)||held.has(p))continue;const im=new Image();im.decoding='async';im.onerror=()=>{im._failed=true;};im.src=new URL(p,BASE).href;held.set(p,im);}
  paint(Math.min(99,progress()));});
}

/* ---------- loading items through the game's own loaders ---------- */
async function lib(){const [sp,bi]=await Promise.all([import('../gfx/actors/sprites.js'),import('../gfx/biomes/index.js')]);return {sp,bi};}
function itemPaths(i){if(i.t==='sprite')return [`assets/sprites/${i.id}.json`,`assets/sprites/${i.id}.png`];
 if(i.t==='biome'){const d=`assets/biomes/${i.key}/`;return M?Object.keys(M.FILES[d]||{}).filter(n=>!/-(map|overview)\.webp$/.test(n)).map(n=>d+n):[];}
 return [i.url];}
/* true once an item is usable (or has failed for good) */
function settled(i,L){if(i.t==='sprite'){const s=L.sp.loadSprite(i.id);return s.ready||s.failed;}
 if(i.t==='biome')return L.bi.biomeReady(i.key);
 if(i.t==='img'){const im=held.get(i.url);return !!im&&(im.complete||im._failed);}
 return !!held.get(i.url)?.settled;}
function start(i,L){if(i.t==='sprite'){L.sp.loadSprite(i.id);return;}
 if(i.t==='biome'){L.bi.preloadBiome(i.key);return;}
 if(held.has(i.url))return;
 if(i.t==='img'){const im=new Image();im.decoding='async';im.onerror=()=>{im._failed=true;};im.src=new URL(i.url,BASE).href;held.set(i.url,im);return;}
 const rec={settled:false};held.set(i.url,rec);
 const p=i.t==='mod'?import(new URL(i.url,BASE).href):fetch(new URL(i.url,BASE)).then(r=>r.ok?r.arrayBuffer():null);
 p.catch(()=>null).then(()=>{rec.settled=true;});}
/* Starts every item and resolves when all are settled (or after `cap` ms). onTick(pct) reports progress. */
export async function loadGroup(items,{cap=120000,onTick}={}){if(!LIVE||!items?.length)return true;const L=await lib();
 for(const i of items)start(i,L);const paths=items.flatMap(itemPaths).filter(p=>exists(p));expect(paths);
 const t0=performance.now();
 while(performance.now()-t0<cap){const left=items.filter(i=>!settled(i,L)).length;
  if(onTick){let a=0,b=0;for(const p of paths){const n=size(p);b+=n;if(S.done.has(p))a+=n;}onTick(b?a/b*100:100,left);}
  if(!left)return true;await sleep(60);}
 return false;}
export const groupReady=async items=>{if(!LIVE)return true;const L=await lib();return items.every(i=>settled(i,L));};

/* ---------- what each scene keeps, and what it lets go ---------- */
async function groups(){return G||(G=await import('./asset-groups.js'));}
async function keepOnly(names){const g=await groups(),L=await lib(),hero=C.hero(),free=g.releasable();
 const keepS=new Set([...g.SHARED_SPRITES,...g.COMBAT_FX,...g.group('hero:'+hero).map(i=>i.id)]),keepB=new Set(),keepI=new Set();
 /* the village is drawn again on every return home: its images are never let go */
 for(const n of ['hub',...names])for(const i of g.group(n,{hero,started:true})){if(i.t==='sprite')keepS.add(i.id);else if(i.t==='biome')keepB.add(i.key);else keepI.add(i.url);}
 for(const k of L.bi.loadedBiomes?.()||[])if(!keepB.has(k)&&L.bi.releaseBiome(k))S.released.biomes++;
 for(const id of L.sp.loadedSprites?.()||[])if(free.has(id)&&!keepS.has(id)&&L.sp.releaseSprite(id))S.released.sprites++;
 for(const u of [...held.keys()])if(!keepI.has(u))held.delete(u);}
async function onScene(scene,level){S.scene=scene;S.level=level;if(scene==='title')return;
 await keepOnly(scene==='level'?['level:'+level]:scene==='worldmap'?['worldmap']:[]);}
/* Use the existing screen at an explicit scene boundary; the title never waits for town art. */
export function prepareScene(name,{hero='warrior',pet,started=false}={}){if(!LIVE)return null;return (async()=>{const g=await groups();
 const items=[...g.group(name,{hero,started}),...(name==='hub'?[...g.group('hero:'+hero),...g.group('pet:'+pet),...g.SHARED_SPRITES.map(id=>({t:'sprite',id})),...g.SHARED_IMAGES.map(url=>({t:'img',url}))]:[])];
 S.gated++;screen();paint(0,'Getting ready…',true);
 try{await loadGroup(items,{onTick:p=>paint(Math.min(99,p))});}finally{paint(100);hide();S.gated--;}})();}
/* The pre-v2 env sheets (gfx/assets.js) no longer load in a live game: totems and traps, their last users, draw PixelLab
   props now (9 Oct, gfx/world.js TOTEM_SPRITE). */
/* A scene whose art is still loading holds the world behind the loading panel: a level until its stage and atlases
   are in (enemies would otherwise fight unseen), the village until its ground is in. */
async function hold(items,title,still){if(await groupReady(items))return;const w=C.world;S.gated++;const was=w.paused;w.paused=true;
 screen();el.classList.add('pq-over');el.querySelector('[data-load-title]').textContent=title;paint(0,'Getting the stage ready…',true);
 await loadGroup(items,{cap:60000,onTick:p=>paint(Math.min(99,p))});paint(100);hide();S.gated--;
 const modal=document.querySelector('#modal');if(still()&&!was&&!modal?.open)w.paused=false;}
async function gate(id){const g=await groups(),l=g.levelInfo(id);return hold(g.group('level:'+id,{hero:C.hero()}),(l?.name||'The road').toUpperCase(),()=>C.world.level?.id===id);}
let hubMod=null;
async function gateHub(){hubMod??=await import('../scenes/town.js');if(hubMod.hubState?.().room!=='village'||S.gated)return;
 const g=await groups();return hold(g.group('hub',{started:true}),'OAKHAVEN',()=>!C.world.level);}

/* ---------- main.js boot hook ---------- */
/* ctx: {world, save:()=>s, hero:()=>s.hero, scene:()=>'home'|'worldmap'|'level', legacy:()=>loadAssets()} */
export async function perfBoot(ctx){C=ctx;if(!LIVE){await ctx.legacy?.();return;}
 try{await Promise.race([manifest,sleep(8000)]);const g=await groups(),s=ctx.save();
  guardWrites();
  const items=[...g.group('title',{hero:ctx.hero(),started:!!s.started}),...(M?M.PRECACHE.filter(p=>/^ui\/(skin|font)\/[^/]*\.png$/.test(p)).map(url=>({t:'img',url})):[])];
  screen();
  await Promise.all([loadGroup(items,{cap:150000,onTick:()=>paint(Math.min(99,progress()),'Opening the gates…')}),document.fonts?.ready]);
  paint(100,'Ready');S.titleReady=true;
  requestAnimationFrame(()=>requestAnimationFrame(hide));
  /* a level started from anywhere (world map, south gate, tests) is gated before its first frame */
  const w=ctx.world,startLevel=w.startLevel.bind(w);w.startLevel=(id,o)=>{const r=startLevel(id,o);if(r){S.level=id;gate(id);}return r;};
  const title=()=>{const d=document.querySelector('#modal');return !!(d?.open&&d.dataset.view==='welcome');};
  let last='';watch=setInterval(()=>{guardWrites();const scene=title()?'title':ctx.scene(),lvl=ctx.world.level?.id||null,k=scene+':'+lvl+':'+ctx.hero();if(k!==last){last=k;onScene(scene,lvl);}if(scene==='home'&&!S.gated)gateHub();},400);
  setTimeout(registerSW,3000);
 }catch(e){console.warn('loader',e);hide();}}

/* ---------- identical HUD writes are skipped (no DOM rebuild, no style recalc) ----------
   updateHUD() rewrites these 8 times a second and main.js rewrote #prompt every frame; an identical write now
   leaves the DOM alone. Elements rebuilt later (the hotbar) are picked up by the scene watcher. */
const HOT=['#keyboard-actions','#prompt','#signature','#shield-info','#next-unlock','#objective','#hint','#hero-name','#hp-text','#mp-text','#level','#gold','#location','#map-label','#scene-title','#xp-text','#potion-count','#boss-title','#boss-phase'];
/* hidden flags rewritten every HUD tick (cooldown overlays, the boss bar) */
const HOT_HIDDEN=['#boss-hud','#hotbar .cd'];
export function guardWrites(root=document){const H=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML'),T=Object.getOwnPropertyDescriptor(Node.prototype,'textContent'),D=Object.getOwnPropertyDescriptor(HTMLElement.prototype,'hidden');if(!H||!T)return 0;let n=0;
 if(D)for(const e of root.querySelectorAll(HOT_HIDDEN.join(','))){if(e.__pqHidden)continue;e.__pqHidden=true;n++;Object.defineProperty(e,'hidden',{configurable:true,get(){return D.get.call(this);},set(v){if(!!v===D.get.call(this))return;D.set.call(this,v);}});}
 for(const sel of HOT){const e=root.querySelector(sel);if(!e||e.__pqGuard)continue;e.__pqGuard=true;n++;let wrote=null,ser=null;
  Object.defineProperty(e,'innerHTML',{configurable:true,get(){return H.get.call(this);},set(v){v=String(v);if(v===wrote&&H.get.call(this)===ser)return;H.set.call(this,v);wrote=v;ser=H.get.call(this);}});
  Object.defineProperty(e,'textContent',{configurable:true,get(){return T.get.call(this);},set(v){v=v==null?'':String(v);if(this.childNodes.length<=1&&T.get.call(this)===v)return;T.set.call(this,v);}});}
 return n;}

/* ---------- offline: the service worker ---------- */
/* Off on localhost unless asked for (?sw=1), so a developer never plays stale cached code; ?sw=0 removes it. */
function swWanted(){const q=new URLSearchParams(location.search);let flag=null;try{if(q.get('sw')==='1')localStorage.setItem('pq.sw','1');if(q.get('sw')==='0')localStorage.removeItem('pq.sw');flag=localStorage.getItem('pq.sw');}catch{}
 if(q.get('sw')==='0'){navigator.serviceWorker?.getRegistrations?.().then(rs=>rs.forEach(r=>r.unregister()));caches?.keys?.().then(ks=>ks.filter(k=>k.startsWith('pq-')).forEach(k=>caches.delete(k)));return false;}
 const local=/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);return 'serviceWorker' in navigator&&isSecureContext&&(!local||flag==='1');}
export async function registerSW(){if(!LIVE||!swWanted())return null;
 try{const reg=await navigator.serviceWorker.register(new URL('../sw.js',import.meta.url),{type:'module',updateViaCache:'none'});S.sw='registered';
  const sw=await navigator.serviceWorker.ready;S.sw='active';
  /* everything this page fetched before the worker took over: cache it too ("everything played so far") */
  sw.active?.postMessage({type:'cache',paths:[...S.done]});return reg;}
 catch(e){S.sw='failed: '+e.message;return null;}}

/* Keep the same skinned loading screen while a requested lesson arrives. */
export async function prepareWork(work){if(!LIVE)return work();S.gated++;screen();paint(0,'Opening the lesson…',true);try{return await work();}finally{paint(100);hide();S.gated--;}}
