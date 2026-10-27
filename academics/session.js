import {BANK} from './bank.js';
import {clamp,accepts} from '../game/math.js';
// EDUCATION_BIBLE asks for a warning below 30 unseen items. Retirement is permanent,
// so a pool only shrinks; the player should see it coming rather than hit a dead end.
export const LOW_POOL=30;
export function poolStatus(save,subject,level){
 const pool=BANK.filter(q=>q.subject===subject&&q.level===level);
 const unseen=pool.filter(q=>(save.answers[q.id]||0)<2).length;
 return{total:pool.length,unseen,retired:pool.length-unseen,low:unseen<LOW_POOL,empty:!unseen};}
export function begin(save,subject,level){const m=save.mastery[subject]?.[level]||0;return {subject,level,tier:m>60?2:m>30?1:0,correct:0,wrong:0,recent:[],focus:null,count:0,gained:0};}
export function selectQuestion(save,s,random=Math.random){const pool=BANK.filter(q=>q.subject===s.subject&&q.level===s.level&&(save.answers[q.id]||0)<2);if(!pool.length)return null;const fresh=pool.filter(q=>!s.recent.includes(q.id));const filters=[q=>q.tier===s.tier&&(!s.focus||q.topic===s.focus),q=>q.tier===s.tier,q=>Math.abs(q.tier-s.tier)<=1,()=>true];for(const f of filters){const p=fresh.filter(f);if(p.length)return p[Math.floor(random()*p.length)];}return pool[Math.floor(random()*pool.length)];}
export function answer(save,s,q,input){const ok=accepts(input,q);let gain=0;if(ok){save.answers[q.id]=Math.min(2,(save.answers[q.id]||0)+1);const levels=save.mastery[s.subject]??=[0,0,0];const old=levels[s.level];levels[s.level]=clamp(old+(5+q.tier*2),0,100);gain=levels[s.level]-old;s.correct++;s.wrong=0;if(s.correct>=2){s.tier=Math.min(2,s.tier+1);s.focus=null;s.correct=0;}}else{s.wrong++;s.correct=0;if(s.wrong>=2){s.focus=q.topic;s.tier=Math.max(0,s.tier-1);}}s.recent.push(q.id);s.recent=s.recent.slice(-4);s.count++;s.gained+=gain;return {ok,gain};}
