// Oakhaven, the home hub: the owner's Tiled village (art/tiled/oakhaven-v2.tmx) baked by
// tools/bake-town.mjs into ground chunks, a y-sorted sprite atlas, animated water cells,
// walkers and a collision grid, plus every interior room the same way.
//
// main.js keeps the World (combat.js) as the owner of the hero's animation, dodge and
// timers. hubUpdate() runs World.update on a proxy position inside the old 700x580 town,
// takes the movement it produced and applies it here against the village collision, so
// nothing in combat.js has to know the village exists.
//
// Drawn at 1:1 (one art pixel = one canvas pixel, camera snapped to whole pixels): the
// hero's 46 px matches the village's own figures, and nothing is resampled.
import VILLAGE from '../assets/town/oakhaven-approaches-oct13.js';
import {STAGE} from '../game/stage.js'; /* v2:ui-mobile */
import {SUBJECTS} from '../game/data.js';
import ROOMS from '../assets/town/interiors-reviewed-oct13.js';
import FX from '../assets/town/fx.js';
import {shopById} from '../game/shops.js';
import {levelDone} from '../game/levels.js';
import {FURN, footprint, placeFurniture, spare} from '../game/furniture.js';
import {talk, talkAndAdvance, nameOf, holds, STORY} from '../game/npcs.js';
import {COMPANIONS, ART, joined} from '../game/party.js';
import {questLive, currentStep, questState} from '../game/quests.js';
import {loadSprite as loadActor, drawSprite as drawActor} from '../gfx/actors/sprites.js';
import {swayTable, drawSwayed, stepCritters, critterDraws, leafDraws} from '../gfx/motion.js';
import {TOWN_SPOTS, townPlace, visitPlace, FARM_NAME} from '../game/fasttravel.js';
import {heldImage, dropImage} from '../core/loader.js';
import {townViewChunks, chunkDist} from '../core/town-view.js';

const BASE = new URL('../assets/town/', import.meta.url).href;
/* v2:ui-mobile -- the hub camera follows the rendered view (STAGE.camW x camH): 480x270 on desktop, smaller on phones */
let VIEW_W = 480, VIEW_H = 270; const syncView = () => { VIEW_W = STAGE.camW || 480; VIEW_H = STAGE.camH || 270; }; const PROXY = {x: 350, y: 300}; const FOOT = {hw: 5, up: 4, down: 1};
/* Actions main.js knows how to open. Shops map onto the existing panels where they fit. */
export const PANELS = ['library', 'guild', 'smith', 'alchemist', 'home', 'community', 'barracks'];
/* The Library's subject stations: marker `subject` -> what the prompt says (a marker's own `label` wins). */
export const SUBJECT_LABEL = Object.fromEntries(Object.entries(SUBJECTS).map(([id, v]) => [id, `Study ${v.name}`])); /* names live in game/data.js SUBJECTS */
/* One name per place, the same on the door, the prompt, the map and the panel it opens (playtest m18):
   the potion panel is "The Alchemist" and the Guild's panel is the adventure board. */
const ACTION_LABEL = {library: 'Enter the Library', guild: 'Enter the Adventurers’ Guild', smith: 'Enter the Weaponsmith', alchemist: 'Enter the Apothecary', home: 'Go home', community: 'Read the village noticeboard', barracks: 'Enter the Barracks'};
const PANEL_LABEL = {library: 'Study at the Library', guild: 'Choose your next adventure', smith: 'Browse the Weaponsmith', alchemist: 'Buy potions at the Apothecary', home: 'Prepare: abilities and pets', community: 'Read the village noticeboard', barracks: 'Hire a companion'};
/* What a room fixture says when it has no action of its own. */
const FLAVOR = [[/fire/i, 'The fire crackles. Warm hands, clear head.'], [/sleep|bed/i, 'A good bed. You will rest here between adventures.'],
  [/chest/i, 'Spare boots and a rolled map. Nothing you need yet.'], [/shel|book|stud/i, 'Shelves of well-thumbed books on every subject.'],
  [/pray|altar/i, 'A quiet moment at the altar.'], [/bench|work/i, 'Tools laid out neatly, ready for the morning.'], [/companion|bag/i, 'Supplies for the road, packed and waiting.'],
  [/stair|tower/i, 'The stair is roped off today.'], [/board/i, 'Notices, lost cats and a contract or two.']];
const flavor = name => FLAVOR.find(([re]) => re.test(name))?.[1] ?? `${name}.`;

/* ---------------------------------------------------------------------------------- */
/* A scene: decoded collision, sprite buckets and lazily loaded images. */
const scenes = new Map();
/* ---- the Barracks (owner GO, 25 Oct; docs/design/COMPANIONS_AND_OAKHAVEN.md §6.1, §6.3) ----
   The South Cottage lot by the south gate becomes the Barracks: its baked cottage sprite is swapped, at its own place in the
   draw order, for the PixelLab exterior (art/pixellab/barracks/barracks.png, owner-approved; the door line and footprint are
   the cottage's, as in docs/playtest/oct24-companions2/owner-review.png), and the two garden pots that stood where the training
   dummy and weapon rack now are step aside. The room has its own interior (26 Oct, art/tiled/interiors/layouts/barracks.json:
   bunks, a hearth, weapon racks, armour stands, a training dummy, a long table, chests, banners): Captain Garrick and his
   bounties sit at the desk, the roster board opens the hire panel, and a companion who has joined and is not out with you
   waits beside the board. The watchtower keeps its own layout and a watchman. `south_cottage` stays an alias, so an
   old save's room keys still resolve. */
export const ROOM_ALIAS = {south_cottage: 'barracks'};
/* oct26-midgame: Farmer Hob stands behind his counter, and his stand point was behind it too, so "Talk to Farmer Hob" (the
   Wil quest's first step) only showed after walking round the counter; the farm's own counter point went in the Inn merge.
   His spot gets a second stand point (front) on the customer side of the counter, which nearest() also measures to; the one beside him still works. */
export const COUNTER_STAND = {farmhouse: {farmer_hob: [372, 300]}};
const ROOM_KEYS = () => [...new Set(Object.keys(ROOMS).map(k => ROOM_ALIAS[k] ?? k))];
/* polish-oct29 (#13): the round table and its four benches (one baked sprite, 116x94) stood right in front of the Library door: the hero
   snagged on the table walking up to the door and the top bench sat under him at the door. The set is taken out (pack art, only hidden,
   found by its baked place and size like the Barracks lot) and its footprint in the collision grid is opened. */
export const LIBRARY_YARD = {hide: s => s[3] === 116 && s[4] === 94 && Math.abs(s[1] - 937) < 4 && Math.abs(s[2] - 1179) < 4, open: [[936, 1228, 1064, 1272]]};
export const BARRACKS = {door: 6972, img: 'barracks.png', x: 1205, y: 1950, base: 2170,
  swap: s => s[3] === 174 && s[4] === 248 && Math.abs(s[1] - 1226) < 4 && Math.abs(s[2] - 1912) < 4,
  step: s => s[5] === 2163 && (Math.abs(s[1] - 1227) < 2 || Math.abs(s[1] - 1373) < 2),
  block: [[1228, 2096, 1404, 2162], [1226, 2118, 1258, 2170]], roster: {x: 344, y: 300, img: 'roster-board.png'}, crew: [{x: 384, y: 336}],
  /* in the room: the roster board stands free between the hearth and the captain's desk; its feet block */
  roomBlock: [[322, 288, 368, 304]]};
export function barracksRoom() {
  const W = ROOMS.barracks;
  const TEXT = {'Soldiers’ bunks': 'Bunks for the off-duty watch. Boots off, please.', 'Kit chest': 'Spare shields, a whetstone and somebody’s lucky sock.', 'Weapon rack': 'Practice blades, blunted and oiled.'};
  const points = W.points.map(q => TEXT[q.name] ? {...q, props: {...q.props, text: TEXT[q.name]}} : q);
  const r = BARRACKS.roster;
  /* oct25-exploit2 O3: the board's own footprint (the 64 px picture drawn at r.y - 60), so the prompt never sits on it */
  points.push({id: 90001, name: 'Roster board', type: 'interact', x: r.x, y: r.y, box: {x0: r.x - 32, y0: r.y - 60, x1: r.x + 32}, props: {action: 'barracks', label: 'Hire a companion at the roster board'}, stand: [r.x, r.y + 16]});
  return {...W, props: {...W.props, interior: 'barracks', title: 'Barracks'}, points};
}
function watchtowerRoom() {
  const W = ROOMS.watchtower;
  return {...W, points: W.points.filter(q => q.type !== 'shop').map(q => q.props?.key === 'captain_garrick' ? {...q, name: 'Watchman Tam', props: {...q.props, key: 'watchman_tam', label: 'Talk to Watchman Tam', role: 'resident', talk: 'Bounties are posted at the Barracks now.'}} : q)};
}
function villageData() {
  return {...VILLAGE, village: true, points: VILLAGE.points.map(q => q.id === BARRACKS.door ? {...q, name: 'Barracks', props: {...q.props, key: 'barracks', target: 'barracks', action: 'barracks'}} : q)};
}
/* the village sprites the Barracks replaces ({swap, step}), found once by their baked place and size */
function lotOf(S) {
  if (S.lot) return S.lot;
  const swap = new Set(), step = new Set();
  if (S.key !== 'barracks') S.D.sprites.forEach((s, i) => { if (BARRACKS.swap(s)) swap.add(i); else if (BARRACKS.step(s)) step.add(i); });
  return (S.lot = {swap, step});
}
/* Companions who wait in the Barracks: joined and not out with you, or the one a quest sends you here to meet. */
export function barracksCrew(save) {
  if (!save) return [];
  const out = [];
  for (const id of Object.keys(ART)) {
    const c = COMPANIONS[id], q = c?.quest, step = q && questLive(q) && questState(save, q) === 'active' ? currentStep(save, q) : null;
    const waiting = step?.kind === 'visit' && step.building === 'barracks' && step.who === id;
    if (waiting || joined(save, id) && save.party?.with !== id) out.push({id, key: id, name: c.short});
  }
  return out.slice(0, BARRACKS.crew.length).map((m, i) => ({...m, x: BARRACKS.crew[i].x, y: BARRACKS.crew[i].y}));
}
const crewHere = S => S.key === 'barracks' ? barracksCrew(H.save) : [];
/* someone a live quest is waiting on: an open quest's giver, or a talk step whose item is in hand */
function questNews(save, key) {
  if (!save || !key) return false;
  for (const id of Object.keys(COMPANIONS).map(k => COMPANIONS[k].quest)) {
    if (!questLive(id)) continue; const st = questState(save, id), s = st === 'open' || st === 'active' ? currentStep(save, id) : null;
    if (s?.kind === 'talk' && s.who === key && (st === 'open' || !s.take || save.quests?.q?.[id]?.items?.includes(s.take))) return true;
  }
  return false;
}
function scene(key) {
  key = ROOM_ALIAS[key] ?? key;
  if (scenes.has(key)) return scenes.get(key);
  const D = key === 'village' ? villageData() : key === 'barracks' ? (ROOMS.barracks ? barracksRoom() : null) : key === 'watchtower' && ROOMS.watchtower ? watchtowerRoom() : ROOMS[key];

  if (!D) return null;
  const raw = typeof atob === 'function' ? atob(D.collision.bits) : Buffer.from(D.collision.bits, 'base64').toString('binary');
  const bits = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bits[i] = raw.charCodeAt(i);
  const B = 256, buckets = new Map();
  D.sprites.forEach((s, i) => {
    for (let by = Math.floor(s[2] / B); by <= Math.floor((s[2] + s[4]) / B); by++) for (let bx = Math.floor(s[1] / B); bx <= Math.floor((s[1] + s[3]) / B); bx++) {
      const k = by * 1024 + bx;
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(i);
    }
  });
  const S = {key, D, bits, B, buckets, images: null, room: key !== 'village',
    points: D.points.map(p => ({...p, sx: p.stand ? p.stand[0] : p.x, sy: p.stand ? p.stand[1] : p.y, ...(COUNTER_STAND[key]?.[p.props?.key] ? {front: COUNTER_STAND[key][p.props.key]} : {})}))};
  S.walkers = (D.walkers ?? []).map(prepWalker);
  S.figures = (D.figures ?? []).map(([id, name, x, y]) => ({key: 'v' + id, name: nameOf('v' + id, name), x, y}));
  S.fx = D.fx ?? {lights: [], ambient: []};
  /* the hearths burn (owner review, 9 Oct): a fireplace's embers are baked still, so two flames from the fire strip and a
     flickering glow sit in its opening (18 px above the sprite's foot, a little right of centre; the point is the foot + 8) */
  const hearths = S.points.filter(q => /^fireplace_[01]$/.test(q.props?.prop ?? ''));
  if (hearths.length) S.fx = {lights: S.fx.lights, ambient: [...S.fx.ambient.filter(([x,y,kind]) => kind !== 'fire' || !hearths.some(q => Math.hypot(x-q.x,y-q.y)<60)), ...hearths.map(q => [q.x, q.y - 26, 'fire'])]};
  scenes.set(key, S);
  return S;
}
/* townchunk-oct28: images come from core/loader.js heldImage, so the loader's holds and the town share one Image per file */
const load = f => typeof Image === 'undefined' ? null : heldImage('assets/town/' + f);
/* townchunk-oct28: in a live browser the village's ground chunks stream (streamVillage); Node tools and jsdom keep loading them all at once */
let STREAM = typeof window !== 'undefined' && typeof document !== 'undefined' && !/jsdom/i.test(globalThis.navigator?.userAgent ?? '');
/** Tests: turn streaming on or off (before the village's images are first asked for). */
export function hubStreaming(on) { STREAM = !!on; const V = scenes.get('village'); if (V) V.images = null; }
function images(S) {
  if (S.images) return S.images;
  const D = S.D, lazy = STREAM && S.key === 'village';
  S.images = {chunks: D.chunks.map(c => lazy ? null : load(c[4])), pages: D.pages.map(p => load(p[0])),
    tiles: D.anim.tiles ? load(D.anim.tiles) : null, cells: D.anim.cellsImage ? load(D.anim.cellsImage) : null, overview: load(D.overview), lazy, order: [], failedAt: []};
  return S.images;
}
/* townchunk-oct28: the village's ground streams. Each frame (drawHub) the chunks under the view are asked for at once, and the
   rest one or two at a time, nearest first to where the camera is heading (its velocity 1.2 s ahead), so a walk finds its ground
   already in and the far side of town loads last. In a room, the village view outside its door comes first. A chunk still on its
   way is drawn from the overview (drawHub); a failed one is asked for again 4 s later. */
