/* friends2-nov5 (docs/playtest/friends1-nov4/REPORT.md lead review, items 1-8): the moments Jay and Rosa met and never mentioned, made
   memorable with code effects only (no new art or sound files: existing sprites, icons and sfx names). Pillars: learning stays the only
   unlock; nothing is rolled here (the chests are shown as plainly as a receipt); no timers or streaks on learning; one red per card;
   every celebration is short, never pauses a fight, and goes on any key or tap.
   main.js calls: f2LevelFx (a hero level-up inside a level), f2ResultCard (the win card's extras), f2Frame (the pet's first-level card).
   The pure helpers are exported for tests/friends2-nov5.test.js. Save: one additive field, s.pets.met (game/pets.js cleanPets keeps it). */
import {sfx} from '../core/audio.js';
import {nextPower} from '../game/power-gate.js';
import {powerStep} from '../game/power-gate.js';
import {ITEM,wornOf,equip as gearEquip} from '../game/gear.js';
import {betterPickup,equipComparison} from './gear-guidance.js';
import {JEWEL,RARITY,STAT_NAMES,wear as wearJewel} from '../game/jewels.js';
import {WEAR_LINE} from '../game/wear.js';
import {PETS} from '../game/data.js';
import {nextQuestStep,questLive,QUESTS} from '../game/quests.js';
import {COMPANIONS} from '../game/party.js';
import {hireStep} from '../game/next-step.js';
import {FURNITURE,spare} from '../game/furniture.js';
import {drawSprite,loadSprite,spriteMeta,spriteReady} from '../gfx/actors/sprites.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const later=(f,ms)=>{const h=setTimeout(f,ms);h?.unref?.();return h;};
const still=()=>typeof document!=='undefined'&&document.documentElement?.dataset?.motion==='reduced';

/* ---- #1 Level-up you can feel ---------------------------------------------------------------------------------------------------- */
/* what the new hero level means for the next ability, from the ladder's real numbers (game/power-gate.js nextPower: the shared pick, its
   topics still to master and its hero level). '' when every ability is awake. */
export function levelMeaning(save,lv){const x=nextPower(save);if(!x?.a||!lv)return '';const t=x.topics|0,sub=x.subject,name=x.a.name,topics=k=>`${k} ${sub} topic${k===1?'':'s'}`;
 if(!x.reachable)return `Level ${lv}: ${name} needs more ${sub} learning to wake.`;
 if(x.lvlOk)return t>0?`Level ${lv}: ${name}'s level is met, master ${topics(t)} to wake it.`:`Level ${lv}: ${name} is ready to wake.`;
 const k=Math.max(0,(x.lvl|0)-lv);return `Level ${lv}: ${name} wakes at hero level ${x.lvl} (${k} more)${t>0?` and with ${topics(t)} mastered`:''}.`;}
let lastLvSfx=-1e9;const nowMs=()=>typeof performance!=='undefined'?performance.now():Date.now();
/* inside a level: the existing levelup sound, a gold ring and "LEVEL N!" over the hero; the fight never pauses (world effects only) */
export function f2LevelFx(w,lv){const p=w?.player;if(!p||!lv)return false;if(w.run)w.run.f2Lv=lv;if(w.ended){return false;}
 w.effect?.('dome',p.x,p.y,{element:'holy',life:.8,max:.8});w.effect?.('nova',p.x,p.y,{element:'holy',radius:40,life:.6,max:.6});w.text?.(`LEVEL ${lv}!`,p.x,p.y-52,'#ffd96b',true);sfx('levelup');lastLvSfx=nowMs();if(w.run)w.run.f2LvShown=lv;return true;}

/* ---- #4 Victory Chests open in front of the kid ------------------------------------------------------------------------------------ */
/* the chests open on the card's face on a first clear or a new best grade (st = the result's stats; chests come from game/chests.js
   openChests, which rolls nothing: what the boss paid, the level's gold, the grade's Essence and material) */
