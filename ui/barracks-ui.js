// The Barracks and villager quests on screen (docs/design/COMPANIONS_AND_OAKHAVEN.md §3.4, §3.6, §5.2; owner GO 25 Oct).
// HTML builders only: main.js shows them and wires the buttons. Reads the save, never writes it.
//   barracksHTML      the roster board's hire panel: one card per companion (level bar, next trait, runs together, wage,
//                     where he cannot come), or a silhouette with the quest that brings him
//   padCompanionHTML  the level card's lines: who travels with you and the wage, or why they stay home; a quest scroll
//   resultCompanionHTML  the victory card: the companion's XP and wage, and a quest item found
//   questsJournalHTML the Journal's Quests tab: active, available, coming later, done
// Only chains whose companion has approved art are shown (questLive, party.js hireable): today, Wil's.
import {COMPANIONS, ROLES, TRIAL_RUNS, hireable, levelBar, nextTrait, traitsAt, wageText, hireBlock} from '../game/party.js';
import {QUESTS, QUEST_ITEMS, QUEST_IDS, questLive, questState, currentStep, questGold, keepsakeOf, /* improve20-r22w-nov4 #3 */bringsCompanion, laterChains} from '../game/quests.js';
import {TITLES} from '../game/titles.js';
import {levelById} from '../game/levels.js';
import {FARM_NAME} from '../game/fasttravel.js';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const num = n => Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/0$/, '');
const live = () => QUEST_IDS.filter(questLive);
const opensText = id => { const need = (QUESTS[id].opens?.done || []).map(l => levelById(l)?.name || l); return need.length ? `Opens after ${need.join(' and ')}.` : 'Open now.'; };
/* where a step happens, in a child's words */
const WHERE = {ex1: 'Bandit Road, off the forest path past the Orc Warcamp'};
function stepWhere(id, st) {
  if (!st) return '';
  if (st.kind === 'clear') return WHERE[st.level] || levelById(st.level)?.name || '';
  if (st.kind === 'visit') return st.building === 'barracks' ? 'The Barracks, by the south gate' : '';
  /* improve20-r22w-nov4 #3: a talk step names its room (the giver's, or the step's own room) */
  const room = st.who === QUESTS[id].giver.key ? QUESTS[id].giver.room : st.room;
  return ROOM_WHERE[room] || (st.who === QUESTS[id].giver.key ? QUESTS[id].giver.name : '');
}
const ROOM_WHERE = {farmhouse: `${FARM_NAME}, west of the windmill`, barracks: 'The Barracks, by the south gate', weaponsmith: 'Brannoc’s weaponsmith, on the market square'};
/* improve20-r22w-nov4 #3: what a chain that brings no one pays, in words ("the title “Wil’s Shield-Friend”, new lines for Wil") */
const titleOf = id => TITLES[QUESTS[id]?.reward?.title]?.name || '';
const extras = id => { const R = QUESTS[id].reward, c = COMPANIONS[QUESTS[id].companion]; return [titleOf(id) && `the title “${titleOf(id)}”`, R.barks?.length && `new things for ${c.short} to say`].filter(Boolean); };

