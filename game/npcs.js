// Oakhaven's people and the first-ten-minutes story, as data (docs/GAME_DIRECTION.md).
//
// VILLAGERS: keyed by where the hub finds them.
//   v<id>      a figure standing on the village map (TMX object id, type npc)
//   w:<name>   a villager walking a route (Routes — walkers, by name)
//   <key>      a person in a room (the room's npc-spot `key` property, e.g. archivist_aldous)
// Each has a display name and `lines`: a list of {when, say:[...]}. The FIRST entry whose `when`
// holds is spoken, so put the most advanced progress first and an unconditional entry last.
//   when: {done:'e1'} a level is cleared   {notDone:'e1'}   {seen:'library'} {notSeen:'plaza'} story beats
//         {step:'first-lesson'} / {stepNot:'prologue'}: what game/next-step.js says the player should do
//         next, so nobody sends the kid somewhere they have already been (playtest 3, S3-5). The slice's
//         steps, in order: prologue, first-lesson, goblin-camp, start-lesson/quiz/practice, level-e2
//         (Slime Bog), earn-power (finish practice and take the test), then level-<id> and study.
//   also: true -> say this AND keep looking for the next line that holds (a restoration remark, then
//         what to do next)
// Lines are short and friendly (players are 8-14). Anyone without an entry gets a polite default.
//
// STORY: beats the hub plays once, in order of the player's first ten minutes. A beat fires on its
// trigger, speaks its lines, and is remembered in save.hub.seen. Tune the words here freely.
//   trigger: 'new-game' (first steps in town on a fresh save), 'near' (within r px of x,y in a room),
//            'enter' (stepping into a room), 'return' (back in town with `when` true)

import {nextStep} from './next-step.js';
import {questState, currentStep, onTalk, questLive, QUESTS} from './quests.js';

/* Town restoration (docs/review/v2/map/RESTORATION.md): after each Elderwood level part of Oakhaven is
   restored, and the people who live by it say so. The newest change comes first. */
const RESTORED = {
  e8: 'A festival! Banners all round the square and lanterns at every corner. Oakhaven is itself again, thanks to you.',
  e7: 'There’s a watchman on the tower again, and the island footbridge is clear of brambles.',
  e6: 'The market’s back! Every stall has goods again, and the plaza’s full of people.',
  e5: 'The churchyard is tidy again. Someone left flowers on the old graves.',
  e4: 'The windmill is turning again! The fields are being replanted and the granary has sacks.',
  e3: 'They mended the great bridge’s rail and lit the bank torches. Safe to cross after dark now.',
  e2: 'Listen! The fountain is running again, and the ducks are back on the mill pond.',
  e1: 'The lane by the field is clear again, and the sheep came home.',
};
/* who lives by each change and mentions it (by the keys below) */
const RESTORED_BY = {e1: ['v6953', 'v6951'], e2: ['v6946', 'w:Miller'], e3: ['w:Riverside fisherman', 'v6948'], e4: ['v6951', 'w:Miller'],
  e5: ['w:Chapel visitor'], e6: ['w:Market shopper', 'v12517'], e7: ['v6950', 'v6952'], e8: ['v6946', 'v12521', 'v6950']};
const STAGES = Object.keys(RESTORED);
/* the newest restoration a villager lives by: [{when, say}] put in front of their own lines */
const restoredLines = key => STAGES.filter(id => RESTORED_BY[id].includes(key))
  .map(id => ({when: {done: id, notDone: STAGES[STAGES.indexOf(id) - 1]}, say: [RESTORED[id]], also: true}));

