// Level stages: the baked Tiled maps of art/tiled/levels/<biome>.tmx (tools/bake-biome-maps.mjs, which bakes with
// the hub's own tools/bake-town.mjs). Everything on screen is downloaded pack art laid out in Tiled (docs/STYLE_GUIDE.md
// Rule 0); the only code-made visuals are the subtle per-biome colour grade and the vignette.
//
// API (gfx/world.js calls these around the actors):
//   drawStage(c, {level, biome, camX, width, t, motion})            before actors: ground, water, far-edge and road sprites
//   drawStageForeground(c, {level, biome, camX, width, t, motion})  after actors: near-verge sprites, grade, vignette
//   stageEntities(c, opts) -> [{y, draw}]  the map sprites standing INSIDE the walkable band, for callers that depth-sort
//     them with the actors; pass {interleave: true} to drawStage so it leaves them out.
// - Called with the stage camera transform applied (scale STAGE.zoom, integer translate): drawing is in world units.
//   A bare identity transform gets the same mapping applied here (review renderer, tests).
// - camX: integer left edge of the view. biome: the level's key; unknown keys fall back by family prefix.
// Per-level geometry (width, walkable band, collision grid, spawn, arena, secrets) is in dist/game/stage-maps.js.
import {STAGE} from '../../game/stage.js';
import {BIOMES, BIOME_KEYS, ALIASES, biomeKey} from './defs.js';
/* ambient motion: wind in the trees and plants, birds and butterflies on the far verge (gfx/motion.js) */
import {swayTable, drawSwayed, stepCritters, critterDraws, resetCritters} from '../motion.js';
let critLevel = null;
export {BIOMES, BIOME_KEYS, ALIASES, biomeKey};

const MAPS = {}, IMG = {}, PENDING = {};
let LOADER = null;
/* Node renderers and tests pass an image loader (URL -> Promise<image>); the browser uses Image(). */
export function setBiomeLoader(fn) { LOADER = fn; }
export const biomeAssetURL = (key, file) => new URL(`../../assets/biomes/${key}/${file}`, import.meta.url);
async function loadImg(url) {
  if (LOADER) return LOADER(url);
  if (typeof Image === 'undefined') return null;
  const im = new Image(); im.src = url.href; try { await im.decode(); } catch { return null; } return im;
}
/* Load a biome's map module and images. Resolves to the map data (null if the biome has no baked map). */
export function preloadBiome(key) {
  key = biomeKey(key);
  if (MAPS[key]) return Promise.resolve(MAPS[key]);
  if (PENDING[key]) return PENDING[key];
  PENDING[key] = (async () => {
    let D;
    try { D = (await import(biomeAssetURL(key, 'map.js').href)).default; } catch { delete PENDING[key]; return null; }
    const one = f => f ? loadImg(biomeAssetURL(key, f)).catch(() => null) : Promise.resolve(null);
    const [chunks, pages, tiles, cells] = await Promise.all([Promise.all(D.chunks.map(ch => one(ch[4]))), Promise.all(D.pages.map(p => one(p[0]))), one(D.anim.tiles), one(D.anim.cellsImage)]);
    IMG[key] = {chunks, pages, tiles, cells};
    /* sprites bucketed by 256-unit columns for cheap culling */
    const cols = new Map();
    D.sprites.forEach((s, i) => { for (let b = Math.floor(s[1] / 256); b <= Math.floor((s[1] + s[3]) / 256); b++) { if (!cols.has(b)) cols.set(b, []); cols.get(b).push(i); } });
    D._cols = cols;
    MAPS[key] = D; delete PENDING[key];
    return D;
  })();
  return PENDING[key];
}
export const biomeReady = key => !!MAPS[biomeKey(key)];
export const biomeMap = key => MAPS[biomeKey(key)] || null;

/* ---------- view ---------- */
export function stageView(o = {}, c = null) {
  const W = STAGE.viewW, H = STAGE.viewH;
  return {W, H, zoom: o.zoom || STAGE.zoom || (c?.canvas?.width || W) / W, top: o.camTop ?? STAGE.camTop ?? (STAGE.height - H), camX: Math.round(o.camX || 0)};
}
/* The world transform drawStage expects (for callers drawing actors on a bare canvas). */
export function applyStageTransform(c, o = {}) { const v = stageView(o, c); c.setTransform(v.zoom, 0, 0, v.zoom, Math.round(-v.camX * v.zoom + (o.shakeX || 0)), Math.round(-v.top * v.zoom + (o.shakeY || 0))); c.imageSmoothingEnabled = false; return v; }
function begin(c, o) {
  c.save();
  const m = c.getTransform ? c.getTransform() : null;
  /* an identity transform means the caller has not applied the camera (a camera at camX 0, zoom 1, top 0 is identity too) */
  if (m && m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1 && m.e === 0 && m.f === 0 && (o.camX || (STAGE.zoom || 1) !== 1 || STAGE.camTop)) applyStageTransform(c, o);
  c.imageSmoothingEnabled = false; c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
  return stageView(o, c);
}
const ready = im => !!im && (im.complete === undefined || im.complete) && (im.naturalWidth === undefined || im.naturalWidth > 0);
function frameAt(durs, ms) { let total = 0; for (const d of durs) total += d; let t = ((ms % total) + total) % total; for (let i = 0; i < durs.length; i++) { if (t < durs[i]) return i; t -= durs[i]; } return 0; }

