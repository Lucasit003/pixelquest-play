/* Lesson narration (v2:edu). Reads the lesson player's captions aloud for children who cannot read
   them yet. The captions always stay on screen; narration is an extra, and it can be switched off
   in Settings or in the lesson itself.

   Two voices, never mixed inside one reading:
   1. Pre-recorded Kokoro clips (voice af_heart, Apache-2.0, the same voice as the lesson videos),
      listed in assets/narration/index.json and made by tools/narration-clips.mjs. A clip's file name
      is a hash of the voice and the exact spoken text, so an edited caption can never play a stale
      clip: it simply has no clip until the script is run again.
   2. The browser's speechSynthesis, when any line of a reading has no clip. ownernotes-b-nov1 #6 ("the lesson
      audio might be bad"): the voice is chosen by quality (pickVoice below: Premium, Enhanced, Siri, then Google
      voices, then the plain system voices), never a novelty voice such as Bad News or Zarvox, which a Mac lists
      beside the real ones. Where neither exists (Node, jsdom, some browsers) every call is a silent no-op.
   While either voice speaks, the music dips under it (core/audio.js voiceDuck), and one reading always stops
   the last, so two never overlap.

   No timers: playback advances only on media and utterance events. Nothing here touches a save
   except through the toggle callback main.js passes in. */
import {hash} from '../academics/bank.js';
import {getVolume,voiceDuck} from '../core/audio.js';

export const VOICE='af_heart';
export const CLIP_DIR='assets/narration/';

/* Spoken form of a caption: symbols a voice would misread become words. Shared by the clip
   generator and the speechSynthesis fallback, and part of every clip's key. */
const ORD={2:['half','halves'],3:['third','thirds'],4:['fourth','fourths'],5:['fifth','fifths'],6:['sixth','sixths'],7:['seventh','sevenths'],8:['eighth','eighths'],9:['ninth','ninths'],10:['tenth','tenths'],11:['eleventh','elevenths'],12:['twelfth','twelfths']};
const NUM=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
export function speechText(text){
 return String(text??'')
  .replace(/(\d+(?:\.\d+)?)\s*g\/cm³/g,(m,n)=>`${n} gram${n==='1'?'':'s'} per cubic centimetre`).replace(/g\/cm³/g,'grams per cubic centimetre')
  .replace(/(\d+(?:\.\d+)?)\s?(kg|km|cm|mm|ml|g)\b(?![²³])/g,(m,n,u)=>`${n} ${{kg:'kilogram',km:'kilometre',cm:'centimetre',mm:'millimetre',ml:'millilitre',g:'gram'}[u]}${n==='1'?'':'s'}`)
  .replace(/km²/g,' square kilometres').replace(/cm³/g,' cubic centimetres').replace(/cm²/g,' square centimetres').replace(/m²/g,' square metres')
  .replace(/(^|[^\d/])(\d{1,2})\/(\d{1,2})(?![\d/])/g,(m,pre,a,b)=>{const n=+a,d=+b;if(!ORD[d]||n<1||n>12)return m;return `${pre}${NUM[n]} ${ORD[d][n===1?0:1]}`;})
  .replace(/×/g,' times ').replace(/÷/g,' divided by ').replace(/¢/g,' cents').replace(/°/g,' degrees')
  .replace(/\s=\s/g,' equals ').replace(/\s\+\s/g,' plus ').replace(/\s[-−]\s/g,' minus ').replace(/\s<\s/g,' is less than ').replace(/\s>\s/g,' is greater than ').replace(/\s≤\s/g,' is less than or equal to ').replace(/\s≥\s/g,' is greater than or equal to ').replace(/ŷ/g,'y-hat')
  .replace(/→/g,' to ').replace(/_{2,}/g,' blank ').replace(/[✓✔]/g,'')
  /* High School (docs/HIGH_SCHOOL_SPEC.md): ≈, ^ and superscript powers read as words. Unit squares and cubes were spoken above. */
  .replace(/≈/g,' about ').replace(/\s·\s/g,' times ').replace(/\^\(([^)]+)\)/g,' to the power $1 ').replace(/\^(-?\w+)/g,' to the power $1 ')
  .replace(/([A-Za-z0-9)])(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g,(m,base,neg,sup)=>{const n=[...sup].map(ch=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(ch)).join('');return base+(neg?` to the power minus ${n}`:n==='2'?' squared':n==='3'?' cubed':` to the power ${n}`);})
  .replace(/\s+/g,' ').trim();
}
export const clipKey=(text,voice=VOICE)=>hash(`${voice}|${speechText(text)}`);
/* improve20-r21a-nov4 #1: what Kokoro is handed when a clip is recorded. Its espeak phonemizer reads a decimal next to a full stop as
   two numbers ("0.4 is four tenths." became "zero. four"), so the recorder spells each decimal out ("0 point 4"; money such as $0.75 is left to the voice). It is not part of
   the clip key: keys still hash speechText, so no clip already recorded changes, and the browser voice reads speechText as before. */
