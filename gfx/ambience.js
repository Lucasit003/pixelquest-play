/* Chapter ambience on a stage (owner, 14 Oct: "make the game look better"): light code-made particles over the baked
   Tiled maps, the same kind of effect as the grade, vignette and the hub's motes. No characters, props or buildings
   are drawn here. Elderwood: fireflies and drifting leaves. Emberkeep: rising embers, ash and a heat glow along the
   floor. Veilmoor: slow mist banks and pale motes. Particles are stateless (position is a pure function of index and
   time), so nothing is allocated per frame, and the count is capped. Reduced motion freezes them in place. */
export const AMBIENT_CAP = 40;
const r = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
/* kind: [count, colours]. Counts are for a 480 px wide view and scale down on narrower (phone) views. */
export const AMBIENCE = {
  elderwood: {firefly: [14, ['#fbffc0', '#e4ff9a']], leaf: [9, ['#f0c860', '#b8dc68', '#ec9a50']], glow: null, mist: 0},
  emberkeep: {ember: [22, ['#ffd27a', '#ff9a3c', '#ff6a2a']], ash: [9, ['#b8aca4', '#8a7f7a']], glow: '#ff7a30', mist: 0},
  veilmoor: {mote: [16, ['#d8c8ff', '#a8e4ff', '#f0e8ff']], firefly: [5, ['#b8a8ff']], glow: null, mist: 3},
};
const FAMILY = {forest: 'elderwood', lava: 'emberkeep', mystic: 'veilmoor', elderwood: 'elderwood', emberkeep: 'emberkeep', veilmoor: 'veilmoor'};
export const ambienceFor = chapter => AMBIENCE[FAMILY[chapter]] || null;
/* How many of each kind to draw in a view W px wide; never more than AMBIENT_CAP in all. */
export function ambientCounts(def, W = 480) {
  if (!def) return {};
  const k = Math.max(.4, Math.min(1, W / 480)), out = {};
  let left = AMBIENT_CAP;
  for (const [kind, v] of Object.entries(def)) { if (!Array.isArray(v)) continue; const n = Math.min(left, Math.round(v[0] * k)); out[kind] = n; left -= n; }
  return out;
}
/* One particle in view space: {x, y, a (alpha), s (size)}. camX gives a little parallax so the air moves with the world. */
export function particleAt(kind, i, t, W, H, camX = 0, motion = true) {
  const T = motion ? t : 0, seed = i * 7.31 + kind.length * 13.7, px = -camX * .35;
  const wrap = (v, m) => ((v % m) + m) % m;
  const bx = r(seed) * (W + 40), by = r(seed + 1.9) * H, sp = .5 + r(seed + 3.3);
  if (kind === 'firefly') {
    const x = wrap(bx + px + Math.sin(T * .5 * sp + i) * 18, W + 40) - 20, y = by * .8 + H * .1 + Math.sin(T * .7 * sp + i * 2.1) * 10;
    return {x, y, a: motion ? .25 + .75 * Math.max(0, Math.sin(T * 1.6 * sp + i * 1.3)) : .6, s: 2};
  }
  if (kind === 'leaf') {
    const fall = T * (9 + sp * 7), x = wrap(bx + px + fall * .8 + Math.sin(T * 1.3 * sp + i) * 9, W + 40) - 20, y = wrap(by + fall, H + 20) - 10;
    return {x, y, a: .85, s: 3, flip: motion ? Math.sin(T * 3 * sp + i) > 0 : false};
  }
  if (kind === 'ember') {
    const rise = T * (16 + sp * 18), x = wrap(bx + px + Math.sin(T * 1.1 * sp + i) * 7, W + 40) - 20, y = wrap(by - rise, H + 20) - 10;
    return {x, y, a: Math.min(1, y / (H * .6)) * (motion ? .55 + .45 * Math.sin(T * 9 * sp + i) : .8), s: r(seed + 5) > .75 ? 2 : 1};
  }
  if (kind === 'ash') {
    const fall = T * (5 + sp * 5), x = wrap(bx + px + T * 4 + Math.sin(T * .8 + i) * 6, W + 40) - 20, y = wrap(by + fall, H + 20) - 10;
    return {x, y, a: .45, s: 1};
  }
  /* mote */
  const rise = T * (3 + sp * 4), x = wrap(bx + px * .6 + Math.sin(T * .4 * sp + i) * 12, W + 40) - 20, y = wrap(by - rise, H + 20) - 10;
  return {x, y, a: motion ? .35 + .4 * Math.max(0, Math.sin(T * 1.2 * sp + i * 1.7)) : .5, s: r(seed + 6) > .8 ? 2 : 1};
}
const dots = new Map();
/* A soft round glow in one colour, baked once per colour, for fireflies, embers and motes. */
function glowDot(col) {
  if (dots.has(col)) return dots.get(col);
  dots.set(col, false);
  if (typeof document === 'undefined') return false;
  const cv = document.createElement('canvas'); cv.width = cv.height = 15; const g = cv.getContext('2d');
  if (!g?.createRadialGradient) return false;
  const gr = g.createRadialGradient(7.5, 7.5, 0, 7.5, 7.5, 7.5); gr.addColorStop(0, col); gr.addColorStop(.3, col + '77'); gr.addColorStop(1, col + '00');
  g.fillStyle = gr; g.fillRect(0, 0, 15, 15); dots.set(col, cv); return cv;
}
/* Draw in view space (identity transform, 0..W x 0..H). */
export function drawAmbience(c, {chapter, t = 0, camX = 0, W = 480, H = 270, motion = true} = {}) {
  const def = ambienceFor(chapter); if (!def) return 0;
  const counts = ambientCounts(def, W); let drawn = 0;
  c.save();
  if (def.glow && c.createLinearGradient) {
    /* heat rising off the floor: a warm band along the bottom that breathes slowly */
    const a = motion ? .16 + .05 * Math.sin(t * 1.3) : .16, g = c.createLinearGradient(0, H, 0, H * .55);
    g.addColorStop(0, def.glow); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.globalCompositeOperation = 'screen'; c.globalAlpha = a; c.fillStyle = g; c.fillRect(0, H * .55, W, H * .45); c.globalCompositeOperation = 'source-over';
  }
  if (def.mist && c.createRadialGradient) {
    for (let i = 0; i < def.mist; i++) {
      const T = motion ? t : 0, x = (((r(i + 40) * W * 1.6 + T * (4 + i * 2) - camX * .2) % (W * 1.6)) + W * 1.6) % (W * 1.6) - W * .3, y = H * (.45 + i * .17), rx = W * .45;
      c.save(); c.translate(x, y); c.scale(1, .28); const g = c.createRadialGradient(0, 0, 0, 0, 0, rx);
      g.addColorStop(0, 'rgba(206,196,240,.16)'); g.addColorStop(1, 'rgba(206,196,240,0)'); c.globalAlpha = 1; c.fillStyle = g; c.fillRect(-rx, -rx, rx * 2, rx * 2); c.restore();
    }
  }
  for (const [kind, n] of Object.entries(counts)) {
    const cols = def[kind][1];
    for (let i = 0; i < n; i++) {
      const p = particleAt(kind, i, t, W, H, camX, motion); if (p.a <= .02) continue;
      const x = Math.round(p.x), y = Math.round(p.y), col = cols[i % cols.length];
      const glow = kind === 'firefly' || kind === 'ember' || kind === 'mote' ? glowDot(col) : null;
      if (glow && (kind === 'firefly' || kind === 'ember' || kind === 'mote')) { c.globalCompositeOperation = 'screen'; c.globalAlpha = Math.min(1, p.a * (kind === 'ember' ? 1.1 : kind === 'mote' ? .9 : 1.2)); c.drawImage(glow, x - 7 + (p.s >> 1), y - 7 + (p.s >> 1)); c.globalCompositeOperation = 'source-over'; }
      c.globalAlpha = p.a; c.fillStyle = col;
      if (kind === 'leaf') c.fillRect(x, y, p.flip ? 2 : 3, p.flip ? 3 : 2); else c.fillRect(x, y, p.s, p.s);
      drawn++;
    }
  }
  c.restore();
  return drawn;
}
