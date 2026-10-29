// World-map scene: the Castle Crashers level select. Contract (docs/GAME_V2_PLAN.md): enter(ctx), update(dt,input),
// draw(c,t), exit(); talks back through ctx.onPlay(levelId), ctx.onHome(), ctx.onStats(), and in view mode ctx.onResume().
// ctx.view={id,name} (W1, 24 Oct port): M pressed inside a level shows the map over the paused run; its own pad (Enter), Esc
// and M resume it, and main.js asks before any other pad or Home ends the run.
// main.js also forwards key(k) (lower-cased KeyboardEvent.key; returns true when the map used it) and tap(x,y)
// (canvas pixels, 480x270). Layout: game/worldmap-layout.js. Drawing: gfx/worldmap-art.js.
import {LEVELS,CHAPTERS,levelById,levelOpen,levelDone,tiered,tierOpen,tierDone,starsOf,totalStars,maxStars,starsShort,tierCrests,chapterBorder} from '../game/levels.js';
import {ladderGoal} from '../game/ladder-guide.js';
import {updateMapPanel,clearMapPanel} from '../ui/worldmap-panel.js';
import {reducedMotion} from '../ui/settings.js';
import {TIER_KEYS,TIERS} from '../game/tiers.js';
import {MAPS,PADS,ROADS,nodes,edges,neighbours,pathPoints,roadRoute,nodeState,isGate,gateById,gateArrival,playableChapter} from '../game/worldmap-layout.js';
import {drawWorldmap,makeArt,camera,boardPoint,VIEW_W,VIEW_H,BAR_HIT,signHit,tabHit,travelTabHit} from '../gfx/worldmap-art.js';
import {drawSprite,loadSprite} from '../gfx/actors/sprites.js';
import {heroAtlas,drawHero as drawHeroSprite} from '../gfx/actors/hero-sprites.js';
import {ENEMY_TYPES} from '../game/enemies.js';
import {visitPlace,canTravel,isStop} from '../game/fasttravel.js';

/* W1 (owner, 15 Oct; ported 24 Oct): the hero walks at SPEED px/s, faster on long routes, so any trip ends within TRIP_S s */
const SPEED=150;export const TRIP_S=1.2;
/* Boss names until game/enemies.js ships its own (ctx.bossName(key) wins when main.js passes it). */
/* v2:levels -- names that fit the plate: the part before a comma, then without a leading "The" */
const shortName=n=>{if(n.length<=16)return n;let m=n.split(',')[0];if(m.length>16)m=m.replace(/^The /,'');return m;};
const BOSS_NAMES={'goblin-king':'Goblin Chief','slime-king':'The Bog King','orc-warlord':'Orc Warlord','minotaur':'The Minotaur','skeleton-king':'Skeleton King','orc-shaman':'Orc Shaman','stone-golem':'Stone Golem','thorn-king':'The Thorn King','dungeon-master':'Dungeon Master','demon-slime':'Moltar, the Forge Ogre','cthulhu':'The Drowned One'};
const titleCase=k=>String(k).split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
let S=null,art=null,artPromise=null;const memory={chapter:null,at:null};
const chapterOfLevel=id=>levelById(id)?.chapter;
/* Where a fresh visit starts: the furthest open-but-unfinished level, else the furthest finished one, else home. */
/* oct24-ch3: the main road's next level comes first; an open side level (ex1, vx1...) only when no main level is open. A child who
   skipped Bandit Road and beat Moltar opened the map in the Elderwood while the HUD said "Next adventure: Drowned Shrine" */
export function frontier(save){let best='home',side=null;for(const l of LEVELS){if(l.kind!=='level'||l.hidden)continue;if(levelOpen(save,l.id)&&!levelDone(save,l.id)){if(!l.optional)return l.id;side??=l.id;}if(levelDone(save,l.id))best=l.id;}return side||best;}
export const artReady=()=>!!art;
/* opts: {loader, json, mod} for node renders; the browser defaults otherwise. */
export function preload(opts){if(!art){art=makeArt(opts);artPromise=art.uiReady;}return artPromise;}
export const sceneReady=chapter=>{preload();return art.scene(chapter).ready;};

