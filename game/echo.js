/* improve20-r8c-nov1 #3 (audit7 d11): an "Echo" of the next power. Through Emberkeep a kid gains five hero levels and no new ability, and
   has never felt what the next one does. A chapter boss (e8, m7, v7) won for the first time on Normal drops an "Echo of <next ability>"
   scroll: the NEXT level the hero plays has that ability in a free slot (slot 4 when none is free; the saved loadout is never changed).
   When a level is won with it, it fades (a loss keeps it for the next try), and the card says what keeps it: "<Ability> fades. Master N more <Subject> topics to keep
   it", with a button to that subject's lessons. The owner's own idea (1 Nov): "learn an ability first ... then they'll be more drawn to
   use it and to try and get other abilities".

   Nothing unlocks for good: unlocked() and the gates are untouched (they never read s.echo), the Echo never writes lessons, answers or
   mastery, and it cannot be farmed: once per ability ever (s.echo.given), only on a boss's first Normal clear (never a replay or another
   tier), and an ability that is already unlocked or asleep is never echoed.

   Save (additive within v9, core/save.js normalize -> cleanEcho): s.echo = {given:[abilityId], ready:{hero,id,from,on}|null,
   faded:{hero,id}|null}. ready.on is the level the loan is being used in. Pure: functions say when they write the save. */
import {ABILITIES} from './abilities.js';
import {SUBJECTS} from './data.js';
import {unlocked,xpLevel} from './math.js';
import {asleep,activeLoadout} from '../academics/awakening.js';
import {lessonsToUnlock} from '../academics/study-unlock.js';

export const ECHO_BOSSES=Object.freeze(['e8','m7','v7']);
const okId=(hero,id)=>typeof hero==='string'&&!!ABILITIES[hero]&&typeof id==='string'&&ABILITIES[hero].some(a=>a.id===id);
export const emptyEcho=()=>({given:[],ready:null,faded:null});
export function cleanEcho(v){const e=emptyEcho();if(!v||typeof v!=='object')return e;
 if(Array.isArray(v.given))e.given=[...new Set(v.given.filter(x=>typeof x==='string'&&x.length<=60))].slice(0,64);
 const r=v.ready;if(r&&okId(r.hero,r.id))e.ready={hero:r.hero,id:r.id,from:typeof r.from==='string'?r.from.slice(0,20):null,on:typeof r.on==='string'?r.on.slice(0,20):null};
 const f=v.faded;if(f&&okId(f.hero,f.id))e.faded={hero:f.hero,id:f.id};return e;}
const E=s=>s.echo&&typeof s.echo==='object'&&Array.isArray(s.echo.given)?s.echo:(s.echo=cleanEcho(s.echo));
const ab=(hero,id)=>ABILITIES[hero]?.find(a=>a.id===id)||null;
/* the hero's next locked ability in ladder order (lowest gate, then hero level), not yet echoed; null when there is none */
export function echoCandidate(save,hero=save?.hero){
 return [...(ABILITIES[hero]||[])].sort((a,b)=>a.gate-b.gate||xpLevel(a)-xpLevel(b)).find(a=>!unlocked(save,a)&&!asleep(save,a))||null;}
/* After a level: a chapter boss's first Normal win grants the Echo of the next ability (once per ability). Writes s.echo.
   -> the ability granted, or null. */
export function grantEcho(save,{id,won,tier='normal',first=false,arena=false,rift=false}={}){
 if(!won||!first||arena||rift||(tier||'normal')!=='normal'||!ECHO_BOSSES.includes(id))return null;
 const e=E(save),a=echoCandidate(save);if(!a||e.given.includes(a.id))return null;
 e.given.push(a.id);e.ready={hero:save.hero,id:a.id,from:id,on:null};e.faded=null;return a;}
/* The Echo waiting for this hero, or null (dropped quietly once the ability is really unlocked) */
export function echoReady(save,hero=save?.hero){const r=save?.echo?.ready;if(!r||r.hero!==hero)return null;const a=ab(hero,r.id);if(!a||unlocked(save,a))return null;return a;}
/* A level starts: the waiting Echo is lent for it. Writes s.echo.ready.on. -> the ability id, or null. */
export function startEcho(save,levelId){const a=echoReady(save);if(!a||!levelId)return null;E(save).ready.on=levelId;return a.id;}
/* The level ends. A win with the lent Echo fades it; a loss keeps it waiting for the next try (no kid loses the gift to a defeat).
   Writes s.echo. -> the ability that faded, or null. */
export function endEcho(save,levelId,won=true){const e=save?.echo,r=e?.ready;if(!r||!r.on||r.on!==levelId)return null;if(!won){r.on=null;return null;}const a=ab(r.hero,r.id);e.ready=null;e.faded=a&&!unlocked(save,a)?{hero:r.hero,id:r.id}:null;return a;}
/* the hotbar while an Echo is lent: the hero's own slots with the Echo in the first empty one, else in slot 4 */
export function echoLoadout(save,echoId){const ids=activeLoadout(save);if(!echoId||ids.includes(echoId))return ids;const i=ids.indexOf(null),out=[...ids];out[i>=0?i:3]=echoId;return out;}
/* What keeps it: "<Ability> fades. Master N more <Subject> topics to keep it." (the topic count from the same rule unlocked() reads) */
export function echoKeepLine(save,a){if(!a)return '';const r=lessonsToUnlock(save,a),n=r.lessons|0,sub=SUBJECTS[a.subject]?.name||a.subject;
 return n>0?`Master ${n} more ${sub} topic${n===1?'':'s'} to keep it.`:`Your ${sub} is ready: reach hero level ${xpLevel(a)} to keep it.`;}
/* The Library road card's line for this hero's Echo: waiting (ready), or felt (faded). -> {state, a, text} or null */
export function echoRoad(save,hero=save?.hero){
 const w=echoReady(save,hero);if(w)return {state:'ready',a:w,text:`Echo of ${w.name}: it joins your levels until you win one with it. ${echoKeepLine(save,w)}`};
 const f=save?.echo?.faded;if(!f||f.hero!==hero)return null;const a=ab(hero,f.id);if(!a||unlocked(save,a))return null;
 return {state:'faded',a,text:`You felt ${a.name}. ${echoKeepLine(save,a)}`};}
