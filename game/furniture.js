/* Home furniture (owner, 9 Oct: "making sure the house can be customizable inside by purchasing things with coins").
   Bought with gold from the catalogue at Home and placed in the Home room in front of the hero, as Animal Crossing does
   it; picked up again from the same panel. Cosmetic only: furniture never changes a stat, an ability or anything to do
   with learning (CLAUDE.md invariants). The pictures are the interiors pack's own props, the ones the rooms are built
   from, with only their transparent margins cropped (dist/assets/town/furniture). Rugs lie flat under everyone and never
   block; everything else blocks the strip it stands on. */
/* [id, name, price in gold, kind, width, height, source picture in art/tiled/interiors/images] */
const T=[
 ['plant-tree-green','Potted tree',60,'plant',27,48,'prop-plants_1.png'],
 ['plant-tree-blue','Blue potted tree',70,'plant',27,48,'prop-plants_0.png'],
 ['plant-tree-orange','Autumn potted tree',70,'plant',27,48,'prop-plants_3.png'],
 ['plant-small-green','Small fern',30,'plant',18,47,'prop-plants_5.png'],
 ['plant-big-green','Big leafy plant',90,'plant',25,57,'prop-plants_9.png'],
 ['plant-box-green','Planter box',50,'plant',24,48,'prop-plants_13.png'],
 ['plant-big-blue','Big blue plant',90,'plant',29,50,'prop-plants_16.png'],
 ['bed-blue','Bed with a blue quilt',220,'bed',52,81,'prop-bed_2.png'],
 ['bed-green','Bed with a green quilt',220,'bed',42,71,'prop-bed_3.png'],
 ['bed-rose','Rose quilt bed',300,'bed',52,82,'prop-bed_6.png'],
 ['bed-royal','Royal blue bed',320,'bed',54,81,'prop-bed_8.png'],
 ['chest-small','Small chest',90,'chest',32,27,'prop-chests_2.png'],
 ['chest-iron','Iron-banded chest',150,'chest',34,40,'prop-chests_4.png'],
 ['chest-treasure','Treasure chest',260,'chest',46,32,'prop-chests_6.png'],
 ['table-green','Table with a green cloth',150,'table',88,64,'prop-big_rect_table_1.png'],
 ['table-blue','Table with a blue cloth',150,'table',88,64,'prop-big_rect_table_3.png'],
 ['table-red','Table with a red cloth',150,'table',88,64,'prop-big_rect_table_5.png'],
 ['stool-red','Red stool',40,'seat',15,16,'prop-table_bench_0.png'],
 ['bench','Wooden bench',60,'seat',49,14,'prop-table_bench_7.png'],
 ['desk','Writing desk',220,'table',62,35,'prop-office_desk_5.png'],
 ['rug-red','Red square rug',90,'rug',43,49,'carpet_3.png'],
 ['rug-orange','Orange rug',80,'rug',54,30,'carpet_4.png'],
 ['rug-green','Green runner',70,'rug',86,29,'carpet_5.png'],
 ['rug-blue','Blue rug',100,'rug',56,32,'carpet_6.png'],
 ['rug-meadow','Meadow rug',120,'rug',60,30,'carpet_8.png'],
 ['barrel','Barrel',50,'barrel',30,37,'prop-barrels3_5.png'],
 ['barrels-stack','Stack of barrels',120,'barrel',55,60,'prop-barrels3_0.png'],
 ['candelabra','Tall candelabra',180,'light',26,60,'prop-lit_candlesticks_10.png'],
/* improve20-x-nov1 #20a (audit4 #4: a level-18 save held 1,359 gold with nothing to buy): the Showpiece shelf, big pieces to save up
   for, one of each. The interiors pack's own biggest props that the catalogue did not use yet, margins cropped like the rest. Cosmetic
   only, like every piece here: no stat, ability or learning reads them. Owning all of them hangs a Trophies entry (ui/trophy-hall.js). */
 ['show-banner','Purple hall banner',600,'show',30,61,'prop-banner_4.png'],
 ['show-shields','Shield and axes trophy',700,'show',53,38,'prop-decor_shields_5.png'],
 ['show-weapons','Weapon rack',800,'show',58,40,'prop-decors_weapon2_8.png'],
 ['show-armour','Armour display',900,'show',51,35,'prop-decors_armor_8.png'],
 ['show-feast','Round feast table',1000,'show',53,47,'prop-big_round_table_0.png'],
 ['show-bookcase','Grand bookcase',1400,'show',75,71,'prop-cabinet_27.png'],
 ['show-alchemy','Alchemist\'s cabinet',2000,'show',85,77,'prop-cabinet_2.png'],
 ['show-hearth','Great stone hearth',3000,'show',89,108,'prop-fireplace_1.png'],
/* improve23-r23h-nov4 #1 (R22F: too few things to buy after m7; owner, 14 Oct: every new visual is made with PixelLab): three floor Showpieces
   made with PixelLab (create_image_pixflux), not pack art, so their source is art/pixellab/<path> (a 'pixellab/' prefix); margins cropped,
   unscaled. Prices fill the gaps 1,000-1,400, 1,400-2,000 and 2,000-3,000, so the hearth stays the last big goal. Floor pieces, not WALL_IDS. */
 ['show-globe','Explorer\'s globe',1200,'show',39,53,'pixellab/showpieces-r23h/show-globe.png'],
 ['show-hoard','Dragon\'s hoard',1600,'show',47,37,'pixellab/showpieces-r23h/show-hoard.png'],
 ['show-dragon-skull','Dragon skull trophy',2400,'show',69,60,'pixellab/showpieces-r23h/show-dragon-skull.png'],
/* improve25-r25f-nov5 #3 (audit16 plan 6): the Hall diary's keepsakes, one per chapter, given free at Home when that chapter's diary pages are all
   filled (game/hall-diary.js grantDiaryKeepsakes). The interiors pack's own bookcases, margins cropped like the rest; never sold (kind 'keep',
   price 0: buyFurniture refuses them and the Catalogue leaves them out), one of each. */
 ['keep-elderwood','Elderwood diary bookcase',0,'keep',44,72,'prop-cabinet_1.png'],
 ['keep-emberkeep','Emberkeep diary bookcase',0,'keep',39,71,'prop-cabinet_24.png'],
 ['keep-veilmoor','Veilmoor diary bookcase',0,'keep',35,69,'prop-cabinet_20.png']];
