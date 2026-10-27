/* Title screen and class select (v2:ui). main.js's welcome() renders titleScreen() into #modal
   (view "welcome") and keeps its own wiring for the hero cards, #class-stats and #begin; this module
   adds the menu, the steps and the living backdrop.
   Step "title": logo, Continue / New Game / Settings / Credits over the world itself (the game
   canvas, the baked hub, is copied each frame).
   Step "select": seven classes, with the chosen gameplay sprite in a framed preview. */
import {prepareScene} from '../core/loader.js';
import {CLASSES,SUBJECTS} from '../game/data.js';
import {nextLesson} from '../academics/study-unlock.js';
import {portrait} from '../gfx/world.js';
import {loadSprite} from '../gfx/actors/sprites.js';
import {sfx,playMusic} from '../core/audio.js';
import {openCredits} from './credits-screen.js';
import {irisOpen} from './juice.js';
import {icon} from './icons.js';
import {activeProfile} from './profiles.js';
import {openProfiles} from './profiles-screen.js';
import {creatorHTML,wireCreator,customised,creatorStyles,drawCreatorFigure} from './creator.js';
import {drawHeroBust} from '../gfx/actors/hero-sprites.js';
/* One line of fantasy per class: what playing it feels like. */
/* every class is playable (owner, 8 Oct: "get all the characters done"); a class listed here only if it ever needs locking again */
export const SLICE=['warrior','mage','rogue','ranger','paladin','berserker','summoner'];
export function lockCards(root){root.querySelectorAll('[data-class]').forEach(el=>{if(SLICE.includes(el.dataset.class)||el.classList.contains('coming-soon'))return;el.classList.add('coming-soon');el.setAttribute('aria-disabled','true');el.insertAdjacentHTML('beforeend',`<span class="soon">${icon('key',{size:32})}Coming soon</span>`);});}
export const FANTASY={warrior:'Fight up close with a sword and shield. Hits build Momentum: power for stronger attacks.',mage:'Cast spells from far away. Ember Dart builds Arcane Flow: power for stronger spells. Dodge to stay safe.',
 rogue:'Fight up close with quick strikes. Backstab weakens enemies. Learn Vanish to hide from danger.',ranger:'Shoot arrows from far away. Learn Hunter’s Mark to make your shots hurt more, and traps to stop enemies.',
 paladin:'Fight with a hammer. Shields build Divine Guard: power for a stronger strike. Learn to heal yourself too.',berserker:'Fight up close with a heavy axe. Rage makes hits stronger when health is low. Heal to stay safe.',summoner:'Shoot spirit bolts. Learn to place totems: magic helpers that attack enemies or protect you.'};