export const chestRevealDue=(st,won=true)=>!!won&&!!st?.run?.grade&&(st.run.chests?.length|0)>0&&(st.first===true||!!st.run.newBest);

/* ---- #5 "Wear it" on gear drops --------------------------------------------------------------------------------------------------- */
const pct=v=>`${Math.round((+v||0)*1000)/10}%`;
/* drops = ui/result-strip.js runDrops(st): [{kind:'gear'|'jewel', id}]. An offer is made only for a drop that beats what is worn:
   gear by the smith's own comparison (gear-guidance.js betterPickup / equipComparison), a jewel when its slot is empty or holds a lower
   rarity. -> [{kind, id, name, slot, before, after, label}] */
export function wearOffers(s,drops){const out=[];for(const d of drops||[]){
 if(d.kind==='jewel'){const j=JEWEL[d.id];if(!j||!s?.jewels?.owned?.[d.id])continue;const on=s.jewels.worn?.[j.slot]||null;if(on===d.id)continue;const o=on?JEWEL[on]:null;if(o&&(RARITY[o.rarity]?.power||0)>=(RARITY[j.rarity]?.power||0))continue;
  const k=Object.keys(j.stats)[0];out.push({kind:'jewel',id:d.id,name:j.name,slot:j.slot,label:STAT_NAMES[k]||k,before:pct(o?.stats?.[k]||0),after:pct(j.stats[k])});continue;}
 const it=ITEM[d.id];if(!it||!s?.gear?.owned?.[d.id])continue;let ok=false;try{ok=betterPickup(s,d.id);}catch{ok=false;}if(!ok)continue;const c=equipComparison(s,s.hero,d.id);
 out.push({kind:'gear',id:d.id,name:it.name,slot:it.slot,label:c.label,before:String(c.before),after:String(c.after)});}
 return out;}
/* wears it, as Home -> Inventory does; true when it changed */
export function wearOffer(s,o){if(!o)return false;if(o.kind==='jewel'){if(s.jewels?.worn?.[o.slot]===o.id)return false;return wearJewel(s,o.id);}const r=gearEquip(s,s.hero,o.id);return !!r?.ok;}
/* friends2-nov5 #5: is this drop on the hero now (a jewel for an empty slot is put on as it drops) */
export const wornNow=(s,d)=>d?.kind==='jewel'?!!JEWEL[d.id]&&s?.jewels?.worn?.[JEWEL[d.id].slot]===d.id:!!ITEM[d?.id]&&wornOf(s,s.hero)?.[ITEM[d.id].slot]===d.id;
/* friends2-nov5 #5: the Wear it line inside a YOU GOT tile */
export const wearInHTML=o=>`<span class="f2-wear-in"><small>${esc(o.label)} ${esc(o.before)} → <b>${esc(o.after)}</b></small><button type="button" class="f2-wear-btn" data-f2-wear-btn="${esc(o.id)}">Wear it</button></span>`;
export const wearRowHTML=offers=>offers.length?`<div class="f2-wear" data-f2-wear>${offers.map(o=>`<p class="f2-wear-row" data-f2-wear-id="${esc(o.id)}"><span class="f2-wear-text"><strong>${esc(o.name)}</strong> <small>${esc(o.label)} ${esc(o.before)} → <b>${esc(o.after)}</b></small></span><button type="button" class="f2-wear-btn" data-f2-wear-btn="${esc(o.id)}">Wear it</button></p>`).join('')}</div>`:'';

/* ---- #7 The pet gets an introduction ---------------------------------------------------------------------------------------------- */
const petOf=key=>PETS.find(p=>p.key===key)||null;
export const petIntroLine=p=>`${p.name} follows you into every level. It gives you ${p.bonus}, and your bond grows each time you win together.`;
export const petIntroDue=s=>!!s?.pet&&!!petOf(s.pet)&&!(s.pets?.met||[]).includes(s.pet);
export function markPetMet(s,key){const p=s.pets||(s.pets={all:false,got:[],seen:[]});if(!Array.isArray(p.met))p.met=[];if(!p.met.includes(key))p.met.push(key);}
/* a bond step is a heart (game/pets.js: 2 bond a heart, 5 hearts, at most 10): one line when this win filled a new heart */
export function bondStepLine(s,won){if(!won||!s?.pet)return '';const p=petOf(s.pet),b=s.petBond?.[s.pet]|0;if(!p||b<2||b>10||b%2)return '';return `${p.name} likes you more: bond ${b/2} of 5`;}

