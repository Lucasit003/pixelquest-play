/* Jewellery (owner, 9 Oct: "pick up a necklace or ring from certain monsters ... specifically designed ... variable odds";
   pets' bonuses grow too). Pure data and rules; callers supply the random number and hold the save.
   - Every boss drops its own signature piece: 25% a kill, +15% for each kill that missed (bad-luck protection), so it
     always comes by the sixth try. Elites drop a common piece: 5%, +2% a miss. A piece already owned pays gold instead.
   - Two slots: one necklace, one ring. A piece raises fighting stats only. It never unlocks an ability and never touches
     learning or mastery (CLAUDE.md invariants).
   - A pet grows with the hero: +0.5% per level cleared together, up to double (10%), the Ink Cat too: its perk is ability
     damage now (owner, 14 Oct), so no pet changes how fast a child masters a topic. */
export const RARITY={common:{name:'Common',color:'#d8cfb6',power:.03},uncommon:{name:'Uncommon',color:'#7fd36b',power:.04},rare:{name:'Rare',color:'#6fb3ff',power:.05},epic:{name:'Epic',color:'#c38bff',power:.075},legendary:{name:'Legendary',color:'#ffb84a',power:.11}};
export const STAT_NAMES={atk:'Strength',def:'Defence',hp:'Health',mag:'Magic',speed:'Speed',crit:'Strong hit chance',cdr:'Ability wait time'};
/* [id, name, slot, rarity, boss key (or null for the elite pool), main stat, second stat, the look (its icon)] */
const T=[
 ['bramble-charm','Bramblejaw\'s Thorn Charm','necklace','rare','bramblejaw','def','hp','a necklace with a twisted thorn charm'],
 ['grubnak-ring','Grubnak\'s Crown Ring','ring','rare','goblin-king','atk','crit','a crude gold ring shaped like a tiny goblin crown'],
 ['jelly-pendant','Slime King\'s Jelly Pendant','necklace','rare','slime-king','hp','def','a pendant of wobbly green jelly in a gold cage'],
 ['gorrak-tusk','Gorrak\'s Tusk Necklace','necklace','rare','orc-warlord','atk','hp','a necklace of orc tusks on a leather cord'],
 ['labyrinth-ring','Minotaur\'s Labyrinth Ring','ring','rare','minotaur','hp','atk','a bronze ring engraved with a maze and a horn'],
 ['bone-crown-ring','Skeleton King\'s Signet','ring','epic','skeleton-king','atk','crit','a bone signet ring with a crowned skull'],
 ['spirit-beads','Mother Ruk\'s Spirit Beads','necklace','rare','orc-shaman','mag','cdr','a string of glowing green spirit beads'],
 ['golem-eye','Watch Golem\'s Eye','necklace','epic','stone-golem','def','hp','a pendant holding a glowing blue golem eye stone'],
 ['thorn-crown-ring','Thorn King\'s Briar Ring','ring','epic','thorn-king','atk','speed','a dark ring of woven thorns with a red gem'],
 ['red-hand-ring','Red Hand\'s Bandit Ring','ring','rare','bandit-chief','crit','speed','a silver ring with a red handprint gem'],
 ['spore-locket','Mushroom Lord\'s Spore Locket','necklace','rare','mushroom-lord','hp','mag','a locket shaped like a red mushroom cap'],
 ['dungeon-key','Dungeon Master\'s Key Pendant','necklace','epic','dungeon-master','mag','def','a pendant of an ornate iron key'],
 ['forge-band','Forge Golem\'s Iron Band','ring','epic','forge-golem','def','atk','a thick iron ring glowing orange like hot metal'],
 ['scorch-scale','Scorchtail\'s Scale Necklace','necklace','epic','fire-wyrm','atk','hp','a necklace with a red dragon scale'],
 ['cinder-signet','Sir Cinder\'s Signet','ring','epic','flame-knight','atk','def','a knight\'s signet ring with a flame crest'],
 ['imp-horn','Imp Lord\'s Horn Charm','necklace','epic','imp-lord','mag','crit','a charm of a small curled imp horn'],
 ['obsidian-ring','Obsidian Sentinel\'s Ring','ring','epic','obsidian-sentinel','def','speed','a black glass ring with purple light inside'],
 ['magma-heart','Moltar\'s Magma Heart','necklace','legendary','demon-slime','hp','atk','a pendant of a glowing molten heart'],
 ['ash-ring','Cinder Wraith\'s Ash Ring','ring','legendary','cinder-wraith','speed','crit','a grey ring wreathed in faint embers'],
 ['tide-pearl','Drowned Priest\'s Tide Pearl','necklace','epic','drowned-priest','mag','hp','a necklace with a large sea-green pearl'],
 ['wisp-lantern','Wisp Mother\'s Lantern Charm','necklace','epic','wisp-mother','cdr','mag','a charm of a tiny lantern with a pale wisp inside'],
 ['mirror-ring','Shadow\'s Mirror Ring','ring','legendary','shadow-twin','crit','atk','a ring with a small black mirror stone'],
 ['crystal-band','Crystal Golem\'s Band','ring','legendary','crystal-golem','def','hp','a ring of clear blue crystal'],
 ['choir-locket','Choir Lich\'s Frost Locket','necklace','legendary','lich','mag','cdr','a frosted silver locket with a skull'],
 ['void-ring','Void Knight\'s Star Ring','ring','legendary','void-knight','atk','crit','a dark ring with tiny stars inside'],
 ['deep-eye','The Sleeper\'s Deep Eye','necklace','legendary','cthulhu','hp','mag','a pendant of a glowing teal eye with tentacle prongs'],
 ['moon-wing','Moth Queen\'s Moonwing Brooch','necklace','legendary','moth-queen','speed','cdr','a silver moth-wing pendant glowing like the moon'],
 /* the elite pool */
 ['copper-ring','Copper Ring','ring','common',null,'atk','hp','a plain copper ring'],
 ['bone-charm','Bone Charm','necklace','common',null,'hp','def','a simple necklace with a small bone charm'],
 ['iron-band','Iron Band','ring','common',null,'def','atk','a plain iron ring'],
 ['silver-ring','Silver Ring','ring','rare',null,'crit','atk','a polished silver ring with a small blue gem'],
 ['pearl-necklace','River Pearl Necklace','necklace','rare',null,'mag','hp','a necklace of small white river pearls'],
 ['amber-pendant','Amber Pendant','necklace','rare',null,'speed','def','a pendant with a glowing amber stone'],
];
const value=(rarity,main)=>Math.round(RARITY[rarity].power*(main==='crit'||main==='cdr'?.6:1)*1000)/1000;
export const JEWELS=T.map(([id,name,slot,rarity,boss,main,second,look])=>({id,name,slot,rarity,boss,look,stats:{[main]:value(rarity,main),[second]:Math.round(value(rarity,second)*500)/1000}}));
export const JEWEL=Object.fromEntries(JEWELS.map(j=>[j.id,j]));
export const ELITE_POOL=JEWELS.filter(j=>!j.boss);
export const BOSS_JEWEL=Object.fromEntries(JEWELS.filter(j=>j.boss).map(j=>[j.boss,j]));
export const DROP={boss:[.25,.15],elite:[.05,.02]};

