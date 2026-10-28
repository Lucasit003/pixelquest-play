/* Full-screen mobile game mode (v2:ui).
   On a touch device with a phone- or tablet-sized screen (or with ?mobile=1 in the URL) the page
   becomes the game: html.m-mode, landscape only, the canvas fills the screen, the HUD shrinks to
   the corners and panels become full-screen sheets (all in style.css under .m-mode).
   Controls: a nipplejs joystick (MIT, vendored in ui/vendor, loaded only here) on the left half,
   and the existing #touch buttons (attack, dodge, jump, interact, potion) plus the hotbar's ability
   slots on the right. The joystick drives the arrow keys, which main.js always reads as movement,
   so no binding can break it; pushing it to the rim also holds R (run).
   Portrait shows a rotate-your-device card and pauses the game. */
import {fillIcons} from './icons.js';
import {STAGE} from '../game/stage.js';
let on=false,joy=null,held=new Set(),getWorld=()=>null,rotateEl=null,wasPaused=null;
const doc=()=>globalThis.document,win=()=>globalThis.window;
export const mobileMode=()=>on;
export function wantsMobile(w=win()){
 if(!w)return false;
 try{if(/[?&]mobile=1\b/.test(w.location?.search||''))return true;if(/[?&]mobile=0\b/.test(w.location?.search||''))return false;}catch{}
 const coarse=!!w.matchMedia?.('(pointer: coarse)').matches,touch=coarse||('ontouchstart' in w)||(w.navigator?.maxTouchPoints>0&&coarse);
 const small=Math.min(w.innerWidth||0,w.innerHeight||0)<=820;
 return touch&&small;
}
function key(k,down){
 const w=win();if(!w)return;
 if(down===held.has(k))return;
 down?held.add(k):held.delete(k);
 const target=doc().querySelector('#world')||w;
 target.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{key:k,code:k,bubbles:true,cancelable:true}));
}
function releaseAll(){for(const k of [...held])key(k,false);}
function steer(vx,vy,force){
 const t=.38;
 key('ArrowLeft',vx<-t);key('ArrowRight',vx>t);key('ArrowUp',vy>t);key('ArrowDown',vy<-t);
 key(getWorld()?.save?.settings?.bindings?.run||'r',force>=.95);
}
function loadNipple(){
 return new Promise((ok,no)=>{
  if(win().nipplejs)return ok(win().nipplejs);
  const s=doc().createElement('script');s.src=new URL('./vendor/nipplejs.min.js',import.meta.url).href;s.async=true;
  s.onload=()=>win().nipplejs?ok(win().nipplejs):no(Error('nipplejs missing'));s.onerror=no;doc().head.appendChild(s);
 });
}
function buildControls(){
 const d=doc();
 if(!d.querySelector('#joy-zone')){const z=d.createElement('div');z.id='joy-zone';z.setAttribute('aria-hidden','true');z.innerHTML='<div id="joy-ghost"><i></i></div>';
  /* nipplejs skips the zone's offset when the zone's parent is a flex box (#stage is one), which put the stick ~100 px
     below the thumb and read every push as "up": a plain block wrapper keeps its sums right */
  const wrap=d.createElement('div');wrap.id='joy-wrap';wrap.appendChild(z);(d.querySelector('#stage')||d.body).appendChild(wrap);}
 /* Phones have no H, Tab or Escape: the map, the journal (stats) and the menu get buttons in the top-right corner. */
 if(!d.querySelector('#m-menu')){const m=d.createElement('div');m.id='m-menu';m.setAttribute('role','group');m.setAttribute('aria-label','Menu');
    /* review round 2 (owner: "make these logos look better"): PixelLab icons, ui/skin/touch */
  m.innerHTML=[['m','map','Map'],['Tab','journal','Journal'],['Escape','menu','Menu']].map(([k,ic,l])=>`<button type="button" data-press="${k}" aria-label="${l}"><img src="${new URL(`./skin/touch/${ic}.png`,import.meta.url).href}" alt="" width="32" height="32" draggable="false"><small>${l}</small></button>`).join('');
  (d.querySelector('#stage')||d.body).appendChild(m);
  for(const b of m.querySelectorAll('button'))b.addEventListener('pointerdown',e=>{e.preventDefault();const action={m:'map',Tab:'journal',Escape:'menu'}[b.dataset.press],k=getWorld()?.save?.settings?.bindings?.[action]||b.dataset.press;key(k,true);key(k,false);});}
 if(!d.querySelector('#rotate')){
  rotateEl=d.createElement('div');rotateEl.id='rotate';rotateEl.setAttribute('role','alert');
  rotateEl.innerHTML='<div class="rotate-card"><span class="rotate-phone" data-icon="rotate" data-size="64" aria-hidden="true"></span><strong>Turn your device</strong><small>PixelQuest plays in landscape.</small></div>';
  d.body.appendChild(rotateEl);fillIcons(rotateEl);
 }
}
async function startJoystick(){
 try{
  const nipple=await loadNipple(),zone=doc().querySelector('#joy-zone');if(!zone||joy)return;
  /* owner, 8 Oct (packet #46-47): a joystick you can always see, where the left thumb rests, like other phone games */
  /* review round 2: the stick appears under the thumb anywhere in the left zone (Brawl Stars; a fixed stick makes the thumb
     hunt for it) and a ghost of it rests bottom-left, so it can still always be seen */
  const h=win().innerHeight||0;
  joy=nipple.create({zone,mode:'dynamic',color:'#e7c77e',size:h>=720?180:h>=560?150:112,threshold:.08,fadeTime:90,dynamicPage:true});
  joy.on('start',()=>zone.classList.add('joy-on'));
  joy.on('move',(e,data)=>{if(!data?.vector)return;steer(data.vector.x,data.vector.y,data.force||0);});
  joy.on('end',()=>{zone.classList.remove('joy-on');releaseAll();});
 }catch(err){
  /* No joystick script: fall back to the d-pad buttons, which main.js already wires. */
  doc().documentElement.classList.add('m-dpad');
 }
}
const VERB=/^(talk|leave|enter|read|search|study|open|rest|shop|buy|travel|place|pray|hire|sleep|play|pet|choose|plan|defend|ask|order|warm|browse|go)\b/i;
/* newplayer-oct27: a sign, board or tally is read, not opened ("Village noticeboard" said Open) */
const READS=/notice|board|signpost|timetable|tally|map\b/i;
export function promptVerb(text){
 const t=String(text||'').trim();if(!t)return '';
 const m=t.match(VERB);if(m)return m[1][0].toUpperCase()+m[1].slice(1).toLowerCase();
 if(/talk to/i.test(t)||t.includes(':'))return 'Talk';
 if(READS.test(t)&&!/gate|road|path|lane/i.test(t))return 'Read';
 return /gate|door|road|path|lane|pier|stair/i.test(t)?'Go':'Open';
}
function portrait(){const w=win();return (w.innerHeight||0)>(w.innerWidth||0);}
function orient(){
 const w=getWorld(),p=portrait();
 doc().documentElement.classList.toggle('m-portrait',p);
 if(!w)return;
 if(p){if(wasPaused===null){wasPaused=!!w.paused;w.paused=true;releaseAll();}}
 else if(wasPaused!==null){if(!doc().querySelector('#modal')?.open)w.paused=wasPaused;wasPaused=null;}
}
function tryFullscreen(){
 const el=doc().documentElement;
 if(doc().fullscreenElement||!el.requestFullscreen)return;
 el.requestFullscreen({navigationUI:'hide'}).then(()=>globalThis.screen?.orientation?.lock?.('landscape').catch(()=>{})).catch(()=>{});
}
export function initMobile({world}={}){
 const w=win();if(!w||!wantsMobile(w))return false;
 on=true;getWorld=()=>world;
 doc().documentElement.classList.add('m-mode');
 buildControls();startJoystick();
 w.addEventListener('resize',orient);w.addEventListener('orientationchange',()=>setTimeout(orient,150));orient();
 w.addEventListener('blur',releaseAll);doc().addEventListener('visibilitychange',()=>{if(doc().hidden)releaseAll();});
 doc().addEventListener('pointerdown',tryFullscreen,{once:true});
 /* pressed feedback for the thumb buttons (main.js cancels the pointer's default, so :active is unreliable on touch) */
 const held=new Map();
 doc().addEventListener('pointerdown',e=>{const b=e.target?.closest?.('#touch button,#hotbar button');if(b){b.classList.add('held');held.set(e.pointerId,b);}},true);
 for(const ev of ['pointerup','pointercancel'])doc().addEventListener(ev,e=>{held.get(e.pointerId)?.classList.remove('held');held.delete(e.pointerId);},true);
 /* The interact button shows only when main.js shows a prompt (something is in reach), named by its verb: a permanent "E"
    meant nothing on a phone (owner, review board 01). */
 const prompt=doc().querySelector('#prompt'),act=doc().querySelector('#touch [data-key="interact"]');
 if(prompt&&act&&globalThis.MutationObserver)new MutationObserver(()=>{const t=promptVerb(prompt.textContent.replace(prompt.querySelector('kbd')?.textContent||'',''));act.classList.toggle('ready',!!t);if(t){act.dataset.label=t;act.setAttribute('aria-label',t);}}).observe(prompt,{childList:true,subtree:true,characterData:true});
 /* pads are re-measured when the layout can change (no polling timer: it would keep a test's event loop alive) */
 {const again=()=>measurePads();w.addEventListener('pq:scale',again);w.addEventListener('resize',again);const bar=doc().querySelector('#hotbar');if(bar&&globalThis.MutationObserver)new MutationObserver(again).observe(bar,{childList:true,attributes:true,subtree:true,attributeFilter:['class','hidden']});const hud=doc().querySelector('#hud');if(hud&&globalThis.MutationObserver)new MutationObserver(again).observe(hud,{attributes:true,attributeFilter:['class','hidden']});w.requestAnimationFrame?.(again);measurePads();}
 return true;
}
/* 25 Oct (phone camera): how far the touch controls reach into the view, in world units, for the level camera
   (scenes/combat.js follow). Left: the joystick ghost (only matters when the hero's feet are level with it, padLTop). Right: the leftmost button of the action arc (attack, dodge,
   jump, potion, ability slots). A hero half-width is added so the whole sprite stays clear. Desktop never sets them. */
