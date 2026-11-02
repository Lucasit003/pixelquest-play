/* Hero sprites: downloaded packs used exactly as their artists drew them (owner rule, 8 Oct), sliced into
   dist/assets/sprites/hero-<class>.png/.json by tools/bake-heroes.mjs. Supplementary PixelLab directional
   locomotion comes from tools/bake-hero-directions.mjs. Native pixel size (one art pixel = one world unit).
   There is no code-drawn fallback: a hero whose atlas is still loading draws
   nothing, and assets.js preloads the player's class at boot so that never shows. Gear shows on the sprite
   (15 Oct, hero-looks.js): a weapon with drawn art swaps in its own atlas, and the worn chest's set recolours the
   armour; both fall back to the base atlas until ready. */
import {loadSprite,spriteFrame,drawSprite,stateDuration} from './sprites.js';
import {appearance} from './definitions.js';
import {ABILITY_GLOW} from '../../game/ability-fx.js';
import {patAge,PET_TIME} from './pet-sprites.js';
import {heroSpriteIds,heroArtKey} from './hero-directions.js';
import {heroDrawId,heroDirectionDrawId,heroBustId,heroBustPending,heroLookOf,variantAtlasId,heroDrinkId,heroPatId} from './hero-looks.js';
export {setHeroLooks,previewHeroArt,setHeroColours,heroColoursOf,heroLookPending} from './hero-looks.js';
export {setHeroBodies,heroBody} from './hero-directions.js';

export const HERO_IDS=['warrior','mage','rogue','ranger','paladin','berserker','summoner'];
/* the class's atlas under the body its save chose (s.heroBody, hero-directions.js), else the original */
export function heroSpriteId(look){return HERO_IDS.includes(look)?'hero-'+heroArtKey(look):null;}
/* Start loading a class's atlas (boot, class select). Resolves when ready, or after `ms` regardless. */
export function preloadHero(look,ms=4000){if(!heroSpriteId(look))return Promise.resolve(false);const sheets=heroSpriteIds(look).map(loadSprite);
 /* the worn weapon's drawn atlas starts too (not waited for: the base draws until it lands) */
 heroDrawId(look);
 return new Promise(res=>{const t0=Date.now(),tick=()=>{if(sheets.every(s=>s.ready||s.failed)||Date.now()-t0>ms)return res(sheets.every(s=>s.ready));setTimeout(tick,30);};tick();});}

/* The ready atlas for a hero: {id,meta}, or null when the actor isn't a hero or its atlas is still loading
   (worldmap.js relies on this contract). The id is the gear look's (hero-looks.js): a drawn weapon and the worn
   set's colours when ready, else the base. a.plain (town NPCs) always uses the base; a.look overrides {art,set}. */
export function heroAtlas(a){const look=appearance(a);if(!heroSpriteId(look))return null;const id=heroDrawId(look,{plain:!!a.plain,...(a.look||{})}),s=loadSprite(id);
 if(s.ready)return{id,meta:s.meta};const b=loadSprite(heroSpriteId(look));return b.ready?{id:b.id,meta:b.meta}:null;}

/* Game pose -> atlas state. Contact frames in the atlas sit at floor(TRACKS[pose].contact*fps). */
const ANIM={light0:'attack',light1:'attack2',light2:'attack3',heavy:'heavy',dodge:'dodge',hurt:'hurt',knockback:'hurt',parry:'parry',cast:'cast'};
/* ownernotes-a-nov1 (owner, 1 Nov: "make the Paladin ... a downward slam", "make the Berserker attack look better, maybe a
   diagonal"): a class's own pose for a combo step, from its own atlas. The opening swing of the Paladin is his overhead
   hammer slam and of the Berserker his diagonal overhead chop: the attack3 row, which every body and drawn-weapon atlas of
   both classes has, timed 20,20,20,20,25,60,70,70 ms with contact frame 5 starting at 0.105 s, inside light0's contact at
   0.11 s (TRACKS), so the hit still lands on the frame that strikes. The finisher keeps attack3; step two keeps attack2. */
