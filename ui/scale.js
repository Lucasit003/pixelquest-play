/* Stage sizing (docs/STYLE_GUIDE.md rule 2; reworked 14 Oct after the owner's "the game is not going full page
   of my browser, it just stays small"). The canvas is 480x270 world pixels, always drawn nearest-neighbour
   (image-rendering: pixelated), never smoothed.
   Desktop (desktopFit): by default the stage FILLS the window -- its limiting side is the whole window --
   snapping to a whole number when that loses under 5%. Settings > "Pixel-perfect scaling" ON keeps every game
   pixel the same size: the largest whole-number scale, letterboxed on the styled backdrop with the ornate frame.
   (The old layout took 48-64 px of padding plus the hint line off the window and used whole numbers only, so a
   1366x768 window got a 960x540 box.) The DOM HUD grows with the stage through --hz (CSS zoom, style.css
   "HUD zoom"), in steps that keep Pixel Operator on whole device pixels.
   Mobile mode: always the largest whole number, letterboxed (rubric F7), unchanged.
   Fires `pq:scale` on window with {scale, integer, width, height, hud} for scenes that care. */
import {setView,setHubView} from '../game/stage.js';
const BASE_W=480,BASE_H=270;
export const DESK_NARROW=1.55,DESK_MIN_W=320;
let saveRef=()=>null,last='',townRef=()=>false,lastTown=null;
/* ownernotes-b-nov1 #2 (owner, 1 Nov: "the screen overall looks a little bit too close"): Settings > Display > Town view. In Oakhaven
   (outdoors and in rooms) the desktop view is the window's usual view times the zoom, so the hero sees more of the town; Close is the old
   view. The world map already shows its whole chapter picture, and levels keep their 480x270 view: their maps are 320 rows tall, the arena
   maps and every boss arena are exactly 480 wide and the waves spawn at the arena's edges, so a wider level view would show the void past
   the art and enemies appearing on screen. Phones keep their whole-number 2x view (their screen is the limit). */
export const VIEWS=Object.freeze({close:1,normal:1.2,far:1.4}),VIEW_DEFAULT='normal';
export const viewKey=s=>Object.hasOwn(VIEWS,s?.settings?.view??'')?s.settings.view:VIEW_DEFAULT;
export const viewZoom=s=>VIEWS[viewKey(s)];
export function initScale(getSave,{town}={}){
 saveRef=getSave||saveRef;if(typeof town==='function')townRef=town;
 const w=globalThis.window;if(!w?.addEventListener)return;
 w.addEventListener('resize',rescale);w.addEventListener('orientationchange',()=>setTimeout(rescale,120));
 w.visualViewport?.addEventListener?.('resize',rescale);
 globalThis.document?.addEventListener?.('fullscreenchange',()=>setTimeout(rescale,0));
 rescale();
}
export function pickScale(aw,ah,cw,ch,{integer=true,mobile=false}={}){
 const fit=Math.max(.25,Math.min(aw/cw,ah/ch)),k=Math.floor(fit+1e-6);
 /* Phones too: the art director's rule is the largest whole-number scale with letterboxing (the side
    bars hold the controls). Desktop keeps a fit only when 1x would be absurdly small. */
 const useInt=integer&&k>=1&&(mobile||k/fit>=.66);
 const scale=useInt?k:fit;
 return {scale,integer:useInt,width:Math.round(cw*scale),height:Math.round(ch*scale)};
}
/* Pixel-perfect on desktop: an explicit settings.pixelPerfect wins; otherwise phones keep the old integerScale
   default (on) and desktop fills the window. */
export const pixelPerfect=(s,mobile=false)=>typeof s?.settings?.pixelPerfect==='boolean'?s.settings.pixelPerfect:mobile?s?.settings?.integerScale!==false:false;
/* The HUD zoom: the HUD was laid out for a 540 px tall stage; it grows in steps of one device pixel per font pixel. */
export const hudZoom=(stageH,dpr=1)=>{const d=Math.max(1,Math.round(dpr*4)/4);return Math.max(1,Math.floor(stageH/540*d+1e-6)/d);};
/* Desktop: fill the window (or the largest whole number, pixel-perfect), never a small box in the middle. */
export function desktopFit(vw,vh,{pixelPerfect:pp=false,dpr=1}={}){
 const fit=Math.max(.25,Math.min(vw/BASE_W,vh/BASE_H)),k=Math.floor(fit+1e-6);
 const integer=k>=1&&(pp||k/fit>=.95),scale=integer?k:fit;
 const width=Math.min(vw,Math.round(BASE_W*scale)),height=Math.min(vh,Math.round(BASE_H*scale));
 return {scale,integer,width,height,hud:hudZoom(height,dpr)};
}
/* ready2fix-oct30 #13: the narrow-view fit for a squarer desktop window, or null for 16:10 and wider (see rescale) */
export function deskNarrowFit(vw,vh,dpr=1){if(!(vw>0&&vh>0)||vw/vh>=DESK_NARROW)return null;let sc=vh/BASE_H;const w=Math.max(DESK_MIN_W,Math.min(BASE_W,Math.floor(vw/sc)));if(w*sc>vw)sc=vw/w;const height=Math.round(BASE_H*sc);return {scale:sc,integer:false,view:[w,BASE_H],width:Math.min(vw,Math.round(w*sc)),height,hud:hudZoom(height,dpr)};}
/* The town's view at zoom z: the window's usual view (close: 480x270, or the narrow fit's columns x 270) times z, at the scale that fits.
   That scale snaps to whole device pixels when one is within 6% (every game pixel the same size, as crisp as the art), else it is the exact
   fit, nearest-neighbour as the stage always is; pixel-perfect keeps a whole CSS scale and letterboxes. Never closer than the usual view. */