const PHONE_FLOOR_GAP=20;
export function measurePads(d=doc()){
 const cv=d?.querySelector('#world');if(!on||!cv?.width){STAGE.padL=STAGE.padR=STAGE.padLTop=0;STAGE.hudTL=STAGE.hudTR=null;STAGE.padB=null;return {l:0,r:0};}
 const box=cv.getBoundingClientRect();if(!box.width)return {l:STAGE.padL|0,r:STAGE.padR|0};
 const k=box.width/cv.width,vis=el=>{const r=el.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(el).visibility!=='hidden'&&getComputedStyle(el).display!=='none'?r:null;};
 const ghost=d.querySelector('#joy-ghost'),g=ghost&&vis(ghost);
 let minL=box.right;for(const el of d.querySelectorAll('#touch button,#hotbar button,#hud-potion')){const r=vis(el);if(r&&r.top>box.top+box.height*.3&&r.left>box.left+box.width/2)minL=Math.min(minL,r.left);}
 const HALF=20,cap=STAGE.camW*.35;
 STAGE.padL=g?Math.min(cap,Math.round((g.right-box.left)/k)+HALF):0;STAGE.padLTop=g?Math.round((g.top-box.top)/k):0;STAGE.padR=minL<box.right?Math.min(cap,Math.round((box.right-minL)/k)+HALF):0;
 /* camface-oct28 (the phone camera's safe zone): the top-left hero panel (portrait, bars, gold) and the top-right Map/Journal/Menu
    buttons, each as [how far the hero must stand from that side, the obstacle's bottom], world units. follow() keeps the hero clear of
    one only while his head is level with it. padB: the floor band sits this far above the bottom edge (desktop keeps hudBottom, the
    hotbar's 34 px; a phone has no bottom hotbar, so the band moves down and the hero's head comes out from under the panel). */
 const top=(q,left)=>{const o=[];for(const el of d.querySelectorAll(q)){const r=vis(el);if(!r||r.top>box.top+box.height*.3||(r.left<box.left+box.width/2)!==left)continue;o.push([Math.min(cap,Math.round((left?r.right-box.left:box.right-r.left)/k)+HALF),Math.round((r.bottom-box.top)/k)]);}return o;};
 STAGE.hudTL=top('#hud .hero-hud,#hud .hud-sub',true);STAGE.hudTR=top('#m-menu button',false);STAGE.padB=PHONE_FLOOR_GAP;
 return {l:STAGE.padL,r:STAGE.padR};
}
/* oct25-phone2: where a toast goes on a phone during a fight -- one compact strip at the bottom, between the joystick ghost
   and the action arc, so it never covers the boss bar, the boss, elite names (gfx/world.js avoids it like the HUD) or a
   button. Pixels relative to #stage: {center,width,bottom}; null when not in phone mode. */
export function compactToastBox(d=doc()){
 const st=on&&d?.querySelector('#stage');if(!st)return null;const sr=st.getBoundingClientRect();if(!sr.width)return null;
 const vis=el=>{const r=el?.getBoundingClientRect();return r&&r.width>0&&r.height>0&&getComputedStyle(el).display!=='none'&&getComputedStyle(el).visibility!=='hidden'?r:null;};
 const g=vis(d.querySelector('#joy-ghost'));let right=sr.right-8;for(const el of d.querySelectorAll('#touch button,#hotbar button,#hud-potion')){const r=vis(el);if(r&&r.top>sr.top+sr.height*.3&&r.left>sr.left+sr.width/2)right=Math.min(right,r.left-8);}
 const left=(g?g.right:sr.left)+8,width=Math.max(160,right-left);return {center:Math.round(left-sr.left+width/2),width:Math.round(width),bottom:12};}
