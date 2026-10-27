/* Dialogue boxes (v2:ui), Sea of Stars style: a speaker portrait and name plate, text revealed a
   letter at a time, E / Enter / Space / click to advance. A press while the text is still revealing
   shows the whole line at once. Nothing ever advances by itself (no timers on reading).

   await say('Hello.', {speaker:'Archivist', portrait:'archivist'});
   await say(['Line one.', 'Line two.'], {speaker:'Bram', portrait:'quartermaster'});
   await say([{text:'Ready?', speaker:'Archivist', portrait:'archivist'}, {text:'Yes!', speaker:'You', portrait:'warrior'}]);

   portrait: an id from dist/ui/portraits/ (busts cut from the ERW Village NPC sheets by
   tools/bake-portraits.py: archivist, quartermaster, smith, trader, fishmonger, fisher), a hero class
   id (warrior, mage, ...: a bust cropped from the hero's own sprite), or a URL. Frames are the Dark Ages 9-slices.
   The world is paused while a box is open and the previous state is restored after.
   {passive:true} is for ambient lines the player did not ask for (hub events while walking): the world
   keeps running and movement stays with the game. A passive line waits for E, Enter, Space, a click or a
   tap, or closes when the player walks away after it is fully shown. Nothing advances on a clock. */
import {sfx} from '../core/audio.js';
import {CLASSES} from '../game/data.js';
import {portrait as paintPortrait} from '../gfx/world.js';
import {motionReduced} from './juice.js';
export const PORTRAITS=['archivist','quartermaster','smith','trader','fishmonger','fisher'];
/* A speaker's bust by name. One face per person: villagers without their own pack bust get the
   name plate only, never someone else's face. */
