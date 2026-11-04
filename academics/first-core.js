/* improve20-r18d-nov3 #2 (lead, 3 Nov 2026, delegated by the owner; docs/reference/SPEC_DECISIONS.md "First topic's lesson"): the save's FIRST
   topic (firstTopic in lessons.js, the rule behind FIRST_PRACTICE_NEEDED and the summed quiz: worked on while nothing is mastered) plays a
   short core path of its own lesson: at most FIRST_CORE_MAX of its existing steps, in order, with at least FIRST_CORE_TRYITS Try-its, and
   finishing that path counts as the lesson done (finishLesson's `only`). Kid sims round 4 #17: the 70-110 wpm readers spent 120-152 s on
   the first lesson before any quiz. The full lesson stays one tap away ("See the whole lesson", main.js); every other topic, and this one
   once it is mastered or once any other topic is, plays the full lesson. Mastery still needs the quiz, practice and the mastery test.

   Which topics: every topic a save can start on in Elementary, the first topic of each subject's Grade 2 (the Library and the starter
   lesson open there) and the first topic of Grades 3, 4 and 5 (where a placement lands). Lessons of 6 steps or fewer play whole.
   No step is reworded (narration clips are keyed by step text, Try-it ids by prompt text): a path only picks step indices.
   A Grade 2 path starts with the starter cut's steps (starter-lesson.js starterCut, 4 for each) and goes on past them, so the
   awakening lesson and the core path never disagree. `digest` is hash(JSON.stringify(steps)) when the path was chosen: a later edit
   to the lesson's steps makes the path stand down (the full lesson plays) and tests/improve20-r18d-nov3.test.js flags it for review. */
import {hash} from './bank.js';
import {firstTopic,mastered} from './lessons.js';
export const FIRST_CORE_MAX=6,FIRST_CORE_TRYITS=2;
const P=(steps,digest,why)=>Object.freeze({steps:Object.freeze(steps),digest,why});
export const FIRST_CORE=Object.freeze({
 'math-e-place-value':P([0,1,2,3,4,5],'1cup3bm','drops the closing recap (6); digits, building and expanded form all stay, with 3 Try-its'),
 'finance-e-counting-money':P([0,1,2,3,4,6],'1g1u3i4','drops the first count-on demo (5; step 6 counts on from a quarter itself) and the recap (7)'),
 'cs-e-patterns':P([0,1,2,3,5],'140qhee','drops the third pattern shape (4) and the recap (6); next and missing both keep their Try-its'),
 'geography-e-compass':P([0,1,2,3,5,6],'mgh26i','drops the half turn (4); the rose, left and right turns and map directions stay'),
 'language-e-plurals':P([0,1,2,3,4,5],'sf9qrp','drops the closing recap (6)'),
 'science-e-states-of-matter':P([0,1,2,3,4,6],'1yzi94j','drops boiling (5); melting (4) and freezing back (6) keep the change of state both ways'),
 'history-e-timelines':P([0,1,2,3,4,6],'1xrs8ea','drops the message-sending example (5); reading direction keeps its Try-it (6)'),
 'math-e-arrays':P([0,1,2,3,4,5],'efc9vq','drops a bigger fact (6) and the recap (7); groups, arrays, skip counting, facts and turn-around stay'),
 'math-e-multiply-bigger':P([0,1,2,3],'jdnuhi','keeps the whole first worked example (23 x 4: split, each part, add back); drops the second (36 x 5)'),
 /* improve20-r21a-nov4 #7: only step 1's Try-it card text changed ("1 to 49" -> "1 to 100, guess 50: lower"); reviewed: the path is unchanged */ /* improve20-r20k-nov4 #7: step 5 reworked (the count method, worked example, Try-it id kept); reviewed: the path still holds it and drops only the recap */'cs-e-guess-number':P([0,1,2,3,4,5],'xhgdbp','drops the closing recap (6)'),
 'science-e-rocks-and-soil':P([0,1,3,4,5,7],'1awu965','drops grains and measuring (2) and the soil-forming timeline (6); weathering (5) stays for the erosion Try-it (7)'),
 'history-e-how-things-changed':P([0,1,2,3,5,6],'aas7w2','drops "first is older" (4; no pool question asks which is older); keeps step 6, which defines "straight before/after" that the pool asks')});
/* First topics longer than 6 steps that play whole, and why (a cut would break the teaching) */
export const FIRST_FULL=Object.freeze({
 'cs-e-sorting-swaps':'one continuous worked trace of one list (7,3,5,1 to 1,3,5,7): every step is a move in it, and the stopping rule is the last step',
 'geography-e-countries-continents':'a tour of the continents: the pool asks which continent holds each of the countries the steps show, one region a step',
 'science-e-life-cycles':'a tour of life cycles: the pool asks the stages of each animal and plant the steps show, one model a step'});
const ok=new WeakMap();
const fresh=(t,c)=>{if(!ok.has(t))ok.set(t,hash(JSON.stringify(t.steps))===c.digest&&c.steps.every(i=>i<t.steps.length));return ok.get(t);};
/* the core path (step indices) this save plays for topic t now, or null for the full lesson */
export function coreFor(save,t){const c=FIRST_CORE[t?.id];if(!c||!Array.isArray(t.steps)||!save)return null;if(!firstTopic(save,t)||mastered(save,t))return null;return fresh(t,c)?c.steps:null;}
