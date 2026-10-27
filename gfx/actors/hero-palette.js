/* Character creator colours (creator, 15 Oct; research in docs/design/research/CHARACTER_CREATOR_PILOT.md): hair, skin
   and eye colour by exact palette remapping. Pure data and pixel maths, no DOM. Shared by the bake (tools/bake-hero-looks.mjs,
   which runs lookMasks over every source frame and ships a look map beside each atlas, hero-<id>.look.png), the research
   tool (tools/hero-palette.mjs) and the runtime (gfx/actors/hero-looks.js, which recolours once per (atlas, armour set,
   look) into one offscreen canvas).
   Why masks and not a plain colour swap: on most heroes the hair browns are also the boots, the grip or the bow, and the
   skin's dark shades are also leather. So a pixel changes only when its colour is in a source list AND it lies in the
   region found per frame:
     - the face: the largest 8-connected cluster of faceSeed colours; the head is a flood from it through hair and skin
       colours inside a box round the face (the pilot's method);
     - core colours: hairCore / skinCore are colours this hero uses for hair (skin) only, so every pixel of them counts,
       wherever it is (a ponytail, a braid down the back, bare arms and hands, a head upside down in a roll);
     - grow: other list colours count within `grow` steps of a pixel already counted (the shading round core pixels);
     - the eye: an eye-list colour next to the sclera (or, without one, beside face skin) on the eye rows.
   Pixels a caller excludes (the armour role map, a drawn weapon) are never counted and never flooded through.
   Map format (hero-armor.js encodeRole): per pixel R = role x 64 (1 hair, 2 skin, 3 eye), G = index into that role's
   list x 8. At runtime the look roles sit above the armour's, code = (3 + role) << 5 | index, so one LUT covers both. */
import {hexRGB as hex,rgbHex as toHex,luminance as lum,decodeRoleMap,applyTint} from './hero-armor.js';

/* ---- the options (creator UI order) ---- */
export const HAIR_COLOURS={black:{name:'Black',ramp:['0e0a12','2a2431','574e63']},darkbrown:{name:'Dark brown',ramp:['1c0f0b','45281b','7a4b31']},
 lightbrown:{name:'Light brown',ramp:['3f2614','8a5c34','c99a62']},blonde:{name:'Blonde',ramp:['5e401c','c49a48','f7e294']},
 red:{name:'Red',ramp:['3f0f08','a3391a','ee7d3c']},silver:{name:'Silver',ramp:['3c3e4a','9b9faa','eef0f4']}};
/* six natural tones, fair to deep, each keeping a warm shading direction so darker skin keeps its highlights */
export const SKIN_TONES={tone1:{name:'Tone 1',ramp:['a6615a','e8ab94','fde6d8']},tone2:{name:'Tone 2',ramp:['98583a','d59c6c','f4d0a6']},
 tone3:{name:'Tone 3',ramp:['a8503a','e3916a','f8cfae']},tone4:{name:'Tone 4',ramp:['7a4228','b67a4e','deae82']},
 tone5:{name:'Tone 5',ramp:['55301f','8b5737','bd875d']},tone6:{name:'Tone 6',ramp:['2c170f','5a3523','8c5c3d']}};
export const EYE_COLOURS={brown:{name:'Brown',ramp:['2e1408','6b3a1a']},blue:{name:'Blue',ramp:['14306e','3c7fe0']},
 green:{name:'Green',ramp:['123f1e','35a052']},grey:{name:'Grey',ramp:['3a4652','8a9db0']}};
export const LOOK_PARTS={hair:HAIR_COLOURS,skin:SKIN_TONES,eyes:EYE_COLOURS};
const ROLE_OF={hair:1,skin:2,eyes:3};

/* ---- per hero body: measured by tools/hero-palette.mjs look-qa (15 Oct) ----
   Lists are hexes, dark to light not required. A part set to null is not offered for that body (the creator hides the
   row): its pixels cannot be told apart from gear cleanly, or it is not visible at all. `sub` holds other palettes in
   the same atlas (the Warrior's front portrait, its town walking north/south frames): same fields, own lists. */