export const BARRACKS_CSS = `.grid.barracks-grid{grid-template-columns:repeat(auto-fill,minmax(min(100%,400px),1fr));gap:12px}
:where(.comp-card){display:flex;flex-direction:column;gap:6px}
.barracks-grid .comp-card,.quest-list .quest-entry{border-image-source:url(ui/skin/pl-plate.png);padding:14px}
.comp-card>small{text-align:center}
.barracks-grid .comp-card.selected::after{display:none}
:where(.comp-card .comp-top){display:flex;gap:10px;align-items:center}
:where(.comp-portrait){width:96px;height:96px;image-rendering:pixelated;flex:none}
.comp-card.locked .comp-portrait{filter:brightness(0) opacity(.45)}
.barracks-grid .recruit-card{grid-column:1/-1;gap:8px}
.recruit-card h3{margin:2px 0}
.recruit-card .recruit-pitch{margin:2px 0 0;color:#e9dcc0}
.recruit-card .recruit-quest{margin:2px 0 0}
:where(.recruit-steps){list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}
.recruit-step{display:flex;gap:8px;align-items:flex-start;padding:4px 8px;border-radius:4px;opacity:.75}
.recruit-step small{display:block;opacity:.85}
.recruit-step[data-state=done]{opacity:.6;text-decoration:line-through}
.recruit-step[data-state=next]{opacity:1;background:rgba(227,184,90,.16);outline:2px solid #e3b85a;color:#ffe9a8}
.recruit-mark{flex:none;width:1.2em;text-align:center;color:#e3b85a}
:where(.comp-bar){height:8px;background:#1d1a16;border:1px solid #6b5a3a;border-radius:2px;overflow:hidden}
.comp-bar>span{display:block;height:100%;background:linear-gradient(#e9c46a,#b8862f)}
:where(.comp-facts){margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:3px}
.comp-card .comp-wage{color:#e3b85a;margin:2px 0 0}
.comp-hero .comp-chapter{margin:0;color:#e9dcc0}.comp-chapter small{display:block;opacity:.85}.comp-chapter[data-quest-state=active] strong,.comp-chapter[data-quest-state=open] strong{color:#ffe9a8}
.comp-card .comp-away{opacity:.85;font-size:1em}
.barracks-grid .comp-hero{grid-column:1/-1;gap:10px}
.comp-hero .comp-top{gap:18px;align-items:center}
.comp-hero .comp-big{width:192px;height:192px;background:radial-gradient(ellipse at 50% 80%,#e3b85a33,transparent 62%)}
.comp-hero .comp-head{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.barracks-grid .comp-hero h3.comp-name{margin:0;font-size:calc(var(--fs,16px) * 1.8)!important;line-height:1.15;color:#ffe9a8}
.comp-hero .comp-plain{margin:0;color:#e9dcc0;font-size:calc(var(--fs,16px) * 1.1)}
.comp-hero .comp-bar{height:12px}
.comp-hero .comp-bar-label{opacity:.9}
.comp-hero .comp-head>button{align-self:flex-start;min-width:200px}
.comp-hero .comp-wage{margin:0}
.comp-rules>summary{cursor:pointer;min-height:40px;display:flex;align-items:center;gap:6px;font-weight:700;font-size:18px;color:#e3b85a;text-decoration:underline;text-underline-offset:3px}
.comp-rules>summary::before{content:'▸'}.comp-rules[open]>summary::before{content:'▾'}
.comp-rules .comp-facts{margin-bottom:6px}
html.m-mode .comp-hero .comp-big{width:120px;height:120px}
html.m-mode .comp-hero .comp-head{gap:2px}html.m-mode .comp-hero .comp-top{align-items:flex-start}html.m-mode .comp-rules>summary{min-height:30px}html.m-mode .comp-hero{padding-top:8px;padding-bottom:6px}
html.m-mode .barracks-grid .comp-hero h3.comp-name{font-size:calc(var(--fs,16px) * 1.4)!important}
.barracks-grid .barracks-note{margin:0;align-self:start}
:where(.pad-companion,.pad-quest){margin:6px 0 0;display:flex;align-items:center;gap:6px}
.pad-companion strong{color:#e3b85a}
:where(.quest-list){display:flex;flex-direction:column;gap:10px}
:where(.quest-entry){display:flex;flex-direction:column;gap:3px}
.quest-entry.coming{opacity:.7}
dialog .level-record.level-quest{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;gap:6px}
dialog .level-record.level-quest>:first-child{flex:none}
dialog .level-record.level-companion{flex-wrap:wrap;align-items:center;justify-content:center;column-gap:6px;row-gap:2px}
dialog .level-record.level-companion .comp-result-bar{display:inline-block;width:56px;flex:none}
dialog .level-record.level-companion .comp-wage-note{white-space:nowrap}`;

