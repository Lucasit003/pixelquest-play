/* PixelQuest soundscape (v2:ui).
   SFX: ZzFX (MIT, vendored in ui/vendor/zzfx.js) builds each named sound once into an AudioBuffer;
   playback is a buffer source through the SFX bus, so a busy frame costs nothing to synthesise.
   Music: CC0 tracks from the Ninja Adventure pack (pixel-boy & AAA), baked by tools/bake-audio.py
   into dist/audio/*.mp3. playMusic(key) crossfades between them; sting(key) plays a jingle and
   ducks the music under it.
   Mixer: source -> sfx|music bus -> master -> limiter -> speakers. Volumes are 0..1 and come from
   save.settings.volume via setVolume(); enable()/enableMusic() are the old on/off switches.
   Node-safe: with no AudioContext every entry point returns early, so tests can import this.

   API for other scenes:
     sfx(name, arg)          one-shot effect; names in SFX below ('cast' takes an element)
     playMusic(key, {fade})  'title' 'town' 'worldmap' 'forest' 'lava' 'mystic' 'boss' 'credits',
                             or a biome key such as 'lava-gate' (the part before '-' picks the track)
     stopMusic(fade)         fade the music out
     sting(key)              'victory' 'levelup' 'defeat' 'unlock'
     setVolume({master, music, sfx}), getVolume(), duck(on) */
import {ZZFX} from '../ui/vendor/zzfx.js';

let ac=null,master,limiter,sfxBus,musicBus,duckGain,enabled=true,musicOn=true,ducked=false;
const vol={master:.92,music:.55,sfx:.8};
const AC=()=>globalThis.AudioContext||globalThis.webkitAudioContext;

function ctx(){
 if(ac)return ac;
 const C=AC();if(!C)return null;
 try{ac=new C();}catch{return null;}
 limiter=ac.createDynamicsCompressor();
 limiter.threshold.value=-12;limiter.knee.value=6;limiter.ratio.value=10;limiter.attack.value=.003;limiter.release.value=.16;
 master=ac.createGain();sfxBus=ac.createGain();musicBus=ac.createGain();duckGain=ac.createGain();
 sfxBus.connect(master);musicBus.connect(duckGain).connect(master);master.connect(limiter).connect(ac.destination);
 ZZFX.audioContext=ac;ZZFX.sampleRate=ac.sampleRate;
 applyVolume(0);
 return ac;
}
function resume(){if(ac&&ac.state==='suspended')ac.resume().catch(()=>{});}
/* Browsers start audio suspended until a gesture. Call once with the window; the first key or tap resumes. */
export function unlockAudio(target=globalThis){
 if(!target?.addEventListener)return;
 const go=()=>{gestured=true;if(ctx()){resume();if(wanted&&!wanted.live)playMusic(wanted.key,{fade:.8});}};
 for(const ev of ['pointerdown','keydown','touchstart'])target.addEventListener(ev,go,{passive:true});
}

function applyVolume(t=.08){
 if(!ac)return;
 const now=ac.currentTime,set=(node,v)=>{node.gain.cancelScheduledValues(now);node.gain.setTargetAtTime(v,now,Math.max(.001,t));};
 set(master,vol.master);set(sfxBus,enabled?vol.sfx:0);set(musicBus,musicOn?vol.music:0);set(duckGain,ducked?.4:1);
}
const clamp01=v=>Math.max(0,Math.min(1,Number(v)));
export function setVolume(v={}){for(const k of ['master','music','sfx'])if(v[k]!==undefined&&!Number.isNaN(Number(v[k])))vol[k]=clamp01(v[k]);applyVolume();}
export function getVolume(){return {...vol};}
export function enable(v){enabled=!!v;applyVolume();}
export function enableMusic(v){musicOn=!!v;applyVolume();if(musicOn&&wanted&&!wanted.live)playMusic(wanted.key);}
/* Pull the music down while a panel or the pause menu is up. */
export function duck(on){if(ducked===!!on)return;ducked=!!on;applyVolume(.25);}