export const LOOK_SOURCES={
 /* the pilot's Warrior: every hair hex is also a boot, glove, grip or cape hex, so only the head flood counts */
 warrior:{hair:['351119','4a191b','5c231c','6c2f1d','7e3f22','8d4a26','a55b2c','c17232'],skin:['ad4737','b8573f','d06c4a','dd815a','ec9161','f0a071','f8bd8a','f4d4b8'],
  faceSeed:['f8bd8a','f0a071','f4d4b8','ec9161'],faceFlood:'skin',eye:['1f080e'],faceShade:['852628','bb5b2a'],box:{left:14,right:6,up:16,down:1},topHair:true,topLum:45,faceTopMax:1,pruneSpurs:8,thinMax:30,
  sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35},
   /* drawn-weapon variants (tools/bake-hero-armor.mjs) are redrawn with a more shaded face, snapped onto the darker skin steps */
   weapon:{faceSeed:['f8bd8a','f0a071','f4d4b8','ec9161','dd815a','d06c4a'],faceTopMax:.35},
   wdir:{faceSeed:['f8bd8a','f0a071','f4d4b8','ec9161','dd815a','d06c4a'],box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35},
   portrait:{hair:['32111d','3c1523','431a1e','864226','c77f54'],skin:['5b222a','984039','d77058','eb8962','feb081'],faceSeed:['feb081','eb8962','d77058'],faceFlood:'skin',
    eye:['2b1f33','431a1e'],sclera:['d8dee8','fefefe'],eyeBox:[19,25,45,30],box:{left:24,right:24,up:30,down:0},hairZone:false,topHair:false,faceShade:[]}}},
 'warrior-f':{hair:['340c17','3f171b','4c1f1d','5c281e','6b3121','7a3c23','884a2c','a55a36','b4693a'],skin:['c67552','d98b5f','f3b283'],faceSeed:['f3b283','d98b5f','c67552'],faceFlood:'skin',
  eye:['340c17','7a3c23'],sclera:['eff9f8'],eyeRows:[-1,2],box:{left:16,right:6,up:16,down:10},topHair:true,topLum:40,faceTopMax:1,pruneSpurs:8,thinMax:30,
  sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35},
   portrait:{hair:['1d0808','310f10','3d1215','491515','753120','833d22','954b2f','c87d4a'],skin:['a4503e','bc6c4b','d9896b','da9873','efbca0'],faceSeed:['efbca0','d9896b'],faceFlood:'skin',
    eye:['753120','954b2f'],sclera:['f0dfd6','eaf2f6'],eyeBox:[19,25,45,29],box:{left:26,right:26,up:30,down:24},hairZone:false,topHair:false}}},
 mage:{sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35}},skin:['97584d','d27f59','e79f81','fdbd92'],skinCore:['d27f59','e79f81','fdbd92'],faceSeed:['fdbd92','e79f81','d27f59'],grow:{skin:1},eye:['19092d'],sclera:['d1d8ea','ebeef2'],eyeRows:[2,6]},
 'mage-f':{sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35}},hair:['4b4b64','5c5e78','666881','70718a','7f819a','898ca4','9095ac','979bb1','acafc6','c9cbe1','d4d9ea','f6f4f9'],hairCore:['7f819a','898ca4','9095ac','979bb1','acafc6','c9cbe1','d4d9ea'],hairCtx:['5c5e78','666881','70718a'],
  skin:['ab6c61','d79084','fab58f'],skinCore:['d79084','fab58f'],faceSeed:['fab58f','d79084'],solid:{hair:7,skin:6},grow:{hair:2,skin:1},hairZone:{left:22,right:2,up:18,down:40}},
 rogue:{sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35}},skin:['904c35','b06c54','d18b6c','eda677'],skinCore:['b06c54','d18b6c','eda677'],faceSeed:['d18b6c','eda677','b06c54'],faceHighest:true,grow:{skin:1},eye:['331f35','383244'],sclera:['eef4e9'],eyeRows:[-2,4]},
 'rogue-f':{sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35}},hair:['4f0602','7a1c14','8f2113','b63912','d85618'],hairCore:['7a1c14','8f2113','b63912','d85618'],hairCtx:['4f0602','000001'],
  skin:['80534d','b6745c','c88d75','ebb191','f5c4a5'],skinCore:['c88d75','ebb191','f5c4a5'],faceSeed:['ebb191','f5c4a5','c88d75'],solid:6,grow:{hair:2,skin:1}},
 ranger:{sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35}},hair:['892f20','be5e2b'],hairCore:['892f20','be5e2b'],hairCtx:['4b1f1e'],skin:['9a6445','c98868','f1ad81'],skinCore:['f1ad81','c98868'],skinCtx:['9a6445'],faceSeed:['f1ad81','c98868'],
  eye:['4b1f1e'],sclera:['cfc6c0'],eyeRows:[-1,2],solid:6,grow:{hair:3,skin:1}},
 'ranger-f':{sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35}},hair:['5c271f','732a19','954222','a3532f','b1572b'],hairCore:['732a19','954222','a3532f','b1572b'],hairCtx:['5c271f','522019','220908','763222','733e2d'],
  skin:['9c6a54','bc846e','dfa07c','eea67e'],skinCore:['dfa07c','eea67e'],skinCtx:['bc846e','9c6a54','814b39'],faceSeed:['eea67e','dfa07c'],eye:['522019'],sclera:['f3d6c3','e2b8a3'],eyeRows:[0,5],solid:6,grow:{hair:2,skin:1}},
 paladin:{sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35}},hair:['5e3226','70402b','814a2c','925333','af723f','c5874c','d8ac5f','da9a53','facb55','fff283'],hairCore:['af723f','d8ac5f','facb55','fff283'],hairCtx:['da9a53','c5874c','925333','814a2c','70402b'],
  skin:['c5874c','da9a53','e88f7b','f2b370'],skinCore:['f2b370','e88f7b'],faceSeed:['f2b370','e88f7b'],eye:['150b0e'],eyeRows:[-1,2],solid:6,grow:{hair:2,skin:1},hairZone:{left:16,right:1,up:14,down:1},openHair:17,zoneClip:true},
 /* her face is lit in the hair's own golds in most frames (run, hurt: d8a25f, c78f51), so skin is not offered */
 'paladin-f':{sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35}},hair:['72412b','885538','a66e43','b97f46','bd823e','c78f51','d8a25f','e4b34b','f6c75b'],hairCore:['bd823e','e4b34b','f6c75b'],hairCtx:['c78f51','d8a25f','a66e43','885538','72412b','b97f46'],
  faceSeed:['eeb26d','e4ba8c'],eye:['17131a'],sclera:['f8fbf6'],eyeRows:[-2,1],solid:6,grow:{hair:2},growNeed:3},
 berserker:{sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35}},hair:['45101d','63111b','801d20','992020','ae2822','c43a2a'],hairCore:['801d20','992020','ae2822','c43a2a'],hairCtx:['45101d','63111b','010000'],
  skin:['94503c','ae5946','b66952','ce7e62','f2aa82'],skinCore:['f2aa82','ce7e62','b66952'],skinCtx:['ae5946','94503c'],faceSeed:['f2aa82','ce7e62'],faceHighest:true,solid:6,grow:{hair:3,skin:1}},
 'berserker-f':{sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35}},hair:['3e0b11','56131a','63141a','741e20','972827','b8392e'],hairCore:['741e20','972827','b8392e'],hairCtx:['56131a','63141a','3e0b11','331a18'],
  skin:['a56451','b6725c','d68f74','eba381'],skinCore:['eba381','d68f74','b6725c'],skinCtx:['a56451'],faceSeed:['eba381','d68f74'],faceHighest:true,solid:6,grow:{hair:2,skin:1},hairZone:{left:20,right:2,up:18,down:8}},
 summoner:{sub:{dir:{box:{left:10,right:10,up:16,down:1},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,faceTopMax:.35}},hairLift:.3,hair:['1f1d2a','33323d','42414d'],hairCore:['33323d','42414d','1f1d2a'],coreFlood:false,skin:['a35c48','bb7459','d18a68','e5966f'],skinCore:['e5966f','d18a68'],skinCtx:['bb7459','a35c48'],
  faceSeed:['e5966f','d18a68'],eye:['000000'],sclera:['dbefe9'],eyeRows:[-2,1],solid:6,grow:{hair:2,skin:1},hairNotNear:['dbefe9','b6cac5','877768','dadbcd','9dafad','5b554d'],notNearSteps:5,notNearSeed:2,notNearBelow:2,notNearIsland:12},
 'summoner-f':{sub:{dir:{box:{left:12,right:12,up:16,down:10},hairZone:false,eyeRows:[-1,4],eyePair:true,topUpright:false,topDepth:30,faceTopMax:.35}},hair:['3f2d28','582c21','664135','814f3e','94553e'],hairCore:['582c21','664135','814f3e','94553e'],hairCtx:['3f2d28','21110e'],skin:['a56e59','c7876b','dc9372'],skinCore:['dc9372','c7876b'],
  faceSeed:['dc9372','c7876b'],solid:6,grow:{hair:2,skin:1}},
};
/* the shared defaults of a spec */
const SPEC_DEFAULTS={eyePair:false,notNearIsland:0,notNearBelow:0,notNearSeed:2,zoneClip:false,openHair:0,pruneSpurs:0,thinMax:0,thinElong:2.6,hairNotNear:[],notNearSteps:1,topUpright:true,topDepth:16,eyeBox:null,coreFlood:true,faceTopMax:.3,growNeed:1,front:1,hairZone:{left:20,right:2,up:18,down:14},zoneMin:12,minSpeck:12,bigHair:30,hugeHair:60,maxElong:3.5,topLum:0,solid:7,faceFlood:'core',faceHighest:false,hairCtx:[],skinCtx:[],hair:null,hairCore:[],skin:null,skinCore:[],faceSeed:[],faceShade:[],eye:null,sclera:[],box:{left:14,right:6,up:16,down:1},grow:0,topHair:false,minHair:40,eyeRows:[-3,3],minFace:4,headFlood:true};
export const spec=s=>({...SPEC_DEFAULTS,...s});