export const CLASS_STYLE={warrior:['Close-range fighter','Sword & shield · High health'],mage:['Long-distance spells','Magic spells · Hits groups'],rogue:['Fast close-range fighter','Quick strikes · Backstab · Vanish'],ranger:['Long-distance hunter','Bow attacks · Mark targets · Traps'],paladin:['Defensive fighter','Heavy hammer · Shields · Healing'],berserker:['Heavy close-range fighter','Axe attacks · Strong hits · Rage'],summoner:['Spirit caller','Spirit bolts · Magic helpers · Totems']};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function titleScreen({started=false,cards='',hero='warrior',begin,learner=activeProfile()?.name,schoolMode=null,heroNames={}}={}){
 const c=CLASSES[hero]||CLASSES.warrior;
 return `<div class="title-screen" data-step="title" data-saved="${esc(hero)}">
<canvas class="title-bg" width="480" height="270" aria-hidden="true"></canvas>
<div class="title-pane">
 <div class="logo" role="img" aria-label="PixelQuest: The Thorn Kingdom"><span class="logo-crest" aria-hidden="true"></span><canvas class="logo-word" data-logo="PIXELQUEST" aria-hidden="true"></canvas><span class="logo-sub" aria-hidden="true"><i></i><canvas data-logo="THE THORN KINGDOM" data-weight="400" data-ramp="sub"></canvas><i></i></span></div>
 <nav class="title-menu" aria-label="Main menu">
  ${started?`<button class="primary" data-title="continue">Continue<small>${esc(heroNames[hero]||c.name)}</small></button>`:''}
  <button ${started?'':'class="primary"'} data-title="new">${started?'Choose hero':'New game'}</button>
  <button data-title="settings">Settings</button>
  <button data-title="credits">Credits</button>
 </nav>
 <button class="ghost learner" data-title="learners" aria-label="Switch learner">${icon('key',{size:32})}<span data-learner-name>${esc(learner||'Player 1')}</span><small>Switch</small></button>
 <p class="title-foot">Learning unlocks your powers</p>
</div>
<div class="select-pane">
 <div class="select-head"><button class="ghost back" data-title="back" aria-label="Back to the title screen">‹ Back</button><div><span class="eyebrow">${started?'YOUR KNOWLEDGE STAYS WITH YOU':'WELCOME TO OAKHAVEN'}</span><h2 data-select-heading>Choose your hero</h2><span class="select-progress" data-select-progress>1 / 3 · HERO</span></div></div>
 <!-- Elden Ring's class select (owner #2, 8 Oct): the names in a column on the left, the hero standing large in a pool of
      light in the middle of a dark room, the numbers on the right -->
 <div class="hero-select er">
  <div class="grid er-list" role="listbox" aria-label="Heroes">${cards}</div>
  <aside class="hero-detail er-detail" style="--accent:${c.color}">
   <div class="er-stage" aria-hidden="true"><i class="armory-banner left"></i><i class="armory-banner right"></i><i class="armory-sword"></i><i class="er-light"></i><i class="er-mist"></i><canvas class="detail-sprite er-hero" data-detail-sprite width="64" height="64"></canvas></div>
   <div class="er-stats">
    <div class="er-title"><div class="portrait-frame big er-bust"><canvas data-detail-portrait width="160" height="180" aria-hidden="true"></canvas></div><div><h3 data-detail-name>${esc(c.name)}</h3><span class="tag" data-detail-sig>${esc(c.signature)}</span></div></div>
    <p class="class-role" data-class-role></p><p class="class-traits" data-class-traits></p><p class="fantasy" data-detail-fantasy>${esc(FANTASY[hero]||'')} ${esc(c.resource)} fuels abilities and refills by itself.</p>
    <div class="er-rows" id="class-stats"></div>
    <p class="first-power" data-detail-power></p>
    <p class="subtle" data-detail-blurb hidden>${esc(c.blurb)}</p>
    <p class="subtle er-note">Learn and gain hero levels to unlock abilities. XP means points toward your next hero level.</p>
    <div class="hero-pick-actions"><div class="hero-profile-summary"><span>PROFILE</span><strong data-profile-name>${esc(learner||'Player 1')}</strong><span>HERO</span><strong data-selected-character>${esc(c.name)}</strong></div><button type="button" class="primary" data-title="look">Choose this hero →</button></div>
    <div class="hero-look" data-hero-look></div><div class="hero-look-actions"><button type="button" class="primary" data-title="setup">Next →</button></div>
    <div class="hero-setup"><p class="setup-intro">Name your hero and choose your school stage. XP from learning and adventures raises your hero level.</p><label class="hero-name-label" for="hero-nickname">Hero name</label><input id="hero-nickname" maxlength="20" autocomplete="off" placeholder="Name your hero" value="${esc(heroNames[hero]||'')}">
    <label class="school-mode-choice" for="school-mode">School stage</label><select id="school-mode" aria-label="Choose your school stage"><option value="" ${!started&&!schoolMode?'selected':''} ${!started&&!schoolMode?'':'disabled'}>Choose your school stage</option><option value="elementary" ${(schoolMode|| (started?'elementary':''))==='elementary'?'selected':''}>Elementary School</option><option value="middle" ${(schoolMode||'')==='middle'?'selected':''}>Middle School</option><option value="high" ${(schoolMode||'')==='high'?'selected':''}>High School</option></select>
    <button class="primary" id="begin" ${!started&&!schoolMode?'disabled':''}>${esc(begin||(started?'Return to Oakhaven':'Begin your adventure'))}</button></div>
   </div>
  </aside>
 </div>
</div>
</div>`;
}
/* The logo is pixel art made from the font: the word is drawn once at the font's native 16 px,
   thresholded to a 1-bit mask, then painted with a gold ramp, a dark outline and a drop shadow, and
   shown at a whole-number scale by CSS. No smoothing anywhere. */
