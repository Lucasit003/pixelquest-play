/* ownernotes-a-nov1 (owner, 1 Nov: "Light coming through the window needs to be fixed. Make it look better."): the light that comes
   in through a room's window, as a code light effect (the brief allows code for light). The old Home had two loose pack decals, a pale
   square on the wall and a separate patch on the floor, that did not line up with the window or with each other (both are removed from
   art/tiled/interiors/home.tmx and from the baked ground). Now the light is cast from the window's own glass: each lit floor pixel looks
   back up along one sun ray and is lit only if that ray passes through a pane, so the patch on the floor has the window's shape (four
   panes, the arched top, the cross bars as shadow lines) and lies where the sun puts it; the soft shaft in the air between them is the
   same rays, denser where more of them cross. It is computed once per sun position (the angle follows the player's clock and moves only
   every 20 minutes, so it never flickers) into a small canvas, and drawn under the furniture and the figures, so nothing standing in the
   room is washed over and the window frame sits on top of where the shaft starts.
   Geometry is in room units (the baked room's pixels). The wall meets the floor at `floor`; a point on the wall at height z above that
   line casts to the floor z*k further down the screen and z*k*m to the side. */
export const WINDOWS = {
  /* Home's arched four-pane window (window_windows1_8 at 197,89): glass x 206-241, y 98-124, a round top (centre 223.5,112, r 18),
     the centre mullion x 220-227 and the transom y 112-115 */
  home: [{cx: 223.5, top: 97.5, bottom: 124.5, half: 17.5, archY: 112, archR: 18, mullion: 4, transom: [111.5, 115.5], floor: 160}],
};

/** Is room point (x,y) on the window's glass (not its frame, mullion or transom)? */
export function glassAt(w, x, y) {
  const dx = Math.abs(x - w.cx);
  if (y < w.top || y > w.bottom || dx > w.half || dx < w.mullion) return false;
  if (y >= w.transom[0] && y <= w.transom[1]) return false;
  return y >= w.archY || (x - w.cx) ** 2 + (y - w.archY) ** 2 <= w.archR ** 2;
}

const mix = (a, b, k) => a.map((v, i) => v + (b[i] - v) * k);
const ramp = (h, a, b) => { const k = Math.min(1, Math.max(0, (h - a) / (b - a))); return k * k * (3 - 2 * k); };
const DAY = [255, 216, 146], GOLD = [255, 170, 84], MOON = [140, 170, 255];
/** The sun (or moon) through the window at a local hour (0-24): side slant m, length k, colour and strength. Pure, for tests.
    Morning light leans left and afternoon light right; the golden hour is warmer and longer; at night a faint cool moonlight. */
export function sunAt(hour) {
  const h = ((hour % 24) + 24) % 24;
  if (h >= 7 && h < 16) return {m: -.35 + .7 * (h - 7) / 9, k: 1, rgb: DAY, a: 1};
  if (h >= 16 && h < 19) { const g = ramp(h, 16, 19); return {m: .35 + .15 * g, k: 1 + .35 * g, rgb: mix(DAY, GOLD, g), a: 1}; }
  if (h >= 19 && h < 21) { const g = ramp(h, 19, 21); return {m: .5 - .3 * g, k: 1.35 - .15 * g, rgb: mix(GOLD, MOON, g), a: 1 - .55 * g}; }
  if (h >= 4 && h < 7) { const g = ramp(h, 4, 7); return {m: .2 - .55 * g, k: 1.2 - .2 * g, rgb: mix(MOON, DAY, g), a: .45 + .55 * g}; }
  return {m: .2, k: 1.2, rgb: MOON, a: .45};
}
/* the sun's position as the cache sees it: 20-minute steps */
export const sunStep = hour => Math.floor(((hour % 24) + 24) % 24 * 3) / 3;

/** The light field of window w under sun s: a box (x0,y0,w,h) in room units and, per pixel, floor (0..1, the lit patch, 2x2
    supersampled for a soft one-pixel edge) and air (0..1, the shaft). Pure, for tests. */