export const VILLAGERS = {
  v52030: {name: 'Gran Mabel', lines: [{say: ['I am keeping an eye on the house. Take the south road when you are ready, and come home safely.']}]},
  scholar_ansel: {name: 'Scholar Ansel', lines: [{say: ['I copy old maps at this desk. The Library is north of here, beside the town square.', 'I like to read a lesson twice before trying its questions.']}]},
  /* --- in the village --- */
  v6946: {name: 'Bess', lines: [
    {when: {step: 'first-lesson'}, say: ['You chased the goblins off the gate! Now see Aldous at the Library.', 'The Library is west of the fountain. Everyone learns there.']},
    {when: {step: 'goblin-camp'}, say: ['The Archivist says you tried a lesson! Grubnak’s camp is past the south gate.', 'The world map opens from the gate. Good luck!']},
    {when: {step: 'start-lesson'}, say: ['You beat Grubnak? The whole market is talking about it!', 'The Archivist has your next lesson ready. Learning is what makes you stronger.']},
    {when: {step: 'quiz'}, say: ['There’s a quiz waiting at the Library. Short, and no timer. You can do it!']},
    {when: {step: 'practice'}, say: ['Practice helps your powers grow. Slime Bog is open too, whenever you want an adventure.']},
    {when: {step: 'level-e2'}, say: ['Slime Bog is next. Mind your boots out there!']},
    {when: {step: 'earn-power'}, say: ['Back from the bog! Finish your practice and take the test at the Library. A new power is waiting.']},
    {when: {done: 'e1', notDone: 'e2'}, say: ['You beat Grubnak? The whole market is talking about it!', 'My cousin says the goblins have gone quiet. Thank you!']},
    {when: {step: 'prologue'}, say: ['Morning! You must be the new adventurer.', 'Goblins are at the south gate! The guards need help. Go and see.']},
    {say: ['Morning! The market’s busy today. Mind the carts.']}]},
  v6948: {name: 'Corwin', lines: [
    {when: {done: 'e2'}, say: ['No more slime in the bog road. My boots thank you.']},
    {say: ['Brannoc the smith makes weapons and armour. Visit his shop for a stronger sword.']}]},
  v6951: {name: 'Mira', lines: [
    {say: ['Dad says the wheat grows better since the windmill was fixed.', 'Dad says the Inn cooks Hob’s eggs best. Eat there before a long walk!']}]},
  v6947: {name: 'Old Deri', lines: [{say: ['No trout for sale here any more: Netta sends her catch to the Lantern Inn. Try their Fisher’s stew.']}]},
  v6949: {name: 'Tam the apprentice', lines: [{say: ['Wright Aldis lets me sweep the forge. One day I will make swords.']}]},
  v6950: {name: 'Old Fennick', lines: [
    {when: {done: 'e8'}, say: ['The thorns are gone. I can smell the Elderwood again.']},
    {say: ['The Thorn King sent those thorns. The Library has lessons whenever you want to learn.']}]},
  v6952: {name: 'Dunstan', lines: [{say: ['Shh. The fish can hear you.', 'Fishing is like learning: patience, then a big catch.']}]},
  v6953: {name: 'Shepherd Wat', lines: [{say: ['Four sheep, all named after kings. That one is Grubnak. He bites.']}]},
  v12521: {name: 'Pip', lines: [
    {when: {done: 'e1'}, say: ['Are you the one who beat the Goblin Chief? Can I hold your sword?']},
    {say: ['I want to be an adventurer too! I like learning new powers at the Library.']}]},
  v12517: {name: 'Hilda', lines: [{say: ['The Inn’s honey buns make you quick on your feet. Try one before you go out.']}]},
  v12585: {name: 'Digger Moss', lines: [{say: ['A real dragon, this was. Fossils are history you can touch!']}]},
  'w:Market shopper': {name: 'Agnes', lines: [{say: ['Apples, eggs, bread... I always forget something.']}]},
  'w:Town courier': {name: 'Robin the courier', lines: [
    {when: {done: 'e1'}, say: ['Letters for you! Well, about you. Everyone writes about the goblin camp now.']},
    {say: ['Can’t stop, letters to deliver! The Guild has a new contract, by the way.']}]},
  'w:Miller': {name: 'Miller Jory', lines: [{say: ['Wind and water turn my wheels. Science in action, every day.']}]},
  'w:Chapel visitor': {name: 'Sister Wren', lines: [{say: ['The chaplain gives blessings for the road. They last one journey.']}]},
  'w:Riverside fisherman': {name: 'Ewan', lines: [{say: ['The river runs downhill to the lakes. Always downhill, always.']}]},
  /* --- in the rooms --- */
  archivist_aldous: {name: 'Archivist Aldous', lines: [
    {when: {step: 'start-lesson'}, say: ['Welcome back! Your next power comes from the subject on the Next lesson card. Start that lesson when you’re ready.']},
    {when: {step: 'quiz'}, say: ['You watched the lesson. Now the quiz: five questions, no timer, and you can try again.']},
    {when: {step: 'practice'}, say: ['Practise ten questions on your topic, then go and stretch your legs at Slime Bog. Every right answer counts toward your test.']},
    {when: {step: 'earn-power'}, say: ['Finish practice, then try the mastery test. Your next ability needs learning and hero levels. No rush.']},
    {when: {done: 'e1'}, say: ['Well done out there! Every lesson you finish makes you stronger for the next road.']},
    {say: ['Each shelf here is a subject. Study at one and your knowledge becomes power.', 'Your first lesson is on the Next lesson card. Master a topic through its lesson, quiz, practice and test, and meet the hero level to unlock a power.']}]},
  student: {name: 'Lina the student', lines: [{say: ['I just passed my fractions test! The Archivist gave me a stamp.']}]},
  reader: {name: 'Tomas the reader', lines: [{say: ['Shh... I’m at the best part. The hero is about to read the map.']}]},
  quartermaster_ilsa: {name: 'Quartermaster Ilsa', lines: [
    {when: {step: 'prologue'}, say: ['Goblins at the gate first, adventurer! Then come back to me for a real contract.']},
    {when: {step: 'start-lesson'}, say: ['Good work at the camp! Try Slime Bog next, or visit the Library for a lesson.']},
    {when: {step: 'quiz'}, say: ['Take your quiz at the Library, then come and see the board.']},
    {when: {step: 'practice'}, say: ['Slime Bog is open. You can also practise at the Library whenever you like.']},
    {when: {step: 'level-e2'}, say: ['Slime Bog is on the board. Out through the south gate!']},
    {when: {step: 'earn-power'}, say: ['Your sword arm is fine. The Library will make you stronger now: finish the test there.']},
    {when: {done: 'e1'}, say: ['Grubnak beaten! The board has harder contracts now. Take your pick.']},
    {say: ['Welcome, adventurer! Goblins have taken the camp past the south gate.', 'Read the contract board, then head out through the south gate.']}]},
  innkeeper_odell: {name: 'Innkeeper Odell', lines: [{say: ['All of Oakhaven’s food is cooked here now: Hob’s apples, Netta’s fish, the mill’s flour. A hot meal keeps you strong for one whole adventure. Ask at the counter!']}]},
  innkeeper: {name: 'Innkeeper Odell', lines: [{say: ['All of Oakhaven’s food is cooked here now: Hob’s apples, Netta’s fish, the mill’s flour. A hot meal keeps you strong for one whole adventure. Ask at the counter!']}]},
  brannoc_the_smith: {name: 'Brannoc the smith', lines: [{say: ['To buy stronger gear, use the counter on the right: Order weapons and armour.', 'Choose a stronger weapon or armour and pay with gold. Abilities unlock through learning and hero levels.']}]},
  master_coll: {name: 'Master Coll', lines: [{say: ['Measure twice. Drink once. Potions at the counter.']}]},
  goodwife_enid: {name: 'Goodwife Enid', lines: [{say: ['Woundwort for cuts, swiftroot for tired legs. Find my remedies at the Apothecary, beside Master Coll.']}]},
  chaplain_aurel: {name: 'Chaplain Aurel', lines: [{say: ['A blessing for the road? It lasts one journey, and that is enough.']}]},
  watchman_garrick: {name: 'Watchman Garrick', lines: [{say: ['A bounty is a job with a gold reward. Ask me for one.']}]},
  netta: {name: 'Netta', lines: [{say: ['Caught below the mill race this morning. It all goes to the Inn’s kitchen now. Their stew keeps you going!']}]},
  /* hobs-purse (docs/design/COMPANIONS_AND_OAKHAVEN.md §2.3): quest lines first, in quest order; `quest` reads game/quests.js. A line is
     chosen BEFORE talking moves the quest on (talkAndAdvance), so the offer, the hand-in and the send-off are each heard once, in turn. */
  farmer_hob: {name: 'Farmer Hob', lines: [
    {when: {quest: {id: 'hobs-purse', state: 'open'}}, say: ['Bandits on the market road. Took the whole year’s savings, they did. Red Hand’s lot.', 'My boy Wil wants to go after them, but he’s never held more than a pitchfork.', 'Bandit Road runs off the forest path past the Warcamp. Mind the trees. They drop out of them.']},
    {when: {quest: {id: 'hobs-purse', step: 1}}, say: ['Bandit Road runs off the forest path past the Warcamp. Mind the trees. They drop out of them.']},
    {when: {quest: {id: 'hobs-purse', step: 2}}, say: ['That’s it! Every coin!', 'Wil’s been sharpening a spear all week. Says if you’ll have him, he’ll guard your back.', 'Go and see him at the Barracks by the south gate.']},
    {when: {quest: {id: 'hobs-purse', step: 3}}, say: ['Wil’s waiting at the Barracks by the south gate. Go on, he’s been ready since dawn.']},
    {when: {quest: {id: 'hobs-purse', state: 'done'}}, say: ['The savings are back in the tin, and my boy marches with a hero. Mind he eats properly!']},
    {say: ['Apples, eggs and carrots, all from my own fields. Everything I grow goes to the Inn’s kitchen.']}]},
  wil: {name: 'Wil', lines: [
    {when: {quest: {id: 'hobs-purse', step: 3}}, say: ['Dad says I talk too much. I’ll talk less and hit more. For the farm!']},
    {when: {quest: {id: 'hobs-purse', state: 'done'}}, say: ['Shield’s polished, spear’s sharp. Sign me on at the roster board whenever you’re ready.']},
    {say: ['I’m Wil. I help Dad on the farm. For now.']}]},
  captain_garrick: {name: 'Captain Garrick', lines: [
    {when: {quest: {id: 'hobs-purse', state: 'done'}}, say: ['The Barracks has its first recruit! Hire a companion at the roster board. Bounties are on my desk, as ever.']},
    {say: ['Welcome to the Barracks. Bounties are on my desk: a job with a gold reward.', 'Fighters who sign on here are listed on the roster board.']}]},
  watchman_tam: {name: 'Watchman Tam', lines: [{say: ['Captain Garrick has moved to the new Barracks by the south gate. Bounties are posted there now.', 'I keep the watch, and the valley map.']}]},
};

