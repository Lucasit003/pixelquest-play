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
/* tablets-nov2: a tablet is a touch screen at least TABLET_MIN css px on its short side (iPad mini 1024x768, Air 1180x820, Pro 1366x1024,
   Android 1280x800, iPad Safari with its bars 1180x740); phones in landscape are 430 px tall at most. style.css "tablets-nov2" matches it
   with (min-height:600px) */
export const TABLET_MIN=600;
export const tabletSize=(w,h)=>Math.min(+w||0,+h||0)>=TABLET_MIN;
export function wantsMobile(w=win()){
 if(!w)return false;
 try{if(/[?&]mobile=1\b/.test(w.location?.search||''))return true;if(/[?&]mobile=0\b/.test(w.location?.search||''))return false;}catch{}
 const coarse=!!w.matchMedia?.('(pointer: coarse)').matches,touch=coarse||('ontouchstart' in w)||(w.navigator?.maxTouchPoints>0&&coarse);
 const small=Math.min(w.innerWidth||0,w.innerHeight||0)<=820;
 /* polish3-oct29: a big tablet (iPad Pro 1366x1024) is too tall for "small" and got the desktop layout with no joystick or buttons,
    so a touch-only player could not move. A device whose only pointer is coarse (no mouse or trackpad) plays in touch mode at any size */
 const touchOnly=coarse&&!w.matchMedia?.('(any-pointer: fine)').matches;
 return touch&&(small||touchOnly);
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
  /* ownernotes-c-nov1: the live stick is the skin's ring and knob (style.css), so nipplejs's own circles are made clear; the knob's
     push direction and force go to --jx/--jy/--jf on the stick for the rim glow, and it fades out over 160 ms */
  joy=nipple.create({zone,mode:'dynamic',color:'transparent',size:h>=720?180:h>=560?150:112,threshold:.08,fadeTime:160,dynamicPage:true});
  const size=h>=720?180:h>=560?150:112,glow=(x,y,f)=>{const n=zone.querySelector('.nipple:last-of-type');if(!n)return;n.style.setProperty('--jx',x.toFixed(3));n.style.setProperty('--jy',y.toFixed(3));n.style.setProperty('--jf',f.toFixed(3));
   /* the knob travels 44% of the ring's radius, so it stays seated in the ring's well instead of riding over the rim (steering still reads nipplejs's full vector) */
   const k=n.querySelector('.front');if(k)k.style.transform=`translate(${(x*f*size*.22).toFixed(1)}px,${(y*f*size*.22).toFixed(1)}px)`;};
  joy.on('start',()=>{zone.classList.add('joy-on');glow(0,0,0);});
  joy.on('move',(e,data)=>{if(!data?.vector)return;steer(data.vector.x,data.vector.y,data.force||0);glow(data.vector.x,-data.vector.y,Math.min(1,data.force||0));});
  joy.on('end',()=>{zone.classList.remove('joy-on');releaseAll();glow(0,0,0);});
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
/* ios-landscape-nov1 (owner, 1 Nov, playing in iPhone Safari): an iPhone has no fullscreen API, so Safari's bars stay over the game; the
   home-screen app (manifest.webmanifest, display fullscreen) plays edge to edge. One tip per device, never inside the installed app, never
   over a panel or the turn-your-device card, gone on OK or after 14 s. */
export function iosTipWanted(w=win()){try{const n=w?.navigator||{},ua=n.userAgent||'';if(!/iPhone|iPod/.test(ua))return false;
 if(n.standalone===true||w.matchMedia?.('(display-mode: standalone)').matches||w.matchMedia?.('(display-mode: fullscreen)').matches)return false;
 return w.localStorage?.getItem('pq.iosTip')!=='1';}catch{return false;}}
function iosTip(){
 const w=win(),d=doc();if(!iosTipWanted(w))return;
 let tries=0;const t=setInterval(()=>{
  if(++tries>600){clearInterval(t);return;}
  if(portrait()||d.querySelector('dialog[open]')||d.querySelector('#ios-tip'))return;
  clearInterval(t);try{w.localStorage.setItem('pq.iosTip','1');}catch{}
  const el=d.createElement('div');el.id='ios-tip';el.setAttribute('role','status');
  el.innerHTML='<span><b>Play full screen:</b> tap <b>Share</b>, then <b>Add to Home Screen</b>, and open PixelQuest from its icon.</span><button type="button">OK</button>';
  el.querySelector('button').addEventListener('click',()=>el.remove());d.body.appendChild(el);
  setTimeout(()=>el.classList.add('show'),30);setTimeout(()=>el.remove(),14000);
 },1000);
}
function tryFullscreen(){
 const el=doc().documentElement;
 if(doc().fullscreenElement||!el.requestFullscreen)return;
 el.requestFullscreen({navigationUI:'hide'}).then(()=>globalThis.screen?.orientation?.lock?.('landscape').catch(()=>{})).catch(()=>{});
}
/* improve20-h-nov1 (audit2 #22's leftover: the Mage's Attack button showed a sword): the Attack button shows the class's own
   weapon (CLASSES[hero].weapon). The Warrior keeps touch/attack.png; every other class uses the gold top tier of its weapon's
   existing PixelLab gear icon (ui/skin/gear/<weapon>-3.png), the same warm gold as that sword. No new art; style.css draws it
   from the button's data-weapon. main.js calls this from updateHUD, so a hero switch changes it at once. */
export const ATTACK_ICONS={sword:'ui/skin/touch/attack.png',staff:'ui/skin/gear/staff-3.png',dagger:'ui/skin/gear/dagger-3.png',bow:'ui/skin/gear/bow-3.png',hammer:'ui/skin/gear/hammer-3.png',axe:'ui/skin/gear/axe-3.png',focus:'ui/skin/gear/focus-3.png'};
export function syncAttackIcon(weapon,d=doc()){const w=ATTACK_ICONS[weapon]?weapon:'sword',b=d?.querySelector?.('#touch .t-attack');if(b&&b.dataset.weapon!==w)b.dataset.weapon=w;return w;}
export function initMobile({world}={}){
 const w=win();if(!w||!wantsMobile(w))return false;
 on=true;getWorld=()=>world;
 doc().documentElement.classList.add('m-mode');
 buildControls();startJoystick();
 w.addEventListener('resize',orient);w.addEventListener('orientationchange',()=>{setTimeout(orient,150);setTimeout(()=>{try{w.scrollTo(0,0);}catch{}},300);});orient();iosTip();
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
 /* campad-oct28: the top obstacles' pads are the panel's own measured width (+HALF), so the hero clears it at any phone size; at 740x360
    the 35% cap (129.5) was under the 139 the hero panel needs. capTop only stops a freak layout from leaving no room for the hero */
 const capTop=STAGE.camW*.45,top=(q,left)=>{const o=[];for(const el of d.querySelectorAll(q)){const r=vis(el);if(!r||r.top>box.top+box.height*.3||(r.left<box.left+box.width/2)!==left)continue;o.push([Math.min(capTop,Math.round((left?r.right-box.left:box.right-r.left)/k)+HALF),Math.round((r.bottom-box.top)/k)]);}return o;};
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
/* improve20-d-nov1 (lane S's leftover): on a phone the armour/shield banner sat at 18% over the fight and covered the hero and an elite
   drake. It now goes to the top strip, under the boss bar and between the hero panel and the Map/Journal/Menu buttons; when that strip
   would cover the hero, a boss or an elite (their sprite boxes, world -> CSS px) it goes to the bottom strip between the joystick and the
   action arc instead; when both would, to the one that covers less. Pure geometry here; main.js fitToast measures and places it.
   A spot is {center,width,top} or {center,width,bottom} (CSS px from #stage, as fitToast sets them) plus its box {box:{left,top,right,bottom}}. */
export const overlapArea=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
export function pickBannerSpot(spots,actors){let best=null,bestA=Infinity;for(const s of spots){const a=actors.reduce((n,r)=>n+overlapArea(s.box,r),0);if(a===0)return s;if(a<bestA){best=s;bestA=a;}}return best;}
/* the spots for a banner w x h CSS px. Phone: up top, then the bottom strip. Desktop (the same leftover at 1280x720: the plate at 25% sat on the
   drake and the golem's head): its own place first, then the top strip between the hero panel and the boss bar, then just above the hotbar */
export const BOSS_GAP=12;
export function armourBannerSpots(w,h,d=doc()){
 const st=d?.querySelector?.('#stage');if(!st)return null;const sr=st.getBoundingClientRect();if(!sr.width)return null;
 const vis=el=>{const r=el?.getBoundingClientRect();return r&&r.width>0&&r.height>0&&getComputedStyle(el).display!=='none'&&getComputedStyle(el).visibility!=='hidden'?r:null;};
 const spot=(c,wd,top,kind)=>({kind,center:Math.round(c),width:Math.round(wd),top:Math.round(top),box:{left:c-Math.min(w,wd)/2,right:c+Math.min(w,wd)/2,top,bottom:top+h}});
 if(!on){let l=sr.left+12,r=sr.right-12;for(const el of d.querySelectorAll('#hud .hero-hud,#hud .hud-sub')){const b=vis(el);if(b&&b.top<sr.top+sr.height*.25&&b.left<sr.left+sr.width/2)l=Math.max(l,b.right+12);}
  const boss=vis(d.querySelector('#boss-hud'));if(boss&&boss.top<sr.top+sr.height*.25&&boss.left>sr.left+sr.width/2)r=Math.min(r,boss.left-12);
  let hb=sr.bottom-12;for(const el of d.querySelectorAll('#hotbar')){const b=vis(el);if(b&&b.top>sr.top+sr.height/2)hb=Math.min(hb,b.top-12);}
  return [spot(sr.width/2,sr.width*.9,sr.height*.25,'own'),...(r-l>=Math.min(w,sr.width*.9)?[spot((l+r)/2-sr.left,r-l,8,'top')]:[]),spot(sr.width/2,sr.width*.9,hb-sr.top-h,'bottom')];}
 let l=sr.left+8,r=sr.right-8,top=sr.top+6;for(const el of d.querySelectorAll('#hud .hero-hud,#hud .hud-sub')){const b=vis(el);if(b&&b.top<sr.top+sr.height*.3&&b.left<sr.left+sr.width/2)l=Math.max(l,b.right+8);}
 for(const el of d.querySelectorAll('#m-menu button')){const b=vis(el);if(b&&b.top<sr.top+sr.height*.3&&b.left>sr.left+sr.width/2)r=Math.min(r,b.left-8);}
 /* improve20-r18b-nov3 #1 (audit13 shot 26: at 844x390 the armour plate's crest, 6 px over its box, sat on the boss bar): the top strip starts BOSS_GAP under it */const boss=vis(d.querySelector('#boss-hud'));if(boss&&boss.top<sr.top+sr.height*.3)top=Math.max(top,boss.bottom+BOSS_GAP);
 const tw=Math.min(w,r-l),tc=(l+r)/2-sr.left,tt=top-sr.top,bot=compactToastBox(d),bw=Math.min(w,bot?.width||w),bc=bot?.center??sr.width/2,bb=bot?.bottom??12;
 /* the top strip only when the whole one-line plate fits in it (at 740x360 the shield tip does not) */
 return [...(r-l>=w?[{kind:'top',center:Math.round(tc),width:Math.round(tw),top:Math.round(tt),box:{left:tc-tw/2,right:tc+tw/2,top:tt,bottom:tt+h}}]:[]),
  {kind:'bottom',center:Math.round(bc),width:Math.round(bw),bottom:bb,box:{left:bc-bw/2,right:bc+bw/2,top:sr.height-bb-h,bottom:sr.height-bb}}];}

/* improve20-r11b-nov2 #1 (audit9 a1): nothing is drawn over the hero. A centre banner ("New day!", "Level up!") keeps its place unless that
   covers the hero; then it goes just under him (a phone: the open ground, its HUD is up top; under=false, a desktop: above first), just above him, or (a short phone, 852x283, where neither fits) beside him, whichever
   covers him least. x0,y0 = its centre in #stage px, w x h its size (its crest pokes up to 6 px above the box), W x H the stage; {x,y} or null to stay. */
export function bannerSpot(x0,y0,w,h,W,H,hero,under=true){if(!hero)return null;const box=(x,y)=>({left:x-w/2,right:x+w/2,top:y-h/2-6,bottom:y+h/2}),cx=x=>Math.max(w/2+4,Math.min(W-w/2-4,x)),ok=y=>y-h/2-6>=4&&y+h/2<=H-4,c=[[x0,y0]];for(const y of under?[hero.bottom+8+h/2,hero.top-8-h/2]:[hero.top-8-h/2,hero.bottom+8+h/2])if(ok(y))c.push([x0,y]);c.push([cx(hero.left-10-w/2),y0],[cx(hero.right+10+w/2),y0]);const pick=pickBannerSpot(c.map(([x,y])=>({x,y,box:box(x,y)})),[hero]);return pick&&(pick.x!==x0||pick.y!==y0)?{x:Math.round(pick.x),y:Math.round(pick.y)}:null;}
/* A door plate (#prompt, anchored by its bottom centre) that a short phone's floor (the goal strip) kept on the hero's head: under his feet
   when that fits, else beside him on the side with room. a = its box, hero = his box (both #stage px); {bottom} or {x} or null. */
export function plateOffHero(a,hero,W,H){if(!hero||!a)return null;if(a.right<=hero.left||a.left>=hero.right||a.bottom<=hero.top+4||a.top>=hero.bottom)return null;const w=a.right-a.left,h=a.bottom-a.top,below=hero.bottom+6+h;if(below<=H-8)return {bottom:Math.round(below)};const cx=(a.left+a.right)/2,l=hero.left-8-w/2,r=hero.right+8+w/2,ok=c=>c-w/2>=8&&c+w/2<=W-8,c=ok(l)&&(cx<=(hero.left+hero.right)/2||!ok(r))?l:ok(r)?r:null;return c==null?null:{x:Math.round(c)};}
/* improve20-r12b-nov2 #5 (kidsim2 #16): a world prompt is drawn over its spot, so at the town's edge it ran off the screen ("E West pasture lane"
   at x = -45 at 1280x720, "E East road" 40-137 px past the right edge on a phone). The shift (dx, dy) that brings box a (stage px) inside a
   W x H stage with an m px margin, or null when it is already inside. Run after the other rules (main.js promptInView). */
export function clampIntoView(a,W,H,m=6){if(!a)return null;const w=a.right-a.left,h=a.bottom-a.top,dx=w>W-2*m?0:a.left<m?m-a.left:a.right>W-m?W-m-a.right:0,dy=h>H-2*m?0:a.top<m?m-a.top:a.bottom>H-m?H-m-a.bottom:0;return dx||dy?{dx:Math.round(dx),dy:Math.round(dy)}:null;}
