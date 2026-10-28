/* townchunk-oct28: which of the village's ground chunks an arrival view needs. Pure and import-free, shared by
   core/asset-groups.js (what Begin and every arrival wait for), scenes/town.js (what it streams first) and the tests.
   The village no longer waits for all of its ground chunks: an arrival (spawn, the south gate home from a level, a
   room's door, a fast-travel spot) waits for the core (sprite pages, water, overview, effects) and the chunks under
   the arrival view; scenes/town.js loads the rest behind it, nearest first, and draws the overview where a chunk is
   still on its way.
   TOWN_VIEW is the largest camera (game/stage.js setView caps it at 480x270). The margin covers the camera's ease
   from the hero (placeAt puts it on him, hubUpdate eases it 20 px up) and the first steps of a walk. A smaller phone
   camera, clamped the same way, always sits inside this rectangle. */
export const TOWN_VIEW = Object.freeze({w: 480, h: 270, margin: 64});
/* the camera rectangle drawHub would use for a camera at (x, y-10), clamped to the map's bounds, grown by the margin */
export function townViewRect(x, y, D, V = TOWN_VIEW) {
  const [bx0, by0, bx1, by1] = D.bounds ?? [0, 0, D.w, D.h];
  const fit = (lo, hi, v, at) => hi - lo <= v ? Math.round((lo + hi - v) / 2) : Math.round(Math.max(lo, Math.min(hi - v, at - v / 2)));
  const ox = fit(bx0, bx1, V.w, x), oy = fit(by0, by1, V.h, y - 10), m = V.margin;
  return [ox - m, oy - m, ox + V.w + m, oy + V.h + m];
}
export const chunkHits = ([cx, cy, cw, ch], [x0, y0, x1, y1]) => cx < x1 && cx + cw > x0 && cy < y1 && cy + ch > y0;
/* indices into D.chunks */
export function townViewChunks(x, y, D, V = TOWN_VIEW) {
  const r = townViewRect(x, y, D, V), out = [];
  D.chunks.forEach((c, i) => { if (chunkHits(c, r)) out.push(i); });
  return out;
}
/* a chunk's distance from a point (0 inside it) */
export const chunkDist = ([cx, cy, cw, ch], x, y) => Math.hypot(Math.max(cx - x, 0, x - cx - cw), Math.max(cy - y, 0, y - cy - ch));
