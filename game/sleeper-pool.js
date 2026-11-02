/* The Sleeper's flooded arena (improve20-r9a-nov1, IMPROVE20_ROUND9 lane R9A d19). The Deep Below's boss arena (biome mystic-abyss,
   boss arena x 3144-3624, floor band y 140-268) has a pool at its back centre: shallow water that slows the hero to SHALLOW_SLOW of
   his speed (never a stun; a roll is not slowed), and deep water in its middle that blocks like a wall. The pool is laid out on the
   32 px tile corners the art is painted from (tools/bake-sleeper-pool.mjs lays the two PixelLab Wang tilesets from these same corners),
   and a point is in the water where the corners round it say so (bilinear, half way), so what you see is where it slows or blocks.
   Deep corners only ever touch shallow ones, never dry ground, so deep water always has a shallow rim and a clear edge.
   A dry route always runs round it: the whole front of the band (y over ~210) and both sides of the arena are dry, and the Sleeper
   himself stands at the front of the band (enemies.js cthulhu stand), so no attack is dodged only by standing in the water.
   Pure data and arithmetic; game/stage.js levelGeometry adds it to the level's blocked() and shallow(). */
export const SHALLOW_SLOW=.7,POOL_CELL=32;
const span=(a,b)=>Array.from({length:b-a+1},(_,i)=>a+i);
/* corner rows (world y) -> tile-corner columns (world x / 32) */
export const POOLS={'mystic-abyss':{shallow:{96:span(103,109),128:span(102,110),160:span(102,110),192:span(103,109)},deep:{128:span(104,108),160:span(104,108)}}};
const sets={};
function cornerSet(key,kind){const k=key+':'+kind;if(sets[k])return sets[k];const P=POOLS[key],out=new Set();if(P)for(const [y,xs] of Object.entries(P[kind]))for(const gx of xs)out.add(gx+','+(+y/POOL_CELL));return sets[k]=out;}
/* is tile corner (gx, gy) shallow-or-deep ('shallow') or deep ('deep')? */
export const poolCorner=(key,kind,gx,gy)=>cornerSet(key,kind).has(gx+','+gy);
function cover(key,kind,x,y){const C=POOL_CELL,gx=Math.floor(x/C),gy=Math.floor(y/C),fx=x/C-gx,fy=y/C-gy,v=(a,b)=>poolCorner(key,kind,a,b)?1:0;
 return v(gx,gy)*(1-fx)*(1-fy)+v(gx+1,gy)*fx*(1-fy)+v(gx,gy+1)*(1-fx)*fy+v(gx+1,gy+1)*fx*fy;}
/* 'deep', 'shallow' or null at world point (x, y) of a level's stage key */
export function poolAt(key,x,y){if(!POOLS[key])return null;if(cover(key,'deep',x,y)>=.5)return 'deep';if(cover(key,'shallow',x,y)>=.5)return 'shallow';return null;}
export const hasPool=key=>!!POOLS[key];