const NOTE = `<p class="subtle barracks-note">One companion travels with you at a time. The wage comes out of a won run’s gold; a lost run costs nothing, and your first ${TRIAL_RUNS} wins together are free. Companions never change what you learn or your abilities.</p>`;
/** The roster board's hire panel. */
export function barracksHTML(save) {
  const ids = Object.keys(COMPANIONS).filter(hireable), withId = save?.party?.with;
  const cards = ids.map(id => {
    const c = COMPANIONS[id], m = save?.party?.crew?.[id], role = ROLES[c.role]?.name || c.role;
    if (!m) return recruitCardHTML(save, id);
    /* ready2fix-oct30 #11: the level line says what fills the bar in plain words (game/party.js runXP, numbers unchanged) */
    const bar = levelBar(m.xp), L = bar.level, nt = nextTrait(id, L), have = traitsAt(id, L), hired = withId === id;
    /* improve20-k-nov1 #1 (audit3 #11): the card leads with the companion big (his own sprite at 2.5x), his name, one plain line, his level bar
       and "Bring Wil"; the rules sheet sits under a "How companions grow" fold, with the panel's rules note */
    return `<div class="card comp-card comp-hero${hired ? ' selected' : ''}" data-companion="${id}"><div class="comp-top"><canvas class="comp-portrait comp-big" data-comp-sprite="${id}" data-comp-scale="2.5" width="192" height="192" aria-hidden="true"></canvas><div class="comp-head"><span class="tag">${esc(role.toUpperCase())} · LEVEL ${L}</span><h3 class="comp-name">${esc(c.name)}</h3>`
      + `<p class="comp-plain">${esc(c.short)} fights with you and grows with every win.</p>`
      /* improve20-r22w-nov4 #3: his later chapter (game/quests.js laterChains): what to do next, or the title won */
      + chapterLine(save, id)
      + `<div class="comp-bar" role="progressbar" aria-label="${esc(c.short)}’s level" aria-valuemin="0" aria-valuemax="${bar.need || 1}" aria-valuenow="${bar.need ? bar.have : 1}"><span style="width:${Math.round(bar.share * 100)}%"></span></div><small class="comp-bar-label">${bar.need ? `Level ${L} · ${num(bar.have)} / ${bar.need} toward level ${L + 1}` : `Level ${L} · the top level`}</small>`
      + `<button data-hire="${id}" class="${hired ? '' : 'primary'}">${hired ? `Leave ${esc(c.short)} at the Barracks` : `Bring ${esc(c.short)}`}</button><p class="comp-wage">${esc(wageText(save, id))}</p>${hired ? `<small class="subtle">${esc(c.short)} travels with you until you change it.</small>` : ''}</div></div>`
      + `<details class="comp-rules"><summary>How companions grow</summary><ul class="comp-facts"><li>${bar.need ? `Level ${L}: ${num(bar.have)} / ${bar.need} toward level ${L + 1}. Adventures together fill this bar: a win adds 1 (a Heroic win 1.5, a Legendary win 2) and a lost try adds a little.` : `Level ${L}: the top level`}</li>`
      + `<li>${nt ? `Next trait at level ${nt.at}: <strong>${esc(nt.name)}</strong> (${esc(nt.text)})` : 'Every trait learned'}${have.length ? ` · Has: ${esc(have.join(', '))}` : ''}</li>`
      + `<li>${esc(c.skill.name)}: ${esc(c.skill.text)}</li>`
      + `<li>Runs together: ${m.runs} · Wins: ${m.wins}</li>`
      + `<li class="comp-away">${esc(c.short)} stays here for the prologue, Goblin Camp and the arenas.</li></ul>${NOTE}</details>`
      + `</div>`;
  }).join('');
  /* oct25-exploit2 O1: the rules note is the grid's last cell, beside the card on a wide screen (at 1280x720 it ran under the frame's
     bottom edge below the card); on a phone it still sits under the card */
  return `<div class="grid barracks-grid">${cards}${ids.some(id => save?.party?.crew?.[id]) ? '' : NOTE}</div>`;
}

