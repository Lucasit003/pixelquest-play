// Villager quests (docs/design/COMPANIONS_AND_OAKHAVEN.md §2.2, §5). Pure data and rules; callers hold the save.
//
// Each chain brings one companion. Step kinds: talk (speak to `who`), clear (win `level`, at `tier` or higher if set,
// while the step is current; drops `item`) and visit (walk into `building`, or a village interact point). No timers, no
// kill counts, no failure: quests never expire, several can be active, quest items can never be lost or sold.
// Nothing here reads or writes mastery, answers, lessons, XP or abilities. npcs.js may import this module; this module
// must never import npcs.js.
import {levelById} from './levels.js';
import {join, COMPANIONS, hireable} from './party.js';

const TIERS = ['normal', 'heroic', 'legendary'];
const CHAPTER_NO = {elderwood: 1, emberkeep: 2, veilmoor: 3};

export const QUEST_ITEMS = {
  'hob-purse': {name: 'Hob’s coin purse', icon: 'quest/hob-purse', story: 'Red Hand took the farm’s savings. You brought every coin home.'},
  'wolf-dagger': {name: 'Silver-wolf dagger', icon: 'quest/wolf-dagger', story: 'Sam’s old dagger, found in the Mushroom Mire for Kara.'},
  'bronze-clapper': {name: 'Bronze clapper', icon: 'quest/bronze-clapper', story: 'The chapel bell rings again, thanks to you.'},
  'wraith-lantern': {name: 'Wraith’s lantern', icon: 'quest/wraith-lantern', story: 'The Cinder Wraith’s lantern paid off the east road contract.'},
  'vexx-cog': {name: 'Vexx’s cog', icon: 'quest/vexx-cog', story: 'Ione found the stolen cog deep in the Furnace Depths.'},
  'last-verse': {name: 'The last verse', icon: 'quest/last-verse', story: 'Oakhaven’s ballad has its ending back.'},
  'ember-crest': {name: 'Ember Barracks crest', icon: 'quest/ember-crest', story: 'Sir Cinder’s old crest, won back on Heroic.'},
};

