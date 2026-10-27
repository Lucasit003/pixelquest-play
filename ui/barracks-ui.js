// The Barracks and villager quests on screen (docs/design/COMPANIONS_AND_OAKHAVEN.md §3.4, §3.6, §5.2; owner GO 25 Oct).
// HTML builders only: main.js shows them and wires the buttons. Reads the save, never writes it.
//   barracksHTML      the roster board's hire panel: one card per companion (level bar, next trait, runs together, wage,
//                     where he cannot come), or a silhouette with the quest that brings him
//   padCompanionHTML  the level card's lines: who travels with you and the wage, or why they stay home; a quest scroll
//   resultCompanionHTML  the victory card: the companion's XP and wage, and a quest item found
//   questsJournalHTML the Journal's Quests tab: active, available, coming later, done
// Only chains whose companion has approved art are shown (questLive, party.js hireable): today, Wil's.
import {COMPANIONS, ROLES, TRIAL_RUNS, hireable, levelBar, nextTrait, traitsAt, wageText, hireBlock} from '../game/party.js';
import {QUESTS, QUEST_ITEMS, QUEST_IDS, questLive, questState, currentStep, questGold} from '../game/quests.js';
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
  return st.who === QUESTS[id].giver.key ? ({farmhouse: `${FARM_NAME}, west of the windmill`}[QUESTS[id].giver.room] || QUESTS[id].giver.name) : '';
}