/* improve20-r22w-nov4 #3: one line on a joined companion's card for his next chapter: not open yet, the step to do now, or done */
export function chapterLine(save, id) {
  return laterChains(id, questLive).map(q => { const Q = QUESTS[q], st = questState(save, q), cur = currentStep(save, q), w = cur && stepWhere(q, cur);
    const body = st === 'done' ? `Done! You are ${esc(COMPANIONS[id].short)}’s ${esc(titleOf(q).replace(/^.*’s /, ''))}.` : st === 'locked' ? esc(opensText(q)) : `${esc(cur.text)}${w && !cur.text.includes(w) ? ` <small>Where: ${esc(w)}</small>` : ''}`;
    return `<p class="comp-chapter" data-quest="${q}" data-quest-state="${st}"><span class="tag">${esc(COMPANIONS[id].short.toUpperCase())}’S STORY</span> <strong>${esc(Q.title)}</strong>: ${body}</p>`; }).join('');
}

/* improve20-b-oct31 #11 (kid-appeal playtest, shot 15: one silhouette card in a big empty panel; "Who's that? How do I get him?"): a
   companion not yet joined gets a full "How to recruit" card: his portrait, a one-line pitch, his quest's steps from game/quests.js
   (done ones ticked, the next one highlighted) and where to go for it. Only companions with approved art reach here (hireable). */
export function recruitSteps(save, id) {
  const q = COMPANIONS[id].quest, Q = QUESTS[q], st = questState(save, q), cur = currentStep(save, q), at = st === 'done' ? Q.steps.length : cur ? cur.index : -1;
  const steps = Q.steps.map((x, i) => ({text: x.text, where: stepWhere(q, x), state: i < at ? 'done' : i === at ? 'next' : 'later'}));
  /* a quest that has not opened yet starts with what opens it */
  if (st === 'locked') steps.unshift({text: opensText(q).replace(/^Opens after (.+)\.$/, 'Beat $1.'), where: (Q.opens?.done || []).map(l => levelById(l)?.name || l).join(' and '), state: 'next', gate: true});
  return {quest: q, title: Q.title, state: st, steps, next: steps.find(x => x.state === 'next') || null};
}
export function recruitCardHTML(save, id) {
  const c = COMPANIONS[id], role = ROLES[c.role]?.name || c.role, R = recruitSteps(save, id);
  const li = x => `<li class="recruit-step" data-state="${x.state}"><span class="recruit-mark" aria-hidden="true">${x.state === 'done' ? '✓' : x.state === 'next' ? '▶' : '·'}</span><span>${esc(x.text)}${x.state === 'next' && x.where ? `<small>Where: ${esc(x.where)}</small>` : ''}</span></li>`;
  return `<div class="card comp-card recruit-card" data-companion="${id}" data-quest-state="${R.state}"><div class="comp-top"><canvas class="comp-portrait" data-comp-sprite="${id}" width="96" height="96" aria-hidden="true"></canvas><div><span class="tag">${esc(role.toUpperCase())} · NOT YET JOINED</span><h3>How to recruit ${esc(c.short)}</h3><p class="recruit-pitch">${esc(c.pitch || c.line)}</p></div></div>`
    + `<p class="recruit-quest">Quest: <strong>${esc(R.title)}</strong></p><ol class="recruit-steps">${R.steps.map(li).join('')}</ol></div>`;
}

