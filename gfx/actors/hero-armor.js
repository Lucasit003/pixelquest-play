/* Armour-set recolour (owner, 14 Oct: "every weapon is drawn; armour stays a recolour"). Pure data and pixel maths, no
   DOM: gfx/actors/hero-looks.js runs it once per (atlas, set) into an offscreen canvas; tools/bake-hero-armor.mjs and
   tools/hero-palette.mjs share the same ramps, so the game shows exactly what the preview showed
   (art/heroes/_armor-tint-preview/).
   A set owns three ramps of the class's art: plate (the blue-steel armour), cloth (cape, tabard, scarf: the reds) and
   trim (the light hem and belt). Weapon, smear, shield, skin, hair, eyes, boots, gloves and outline never change.
   Which pixel belongs to which ramp is decided at bake time (the masks in hero-palette.mjs armorMasks, plus hand-painted
   overrides) and shipped as a role map beside each atlas, hero-<key>.armor.png: per pixel R = role x 64 (1 plate,
   2 cloth, 3 trim), G = index into that role's source list x 8, alpha 255; every other pixel is transparent. The runtime
   never guesses: it looks each role pixel up in a 3-row table built from the worn set's anchors. */
/* garment: a class whose armour is cloth (no shield face, no blade, no stray-colour aliasing in armorMasks); plateDeep is
   the plate ramp's darkest step (only taken beside plate), a placeholder when the class has no plate ramp */
const garment=(cloth,plate=[],plateDeep='000000')=>({garment:true,plate,plateDeep,bladeLight:[],cloth,clothContext:{},trim:[],blur:[],woodFace:[],keep:[]});
export const ARMOR_SOURCES={
 warrior:{
  plate:['25283c','31364d','394157','424d62','4e5c70','58697d','677a8e','7a8fa2','8ea6b8','a5bccb','b1c7d4','c0d7e3','d6e7ed','e8f6fa'],
  plateDeep:'1b1c2c',
  bladeLight:['a5bccb','b1c7d4','c0d7e3','d6e7ed','e8f6fa'],
  cloth:['440622','590b26','751629','840c23','852628','98232e','b21c24','ca4c37'],
  clothShadow:'351119',
  /* colour -> cloth neighbours (of 8) needed before a shared dark counts as a cloth fold rather than hair/outline/boot */
  clothContext:{'351119':3,'1f080e':3,'4a191b':4},
  trim:['715241','90755a','a98767'],
  blur:['6d687b','4d5156','766c6e','818280','7a8091','969998','9c8066'],
  woodFace:['dd9138','7e3f22','8d4a26','6c2f1d','a55b2c','c17232','bb5b2a'],
  /* hilt and emblem golds, face shade: never aliased */
  keep:['dd9138','e49f43','f5be61','fcd26f','bb5b2a','852628']},
 /* The robe and cloak classes (weapons-wiring, 14 Oct; measured with tools/hero-palette.mjs on idle/walk of both bodies,
    which the bake snaps to the male palette). Only colours no hair, skin, eye or base weapon uses are listed, so these
    need no head mask: the garment takes the set's cloth ramp (dark, close to the robes' own values; the Rogue's hood,
    cape and tunic share it: the plate ramp's bright highlights turned his tunic tan or glowing orange). Left out on purpose: the Mage's silver trim (her hair is the same silver), the Summoner's white robe
    (her feather crown), the Ranger's leathers (hair and bow browns), the Berserker's kilt (his hair reds), and the
    robe shades the eyes are drawn in (Mage 19092d, Rogue 331f35/383244: hero-palette.js LOOK_SOURCES eye; armour and look
    maps never share a pixel).
    The Paladin has none: his hammer head and white tabard are the same steel hexes as his plate and touch it, so no
    mask separates them; he keeps his colours. */
 mage:garment(['1f0e37','280f40','2a0f4b','2e1052','36145d','421c68','4b2076','51227e','622999']),
 ranger:garment(['152928','234132','3f6a3f']),
 rogue:garment(['241b2a','24152f','251435','2a1939','362442','38264b','3f1a55','471c63','4b3a5f','4c2853','4f1d6b','4f3f61','524565','6c3579','77358b']),
 summoner:garment(['08232b','12474e','144e56','105b63','326162','227674','1f8882','1c8e87','30a79d']),
 berserker:garment(['45322f','5e453a','645044','735b4a','9c846b'])};
