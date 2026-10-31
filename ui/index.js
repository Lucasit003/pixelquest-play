/* UI entry point (v2:ui). main.js imports from here and calls initUI() once at boot.
   Everything visual that is not game logic lives in dist/ui/: title, settings rows, stats,
   credits, transitions, banners, damage text, stage scaling, the mobile mode and the music
   director. Other scenes can import the pieces directly (see each module's header). */
import {unlockAudio,playMusic,duck,musicKey,setDirected,sfx,getSoundtrack,levelMusicKey,bossMusicKey} from '../core/audio.js';
import {setSheetWorld,installSheetKeys,sheetOpen} from './sheet.js';
import {applySettings} from './settings.js';
import {initScale,rescale} from './scale.js';
import {armStartFullscreen,fullscreenSupported,toggleFullscreen,fullscreenLabel} from './fullscreen.js';
import {initMobile} from './mobile.js';
import {areaTitle,levelUpBanner,celebrate,installToastHold} from './juice.js';
import {titleOpen} from './title.js';
import {openStats} from './stats.js';
import {openCredits} from './credits-screen.js';
import {fillIcons} from './icons.js';
import {loadCanvasUI} from './canvas-ui.js';
import {setDialogueWorld} from './dialogue.js';
import {nextStep} from '../game/next-step.js';
import {installStageBanners} from './stage-banners.js';
import {setProfilePersist} from './profiles-screen.js';
export {readProfiles,activeProfile,switchProfile} from './profiles.js';
export {openProfiles} from './profiles-screen.js';
export {encodeSave,decodeSave} from './savecode.js';
import {decorate} from './decorate.js';
export {titleScreen,wireTitle} from './title.js';
export {uiSettingsHTML,wireUiSettings,applySettings} from './settings.js';
export {openStats} from './stats.js';
export {openCredits} from './credits-screen.js';
export {abilityIcon,icon} from './icons.js';
export {levelUpBanner,areaTitle,banner,transition,fadeIn,fadeOut,irisOpen,irisClose,drawDamageText,celebrate} from './juice.js';
export {openSheet,closeSheet,sheetOpen} from './sheet.js';
export {say,dialogueOpen,talkPress,talkJustClosed,PORTRAITS,portraitFor} from './dialogue.js';
export {stageBanner,installStageBanners} from './stage-banners.js';
export {loadCanvasUI,drawPixelText,measurePixelText,drawPanel,drawSkin} from './canvas-ui.js';