/** The level card: the hired companion and his wage, or why he stays home; and a quest step waiting on this level. */
export function padCompanionHTML(save, level, scroll = '') {
  let out = '';
  for (const id of live()) {
    if (questState(save, id) !== 'active') continue; const st = currentStep(save, id);
    /* improve20-r22w-nov4 #3: a later chapter's step says its companion has a word to say here, while he stays at the Barracks */
    const c = COMPANIONS[QUESTS[id].companion], away = !bringsCompanion(id) && st?.bark && save?.party?.crew?.[QUESTS[id].companion] && save.party.with !== QUESTS[id].companion;
    if (st?.kind === 'clear' && st.level === level.id) out += `<p class="pad-quest" data-quest="${id}">${scroll}<span>Quest: ${esc(st.item ? `find ${QUEST_ITEMS[st.item].name}` : st.text)}${away ? `<small class="pad-quest-bring"> Bring ${esc(c.short)} from the Barracks: he has something to say here.</small>` : ''}</span></p>`;
  }
  const id = save?.party?.with;
  if (id && hireable(id) && save.party.crew?.[id]) {
    const why = hireBlock(level, id);
    out += `<p class="pad-companion" data-companion="${id}">${why ? esc(why) : `<span>${esc(COMPANIONS[id].short)} travels with you.</span> <strong>${esc(wageText(save, id))}</strong>`}</p>`;
  }
  return out;
}

/** The victory (or defeat) card's companion and quest lines. party: settleRun's result; found: quests onLevelEnd's. */
/* improve20-r22p-nov4 #3: a win that moved a quest (an item found, a step done) leads the card's body with that line (main.js levelEnd) */
export const questFirst = found => Array.isArray(found) && found.some(f => f && (f.item || f.advanced));
export function resultCompanionHTML(save, party, found, scroll = '') {
  let out = '';
  for (const f of found || []) {
    const Q = QUESTS[f.questId];
    /* improve20-r22w-nov4 #3: a later chapter says where the item goes next (its next step: the ember iron goes to Brannoc, not back to the giver) */
    const nx = !bringsCompanion(f.questId) && currentStep(save, f.questId);
    if (f.item) out += `<p class="level-record level-quest" data-quest="${f.questId}">${scroll}<strong>Found: ${esc(f.name)}! ${f.questId === 'hobs-purse' ? 'Take it back to Farmer Hob.' : nx?.take === f.item ? esc(nx.text) : `Take it back to ${esc(Q.giver.name)}.`}</strong></p>`;
    else if (nx && !f.done) out += `<p class="level-record level-quest" data-quest="${f.questId}">${scroll}<strong>Quest: ${esc(nx.text)}</strong></p>`;
    /* improve20-r20n-nov4 #1d: a chain that ends on a win names its keepsake too */
    if (f.done) out += `<p class="level-record level-quest">${scroll}<strong>${bringsCompanion(f.questId) ? `${esc(COMPANIONS[Q.companion].short)} can now join you at the Barracks!` : `${esc(Q.title)}: done!`}${keepsakeOf(f.questId) ? ` Keepsake: ${esc(keepsakeOf(f.questId).name)}, in your Trophy Hall.` : ''}</strong></p>`;
  }
  if (party) {
    const c = COMPANIONS[party.id];
    const wage = !party.won ? 'no wage on a loss' : party.trial ? `free trial run${party.left ? ` (${party.left} left)` : ''}` : `wage −${party.wage} gold`;
    /* guide-oct26 (oct26-midgame proposal 5): "+0.25 XP" beside the hero's "+48 XP" read as broken; a companion's XP is on its own
       small scale (party.js xpFor), so the card shows how far he is toward his next level instead, as a bar and a share. The numbers
       are levelBar's own; nothing here changes them. The "·" before the wage ends the item before it, so a wrapped wage never starts
       its line with the dot (oct26-midgame: on a phone "· TRIAL RUN" wrapped that way). ready2fix-oct30 #7: the wage usually wraps to a line
       of its own, which left "LEVEL 3 ·" with a stray dot; there is no dot now, the wage is its own small item. */
    const bar = levelBar(save?.party?.crew?.[party.id]?.xp), pct = Math.round(bar.share * 100);
    const prog = (party.up ? `Level ${bar.level}! ` : '') + (bar.need ? `${pct}% to level ${bar.level + 1}` : 'top level');
    out += `<p class="level-record level-companion" data-companion="${party.id}"><strong>${esc(c.short)}</strong><span class="comp-bar comp-result-bar" role="progressbar" aria-label="${esc(c.short)}’s progress to his next level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${bar.need ? pct : 100}"><span style="width:${bar.need ? pct : 100}%"></span></span><strong class="comp-prog">${esc(prog)}</strong><span class="subtle comp-wage-note">${esc(wage)}</span></p>`;
  }
  return out;
}

