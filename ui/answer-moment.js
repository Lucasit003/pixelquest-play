/* Lessons polish (14 Oct): the answer moment, the sitting's progress pips, and "what this leads to" on result screens.
   Pure markup builders: no save writes, no timers, no XP of their own. Every number shown is one the caller already
   earned or the real unlock rules report (study-unlock.js), so the screen never promises what the game does not do.
   Styling: dist/ui/library.css, "Lessons polish". */
import {praise} from './edu-narration.js';
import {lessonsToUnlock,nextLesson,finishLine} from '../academics/study-unlock.js';
import {SUBJECTS,CLASSES} from '../game/data.js';
import {abilityWhat,abilityNumbers} from './ability-panel.js';
import {unlockLine} from './ability-blurbs.js';
import {ABILITIES} from '../game/abilities.js';
import {xpLevel,unlocked} from '../game/math.js';
import {asleep} from '../academics/awakening.js';
import {learningRoad,scholarBadges,nextUnlockStep} from '../academics/learning-road.js';
import {abilityIcon} from './icons.js';
import {placementNudge} from '../academics/study-unlock.js';
import {runeLead,gateDots} from '../game/rune-goal.js';
import {echoRoadHTML} from './echo-ui.js';
/* friends2-nov5 #6 */import {cracksHTML,crackCount} from './friends2.js';
/* improve25-r25t-nov5 #3 */import {lookMarker} from '../game/study-looks.js';import {markerHTML,masteryLookHTML} from './study-looks-ui.js';

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
 /* improve20-r7c-nov1 #3: a topic under way is named with its next step, as on the defeat card */const fin=!know&&finishLine(save,a,l);
 if(fin)return {line:levelOk?`${fin}. Your hero level is ready.`:`${fin}, and reach hero level ${lvNeed} (${wins}).`,knowledge:false,level:levelOk};
 if(!know&&levelOk)return {line:`${study[0].toUpperCase()+study.slice(1)} to use ${a.name}${l.reachable?' (lesson, quiz, practice and test)':''}. Your hero level is ready.`,knowledge:false,level:true};
 return {line:`To use ${a.name}: ${study} and reach hero level ${lvNeed} (${wins}).`,knowledge:false,level:false};
}

/* The next road in this subject: actual completed topics plus the planner's remaining
   topics. A saved unlock is skipped. Scholar badges are derived from earned records. */
/* improve20-y-nov1 #5 (audit4 #24): until the first topic is mastered (no Scholar badge yet) the card glosses its words once: what
   "mastered" means and what a Scholar badge is. */
/* improve20-z-nov1 #4 (audit6 #2): the next ability's charges as a ring round its icon on the HUD card, one segment per topic on its road,
   lit for those mastered (code draws only the ring, an effect; the icon is the ability's own). null when the road is not a short topic road. */
export const CHARGE_MAX=12;
/* improve25-r25t-nov5 #3: mark = the ring segment (0-based) where the next study look lands; it takes var(--charge-look) */
export function chargeRing(road,mark=-1){if(!road||road.sleeping||!road.reachable||road.knowledge||!(road.total>1)||road.total>CHARGE_MAX)return null;const n=road.total,seg=360/n,gap=Math.min(8,seg*.18);
 return 'conic-gradient('+Array.from({length:n},(_,i)=>{const a=i*seg,c=i<road.done?'var(--charge-on)':i===mark?'var(--charge-look)':'var(--charge-off)';return `${c} ${(a+gap/2).toFixed(1)}deg ${(a+seg-gap/2).toFixed(1)}deg,transparent ${(a+seg-gap/2).toFixed(1)}deg ${(a+seg+gap/2).toFixed(1)}deg`;}).join(',').replace(/^/,`transparent 0deg ${(gap/2).toFixed(1)}deg,`)+')';}