export const HERO_POSES={paladin:{light0:'attack3'},berserker:{light0:'attack3'}};
export const heroPoseState=(look,pose)=>HERO_POSES[look]?.[pose]||ANIM[pose];
/* The class's showcase attack where the hero is shown on its own (the hero select, the creator, the practice dummy): what it
   does in a fight, not the melee row a ranged class never swings. The Ranger draws and looses an arrow that flies (fx-hr-arrow,
   the combat arrow, taking over at the frame the string is let go from where that frame draws the loosed arrow: `release`
   [frame, x, y] of the arrow's centre from the feet, per atlas, measured on each atlas); the Summoner
   raises the totem high (ab-ancestral-chorus); the Paladin and the Berserker play their opening swing (HERO_POSES), at `pace`
   (0.6x) so its 80 ms wind-up reads on a still stage; in a fight it keeps its own timing. */
export const PREVIEW_ATTACK={ranger:{state:'shoot',shot:'fx-hr-arrow',speed:360,fly:.2,release:{'hero-ranger':[4,24,-47],'hero-ranger-f':[5,26,-43],'hero-ranger--bow-briarthorn':[5,26,-40],'hero-ranger--bow-shop-3':[4,14,-43],'hero-ranger--bow-magmaarc':[4,24,-42]}},
 summoner:{state:'ab-ancestral-chorus'},paladin:{state:'attack3',pace:.6},berserker:{state:'attack3',pace:.6},
 /* improve20-r9c-nov1 #6 (ownernotes-a-nov1 gap: "the Mage preview is still her melee attack"): the Mage casts her starter, Fireball, with her own
    ab-fireball row, and the combat Fireball (fx-bolt-fire, as gfx/combat-fx.js drawShot draws it) leaves her hand and bursts (its own 'blast'
    row) on a target (the practice dummy); release measured per atlas like the Ranger's */
 mage:{state:'ab-fireball',shot:'fx-bolt-fire',speed:260,fly:.3,blast:.4,release:{'hero-mage':[7,30,-31],'hero-mage-f':[4,30,-28],'hero-mage--staff-briarwood':[7,30,-31],'hero-mage--staff-moltencore':[7,30,-31],'hero-mage--staff-shop-3':[7,30,-31]}}};
export const previewAttackState=look=>PREVIEW_ATTACK[look]?.state||'attack';
/* seconds the showcase attack takes (its frames, then the arrow's flight) */
export function previewAttackLen(look){const id=heroSpriteId(look),s=id?loadSprite(id):null,P=PREVIEW_ATTACK[look],st=s?.ready?s.meta?.states?.[previewAttackState(look)]||s.meta?.states?.attack:null;
 return (st?dur(st):.6)/(P?.pace||1)+(P?.shot?P.fly+(P.blast||0):0);}
const dur=stateDuration;
/* improve20-r9c-nov1 #6: seconds from the start of the showcase attack until it lands on something reach px ahead: a shot's release plus its
   flight there, else the 0.25 s the practice dummy always waited for a swing; the dummy kicks back then */
export function previewHitAt(look,reach=40){const id=heroSpriteId(look),s=id?loadSprite(id):null,P=PREVIEW_ATTACK[look],st=s?.ready?s.meta?.states?.[previewAttackState(look)]||s.meta?.states?.attack:null;if(!st)return .25;
 const at=i=>(Array.isArray(st.ms)?st.ms.slice(0,i).reduce((a,v)=>a+v,0)/1000:i/(st.fps||8))/(P?.pace||1);
 if(P?.shot){const rel=P.release[s.id.split('@')[0]]||P.release['hero-'+look]||[4,24,-45];return at(rel[0])+Math.max(0,Math.min(P.fly,(reach-rel[1])/P.speed));}
 return .25;}
const shots=new WeakMap();
/* Ranged basic attacks play the game's 'cast' pose with their own cadence: 0.28s (light, contact .11) or
   0.5s (heavy, contact .27); abilities play it for 0.42s (contact .17). The claim sets attack = duration
   and counts it down in real time, so attack + animAge recovers which one this is. */
function castState(a,S){if(!S.shoot)return'cast';const k=shots.get(a);if(k&&a.token!==undefined&&k.token===a.token)return k.state;
 const total=(a.attack||0)+(a.animAge||0),state=total<.36?'shoot':total>.46?'shootHeavy':'cast';if(a.token!==undefined)shots.set(a,{token:a.token,state});return state;}