const STREAM_MAX = 2, STREAM_AHEAD = 1.2;
function streamVillage(cx, cy, vx = 0, vy = 0) {
  const V = scene('village'), I = images(V), D = V.D;
  if (!I.lazy || I.all) return;
  const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
  let busy = 0, done = 0;
  I.chunks.forEach((im, i) => {
    if (!im) return;
    if (im._failed || (im.complete && im.naturalWidth === 0)) { if (!I.failedAt[i]) I.failedAt[i] = now; else if (now - I.failedAt[i] > 4000) { dropImage('assets/town/' + D.chunks[i][4]); I.chunks[i] = null; I.failedAt[i] = 0; } }
    else if (!im.complete) busy++; else done++;
  });
  if (done === D.chunks.length) { I.all = true; return; }
  const ask = i => { I.chunks[i] = load(D.chunks[i][4]); I.order.push(i); busy++; };
  for (const i of townViewChunks(cx, cy, D)) if (!I.chunks[i]) ask(i);
  if (busy >= STREAM_MAX) return;
  const px = cx + vx * STREAM_AHEAD, py = cy + vy * STREAM_AHEAD;
  const rest = D.chunks.map((c, i) => [i, chunkDist(c, px, py)]).filter(([i]) => !I.chunks[i]).sort((a, b) => a[1] - b[1]);
  for (const [i] of rest) { if (busy >= STREAM_MAX) break; ask(i); }
}
/** townchunk-oct28: the streamer's state, for the tests and the measurement tools. */
export function hubStream() { const V = scene('village'), I = V.images; return {lazy: !!I?.lazy, total: V.D.chunks.length, requested: I ? I.chunks.filter(Boolean).length : 0, loaded: I ? I.chunks.filter(im => ready(im)).length : 0, order: I ? [...I.order] : [], all: !!I?.all}; }
/** townchunk-oct28: one streaming step as the frame would take it (tests; drawHub calls the same), optionally with the camera's velocity. */
export function hubStreamStep(v) { if (v) { H.vx = v.vx ?? 0; H.vy = v.vy ?? 0; } pumpStream(); return hubStream(); }
function pumpStream() {
  if (!STREAM) return;
  const S = current();
  if (S.key === 'village') return streamVillage(H.cam.x, H.cam.y + 10, H.vx ?? 0, H.vy ?? 0);
  const door = returnDoor(S), [x, y] = door ? [door.sx, door.sy] : spawnPoint();
  streamVillage(x, y);
}
const ready = im => im && im.complete !== false && (im.naturalWidth ?? 1) > 0;

/** True when the hub data is present (always, once this module has loaded). */
export const hubReady = () => !!VILLAGE?.collision;

export function blockedAt(S, x, y) {
  const c = S.D.collision, gx = Math.floor(x / c.cell), gy = Math.floor(y / c.cell);
  if (gx < 0 || gy < 0 || gx >= c.w || gy >= c.h) return true;
  const i = gy * c.w + gx;
  if (restoreOf(S).block.has(i)) return true;
  if (S.key === 'village' && LIBRARY_YARD.open.some(([x0, y0, x1, y1]) => x >= x0 && x < x1 && y >= y0 && y < y1)) return false;
  if (S.key === 'barracks') { const inR = r => x >= r[0] && x < r[2] && y >= r[1] && y < r[3]; if (BARRACKS.roomBlock.some(inR)) return true; }
  if (S.key === 'village' && BARRACKS.block.some(([x0, y0, x1, y1]) => x >= x0 && x < x1 && y >= y0 && y < y1)) return true;
  if (S.key === 'home' && houseBlock(S).has(i)) return true;
  return (S.bits[i >> 3] >> (i & 7) & 1) === 1;
}

/* The furnished Home (game/furniture.js): placed furniture blocks the strip it stands on (rugs never block); recomputed
   only when the placed items change. While the player is placing an item it rides in front of the hero, and E puts it
   down where it fits: inside the room's walls, on open floor, clear of the hero, of every door and of everything E uses. */
const NO_BLOCK = new Set();
let houseKey = '', houseCells = NO_BLOCK;
function houseBlock(S) {
  const items = H.save?.house?.items;
  if (!items?.length) return NO_BLOCK;
  const key = JSON.stringify(items);
  if (key === houseKey) return houseCells;
  const c = S.D.collision, out = new Set();
  for (const it of items) { const f = FURN[it.id]; if (!f || f.flat) continue; const r = footprint(f, it.x, it.y);
    for (let gy = Math.floor(r.y0 / c.cell); gy < Math.ceil(r.y1 / c.cell); gy++) for (let gx = Math.floor(r.x0 / c.cell); gx < Math.ceil(r.x1 / c.cell); gx++) out.add(gy * c.w + gx); }
  houseKey = key; houseCells = out;
  return out;
}
const furnImages = new Map();
const furnImage = f => { if (!furnImages.has(f.id)) furnImages.set(f.id, typeof Image === 'undefined' ? null : Object.assign(new Image(), {src: new URL('../' + f.img, import.meta.url).href})); return furnImages.get(f.id); };
/* where the item being placed would go: just in front of the hero, snapped to the 8 px floor grid */
function placingSpot() {
  const p = H.player, f = FURN[H.placing]; if (!p || !f) return null;
  const dir = p.direction === 'up' ? [0, -1] : p.direction === 'down' ? [0, 1] : [p.facing < 0 ? -1 : 1, 0];
  const x = dir[0] ? p.x + dir[0] * (14 + f.w / 2) : p.x, y = dir[1] > 0 ? p.y + 10 + Math.min(24, f.h / 3) : dir[1] < 0 ? p.y - 22 : p.y + 4;
  return {x: Math.round(x / 8) * 8, y: Math.round(y / 8) * 8};
}
function placingOk(S, f, x, y) {
  const r = footprint(f, x, y), [bx0, by0, bx1, by1] = S.D.bounds ?? [0, 0, S.D.w, S.D.h], top = f.flat ? r.y0 : y - f.h;
  if (r.x0 < bx0 + 4 || r.x1 > bx1 - 4 || top < by0 + 4 || r.y1 > by1 - 4) return false;
  if (f.flat) return true;
  const c = S.D.collision, mine = houseBlock(S), p = H.player;
  for (let gy = Math.floor(r.y0 / c.cell); gy < Math.ceil(r.y1 / c.cell); gy++) for (let gx = Math.floor(r.x0 / c.cell); gx < Math.ceil(r.x1 / c.cell); gx++) {
    const i = gy * c.w + gx; if (mine.has(i) || (S.bits[i >> 3] >> (i & 7) & 1) === 1) return false; }
  if (p && p.x > r.x0 - 8 && p.x < r.x1 + 8 && p.y > r.y0 - 4 && p.y < r.y1 + 12) return false;
  if (S.points.some(q => q.x > r.x0 - 22 && q.x < r.x1 + 22 && q.y > r.y0 - 22 && q.y < r.y1 + 22)) return false;
  return keepsWays(S, r, p);
}
/* exploit6-oct29: a row of barrels or benches could wall the door off from the study desk ("Lay out abilities", the only way to the
   Home panel and so to picking furniture up again), the bed and the fire. An item may go down only if every spot the hero could
   walk to from the door (each E spot, the exit and the hero himself) is still reachable once it stands there. Spots already cut
   off by an older layout never block a placement. Flood fill over the room's collision cells; nothing else changes. */
function wayReach(S, extra) {
  const c = S.D.collision, e = S.points.find(q => q.type === 'entry'), seen = new Uint8Array(c.w * c.h);
  if (!e) return null;
  const open = i => !extra.has(i) && !blockedAt(S, (i % c.w + .5) * c.cell, (Math.floor(i / c.w) + .5) * c.cell), q = [Math.floor(e.y / c.cell) * c.w + Math.floor(e.x / c.cell)];
  seen[q[0]] = 1;
  while (q.length) { const i = q.pop(), x = i % c.w, y = (i / c.w) | 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy, j = ny * c.w + nx; if (nx < 0 || ny < 0 || nx >= c.w || ny >= c.h || seen[j] || !open(j)) continue; seen[j] = 1; q.push(j); } }
  return seen;
}
function keepsWays(S, r, p) {
  const c = S.D.collision, extra = new Set();
  for (let gy = Math.floor(r.y0 / c.cell); gy < Math.ceil(r.y1 / c.cell); gy++) for (let gx = Math.floor(r.x0 / c.cell); gx < Math.ceil(r.x1 / c.cell); gx++) extra.add(gy * c.w + gx);
  const before = wayReach(S, new Set()), after = before && wayReach(S, extra);
  if (!before) return true;
  const near = (seen, x, y) => { const gx = Math.floor(x / c.cell), gy = Math.floor(y / c.cell); for (let dy = -3; dy <= 3; dy++) for (let dx = -3; dx <= 3; dx++) { const X = gx + dx, Y = gy + dy; if (X >= 0 && Y >= 0 && X < c.w && Y < c.h && seen[Y * c.w + X]) return true; } return false; };
  const spots = S.points.filter(q => q.type !== 'entry' && q.type !== 'npc-spot').map(q => q.stand ?? [q.x, q.y]);
  if (p) spots.push([p.x, p.y]);
  return spots.every(([x, y]) => !near(before, x, y) || near(after, x, y));
}
/** Placing furniture in the Home: start with an owned item's id, then confirm (E) or cancel (Escape). */
export function hubStartPlacing(id) { H.placing = FURN[id] && H.save && spare(H.save, id) > 0 ? id : null; return !!H.placing; }
export function hubCancelPlacing() { H.placing = null; }
export const hubPlacing = () => H.placing ?? null;
export function hubConfirmPlacing() {
  const S = current(), f = FURN[H.placing];
  if (!f || !S || S.key !== 'home') { H.placing = null; return {ok: false, reason: 'Furniture can only go in your Home.'}; }
  const at = placingSpot();
  if (!at || !placingOk(S, f, at.x, at.y)) return {ok: false, reason: `The ${f.name.toLowerCase()} does not fit there. Try another spot.`};
  if (!placeFurniture(H.save, f.id, at.x, at.y)) { H.placing = null; return {ok: false, reason: 'You have none of those left to place.'}; }
  H.placing = null;
  return {ok: true, name: f.name};
}

/* Town restoration (map agent, tools/restore-stages.mjs): Oakhaven starts run-down and each cleared
   level puts part of it right. The bake lists, per level id, the sprites shown once it is cleared, the
   run-down sprites shown until then, and the cells either one blocks. Read from save.levels; recomputed
   only when the set of cleared levels changes. */
/** The sprites to skip and the extra cells to block, for a save's levels (pure; exported for tests). */
export function restoreSets(R, levels) {
  const done = Object.entries(levels ?? {}).filter(([, l]) => l?.done).map(([k]) => k).sort().join(',');
  const has = new Set(done ? done.split(',') : []), hidden = new Set(), block = new Set();
  if (!R) return {done, hidden, block};
  for (const [st, list] of Object.entries(R.show ?? {})) if (!has.has(st)) for (const i of list) hidden.add(i);
  for (const [st, list] of Object.entries(R.hide ?? {})) if (has.has(st)) for (const i of list) hidden.add(i);
  for (const [st, b] of Object.entries(R.block ?? {})) for (const i of has.has(st) ? b.from : b.until) block.add(i);
  return {done, hidden, block};
}
/* Owner, 8 Oct (review packet #10-11): "remove this town restoration thing, keep it good the whole time". The hub always
   shows Oakhaven fully restored, whatever the save has cleared; restoreSets stays the pure rule for the baked data. */