export function enter(ctx={}){const save=ctx.save||{};let at=ctx.view?.id||ctx.at||memory.at;if(!at||(!isGate(at)&&!levelById(at)))at=frontier(save);
 /* the pacing enemies' bodies load with the map, so they are there on the first frame */
 for(const l of LEVELS){const k=firstFoe(l);if(k)loadSprite(ENEMY_TYPES[k].sprite);}
 let chapter=isGate(at)?at.slice(5).split('>')[0]:chapterOfLevel(at)||'elderwood';
 /* a chapter that is not built yet: stand at the road out of the last one that is */
 if(!playableChapter(chapter)){chapter='elderwood';at=MAPS.elderwood.gates[0]?.id||'home';}
 S={ctx,save,chapter,at,walk:null,queue:[],trip:false,speed:SPEED,view:ctx.view||null,cam:{x:0,y:0},hero:{x:0,y:0,facing:1,direction:'down',lastDirection:'down',moving:false,walk:0},held:{},fade:1,fadeTo:0,banner:2.4,toast:null,toastT:0,pending:null,time:0,heroKey:'',heroImg:null};
 const n=nodeAt(at);if(n){S.hero.x=n.x;S.hero.y=n.y;}snapCam();preload();reached(at);
 /* a level just won: walk a light along each road it opened, then pop the new pad open */
 S.reveals=[];S.hidden=new Set();S.still=0;if(ctx.reveal&&levelById(ctx.reveal)){const unlocks=edges(S.chapter).flatMap(([a,b])=>a===ctx.reveal?[b]:b===ctx.reveal?[a]:[]);for(const id of unlocks){const l=levelById(id);const opens=isGate(id)?nodeState(save,id)==='open':(l&&l.requires.includes(ctx.reveal)&&levelOpen(save,id));if(!opens||levelDone(save,id))continue;{const pts=pathPoints(S.chapter,ctx.reveal,id);let len=0;for(let i=1;i<pts.length;i++)len+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);S.reveals.push({to:id,pts,p:0,len});}S.hidden.add(id);}
  /* on a painted road one light runs on through pads it passes (e2 -> trader -> Orc Warcamp): a reveal whose pad lies on a longer one rides along it */
  if(ROADS[S.chapter]){const on=(r,id)=>(roadRoute(S.chapter,ctx.reveal,r.to)||[]).includes(id);for(const r of S.reveals){const host=S.reveals.find(o=>o!==r&&on(o,r.to));if(host){r.ride=host;const e=PADS[r.to]||nodeAt(r.to);(host.marks||=[]).push([host.pts.findIndex(p=>Math.hypot(p[0]-e.x,p[1]-e.y)<2),r.to]);}}S.reveals=S.reveals.filter(r=>!r.ride);}}
 if(reducedMotion(save)){S.reveals=[];S.hidden.clear();}S.banner=S.reveals.length?0:S.banner;
 /* after a win, walk on to the pad it opened (main road before a side path) so confirming moves forward; a pad whose light rides along a longer road still counts (oct24-r3: e5 opened e6 on the road to the Mushroom Mire and the walk went to the side path) */
 /* oct24-progress (playtest r3 D4): a chapter's last win opens only the gate, and the hero stood still on Thorn Keep; the walk now
    heads through an opened gate when no main-road pad opened (main road, then the gate, then a side path) */
 S.autoTo=S.reveals.flatMap(r=>[r.to,...(r.marks||[]).map(m=>m[1])]).sort((a,b)=>rank(a)-rank(b))[0]||null;
 heroAtlas({appearance:ctx.hero||save.hero||'warrior',armor:ctx.armor||0});}
/* oct24-r3 playtest: leaving during a win reveal (H for Home) or the walk after it used to remember the pad just won, so the next
   visit opened on it and Enter replayed it; the map now remembers where that walk was going. */
/* oct24-endgame: the ending's look back over each chapter (main.js cineLook, ctx.look) leaves the map's memory as it was */
export function exit(){clearMapPanel();if(S&&!S.ctx?.look&&!S.view){memory.chapter=S.chapter;memory.at=S.walk?.to||(S.reveals?.length?S.autoTo:null)||S.at;}S=null;}
export const active=()=>!!S;
function nodeAt(id){return nodes(S.chapter).find(n=>n.id===id);}
/* camera centre: the hero, held a little above the middle so the bar never covers the pad */
/* At rest the camera frames the pad, a slice of its landmark and the road to the next pad (Castle Crashers reads
   the route at a glance); the offset is capped so the hero never leaves the middle third of the view. */
/* Frame the current pad and the next open pad together when both fit (the midpoint, so the road between them is in
   view), otherwise lean toward the next one; with no next pad, lean toward the pad's landmark. */
function lean2(lp,ahead){if(!lp)return[0,0];if(ahead){const dx=ahead.x-S.hero.x,dy=ahead.y-S.hero.y,fit=Math.abs(dx)<=VIEW_W-150&&Math.abs(dy)<=VIEW_H-130;const k=fit?.5:.42;return[Math.max(-170,Math.min(170,dx*k)),Math.max(-70,Math.min(70,dy*k))];}return[(lp.lx|0)*.3,Math.max(-60,Math.min(30,(lp.ly|0)*.3))];}
/* opening the map starts on the hero, then the camera eases out to frame the way on */
function snapCam(){if(MAPS[S.chapter]?.fit){S.cam.x=MAPS[S.chapter].w/2;S.cam.y=MAPS[S.chapter].h/2;art?.scene(S.chapter);return;}S.cam.x=S.hero.x;S.cam.y=S.hero.y+(landmarked()?-18:12);art?.scene(S.chapter);}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function toast(msg){S.toast=msg;S.toastT=2.2;}
/* fast travel (25 Oct, game/fasttravel.js): a stop unlocks the first time the hero stands on it (view mode too: the hero did walk
   there); main.js saves when unlocked() says so */