const RAMPS={gold:['#fff4d2','#ffe6a0','#f3cf78','#e5b257','#cf9440','#b07632'],sub:['#f2e1ad','#e8c47a','#d7a95c','#c19149']};
export async function drawLogo(cv){
 const text=cv.dataset.logo||'',weight=cv.dataset.weight||'700',ramp=RAMPS[cv.dataset.ramp||'gold'];
 try{await globalThis.document.fonts?.load?.(`${weight} 16px "Pixel Operator"`);}catch{}
 const font=`${weight} 16px "Pixel Operator", monospace`,m=globalThis.document.createElement('canvas').getContext('2d');if(!m)return;
 m.font=font;const w=Math.ceil(m.measureText(text).width||0)+4,h=20;if(w<6)return;
 const src=globalThis.document.createElement('canvas');src.width=w;src.height=h;const sx=src.getContext('2d');
 sx.font=font;sx.textBaseline='alphabetic';sx.fillStyle='#fff';sx.fillText(text,2,14);
 let a;try{a=sx.getImageData(0,0,w,h).data;}catch{return;}
 const on=(x,y)=>x>=0&&y>=0&&x<w&&y<h&&a[(y*w+x)*4+3]>110;
 let top=h,bot=0;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(on(x,y)){top=Math.min(top,y);bot=Math.max(bot,y);}
 cv.width=w+2;cv.height=h+3;const o=cv.getContext('2d'),span=Math.max(1,bot-top+1);
 for(let y=-1;y<=h;y++)for(let x=-1;x<=w;x++){
  const X=x+1,Y=y+1;
  if(on(x,y)){o.fillStyle=ramp[Math.min(ramp.length-1,Math.floor((y-top)/span*ramp.length))];o.fillRect(X,Y,1,1);}
  else if(on(x-1,y)||on(x+1,y)||on(x,y-1)||on(x,y+1)||on(x-1,y-1)||on(x+1,y-1)||on(x-1,y+1)||on(x+1,y+1)){o.fillStyle='#2a1408';o.fillRect(X,Y,1,1);}
  else if(on(x,y-2)||on(x-1,y-2)||on(x+1,y-2)){o.fillStyle='#120804';o.fillRect(X,Y,1,1);}
 }
 cv.style.setProperty('--w',cv.width);cv.style.setProperty('--h',cv.height);
}
let raf=0;
/* Selection previews keep their front-facing frame; gameplay keeps its own scale. */
const turnImgs={};
function turnImg(id){return turnImgs[id]??=Object.assign(new Image(),{src:new URL(`./skin/heroes/${id}-turn.png`,import.meta.url).href});}
/* Timers, not requestAnimationFrame: tests/ui.test.js stubs rAF with a single slot that drives
   main.js's loop, and a second rAF user would steal it. unref() lets Node exit. */
const later=(f,ms=16)=>{const t=setTimeout(f,ms);t?.unref?.();return t;};
/* Backdrop: Oakhaven at dusk. The hub scene (baked ERW pack art) is rendered into our own canvas from
   the plaza, without the hero, then colour-graded to dusk (a multiply wash and a warm lift, no
   drawn shapes). Before the hub art is ready, the live game canvas is shown instead. */
const DUSK_AT={x:1440,y:1000};
/* Owner #1 (8 Oct) had the title pan across the whole village; on 9 Oct (review board 05) the owner asked for a loading
   screen there instead, so the title opens on the painted key art (style.css, ui/skin/keyart.webp) that the loader shows. */