export function heroState(a,meta,time=0){const r=heroStateRaw(a,meta,time);if(!Number.isFinite(r.t)||r.t<0)r.t=0;return r;}
function heroStateRaw(a,meta,time){const S=meta.states,age=Number.isFinite(a.animAge)?Math.max(0,a.animAge):0;
 if(a.hp<=0||a.dead>0)return{state:'death',t:a.anim==='death'?age:99};
 if(a.dodge>0)return{state:'dodge',t:a.anim==='dodge'?age:Math.max(0,.32-a.dodge)};
 /* the result screen's victory cheer: plays once, then holds its last pose */
 if(a.anim==='victory'&&S.victory)return{state:'victory',t:Math.min(age,dur(S.victory)-.001)};
 /* Each ability has its own animation, 'ab-<ability id>' (docs/CHARACTER_PIPELINE.md); combat claims it by that name. */
 if(a.anim&&a.anim.startsWith('ab-')&&S[a.anim]&&age<dur(S[a.anim]))return{state:a.anim,t:age};
 if(a.anim&&ANIM[a.anim]){const st=a.anim==='cast'?castState(a,S):heroPoseState(appearance(a),a.anim);if(S[st]&&age<dur(S[st]))return{state:st,t:age};}
 if(a.knock>0)return{state:'hurt',t:Math.min(age,dur(S.hurt)-.001)};
 if(a.wind>0||a.blocking)return{state:'block',t:time};
 if((a.z||0)>.5)return{state:(a.vz||0)>0?'jump':'fall',t:time};
 if(a.moving)return{state:a.running?'run':'walk',t:Number.isFinite(a.walkAge)?a.walkAge:time};
 return{state:'idle',t:time};}

/* ownernotes-a-nov1 (owner, 1 Nov: "make the pet cat, when you pet it, actually be an animation of you petting the cat"): "Pet <name>"
   (scenes/town.js) sets a.petting and the hero turns to the companion at his back, kneels or crouches to it, pats for a while and gets
   up again, all with frames from his own atlas (no new hero art, so every drawn weapon, armour colour and look layer matches): per
   body, the state whose frames crouch lowest and reach to the ground (picked by eye from each body's contact sheet; a female body
   often draws a different pose in the same row). down plays once at 0.1 s a frame, hold loops at PAT_STEP s a frame (the pat), up
   plays at the end. The companion's own reaction is in pet-sprites.js. */
export const PET_POSE={'hero-warrior':{state:'victory',down:[1,2],hold:[3,2],up:[2,1]},'hero-warrior-f':{state:'ab-earthshatter',down:[1],hold:[2,1],up:[1]},
 'hero-mage':{state:'ab-frost-nova',down:[4],hold:[8],up:[4]},'hero-mage-f':{state:'ab-chain-lightning',down:[7],hold:[6,5],up:[7,8]},
 'hero-rogue':{state:'ab-venom-cloud',down:[3],hold:[4,5],up:[3]},'hero-rogue-f':{state:'ab-smoke-bomb',down:[3],hold:[4],up:[3]},
 'hero-ranger':{state:'ab-snare-trap',down:[2],hold:[4],up:[2]},'hero-ranger-f':{state:'ab-snare-trap',down:[1],hold:[2],up:[1]},
 'hero-paladin':{state:'ab-lay-on-hands',down:[1,2],hold:[3,4,5,4],up:[2,1]},'hero-paladin-f':{state:'ab-lay-on-hands',down:[1],hold:[2,3],up:[1]},
 'hero-berserker':{state:'ab-undying-wrath',down:[3],hold:[4,5,6,5],up:[3]},'hero-berserker-f':{state:'ab-execute',down:[7],hold:[6],up:[7]},
 'hero-summoner':{state:'ab-thorn-grove',down:[1],hold:[4,5],up:[1]},'hero-summoner-f':{state:'ab-thorn-grove',down:[1],hold:[2,3,4,3],up:[1]}};
/* a drawn weapon's atlas (--...) draws its own pose in some rows (the warrior's victory frame 3 raises the sword, the mage's frost-nova
   frame 8 lifts the staff high, the shop-3 axe kneels a frame earlier, two bows add trap and snare effects); these weapons get their
   own frames, the rest keep their body's */