export function abilityProgressHTML(save,subject,{justUnlocked=null,celebrate=false,compact=false,shelf=false,noZero=false/* improve25-r25p-nov5 #5: the Library summary hides "0 Scholar badges" while it is 0 */}={}){
 const road=learningRoad(save,subject),badges=scholarBadges(save),badge=noZero&&!badges&&!celebrate?'':`<span class="road-badges${celebrate?' earned':''}"><i aria-hidden="true"></i>${celebrate?'Scholar badge earned! ':''}${badges} Scholar badge${badges===1?'':'s'}${badges?'':`<small class="road-gloss"> (one for each topic you master)</small>`}</span>`;
 /* kidfix-b-oct31: the near goal leads: a rune (game/rune-goal.js), then the ability gate as topic dots instead of "N more topics" */
 /* improve20-r8a-nov1 #5: on the HUD card (compact) "N runes are ready" moves to its own chip with "Place for me" (main.js runeNag) */const lead=road?.sleeping?null:runeLead(save),leadHTML=lead&&!(compact&&lead.kind==='place')?`<span class="road-rune" data-rune-lead="${lead.kind}">${esc(lead.text)}</span>`:'';
 if(!road)return `<div class="am-goal road done">${leadHTML}<span class="am-goal-k">Abilities</span><strong>Every ability for this hero is unlocked.</strong>${badge}</div>`;
 const {ability:a,done,total,remaining,knowledge,level,levelNeed,sleeping,percent}=road,sub=SUBJECTS[a.subject];
 /* oct24-polish2 (playtest r3 D3: a Ranger's Snare Trap is 10 Science topics away and the road looked flat): a road of 20 topics
    or fewer is drawn as one pip per topic, and the topic just mastered lights its pip with a "+1 topic" line when it counts
    toward this ability. The ladder is unchanged; nothing new is earned. */
 /* improve25-r25t-nov5 #3: the next study look on the way to this power: a segment of the ring, a pip of the meter, and on the HUD card one line */const lm=lookMarker(save,road),lmAt=lm?.at>0&&lm.at<=total?lm.at-1:-1;
 const pips=!sleeping&&total>1&&total<=20,ring=chargeRing(road,lmAt),plus=celebrate&&!sleeping&&subject===a.subject&&done>0&&total>0;
 const tick=(ok,label)=>`<span class="am-goal-check${ok?' ok':''}">${ok?'✓':'○'} ${esc(label)}</span>`;
const dots=lead?gateDots(save,road):null;
 /* improve20-v-nov1 #19: the HUD card said the name twice ("Sundering Blow", then "Sundering Blow ●●○○○○ Coding" with a bar and a pip row
    for the same two topics). When its step is the gate dots, that one line is the name, the progress and the subject (.road-gate) */
 const st=compact?nextUnlockStep(save,road):null,gate=!!(dots&&st?.kind==='topics');
 const step=dots?(level?dots:`${dots} · hero level ${levelNeed}`):sleeping?'Finish a Library lesson to awaken this ability.':knowledge?`Your knowledge is ready! Reach hero level ${levelNeed}.`:road.reachable?`${remaining} more topic${remaining===1?'':'s'} to ${level?'unlock':'learn'} ${a.name}!${level?'':` Reach hero level ${levelNeed} too.`}`:`Keep studying ${sub.name} for ${a.name}.`;
 return `<div class="am-goal road${compact?' road-compact':''}${gate?' road-gate':''}${celebrate?' road-earned':''}" style="--accent:${esc(sub.color)}" data-ability="${esc(a.id)}">${leadHTML}${/* improve20-r8c-nov1 #3: the Echo of the next power, on the Library road card */shelf?echoRoadHTML(save):''}<span class="road-icon${ring?' road-ring':''}"${ring?` style="--ring:${esc(ring)}${lmAt>=0?`;--charge-look:${esc(lm.look.color)}`:''}" data-charge="${esc(done)}/${esc(total)}"${lmAt>=0?` data-look-at="${esc(lmAt+1)}"`:''}`:''}>${abilityIcon(a,save.hero,compact?32:48)}${/* friends2-nov5 #6: one code-drawn crack per Library step of the topic that wakes it */sleeping?'':cracksHTML(a.id,crackCount(save,a))}</span><span class="am-goal-k">${justUnlocked?`${esc(justUnlocked)} unlocked! Next ability`:sleeping?'Your first ability':shelf&&subject===a.subject?`Next ${esc(sub.name)} ability`:'Your next ability'}</span>${gate?'':`<strong>${esc(a.name)}</strong>`}${compact?'':`<span class="am-goal-what">${/* improve20-r11d-nov2 #5: the ability's own line (ui/ability-blurbs.js), the generated one as fallback */esc(unlockLine(a,x=>abilityWhat(x,CLASSES[save.hero]?.signature,abilityNumbers(save,x))))}</span>`}${(()=>{/* in the Library, the next lesson's ability (often a different one, e.g. Ember Dart beside Fireball) gets its own line here *//* juice-oct27 (new-player playtest: the first-ability card read "Heavy Strike" and then "Rallying Cry (next lesson)"): while the
    starter sleeps the card is about that one ability only */if(!shelf||compact||sleeping)return '';const id=nextLesson(save,{hero:save.hero,subject})?.ability?.id,b=id&&id!==a.id?ABILITIES[save.hero]?.find(x=>x.id===id):null;return b?`<span class="am-goal-what am-goal-next-what"><b>${esc(b.name)}</b> (next lesson): ${esc(abilityWhat(b,CLASSES[save.hero]?.signature,abilityNumbers(save,b)))}</span>`:'';})()}${sleeping||gate?'':`<span class="road-count">${total?`${done} of ${total} topic${total===1?'':'s'} mastered`:'Knowledge ready'} <small>${esc(sub.name)}</small>${total&&!badges?`<small class="road-gloss">Mastered: its lesson, quiz and practice done, then its test passed.</small>`:''}</span><span class="am-goal-meter${pips?' pips':''}" role="progressbar" aria-label="Topics toward ${esc(a.name)}" aria-valuemin="0" aria-valuemax="${total||1}" aria-valuenow="${total?done:1}">${pips?Array.from({length:total},(_,i)=>`<b class="${i<done?'on':''}${plus&&i===done-1?' new':''}${i===lmAt?' look':''}"${i===lmAt?` style="--look:${esc(lm.look.color)}" title="${esc(lm.look.name)}"`:''}></b>`).join(''):`<i style="width:${percent}%"></i>`}</span>${plus?`<span class="road-plus">+1 topic toward ${esc(a.name)}!</span>`:''}`}${compact?roadPipHTML(gate?{...st,text:dots}:st)+/* improve25-r25t-nov5 #3 */markerHTML(lm):`<span class="am-goal-checks">${sleeping?tick(false,'Finish your first lesson'):tick(knowledge,`${sub.name} knowledge`)+tick(level,`Hero level ${levelNeed}`)}</span><span class="am-goal-line">${esc(step)}</span>${closerHTML(save,a,road,shelf)}${badge}${celebrate&&!sleeping?`<button type="button" class="road-preview" data-road-preview="${esc(a.id)}">Preview ${esc(a.name)}</button><canvas class="road-canvas" width="192" height="100" hidden role="img" aria-label="${esc(a.name)} animation preview"></canvas>`:''}`}</div>`;
}