function reached(id){if(S&&!S.ctx?.look&&isStop(id)&&visitPlace(S.save,id))S.unlocked=true;}
export const unlocked=()=>{if(!S?.unlocked)return false;S.unlocked=false;return true;};
/** A line on the map's card (main.js: why fast travel cannot open now). */
export const notice=msg=>{if(S)toast(msg);};
/** The stop the hero stands on (the picker's "You are here"); null mid-walk. */
/* the Fast travel tab's label: none in view mode (a run is paused underneath), the ending's look back, or without a handler */
const travelLabel=()=>S&&!S.view&&!S.ctx.look&&S.ctx.onTravel?(S.ctx.travelKey&&!globalThis.document?.documentElement?.classList?.contains('m-mode')?`Fast travel ${S.ctx.travelKey}`:'Fast travel'):null;
export const here=()=>S&&!S.walk&&!S.pending?S.at:null;
/** Fast travel to a stop already reached, in any open chapter: a dip to black and back (about 0.6 s), no walk. Any key or tap
    during the dip lands at once. False when the stop cannot be reached that way (never past a star gate or a closed chapter). */
export function travelTo(id){if(!S||S.view||S.pending||!canTravel(S.save,id))return false;const ch=chapterOfLevel(id);if(!playableChapter(ch))return false;
 S.walk=null;S.queue=[];S.trip=false;S.tour=null;S.reveals=[];S.hidden.clear();S.autoTo=null;S.hero.moving=false;
 const other=ch!==S.chapter;S.fadeTo=1;S.jump=true;S.pending=()=>{S.chapter=ch;S.at=id;const n=nodeAt(id);if(n){S.hero.x=n.x;S.hero.y=n.y;}snapCam();S.still=0;S.fadeTo=0;S.jump=false;if(other)S.banner=2.4;if(!S.view){memory.at=S.at;memory.chapter=S.chapter;}};return true;}
/* a key or tap mid-jump lands at once */
function landNow(){if(!S?.jump||!S.pending)return false;const p=S.pending;S.pending=null;p();S.fade=0;return true;}
function stateOf(id){return S.hidden?.has(id)?'locked':nodeState(S.save,id);}

/* Start walking from S.at to a neighbouring node. */
function walkTo(id){if(stateOf(id)==='soon'){toast(gateById(id).label.replace(/^To (the )?/,'')+' is coming soon');return false;}if(stateOf(id)==='locked'){const l=levelById(id),req=l?.requires.map(r=>levelById(r)?.name).filter(Boolean).join(' or '),g=starsShort(S.save,id);toast(isGate(id)?gateStars(id)||'The road is closed for now':g?starLine(g):req?'Clear '+req+' first':'Locked');return false;}
 const pts=pathPoints(S.chapter,S.at,id);if(pts.length<2)return false;const lens=[0];for(let i=1;i<pts.length;i++)lens.push(lens[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));
 S.walk={to:id,pts,lens,d:0};
 /* the speed is set once per trip, from the whole route still to walk (queued pads too), so the longest trip ends within TRIP_S */
 if(!S.trip){let tot=lens[lens.length-1],prev=id;for(const q of S.queue){tot+=segLen(pathPoints(S.chapter,prev,q));prev=q;}S.speed=Math.max(SPEED,tot/(TRIP_S-.05));S.trip=true;}return true;}
const segLen=pts=>{let L=0;for(let i=1;i<pts.length;i++)L+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);return L;};
/* Neighbour that best matches a direction (dx,dy), judged by where its road leaves this pad. */
function pick(dx,dy){let best=null,score=.35;for(const id of neighbours(S.chapter,S.at)){const p=pathPoints(S.chapter,S.at,id);if(p.length<2)continue;const q=p[Math.min(p.length-1,6)],far=p[p.length-1];
 const vx=(q[0]-p[0][0])*.6+(far[0]-p[0][0])*.4,vy=(q[1]-p[0][1])*.6+(far[1]-p[0][1])*.4,L=Math.hypot(vx,vy)||1;const sc=(vx*dx+vy*dy)/L;if(sc>score){score=sc;best=id;}}return best;}
/* Shortest route over enterable nodes (for taps). */
function route(target){const prev={[S.at]:null},q=[S.at];while(q.length){const c=q.shift();if(c===target)break;for(const n of neighbours(S.chapter,c))if(!(n in prev)&&(n===target||stateOf(n)!=='locked')){prev[n]=c;q.push(n);}}
 if(!(target in prev))return null;const path=[];for(let c=target;c!==S.at;c=prev[c])path.unshift(c);return path;}