/* improve20-r7a-nov1 #12 (improve20-x-nov1 report: "Wall pieces stand on the floor like all furniture"): the pieces made to hang (the banner,
   the shield trophy, the weapon rack and the armour plaque, all front views) go on the Home's back wall. Same art, no new pictures. */
export const WALL_IDS=Object.freeze(['show-banner','show-shields','show-weapons','show-armour']);
export const FURNITURE=Object.freeze(T.map(([id,name,price,kind,w,h,src])=>Object.freeze({id,name,price,kind,w,h,src,flat:kind==='rug',...(kind==='keep'?{earned:true}/* improve25-r25f-nov5 #3 */:{}),...(WALL_IDS.includes(id)?{wall:true}:{}),img:`assets/town/furniture/${id}.png`})));
export const FURN=Object.freeze(Object.fromEntries(FURNITURE.map(f=>[f.id,f])));
export const MAX_PLACED=40;
/* the Showpiece shelf, cheapest first; one of each can be owned */
export const SHOWPIECES=Object.freeze(FURNITURE.filter(f=>f.kind==='show').sort((a,b)=>a.price-b.price));
export const isShowpiece=id=>FURN[id]?.kind==='show';
export const showpiecesOwned=s=>SHOWPIECES.filter(f=>(s?.house?.owned?.[f.id]|0)>0).length;
export const allShowpieces=s=>showpiecesOwned(s)===SHOWPIECES.length;
/* the cheapest Showpiece this save does not own yet, or null */
export const nextShowpiece=s=>SHOWPIECES.find(f=>!((s?.house?.owned?.[f.id]|0)>0))||null;
/* the strip an item stands on, in room pixels: its full width, and its bottom third (at least 8 px, at most 24) */
export const footprint=(f,x,y)=>{const h=Math.max(8,Math.min(24,Math.round(f.h/3)));return {x0:Math.round(x-f.w/2),x1:Math.round(x+f.w/2),y0:Math.round(y-h),y1:Math.round(y)};};
export const placedCount=(s,id)=>s.house.items.filter(i=>i.id===id).length;
export const spare=(s,id)=>(s.house.owned[id]||0)-placedCount(s,id);
export function buyFurniture(s,id){const f=FURN[id];if(!f||f.earned/* improve25-r25f-nov5 #3 */||(s.gold||0)<f.price||f.kind==='show'&&(s.house.owned[id]|0)>0)return false;s.gold-=f.price;s.house.owned[id]=(s.house.owned[id]||0)+1;return true;}
export function placeFurniture(s,id,x,y,wall=false){if(!FURN[id]||spare(s,id)<1||s.house.items.length>=MAX_PLACED||wall&&!FURN[id].wall)return false;s.house.items.push({id,x:Math.round(x),y:Math.round(y),...(wall?{wall:1}:{})});return true;}
/* The Home's back wall (room pixels; the plaster face of the room "home" runs y 80-160 between x 96 and 480, under a beam at y 92-102): a hung
   piece's top sits just under the beam (WALL.rail), so a row of pieces lines up. It hangs inside the wall, clear of the room's own wall art
   (the window, the shelves, a sconce: rects the caller passes) and of every piece already hung; furniture standing in front of the wall (the
   bed, the hearth, the logs: art whose top is at WALL.stand or lower) may hide at most WALL.tuck px of its foot, as a headboard does. It never
   blocks the floor. An item hung on the wall carries wall:1 (additive). improve20-r9c-nov1: hung pieces snap to WALL_SLOTS, and a wall piece standing on the floor goes up (settleWall). */