function restoreOf(S) {
  if (S.rs) return S.rs;
  const R = S.D.restore ?? {}, all = Object.fromEntries([...Object.keys(R.show ?? {}), ...Object.keys(R.hide ?? {}), ...Object.keys(R.block ?? {})].map(k => [k, {done: true}]));
  S.rs = restoreSets(S.D.restore, all);
  if (S.key === 'village') S.D.sprites.forEach((s, i) => { if (LIBRARY_YARD.hide(s)) S.rs.hidden.add(i); });
  return S.rs;
}
/* Corner assist (playtest 14 Oct): walking straight into a wall a few pixels beside a doorway or a gap slides the hero
   toward the opening instead of stopping dead. (px, py) is the hero, (fx, fy) the blocked step, (ax, ay) the sideways
   axis; the nearest side within CORNER px that is open wins, and the hero moves at most `step` toward it. 24 px since the
   24 Oct playtest: walking left from the Library's door (y 700) stopped dead on the potted plant 22 px below the gap. */
const CORNER = 24;
export function cornerNudge(S, px, py, fx, fy, ax, ay, step) {
  for (let d = 1; d <= CORNER; d++) for (const s of [-1, 1]) {
    const m = s * Math.min(step, d);
    if (!footBlocked(S, px + fx + ax * d * s, py + fy + ay * d * s) && !footBlocked(S, px + ax * m, py + ay * m)) return m;
  }
  return 0;
}
/* People stand their ground (playtest 14 Oct: the hero walked straight into Gran Mabel and stood inside her). A small
   footprint round each standing villager and room keeper blocks a step that comes closer; stepping away is always
   allowed, so a hero placed on someone can walk off. Walkers wait for the hero instead (walkerTick). */
const PERSON = {hw: 18, hh: 7};
export function personAhead(S, x0, y0, x1, y1) {
  S.people ??= [...(S.figures ?? []), ...S.points.filter(q => q.type === 'npc-spot')].map(q => [q.x, q.y]);
  for (const [x, y] of [...S.people, ...crewHere(S).map(m => [m.x, m.y])]) if (Math.abs(x1 - x) < PERSON.hw && Math.abs(y1 - y) < PERSON.hh && Math.hypot(x1 - x, (y1 - y) * 2) < Math.hypot(x0 - x, (y0 - y) * 2)) return true;
  return false;
}
const footBlocked = (S, x, y) => blockedAt(S, x - FOOT.hw, y - FOOT.up) || blockedAt(S, x + FOOT.hw, y - FOOT.up) || blockedAt(S, x - FOOT.hw, y + FOOT.down) || blockedAt(S, x + FOOT.hw, y + FOOT.down) || blockedAt(S, x, y);

/* ---------------------------------------------------------------------------------- */
const H = {S: null, player: null, cam: {x: 0, y: 0}, fade: null, near: null, time: 0, from: null, save: null, events: [], drawT: 0};
const current = () => H.S ?? (H.S = scene('village'));

function placeAt(p, S, x, y) { H.S = S; p.x = x; p.y = y; H.cam.x = x; H.cam.y = y; H.snap = true; H.vx = H.vy = 0;
  /* townchunk-oct28: every arrival in the village goes through here; core/loader.js holds it until the arrival view is in */
  if (S.key === 'village') { H.arrival = {x, y}; H.onArrive?.(H.arrival); } }
/** townchunk-oct28: the last arrival point in the village (core/loader.js gates it), and the loader's hook for arrivals. */
export const hubArrival = () => H.arrival ? {...H.arrival} : null;
export function hubOnArrive(fn) { H.onArrive = fn; }
function spawnPoint() { const S = scene('village'), sp = S.points.find(p => p.type === 'spawn'); return [sp.sx, sp.sy]; }

/** Which room a village door leads to, or null. */
function roomFor(door) {
  const pr = door.props ?? {};
  const key = pr.action === 'library' && ROOMS.library ? 'library' : pr.target;
  if (!key || key === 'none' || !(ROOMS[key] || key === 'barracks' && ROOMS.watchtower)) return null;
  /* An action building's room must hold that action, or the door opens the panel itself. */
  if (pr.action && !scene(key).points.some(q => actionOf(q) === pr.action)) return null;
  return key;
}
function actionOf(p) {
  const pr = p.props ?? {};
  if (PANELS.includes(pr.action)) return pr.action;
  if (p.type === 'library' || pr.key === 'library' && p.type === 'interact') return 'library';
  if (pr.shop && (p.type === 'shop' || p.type === 'shop-counter' || pr.action === 'shop')) return shopById(pr.shop)?.panel ?? null;
  return null;
}
/* A seller: the marker names a shop (shop=<id>), as a shop counter or with action=shop. */
const isShop = p => !!p.props?.shop && (p.type === 'shop' || p.type === 'shop-counter' || p.props?.action === 'shop');
/* Who keeps a shop: the room's person standing nearest its counter, else the shop's own keeper. */
const KEEPER_TITLE = /keeper|quartermaster|master|goodwife|smith|chaplain|watchman|captain|farmer|wright|netta|miller|ferr/i;
function keeperOf(S, p) {
  const shop = shopById(p.props.shop), people = S.points.filter(q => q.type === 'npc-spot').map(q => ({d: Math.hypot(q.x - p.x, q.y - p.y), name: nameOf(q.props?.key, q.name)}));
  /* the shop's own keeper if they are in the room, else whoever looks like they work here, else the nearest */
  const named = shop && people.find(q => q.name === shop.keeper);
  const worker = people.filter(q => KEEPER_TITLE.test(q.name) && q.d < 260).sort((a, b) => a.d - b.d)[0];
  const near = people.filter(q => q.d < 140).sort((a, b) => a.d - b.d)[0];
  return named?.name ?? worker?.name ?? near?.name ?? shop?.keeper ?? VILLAGE.shops?.[p.props.shop]?.keeper ?? p.props?.label ?? p.name;
}
function shopOption(S, p) {
  const id = p.props.shop, shop = shopById(id), keeper = keeperOf(S, p), act = shop?.panel;
  if (act) return {label: `${keeper}: ${PANEL_LABEL[act]}`, panel: act, keeper};
  /* playtest 24 Oct: name what the counter does (its marker's label, e.g. "Order a meal"), not "talk to" */
  if (shop) return {label: p.type !== 'shop-counter' && p.props.label ? `${keeper}: ${p.props.label}` : `${shop.title}: talk to ${keeper}`, shop: id, keeper};
  /* a shop this build does not stock yet: the keeper greets you */
  return {label: `Talk to ${keeper}`, shop: id, keeper};
}

/** What the player can do at a gameplay point: {label, run} or null. */
function optionFor(S, p) {
  const pr = p.props ?? {}, act = actionOf(p);
  if (!S.room) {
    if (p.type === 'entrance') {
      const room = roomFor(p);
      /* the herbalist closed in the Inn merge (24 Oct): its door says so before the child walks into an empty room */
      if (room) return {label: ACTION_LABEL[pr.action] ?? (pr.key === 'herbalist' ? `Enter ${p.name} (closed)` : `Enter ${p.name}`), run: () => enter(room, p), ...(pr.key === 'inn' ? {inn: true} : {})};
      if (act) return {label: ACTION_LABEL[act], panel: act};
      if (p.name === 'North gate') return {label: 'The north gate', say: 'The north road is closed until the bridge is repaired. Leave by the south gate.'};
      return {label: p.name, say: `${p.name}: the door is shut.`};
    }
    /* The map marks the way out with to="worldmap" (the south gate); the other roads are closed for now.
       A map from before that property treats every exit as the way out. */
    if (p.type === 'exit') return worldExit(p) ? {label: southGateLabels(H.save).action, worldmap: true} : {label: p.name, say: `The ${p.name.toLowerCase()} is closed for now. The road out of Oakhaven leaves by the south gate.`};
    if (p.type === 'board') return {label: act === 'community' ? 'Village noticeboard' : p.name, panel: act ?? 'guild'};
    if (p.type === 'shop-counter') {
      if (shopById(pr.shop)) return shopOption(S, p);
      const shop = VILLAGE.shops?.[pr.shop];
      return {label: pr.label ?? p.name, say: shop ? `${shop.keeper}: “${shop.greeting}”` : p.name, speaker: shop?.keeper};
    }
    if (p.type === 'sign') return {label: `Read: ${p.name}`, say: pr.text ?? p.name};
    if (p.type === 'interact') return {label: pr.label ?? p.name, say: pr.text ?? flavor(p.name)};
    return null;
  }
  /* first-hour playtest 24 Oct: "Return to Oakhaven" on the first morning read as leaving a place the hero had never been; every room is in Oakhaven */
  if (p.type === 'exit') return {label: 'Go outside', run: leave};
  if (act === 'library' && pr.subject) return {label: SUBJECT_LABEL[pr.subject] || pr.label || `Study ${pr.subject}`, panel: 'library', subject: pr.subject};
  if (act === 'library') return {label: `${pr.label || p.name || 'Study'}: the whole Library`, panel: 'library'};
  if (isShop(p)) return shopOption(S, p);
  if (act) return {label: act === 'guild' || act === 'alchemist' ? PANEL_LABEL[act] : pr.label || p.name || PANEL_LABEL[act], panel: act};
  if (p.type === 'npc-spot') { const key = p.props?.key, who = nameOf(key, p.name); return {label: `Talk to ${who}`, talk: {key, name: who, fallback: p.props?.talk}}; }
  if (p.type === 'interact') return {label: pr.label || p.name, say: pr.text ?? flavor(p.name)};
  return null;
}

const worldExit = q => q.type === 'exit' && (q.props?.to === 'worldmap' || !scene('village').points.some(o => o.props?.to === 'worldmap'));
/* How much a target counts as "the one in front of me": a target the hero faces wins a near tie. */
function facingBonus(p, x, y) {
  const dir = p.direction === 'up' ? [0, -1] : p.direction === 'down' ? [0, 1] : [p.facing < 0 ? -1 : 1, 0];
  const dx = x - p.x, dy = y - (p.y - 12), len = Math.hypot(dx, dy) || 1;
  return (dx * dir[0] + dy * dir[1]) / len > .45 ? 8 : 0;
}
function nearest(S, p) {
  let best = null;
  /* people: figures on the map and walkers on their routes (where they are right now). Every target is
     scored the same way (distance from the hero to where you stand to use it, less a bonus when he faces
     it), so a villager standing near a bed no longer takes the bed's prompt. */
  const people = [...S.figures.map(f => ({...f})), ...crewHere(S), ...S.walkers.map(m => { const st = walkerNow(m); return {key: 'w:' + m.name, name: nameOf('w:' + m.name, m.name), x: st.x, y: st.y}; })];
  for (const f of people) {
    /* owner, 8 Oct (packet #15): you walk up to someone to talk to them -- close by and facing them, never across the square */
    const raw = Math.hypot(p.x - f.x, (p.y - f.y) * 1.4) + 4, face = facingBonus(p, f.x, f.y - 20), d = raw - face;
    if (raw < 28 && face > 0 && (!best || d < best.d)) best = {d, q: {x: f.x, y: f.y, sx: f.x, sy: f.y + 8, mark: [f.x, f.y - 50]}, o: {label: `Talk to ${f.name}`, talk: {key: f.key, name: f.name}}};
  }
  for (const q of S.points) {
    if (q.type === 'spawn' || q.type === 'entry') continue;
    /* the road out is wide: any of the last few steps toward the edge offers the World Map */
    /* the road out offers the World Map a few steps before the map's edge, so the hero is never under the prompt (playtest m3) */
    const out = !S.room && worldExit(q), qx = q.x, qy = out ? q.sy : q.y;
    const raw = out ? Math.hypot(p.x - qx, (p.y - qy) * .8) * .6 : doorReach(q, p.x, p.y);
    const d = raw - (out ? 0 : facingBonus(p, q.x, q.y));
    if (raw < DOOR_REACH && (!best || d < best.d)) { const o = optionFor(S, q); if (o) best = {d, q, o}; }
  }
  return best;
}

function fadeTo(mid) { if (!H.fade) H.fade = {t: 0, mid, done: false}; }
function enter(room, door) {
  fadeTo(() => {
    const S = scene(room), e = S.points.find(q => q.type === 'entry') ?? S.points[0];
    H.from = door;
    /* a quest's visit step (game/quests.js onVisit): main.js takes it with hubTakeVisits(), moves the quest on and saves */
    (H.visits ??= []).push(S.key);
    placeAt(H.player, S, e.sx, e.sy);
    H.player.direction = 'up'; H.player.lastDirection = 'up';
  });
}
/* polish-oct29 (#8): walking out of a building used to put the hero on the door's own stand spot, inside its "Go home" / "Enter ..."
   reach, so the E the tutorial asked for next took him straight back in. He now comes out a few steps straight down from the door (beside it, or along the lane, only if that is blocked), the first
   free spot whose distance to the door (scored as nearest() scores it) is clear of the 30 px reach; failing that, the stand spot. */