/* ---- #8 Town calls back without stealing the red ------------------------------------------------------------------------------------ */
/* at most one reason, the most useful: a quest step in town, a hire, gear better than what is worn, then a Home prize to place */
export function townReason(s,except=[]){try{
 const q=nextQuestStep(s,questLive);if(q&&q.rank!=='clear'){const c=COMPANIONS[QUESTS[q.quest]?.companion];if(c)return `${c.short} has a job`;}
 const h=hireStep(s);if(h){const id=Object.keys(s.party?.crew||{}).find(k=>COMPANIONS[k]);if(id)return `hire ${COMPANIONS[id].short}`;}
 const g=Object.keys(s?.gear?.owned||{}).find(id=>ITEM[id]&&!except.includes(id)&&betterPickup(s,id));if(g)return `wear your ${ITEM[g].name}`;
 const f=s?.house?.owned&&FURNITURE.find(f=>f.kind!=='show'&&spare(s,f.id)>0);if(f)return `place your ${f.name}`;
 }catch{}return '';}

/* ---- #6 The next power cracks open ------------------------------------------------------------------------------------------------ */
/* one crack per Library step done on the topic that wakes it next (lesson, quiz, practice, test): 0..4; 4 = its learning is done and the
   power waits for its hero level */
export function crackCount(save,a){if(!a)return 0;let st=null;try{st=powerStep(save,a);}catch{st=null;}if(!st){const x=nextPower(save);return x?.a?.id===a.id&&(x.topics|0)===0&&x.reachable?4:0;}
 return {lesson:0,quiz:1,practice:2,test:3}[st.stage]??0;}
const CRACKS=['M50 8 L44 30 L54 40 L46 58','M90 46 L68 50 L60 62 L70 78','M12 60 L32 56 L40 70 L30 90','M60 92 L58 76 L72 70 L84 88'];
const SEEN=new Map();
/* the overlay: code-drawn cracks over the ability's own icon; the newest one draws itself in once (per page session) */
export function cracksHTML(id,n){n=Math.max(0,Math.min(4,n|0));if(!n)return '';const was=SEEN.has(id)?SEEN.get(id):n;SEEN.set(id,n);
 return `<svg class="f2-cracks" data-f2-cracks="${n}" viewBox="0 0 100 100" aria-hidden="true">${CRACKS.slice(0,n).map((d,i)=>`<path class="f2-crack-under${i>=was?' f2-crack-new':''}" d="${d}"/><path d="${d}"${i>=was?' class="f2-crack-new"':''}/>`).join('')}</svg>`;}
/* the wake: the cracked shell breaks off the icon on the unlock card */
export const shatterHTML=(shell='')=>`<span class="f2-shatter${shell?' f2-shatter-over':''}" aria-hidden="true">${shell?`<span class="f2-shell">${shell}</span>`:''}<svg class="f2-cracks" viewBox="0 0 100 100">${CRACKS.map(d=>`<path d="${d}"/>`).join('')}</svg>${Array.from({length:8},(_,i)=>`<i style="--a:${i*45+20}deg"></i>`).join('')}</span>`;