/* every chain as data (§2.2); `opens.done` lists levels that must all be cleared */
export const QUESTS = {
  'hobs-purse': {companion: 'wil', chapter: 'elderwood', order: 1, title: 'The Farmer’s Savings',
    giver: {key: 'farmer_hob', room: 'farmhouse', name: 'Farmer Hob'}, opens: {done: ['e3']},
    blurb: 'Red Hand’s bandits stole the farm’s savings.',
    steps: [
      {kind: 'talk', who: 'farmer_hob', text: 'Talk to Farmer Hob at his farm.'},
      {kind: 'clear', level: 'ex1', tier: null, item: 'hob-purse', text: 'Beat Red Hand on Bandit Road.'},
      {kind: 'talk', who: 'farmer_hob', take: 'hob-purse', text: 'Bring the purse back to Farmer Hob.'},
      {kind: 'visit', building: 'barracks', who: 'wil', text: 'Meet Wil at the Barracks.'}],
    reward: {companion: 'wil', keepsake: 'hob-purse'}},
  'karas-dagger': {companion: 'kara', chapter: 'elderwood', order: 2, title: 'Sam’s Dagger',
    giver: {key: 'sellsword_kara', room: 'guild_shop', name: 'Sellsword Kara'}, opens: {done: ['e5']},
    blurb: 'Kara’s old partner lost his dagger in the Mire.',
    steps: [
      {kind: 'talk', who: 'sellsword_kara', text: 'Talk to Kara at the Guild.'},
      {kind: 'clear', level: 'ex2', tier: null, item: 'wolf-dagger', text: 'Find the dagger in the Mushroom Mire.'},
      {kind: 'clear', level: 'e6', tier: null, text: 'Win at the Shaman Grove.'},
      {kind: 'talk', who: 'sellsword_kara', take: 'wolf-dagger', text: 'Give Kara the dagger.'}],
    reward: {companion: 'kara', keepsake: 'wolf-dagger'}},
  'bells-of-ember': {companion: 'wren', chapter: 'emberkeep', order: 3, title: 'The Silent Bell',
    giver: {key: 'chaplain_aurel', room: 'chapel', name: 'Chaplain Aurel'}, opens: {done: ['m1']},
    blurb: 'The chapel bell’s clapper was carried off to the Cinder Forge.',
    steps: [
      {kind: 'talk', who: 'chaplain_aurel', text: 'Talk to Chaplain Aurel at the chapel.'},
      {kind: 'clear', level: 'm2', tier: null, item: 'bronze-clapper', text: 'Find the clapper in the Cinder Forge.'},
      {kind: 'talk', who: 'chaplain_aurel', take: 'bronze-clapper', text: 'Bring the clapper to Chaplain Aurel.'},
      {kind: 'talk', who: 'wren', text: 'Talk to Sister Wren at the chapel.'}],
    reward: {companion: 'wren', keepsake: 'bronze-clapper'}},
  'east-road': {companion: 'bram', chapter: 'emberkeep', order: 4, title: 'The East Road Contract',
    giver: {key: 'ranger_bram', room: 'guild_shop', name: 'Ranger Bram'}, opens: {done: ['m3']},
    blurb: 'The Cinder Wraith haunts the Ash Wastes.',
    steps: [
      {kind: 'talk', who: 'ranger_bram', text: 'Talk to Ranger Bram at the Guild.'},
      {kind: 'clear', level: 'mx1', tier: null, item: 'wraith-lantern', text: 'Beat the Cinder Wraith in the Ash Wastes.'},
      {kind: 'talk', who: 'quartermaster_ilsa', take: 'wraith-lantern', text: 'Hand the lantern to Quartermaster Ilsa.'}],
    reward: {companion: 'bram', keepsake: 'wraith-lantern'}},
  'mill-imps': {companion: 'ione', chapter: 'emberkeep', order: 5, title: 'Imps in the Mill',
    giver: {key: 'miller_pell', room: 'riverside_mill', name: 'Miller Pell'}, opens: {done: ['m4']},
    blurb: 'Imps chewed the mill’s cogs, and Ione went after them.',
    steps: [
      {kind: 'talk', who: 'miller_pell', text: 'Talk to Miller Pell at the riverside mill.'},
      {kind: 'visit', building: 'mill-wheel', text: 'Look at the riverside mill wheel.'},
      {kind: 'clear', level: 'm5', tier: null, item: 'vexx-cog', text: 'Find Ione in the Furnace Depths.'},
      {kind: 'talk', who: 'miller_pell', take: 'vexx-cog', text: 'Bring the cog back to Miller Pell.'}],
    reward: {companion: 'ione', keepsake: 'vexx-cog'}},
  'lost-ballad': {companion: 'lisette', chapter: 'veilmoor', order: 6, title: 'The Lost Ballad',
    giver: {key: 'bard_lisette', room: 'inn', name: 'Bard Lisette'}, opens: {done: ['v4']},
    blurb: 'The Choir Lich stole the last verse of Oakhaven’s ballad.',
    steps: [
      {kind: 'talk', who: 'bard_lisette', text: 'Talk to Bard Lisette at the Inn.'},
      {kind: 'clear', level: 'v5', tier: null, item: 'last-verse', text: 'Win back the verse at the Hollow Choir.'},
      {kind: 'talk', who: 'bard_lisette', take: 'last-verse', text: 'Bring the verse to Lisette at the Inn.'}],
    reward: {companion: 'lisette', keepsake: 'last-verse'}},
  'cinders-oath': {companion: 'cinder', chapter: 'veilmoor', order: 7, title: 'The Knight’s Oath',
    giver: {key: 'captain_garrick', room: 'barracks', name: 'Captain Garrick'}, opens: {done: ['v6', 'm4']},
    blurb: 'A knight in burnt armour waits at the south gate.',
    steps: [
      {kind: 'talk', who: 'captain_garrick', text: 'Talk to Captain Garrick at the Barracks.'},
      {kind: 'visit', building: 'south-gate', who: 'cinder', text: 'Meet the knight at the south gate.'},
      {kind: 'clear', level: 'm4', tier: 'heroic', item: 'ember-crest', text: 'Win the Ember Barracks on Heroic.'},
      {kind: 'talk', who: 'cinder', take: 'ember-crest', text: 'Talk to Sir Cinder at the Barracks.'}],
    reward: {companion: 'cinder', keepsake: 'ember-crest'}},
};
export const QUEST_IDS = Object.keys(QUESTS).sort((a, b) => QUESTS[a].order - QUESTS[b].order);
/* A chain is live in the game once its companion has approved combat art (party.js hireable): today only Wil's. The rules below
   work for every chain (the tests play them all); the game passes questLive so the other six stay hidden until their art lands. */