export function hubFit(vw,vh,{zoom=1,dpr=1,pp=false,close=[BASE_W,BASE_H]}={}){
 const tw=close[0]*zoom,th=close[1]*zoom,fit=Math.max(.25,Math.min(vw/tw,vh/th)),dev=fit*dpr,k=Math.round(dev);let sc=fit,integer=false;
 if(pp&&fit>=1){sc=Math.floor(fit+1e-6);integer=true;}else if(k>=1&&Math.abs(k-dev)/dev<=.06){sc=k/dpr;integer=true;}
 const w=Math.max(64,Math.min(Math.round(tw),Math.floor(vw/sc+1e-6))),h=Math.max(64,Math.min(Math.round(th),Math.floor(vh/sc+1e-6))),height=Math.round(h*sc);
 return {scale:sc,integer,view:[w,h],width:Math.round(w*sc),height,hud:hudZoom(height,dpr)};}
/* main.js calls this every frame: the canvas swaps between the town's view and the level view when the zone changes, before the frame runs */
export function syncZone(){const t=!!townRef();if(t!==lastTown){lastTown=t;rescale();}}
export function rescale(){
 const d=globalThis.document,w=globalThis.window;if(!d||!w)return;
 const stage=d.querySelector('#stage'),cv=d.querySelector('#world');if(!stage||!cv)return;
 const mobile=d.documentElement.classList.contains('m-mode'),s=saveRef(),pp=pixelPerfect(s,mobile);
 const vw=w.visualViewport?.width||w.innerWidth||0,vh=w.visualViewport?.height||w.innerHeight||0;if(!vw||!vh)return;
 const dpr=w.devicePixelRatio||1;
 /* Phones (playtest 3): the game's VIEW shrinks instead of cropping. The canvas becomes floor(screen/k) world
    pixels (370x180 at 740x360, 422x195 at 844x390) shown at an exact k = 2 (3 on tablets), and the cameras
    read the view size (game/stage.js setView), so the hero and the banners are always in view. The world
    map keeps the full 480x270 at the largest whole number that fits. Desktop: 480x270. */
 const root=d.documentElement,mapOpen=root.classList.contains('map-open');
 let fitted=null;
 if(mobile&&pp&&!mapOpen){const k=Math.max(2,Math.ceil(vw/BASE_W),Math.ceil(vh/BASE_H)),w=Math.min(BASE_W,Math.floor(vw/k)),h=Math.min(BASE_H,Math.floor(vh/k));fitted={scale:k,integer:true,view:[w,h],width:w*k,height:h*k};}
 /* ready2fix-oct30 #13: a squarer desktop window (4:3, 5:4, 3:2; not 16:10) letterboxed the 16:9 stage with bars of up to a quarter of
    the screen. Like a touch tablet, the VIEW narrows instead: the full 270 rows fill the window height and the canvas is as many
    columns as fit (never under DESK_MIN_W, so a near-square window keeps a small bar). One uniform scale, so pixels never stretch;
    pixel-perfect mode and the world map keep the whole 480x270 view. */
 if(!mobile&&!pp&&!mapOpen)fitted=deskNarrowFit(vw,vh,dpr);
 const lvView=fitted?fitted.view:[BASE_W,BASE_H];
 const lv=fitted||(mobile?pickScale(vw,vh,BASE_W,BASE_H,{integer:mapOpen?false:pp,mobile}):desktopFit(vw,vh,{pixelPerfect:pp,dpr}));
 /* ownernotes-b-nov1 #2: the town's own view (desktop, map closed, Town view above Close); STAGE.camW/camH stay the level view */
 const z=!mobile&&!mapOpen?viewZoom(s):1,hub=z>1?hubFit(vw,vh,{zoom:z,dpr,pp,close:lvView}):null,inTown=!!hub&&!!townRef();lastTown=!!townRef();
 setView(lvView[0],lvView[1]);setHubView(...(hub?hub.view:lvView));
 const rr=inTown?hub:lv,want=inTown?hub.view:lvView;
 if(cv.width!==want[0]||cv.height!==want[1]){cv.width=want[0];cv.height=want[1];}
 const hz=mobile?1:rr.hud;
 const key=[vw,vh,dpr,mobile,pp,mapOpen,want.join('x'),rr.width,rr.height,inTown].join(',');if(key===last)return;last=key;
 if(mobile){stage.style.width='';stage.style.height='';}
 else{stage.style.width=rr.width+'px';stage.style.height=rr.height+'px';}
 cv.style.width=rr.width+'px';cv.style.height=rr.height+'px';
 root.style.setProperty('--px',String(rr.scale));root.style.setProperty('--hz',String(hz));root.style.setProperty('--stage-h',rr.height+'px');
 /* the letterbox: the frame shows on a side only when there is room for it; the key hint line lives in the
    bottom bar only when that bar is tall enough to read it */
 const gapX=(vw-rr.width)/2,gapY=(vh-rr.height)/2;
 root.classList.toggle('stage-fill-x',!mobile&&gapX<24);root.classList.toggle('stage-fill-y',!mobile&&gapY<24);
 root.classList.toggle('hint-room',!mobile&&gapY>=60);
 root.dataset.scaleMode=mobile?'mobile':pp?'pixel':'fill';
 stage.dataset.scale=inTown?`${rr.integer?rr.scale+'x':'fit'}-town-${want.join('x')}`:fitted?`${rr.scale}x-view-${want.join('x')}`:rr.integer?`${rr.scale}x`:'fit';stage.dataset.hud=String(hz);
 try{w.dispatchEvent(new w.CustomEvent('pq:scale',{detail:{...rr,hud:hz}}));}catch{}
}