/* Anchors dark -> light. Each source step keeps its relative luminance position (value steps survive), the hue comes
   from the anchors, and the luminance is pinned to the line between the first and last anchor. */
export const ARMOR_SETS={
 bogking:{name:'Bog King',plate:['1b2418','34442a','56693a','7f8f4c','aab36c','dfe0a8'],cloth:['17140b','2c2714','453d20','655a2e'],trim:['4f5f24','7a9436','b2c866']},
 thornwarden:{name:'Thornwarden',plate:['1c1611','33271d','4e3b2b','6d5440','937659','cdb48c'],cloth:['09140b','132a16','1f4220','2f5e2c'],trim:['3c7420','6cb03a','b0e468']},
 forgeplate:{name:'Forgeplate',plate:['18181c','2c2c32','45444b','62606a','8b8580','ffad4a'],cloth:['161210','2a221e','3e332c','584739'],trim:['b33c16','f0781e','ffc84e']},
 magmaheart:{name:'Magma Heart',plate:['0e0808','1a0d0d','261212','341616','461b1a','5e211c','a8421c','ffae48'],gamma:2,cloth:['10070a','220a0f','3a0f16','5a1a1c'],trim:['c0300e','ff6a1a','ffcc48']},
 starvoid:{name:'Starvoid',plate:['140b22','24153d','352057','4a2f72','6a548f','a9a2c4','eef0f8'],gamma:1.1,cloth:['0b0a1a','181534','262250','3a3570'],trim:['8a8fa2','c3c7d3','f4f6fa']},
 scholar:{name:"Scholar's Regalia",plate:['3a2e27','6e5c4d','a8957c','d6c8a9','f0e8d2','fffbf0'],gamma:.8,cloth:['0f1b3e','1d3472','2d50a2','4c74ca'],trim:['a26a1a','dea52e','ffe47c']}};
/* Gear set (game/gear.js SETS) -> palette. A set with no entry (Wayfarer's, Bone Crown, Scorchscale) keeps the hero's own
   colours until a palette is drawn for it; Starvoid waits for its Veilmoor set (gear batch 2). */
export const GEAR_SET_TINT=Object.freeze({bog:'bogking',thornwarden:'thornwarden',forgeplate:'forgeplate',magmaheart:'magmaheart',scholar:'scholar'});
/* The rule (decided 15 Oct, weapon-runtime): the CHEST piece picks the colours. The chest is most of the armour on the
   sprite (plate, cape and tabard all recolour together), so one chest piece already shows its set, and a full set
   always shows it (its chest is one of the three). A helm or boots alone never recolours the whole body. */
export const tintForChest=chestSet=>GEAR_SET_TINT[chestSet]||null;