/* ---------- SFX ---------- */
/* ZzFX parameter lists: [volume, randomness, frequency, attack, sustain, release, shape, shapeCurve,
   slide, deltaSlide, pitchJump, pitchJumpTime, repeatTime, noise, modulation, bitCrush, delay,
   sustainVolume, decay, tremolo, filter]. Shapes: 0 sin, 1 triangle, 2 saw, 3 tan, 4 noise. */
const Z={
 'swing':     [.5,.08,420,.005,.01,.08,4,1.4,-14,,,,,1.2,,,,.6,.02,,1800],
 'hit.light': [1,.08,220,.002,.02,.09,4,2.2,-6,,,,,1.6,,.3,,.7,.03],
 'hit.heavy': [1.5,.06,120,.002,.06,.22,4,2.2,-4,,,,,2.2,,.4,,.75,.06],
 'hit.crit':  [1.8,.04,170,.002,.12,.34,4,2,-3,,560,.04,,2,,.4,,.85,.05],
 'crit':      [.8,.02,1200,.004,.06,.2,1,1.6,,,700,.05,,,,,.06,.6],
 'hurt':      [1.2,.1,160,.004,.06,.2,2,2.4,-8,,,,,1.2,,.4,,.6,.05],
 'dodge':     [.55,.05,700,.02,.04,.14,4,1,22,,,,,.6,,,,.5,,,2400],
 'jump':      [.5,.05,240,.01,.03,.12,1,1.6,10,,,,,,,,,.6],
 'land':      [.8,.08,90,.004,.03,.12,4,3,-2,,,,,2,,,,.6,.03,,-600],
 'kill':      [.7,.04,520,.005,.05,.18,1,1.4,,,260,.06,,,,,.03,.6],
 'death':     [1,.05,180,.01,.2,.7,2,2,-1.5,,,,,.6,,.3,.12,.5,.1],
 'potion':    [.6,.03,420,.02,.12,.24,0,1.3,4,,190,.08,.07,,,,,.7],
 'pickup':    [.6,.02,1400,.004,.04,.16,1,1.8,,,600,.05],
 'coin':      [.55,.02,1675,,.05,.22,1,1.8,,,840,.05],
 'ready':     [.3,.02,1320,.004,.03,.2,0,1.5,,,660,.05],
 'buy':       [.6,.02,980,.004,.06,.24,1,1.6,,,420,.07,,,,,.04],
 'ui':        [.35,.01,620,.002,.01,.05,1,2,,,,,,,,,,.5],
 'ui.click':  [.35,.01,620,.002,.01,.05,1,2,,,,,,,,,,.5],
 'ui.move':   [.22,.01,880,.001,.005,.03,1,2],
 'ui.back':   [.3,.01,420,.002,.01,.07,1,2,-4],
 'ui.open':   [.35,.01,330,.01,.04,.12,0,1.4,6,,,,,,,,,.6],
 'correct':   [.6,.01,660,.01,.08,.24,1,1.5,,,330,.08,,,,,.04,.7],
 'wrong':     [.45,.02,220,.01,.06,.2,1,1.4,-3,,,,,,,,,.6],
 'unlock':    [.7,.01,520,.02,.22,.5,1,1.4,,,260,.12,.12,,,,.08,.7],
 'levelup':   [.7,.01,440,.02,.2,.46,1,1.4,,,220,.1,.1,,,,.06,.7],
 'boss':      [1.4,.05,55,.08,.5,.9,2,2.4,-.6,,,,,1.4,4,.3,.1,.6,.2,.3],
 'boss.roar': [1.4,.05,70,.06,.42,.8,2,2.6,-.8,,,,,1.8,6,.4,.08,.6,.18,.4],
 'shield':    [.6,.03,300,.01,.1,.3,1,2,2,,,,,,8,,.05,.6],
 /* enemy tells by attack kind (docs/design/TRICKY_LEVELS_OPENING_STORY_SFX.md 13.3 P1), panned to the attacker, -20..-17 dBFS */
 'tell.melee':[.45,.05,260,.14,.04,.07,4,1,14,,,,,.7,,,,.5,,,1500],
 'tell.small':[.3,.05,320,.1,.03,.06,4,1,16,,,,,.6,,,,.5,,,1700],
 'tell.aoe':  [.7,.05,58,.16,.14,.12,2,2,,,,,.06,1.4,,.2,,.6],
 'tell.shot': [.4,.03,820,.08,.04,.07,1,1.5,-18],
 'tell.beam': [.45,.02,180,.32,.16,.06,1,1,7,,,,,,9],
 'tell.dash': [.55,.1,140,.02,.08,.14,4,2,-4,,,,,2.2],
 'tell.leap': [.45,.03,520,.05,.24,.1,0,1,-11],
 'tell.wave': [.85,.05,46,.02,.1,.42,0,2,-1,,,,,,,,,.7],
 'tell.pull': [.5,.05,640,.004,.02,.09,4,1.5,-28],
 'tell.stance':[.45,.01,1480,.004,.02,.3,1,1.5,,,,,,,,,.05,.5],
 'tell.summon':[.8,.05,78,.004,.03,.24,0,2,-2,,,,.12,1],
 'tell.vanish':[.5,.05,880,.05,.06,.2,4,1,-18,,,,,.4],
 'tell.dark': [.7,.03,52,.4,.3,.6,2,2,-.3,,,,,,3],
 /* guard cues: a guarded or armoured hit tinks, a blocked one clanks, wards ping, armour cracks, PERFECT chimes, dizzy chirps */
 'guard':     [.55,.02,1700,.001,.01,.12,1,2.5,,,,,,2,,.2,,.4],
 'blocked':   [.9,.03,860,.001,.03,.2,3,2,-5,,,,,2.5,,.3,,.5],
 'ward':      [.5,.01,2100,.002,.02,.22,0,1.6,,,520,.04,,,,,.04,.5],
 'armour.crack':[1,.05,300,.001,.05,.26,4,2,-8,,,,,3,,.5],
 'perfect':   [.6,.01,990,.004,.06,.3,1,1.5,,,495,.05,,,,,.06,.6],
 'dizzy':     [.35,.02,1600,.01,.05,.1,0,1,,,600,.05,.06,,,,,.5],
};
const CAST={
 fire:  [.5,.06,240,.01,.1,.28,4,1.6,-2,,,,,2.2,,.2,,.7,.04,,1400],
 ice:   [.6,.04,1400,.01,.08,.3,1,1.4,3,,500,.04,,,,,.06,.6],
 storm: [.8,.06,900,.004,.05,.24,2,1.2,,,,,.03,1.6,,.4,,.7,,.6],
 poison:[.6,.06,260,.02,.12,.26,0,1.6,-1,,,,,.6,12,,,.7,,.4],
 holy:  [.6,.02,880,.02,.14,.36,1,1.2,,,440,.06,,,,,.08,.7],
 nature:[.55,.04,420,.02,.1,.28,1,1.4,2,,210,.08,,.2,,,,.7],
 shadow:[.7,.05,150,.02,.12,.32,2,2,-1.2,,,,,.8,9,.2,,.6,,.3],
 arcane:[.6,.03,560,.01,.1,.3,1,1.3,1,,280,.07,,,6,,.05,.7],
};
/* Mix levels in dB on top of each recipe (playtest 14 Oct, measured as the loudest 50 ms of each render): hits sat
   15 dB over the rewards and drove the limiter into pumping the music, a wrong answer was louder than a right one,
   and the quiet casts (ice, holy, arcane) were 9 dB under fire. Now: hits -16..-12 dBFS, casts about -21, rewards and
   a correct answer above a wrong one. The recipes themselves are unchanged. */