/* endfollow-oct29 (endgame-oct29 open item 1): a kid on the main road never met Wil's quest as a goal until after THE END,
   because the next goal ranks an open quest below the main road (next-step.js). A chapter's first Normal clear card names that
   chapter's live quest once, as one side line under "Chapter clear!"; the NEXT GOAL stays the main road. Nothing when the quest
   is done, still locked, or already the next goal (skip). */
export function chapterQuestHTML(save, chapter, scroll = '', skip = null) {
  for (const id of live()) {
    const Q = QUESTS[id], st = questState(save, id); if (Q.chapter !== chapter || id === skip || (st !== 'open' && st !== 'active')) continue;
    const step = currentStep(save, id); if (!step) continue;
    const c = COMPANIONS[Q.companion], what = st === 'open' ? `${Q.blurb} ${step.text}` : `${Q.title}. ${step.text}`;
    /* improve20-r22w-nov4 #3: a later chapter of someone already in the crew never says he "can join you" */
    const text = `Side quest: ${what.replace(/[.!]\s*$/, '')}${step.who === Q.companion || !bringsCompanion(id) ? '.' : `, and ${c.short} can join you.`}`;
    return `<p class="level-record level-quest level-quest-pointer" data-quest="${id}">${scroll}<span>${esc(text)}</span></p>`;
  }
  return '';
}

