// Companions in combat (docs/design/COMPANIONS_AND_OAKHAVEN.md §3). A small state machine per companion:
//   follow  -> no foe near the hero: walk to a slot behind the hero; teleport back if far or off screen for 2 s
//   assist  -> foes near the hero: pick a target, close to reach, attack on the clip's contact frame
//   skill   -> the signature move when its cooldown is ready and its condition holds (Wil: Hold the Line, a taunt)
//   retreat -> under 25% health: step behind the hero for 4 s, healing 3% a second
//   downed  -> at 0 health: kneels, cannot be hit, never dies; gets up after 10 s at 40%, or after 1.5 s at 50% with the
//              hero standing beside them (no button, phone friendly)
//   cheer   -> the level is won
// world.party is its own list (0 or 1 entries), separate from world.allies, so the wave reset of the Summoner's spirits
// is untouched. Between waves a companion heals to full and walks back to the hero.
//
// THE LEARNING RULE (spec §3.7, tests/companions.test.js): this module imports nothing from academics/ and never reads or
// writes learning or ability state. It never casts or lends an ability and never changes the hero's cooldowns or
// stamina; a companion's kill pays the same gold and XP as the hero's (the run is the same run), but the stamina a kill
// gives the hero is put back, and the hero's crit, gear and class mechanic never apply to a companion's hit.
// Hooks in combat.js (kept to four small calls): partyStart in startLevel, updateParty next to updateAllies,
// partyFocus around the enemyAI seam, and partyHurt at the top of hurt().
import {COMPANIONS, ART, compStats, companionAllowed, compLevel, hireable} from '../game/party.js';
import {difficultyOf} from '../game/levels.js';
import {damage} from '../game/math.js';
import {STAGE} from '../game/stage.js';
import {loadSprite, spriteMeta, frameStart} from '../gfx/actors/sprites.js';
import {enemyFxTick} from './enemy-ai.js';

const d2 = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const live = e => e.hp > 0 && !(e.entering > 0) && e.entered !== false;
export const PARTY = {follow: 28, run: 80, teleport: 320, offscreen: 2, assist: 160, think: 1, ratio: .4, retreatFor: 4, retreatHeal: .03,
  downFor: 10, downHp: .4, reviveNear: 24, reviveFor: 1.5, reviveHp: .5, bossTauntGap: 8, chasers: 1, bossByTaunt: 1,
  /* Legendary (C3, docs/playtest/oct25-tiers2/REPORT.md): the boss fight is the hero's. A remixed boss attacks only every
     5-9 s, so a 1.5 s taunt every 8 s handed him about one boss attack in two, and standing in front of the hero he soaked
     the boss's bolts; with closeness also drawing a boss's helpers he halved a weaker child's falls (C3 0.43-0.51). On Legendary a
     boss ignores Hold the Line and its bolts aimed at the hero fly past him, and foes turn to him only for a taunt. */
  legendBossTaunt: 0, legendChasers: 0};
const legend = w => w?.tierKey === 'legendary';

/* ?companion=wil: a dev override (any save, no hiring needed). Play uses the companion hired at the Barracks, s.party.with. */
export function devCompanion(search = globalThis.location?.search ?? '') {
  const m = /[?&]companion=([a-z]+)/.exec(search || ''); return m && COMPANIONS[m[1]] && ART[m[1]] ? m[1] : null;
}
const devLevel = (search = globalThis.location?.search ?? '') => { const m = /[?&]complevel=(\d+)/.exec(search || ''); return m ? Math.max(1, Math.min(15, +m[1])) : null; };

