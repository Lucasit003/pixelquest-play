/* Ambient motion on the baked maps (owner, 15 Oct: "add more movement to things"), shared by the hub (scenes/town.js)
   and the stages (gfx/biomes/index.js). Two things, both read from assets/motion.js (tools/bake-motion.mjs):
   - sway: trees lean and plants nod in a wind that rolls across the map. The sprite is drawn in horizontal bands, each
     shifted a whole pixel, so the pixel grid never breaks (no rotation, no sub-pixel smear); the base never moves.
   - critters: the ERW Grass Land birds and butterflies (assets/env/critters.webp, tools/bake-critters.mjs). Birds peck
     on open ground, lift off and fly away when the hero comes near, and fly back and land once the hero has gone.
     Butterflies flutter round their flowers. On a stage they live on the far verge above the fighting band only.
   Emberkeep and Veilmoor (24 Oct) get the Gothicvania crow for the birds, LuizMelo bats and PixelLab moths for the
   butterflies (a table variant that is a name instead of a number).
   Reduced motion (state.motion === false): nothing sways, birds stand still and stay, butterflies and moths rest, bats stay in. */
import MOTION from '../assets/motion.js';
import CRIT from '../assets/env/critters.js';

/* AMBIENT.on = false turns all of it off (the perf comparison in tools/perf-ambient.mjs flips it) */
export const AMBIENT = {on: true};
const tables = new WeakMap();
/* The sway table for a baked scene, or null when there is none or the scene was re-baked since the table was made. */
export function swayTable(key, D) {
  if (!D || !AMBIENT.on) return null;
  if (tables.has(D)) return tables.get(D);
  const m = MOTION.scenes[key], ok = m && m.sig[0] === D.entries.length && m.sig[1] === D.sprites.length;
  const tab = ok ? new Map(Object.entries(m.sway).map(([k, v]) => [+k, v])) : null;
  tables.set(D, tab);
  return tab;
}
/* Wind at (x, time): a slow gust envelope rolling west to east over a steadier sway. -1..1. */
export const wind = (t, x, kind) => {
  const g = .72 + .28 * Math.sin(t * .23 - x * .0021);
  return g * (kind === 1 ? Math.sin(t * 1.15 - x * .006) * .8 + Math.sin(t * 2.6 + x * .013) * .2 : Math.sin(t * 1.8 - x * .009) * .75 + Math.sin(t * 3.7 + x * .021) * .25);
};
/* Whole-pixel lean of each band: [destRow0, destRow1, offset] runs from the top of the sprite down. The lean is
   quantised to eighths and the bands cached per (kind, amp, height, lean), so a frame costs a lookup per sprite. */
const bandCache = new Map();
export function swayBands(spec, rh, t, x) {
  const [kind, amp] = spec, q = Math.round(Math.max(-1, Math.min(1, wind(t, x, kind) * (kind === 1 ? 1 : 1.5))) * amp * 8), key = (kind * 4 + amp) * 1e6 + rh * 100 + q + 50;
  let out = bandCache.get(key);
  if (out) return out;
  /* a tree leans from 80% of its height up, so the lower crown still moves on a stage whose camera cuts the tops off */
  const s = q / 8, hold = kind === 1 ? .8 : .55, ex = kind === 1 ? 1 : 1.3;
  out = [];
  let r0 = 0, cur = null;
  for (let r = 0; r <= rh; r++) {
    const o = r === rh ? NaN : Math.round(s * Math.max(0, 1 - r / (rh * hold)) ** ex) || 0;
    if (cur === null) cur = o;
    if (o !== cur) { out.push([r0, r, cur]); r0 = r; cur = o; }
  }
  if (bandCache.size > 20000) bandCache.clear();
  bandCache.set(key, out);
  return out;
}
/* Draw one frame (page sx,sy,sw,sh -> rx,ry,rw,rh, already whole pixels) swayed. Returns false when it would not
   move this frame, so the caller draws it plainly. flipH mirrors as the bakes do. */
/* `top` (optional): the top edge of the view. A crown the camera cuts leans from its visible top, so the part on screen
   moves (stage cameras never pan vertically, so this never changes under a standing tree). */
export function drawSwayed(c, page, sx, sy, sw, sh, rx, ry, rw, rh, flipH, spec, t, top = -1e9) {
  const cut = Math.max(0, Math.min(rh - 8, top - ry)), bands = swayBands(spec, rh - cut, t, rx + rw / 2);
  if (bands.length === 1 && bands[0][2] === 0) return false;
  const k = sh / rh;
  if (cut) c.drawImage(page, sx, sy, sw, Math.round(cut * k), rx, ry, rw, cut);
  for (let [a, b, o] of bands) {
    a += cut; b += cut;
    const s0 = Math.round(a * k), s1 = Math.round(b * k);
    if (s1 <= s0) continue;
    if (flipH) { c.save(); c.translate(rx + rw + o, ry); c.scale(-1, 1); c.drawImage(page, sx, sy + s0, sw, s1 - s0, 0, a, rw, b - a); c.restore(); }
    else c.drawImage(page, sx, sy + s0, sw, s1 - s0, rx + o, ry + a, rw, b - a);
  }
  return true;
}