for (const key of new Set(Object.values(RESTORED_BY).flat())) if (VILLAGERS[key]) VILLAGERS[key].lines.unshift(...restoredLines(key));

export const STORY = [
  {id: 'wake', trigger: 'new-game', room: 'home', at: 'Sleep', speaker: 'Home',
    say: ['Morning light. The bells of Oakhaven are ringing.', 'From the window you see thorns curling along the edge of the Elderwood. The Thorn King is stirring.', 'Shouts from the south gate. Goblins! Go and see.']},
  {id: 'plaza', trigger: 'near', room: 'village', x: 1478, y: 1150, r: 150, speaker: 'Bess', when: {step: 'prologue', notSeen: 'plaza-2'},
    say: ['Morning! You’re the new adventurer? Goblins are at the south gate!', 'Down the road past the fountain. The guards need help.']},
  /* the same corner of the plaza once the gate is done: point at the Library instead (S3-5) */
  {id: 'plaza-2', trigger: 'near', room: 'village', x: 1478, y: 1150, r: 150, speaker: 'Bess', when: {step: 'first-lesson', notSeen: 'plaza'},
    say: ['You’re the one who chased the goblins off the gate! The Archivist wants to meet you.', 'The Library is the big timber building west of the fountain.']},
  {id: 'library', trigger: 'enter', room: 'library', speaker: 'Archivist Aldous',
    say: ['Welcome to the Library! I am Aldous, the Archivist. I look after the books. Every shelf is a subject.', 'Your first lesson waits on the Next lesson card. What you learn here is your power out there.']},
  {id: 'guild', trigger: 'enter', room: 'guild_shop', speaker: 'Quartermaster Ilsa', when: {notDone: 'e1'},
    say: ['Welcome, adventurer! Goblins have taken the camp past the south gate.', 'Read the contract board, then leave by the south gate. The world map opens from there.']},
  {id: 'after-prologue', trigger: 'return', when: {done: 'prologue', step: 'first-lesson'}, speaker: 'Bess',
    say: ['You chased them off the gate! The Archivist wants to meet you now.', 'The Library is the big timber building west of the fountain.']},
  {id: 'goblin-return', trigger: 'return', when: {done: 'e1', notDone: 'e2'}, speaker: 'Bess',
    say: ['You’re back! Is it true you beat Grubnak the Goblin Chief?', 'Wait until the whole market hears about this!', RESTORED.e1]},
  /* coming home after each later Elderwood level: Bess in the plaza has the news of what was restored (talk to her) */
  ...STAGES.filter(id => id !== 'e1').map(id => ({id: `restored-${id}`, trigger: 'return', when: {done: id, notDone: STAGES[STAGES.indexOf(id) - 1]}, speaker: 'Bess',
    say: [`News from all over town! ${RESTORED[id]}`]})),
];