export const DOOR_REACH = 30;
export function doorReach(q, x, y) { return Math.min(Math.hypot(x - q.sx, y - q.sy) * 1.25, Math.hypot(x - q.x, (y - q.y) * 1.3), q.front ? Math.hypot(x - q.front[0], y - q.front[1]) * 1.25 : Infinity); }
export function outsideDoor(V, q) {
  const ok = (x, y) => !footBlocked(V, x, y) && doorReach(q, x, y) >= DOOR_REACH + 4;
  for (const dx of [0, -8, 8, -16, 16]) for (let dy = 26; dy <= 64; dy += 2) if (ok(q.sx + dx, q.sy + dy)) return [q.sx + dx, q.sy + dy];
  /* a door onto a narrow lane (the farmhouse): a step along it instead */
  for (let dx = 26; dx <= 64; dx += 2) for (const dy of [4, 8, 0]) for (const sx of [1, -1]) if (ok(q.sx + sx * dx, q.sy + dy)) return [q.sx + sx * dx, q.sy + dy];
  return [q.sx, q.sy];
}
/* Prefer the door actually used. Old interior bakes can name another room's entrance. */
function returnDoor(S) {
  const doors = scene('village').points.filter(q => q.type === 'entrance' && roomFor(q) === S.key);
  const id = +(S.points.find(q => q.type === 'exit')?.props?.entrance ?? 0);
  return doors.find(q => q.id === H.from?.id) ?? doors.find(q => q.id === id) ?? doors[0];
}
function leave() {
  H.placing = null;
  fadeTo(() => {
    const V = scene('village'), door = returnDoor(H.S);
    const [x, y] = door ? outsideDoor(V, door) : spawnPoint();
    H.from = null;
    placeAt(H.player, V, x, y);
    H.player.direction = 'down'; H.player.lastDirection = 'down';
  });
}

/* ---------------------------------------------------------------------------------- */
/** Run one frame of the hub: World.update for animation and timers, our own movement. */
export function hubUpdate(world, dt, input) {
  const p = world.player;
  H.save = world.save;
  /* evening after a level is won (the light pools and windows read at dusk), day otherwise */
  H.dusk = !!world.lastResult?.won;
  if (p !== H.player) {
    /* A new player object. World.resetPlayer() alone (a new hero, companion or weapon, chosen at Home or
       the smith) keeps the World's action list, so the hero stays exactly where he is, in the same room,
       with no story beat. World.town() (a new game, an import) replaces that list: that is an arrival.
       Coming home from the world map goes through hubArriveAtGate(), never through here. */
    const old = H.player;
    if (old && H.S && world.actions === H.acts) {
      H.player = p;
      p.x = old.x; p.y = old.y; p.direction = old.direction; p.lastDirection = old.lastDirection; p.facing = old.facing;
    } else {
      H.player = p; H.fade = null; H.from = null;
      /* A brand-new game wakes up at Home (the first story beat); everyone else starts on the market lane. */
      const wake = beatDue('new-game');
      const S = wake && scene(wake.room), bed = S?.points.find(q => q.name === wake.at) ?? S?.points.find(q => q.type === 'entry');
      if (bed) { placeAt(p, S, bed.sx, bed.sy); H.from = null; fire(wake); }
      else { const [x, y] = spawnPoint(); placeAt(p, scene('village'), x, y); }
    }
  }
  const S = current();
  H.time += dt;
  const frozen = !!H.fade;
  const tx = p.x, ty = p.y, before = new Set(world.fx);
  p.x = PROXY.x; p.y = PROXY.y;
  const quiet = frozen ? {...input, up: false, down: false, left: false, right: false, attack: false, dodge: false, jump: false} : input;
  world.update(dt, {...quiet, buildings: []});
  H.acts = world.actions;
  const mx = p.x - PROXY.x, my = p.y - PROXY.y;
  for (const f of world.fx) if (!before.has(f)) { f.x += tx - PROXY.x; f.y += ty - PROXY.y; if (f.tx !== undefined) { f.tx += tx - PROXY.x; f.ty += ty - PROXY.y; } }
  p.x = tx; p.y = ty;
  if (world.zone !== 'town') return;
  /* Move in small steps, one axis at a time, so walls slide instead of stopping dead.
     A player placed inside a wall (a test, an old save) may always walk out. */
  const stuck = footBlocked(S, p.x, p.y), n = Math.ceil(Math.max(Math.abs(mx), Math.abs(my)) / 3);
  for (let i = 0; i < n; i++) {
    const sx = mx / n, sy = my / n;
    if (personAhead(S, p.x, p.y, p.x + sx, p.y)) { /* a villager stands there */ }
    else if (stuck || !footBlocked(S, p.x + sx, p.y)) p.x += sx;
    else if (!sy) p.y += cornerNudge(S, p.x, p.y, sx, 0, 0, 1, Math.abs(sx));
    if (personAhead(S, p.x, p.y, p.x, p.y + sy)) { /* a villager stands there */ }
    else if (stuck || !footBlocked(S, p.x, p.y + sy)) p.y += sy;
    else if (!sx) p.x += cornerNudge(S, p.x, p.y, 0, sy, 1, 0, Math.abs(sy));
  }
  p.x = Math.max(4, Math.min(S.D.w - 4, p.x)); p.y = Math.max(8, Math.min(S.D.h - 2, p.y));
  /* Stepping onto a room's exit mat leaves, the way a door works. */
  if (S.room && !H.fade && my > 0) { const ex = S.points.find(q => q.type === 'exit'); if (ex && Math.abs(p.x - ex.x) < 28 && p.y > Math.min(ex.y, ex.sy) - 14) leave(); }
  if (H.fade) {
    H.fade.t += dt / .22;
    if (H.fade.t >= 1 && !H.fade.done) { H.fade.done = true; H.fade.mid(); }
    if (H.fade.t >= 2) H.fade = null;
  }
  /* Camera: ease toward the player, clamped to the map; a new room snaps. */
  const k = H.snap ? 1 : 1 - Math.exp(-dt * 10);
  H.snap = false;
  const cx0 = H.cam.x, cy0 = H.cam.y;
  H.cam.x += (p.x - H.cam.x) * k; H.cam.y += (p.y - 20 - H.cam.y) * k;
  /* townchunk-oct28: where the camera is heading, for the streamer's look-ahead */
  if (k < 1 && dt > 0) { const a = Math.min(1, dt * 6); H.vx = (H.vx ?? 0) * (1 - a) + (H.cam.x - cx0) / dt * a; H.vy = (H.vy ?? 0) * (1 - a) + (H.cam.y - cy0) / dt * a; }
  H.near = H.fade ? null : nearest(S, p);
  /* only narration with nobody to walk up to plays by itself; a person's beat waits for the talk key (personBeat) */
  if (!H.fade) { const b = beatDue('near', current(), p) ?? beatDue('enter', current()); if (b && !isPerson(b.speaker)) fire(b); }
  /* fast travel (25 Oct): a key spot unlocks the first time the hero walks up to its door or into its room */
  if (!H.fade && (H.visitT = (H.visitT ?? 0) - dt) <= 0) { H.visitT = .25; for (const id of hubVisiting(p)) if (visitPlace(H.save, townPlace(id))) H.unlocked = true; }
}

/* ---- fast travel (25 Oct, game/fasttravel.js) ---- */
/* Each key spot's door (by its marker key), where a trip arrives (a free step in front of the door, facing it) and its room. */
const SPOT_DOOR = {library: 'library', guild: 'guild_shop', smith: 'weaponsmith', alchemist: 'apothecary', inn: 'inn', chapel: 'chapel', home: 'home', barracks: 'barracks', farm: 'farmhouse'};
/* guide-oct26: a room's name where the map, fast travel, the quest arrow and the Journal must agree (game/fasttravel.js FARM_NAME) */
const SPOT_NAME = {farmhouse: FARM_NAME};
let spots = null;
function freeNear(V, x, y) {
  for (let r = 0; r <= 48; r += 4) for (const [dx, dy] of [[0, r], [-r, 0], [r, 0], [0, -r]]) if (!footBlocked(V, x + dx, y + dy)) return {x: x + dx, y: y + dy};
  return {x, y};
}
/** Where each of Oakhaven's fast-travel spots is: [{id, x, y, facing, door, room}] (village pixels). */
export function hubTravelSpots() {
  if (spots) return spots;
  const V = scene('village'), out = [];
  for (const {id} of TOWN_SPOTS) {
    /* the gate: a step inside the road out, close enough that "Leave Oakhaven" is offered at once (home from the map uses hubGate) */
    if (id === 'gate') { const q = V.points.find(worldExit), g = q ? freeNear(V, q.x, q.sy - 30) : hubGate(); out.push({id, x: g.x, y: g.y, facing: 'down', door: q ? {x: q.x, y: q.sy} : {x: g.x, y: g.y}, room: null}); continue; }
    const door = V.points.find(q => q.type === 'entrance' && q.props?.key === SPOT_DOOR[id]);
    if (!door) continue;
    const at = freeNear(V, door.sx, door.sy + 16);
    out.push({id, x: at.x, y: at.y, facing: 'up', door: {x: door.sx, y: door.sy}, room: roomFor(door)});
  }
  return (spots = out);
}
/* The spots the hero is at now: inside a spot's room, or within a few steps of its door (the gate: of the road out). */
function hubVisiting(p) {
  const S = current();
  return hubTravelSpots().filter(t => S.room ? t.room === S.key : Math.hypot(p.x - t.door.x, p.y - t.door.y) < (t.id === 'gate' ? 110 : 48)).map(t => t.id);
}
/** The rooms entered since the last call (main.js runs game/quests.js onVisit on them and saves). */
export function hubTakeVisits() { const v = H.visits ?? []; H.visits = []; return v; }
/** True once after a new spot unlocked (main.js saves and may show the first-unlock hint). */
export function hubTakeUnlocked() { const u = !!H.unlocked; H.unlocked = false; return u; }
/** Fast travel to a key spot: the hero stands outside its door, facing it. The caller plays the fade. */
export function hubTravel(world, id) {
  const t = hubTravelSpots().find(x => x.id === id);
  if (!t) return null;
  H.placing = null;
  hubPlace(world, 'village', t.x, t.y); H.acts = world.actions; H.save = world.save;
  world.player.direction = world.player.lastDirection = t.facing;
  visitPlace(world.save, townPlace(id));
  return t;
}
/** The spot the hero stands at or in now (null when none), so the picker can say "You are here". */
export function hubTravelHere() { const p = H.player; return p && !H.fade ? hubVisiting(p)[0] ?? null : null; }

/* ---- story beats (game/npcs.js STORY) ---- */
const seenBeats = () => (H.save.hub ??= {seen: []}).seen ??= [];
/* A fresh game: nothing cleared, no XP yet. An older save never replays the opening. */
const freshGame = s => !Object.values(s?.levels ?? {}).some(l => l?.done) && !(s?.xp > 0);
function beatDue(trigger, S, p) {
  if (!H.save?.started) return null;
  const seen = seenBeats();
  for (const b of STORY) {
    if (b.trigger !== trigger || seen.includes(b.id) || !holds(b.when, H.save)) continue;
    if (trigger === 'new-game' && !freshGame(H.save)) { seen.push(b.id); continue; }
    if (trigger === 'near' && !(S.key === b.room && Math.hypot(p.x - b.x, p.y - b.y) < b.r)) continue;
    if (trigger === 'enter' && S.key !== b.room) continue;
    return b;
  }
  return null;
}
function fire(b) {
  seenBeats().push(b.id);
  H.events.push({id: b.id, speaker: b.speaker, lines: [...b.say]});
}
/* Owner, 8 Oct: "make conversation with npcs happen when u press a button near them". A story beat spoken by someone
   who stands in Oakhaven waits until the player walks up to them and presses the talk key; while it waits they wear
   the talk marker over their head. Only narration with nobody to talk to (waking up at Home) still plays by itself. */
const BY_PERSON = new Set(['near', 'enter', 'return']);
let PEOPLE = null;
function isPerson(name) {
  if (!PEOPLE) { PEOPLE = new Set(); for (const key of ['village', ...ROOM_KEYS()]) { const S = scene(key); for (const f of S.figures ?? []) PEOPLE.add(f.name); for (const q of S.points) if (q.type === 'npc-spot') PEOPLE.add(nameOf(q.props?.key, q.name)); } }
  return PEOPLE.has(name);
}
/** The story beat this person is waiting to tell, if any. */
export function personBeat(name) {
  if (!name || !H.save?.started || !isPerson(name)) return null;
  const seen = seenBeats();
  return STORY.find(b => BY_PERSON.has(b.trigger) && b.speaker === name && !seen.includes(b.id) && holds(b.when, H.save)) ?? null;
}

/** The interact prompt for the HUD: {text} or null. */
export function hubPrompt() {
  if (H.placing && FURN[H.placing]) return {text: `Place the ${FURN[H.placing].name.toLowerCase()} (Escape puts it away)`};
  if (!H.near) return null;
  /* where the prompt sits (round 3: on the door, not at the hero's feet): just above the marker icon
     drawn over the door frame, as fractions of the 480x270 view */
  const q = H.near.q, v = H.view;
  /* a point with a drawn footprint (q.box, the roster board) also passes it: when the HUD pushes the prompt down onto it (a phone's
     quest plank), main.js placePrompt moves the prompt beside it instead */
  const box = q.box && v ? [(q.box.x0 - v.ox) / VIEW_W, (q.box.y0 - v.oy) / VIEW_H, (q.box.x1 - v.ox) / VIEW_W] : null;
  return v ? {text: H.near.o.label, at: [(q.x - v.ox) / VIEW_W, (Math.min(q.y, q.sy ?? q.y) - 70 - v.oy) / VIEW_H], ...(box ? {box} : {})} : {text: H.near.o.label};
}