function arrive(){const id=S.walk.to;S.at=id;S.walk=null;reached(id);if(!S.view){memory.at=id;memory.chapter=S.chapter;}S.hero.moving=false;
 if(S.queue.length&&walkTo(S.queue.shift()))return;S.queue=[];S.trip=false;
 if(isGate(id)&&stateOf(id)!=='locked')travel(id);}
/* Follow the local road tangent; horizontal facing is independent of a north/south pose. */
function moveHero(x,y){const h=S.hero,dx=x-h.x,dy=y-h.y;if(Math.abs(dx)>.05)h.facing=dx>0?1:-1;
 if(Math.hypot(dx,dy)>.001)h.lastDirection=h.direction=Math.abs(dy)>Math.abs(dx)?(dy<0?'up':'down'):'side';h.x=x;h.y=y;}
function travel(gateId){const g=gateById(gateId),arr=gateArrival(g);if(!g||!arr)return;S.fadeTo=1;S.pending=()=>{S.chapter=g.to;S.at=arr.id;const n=nodeAt(arr.id);S.hero.x=n.x;S.hero.y=n.y;snapCam();S.fadeTo=0;S.banner=2.4;if(!S.view){memory.at=S.at;memory.chapter=S.chapter;}
  /* step off the gate onto the first pad of the new map */
  const next=neighbours(S.chapter,S.at).find(id=>!isGate(id));if(next&&stateOf(next)!=='locked')walkTo(next);};}
function confirm(){if(!S||S.walk||S.fadeTo>0)return;const id=S.at,n=nodeAt(id);if(!n)return;const st=stateOf(id);
 /* view mode: the level being played is "Resume" */
 if(S.view&&id===S.view.id){S.ctx.onResume?.();return;}
 if(n.kind==='home'){S.ctx.onHome?.();return;}if(n.kind==='gate'){if(st==='soon')toast(n.name.replace(/^To (the )?/,'')+' is coming soon');else if(st==='locked')toast(gateStars(id)||'The road is closed for now');else travel(id);return;}
 if(st==='locked'){const g=starsShort(S.save,id);toast(g?starLine(g):'Locked');return;}S.ctx.onPlay?.(id);}
/* Star gates (game/levels.js): the canvas font has no star glyph, so the map says "stars" in words. */
const starLine=g=>`${g.have}/${g.need} stars needed.`;
/* a chapter gate whose first level waits on a star gate says so */
function gateStars(id){const g=gateById(id);if(!g)return '';for(const l of LEVELS){if(l.chapter!==g.to)continue;const s=starsShort(S.save,l.id);if(s)return ladderGoal(S.save,l);}return '';}
/* Compact progress uses letters and counts because the canvas font has no star glyph. */
export function tierLine(save,l){if(!tiered(l)||!levelOpen(save,l.id))return '';return TIER_KEYS.map(k=>`${TIERS[k].label} ${tierOpen(save,l.id,k)?starsOf(save,l.id,k)+'/3 stars':'locked'}`).join(' · ');}

/* W1 chapter tabs (24 Oct port): a chapter is open once any of its stops is; its tab lands on that chapter's next stop, the
   same rule as frontier() (the main road first, then a side stop, else the last main stop cleared, else where its road arrives). */
const shortChapter=c=>c.id==='veilmoor'?'Veilmoor':c.name;
export function chapterOpen(save,ch){return playableChapter(ch)&&LEVELS.some(l=>l.chapter===ch&&!l.hidden&&l.kind!=='home'&&levelOpen(save,l.id));}
export function chapterFrontier(save,ch){let best=null,main=null,side=null;for(const l of LEVELS){if(l.chapter!==ch||l.kind!=='level'||l.hidden)continue;if(levelOpen(save,l.id)&&!levelDone(save,l.id)){if(!l.optional)return l.id;side??=l.id;}if(levelDone(save,l.id)){best=l.id;if(!l.optional)main=l.id;}}
 /* a cleared chapter opens on its last main-road stop (its boss), not on a side path cleared after it */
 if(side||main||best)return side||main||best;if(ch==='elderwood')return 'home';const g=Object.values(MAPS).flatMap(m=>m.gates).find(g=>g.to===ch);return gateArrival(g)?.id||null;}
function lockedChapterLine(ch){const c=CHAPTERS.find(c=>c.id===ch);if(!playableChapter(ch))return shortChapter(c)+' is coming soon';for(const l of LEVELS){if(l.chapter!==ch||l.hidden)continue;if(starsShort(S.save,l.id))return ladderGoal(S.save,l);}
 const first=LEVELS.find(l=>l.chapter===ch&&!l.hidden&&l.requires.some(r=>levelById(r)?.chapter!==ch)),req=first?.requires.map(levelById).find(r=>r&&r.chapter!==ch);return req?`Clear ${req.name} to open ${shortChapter(c)}`:shortChapter(c)+' is still locked';}