/* ---- which parts a body offers ---- */
export function lookParts(key){const S=LOOK_SOURCES[key];return {hair:!!S?.hair,skin:!!S?.skin,eyes:!!S?.eye};}
/* {hair,skin,eyes} with unknown ids dropped (null = the art's own colours) */
export function normalizeLook(v){const o={hair:null,skin:null,eyes:null};if(!v||typeof v!=='object')return o;
 for(const k of Object.keys(o))if(typeof v[k]==='string'&&Object.hasOwn(LOOK_PARTS[k],v[k]))o[k]=v[k];return o;}
/* the look a body can actually show (parts it does not offer drop to null) */
export function lookFor(key,v){const L=normalizeLook(v),P=lookParts(key);for(const k of Object.keys(L))if(!P[k])L[k]=null;return L;}
export const isDefaultLook=v=>{const L=normalizeLook(v);return !L.hair&&!L.skin&&!L.eyes;};
/* a short stable name for a look, '' for the art's own colours: 'h.blonde+s.tone3+e.blue' */
export function lookName(v){const L=normalizeLook(v);return [['h',L.hair],['s',L.skin],['e',L.eyes]].filter(([,x])=>x).map(([k,x])=>k+'.'+x).join('+');}

/* ---- role lists: every palette of a body (main + sub) in one list per role, max 32 entries each ---- */
const FIELDS={1:s=>s.hair||[],2:s=>[...(s.skin||[]),...(s.faceShade||[])],3:s=>s.eye||[]};
/* a sub palette inherits its parent's fields unless it names its own */
export function subSpec(key,sub){const S=LOOK_SOURCES[key];if(!S)return null;if(!sub)return S;const {sub:_,...base}=S;return S.sub?.[sub]?{...base,...S.sub[sub]}:null;}
const specsOf=key=>{const S=LOOK_SOURCES[key];return S?[S,...Object.keys(S.sub||{}).map(k=>subSpec(key,k))]:[];};
export function lookLists(key){const out={1:[],2:[],3:[]},owner={1:[],2:[],3:[]};
 for(const s of specsOf(key))for(const r of [1,2,3])for(const h of FIELDS[r](spec(s))){if(out[r].includes(h))continue;out[r].push(h);owner[r].push(s);}
 for(const r of [1,2,3])if(out[r].length>32)throw new Error(`${key}: role ${r} has ${out[r].length} colours (max 32)`);
 return {lists:out,owner};}

