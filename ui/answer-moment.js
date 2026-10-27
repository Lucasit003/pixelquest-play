/* Lessons polish (14 Oct): the answer moment, the sitting's progress pips, and "what this leads to" on result screens.
   Pure markup builders: no save writes, no timers, no XP of their own. Every number shown is one the caller already
   earned or the real unlock rules report (study-unlock.js), so the screen never promises what the game does not do.
   Styling: dist/ui/library.css, "Lessons polish". */
import {praise} from './edu-narration.js';
import {lessonsToUnlock,nextLesson} from '../academics/study-unlock.js';
import {SUBJECTS,CLASSES} from '../game/data.js';
import {abilityWhat,abilityNumbers} from './ability-panel.js';
import {ABILITIES} from '../game/abilities.js';
import {xpLevel,unlocked} from '../game/math.js';
import {asleep} from '../academics/awakening.js';
import {learningRoad,scholarBadges} from '../academics/learning-road.js';
import {abilityIcon} from './icons.js';
import {placementNudge} from '../academics/study-unlock.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* The head of a feedback card. Right: praise (the n-th line, so variety without randomness), a check badge, an XP chip
   that pops and a sparkle burst. Wrong: a lantern, "Not quite", the answer, and the reassurance that nothing is lost.
   A wrong answer never shows red or a cross. */
export function answerMomentHTML({ok,xp=0,nth=0,answer='',level=0,mastered=false}={}){
 const extra=`${level?` <span class="am-level">Hero level ${esc(level)}!</span>`:''}${mastered?' <span class="am-note">Every question here is retired: topic mastered!</span>':''}`;
 if(ok)return `<div class="am am-right" role="status"><span class="am-badge" aria-hidden="true"></span><strong class="am-say">${esc(praise(nth))}</strong>${xp>0?`<span class="am-xp">+${esc(xp)} XP</span>`:''}<span class="am-spark" aria-hidden="true"></span>${extra}</div>`;
 return `<div class="am am-wrong" role="status"><span class="am-badge" aria-hidden="true"></span><strong class="am-say">Not quite. The answer is ${esc(String(answer))}.</strong> <span class="am-note">Nothing is lost.</span>${extra}</div>`;
}

/* One pip per question: gold for right, soft coral with a cross for "not yet", outlined for the current one. */
export function sittingPipsHTML(n,i,results=[],label=`Question ${i+1} of ${n}`){
 const pips=Array.from({length:n},(_,k)=>{const r=results[k],cls=r===true?'right':r===false?'miss':k===i?'now':'';return `<i class="${cls}"></i>`;}).join('');
 return `<span class="am-pips" role="img" aria-label="${label}">${pips}</span>`;
}

/* What one ability still needs, as one sentence a child can act on (learning-flow fix, 17 Oct). The rule is the game's
   own and is not changed here: unlocked() needs the subject's mastery AND the hero level; a new save's starter sleeps
   until the first lesson is finished. Returns {line, knowledge, level} (the two halves, true when met). */
export function unlockNeed(save,a){
 const sub=SUBJECTS[a.subject]?.name||a.subject,lvNeed=xpLevel(a),lvHave=save.level||1,levelOk=lvHave>=lvNeed;
 if(asleep(save,a))return {line:`Finish a Library lesson, answering every Try-it, to awaken ${a.name}.`,knowledge:false,level:true,asleep:true};
 const l=lessonsToUnlock(save,a),know=l.lessons===0&&l.reachable,wins=lvNeed-lvHave>1?'win levels':'win a level';
 const study=l.reachable?`master ${l.lessons} more ${sub} topic${l.lessons===1?'':'s'}`:`keep training ${sub} at the Library`;
 if(unlocked(save,a))return {line:`${a.name} is unlocked!`,knowledge:true,level:true};
 if(know&&!levelOk)return {line:`Reach hero level ${lvNeed} to use ${a.name}: ${wins}. Your knowledge is ready.`,knowledge:true,level:false};
 if(!know&&levelOk)return {line:`${study[0].toUpperCase()+study.slice(1)} to use ${a.name}${l.reachable?' (lesson, quiz, practice and test)':''}. Your hero level is ready.`,knowledge:false,level:true};
 return {line:`To use ${a.name}: ${study} and reach hero level ${lvNeed} (${wins}).`,knowledge:false,level:false};
}

/* The next road in this subject: actual completed topics plus the planner's remaining
   topics. A saved unlock is skipped. Scholar badges are derived from earned records. */
