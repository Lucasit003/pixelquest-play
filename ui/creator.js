/* The character creator (creator, 15 Oct; research in docs/design/research/CHARACTER_CREATOR_PILOT.md section 5).
   Per class: a body (the original or the second PixelLab body, s.heroBody[class] = 'f'), and colours for hair, skin and
   eyes (s.heroLook[class] = {hair, skin, eyes}, ids from gfx/actors/hero-palette.js; null = the art's own colours).
   Free, any time: in the new-game hero select (ui/title.js, step "look") and at Home (main.js appearance()). Looks never
   change stats. A part a body cannot show cleanly (a hood over the hair, a mask over the eyes) is listed but not offered.
   The preview is the real game sprite: gfx/actors/hero-sprites.js draws it through the same recolour the world uses.
   Keyboard: each row is a radio group (Tab between rows, arrow keys / Home / End inside a row); touch: 44 px targets.
   Styling: ui/creator.css (kept out of style.css), added once by creatorStyles(). */
import {HAIR_COLOURS,SKIN_TONES,EYE_COLOURS,LOOK_PARTS,lookParts,normalizeLook,isDefaultLook} from '../gfx/actors/hero-palette.js';
import {HERO_BODIES,heroArtKey,setHeroBodies} from '../gfx/actors/hero-directions.js';
import {drawHeroFigure,drawHeroBust,setHeroColours,preloadHero} from '../gfx/actors/hero-sprites.js';
import {heroDrawId} from '../gfx/actors/hero-looks.js';
import {loadSprite} from '../gfx/actors/sprites.js';

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const PART_LABEL={body:'Body',hair:'Hair colour',skin:'Skin tone',eyes:'Eye colour'};
/* Why a part is not offered on a body (shown in place of the swatches). */
export const LOOK_NOTES={mage:{hair:'Hidden under the hood'},rogue:{hair:'Hidden under the hood'},'rogue-f':{eyes:'Hidden behind the mask'},
 'mage-f':{eyes:'Too small to recolour'},berserker:{eyes:'Too small to recolour'},'berserker-f':{eyes:'Hidden behind the war paint'},
 'paladin-f':{skin:'This skin colour cannot change yet'},'summoner-f':{eyes:'Her eyes are closed'}};
const OPTIONS={hair:HAIR_COLOURS,skin:SKIN_TONES,eyes:EYE_COLOURS};

/* ---- state (pure: tests drive these without a DOM) ---- */
export const bodyOf=(s,cls)=>HERO_BODIES[cls]?.includes(s?.heroBody?.[cls])?s.heroBody[cls]:null;
export const lookOf=(s,cls)=>normalizeLook(s?.heroLook?.[cls]);
/* the art key the class is drawn with under a body choice ('warrior' or 'warrior-f') */
export const keyFor=(cls,body)=>heroArtKey(cls,body);
/* Set one part: part 'body' takes null or a body letter; hair/skin/eyes take an option id or null. Returns the new look. */
export function setPart(s,cls,part,value){
 if(part==='body'){s.heroBody??={};if(value&&HERO_BODIES[cls]?.includes(value))s.heroBody[cls]=value;else delete s.heroBody[cls];}
 else if(Object.hasOwn(LOOK_PARTS,part)){const L=lookOf(s,cls);L[part]=value&&Object.hasOwn(LOOK_PARTS[part],value)?value:null;s.heroLook??={};if(isDefaultLook(L))delete s.heroLook[cls];else s.heroLook[cls]=L;}
 return {body:bodyOf(s,cls),...lookOf(s,cls)};}
export function resetLook(s,cls){setPart(s,cls,'body',null);if(s.heroLook)delete s.heroLook[cls];return {body:null,...lookOf(s,cls)};}
/* A random body, then a colour for every part that body offers (rnd: () => [0,1)). */
export function randomLook(s,cls,rnd=Math.random){const bodies=[null,...(HERO_BODIES[cls]||[])],pick=a=>a[Math.min(a.length-1,Math.floor(rnd()*a.length))];
 setPart(s,cls,'body',pick(bodies));const P=lookParts(keyFor(cls,bodyOf(s,cls)));
 for(const k of ['hair','skin','eyes'])setPart(s,cls,k,P[k]?pick(Object.keys(OPTIONS[k])):null);return {body:bodyOf(s,cls),...lookOf(s,cls)};}
/* hand the save's choices to the renderer (call after every change and after loading a save) */
export function applyLooks(s){setHeroBodies(s?.heroBody);setHeroColours(s?.heroLook);}
/* true when a class is drawn other than as it ships (the title's turntable images only show the original) */
export const customised=(s,cls)=>!!bodyOf(s,cls)||!isDefaultLook(s?.heroLook?.[cls]);