/* Anchors dark -> light; each source step keeps its relative luminance position within its own palette's list. */
/* lift: where the darkest source step lands on the target ramp (0 = its shadow anchor); black-drawn hair, almost all in
   its darkest steps, needs a lift or every new colour would come out nearly black */
export function rampMap(src,anchors,lift=0){const m=new Map();if(!anchors||!src.length)return m;const s=src.map(hex),L=s.map(lum),lo=Math.min(...L),hi=Math.max(...L),a=anchors.map(hex);
 s.forEach((c,i)=>{const t=lift+(1-lift)*(hi>lo?(L[i]-lo)/(hi-lo):.5),f=t*(a.length-1),k=Math.min(a.length-2,Math.floor(f)),u=f-k;m.set(src[i],toHex(a[k].map((v,j)=>v+(a[k+1][j]-v)*u)));});return m;}
/* The ear and mouth shading (faceShade) sits a step under the skin's own darkest colour. */
const shadeOf=anchors=>toHex(hex(anchors[0]).map(v=>v*.8));
/* hex -> target hex for every listed colour of a role, under a look; empty for a part left as drawn */
export function lookTables(key,v){const L=lookFor(key,v),out={1:new Map(),2:new Map(),3:new Map()};
 for(const s0 of specsOf(key)){const s=spec(s0);
  if(L.hair&&s.hair)for(const [k,t] of rampMap(s.hair,HAIR_COLOURS[L.hair].ramp,s.hairLift||0))if(!out[1].has(k))out[1].set(k,t);
  if(L.skin&&s.skin){for(const [k,t] of rampMap(s.skin,SKIN_TONES[L.skin].ramp))if(!out[2].has(k))out[2].set(k,t);for(const h of s.faceShade)if(!out[2].has(h))out[2].set(h,shadeOf(SKIN_TONES[L.skin].ramp));}
  if(L.eyes&&s.eye)for(const [k,t] of rampMap(s.eye,EYE_COLOURS[L.eyes].ramp))if(!out[3].has(k))out[3].set(k,t);}
 return out;}
/* code -> RGB for the look roles at codes (3+role)<<5|index, plus `on` flags; merged into an armour LUT when given
   (hero-armor.js tintLUT, codes 1..3). Returns null when nothing would change. */
