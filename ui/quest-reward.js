/* improve26-r26e-nov6 #3 (audit17 Minor: Wil's chapters 2 and 3 ended with no reward card, only a toast): when a later chapter of a companion's
   story ends (a chain that brings no one: Wil has joined already), a short card after his thanks shows that chapter's keepsake and what changed.
   The Hall's card style (style.css .hall-step, .hall-chip); the keepsake's own picture; no new art. It names only what the chapter already
   gives (game/quests.js advance pays questGold; the title and the new fight lines are reward.title and reward.barks). Read only. */
import {QUESTS,QUEST_ITEMS,bringsCompanion} from '../game/quests.js';
import {COMPANIONS} from '../game/party.js';
import {TITLES} from '../game/titles.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* a chapter's number in its companion's story: 2 for Wil's second chain */
export const chapterNo=id=>{const Q=QUESTS[id];if(!Q)return 0;return Object.keys(QUESTS).filter(k=>QUESTS[k].companion===Q.companion).sort((a,b)=>QUESTS[a].order-QUESTS[b].order).indexOf(id)+1;};
/* moved: game/quests.js results; the finished later chapter, or null */
export const rewardCardFor=moved=>(moved||[]).find(m=>m?.done&&QUESTS[m.questId]&&!bringsCompanion(m.questId))||null;
export function questRewardHTML(m,{coin=''}={}){const Q=QUESTS[m?.questId];if(!Q)return '';const c=COMPANIONS[Q.companion],k=QUEST_ITEMS[Q.reward.keepsake],t=TITLES[Q.reward.title]?.name||'',n=chapterNo(m.questId);
 const rows=[k?`<p class="quest-reward-keep"><img src="${esc(k.img)}" alt="" width="48" height="48" draggable="false"><span><b>Keepsake: ${esc(k.name)}</b><small>${esc(k.story)} It hangs in your Trophy Hall.</small></span></p>`:'',
  `<p class="hall-reward">${(m.gold|0)>0?`<span class="hall-chip">${coin}<b>+${m.gold|0} gold</b></span>`:''}${t?`<span class="hall-chip ks"><b>New title: ${esc(t)}</b></span>`:''}</p>`,
  Q.reward.barks?.length?`<p class="hall-note">What changed: ${esc(c.short)} has new things to say when he fights beside you.${t?' Wear the title from your hero card.':''}</p>`:''].join('');
 return `<div class="hall-step quest-reward" data-quest-reward="${esc(m.questId)}"><span class="eyebrow">${esc(c.short)}’s story${n?`, chapter ${n}`:''}</span><h2>Quest complete: ${esc(Q.title)}</h2>${rows}<div class="modal-actions"><button id="quest-reward-ok" class="primary">Continue</button></div></div>`;}