/**
 * Interact with whatever is in reach. Returns what main.js must do, or null:
 * {panel:'library'|...}, {worldmap:true}, {say:text}. Doors into rooms are handled here.
 */
export function hubInteract() {
  if (!H.near || H.fade) return null;
  const o = H.near.o;
  if (o.run) { o.run(); return null; }
  /* someone with news tells it first; the next press does what they usually do (talk, open their shop or panel) */
  const news = personBeat(o.talk?.name ?? o.keeper);
  if (news) { seenBeats().push(news.id); return {say: news.say.join(' '), speaker: news.speaker, lines: [...news.say]}; }
  if (o.panel) return {panel: o.panel, subject: o.subject, keeper: o.keeper};
  if (o.shop) return {shop: o.shop, keeper: o.keeper};
  if (o.worldmap) return {worldmap: true};
  /* speaking may move a villager quest on (npcs.js talkAndAdvance); main.js saves and announces `quest` */
  if (o.talk) { const t = talkAndAdvance(o.talk.key, o.talk.name, H.save, o.talk.fallback); return {say: t.lines.join(' '), speaker: t.speaker, lines: t.lines, quest: t.moved}; }
  if (o.say) return {say: o.say, speaker: o.speaker, lines: [o.say]};
  return null;
}

/** Where to stand to use an action (for tests and tools): {room, x, y, door:{x,y}}. */
export function hubSpot(action, subject) {
  const V = scene('village'), door = V.points.find(q => q.type === 'entrance' && actionOf(q) === action)
    ?? V.points.find(q => q.type === 'board' && actionOf(q) === action);
  if (!door) return null;
  const room = roomFor(door), S = room ? scene(room) : null;
  /* the station for one subject, else the room's general spot (the Archivist's desk, not a shelf) */
  const at = S?.points.find(q => actionOf(q) === action && (subject ? q.props?.subject === subject : !q.props?.subject)) ?? (subject ? null : S?.points.find(q => actionOf(q) === action));
  if (subject && !at) return null;
  return {door: {x: door.sx, y: door.sy}, room, x: at ? at.sx : door.sx, y: at ? at.sy : door.sy};
}
/** Every seller in the hub: [{room, x, y, shop, keeper}] (village counters and room markers). */
export function hubSellers() {
  const out = [];
  for (const key of ['village', ...ROOM_KEYS()]) { const S = scene(key); for (const q of S.points) if (isShop(q)) out.push({room: key, x: q.sx, y: q.sy, shop: q.props.shop, keeper: keeperOf(S, q)}); }
  return out;
}
/** Every interactive marker resolved to what E does there (for tests): [{room, type, name, option}]. */
export function hubMarkers() {
  const out = [];
  for (const key of ['village', ...ROOM_KEYS()]) { const S = scene(key); for (const q of S.points) if (!['spawn', 'entry'].includes(q.type)) out.push({room: key, type: q.type, name: q.name, props: q.props, option: optionFor(S, q)}); }
  return out;
}
/** The next story beat to show, once: {id, speaker, lines} or null (main.js polls this each frame). */
export function hubEvent() { return H.events.shift() ?? null; }
/** Hub state for tests and the integrator: the current room key ('village' outside). */
export const hubState = () => ({room: current().key, fading: !!H.fade, near: H.near?.o.label ?? null, camera: {...H.cam}});
/** Current-room destination for the early objective arrow. Uses the same markers as E;
 * an objective outside this room first points at its actual exit, not coordinates in another room. */
export function hubGuidanceTarget(target, subject) {
  if (H.fade || !target) return null;
  const S = current(), kind = target.kind === 'pad' ? 'gate' : target.kind;
  if (kind === 'npc' || kind === 'building') return questGuide(S, target);
  if (!['gate', 'library', 'guild', 'alchemist'].includes(kind)) return null;
  const name = {gate: 'South gate', library: 'Library', guild: 'Guild', alchemist: 'Apothecary'}[kind];
  let q, label = name;
  if (S.room) {
    if (kind !== 'gate') q = S.points.find(p => actionOf(p) === kind && (subject ? p.props?.subject === subject : !p.props?.subject))
      ?? S.points.find(p => actionOf(p) === kind);
    if (q) label = kind === 'library' && q.props?.subject ? (SUBJECT_LABEL[q.props.subject] || 'Library').replace(/^Study /, '') + (q.props.prop==='set-lectern'?' lectern':q.props.prop?.includes('desk')?' desk':q.props.prop?.includes('table')?' table':' study area') : name;
    else { q = S.points.find(p => p.type === 'exit'); label = `Outside to the ${name}`; }
  } else q = kind === 'gate' ? S.points.find(worldExit)
    : S.points.find(p => p.type === 'entrance' && actionOf(p) === kind)
      ?? S.points.find(p => p.type === 'board' && actionOf(p) === kind);
  if (!q) return null;
  const x = !S.room && kind === 'gate' ? q.x : q.sx;
  const y = !S.room && kind === 'gate' ? q.sy : q.sy;
  /* polish-oct29 (#13): a building's arrow aims at the door itself (its stand spot is at the doorstep, level with a hero walking up,
     so near the door the arrow pointed sideways) */
  const aim = !S.room && q.type === 'entrance' ? {x: q.x, y: q.y - 32} : null;
  return {room: S.key, x, y, label, ...(aim ? {aim} : {}), arrived: H.near?.q === q || !!H.player && Math.hypot(H.player.x - x, H.player.y - y) <= 12};
}
/* a villager quest's town target (game/quests.js stepTarget): a person in a room ({kind:'npc', key, room}) or a building's door
   ({kind:'building', id}); from another room the arrow points at its way out first */
function questGuide(S, target) {
  const room = target.kind === 'building' ? target.id : target.room; if (!room) return null;
  const V = scene('village'), door = V.points.find(q => q.type === 'entrance' && roomFor(q) === room), place = SPOT_NAME[room] ?? door?.name ?? room;
  let q, label;
  if (S.key === room) {
    /* guide-oct26: the hire nudge's arrow goes on to the roster board inside the Barracks */
    if (target.kind === 'building') { const b = target.point === 'roster' && S.points.find(p => p.type === 'interact' && p.props?.action === 'barracks'); return b ? {room: S.key, x: b.x, y: b.y, label: b.name, arrived: H.near?.q === b || !!H.player && Math.hypot(H.player.x - b.x, H.player.y - b.y) <= 20} : null; }
    q = S.points.find(p => p.type === 'npc-spot' && p.props?.key === target.key); label = q ? nameOf(target.key, q.name) : null;
    if (!q) { const m = crewHere(S).find(c => c.key === target.key); if (m) { q = {sx: m.x, sy: m.y + 8}; label = m.name; } }
  } else if (S.room) { q = S.points.find(p => p.type === 'exit'); label = `Outside to the ${place}`; }
  else { q = door; label = place; }
  if (!q) return null;
  return {room: S.key, x: q.sx, y: q.sy, label, arrived: !!H.player && Math.hypot(H.player.x - q.sx, H.player.y - q.sy) <= 12};
}
/** oct25-followups2 (tutorial step 3, "use something"): the closest thing in this room the hero can use, for the card to
 * name and the guide arrow to point at. Inside a room the way out is only a last resort. Read-only. */
export function hubNearestUsable() {
  if (H.fade || !H.player) return null;
  const S = current(), p = H.player; let best = null;
  for (const q of S.points) {
    if (['spawn', 'entry'].includes(q.type)) continue;
    const o = optionFor(S, q); if (!o?.label) continue;
    const x = q.sx ?? q.x, y = q.sy ?? q.y, d = Math.hypot(p.x - x, p.y - y) + (S.room && q.type === 'exit' ? 1e4 : 0);
    if (!best || d < best.d) best = {d, room: S.key, x, y, label: o.label, arrived: H.near?.q === q};
  }
  return best;
}
/** Put the player at a spot in a room ('village' or a room key). */
export function hubPlace(world, room, x, y) { H.player = world.player; H.fade = null; H.from = null; placeAt(world.player, scene(room), x, y); H.near = nearest(current(), world.player); }

/* ---------------------------------------------------------------------------------- */
function prepWalker(m) {
  const seg = [];
  let total = 0;
  for (let i = 1; i < m.path.length; i++) {
    const [ax, ay] = m.path[i - 1], [bx, by] = m.path[i], len = Math.hypot(bx - ax, by - ay);
    seg.push({ax, ay, bx, by, len, at: total}); total += len;
  }
  const travel = total / Math.max(.05, m.speed * 32), hold = m.loop ? 0 : m.dwell;
  return {...m, seg, total, travel, hold, cycle: m.loop ? travel : 2 * (travel + hold)};
}
function walkerAt(m, t) {
  const u = ((t % m.cycle) + m.cycle) % m.cycle;
  let d, moving = true, back = false;
  if (m.loop) d = u / m.cycle;
  else if (u < m.travel) d = u / m.travel;
  else if (u < m.travel + m.hold) { d = 1; moving = false; }
  else if (u < 2 * m.travel + m.hold) { d = 1 - (u - m.travel - m.hold) / m.travel; back = true; }
  else { d = 0; moving = false; }
  const want = d * m.total;
  let s = m.seg[0], k = 0;
  for (const g of m.seg) if (want >= g.at) { s = g; k = Math.min(1, (want - g.at) / (g.len || 1)); }
  return {x: s.ax + (s.bx - s.ax) * k, y: s.ay + (s.by - s.ay) * k, moving, dir: (back ? -1 : 1) * (s.bx >= s.ax ? 1 : -1)};
}
/* Walkers keep their own clock (playtest 14 Oct): one whose next step would walk into the hero waits, idle, until the
   way is clear, instead of walking straight through them. Reduced motion keeps everyone at the start of their route. */
export function walkerTick(m, t, p) {
  const dt = Math.max(0, Math.min(.25, t - (m.lastT ?? t))); m.lastT = t; m.clock ??= 0;
  const now = walkerAt(m, m.clock);
  if (dt && p) { const next = walkerAt(m, m.clock + dt), close = q => Math.abs(q.x - p.x) < 18 && Math.abs(q.y - p.y) < 14;
    if (next.moving && close(next) && Math.hypot(next.x - p.x, next.y - p.y) <= Math.hypot(now.x - p.x, now.y - p.y)) { m.waiting = true; return {...now, moving: false}; }
    m.clock += dt; m.waiting = false; return next; }
  return m.waiting ? {...now, moving: false} : now;
}
const walkerNow = m => m.clock === undefined ? walkerAt(m, H.drawT ?? 0) : walkerAt(m, m.clock);
const frameAt = (durs, ms) => { const total = durs.reduce((a, b) => a + b, 0); let u = ((ms % total) + total) % total, f = 0; while (f < durs.length - 1 && u >= durs[f]) u -= durs[f++]; return f; };

let xray = null;
/**
 * Draw the hub. `kit` carries world.js's own renderers: {actor, companion, effect}.
 * Returns the camera rectangle (world units) for the minimap.
 */