/* the companion hired at the Barracks: in the crew, with approved art */
const hiredWith = save => { const id = save?.party?.with; return id && save.party.crew?.[id] && hireable(id) ? id : null; };
/** At a level's start (after the boons): the hired companion, if any, joins the run beside the hero. */
export function partyStart(w, opts = {}) {
  w.party = [];
  const id = opts.id ?? w.partyWith ?? devCompanion() ?? hiredWith(w.save); if (!id || !COMPANIONS[id] || !ART[id] || !companionAllowed(w.level)) return null;
  const crew = w.save?.party?.crew?.[id], level = opts.level ?? devLevel() ?? compLevel(crew?.xp);
  /* the numbers scale with the hero's level, read only */
  const st = compStats(id, {heroLevel: Math.max(1, w.save?.level | 0), level}), art = ART[id], p = w.player;
  loadSprite(art.sprite);
  const c = {ally: true, companion: id, name: st.short, stats: st, art, sprite: art.sprite, x: p.x - PARTY.follow * (p.facing || 1), y: p.y + 6, z: 0,
    hp: st.hp, maxHp: st.hp, def: 2 + w.save.level * .5, facing: p.facing || 1, state: 'idle', stateT: 0, mode: 'follow', cd: .6, skillCd: 2, inv: 0, flash: 0,
    hidden: 0, attack: 0, color: '#d8c79a', wave: w.wave, off: 0, slot: Math.random() < .5 ? -8 : 8, dealt: 0, taken: 0, downs: 0, secondWind: st.traits.includes('Second Wind')};
  w.party.push(c);
  const b = COMPANIONS[id].barks.start; w.schedule?.(.8, () => bark(w, c, b[Math.floor(Math.random() * b.length)]));
  return c;
}
const bark = (w, c, line) => { if (line && w.party?.includes(c)) w.text?.(line, c.x, c.y - 52, '#e9f2c6'); };
const clip = (c, k) => c.art.clips[k] || 'idle';
function setState(c, k) { const s = clip(c, k); if (c.state !== s) { c.state = s; c.stateT = 0; } }
function contactOf(c, k) { const st = spriteMeta(c.sprite)?.states?.[clip(c, k)]; return st?.contact?.length ? frameStart(st, st.contact[0]) : .35; }
function moveTo(w, c, x, y, speed, dt) {
  const dx = x - c.x, dy = y - c.y, d = Math.hypot(dx, dy); if (d < 2) return false;
  const k = Math.min(1, speed * dt / d), ox = c.x, oy = c.y; c.x += dx * k; c.y += dy * k; c.facing = dx >= 0 ? 1 : -1;
  const b = w.bounds(); c.x = Math.max(b.x0 + 8, Math.min(b.x1 - 8, c.x)); c.y = Math.max(b.y0, Math.min(b.y1, c.y));
  if (w.layout?.blocked?.(c.x, c.y)) { if (!w.layout.blocked(c.x, oy)) c.y = oy; else if (!w.layout.blocked(ox, c.y)) c.x = ox; else { c.x = ox; c.y = oy; } }
  return true;
}
function puff(w, c) { w.effect?.('ring', c.x, c.y, {radius: 14, color: '#d8d3b4', ground: true, life: .35, max: .35}); for (let i = 0; i < 4; i++) w.effect?.('particle', c.x + (i - 1.5) * 4, c.y, {vx: (i - 1.5) * 14, vy: -6, color: '#cfc9a8', life: .35, max: .35}); }
function revive(w, c, share, line = true) { c.mode = 'follow'; c.hp = Math.max(c.hp, Math.round(c.maxHp * share)); c.inv = .8; c.downT = 0; c.reviveT = 0; setState(c, 'idle'); if (line) bark(w, c, COMPANIONS[c.companion].barks.revived); }

/** A companion's hit: the hero's crit, gear tricks, class mechanic, hitstop and kill stamina never ride on it. */
export function partyHit(w, c, e, power, {kb = 40, name = c.name} = {}) {
  const a = {damage: power, kb, element: 'none', name, ally: true, trick: true, party: true}, p = w.player, base = w.base;
  const keep = {crit: base.crit, mech: base.mechanic, hs: w.hitstop, stacks: p.stacks, stackTime: p.stackTime, dmg: w.run?.damage}, mp = p.mp, hp0 = e.hp;
  base.crit = 0; base.mechanic = null;
  try { w.hit(e, a, power); } finally { base.crit = keep.crit; base.mechanic = keep.mech; w.hitstop = keep.hs; p.stacks = keep.stacks; p.stackTime = keep.stackTime; if (w.run) w.run.damage = keep.dmg; p.mp = mp; }
  if (e.hp < hp0) { c.dealt += Math.min(hp0, hp0 - e.hp); if (e.knock > 0 && kb) { const dx = e.x - c.x, dy = e.y - c.y, d = Math.hypot(dx, dy) || 1, s = Math.hypot(e.kx || 0, e.ky || 0); e.kx = dx / d * s; e.ky = dy / d * s * .6; } }
}