const PET_WARRIOR_BLADE={state:'victory',down:[1],hold:[2],up:[1]},PET_MAGE_STAFF={state:'ab-frost-nova',down:[3],hold:[7],up:[3]};
for(const k of ['sword-magmaheart','sword-shop-3','sword-thornroot'])PET_POSE['hero-warrior--'+k]=PET_WARRIOR_BLADE;
for(const k of ['staff-briarwood','staff-moltencore','staff-shop-3'])PET_POSE['hero-mage--'+k]=PET_MAGE_STAFF;
PET_POSE['hero-ranger--bow-magmaarc']={state:'ab-snare-trap',down:[2],hold:[6],up:[2]};
PET_POSE['hero-ranger--bow-shop-3']={state:'ab-snare-trap',down:[2],hold:[2],up:[2]};
PET_POSE['hero-berserker--axe-shop-3']={state:'ab-undying-wrath',down:[2],hold:[3,4],up:[2]};
/* the pose an atlas id kneels with: its own weapon's entry first, then its body's */
export const petPoseFor=id=>{const k=String(id||'').split('@')[0].replace(/-directions-v\d+$/,'');return PET_POSE[k]||PET_POSE[petBody(k)]||null;};
export const PAT_DOWN=.1,PAT_STEP=.32;
/* improve20-r9c-nov1 #5: the free-hand pat sheets (hero-<body>-pat, PixelLab, tools/bake-hero-pat.mjs; frame 0 is the hero standing): kneel
   on 1-2, the stroke loops 3-8 at step s a frame, rise on 2-1. A body with a pat sheet plays it instead of its PET_POSE kneel. */
export const PAT_SHEET_POSE={down:[1,2],hold:[3,4,5,6,7,8],up:[2,1],step:.16};
/* the body an atlas id draws: a tint (@...) and a drawn weapon (--...) keep their body's frames */
export const petBody=id=>String(id||'').split('@')[0].replace(/--.*$/,'');
/* the pose's frame at age g (0..PET_TIME) */
export function petFrameAt(P,g,len=PET_TIME){const n=P.down.length,u=P.up.length;if(g<n*PAT_DOWN)return P.down[Math.floor(g/PAT_DOWN)];
 if(g>=len-u*PAT_DOWN)return P.up[Math.min(u-1,Math.floor((g-(len-u*PAT_DOWN))/PAT_DOWN))];return P.hold[Math.floor((g-n*PAT_DOWN)/(P.step||PAT_STEP))%P.hold.length];}
/* the middle of frame i of an atlas state, as a time spriteFrame() lands on */
export const frameTime=(st,i)=>Array.isArray(st.ms)?(st.ms.slice(0,i).reduce((a,v)=>a+v,0)+st.ms[i]/2)/1000:(i+.5)/(st.fps||8);
function petPoseAt(base,g){if(!(g>=0))return null;const P=petPoseFor(base.id),st=P&&base.meta?.states?.[P.state];if(!st)return null;
 const i=petFrameAt(P,g);return i<st.frames?{state:P.state,t:frameTime(st,i),pet:true}:null;}
/* Direction only changes grounded locomotion. Combat, jumps, blocks and their anchors keep the base atlas.
   A down/up view must never inherit the last horizontal mirror; the weapon stays in its source hand. */
/* ownernotes-b-nov1 #4 (owner: "a roll that goes up and down, not just left and right"): the roll always moved the way the hero was
   held (combat.js dodge: up, down and diagonals, 220 px/s for .32 s, i-frames .34 s), but the only roll art is side-on, so a roll
   straight up or down looked like a sideways roll that slid. A roll within ROLL_UPDOWN of straight up or down now plays the directions
   atlas' own north or south stride at roll speed (ROLL_STRIDE x the walk), facing the way it goes; its afterimages (combat.js trails, copies of
   the hero) and dust follow it the same way. Diagonal and sideways rolls keep the roll art. Pictures from the existing atlases only. */