export function paletteLUT(key,v,armorLut=null){const T=key?lookTables(key,v):{1:new Map(),2:new Map(),3:new Map()},{lists}=key&&LOOK_SOURCES[key]?lookLists(key):{lists:{1:[],2:[],3:[]}};
 const lut=new Uint8Array(256*3),on=new Uint8Array(256);let n=0;
 if(armorLut){lut.set(armorLut.subarray(0,Math.min(armorLut.length,128*3)));for(let c=32;c<128;c++)on[c]=1;n++;}
 for(const r of [1,2,3])lists[r].forEach((h,i)=>{const t=T[r].get(h);if(!t)return;const c=(3+r)<<5|i,rgb=hex(t);lut[c*3]=rgb[0];lut[c*3+1]=rgb[1];lut[c*3+2]=rgb[2];on[c]=1;n++;});
 return n?{lut,on}:null;}
/* Look map pixels -> sparse {at, code} with the look's codes (3+role)<<5|index (hero-armor.js decodeRoleMap format). */
export function decodeLookMap(rgba,w,h){const m=decodeRoleMap(rgba,w,h);for(let k=0;k<m.code.length;k++)m.code[k]+=3<<5;return m;}
/* One recolour pass over an atlas' RGBA, in place: armour roles, then the look's; only codes that are `on` change. */
export function applyPalette(rgba,maps,{lut,on}){let n=0;for(const map of maps){if(!map)continue;const {at,code}=map;
 for(let k=0;k<at.length;k++){const c=code[k];if(!on[c])continue;const i=at[k]*4;if(!rgba[i+3])continue;rgba[i]=lut[c*3];rgba[i+1]=lut[c*3+1];rgba[i+2]=lut[c*3+2];n++;}}return n;}
export {applyTint};

/* ---- the masks (bake time) ----
   lookMasks(spec, rgba, W, H, {exclude, lists}) -> {codes: Uint8Array (role<<5|index per pixel, 0 = none), hair, skin,
   eye, faceSize, fallback}. Indices are into `lists` (lookLists(key).lists) when given, else into the spec's own lists.
   exclude: Uint8Array, 1 = never counted and never passed through (armour role pixels, a drawn weapon). */
const F_HAIR=1,F_HCORE=2,F_SKIN=4,F_SCORE=8,F_SEED=16,F_EYE=32,F_SCLERA=64,F_SHADE=128;
/* how long and thin a group of pixels is: the ratio of its principal axes (1 = round) */
const elong=(px,W)=>{const n=px.length;let mx=0,my=0;for(const i of px){mx+=i%W;my+=(i/W)|0;}mx/=n;my/=n;let a=0,b=0,c=0;for(const i of px){const x=i%W-mx,y=((i/W)|0)-my;a+=x*x;b+=y*y;c+=x*y;}a/=n;b/=n;c/=n;
 const tr=a+b,det=a*b-c*c,q=Math.sqrt(Math.max(0,tr*tr/4-det));return Math.sqrt((tr/2+q)/Math.max(.05,tr/2-q));};
