/* improve20-r8c-nov1 #3 (audit7 d11): the Echo of the next power on screen (game/echo.js holds the rules). The picture is existing art
   only: the reward scroll (ui/skin/rewards/scroll.png) beside the ability's own icon. Read-only. */
import {ABILITIES} from '../game/abilities.js';
import {SUBJECTS} from '../game/data.js';
import {echoKeepLine,echoRoad} from '../game/echo.js';
import {icon,abilityIcon} from './icons.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pic=(a,hero,size)=>`<span class="echo-pic" aria-hidden="true">${icon('scroll',{size})}${abilityIcon(a,hero,size)}</span>`;
const lessonBtn=a=>`<button type="button" class="echo-lesson" data-echo-lesson="${esc(a.subject)}">${esc(SUBJECTS[a.subject]?.name||a.subject)} lessons</button>`;
/* the result card's lines: the Echo that faded with this level, and the one a chapter boss just dropped */
export function echoResultHTML(save,echo){if(!echo)return '';const hero=save.hero,find=id=>id&&ABILITIES[hero]?.find(a=>a.id===id);let h='';
 const f=find(echo.faded),g=find(echo.granted);
 if(f)h+=`<p class="level-record level-echo" data-echo="faded">${pic(f,hero,32)}<span><strong>${esc(f.name)} fades.</strong> <span>${esc(echoKeepLine(save,f))}</span> ${lessonBtn(f)}</span></p>`;
 if(g)h+=`<p class="level-record level-echo" data-echo="granted">${pic(g,hero,32)}<span><small>The boss dropped a scroll!</small><strong>Echo of ${esc(g.name)}</strong> <span>${esc(g.name)} joins your levels until you win one with it. Then it fades: ${esc(echoKeepLine(save,g).replace(/ to keep it\.$/,' to keep it for good.'))}</span></span></p>`;
 return h;}
/* the Library road card's line (ui/answer-moment.js abilityProgressHTML): the same picture and words */
export function echoRoadHTML(save){const r=echoRoad(save);if(!r)return '';
 return `<span class="road-echo" data-echo="${r.state}">${pic(r.a,save.hero,24)}<span>${esc(r.text)}</span></span>`;}
