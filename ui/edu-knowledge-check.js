/* Pre-boss knowledge check panel (v2:edu). Optional, untimed, skippable at every point; the fight
   starts whatever happens. Logic is in academics/knowledge-check.js; styling in dist/ui/library.css
   under .edu-kc.

   Integrator (the levels/worldmap flow, before a boss wave -- never inside combat.js):
     import {mountKnowledgeCheck} from './ui/edu.js';
     mountKnowledgeCheck(panelEl,save,{boss:'Barbarian King',onDone:buff=>startBoss(buff)});
   buff = {right, asked, damage (multiplier, 1 = none), shield (points), label}. Apply it to that one
   fight only. If nothing has been learned yet, onDone(NO_BUFF) is called at once and nothing shows.
   Nothing is written to the save. */
import {pickCheck,gradeAnswer,checkBuff,NO_BUFF,CHECK_SIZE} from '../academics/knowledge-check.js';
import {SUBJECTS} from '../game/data.js';
import {drawPic,describe,crispCtx} from '../gfx/lesson-art.js';
import {readButtonHTML} from './edu-study.js';
import {choiceFormHTML,wireChoices,focusAnswers} from './answer-choices.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* The same rule as the quiz: a question's picture never carries count/solve labels, and a hint-only
   picture is not drawn beside the question. */
const bare=p=>Array.isArray(p)?p.map(bare):p&&typeof p==='object'?Object.fromEntries(Object.entries(p).filter(([k])=>k!=='count'&&k!=='solve')):p;

export function mountKnowledgeCheck(el,save,{boss='the boss',count=CHECK_SIZE,subject=null,random=Math.random,onDone}={}){
 const items=pickCheck(save,{count,subject,random});
 if(!el||!items.length){onDone?.(NO_BUFF);return null;}
 const st={i:-1,right:0,answered:0,results:[],done:false};
 const finish=()=>{if(st.done)return;st.done=true;const b=checkBuff(st.right,items.length);render(b);};
 const focusFirst=()=>{const f=el.querySelector('[data-edu-focus]');if(f)f.focus?.({preventScroll:true});else focusAnswers(el.querySelector('form'));};
 function render(buff){
  const pips=items.map((_,k)=>`<i class="${k<st.results.length?(st.results[k]?'right':'miss'):k===st.i?'on':''}" aria-hidden="true"></i>`).join('');
  if(buff){
   el.innerHTML=`<section class="edu-kc" aria-label="Knowledge check result"><span class="edu-kc-eyebrow">Knowledge check</span><h3 class="edu-title">${buff.right?'Your knowledge is your armour':'Into the fight'}</h3><div class="edu-kc-pips">${pips}</div><p class="edu-kc-buff${buff.right?' on':''}" role="status">${esc(buff.label)}</p><div class="edu-kc-actions"><button type="button" class="edu-go primary" data-edu-fight data-edu-focus>Face ${esc(boss)}</button></div></section>`;
   el.querySelector('[data-edu-fight]').onclick=()=>onDone?.(buff);focusFirst();return;}
  if(st.i<0){
   el.innerHTML=`<section class="edu-kc" aria-label="Knowledge check"><span class="edu-kc-eyebrow">Before the boss</span><h3 class="edu-title">A knowledge check</h3><p>Answer up to ${items.length} questions you have learned.</p><p>Each right answer: +${Math.round(checkBuff(1,1).damage*100-100)}% damage, +${checkBuff(1,1).shield} shield.</p><p class="edu-kc-rules">No timer. Wrong answers cost nothing. Skip any time.</p>${readButtonHTML(`A knowledge check before ${boss}. Answer up to ${items.length} questions you have learned. No timer. Wrong answers cost nothing.`)}<div class="edu-kc-actions"><button type="button" class="edu-go primary" data-edu-start data-edu-focus>Start the check</button><button type="button" class="edu-skip" data-edu-skip>Skip to the fight</button></div></section>`;
   el.querySelector('[data-edu-start]').onclick=()=>{st.i=0;render();};el.querySelector('[data-edu-skip]').onclick=finish;focusFirst();return;}
  const q=items[st.i],sub=SUBJECTS[q.subject]||{name:q.subject,color:'#e7c77e'},showPic=q.pic&&!q.pic.hint;
  el.innerHTML=`<section class="edu-kc" aria-label="Knowledge check" style="--accent:${sub.color}"><span class="edu-kc-eyebrow">Question ${st.i+1} of ${items.length} · ${esc(sub.name)}</span><div class="edu-kc-pips">${pips}</div>${showPic?`<canvas class="edu-kc-pic" width="640" height="280" role="img" aria-label="${esc(describe(q.pic))}"></canvas>`:''}<h3 class="edu-kc-q" id="edu-kc-q">${esc(q.prompt)}</h3>${readButtonHTML(q.prompt)}${choiceFormHTML(q,{form:'edu-kc-form',input:'edu-kc-answer',check:'edu-kc-check',cls:'edu-kc-form'})||'<form class="edu-kc-form"><input class="edu-kc-input" aria-labelledby="edu-kc-q" autocomplete="off" placeholder="Type your answer…" data-edu-focus><button type="submit" class="edu-go primary">Answer</button></form>'}<p class="edu-kc-feedback" role="status" aria-live="polite"></p><div class="edu-kc-actions"><button type="button" class="edu-skip" data-edu-next>Skip this question</button><button type="button" class="edu-skip" data-edu-skip>Skip to the fight</button></div></section>`;
  if(showPic){try{const c=el.querySelector('.edu-kc-pic');drawPic(crispCtx(c),bare(q.pic),1);}catch{}}
  const form=el.querySelector('form'),input=el.querySelector('input'),fb=el.querySelector('.edu-kc-feedback'),next=el.querySelector('[data-edu-next]');
  let locked=false;
  const advance=()=>{if(st.results.length<=st.i)st.results.push(false);st.i++;if(st.i>=items.length)finish();else render();};
  form.onsubmit=e=>{e.preventDefault();if(locked){advance();return;}if(!input.value.trim()){fb.textContent='Type an answer, or skip this question.';return;}
   const ok=gradeAnswer(q,input.value);locked=true;st.answered++;if(ok)st.right++;st.results.push(ok);input.readOnly=true;
   fb.textContent=ok?'Right! Your boost grows.':`Not this time. The answer is ${q.answer}.${q.explanation?' '+q.explanation:''}`;fb.className=`edu-kc-feedback ${ok?'right':'miss'}`;
   next.textContent=st.i+1>=items.length?'See your boost':'Next question';form.querySelector('[type=submit]').textContent='Next';next.focus?.({preventScroll:true});};
  wireChoices(form,q);next.onclick=advance;el.querySelector('[data-edu-skip]').onclick=()=>{while(st.results.length<items.length)st.results.push(false);finish();};
  focusFirst();
 }
 render();
 return {items,state:st,skip:finish};
}