/* juice-oct27: the HUD card's pip, the one next step toward the ability ("Practice 6 more questions", "2 more topics to unlock")
   with a small bar of how far that step is. */
export function roadPipHTML(st){if(!st)return '';const pc=Math.max(0,Math.min(100,Math.round(st.have/Math.max(1,st.need)*100)));
 return `<span class="road-pip" data-step="${esc(st.kind)}"><b class="road-pip-text">${esc(st.text)}</b>${st.kind==='awaken'?'':`<span class="road-pip-bar" aria-hidden="true"><i style="width:${pc}%"></i></span>`}</span>`;}

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

/* improve20-m-nov1 (audit3 #9, R3): a topic's first mastery is a moment of its own. The seal stamps in over the victory sunburst,
   the victory banner says TOPIC MASTERED, then what was mastered, what it brings closer (the real road: learningRoad()) and the
   rune it earned. Markup only: nothing here is earned or written; the caller passes the numbers finishTest() already settled. */
/* improve20-r13b-nov2 #1: the card names the shared next ability (learningRoad without a subject reads game/power-gate.js nextPower) */
export function masteryCloser(save,t,road=learningRoad(save)){
 if(!road)return 'Every ability for this hero is unlocked.';
 const a=road.ability,sub=SUBJECTS[a.subject]?.name||a.subject,mine=a.subject===t.subject,n=road.remaining,name=`<b>${esc(a.name)}</b>`,lv=road.level?'':` You also need hero level ${esc(road.levelNeed)}.`;
 if(road.knowledge)return `${mine&&road.total?`${name} ${esc(road.total)}/${esc(road.total)} charged! `:''}Your knowledge for ${name} is ready.${road.level?'':` Reach hero level ${esc(road.levelNeed)} to use it.`}`;
 if(!road.reachable)return `Keep studying ${esc(sub)} for ${name}.`;
 const left=`${n} more ${esc(sub)} topic${n===1?'':'s'}`;
 /* improve20-z-nov1 #4 (audit6 #2): a topic toward the next ability is a charge, said as one ("Volley 1/3 charged!") */
 return mine?`${name} ${esc(road.done)}/${esc(road.total)} charged! ${left} to go.${lv}`:`Next ability: ${name}, ${left} away.${lv}`;
}
/* improve20-r16a-nov3 #3: awake = the names of abilities this mastery woke; the card repeats "<Ability> is awake!" under the banner */
/* improve20-r20n-nov4 #3 (R20L C: "+6.67 Middle School Math"): the score line says a whole thing a kid understands, "+1 Math topic mastered";
   the fractional points and the stage are no longer shown (the params stay for callers) */
