/* improve20-h-nov1 (audit2 #12: the Journal's "Ability tree" was the same card grid as Home, with no path and no "you are here"):
   the current hero's eight abilities as one path in ladder order (by gate, so the Paladin's swapped rungs 3 and 4 read Hammer of
   Light, then Divine Shield), each rung with its icon, its name, the subject that feeds it, its mastery gate and its hero level.
   Reached rungs are lit. The next rung is the one the HUD names (learningRoad) and says what is left, in topics and hero levels,
   from the real unlocked() inputs: abilityMastery against the gate (lessonsToUnlock adds topics with the real mastery rules) and
   the hero level against xpLevel. Read-only HTML; main.js shows it. The connecting line is CSS (style.css "ability path"). */
import {ABILITIES} from '../game/abilities.js';
import {abilityMastery,unlocked,xpLevel} from '../game/math.js';
import {SUBJECTS,CLASSES} from '../game/data.js';
import {lessonsToUnlock} from '../academics/study-unlock.js';
import {learningRoad} from '../academics/learning-road.js';
import {asleep} from '../academics/awakening.js';
import {abilityIcon} from './icons.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const EPS=1e-8;
/** The hero's abilities in ladder order: the gate first (0/1/3/6/10/16/30/50), then the hero level. */
export const ladderOrder=hero=>[...(ABILITIES[hero]||[])].sort((a,b)=>a.gate-b.gate||xpLevel(a)-xpLevel(b));
/** What one rung still needs: {knowledge, level, topics, reachable, levelNeed}, from the same two tests unlocked() makes. */
export function rungNeeds(save,a){
 const knowledge=abilityMastery(save,a.subject)+EPS>=a.gate,level=(save.level||1)>=xpLevel(a),r=knowledge?{lessons:0,reachable:true}:lessonsToUnlock(save,a);
 return {knowledge,level,topics:r.lessons,reachable:r.reachable,levelNeed:xpLevel(a)};
}
/** The goal line of a rung that is not lit yet: "2 more Coding topics and hero level 4", "Hero level 6", "1 more Math topic". */
export function rungGoal(save,a){
 if(asleep(save,a))return 'Finish 1 Library lesson to awaken it';
 const n=rungNeeds(save,a),sub=SUBJECTS[a.subject]?.name||a.subject,parts=[];
 if(!n.knowledge)parts.push(n.reachable?`${n.topics} more ${sub} topic${n.topics===1?'':'s'}`:`Keep studying ${sub}`);
 if(!n.level)parts.push(`${parts.length?'hero':'Hero'} level ${n.levelNeed}`);
 return parts.length?parts.join(' and '):'Ready';
}
/** The rung states, in ladder order: 'lit' (unlocked and awake), 'next' (the HUD's next ability) or 'locked'. */
export function abilityPath(save,hero=save.hero){
 const next=learningRoad({...save,hero})?.ability?.id;
 return ladderOrder(hero).map(a=>({a,state:unlocked(save,a)&&!asleep(save,a)?'lit':a.id===next?'next':'locked'}));
}
export function abilityTreeHTML(save,{hero=save.hero}={}){
 const path=abilityPath(save,hero),lit=path.filter(r=>r.state==='lit').length,cls=CLASSES[hero]?.name||hero;
 const rung=({a,state},i)=>{const n=rungNeeds(save,a),sub=SUBJECTS[a.subject]||{name:a.subject,color:'#e3b85a'},on=s=>s?.state==='lit';
  const flow=`${on(path[i-1])&&state==='lit'?' tree-in':''}${on(path[i+1])&&state==='lit'?' tree-out':''}`;
  const gate=a.gate>0?`<span class="tree-gate${n.knowledge?' met':''}" title="${esc(sub.name)} mastery (Journal, Mastery tab) must reach ${a.gate}">Mastery ${a.gate}${n.knowledge?' ✓':''}</span>`:'<span class="tree-gate met">Starter</span>';
  return `<li class="tree-rung tree-${state}${flow}" style="--accent:${sub.color}" data-ability="${esc(a.id)}"><span class="tree-node">${abilityIcon(a,hero,32)}</span><span class="tree-body">`+
   `<span class="tree-head"><b class="tree-step">${i+1}</b><strong class="tree-name">${esc(a.name)}</strong><em class="tree-state">${state==='lit'?'Unlocked':state==='next'?'Next':'Locked'}</em></span>`+
   `<span class="tree-gates"><span class="tree-sub">${esc(sub.name)}</span>${gate}<span class="tree-gate${n.level?' met':''}">Hero level ${xpLevel(a)}${n.level?' ✓':''}</span></span>`+
   `${state==='lit'?'':`<span class="tree-goal">${state==='next'?'Next: ':''}${esc(rungGoal(save,a))}</span>`}</span></li>`;};
 return `<div class="tree" data-hero="${esc(hero)}"><p class="tree-lead">The ${esc(cls)}’s path: ${lit} of ${path.length} abilities unlocked. Each one needs its topics mastered and a hero level.</p><ol class="tree-path" aria-label="${esc(cls)} ability path">${path.map(rung).join('')}</ol></div>`;
}
