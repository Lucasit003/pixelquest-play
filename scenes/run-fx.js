/* The run layer in a fight (docs/design/research/SKYBLOCK_DUNGEONS_PROGRESSION.md): the Run Draft's extras, secrets that
   count on every run, the Blessing shrine, the Mimic, and the grade, chests, Boss Meter and Delver XP at the end. The
   World (scenes/combat.js) calls these hooks; the rules live in the pure modules (game/grade.js, draft.js, chests.js,
   meter.js, delve.js, skills.js). Nothing here touches learning: no mastery, answers, lessons or ability unlocks.
   - The clock is never shown during play; the grade's time only appears on the result card.
   - Effects are code (a glint, a glow, shake); the shrine and the Mimic are PixelLab art (art/pixellab/run-layer). */
import {draftRun,draftWaves,compatibleDraft,drafted,BLESSINGS,draftBanner} from '../game/draft.js';
import {scoreRun,gradeRank} from '../game/grade.js';
import {openChests,ESSENCE} from '../game/chests.js';
import {tickMeter,settleMeter,meterOf} from '../game/meter.js';
import {awardRun,emptyDelve} from '../game/delve.js';
import {syncTasks,adventurerLevel} from '../game/skills.js';
import {SECRET_SPOTS} from '../game/secret-spots.js';
import {levelParFor,levelById} from '../game/levels.js';
import {stageKey} from '../game/stage.js';
import {makeEnemy,baseDef} from '../game/roster.js';
import {drawSprite,loadSprite} from '../gfx/actors/sprites.js';
import {sfx} from '../core/audio.js';
/* the sleeping Mimic is drawn at the size it fights at, so it does not shrink when it wakes */
import {enemyRenderScale} from './enemy-ai.js';
import {sealReady} from '../game/seal.js';
const IMG={};
const img=src=>{if(typeof Image==='undefined')return null;if(!IMG[src]){const i=new Image();i.src=new URL(`../${src}`,import.meta.url).href;IMG[src]=i;}return IMG[src].complete&&IMG[src].naturalWidth?IMG[src]:null;};
export const SHRINE_ART='ui/skin/run/blessing-shrine.png',SEAL_ART='ui/skin/run/seal-stone.png';
/* oct24-progress (playtest r3 D2): the grade's health cost counts net damage, the health lost minus what potions healed back
   (scenes/combat.js run.potionHeal), so drinking never costs Skill points (VISION: potions are never penalised). */
export const netLost=r=>Math.max(0,(r?.taken||0)-(r?.potionHeal||0));
/* What a wave retry keeps from the run it retries (falls, time so far, finds), so a retried win is graded as one run. */
export function runCarry(w,id,opts){if(!(Number.isInteger(opts?.fromWave)&&w.level?.id===id&&w.run&&w.draft))return null;const r=w.run;
 return {guaranteed:[...(r.guaranteed||[])],bossPaid:[...(r.bossPaid||[])],bossFirst:[...(r.bossFirst||[])],cacheEssence:r.cacheEssence|0,draft:w.draft,found:[...(w.found||[])],knockouts:(r.knockouts|0)+1,carry:(r.carry||0)+(r.time||0),killCarry:(r.killCarry||0)+(r.killXP||0),elites:r.elites|0,lost:(r.lostCarry||0)+netLost(r)/Math.max(1,w.player?.maxHp||1),drank:!!r.drank,mimic:!!r.mimic,blessing:!!r.blessing,seal:!!r.seal,essence:r.essence|0,mimicDone:!w.mimic||w.mimic.state!=='sleep'};}