const part=(v,r,dflt)=>v&&typeof v==='object'?(v[r===1?'hair':'skin']??dflt):(v??dflt);
export function lookMasks(s0,d,W,H,{exclude=null,lists=null}={}){const s=spec(s0),N=W*H,fl=new Uint8Array(N),col=new Int32Array(N).fill(-1);
 const flag=new Map(),add=(list,f)=>{for(const h of list||[]){const k=parseInt(h,16);flag.set(k,(flag.get(k)||0)|f);}};
 if(s.hair){add(s.hair,F_HAIR);add(s.hairCore,F_HCORE|F_HAIR);}if(s.skin||s.faceSeed.length){add(s.skin,F_SKIN);add(s.skinCore,F_SCORE|F_SKIN);}add(s.faceSeed,F_SEED);add(s.eye,F_EYE);add(s.sclera,F_SCLERA);add(s.faceShade,F_SHADE);
 for(let i=0;i<N;i++){if(!d[i*4+3]||exclude?.[i])continue;const k=d[i*4]<<16|d[i*4+1]<<8|d[i*4+2];col[i]=k;fl[i]=flag.get(k)||0;}
 /* role: 0 none, 1 hair, 2 skin, 3 eye, 4 face shade (a skin code) */
 const role=new Uint8Array(N),inFace=new Uint8Array(N),isSeed=new Uint8Array(N);
 const each=(i,fn)=>{const x=i%W,y=(i-x)/W;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const X=x+dx,Y=y+dy;if(X>=0&&Y>=0&&X<W&&Y<H)fn(Y*W+X);}};
 /* the face: the largest (or, faceHighest, the highest) cluster of seed colours, grown through core skin colours (or every
    skin colour, faceFlood 'skin'); a hand or a bare arm is often the bigger cluster */
 /* the sprite's box: in an upright pose the face sits in the top part (a hand lower down is not a face) */
 let sy0=H,sy1=0,sx0=W,sx1=0;for(let i=0;i<N;i++)if(col[i]>=0){const x=i%W,y=(i-x)/W;sy0=Math.min(sy0,y);sy1=Math.max(sy1,y);sx0=Math.min(sx0,x);sx1=Math.max(sx1,x);}
 const upright=sy1-sy0>sx1-sx0,midY=(sy0+sy1)/2,faceMaxY=upright?sy0+s.faceTopMax*(sy1-sy0):H;
 const seen=new Uint8Array(N),through=s.faceFlood==='skin'?F_SEED|F_SKIN:F_SEED|F_SCORE,clusters=[];let face=[],faceTop=H;
 for(let i=0;i<N;i++){if(seen[i]||!(fl[i]&F_SEED))continue;const comp=[],st=[i];seen[i]=1;let top=H;
  while(st.length){const j=st.pop();comp.push(j);top=Math.min(top,(j/W)|0);each(j,k=>{if(!seen[k]&&fl[k]&through){seen[k]=1;st.push(k);}});}
  if(comp.length<s.minFace)continue;clusters.push({comp,top});}
 for(const c of clusters)if(c.top<=faceMaxY&&(s.faceHighest?c.top<faceTop:c.comp.length>face.length)){face=c.comp;faceTop=c.top;}
 /* nothing in the top part (a swing arc or a raised weapon above a bowed head): the highest cluster in the top 55% */
 if(!face.length&&upright&&s.faceTopMax<.55)for(const c of clusters)if(c.top<=sy0+.55*(sy1-sy0)&&c.top<faceTop){face=c.comp;faceTop=c.top;}
 const out={codes:new Uint8Array(N),hair:0,skin:0,eye:0,faceSize:face.length,fallback:false};
 let box=null;const inBox=i=>{const x=i%W,y=(i-x)/W;return x>=box.x0&&x<=box.x1&&y>=box.y0&&y<=box.y1;};
 if(face.length){let x0=W,y0=H,x1=-1,y1=-1;for(const i of face){const x=i%W,y=(i-x)/W;x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);inFace[i]=1;role[i]=2;}
  box={x0:x0-s.box.left,x1:x1+s.box.right,y0:y0-s.box.up,y1:y1+s.box.down,top:y0,fx0:x0,fx1:x1,fy1:y1};
  /* the pilot's head: a flood from the face through hair and skin colours inside the box */
  if(s.headFlood){const st=[...face];while(st.length){const j=st.pop();each(j,k=>{if(role[k]||!inBox(k))return;if(fl[k]&F_HAIR&&!(fl[k]&F_SEED)){role[k]=1;st.push(k);}else if(fl[k]&F_SKIN){role[k]=2;st.push(k);}});}}}
 /* no face in view (the back of the head, a roll): hair colours in the top rows of an upright sprite */
 if(s.topHair&&s.hair){let n=0;for(let i=0;i<N;i++)if(role[i]===1)n++;
  if(!box||n<s.minHair){let top=H,x0=W,x1=0,y1=0;for(let i=0;i<N;i++)if(col[i]>=0){const x=i%W,y=(i-x)/W;top=Math.min(top,y);y1=y;x0=Math.min(x0,x);x1=Math.max(x1,x);}
   if(!s.topUpright||y1-top+1>=1.15*(x1-x0+1)){const st=[];
    for(let i=0;i<N;i++){const y=(i/W)|0;if(y<=top+9&&fl[i]&F_HAIR&&!role[i]&&lum(hex(col[i].toString(16).padStart(6,'0')))>=s.topLum){role[i]=1;st.push(i);}}
    if(st.length)out.fallback=true;
    while(st.length){const j=st.pop();each(j,k=>{const y=(k/W)|0;if(!role[k]&&y<=top+s.topDepth&&fl[k]&F_HAIR){role[k]=1;st.push(k);}});}}}}
 /* core colours count anywhere they form a solid mass (a 3x3 block nearly all core or context colours of that part): a bow
    limb, a fletching or a trim line drawn in the hair's or the skin's hexes is a thin line and is left alone */
 const ctx={1:new Set((s.hairCtx||[]).map(h=>parseInt(h,16))),2:new Set((s.skinCtx||[]).map(h=>parseInt(h,16)))};
 for(const [r,FC] of [[1,F_HCORE],[2,F_SCORE]]){const need=part(s.solid,r,7),seed=[];
  for(let i=0;i<N;i++){if(role[i]||!(fl[i]&FC))continue;let n=0;each(i,k=>{if(fl[k]&FC||ctx[r].has(col[k]))n++;});if(n>=need)seed.push(i);}
  for(const i of seed){role[i]=r;if(r===1)isSeed[i]=1;}
  /* then the whole connected run of core colours from those seeds (a braid or a ponytail tip is thin but still hair) */
  if(r===1&&s.coreFlood){const st=[...seed];while(st.length){const j=st.pop();each(j,k=>{if(!role[k]&&fl[k]&FC){role[k]=1;st.push(k);}});}}}
 /* grow, both parts a step at a time: a list colour joins the part with more counted neighbours (a colour both lists
    share, such as the hair's and the chin's shading, goes to the side it touches most) */
 const gH=part(s.grow,1,0),gS=part(s.grow,2,0);
 for(let step=0;step<Math.max(gH,gS);step++){const add2=[];
  for(let i=0;i<N;i++){if(role[i]||!(fl[i]&(F_HAIR|F_SKIN)))continue;let h=0,k2=0;each(i,k=>{if(role[k]===1)h++;else if(role[k]===2||role[k]===4)k2++;});
   const canH=step<gH&&fl[i]&F_HAIR&&h>=s.growNeed,canS=step<gS&&fl[i]&F_SKIN&&k2>0;if(canH&&(!canS||h>=k2))add2.push(i,1);else if(canS)add2.push(i,2);}
  if(!add2.length)break;for(let k=0;k<add2.length;k+=2)role[add2[k]]=add2[k+1];}
 /* one-pixel lines leaving the hair (a sword grip or hilt drawn in the hair's browns, touching it) are pared away */
 if(s.pruneSpurs)for(let pass=0;pass<s.pruneSpurs;pass++){const cut=[];for(let i=0;i<N;i++){if(role[i]!==1)continue;const x=i%W,h=k=>k>=0&&k<N&&role[k]===1;
   const lr=!(x>0&&h(i-1))&&!(x<W-1&&h(i+1)),ud=!h(i-W)&&!h(i+W);if(lr||ud)cut.push(i);}if(!cut.length)break;for(const i of cut)role[i]=0;}
 /* an opening for short hair: hair is where a 5x5 window is mostly hair, plus 2 px round it; a swing smear or a glow arc
    drawn in the hair's hexes (2-3 px wide) is cut back to a stub where it leaves the head */
 if(s.hair&&s.openHair){const dense=new Uint8Array(N);for(let i=0;i<N;i++){if(role[i]!==1)continue;const x=i%W,y=(i-x)/W;let n=0;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++){const X=x+dx,Y=y+dy;if(X>=0&&Y>=0&&X<W&&Y<H&&role[Y*W+X]===1)n++;}if(n>=s.openHair)dense[i]=1;}
  let ring=[];for(let i=0;i<N;i++)if(dense[i])ring.push(i);const keep=new Uint8Array(dense);for(let st=0;st<2;st++){const nx=[];for(const j of ring)each(j,k=>{if(!keep[k]&&role[k]===1){keep[k]=1;nx.push(k);}});ring=nx;}
  for(let i=0;i<N;i++)if(role[i]===1&&!keep[i])role[i]=0;}
 /* hair is one piece with the head: a hair component (8-connected) is kept only when it reaches into the hair zone round the
    face (a ponytail or long hair is attached; a bow smear, a tattoo, a kilt or a staff in hair hexes is not). With no
    face in view (a roll), small specks are dropped. */
 if(s.hair&&s.hairZone!==false){const z=s.hairZone,seen2=new Uint8Array(N),comps=[];
  for(let i=0;i<N;i++){if(role[i]!==1||seen2[i])continue;const comp=[],st=[i];seen2[i]=1;let near=0;
   while(st.length){const j=st.pop();comp.push(j);const x=j%W,y=(j-x)/W;if(box&&x>=box.fx0-z.left&&x<=box.fx1+z.right&&y>=box.top-z.up&&y<=box.fy1+z.down)near++;each(j,k=>{if(!seen2[k]&&role[k]===1){seen2[k]=1;st.push(k);}});}
   comps.push({comp,near:box&&near>=Math.min(s.zoneMin,comp.length*.5)});}
  /* hair attached to the face when there is any; else (the face is turned away or mis-found) big compact masses */
  /* the sprites face right: no hair is ever in front of the face (a shield, a totem, a swing arc there is not hair) */
  if(box)for(const c of comps)c.comp=c.comp.filter(j=>{if(j%W<=box.fx1+s.front||(j/W|0)<box.top)return true;role[j]=0;return false;});
  /* hair hexes near an accessory's own colours above the face (the Summoner's feathers) are the accessory's shading, unless
     they sit in the solid hair mass itself */
  if(s.hairNotNear.length&&box){const no=new Set(s.hairNotNear.map(h=>parseInt(h,16))),dist=new Int16Array(N).fill(-1),q=[];
   for(let i=0;i<N;i++)if(no.has(col[i])&&((i/W)|0)<box.top-1&&i%W<box.fx0){dist[i]=0;q.push(i);}
   for(let h=0;h<q.length;h++){const j=q[h];if(dist[j]>=s.notNearSteps)continue;each(j,k=>{if(dist[k]<0&&col[k]>=0){dist[k]=dist[j]+1;q.push(k);}});}
   for(const c of comps)c.comp=c.comp.filter(j=>{if(dist[j]<0||isSeed[j]&&dist[j]>s.notNearSeed||((j/W)|0)>=box.top-s.notNearBelow)return true;role[j]=0;return false;});
   /* what is left of a feather shaft is a small island of hair hexes near the feathers: dropped */
   const isl=new Uint8Array(N);for(const c of comps)for(const j of c.comp){if(isl[j]||dist[j]<0)continue;const g=[j],st=[j];isl[j]=1;
    while(st.length){const a=st.pop();each(a,k=>{if(!isl[k]&&role[k]===1){isl[k]=1;g.push(k);st.push(k);}});}
    if(g.length<s.notNearIsland)for(const k of g)role[k]=0;}
   for(const c of comps)c.comp=c.comp.filter(j=>role[j]===1);}
  /* short hair stays inside the zone round the face, pixel by pixel (a smear leaving the head is cut where it leaves) */
  if(s.zoneClip&&box)for(const c of comps)c.comp=c.comp.filter(j=>{const x=j%W,y=(j-x)/W;if(x>=box.fx0-z.left&&x<=box.fx1+z.right&&y>=box.top-z.up&&y<=box.fy1+z.down)return true;role[j]=0;return false;});
  /* a big compact mass in the top half of an upright sprite is hair even when the face was not found near it */
  const cy=c=>c.reduce((a,j)=>a+((j/W)|0),0)/c.length;
  const anyNear=comps.some(c=>c.near),big=comps.reduce((b,c)=>c.comp.length>(b?.comp.length||0)?c:b,null);
  if(big&&big.comp.length>=s.hugeHair&&elong(big.comp,W)<s.maxElong+1&&(!upright||cy(big.comp)<midY))big.near=true;
  /* a small thin stroke on its own is a grip, a hilt or a bow string in the hair's hexes, not hair */
  for(const c of comps)if(c.comp.length&&c.comp.length<s.thinMax&&elong(c.comp,W)>=s.thinElong){for(const j of c.comp)role[j]=0;c.comp=[];c.near=false;}
  for(const {comp,near} of comps){if(!comp.length)continue;const keep=anyNear||near?near:comp.length>=(box?s.bigHair:s.minSpeck)&&(!box||elong(comp,W)<s.maxElong)&&(!upright||cy(comp)<midY);if(!keep)for(const j of comp)role[j]=0;}}
 /* ear and mouth shading: a shade colour inside the face box with 2+ skin neighbours */
 if(box&&s.faceShade.length)for(let i=0;i<N;i++){if(role[i]||!(fl[i]&F_SHADE)||!inBox(i))continue;let n=0;each(i,k=>{if(role[k]===2&&!(fl[k]&F_SHADE))n++;});if(n>=2)role[i]=4;}
 /* the eye: an eye colour on the eye rows within the face's columns (+2), touching the sclera, or else beside face skin */
 if((box||s.eyeBox)&&s.eye)for(let i=0;i<N;i++){if(!(fl[i]&F_EYE)||role[i]===2&&inFace[i])continue;const x=i%W,y=(i-x)/W,E=s.eyeBox;
  if(E?x<E[0]||x>E[2]||y<E[1]||y>E[3]:x<box.fx0-2||x>box.fx1+2||y<box.top+s.eyeRows[0]||y>box.top+s.eyeRows[1])continue;
  let ok=false;if(s.sclera.length)each(i,k=>{if(fl[k]&F_SCLERA&&!(role[k]===1))ok=true;});else ok=(x+1<W&&inFace[i+1])||(x>0&&inFace[i-1]);if(ok)role[i]=3;}
 /* a front view shows two eyes: marks that don't span both (a lone forehead or nose pixel, owner 16 Oct) are dropped */
 if(s.eyePair){let x0=W,x1=-1;for(let i=0;i<N;i++)if(role[i]===3){const x=i%W;if(x<x0)x0=x;if(x>x1)x1=x;}if(x1-x0<3)for(let i=0;i<N;i++)if(role[i]===3)role[i]=0;}
 /* codes */
 const L=lists||{1:s.hair||[],2:[...(s.skin||[]),...s.faceShade],3:s.eye||[]},idx={1:new Map(),2:new Map(),3:new Map()};
 for(const r of [1,2,3])L[r].forEach((h,i)=>idx[r].set(parseInt(h,16),i));
 for(let i=0;i<N;i++){let r=role[i];if(!r)continue;if(r===4)r=2;if(r===1&&!s.hair||r===2&&!s.skin||r===3&&!s.eye)continue;
  const j=idx[r].get(col[i]);if(j===undefined)continue;out.codes[i]=r<<5|j;out[r===1?'hair':r===2?'skin':'eye']++;}
 out.box=box;return out;}