function gotoChapter(ch){if(!S||S.fadeTo>0||S.pending||!CHAPTERS.some(c=>c.id===ch))return false;if(ch!==S.chapter&&!chapterOpen(S.save,ch)){toast(lockedChapterLine(ch));return false;}
 const id=chapterFrontier(S.save,ch);S.walk=null;S.queue=[];S.trip=false;S.tour=null;S.reveals=[];S.hidden.clear();S.autoTo=null;S.hero.moving=false;
 const place=()=>{S.chapter=ch;S.at=id;const n=nodeAt(id);if(n){S.hero.x=n.x;S.hero.y=n.y;}snapCam();S.still=0;reached(id);if(!S.view){memory.at=S.at;memory.chapter=S.chapter;}};
 if(ch===S.chapter){if(id&&id!==S.at)place();return true;}S.fadeTo=1;S.pending=()=>{place();S.fadeTo=0;S.banner=2.4;};return true;}
/* tools and tests: a chapter tab by id */
export const showChapter=ch=>gotoChapter(ch);
const chapterTabs=()=>CHAPTERS.map(c=>({id:c.id,name:shortChapter(c),active:c.id===S.chapter,open:c.id===S.chapter||chapterOpen(S.save,c.id)}));

export function key(k){if(!S)return false;k=String(k).toLowerCase();if(landNow())return true;
 if(k==='1'||k==='2'||k==='3'){gotoChapter(CHAPTERS[+k-1]?.id);return true;}
 if(k==='['||k===']'||k==='pageup'||k==='pagedown'){const open=CHAPTERS.filter(c=>c.id===S.chapter||chapterOpen(S.save,c.id)),i=open.findIndex(c=>c.id===S.chapter),c=open[(i+(k==='['||k==='pageup'?-1:1)+open.length)%open.length];if(c&&c.id!==S.chapter)gotoChapter(c.id);return true;}
if(S.reveals.length&&(k==='enter'||k===' '||k==='e'||k==='j')){S.hidden.clear();S.reveals=[];goOn();return true;}
 if(k==='enter'||k===' '||k==='e'||k==='j'){confirm();return true;}
 /* view mode: Esc goes back into the paused level; H still means Home (main.js asks first) */
 if(S.view&&(k==='escape'||k==='backspace')){S.ctx.onResume?.();return true;}
 if(k==='h'||k==='escape'||k==='backspace'){S.ctx.onHome?.();return true;}
 if(k==='tab'||k==='y'){S.ctx.onStats?.();return true;}
 /* M on the map: the camera glides along the whole route, pad by pad, and back (the chapter at 1:1, no zoom-out) */
 if(k==='m'){if(MAPS[S.chapter]?.fit)return true;if(S.tour){S.tour=null;}else if(!S.walk){S.tour={list:routeOrder(),i:0,t:0};}return true;}
 return ['arrowup','arrowdown','arrowleft','arrowright','w','a','s','d'].includes(k);}
export function tap(x,y){if(!S)return false;if(landNow())return true;if(S.reveals.length){S.hidden.clear();S.reveals=[];goOn();return true;}const hit=(r)=>x>=r[0]&&x<r[0]+r[2]&&y>=r[1]&&y<r[1]+r[3];
 const H=MAPS[S.chapter]?.art?signHit(!!globalThis.document?.documentElement?.classList?.contains('m-mode')):BAR_HIT;if(travelTabHit(x,y,travelLabel(),!!globalThis.document?.documentElement?.classList?.contains('m-mode'))){S.ctx.onTravel?.();return true;}const tab=tabHit(x,y,chapterTabs(),!!globalThis.document?.documentElement?.classList?.contains('m-mode'));if(tab>=0){gotoChapter(CHAPTERS[tab].id);return true;}if(hit(H.home)){S.ctx.onHome?.();return true;}if(hit(H.stats)){S.ctx.onStats?.();return true;}if(hit(H.play)){confirm();return true;}
 const o=camera(S.chapter,S.cam),p=boardPoint(S.chapter,x,y,true),mx=p.x+o.x,my=p.y+o.y;let best=null,bd=40;for(const n of nodes(S.chapter)){const d=Math.hypot((mx-n.x)/1.6,my-n.y);if(d<bd){bd=d;best=n;}}if(!best)return false;
 if(best.id===S.at&&!S.walk){confirm();return true;}if(S.walk)return true;
 if(stateOf(best.id)==='locked'&&!neighbours(S.chapter,S.at).includes(best.id)){walkTo(best.id);return true;}
 const r=route(best.id);if(!r||!r.length){walkTo(best.id);return true;}
 /* fast travel (25 Oct): a tap keeps the walk -- every trip inside a chapter already ends within TRIP_S (W1), short enough; the
    picker (main.js, the Fast travel tab or T) is the direct way to any stop reached, across chapters too */
 S.queue=r.slice(1);walkTo(r[0]);return true;}

