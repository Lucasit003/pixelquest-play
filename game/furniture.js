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
 ['show-hearth','Great stone hearth',3000,'show',89,108,'prop-fireplace_1.png']];
/* improve20-r7a-nov1 #12 (improve20-x-nov1 report: "Wall pieces stand on the floor like all furniture"): the pieces made to hang (the banner,
   the shield trophy, the weapon rack and the armour plaque, all front views) go on the Home's back wall. Same art, no new pictures. */
export const WALL_IDS=Object.freeze(['show-banner','show-shields','show-weapons','show-armour']);
export const FURNITURE=Object.freeze(T.map(([id,name,price,kind,w,h,src])=>Object.freeze({id,name,price,kind,w,h,src,flat:kind==='rug',...(WALL_IDS.includes(id)?{wall:true}:{}),img:`assets/town/furniture/${id}.png`})));
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
export function buyFurniture(s,id){const f=FURN[id];if(!f||(s.gold||0)<f.price||f.kind==='show'&&(s.house.owned[id]|0)>0)return false;s.gold-=f.price;s.house.owned[id]=(s.house.owned[id]||0)+1;return true;}
export function placeFurniture(s,id,x,y,wall=false){if(!FURN[id]||spare(s,id)<1||s.house.items.length>=MAX_PLACED||wall&&!FURN[id].wall)return false;s.house.items.push({id,x:Math.round(x),y:Math.round(y),...(wall?{wall:1}:{})});return true;}
/* The Home's back wall (room pixels; the plaster face of the room "home" runs y 80-160 between x 96 and 480, under a beam at y 92-102): a hung
   piece's top sits just under the beam (WALL.rail), so a row of pieces lines up. It hangs inside the wall, clear of the room's own wall art
   (the window, the shelves, a sconce: rects the caller passes) and of every piece already hung; furniture standing in front of the wall (the
   bed, the hearth, the logs: art whose top is at WALL.stand or lower) may hide at most WALL.tuck px of its foot, as a headboard does. It never
   blocks the floor. An item hung on the wall carries wall:1 (additive; a piece placed on the floor before this keeps standing where it was). */
export const WALL=Object.freeze({x0:98,x1:478,rail:98,floor:160,stand:128,tuck:12});
export const wallRect=(f,x)=>({x0:Math.round(x-f.w/2),x1:Math.round(x+f.w/2),y0:WALL.rail,y1:WALL.rail+f.h});
const hit=(a,b)=>a.x0<b.x1&&b.x0<a.x1&&a.y0<b.y1&&b.y0<a.y1;
export function wallFits(f,x,items=[],art=[]){if(!f?.wall)return false;const r=wallRect(f,x);if(r.x0<WALL.x0||r.x1>WALL.x1||r.y1>WALL.floor)return false;
 return !art.some(a=>hit(r,a)&&!(a.y0>=WALL.stand&&r.y1-a.y0<=WALL.tuck))&&!items.some(it=>it.wall&&FURN[it.id]&&hit(r,wallRect(FURN[it.id],it.x)));}
/* the free spot on the wall nearest to x where f hangs (4 px steps), or null when the wall has no room left for it */
export function wallSpot(f,x,items=[],art=[],reach=WALL.x1-WALL.x0){for(let d=0;d<=reach;d+=4)for(const sx of d?[x-d,x+d]:[x]){const q=Math.round(sx/4)*4;if(wallFits(f,q,items,art))return {x:q,y:WALL.rail+f.h};}return null;}
export function pickUp(s,i){if(i<0||i>=s.house.items.length)return false;s.house.items.splice(i,1);return true;}
/* a save's house, cleaned: known items only, whole counts, and never more placed than owned (save.js normalize) */
export function cleanHouse(h){const owned={},items=[];
 for(const [id,n] of Object.entries(h?.owned&&typeof h.owned==='object'?h.owned:{}))if(FURN[id]&&Math.floor(Number(n))>0)owned[id]=FURN[id].kind==='show'?1:Math.floor(Number(n));
 for(const it of Array.isArray(h?.items)?h.items:[])if(it&&FURN[it.id]&&Number.isFinite(+it.x)&&Number.isFinite(+it.y)&&items.filter(o=>o.id===it.id).length<(owned[it.id]||0)&&items.length<MAX_PLACED)items.push({id:it.id,x:Math.round(+it.x),y:Math.round(+it.y),...(it.wall&&FURN[it.id].wall?{wall:1}:{})});
 return {owned,items};}