export const WALL=Object.freeze({x0:98,x1:478,rail:98,floor:160,stand:128,tuck:12});
export const wallRect=(f,x)=>({x0:Math.round(x-f.w/2),x1:Math.round(x+f.w/2),y0:WALL.rail,y1:WALL.rail+f.h});
const hit=(a,b)=>a.x0<b.x1&&b.x0<a.x1&&a.y0<b.y1&&b.y0<a.y1;
/* improve20-r9c-nov1 #2 (improve20-r7a-nov1 report: "the back wall fits about three wall pieces; the fourth stands on the floor"): pieces hang on
   fixed slots, the centre xs below, measured on the Home's own back-wall art (HOME_WALL_ART, the rects scenes/town.js wallArt reads from the
   baked room; tests check they match): one over the bed head (left of the sconce) and five along the plaster between the window and the
   shelves, above the hearth and the log pile. Slots side by side overlap, so a wide piece takes its neighbour's room. Any set of the four wall
   pieces packs (wallPack moves hung pieces along to make room, nearest first), so nothing is ever left standing on the floor. */
export const WALL_SLOTS=Object.freeze([131,280,308,336,364,392]);
export const HOME_WALL_ART=Object.freeze([[421,90,53,22],[171,108,9,20],[197,89,54,43],[425,94,49,43],[308,128,89,46],[169,145,46,31],[230,148,54,33],[182,131,21,34],[411,134,67,60],[101,136,54,81]].map(([x,y,w,h])=>Object.freeze({x0:x,x1:x+w,y0:y,y1:y+h})));
const artFits=(f,x,art)=>{const r=wallRect(f,x);if(r.x0<WALL.x0||r.x1>WALL.x1||r.y1>WALL.floor)return false;return !art.some(a=>hit(r,a)&&!(a.y0>=WALL.stand&&r.y1-a.y0<=WALL.tuck));};
export function wallFits(f,x,items=[],art=HOME_WALL_ART){if(!f?.wall||!WALL_SLOTS.includes(x)||!artFits(f,x,art))return false;const r=wallRect(f,x);
 return !items.some(it=>it.wall&&FURN[it.id]&&hit(r,wallRect(FURN[it.id],it.x)));}
