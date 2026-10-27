/* Juice for every scene (v2:ui).
   Transitions:  await fadeOut(), await fadeIn(), await irisClose(x,y), await irisOpen(x,y), or
                 await transition('iris'|'fade', async()=>{ ...swap the scene... }, {x,y,color}).
                 x,y are 0..1 of the stage (default centre: the hero is usually there).
   Banners:      levelUpBanner(level), areaTitle(name, sub), banner(text, sub, kind).
   Canvas text:  drawDamageText(c, f, alpha) draws a floating combat number in the UI font.
   Everything respects reduced motion (html[data-motion=reduced] or the OS setting): transitions
   become short cross-fades and banners stop moving. */
import {sting} from '../core/audio.js';
import {drawPixelText} from './canvas-ui.js';
import {NUMBER} from '../game/feel.js';
const doc=()=>globalThis.document;
export function motionReduced(){
 const r=doc()?.documentElement?.dataset?.motion;if(r)return r==='reduced';
 try{return !!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;}catch{return false;}
}
function layer(){
 const d=doc();if(!d)return null;
 let el=d.querySelector('#ui-transition');
 if(!el){el=d.createElement('div');el.id='ui-transition';el.setAttribute('aria-hidden','true');(d.querySelector('#stage')||d.body).appendChild(el);}
 return el;
}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const frame=()=>wait(24);
async function run(kind,closing,{x=.5,y=.5,ms,color='#0b0d10'}={}){
 const el=layer();if(!el)return;
 const reduced=motionReduced();
 if(reduced&&kind==='iris')kind='fade';
 ms=ms??(reduced?140:kind==='iris'?520:340);
 el.style.setProperty('--ix',`${x*100}%`);el.style.setProperty('--iy',`${y*100}%`);el.style.setProperty('--ms',`${ms}ms`);el.style.background=color;
 el.className=`${kind} ${closing?'from-open':'from-closed'}`;
 await frame();await frame();
 el.className=`${kind} ${closing?'closed':'open'}`;
 await wait(ms+20);
 if(!closing)el.className='';
}
export const fadeOut=(o)=>run('fade',true,o);
export const fadeIn=(o)=>run('fade',false,o);
export const irisClose=(x,y,o={})=>run('iris',true,{x,y,...o});
export const irisOpen=(x,y,o={})=>run('iris',false,{x,y,...o});
export async function transition(kind='fade',mid,o={}){await run(kind,true,o);try{await mid?.();}finally{await run(kind,false,o);}}

/* ---------- banners, queued (rubric F8: announcements never stack) ----------
   Level-up banners and area titles wait their turn, and wait for main.js's #toast to finish; a toast
   that arrives while a banner is up is held until the banner has gone. */
const Q=[];let busy=false,holdT=0;
const tick=(f,ms)=>{const t=setTimeout(f,ms);t?.unref?.();return t;};
const toastUp=()=>!!doc()?.querySelector('#toast.show:not(.held)');
function pump(){
 if(busy||!Q.length)return;
 if(toastUp()){tick(pump,250);return;}
 const {run,ms}=Q.shift();busy=true;run();
 tick(()=>{busy=false;doc()?.querySelector('#toast.held')?.classList.remove('held');pump();},ms+200);
}
function announce(key,run,ms){if(key&&Q.some(q=>q.key===key))return;Q.push({key,run,ms});pump();}
export function installToastHold(){
 const t=doc()?.querySelector('#toast');if(!t||!globalThis.MutationObserver)return;
 /* also held while the world map is open (main.js hides #hud for it): hub news waits for the hub */
 /* ...and while a dialogue box is up: one voice at a time */
 const mapOpen=()=>doc()?.querySelector('#hud')?.style.visibility==='hidden'||!!doc()?.querySelector('#ui-dialogue.show');
 new MutationObserver(()=>{if((busy||mapOpen())&&t.classList.contains('show')&&!t.classList.contains('held')){t.classList.add('held');const wait=()=>{if(mapOpen()||busy)tick(wait,200);else t.classList.remove('held');};tick(wait,200);}}).observe(t,{attributes:true,attributeFilter:['class']});
}
let bannerTimer=0;
export function banner(text,sub='',kind='info',ms=2200){
 announce('b:'+text+sub,()=>{
  const d=doc();if(!d)return;
  const host=d.querySelector('#stage')||d.body;
  let el=d.querySelector('#ui-banner');
  if(!el){el=d.createElement('div');el.id='ui-banner';el.setAttribute('role','status');el.setAttribute('aria-live','polite');host.appendChild(el);}
  el.className=`ui-banner ${kind}`;el.innerHTML=`<span class="b-crest" aria-hidden="true"></span><strong>${text}</strong>${sub?`<small>${sub}</small>`:''}`;
  void el.offsetWidth;el.classList.add('show');
  clearTimeout(bannerTimer);bannerTimer=tick(()=>el.classList.remove('show'),ms);
 },ms);
}
export function levelUpBanner(level){banner('Level up!',`Hero level ${level}`,'levelup',2600);celebrate('levelup');}
export function areaTitle(name,sub=''){
 if(!name)return;
 announce('a:'+name,()=>{
  const d=doc();if(!d)return;
  const host=d.querySelector('#stage')||d.body;
  let el=d.querySelector('#ui-area');
  if(!el){el=d.createElement('div');el.id='ui-area';el.setAttribute('aria-hidden','true');host.appendChild(el);}
  el.innerHTML=`<span class="area-rule"></span><strong>${name}</strong>${sub?`<small>${sub}</small>`:''}<span class="area-rule"></span>`;
  el.classList.remove('show');void el.offsetWidth;el.classList.add('show');
  clearTimeout(el._t);el._t=tick(()=>el.classList.remove('show'),2600);
 },2600);
}