/** Does a `when` hold for this save? */
export function holds(when, save) {
  if (!when) return true;
  const done = id => !!save?.levels?.[id]?.done, seen = id => !!save?.hub?.seen?.includes(id);
  if (when.done && !done(when.done)) return false;
  if (when.notDone && done(when.notDone)) return false;
  if (when.seen && !seen(when.seen)) return false;
  if (when.notSeen && seen(when.notSeen)) return false;
  /* {quest:{id, state?, step?}}: a quest's state ('locked'|'open'|'active'|'done') and/or its current step index */
  if (when.quest) { const q = when.quest; if (!questLive(q.id)) return false; if (q.state && questState(save ?? {}, q.id) !== q.state) return false; if (q.step !== undefined) { const st = questState(save ?? {}, q.id), c = st === 'active' ? currentStep(save, q.id) : null; if (c?.index !== q.step) return false; } }
  if (when.step || when.stepNot) { const ns = nextStep(save ?? {}), step = (ns.then || ns).id; if (when.step && step !== when.step) return false; if (when.stepNot && step === when.stepNot) return false; }
  return true;
}

/** What a villager says now: {speaker, lines} (a polite default for anyone not listed). */
export function talk(key, name, save, fallback) {
  const v = VILLAGERS[key];
  if (!v) return {speaker: name || 'Villager', lines: [fallback || `${name || 'A neighbour'} pauses to wave as you pass.`]};
  if(key==='quartermaster_ilsa'&&save?.levels?.e3?.done)return {speaker:v.name,lines:[nextStep(save).text]};
  const lines = [];
  for (const l of v.lines) { if (!holds(l.when, save)) continue; lines.push(...l.say); if (!l.also) break; }
  return {speaker: v.name, lines: lines.length ? lines : v.lines.at(-1).say};
}