const BY_NAME=[[/archivist/i,'archivist'],[/quartermaster/i,'quartermaster'],[/brannoc|smith/i,'smith'],[/netta/i,'fishmonger'],[/old deri|fisher/i,'fisher'],[/trader|vendor/i,'trader']];
export function portraitFor(name,hint){if(hint&&(PORTRAITS.includes(hint)||CLASSES[hint]||/[/.]/.test(hint)))return hint;for(const [re,id] of BY_NAME)if(re.test(String(name||'')))return id;return null;}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let world=null,queue=Promise.resolve(),open=false;
export const dialogueOpen=()=>open;
export function setDialogueWorld(w){world=w;}
const later=(f,ms)=>{const t=setTimeout(f,ms);t?.unref?.();return t;};
function box(){
 const d=globalThis.document;let el=d.querySelector('#ui-dialogue');
 if(!el){el=d.createElement('div');el.id='ui-dialogue';el.setAttribute('role','dialog');el.setAttribute('aria-live','polite');el.hidden=true;
  el.innerHTML='<div class="dlg-portrait" aria-hidden="true"></div><div class="dlg-body"><span class="dlg-name"></span><p class="dlg-text"></p><span class="dlg-next" aria-hidden="true"></span></div>';
  (d.querySelector('#stage')||d.body).appendChild(el);}
 return el;
}
function setPortrait(el,p){
 const host=el.querySelector('.dlg-portrait');host.innerHTML='';el.classList.toggle('no-portrait',!p);if(!p)return;
 const d=globalThis.document;
 if(CLASSES[p]){const cv=d.createElement('canvas');cv.width=160;cv.height=180;host.appendChild(cv);host.dataset.kind='painted';try{paintPortrait(cv,CLASSES[p]);}catch{}return;}
 const img=d.createElement('img');img.alt='';img.src=PORTRAITS.includes(p)?new URL(`./portraits/${p}.png`,import.meta.url).href:p;host.dataset.kind='pixel';host.appendChild(img);
}
function normal(lines,o){return (Array.isArray(lines)?lines:[lines]).map(l=>typeof l==='string'?{text:l,speaker:o.speaker,portrait:o.portrait}:{speaker:o.speaker,portrait:o.portrait,...l});}
function run(lines,passive=false){
 return new Promise(resolve=>{
  const d=globalThis.document;if(!d){resolve();return;}
  const el=box(),text=el.querySelector('.dlg-text'),name=el.querySelector('.dlg-name');
  const prevPaused=world&&!passive?world.paused:undefined;if(world&&!passive)world.paused=true;el.classList.toggle('passive',passive);let auto=0,moved=null;
  open=true;el.hidden=false;el.classList.add('show');
  /* one voice at a time: a toast already up waits behind the box (ui/juice.js releases it after) */
  d.querySelector('#toast.show')?.classList.add('held');
  /* a blocking conversation finishes before the world map, a panel or the menus can open over it */
  if(!passive)d.documentElement.classList.add('dlg-blocking');
  let i=-1,shown=0,full='',timer=0;
  const finishLine=()=>{clearTimeout(timer);shown=full.length;text.textContent=full;el.classList.add('done');};
  const tick=()=>{shown=Math.min(full.length,shown+1);text.textContent=full.slice(0,shown);if(shown%2===1&&full[shown-1]!==' ')sfx('ui.move');if(shown<full.length)timer=later(tick,28);else el.classList.add('done');};
  const next=()=>{
   /* village chatter stays in the village: a passive line never follows the hero into a level */
   i++;if(i>=lines.length||(passive&&(world?.level||world?.zone&&world.zone!=='town'||globalThis.document?.querySelector('#hud')?.style.visibility==='hidden'))){close();return;}
   const l=lines[i];full=String(l.text??'');shown=0;el.classList.remove('done');
   name.textContent=l.speaker||'';name.hidden=!l.speaker;setPortrait(el,l.portrait);
   text.setAttribute('aria-label',full);
   if(motionReduced())finishLine();else{text.textContent='';tick();}
   moved=null;
  };
  const press=()=>{if(shown<full.length)finishLine();else{sfx('ui.click');next();}};
  const onKey=e=>{const k=e.key;if(k==='e'||k==='E'||k==='Enter'||k===' '){e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)press();}else if(k==='Escape'){e.preventDefault();e.stopImmediatePropagation();finishLine();}else e.stopImmediatePropagation();};
  /* passive lines take E / Enter / Space (and never pass them on to the game); every other key, movement
     included, stays with the game */
  /* ...unless a door, sign or villager is in reach: then E is the game's, and the ambient line steps aside */
  const onPassiveKey=e=>{const k=e.key;/* Escape closes the line first; a second Escape pauses (playtest 14 Oct pass 2) */if(k==='Escape'){e.preventDefault();e.stopImmediatePropagation();close();return;}if(!(k==='e'||k==='E'||k==='Enter'||k===' '))return;if(d.querySelector('#prompt')?.textContent.trim()){close();return;}e.preventDefault();e.stopImmediatePropagation();if(!e.repeat)press();};
  const onPointer=e=>{e.preventDefault();e.stopPropagation();press();};
  let close=()=>{clearTimeout(timer);clearTimeout(auto);(globalThis.window||globalThis).removeEventListener?.('keydown',onKey,true);(globalThis.window||globalThis).removeEventListener?.('keydown',onPassiveKey,true);el.removeEventListener('pointerdown',onPointer);
   el.classList.remove('show','done');el.hidden=true;open=false;d.querySelector('#toast.held')?.classList.remove('held');if(!passive)d.documentElement.classList.remove('dlg-blocking');if(world&&prevPaused!==undefined)world.paused=prevPaused;resolve();};
  (globalThis.window||globalThis).addEventListener?.('keydown',passive?onPassiveKey:onKey,true);el.addEventListener('pointerdown',onPointer);
  if(passive){let live=true;const watch=()=>{if(!live)return;/* gone into a level, or the world map opened (main.js hides #hud for it): the chatter ends */const mapUp=globalThis.document?.querySelector('#hud')?.style.visibility==='hidden';if(mapUp||world?.level||(world?.zone&&world.zone!=='town')){live=false;close();return;}
   /* walking away closes a line the player has seen in full (never a clock: standing still, it waits) */
   const p=world?.player;if(p&&shown>=full.length){if(!moved)moved={x:p.x,y:p.y};else if(Math.hypot(p.x-moved.x,p.y-moved.y)>40){live=false;close();return;}}
   later(watch,300);};later(watch,300);const c0=close;close=()=>{live=false;c0();};}
  next();
 });
}
/* Queues behind any box already open, so two callers never talk over each other. */
export function say(lines,opts={}){const ls=normal(lines,opts);queue=queue.then(()=>run(ls,!!opts.passive));return queue;}