/* ---- markup ---- */
const swatch=(part,id,o,on,off)=>`<button type="button" class="cr-sw${id?'':' cr-orig'}" role="radio" aria-checked="${on}" tabindex="${on?0:-1}" data-cr-part="${part}" data-cr-v="${id||''}" ${off?'disabled':''} aria-label="${esc(id?o.name:'Original colours')}" title="${esc(id?o.name:'Original')}"${id?` style="--sw:#${o.ramp[1]};--sw-hi:#${o.ramp[o.ramp.length-1]};--sw-lo:#${o.ramp[0]}"`:''}><i aria-hidden="true"></i></button>`;
function rowHTML(cls,body,look,part){const key=keyFor(cls,body),offered=lookParts(key)[part],v=look[part],note=LOOK_NOTES[key]?.[part]||'Not shown on this hero';
 const name=v?OPTIONS[part][v].name:'Original';
 return `<div class="cr-row${offered?'':' cr-off'}" role="radiogroup" aria-labelledby="cr-l-${part}" data-cr-row="${part}"${offered?'':' aria-disabled="true"'}>
 <div class="cr-head"><span class="cr-label" id="cr-l-${part}">${PART_LABEL[part]}</span><span class="cr-value" data-cr-value="${part}">${offered?esc(name):''}</span></div>
 ${offered?`<div class="cr-swatches">${swatch(part,'',null,!v,false)}${Object.entries(OPTIONS[part]).map(([id,o])=>swatch(part,id,o,v===id,false)).join('')}</div>`:`<p class="cr-note">${esc(note)}</p>`}</div>`;}
function bodyRowHTML(cls,body){const opts=[null,...(HERO_BODIES[cls]||[])];
 return `<div class="cr-row" role="radiogroup" aria-labelledby="cr-l-body" data-cr-row="body"><div class="cr-head"><span class="cr-label" id="cr-l-body">${PART_LABEL.body}</span></div>
 <div class="cr-bodies">${opts.map((b,i)=>`<button type="button" class="cr-body" role="radio" aria-checked="${b===body}" tabindex="${b===body?0:-1}" data-cr-part="body" data-cr-v="${b||''}" aria-label="Body ${i+1}"><canvas data-cr-bodycv="${b||''}" width="56" height="56" aria-hidden="true"></canvas></button>`).join('')}</div></div>`;}
/* The panel for one class. gear: start with the worn weapon and armour shown. */
export function creatorHTML(cls,s,{gear=true}={}){const body=bodyOf(s,cls),look=lookOf(s,cls);
 return `<section class="creator" data-cr-class="${esc(cls)}" aria-label="Appearance">
 <div class="cr-preview">
  <div class="cr-stage"><canvas class="cr-figure" width="192" height="144" role="img" aria-label="Your hero"></canvas></div>
  <div class="cr-closeup"><canvas class="cr-bust" width="128" height="128" role="img" aria-label="Close-up of your hero's face"></canvas><span class="cr-cap">Close-up</span></div>
  <div class="cr-preview-ctl"><button type="button" class="cr-toggle" data-cr="gear" aria-pressed="${gear}">${gear?'Showing gear':'Gear hidden'}</button></div>
 </div>
 <div class="cr-opts">${bodyRowHTML(cls,body)}${['hair','skin','eyes'].map(p=>rowHTML(cls,body,look,p)).join('')}
  <p class="cr-hint">Change your look for free at Home. Looks do not change your strength.</p>
  <div class="cr-actions"><button type="button" data-cr="random">Surprise me</button><button type="button" data-cr="reset">Reset</button></div></div>
</section>`;}

/* ---- styles ---- */
export function creatorStyles(doc=globalThis.document){if(!doc?.head||doc.querySelector('link[data-creator-styles]'))return false;
 const l=doc.createElement('link');l.rel='stylesheet';l.href=new URL('./creator.css',import.meta.url).href;l.dataset.creatorStyles='';doc.head.append(l);return true;}

