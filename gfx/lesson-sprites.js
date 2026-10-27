// Object sprites for lesson pictures (art review round 1, Rule 0): apples, baskets, coins and books come
// from our own PixelLab icons (lsprites-oct26; baked by tools/bake-lesson-sprites.mjs into
// assets/lesson/sprites.png), never drawn in code. Numbers, labels, bars and charts stay code-drawn, because
// code keeps them exact.
//
// The strip is loaded once in the browser (dist/ui/edu.js) and by the review renderer in Node. Until it has
// loaded -- and in tests, which have no images -- drawSprite returns false and the caller draws its plain
// fallback shape, so a picture is never blank. Sprites are drawn at whole-number scales only (or exactly
// half, where a picture holds many objects), with smoothing off, so pixels stay square.
import {ATLAS} from './lesson-sprite-atlas.js';
/* Every sprite's [x, y, w, h] in the strip comes from the generated atlas: 32 px icons and village props of their own sizes. */
export const SPRITE_NAMES=Object.freeze(Object.keys(ATLAS));
const S={img:null};
export const setLessonSprites=img=>{S.img=img||null;};
export const spritesReady=()=>!!S.img;
/* The largest allowed size (32 x a whole number, or 16) that fits in `room` pixels. */
export const spriteSize=room=>room>=64?Math.floor(room/32)*32:room>=32?32:16;
/* A square icon centred on (cx, cy) at size x size (a whole multiple of 32, or 16). */
export function drawSprite(ctx,name,cx,cy,size=32){
 const r=ATLAS[name];if(!S.img||!r||typeof ctx.drawImage!=='function')return false;
 const prev=ctx.imageSmoothingEnabled;ctx.imageSmoothingEnabled=false;
 ctx.drawImage(S.img,r[0],r[1],r[2],r[3],Math.round(cx-size/2),Math.round(cy-size/2),size,size);
 ctx.imageSmoothingEnabled=prev;return true;
}
/* A prop of its own size, standing on (cx, bottom), at a whole-number scale. Returns the drawn height, or 0. */
export function drawProp(ctx,name,cx,bottom,scale=1){
 const r=ATLAS[name];if(!S.img||!r||typeof ctx.drawImage!=='function')return 0;scale=Math.max(1,Math.floor(scale));
 const prev=ctx.imageSmoothingEnabled;ctx.imageSmoothingEnabled=false;
 ctx.drawImage(S.img,r[0],r[1],r[2],r[3],Math.round(cx-r[2]*scale/2),Math.round(bottom-r[3]*scale),r[2]*scale,r[3]*scale);
 ctx.imageSmoothingEnabled=prev;return r[3]*scale;
}
export const propSize=name=>ATLAS[name]?{w:ATLAS[name][2],h:ATLAS[name][3]}:null;