let hub=null,heroAt=null;
async function hubModule(){if(hub!==null)return hub;try{hub=await import('../scenes/town.js');}catch{hub=false;}return hub;}
function grade(b,w,h){
 b.save();b.globalCompositeOperation='multiply';
 const g=b.createLinearGradient(0,0,0,h);g.addColorStop(0,'#5d64a8');g.addColorStop(.6,'#a48fb4');g.addColorStop(1,'#e6b48c');
 b.fillStyle=g;b.fillRect(0,0,w,h);
 b.globalCompositeOperation='soft-light';b.fillStyle='#ffc27a';b.globalAlpha=.3;b.fillRect(0,0,w,h);
 b.restore();
}
function backdrop(root,world){
 clearTimeout(raf);
 const bg=root.querySelector('.title-bg'),src=globalThis.document.querySelector('#world');if(!bg)return;
 const b=bg.getContext('2d');if(!b)return;b.imageSmoothingEnabled=false;
 const start=performance.now(),kit={actor(){},companion(){},effect(){}};
 hubModule().then(h=>{if(h&&world&&world.zone==='town'&&h.hubReady?.()){heroAt??={x:world.player.x,y:world.player.y};try{h.hubPlace(world,'village',DUSK_AT.x,DUSK_AT.y);}catch{}}});
 const tick=()=>{
  if(!bg.isConnected||!globalThis.document.querySelector('#modal')?.open){raf=0;return;}
  const t=(performance.now()-start)/1000;
  try{
   if(src&&(bg.width!==src.width||bg.height!==src.height)){bg.width=src.width;bg.height=src.height;b.imageSmoothingEnabled=false;}
   if(root.dataset.step==='title');/* the key art is CSS (see above) */
   /* Selection uses its CSS room; town loads on Begin. */
   grade(b,bg.width,bg.height);
  }catch{}
  const sp=root.querySelector('[data-detail-sprite]'),id=root.querySelector('.hero-detail')?.dataset.hero;
  if(sp&&id&&['select','setup'].includes(root.dataset.step))drawCreatorFigure(sp,id);
  raf=later(tick,33);
 };
 tick();
}
/* Put the hero back where the save left them when the title closes without a scene change. */
function restoreHero(world){if(heroAt&&hub&&world&&world.zone==='town'){try{const p=world.player;if(Math.abs(p.x-DUSK_AT.x)<2&&Math.abs(p.y-DUSK_AT.y)<2)hub.hubPlace(world,'village',heroAt.x,heroAt.y);}catch{}}heroAt=null;}
/* api: {settings(), welcome(), selected(), world} from main.js. Called after main.js has wired the cards. */
export function wireTitle(api={}){
 const d=globalThis.document,root=d.querySelector('#modal-content .title-screen');if(!root)return;
 /* the look step's stylesheet from the start, so its Next button and panel stay hidden on the hero and setup steps */
 try{creatorStyles(d);}catch{}
 /* the hero cards: the turntable image of the hero as drawn, or (once a class has its own look, ui/creator.js) the hero's
    own bust in that look */
 const saveOf=()=>api.save?.()||api.world?.save;
 const paintCards=()=>root.querySelectorAll('[data-portrait]').forEach(cv=>{const id=cv.dataset.portrait;if(customised(saveOf(),id)){try{drawHeroBust(cv,id,64);}catch{}return;}const im=turnImg(id),paint=()=>{if(!cv.isConnected||customised(saveOf(),id))return;cv.width=32;cv.height=32;const ctx=cv.getContext('2d');if(!ctx)return;ctx.imageSmoothingEnabled=false;ctx.clearRect(0,0,32,32);const fw=im.naturalWidth/8;ctx.drawImage(im,fw*.25,0,fw*.5,im.naturalHeight*.5,0,0,32,32);};if(im.complete&&im.naturalWidth)paint();else im.addEventListener('load',paint,{once:true});});
 /* the look step (creator, 15 Oct; ui/creator.js): body and colours of the chosen hero, between the hero and the name */
 let look=null;const openLook=()=>{const id=api.selected?.()||root.querySelector('.hero-card.selected')?.dataset.class||'warrior',box=root.querySelector('[data-hero-look]'),sv=api.save?.()||api.world?.save;if(!box||!sv)return false;look?.stop?.();
  box.innerHTML=creatorHTML(id,sv);look=wireCreator(box,{save:()=>sv,cls:id,motion:()=>api.world?.motion!==false,sfx,onChange:()=>{paintCards();api.onLook?.(id);}});return true;};
 const step=s=>{if(s!=='look'){look?.stop?.();look=null;}root.dataset.step=s;root.querySelector('[data-select-heading]').textContent=s==='setup'?'Prepare your adventure':s==='look'?'Make them yours':'Choose your hero';root.querySelector('[data-select-progress]').textContent=s==='setup'?'3 / 3 · NAME & SCHOOL':s==='look'?'2 / 3 · LOOK':'1 / 3 · HERO';root.querySelector('[data-title=back]').setAttribute('aria-label',s==='setup'?'Back to your look':s==='look'?'Back to hero selection':'Back to the title screen');sfx('ui.open');(s==='title'?root.querySelector('.title-menu button'):s==='setup'?root.querySelector('#hero-nickname'):s==='look'?root.querySelector('.creator [aria-checked="true"]'):root.querySelector('.hero-card.selected'))?.focus?.({preventScroll:true});};
 const detail=()=>{
  const id=api.selected?.()||root.querySelector('.hero-card.selected')?.dataset.class||'warrior',c=CLASSES[id];if(!c)return;
  const a=root.querySelector('.hero-detail');a.querySelector('[data-selected-character]').textContent=c.name;a.querySelector('[data-class-role]').textContent=CLASS_STYLE[id][0];a.querySelector('[data-class-traits]').textContent=CLASS_STYLE[id][1];if(api.world?.motion!==false)a.querySelector('.er-stage').animate?.([{opacity:.35},{opacity:1}],{duration:160});a.style.setProperty('--accent',c.color);
  a.querySelector('[data-detail-name]').textContent=c.name;a.querySelector('[data-detail-fantasy]').textContent=`${FANTASY[id]||''} ${c.resource} fuels abilities and refills by itself.`;
  /* what learning buys first: the class's first earnable ability and the subject that teaches it */
  const pw=a.querySelector('[data-detail-power]');if(pw){let line='';try{const n=nextLesson(api.world?.save||{},{hero:id});if(n?.ability)line=`First power: ${n.ability.name}. Learned through ${SUBJECTS[n.ability.subject]?.name||n.topic?.subject||'study'}.`;}catch{}pw.textContent=line;pw.hidden=!line;}a.dataset.hero=id;loadSprite('hero-'+id);a.querySelector('[data-detail-sig]').textContent=c.signature;a.querySelector('[data-detail-blurb]').textContent=c.blurb;
  const cv=a.querySelector('[data-detail-portrait]');if(cv)try{portrait(cv,c);}catch{}
 };
 lockCards(root);
 /* a locked class can't be picked (capture phase: main.js's own handler never sees the click), except
    by the code path that restores a saved hero from before the slice */
 let restoring=false;
 root.addEventListener('click',e=>{const c=e.target.closest?.('.coming-soon');if(c&&!restoring){e.stopPropagation();e.preventDefault();sfx('ui.back');}},true);
 root.querySelectorAll('[data-class]').forEach(el=>el.addEventListener('click',detail));
 root.querySelectorAll('[data-class]').forEach(el=>el.addEventListener('focus',()=>sfx('ui.move')));
 root.addEventListener('click',async e=>{
  const b=e.target.closest('[data-title]');if(!b)return;
  const k=b.dataset.title;sfx('ui.click');
  /* Continue always resumes the saved hero, whatever was browsed in the hero select. */
  const resetPick=()=>{const c=root.querySelector(`[data-class="${root.dataset.saved}"]`);if(c&&!c.classList.contains('selected')){restoring=true;try{c.click();}finally{restoring=false;}}};
  if(k==='continue'){resetPick();d.querySelector('#begin')?.click();
   /* main.js greets every start like a first run; a returning learner gets a welcome back instead */
   const toast=d.querySelector('#toast');if(toast)toast.textContent=`Welcome back, ${activeProfile()?.name||'hero'}.`;}
  else if(k==='new'){const loading=prepareScene('select',{hero:api.selected?.()||'warrior'});if(loading)await loading;paintCards();detail();step('select');}
  else if(k==='look'){if(openLook())step('look');else step('setup');}
  else if(k==='setup')step('setup');
  else if(k==='back'){if(root.dataset.step==='setup'){if(openLook())step('look');else step('select');}else if(root.dataset.step==='look')step('select');else{resetPick();step('title');}}
  else if(k==='settings')api.settings?.();
  else if(k==='credits')openCredits();
  else if(k==='learners')openProfiles();
 });
 /* Escape in the hero select goes back to the menu (main.js keeps the welcome panel open). */
 root.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&['select','look','setup'].includes(root.dataset.step)){e.preventDefault();e.stopPropagation();const st=root.dataset.step;if(st==='setup'&&openLook())step('look');else step(st==='select'?'title':'select');return;}
  /* Keyboard-only play: arrow keys walk the menu (up/down) and the hero grid (4 columns). */
  if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName))return;
  if(root.dataset.step==='setup'||root.dataset.step==='look')return;const k=e.key;if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(k))return;
  const list=[...(root.dataset.step==='title'?root.querySelectorAll('.title-menu button,.learner'):root.querySelectorAll('.hero-card'))];
  const i=list.indexOf(globalThis.document.activeElement),cols=1;
  const d=k==='ArrowDown'?cols:k==='ArrowUp'?-cols:k==='ArrowRight'?1:-1;
  const n=list[Math.max(0,Math.min(list.length-1,(i<0?0:i+d)))];if(n){e.preventDefault();e.stopPropagation();n.focus();sfx('ui.move');}
 });
 /* Leaving the title: the world opens from black around the hero (main.js's handler has already run). */
 root.querySelector('#begin')?.addEventListener('click',()=>{if(!globalThis.document.querySelector('#modal')?.open){restoreHero(api.world);irisOpen(.5,.55);}});
 root.__save=saveOf;backdrop(root,api.world);playMusic('title');
 root.querySelectorAll('canvas[data-logo]').forEach(cv=>drawLogo(cv));
 root.querySelector('.title-menu button')?.focus?.({preventScroll:true});
}
export const titleOpen=()=>{const d=globalThis.document;return !!(d.querySelector('#modal')?.open&&d.querySelector('#modal')?.dataset.view==='welcome');};