/* ---------- damage numbers ----------
   Drawn into the world canvas in canvas pixels, so they sit on the same pixel grid as the art.
   Pixel Operator at 8/16 px sits on its own pixel grid; outline is a 1 px dark ring drawn as 8 offsets
   (no blur). A hit pops one size up for its first frames, then rises and fades; crits are gold, a
   size bigger and shake for a moment. Heals keep their colour. */
const FONT='"Pixel Operator", monospace';
/* Enemy labels use one centred slot. Other numbers (healing, pickups) fan out: the first sits centred, the
   next ones step ±8 px and start a little higher; at most three are shown per target at once. */
const slots=new WeakMap(),recent=[];
function slotOf(f){
 let s=slots.get(f);if(s!==undefined)return s;
 const now=performance.now();for(let i=recent.length-1;i>=0;i--)if(now-recent[i].t>700)recent.splice(i,1);
 const near=recent.filter(r=>Math.abs(r.x-f.x)<28&&Math.abs(r.y-f.y)<28);
 s=near.length;recent.push({x:f.x,y:f.y,t:now});slots.set(f,s);return s;
}
export function drawDamageText(c,f,alpha){
 const slot=f.enemy?0:slotOf(f);if(slot>=3)return;
 const life=1-alpha,size=f.size||(f.big?16:12),crit=size>=16||!!f.big;
 /* juice-oct27: every number punches in at twice its size for its first frames (NUMBER.pop of its life), a crit for longer */
 const pop=!motionReduced()&&/^[-+−]?\d/.test(String(f.text))&&life<(crit?NUMBER.critPop:NUMBER.pop);
 const rise=Math.round((1-(1-life)*(1-life))*(crit?26:20))+slot*7;
 const shake=crit&&life<.25&&!motionReduced()?Math.round(Math.sin(life*90)*1.5):0;
 const x=Math.round(f.x+[0,8,-8][slot]+shake),y=Math.round(f.y-rise);
 c.save();c.globalAlpha=Math.min(1,alpha*1.6);
 /* The baked bitmap font (ui/font, Pixel Operator): 12 px numbers are the regular cut, 16 px crits
    the bold cut, popping to 2x for their first frames. The font file is the fallback. */
 if(drawPixelText(c,String(f.text),x,y,{scale:pop?2:1,color:f.color||'#f4ead2',outline:'#1a0f0b',bold:crit,align:'center'})!==false){c.restore();return;}
 c.font=`${crit?700:600} ${pop?size*2:size}px ${FONT}`;c.textAlign='center';c.textBaseline='alphabetic';
 const text=String(f.text);
 c.fillStyle='#1a0f0b';
 for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]])c.fillText(text,x+dx,y+dy);
 c.fillStyle=f.color||'#f4ead2';c.fillText(text,x,y);
 c.restore();
}

/* ---------- celebrations ----------
   celebrate('unlock'|'boss'|'levelup', {host, sound}) plays a downloaded effect sprite (Foozle's
   Pixel Magic Effects, CC0, baked to ui/skin/fx-*.png at 64 px frames, shown at 4x) over the host
   (default: the stage) and the matching sting. Pass sound:false when the caller already played one. */
const FX={unlock:{strip:'swirl',frames:10,ms:900,sting:'unlock',loops:2},boss:{strip:'burst',frames:7,ms:700,sting:'victory',loops:1},levelup:{strip:'burst',frames:7,ms:700,sting:'levelup',loops:1}};
export function celebrate(kind,{host,sound=true}={}){
 const f=FX[kind],d=doc();if(!f||!d)return;
 if(sound)sting(f.sting);
 host=host||d.querySelector('#stage')||d.body;
 const el=d.createElement('span');el.className=`ui-fx fx-${f.strip}`;el.setAttribute('aria-hidden','true');
 el.style.setProperty('--frames',f.frames);el.style.setProperty('--ms',`${f.ms}ms`);el.style.setProperty('--loops',motionReduced()?0:f.loops);
 try{if(globalThis.getComputedStyle?.(host)?.position==='static')host.style.position='relative';}catch{}
 host.appendChild(el);
 const tm=setTimeout(()=>el.remove(),motionReduced()?600:f.ms*f.loops+200);tm?.unref?.();
 return el;
}
