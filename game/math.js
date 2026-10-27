import {boundDPS,equipmentDPS} from './power.js';
import {jewelBonus,petPower} from './jewels.js';
import {gearBonus,itemStats,starterWeapon,starterChest,CAPS} from './gear.js';
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
/* Lesson ladder points a save recorded for one subject and stage: Elementary topics are <subject>-e-*, Middle School topics <subject>-m-* (docs/MIDDLE_SCHOOL_SPEC.md), High School topics <subject>-h-*. Capped at 100. */
export const ladderPoints=(save,subject,tag)=>Math.min(100,Object.entries(save?.lessons||{}).reduce((t,[id,l])=>id.startsWith(`${subject}-${tag}-`)?t+(+l?.pts||0):t,0));
export const middleLadder=(save,subject)=>ladderPoints(save,subject,'m');
/* High School lesson topics are <subject>-h-* (docs/HIGH_SCHOOL_SPEC.md). */
export const highLadder=(save,subject)=>ladderPoints(save,subject,'h');
/* Middle and High School mastery are each the higher of the training bank's slot and that stage's lesson ladder, so they can only ever rise. */
export const mastery=(save,subject)=>{const m=save.mastery?.[subject]||[0,0,0];return (Math.max(clamp(+m[0]||0,0,100),middleLadder(save,subject))+Math.max(clamp(+m[1]||0,0,100),highLadder(save,subject))*1.5+clamp(+m[2]||0,0,100)*2)/4.5;};
/* XP is paid by activity, never by level (docs/LESSONS_SPEC.md §2). An ability needs its subject's ability mastery AND the hero level its gate asks for; anything in save.kept stays unlocked. */
export const XP=Object.freeze({correct:4,lesson:30,mastered:40});
export const levelXP=L=>{let t=0;for(let l=1;l<Math.floor(L);l++)t+=xpFor(l);return t;};
export const totalXP=s=>levelXP(Math.max(1,s.level||1))+Math.max(0,+s.xp||0);
/* The hero level an ability needs: its explicit lvl from abilities.js (owner re-curve, 8 Oct 2026: 1/2/3/4/6/8/10/12 along the ladder), else the original formula from its gate. */
export const xpLevel=a=>Number.isFinite(a?.lvl)?a.lvl:a.gate>0?1+Math.ceil(a.gate/15):1;
export const elementary=(save,subject)=>ladderPoints(save,subject,'e');
export const abilityMastery=(save,subject)=>{const b=mastery(save,subject),e=elementary(save,subject);return b+e/5*Math.max(0,1-b/(250/4.5));};
export const unlocked=(save,a)=>!!save.kept?.includes(a.id)||(abilityMastery(save,a.subject)+1e-8>=a.gate&&(save.level||1)>=xpLevel(a));
export const damage=({base,defence=0,multiplier=1,critical=false,variance=1})=>Math.max(1,Math.round(base*multiplier*(critical?1.8:1)*variance*100/(100+Math.max(0,defence)*3)));
/* An ability's power before defence (combat balance, 15 Oct, docs/design/BALANCE.md): its damage times the hero's damage
   stat x ABILITY_SCALE, never less than the old 1+0.018 x stat. The old curve grew half as fast as basic hits, so by hero
   level 20 a cast did less than the swings its animation replaced and learned abilities stopped mattering. */
export const ABILITY_SCALE=.12;
export const abilityPower=(dmg,stat)=>(+dmg||0)*Math.max(1+stat*.018,stat*ABILITY_SCALE);
/* A heal or shield keeps the share of health it had at hero level 1: scaled by max health over the class's base health. */
/* A basic hit's stat (basic-attack balance, 15 Oct, docs/design/BALANCE.md "Basic attacks"): the class's level-1 damage stat,
   plus only BASIC_GROWTH of everything gained since (hero levels, gear Power, jewels, mastery). Abilities keep the whole stat
   (abilityPower), so learned abilities pull ahead as the hero grows. The owner beat the final boss at level 25 with plain
   swings: by then the stat had grown 3.5x and every swing with it. At level 1 with no gear nothing changes. */