/** Damage aimed at a companion (combat.js hurt() sends it here while an enemy is chasing them). */
export function partyHurt(w, c, base, from) {
  if (!c || c.mode === 'downed' || c.inv > 0 || c.hp <= 0 || ['bossintro', 'rebirth', 'victory'].includes(w.flow)) return 0;
  const kind = w.level ? difficultyOf(w.save).atk * (w.tierMul?.atk || 1) : 1;
  const n = damage({base, defence: c.def, multiplier: kind}); c.hp = Math.max(0, c.hp - n); c.taken += n; c.inv = .35; c.flash = .09; setState(c, 'hurt');
  if (from) { const dx = c.x - from.x, dy = c.y - from.y, d = Math.hypot(dx, dy) || 1; c.kx = dx / d * 70; c.ky = dy / d * 40; c.knock = .12; }
  if (n) w.text?.(`−${n}`, c.x, c.y - 30, '#f0b8a0');
  if (c.hp <= 0) {
    c.mode = 'downed'; c.downs++; c.downT = c.secondWind ? 4 : PARTY.downFor; c.secondWind = false; c.downMax = c.downT; c.reviveT = 0; setState(c, 'downed');
    bark(w, c, COMPANIONS[c.companion].barks.downed);
    for (const e of w.enemies) if (e.tgt === c) { e.tgt = w.player; e.tgtT = 0; }
  }
  return n;
}

/**
 * The enemyAI seam: decide whom this enemy chases (§3.3), then let enemy-ai.js step it with that target standing in for
 * the hero. With no companion this is exactly the old call. A boss mid wind-up keeps its target (taunts never interrupt).
 */
export function partyFocus(w, e, dt, run) {
  const c = w.party?.[0]; if (!c) return run();
  const p = w.player, busy = e.brain && ['tele', 'act'].includes(e.brain.mode), up = c.mode !== 'downed';
  if (!busy && (!(e.tgtT > w.time) || e.tgt && e.tgt !== p && !up)) {
    e.tgtT = w.time + PARTY.think;
    const taunted = up && e.taunt?.by === c && e.taunt.until > w.time;
    /* closeness alone draws at most PARTY.chasers foes onto the companion at once (a taunt is the tank's way to hold more),
       and never a boss: a boss turns to a companion only for a taunt's 1.5 s (C6), so the boss fight stays the hero's */
    const room = !(e.boss && PARTY.bossByTaunt) && w.enemies.filter(o => o !== e && o.hp > 0 && o.tgt === c && !(o.taunt?.by === c && o.taunt.until > w.time)).length < (legend(w) ? PARTY.legendChasers : PARTY.chasers);
    e.tgt = up && (taunted || room && d2(e, c) < PARTY.ratio * d2(e, p)) ? c : p;
  }
  if (e.tgt !== c || !up) return run();
  enemyFxTick(w, dt);
  w.player = c;
  try { return run(); } finally { w.player = p; }
}

/* ---- Hold the Line (Wil) and the other taunts: foes close by turn to the companion for a while; a boss only for 1.5 s
   and at most once every 8 s, never during its wind-up. Nothing a companion does stuns a boss. */
