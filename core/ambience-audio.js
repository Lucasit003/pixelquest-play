/* Ambient beds (ambience-nov2; docs/design/IMPROVE20_ROUND9.md lane R9B item 3). Quiet CC0 loops under the music: Oakhaven by day
   (birds, light wind) and at night (crickets), Elderwood (insects, birds), Emberkeep (forge rumble, crackle) and the Veilmoor (eerie wind,
   drips). Sources and licences: docs/playtest/ambience-nov2/SOURCES.md; built by tools/build-ambience.mjs, every bed at the same loudness.
   - One bed per place: ambienceKey() picks it from what is on screen; a Hall of Echoes or Rift run plays its level's chapter bed. No bed on
     the title, the world map, indoors, in any menu, or in the Library, a lesson or a quiz (only the world panels in KEEP_VIEWS keep it).
   - It plays AMB_LEVEL into core/audio.js's ambience bus, which sits on the music's duck stages (panels, the lesson voice, enemy tells) and
     dips under stings; the bus follows the sound-effects switch and volume and settings.ambience (enableAmbience).
   - A change of place crossfades over AMB_FADE seconds; a third bed never overlaps (an older fade is cut short), so at most two sound
     for that one second.
   - Lazy: a bed's file is fetched the first time its place is played (never in the first-screen precache), after the first gesture, and
     after any loading screen (the music's gate); the service worker caches it then, so it works offline afterwards.
   - A hidden tab fades the bed out; it comes back when the tab is shown.
   Node-safe: with no AudioContext every entry point returns early. */
import {ambienceGraph,ambienceAllowed,trim,seam} from './audio.js';

export const AMB_LEVEL=.3,AMB_FADE=1,RETRY_MS=30000;
/* file names without the .mp3 (tests/prune-oct26 matches the names of deleted tracks as plain text) */
export const AMB_FILES={town:'amb-town',night:'amb-night',forest:'amb-forest',lava:'amb-ember',mystic:'amb-veil'};
export const ambFile=k=>AMB_FILES[k]?AMB_FILES[k]+'.mp3':null;
export const CHAPTER_BED={elderwood:'forest',emberkeep:'lava',veilmoor:'mystic'};
/* panels over the world that keep the bed (ducked with the music); every other panel (pause, settings, the Library, lessons, quizzes,
   tests, the journal, help...) silences it */
export const KEEP_VIEWS=new Set(['result','unlock','chapter-clear','shop','trader','smith','alchemist','barracks','pets','inventory','hero-card','hero-show','travel','village-map','tiers','rift','checkpoint-loadout','map-leave','abandon','sleep-confirm','cinematic','meter']);
/* Oakhaven follows the player's clock (scenes/town.js dayGrade): crickets from 21:00 to 4:00, the day bed otherwise */
export const isNight=hour=>{const h=((hour%24)+24)%24;return h>=21||h<4;};
/* Pure: the bed for what is on screen. st = {title, view (open modal's view or ''), sheet, map, world, room (hubState().room), hour} */
export function ambienceKey(st={}){
 const {title,view,sheet,map,world:w,room,hour}=st;
 if(title||sheet||map||!w)return null;
 if(view&&!KEEP_VIEWS.has(view))return null;
 if(w.level){const ch=CHAPTER_BED[w.level.chapter];if(ch)return ch;return {forest:'forest',lava:'lava',mystic:'mystic'}[w.zone]||null;}
 if(w.zone!=='town')return null;
 if(room&&room!=='village')return null;
 return isNight(hour??new Date().getHours())?'night':'town';
}

let want=null,live=false,cur=null,old=[],token=0,out=null,hidden=false,watching=false;
const decoded=new Map(),failed=new Map();
const probe=key=>{const l=globalThis.__pqAudioLog;if(Array.isArray(l))l.push({kind:'ambience',key,t:Math.round(globalThis.performance?.now?.()||0)});};
const url=k=>new URL('../audio/'+ambFile(k),import.meta.url).href;
function load(k,G){
 if(decoded.has(k))return decoded.get(k);
 const p=Promise.resolve().then(()=>G.gate?.()).catch(()=>{}).then(()=>fetch(url(k))).then(r=>{if(!r.ok)throw Error(r.status);return r.arrayBuffer();})
  .then(a=>new Promise((ok,no)=>G.ac.decodeAudioData(a,ok,no))).then(buf=>({buf,...seam(buf,trim(buf))}))
  .catch(()=>{decoded.delete(k);failed.set(k,Date.now());return null;});
 decoded.set(k,p);while(decoded.size>2)decoded.delete(decoded.keys().next().value);return p;
}
function watch(){if(watching)return;const d=globalThis.document;if(!d?.addEventListener)return;watching=true;
 d.addEventListener('visibilitychange',()=>{hidden=!!d.hidden;level(.3);});}
function level(t){if(!out?.ac)return;const now=out.ac.currentTime;const g=out.g.gain;try{g.cancelScheduledValues(now);g.setValueAtTime(g.value,now);g.setTargetAtTime(hidden?0:1,now,Math.max(.01,t));}catch{}}
function fadeOut(v,fade){if(!v)return;const ac=out.ac,now=ac.currentTime;try{v.g.gain.cancelScheduledValues(now);v.g.gain.setValueAtTime(Math.max(.0001,v.g.gain.value),now);v.g.gain.exponentialRampToValueAtTime(.0001,now+fade);v.s.stop(now+fade+.05);}catch{}}
/* Start the bed for key (null stops it). Called every director tick; repeats are free. */
export function setAmbience(key){
 key=key&&AMB_FILES[key]&&ambienceAllowed()?key:null;
 if(key===want&&(live||!key))return;
 if(key!==want){want=key;live=false;token++;probe(key);
  if(!key){for(const v of old)fadeOut(v,.1);old=[];if(cur){fadeOut(cur,AMB_FADE);old=[cur];}cur=null;return;}}
 if(Date.now()-(failed.get(key)||-Infinity)<RETRY_MS)return;
 const G=ambienceGraph();if(!G)return;
 if(!out||out.ac!==G.ac){const g=G.ac.createGain();g.connect(G.bus);out={ac:G.ac,g};watch();hidden=!!globalThis.document?.hidden;level(.01);}
 live=true;const my=token;
 load(key,G).then(t=>{if(my!==token||!out)return;if(!t){live=false;return;}play(key,t);});
}
function play(key,t){
 const ac=out.ac,now=ac.currentTime,g=ac.createGain(),s=ac.createBufferSource();
 s.buffer=t.buf;s.loop=true;s.loopStart=t.start;s.loopEnd=t.end;
 g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(AMB_LEVEL,now+AMB_FADE);
 s.connect(g).connect(out.g);s.start(now,t.start);
 /* no stacking: a bed still fading from an earlier change stops now; the current one fades out under the new one */
 for(const v of old)fadeOut(v,.1);old=[];if(cur){fadeOut(cur,AMB_FADE);old=[cur];}
 cur={key,s,g};s.onended=()=>{old=old.filter(v=>v.s!==s);try{s.disconnect();g.disconnect();}catch{}};
}
/* For playtests and tests: what is wanted, what plays, and how many beds are sounding. */
export const ambienceState=()=>({want,live,playing:cur?.key||null,fading:old.length,hidden});
/* For browser checks: the live gains along the bed's path (bed, hidden-tab stage), read from the Web Audio graph. */
export const ambienceLevels=()=>({bed:cur?+cur.g.gain.value.toFixed(4):0,fadingBeds:old.map(v=>+v.g.gain.value.toFixed(4)),tab:out?+out.g.gain.value.toFixed(4):null,ctx:out?.ac?.state||null});