/* ---- the win card (#1, #3, #4, #5, #7, #8): called once the card is in the DOM ------------------------------------------------- */
/* o: {r (the result), st, won, card (the .level-result element), save, onWear(), offers, levelUp} */
export function f2ResultCard(o){const {r,st,card,save:s}=o;if(!card)return;ensureF2CSS();
 /* #1 */if(st?.levelUp){const lu=card.querySelector('.level-levelup:not(.level-ups)');const t=levelMeaning(s,st.levelUp);if(lu&&!lu.dataset.f2Lv){lu.dataset.f2Lv=String(st.levelUp);if(t)lu.querySelector('span')?.insertAdjacentHTML('beforeend',`<em class="f2-level-meaning" data-f2-level>${esc(t)}</em>`);
   /* the card's one level-up line becomes a ribbon right under YOU GOT (it sat at the foot of the body, often under the fold), its emblem ringed in gold */const yg=card.querySelector(':scope>.you-got')||card.querySelector('.you-got');if(yg){lu.classList.add('f2-lv-ribbon');(card.querySelector(':scope>.result-chests')||yg).after(lu);}const em=lu.querySelector('.levelup-emblem');if(em){const k=document.createElement('span');k.className='f2-lv-emb';em.replaceWith(k);k.append(em);k.insertAdjacentHTML('beforeend','<span class="f2-lv-ring" aria-hidden="true"></span>');}}
  if(st.levelUp!==o.lvShown&&nowMs()-lastLvSfx>2500){sfx('levelup');lastLvSfx=nowMs();}}
 /* #3 */if(r?.won&&r.boss?.sprite){const q=card.querySelector('.level-quote');if(q&&!card.querySelector('[data-f2-boss]'))bossTalk(q,r.boss);}
 /* #4 */if(chestRevealDue(st,r?.won)){const row=card.querySelector('.result-chests');if(row){row.dataset.f2Chests='1';row.classList.add('f2-chests-plain');}}
 /* #5 */if(o.offers?.length){const at=card.querySelector('.you-got')||card.querySelector('.level-result-body');if(at&&!card.querySelector('[data-f2-wear]')){
  /* friends2-nov5 #5 (jay-fresh run 2, 898 s: a Slime Bog crown's own row pushed the first-clear chests under the card's fold): a drop shown as a YOU GOT tile takes its Wear it inside that tile, so the card grows by no row */
  const tiles=[...card.querySelectorAll('.you-got-item[data-reward="gear"],.you-got-item[data-reward="jewel"]')],inTile=[];for(const x of o.offers){const tl=tiles.find(e=>(e.title||'').startsWith(x.name+' (')||e.title===x.name);const tx=tl?.querySelector('.you-got-text'),shown=tx&&!(typeof getComputedStyle==='function'&&getComputedStyle(tx).display==='none')&&!document.documentElement.classList.contains('m-mode')/* phone tiles are icons only: there the row stays */;if(shown){tl.dataset.f2Wear='1';tl.classList.add('f2-wear-tile');tx.insertAdjacentHTML('beforeend',wearInHTML(x));inTile.push(x);}}
  const rest=o.offers.filter(x=>!inTile.includes(x)),fd=card.querySelector('.you-got-found');if(fd&&inTile.length&&!rest.length&&o.offers.every(x=>fd.textContent.includes(x.name))&&!fd.textContent.split(/[.,·]/).some(n=>/Found:/.test(n)&&!o.offers.some(x=>n.includes(x.name))))fd.remove();
  if(rest.length){if(fd&&rest.every(x=>fd.textContent.includes(x.name))&&!fd.textContent.split(/[.,·]/).some(n=>/Found:/.test(n)&&!o.offers.some(x=>n.includes(x.name)))){fd.insertAdjacentHTML('afterend',wearRowHTML(rest));fd.remove();}else at.insertAdjacentHTML(at.classList.contains('level-result-body')?'beforebegin':'afterend',wearRowHTML(rest));}
   for(const b of card.querySelectorAll('[data-f2-wear-btn]'))b.onclick=()=>{const x=o.offers.find(y=>y.id===b.dataset.f2WearBtn);if(!x||!wearOffer(s,x))return;o.onWear?.(x);sfx('buy');townWhy(card,s,(o.offers||[]).map(y=>y.id));b.disabled=true;b.textContent='Worn ✓';for(const y of o.offers)if(y!==x&&y.slot===x.slot&&y.kind===x.kind){const ob=card.querySelector(`[data-f2-wear-btn="${CSS.escape(y.id)}"]`);if(ob)ob.closest('.f2-wear-row')?.remove();}};}}
 /* friends2-nov5 #5 (jay-fresh run 2, 554 s: Grubnak's ring went straight onto an empty finger, and the card still said "Wear it from Home"): a drop already worn says so */
 {const fd=card.querySelector('.you-got-found');if(fd&&o.drops?.length&&!card.querySelector('[data-f2-wear]')&&o.drops.every(d=>wornNow(s,d))&&fd.innerHTML.includes(WEAR_LINE.replace(/&/g,'&amp;').replace(/>/g,'&gt;'))){fd.innerHTML=fd.innerHTML.replace(WEAR_LINE.replace(/&/g,'&amp;').replace(/>/g,'&gt;'),o.drops.length>1?'You are wearing them now ✓':'You are wearing it now ✓');fd.dataset.f2Worn='1';}}
 /* #7 */{const t=bondStepLine(s,r?.won);const at=card.querySelector('.level-hero-progress')||card.querySelector('.level-result-detail');if(t&&at&&!card.querySelector('[data-f2-bond]'))at.insertAdjacentHTML(at.classList.contains('level-hero-progress')?'afterend':'beforeend',`<p class="f2-bond" data-f2-bond><i class="heart full" aria-hidden="true"></i>${esc(t)}</p>`);}
 /* #8 */townWhy(card,s,(o.offers||[]).map(x=>x.id));}