export function masteryMomentHTML(save,t,{score=0,total=0,points='',stage='',subjectName='',rune='',awake=[],sum=null/* improve23-r23t-nov4 #1: {have} when the summed rule passed it */,glow=null/* improve25-r25f-nov5 #4: game/hero-glow.js glowLine */,looks=null/* improve25-r25t-nov5 #2: the study looks this mastery earned */}={}){
 const closer=masteryCloser(save,t);
 return `<div class="mastery-moment" data-mastery-moment><span class="mm-seal"><span class="am-seal" aria-hidden="true"></span></span><h2 class="mm-banner">Topic mastered!</h2><h3 class="mm-title">“${esc(t.title)}”</h3>${awake.length?`<p class="mm-awake" data-mm-awake>${awake.map(n=>`<b>${esc(n)}</b>`).join(' and ')} ${awake.length>1?'are':'is'} awake!</p>`:''}<p class="mm-score">${sum?`${esc(sum.have)} different questions right across tries`:`${esc(score)} of ${esc(total)} right`} · +1 ${esc(subjectName)} topic mastered</p>${closer?`<p class="mm-closer" data-mm-closer>${closer}</p>`:''}${glow?`<p class="mm-glow" data-mm-glow>${esc(glow)}</p>`:''}${rune}</div>${/* improve25-r25t-nov5 #2: the study look this mastery earned, one row beside the card's buttons (under the next-ability card where there are two columns) */masteryLookHTML(looks)}`;
}
/* improve20-m-nov1 (audit3 #18, IMPROVE20 round 3 item 13): the placement result was small text. It is now a short moment with existing
   art: the Library's open book stamping in over the victory sunburst, the starting grade (or "High School") on the victory banner, what the
   check opened, and the scores; the first lesson's Start button follows it (main.js placementSummary). Markup only. */