export const emptyJewels=()=>({owned:{},worn:{necklace:null,ring:null},pity:{}});
/* the summed stat fractions of what the hero wears, e.g. {atk:.05, crit:.03} */
export function jewelBonus(s){const out={};for(const id of Object.values(s.jewels?.worn||{})){const j=JEWEL[id];if(!j)continue;for(const [k,v] of Object.entries(j.stats))out[k]=(out[k]||0)+v;}return out;}
/* a pet's bonus: 5%, +0.5% per level cleared together, at most 10%. Every pet's bonus is a fighting one (the Ink Cat's is
   ability damage); no pet ever touches learning (owner, 14 Oct). */
export function petPower(s,pet=s.pet){return .05+Math.min(.05,(s.petBond?.[pet]||0)*.005);}
/* One kill's roll. Returns {id, gold} (gold > 0 when the piece was already owned) or null; updates the pity count. */
export function rollJewel(s,enemy,r){
 const j=enemy.boss&&!enemy.elite?BOSS_JEWEL[enemy.key]:enemy.elite?null:undefined;if(j===undefined)return null;
 const kind=enemy.boss&&!enemy.elite?'boss':'elite',key=kind==='boss'?enemy.key:'elite',J=(s.jewels??=emptyJewels());
 const [base,step]=DROP[kind],chance=Math.min(1,base+step*(J.pity[key]||0));
 if(r()>=chance){J.pity[key]=(J.pity[key]||0)+1;return null;}
 J.pity[key]=0;const piece=j||ELITE_POOL[Math.floor(r()*ELITE_POOL.length)];
 if(J.owned[piece.id]){const gold=Math.round(40*RARITY[piece.rarity].power/.03);return {id:piece.id,gold};}
 J.owned[piece.id]=1;if(!J.worn[piece.slot])J.worn[piece.slot]=piece.id;return {id:piece.id,gold:0};}
export function wear(s,id){const j=JEWEL[id];if(!j||!s.jewels?.owned[id])return false;s.jewels.worn[j.slot]=s.jewels.worn[j.slot]===id?null:id;return true;}
export const describe=j=>Object.entries(j.stats).map(([k,v])=>`+${Math.round(v*1000)/10}% ${STAT_NAMES[k]}`).join(', ');