export const SFX_LEVEL={'hit.light':-2.5,'hit.heavy':-5,'hit.crit':-4.5,correct:5,wrong:-2,kill:4,shield:5,
 'cast.fire':-2,'cast.poison':-2,'cast.ice':6,'cast.holy':5,'cast.arcane':5,'cast.storm':1.5,'cast.nature':1,'cast.shadow':1.5};
const dbGain=d=>Math.pow(10,(d||0)/20);
const buffers=new Map();
function bufferFor(key,params){
 let b=buffers.get(key);if(b)return b;
 const samples=ZZFX.buildSamples(...params);
 b=ac.createBuffer(1,Math.max(1,samples.length),ac.sampleRate);b.getChannelData(0).set(samples);
 buffers.set(key,b);return b;
}
const lastPlayed=new Map();
/* Playtest probe: set globalThis.__pqAudioLog=[] and every sfx/music/sting request is recorded there. */
const probe=(kind,key)=>{const l=globalThis.__pqAudioLog;if(Array.isArray(l))l.push({kind,key,t:Math.round(performance.now())});};
function playBuffer(b,{gain=.38,rate=1,pan=0}={}){
 const s=ac.createBufferSource(),g=ac.createGain();s.buffer=b;s.playbackRate.value=rate;g.gain.value=gain;
 let out=g;if(pan&&ac.createStereoPanner){const p=ac.createStereoPanner();p.pan.value=Math.max(-1,Math.min(1,pan));g.connect(p);out=p;}
 s.connect(g);out.connect(sfxBus);s.start();return s;
}
export const SFX_NAMES=[...Object.keys(Z),'cast'];
/* The ZzFX recipe behind a sound, and its samples rendered without the per-play pitch jitter.
   Pure (no AudioContext), so tests and tools can inspect the sound design. */