/* ---------------- critters ---------------- */
let atlas = null;
const sheet = () => { if (!atlas && typeof Image !== 'undefined') { atlas = new Image(); atlas.decoding = 'async'; atlas.src = new URL('../assets/env/critters.webp', import.meta.url).href; } return atlas && atlas.complete !== false && atlas.naturalWidth > 0 ? atlas : null; };
const herds = new Map();
const rnd = (a, b) => { const v = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453; return v - Math.floor(v); };
/* The critters of a scene (state is kept per scene, so a bird that flew off stays off while the hero is near). */
export function critters(key) {
  if (herds.has(key)) return herds.get(key);
  const m = MOTION.scenes[key];
  const h = m ? {birds: m.birds.map(([x, y, v, f], i) => ({x, y, v, face: f ? -1 : 1, st: 'idle', t0: -rnd(x, y) * 4, ph: rnd(y, x) * 9, i})),
    flies: m.flies.map(([x, y, v]) => ({x, y, v, ph: rnd(x, y) * 20}))} : null;
  herds.set(key, h);
  return h;
}
export const resetCritters = key => herds.delete(key);
const LIFT = .49, FLY = 2.6, AWAY = 7, IN = 1.7, LAND = .64, NEAR = 72, FAR = 260;
/* Advance every bird of a scene against the hero (x, y) at time t (seconds). */
export function stepCritters(key, hero, t, motion = true) {
  const h = critters(key); if (!h || !motion) return h;
  for (const b of h.birds) {
    const d = hero ? Math.hypot(hero.x - b.x, hero.y - b.y) : 1e9, e = t - b.t0;
    if (b.st === 'idle' && d < NEAR) { b.st = 'lift'; b.t0 = t; b.dir = hero.x > b.x ? -1 : hero.x < b.x ? 1 : (b.i % 2 ? 1 : -1); b.face = b.dir; }
    else if (b.st === 'lift' && e >= LIFT) { b.st = 'fly'; b.t0 = t; }
    else if (b.st === 'fly' && e >= FLY) { b.st = 'away'; b.t0 = t; }
    else if (b.st === 'away' && e >= AWAY && d > FAR) { b.st = 'in'; b.t0 = t; b.face = -b.dir; }
    else if (b.st === 'in' && e >= IN) { b.st = 'land'; b.t0 = t; }
    else if (b.st === 'land' && e >= LAND) { b.st = 'idle'; b.t0 = t; }
  }
  return h;
}
function blit(c, img, name, anim, f, x, y, face) {
  const C = CRIT[name], a = C.anims[anim], [fx, fy] = a.frames[f % a.frames.length], X = Math.round(x - (face < 0 ? C.w - C.ax : C.ax)), Y = Math.round(y - C.ay);
  if (face < 0) { c.save(); c.translate(X + C.w, Y); c.scale(-1, 1); c.drawImage(img, fx, fy, C.w, C.h, 0, 0, C.w, C.h); c.restore(); }
  else c.drawImage(img, fx, fy, C.w, C.h, X, Y, C.w, C.h);
}
/* Where a bird is and what it shows: {x, y, anim, f, air (true once it is off the ground)} or null when away. */
export function birdPose(b, t, motion = true) {
  if (!motion) return {x: b.x, y: b.y, anim: 'idle', f: 8, air: false};
  const e = t - b.t0, ms = e * 1000;
  if (b.st === 'idle') {
    /* a peck-and-flutter now and then, resting in between */
    const cyc = 2.25 + 2.5 + (b.ph % 3), k = ((t + b.ph) % cyc + cyc) % cyc;
    return {x: b.x, y: b.y, anim: 'idle', f: k < 2.25 ? Math.floor(k / .15) : 8, air: false};
  }
  if (b.st === 'lift') return {x: b.x, y: b.y - Math.max(0, e - .2) * 14, anim: 'lift', f: Math.min(6, Math.floor(ms / 70)), air: false};
  if (b.st === 'fly') return {x: b.x + b.dir * (70 * e + 18 * e * e), y: b.y - 4 - 26 * e - 22 * e * e, anim: 'lift', f: 3 + Math.floor(ms / 70) % 4, air: true};
  if (b.st === 'in') { const p = Math.min(1, e / IN), q = 1 - (1 - p) * (1 - p); return {x: b.x + b.dir * 150 * (1 - q), y: b.y - 120 * (1 - q) - 4 * q, anim: 'lift', f: 3 + Math.floor(ms / 70) % 4, air: true}; }
  if (b.st === 'land') return {x: b.x, y: b.y - Math.max(0, 4 - e * 12), anim: 'land', f: Math.min(7, Math.floor(ms / 80)), air: false};
  return null;
}
/* Depth-sortable draws for a scene's critters inside the view [x0, y0, x1, y1]: ground ones carry their feet y,
   airborne birds come back with air: true for the caller to draw over (hub) or behind (stage) everything. */