export function update(dt,input={}){if(!S)return;S.time+=dt;
 if(S.tour){S.tour.t+=dt;if(S.tour.t>1.1){S.tour.t=0;S.tour.i++;if(S.tour.i>=S.tour.list.length)S.tour=null;}if(S.tour&&['up','down','left','right'].some(k=>input[k]))S.tour=null;}
 if(S.burst){S.burst.t+=dt;if(S.burst.t>.6)S.burst=null;}
 if(S.reveals.length&&S.fade<.3){const r=S.reveals[0];const L=r.pts.length;r.p+=MAPS[S.chapter]?.art?dt/1.2:dt*260/Math.max(60,r.len);for(const m of r.marks||[])if(S.hidden.has(m[1])&&r.p*(L-1)>=m[0]){S.hidden.delete(m[1]);const e=r.pts[Math.max(0,m[0])];S.burst={x:e[0],y:e[1],t:0};}if(r.p>=1){S.hidden.delete(r.to);const e=r.pts[L-1];S.burst={x:e[0],y:e[1],t:0};S.reveals.shift();if(!S.reveals.length){toast('A new road is open');goOn();}}}
 S.still=S.walk||S.banner>0?0:S.still+dt;
 if(S.toastT>0){S.toastT-=dt;if(S.toastT<=0)S.toast=null;}if(S.banner>0)S.banner-=dt;
 const fs=dt*3.2;if(S.fade<S.fadeTo){S.fade=Math.min(S.fadeTo,S.fade+fs);if(S.fade>=1&&S.pending){const p=S.pending;S.pending=null;p();}}else if(S.fade>S.fadeTo)S.fade=Math.max(S.fadeTo,S.fade-fs);
 const dirs={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
 if(!S.walk&&S.fade<.5&&!S.pending&&!S.reveals.length){for(const [k,[dx,dy]] of Object.entries(dirs)){if(input[k]&&(!S.held[k]||S.held[k]>.28)){const id=pick(dx,dy);if(id){walkTo(id);S.queue=[];}else if(!S.held[k])S.held[k]=0;break;}}}
 for(const k of Object.keys(dirs))S.held[k]=input[k]?(S.held[k]||0)+dt:0;
 if(S.walk){const w=S.walk;w.d+=S.speed*dt;const L=w.lens[w.lens.length-1];if(w.d>=L){moveHero(...w.pts[w.pts.length-1]);arrive();/* the step past a pad carries on down the next road of the trip */if(S.walk&&S.walk!==w)S.walk.d=Math.min(w.d-L,S.walk.lens[S.walk.lens.length-1]-.01);}
  else{let i=1;while(w.lens[i]<w.d)i++;const t=(w.d-w.lens[i-1])/((w.lens[i]-w.lens[i-1])||1),a=w.pts[i-1],b=w.pts[i];moveHero(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t);S.hero.moving=true;S.hero.walk+=dt;}}
 /* at rest the camera leans toward the pad's landmark so the boss hint is in view */
 const tn=S.tour?nodeAt(S.tour.list[S.tour.i]):null,rv=S.reveals[0],fx=tn?[tn.x,tn.y-12]:rv?rv.pts[Math.floor(rv.p*(rv.pts.length-1))]:null,lp=!S.walk&&!fx?PADS[S.at]:null,ahead=lp?nodeAt(nextPad()):null,lean=lean2(lp,ahead),tx=fx?fx[0]:S.hero.x+lean[0],ty=(fx?fx[1]:S.hero.y)+(landmarked()?-18:12)+lean[1],k=MAPS[S.chapter]?.fit?0:1-Math.pow(.01,dt);S.cam.x+=(tx-S.cam.x)*k;S.cam.y+=(ty-S.cam.y)*k;
 /* standing still, the hero faces the next pad on the way */
 if(!S.walk){const nx=nextPad();if(nx){const n=nodeAt(nx);if(n&&Math.abs(n.x-S.hero.x)>4)S.hero.facing=n.x>S.hero.x?1:-1;}}}
/* Pads in route order from home (breadth-first over the roads), for the M overview glide. */
function routeOrder(){const start=nodes(S.chapter).find(n=>n.kind==='home')?.id||S.at,seen=[start],q=[start];while(q.length){for(const n of neighbours(S.chapter,q.shift()))if(!seen.includes(n)){seen.push(n);q.push(n);}}return [...seen,S.at];}
/* Put the blurb on the screen half away from the next pad, so the road ahead stays visible. */
/* On a chapter whose stops have landmarks standing behind their pads (the Castle Crashers layout, lm 'pl-*'), the landmark
   is the stop's picture, so the blurb always sits at the bottom and the camera frames the hero a little low. */
const landmarked=()=>Object.entries(PADS).some(([id,p])=>chapterOfLevel(id)===S.chapter&&String(p.lm).startsWith('pl-'));
function blurbSide(){if(landmarked())return 'bottom';const nx=nextPad(),n=nx&&nodeAt(nx);if(!n)return 'top';return n.y<S.hero.y-8?'bottom':'top';}
const rank=id=>isGate(id)?2:levelById(id)?.optional?3:levelById(id)?.kind==='level'?0:1;
function goOn(){const id=S.autoTo;S.autoTo=null;if(!id||S.walk||stateOf(id)==='locked')return;const r=route(id);if(r&&r.length){S.queue=r.slice(1);walkTo(r[0]);}}
function nextPad(){const ns=neighbours(S.chapter,S.at);return ns.find(id=>!isGate(id)&&stateOf(id)==='open'&&!levelById(id)?.optional)||ns.find(id=>stateOf(id)==='open')||null;}

/* Hero token: the current class's own 1x atlas (hero-<class>), idling on the pad, walking along the road. */
/* A map that lives (Castle Crashers' world feels like a place): until a level is cleared, two of its own enemies (the first
   of its first wave, the camp's goblins, the graveyard's skeletons) pace in front of its landmark. Clear it and they are gone. */
const firstFoe=l=>{const w=l?.waves?.[0],g=w&&(Array.isArray(w)?w:w.groups?.[0]);const k=Array.isArray(g)?g.find(x=>typeof x==='string'):null;return k&&ENEMY_TYPES[k]?.sprite?k:null;};
function wanderers(ns,t){const out=[];for(const n of ns){if(n.kind!=='level'||n.state==='done'||n.state==='soon'||!String(PADS[n.id]?.lm).startsWith('pl-'))continue;
  const key=firstFoe(n.level);if(!key)continue;const sprite=ENEMY_TYPES[key].sprite;
  /* they keep to the landmark's flanks, off the pad and the road, so the hero's spot stays clear */
  for(const [k,side] of [[0,-1],[1,1]]){const ph=n.x*.013+k*2.1,sp=.5+k*.13,dx=Math.sin(t*sp+ph)*8,vx=Math.cos(t*sp+ph);
   out.push({sprite,x:n.x+side*64+dx,y:n.y-9+k*3,facing:vx>=0?1:-1,moving:Math.abs(vx)>.25,t:t+ph});}}
 return out;}
function drawWanderer(c,w){drawSprite(c,w.sprite,w.moving?'walk':'idle',w.t,Math.round(w.x),Math.round(w.y),{facing:w.facing});}
function drawHero(c,x,y,t){const cls=S.ctx.hero||S.save.hero||'warrior';
 drawHeroSprite(c,{appearance:cls,x,y,hp:1,facing:S.hero.facing,moving:S.hero.moving,walkAge:S.hero.walk,direction:S.hero.direction,lastDirection:S.hero.lastDirection,noShadow:true,armor:S.ctx.armor||0,tier:S.ctx.tier||0},t);}
/* What the bar shows for the node the hero stands on (or is walking to). */
function info(){const id=S.walk?.to||S.at,n=nodeAt(id),st=stateOf(id);if(!n)return{};const l=n.level;
 if(n.kind==='gate')return{title:n.name.replace(/^To (the )?/,''),subtitle:st==='soon'?'Coming soon':st==='locked'?'The road is closed':'Travel',blurb:st==='soon'?'Mist hides the road beyond the wood. This land opens in a later update.':st==='locked'?(gateStars(id)||'Clear this land\'s last level to open the road.'):''};
 if(n.kind==='home')return{title:'Oakhaven',subtitle:'Your home town',blurb:'Rest, train at the Library and gear up.'};
 if(n.kind==='shop')return{title:l.name,subtitle:st==='locked'?'Locked':'Potions and gear',blurb:st==='locked'?lockLine(l):'Weapons, armour and potions for the road.'};
 if(n.kind==='arena')return{title:l.name,subtitle:st==='locked'?'Locked':'Endless waves',blurb:st==='locked'?lockLine(l):'Endless waves. How long can you last?'};
 /* v2:levels -- the map plate is narrow: a long boss name keeps its first part ("Grubnak, Goblin Chief" -> "Grubnak"); levels.js `plate` overrides */
 const full=l.bossName||S.ctx.bossName?.(l.boss)||BOSS_NAMES[l.boss]||(l.boss?titleCase(l.boss):''),boss=l.plate||shortName(full);
 /* polish2-oct29 (readiness #12): every card read only "Clear Goblin Camp."; it now says what is inside (the level's own blurb and its
    boss, from levels.js) above the goal. A locked stop keeps its secrets: no boss and no blurb until it opens. */
 return{title:l.name,boss:st==='locked'?'':boss,inside:st==='locked'?'':String(l.blurb||''),bossLine:st==='locked'||!full?'':`Boss: ${full}`,subtitle:st==='locked'?'Locked':'',blurb:ladderGoal(S.save,l),tiers:st==='locked'||!tiered(l)?[]:TIER_KEYS.map(k=>({key:k,label:TIERS[k].label,open:tierOpen(S.save,l.id,k),stars:starsOf(S.save,l.id,k),crest:tierCrests(S.save,l.id).includes(k)})),tierLine:st==='locked'?'':tierLine(S.save,l),side:!!l.optional};}
const lockLine=l=>{const g=starsShort(S.save,l.id);if(g)return ladderGoal(S.save,l);const req=l.requires.map(r=>levelById(r)?.name).filter(Boolean);return req.length?'Clear '+req.join(' or ')+' to open this.':'Locked.';};
const isFinale=id=>{const l=levelById(id);return!!l&&l.kind==='level'&&!l.optional&&!LEVELS.some(o=>o.chapter===l.chapter&&o.kind==='level'&&o.requires.includes(id));};
/* Painted board state: per pad the stars and the best tier cleared (the flag's tint), and the road links still closed (greyed). */
const bestTier=id=>[...TIER_KEYS].reverse().find(k=>tierDone(S.save,id,k))||null;
function closedRoads(rv){if(!ROADS[S.chapter])return null;const shut=id=>['locked','soon'].includes(stateOf(id)),lit=rv?rv.pts.slice(0,Math.floor(rv.p*(rv.pts.length-1))+1):[],out=[];
 for(const [a,b] of ROADS[S.chapter]){if(!shut(a)&&!shut(b))continue;let pts=pathPoints(S.chapter,a,b);if(lit.length)pts=pts.filter(p=>!lit.some(q=>Math.abs(q[0]-p[0])+Math.abs(q[1]-p[1])<3));
  /* stop short of an open pad so its oval stays bright */
  for(const e of [a,b])if(!shut(e)){const n=nodeAt(e);if(n)pts=pts.filter(p=>Math.hypot(p[0]-n.x,(p[1]-n.y)*1.8)>16);}
  if(pts.length)out.push({pts,ends:[a,b].filter(shut)});}
 return out;}
export function view(t){const ch=CHAPTERS.find(c=>c.id===S.chapter),board=!!MAPS[S.chapter]?.art;const ns=nodes(S.chapter).map(n=>{const st=stateOf(n.id),o={...n,state:st,boss:isFinale(n.id)};if(board&&n.level&&tiered(n.level)&&st==='done'){o.tier=bestTier(n.id);o.stars=starsOf(S.save,n.id,o.tier||'normal');}if(board&&st==='open'&&(n.kind==='level'||n.kind==='arena')&&!levelDone(S.save,n.id))o.next=true;return o;});
 const rv=S.reveals[0];return{chapter:S.chapter,chapterBorder:chapterBorder(S.save,S.chapter),cam:S.cam,nodes:ns,touch:!!globalThis.document?.documentElement?.classList?.contains('m-mode'),sel:S.walk||rv?null:S.at,focusId:S.walk?.to||S.at,reduced:reducedMotion(S.save),reveal:rv?{pts:rv.pts,p:rv.p,to:rv.to,opens:[rv.to,...(rv.marks||[]).map(m=>m[1])]}:null,burst:S.burst,blurbAlpha:S.reveals.length||S.tour?0:Math.max(0,Math.min(1,(S.still-.3)*4,(2.6-S.still)*2.5)),blurbAt:blurbSide(),hero:S.hero,drawHero,wanderers:board?[]:wanderers(ns,S.time),drawWanderer,...info(),board,closed:board?closedRoads(rv):null,starCount:totalStars(S.save),starMax:maxStars(),action:S.walk||S.reveals.length||S.tour||['locked','soon'].includes(stateOf(S.at))?'':S.view&&S.at===S.view.id?'Enter: Resume':nodeAt(S.at)?.kind==='home'?'Enter: Home':nodeAt(S.at)?.kind==='gate'?'Enter: Travel':nodeAt(S.at)?.kind==='shop'?'Enter: Visit':'Enter: Play',fade:S.fade,banner:S.banner,stars:`Stars ${totalStars(S.save)} / ${maxStars()}`,chapterName:S.chapter==='veilmoor'?'Veilmoor':ch?.name||'',chapterBlurb:ch?.blurb||'',toast:S.toast,tabs:S.ctx.look?[]:chapterTabs(),travelTab:travelLabel(),notice:!S.view?'':globalThis.document?.documentElement?.classList?.contains('m-mode')?(S.at===S.view.id?`Paused in ${S.view.name}. Tap Resume to go back.`:`Paused in ${S.view.name}. Tap its stop, then Resume.`):`Paused in ${S.view.name}. Esc or ${String(S.ctx.mapKey||'M').toUpperCase()} resumes.`};}
export function draw(c,t){if(!S)return;if(!art)preload();const v=view(t);updateMapPanel(v,c.canvas);drawWorldmap(c,v,art,t);}
/* tools only (bake-worldmap-review 'whole'): point the camera without walking; the next update() eases it back */
export const setCamera=(x,y)=>{if(S){S.cam.x=x;S.cam.y=y;}};
export const debugState=()=>S&&{chapter:S.chapter,at:S.at,walking:!!S.walk,to:S.walk?.to||null,toast:S.toast,fade:S.fade,cam:{...S.cam},reveals:S.reveals.length,speed:S.speed,view:S.view?.id||null,pending:!!S.pending};