export const kokoroText=text=>speechText(text).replace(/(?<![\w.$£€])(\d+)\.(\d+)(?!\d|\.\d)/g,(m,a,b)=>`${a} point ${[...b].join(' ')}`);

/* What the lesson player says for a step, and for each kind of Try-it feedback. The generator
   records exactly these lines, so they are the single source of truth for both. */
export const RIGHT_FIRST='Yes!',RIGHT_LATER='Yes, that is it.',WORKED='Worked example.';
/* Varied praise for a right Try-it (playtest m14): the n-th right answer in a lesson gets the n-th line. */
export const PRAISE=Object.freeze(['Yes!','Great thinking!','Spot on!','You got it!','Brilliant!','Exactly right!','Nice work!']);
export const praise=n=>PRAISE[Math.abs(n|0)%PRAISE.length];
export const answerLine=c=>`The answer is ${c.answer}.`;
export const LOOK_AGAIN="Let's look again.";
/* The one Try-it response line (art director round 3): Archivist Aldous's words, led by the cheer on a right
   answer ("Yes! The answer is 12."), a second look on a first wrong one, the answer on a second. Each sentence is
   its own line so a reading can use each sentence's clip; the line replaces any earlier one, never adds to it. */
export function feedbackLines(c,{right=false,tries=1,nth=0}={}){
 if(right)return [tries===1?praise(nth):RIGHT_LATER,answerLine(c)];
 return (tries===1?[LOOK_AGAIN,c.hint]:[answerLine(c),c.hint]).filter(Boolean);
}
const escFb=x=>String(x).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch]);
export const feedbackHTML=lines=>`<span class="edu-fb-text">${lines.filter(Boolean).map(l=>`<span class="edu-fb-say">${escFb(l)}</span>`).join(' ')}</span>`;
/* Some Try-it prompts already begin "Try it:"; never say it twice. */
const tryLine=c=>/^try it\b/i.test(c.prompt)?c.prompt:`Try it. ${c.prompt}`;
export function stepLines(step,retired=false){
 const lines=[step.say];
 if(step.check){lines.push(tryLine(step.check));if(retired)lines.push(WORKED,answerLine(step.check),step.check.hint);}
 return lines.filter(Boolean);
}
export function topicLines(topic){
 const out=[RIGHT_FIRST,RIGHT_LATER,WORKED,LOOK_AGAIN,...PRAISE];
 for(const st of topic.steps){out.push(st.say);if(st.check)out.push(tryLine(st.check),answerLine(st.check),st.check.hint);}
 return [...new Set(out.filter(Boolean))];
}
/* ownernotes-b-nov1 #6: how a "Read to me" text splits into lines (one clip or utterance each), and the fixed card lines
   (the ability unlock card) that tools/narration-clips.mjs records, so those cards read in the lesson voice too. The card
   builds its text from the same helpers, so a recorded line can never drift from what the card says. */
export const readLines=text=>String(text??'').split(/(?<=[.!?])\s+/).map(x=>x.trim()).filter(Boolean);
export const unlockWhy=(a,subjectName)=>a?.gate===0?`Your training awakens ${a.name}.`:`Your ${subjectName} knowledge made this possible.`;
export const unlockReadText=(a,why,awakening=a?.gate===0)=>`${awakening?'Ability awakened':'Ability unlocked'}: ${a.name}. ${why}`;
export function cardLines(abilities,subjects){
 const out=[];for(const list of Object.values(abilities||{}))for(const a of list||[]){const sub=subjects?.[a.subject]?.name||a.subject;out.push(...readLines(unlockReadText(a,unlockWhy(a,sub))));}
 return [...new Set(out)];
}
/* ownernotes-b-nov1 #6: the browser voice, best first. A Mac lists novelty voices (Bad News, Bubbles, Zarvox...) beside the
   real ones, and the old pick (the default, or the first local voice) could land on one. Novelty voices are never used;
   Premium, Enhanced, Siri and Google voices come first, then the natural cloud voices, then the plain system voices, then
   the old robotic ones. Within a rank: the page's own region (en-US), then en-GB, then any English; an on-device voice
   before a network one; the system default before the rest. */