export const questLive = id => !!QUESTS[id] && hireable(QUESTS[id].companion);
const all = () => true;
export const questGold = id => 50 * (CHAPTER_NO[QUESTS[id]?.chapter] || 1);

/* ---- the save's quests (save v9: s.quests = {q:{[id]:{step,items,started,done}}, seen:[]}) ---- */
export const emptyQuests = () => ({q: {}, seen: []});
const obj = v => !!v && typeof v === 'object' && !Array.isArray(v);
export function cleanQuests(v) {
  const out = emptyQuests(), src = obj(v) ? v : {};
  if (obj(src.q)) for (const [id, r] of Object.entries(src.q)) {
    const Q = QUESTS[id]; if (!Q || !obj(r)) continue;
    const step = Math.max(0, Math.min(Q.steps.length, Math.floor(+r.step || 0)));
    const items = Array.isArray(r.items) ? [...new Set(r.items.filter(i => QUEST_ITEMS[i]))] : [];
    const done = Number.isFinite(+r.done) && r.done !== null && +r.done > 0 ? +r.done : null;
    out.q[id] = {step: done ? Q.steps.length : step, items, started: Number.isFinite(+r.started) ? +r.started : 0, done};
  }
  if (Array.isArray(src.seen)) out.seen = [...new Set(src.seen.filter(id => QUESTS[id]))];
  return out;
}
const qOf = save => (save.quests = cleanQuests(save.quests));
const levelWon = (save, id) => !!save?.levels?.[id]?.done;
export const opensHold = (opens, save) => (opens?.done || []).every(id => levelWon(save, id));

/** 'locked' | 'open' | 'active' | 'done' */
export function questState(save, id) {
  const Q = QUESTS[id]; if (!Q) return 'locked'; const r = save?.quests?.q?.[id];
  if (r?.done) return 'done'; if (r) return 'active'; return opensHold(Q.opens, save) ? 'open' : 'locked';
}
/** The current step {index, ...step} of an active quest (an open quest's first step), or null. */
export function currentStep(save, id) {
  const st = questState(save, id), Q = QUESTS[id]; if (st === 'locked' || st === 'done') return null;
  const i = st === 'open' ? 0 : save.quests.q[id].step; return Q.steps[i] ? {index: i, ...Q.steps[i]} : null;
}
export const activeQuests = (save, only = all) => QUEST_IDS.filter(id => only(id) && questState(save, id) === 'active');
export const openQuests = (save, only = all) => QUEST_IDS.filter(id => only(id) && questState(save, id) === 'open');
export const hasItem = (save, item) => Object.values(save?.quests?.q || {}).some(r => r.items?.includes(item));