export function placementMomentHTML({banner='',floor=false,lead='',opens='',scores=[],xp=0}={}){
 /* improve20-z-nov1 #2: a check that stopped early leaves blocks it never asked (0 of 0); they are not listed */
 const one=scores.length===1;scores=scores.filter(v=>v.total>0);
 return `<div class="placement-moment" data-placement-moment><span class="eyebrow">YOUR STARTING POINT</span><span class="pm-badge" aria-hidden="true"></span><h2 class="pm-banner"${floor?' data-placement-floor':''}>${esc(banner)}</h2>${lead?`<p class="pm-lead">${esc(lead)}</p>`:''}${opens?`<p class="pm-opens" data-placement-opens>${esc(opens)}</p>`:''}<p class="pm-scores">${one?`${esc(scores[0].score)} of ${esc(scores[0].total)} right`:scores.map(v=>`Grade ${esc(v.grade)}: ${esc(v.score)}/${esc(v.total)}`).join(' · ')} · +${esc(xp)} XP</p></div>`;
}
/* improve20-m-nov1 (audit3 #6): the mastery test's pass rule in words, said on its first question and again on a result that missed it
   (the rule itself is academics/lessons.js finishTest and does not change). need = right answers that pass, skills = skills in the test. */
export function testRuleText(need,total,skills){
 return `To pass: ${need} of ${total} right${skills>1?`, with at least one right in every skill (${skills} skills)`:''}.`;
}
/* improve23-r23t-nov4 #1: the first topic's summed test rule, and its count on the card ("6 of 8 right so far, they all count"), said plainly */
/* improve24-r24l-nov5 #8 (friends2: the long rule wrapped to 3-5 lines beside the stars and pushed the question under the fold): the line shown
   under the stars is one short line; the full rule (testSumRuleText) is its tooltip and is read out by screen readers */
export function testSumRuleShort({have=0,need=8}={},skills=1){return `Pass: ${need} different right answers${skills>1?', one per skill':''}.${have>0?` ${have} so far.`:''}`;}
export function testSumRuleText({have=0,need=8}={},skills=1){return `To pass: ${need} different questions right, counted across tries${skills>1?', with a right answer in every skill':''}.${have>0?` ${have} of ${need} right so far.`:''}`;}
/* improve24-r24k-nov5 #2: gapName, the uncovered skill's kid name at a full count: "8 of 8 right so far. Get one ‘counting on’ question right to pass." */
export function testSumHTML({have=0,need=8,covered=true,gapName=''}={}){const k=Math.max(0,need-have);if(!k&&!covered&&gapName)return `<p class="test-sum" data-test-sum data-test-gap-skill>${esc(have)} of ${esc(need)} right so far. Get one ‘${esc(gapName)}’ question right to pass.</p>`;return `<p class="test-sum" data-test-sum>${esc(have)} of ${esc(need)} right so far. Every right answer counts. ${/* improve24-r24l-nov5 #6 (audit16 minor): was ", they all count." */''}${k?`${k===1?'One more right answer':`${esc(k)} more right answers`} on a later try ${k===1?'passes':'pass'} the test.`:covered?'':'Get one right in every skill to pass.'}</p>`;}
/* a test that did not pass: what it got, what was missing (the score, or a skill with no right answer yet, named) and that retakes are free */
export function testMissHTML(t,r,need){
 const name=k=>`<b>${esc(t.skills?.[k]||k)}</b>`,gap=(r.uncovered||[]).map(name),list=gap.length>1?`${gap.slice(0,-1).join(', ')} and ${gap.at(-1)}`:gap[0];
 const free='Retakes are free, with no waiting, and every right answer still counted.';
 if(r.score>=need&&gap.length)return `<p class="test-gap" data-test-gap>So close: ${esc(r.score)} of ${esc(r.total)} right, but no right answer yet in ${list}. The test needs ${esc(need)} right and at least one right in every skill. ${free}</p>`;
 return `<p>${r.score>=need-2?'Almost there':'Not yet'}: ${esc(need)} of ${esc(r.total)} right, with at least one right in every skill, passes the test.${gap.length?` No right answer yet in ${list}.`:''} ${free}</p>`;
}