/** The display name for a person, or the fallback. */
/* Everyone in Oakhaven has a real name (owner, 8 Oct, packet #7): a person without an entry, or with a generic map label,
   gets a stable name picked from the key, never "Villager". */
const SPARE_NAMES = ['Rosalind', 'Edric', 'Maude', 'Tobias', 'Elsie', 'Gareth', 'Nell', 'Osric', 'Willa', 'Cedric', 'Bryony', 'Hamish', 'Ivy', 'Rowan', 'Greta', 'Alden'];
const spareName = key => { let h = 0; for (const c of String(key)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return SPARE_NAMES[h % SPARE_NAMES.length]; };
const GENERIC = /^(villager|townsfolk|person|npc|student|reader|)$/i;
export const nameOf = (key, fallback) => VILLAGERS[key]?.name ?? (GENERIC.test(String(fallback ?? '').trim()) ? spareName(key) : fallback);

/**
 * Speaking to someone in the hub: their line is chosen first (from the quest state before this visit), then the quest moves on
 * (game/quests.js onTalk, live chains only). Returns {speaker, lines, moved}. The caller saves when `moved` is not empty.
 */
export function talkAndAdvance(key, name, save, fallback, now = Date.now()) {
  const t = talk(key, name, save, fallback), moved = save ? onTalk(save, key, now, questLive) : [];
  return {...t, moved};
}
