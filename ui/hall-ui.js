/* The Hall of Echoes on screen (improve20-r9a-nov1; rules in game/hall.js). hallHTML(save, sel) is the Hall screen: chapters x rungs,
   each cleared, keepsake, open or locked, and the chosen rung's details with its first-clear reward. initHall(deps) wires the screen and
   runs a rung: one boss after another through main.js startLevel, an interlude card between bosses, and a card at the end (a fall or a
   clear). Art: the existing PixelLab tier icons (ui/skin/pl-icons/tier-*.png) and reward icons; no new art. */
import {defeatProgress} from './defeat-tip.js';
import {defeatCardLead,RUNE_LEAD_AFTER} from '../game/card-lead.js';
import {runeDefeatLead,autoPlaceRunes} from '../game/runes.js';
import {refillOffer,refillPotions,bagCount} from '../game/potions.js';
import {CHAPTERS,levelById} from '../game/levels.js';
import {HALL_CHAPTERS,RUNGS,RUNG_LABEL,ROMAN,hallHeal,hallFree,hallPatterns,hallBosses,rungState,rungOpen,rungReward,keepsakeName,keepsakes,startRung,hallStep,hallFinish,hallDoor,hallEarly,rungLockText,/* improve20-r22f-nov4 #3 */markHallBoss} from '../game/hall.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ICON={1:'tier-normal',2:'tier-heroic',3:'tier-legendary'};
const pic=(n,size=32)=>`<img class="hall-icon" src="ui/skin/pl-icons/${n}.png" width="${size}" height="${size}" alt="" draggable="false">`;
const chName=ch=>CHAPTERS.find(c=>c.id===ch)?.name||ch;
const bossName=id=>{const l=levelById(id);return l?.plate||String(l?.bossName||'').split(',')[0]||id;};
const STATE={keepsake:'Keepsake won',cleared:'Cleared',open:'Open',locked:'Locked'};
/* the first open rung not cleared yet, else the first rung */
/* improve20-r21c-nov4 #5 (audit15 #10, shot 24: a locked Rung III showed a disabled red "Play again"): the button says why a rung is shut
   ("Locked: clear Rung II first"), plain, never red; "Play again" only on a rung already cleared, "Enter" on one never cleared */
export function hallGoLabel(s,ch,r){const st=rungState(s,ch,r);if(st==='cleared'||st==='keepsake')return 'Play again';if(st==='open')return 'Enter';
 const why=rungLockText(s,ch,r)||'';return /^Rungs II and III/.test(why)?'Locked: beat the final boss first':r===1?'Locked: beat this chapter’s bosses first':`Locked: clear Rung ${ROMAN[r-2]} first`;}
export function hallDefault(s){for(const ch of HALL_CHAPTERS)for(const r of RUNGS)if(rungState(s,ch,r)==='open')return {chapter:ch,rung:r};return {chapter:HALL_CHAPTERS[0],rung:1};}
export function hallHTML(s,sel=hallDefault(s),{coin='',gem=''}={}){const pct=Math.round(hallHeal(sel?.rung)*100);/* hallfair-nov2: the heal is per rung */
 const grid=HALL_CHAPTERS.map(ch=>`<div class="hall-row" role="row"><span class="hall-ch" role="rowheader">${esc(chName(ch))}</span>${RUNGS.map(r=>{const st=rungState(s,ch,r),on=sel&&sel.chapter===ch&&sel.rung===r;
  return `<button type="button" class="hall-rung${on?' sel':''}" role="gridcell" data-hall="${ch}:${r}" data-state="${st}" aria-pressed="${on}"${st==='locked'?' aria-disabled="true"':''}>${pic(st==='locked'?'tier-lock':ICON[r])}<span><b>${ROMAN[r-1]} · ${RUNG_LABEL[r]}</b><small class="hall-state">${/* improve20-r20h-nov4 #5: the state is a pill, never run on from the name */STATE[st]}</small></span>${st==='keepsake'?pic('tier-star',16):''}</button>`;}).join('')}</div>`).join('');
 let det='';if(sel){const {chapter:ch,rung:r}=sel,st=rungState(s,ch,r),bs=hallBosses(ch),rw=rungReward(ch,r);
  det=`<div class="hall-detail">${/* improve20-r21c-nov4 #5: the lock line leads the detail, so a phone shows it first */st==='locked'?`<p class="hall-lock">${esc(rungLockText(s,ch,r)||'')}</p>`/* improve20-r20e-nov4 #2 */:''}<p class="hall-what"><strong>${esc(chName(ch))} · Rung ${ROMAN[r-1]} (${RUNG_LABEL[r]})</strong> ${bs.length} bosses back to back<span class="hall-boss-list">: ${bs.map(id=>esc(bossName(id))).join(', ')}</span>.${/* hall5-nov3: Rung III's new boss patterns (scenes/hall-patterns.js), named in one line that phones show too */hallPatterns(r).length?' <strong class="hall-new">New: the bosses fight with new moves.</strong>':''}</p>`+
   `<p class="hall-rules">Your health carries on from one boss to the next, with ${pct}% of it back between them. ${hallFree(r)?'Potions are allowed.':'No free potion here: bring potions in your bag.'} A fall ends the rung and costs nothing: try again any time.</p>`+
   `<p class="hall-reward">${st==='cleared'||st==='keepsake'?'<span class="hall-chip got">First clear paid</span>':`<span class="hall-k">First clear</span><span class="hall-chip">${coin}<b>+${rw.gold} gold</b></span><span class="hall-chip">${gem}<b>+${rw.essence} Essence</b></span>`}<span class="hall-chip ks${st==='keepsake'?' got':''}">${pic('tier-star',16)}<b>${esc(keepsakeName(ch,r))}</b></span><span class="hall-note">${st==='keepsake'?'Keepsake won.':'Win with no potions for this keepsake.'}</span></p>`+
`</div>`;}
 const ks=keepsakes(s);
 return `<div class="hall-card"><div class="hall-grid" role="grid" aria-label="Rungs">${grid}</div>${det}<p class="hall-ks">Keepsakes: ${ks.length?ks.map(k=>esc(k.name)).join(', '):'none yet'}</p></div>`;}
