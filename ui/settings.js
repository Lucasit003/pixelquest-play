import {keyLabel} from './controls.js';
/* Extra settings rows for main.js's Settings panel: volume sliders, reduced motion and pixel-perfect
   scaling. Values live in save.settings (normalize() keeps unknown settings keys), so they persist
   with the save and need no migration:
     settings.volume = {master, music, sfx}  0..100
     settings.reducedMotion                  bool, defaults to the OS preference
     settings.integerScale                   bool, phones only (default true, whole-number canvas scale)
     settings.pixelPerfect                   bool, desktop default false (fill the window); true = whole numbers, letterboxed
     settings.startFullscreen                bool, default true (ask for fullscreen on the first title-screen click/key)
     settings.textSize                       100 | 125 | 150 (panels, dialogue and toasts; the HUD stays put) */
import {setVolume,sfx,setSoundtrack,SOUNDTRACKS,DEFAULT_SOUNDTRACK} from '../core/audio.js';
import {rescale,pixelPerfect} from './scale.js';
import {fullscreenSupported,startFullscreen,toggleFullscreen,fullscreenLabel} from './fullscreen.js';
import {encodeSave,decodeSave,importThroughMain,saveCodeSupported} from './savecode.js';
import {activeProfile} from './profiles.js';
import {openProfiles} from './profiles-screen.js';
const prefersReduced=()=>{try{return !!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;}catch{return false;}};
export const textSize=s=>[100,125,150].includes(+s?.settings?.textSize)?+s.settings.textSize:100;
export function volumeOf(s){const v=s?.settings?.volume||{};const n=(x,d)=>Number.isFinite(Number(x))?Math.max(0,Math.min(100,Number(x))):d;return {master:n(v.master,92),music:n(v.music,55),sfx:n(v.sfx,80)};}
export const reducedMotion=s=>s?.settings?.reducedMotion??prefersReduced();
export function applySettings(s){
 setSoundtrack(s?.settings?.soundtrack);
 const v=volumeOf(s);setVolume({master:v.master/100,music:v.music/100,sfx:v.sfx/100});
 const root=globalThis.document?.documentElement;if(root){root.dataset.motion=reducedMotion(s)?'reduced':'full';root.dataset.text=String(textSize(s));}
 rescale();
}
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slider=(id,label,val)=>`<label class="slider-row" for="vol-${id}"><span>${label}</span><input type="range" id="vol-${id}" data-volume="${id}" min="0" max="100" step="any" value="${val}" aria-valuetext="${val}%"><output for="vol-${id}">${val}%</output></label>`;
export function uiSettingsHTML(s,section){
 const v=volumeOf(s);
 const parts={sound:`<h3>Sound</h3><div class="slider-row soundtrack-row"><span>Soundtrack</span><div class="seg soundtrack-choices" role="radiogroup" aria-label="Soundtrack">${Object.entries(SOUNDTRACKS).map(([id,label])=>`<button type="button" role="radio" data-soundtrack="${id}" aria-checked="${(s.settings.soundtrack||DEFAULT_SOUNDTRACK)===id}" class="${(s.settings.soundtrack||DEFAULT_SOUNDTRACK)===id?'primary':''}">${label}</button>`).join('')}</div></div><div class="sliders">${slider('master','Master volume',v.master)}${slider('music','Music volume',v.music)}${slider('sfx','Effects volume',v.sfx)}</div>`,display:`<h3>Display</h3><div class="settings-grid"><div class="slider-row"><span>Text size</span><div class="seg" role="radiogroup" aria-label="Text size">${[100,125,150].map(v=>`<button type="button" role="radio" data-text-size="${v}" aria-checked="${textSize(s)===v}" class="${textSize(s)===v?'primary':''}">${v}%</button>`).join('')}</div></div><label>Pixel-perfect scaling <input id="integer-scale" type="checkbox" ${pixelPerfect(s,!!globalThis.document?.documentElement?.classList?.contains('m-mode'))?'checked':''}></label>${fullscreenSupported()?`<label>Start in fullscreen <input id="start-fullscreen" type="checkbox" ${startFullscreen(s)?'checked':''}></label><div class="slider-row"><span>Screen</span><button type="button" id="fs-toggle" class="fs-toggle">${fullscreenLabel()}<kbd>${esc(keyLabel(s.settings.bindings.fullscreen))}</kbd></button></div>`:''}</div><p class="subtle">Pixel-perfect keeps every game pixel the same size (whole-number scale, small borders). Off fills the window.</p>`,accessibility:`<label>Reduced motion <input id="reduced-motion" type="checkbox" ${reducedMotion(s)?'checked':''}></label>`,save:`<h4>Learners</h4><div class="settings-grid"><div class="slider-row"><span>Playing as <strong>${esc(activeProfile()?.name||'Player 1')}</strong></span><button type="button" id="open-learners">Switch learner</button></div></div>`+
  (saveCodeSupported()?`<h4>Save code</h4><p class="subtle">Copy a backup code to continue in another browser. Loading a code replaces progress on this device.</p><div class="code-row"><button type="button" id="code-copy">Copy my save code</button><span id="code-msg" class="subtle" aria-live="polite"></span></div><textarea id="code-out" readonly rows="2" hidden aria-label="Your save code"></textarea><div class="code-row"><textarea id="code-in" rows="2" placeholder="Paste a save code here" aria-label="Paste a save code"></textarea><button type="button" id="code-load">Load code</button></div>`:'')};return section?parts[section]:Object.values(parts).join('');
}
function wireChoice(root,selector,choose){
 const buttons=[...root.querySelectorAll(selector)];
 const update=b=>buttons.forEach(x=>{const on=x===b;x.classList.toggle('primary',on);x.setAttribute('aria-checked',String(on));x.tabIndex=on?0:-1;});
 update(buttons.find(b=>b.getAttribute('aria-checked')==='true')||buttons[0]);
 buttons.forEach((b,i)=>{b.onclick=()=>{choose(b);update(b);};b.onkeydown=e=>{
  if(e.altKey||e.ctrlKey||e.metaKey)return;
  const next=e.key==='Home'?0:e.key==='End'?buttons.length-1:['ArrowRight','ArrowDown'].includes(e.key)?(i+1)%buttons.length:['ArrowLeft','ArrowUp'].includes(e.key)?(i+buttons.length-1)%buttons.length:null;
  if(next===null)return;e.preventDefault();e.stopPropagation();buttons[next].focus();buttons[next].click();
 };});
}
export function wireUiSettings(s,persist,root=globalThis.document){
 wireChoice(root,'[data-soundtrack]',b=>{s.settings.soundtrack=b.dataset.soundtrack;applySettings(s);persist();});
 root.querySelectorAll('[data-volume]').forEach(el=>{
  el.oninput=()=>{const k=el.dataset.volume,val=+el.value;s.settings.volume={...volumeOf(s),[k]:val};el.setAttribute('aria-valuetext',val+'%');const o=el.parentElement.querySelector('output');if(o)o.textContent=val+'%';applySettings(s);};
  el.onchange=()=>{persist();sfx(el.dataset.volume==='music'?'ui.move':'pickup');};
 });
 const rm=root.querySelector('#reduced-motion');if(rm)rm.onchange=()=>{s.settings.reducedMotion=rm.checked;applySettings(s);persist();};
 const is=root.querySelector('#integer-scale');if(is)is.onchange=()=>{s.settings.pixelPerfect=is.checked;s.settings.integerScale=is.checked;applySettings(s);persist();};
 const sf=root.querySelector('#start-fullscreen');if(sf)sf.onchange=()=>{s.settings.startFullscreen=sf.checked;persist();};
 const ft=root.querySelector('#fs-toggle');if(ft)ft.onclick=()=>{toggleFullscreen();setTimeout(()=>{ft.innerHTML=`${fullscreenLabel()}<kbd>${esc(keyLabel(s.settings.bindings.fullscreen))}</kbd>`;},250);};
 wireChoice(root,'[data-text-size]',b=>{s.settings.textSize=+b.dataset.textSize;applySettings(s);persist();});
 const ol=root.querySelector('#open-learners');if(ol)ol.onclick=()=>openProfiles();
 const msg=t=>{const m=root.querySelector('#code-msg');if(m)m.textContent=t;};
 const cc=root.querySelector('#code-copy');if(cc)cc.onclick=async()=>{try{persist();const code=await encodeSave(s);const out=root.querySelector('#code-out');out.value=code;out.hidden=false;out.select();
  try{await globalThis.navigator.clipboard.writeText(code);msg('Copied! Paste it into PixelQuest on the other browser.');}catch{msg('Select the code below and copy it.');}}catch{msg('Could not make a code in this browser.');}};
 const cl=root.querySelector('#code-load');if(cl)cl.onclick=async()=>{try{const save=await decodeSave(root.querySelector('#code-in').value);if(!importThroughMain(save))msg('This browser cannot load codes. Use Import save instead.');}catch(e){msg(e.message||'That code did not work.');}};
}