export const NOVELTY_VOICES=Object.freeze(['Albert','Bad News','Bahh','Bells','Boing','Bubbles','Cellos','Deranged','Good News','Hysterical','Jester','Organ','Pipe Organ','Princess','Superstar','Trinoids','Whisper','Wobble','Zarvox']);
const OLD_VOICES=['Fred','Junior','Kathy','Ralph','Vicki','Victoria','Eddy','Flo','Grandma','Grandpa','Reed','Rocko','Sandy','Shelley'];
const bareName=v=>String(v?.name||'').replace(/\s*\(.*$/,'').replace(/^(Microsoft|Apple)\s+/i,'').trim();
export const noveltyVoice=v=>NOVELTY_VOICES.some(n=>bareName(v).toLowerCase()===n.toLowerCase());
export function voiceRank(v){const n=String(v?.name||'');
 if(noveltyVoice(v))return Infinity;
 if(/premium/i.test(n))return 0;if(/enhanced/i.test(n))return 1;if(/siri/i.test(n))return 2;if(/^google\b/i.test(n))return 3;
 if(/natural|neural/i.test(n))return 4;if(OLD_VOICES.some(o=>bareName(v).toLowerCase()===o.toLowerCase()))return 6;return 5;}
export function pickVoice(voices,lang='en'){
 const L=String(lang||'en').toLowerCase(),base=L.slice(0,2),region=L.length>2?L:'en-us',norm=v=>String(v?.lang||'').toLowerCase().replace('_','-');
 const ok=[...(voices||[])].filter(v=>v&&norm(v).startsWith(base)&&voiceRank(v)<Infinity);
 const where=v=>norm(v)===region?0:norm(v)==='en-gb'?1:2;
 return ok.sort((a,b)=>voiceRank(a)-voiceRank(b)||where(a)-where(b)||(b.localService?1:0)-(a.localService?1:0)||(b.default?1:0)-(a.default?1:0))[0]||null;
}
export const narrationOn=save=>save?.settings?.narration!==false;
/* The lesson guide: one name everywhere (npcs.js, the Library marker, every line). */
export const GUIDE_NAME='Archivist Aldous';
const GUIDE_SRC=new URL('./portraits/archivist.png',import.meta.url).href;

/* A narrator over injectable media, so the tests can drive it without a browser.
   env: {makeAudio(url), synth, Utterance, loadIndex() -> Promise<{voice,clips:[key]}>, base} */
export function createNarrator(env={}){
 const synth=()=>{try{const s=env.synth!==undefined?env.synth:globalThis.speechSynthesis;return s&&typeof s.speak==='function'&&typeof s.cancel==='function'?s:null;}catch{return null;}};
 const Utterance=()=>env.Utterance!==undefined?env.Utterance:globalThis.SpeechSynthesisUtterance;
 const makeAudio=env.makeAudio||(url=>{try{return typeof globalThis.Audio==='function'?new globalThis.Audio(url):null;}catch{return null;}});
 const base=env.base??new URL('../'+CLIP_DIR,import.meta.url).href;
 let clips=new Set(),voice=VOICE,loaded=false,token=0,playing=null,finish=null,chosen=null;
 const ready=(async()=>{try{const idx=await (env.loadIndex?env.loadIndex():fetch(base+'index.json').then(r=>r.ok?r.json():null));if(idx&&Array.isArray(idx.clips)){clips=new Set(idx.clips);voice=idx.voice||VOICE;}}catch{}loaded=true;})();
 /* the browser builds its voice list lazily: asking once now means the ranked pick has it by the first reading */
 try{synth()?.getVoices?.();}catch{}
 const hasClip=line=>clips.has(clipKey(line,voice));
 /* 'clip' only when every line has a clip, so one reading is never half Kokoro, half robot. */
 const mode=lines=>{const ls=[].concat(lines).filter(Boolean);if(!ls.length)return null;if(ls.every(hasClip))return 'clip';return synth()&&typeof Utterance()==='function'?'speech':null;};
 function stop(){token++;const p=playing;playing=null;if(p){try{p.pause();}catch{}p.onended=p.onerror=null;}const s=synth();if(s){try{s.cancel();}catch{}}const f=finish;finish=null;f?.();try{voiceDuck(false);}catch{}}
 function speak(lines,{onstart,onend}={}){
  stop();const ls=[].concat(lines).map(l=>String(l??'').trim()).filter(Boolean),m=mode(ls);if(!m)return false;
  const my=token;let called=false;const done=()=>{if(called)return;called=true;if(finish===done)finish=null;if(my===token)try{voiceDuck(false);}catch{}onend?.();};finish=done;try{voiceDuck(true);}catch{}
  if(m==='clip'){
   const next=i=>{if(my!==token)return;if(i>=ls.length){playing=null;done();return;}
    const a=makeAudio(base+clipKey(ls[i],voice)+'.mp3');if(!a){fallback(i);return;}playing=a;
    /* (playtest 14 Oct) the read-aloud voice follows the master volume slider like everything else */
    try{a.volume=Math.max(0,Math.min(1,getVolume().master));}catch{}
    a.onended=()=>next(i+1);a.onerror=()=>{if(my===token)fallback(i);};
    try{const p=a.play();if(i===0)onstart?.();p?.catch?.(()=>{if(my===token)fallback(i);});}catch{fallback(i);}};
   /* A clip that fails to load hands the rest of the reading to speechSynthesis rather than going silent. */
   const fallback=i=>{playing=null;if(!speechFrom(ls.slice(i),my,done,null))done();};
   next(0);return true;}
  return speechFrom(ls,my,done,onstart);
 }
 function speechFrom(ls,my,done,onstart,local=false){
  const s=synth(),U=Utterance();if(!s||typeof U!=='function'||my!==token)return false;
  /* with no voice list yet, the lines still say they are English, so the browser never reads them with its default voice for another
     language (headless Chrome's default is Google Deutsch) */
  let v=null,all=[];const pageLang=String(globalThis.document?.documentElement?.lang||'en');try{all=Array.from(s.getVoices?.()||[]);v=pickVoice(local?all.filter(x=>x.localService):all,pageLang);}catch{}chosen=v?.name||null;
  /* a network voice (Google's) that fails, as it does offline, hands the rest of the reading to the best on-device voice */
  let moved=false;const fail=i=>e=>{if(moved||my!==token)return;if(v&&!v.localService&&!local&&!/cancel|interrupt/i.test(String(e?.error||''))){moved=true;try{s.cancel();}catch{}if(speechFrom(ls.slice(i),my,done,null,true))return;}done();};
  const us=ls.map((l,i)=>{const u=new U(speechText(l));u.rate=0.9;u.pitch=1;if(v){u.voice=v;u.lang=v.lang;}else u.lang=/^en\b/i.test(pageLang)&&pageLang.length>2?pageLang:'en-US';if(i===0&&onstart)u.onstart=()=>onstart();if(i===ls.length-1)u.onend=()=>{if(!moved)done();};u.onerror=fail(i);return u;});
  try{for(const u of us)s.speak(u);}catch{done();return false;}
  return true;
 }
 return {speak,stop,mode,hasClip,ready,get loaded(){return loaded;},get clipCount(){return clips.size;},get browserVoice(){return chosen;}};
}

let shared=null;
/* The game's narrator, created on first use so importing this module in Node does nothing. */
export const narrator=()=>shared??=createNarrator();
export const stopNarration=()=>shared?.stop();

const SPEAKER='<svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false" shape-rendering="crispEdges"><path fill="currentColor" d="M1 6h3v4H1zM4 5h2v6H4zM6 3h2v10H6zM10 6h1v4h-1zM12 4h1v8h-1zM11 5h1v1h-1zM11 10h1v1h-1z"/></svg>';

/* Lesson player hook. main.js calls this once per rendered step:
     mountLessonVoice($('#modal-content'),step,{retired,on:narrationOn(s),toggle:v=>{s.settings.narration=v;persist();}})
   It puts a "Read to me" button and a Narration switch under the caption, reads the step when
   narration is on, reads Try-it feedback and hints as main.js writes them into #lesson-feedback and
   #lesson-hint, and stops when the step is replaced or the panel closes. */
export function mountLessonVoice(root,step,{retired=false,on=true,toggle,n=narrator()}={}){
 const lesson=root?.querySelector?.('.lesson');if(!lesson)return null;
 const say=lesson.querySelector('.lesson-say');
 const box=root.ownerDocument.createElement('div');box.className='edu-voice';
 box.innerHTML=`<button type="button" class="edu-speak" aria-label="Read this step to me">${SPEAKER}<span>Read to me</span></button><label class="edu-narration"><input type="checkbox" class="edu-narration-box"${on?' checked':''}> <span>Narration</span></label>`;
 if(say)say.after(box);else lesson.prepend(box);
 /* The guide (art review round 2, pillar 1): Archivist Aldous, the Library's wizard, beside the caption as the
    speaker of every step, from the UI's pack portrait at a whole scale. He cheers a right answer and leans in
    on a wrong one; the caption stays the text, so nothing depends on the picture. */
 if(say&&!lesson.querySelector('.edu-guide-row')){const row=root.ownerDocument.createElement('div');row.className='edu-guide-row';
  row.innerHTML=`<span class="edu-guide-frame"><img class="edu-guide" src="${GUIDE_SRC}" alt="" width="120" height="120"></span><div class="edu-speech"><span class="edu-speaker">${GUIDE_NAME}</span></div>`;
  say.before(row);const sp=row.querySelector('.edu-speech');sp.append(say,box);}
 const guide=lesson.querySelector('.edu-guide');
 const btn=box.querySelector('.edu-speak'),chk=box.querySelector('.edu-narration-box');
 let enabled=on;
 const read=lines=>n.speak(lines,{onstart:()=>btn.classList.add('speaking'),onend:()=>btn.classList.remove('speaking')});
 btn.onclick=()=>read(stepLines(step,retired));
 chk.onchange=()=>{enabled=chk.checked;toggle?.(enabled);if(enabled)read(stepLines(step,retired));else n.stop();};
 const fb=lesson.querySelector('#lesson-feedback'),hint=lesson.querySelector('#lesson-hint');
 const Obs=root.ownerDocument.defaultView?.MutationObserver||globalThis.MutationObserver;
 let watch=null,gone=null;
 if(Obs){
  if(fb||hint){watch=new Obs(()=>{const said=fb?[...fb.querySelectorAll('.edu-fb-say')].map(x=>x.textContent.trim()):[];
   const ls=(said.length?[...said,hint?.textContent]:[fb?.textContent,hint?.textContent]).map(x=>String(x||'').trim()).filter(Boolean);
   /* the guide's mood follows the answer: he cheers a right one and leans in on any other response line */
   if(guide){const right=!!lesson.querySelector('[data-answer].right');guide.classList.toggle('cheer',right);guide.classList.toggle('think',!right&&ls.length>0);}
   if(!enabled)return;if(ls.length)read(ls);});
   for(const el of [fb,hint])if(el)watch.observe(el,{childList:true,characterData:true,subtree:true});}
  /* Leaving the step (another step, another panel) disconnects this lesson node: stop then. */
  gone=new Obs(()=>{if(!lesson.isConnected){n.stop();watch?.disconnect();gone.disconnect();}});
  gone.observe(root,{childList:true});
 }
 const dlg=root.closest?.('dialog');
 if(dlg&&!dlg.__eduVoice){dlg.__eduVoice=true;dlg.addEventListener('close',()=>stopNarration());}
 if(enabled)read(stepLines(step,retired));else n.stop();
 return {box,read,stop:()=>n.stop()};
}

/* Settings hook: a labelled switch for the settings grid, and its wiring. */
export const narrationSettingHTML=save=>`<label>Read lessons aloud <input id="edu-narration-setting" type="checkbox" ${narrationOn(save)?'checked':''}></label>`;
export function wireNarrationSetting(root,save,persist){const el=root?.querySelector?.('#edu-narration-setting');if(!el)return;el.onchange=()=>{(save.settings??={}).narration=el.checked;if(!el.checked)stopNarration();persist?.();};}
