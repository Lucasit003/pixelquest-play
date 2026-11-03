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
 const w=globalThis.window,d=doc();if(!w?.addEventListener||!d)return;watchFullscreenLabels();
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
/* fullscreen-view-nov1 (owner, 1 Nov: "make a fix that makes it a full screen button"): an iPhone cannot put a web page in fullscreen
   (Safari dropped the API on iPhone in iOS 17.4; WebKit bug 212934 is WONTFIX), so there the Full screen button explains the home-screen
   app, which plays edge to edge with no Safari bars. 'api': the browser can go fullscreen (desktop, Android, iPad); 'home': iPhone Safari,
   not installed yet; null: already the installed app, or no way at all. */
export const standalone=()=>{const w=globalThis.window;try{return w?.navigator?.standalone===true||!!w?.matchMedia?.('(display-mode: standalone)').matches||!!w?.matchMedia?.('(display-mode: fullscreen)').matches;}catch{return false;}};
export function fullscreenOption(){if(fullscreenSupported())return 'api';return /iPhone|iPod/.test(globalThis.navigator?.userAgent||'')&&!standalone()?'home':null;}
export const HOME_HOWTO='<p class="fs-howto" role="note"><b>Full screen on iPhone:</b> Safari can\'t hide its bars for a website. Tap <b>Share</b>, then <b>Add to Home Screen</b>, and open PixelQuest from its new icon. It fills the whole screen, like an app.</p>';
/* Shows the how-to after the button once (a second press hides it). */
export function toggleHowTo(btn){const n=btn?.nextElementSibling;if(n?.classList?.contains('fs-howto')){n.remove();return false;}btn?.insertAdjacentHTML?.('afterend',HOME_HOWTO);return true;}
/* improve20-r13c-nov2 #6 (audit10 "also seen"): the desktop Pause menu said "Exit fullscreen" in a window that was not fullscreen. The API's
   fullscreenElement can be set while the page does not fill the screen (a headless or embedded browser grants the request without
   resizing, and the label was read once when the menu opened and again 250 ms after a press, before a slow OS animation ended). The label
   now reads what the player sees: fullscreen only when the API says so AND the viewport is the screen's size (within FS_SLACK px; a headless Chrome grants the request with a 1280x720 window on an 800x600 screen), and every
   fullscreen button is relabelled on each fullscreenchange and resize (watchFullscreenLabels). */
export const FS_SLACK=4;
export function shownFullscreen(win=globalThis.window,d=doc()){if(!d?.fullscreenElement)return false;const sc=win?.screen,w=win?.innerWidth,h=win?.innerHeight;if(!sc?.width||!sc?.height||!w||!h)return true;const z=win.visualViewport?.scale||1;return Math.abs(w*z-sc.width)<=FS_SLACK&&Math.abs(h*z-sc.height)<=FS_SLACK;}
export const fullscreenLabel=()=>shownFullscreen()?'Exit fullscreen':'Fullscreen';
/* every fullscreen button on the page, relabelled from the state (the Settings one keeps its key badge) */
export function refreshFullscreenLabels(d=doc()){if(!d?.querySelectorAll)return;const label=fullscreenLabel();for(const b of d.querySelectorAll('.fs-toggle:not([data-fs])')){if(b.id==='fs-home')continue;const t=[...b.childNodes].find(n=>n.nodeType===3);if(t)t.nodeValue=label;else b.insertBefore(d.createTextNode(label),b.firstChild);}}
let watching=false;
export function watchFullscreenLabels(){const w=globalThis.window,d=doc();if(watching||!w?.addEventListener||!d?.addEventListener)return;watching=true;const go=()=>refreshFullscreenLabels(d);d.addEventListener('fullscreenchange',go);w.addEventListener('resize',go,{passive:true});}