/* move a quest on one step; finishing the last step pays the reward */
function advance(save, id, now) {
  const r = qOf(save).q[id], Q = QUESTS[id]; r.step++;
  if (r.step < Q.steps.length) return {questId: id, advanced: true, done: false};
  r.done = now || 1; const joinedNow = join(save, Q.reward.companion, now), gold = questGold(id); save.gold = (save.gold || 0) + gold;
  return {questId: id, advanced: true, done: true, companion: Q.reward.companion, joined: joinedNow, gold};
}
function start(save, id, now) { const q = qOf(save); if (!q.q[id]) q.q[id] = {step: 0, items: [], started: now, done: null}; }

/**
 * Speaking to `key`: starts an open quest whose first step is this person, or completes a current talk step with them
 * (a step with `take` needs its item in hand). Returns [{questId, advanced, done, ...}] for every quest it moved.
 */
export function onTalk(save, key, now = Date.now(), only = all) {
  const out = [];
  for (const id of QUEST_IDS.filter(only)) {
    const st = questState(save, id), s = currentStep(save, id);
    if (!s || s.kind !== 'talk' || s.who !== key) continue;
    if (s.take && !save.quests?.q?.[id]?.items?.includes(s.take)) continue;
    if (st === 'open') start(save, id, now);
    out.push(advance(save, id, now));
  }
  return out;
}
/** Walking into a building or interact point by id. Returns the quests it moved. */
export function onVisit(save, building, now = Date.now(), only = all) {
  const out = [];
  for (const id of activeQuests(save, only)) { const s = currentStep(save, id); if (s?.kind === 'visit' && s.building === building) out.push(advance(save, id, now)); }
  return out;
}
/**
 * A level has ended (next to settleBounty). A win while a clear step is current, at its tier or higher, drops its item
 * and moves the quest on. Returns [{questId, item, name}] for the victory card (an item, or null for a step with none).
 */
export function onLevelEnd(save, result, now = Date.now(), only = all) {
  const out = []; if (!result?.won) return out;
  const tierRank = TIERS.indexOf(result.tier || 'normal');
  for (const id of activeQuests(save, only)) {
    const s = currentStep(save, id); if (s?.kind !== 'clear' || s.level !== result.id) continue;
    if (s.tier && tierRank < TIERS.indexOf(s.tier)) continue;
    const r = qOf(save).q[id]; if (s.item && !r.items.includes(s.item)) r.items.push(s.item);
    const moved = advance(save, id, now); out.push({...moved, item: s.item || null, name: s.item ? QUEST_ITEMS[s.item].name : null});
  }
  return out;
}

/* What a step asks for in town or on the map: {kind:'npc'|'building'|'pad', ...} */
export function stepTarget(id, s) {
  if (!s) return null; if (s.kind === 'clear') return {kind: 'pad', id: s.level};
  if (s.kind === 'visit') return {kind: 'building', id: s.building};
  return {kind: 'npc', key: s.who, room: s.who === QUESTS[id].giver.key ? QUESTS[id].giver.room : null};
}
/**
 * The quest step worth doing next (§5.5), or null: a hand-in waiting in town first, then an active clear step, then a
 * newly opened quest's first talk. Step ids are stable: quest-<id>-<index>. next-step.js decides where this ranks.
 */
export function nextQuestStep(save, only = all) {
  const pick = (id, s, rank) => ({id: `quest-${id}-${s.index}`, quest: id, rank, text: s.text, target: stepTarget(id, s)});
  for (const id of activeQuests(save, only)) { const s = currentStep(save, id); if (s && s.kind !== 'clear') return pick(id, s, 'handin'); }
  for (const id of activeQuests(save, only)) { const s = currentStep(save, id); if (s && levelById(s.level)) return pick(id, s, 'clear'); }
  for (const id of openQuests(save, only)) { const s = currentStep(save, id); if (s) return pick(id, s, 'open'); }
  return null;
}
export const questCompanion = id => COMPANIONS[QUESTS[id]?.companion] || null;