export function drawHub(c, state, t, kit) {
  syncView(); /* v2:ui-mobile */
  pumpStream(); /* townchunk-oct28 */
  const S = current(), D = S.D, I = images(S), p = state.player;
  H.drawT = t;
  /* 1:1 and whole pixels. A room smaller than the view is centred on a dark floor. */
  /* the camera keeps to the room's own walls (its baked bounds), never the black void around them */
  const [bx0, by0, bx1, by1] = D.bounds ?? [0, 0, D.w, D.h], fit = (lo, hi, view, at) => hi - lo <= view ? Math.round((lo + hi - view) / 2) : Math.round(Math.max(lo, Math.min(hi - view, at - view / 2)));
  const ox = fit(bx0, bx1, VIEW_W, H.cam.x), oy = fit(by0, by1, VIEW_H, H.cam.y);
  H.view = {ox, oy};
  c.save();
  c.imageSmoothingEnabled = false;
  c.fillStyle = S.room ? '#120d0c' : '#2c4433'; c.fillRect(0, 0, VIEW_W, VIEW_H);
  const shake = state.motion && state.shake > 0 && state.shakeTime > 0 ? Math.round(Math.sin(t * 95) * state.shake * (state.shakeTime / (state.shakeMax || 1))) : 0;
  c.translate(-ox + shake, -oy);
  const vx0 = ox, vy0 = oy, vx1 = ox + VIEW_W, vy1 = oy + VIEW_H;
  /* ground */
  /* townchunk-oct28: a chunk still streaming is drawn from the overview (the same baked village at 1/8 scale, nearest-neighbour), never a hole */
  const os = D.overviewScale ?? .125;
  D.chunks.forEach(([x, y, w, h], i) => { if (!(x < vx1 && x + w > vx0 && y < vy1 && y + h > vy0)) return;
    if (ready(I.chunks[i])) c.drawImage(I.chunks[i], x, y);
    else if (ready(I.overview)) c.drawImage(I.overview, x * os, y * os, w * os, h * os, x, y, w, h);
    else if (!S.room) H.onArrive?.(H.arrival ?? {x: p.x, y: p.y}); });
  /* animated water: gap crop, frame, gap crop... per visible cell */
  const A = D.anim, T = D.tile, ms = state.motion === false ? 0 : t * 1000;
  if (A.cells.length && ready(I.tiles) && ready(I.cells)) {
    const crop = (n, x, y) => { if (n >= 0) c.drawImage(I.cells, (n % A.cols) * T, Math.floor(n / A.cols) * T, T, T, x, y, T, T); };
    for (const r of A.cells) {
      const x = r[0] * T, y = r[1] * T;
      if (x >= vx1 || x + T <= vx0 || y >= vy1 || y + T <= vy0) continue;
      crop(r[2], x, y);
      for (let i = 3; i < r.length; i += 3) {
        const durs = A.durs[r[i]], f = state.motion === false ? r[i + 1] : (frameAt(durs, ms) + r[i + 1]) % durs.length;
        c.drawImage(I.tiles, f * T, r[i] * T, T, T, x, y, T, T);
        crop(r[i + 2], x, y);
      }
    }
  }
  /* the map sits a touch lower in contrast than the figures on it */
  c.fillStyle = 'rgba(28,40,34,0.07)'; c.fillRect(vx0, vy0, VIEW_W, VIEW_H);
  for (const f of state.fx ?? []) if (f.ground) kit.effect(c, f);
  /* the furnished Home: rugs on the floor now, everything else sorted in with the figures below */
  const house = S.key === 'home' ? (H.save?.house?.items ?? []) : [];
  for (const it of house) { const f = FURN[it.id], im = f && f.flat && furnImage(f); if (im && ready(im)) c.drawImage(im, Math.round(it.x - f.w / 2), Math.round(it.y - f.h)); }
  /* sprites in view, in baked draw order */
  const seen = new Set(), list = [];
  for (let by = Math.floor((vy0 - 8) / S.B); by <= Math.floor((vy1 + 8) / S.B); by++) for (let bx = Math.floor((vx0 - 8) / S.B); bx <= Math.floor((vx1 + 8) / S.B); bx++)
    for (const i of S.buckets.get(by * 1024 + bx) ?? []) if (!seen.has(i)) { seen.add(i); const s = D.sprites[i]; if (s[1] < vx1 && s[1] + s[3] > vx0 && s[2] < vy1 && s[2] + s[4] > vy0) list.push(i); }
  /* the Barracks stands where the cottage did (its image is wider and a little lower, so it is kept whenever its own box is in view) */
  const lot = S.key === 'village' || S.key === 'barracks' ? lotOf(S) : null;
  if (lot) for (const i of lot.swap) if (!seen.has(i) && BARRACKS.x < vx1 && BARRACKS.x + 224 > vx0 && BARRACKS.y < vy1 && BARRACKS.y + 240 > vy0) list.push(i);
  list.sort((a, b) => a - b);
  /* figures that move: the player, the companion and the walkers */
  const figures = [];
  figures.push({y: p.y, hero: true, draw: () => kit.actor(c, p, t)});
  if (state.pet) figures.push({y: p.y + 10, draw: () => kit.companion(c, state.pet, p.x - 22 * p.facing, p.y + 9, t, p.moving, p.facing, state.motion)});
  /* the Barracks room: the roster board, and the companions waiting there (their own approved atlas, idling, unmodified) */
  if (S.key === 'barracks') {
    const r = BARRACKS.roster, im = (H.roster ??= load(r.img));
    figures.push({y: r.y, draw: () => { if (ready(im)) c.drawImage(im, Math.round(r.x - im.width / 2), Math.round(r.y - im.height + 4)); }});
    for (const m of crewHere(S)) { const art = ART[m.id]; loadActor(art.sprite); figures.push({y: m.y, draw: () => { shadow(c, m.x, m.y); drawActor(c, art.sprite, art.clips.idle, ms / 1000, m.x, m.y, {facing: -1, scale: art.scale}); }}); }
  }
  for (const m of S.walkers) {
    const st = state.motion === false ? walkerAt(m, 0) : walkerTick(m, t, p);
    if (st.x < vx0 - 60 || st.x > vx1 + 60 || st.y < vy0 - 10 || st.y > vy1 + 90) continue;
    const e = D.entries[st.moving ? m.walk : m.idle];
    figures.push({y: st.y, draw: () => drawFigure(c, I, e, st.x, st.y, st.dir, m.scale, ms + m.path[0][0] * 7)});
  }
  /* birds and butterflies (gfx/motion.js): ground ones sort with the figures, birds in the air go over everything */
  const air = [];
  if (!S.room) { stepCritters('village', p, t, state.motion !== false); for (const k of critterDraws(c, 'village', t, state.motion !== false, [vx0, vy0, vx1, vy1])) (k.air ? air : figures).push(k); }
  for (const it of house) { const f = FURN[it.id], im = f && !f.flat && furnImage(f); if (im) figures.push({y: it.y, draw: () => { if (ready(im)) c.drawImage(im, Math.round(it.x - f.w / 2), Math.round(it.y - f.h)); }}); }
  if (H.placing && S.key === 'home') { const f = FURN[H.placing], at = placingSpot(), im = f && furnImage(f);
    if (at && im) { const ok = placingOk(S, f, at.x, at.y); const draw = () => { if (!ready(im)) return; c.save(); c.globalAlpha = ok ? .75 : .3; c.drawImage(im, Math.round(at.x - f.w / 2), Math.round(at.y - f.h)); c.restore(); };
      if (f.flat) draw(); else figures.push({y: at.y, draw}); } }
  figures.sort((a, b) => a.y - b.y);
  let fi = 0, heroAt = -1;
  const occluders = [];
  let fxDone = false;
  const ambient = () => { if (fxDone) return; fxDone = true; while (fi < figures.length) figures[fi++].draw(); drawFx(c, S, t, state.motion !== false, vx0, vy0, vx1, vy1); };
  const hidden = restoreOf(S).hidden;
  for (const i of list) {
    if (hidden.has(i) || lot?.step.has(i)) continue;
    const swapped = !!lot?.swap.has(i), s = swapped ? Object.assign([D.sprites[i][0], BARRACKS.x, BARRACKS.y, 224, 240, BARRACKS.base, 8, -1], {barracks: true}) : D.sprites[i];
    /* overhead art (a room's vignette, chandeliers, chimney smoke) goes over everyone, and over the flames */
    if (s[5] >= 1e6) ambient();
    while (fi < figures.length && figures[fi].y < s[5]) { if (figures[fi].hero) heroAt = i; figures[fi++].draw(); }
    /* every sprite drawn over the hero can hide him (hedges and stalls as well as roofs and trees); the
       ghost is cut to their opaque pixels, so this only ever shows where he is really covered */
    /* newplayer-oct27: the Barracks is drawn from its own image and carries the shadow flag (8), which kept it out of this list: a hero walking behind it vanished */
    if (heroAt >= 0 && (!(s[6] & 8) || s.barracks)) occluders.push(s);
    if (swapped) { const im = (H.barracks ??= load(BARRACKS.img)); if (ready(im)) c.drawImage(im, BARRACKS.x, BARRACKS.y); continue; }
    drawSprite(c, I, D, s, ms);
  }
  ambient();
  for (const k of air) k.draw();
  if (!S.room) for (const k of leafDraws(c, 'village', D, list, t, state.motion !== false)) k.draw();
  /* evening: the lamps' light pools again, added, so they read once the dusk grade darkens the rest */
  const lampA = H.dusk ? .6 : clockGrade?.lamps || 0;
  if (lampA > .02 && !S.room && D.lights?.length) {
    c.save(); c.globalCompositeOperation = 'lighter'; c.globalAlpha = lampA;
    for (const i of D.lights) { const s = D.sprites[i]; if (!hidden.has(i) && s[1] < vx1 && s[1] + s[3] > vx0 && s[2] < vy1 && s[2] + s[4] > vy0) drawSprite(c, I, D, s, ms); }
    c.restore();
  }
  /* behind a building or a tree: show the hero through it */
  const hx0 = p.x - 10, hx1 = p.x + 10, hy0 = p.y - 40, hy1 = p.y;
  const over = occluders.filter(s => s[1] < hx1 && s[1] + s[3] > hx0 && s[2] < hy1 && s[2] + s[4] > hy0 && s[5] > p.y && s[5] < 1e6);
  if (over.length) silhouette(c, p, t, kit, over, I, D, ms);
  for (const f of state.fx ?? []) if (!f.ground) kit.effect(c, f);
  /* a small marker over whatever E would use; none on the roster board (25 Oct lead review: the coin covered the board; its prompt names it) */
  if (H.near && !H.fade && H.near.o?.panel !== 'barracks') {
    iconImage ??= loadMarkers();
    /* over the thing E uses: the marker's own point (on its prop), a person's head, or the door */
    const q = H.near.q, n = markerIcon(H.near.o), bob = state.motion === false ? 0 : Math.floor(t * 2.5) % 2;
    const [mx, my] = q.mark ?? (q.type === 'npc-spot' ? [q.x, q.y - 52] : q.type === 'interact' || q.type === 'shop' || q.props?.shop ? [q.x, q.y - 34] : [q.x, Math.min(q.y, q.sy) - 50]);
    /* never over the hero's face (owner review, 9 Oct): when the hero stands on the thing, the marker rides above their head */
    const hp = H.player, lift = hp && Math.abs(mx - hp.x) < 24 && my > hp.y - 74 && my < hp.y + 8 ? hp.y - 74 : my;
    if (ready(iconImage)) c.drawImage(iconImage, n * 32, 0, 32, 32, Math.round(mx) - 16, Math.round(lift) - 16 - bob, 32, 32);
  }
  /* people with news to tell wear the talk marker until the player hears it (personBeat) */
  if (!H.fade) {
    iconImage ??= loadMarkers();
    const bob = state.motion === false ? 0 : Math.floor(t * 2.5) % 2, news = [...S.figures.map(f => [f.name, f.x, f.y]), ...S.points.filter(q => q.type === 'npc-spot').map(q => [nameOf(q.props?.key, q.name), q.x, q.y])];
    for (const q of S.points) if (q.type === 'npc-spot' && questNews(H.save, q.props?.key)) news.push([q.props.key, q.x, q.y, true]);
    for (const m of crewHere(S)) if (questNews(H.save, m.key) || m.id && H.save && currentStep(H.save, COMPANIONS[m.id].quest)?.kind === 'visit') news.push([m.key, m.x, m.y - 4, true]);
    for (const [who, x, y, quest] of news) if ((quest || personBeat(who)) && !(H.near && Math.abs(H.near.q.x - x) < 2 && Math.abs(H.near.q.y - y) < 2) && ready(iconImage))
      c.drawImage(iconImage, MARK.talk * 32, 0, 32, 32, Math.round(x) - 16, Math.round(y) - 66 - bob, 32, 32);
  }
  /* Identify the nearest useful doorway; the interaction marker takes over when E is available. */
  if (!S.room && !H.fade && !H.near) {
    const place = nearbyDestination(S.points, p, H.save);
    /* (playtest 14 Oct) a name near the top of the view drops below the hero plate (left) or the objective (right) */
    if (place) { const sx = place.x - ox, top = sx < 170 ? 82 : sx > 280 ? 46 : 14; c.save(); c.globalAlpha = place.alpha; subjectPlate(c, place.text, place.x, Math.max(place.y, oy + top), 16); c.restore(); }
  }
  /* the Library: every teacher's subject floats over their head, so it is obvious who teaches what (owner, packet #17) */
  if (S.key === 'library') for (const q of S.points) if (q.type === 'interact' && q.props?.subject) {
    const who = S.points.filter(o => o.type === 'npc-spot').sort((a, b) => Math.hypot(a.x - q.x, a.y - q.y) - Math.hypot(b.x - q.x, b.y - q.y))[0];
    if (who && Math.hypot(who.x - q.x, who.y - q.y) < 120) subjectPlate(c, SUBJECT_NAME[q.props.subject] ?? q.props.subject, who.x, who.y - 58);
  }
  c.restore();
  if (H.fade) { c.fillStyle = `rgba(10,8,8,${Math.min(1, H.fade.t < 1 ? H.fade.t : 2 - H.fade.t)})`; c.fillRect(0, 0, VIEW_W, VIEW_H); }
  return {x: ox + VIEW_W / 2, y: oy + VIEW_H / 2, width: VIEW_W, height: VIEW_H};
}

const DESTINATION_NAMES = {library:'LIBRARY',guild:'ADVENTURERS’ GUILD',smith:'WEAPONSMITH',alchemist:'APOTHECARY',home:'HOME',community:'VILLAGE NOTICEBOARD',barracks:'BARRACKS'};
export const southGateLabels = save => levelDone(save,'prologue')
  ? {action:'Leave Oakhaven: World Map',destination:'SOUTH GATE · WORLD MAP'}
  : {action:'Defend the south gate',destination:'SOUTH GATE · GOBLIN SCOUTS'};
