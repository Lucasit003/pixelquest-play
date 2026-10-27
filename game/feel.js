/* Combat feel numbers (14 Oct polish pass, re-tuned 27 Oct juice pass), pure so tests can pin them. Hitstop is counted in
   60 fps frames and only lands on blows that matter: a plain light hit freezes nothing (a child mashing attack would
   otherwise stutter on every swing), a crit 2 frames, a heavy hit, ability, combo finisher or kill 3, an elite's fall 4.
   Never more than HITSTOP_MAX. The longest of the reasons wins; reduced motion freezes nothing. */
export const FRAME=1/60,HITSTOP_MAX=4*FRAME;
export const HITSTOP={light:0,crit:2*FRAME,heavy:3*FRAME,finisher:3*FRAME,kill:3*FRAME,elite:4*FRAME,hurt:4*FRAME};
export function hitstopFor(a={},{crit=false,kill=false,elite=false,motion=true}={}){if(!motion)return 0;
 let s=a.stop||(a.heavy||(!a.basic&&!a.tick)?HITSTOP.heavy:HITSTOP.light);if(a.tick)return a.stop||HITSTOP.light;
 if(crit)s=Math.max(s,HITSTOP.crit);if(kill)s=Math.max(s,elite?HITSTOP.elite:HITSTOP.kill);return Math.min(HITSTOP_MAX,s);}
/* Shake and impact pauses are on when the Settings box "Screen shake and impact pauses" is ticked and "Reduce motion"
   (ui/settings.js, which defaults to the OS preference) is not. */
export const motionOn=save=>!!save?.settings?.motion&&!save?.settings?.reducedMotion;
/* Hit flash (27 Oct): a hit lights the enemy for FLASH_T (2 frames); a heavy hit, crit or kill makes its first frame pure
   white. An enemy re-flashes at most once every FLASH_GAP s, so no sprite ever flashes faster than 3 times a second however
   fast the hits come (photosensitivity: nothing above 3 Hz). Returns true when a flash started. */
export const FLASH_T=2*FRAME,FLASH_GAP=1/3,FLASH_HZ=1/FLASH_GAP;
export function flashHit(e,now,white=false){if(now-(e.flashAt??-9)<FLASH_GAP-1e-9)return false;e.flash=FLASH_T;e.flashAt=now;e.flashWhite=white?FRAME:0;return true;}
/* A telegraph's glow pulses at TELE_PULSE rad/s: 2.7 Hz, under the 3 Hz line (it was 26 rad/s, 4.1 Hz). */
export const TELE_PULSE=17;
/* Kill pop (27 Oct): the fallen body squashes wide and short for KILL_POP s, springing back as it dies. */
export const KILL_POP=.14;
export function killSquash(left,motion=true){if(!motion||!(left>0))return [1,1];const k=Math.min(1,left/KILL_POP),q=Math.sin(k*Math.PI)*.28;return [1+q,1-q*.8];}
/* Combo counter (27 Oct): landed hits in a row, each within COMBO.window s of the last; the counter shows from COMBO.show
   hits, and taking damage ends the chain. It is only a show: nothing is paid for it. */
export const COMBO={show:5,window:1.6,fade:.5};
export function comboStep(chain,now){const c=chain&&now-chain.t<=COMBO.window?chain:{n:0,t:now,best:0};c.n++;c.t=now;c.bump=now;c.best=Math.max(c.best||0,c.n);return c;}
export function comboView(chain,now){if(!chain||chain.n<COMBO.show)return null;const idle=now-chain.t,gone=idle-COMBO.window;if(gone>=COMBO.fade)return null;
 return {n:chain.n,alpha:gone>0?1-gone/COMBO.fade:1,pop:now-(chain.bump??-9)<.08,tier:chain.n>=25?3:chain.n>=15?2:chain.n>=10?1:0};}
/* Damage numbers (27 Oct): every number pops to twice its size for its first frames; a crit is gold, bigger and pops longer. */
export const NUMBER={size:12,crit:16,critColor:'#ffc93c',pop:.07,critPop:.2};
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