/* ---------- drawing the baked map (same data format and rules as the hub, scenes/town.js) ---------- */
function drawGround(c, D, I, v, ms, motion) {
  const x0 = v.camX, x1 = v.camX + v.W, y0 = v.top, y1 = v.top + v.H;
  D.chunks.forEach(([x, y, w, h], i) => { if (x < x1 && x + w > x0 && y < y1 && y + h > y0 && ready(I.chunks[i])) c.drawImage(I.chunks[i], x, y); });
  const A = D.anim, T = D.tile;
  if (A.cells.length && ready(I.tiles) && ready(I.cells)) {
    const crop = (n, x, y) => { if (n >= 0) c.drawImage(I.cells, (n % A.cols) * T, Math.floor(n / A.cols) * T, T, T, x, y, T, T); };
    for (const r of A.cells) {
      const x = r[0] * T, y = r[1] * T;
      if (x >= x1 || x + T <= x0 || y >= y1 || y + T <= y0) continue;
      crop(r[2], x, y);
      for (let i = 3; i < r.length; i += 3) { const durs = A.durs[r[i]], f = motion === false ? r[i + 1] : (frameAt(durs, ms) + r[i + 1]) % durs.length; c.drawImage(I.tiles, f * T, r[i] * T, T, T, x, y, T, T); crop(r[i + 2], x, y); }
    }
  }
}
function visibleSprites(D, v) {
  const seen = new Set(), list = [];
  for (let b = Math.floor((v.camX - 8) / 256); b <= Math.floor((v.camX + v.W + 8) / 256); b++) for (const i of D._cols.get(b) ?? []) if (!seen.has(i)) { seen.add(i); const s = D.sprites[i]; if (s[1] < v.camX + v.W && s[1] + s[3] > v.camX && s[2] < v.top + v.H && s[2] + s[4] > v.top) list.push(i); }
  return list.sort((a, b) => a - b);
}
function drawSprite(c, D, I, s, ms, motion, top) {
  const [ei, x, y, w, h, , fl, d] = s, e = D.entries[ei], page = I.pages[e[0]];
  if (!ready(page)) return;
  const f = d >= 0 && motion !== false ? frameAt(D.durs[d], ms + x * 7 + y * 3) : 0, cols = e[7] || 1;
  const sx = e[1] + (f % cols) * e[3], sy = e[2] + Math.floor(f / cols) * e[4], rx = Math.round(x), ry = Math.round(y), rw = Math.round(w), rh = Math.round(h);
  const sway = ms && motion !== false && !(fl & 2) ? swayTable(D.name, D)?.get(ei) : null;
  if (sway && drawSwayed(c, page, sx, sy, e[3], e[4], rx, ry, rw, rh, fl & 1, sway, ms / 1000, top)) return;
  if (fl & 3) { c.save(); c.translate(rx + (fl & 1 ? rw : 0), ry + (fl & 2 ? rh : 0)); c.scale(fl & 1 ? -1 : 1, fl & 2 ? -1 : 1); c.drawImage(page, sx, sy, e[3], e[4], 0, 0, rw, rh); c.restore(); }
  else c.drawImage(page, sx, sy, e[3], e[4], rx, ry, rw, rh);
}
const inBand = s => s[5] > STAGE.floorTop + 2 && s[5] <= STAGE.floorBottom;
/* 25 Oct (phone, followups2): the phone camera may look past an arena's end so the hero stays clear of the touch
   buttons. Past the map's edge the view used to show the flat fallback colour as a strip; instead the edge of the map is
   mirrored outward (the same baked art, reflected at the edge) and fades softly into shade, so the end reads as the
   forest going on into the dark. Each gap is {a: the edge's x, view: the strip of map just inside it}. Desktop cameras
   never leave the map, so they get no gaps. */
function edgeGaps(v, width) {
  const out = []; if (!(width > 0)) return out;
  if (v.camX < 0) out.push({a: 0, side: -1, gap: -v.camX, view: {...v, camX: 0, W: Math.min(-v.camX, width)}});
  const r = v.camX + v.W - width; if (r > 0) out.push({a: width, side: 1, gap: r, view: {...v, camX: Math.max(0, width - r), W: Math.min(r, width)}});
  return out;
}
function mirrored(c, g, draw) { c.save(); c.translate(2 * g.a, 0); c.scale(-1, 1); draw(g.view); c.restore(); }