export function taunt(w, c, radius, time, bossTime) {
  let n = 0;
  for (const e of w.enemies) {
    if (!live(e) || d2(e, c) > radius) continue;
    if (e.boss) { if (legend(w) && !PARTY.legendBossTaunt || e.tauntGap > w.time || e.brain && ['tele', 'act', 'trans'].includes(e.brain.mode) || e.cinematic && e.phase === 1 && e.hp <= 1) continue; e.tauntGap = w.time + PARTY.bossTauntGap; }
    /* a foe already winding up or swinging finishes that attack on its old target and turns afterwards (partyFocus re-picks
       once it is free): a taunt never cancels an attack that is already coming (playtest sim, 24 Oct) */
    e.taunt = {by: c, until: w.time + (e.boss ? bossTime : time)}; if (!(e.brain && ['tele', 'act'].includes(e.brain.mode))) e.tgt = c; e.tgtT = 0; n++;
    if (!e.boss && c.stats.traits.includes('Shield Bash')) { const dx = e.x - c.x, dy = e.y - c.y, d = Math.hypot(dx, dy) || 1; e.kx = dx / d * 120; e.ky = dy / d * 50; e.knock = .18; }
  }
  return n;
}
function useSkill(w, c, foes) {
  const sk = c.stats.skill, p = w.player;
  if (c.stats.role === 'tank' || c.stats.role === 'vanguard') {
    const near = foes.filter(e => d2(e, p) < sk.radius || d2(e, c) < sk.radius);
    if (near.length < 2 && !near.some(e => e.boss && !(legend(w) && !PARTY.legendBossTaunt))) return false;
    c.skillCd = sk.cd; c.busy = .7; setState(c, 'skill'); c.facing = (near[0].x >= c.x ? 1 : -1);
    w.schedule(contactOf(c, 'skill'), () => { if (c.mode === 'downed') return; w.effect('ring', c.x, c.y, {radius: sk.radius, color: '#e9c46a', ground: true, life: .5, max: .5}); const n = taunt(w, c, sk.radius, sk.taunt, sk.bossTaunt); if (n) w.text?.(sk.name.toUpperCase() + '!', c.x, c.y - 46, '#ffd27a'); });
    return true;
  }
  return false;
}

