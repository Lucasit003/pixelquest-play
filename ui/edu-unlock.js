/* The ability-unlock moment (v2:edu; docs/GAME_DIRECTION.md pillar 1, "Learning is power").
   One event and one banner, so the UI agent can skin the celebration and other systems (audio,
   the hub, the Bestiary, analytics) can react without touching main.js:

     import {onAbilityUnlocked} from './ui/edu.js';
     const off=onAbilityUnlocked((ability,info)=>{ ... });   // info: {hero, subject, gate, level, mastery}

   main.js calls emitAbilityUnlocked() once per newly unlocked ability, at the moment earn() finds it
   (the same moment it queues the unlock card). A window CustomEvent 'pq:ability-unlocked' carries the
   same {ability, info} for code that prefers DOM events. Listeners run in order; one that throws
   never stops the others or the game. No timers: the banner's motion is CSS, and it stays until the
   player presses Continue. */
const listeners=new Set();
export const onAbilityUnlocked=fn=>{if(typeof fn!=='function')throw new Error('onAbilityUnlocked needs a function');listeners.add(fn);return ()=>listeners.delete(fn);};
export function emitAbilityUnlocked(ability,info={}){
 const payload={id:ability.id,name:ability.name,subject:ability.subject,gate:ability.gate,branch:ability.branch};
 for(const fn of [...listeners]){try{fn(payload,info);}catch(e){try{console.error('onAbilityUnlocked listener failed',e);}catch{}}}
 try{const W=globalThis.window;if(W?.dispatchEvent&&typeof W.CustomEvent==='function')W.dispatchEvent(new W.CustomEvent('pq:ability-unlocked',{detail:{ability:payload,info}}));}catch{}
 return payload;
}

/* Playtest S2-8: a freshly unlocked ability goes straight into the first empty hotbar slot, so the bar never
   keeps saying "Study to unlock". The loadout rules stay: four slots, each ability at most once, nothing
   already equipped is moved. A hero with no loadout yet has its starter in slot 1 (main.js's default).
   Returns the slot index used, or -1 when the ability was already equipped or every slot is full. */
export function autoEquip(save,hero,id,starter){
 const ids=save.loadouts[hero]??=(starter?[starter]:[]);
 if(ids.includes(id))return -1;
 for(let i=0;i<4;i++)if(ids[i]==null){ids[i]=id;return i;}
 return -1;
}

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* The celebration banner. Every string is supplied by the caller (main.js has the class, subject and
   level names); ids stay #unlock-next so existing flows keep working. Styling: .edu-unlock in library.css. */
/* awakening:true is the first-lesson awakening of a class's starter (academics/awakening.js): the copy says the
   training awakened it, never that mastery earned it, and an Archivist line (quote) can follow. */
export function unlockBannerHTML(a,{heroName='',subjectName=a.subject,subjectColor='#e7c77e',level=1,description='',why='',awakening=false,quote='',slot=-1,icon='',tryIt=null}={}){
 return `<div class="unlock edu-unlock${awakening?' edu-awakening':''}" role="status" aria-live="assertive" style="--accent:${esc(subjectColor)}">
<div class="edu-unlock-rays" aria-hidden="true"></div>${awakening?'<div class="edu-awaken-ring" aria-hidden="true"></div>':''}
<span class="eyebrow edu-unlock-eyebrow">KNOWLEDGE BECOMES POWER</span>
${/* the ability's own icon when the caller has one (polish, 19 Oct); the generic rune otherwise. `icon` is trusted markup from ui/icons.js */icon?`<div class="rune edu-unlock-rune edu-unlock-icon" aria-hidden="true">${icon}</div>`:'<div class="rune edu-unlock-rune" aria-hidden="true">✧</div>'}
<span class="tag edu-unlock-ribbon">${awakening?'ABILITY AWAKENED':'ABILITY UNLOCKED'}</span>
<h2 class="edu-unlock-name">${esc(a.name)}</h2>
<p class="subtle edu-unlock-meta">${esc(heroName)} · ${esc(a.branch||'')} · ${awakening?'Your first ability':`<span class="edu-unlock-subject">${esc(subjectName)} knowledge</span> · Hero level ${esc(level)}`}</p>
${why?`<p class="edu-unlock-why">${esc(why)}</p>`:''}${quote?`<p class="edu-unlock-quote">${esc(quote)}</p>`:''}<p class="edu-unlock-desc">${esc(description)}</p>
<p class="subtle edu-unlock-slot">${/* the keyboard half hides on phones (.m-mode .edu-unlock-keys in library.css; first-hour playtest 24 Oct) */awakening?'Use ability button 1<span class="edu-unlock-keys">, or press 1 on your keyboard</span>.':slot>=0?`Use ability button ${slot+1}<span class="edu-unlock-keys">, or press ${slot+1} on your keyboard</span>.`:'Your ability bar is full. Choose your abilities at Home or from the pause menu.'}</p>
${/* oct25-tryit P9: one button out of the Library into a short, safe fight with the new ability on the bar (game/try-it.js). tryIt: {label, where} from main.js; Continue stays the default (focus) so nothing is forced */tryIt?.where?`<p class="subtle edu-unlock-where">${esc(tryIt.where)}</p>`:''}<div class="edu-unlock-actions">${tryIt?`<button type="button" id="unlock-try" class="edu-unlock-try" data-try-it="${esc(a.id)}">${esc(tryIt.label||'Try it in a fight')}</button>`:''}<button id="unlock-next" class="primary edu-unlock-next">Continue</button> <button type="button" class="edu-read" data-edu-read="${esc(`${awakening?'Ability awakened':'Ability unlocked'}: ${a.name}. ${why}`)}" aria-label="Read this to me">Read to me</button></div></div>`;
}