export function drawStage(c, o = {}) {
  const key = biomeKey(o.biome || o.level?.biome), def = BIOMES[key], D = MAPS[key], I = IMG[key];
  if (!D) preloadBiome(key);
  const v = begin(c, o), ms = (o.motion === false ? 0 : o.t || 0) * 1000;
  c.fillStyle = def?.fallback || '#253d32'; c.fillRect(v.camX - 2, v.top - 2, v.W + 4, v.H + 4);
  if (D && I) {
    drawGround(c, D, I, v, ms, o.motion);
    /* critters live on the far verge (above the band), so they sort in among the far-edge sprites; a bird that takes
       off is drawn after them, still behind every actor */
    if (o.level && o.level !== critLevel) { critLevel = o.level; resetCritters(key); }
    const still = o.motion === false, crit = o.critters === false ? [] : (stepCritters(key, o.hero, o.t || 0, !still), critterDraws(c, key, o.t || 0, !still, [v.camX, v.top, v.camX + v.W, v.top + v.H]));
    const ground = crit.filter(k => !k.air).sort((a, b) => a.y - b.y);
    let gi = 0;
    for (const i of visibleSprites(D, v)) { const s = D.sprites[i]; if (s[5] > STAGE.floorBottom) continue; if (o.interleave && inBand(s)) continue; while (gi < ground.length && ground[gi].y < s[5]) ground[gi++].draw(); drawSprite(c, D, I, s, ms, o.motion, v.top); }
    while (gi < ground.length) ground[gi++].draw();
    for (const k of crit) if (k.air) k.draw();
    for (const g of edgeGaps(v, o.width || D.width)) mirrored(c, g, mv => { drawGround(c, D, I, mv, ms, o.motion); for (const i of visibleSprites(D, mv)) { const sp = D.sprites[i]; if (sp[5] <= STAGE.floorBottom && !(o.interleave && inBand(sp))) drawSprite(c, D, I, sp, ms, o.motion, mv.top); } });
  }
  c.restore();
}
/* Map sprites inside the walkable band, as depth-sortable entries (for callers that interleave them with actors). */
export function stageEntities(c, o = {}) {
  const key = biomeKey(o.biome || o.level?.biome), D = MAPS[key], I = IMG[key];
  if (!D || !I) return [];
  const v = stageView(o, c), ms = (o.motion === false ? 0 : o.t || 0) * 1000;
  return visibleSprites(D, v).map(i => D.sprites[i]).filter(inBand).map(s => ({y: s[5], draw: () => drawSprite(c, D, I, s, ms, o.motion, v.top)}));
}
export function drawStageForeground(c, o = {}) {
  const key = biomeKey(o.biome || o.level?.biome), def = BIOMES[key], D = MAPS[key], I = IMG[key];
  const v = begin(c, o), ms = (o.motion === false ? 0 : o.t || 0) * 1000;
  if (D && I) for (const i of visibleSprites(D, v)) { const s = D.sprites[i]; if (s[5] > STAGE.floorBottom) drawSprite(c, D, I, s, ms, o.motion, v.top); }
  /* past the map's edge: the mirrored near-verge sprites, then a soft fade into shade toward the screen's side */
  for (const g of edgeGaps(v, o.width || D?.width)) {
    if (D && I) mirrored(c, g, mv => { for (const i of visibleSprites(D, mv)) { const sp = D.sprites[i]; if (sp[5] > STAGE.floorBottom) drawSprite(c, D, I, sp, ms, o.motion, mv.top); } });
    const x0 = g.a, x1 = g.a + g.side * g.gap;
    if (c.createLinearGradient) { const f = c.createLinearGradient(x0, 0, x1, 0); f.addColorStop(0, 'rgba(8,12,10,0)'); f.addColorStop(1, 'rgba(8,12,10,.62)'); c.fillStyle = f; c.fillRect(Math.min(x0, x1), v.top, g.gap, v.H); }
  }
  /* the only code-made visuals (Rule 0): a subtle colour grade and a vignette */
  if (o.post === false) { c.restore(); return; }
  if (def?.grade?.a > 0) { c.globalCompositeOperation = def.grade.op || 'soft-light'; c.globalAlpha = def.grade.a; c.fillStyle = def.grade.c; c.fillRect(v.camX, v.top, v.W, v.H); c.globalAlpha = 1; c.globalCompositeOperation = 'source-over'; }
  if (def?.vignette && c.createRadialGradient) { const cx = v.camX + v.W / 2, cy = v.top + v.H * .5, g = c.createRadialGradient(cx, cy, v.H * .42, cx, cy, v.W * .72); g.addColorStop(0, 'rgba(12,12,20,0)'); g.addColorStop(1, `rgba(12,12,20,${def.vignette})`); c.fillStyle = g; c.fillRect(v.camX, v.top, v.W, v.H); }
  c.restore();
}
/* v2:perf (additive) -- the stages held in memory, and letting one go (core/loader.js keeps the current level's and
   the next likely one's); preloadBiome() loads a released stage again on demand. */
export const loadedBiomes = () => Object.keys(MAPS);
export function releaseBiome(key) { key = biomeKey(key); if (!MAPS[key]) return false; delete MAPS[key]._cols; delete MAPS[key]; delete IMG[key]; return true; }