function townWhy(card,s,except=[]){const b=card.querySelector('#level-done');if(!b)return;const plain=b.dataset.f2Why!=null||/^Return to Oakhaven$/.test(b.textContent.trim());if(!plain)return;const why=townReason(s,except);
 if(!why){if(b.dataset.f2Why!=null){delete b.dataset.f2Why;b.textContent='Return to Oakhaven';b.removeAttribute('aria-label');}return;}
 b.dataset.f2Why=why;b.innerHTML=`<span>Return to Oakhaven</span><small>${esc(why[0].toUpperCase()+why.slice(1))}</small>`;b.setAttribute('aria-label',`Return to Oakhaven: ${why}`);}

/* #3: the boss's own sprite beside its line, in a speech bubble; drawn from its existing atlas (idle), still with Reduce motion */
function bossTalk(q,boss){const id=boss.sprite;loadSprite(id);const wrap=document.createElement('div');wrap.className='f2-boss-talk';wrap.dataset.f2Boss=id;wrap.innerHTML=`<canvas class="f2-boss" width="112" height="104" aria-hidden="true"></canvas>`;q.replaceWith(wrap);q.className='f2-bubble';wrap.append(q);
 const cv=wrap.querySelector('canvas'),t0=nowMs();const tick=()=>{if(!wrap.isConnected)return;const c=cv.getContext('2d');if(c&&spriteReady(id)){const m=spriteMeta(id),h=(m?.height||90)*(m?.scale||1),k=Math.min(2,96/Math.max(40,h));c.imageSmoothingEnabled=false;c.clearRect(0,0,cv.width,cv.height);drawSprite(c,id,'idle',still()?0:(nowMs()-t0)/1000,cv.width/2,cv.height-4,{facing:1,scale:k});}if(still()&&spriteReady(id))return;later(tick,80);};tick();}