export function sfxParams(name,arg){return name==='cast'?CAST[CAST[arg]?arg:'arcane']:Z[name]||null;}
export function renderSfx(name,arg,rate=44100){const p=sfxParams(name,arg);if(!p)return new Float32Array(0);const q=[...p];q[1]=0;const r=ZZFX.sampleRate;ZZFX.sampleRate=rate;try{return ZZFX.buildSamples(...q);}finally{ZZFX.sampleRate=r;}}
/* Call sites say what happened; this table decides what it sounds like. step raises the swing pitch
   through a combo; opts.pan places the sound left or right of the hero. */
export function sfx(name,arg,opts={}){
 probe('sfx',name==='cast'?'cast.'+arg:name);
 if(!enabled||!ctx())return;
 resume();
 try{
  const key=name==='cast'?'cast.'+(CAST[arg]?arg:'arcane'):name;
  const params=name==='cast'?CAST[CAST[arg]?arg:'arcane']:Z[name];if(!params)return;
  /* The same sound fired twice inside 30 ms is one sound louder; skip the double. */
  const now=ac.currentTime;if(now-(lastPlayed.get(key)||-1)<.03)return;lastPlayed.set(key,now);
  const rate=(name==='swing'&&typeof arg==='number'?Math.pow(1.08,arg):1)*(1+(Math.random()-.5)*.06);
  playBuffer(bufferFor(key,params),{gain:.38*dbGain(SFX_LEVEL[key]),rate,pan:opts.pan||0});
 }catch{}
}
/* Old entry points, kept for existing call sites and tests. */
export function tone(f=440,d=.12,type='triangle',volume=.04){
 if(!enabled||!ctx())return;resume();
 try{const shape={sine:0,triangle:1,sawtooth:2,square:2}[type]??1;playBuffer(bufferFor(`tone.${f}.${d}.${shape}`,[Math.min(1,volume*12),0,f,.004,d*.3,d*.7,shape]));}catch{}
}
export function fanfare(){sting('unlock');}
export function victory(){sting('victory');}

