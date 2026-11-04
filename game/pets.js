/* Earned pets (improve20-c-oct31, item 15; docs/design/IMPROVE20_OCT31.md). The Ink Cat travels with every new hero from the start;
   each of the other four comes from one named source, shown on its card before it is earned. Nothing is random or bought, and
   no source is a learning step (learning only ever unlocks abilities).
   One additive save field within v9 (no version bump): s.pets = {all, got, seen}
   - all: true for a save that existed before this build (core/save.js normalize() sets it when the field is missing), so no one
     loses a pet they could already pick: those saves keep all five, as decided 31 Oct 2026 under the owner's delegation.
   - got: pets earned, latched, so a pet never goes away again even if its record changed later.
   - seen: earned pets whose "New pet!" moment has shown.
   Pure: callers pass the save. */
import {PETS} from './data.js';
import {levelDone,totalStars} from './levels.js';
import {cleanFieldMission} from './field-mission.js';
import {joined} from './party.js';
export const FREE_PET='study',PET_STARS=30;
const fieldDone=s=>{const r=cleanFieldMission(s?.fieldMission);return r.rewarded||Object.values(r.at).some(n=>n>=3);};
/* each pet's source, matched to what it gives: the Ember Fox from the Bog King (weak to fire), the Swift Tabby from the Field
   Mission's errands, the Stone Sphinx (defence) from recruiting Wil the shield-bearer, the Lucky Cat (gold) from 30 stars */
export const PET_SOURCES={
 fire:{label:'Beat the Bog King (e2)',met:s=>levelDone(s,'e2')},
 speed:{label:'Finish the Field Mission',met:fieldDone},
 defence:{label:'Recruit Wil',met:s=>joined(s,'wil')},
 loot:{label:`Win ${PET_STARS} stars`,met:s=>totalStars(s)>=PET_STARS,progress:s=>`${Math.min(PET_STARS,totalStars(s))} of ${PET_STARS} stars`}};
export const emptyPets=()=>({all:false,got:[],seen:[]});
const KEYS=new Set(PETS.map(p=>p.key));
/* old=true when the save had no s.pets at all (written before this build): it keeps every pet */
export function cleanPets(v,old=false){const p=emptyPets();if(old||!v||typeof v!=='object'||Array.isArray(v)){p.all=!!old;return p;}
 p.all=v.all===true;for(const k of ['got','seen'])if(Array.isArray(v[k]))p[k]=[...new Set(v[k].filter(x=>KEYS.has(x)&&x!==FREE_PET))];return p;}
const P=s=>s.pets||(s.pets=emptyPets());
export const petOwned=(s,key)=>KEYS.has(key)&&(key===FREE_PET||s?.pets?.all===true||(s?.pets?.got||[]).includes(key)||!!PET_SOURCES[key]?.met(s||{}));
export const ownedPets=s=>PETS.filter(p=>petOwned(s,p.key)).map(p=>p.key);
/* latch every pet whose source is met into got; returns the keys newly latched */
export function syncPets(s){const p=P(s),out=[];for(const [k,src] of Object.entries(PET_SOURCES))if(!p.got.includes(k)&&src.met(s)){p.got.push(k);out.push(k);}return out;}
/* earned pets whose moment has not shown yet (never for a save that kept all five) */
export function newPets(s){const p=P(s);if(p.all)return [];syncPets(s);return p.got.filter(k=>!p.seen.includes(k));}
export function markPetSeen(s,key){const p=P(s);if(KEYS.has(key)&&!p.seen.includes(key))p.seen.push(key);}
/* the line under a locked card: the source, and how far along a counted one is */
export function petLockLine(s,key){const src=PET_SOURCES[key];if(!src)return '';return src.progress?`${src.label} (${src.progress(s)})`:src.label;}
export const NEW_PET_TITLE='New pet!';
export const newPetLine=p=>`${p.name} wants to travel with you. Choose it at Home, Pets.`;