export function abilityProgressHTML(save,subject,{justUnlocked=null,celebrate=false,compact=false,shelf=false}={}){
 const road=learningRoad(save,subject),badges=scholarBadges(save),badge=`<span class="road-badges${celebrate?' earned':''}"><i aria-hidden="true"></i>${celebrate?'Scholar badge earned! ':''}${badges} Scholar badge${badges===1?'':'s'}</span>`;
 if(!road)return `<div class="am-goal road done"><span class="am-goal-k">Abilities</span><strong>Every ability for this hero is unlocked.</strong>${badge}</div>`;
 const {ability:a,done,total,remaining,knowledge,level,levelNeed,sleeping,percent}=road,sub=SUBJECTS[a.subject];
 /* oct24-polish2 (playtest r3 D3: a Ranger's Snare Trap is 10 Science topics away and the road looked flat): a road of 20 topics
    or fewer is drawn as one pip per topic, and the topic just mastered lights its pip with a "+1 topic" line when it counts
    toward this ability. The ladder is unchanged; nothing new is earned. */
 const pips=!sleeping&&total>1&&total<=20,plus=celebrate&&!sleeping&&subject===a.subject&&done>0&&total>0;
 const tick=(ok,label)=>`<span class="am-goal-check${ok?' ok':''}">${ok?'✓':'○'} ${esc(label)}</span>`;
 const step=sleeping?'Finish a Library lesson to awaken this ability.':knowledge?`Your knowledge is ready! Reach hero level ${levelNeed}.`:road.reachable?`${remaining} more topic${remaining===1?'':'s'} to ${level?'unlock':'learn'} ${a.name}!${level?'':` Reach hero level ${levelNeed} too.`}`:`Keep studying ${sub.name} for ${a.name}.`;
 return `<div class="am-goal road${compact?' road-compact':''}${celebrate?' road-earned':''}" style="--accent:${esc(sub.color)}" data-ability="${esc(a.id)}"><span class="road-icon">${abilityIcon(a,save.hero,compact?32:48)}</span><span class="am-goal-k">${justUnlocked?`${esc(justUnlocked)} unlocked! Next ability`:sleeping?'Your first ability':shelf&&subject===a.subject?`Next ${esc(sub.name)} ability`:'Your next ability'}</span><strong>${esc(a.name)}</strong>${compact?'':`<span class="am-goal-what">${esc(abilityWhat(a,CLASSES[save.hero]?.signature,abilityNumbers(save,a)))}</span>`}${(()=>{/* in the Library, the next lesson's ability (often a different one, e.g. Ember Dart beside Fireball) gets its own line here */if(!shelf||compact)return '';const id=nextLesson(save,{hero:save.hero,subject})?.ability?.id,b=id&&id!==a.id?ABILITIES[save.hero]?.find(x=>x.id===id):null;return b?`<span class="am-goal-what am-goal-next-what"><b>${esc(b.name)}</b> (next lesson): ${esc(abilityWhat(b,CLASSES[save.hero]?.signature,abilityNumbers(save,b)))}</span>`:'';})()}${sleeping?'':`<span class="road-count">${total?`${done} of ${total} topic${total===1?'':'s'} mastered`:'Knowledge ready'} <small>${esc(sub.name)}</small></span><span class="am-goal-meter${pips?' pips':''}" role="progressbar" aria-label="Topics toward ${esc(a.name)}" aria-valuemin="0" aria-valuemax="${total||1}" aria-valuenow="${total?done:1}">${pips?Array.from({length:total},(_,i)=>`<b class="${i<done?'on':''}${plus&&i===done-1?' new':''}"></b>`).join(''):`<i style="width:${percent}%"></i>`}</span>${plus?`<span class="road-plus">+1 topic toward ${esc(a.name)}!</span>`:''}`}${compact?`<span class="am-goal-line">${esc(sleeping?step:level?'':`Hero level ${save.level||1} of ${levelNeed}`)}</span>`:`<span class="am-goal-checks">${sleeping?tick(false,'Finish your first lesson'):tick(knowledge,`${sub.name} knowledge`)+tick(level,`Hero level ${levelNeed}`)}</span><span class="am-goal-line">${esc(step)}</span>${closerHTML(save,a,road,shelf)}${badge}${celebrate&&!sleeping?`<button type="button" class="road-preview" data-road-preview="${esc(a.id)}">Preview ${esc(a.name)}</button><canvas class="road-canvas" width="192" height="100" hidden role="img" aria-label="${esc(a.name)} animation preview"></canvas>`:''}`}</div>`;
}

/* 25 Oct (learning-loop playtest): a High School Ranger finishing an AP World lesson read "29 more topics to learn Hunter's Mark"
   and nothing else, while another ability was far nearer. On result screens (not the Library, which has its own "Fastest next
   ability" line) the nearer ability gets one line. Read-only: it names what nextLesson() already plans. */
function closerHTML(save,a,road,shelf){
 if(shelf||road.sleeping||!road.reachable)return '';
 const n=nextLesson(save,{hero:save.hero}),b=n?.ability;
 /* oct25-tryit P1: an unplaced subject's ability nearer than both gets the line instead, with its Find-your-level check */
 const p=placementNudge(save,{hero:save.hero});
 if(p&&p.ability.id!==a.id&&p.lessons<road.remaining){const ps=SUBJECTS[p.subject]?.name||p.subject;return `<span class="am-goal-what road-closer">Closer: <b>${esc(p.ability.name)}</b>, about ${esc(p.lessons)} ${esc(ps)} topic${p.lessons===1?'':'s'} away. <button type="button" class="road-find-level" data-find-level="${esc(p.subject)}">Find your level in ${esc(ps)}</button></span>`;}
 if(!b||b.id===a.id||!(n.lessons<road.remaining))return '';
 const sub=SUBJECTS[b.subject]?.name||b.subject,lv=xpLevel(b)>(save.level||1)?` and hero level ${xpLevel(b)}`:'';
 return `<span class="am-goal-what road-closer">Closer: <b>${esc(b.name)}</b>, ${esc(n.lessons)} ${esc(sub)} topic${n.lessons===1?'':'s'} away${esc(lv)}.</span>`;
}

/* Which button on a topic's result screen is the one next step: the next thing the topic needs. */
export function nextStepId(stage){return {lesson:'lesson-again',quiz:'start-quiz',practice:'practice',test:'start-test'}[stage]||'lesson-library';}