export function nearbyDestination(points, player, save) {
  let best = null;
  for (const q of points) {
    const text = q.type === 'exit' && worldExit(q) ? southGateLabels(save).destination : q.type === 'entrance' || q.type === 'board' && q.props?.action === 'community' ? DESTINATION_NAMES[q.props?.action ?? (q.props?.key === 'barracks' ? 'barracks' : '')] : null;
    if (!text) continue;
    const d = Math.hypot(player.x - q.x, player.y - q.y);
    if (d >= 200 || best && d >= best.distance) continue;
    const y = q.y - (q.type === 'exit' ? 112 : 26), lift = Math.abs(q.x-player.x)<80 && Math.abs(y-(player.y-40))<32 ? Math.min(y,player.y-80) : y;
    best = {text,x:q.x,y:lift,distance:d,alpha:Math.min(1,(200-d)/48)};
  }
  return best;
}

const SUBJECT_NAME = Object.fromEntries(Object.entries(SUBJECTS).map(([id, v]) => [id, v.name.toUpperCase()]));
/* a small dark plate with gold pixel lettering, centred over a teacher */
/* 24 Oct playtest: "READING" read "READ HO". Pixel Operator is drawn for 16 px; at 8 px its letters lose their shapes
   (R like A, N like H) and sit on half pixels. The teachers' plates now use the font's own 16 px size, on whole pixels. */
function subjectPlate(c, text, x, y, size = 16) {
  c.save(); c.font = `${size}px "Pixel Operator", monospace`; c.textAlign = 'left'; c.textBaseline = 'middle';
  const adv = [...text].map(ch => Math.ceil(c.measureText(ch).width)), tw = adv.reduce((a, b) => a + b, 0);
  const w = tw + 10, h = size + 4, X = Math.round(x - w / 2), Y = Math.round(y - h / 2);
  c.fillStyle = 'rgba(20,12,8,.82)'; c.fillRect(X, Y, w, h); c.fillStyle = '#a5773c'; c.fillRect(X, Y, w, 1); c.fillRect(X, Y + h - 1, w, 1);
  c.fillStyle = '#ffe2a0'; let cx = X + 5; [...text].forEach((ch, i) => { c.fillText(ch, cx, Y + h / 2); cx += adv[i]; }); c.restore();
}

/* Ambient life at the rooms' `ambient` points and a soft flicker at their `light` points, from the
   downloaded effect strips baked into fx.webp (tools/bake-town.mjs bakeFx). Nothing is drawn in code. */
let fxImage = null;
const AMBIENT_FX = {fire: 'fire', candle: 'candle', torch: 'torch', sparks: 'sparks', motes: 'motes', dust: 'dust', steam: 'steam'};
function drawFx(c, S, t, motion, vx0, vy0, vx1, vy1) {
  const {lights, ambient} = S.fx;
  if (!lights.length && !ambient.length) return;
  fxImage ??= load(FX.image);
  if (!ready(fxImage)) return;
  const ms = t * 1000;
  c.save();
  /* the baked pools already light the room; a flickering pool on top makes the flame breathe */
  c.globalCompositeOperation = 'lighter';
  for (const [x, y, r, kind, flicker] of lights) {
    if (!flicker || x + r < vx0 || x - r > vx1 || y + r < vy0 || y - r > vy1) continue;
    const a = FX.anims[kind === 'fire' || kind === 'ember' ? 'pool-fire' : 'pool-warm'], k = (r * 1.4) / a[2];
    const n = motion ? Math.sin(t * 9.1 + x * .13) * .5 + Math.sin(t * 13.7 + y * .21) * .5 : 0;
    c.globalAlpha = .07 + .05 * n;
    c.drawImage(fxImage, a[0], a[1], a[2], a[3], Math.round(x - a[6] * k), Math.round(y - a[7] * k), Math.round(a[2] * k), Math.round(a[3] * k));
  }
  c.globalCompositeOperation = 'source-over';
  for (const [x, y, kind] of ambient) {
    const a = FX.anims[AMBIENT_FX[kind]];
    if (!a || x + 60 < vx0 || x - 60 > vx1 || y + 60 < vy0 || y - 90 > vy1) continue;
    const f = motion ? Math.floor((ms + x * 37 + y * 11) / a[5]) % a[4] : 0;
    c.globalAlpha = a[8];
    c.drawImage(fxImage, a[0] + f * a[2], a[1], a[2], a[3], Math.round(x - a[6]), Math.round(y - a[7]), a[2], a[3]);
  }
  c.restore();
}

export function drawSprite(c, I, D, s, ms, bare = false) {
  const [ei, x, y, w, h, , fl, d] = s, e = D.entries[ei], page = I.pages[e[0]];
  if (!ready(page)) return;
  const f = d >= 0 ? frameAt(D.durs[d], ms + x * 7 + y * 3) : 0, cols = e[7] || 1;
  const sx = e[1] + (f % cols) * e[3], sy = e[2] + Math.floor(f / cols) * e[4];
  if (fl & 8 && !bare) shadow(c, x + w / 2, y + h);
  const rx = Math.round(x), ry = Math.round(y), rw = Math.round(w), rh = Math.round(h);
  const opacity=s[8]??1;
  if(opacity!==1){c.save();c.globalAlpha*=opacity;}
  /* wind in the trees and plants (gfx/motion.js); ms is 0 under reduced motion, so nothing sways then */
  const sway = ms && !(fl & 2) ? swayTable(D === VILLAGE || D.village ? 'village' : '', D)?.get(ei) : null;
  if (sway && drawSwayed(c, page, sx, sy, e[3], e[4], rx, ry, rw, rh, fl & 1, sway, ms / 1000)) { if (opacity !== 1) c.restore(); return; }
  if (fl & 3) { c.save(); c.translate(rx + (fl & 1 ? rw : 0), ry + (fl & 2 ? rh : 0)); c.scale(fl & 1 ? -1 : 1, fl & 2 ? -1 : 1); c.drawImage(page, sx, sy, e[3], e[4], 0, 0, rw, rh); c.restore(); }
  else c.drawImage(page, sx, sy, e[3], e[4], rx, ry, rw, rh);
  if(opacity!==1)c.restore();
}
function drawFigure(c, I, e, x, y, dir, scale, ms) {
  const page = I.pages[e[0]];
  shadow(c, x, y);
  if (!ready(page)) return;
  const n = e[5], f = Math.floor(ms / (e[6] || 150)) % n, cols = e[7] || 1, w = Math.round(e[3] * scale), h = Math.round(e[4] * scale);
  const sx = e[1] + (f % cols) * e[3], sy = e[2] + Math.floor(f / cols) * e[4], dx = Math.round(x - w / 2), dy = Math.round(y - h);
  if (dir < 0) { c.save(); c.translate(dx + w, dy); c.scale(-1, 1); c.drawImage(page, sx, sy, e[3], e[4], 0, 0, w, h); c.restore(); }
  else c.drawImage(page, sx, sy, e[3], e[4], dx, dy, w, h);
}
/* A figure's ground shadow: Mixel's MainC_Shadow (20x12 inside a 32 px cell), unmodified, at 1:1. */
let shadowImage = null;
function shadow(c, x, y) { shadowImage ??= load('shadow.png'); if (ready(shadowImage)) c.drawImage(shadowImage, Math.round(x) - 16, Math.round(y) - 17); }
/* The E marker: an icon from Shikashi's Fantasy Icons (the same sheet the shops use), bobbing on two frames. */
let iconImage = null;
/* 24 Oct playtest: the Lantern Inn's door showed the same key as the Library's; it has its own mug of drink (inn). */
/* packicons3-oct25: the markers are our PixelLab icons, one 32 px cell each in ui/skin/packicons3/town-markers.png
   (tools/bake-packicons3-oct25.py; was assets/town/icons.png, Shikashi): a speech bubble, the open book, the gold coin, the up
   arrow, the key, an ale mug, the scroll and the XP sparkle, in this order. */
export const MARK = {talk: 0, library: 1, shop: 2, exit: 3, door: 4, inn: 5, read: 6, other: 7};
const loadMarkers = () => { if (typeof Image === 'undefined') return null; const im = new Image(); im.decoding = 'async'; im.src = new URL('../ui/skin/packicons3/town-markers.png', import.meta.url).href; return im; };
/* exploit6-oct29: the Home's study desk ("Lay out abilities") and the noticeboard showed the shop's gold coin, as if something were
   for sale there; they get the scroll. Shops and the other panels keep the coin. */
export function markerIcon(o) { return o.talk ? MARK.talk : o.panel === 'library' ? MARK.library : o.panel === 'home' || o.panel === 'community' ? MARK.read : o.shop || o.panel ? MARK.shop : o.worldmap ? MARK.exit : o.inn ? MARK.inn : o.run ? MARK.door : o.say ? MARK.read : MARK.other; }
/* The hero drawn again, faint, over whatever hides them. Rendered off-screen first so the
   limbs do not show through each other. */
/* Only the part of the hero that is really hidden: his own pixels, tinted one flat colour, cut to the
   opaque pixels of the sprites drawn over him. In the open nothing covers him, so nothing is drawn
   (playtest m1: the old test used sprite boxes and turned him into a ghost beside bushes). */
let xmask = null, xedge = null;
/* A pale opaque edge locates the hero over roofs; its interior is a see-through dark blue, so a bush still reads through it. */
export const GHOST = {color: '#fff1a6', alpha: 1, fill: 'rgba(55,83,102,.5)', share: .3};
function silhouette(c, p, t, kit, over, I, D, ms) {
  if (typeof document === 'undefined') return;
  if (!xray) { xray = document.createElement('canvas'); xray.width = 120; xray.height = 110; xmask = document.createElement('canvas'); xmask.width = 120; xmask.height = 110; xedge=document.createElement('canvas');xedge.width=120;xedge.height=110; }
  const g = xray.getContext('2d'), m = xmask.getContext('2d');
  if (!g?.clearRect || !m?.clearRect) return;
  const bx = Math.round(p.x) - 60, by = Math.round(p.y) - 90;
  g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, 120, 110); g.imageSmoothingEnabled = false;
  g.translate(-bx, -by); kit.actor(g, {...p, ghost: true, noShadow: true}, t); g.setTransform(1, 0, 0, 1, 0, 0);
  /* only the hero's solid pixels make the ghost: soft shadows or glows would fill in as a blob */
  const px = g.getImageData?.(0, 0, 120, 110); let body = 0, x0 = 120, y0 = 110, x1 = -1, y1 = -1;
  if (px) { const d = px.data; for (let i = 3; i < d.length; i += 4) { d[i] = d[i] > 127 ? 255 : 0; if (d[i]) { body++; const n = (i - 3) / 4, x = n % 120, y = Math.floor(n / 120); x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); } } g.putImageData(px, 0, 0); }
  g.globalCompositeOperation = 'source-in'; g.fillStyle = GHOST.color; g.fillRect(0, 0, 120, 110);
  m.setTransform(1, 0, 0, 1, 0, 0); m.clearRect(0, 0, 120, 110); m.imageSmoothingEnabled = false;
  m.translate(-bx, -by); for (const s of over) { if (!s.barracks) drawSprite(m, I, D, s, ms, true); else if (ready(H.barracks)) m.drawImage(H.barracks, s[1], s[2]); } m.setTransform(1, 0, 0, 1, 0, 0);
  const edge=xedge.getContext('2d');edge.clearRect(0,0,120,110);edge.drawImage(xray,0,0);g.globalCompositeOperation = 'source-over';for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]])g.drawImage(xedge,dx,dy);g.globalCompositeOperation='destination-out';g.drawImage(xedge,0,0);edge.globalCompositeOperation='source-in';edge.fillStyle=GHOST.fill;edge.fillRect(0,0,120,110);edge.globalCompositeOperation='source-over';g.globalCompositeOperation='source-over';g.drawImage(xedge,0,0);g.globalCompositeOperation = 'destination-in'; g.drawImage(xmask, 0, 0); g.globalCompositeOperation = 'source-over';
  /* a hero only ankle-deep in a bush is plainly visible: ghost him only when a real share of him is covered */
  /* Only the body and its one-pixel outline can survive the mask. Read that rectangle, not the empty padding. */
  if (px && body) { x0 = Math.max(0, x0 - 1); y0 = Math.max(0, y0 - 1); x1 = Math.min(119, x1 + 1); y1 = Math.min(109, y1 + 1); const after = g.getImageData(x0, y0, x1 - x0 + 1, y1 - y0 + 1).data; let hid = 0; for (let i = 3; i < after.length; i += 4) if (after[i]) hid++; if (hid < body * GHOST.share) return; }
  c.save(); c.globalAlpha = GHOST.alpha; c.drawImage(xray, bx, by); c.restore();
}

