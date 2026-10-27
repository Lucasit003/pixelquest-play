/* Fullscreen (14 Oct, owner: "make it start as full screen"). Browsers only enter fullscreen from a user gesture,
   so the game fills the window from the first frame (ui/scale.js) and asks for fullscreen on the player's first
   click, tap or key on the title screen, unless Settings > "Start in fullscreen" (settings.startFullscreen, default
   on) is off. F and the Settings/Pause buttons toggle it. Esc leaves fullscreen as the browser does; escFromFullscreen()
   tells the game's own Esc handler to stand aside for that press, so it never also opens Pause.
   Phone mode asks on its own first tap (ui/mobile.js), so the title-screen request skips it. */
const doc=()=>globalThis.document;
export const fullscreenSupported=()=>!!doc()?.documentElement?.requestFullscreen&&doc()?.fullscreenEnabled!==false;
export const isFullscreen=()=>!!doc()?.fullscreenElement;
export const startFullscreen=s=>s?.settings?.startFullscreen!==false;
let exitedAt=-1e9;
const now=()=>globalThis.performance?.now?.()??Date.now();
export function enterFullscreen(){
 const el=doc()?.documentElement;if(!el?.requestFullscreen||isFullscreen())return false;
 try{const p=el.requestFullscreen({navigationUI:'hide'});p?.catch?.(()=>{});}catch{return false;}
 return true;
}
export function exitFullscreen(){if(!isFullscreen())return false;try{const p=doc().exitFullscreen();p?.catch?.(()=>{});}catch{}return true;}
export function toggleFullscreen(){return isFullscreen()?(exitFullscreen(),false):enterFullscreen();}
/* 24 Oct playtest: in fullscreen a panel took two Esc presses (the first only left fullscreen). Where the browser has
   the Keyboard Lock API (Chrome, Edge), fullscreen locks Esc: a press reaches the game and closes the panel at once, and
   holding Esc still leaves fullscreen (the browser says so on entry); the held key's repeats do nothing in the game.
   Elsewhere Esc stays the browser's. */
let escLocked=false;
const lockEsc=()=>{const k=globalThis.navigator?.keyboard;if(!k?.lock)return;try{k.lock(['Escape']).then(()=>{escLocked=isFullscreen();},()=>{});}catch{}};
const unlockEsc=()=>{escLocked=false;try{globalThis.navigator?.keyboard?.unlock?.();}catch{}};
/* An Esc that the browser is using to leave fullscreen (still fullscreen at keydown, or it just left). */
export const escFromFullscreen=e=>escLocked&&isFullscreen()?!!e?.repeat:isFullscreen()||now()-exitedAt<400;
let armed=null;
/* The first click or key (a click, not pointerdown: the resize must not move the button between press and release) (not Esc, not a modifier) anywhere asks once; later gestures never ask again. */
export function armStartFullscreen(getSave){
 const w=globalThis.window,d=doc();if(!w?.addEventListener||!d)return;
 d.addEventListener?.('fullscreenchange',()=>{if(isFullscreen())lockEsc();else{exitedAt=now();unlockEsc();}});
 if(armed)return;
 const off=()=>{w.removeEventListener('click',fire,true);w.removeEventListener('keydown',fire,true);armed=null;};
 const fire=e=>{
  if(e.type==='keydown'&&['Escape','Shift','Control','Alt','Meta','Tab','CapsLock'].includes(e.key))return;
  /* a scripted click carries no user activation; wait for the player's own */
  const ua=globalThis.navigator?.userActivation;if(ua&&!ua.isActive)return;
  off();
  if(d.documentElement.classList.contains('m-mode')||!startFullscreen(getSave?.()))return;
  enterFullscreen();
 };
 armed=fire;w.addEventListener('click',fire,true);w.addEventListener('keydown',fire,true);
}
export const fullscreenLabel=()=>isFullscreen()?'Exit fullscreen':'Fullscreen';