export const BASIC_GROWTH=.5;
export const basicStat=(x,c)=>{const stat=Math.max(+x?.atk||0,c?.ranged?+x?.mag||0:0),base=Math.max(+c?.atk||0,c?.ranged?+c?.mag||0:0);return stat<=base?stat:base+(stat-base)*BASIC_GROWTH;};
export const abilityGuard=(n,maxHp,baseHp)=>(+n||0)*(baseHp>0?Math.max(1,(+maxHp||0)/baseHp):1);
/* Over-level damping (oct24-overlevel; docs/playtest/oct24-exploit-b C3): kill and first-clear XP from a level is paid in full
   up to two hero levels over the level's recommended hero level, then 75% at +3, 50% at +4 and 25% from +5. Lesson, quiz, test
   and practice XP never pass through this, and nothing about mastery or unlocked() changes. Pure: the caller supplies both levels. */
export const overLevelFactor=(hero,rec)=>Math.max(.25,Math.min(1,1-.25*((+hero||1)-(+rec||1)-2)));
export const overLevelXP=(xp,hero,rec)=>Math.round((+xp||0)*overLevelFactor(hero,rec));
export const xpFor=level=>Math.round(40*level**1.5+30);
export function gainXP(s,n){s.xp+=n;while(s.xp>=xpFor(s.level)){s.xp-=xpFor(s.level);s.level++;}}
/* Gear (save v7, game/gear.js): Power adds to attack AND magic, so every class's basic hits and abilities feel a better
   weapon (the old forge's +5 attack per tier did nothing for a caster's spells). gearBonus is clamped (guardrail G5).
   `basic` is the stat a basic swing uses (basicStat: half of everything gained since level 1). */
/* Gear keeps its saved ratings; effective damage and combined health/defence contribute at most 35%.
   Below the boundary nothing changes. Compare against the same hero with the free starter weapon.
   The health/defence ray preserves their relative bonuses; rounding cannot exceed the EHP boundary. */
export const GEAR_SHARE_CAP=.35;
export function stats(s,c){const b=jewelBonus(s),g=gearBonus(s,s.hero,b),pp=1+petPower(s),k=n=>1+(b[n]||0),df=(s.pet==='defence'?pp:1)*k('def'),base={hp:c.hp+(s.level-1)*8+mastery(s,'geography')*.7,atk:c.atk+(s.level-1)*1.5+mastery(s,'cs')*.12,mag:c.mag+(s.level-1)*1.5+mastery(s,'math')*.08+mastery(s,'science')*.08,def:c.def+mastery(s,'history')*.1},starter=itemStats(starterWeapon(s.hero)).power||0,limit=1/(1-GEAR_SHARE_CAP),damageAt=power=>Math.max((base.atk+power)*k('atk'),c.ranged?(base.mag+power)*k('mag'):0),maxDamage=damageAt(starter)*limit;
 if(damageAt(g.power)>maxDamage)g.power=Math.min(maxDamage/k('atk')-base.atk,c.ranged?maxDamage/k('mag')-base.mag:Infinity);
 const hp0=Math.round(base.hp*k('hp')),starterDef=itemStats(starterChest(s.hero)).def||0,def0=(base.def+starterDef)*df,ehpMax=hp0*(100+3*def0)*limit,hpAt=f=>Math.round((base.hp+g.hp*f)*k('hp')),defAt=f=>(base.def+starterDef+(g.def-starterDef)*f)*df;let guard=1;
 if(hpAt(1)*(100+3*defAt(1))>ehpMax){let lo=0,hi=1;for(let i=0;i<48;i++){const mid=(lo+hi)/2;if(hpAt(mid)*(100+3*defAt(mid))<=ehpMax)lo=mid;else hi=mid;}guard=lo;}
 g.hp*=guard;g.def=starterDef+(g.def-starterDef)*guard;const x={...c,hp:Math.round((base.hp+g.hp)*k('hp')),mp:Math.round(c.mp+mastery(s,'language')*.5),atk:(base.atk+g.power)*k('atk'),mag:(base.mag+g.power)*k('mag'),def:(base.def+g.def)*df,speed:c.speed*(s.pet==='speed'?pp:1)*Math.min(1+CAPS.speed,k('speed')*(1+g.speed)),cdr:mastery(s,'finance')*.002+(b.cdr||0)+g.cdr,crit:(c.crit||0)+(b.crit||0)+g.crit,gear:g};/* Jewellery is part of the offensive budget. Preserve base/mastery, pet and defence;
    scale Power above the starter, jewel attack/magic, crit, CDR, set multipliers and procs together. */
 const academicCDR=mastery(s,'finance')*.002,at=f=>{const power=starter+(g.power-starter)*f,j=n=>1+(b[n]||0)*f,gear={...g,power,crit:g.crit*f,cdr:g.cdr*f,top:g.top*f,elem:Object.fromEntries(Object.entries(g.elem).map(([k,v])=>[k,v*f])),offenseScale:f};return {...x,atk:(base.atk+power)*j('atk'),mag:(base.mag+power)*j('mag'),crit:(c.crit||0)+((b.crit||0)+g.crit)*f,cdr:academicCDR+((b.cdr||0)+g.cdr)*f,gear};};
 const budget=boundDPS(f=>equipmentDPS(at(f))),effective=at(budget.scale);effective.gear.dps=budget;effective.basic=basicStat(effective,c);return effective;}