export const ROLL_UPDOWN=.8,ROLL_STRIDE=2.6;
export const rollSuffix=a=>a?.dodge>0&&Math.abs(a.dy||0)>=ROLL_UPDOWN?(a.dy<0?'north':'south'):null;
export function heroRenderPose(a,base,directional,time=0){const pose=heroState(a,base.meta,time),fallback={...base,...pose,facing:a.facing<0?-1:1};
 if(directional&&pose.state==='dodge'){const sx=rollSuffix(a),S=directional.meta.states,st=sx&&(S['run-'+sx]?'run-'+sx:S['walk-'+sx]?'walk-'+sx:null);return st?{...directional,state:st,t:pose.t*ROLL_STRIDE,facing:1}:fallback;}
 const pet=a.petting&&!a.moving&&pose.state==='idle'?petPoseAt(base,patAge(time)):null;if(pet)return{...base,...pet,facing:a.facing<0?1:-1};
 if(!directional||!['idle','walk','run'].includes(pose.state))return fallback;
 const direction=a.moving?a.direction:(a.lastDirection||a.direction),suffix=direction==='down'?'south':direction==='up'?'north':null;
 if(!suffix)return fallback;const S=directional.meta.states;let state=pose.state+'-'+suffix,t=pose.t;
 /* a standing-only atlas (the front/back views baked for the creator, 15 Oct) never turns the town hero: without a walk
    row in that direction the hero would face you standing and turn sideways to move */
 if(!S['walk-'+suffix])return fallback;
 if(!S[state]&&pose.state==='run'&&S['walk-'+suffix]){state='walk-'+suffix;t*= (base.meta.states.run?.fps||16)/(S[state].fps||12);}
 if(!S[state])return fallback;return{...directional,state,t,facing:1};}

export const HERO_RENDER_SCALE=.85;
const pixelScale=a=>Math.max(.25,Number(a.scale)||1)*HERO_RENDER_SCALE;
/* Grip, tip and strike edge in world coordinates from the atlas' per-frame weapon points (source px relative
   to the feet anchor). Before the atlas has loaded (or in node tests) a chest-height point in front of the
   hero stands in, so projectiles still leave the weapon side rather than the feet. */
export function anchorsFromMeta(a,meta,time=0){const k=pixelScale(a)*(meta?.scale||1),face=a.facing<0?-1:1;let px=16,py=-26;
 if(meta){const {state,t}=heroState(a,meta,time),{i}=spriteFrame(meta,state,t),pts=meta.points?.[state];if(pts?.[i])[px,py]=pts[i];}
 const world=(x,y)=>({x:a.x+face*x*k,y:(a.y-(a.z||0))+y*k});const tip=world(px,py);
 return{grip:world(Math.min(px,9),py+1),tip,edge:world(px*.6,py),height:a.y-tip.y};}
export function heroAnchors(a,time=0){if(!heroSpriteId(appearance(a)))return null;const h=heroAtlas(a);return anchorsFromMeta(a,h?h.meta:null,time);}

let scratch=null;
function canvas(w,h){if(!scratch)scratch=typeof OffscreenCanvas!=='undefined'?new OffscreenCanvas(w,h):document.createElement('canvas');if(scratch.width<w)scratch.width=w;if(scratch.height<h)scratch.height=h;return scratch;}
/* Ground shadow: Mixel's character shadow (art/packs/mixel-topdown-32), used unmodified as its licence
   requires: a 20x12 ellipse centred in a 32x32 cell. */
let shadow=null;
function drawShadow(c,x,y,k){if(typeof Image==='undefined')return;if(!shadow){shadow=new Image();shadow.src=new URL('../../assets/sprites/hero-shadow.png',import.meta.url).href;}
 if(!shadow.complete||!shadow.naturalWidth)return;c.save();c.imageSmoothingEnabled=false;c.drawImage(shadow,Math.round(x-16*k),Math.round(y-16*k),32*k,32*k);c.restore();}
/* Draws shadow + hero, feet-anchored. Returns true for a hero (drawn, or still loading and so drawn as
   nothing), false when the actor isn't a hero. */
