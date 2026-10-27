/* Pre-boss knowledge check (v2:edu), the pure half. Before a boss, the hero may answer a few
   questions from things already learned for a buff in that one fight. It is optional and can
   never block anything:
   - no timer, any question can be skipped, and the whole check can be skipped; the fight starts
     either way;
   - a wrong answer costs nothing (no debuff, no mastery loss), it just earns no boost;
   - retired questions (answered right twice) are never asked: retired stays retired;
   - nothing here writes the save. The check is a combat moment, not study credit, so it cannot
     move mastery, practice counts or the test gate. A caller that wants to credit answers must do
     it through the existing session/lessons functions on purpose.
   Pure: the caller supplies the random function (game/math.js style). */
import {BANK} from './bank.js';
/* oct26 exploit round 3: a right answer here pays a boss-fight boost, so the check hides give-away pictures the way placement does */
import {placementPic} from './placement.js';
import {TOPICS,POOL,ITEMS} from './lessons.js';
import {accepts} from '../game/math.js';

export const CHECK_SIZE=3;
/* Per right answer: +6% damage and 8 shield for the boss fight. Three right is +18% and 24. */
export const PER_RIGHT=Object.freeze({damage:0.06,shield:8});

/* What counts as learned: Elementary topics whose lesson was watched or that are mastered, and Middle
   / High / College levels where the hero has any mastery. Never retired items. */
export function learnedPool(save,{subject=null}={}){
 const ans=save.answers||{},live=id=>(ans[id]||0)<2,out=[];
 for(const t of TOPICS){if(subject&&t.subject!==subject)continue;const r=save.lessons?.[t.id];if(!(r&&(r.done||r.pts>0)))continue;
  for(const id of POOL[t.id])if(live(id))out.push(ITEMS[id]);}
 for(const q of BANK){if(subject&&q.subject!==subject)continue;if(!((save.mastery?.[q.subject]?.[q.level]||0)>0))continue;if(live(q.id))out.push(q);}
 return out;
}

/* Up to `count` questions, spread over different topics/subjects where possible. Returns [] when
   nothing is learned yet -- the caller then simply skips the check. */
export function pickCheck(save,{count=CHECK_SIZE,subject=null,random=Math.random}={}){
 const pool=learnedPool(save,{subject});if(!pool.length)return [];
 const groups=new Map();for(const q of pool){const k=ITEMS[q.id]?q.topic:`${q.subject}-${q.level}-${q.topic||''}`;if(!groups.has(k))groups.set(k,[]);groups.get(k).push(q);}
 const keys=[...groups.keys()],picked=[];
 while(picked.length<count&&keys.length){const i=Math.floor(random()*keys.length),k=keys.splice(i,1)[0],g=groups.get(k);picked.push(g[Math.floor(random()*g.length)]);}
 /* Fewer distinct topics than questions: top up from what is left, never repeating a question. */
 const rest=pool.filter(q=>!picked.includes(q));
 while(picked.length<count&&rest.length)picked.push(rest.splice(Math.floor(random()*rest.length),1)[0]);
 return picked.map(q=>({id:q.id,subject:q.subject,prompt:q.prompt,answer:q.answer,numeric:typeof q.answer==='number'||!!q.numeric,accept:q.accept,pic:placementPic(q),explanation:q.explanation}));
}

export const gradeAnswer=(q,input)=>String(input??'').trim()!==''&&accepts(String(input),q);

/* The buff for a fight from how many were answered right. Never below the no-check baseline. */
export function checkBuff(right,asked=CHECK_SIZE){
 const r=Math.max(0,Math.min(right|0,asked|0));
 return Object.freeze({right:r,asked:asked|0,damage:+(1+r*PER_RIGHT.damage).toFixed(2),shield:r*PER_RIGHT.shield,
  label:r?`+${Math.round(r*PER_RIGHT.damage*100)}% damage and a ${r*PER_RIGHT.shield}-point shield for this fight`:'No boost this time. The fight is the same as ever.'});
}
export const NO_BUFF=checkBuff(0,0);