/* ---- wiring ---- */
/* Timers, not requestAnimationFrame (tests/ui.test.js gives rAF one slot, main.js's loop). */
const later=(f,ms)=>{const t=setTimeout(f,ms);t?.unref?.();return t;};
/* opts: {save:()=>s, cls, onChange(look) (persist etc.), motion:()=>bool, sfx(name)} */
export function wireCreator(root,opts={}){const el=root?.querySelector?.('.creator');if(!el)return null;creatorStyles(root.ownerDocument||globalThis.document);
 const S=()=>opts.save?.()||{},cls=opts.cls||el.dataset.crClass;let gear=el.querySelector('[data-cr="gear"]')?.getAttribute('aria-pressed')!=='false',timer=0;
 const sfx=n=>{try{opts.sfx?.(n);}catch{}};
 const changed=()=>{applyLooks(S());try{preloadHero(cls,0);}catch{}const look={body:bodyOf(S(),cls),...lookOf(S(),cls)};try{opts.onChange?.(look);}catch{}rerender();};
 /* the body thumbnails: the original art of each body, its idle bust */
 const paintBodies=(n=0)=>{let pending=false;el.querySelectorAll('[data-cr-bodycv]').forEach(cv=>{const id='hero-'+keyFor(cls,cv.dataset.crBodycv||null),sp=loadSprite(id),g=cv.getContext?.('2d');if(!g)return;
  if(!sp.ready){pending=!sp.failed;return;}const m=sp.meta,[bx,by,bw,bh]=m.bust?.[2]<=40?m.bust:[Math.max(0,m.anchor[0]-14),Math.max(0,m.anchor[1]-58),28,28],k=Math.max(1,Math.floor(cv.width/Math.max(bw,bh)));
  g.imageSmoothingEnabled=false;g.clearRect(0,0,cv.width,cv.height);g.drawImage(sp.img,bx,m.states.idle.row*m.cell[1]+by,bw,bh,Math.round((cv.width-bw*k)/2),Math.round((cv.height-bh*k)/2),bw*k,bh*k);});
  if(pending&&n<60)later(()=>paintBodies(n+1),80);};
 /* The same still gameplay frame as the hero and name steps. */
 const fig=el.querySelector('.cr-figure'),bust=el.querySelector('.cr-bust');
 const tick=()=>{const toggle=el.querySelector('[data-cr=gear]');if(toggle)toggle.hidden=heroDrawId(cls,{})===heroDrawId(cls,{art:null,set:null});if(!fig?.isConnected){timer=0;return;}
  try{drawCreatorFigure(fig,cls,gear?{}:{art:null,set:null});}catch{}timer=later(tick,50);};
 const paintBust=()=>{if(bust)try{drawHeroBust(bust,cls,bust.width);}catch{}};
 function rerender(){const s=S(),body=bodyOf(s,cls),look=lookOf(s,cls),key=keyFor(cls,body),P=lookParts(key);
  /* the body row keeps its buttons; the colour rows are rebuilt when what the body offers changes */
  el.querySelectorAll('[data-cr-part="body"]').forEach(b=>{const on=(b.dataset.crV||null)===body;b.setAttribute('aria-checked',on);b.tabIndex=on?0:-1;});
  for(const part of ['hair','skin','eyes']){const row=el.querySelector(`[data-cr-row="${part}"]`);if(!row)continue;const offered=!row.classList.contains('cr-off');
   if(offered!==P[part]||!P[part]&&row.querySelector('.cr-note')?.textContent!==(LOOK_NOTES[key]?.[part]||'Not shown on this hero')){const focus=row.contains(globalThis.document?.activeElement);row.outerHTML=rowHTML(cls,body,look,part);if(focus)el.querySelector(`[data-cr-row="${part}"] [tabindex="0"],[data-cr-row="${part}"]`)?.focus?.();continue;}
   row.querySelectorAll('[data-cr-part]').forEach(b=>{const on=(b.dataset.crV||null)===look[part];b.setAttribute('aria-checked',on);b.tabIndex=on?0:-1;});
   const val=row.querySelector(`[data-cr-value="${part}"]`);if(val)val.textContent=look[part]?OPTIONS[part][look[part]].name:'Original';}
  paintBust();}
 const choose=b=>{if(!b||b.disabled)return;const part=b.dataset.crPart,v=b.dataset.crV||null;setPart(S(),cls,part,v);sfx('ui.click');changed();
  el.querySelector(`[data-cr-part="${part}"][data-cr-v="${v||''}"]`)?.focus?.();};
 el.addEventListener('click',e=>{const b=e.target.closest?.('[data-cr-part]');if(b){choose(b);return;}const a=e.target.closest?.('[data-cr]');if(!a)return;
  if(a.dataset.cr==='random'){randomLook(S(),cls);sfx('ui.click');changed();}
  else if(a.dataset.cr==='reset'){resetLook(S(),cls);sfx('ui.back');changed();}
  else if(a.dataset.cr==='gear'){gear=!gear;a.setAttribute('aria-pressed',gear);a.textContent=gear?'Showing gear':'Gear hidden';sfx('ui.click');}});
 /* radio groups: arrows move and choose, Home/End jump; the outer screens' own arrow handling never sees these keys */
 el.addEventListener('keydown',e=>{const b=e.target.closest?.('[data-cr-part]');if(!b)return;const k=e.key;
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End',' ','Enter'].includes(k))return;e.preventDefault();e.stopPropagation();
  if(k===' '||k==='Enter'){choose(b);return;}
  const list=[...b.closest('[role="radiogroup"]').querySelectorAll('[data-cr-part]:not(:disabled)')],i=list.indexOf(b);
  const n=k==='Home'?0:k==='End'?list.length-1:Math.max(0,Math.min(list.length-1,i+(k==='ArrowLeft'||k==='ArrowUp'?-1:1)));if(n!==i)choose(list[n]);});
 applyLooks(S());paintBodies();paintBust();if(!timer)tick();
 return {rerender,stop(){clearTimeout(timer);timer=0;},get gear(){return gear;}};}

/* One still gameplay frame, at 2x native pixels, with no CSS enlargement in any creator step. */
export function drawCreatorFigure(cv,cls,o={}){if(cv.width!==192||cv.height!==144){cv.width=192;cv.height=144;}return drawHeroFigure(cv,cls,{time:0,front:false,...o});}