export function lightField(w, s) {
  const {m, k} = s, F = w.floor, zTop = F - w.top, zBot = F - w.bottom;
  const xs = [w.cx - w.half, w.cx + w.half, w.cx - w.half + m * k * zTop, w.cx + w.half + m * k * zTop];
  const x0 = Math.floor(Math.min(...xs)) - 2, x1 = Math.ceil(Math.max(...xs)) + 2, y0 = Math.floor(w.top) - 1, y1 = Math.ceil(F + k * zTop) + 2;
  const W = x1 - x0, H = y1 - y0, floor = new Float32Array(W * H), air = new Float32Array(W * H);
  const up = 1 + 1 / k, sMax = k * zTop + 1;
  let peak = 0;
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const X = x0 + i + .5, Y = y0 + j + .5;
    /* the floor: look back up the ray to the wall */
    if (Y > F + k * zBot - 1 && Y < F + k * zTop + 1) {
      let n = 0;
      for (const [ox, oy] of [[-.25, -.25], [.25, -.25], [-.25, .25], [.25, .25]]) { const z = (Y + oy - F) / k; if (z > 0 && glassAt(w, X + ox - m * (Y + oy - F), F - z)) n++; }
      floor[j * W + i] = n / 4;
    }
    /* the air: every ray through this pixel, from the glass (s = 0) down to where it meets the floor; nearer the window is brighter */
    let d = 0;
    for (let t = Math.max(0, Y - F); t < sMax; t += 1) if (glassAt(w, X - m * t, Y - t * up)) d += 1 - .55 * t / sMax;
    air[j * W + i] = d;
    if (d > peak) peak = d;
  }
  if (peak > 0) for (let i = 0; i < air.length; i++) air[i] /= peak;
  return {x0, y0, w: W, h: H, floor, air};
}

/* strength of each part on screen: the floor patch, and the shaft (kept faint so it never reads as a solid shape) */
export const FLOOR_A = .3, AIR_A = .18;
const cache = new Map();
function lightCanvas(key, w, s) {
  const id = key + ':' + s.m.toFixed(3) + ':' + s.k.toFixed(3);
  let cv = cache.get(id);
  if (cv !== undefined) return cv;
  const f = lightField(w, s);
  cv = document.createElement('canvas'); cv.width = f.w; cv.height = f.h;
  /* a canvas without pixel access (a test DOM) draws no light, and is remembered as such */
  const g = cv.getContext?.('2d'), img = g?.createImageData?.(f.w, f.h), [r, gg, b] = s.rgb;
  if (!img?.data) { cache.set(id, null); return null; }
  for (let i = 0; i < f.floor.length; i++) {
    /* the shaft in four soft steps, so it reads as pixel-art light rather than a smooth airbrush */
    const air = Math.round(f.air[i] ** .8 * 4) / 4, a = Math.min(1, f.floor[i] * FLOOR_A + air * AIR_A) * s.a;
    img.data[i * 4] = r; img.data[i * 4 + 1] = gg; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = Math.round(a * 255);
  }
  g.putImageData(img, 0, 0);
  cv.x0 = f.x0; cv.y0 = f.y0;
  if (cache.size > 24) cache.clear();
  cache.set(id, cv);
  return cv;
}

/* the clock is read at most once a minute (with reduced motion, once) */
let hourAt = -Infinity, hourNow = 12;
/** Draw room `key`'s window light (nothing for a room without one), in room units, under the furniture. */
export function drawWindowLight(c, key, motion = true, now = new Date()) {
  const list = WINDOWS[key];
  if (!list) return;
  const ms = now.getTime();
  if (hourAt === -Infinity || (motion && ms - hourAt > 60000)) { hourNow = now.getHours() + now.getMinutes() / 60; hourAt = ms; }
  const s = sunAt(sunStep(hourNow));
  c.save();
  c.globalCompositeOperation = 'lighter';
  for (const w of list) { const cv = lightCanvas(key, w, s); if (cv) c.drawImage(cv, cv.x0, cv.y0); }
  c.restore();
}