/* After the World set its level, layout and run: the draft, the live secrets, the shrine and the Mimic. */
export function runStart(w,l,k,prev){const s=w.save;w.draft=null;w.shrine=null;w.mimic=null;w.blessing=null;w.seal=null;
 const saved=new Set(s.levels?.[l.id]?.secrets||[]);w.paid=saved;
 if(!drafted(l)||w.arena){w.found=new Set(saved);return null;}
 const key=stageKey(l),L=w.layout,fy=y=>Math.max(L.floorTop+4,Math.min(L.floorBottom-2,y));
 const all=[...L.secrets.map(x=>({...x,chest:true})),...(SECRET_SPOTS[key]||[]).map(x=>({id:x.id,x:x.x,y:fy(x.y),loot:x.loot,name:'Hidden cache',hidden:true}))];
 s.delve??=emptyDelve();let d=prev?.draft;if(!d){d=draftRun(l,k,s.delve.runs|0,all.map(x=>({id:x.id,chest:!!x.chest})));s.delve.runs=(s.delve.runs|0)+1;}
 if(w.level.encounter)d=compatibleDraft(d);w.draft=d;{const waves=draftWaves(w.level.waves||[],d,!!w.level.encounter);if(waves!==w.level.waves)w.level={...w.level,waves};}
 L.allSecrets=all;L.secrets=all.filter(x=>d.active.includes(x.id)&&x.id!==d.mimic);
 w.found=new Set(prev?.found||[]);
 Object.assign(w.run,{guaranteed:[...(prev?.guaranteed||[])],bossPaid:[...(prev?.bossPaid||[])],bossFirst:[...(prev?.bossFirst||[])],cacheEssence:prev?.cacheEssence|0,knockouts:prev?.knockouts|0,carry:prev?.carry||0,killCarry:prev?.killCarry||0,elites:prev?.elites|0,lostCarry:prev?.lost||0,drank:!!prev?.drank,mimic:!!prev?.mimic,blessing:!!prev?.blessing,seal:!!prev?.seal,essence:prev?.essence|0});
 if(d.blessing){const y=L.floorTop+18;let x=(L.spawn?.x||60)+110;for(let t=0;t<30&&(L.blocked(x,y)||L.blocked(x-10,y)||L.blocked(x+10,y));t++)x+=8;
  w.shrine={x,y,key:d.blessing,used:false};if(prev?.blessing)applyBlessing(w,true);img(SHRINE_ART);}
 /* the Scholar's Seal stands in the walk after the first fight (or before it on a one-wave level), clear of collision */
 if(d.seal&&sealReady(s)){const A=L.arenas,y=L.floorTop+16;let x=A.length>1?Math.round((A[0].x1+A[1].x0)/2):Math.max((L.spawn?.x||60)+240,(A[0]?.x0||400)-120);for(let t=0;t<30&&(L.blocked(x,y)||L.blocked(x-10,y)||L.blocked(x+10,y));t++)x+=8;w.seal={x,y,broken:!!prev?.seal};img(SEAL_ART);}
 if(d.mimic&&!prev?.mimicDone){const m=all.find(x=>x.id===d.mimic);if(m){w.mimic={x:m.x,y:m.y,id:m.id,state:'sleep',t:0};loadSprite('mimic');}}
 if(!prev){const text=draftBanner(d,t=>baseDef(t).name,!!globalThis.document?.documentElement?.classList?.contains('m-mode'));if(text)w.events.toast?.(text);}
 return d;}
/* ---- the Blessing shrine ---- */
function blessBase(w){const B=BLESSINGS[w.blessing],b=w.base;if(!B||!b)return;
 if(B.atk){b.atk*=B.atk;b.mag*=B.atk;}if(B.hp)b.hp=Math.round(b.hp*B.hp);if(B.cdr)b.cdr=(b.cdr||0)+B.cdr;if(B.def)b.def+=B.def;if(B.speed)b.speed*=B.speed;}
export function applyBlessing(w,quiet=false){const sh=w.shrine;if(!sh||sh.used&&!quiet)return false;sh.used=true;w.blessing=sh.key;w.run.blessing=true;
 const p=w.player,f=p.maxHp?p.hp/p.maxHp:1;blessBase(w);p.maxHp=w.base.hp;p.hp=Math.max(1,Math.round(p.maxHp*f));
 if(!quiet){const B=BLESSINGS[sh.key];w.effect?.('nova',sh.x,sh.y-20,{element:'holy',radius:48,life:.8,max:.8});w.text?.(B.name,p.x,p.y-40,B.color,true);w.events.toast?.(`${B.name}: ${B.text}`);sfx('potion');}
 return true;}