export const BARRACKS_CSS = `.grid.barracks-grid{grid-template-columns:repeat(auto-fill,minmax(min(100%,400px),1fr));gap:12px}
:where(.comp-card){display:flex;flex-direction:column;gap:6px}
.barracks-grid .comp-card,.quest-list .quest-entry{border-image-source:url(ui/skin/pl-plate.png);padding:14px}
.comp-card>small{text-align:center}
.barracks-grid .comp-card.selected::after{display:none}
:where(.comp-card .comp-top){display:flex;gap:10px;align-items:center}
:where(.comp-portrait){width:96px;height:96px;image-rendering:pixelated;flex:none}
.comp-card.locked .comp-portrait{filter:brightness(0) opacity(.45)}
:where(.comp-bar){height:8px;background:#1d1a16;border:1px solid #6b5a3a;border-radius:2px;overflow:hidden}
.comp-bar>span{display:block;height:100%;background:linear-gradient(#e9c46a,#b8862f)}
:where(.comp-facts){margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:3px}
.comp-card .comp-wage{color:#e3b85a;margin:2px 0 0}
.comp-card .comp-away{opacity:.85;font-size:.92em}
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

/** The roster board's hire panel. */
export function barracksHTML(save) {
  const ids = Object.keys(COMPANIONS).filter(hireable), withId = save?.party?.with;
  const cards = ids.map(id => {
    const c = COMPANIONS[id], m = save?.party?.crew?.[id], role = ROLES[c.role]?.name || c.role;
    if (!m) {
      const q = c.quest, st = questState(save, q), step = st === 'active' ? currentStep(save, q) : null;
      const how = st === 'locked' ? opensText(q) : st === 'open' ? `Talk to ${QUESTS[q].giver.name} to begin.` : step ? `Quest step: ${step.text}` : '';
      return `<div class="card comp-card locked" data-companion="${id}"><div class="comp-top"><canvas class="comp-portrait" data-comp-sprite="${id}" width="96" height="96" aria-hidden="true"></canvas><div><span class="tag">${esc(role.toUpperCase())} · NOT YET JOINED</span><h3>${esc(c.name)}</h3></div></div><p>Joins after the quest <strong>${esc(QUESTS[q].title)}</strong>. ${esc(how)}</p></div>`;
    }
    const bar = levelBar(m.xp), L = bar.level, nt = nextTrait(id, L), have = traitsAt(id, L), hired = withId === id;
    return `<div class="card comp-card${hired ? ' selected' : ''}" data-companion="${id}"><div class="comp-top"><canvas class="comp-portrait" data-comp-sprite="${id}" width="96" height="96" aria-hidden="true"></canvas><div><span class="tag">${esc(role.toUpperCase())} · LEVEL ${L}</span><h3>${esc(c.name)}</h3><small class="subtle">${esc(c.line)}</small></div></div>`
      + `<p class="comp-wage">${esc(wageText(save, id))}</p><button data-hire="${id}" class="${hired ? '' : 'primary'}">${hired ? `Leave ${esc(c.short)} at the Barracks` : `Hire ${esc(c.short)}`}</button>${hired ? `<small class="subtle">${esc(c.short)} travels with you until you change it.</small>` : ''}`
      + `<div class="comp-bar" role="progressbar" aria-label="${esc(c.short)}’s level" aria-valuemin="0" aria-valuemax="${bar.need || 1}" aria-valuenow="${bar.need ? bar.have : 1}"><span style="width:${Math.round(bar.share * 100)}%"></span></div>`
      + `<ul class="comp-facts"><li>${bar.need ? `Level ${L}: ${num(bar.have)} / ${bar.need} toward level ${L + 1} (a win together gives 1, Heroic 1.5, Legendary 2)` : `Level ${L}: the top level`}</li>`
      + `<li>${nt ? `Next trait at level ${nt.at}: <strong>${esc(nt.name)}</strong> (${esc(nt.text)})` : 'Every trait learned'}${have.length ? ` · Has: ${esc(have.join(', '))}` : ''}</li>`
      + `<li>${esc(c.skill.name)}: ${esc(c.skill.text)}</li>`
      + `<li>Runs together: ${m.runs} · Wins: ${m.wins}</li>`
      + `<li class="comp-away">${esc(c.short)} stays here for the prologue, Goblin Camp and the arenas.</li></ul>`
      + `</div>`;
  }).join('');
  /* oct25-exploit2 O1: the rules note is the grid's last cell, beside the card on a wide screen (at 1280x720 it ran under the frame's
     bottom edge below the card); on a phone it still sits under the card */
  return `<div class="grid barracks-grid">${cards}<p class="subtle barracks-note">One companion travels with you at a time. The wage comes out of a won run’s gold; a lost run costs nothing, and your first ${TRIAL_RUNS} wins together are free. Companions never change what you learn or your abilities.</p></div>`;
}

/** The level card: the hired companion and his wage, or why he stays home; and a quest step waiting on this level. */
export function padCompanionHTML(save, level, scroll = '') {
  let out = '';
  for (const id of live()) {
    if (questState(save, id) !== 'active') continue; const st = currentStep(save, id);
    if (st?.kind === 'clear' && st.level === level.id) out += `<p class="pad-quest" data-quest="${id}">${scroll}<span>Quest: ${esc(st.item ? `find ${QUEST_ITEMS[st.item].name}` : st.text)}</span></p>`;
  }
  const id = save?.party?.with;
  if (id && hireable(id) && save.party.crew?.[id]) {
    const why = hireBlock(level, id);
    out += `<p class="pad-companion" data-companion="${id}">${why ? esc(why) : `<span>${esc(COMPANIONS[id].short)} travels with you.</span> <strong>${esc(wageText(save, id))}</strong>`}</p>`;
  }
  return out;
}

/** The victory (or defeat) card's companion and quest lines. party: settleRun's result; found: quests onLevelEnd's. */
export function resultCompanionHTML(save, party, found, scroll = '') {
  let out = '';
  for (const f of found || []) {
    const Q = QUESTS[f.questId];
    if (f.item) out += `<p class="level-record level-quest" data-quest="${f.questId}">${scroll}<strong>Found: ${esc(f.name)}! ${f.questId === 'hobs-purse' ? 'Take it back to Farmer Hob.' : `Take it back to ${esc(Q.giver.name)}.`}</strong></p>`;
    if (f.done) out += `<p class="level-record level-quest">${scroll}<strong>${esc(COMPANIONS[Q.companion].short)} can now join you at the Barracks!</strong></p>`;
  }
  if (party) {
    const c = COMPANIONS[party.id];
    const wage = !party.won ? 'no wage on a loss' : party.trial ? `free trial run${party.left ? ` (${party.left} left)` : ''}` : `wage −${party.wage} gold`;
    /* guide-oct26 (oct26-midgame proposal 5): "+0.25 XP" beside the hero's "+48 XP" read as broken; a companion's XP is on its own
       small scale (party.js xpFor), so the card shows how far he is toward his next level instead, as a bar and a share. The numbers
       are levelBar's own; nothing here changes them. The "·" before the wage ends the item before it, so a wrapped wage never starts
       its line with the dot (oct26-midgame: on a phone "· TRIAL RUN" wrapped that way). */
    const bar = levelBar(save?.party?.crew?.[party.id]?.xp), pct = Math.round(bar.share * 100);
    const prog = (party.up ? `Level ${bar.level}! ` : '') + (bar.need ? `${pct}% to level ${bar.level + 1}` : 'top level');
    out += `<p class="level-record level-companion" data-companion="${party.id}"><strong>${esc(c.short)}</strong><span class="comp-bar comp-result-bar" role="progressbar" aria-label="${esc(c.short)}’s progress to his next level" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${bar.need ? pct : 100}"><span style="width:${bar.need ? pct : 100}%"></span></span><strong class="comp-prog">${esc(prog)}<span class="subtle"> ·</span></strong><span class="subtle comp-wage-note">${esc(wage)}</span></p>`;
  }
  return out;
}