/* ---- #7 in a level: the pet's first card, waiting for talks, banners and fights ------------------------------------------------------ */
let petCardAt=0;
/* f: {busy} -- main.js's own "something is on screen" (modal, cine, a talk); returns true when the card went up */
export function f2Frame(w,s,f={}){if(!w?.level||!w.player||!w.pet||f.busy||w.ended||w.paused)return false;if(!petIntroDue(s)||(w.pet.key&&w.pet.key!==s.pet))return false;if(typeof document==='undefined'||document.getElementById('f2-pet-intro'))return false;
 if((w.run?.time||0)<1.5||!['walk','go','wave'].includes(w.flow))return false;if(nowMs()<petCardAt)return false;
 if(w.enemies?.some(e=>e.hp>0&&Math.hypot(e.x-w.player.x,e.y-w.player.y)<220))return false;
 const p=petOf(s.pet);if(!p)return false;markPetMet(s,p.key);f.persist?.();petCardAt=nowMs()+6000;ensureF2CSS();
 const host=document.getElementById('stage')||document.body,el=document.createElement('div');el.id='f2-pet-intro';el.className='f2-pet-intro';el.setAttribute('role','status');el.dataset.pet=p.key;
 el.innerHTML=`<canvas width="96" height="72" aria-hidden="true"></canvas><div class="f2-pet-text"><small>Meet your pet</small><strong>${esc(p.name)}</strong><span>${esc(petIntroLine(p))}</span></div>`;host.append(el);sfx('pickup');
 const cv=el.querySelector('canvas');loadSprite(p.sprite);const tick=()=>{if(!el.isConnected)return;const c=cv.getContext('2d');if(c){c.imageSmoothingEnabled=false;c.clearRect(0,0,96,72);drawSprite(c,p.sprite,'idle',still()?0:nowMs()/1000,48,68,{facing:1,scale:2});}later(tick,60);};tick();
 /* friends2-nov5 #7 (jay-fresh run 2: walking keys shut the card after 1 s, unread): it never blocks play, so only Enter, Escape or a tap on the card itself closes it early */
 const key=e=>{if(e.key==='Enter'||e.key==='Escape')gone();};const gone=()=>{if(!el.isConnected)return;el.classList.add('out');later(()=>el.remove(),400);globalThis.removeEventListener?.('keydown',key,true);};
 el.style.pointerEvents='auto';el.addEventListener('pointerdown',e=>{e.stopPropagation();gone();});later(()=>globalThis.addEventListener?.('keydown',key,true),400);later(gone,4600);return true;}