/** The Journal's Quests tab. */
export function questsJournalHTML(save) {
  const groups = {active: [], open: [], locked: [], done: []};
  for (const id of live()) groups[questState(save, id)].push(id);
  const entry = (id, body, cls = '') => `<div class="card quest-entry ${cls}" data-quest="${id}"><span class="tag">${esc(QUESTS[id].giver.name.toUpperCase())}</span><h3>${esc(QUESTS[id].title)}</h3>${body}</div>`;
  /* improve20-r20n-nov4 #1c: the reward names the keepsake, and the done card says where it is */
  /* improve20-r22w-nov4 #3: a later chapter's reward is gold, its title, the companion's new lines and the keepsake */
  const reward = id => bringsCompanion(id) ? `<small class="subtle">Reward: ${esc(COMPANIONS[QUESTS[id].companion].short)} joins the Barracks, ${questGold(id)} gold${keepsakeOf(id) ? `, and a keepsake, ${esc(keepsakeOf(id).name)}` : ''}.</small>`
    : `<small class="subtle">Reward: ${esc([`${questGold(id)} gold`, ...extras(id)].join(', '))}${keepsakeOf(id) ? `, and a keepsake, ${esc(keepsakeOf(id).name)}` : ''}.</small>`;
  const kept = id => keepsakeOf(id) ? `<p class="quest-keepsake" data-keepsake="${esc(keepsakeOf(id).id)}"><span class="quest-keepsake-pic" aria-hidden="true" style="background-image:url(${esc(keepsakeOf(id).img || 'ui/skin/rewards/chest.png')})"></span><span>Keepsake: <strong>${esc(keepsakeOf(id).name)}</strong>, in your Trophy Hall.</span></p>` : '';
  const sec = (title, list) => list.length ? `<h3 class="level-chapter">${title}</h3><div class="quest-list">${list.join('')}</div>` : '';
  const active = groups.active.map(id => { const st = currentStep(save, id), w = stepWhere(id, st); return entry(id, `<p>${esc(QUESTS[id].blurb)}</p><p><strong>Now: ${esc(st?.text)}</strong>${w ? `<br><small>Where: ${esc(w)}</small>` : ''}</p>${reward(id)}`); });
  /* oct26-midgame: an available quest said "Talk to Farmer Hob" with no place; it names the place as an active step does */
  const open = groups.open.map(id => { const w = stepWhere(id, QUESTS[id].steps[0]); return entry(id, `<p>${esc(QUESTS[id].blurb)}</p><p><strong>${esc(QUESTS[id].steps[0].text)}</strong>${w ? `<br><small>Where: ${esc(w)}</small>` : ''}</p>${reward(id)}`); });
  const coming = groups.locked.map(id => entry(id, `<p>${esc(opensText(id))}</p>`, 'coming'));
  const done = groups.done.map(id => entry(id, `<p>Done! ${esc(QUEST_ITEMS[QUESTS[id].reward.keepsake]?.story || '')}</p>${kept(id)}${/* improve20-r22w-nov4 #3 */titleOf(id) ? `<p class="quest-title-won">Title: <strong>${esc(titleOf(id))}</strong>. Wear it from your hero card.</p>` : ''}`, 'done'));
  const body = sec('Active', active) + sec('Available', open) + sec('Coming later', coming) + sec('Done', done);
  /* oct26-midgame: with every quest done the tab was a lone "Done" card; it says so, and where the next goal lives */
  const allDone = !active.length && !open.length && !coming.length && done.length;
  /* improve20-r10d-nov2 #6 (kid sims nov2 #30): with only "coming later" cards the tab opens on one friendly line, so it does not read as an empty wall */
  const early = !active.length && !open.length && !done.length && coming.length ? '<p class="journal-early">Help a villager to fill this page. Here is who will ask first.</p>' : '';
  return (allDone ? '<p class="subtle quests-all-done">Every quest so far is done. More villagers may ask for help later. Your next goal is on the Adventure tab.</p>' : early) + body || '<p class="subtle">No quests yet.</p>';
}

/** What to say and show when quests move (from talking, a visit or a level): {toasts:[...], say:{speaker, lines}|null} */
export function questNewsText(save, moved) {
  const toasts = []; let say = null;
  for (const m of moved || []) {
    const Q = QUESTS[m.questId]; if (!Q) continue;
    /* improve20-r22w-nov4 #3: a later chapter ends with its companion's thanks, the title and the keepsake (he has joined already) */
    if (m.done && !bringsCompanion(m.questId)) {
      const c = COMPANIONS[Q.companion], k = keepsakeOf(m.questId);
      if (Q.reward.say?.length) say = {speaker: c.short, lines: [...Q.reward.say]};
      toasts.push(`Quest complete: ${Q.title}! +${m.gold} gold.${titleOf(m.questId) ? ` New title: ${titleOf(m.questId)}.` : ''}${k ? ` Keepsake: ${k.name}, in your Trophy Hall.` : ''}`);
    } else if (m.done) {
      const c = COMPANIONS[m.companion];
      if (Q.steps.at(-1).kind === 'visit') say = {speaker: c.short, lines: [c.barks.join]};
      /* improve20-r20n-nov4 #1d: the quest's last toast says what was earned, the keepsake included */
      const k = keepsakeOf(m.questId);
      toasts.push(`Quest complete: ${Q.title}! +${m.gold} gold. ${c.short} has joined the Barracks: hire him at the roster board.${k ? ` Keepsake: ${k.name}, in your Trophy Hall.` : ''}`);
    } else { const st = currentStep(save, m.questId); if (st) toasts.push(st.index === 1 ? `New quest: ${Q.title}. ${st.text}` : `Quest: ${st.text}`); }
  }
  return {toasts, say};
}
