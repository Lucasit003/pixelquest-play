/* Scholar's Seal (SKYBLOCK_DUNGEONS_PROGRESSION.md section 5.6): an optional rune stone in about half the runs. Owner,
   14 Oct (provisional), all of which this module keeps:
   - Optional, paused, untimed: the level stops while it is open (a modal), there is no clock, and closing it costs nothing.
   - Review only: questions come from topics the child has already studied (a lesson finished), from the verified lesson
     pools; nothing new is written.
   - Never punishes: a wrong answer shows the explanation and the child may try a fresh question; nothing is lost.
   - NEVER counts toward mastery or retirement: this module never writes the save. It reads lessons, picks a question and
     checks an answer with game/math.js accepts(); breaking the seal pays only run Bonus, Essence and Scholarship.
   - Never needed: S+ is reachable without it (game/grade.js D1). */
import {ITEMS,TOPICS,POOL} from '../academics/lessons.js';
import {accepts} from './math.js';
export const SEAL_RIGHT=2;
/* The questions a seal may ask this save: from studied topics only, typed answers. Pictures come along (the Seal panel
   draws them as the quiz does): 115 of the 140 Elementary topics ask every question with a picture, so a picture-free
   pool hid the Seal from most young players (run check, 14 Oct). */
export function sealPool(save){const studied=new Set(TOPICS.filter(t=>save?.lessons?.[t.id]?.done===true).map(t=>t.id));if(!studied.size)return [];
 return Object.values(ITEMS).filter(q=>studied.has(q.topic)&&q.prompt&&q.answer!=null);}
/* A seal can be lit only for a child who has studied something. */
/* Eligibility uses the boot catalog, not the question cache: a returning browser has no lesson modules loaded. */
export const sealTopics=save=>TOPICS.filter(t=>save?.lessons?.[t.id]?.done===true&&POOL[t.id]?.length).map(t=>t.id);
export const sealReady=save=>sealTopics(save).length>0;
/* state: {right, asked:[ids]} (held by the caller). The next question, not asked before in this seal when possible. */
export function sealQuestion(save,state,r=Math.random){const pool=sealPool(save);if(!pool.length)return null;const fresh=pool.filter(q=>!state.asked.includes(q.id)),from=fresh.length?fresh:pool;
 const q=from[Math.floor(r()*from.length)%from.length];state.asked.push(q.id);return q;}
/* Checks one answer. Returns {ok, broken, answer, explanation}. Reads nothing from the save and writes nothing to it. */
export function sealAnswer(state,q,input){const ok=!!q&&accepts(input,q);if(ok)state.right=(state.right|0)+1;
 return {ok,broken:(state.right|0)>=SEAL_RIGHT,answer:q?String(q.answer):'',explanation:q?.explanation||''};}
export const newSeal=()=>({right:0,asked:[]});
