// Companions for hire (docs/design/COMPANIONS_AND_OAKHAVEN.md §2-§3). Pure data and rules; callers hold the save.
//
// THE LEARNING RULE (spec §3.7, tests/companions.test.js): nothing here imports from academics/ or reads or writes
// mastery, answers, lessons, placement or the ladder, and nothing writes the hero's XP or level. A companion's numbers
// scale with the hero's level, which the caller passes in (read only). Companions never cast or lend an ability, never
// touch a cooldown or MP, and wear no gear: a companion grows by its own level (wins together) and three traits.
// Wages are paid from a won run's gold only; a lost run costs nothing; the first three runs with each companion are free.

export const COMP_MAX = 15, TRIAL_RUNS = 3;

/* role numbers (§3.4): hp and dmg are shares of the reference curves, rate = seconds between attacks, reach in px
   (melee) or range (ranged), speed = share of the hero's move speed */
export const ROLES = {
  /* tank tuned 24 Oct (docs/playtest/oct24-companions2/SIM_REPORT.md): hp .9 -> .8, dmg .25 -> .3; with Hold the Line at
     1.5 s he cuts a child's falls by about 30% on Heroic and 20% on Legendary and deals 3-4% of the damage (C1, C3) */
  tank: {name: 'Tank', hp: .8, dmg: .3, rate: 1.3, reach: 16, speed: .9, retreat: .25},
  rogue: {name: 'Rogue', hp: .5, dmg: .35, rate: .8, reach: 12, speed: 1.1, retreat: .25},
  archer: {name: 'Archer', hp: .5, dmg: .3, rate: 1.1, range: 140, speed: 1, retreat: .25},
  healer: {name: 'Healer', hp: .55, dmg: .15, rate: 1.4, range: 110, speed: 1, retreat: .35},
  mage: {name: 'Mage', hp: .45, dmg: .5, rate: 3.5, range: 120, speed: .95, retreat: .25, bolt: {rate: 1.6, dmg: .2}},
  bard: {name: 'Bard', hp: .6, dmg: .15, rate: 1.2, reach: 14, speed: 1, retreat: .25},
  vanguard: {name: 'Vanguard', hp: 1, dmg: .3, rate: 1.3, reach: 18, speed: .9, retreat: .25},
};

/* The seven (§2.1). `quest` is the chain in game/quests.js that brings them; `wage` is gold per won run. Wages were
   scaled by 0.4 with the 24 Oct gold retune (docs/playtest/oct24-polish/ECONOMY.md) so each stays under 30% of a
   chapter's median replay gold (guardrail C7). */
