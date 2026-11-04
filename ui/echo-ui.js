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
/* improve20-r18a-nov3 #6 (audit13 #9, shot 11: at 1280x720 the m7 card cut the Echo's text at "Then it fades: Master 4 more...", the part that says
   how to keep it): with short, the granted row keeps its name and one sentence, and its last sentence moves to NEXT GOAL's second line
   (echoKeepText, drawn by main.js under the goal), so it is never the part a full card hides */
export const echoKeepText=(save,echo,{gateA=null}={})=>{const g=echo?.granted&&ABILITIES[save?.hero]?.find(a=>a.id===echo.granted);if(!g)return '';return gateA===g.id?`Those topics also keep your Echo of ${g.name} for good.`:`Your Echo fades after a win. ${echoKeepLine(save,g).replace(/ to keep it\.$/,' to keep it for good.')}`;};
export function echoResultHTML(save,echo,{short=false}={}){if(!echo)return '';const hero=save.hero,find=id=>id&&ABILITIES[hero]?.find(a=>a.id===id);let h='';
 const f=find(echo.faded),g=find(echo.granted);
 if(f)h+=`<p class="level-record level-echo" data-echo="faded">${pic(f,hero,32)}<span><strong>${esc(f.name)} fades.</strong> <span>${esc(echoKeepLine(save,f))}</span> ${lessonBtn(f)}</span></p>`;
 if(g&&short)h+=`<p class="level-record level-echo" data-echo="granted" data-echo-short>${pic(g,hero,32)}<span><strong>Echo of ${esc(g.name)}</strong> <span>The boss dropped it! It joins your levels until you win one with it.</span></span></p>`;
 else if(g)h+=`<p class="level-record level-echo" data-echo="granted">${pic(g,hero,32)}<span><small>The boss dropped a scroll!</small><strong>Echo of ${esc(g.name)}</strong> <span>${esc(g.name)} joins your levels until you win one with it. Then it fades: ${esc(echoKeepLine(save,g).replace(/ to keep it\.$/,' to keep it for good.'))}</span></span></p>`;
 return h;}
/* the Library road card's line (ui/answer-moment.js abilityProgressHTML): the same picture and words */
export function echoRoadHTML(save){const r=echoRoad(save);if(!r)return '';
 return `<span class="road-echo" data-echo="${r.state}">${pic(r.a,save.hero,24)}<span>${esc(r.text)}</span></span>`;}
/* improve20-r13c-nov2 #3: the level-start line for a lent Echo, naming its own button (the fifth, key ability5, or the purple ECHO button on a phone) */
export function echoStartLine(a,key='5',touch=false){if(!a)return '';return `Echo of ${a.name}: it has its own button for this level. ${touch?'Tap the purple ECHO button':`Press ${key}`} to use it.`;}