let ctx=null,returnToTitle=false;
const later=(f,ms)=>{const t=setTimeout(f,ms);t?.unref?.();return t;};
/* ctx: {save:()=>s, world, persist, welcome, settings} from main.js. */
export function initUI(c){
 /* Hover labels follow a moving mouse: a cursor left resting on the hotbar after a click, or a player on the keyboard,
    never gets a label over the XP bar (playtest 14 Oct pass 2). */
 {const R=globalThis.document?.documentElement,w=globalThis.window;if(R&&w?.addEventListener){w.addEventListener('mousemove',e=>{if(e.movementX||e.movementY)R.dataset.pointer='moved';},{passive:true});w.addEventListener('keydown',()=>{delete R.dataset.pointer;},{passive:true});}}
 ctx=c;const d=globalThis.document,w=globalThis.window;if(!d||!w)return;
 const s=c.save();
 applySettings(s);setSheetWorld(c.world);setDialogueWorld(c.world);setProfilePersist(c.persist);installSheetKeys(w);unlockAudio(w);setDirected(true);
 initMobile({world:c.world});initScale(c.save);armStartFullscreen(c.save);
 fillIcons(d);installToastHold();loadCanvasUI();installStageBanners();
 /* Settings opened from the title screen come back to the title when they close. */
 d.querySelector('#modal')?.addEventListener('close',()=>{if(returnToTitle){returnToTitle=false;d.documentElement.classList.remove('title-panel');later(()=>{if(!d.querySelector('#modal').open)c.welcome?.();},0);}});
 /* An area card whenever the location changes (main.js writes #location). */
 const loc=d.querySelector('#location');let lastLoc=loc?.textContent||'';
 if(loc&&globalThis.MutationObserver)new MutationObserver(()=>{const t=loc.textContent.trim();if(t&&t!==lastLoc){lastLoc=t;/* in a level the stage's own name banner announces it, and the world map names its chapter itself (playtest oct14: the two cards overlapped) */if(!titleOpen()&&!c.world?.level&&t!=='WORLD MAP')areaTitle(t.toLowerCase().replace(/\b\w/g,m=>m.toUpperCase()));}}).observe(loc,{childList:true,characterData:true,subtree:true});
 /* Escape (playtest M1): main.js opens the pause dialog on keydown, and the same press's default
    action then cancelled the dialog it had just opened. Suppress that default when no dialog is open;
    main.js still receives the key. */
 w.addEventListener('keydown',e=>{if(e.key==='Escape'&&!d.querySelector('#modal')?.open&&!sheetOpen())e.preventDefault();},{capture:true});
 soundGlue(c);
 /* Every interactive press gets the same click: one UI language, one sound. */
 d.addEventListener('click',e=>{const b=e.target.closest?.('#modal button:not([data-title]):not([data-answer]),#ui-sheet button');if(b&&!b.disabled)sfx('ui.click');},true);
 /* The objective and next-unlock cards peek in for 8 s when their text changes (town only), then slide away,
    so the resting HUD stays in two corners. */
 for(const id of ['#next-unlock']){const el=d.querySelector(id);if(!el||!globalThis.MutationObserver)continue;let last='',t=0;
  new MutationObserver(()=>{const txt=el.textContent;if(txt===last)return;last=txt;if(c.world?.zone!=='town'||c.world?.level)return;el.classList.add('peek');clearTimeout(t);t=later(()=>el.classList.remove('peek'),8000);}).observe(el,{childList:true,subtree:true,characterData:true});}
 /* Hotbar cost and potion count become number badges: copy the leading number into data-n. */
 const bar=d.querySelector('#hotbar');
 /* 25 Oct: on a phone the potion badge reads the bag count only ("4", not "4+1"); the free one shows as its own "+1 free" tag above the slot (style.css). */
 const badge=()=>bar.querySelectorAll('.slot-cost').forEach(el=>{const phone=el.id==='potion-count'&&d.documentElement.classList.contains('m-mode'),n=(el.textContent.match(phone?/^\d+/:/^\d+(\+\d+)?/)||[''])[0];if(el.dataset.n!==n)el.dataset.n=n;});
 if(bar&&globalThis.MutationObserver){new MutationObserver(badge).observe(bar,{childList:true,subtree:true,characterData:true});badge();}
 /* Celebrations on main.js's own panels: an ability unlock card and a won level (their stings already play). */
 const modal=d.querySelector('#modal'),content=d.querySelector('#modal-content');
 if(modal&&content&&globalThis.MutationObserver)new MutationObserver(()=>{if(!modal.open)return;const v=modal.dataset.view;
  const u=v==='unlock'&&content.querySelector('.unlock:not([data-fx])'),r=v==='result'&&content.querySelector('.level-result[data-outcome=won]:not([data-fx])');
  const host=u||r;if(host){host.dataset.fx='1';celebrate(u?'unlock':'boss',{host,sound:false});}
  try{decorate(content,v,c.save());}catch{}}).observe(content,{childList:true,subtree:true});
 later(rescale,50);later(director,0);
}
/* Sounds for actions main.js and the scenes leave silent (playtest m17): panels opening, gold and
   potions changing (loot, buying), a boss arriving, jumping, and pressing interact at a door, sign or
   villager. Read from the DOM and keys, so no scene code changes. */