export const COMPANIONS = {
  wil: {name: 'Wil Hobson', short: 'Wil', role: 'tank', quest: 'hobs-purse', wage: 10, line: 'The farmer’s son. Earnest, a bit clumsy, proud of his dad.',
    skill: {name: 'Hold the Line', text: 'Plants his shield. Foes close by turn to him (Legendary bosses ignore it).', cd: 8, radius: 60, taunt: 1.5, bossTaunt: 1.5},
    traits: [{at: 5, name: 'Sturdier', text: '+10% health'}, {at: 10, name: 'Shield Bash', text: 'Hold the Line pushes foes back'}, {at: 15, name: 'Second Wind', text: 'Gets up fast once a level'}],
    barks: {start: ['Shield’s up!', 'Behind me!', 'That one’s mine, I think.'], downed: 'Just catching my breath!', revived: 'Back on my feet!', join: 'Dad says I talk too much. I’ll talk less and hit more. For the farm!'}},
  kara: {name: 'Kara Quickstep', short: 'Kara', role: 'rogue', quest: 'karas-dagger', wage: 12, line: 'A sellsword. Dry and cocky, secretly kind.',
    skill: {name: 'Flank', text: 'Dashes behind your target and strikes hard.', cd: 5},
    traits: [{at: 5, name: 'Quick Hands', text: 'Attacks 10% faster'}, {at: 10, name: 'Smoke Step', text: 'Dodges one big hit every 10 s'}, {at: 15, name: 'Marked', text: 'Her target takes more from you for 3 s'}],
    barks: {start: ['I work alone. Usually.', 'Try to keep up.', 'Left one’s mine.'], downed: 'Ow. Fine. Give me a second.', revived: 'Where was I?', join: 'Fine. Partners. Don’t make it weird.'}},
  bram: {name: 'Ranger Bram', short: 'Bram', role: 'archer', quest: 'east-road', wage: 20, line: 'A calm woodsman who counts everything.',
    skill: {name: 'Volley', text: 'Three arrows into the biggest group.', cd: 6},
    traits: [{at: 5, name: 'Long Sight', text: '+20 range'}, {at: 10, name: 'Pinning Shot', text: 'Slows one foe for 2 s'}, {at: 15, name: 'Steady Aim', text: 'More strong hits'}],
    barks: {start: ['Three on the left.', 'I’ll count them, you hit them.', 'Wind’s good.'], downed: 'Took one. I’m fine.', revived: 'Counting again.', join: 'I’ll count them, you hit them.'}},
  wren: {name: 'Sister Wren', short: 'Wren', role: 'healer', quest: 'bells-of-ember', wage: 22, line: 'Gentle and encouraging. Hums hymns on the road.',
    skill: {name: 'Mending Light', text: 'Heals you when you are hurt.', cd: 7},
    traits: [{at: 5, name: 'Warm Glow', text: 'Her heal keeps healing for 3 s'}, {at: 10, name: 'Ward', text: 'A small shield once a wave'}, {at: 15, name: 'Lantern', text: 'Gets up faster'}],
    barks: {start: ['Walk in the light.', 'I’m right behind you.', 'Lovely dodge!'], downed: 'Just resting my eyes!', revived: 'Still here!', join: 'Let me walk with you. Someone should sing on the road.'}},
  ione: {name: 'Ione of the Mill', short: 'Ione', role: 'mage', quest: 'mill-imps', wage: 24, line: 'A hedge mage. Explains her spells like science.',
    skill: {name: 'Ember Burst', text: 'A blast of fire on a group.', cd: 3.5, radius: 40},
    traits: [{at: 5, name: 'Wider', text: 'Bigger blast'}, {at: 10, name: 'Frost Spark', text: 'Every other blast slows'}, {at: 15, name: 'Chain', text: 'The blast jumps to one more foe'}],
    barks: {start: ['Heat rises!', 'For science!', 'Watch this.'], downed: 'Hypothesis: ouch.', revived: 'Back to work!', join: 'I need to see more fire. For science.'}},
  lisette: {name: 'Bard Lisette', short: 'Lisette', role: 'bard', quest: 'lost-ballad', wage: 32, line: 'Theatrical and funny. Narrates the fight like a ballad.',
    skill: {name: 'Marching Song', text: 'You both move faster and heal a little.', cd: 10},
    traits: [{at: 5, name: 'Encore', text: 'The song lasts longer'}, {at: 10, name: 'Rousing Chorus', text: '+5% damage while it plays'}, {at: 15, name: 'Lullaby', text: 'One foe dozes for 2 s'}],
    barks: {start: ['And so our hero set forth!', 'A tune for the road!', 'Mind the high notes.'], downed: 'A tragic verse!', revived: 'The ballad goes on!', join: 'Every hero needs a song.'}},
  cinder: {name: 'Sir Cinder', short: 'Cinder', role: 'vanguard', quest: 'cinders-oath', wage: 36, line: 'The Flame Knight, sworn to Oakhaven now.',
    skill: {name: 'Ember Sweep', text: 'A wide arc of fire. Foes turn to him.', cd: 6, radius: 60, taunt: 1.5, bossTaunt: 1.5},
    traits: [{at: 5, name: 'Ashen Wall', text: '+10% health'}, {at: 10, name: 'Searing Oath', text: 'The sweep burns'}, {at: 15, name: 'Unyielding', text: 'Never knocked back'}],
    barks: {start: ['For Oakhaven.', 'Stand with me.', 'I hold this ground.'], downed: 'I yield nothing.', revived: 'I rise.', join: 'My blade is yours, and the town’s.'}},
};
export const COMPANION_IDS = Object.keys(COMPANIONS);