/** Whether a shot from `by` can hit the companion: on Legendary a boss's shot hits him only while that boss is after him. */
export const blocks = (w, c, by) => !(legend(w) && by?.boss) || by.tgt === c;
/** One frame for the party (combat.js calls it next to updateAllies). */
export function updateParty(w, dt) {
  if (!w.party?.length || !w.level) return;
  if (['intro', 'bossintro', 'rebirth'].includes(w.flow)) return;
  const p = w.player;
  for (const c of w.party) {
    c.stateT += dt; for (const k of ['inv', 'flash', 'busy']) c[k] = Math.max(0, (c[k] || 0) - dt); c.cd -= dt; c.skillCd -= dt;
    /* a wave cleared: back to full, back on their feet, back to the hero */
    if (c.wave !== w.wave) { c.wave = w.wave; c.hp = c.maxHp; if (c.mode !== 'follow') revive(w, c, 1, false); c.mode = 'follow'; }
    if (c.knock > 0) { c.knock -= dt; moveTo(w, c, c.x + c.kx * dt, c.y + c.ky * dt, 999, dt); continue; }
    if (w.flow === 'victory') { if (c.mode !== 'cheer') { c.mode = 'cheer'; if (c.hp <= 0) c.hp = 1; setState(c, 'cheer'); } continue; }
    if (c.mode === 'downed') {
      c.downT -= dt; const near = d2(c, p) <= PARTY.reviveNear + 6 && p.hp > 0; c.reviveT = near ? (c.reviveT || 0) + dt : 0;
      if (c.reviveT >= PARTY.reviveFor) revive(w, c, PARTY.reviveHp); else if (c.downT <= 0) revive(w, c, PARTY.downHp);
      continue;
    }
    /* hostile shots hit whoever they meet (on Legendary, a boss's only when that boss is fighting him) */
    for (const s of w.shots) if (s.hostile && s.life > 0 && blocks(w, c, s.by) && Math.abs(s.x - c.x) < 9 && Math.abs(s.y - c.y) < 8) { partyHurt(w, c, s.power, {x: s.x, y: s.y, by: s.by}); s.life = 0; }
    for (const f of w.enemyFx || []) if (f.kind === 'shot' && f.life > 0 && f.owner && blocks(w, c, f.owner) && Math.abs(f.x - c.x) < 9 && Math.abs(f.y - c.y) < 8) { partyHurt(w, c, (f.owner.atk || 8) * (f.a?.dmg || 1), {x: f.x, y: f.y, by: f.owner}); f.life = 0; }
    if (c.mode === 'downed') continue;
    if (c.busy > 0) continue;
    const speed = (w.base?.speed || 60) * c.stats.speedShare, foes = w.enemies.filter(live);
    /* retreat: behind the hero, away from the nearest foe, healing a little */
    if (c.mode !== 'retreat' && c.hp < c.maxHp * c.stats.retreat && foes.length) { c.mode = 'retreat'; c.retreatT = PARTY.retreatFor; }
    if (c.mode === 'retreat') {
      c.retreatT -= dt; c.hp = Math.min(c.maxHp, c.hp + c.maxHp * PARTY.retreatHeal * dt);
      const f = foes.sort((a, b) => d2(a, p) - d2(b, p))[0], side = f ? (f.x >= p.x ? -1 : 1) : -(p.facing || 1);
      setState(c, moveTo(w, c, p.x + side * 34, p.y + c.slot, speed * 1.2, dt) ? 'walk' : 'idle');
      if (c.retreatT <= 0 || !foes.length) c.mode = 'follow';
      continue;
    }
    /* stranded: far away or off screen for 2 s -> back beside the hero in a puff of dust */
    const off = c.x < (w.camX || 0) - 12 || c.x > (w.camX || 0) + STAGE.viewW + 12; c.off = off ? c.off + dt : 0;
    if (d2(c, p) > PARTY.teleport || c.off > PARTY.offscreen) { puff(w, c); c.x = p.x - PARTY.follow * (p.facing || 1); c.y = p.y + c.slot; c.off = 0; puff(w, c); }
    const near = foes.filter(e => d2(e, p) < PARTY.assist);
    if (!near.length || w.flow === 'walk' || w.flow === 'go') {
      c.mode = 'follow'; const fx = p.x - PARTY.follow * (p.facing || 1), fy = p.y + c.slot, far = Math.hypot(fx - c.x, fy - c.y);
      if (far > 4) setState(c, moveTo(w, c, fx, fy, speed * (far > PARTY.run ? 1.5 : 1), dt) ? 'walk' : 'idle'); else { setState(c, 'idle'); c.facing = p.facing || 1; }
      continue;
    }
    c.mode = 'assist';
    if (c.skillCd <= 0 && useSkill(w, c, near)) continue;
    /* the tank takes the foe nearest the hero that is not already on it, else the nearest */
    const order = near.sort((a, b) => d2(a, p) - d2(b, p)), e = (c.stats.role === 'tank' || c.stats.role === 'vanguard' ? order.find(o => o.tgt !== c) : null) ?? order[0];
    const reach = (c.stats.reach || 16) + Math.max(6, (e.boss ? 22 : 9) * Math.max(1, e.scale || 1)), d = d2(c, e);
    if (d > reach) { setState(c, moveTo(w, c, e.x + (c.x < e.x ? -reach * .8 : reach * .8), e.y + c.slot * .3, speed, dt) ? 'walk' : 'idle'); continue; }
    c.facing = e.x >= c.x ? 1 : -1;
    if (c.cd <= 0) {
      c.cd = c.stats.rate; c.busy = .45; setState(c, 'attack');
      w.schedule(contactOf(c, 'attack'), () => { if (c.mode !== 'downed' && live(e) && d2(c, e) <= reach + 8) partyHit(w, c, e, c.stats.dmg); });
    } else if (c.state !== clip(c, 'attack') || c.stateT > .7) setState(c, 'idle');
  }
}

/* The built-in AI in combat.js (an enemy whose atlas has not loaded yet) reads its target from here, so it follows the
   same choice as partyFocus made: the companion it is chasing while he is up, otherwise the hero. With no party it is
   always the hero, exactly as before. */
export const oldTarget = (w, e, hero) => { const c = e.tgt; return c && c !== hero && c.ally && c.mode !== 'downed' && w.party?.includes(c) ? c : hero; };
/** A hit from the built-in AI lands on whoever it was aimed at. */
export const hurtOn = (w, t, base, from) => t?.ally ? partyHurt(w, t, base, from) : w.hurt(base, from);