export function drawHero(c,a,time=0){if(!heroSpriteId(appearance(a)))return false;const h=heroAtlas(a);if(!h)return true;
 const did=heroDirectionDrawId(appearance(a),{plain:!!a.plain,...(a.look||{})}),ds=did?loadSprite(did):null;let {id,meta,state,t,facing,pet}=heroRenderPose(a,h,ds?.ready?{id:did,meta:ds.meta}:null,time);
 /* potion-drink-nov1: in a level (a.drink is set there, null between drinks) the drink sheet is kept warm, and while drinking it
    plays on the drink's own clock over every other pose but a roll and a fall (a hit flashes over it; the drink goes on) */
 if(a.drink!==undefined&&!a.plain){const k=heroDrinkId(appearance(a),a.look||{});if(k&&a.drink&&!(a.hp<=0)&&!(a.dead>0)&&!(a.dodge>0)){const m=loadSprite(k).meta;if(m?.states?.drink){id=k;meta=m;state='drink';t=Math.max(0,a.drink.t||0);facing=a.facing<0?-1:1;}}}
 /* improve20-r9c-nov1 #5: petting with a pat sheet: the free hand strokes the companion (the kneel above stays while it loads) */
 if(pet&&!a.plain){const k=heroPatId(appearance(a),a.look||{}),m=k&&loadSprite(k).meta,st=m?.states?.pat;if(st){id=k;meta=m;state='pat';t=frameTime(st,petFrameAt(PAT_SHEET_POSE,patAge(time)));}}
 const k=pixelScale(a),x=Math.round(a.x),y=Math.round(a.y-(a.z||0));
 const alpha=a.hidden>0?.28:a.inv>0&&Math.floor(time*22)%2?.65:1;
 if(!a.noShadow)drawShadow(c,x,Math.round(a.y),k);/* v2:levels -- stages draw their own downloaded shadow (a.noShadow) */
 /* rage (an attack buff, e.g. Berserker Rage): a red aura hugging the hero's own outline, breathing at 2 Hz (ability bible) */
 if(a.attackBuff>1&&a.buffTime>0)drawRageGlow(c,id,meta,state,t,x,y,facing,k,.42+.26*Math.sin(time*Math.PI*4));
 /* an ability's own glow while it plays, so it never looks like a normal attack (game/ability-fx.js ABILITY_GLOW) */
 else if(!pet&&state.startsWith('ab-')&&ABILITY_GLOW[state.slice(3)])drawRageGlow(c,id,meta,state,t,x,y,facing,k,.55+.2*Math.sin(time*Math.PI*8),ABILITY_GLOW[state.slice(3)]);
 if(!(a.flash>0))return drawSprite(c,id,state,t,x,y,{facing,scale:k,alpha})||true;
 /* Hit flash on a scratch canvas: a source-atop fill on the live canvas would also whiten the backdrop. */
 const [w,hh]=meta.cell,[ax,ay]=meta.anchor,cv=canvas(w*k,hh*k),sc=cv.getContext('2d');
 sc.save();sc.globalCompositeOperation='source-over';sc.clearRect(0,0,cv.width,cv.height);drawSprite(sc,id,state,t,ax*k,ay*k,{facing:1,scale:k});
 sc.globalCompositeOperation='source-atop';sc.globalAlpha=.45;sc.fillStyle='#fff2d6';sc.fillRect(0,0,w*k,hh*k);sc.restore();
 c.save();c.globalAlpha*=alpha;c.imageSmoothingEnabled=false;c.translate(x,y);if(facing<0)c.scale(-1,1);c.drawImage(cv,0,0,w*k,hh*k,-ax*k,-ay*k,w*k,hh*k);c.restore();return true;}

/* The hero's silhouette tinted red, stamped at 1-2 px offsets behind the sprite: an outline aura made from the art itself. */
function drawRageGlow(c,id,meta,state,t,x,y,facing,k,alpha,color='#ff3b24'){const [w,hh]=meta.cell,[ax,ay]=meta.anchor,cv=canvas(w*k,hh*k),sc=cv.getContext('2d');
 sc.save();sc.globalCompositeOperation='source-over';sc.clearRect(0,0,cv.width,cv.height);drawSprite(sc,id,state,t,ax*k,ay*k,{facing:1,scale:k});
 sc.globalCompositeOperation='source-atop';sc.fillStyle=color;sc.fillRect(0,0,w*k,hh*k);sc.restore();
 c.save();c.imageSmoothingEnabled=false;c.translate(x,y);if(facing<0)c.scale(-1,1);
 for(const [dx,dy,a] of [[-2,0,.55],[2,0,.55],[0,-2,.55],[0,1,.4],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1],[-1,0,1],[1,0,1],[0,-1,1]]){c.globalAlpha=alpha*a;c.drawImage(cv,0,0,w*k,hh*k,-ax*k+dx*k,-ay*k+dy*k,w*k,hh*k);}
 c.restore();}

/* Bust for the HUD, class select, stats and dialogue: a crop of the hero's own idle frame (meta.bust, set by
   the bake) at the largest whole-number scale that fits the canvas. Replaces the old generated portraits.
   Redraws itself once the atlas arrives. */
