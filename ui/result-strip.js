// improve20-b-oct31 #9 (kid-appeal playtest, problem 10: "too many systems on the screens"): the victory card leads with ONE
// "You got" strip -- gold, XP, the items the run dropped and the new stars, each an icon and a number -- and the side counters
// (Delver level, class ranks, Boss Meter, chests, materials, Bestiary) wait behind Details. Before the player reaches the second
// chapter (Emberkeep), Details shows only the lines that changed on this run. HTML only; main.js shows it. Nothing is lost.
// On a landscape phone the strip heads the right-hand column, above the hero level, so it is never squeezed under the stars.
import {LEVELS,levelOpen} from '../game/levels.js';
import {rarPips,rarColor,rarName} from './rarity.js';
import {BAG} from '../game/potions.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/** True once any level past the first chapter is open: from then on Details shows every line, as before. */
export const pastFirstChapter=s=>LEVELS.some(l=>l.kind==='level'&&!l.hidden&&l.chapter!==LEVELS[0].chapter&&levelOpen(s,l.id));

/* "1 health potion" -> number 1, word "health potion"; a line with no leading number keeps its words */
export function splitCount(label){const m=/^(\d+)\s*[×x]?\s+(.+)$/.exec(String(label||''));return m?{n:m[1],what:m[2]}:{n:'',what:String(label||'')};}

/* improve20-t-oct31 (audit2 rare-drops note: the prologue's Thorn Charm showed only as a toast back in town): every piece the run
   brought home -- its gear drops, its jewels and the Boss Meter's payout -- once each, gear first. [{kind:'gear'|'jewel',id}] */
export function runDrops(st){const out=[],seen=new Set(),add=(kind,id)=>{if(!id||seen.has(kind+':'+id))return;seen.add(kind+':'+id);out.push({kind,id});};
 for(const id of st?.gear||[])add('gear',id);const p=st?.run?.meter?.paid;if(p&&p.kind!=='jewel')add('gear',p.id);
 for(const id of st?.jewels||[])add('jewel',id);if(p&&p.kind==='jewel')add('jewel',p.id);return out;}

/* improve20-h-nov1 (lane T's note): on a landscape phone four chips or more with long names wrapped the strip to two rows and pushed
   the time and "NEW BEST TIME" under the NEXT GOAL bar. From COMPACT_AT chips the phone strip goes compact: each chip is its icon and
   its number only (a gear piece or jewel, which has no number, is its icon), its words in the title; the desktop card keeps its words. */