/* Level L -> L+1 needs L companion XP, so level 15 is 105 XP. */
export const xpFor = L => L * (L - 1) / 2;
export function compLevel(xp) { const x = Math.max(0, +xp || 0); let L = 1; while (L < COMP_MAX && x >= xpFor(L + 1)) L++; return L; }
/* XP for one run together: a win 1 / 1.5 / 2 by tier, a loss .25. Nothing else raises it. */
export const runXP = (won, tier = 'normal') => won ? ({heroic: 1.5, legendary: 2}[tier] ?? 1) : .25;

/* the reference curves at hero level L (§3.4) and the companion's own growth */
export const refDamage = L => 20 + 1.5 * (Math.max(1, L | 0) - 1);
export const refHealth = L => 100 + 8 * (Math.max(1, L | 0) - 1);
export const growth = cl => 1 + .02 * Math.max(1, Math.min(COMP_MAX, cl | 0));
export const traitsAt = (id, cl) => (COMPANIONS[id]?.traits || []).filter(t => cl >= t.at).map(t => t.name);

/* One companion's numbers for a run. heroLevel is read, never written. */
export function compStats(id, {heroLevel = 1, level = 1} = {}) {
  const c = COMPANIONS[id]; if (!c) return null; const r = ROLES[c.role], g = growth(level), tr = traitsAt(id, level);
  let hp = r.hp * refHealth(heroLevel) * g; if (tr.includes('Sturdier') || tr.includes('Ashen Wall')) hp *= 1.1;
  return {id, name: c.name, short: c.short, role: c.role, level, traits: tr, hp: Math.round(hp), dmg: Math.round(r.dmg * refDamage(heroLevel) * g * 10) / 10,
    rate: tr.includes('Quick Hands') ? r.rate * .9 : r.rate, reach: r.reach ?? 0, range: (r.range ?? 0) + (tr.includes('Long Sight') ? 20 : 0), speedShare: r.speed, retreat: r.retreat, skill: {...c.skill}};
}

/* ---- the save's party (save v9: s.party = {with, crew:{[id]:{xp,runs,wins,trial,joined}}}) ---- */
export const emptyParty = () => ({with: null, crew: {}});
const num = (v, lo, hi, d = lo) => Number.isFinite(+v) ? Math.min(hi, Math.max(lo, +v)) : d;
/* made safe to read: unknown ids dropped, numbers clamped, `with` must be in the crew */
export function cleanParty(v) {
  const p = emptyParty(), src = v && typeof v === 'object' && !Array.isArray(v) ? v : {};
  const crew = src.crew && typeof src.crew === 'object' && !Array.isArray(src.crew) ? src.crew : {};
  for (const [id, m] of Object.entries(crew)) if (COMPANIONS[id] && m && typeof m === 'object')
    p.crew[id] = {xp: num(m.xp, 0, 1e6, 0), runs: Math.floor(num(m.runs, 0, 1e9, 0)), wins: Math.floor(num(m.wins, 0, 1e9, 0)), trial: Math.floor(num(m.trial, 0, TRIAL_RUNS, TRIAL_RUNS)), joined: num(m.joined, 0, 1e15, 0)};
  p.with = typeof src.with === 'string' && p.crew[src.with] ? src.with : null;
  return p;
}
const partyOf = save => (save.party = cleanParty(save.party));
export const joined = (save, id) => !!save?.party?.crew?.[id];
export const levelOf = (save, id) => compLevel(save?.party?.crew?.[id]?.xp);
/* a quest's reward: the companion joins the crew (once) */
export function join(save, id, now = Date.now()) { const p = partyOf(save); if (!COMPANIONS[id]) return false; if (p.crew[id]) return false; p.crew[id] = {xp: 0, runs: 0, wins: 0, trial: TRIAL_RUNS, joined: now}; return true; }
export const canHire = (save, id) => joined(save, id) && hireable(id);
export function hire(save, id) { const p = partyOf(save); if (!p.crew[id]) return false; p.with = id; return true; }
export function dismiss(save) { const p = partyOf(save); const had = p.with; p.with = null; return !!had; }
/* No companion on these pads: the gentle first levels, arenas and duels (§3.2). */
export const NO_COMPANION = new Set(['prologue', 'e1']);
export const companionAllowed = level => !!level && level.kind === 'level' && !NO_COMPANION.has(level.id);
/* Why a companion stays home for this pad ('' when they may come): the level card and the Barracks card say it. */
export function hireBlock(level, id = 'wil') {
  const who = COMPANIONS[id]?.short || 'Your companion';
  if (!level) return '';
  if (level.kind === 'arena') return `${who} waits at the Barracks: an arena is a test for one hero.`;
  if (level.kind === 'duel') return `${who} waits at the Barracks: a duel is one against one.`;
  if (level.kind !== 'level') return '';
  if (NO_COMPANION.has(level.id)) return `${who} sits this one out: ${level.name || 'this'} is a first adventure for you alone.`;
  return '';
}
/* the next trait a companion learns, or null at the top */
export const nextTrait = (id, cl) => (COMPANIONS[id]?.traits || []).find(t => cl < t.at) || null;
/* progress inside the current level: {level, have, need, share} (share 1 at the cap) */
export function levelBar(xp) { const L = compLevel(xp); if (L >= COMP_MAX) return {level: L, have: 0, need: 0, share: 1}; const lo = xpFor(L), hi = xpFor(L + 1), x = Math.max(0, +xp || 0); return {level: L, have: Math.round((x - lo) * 100) / 100, need: hi - lo, share: Math.max(0, Math.min(1, (x - lo) / (hi - lo)))}; }
/* the wage line shown before a run */
export function wageText(save, id) { const c = COMPANIONS[id], m = save?.party?.crew?.[id]; if (!c || !m) return ''; return m.trial > 0 ? `Trial run: free (${m.trial} left), then ${c.wage} gold a win.` : `${c.short}’s wage: ${c.wage} gold if you win. Nothing if you lose.`; }