/** The Journal's Quests tab. */
export function questsJournalHTML(save) {
  const groups = {active: [], open: [], locked: [], done: []};
  for (const id of live()) groups[questState(save, id)].push(id);
  const entry = (id, body, cls = '') => `<div class="card quest-entry ${cls}" data-quest="${id}"><span class="tag">${esc(QUESTS[id].giver.name.toUpperCase())}</span><h3>${esc(QUESTS[id].title)}</h3>${body}</div>`;
  const reward = id => `<small class="subtle">Reward: ${esc(COMPANIONS[QUESTS[id].companion].short)} joins the Barracks, and ${questGold(id)} gold.</small>`;
  const sec = (title, list) => list.length ? `<h3 class="level-chapter">${title}</h3><div class="quest-list">${list.join('')}</div>` : '';
  const active = groups.active.map(id => { const st = currentStep(save, id), w = stepWhere(id, st); return entry(id, `<p>${esc(QUESTS[id].blurb)}</p><p><strong>Now: ${esc(st?.text)}</strong>${w ? `<br><small>Where: ${esc(w)}</small>` : ''}</p>${reward(id)}`); });
  /* oct26-midgame: an available quest said "Talk to Farmer Hob" with no place; it names the place as an active step does */
  const open = groups.open.map(id => { const w = stepWhere(id, QUESTS[id].steps[0]); return entry(id, `<p>${esc(QUESTS[id].blurb)}</p><p><strong>${esc(QUESTS[id].steps[0].text)}</strong>${w ? `<br><small>Where: ${esc(w)}</small>` : ''}</p>${reward(id)}`); });
  const coming = groups.locked.map(id => entry(id, `<p>${esc(opensText(id))}</p>`, 'coming'));
  const done = groups.done.map(id => entry(id, `<p>Done! ${esc(QUEST_ITEMS[QUESTS[id].reward.keepsake]?.story || '')}</p>`, 'done'));
  const body = sec('Active', active) + sec('Available', open) + sec('Coming later', coming) + sec('Done', done);
  /* oct26-midgame: with every quest done the tab was a lone "Done" card; it says so, and where the next goal lives */
  const allDone = !active.length && !open.length && !coming.length && done.length;
  return (allDone ? '<p class="subtle quests-all-done">Every quest so far is done. More villagers may ask for help later. Your next goal is on the Adventure tab.</p>' : '') + body || '<p class="subtle">No quests yet.</p>';
}

/** What to say and show when quests move (from talking, a visit or a level): {toasts:[...], say:{speaker, lines}|null} */
export function questNewsText(save, moved) {
  const toasts = []; let say = null;
  for (const m of moved || []) {
    const Q = QUESTS[m.questId]; if (!Q) continue;
    if (m.done) {
      const c = COMPANIONS[m.companion];
      if (Q.steps.at(-1).kind === 'visit') say = {speaker: c.short, lines: [c.barks.join]};
      toasts.push(`Quest complete: ${Q.title}! +${m.gold} gold. ${c.short} has joined the Barracks: hire him at the roster board.`);
    } else { const st = currentStep(save, m.questId); if (st) toasts.push(st.index === 1 ? `New quest: ${Q.title}. ${st.text}` : `Quest: ${st.text}`); }
  }
  return {toasts, say};
}