export function critterDraws(c, key, t, motion = true, view = null) {
  const h = critters(key), img = sheet(); if (!h || !img || !AMBIENT.on) return [];
  const out = [], inView = (x, y, m = 40) => !view || (x > view[0] - m && x < view[2] + m && y > view[1] - m && y < view[3] + 80);
  for (const b of h.birds) {
    const p = birdPose(b, t, motion); if (!p || !inView(p.x, p.y)) continue;
    const name = typeof b.v === 'string' ? b.v : 'bird' + b.v;
    out.push({y: b.y, air: p.air, draw: () => blit(c, img, name, p.anim, p.f, p.x, p.y, b.face)});
  }
  for (const f of h.flies) {
    if (f.v === 'bat') {
      /* a bat flits in wide uneven loops high over the far side, never resting; under reduced motion it is not out */
      if (!motion) continue;
      const T = t + f.ph, x = f.x + 46 * Math.sin(T * .9) + 14 * Math.sin(T * 2.3), y = f.y - 34 + 9 * Math.sin(T * 1.4) + 4 * Math.sin(T * 3.1), vx = 41.4 * Math.cos(T * .9) + 32.2 * Math.cos(T * 2.3);
      if (!inView(x, y)) continue;
      out.push({y: f.y, air: false, draw: () => blit(c, img, 'bat', 'fly', Math.floor(T * 1000 / 70), x, y, vx < 0 ? -1 : 1)});
      continue;
    }
    const T = motion ? t + f.ph : f.ph, dx = 16 * Math.sin(T * .7) + 8 * Math.sin(T * 1.9), dy = 6 * Math.sin(T * 1.1), vx = 11.2 * Math.cos(T * .7) + 15.2 * Math.cos(T * 1.9);
    const x = f.x + (motion ? dx : 0), y = f.y + (motion ? dy : 0), bob = motion ? Math.round(Math.sin(T * 5.3) * 2) : 0;
    if (!inView(x, y - 60)) continue;
    /* a butterfly frame carries its own ground shadow far below it; a moth has none, so it is lifted to the same height */
    const name = typeof f.v === 'string' ? f.v : 'butterfly' + f.v, up = f.v === 'moth' ? 44 : 0;
    out.push({y, air: false, draw: () => blit(c, img, name, 'fly', motion ? Math.floor(T * 1000 / CRIT[name].anims.fly.ms) : 0, x, y + bob - up, vx < 0 ? -1 : 1)});
  }
  return out;
}

/* Leaves drifting down from the broad crowns in view (PixelLab leaves, art/pixellab/ambient): more than half the trees
   let a leaf go every four to seven seconds; it tumbles down with the wind and fades before it reaches the ground. Stateless
   (a pure function of the sprite and the time), never more than LEAF_CAP at once, none under reduced motion. */
export const LEAF_CAP = 8;
export function leafDraws(c, key, D, list, t, motion = true) {
  const tab = motion ? swayTable(key, D) : null, img = sheet(); if (!tab || !img) return [];
  const out = [];
  for (const i of list) {
    const s = D.sprites[i], sp = tab.get(s[0]); if (!sp || sp[0] !== 1 || sp[1] < 2) continue;
    const h1 = rnd(s[1], s[2]); if (h1 > .6) continue;
    const P = 4 + rnd(s[2], s[1]) * 3.5, u = ((t + h1 * 40) % P + P) % P, fall = 3.4;
    if (u > fall) continue;
    const cyc = Math.floor((t + h1 * 40) / P), x0 = s[1] + s[3] * (.25 + .5 * rnd(cyc, i)), y0 = s[2] + s[4] * (.15 + .25 * rnd(i, cyc));
    const x = x0 + wind(t, x0, 1) * 6 * u + 10 * u + Math.sin(u * 2.4 + h1 * 6) * 5, y = y0 + 16 * u, a = Math.min(1, u / .4, (fall - u) / .6);
    const name = 'leaf' + (1 + Math.floor(rnd(i, 7) * 3));
    out.push({y, draw: () => { c.save(); c.globalAlpha = a; blit(c, img, name, 'tumble', Math.floor((u + h1) * 6), x, y, 1); c.restore(); }});
    if (out.length >= LEAF_CAP) break;
  }
  return out;
}