/* ---------------------------------------------------------------------------------- */
/** The minimap (and the full map panel) for the hub. */
export function drawHubMap(canvas, state, full = false) {
  const c = canvas.getContext('2d'), S = current(), D = S.D, I = images(S), p = state.player, w = canvas.width, h = canvas.height;
  c.save();
  c.fillStyle = '#142a2b'; c.fillRect(0, 0, w, h);
  const os = D.overviewScale ?? .125;
  const scale = full ? Math.min((w - 20) / D.w, (h - 20) / D.h) : Math.max(os, Math.min(.2, w / D.w * 1.6));
  /* the minimap follows the player but never shows past the map's edge */
  const fit = (v, size, span) => span <= size ? (size - span) / 2 : Math.max(size - span, Math.min(0, v));
  const ox = full ? (w - D.w * scale) / 2 : fit(w / 2 - p.x * scale, w, D.w * scale), oy = full ? (h - D.h * scale) / 2 : fit(h / 2 - p.y * scale, h, D.h * scale);
  c.beginPath(); c.rect(2, 2, w - 4, h - 4); c.clip();
  c.imageSmoothingEnabled = true;
  if (ready(I.overview)) c.drawImage(I.overview, ox, oy, D.w * scale, D.h * scale);
  const dot = (x, y, r, col) => { c.fillStyle = col; c.beginPath(); c.arc(ox + x * scale, oy + y * scale, r, 0, Math.PI * 2); c.fill(); };
  for (const q of S.points) {
    const a = actionOf(q);
    if (a || worldExit(q)) dot(q.x, q.y, full ? 4 : 2.2, q.type === 'exit' ? '#9fd0f0' : a === 'library' ? '#8eb6d8' : '#e6c27a');
    if (full && (a || worldExit(q)) && !S.room) {
      const text = q.type === 'exit' ? 'TO THE WORLD' : {library: 'LIBRARY', guild: 'GUILD', smith: 'WEAPONSMITH', alchemist: 'APOTHECARY', home: 'HOME'}[a];
      /* one label per place: the doors, and the south gate (the road the World Map starts from) */
      const show = text && q.type !== 'shop-counter' && q.type !== 'board' && (q.type !== 'exit' || worldExit(q));
      if (show) { c.font = 'bold 11px monospace'; c.textAlign = 'center'; const tx = Math.max(c.measureText(text).width / 2 + 4, Math.min(w - c.measureText(text).width / 2 - 4, ox + q.x * scale)), ty = Math.min(h - 12, oy + q.y * scale - 8); c.fillStyle = '#152023'; c.fillText(text, tx + 1, ty + 1); c.fillStyle = '#fff0cc'; c.fillText(text, tx, ty); }
    }
  }
  dot(p.x, p.y, full ? 6 : 4, '#f4deb0'); dot(p.x, p.y, full ? 2.5 : 1.8, '#fff8d8');
  if (state.camera) { c.strokeStyle = '#f7e8bd88'; c.lineWidth = 1; c.strokeRect(ox + (state.camera.x - VIEW_W / 2) * scale, oy + (state.camera.y - VIEW_H / 2) * scale, VIEW_W * scale, VIEW_H * scale); }
  c.restore();
  if (!full) { c.strokeStyle = '#8d8667'; c.lineWidth = 1; c.strokeRect(.5, .5, w - 1, h - 1); }
}

/** The colour grade for the hub (world.js grade()): lighter than the old town's, so the
    village keeps the saturation of the owner's reference; rooms are warmer and closer. */
const GRADE_VILLAGE = {lamps: 0, tint: '#fff0d4', tintA: .10, vig: .28, mote: '#ffeec4', moteA: .32, drift: 5, n: 12, ray: 0, sun: .55, clouds: .15, beams: 0};
const GRADE_ROOM = {tint: '#ffd9a8', tintA: .16, vig: .5, mote: '#ffe2b0', moteA: .22, drift: 2, n: 8, ray: 0};
/* Evening after a won level: a cool dusk multiply and a heavier vignette (world.js grade()). */
const GRADE_DUSK = {tint: '#7d6d9c', tintA: .42, vig: .55, mote: '#ffd9a0', moteA: .42, drift: 3, n: 14, ray: 0, sun: .22};
/* Oakhaven follows the player's own clock (UI polish, 14 Oct): plain day 7:00-16:00, a warm golden hour to 19:00, a soft
   blue evening by 21:00 that holds through the night, and back to day between 4:00 and 7:00. The evening stays lighter than
   the after-victory dusk (tintA .34 against .42, vignette .42 against .55) so text and paths always read; the lamps glow from dusk. */
const GRADE_GOLDEN = {...GRADE_VILLAGE, lamps: .1, tint: '#ffd49a', tintA: .18, vig: .32, mote: '#ffe2a8', moteA: .38, sun: .5, clouds: .12};
const GRADE_EVENING = {...GRADE_VILLAGE, lamps: .45, tint: '#9a8cc4', tintA: .34, vig: .42, mote: '#ffe0b0', moteA: .42, sun: .3, clouds: .08};
const hex = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
const mixHex = (a, b, k) => '#' + hex(a).map((v, i) => Math.round(v + (hex(b)[i] - v) * k).toString(16).padStart(2, '0')).join('');
const mixGrade = (a, b, k) => { const o = {...a}; for (const key of Object.keys(b)) o[key] = typeof b[key] === 'string' ? mixHex(a[key], b[key], k) : a[key] + (b[key] - a[key]) * k; return o; };
const ease = k => k * k * (3 - 2 * k);
/** The village grade for a local hour (0-24, fractional). Pure, for tests. */
export function dayGrade(hour) {
  const h = ((hour % 24) + 24) % 24, ramp = (a, b) => ease(Math.min(1, Math.max(0, (h - a) / (b - a))));
  if (h >= 7 && h < 16) return GRADE_VILLAGE;
  if (h >= 16 && h < 19) return mixGrade(GRADE_VILLAGE, GRADE_GOLDEN, ramp(16, 19));
  if (h >= 19 && h < 21) return mixGrade(GRADE_GOLDEN, GRADE_EVENING, ramp(19, 21));
  if (h >= 4 && h < 7) return mixGrade(GRADE_EVENING, GRADE_VILLAGE, ramp(4, 7));
  return GRADE_EVENING;
}
/* Re-read the clock at most once a minute, so the tint drifts too slowly to notice; with reduced motion it is read once when the
   player first comes outside and then holds. */
let clockGrade = null, clockAt = -Infinity;
const villageGrade = (motion, now) => {
  const ms = now.getTime();
  if (!clockGrade || (motion && ms - clockAt > 60000)) { clockGrade = dayGrade(now.getHours() + now.getMinutes() / 60); clockAt = ms; }
  return clockGrade;
};
export const hubGrade = (motion = true, now = new Date()) => current().room ? GRADE_ROOM : H.dusk ? GRADE_DUSK : villageGrade(motion, now);
/** Town restoration as the hub sees it now: which levels are cleared (for tests and the debug panel). */
export const hubRestoration = () => { const S = scene('village'), r = restoreOf(S); return {done: r.done ? r.done.split(',') : [], hidden: r.hidden.size, blocked: r.block.size, dusk: !!H.dusk}; };

/**
 * The village map panel (the minimap button in town): the baked 1/4 render of Oakhaven in a 4:3 frame,
 * with the places that matter marked by pack icons and labelled in the page's own font. Returns HTML;
 * main.js shows it. Inside a room the panel shows the village with the room's door marked.
 */
export function hubMapHtml(state) {
  const V = scene('village'), D = V.D, p = state.player, S = current();
  const at = S.room ? (returnDoor(S) ?? {x: p.x, y: p.y}) : p;
  const pct = (x, y) => `left:${(x / D.w * 100).toFixed(2)}%;top:${(y / D.h * 100).toFixed(2)}%`;
  const NAMES = {library: 'Library', guild: 'Adventurers’ Guild', smith: 'Weaponsmith', alchemist: 'Apothecary', home: 'Home', community: 'Village noticeboard'};
  const marks = [];
  for (const q of V.points) {
    const a = actionOf(q);
    if ((q.type === 'entrance' || q.type === 'board' && a === 'community') && NAMES[a] && !marks.some(m => m[2] === NAMES[a])) marks.push([q, a === 'library' ? MARK.library : a === 'home' ? MARK.door : MARK.shop, NAMES[a]]);
    else if (q.type === 'entrance' && q.props?.key === 'inn' && !marks.some(m => m[2] === 'Lantern Inn (food)')) marks.push([q, MARK.shop, 'Lantern Inn (food)']);
    else if (q.type === 'entrance' && q.props?.key === 'barracks' && !marks.some(m => m[2] === 'Barracks (companions)')) marks.push([q, MARK.door, 'Barracks (companions)']);
    else if (q.type === 'entrance' && q.props?.key === 'farmhouse' && !marks.some(m => m[2] === FARM_NAME)) marks.push([q, MARK.door, FARM_NAME]);
    else if (worldExit(q)) marks.push([q, MARK.exit, 'To the world map']);
  }
  const nearMark=marks.findIndex(([q])=>Math.hypot(q.x-at.x,q.y-at.y)<D.w*.025);
  const crowded=side=>marks.filter(([q],i)=>i!==nearMark&&(q.x-at.x)*side>0&&(q.x-at.x)*side<D.w*.22&&Math.abs(q.y-at.y)<D.h*.08).length;
  const nearest=side=>Math.min(Infinity,...marks.filter(([q],i)=>i!==nearMark&&(q.x-at.x)*side>0&&Math.abs(q.y-at.y)<D.h*.08).map(([q])=>Math.abs(q.x-at.x)));
  /* on a tie (the south gate: the Barracks on its left, the Apothecary on its right) the label goes to the roomier side */
  const labelLeft=at.x>D.w*.8||(at.x>D.w*.22&&(crowded(1)>crowded(-1)||crowded(1)===crowded(-1)&&crowded(1)>0&&nearest(1)<nearest(-1)));
  const labelEdge=at.y<D.h*.08?' pq-map-you-top':at.y>D.h*.92?' pq-map-you-bottom':'';
  return `<div class="pq-map-layout"><div class="pq-village-map" style="aspect-ratio:${D.w}/${D.h}">`
    + `<img src="assets/town/${D.map}" alt="Map of Oakhaven with numbered destinations" class="pq-map-image">`
    + marks.map(([q, n, label],i) => `<span class="pq-map-mark${i===nearMark?' pq-map-mark-here':''}" style="${pct(q.x,q.y)}" aria-label="${i+1}. ${label}">${i+1}</span>`).join('')
    + `<span class="pq-map-you${nearMark>=0?' pq-map-you-near':''}${labelLeft?' pq-map-you-left':''}${labelEdge}" style="${pct(at.x,at.y)}" aria-label="Your location">You</span></div>`
    + `<div class="pq-map-key"><h3>Places to visit</h3><ol>${marks.map(([, , label])=>`<li>${label}</li>`).join('')}</ol><p>Your hero is marked <strong>You</strong>.</p></div></div>`;
}

/**
 * The HUD's next step in Oakhaven, in the owner's slice order (GAME_DIRECTION.md, 8 Oct): the Library
 * first (a lesson and its quiz), then the Guild and the road out, then the open loop. HTML for #objective.
 */
export function hubObjective(save) {
  const studied = Object.values(save?.lessons ?? {}).some(l => l?.done || l?.quiz > 0) || Object.keys(save?.answers ?? {}).length > 0;
  const fought = Object.values(save?.levels ?? {}).some(l => l?.done || l?.plays > 0);
  const [title, line] = !studied ? ['Visit the Library', `West of the fountain: take your first lesson and quiz at the ${SUBJECTS.math.name} shelves`]
    : !fought ? ['Go to the Adventurers’ Guild', 'East of the fountain: choose your first adventure, then leave by the south gate']
    : ['Prepare for the journey', 'Choose your next adventure at the Guild<br>Study at the Library to unlock abilities'];
  return `<span class="quest-label">OAKHAVEN</span><b>${title}</b><small>${line}</small>`;
}

/**
 * Where the road home arrives: a walkable spot on the south road a few steps inside the gate (the exit
 * marked to="worldmap"), facing into town. The world map's Return Home puts the hero here.
 */
export function hubGate() {
  const V = scene('village'), q = V.points.find(worldExit) ?? V.points.find(o => o.type === 'spawn');
  /* far enough up the road that the "Leave Oakhaven" prompt is not waiting on arrival */
  /* (the exit now sits on the town side of the gatehouse: arrive a few steps up the road from it) */
  const y0 = Math.min(q.y - 60, V.D.h - 200);
  for (let r = 0; r <= 96; r += 4) for (const [dx, dy] of [[0, -r], [-r, 0], [r, 0], [0, r]]) {
    const x = q.x + dx, y = y0 + dy;
    if (!footBlocked(V, x, y) && !footBlocked(V, x, y - 8)) return {x, y, facing: 'up'};
  }
  return {x: q.sx, y: q.sy, facing: 'up'};
}
/** Arrive in Oakhaven at the south gate (call after world.town()). */
export function hubArriveAtGate(world) {
  const g = hubGate();
  hubPlace(world, 'village', g.x, g.y); H.acts = world.actions; H.save = world.save;
  world.player.direction = world.player.lastDirection = g.facing;
  if (H.save) visitPlace(H.save, townPlace('gate'));
  /* home from an adventure: the homecoming beat, once, when its `when` holds (e.g. Grubnak beaten) */
  const back = beatDue('return');
  if (back && !isPerson(back.speaker)) fire(back);
  return g;
}