/* every way to hang pieces ps ([{f,x}], x the spot it would rather keep) on distinct slots, each clear of the art and of the others: the one
   moving them least (sum of |slot - x|), as slot xs in ps order, or null */
export function wallPack(ps,art=HOME_WALL_ART){const n=ps.length,ok=ps.map(p=>WALL_SLOTS.map(x=>artFits(p.f,x,art)));let best=null,cost=1e9;const pick=[];
 const go=(i,c)=>{if(c>=cost)return;if(i===n){best=pick.slice();cost=c;return;}for(let k=0;k<WALL_SLOTS.length;k++){if(!ok[i][k]||pick.includes(k))continue;const r=wallRect(ps[i].f,WALL_SLOTS[k]);if(pick.some((q,j)=>hit(r,wallRect(ps[j].f,WALL_SLOTS[q]))))continue;pick.push(k);go(i+1,c+Math.abs(WALL_SLOTS[k]-ps[i].x));pick.pop();}};
 go(0,0);return best&&best.map(k=>WALL_SLOTS[k]);}
/* where f hangs for a hero at x: the free slot nearest x ({x,y}); when none is free, a packing that moves hung pieces along ({x,y,moves:[[item
   index, new x]]}); null only when the wall cannot hold them all */
export function wallSpot(f,x,items=[],art=HOME_WALL_ART){if(!f?.wall)return null;const free=WALL_SLOTS.filter(s=>wallFits(f,s,items,art)).sort((a,b)=>Math.abs(a-x)-Math.abs(b-x)||a-b);if(free.length)return {x:free[0],y:WALL.rail+f.h};
 const hung=items.map((it,i)=>[it,i]).filter(([it])=>it.wall&&FURN[it.id]),xs=wallPack([...hung.map(([it])=>({f:FURN[it.id],x:it.x})),{f,x}],art);if(!xs)return null;
 return {x:xs[xs.length-1],y:WALL.rail+f.h,moves:hung.map(([it,i],j)=>[i,xs[j]]).filter(([i,nx])=>items[i].x!==nx)};}
/* a save's wall (cleanHouse): every hung piece sits on a slot, and a wall piece left standing on the floor (the wall was full before slots)
   goes up onto a free slot; a piece that cannot go up keeps standing where it was, never dropped */
export function settleWall(items){const hung=items.filter(it=>it.wall&&FURN[it.id]),up=items.filter(it=>!it.wall&&FURN[it.id]?.wall);
 let xs=wallPack(hung.map(it=>({f:FURN[it.id],x:it.x})));if(!xs)return items;hung.forEach((it,j)=>{it.x=xs[j];it.y=WALL.rail+FURN[it.id].h;});
 for(const it of up){const all=[...hung,it],ys=wallPack(all.map(o=>({f:FURN[o.id],x:o.x})));if(!ys)continue;all.forEach((o,j)=>{o.x=ys[j];o.y=WALL.rail+FURN[o.id].h;o.wall=1;});hung.push(it);}
 return items;}
export function pickUp(s,i){if(i<0||i>=s.house.items.length)return false;s.house.items.splice(i,1);return true;}
/* a save's house, cleaned: known items only, whole counts, and never more placed than owned (save.js normalize) */
export function cleanHouse(h){const owned={},items=[];
 for(const [id,n] of Object.entries(h?.owned&&typeof h.owned==='object'?h.owned:{}))if(FURN[id]&&Math.floor(Number(n))>0)owned[id]=FURN[id].kind==='show'||FURN[id].earned/* improve25-r25f-nov5 #3 */?1:Math.floor(Number(n));
 for(const it of Array.isArray(h?.items)?h.items:[])if(it&&FURN[it.id]&&Number.isFinite(+it.x)&&Number.isFinite(+it.y)&&items.filter(o=>o.id===it.id).length<(owned[it.id]||0)&&items.length<MAX_PLACED)items.push({id:it.id,x:Math.round(+it.x),y:Math.round(+it.y),...(it.wall&&FURN[it.id].wall?{wall:1}:{})});
 settleWall(items);return {owned,items};}
