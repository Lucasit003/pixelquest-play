/* Combat feel numbers (14 Oct polish pass), pure so tests can pin them. Hitstop in seconds: a light hit freezes 60 ms, a
   heavy hit or ability 110 ms, a crit at least 90 ms, a killing blow at least 100 ms (130 an elite), a finisher 170. The
   longest of the reasons wins; reduced motion freezes nothing. */
export const HITSTOP={light:.06,crit:.09,heavy:.11,kill:.1,elite:.13,finisher:.17};
export function hitstopFor(a={},{crit=false,kill=false,elite=false,motion=true}={}){if(!motion)return 0;
 let s=a.stop||(a.heavy||(!a.basic&&!a.tick)?HITSTOP.heavy:HITSTOP.light);if(a.tick)return s;
 if(crit)s=Math.max(s,HITSTOP.crit);if(kill)s=Math.max(s,elite?HITSTOP.elite:HITSTOP.kill);return s;}
/* Which shake a killing blow rings: none for a trash mob (the hitstop and the puff carry it), a small one for an elite. */
export const killQuake=e=>e.boss?null:e.elite?'crit':null;
/* Gold that pops out of a fallen enemy: how many coins fly (the gold itself is paid on the kill, these are the show). */
export const coinsFor=e=>e.boss?10:e.elite?5:2;
/* A coin's life: it pops up and out, bounces once, rests, then is drawn to the hero and collected within reach. */
export const COIN={pop:150,grav:520,rest:.42,pull:340,accel:900,reach:10,life:4};
export function stepCoin(c,hero,dt){c.age=(c.age||0)+dt;
 if(c.age<COIN.rest){c.x+=c.vx*dt;c.y+=c.vy*dt;c.vx*=.9;c.vy*=.9;c.vz-=COIN.grav*dt;c.z+=c.vz*dt;if(c.z<=0){c.z=0;c.vz=Math.abs(c.vz)>40?-c.vz*.38:0;}return false;}
 const dx=hero.x-c.x,dy=(hero.y-10)-(c.y-c.z),d=Math.hypot(dx,dy)||1;c.speed=Math.min(COIN.pull*1.6,(c.speed||40)+COIN.accel*dt);
 const k=Math.min(d,c.speed*dt)/d;c.x+=dx*k;c.y+=dy*k;c.z=Math.max(0,c.z*.9);return d<=COIN.reach||c.age>COIN.life;}
/* Screen shake offset in whole pixels: mostly sideways with a smaller vertical bob on another frequency, decaying. */
export function shakeOffset(amp,left,max,t,motion=true){if(!motion||!(amp>0)||!(left>0))return [0,0];const k=amp*left/(max||1);
 return [Math.round(Math.sin(t*95)*k),Math.round(Math.cos(t*71)*k*.55)];}
/* Squash on a hit: an enemy reeling from a blow is drawn wider and shorter, easing back over the knockback. */
export function squash(knock,motion=true){if(!motion||!(knock>0))return [1,1];const q=Math.min(1,knock/.18)*.14;return [1+q,1-q];}
/* What a cooldown shows (hotbar slots, the phone's Dodge button, the ring under the hero): the share still to wait (the
   sweep), whole seconds while more than one is left (none under a second, where a number only flickers), and whether it
   just came back this frame (the slot flashes and a soft chime plays). */
export const DODGE_CD=.7;
export function cooldownView(left,total,was=0){const l=Math.max(0,+left||0),t=Math.max(+total||0,l,1e-6),cooling=l>.05;
 return {cooling,frac:cooling?Math.min(1,l/t):0,label:l>1?String(Math.ceil(l)):'',ready:was>.05&&!cooling};}