/* ---- CSS (code effects only) --------------------------------------------------------------------------------------------------- */
export const F2_CSS=`
.f2-lv-ribbon{display:flex!important;align-items:center;justify-content:center;gap:10px;margin:4px auto!important;padding:4px 14px;border:2px solid #ffd96b;border-radius:8px;background:linear-gradient(90deg,#3a2a0e00,#5a3f12cc 20%,#5a3f12cc 80%,#3a2a0e00);max-width:640px}
.f2-lv-ribbon,.f2-lv-ribbon>span:not(.f2-lv-emb){flex-direction:row!important}.f2-lv-ribbon{flex-wrap:nowrap!important}.f2-lv-ribbon>span:not(.f2-lv-emb){flex:0 1 auto;min-width:0}.f2-lv-ribbon>span:not(.f2-lv-emb){align-items:baseline!important;justify-content:flex-start!important}.f2-lv-ribbon>span{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 8px;text-align:left}
/* friends2-nov5 #1 (jay-fresh run 2, 554 s: on a busy replay card the ribbon sat at the fold): LEVEL UP! and the level share one line */
.f2-lv-ribbon>span>small,.f2-lv-ribbon>span>strong{display:inline!important;margin:0!important}
.f2-lv-ribbon .f2-level-meaning{flex-basis:100%;text-transform:none;letter-spacing:0;font-size:16px}
dialog[data-view=result] .f2-lv-ribbon strong{font-size:20px!important;line-height:1.1}dialog[data-view=result] .f2-lv-ribbon small{font-size:16px}
.f2-wear-row strong{font-size:16px!important;letter-spacing:0}
.f2-lv-emb{position:relative;display:inline-block;flex:0 0 auto}.f2-lv-emb .levelup-emblem{width:40px!important;height:40px!important}
.f2-lv-emb .f2-lv-ring{left:-8px;top:-8px;width:52px;height:52px;margin:0}
.f2-lv-host{position:relative}
.f2-lv-ring{position:absolute;left:0;top:0;width:96px;height:96px;margin:6px 0 0 0;border:3px solid #ffd96b;border-radius:50%;box-shadow:0 0 12px #ffd96b,inset 0 0 10px #ffd96b88;pointer-events:none;animation:f2ring 1.2s ease-out both}
.f2-lv-word{position:absolute;left:0;top:-4px;width:96px;text-align:center;font-weight:700;color:#ffd96b;text-shadow:0 2px 0 #18122a,0 0 6px #000;font-size:16px;pointer-events:none;animation:f2word 1.6s ease-out both}
@keyframes f2ring{0%{transform:scale(.3);opacity:0}25%{opacity:1}100%{transform:scale(1.25);opacity:0}}
@keyframes f2word{0%{transform:translateY(10px);opacity:0}20%{opacity:1;transform:none}80%{opacity:1}100%{opacity:.0;transform:translateY(-6px)}}
.f2-level-meaning{display:block;font-style:normal;font-size:16px;color:#f3e6c4;margin-top:2px}
.f2-boss-talk{display:flex;align-items:center;gap:8px;justify-content:center;margin:2px auto;max-width:600px}
.f2-boss-talk .f2-boss{width:64px;height:60px;image-rendering:pixelated;flex:0 0 auto}
.f2-boss-talk .f2-bubble{display:block;position:relative;margin:0;padding:4px 10px;line-height:1.2;background:#f6ecd2;color:#2a1d12;border:2px solid #2a1d12;border-radius:10px;text-align:left;animation:f2pop .35s ease-out both}
.f2-boss-talk .f2-bubble::before{content:"";position:absolute;left:-14px;top:calc(50% - 6px);border:6px solid transparent;border-right:8px solid #2a1d12}
.f2-boss-talk .f2-bubble q{color:#2a1d12;font-size:16px}.f2-boss-talk .f2-bubble q{quotes:'“' '”'}.f2-boss-talk .f2-bubble cite{display:block;color:#6b4a2a;font-size:16px;font-style:normal;letter-spacing:1px}.f2-boss-talk .f2-bubble cite::before{content:'— '}
@keyframes f2pop{0%{transform:scale(.6);opacity:0}100%{transform:none;opacity:1}}
.result-chests.f2-chests-plain .result-chest.shake{animation:none!important}
.result-chests.f2-chests-plain .result-chest.open .result-chest-img{animation:f2pop .3s ease-out both}
.f2-wear-tile{flex-wrap:wrap}.f2-wear-in{display:flex;align-items:center;gap:6px;margin-top:2px}.f2-wear-in small{color:#e9dcc0}.f2-wear-in small b{color:#9be37a}.f2-wear-in .f2-wear-btn{min-height:28px;padding:0 10px;font-size:16px}html.m-mode .f2-wear-in .f2-wear-btn{min-height:30px}
.f2-wear{display:flex;flex-direction:column;gap:4px;align-items:center;margin:4px 0}
.f2-wear-row{display:flex;align-items:center;gap:10px;margin:0;padding:4px 8px;border:1px solid #c9a15a66;border-radius:6px;background:#1b1730cc}
.f2-wear-row small{color:#e9dcc0}.f2-wear-row small b{color:#9be37a}
.f2-wear-btn{min-height:32px;padding:2px 12px;white-space:nowrap}.f2-wear-row small{white-space:nowrap}
.f2-bond{margin:2px 0;font-size:16px;color:#f3c6d2;display:flex;align-items:center;gap:6px;justify-content:center}
.f2-bond .heart{display:inline-block;width:12px;height:11px;background:#e2557a;clip-path:polygon(50% 100%,0 40%,0 15%,20% 0,50% 18%,80% 0,100% 15%,100% 40%)}
#level-done[data-f2-why]{display:inline-flex;flex-direction:column;align-items:center;line-height:1.1}
#level-done[data-f2-why] small{font-size:16px;opacity:.9;line-height:1.1}
.road-icon,.edu-unlock-icon{position:relative}
.f2-cracks{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.f2-cracks path{fill:none;stroke:#fff6d8;stroke-width:2px;vector-effect:non-scaling-stroke;stroke-linecap:round;stroke-linejoin:round}.f2-cracks path.f2-crack-under{stroke:#120c1c;stroke-width:4px}
.f2-cracks path.f2-crack-new{stroke-dasharray:80;stroke-dashoffset:80;animation:f2crack .7s .35s ease-out forwards}
@keyframes f2crack{to{stroke-dashoffset:0}}
.f2-shatter{position:absolute;inset:0;pointer-events:none}
.edu-unlock .f2-shatter-over{position:absolute!important;grid-area:auto!important;margin:0!important;inset:auto;left:var(--fx-x,22%);top:var(--fx-y,40%);width:96px;height:96px;transform:translate(-50%,-50%);z-index:3}
.f2-shatter-over .f2-shell{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;animation:f2shell 1s ease-out forwards}.f2-shatter-over .f2-shell .ico{--s:64px!important}
.f2-shatter-over .f2-cracks{animation:f2shell 1s ease-out forwards}
.f2-shatter .f2-cracks{animation:f2shell .9s ease-out forwards}
.f2-shatter i{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px;background:var(--accent,#e7c77e);box-shadow:0 0 4px #fff;opacity:0;animation:f2shard .9s .55s ease-out forwards}
@keyframes f2shell{0%,50%{opacity:1;transform:none}100%{opacity:0;transform:scale(1.3)}}
@keyframes f2shard{0%{opacity:1;transform:rotate(var(--a)) translateX(0)}100%{opacity:0;transform:rotate(var(--a)) translateX(70px)}}
.f2-pet-intro{position:absolute;left:0;right:0;margin:0 auto;width:max-content;top:14%;z-index:30;display:flex;align-items:center;gap:10px;max-width:min(560px,92vw);padding:8px 14px;background:#1b1730ee;border:2px solid #c9a15a;border-radius:10px;color:#f3e6c4;box-shadow:0 4px 14px #0008;animation:f2pop .35s ease-out both}
.f2-pet-intro.out{opacity:0;transition:opacity .35s}
.f2-pet-intro canvas{width:96px;height:72px;image-rendering:pixelated;flex:0 0 auto}
.f2-pet-text{display:flex;flex-direction:column}.f2-pet-text small{color:#c9a15a;letter-spacing:1px;text-transform:uppercase;font-size:16px}.f2-pet-text strong{font-size:20px;color:#ffd96b}.f2-pet-text span{font-size:16px}
html.m-mode .f2-pet-intro{top:6px;left:240px;right:auto;margin:0;max-width:min(430px,calc(100vw - 420px));padding:4px 10px}html.m-mode .f2-pet-text span{font-size:14px}html.m-mode .f2-pet-text strong{font-size:16px}html.m-mode .f2-pet-intro canvas{width:64px;height:48px}
html.m-mode .f2-boss-talk{margin:0 auto;gap:6px}html.m-mode .f2-boss-talk .f2-boss{width:34px;height:32px}html.m-mode .f2-boss-talk .f2-bubble{padding:1px 6px;border-width:1px;border-radius:6px}html.m-mode .f2-boss-talk .f2-bubble::before{left:-12px}html.m-mode .f2-boss-talk .f2-bubble q{font-size:13px}html.m-mode .f2-boss-talk .f2-bubble cite{display:inline;font-size:11px;margin-left:4px}
@media (prefers-reduced-motion:reduce){.f2-lv-ring,.f2-lv-word,.f2-boss-talk .f2-bubble,.f2-pet-intro,.f2-shatter i,.f2-shatter .f2-cracks{animation:none}.f2-cracks path.f2-crack-new{animation:none;stroke-dashoffset:0}.f2-lv-ring{opacity:0}}
html[data-motion=reduced] .f2-lv-ring{animation:none;opacity:0}html[data-motion=reduced] .f2-cracks path.f2-crack-new{animation:none;stroke-dashoffset:0}html[data-motion=reduced] .f2-shatter{display:none}
`;
export function ensureF2CSS(){if(typeof document==='undefined'||document.getElementById('f2-css'))return;const st=document.createElement('style');st.id='f2-css';st.textContent=F2_CSS;document.head.append(st);}
try{ensureF2CSS();}catch{}
