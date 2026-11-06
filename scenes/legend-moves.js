/* improve27-r27a-nov6 #1, #2: the Legendary-only boss signatures (game/enemies.js LEGEND_MOVES) in a Story fight. Only the level's own boss
   on its Legendary tier plays its signature (not a mini, an elite echo, a shadow copy, a Hall rung or a Rift run, where the move stays in
   the list but is never called). It is called the first time the boss's health falls past each of its marks (legend.at), from walking or a
   recovery, never over a move in play: the same moments in every fight, like the Hall's patterns (scenes/hall-patterns.js). The first time a
   save sees a boss's signature, its name is held over the boss at the first tell, and levels[id].tiers.legendary.seenMove (additive,
   kept by core/save.js normalize) remembers it. */
import {ENEMY_TYPES,LEGEND_MOVES} from '../game/enemies.js';
/* the signature of a boss key: {name,title,at} or null */
export function legendOf(key){const a=(LEGEND_MOVES[key]||[]).find(x=>x.legend);return a?{name:a.name,title:a.legend.title,at:a.legend.at}:null;}
/* the Legendary card's line (map and pad): "Legendary: the Thorn King adds Bramble Cage." */
export function legendLine(key){const L=legendOf(key),d=ENEMY_TYPES[key];if(!L||!d)return '';const n=String(d.name||'').split(',')[0],who=/^(the|your) /i.test(n)?n.replace(/^The /,'the '):n;return `Legendary: ${who} adds ${L.title}.`;}
const storyBoss=(w,e)=>w?.tierKey==='legendary'&&!!w.level?.encounter&&!w.hall&&!w.rift&&!!e?.boss&&!e.summoned&&!e.decoy&&!e.elite&&!e.helper&&e.key===w.level.encounter.boss;
/* when the boss's brain is made: arm the marks, and give the signature its own words back (a chapter's remix relabels every move by kind) */
export function armLegend(e,w){if(e.legend||!storyBoss(w,e))return false;const L=legendOf(e.key);if(!L||!(e.attacks||[]).some(a=>a.name===L.name))return false;
 const src=Object.fromEntries((LEGEND_MOVES[e.key]||[]).map(a=>[a.name,a]));e.attacks=e.attacks.map(a=>src[a.name]?{...a,label:src[a.name].label,...(src[a.name].returnLabel?{returnLabel:src[a.name].returnLabel}:{}),forced:true}:a);
 e.legend={name:L.name,title:L.title,marks:[...L.at],i:0,due:0};return true;}
/* each frame: a passed mark makes the signature due; it is called once nothing else is called or in play */
export function legendTick(e,w,b){const L=e.legend;if(!L||e.reborn)return false;while(L.i<L.marks.length&&e.hp<=e.maxHp*L.marks[L.i]){L.i++;L.due++;}
 if(L.due>(b.used?.[L.name]||0)&&!b.force&&['move','recover'].includes(b.mode)){b.force=L.name;return true;}return false;}
/* the first tell of a signature this save has not seen: the move's warning banner (gfx/stage-view.js, or the boss's first-use word on the
   e1/e2 pilot levels) names it for that tell, "NEW: Bramble Cage! Step off the lit ring!", in the place every move warning already has */
export function seenMove(save,id){return !!save?.levels?.[id]?.tiers?.legendary?.seenMove;}
export const newLabel=(title,label)=>`NEW: ${title}! ${String(label||'').replace(/^[^!]*!\s*/,'')}`.trim();
export function legendTell(e,w,a){if(!a?.legend||!e.legend||a.name!==e.legend.name||!e.brain)return false;const id=w.level?.id,lv=w.save?.levels?.[id];if(!lv||seenMove(w.save,id))return false;
 const T=lv.tiers??={},r=T.legendary??={done:false,best:{time:null,score:0},plays:0,stars:0};r.seenMove=true;w.legendNew={id,title:e.legend.title,at:w.time||0};
 e.brain.atk={...e.brain.atk,label:newLabel(e.legend.title,a.label)};w.events?.persist?.();return true;}