/* ---------- music ---------- */
export const MUSIC_KEYS=['title','town','worldmap','forest','lava','mystic','boss','credits'];
const STINGS=['victory','levelup','defeat','unlock'];
/* Owner, 14 Oct: calm medieval music ("Minecraft-type") is the default. Medieval = the owner's picks wherever one is
   chosen (title, Oakhaven, world map, credits); Peaceful swaps in Sunset Plains for the title and Oakhaven; Original is
   the Ninja Adventure chiptune throughout. Levels and bosses keep their tracks until the upbeat battle picks land. */
export const SOUNDTRACKS={classic:'Original',peaceful:'Peaceful',medieval:'Medieval'};
export const DEFAULT_SOUNDTRACK='medieval';
const MEDIEVAL={title:'first-light-particles',town:'village-consort',worldmap:'lord-of-the-land',credits:'eternal-hope',boss:'boss-v7'};
/* Owner, 14 Oct: Oakhaven rotates a playlist so a long session never hears one loop forever. Each track plays through
   once, then the next one fades in; the starting track changes per session. */
export const TOWN_PLAYLIST=['village-consort','town-2','town-3','town-4','town-5'];
let townAt=Math.floor(Math.random()*TOWN_PLAYLIST.length);
export const townTrack=()=>TOWN_PLAYLIST[townAt%TOWN_PLAYLIST.length];
export function nextTownTrack(){townAt=(townAt+1)%TOWN_PLAYLIST.length;return townTrack();}
/* Every level and every level's boss has its own track (keys "level-<id>" and "boss-<id>", files audio/<key>.mp3) in the
   Medieval and Peaceful soundtracks; a boss outside a level falls back to the finale's Five Armies (boss-v7). */
export const levelMusicKey=id=>'level-'+String(id).toLowerCase();
export const bossMusicKey=id=>'boss-'+String(id).toLowerCase();
let soundtrack=DEFAULT_SOUNDTRACK;
export const getSoundtrack=()=>soundtrack;
export function musicFile(k,style=soundtrack){
 if(style==='classic')return (k==='title'||k==='town'?k+'-court-oct13':k)+'.mp3';
 if(style==='peaceful'&&(k==='title'||k==='town'))return 'sunset-plains.mp3';
 if(k==='town')return townTrack()+'.mp3';
 return (MEDIEVAL[k]||k)+'.mp3';}
const url=k=>new URL('../audio/'+musicFile(k),import.meta.url).href;
/* Loudness trims in dB so every track plays near -18 LUFS (ffmpeg ebur128, playtest 14 Oct): Sunset Plains and the mystic theme 1.5 dB over. */
export const MUSIC_TRIM={'sunset-plains.mp3':-1.5,'mystic.mp3':-1.5,'eternal-hope.mp3':-2};
export const musicTrim=k=>dbGain(MUSIC_TRIM[musicFile(k)]);
export function setSoundtrack(style){style=Object.hasOwn(SOUNDTRACKS,style)?style:DEFAULT_SOUNDTRACK;if(style===soundtrack)return;const before=soundtrack;soundtrack=style;decoded.clear();if(wanted&&musicFile(wanted.key)!==musicFile(wanted.key,before)){token++;wanted.live=false;playMusic(wanted.key,{fade:2});}}

const decoded=new Map();
/* lightload-oct27: a phone's link is shared between the music and the scene being loaded. A music file waits until no
   loading screen holds a scene (setMusicGate, set by core/loader.js; the track then starts with the scene, never under
   the loading panel), and a track still downloading when another one is wanted is dropped (the title track used to keep
   streaming 2.6 MB through the hero select, the village and the first level). Stings never wait. */