export function drawHeroBust(cv,look,size=192,tries=0,o={}){if(!heroSpriteId(look)||!cv)return false;const id=heroBustId(look,o);cv.width=size;cv.height=size;const c=cv.getContext('2d');if(!c)return false;c.clearRect(0,0,size,size);
 const s=loadSprite(id);if(!s.ready){if(!s.failed)setTimeout(()=>drawHeroBust(cv,look,size,tries+1,o),60);return false;}
 /* the worn set's colours are made once, a moment after the first request: draw the plain bust now, then once more */
 if(id===heroSpriteId(look)&&heroBustPending(look,o)&&tries<50)setTimeout(()=>{if(cv.isConnected!==false)drawHeroBust(cv,look,size,tries+1,o);},80);
 const m=s.meta,[bx,by,bw,bh]=m.bust||[0,0,m.cell[0],m.cell[1]],k=Math.max(1,Math.floor(size/Math.max(bw,bh))),row=(m.states[m.bustState]||m.states.idle).row*m.cell[1];
 c.imageSmoothingEnabled=false;c.drawImage(s.img,bx,row+by,bw,bh,Math.round((size-bw*k)/2),Math.round((size-bh*k)/2),bw*k,bh*k);return true;}

/* The whole hero standing (the inventory's paper doll): the idle animation at the largest whole-number scale that fits
   the canvas, feet on the bottom margin, with the gear look (or a preview {art, set} of an item being hovered). */
export function drawHeroFigure(cv,look,{time=0,art,set,colours,state='idle',plain=false,front=true,reach=null}={}){if(!heroSpriteId(look)||!cv)return false;const c=cv.getContext('2d');if(!c)return false;
 const o={plain,...(art!==undefined?{art}:{}),...(set!==undefined?{set}:{}),...(colours!==undefined?{colours}:{})},id=heroDrawId(look,o),s=loadSprite(id),b=s.ready?s:loadSprite(heroSpriteId(look));c.clearRect(0,0,cv.width,cv.height);if(!b.ready)return false;
 /* facing the viewer (owner, 15 Oct): the directions atlas' south row when this body has one (the figure is ~54x60 of a 112x100 cell) */
 if(front&&(state==='idle'||state==='walk')){const did=heroDirectionDrawId(look,o),d=did?loadSprite(did):null;
  const S=d?.ready?d.meta?.states||{}:{},st=S[state+'-south']?state+'-south':S['idle-south']?'idle-south':null;
  if(st){const k=Math.max(1,Math.floor(Math.min(cv.width/60,(cv.height-4)/64)));return drawSprite(c,d.id,st,st===state+'-south'?time:0,cv.width/2,cv.height-4,{facing:1,scale:k});}}
 /* idle frames are about 34x56 px of a 103x98 cell: scale on that, not on the cell */
 const k=Math.max(1,Math.floor(Math.min(cv.width/40,(cv.height-4)/60)));
 /* 'attack' is the class's showcase attack (PREVIEW_ATTACK); the Ranger's arrow is drawn over the canvas once it is loosed */
 const P=state==='attack'?PREVIEW_ATTACK[look]:null,st=P&&b.meta?.states?.[P.state]?P.state:state;if(P?.pace&&st===P.state)time*=P.pace;
 const ok=drawSprite(c,b.id,b.meta?.states?.[st]?st:'idle',time,cv.width/2,cv.height-4,{facing:1,scale:k});
 if(ok&&P?.shot&&st===P.state){const rel=P.release[b.id.split('@')[0]]||P.release['hero-'+look]||[4,24,-45],S=b.meta.states[st],t0=S.ms?S.ms.slice(0,rel[0]).reduce((a,v)=>a+v,0)/1000:rel[0]/(S.fps||20),f=time-t0;
  /* reach (px from the feet, optional): the shot stops there, as on a target (the practice dummy), and bursts there */
  const fly=reach!=null?Math.max(0,Math.min(P.fly,(reach-rel[1])/P.speed)):P.fly,boom=reach!=null&&P.blast;
  if(f>=0&&f<=fly)drawSprite(c,P.shot,'fly',P.blast?f:0,Math.round(cv.width/2+(rel[1]+P.speed*f)*k),cv.height-4+rel[2]*k,{facing:1,scale:k});else if(f<0)loadSprite(P.shot);
  else if(boom&&f<=fly+P.blast)drawSprite(c,P.shot,'blast',f-fly,Math.round(cv.width/2+(rel[1]+P.speed*fly)*k),cv.height-4+rel[2]*k,{facing:1,scale:k});}
 return ok;}
export {variantAtlasId,heroLookOf};