/* The subject a hero has mastered most (Scholar's Regalia reads it in combat). */
export const topSubject=s=>Object.keys(s?.mastery||{}).concat(['math','cs','science','geography','history','language','finance']).reduce((best,k)=>abilityMastery(s,k)>abilityMastery(s,best)?k:best,'math');
/* Explicit density questions keep dimensions: g/mL = g/cm³ = 1000 kg/m³.
   NIST volume definitions and SI conversion table: https://www.nist.gov/pml/owm/si-units-volume
   Metric exponents avoid rounding a correct decimal through a floating-point multiply/divide. */
const NUMERAL='[+-]?(?:(?:\\d{1,3}(?:,\\d{3})+|\\d+)(?:\\.\\d*)?|\\.\\d+)(?:[eE][+-]?\\d+)?';
const DENSITY_UNIT='(?:mg|kg|g)\\s*/\\s*(?:cm(?:³|\\^3|3)|m(?:³|\\^3|3)|m[Ll]|[Ll])';
const DENSITY_REQUEST=new RegExp('\\bdensity\\s*,?\\s+in\\s+('+DENSITY_UNIT+')(?=$|[\\s?.,;])','i');
const DENSITY_VALUE=new RegExp('^('+NUMERAL+')(?:\\s*('+DENSITY_UNIT+'))?$');
const PLAIN_NUMBER=new RegExp('^'+NUMERAL+'$');
const densityExponent=unit=>{
 const [mass,volume]=unit.replace(/\s/g,'').replace(/³|\^3/g,'3').split('/');
 return ({mg:-6,g:-3,kg:0}[mass])-({m3:0,cm3:-6,ml:-6,mL:-6,l:-3,L:-3}[volume]);
};
/* Shared by accepts() and the Library's exact(). Contextual formats are deliberately
   limited to explicitly requested density units and whole hours on a 24-hour clock.
   Other numeric questions retain their existing shorthand ("$15", "24 cm", etc.). */
export function numberIn(input,q){
 const raw=String(input).trim(),density=DENSITY_REQUEST.exec(q?.prompt||'');
 if(density){
  const value=DENSITY_VALUE.exec(raw);if(!value)return NaN;
  const [mantissa,exponent='0']=value[1].replace(/,/g,'').split(/[eE]/);
  const shift=value[2]?densityExponent(value[2])-densityExponent(density[1]):0;
  return Number(`${mantissa}e${Number(exponent)+shift}`);
 }
 if(/\b(?:what hour|what is the local hour)\b/i.test(q?.prompt||'')&&/\bon the 24-hour clock\b/i.test(q.prompt)){
  const clock=/^([01]?\d|2[0-3]):00$/.exec(raw);
  const value=clock?Number(clock[1]):PLAIN_NUMBER.test(raw)?Number(raw.replace(/,/g,'')):NaN;
  return Number.isInteger(value)&&value>=0&&value<24?value:NaN;
 }
 const value=raw.toLowerCase().replace(/\s+/g,' ').replace(/^\$\s*/,'').replace(/\s*(cents?|¢|dollars?|cm|mm|km|m|ml|l|kg|g|grams?|°|degrees?|hours?|hrs?|years?|years? old|people|%|percent|[x×]|m\/s|km\/h|j|joules?|µm|μm|um|kilobytes?|kb|bytes?|bits?)$/,'').replace(/,(?=\d{3}(?:\D|$))/g,'');
 if(value==='')return NaN;const n=Number(value);if(!Number.isNaN(n))return n;
 const c=contextNumber(value,q?.prompt||'');if(!Number.isNaN(c))return c;
 /* the unit strip above can bite into a word ("box" loses its x), so the context reading also sees the unstripped answer */
 return contextNumber(raw.toLowerCase().replace(/\s+/g,' ').replace(/^\$\s*/,'').replace(/,(?=\d{3}(?:\D|$))/g,''),q?.prompt||'');
}
/* Oct 14 playtest: children answer "9 candies", "twelve" or "28 r 1". A number followed only by plain words that the question
   itself uses (its counting noun) is read as that number; a whole-number word up to one hundred is read as its number; and
   "q r n" / "q remainder n" is read as q only when the question holds two whole numbers a and b with a ÷ b = q remainder n. */