const inflight=new Map();let musicGate=null;
export function setMusicGate(fn){musicGate=typeof fn==='function'?fn:null;}
/* A loading screen went up (core/loader.js): drop every music download; if that was the wanted track it starts again on resumeMusic(). */
export function holdMusic(){const w=wanted&&url(wanted.key);let hit=false;for(const [src,c] of inflight){c.abort();decoded.delete(src);if(src===w)hit=true;}inflight.clear();if(hit){wanted.live=false;token++;}}
export function resumeMusic(){if(wanted&&!wanted.live)playMusic(wanted.key,{fade:.8});}
function dropStale(keep){for(const [src,c] of inflight)if(src!==keep){c.abort();inflight.delete(src);decoded.delete(src);}}
function load(k){
 const source=url(k);if(decoded.has(source)){const p=decoded.get(source);decoded.delete(source);decoded.set(source,p);while(decoded.size>2)decoded.delete(decoded.keys().next().value);return p;}
 const music=!k.startsWith('sting-'),c=music&&typeof AbortController==='function'?new AbortController():null;if(c)inflight.set(source,c);
 const p=(music&&musicGate?Promise.resolve().then(musicGate).catch(()=>{}):Promise.resolve())
  .then(()=>{if(c?.signal.aborted)throw Error('superseded');return c?fetch(source,{signal:c.signal}):fetch(source);})
  .then(r=>{if(!r.ok)throw Error(r.status);return r.arrayBuffer();})
  .then(a=>{if(inflight.get(source)===c)inflight.delete(source);return new Promise((ok,no)=>ac.decodeAudioData(a,ok,no));})
  .then(buf=>{const t=trim(buf);return k.startsWith('sting-')?{buf,...t}:{buf,...seam(buf,t)};}).catch(()=>{if(inflight.get(source)===c)inflight.delete(source);if(decoded.get(source)===p)decoded.delete(source);return null;});
 decoded.set(source,p);while(decoded.size>2)decoded.delete(decoded.keys().next().value);return p;
}
/* MP3 frames carry encoder delay and padding: silence at both ends that would click at the loop point. */
function trim(buf){
 const d=buf.getChannelData(0),n=d.length,eps=.0008;let a=0,b=n-1;
 while(a<n&&Math.abs(d[a])<eps)a++;while(b>a&&Math.abs(d[b])<eps)b--;
 return {start:Math.min(a,n-1)/buf.sampleRate,end:Math.max(b,a+1)/buf.sampleRate};
}
/* A loop that ends mid-waveform clicks every time it wraps (boss, mystic and Sunset Plains measured 5-7x the
   track's own sharpest sample-to-sample change at the seam). The last SEAM seconds fade into the first ones and the
   loop then resumes just after them, so the wrap is continuous; the loop is SEAM shorter, which no one can hear. */
const SEAM=.008;
export function seam(buf,{start,end}){
 try{const sr=buf.sampleRate||44100,n=Math.floor(SEAM*sr),a=Math.round(start*sr),b=Math.round(end*sr);
  if(b-a<n*8)return {start,end};
  for(let ch=0;ch<(buf.numberOfChannels||1);ch++){const d=buf.getChannelData(ch);
   for(let i=0;i<n;i++){const w=Math.sin((i+1)/(n+1)*Math.PI/2),tail=b-n+i;d[tail]=d[tail]*Math.cos((i+1)/(n+1)*Math.PI/2)+d[a+i]*w;}}
  return {start:(a+n)/sr,end:b/sr};}catch{return {start,end};}
}
/* Normalises a scene or biome key to one of the tracks. Old zones: castle->lava, hall->mystic, throne->boss. */
export function musicKey(k){
 if(!k)return null;k=String(k).toLowerCase();
 if(/^(level|boss)-[a-z0-9]+$/.test(k))return k;
 const zone={castle:'lava',hall:'mystic',throne:'boss',home:'town',hub:'town',level:'forest',map:'worldmap'}[k];if(zone)return zone;
 if(MUSIC_KEYS.includes(k))return k;
 const head=k.split(/[-_ ]/)[0];
 return MUSIC_KEYS.includes(head)?head:({fire:'lava',volcano:'lava',ember:'lava',purple:'mystic',veil:'mystic',arcane:'mystic',wood:'forest'}[head]||'forest');
}
let current=null,wanted=null,token=0,gestured=false;
/* hook-oct27 (lighter first load): no music file is fetched before the player's first key or tap. A browser could not play it
   before then anyway, and on a phone the title and town tracks (2.6 and 3.9 MB) were downloading beside the game's own code. The
   wanted track starts on that first gesture (unlockAudio). Where the browser cannot tell (Node, old browsers) nothing waits. */