function soundGlue(c){
 const d=globalThis.document,w=globalThis.window;
 const modal=d.querySelector('#modal');let wasOpen=false;
 if(modal&&globalThis.MutationObserver)new MutationObserver(()=>{if(modal.open&&!wasOpen&&modal.dataset.view!=='welcome')sfx('ui.open');wasOpen=modal.open;}).observe(modal,{attributes:true,attributeFilter:['open','data-view']});
 const num=sel=>{const el=d.querySelector(sel);return el?parseInt(el.textContent,10):NaN;};
 let gold=num('#gold'),pots=num('#potion-count');
 const boss=d.querySelector('#boss-hud');let bossUp=boss?!boss.hidden:false;
 const watch=()=>{
  const g=num('#gold');if(!Number.isNaN(g)&&!Number.isNaN(gold)&&g!==gold)sfx(g>gold?'coin':'buy');gold=g;
  const p=num('#potion-count');if(!Number.isNaN(p)&&!Number.isNaN(pots)&&p>pots)sfx('pickup');pots=p;
  const up=boss?!boss.hidden:false;if(up&&!bossUp){sfx('boss.roar');
  /* a long run banner (Run Draft) must not sit over the boss when the fight starts (playtest 17 Oct, F5) */
  const t=d.querySelector('#toast');if(t&&!t.classList.contains('armour-hint'))t.classList.remove('show');}bossUp=up;
  later(watch,150);
 };
 later(watch,500);
 w.addEventListener('keydown',e=>{
  if(e.repeat||modal?.open||sheetOpen()||['INPUT','TEXTAREA','SELECT'].includes(e.target?.tagName))return;
  const b=c.save()?.settings?.bindings||{},k=e.key.toLowerCase();
  if(k===b.jump&&!c.world?.paused)sfx('jump');
  else if(k===b.interact&&d.querySelector('#prompt')?.textContent.trim())sfx('ui.open');
 });
}
/* Called by main.js's title Settings button. */
export function settingsFromTitle(){returnToTitle=true;globalThis.document?.documentElement.classList.add('title-panel');ctx?.settings?.();}
/* Music director: one place decides the track. Title, then the scene or biome, then boss when one
   is alive; music ducks while a panel is open. Scenes can override with playMusic(key). */
let override=null;
export function setMusicOverride(key){override=key||null;}
function director(){
 const d=globalThis.document,w=ctx?.world;
 try{
  const modal=d.querySelector('#modal'),view=modal?.open?modal.dataset.view:'';
  let key;
  if(sheetOpen()&&d.querySelector('#ui-sheet')?.dataset.view==='credits')key='credits';
  else if(titleOpen()||(view==='settings'&&returnToTitle))key='title';
  else if(override)key=override;
  else if(w){/* a lost fight leaves the boss alive: once the level has ended, the boss track gives way to the area's own (playtest 14 Oct pass 2) */const boss=!w.ended&&w.enemies?.some?.(e=>e.boss&&e.hp>0);const own=w.level?.kind==='level'&&getSoundtrack()!=='classic';/* every level and every boss has its own track (owner, 14 Oct) */key=boss?(own?bossMusicKey(w.level.id):'boss'):own?levelMusicKey(w.level.id):musicKey(w.biome||w.scene||w.zone||'town');}
  if(key)playMusic(key);
  const R=d.documentElement,was=R.className;
  R.classList.toggle('in-town',!!w&&w.zone==='town'&&!w.level);R.classList.toggle('in-level',!!w?.level);
  R.classList.toggle('map-open',d.querySelector('#hud')?.style.visibility==='hidden');
  /* the next-step strip's icon follows where the step points: gate, Library, Guild or a map pad */
  const ob=d.querySelector('#objective');if(ob){try{const k=nextStep(ctx.save())?.target?.kind||'';if(ob.dataset.kind!==k)ob.dataset.kind=k;}catch{}}
  if(R.className!==was)rescale();
  duck(!!(modal?.open&&view!=='welcome'&&view!=='cinematic')||sheetOpen());
 }catch{}
 later(director,250);
}
export {levelUpBanner as onLevelUp};
export function pauseExtrasHTML(inTown){return `${fullscreenSupported()?`<button id="pause-fullscreen" class="fs-toggle">${fullscreenLabel()}</button>`:''}<button id="pause-stats">Stats</button><button id="pause-credits">Credits</button>${inTown?'<button id="pause-title">Title screen</button>':''}`;}
export function wirePauseExtras({save,welcome}){
 const d=globalThis.document;
 d.querySelector('#pause-stats')?.addEventListener('click',()=>openStats(save()));
 {const b=d.querySelector('#pause-fullscreen');b?.addEventListener('click',()=>{toggleFullscreen();setTimeout(()=>{b.innerHTML=`${fullscreenLabel()}`;},250);});}
 d.querySelector('#pause-credits')?.addEventListener('click',()=>openCredits());
 d.querySelector('#pause-title')?.addEventListener('click',()=>welcome?.());
}