/* World.refreshStats rebuilt the base (new jewellery mid-level): put the blessing back on it. */
export function runStats(w){if(w.blessing)blessBase(w);}
export const nearShrine=(w,r=44)=>{const sh=w.shrine,p=w.player;return !!sh&&!sh.used&&Math.hypot(sh.x-p.x,(sh.y-p.y)*1.4)<r;};
export function runInteract(w){if(nearShrine(w))return applyBlessing(w);return false;}
/* ---- the Scholar's Seal: main.js opens it (a modal, so the level is paused) and calls breakSeal on 2 right answers ---- */
export const nearSeal=(w,r=44)=>{const z=w.seal,p=w.player;return !!z&&!z.broken&&!!w.level&&!w.ended&&Math.hypot(z.x-p.x,(z.y-p.y)*1.4)<r;};
export function breakSeal(w){const z=w.seal;if(!z||z.broken||!w.run)return false;z.broken=true;w.run.seal=true;const S=w.save;(S.gear.mats??={})[ESSENCE]=(S.gear.mats[ESSENCE]||0)+2;w.run.essence=(w.run.essence|0)+2;((S.delve??=emptyDelve()).seals??={})[w.level.id]=1;w.effect?.('nova',z.x,z.y-24,{element:'arcane',radius:48,life:.8,max:.8});w.events.persist?.();return true;}
/* ---- secrets: the first find of a spot pays its loot once (as before); every later find counts and reserves Essence for victory (carried through wave retries) ---- */
export function runSecret(w,s){if(!w.level||w.found.has(s.id))return null;w.found.add(s.id);const S=w.save;
 const r=S.levels[w.level.id]??={done:false,best:{time:null,score:0},plays:0};let loot;
 if(!w.paid.has(s.id)||!w.draft){w.paid.add(s.id);(r.secrets??=[]).push(s.id);const [kind,amt]=String(s.loot).split(':'),n=Math.max(1,Math.floor(+amt||(kind==='gold'?25:1)));
  loot=kind==='potion'?{kind,n,label:`${n} health potion${n>1?'s':''}`}:{kind:'gold',n,label:`${n} gold`};if(loot.kind==='potion')S.potions+=n;else S.gold+=n;}
 else{const n=w.tierKey==='normal'?1:2;w.run.cacheEssence=(w.run.cacheEssence|0)+n;loot={kind:'essence',n,label:`${n} Essence on victory`};}
 if(w.draft){loot.count=[...w.found].filter(id=>w.draft.active.includes(id)).length;loot.of=w.draft.active.length;}
 w.run?.secrets.push({id:s.id,...loot});return loot;}
/* ---- kills: elites count for Bonus; the Mimic pays its spot ---- */
export function runKill(w,e){if(!w.run||!w.draft)return;if(e.elite||e.mod)w.run.elites=(w.run.elites|0)+1;
 if(e.mimic&&w.mimic){const m=w.mimic;m.state='dead';w.run.mimic=true;w.found.add(m.id);const S=w.save,r=S.levels[w.level.id]??={done:false,best:{time:null,score:0},plays:0};
  if(!w.paid.has(m.id)){w.paid.add(m.id);(r.secrets??=[]).push(m.id);}(S.gear.mats??={})[ESSENCE]=(S.gear.mats[ESSENCE]||0)+3;w.run.essence=(w.run.essence|0)+3;
  w.run.secrets.push({id:m.id,kind:'essence',n:3,label:'Mimic beaten: 3 Essence'});w.events.toast?.('Chest monster beaten! +3 Essence for gear upgrades.');}}
/* ---- each frame: the Mimic wakes with a clear warning (a "!", a shake, a second before it moves), never by surprise ---- */
export const MIMIC_WAKE=1.2,MIMIC_RANGE=46;
export function runTick(w,dt){const m=w.mimic;if(!m||w.ended||!w.level)return;const p=w.player;
 if(m.state==='sleep'){if(Math.hypot(p.x-m.x,(p.y-m.y)*1.5)<MIMIC_RANGE&&(w.flow==='walk'||w.flow==='go')){m.state='wake';m.t=0;w.text?.('!',m.x,m.y-44,'#ffd27a',true);w.events.toast?.('Mimic! This chest is a monster.');sfx('hurt');}}
 else if(m.state==='wake'){m.t+=dt;if(m.t>=MIMIC_WAKE){const e=makeEnemy('mimic',{tier:w.tier?.()||1});e.mimic=true;const at=w.spawn(e,m.x,m.y);if(at){at.facing=p.x<m.x?-1:1;at.cool=1.4;}m.state='fight';}}}