/* The wage a run would cost, shown before it: 0 during the trial runs. */
export const wageOf = (save, id) => (save?.party?.crew?.[id]?.trial > 0 ? 0 : COMPANIONS[id]?.wage ?? 0);
/**
 * Settle one run with the hired companion: companion XP, runs, wins and trial runs, and the wage from a win's gold
 * (never more than that run paid; nothing on a loss). Returns {id, won, wage, trial, left, xp, level, up} or null. Only s.party and
 * s.gold change.
 */
export function settleRun(save, {won, tier = 'normal', gold = 0} = {}) {
  const p = partyOf(save), id = p.with, m = id && p.crew[id]; if (!m) return null;
  const before = compLevel(m.xp), x = runXP(!!won, tier);
  let wage = 0; const trial = !!won && m.trial > 0;
  if (won) { wage = trial ? 0 : Math.min(COMPANIONS[id].wage, Math.max(0, Math.floor(gold))); if (trial) m.trial--; m.wins++; save.gold = Math.max(0, (save.gold || 0) - wage); }
  m.runs++; m.xp = Math.min(xpFor(COMP_MAX), m.xp + x);
  const level = compLevel(m.xp);
  return {id, won: !!won, wage, trial, left: m.trial, xp: x, level, up: level > before};
}

/* Combat art per companion. Status follows the art lifecycle (CLAUDE.md): only a human moves art past DRAFT. The owner
   approved Wil's own PixelLab atlas (art/companions/wil) and the Barracks on 25 Oct after the review image
   docs/playtest/oct24-companions2/owner-review.png, so hiring ships with him (?companion=wil stays as a dev override). He is a 64 px
   PixelLab character like the heroes and is drawn at the heroes' render scale (HERO_RENDER_SCALE .85). Clip names map the
   companion's states onto the atlas. A companion with no ART entry cannot be hired yet (hireable). */
export const ART = {
  wil: {sprite: 'companion-wil', scale: .85, status: 'APPROVED', standIn: false, clips: {idle: 'idle', walk: 'walk', attack: 'attack', skill: 'skill', hurt: 'hurt', downed: 'downed', cheer: 'cheer'}},
};
export const hireable = id => !!ART[id] && ART[id].status === 'APPROVED';