/* deps: {save(), show, header, forceClose, startLevel(id,opts), openMap(), closeMap(), mapOn(), persist, updateHUD, leaveLevel(r), coin, gem} */
export function initHall(D){let sel=null,run=null;/* improve20-r20d-nov4 #1: falls in a row on one rung, this session (a clear or another rung starts over) */const falls={};
 const back=()=>D.openMap();
 function card(){const s=D.save();if(!hallDoor(s))return;sel=sel&&RUNGS.includes(sel.rung)?sel:hallDefault(s);const st=rungState(s,sel.chapter,sel.rung);
  D.show('hall',D.header('The Hall of Echoes',hallEarly(s)?/* improve20-r20e-nov4 #2: Rung I before the finale */'Practise reading the bosses: Rung I plays a chapter’s bosses back to back, with their own warnings. Rungs II and III open after the final boss.':'Every chapter’s bosses, back to back, in their own arenas. Three rungs a chapter.')+hallHTML(s,sel,{coin:D.coin,gem:D.gem})+
   `<div class="modal-actions"><button id="hall-back">Back</button><button id="hall-go"${st==='locked'?' class="hall-go-locked" disabled':' class="primary"'}>${esc(hallGoLabel(s,sel.chapter,sel.rung))}</button></div>`);
  document.querySelectorAll('[data-hall]').forEach(b=>b.onclick=()=>{const [ch,r]=b.dataset.hall.split(':');sel={chapter:ch,rung:+r};card();document.querySelector(`[data-hall="${ch}:${r}"]`)?.focus({preventScroll:true});});
  document.getElementById('hall-back').onclick=()=>D.forceClose();const go=document.getElementById('hall-go');go.onclick=()=>begin(sel.chapter,sel.rung);if(!go.disabled)go.focus({preventScroll:true});}
 function fight(){const id=run.bosses[run.i];return D.startLevel(id,{tier:run.tier,hall:{chapter:run.chapter,rung:run.rung,i:run.i,of:run.bosses.length,hp:run.hp,free:run.free},onLevelEnd:back});}
 function begin(ch,r){const s=D.save();if(!rungOpen(s,ch,r))return;run=startRung(s,ch,r);D.forceClose();if(D.mapOn())D.closeMap();if(!fight()){run=null;back();}}
 function levelEnd(r){const s=D.save(),h=r.hall||{};if(!run||h.chapter!==run.chapter||h.rung!==run.rung){D.leaveLevel(r);return;}/* improve20-r22f-nov4 #3: a Hall boss beaten fills its diary page (Journal, Bestiary), kept even if a later fight is lost */if(r.won&&markHallBoss(s,run.bosses[run.i]))D.persist();const out=hallStep(run,{won:r.won,hp:h.hp,drunk:h.drunk,free:h.free}),n=run.bosses.length;
  if(out==='next'){const next=run.bosses[run.i],pct=Math.round(run.hp*100);
   D.show('hall-next',`<div class="hall-step"><span class="eyebrow">Boss ${run.i} of ${n} down</span><h2>${esc(bossName(next))} is next</h2><p>Boss ${run.i+1} of ${n}. You catch your breath: health back up to ${pct}%.${run.drunk?'':' No potions so far.'}</p><div class="modal-actions"><button id="hall-leave">Leave the Hall</button><button id="hall-on" class="primary">Fight on</button></div></div>`);
   document.getElementById('hall-on').onclick=()=>{D.forceClose();if(!fight()){run=null;D.leaveLevel(r);}};document.getElementById('hall-leave').onclick=()=>{run=null;D.leaveLevel(r);};document.getElementById('hall-on').focus({preventScroll:true});return;}
  if(out==='lost'){const ch=run.chapter,rg=run.rung,at=run.i+1,run0=run.bosses[run.i];run=null;
   /* improve20-r20d-nov4 #1 (audit14 #1): a Hall fall goes through the same loss helper as every level (game/card-lead.js defeatCardLead): from
      the second fall in a row on this rung the runes lead ("Place N runes, then retry": Place for me, then the rung again), then a refill when
      the bag is out, then Try again; its NEXT GOAL line says the same as the one red button, and the card keeps at most 3 buttons. */
   const k=`${ch}:${rg}`;falls[k]=(falls[k]|0)+1;for(const x in falls)if(x!==k)delete falls[x];const losses=falls[k],ru=runeDefeatLead(s,{loud:losses>=RUNE_LEAD_AFTER}),rf=refillOffer(s),lead=defeatCardLead(s,{id:run0,tier:'normal',runes:ru,losses,refillLead:rf&&!bagCount(s)?rf:null,hall:{name:`${chName(ch)} Rung ${ROMAN[rg-1]}`}}),kind=lead.primary.kind;
   const help=kind==='retry'&&ru?`<button id="hall-runes" data-lead="secondary">Place runes: +${ru.pct}%</button>`:'',again=kind==='retry'?'<button id="hall-again" class="primary">Try again</button>':`<button id="hall-again">Retry now</button><button id="hall-lead" class="primary" data-kind="${kind}">${esc(lead.primary.label)}</button>`;
   D.show('hall-end',`<div class="hall-step" data-outcome="lost"><span class="eyebrow">The echoes fade</span><h2>You fell at boss ${at} of ${n}</h2>${/* improve20-r14b-nov3 #2: how far that fight got (ui/defeat-tip.js) */(()=>{const b=r.boss,p=b?defeatProgress({boss:true,hp:b.hp,max:b.maxHp}):null;return p?`<p class="defeat-progress" data-progress>${esc(p)}</p>`:'';})()}<p>Nothing is lost. Rest, change your abilities or gear, and try the rung again whenever you like.</p><p class="result-goal hall-goal"><small>NEXT GOAL</small> <strong>${esc(lead.text)}</strong></p><div class="modal-actions"><button id="hall-leave">Leave</button>${help}${again}</div></div>`);
   const go=()=>{D.forceClose();run=startRung(D.save(),ch,rg);if(!run||!fight()){run=null;D.leaveLevel(r);}};
   document.getElementById('hall-again').onclick=go;document.getElementById('hall-leave').onclick=()=>D.leaveLevel(r);
   const hr=document.getElementById('hall-runes');if(hr)hr.onclick=()=>{if(autoPlaceRunes(s).length){D.persist();D.updateHUD();}hr.disabled=true;hr.textContent=`Runes placed: +${ru.pct}%`;};
   const hl=document.getElementById('hall-lead');if(hl)hl.onclick=()=>{if(kind==='runes')autoPlaceRunes(s);else if(kind==='refill')refillPotions(s);D.persist();D.updateHUD();go();};
   (hl||document.getElementById('hall-again')).focus({preventScroll:true});return;}
  const res=hallFinish(s,run),ch=run.chapter,rg=run.rung;run=null;delete falls[`${ch}:${rg}`];D.persist();D.updateHUD();
  D.show('hall-end',`<div class="hall-step" data-outcome="won"><span class="eyebrow">Rung cleared</span><h2>${esc(chName(ch))} · Rung ${ROMAN[rg-1]}</h2><p>All ${n} bosses down, one after another.</p>`+
   (res.first?`<p class="hall-reward"><span class="hall-chip">${D.coin}<b>+${res.gold} gold</b></span><span class="hall-chip">${D.gem}<b>+${res.essence} Essence</b></span></p>`:'<p class="hall-note">You cleared this rung before, so there is no reward this time.</p>')+
   (res.keepsake?`<p class="hall-reward"><span class="hall-chip ks got">${pic('tier-star',16)}<b>${esc(res.keepsake)}</b></span><span class="hall-note">${res.keepsakeNew?'No potions! A new keepsake for your hero card.':'Won again with no potions.'}</span></p>`:`<p class="hall-note">Win it with no potions for the keepsake ${esc(keepsakeName(ch,rg))}.</p>`)+
   `<div class="modal-actions"><button id="hall-done" class="primary">Back to the Hall</button></div></div>`);
  document.getElementById('hall-done').onclick=()=>{D.leaveLevel(r);setTimeout(card,0);};document.getElementById('hall-done').focus({preventScroll:true});}
 return {card,levelEnd,get run(){return run;}};}