const ONES=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],TENS=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
export function numberWord(w){
 const t=String(w).trim().toLowerCase().replace(/\s+/g,' ');if(/^(a|one) hundred$/.test(t))return 100;
 const i=ONES.indexOf(t);if(i>=0)return i;const m=/^([a-z]+)(?:[- ]([a-z]+))?$/.exec(t);if(!m)return NaN;
 const tens=TENS.indexOf(m[1]);if(tens<2)return NaN;if(!m[2])return tens*10;const one=ONES.indexOf(m[2]);return one>=1&&one<=9?tens*10+one:NaN;
}
/* Measurement words are never read from context: "60 feet" must not pass for 60 inches. */
const UNIT_WORD=/^(f(oo|ee)t|inch|inche|yard|mile|minute|second|hour|day|week|month|year|decade|century|centurie|pound|ounce|ton|tonne|gallon|quart|pint|cup|lit(er|re)|met(er|re)|centimet(er|re)|millimet(er|re)|kilomet(er|re)|gram|kilogram|milligram|degree|percent|cent|dollar|unit|square|cubic|kilobyte|megabyte|gigabyte|byte|bit|times|half|halve|third|quarter|fourth|fifth|sixth|eighth|tenth|hundredth|thousandth)$/;
const stem=w=>w.replace(/'s$/,'').replace(/(ies)$/,'y').replace(/(ches|shes|xes|sses)$/,m=>m.slice(0,-2)).replace(/s$/,'');
function contextNumber(value,prompt){
 const word=numberWord(value);if(!Number.isNaN(word))return word;
 /* "about 150" when the question itself asks "about how many" */
 const approx=/^(?:about|around|approximately|roughly|~|≈) ?(.+)$/.exec(value);if(approx&&/\b(about|approximately|roughly|estimate)\b/i.test(prompt)){const n=numberIn(approx[1],{prompt});return Number.isFinite(n)?n:NaN;}
 /* "k = 10" when the question asks for k; also a variable or call the question names ("points = 15", "halves(128) = 7":
    playtest 14 Oct pass 2, a CS placement marked "points = 15" wrong) */
 const named=/^([a-z_][a-z0-9_]*(?:\([^()]*\))?) ?= ?(.+)$/.exec(value);if(named&&new RegExp(`(^|[^a-z0-9_])${named[1].replace(/[()]/g,'\\$&')}([^a-z0-9_(]|$)`).test(prompt.toLowerCase())){const n=Number(named[2]);return Number.isFinite(n)&&named[2].trim()!==''?n:NaN;}
 const words=new Set((prompt.toLowerCase().match(/[a-z']+/g)||[]).map(stem));
 const unit=/^([+-]?\d+(?:\.\d+)?|\.\d+) ([a-z' ]+)$/.exec(value);
 /* the exact unit the question asks for ("in kilometres per litre", "how many minutes") is always fine */
 if(unit&&[' in ','how many '].some(w=>prompt.toLowerCase().includes(w+unit[2].trim())))return Number(unit[1]);
 /* when the question says "how many pages", a different noun ("9 minutes") is not read as the answer */
 const asked=/how many (?:(?:more|fewer|less|extra|whole|full|total|in all) )*([a-z]+)/.exec(prompt.toLowerCase());
 if(unit&&asked&&stem(unit[2].trim().split(' ')[0])!==stem(asked[1]))return NaN;
 if(unit){const tail=unit[2].trim().split(' ');if(tail.length<=3&&tail.every(w=>!/^(not|no|isn't|or)$/.test(w)&&!UNIT_WORD.test(stem(w))&&words.has(stem(w))))return Number(unit[1]);}
 const rem=/^(\d+) ?(?:r|rem|remainder|left over|leftover)\.? ?(\d+)(?: left(?: over)?)?$/.exec(value);
 if(rem){const nums=(prompt.match(/\d+/g)||[]).map(Number),qt=+rem[1],r=+rem[2];
  for(const a of nums)for(const b of nums)if(b>0&&a!==b&&Math.floor(a/b)===qt&&a%b===r)return qt;}
 return NaN;
}
/* Precision-aware grading (integrator decision, 8 Oct): a typed number is right within half a step of the expected answer's last decimal place, never looser than ±0.01. Integers keep ±0.01; 0.3 accepts 0.30 but not 0.31; 0.25 needs 0.25. */
export const decimalsOf=a=>{const s=String(Number(a)),[m,e]=s.split('e');return Math.max(0,(m.split('.')[1]||'').length-(e?Number(e):0));};
export const numericTolerance=a=>Math.min(.01,.05*10**-decimalsOf(a));
/* A text answer that is a plain number ("0.8") also takes the same number written another way (".8", "0.80"): Oct 14 playtest. */
/* Answer matching (learning-flow fix, 17 Oct; docs/design/GAME_READINESS.md section 5). A typed answer is compared after
   answerKey(): case, spacing and trailing punctuation never matter. Word answers also forgive a small typo (typoLimit):
   one wrong letter for 4-7 letters, two for 8 or more; never for numbers, single letters, short words, symbols, codes,
   or Language questions (spelling is what those test), and never when the typed word is as close to another listed
   choice. Pure: no state, no randomness. */
export const answerKey=(v,cased=false)=>{const t=String(v??'').trim().replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/\s+/g,' ');let c=t.replace(/[\s.!?,;:]+$/,'');const w=/^"([^"]+)"$/.exec(c);if(w)c=w[1].replace(/[\s.!?,;:]+$/,'');const r=c||t;return cased?r:r.toLowerCase();};
export function editDistance(a,b,cap=9){a=String(a);b=String(b);if(Math.abs(a.length-b.length)>cap)return cap+1;let prev2=null,prev=Array.from({length:b.length+1},(_,j)=>j);
 for(let i=1;i<=a.length;i++){const cur=[i];let low=i;for(let j=1;j<=b.length;j++){let d=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));if(prev2&&i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])d=Math.min(d,prev2[j-2]+1);cur[j]=d;if(d<low)low=d;}if(low>cap)return cap+1;prev2=prev;prev=cur;}return prev[b.length];}
const WORDY=/^(?:[A-Z]?[a-z'’-]+)(?: [A-Z]?[a-z'’-]+)*$/;
const SPELLING=/\bspell|\bplural|\bcapital letter|\bpast tense|\bsuffix|\bprefix|\bcontraction|\babbreviat|\bwhole word\b|\bletters? only\b/i;
/* How many typed letters may be wrong for this expected answer: 0 means it must be exact. */
export function typoLimit(expected,q={}){const a=String(expected??'').trim();if(q.numeric||q.subject==='language'||SPELLING.test(q.prompt||'')||!WORDY.test(a))return 0;const n=a.replace(/[^a-z]/gi,'').length;return n>=8?2:n>=4?1:0;}
/* Choice questions: a question with 2-6 fixed answers shows answer buttons, never a typing box. The answers are q.options
   when the question lists them, otherwise the list its prompt ends with ("Answer A, B or C.", "active or passive?",
   "(hear or here)"), and only when the expected answer is one of them. Lettered answers keep the text each letter stands
   for when the prompt spells it out ("A: ribosome, B: Golgi apparatus"). Returns [{value,label}] or null. */
const LEAD=/^(?:answer|type|choose|pick|write|enter|reply|say|select|circle|is it|was it|is this|are they)\b[:,]?\s*/i;
const ORDERED=/(?:^|[\s.?!:;)])(?:answer|type|choose|pick|select|reply|circle):?\s+([^.?!:;()]*\bor\b[^.?!:;()]*)$/i;
const bare=x=>x.replace(/^(?:a|an|the) /i,'');
function listOf(tail,bounded,want){if(!/\bor\b/.test(tail))return null;if(!bounded)tail=tail.replace(/^.*,\s*(?=(?:do|does|did|is|are|was|were|will|would|can|could|should|has|have)\b)/i,'').replace(/^(?:which|what|who)\b[^,]*,\s*(?=.*\bor\b)/i,'');const parts=tail.split(/\s*,\s*/),items=(parts.length>=3&&!/\bor\b/.test(parts.at(-1))?parts:tail.split(/\s*,\s*(?:or\s+)?|\s+or\s+/)).map(x=>x.trim().replace(/^['‘"“](.+)['’"”]$/,'$1')).filter(Boolean);if(items.length<2||items.length>8)return null;if(items.some(x=>/^[A-F]$/.test(x))&&!items.every(x=>/^[A-F]$/.test(x)))return null;
 if(!bounded||/^(?:is|are|was|were|does|do|did|will|can|could|would|should|has|have|which|what|who|when)\b/i.test(items[0])){if(items.length>2&&/^(?:which|what|who)\b/i.test(items[0])&&items[0].split(' ').length>2&&items.slice(1).every(x=>!x.includes(' ')))items.shift();const k=items[1].split(' ').length,w=items[0].split(' ');if(w.length>k)items[0]=w.slice(-k).join(' ');if(items.length>2&&!/^[$\d-]/.test(items[0])&&items.slice(1).every(x=>/^[$\d-]/.test(x)))items.shift();}
 const last=items.at(-1).split(' '),vs=[items,items.map(bare)];if(last.length===2&&items.slice(0,-1).every(x=>!x.includes(' ')))vs.splice(1,0,[...items.slice(0,-1),last[0]]);
 const num=k=>{const m=/^\$?(\d[\d,]*(?:\.\d+)?)(?: [a-z]+)?$/.exec(k);return m?Number(m[1].replace(/,/g,'')):NaN;},wantN=want.map(Number).filter(Number.isFinite);
 for(const list of vs){const keys=list.map(x=>answerKey(x)),nums=list.map(x=>num(answerKey(x,true))).filter(Number.isFinite);if(new Set(list.map(x=>answerKey(x,true))).size===list.length&&new Set(nums).size===nums.length&&!list.some(x=>x.length>50||x.split(' ').length>7||!/[\p{L}\p{N}<>=]/u.test(x))&&keys.some(k=>want.includes(k)||wantN.includes(num(k))))return list;}return null;}
/* polish4-oct27 (mhist-oct27 engine bug): list.map(answerKey) passed the array index as `cased`, so only the first entry lost its
   capitals and a capitalised answer in any other place got a typing box. Keys are now all uncased; the uniqueness check keeps
   capitals (a paris / Paris choice stays) and numbers read the cased key (30 BCE / 30 CE stay two choices). A lead question
   before a comma ("Which has greater X, N or O?") and a "when the Sun is highest or lowest" lead are trimmed. 988 items moved to
   buttons, none back to typing, no id changed: tests/polish4-oct27.test.js and its fixture. */
const CHOICES=new WeakMap();
export function choicesOf(q){if(!q||typeof q!=='object')return null;if(CHOICES.has(q))return CHOICES.get(q);const c=findChoices(q);CHOICES.set(q,c);return c;}
function findChoices(q){const want=[q.answer,...(q.accept||[])].map(x=>answerKey(x));
 if(Array.isArray(q.options)){const o=q.options.map(String);return o.length>=2&&o.length<=8&&o.some(x=>want.includes(answerKey(x)))?o.map(v=>({value:v,label:v})):null;}
 /* Every variant in this Boolean topic offers the same two choices, including 'is the statement correct?'. */
 if(q.topic==='cs-e-true-or-false'&&want.some(x=>x==='true'||x==='false'))return ['true','false'].map(value=>({value,label:value}));
 const p=String(q.prompt||'').trim(),body=p.replace(/[\s.?!)]+$/,'');let items=null,head='';
 const ins=ORDERED.exec(body);if(ins){items=listOf(ins[1],true,want);head=body.slice(0,ins.index+1);}
 if(!items){const at=['. ','? ','! ',': ','; ','(','"','“','”','—'].map(k=>{const i=body.lastIndexOf(k);return [i<0?-1:i+k.length-1,k];}).sort((x,y)=>y[0]-x[0])[0];
  let tail=body.slice(at[0]+1).replace(/^["“”\s]+/,''),bounded=at[0]>=0&&[': ','; ','(','—'].includes(at[1]);const led=LEAD.exec(tail);if(led){tail=tail.slice(led[0].length);bounded=true;}
  items=listOf(tail,bounded,want);head=body.slice(0,Math.max(0,at[0]+1));}
 if(!items){const lead=/^([^:?.]{3,60}\bor\b[^:?.]{1,60}):/.exec(p);if(lead)items=listOf(lead[1],false,want);head='';}
 if(!items&&/^[A-F]$/.test(String(q.answer).trim())){const L=[];for(const c of 'ABCDEF'){if(!markers(p,[...L,c]))break;L.push(c);}if(L.length>=2&&L.includes(String(q.answer).trim())&&letterTexts(p,L)){items=L;head=p;}}
 if(!items)return null;const labels=items.every(x=>/^[A-F]$/.test(x))&&head?letterTexts(head,items):null;
 return items.map((v,i)=>({value:v,label:labels?`${v}: ${labels[i]}`:v,...labels?{text:labels[i]}:{}}));}
function markers(head,letters){const at=[];let from=0;for(const L of letters){const m=new RegExp(`(?:^|[\\s(;,:|])\\(?${L}(?:[:)]|,|(?=\\s+["“]))\\s+`).exec(head.slice(from));if(!m)return null;const s=from+m.index;at.push([s,s+m[0].length]);from=s+m[0].length;}return at;}
function letterTexts(head,letters){const at=markers(head,letters);if(!at)return null;
 const out=at.map(([,e],i)=>{let x=head.slice(e,i+1<at.length?at[i+1][0]:head.length);if(i+1===at.length)x=x.split(/(?<=[.?!])\s+(?=[A-Z(])|\s+(?=(?:Answer|Type|Choose|Pick|Select)\b)/)[0];return x.replace(/[\s,;|]*(?:\bor)?[\s,;|]*$/,'').replace(/[.?!;:,\s]+$/,'').trim();});
 return out.every(x=>x&&x.length<=160)?out:null;}
export function matchAnswer(input,q){if(!answerKey(input))return {ok:false,typo:false};
 if(q.numeric){const number=numberIn(input,q);return {ok:Number.isFinite(number)&&Math.abs(number-Number(q.answer))<=numericTolerance(q.answer)+1e-12,typo:false};}
 if(PLAIN_NUMBER.test(String(q.answer).trim())){const n=numberIn(input,q);if(Number.isFinite(n)&&n===Number(String(q.answer).replace(/,/g,'')))return {ok:true,typo:false};}
 /* choices that differ only in capitals ("paris" / "Paris") are told apart by their capitals */
 const choices=(choicesOf(q)||[]).map(c=>c.value),cased=new Set(choices.map(c=>answerKey(c))).size<choices.length,key=v=>answerKey(v,cased),value=key(input);
 const forms=[q.answer,...q.accept||[]];if(forms.some(a=>key(a)===value))return {ok:true,typo:false};if(cased)return {ok:false,typo:false};
 const others=(choicesOf(q)||[]).flatMap(c=>[c.value,c.text||c.value]).map(key).filter(k=>!forms.some(a=>key(a)===k));
 for(const a of forms){const lim=typoLimit(a,q);if(!lim||/[^a-z' -]/.test(value))continue;const d=editDistance(value,key(a),lim);if(d<=lim&&!others.some(o=>editDistance(value,o,lim)<=Math.max(d,lim)))return {ok:true,typo:true,expected:String(a)};}
 return {ok:false,typo:false};}
export function accepts(input,q){return matchAnswer(input,q).ok;}