export const ROLE={plate:1,cloth:2,trim:3};
export const ROLE_STEP=64,INDEX_STEP=8;
const hex=h=>[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];
const toHex=c=>c.map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
const lum=c=>.2126*c[0]+.7152*c[1]+.0722*c[2];
export {hex as hexRGB,toHex as rgbHex,lum as luminance};
/* The source colours of each role, in role-map index order. */
export function roleLists(cls){const S=ARMOR_SOURCES[cls];if(!S)return null;return {1:[S.plateDeep,...S.plate],2:[...Object.keys(S.clothContext),...S.cloth],3:[...S.trim]};}
export function rampMapN(src,anchors,gamma=1){
 const s=src.map(hex),L=s.map(lum),lo=Math.min(...L),hi=Math.max(...L),A=anchors.map(hex),La=lum(A[0]),Lb=lum(A[A.length-1]),m=new Map();
 s.forEach((c,i)=>{
  const t=(hi>lo?(L[i]-lo)/(hi-lo):.5)**gamma,f=t*(A.length-1),k=Math.min(A.length-2,Math.floor(f)),u=f-k;
  let o=A[k].map((v,j)=>v+(A[k+1][j]-v)*u);
  const want=La+(Lb-La)*t,have=lum(o);
  o=have>0?o.map(v=>v*want/have):o;
  /* channels pushed past 255: blend toward white until the luminance is met */
  if(Math.max(...o)>255){o=o.map(v=>Math.min(255,v));const l2=lum(o);if(l2<want){const w=(want-l2)/(255-l2);o=o.map(v=>v+(255-v)*w);}}
  m.set(src[i],toHex(o));});
 return m;}
export function armorTables(cls,set){const S=ARMOR_SOURCES[cls],P=ARMOR_SETS[set];if(!S||!P)return null;const plate=rampMapN([S.plateDeep,...S.plate],P.plate,P.gamma);
 return {plate,deep:plate.get(S.plateDeep),cloth:rampMapN([...Object.keys(S.clothContext),...S.cloth],P.cloth),trim:rampMapN(S.trim,P.trim)};}
/* role code (role<<5|index) -> RGB, as one Uint8Array of 3 x 128 entries; null for an unknown class or palette */
export function tintLUT(cls,set){const T=armorTables(cls,set),R=roleLists(cls);if(!T||!R)return null;const lut=new Uint8Array(128*3);
 for(const [role,list] of Object.entries(R)){const m=role==1?T.plate:role==2?T.cloth:T.trim;list.forEach((h,i)=>{const c=hex(m.get(h)),k=(role<<5|i)*3;lut[k]=c[0];lut[k+1]=c[1];lut[k+2]=c[2];});}
 return lut;}
/* The index of a colour in a role's list: exact when listed, else the step of nearest luminance (hand-painted override
   pixels and PixelLab one-off colours) */
export function roleIndex(list,h){const i=list.indexOf(h);if(i>=0)return i;const L=lum(hex(h));let b=0;list.forEach((s,k)=>{if(Math.abs(lum(hex(s))-L)<Math.abs(lum(hex(list[b]))-L))b=k;});return b;}
/* RGBA role map -> sparse {at: Uint32Array of pixel indices, code: Uint8Array of role<<5|index}. Values are read to the
   nearest step, so a browser's colour handling of the PNG cannot move a pixel into another role. */
export function decodeRoleMap(rgba,w,h){let n=0;const N=w*h;for(let i=0;i<N;i++)if(rgba[i*4+3]>127&&rgba[i*4]>=ROLE_STEP/2)n++;
 const at=new Uint32Array(n),code=new Uint8Array(n);let k=0;
 for(let i=0;i<N;i++){if(!(rgba[i*4+3]>127))continue;const role=Math.round(rgba[i*4]/ROLE_STEP);if(role<1)continue;at[k]=i;code[k]=Math.min(3,role)<<5|Math.min(31,Math.round(rgba[i*4+1]/INDEX_STEP));k++;}
 return {w,h,at,code};}
export function encodeRole(rgba,i,role,index){rgba[i*4]=role*ROLE_STEP;rgba[i*4+1]=index*INDEX_STEP;rgba[i*4+2]=0;rgba[i*4+3]=255;}
/* Recolours an atlas' RGBA in place: only the role pixels change, alpha is kept. Returns the pixels written. */
export function applyTint(rgba,map,lut){const {at,code}=map;for(let k=0;k<at.length;k++){const i=at[k]*4,c=code[k]*3;if(!rgba[i+3])continue;rgba[i]=lut[c];rgba[i+1]=lut[c+1];rgba[i+2]=lut[c+2];}return at.length;}