export const COMPACT_AT=4;
/* improve20-y-nov1 #1: the phone caption's short name drops the owner ("Bog King’s Waders" -> "Waders"), so three finds fit one line at 667 px */
export const shortName=n=>String(n||'').replace(/^[^,]*?['’]s\s+(?=\S)/,'')||String(n||'');
/** The strip. won: "You got" or, on a defeat, "You kept". loot: resultLoot's list ({icon,label,quiet?}); gear: [{name,img}]; starsAll: the save's stars in all.
 * icon(name) gives an <img>; starIcon is the star's <img>. */
/* improve20-x-nov1 #20c (audit4 #11): riftBonus is the Rift's first-win gold, already inside `gold`, named in the gold chip so gold is not shown
   twice; shard (an <img>) adds the week's Rift Shard as its own chip */
/* improve20-r7a-nov1 #11 (audit6 #19): `next` names the smith piece the hero can buy now (gear-guidance.js affordableUpgrade, a shop buy), on
   the gold chip's own words line ("gold · next buy: Emberbrand"), so gold points at something; the strip's layout is untouched */
/* improve20-r8a-nov1 #6: `spare` is gold from potions the full bag sold, already inside `gold`, named in the same chip; #1: a `next` that is a
   craft reads "next: craft Forgeplate" */
export function youGotHTML({won=true,gold=0,xp=0,riftBonus=0,shard='',loot=[],gear=[],stars=0,starsAll=0,icon,starIcon='',next='',spare=0}){
 /* improve20-r8a-nov1 #6 (audit7 d22): "Potion bag full: +8 gold" took a reward tile on every card; its gold joins the gold line instead */{const bf=/^Potion bag full: \+(\d+) gold/.exec(loot.find(x=>x?.bagfull)?.label||'');if(bf){spare+=+bf[1];gold+=+bf[1];}loot=loot.filter(x=>!x?.bagfull);}
 /* improve20-h-nov1: every chip carries its full words as a title, so a compact chip (below) still names itself */
 /* improve20-s-nov1 #18/#20 (audit5 b18, b15): a found piece carries its rarity: the border and a glow behind its icon in the rarity's
    colour, its pips under the icon (so it never rests on colour alone, and still shows on a compact phone chip) and the name in the title */
 const item=(kind,img,n,what,cls='',rar=null)=>`<span class="you-got-item${cls}" title="${esc((n!==''?n+' ':'')+what+(rar?` (${rarName(rar)})`:''))}" data-reward="${kind}"${rar?` data-rar="${esc(rar)}" style="--rar:${rarColor(rar)}"`:''}>${rar?`<span class="you-got-ico">${img}${rarPips(rar,'rar-on-cell')}</span>`:img}<span class="you-got-text">${n!==''?`<strong>${esc(n)}</strong>`:''}<small>${esc(what)}</small></span></span>`;
 /* a defeat shows only what the run did bring home: no "+0" chips, and no strip at all when there is nothing */
 const parts=[...(won||gold>0?[item('gold',icon('gold'),`+${gold}`,(riftBonus>0?'gold (Rift bonus)':'gold')+(spare>0?` (+${spare} for ${spare>BAG.overflow?'spare potions':'a spare potion'})`:'')+(won&&next?(/^craft /.test(next)?` · next: ${next}`:` · next buy: ${next}`):''),' level-reward')]:[]),...(shard?[item('shard',shard,'+1','Rift Shard',' level-reward')]:[]),...(xp>0?[item('xp',icon('xp'),`+${xp}`,'XP',' level-reward')]:[]),
  ...loot.map(x=>{const {n,what}=splitCount(x.label);return item('item',icon(x.icon),n,what,` level-loot-item${x.quiet?' loot-quiet':''}`);}),
  ...gear.map(g=>item('gear',g.img||icon('chest'),'',g.name,' level-loot-item',g.rar||null)),
  ...(stars>0?[item('stars',starIcon,`+${stars}`,`${stars>1?'stars':'star'}${starsAll?` · ${starsAll} in all`:''}`)]:[])];
 if(!parts.length)return '';
 /* improve20-y-nov1 #1 (audit4 #17): a compact phone strip shows a gear piece or jewel as its icon only, so a kid could not tell what the
    run found. One caption under the strip names them ("Found: Jelly Pendant, Bog Waders"); it shows only on a compact phone strip */
 const compact=parts.length>=COMPACT_AT,found=compact&&gear.length?`<p class="you-got-found" data-found title="${esc(gear.map(g=>g.name).join(', '))}">Found: ${gear.map(g=>esc(shortName(g.name))).join(', ')}</p>`:'';
 return `<div class="you-got level-rewards${compact?' you-got-compact':''}" data-you-got><small class="you-got-label">${won?'You got':'You kept'}</small><div class="you-got-row">${parts.join('')}</div>${found}</div>`;
}

/* improve20-t-oct31: with the run's jewels and the meter's payout on the strip, five chips or more wrap to a second row; on a short
   desktop window the hero picture then gives way (the hero level line stays), so the card fits and nothing is cut. Phone rules are untouched. */
export const YOU_GOT_CSS=`@media(max-height:820px){html:not(.m-mode) dialog[data-view=result] .level-result:has(.you-got-item:nth-child(5)) .level-hero{display:none}}
dialog[data-view=result] .you-got{display:flex;flex-direction:column;align-items:center;gap:4px;margin:2px 0}
dialog[data-view=result] .you-got-label{letter-spacing:.12em;text-transform:uppercase;opacity:.8}
dialog[data-view=result] .you-got-row{display:flex;flex-wrap:wrap;justify-content:center;gap:6px 10px}
dialog[data-view=result] .you-got-item{display:inline-flex;align-items:center;gap:6px;padding:4px 10px 4px 6px;border:1px solid rgba(227,184,90,.45);border-radius:4px;background:rgba(10,12,30,.45)}
dialog[data-view=result] .you-got-item img{width:32px;height:32px;image-rendering:pixelated;flex:none}
dialog[data-view=result] .you-got-item[data-rar]{border-color:var(--rar)}
dialog[data-view=result] .you-got-ico{position:relative;display:inline-grid;place-items:center;flex:none;padding-bottom:4px}
dialog[data-view=result] .you-got-ico>.ico{filter:drop-shadow(0 0 2px var(--rar)) drop-shadow(0 0 5px var(--rar))}
dialog[data-view=result] .you-got-text{display:flex;flex-direction:column;align-items:flex-start;line-height:1.05}
dialog[data-view=result] .level-result .you-got-item strong{font-size:calc(var(--fs) * 1.35);color:#ffe9a8}
dialog[data-view=result] .you-got-item small{font-size:calc(var(--fs) * .85);color:#e9dcc0}
.m-mode dialog[data-view=result] .you-got-item{padding:2px 6px 2px 4px;gap:4px}
.m-mode dialog[data-view=result] .you-got-item img{width:24px;height:24px}
.m-mode dialog[data-view=result] .you-got-compact .you-got-item small{display:none}
.m-mode dialog[data-view=result] .you-got-compact .you-got-item:not(:has(strong)) .you-got-text{display:none}
.m-mode dialog[data-view=result] .you-got-compact .you-got-item:not(:has(strong)){padding:2px 4px}
.m-mode dialog[data-view=result] .you-got-compact .you-got-row{flex-wrap:nowrap;gap:4px 6px}
dialog[data-view=result] .you-got-found{display:none;margin:0;max-width:100%;text-align:center;font-size:14px;line-height:1.2;color:#e9dcc0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.m-mode dialog[data-view=result] .you-got-compact .you-got-found{display:block}
@media(max-height:500px) and (min-width:600px){.m-mode dialog[data-view=result] .level-result>.you-got{grid-column:2;grid-row:1;align-self:start;margin:2px 0 4px}
 .m-mode dialog[data-view=result] .level-result>.level-result-body{grid-row:2 / 8;max-height:calc(100dvh - 228px)}}`;