const activated=()=>{const ua=globalThis.navigator?.userActivation;return gestured||!ua||ua.hasBeenActive===true;};
export function currentMusic(){return wanted?.key||null;}
export function playMusic(key,{fade=1.4}={}){
 probe('music',key);
 const k=musicKey(key);if(!k)return stopMusic(fade);
 if(wanted?.live&&musicFile(wanted.key)===musicFile(k)){wanted.key=k;return;}
 wanted={key:k,live:false};dropStale(url(k));
 if(!musicOn||!activated()||!ctx())return;
 wanted.live=true;resume();
 const my=++token;
 load(k).then(track=>{
  if(my!==token||!ac)return;
  if(!track){wanted.live=false;return;}
  loopBuffer(k,track,fade);
 });
}
/* The decoded loop: click-free seam (seam()), the Oakhaven playlist timer. */
function loopBuffer(k,track,fade){
  const now=ac.currentTime,g=ac.createGain(),s=ac.createBufferSource(),level=musicTrim(k);
  s.buffer=track.buf;s.loop=true;s.loopStart=track.start;s.loopEnd=track.end;
  g.gain.setValueAtTime(.0001,now);g.gain.exponentialRampToValueAtTime(level,now+Math.max(.05,fade));
  s.connect(g).connect(musicBus);s.start(now,track.start);
  if(current)fadeOut(current,fade);
  current={key:k,s,g};s.onended=()=>{s.disconnect();g.disconnect();s.buffer=null;};
  /* Oakhaven playlist: once this town track has played through, the next one fades in. */
  if(k==='town'&&soundtrack==='medieval'){const t=current.timer=setTimeout(()=>{if(current?.s===s&&wanted?.key==='town'){nextTownTrack();playMusic('town',{fade:3});}},Math.max(5,track.end-track.start-3)*1000);t.unref?.();}
}
function fadeOut(v,fade){clearTimeout(v.timer);const now=ac.currentTime;try{v.g.gain.cancelScheduledValues(now);v.g.gain.setValueAtTime(Math.max(.0001,v.g.gain.value),now);v.g.gain.exponentialRampToValueAtTime(.0001,now+Math.max(.05,fade));v.s.stop(now+Math.max(.05,fade)+.05);}catch{}}
export function stopMusic(fade=1){wanted=null;token++;if(current&&ac)fadeOut(current,fade);current=null;}
export function sting(key){
 probe('sting',key);
 if(!enabled||!ctx()||!STINGS.includes(key))return;
 resume();
 load('sting-'+key).then(t=>{
  if(!t||!ac)return;
  const s=ac.createBufferSource(),g=ac.createGain();s.buffer=t.buf;g.gain.value=1;s.connect(g).connect(sfxBus);s.start();
  /* Duck the music under the jingle, then bring it back. */
  const now=ac.currentTime,d=t.buf.duration;
  musicBus.gain.cancelScheduledValues(now);musicBus.gain.setTargetAtTime(musicOn?vol.music*.25:0,now,.05);
  musicBus.gain.setTargetAtTime(musicOn?vol.music:0,now+d*.85,.4);
 });
}
/* main.js still calls this every half second with the world zone. Once the UI's music director is
   running (setDirected(true), from ui/index.js) the director owns the track and this does nothing. */
let directed=false;
export function setDirected(v){directed=!!v;}
export function musicNote(zone){if(musicOn&&!directed)playMusic(zone);}