/* ---- drawing: depth-sorted with the actors (World.enemyLayer) ---- */
const glint=(c,x,y,a,col='#fff3c4')=>{c.save();c.globalAlpha=a;c.fillStyle=col;const r=Math.round(2+a*3);c.fillRect(Math.round(x)-r,Math.round(y),r*2+1,1);c.fillRect(Math.round(x),Math.round(y)-r,1,r*2+1);c.fillRect(Math.round(x)-1,Math.round(y)-1,3,3);c.restore();};
/* Under reduced motion (Settings) every effect here holds still: the glints stay faintly lit, nothing pulses or shakes. */
export function runLayer(w,c,t){const out=[];if(!w.draft||!w.layout)return out;const still=w.motion===false;
 for(const s of w.layout.secrets){if(!s.hidden||w.found.has(s.id))continue;const ph=((t+(s.x%7)*.37)%2.6)/2.6,a=still?.45:ph<.25?Math.sin(ph/.25*Math.PI):0;if(a>0)out.push({y:s.y-1,draw:()=>glint(c,s.x,s.y-10,a)});}
 const sh=w.shrine;if(sh){const B=BLESSINGS[sh.key];out.push({y:sh.y,draw:()=>{const im=img(SHRINE_ART);
  if(!sh.used){c.save();c.globalAlpha=still?.3:.25+.15*Math.sin(t*3);c.fillStyle=B.color;c.beginPath();c.ellipse(Math.round(sh.x),Math.round(sh.y),18,6,0,0,Math.PI*2);c.fill();c.restore();}
  if(im)c.drawImage(im,Math.round(sh.x-im.width/2),Math.round(sh.y-im.height+4));
  if(!sh.used&&nearShrine(w,52))glint(c,sh.x,sh.y-50,still?.8:.6+.4*Math.sin(t*6),B.color);}});}
 const z=w.seal;if(z)out.push({y:z.y,draw:()=>{const im=img(SEAL_ART);if(!z.broken){c.save();c.globalAlpha=still?.3:.22+.12*Math.sin(t*2.4);c.fillStyle='#8fd0ff';c.beginPath();c.ellipse(Math.round(z.x),Math.round(z.y),16,5,0,0,Math.PI*2);c.fill();c.restore();}
  if(im){c.save();if(z.broken)c.globalAlpha=.6;c.drawImage(im,Math.round(z.x-im.width/2),Math.round(z.y-im.height+4));c.restore();}}});
 const m=w.mimic;if(m&&(m.state==='sleep'||m.state==='wake'))out.push({y:m.y,draw:()=>{const shake=m.state==='wake'&&!still?Math.round(Math.sin(t*50)*1.5):0;
  c.save();c.globalAlpha=.3;c.fillStyle='#000';c.beginPath();c.ellipse(Math.round(m.x),Math.round(m.y),16,4,0,0,Math.PI*2);c.fill();c.restore();
  drawSprite(c,'mimic',m.state==='wake'?'hurt':'idle',still?0:t,m.x+shake,m.y,{facing:w.player.x<m.x?-1:1,scale:enemyRenderScale({scale:1})});}});
 return out;}
/* ---- the end of a run: grade, best grade, Delver XP, chests, the Boss Meter and tasks ---- */
export function runFinish(w,won,{time,gold}){const l=levelById(w.level?.id);if(!w.draft||!l)return null;const s=w.save,k=w.tierKey||'normal';
 const top=s.levels[l.id],r=k==='normal'?top:top?.tiers?.[k];if(!r)return null;r.best??={time:null,score:0};
 const sc=scoreRun({won,time:time+(w.run.carry||0),par:levelParFor(l,k),tier:k,waves:won?w.layout.arenas.length:Math.min(w.wave|0,w.layout.arenas.length),wavesTotal:w.layout.arenas.length,
  knockouts:w.run.knockouts|0,lost:(w.run.lostCarry||0)+netLost(w.run)/Math.max(1,w.player.maxHp),found:[...w.found].filter(id=>w.draft.active.includes(id)).length,elites:w.run.elites|0,mimic:w.run.mimic,seal:w.run.seal,blessing:w.run.blessing,potions:w.run.drank?1:0,abilities:w.run.damage>0?(w.run.abilDamage||0)/w.run.damage:null});
 const prevBest=r.best.grade||null,newBest=!!sc.grade&&gradeRank(sc.grade)>gradeRank(prevBest);if(newBest)r.best.grade=sc.grade;
 const advBefore=adventurerLevel(s).level;const delve=awardRun(s,l,{won,grade:sc.grade,tier:k,prevBest,progress:(w.run.waves||0)/Math.max(1,w.layout.arenas.length)});
 let chests=[],meter=null;if(won){const n=w.run.cacheEssence|0;if(n){(s.gear.mats??={})[ESSENCE]=(s.gear.mats[ESSENCE]||0)+n;w.run.essence=(w.run.essence|0)+n;w.run.cacheEssence=0;}chests=openChests(s,{grade:sc.grade,boss:l.boss,kill:{mats:w.run.mats,items:w.run.gear},gold});settleMeter(s,l.id);const t=tickMeter(s,l.id,{total:sc.total,tier:k,double:sc.grade==='S+'});meter={...t.meter,added:t.added,paid:t.paid};}
 else meter={...meterOf(s,l.id),added:0,paid:null};
 const tasks=syncTasks(s),adv={before:advBefore,after:adventurerLevel(s).level};
 return {...sc,adv,paidBosses:[...(w.run.bossPaid||[])],firstBosses:[...(w.run.bossFirst||[])],guaranteed:[...(w.run.guaranteed||[])],prevBest,newBest,chests,meter,delve,tasks,essence:w.run.essence|0,time:Math.round((time+(w.run.carry||0))*10)/10,draft:{blessing:w.draft.blessing,mini:w.draft.mini,mimic:!!w.draft.mimic,echo:w.draft.echo}};}
