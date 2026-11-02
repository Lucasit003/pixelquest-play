/* improve20-r8c-nov1 #1 (audit7 d12): a High School learner can say their grade (title row 9-12 or Not sure), and the grade picks which
   course comes first. Every High School topic stays on the Grade 9 rung (lessons.js; COURSES.md "Points": one rung, unit points shared by
   the subject), so nothing about opening, points or mastery changes: only the ORDER in which courses are suggested.

   grades: the grades PixelQuest suggests a course for. These are the game's own choice, made from each course's name (English 9 and 10)
   or its place in a sequence (the integrated Math 1-2-3 pathway, COURSES.md, owner 10 Oct) and from the College Board's "Recommended
   Prerequisites" on its AP Students course page (read 1 Nov 2026, quoted in `basis`). They are not a claim about when most students take a
   course; a College Board "None" means any grade can start it.
   FIRST: the course a learner of each grade starts in, per subject. Grade 9-10 starts the foundational course where the catalog has one
   (Math 1/Math 2, Intro to Programming, English 9/10, World Geography, Personal Finance; history has no non-AP course, so AP World History,
   whose recommended prerequisites are None); Grade 11-12 starts the subject's AP course. "Not sure" (0) is treated as Grade 9. A save
   that never picked a High School grade (null) keeps the catalog order it always had. Pure data and pure functions. */
import {TOPICS,rungOf} from './lessons.js';
import {courseOf,COURSES,HIGH_COURSE_LEVEL} from './courses.js';

const AP='https://apstudents.collegeboard.org/courses/';
export const COURSE_GRADES=Object.freeze({
 'ap-world':{grades:[9,10],source:AP+'ap-world-history-modern',basis:'Recommended Prerequisites: "None". The only world history course in the catalog, so it is the 9-10 start.'},
 'apush':{grades:[11],source:AP+'ap-united-states-history',basis:'Recommended Prerequisites: "None". Placed after AP World History in the game\'s suggested order.'},
 'ap-euro':{grades:[10,11],source:AP+'ap-european-history',basis:'Recommended Prerequisites: "None".'},
 'ap-gov':{grades:[12],source:AP+'ap-united-states-government-and-politics',basis:'Recommended Prerequisites: "None". Placed last in the game\'s suggested history order.'},
 'ap-hug':{grades:[11,12],source:AP+'ap-human-geography',basis:'Recommended Prerequisites: "None".'},
 'world-geography':{grades:[9,10],source:'docs/design/COURSES.md (National Geography Standards, 2nd ed., 2012)',basis:'Standards-based, non-AP course in the catalog.'},
 'math-1':{grades:[9],source:'docs/design/COURSES.md (Common Core integrated pathway, owner 10 Oct)',basis:'First course of the integrated Math 1-2-3 sequence.'},
 'math-2':{grades:[10],source:'docs/design/COURSES.md (Common Core integrated pathway)',basis:'Second course of the integrated sequence, after Math 1.'},
 'math-3':{grades:[11],source:'docs/design/COURSES.md (Common Core integrated pathway)',basis:'Third course of the integrated sequence, after Math 2.'},
 'ap-precalc':{grades:[11,12],source:AP+'ap-precalculus',basis:'Recommended Prerequisites: "You should have successfully completed introductory algebra and geometry courses." (Math 1 and 2 cover both.)'},
 'ap-calc-ab':{grades:[12],source:AP+'ap-calculus-ab',basis:'Recommended Prerequisites: "You should have successfully completed courses in which you studied algebra, geometry, trigonometry, analytic geometry" and elementary functions.'},
 'ap-calc-bc':{grades:[12],source:AP+'ap-calculus-bc',basis:'Same recommended prerequisites as AP Calculus AB; its first units are AB\'s.'},
 'ap-stats':{grades:[11,12],source:AP+'ap-statistics',basis:'Recommended Prerequisites: "A first-year algebra course".'},
 'ap-bio':{grades:[12],source:AP+'ap-biology',basis:'Recommended Prerequisites: "High school courses in biology and chemistry".'},
 'ap-chem':{grades:[11,12],source:AP+'ap-chemistry',basis:'Recommended Prerequisites: "High school courses in chemistry and Algebra II."'},
 'ap-physics-1':{grades:[10,11],source:AP+'ap-physics-1-algebra-based',basis:'Recommended Prerequisites: "You should have completed a geometry course and be concurrently taking Algebra II or an equivalent course."'},
 'ap-enviro':{grades:[11,12],source:AP+'ap-environmental-science',basis:'Recommended Prerequisites: "Two years of high school laboratory science, including life science and physical science, along with at least one year of algebra".'},
 'ap-psych':{grades:[9,10,11,12],source:AP+'ap-psychology',basis:'Recommended Prerequisites: "None".'},
 'ap-csp':{grades:[10,11,12],source:AP+'ap-computer-science-principles',basis:'Recommended Prerequisites: "High school algebra course".'},
 'ap-csa':{grades:[11,12],source:AP+'ap-computer-science-a',basis:'Recommended Prerequisites: "High school courses in English and algebra" and "familiarity with functions and the concepts found in the uses of function notation".'},
 'programming-python':{grades:[9,10],source:'docs/design/COURSES.md (CSTA K-12 standards, levels 3A/3B)',basis:'Standards-based introductory programming course in the catalog.'},
 'cybersecurity':{grades:[10,11,12],source:'docs/design/COURSES.md (CSTA K-12 standards, levels 3A/3B)',basis:'Standards-based course in the catalog.'},
 'english-9':{grades:[9],source:'docs/design/COURSES.md',basis:'Named for Grade 9.'},
 'english-10':{grades:[10],source:'docs/design/COURSES.md',basis:'Named for Grade 10.'},
 'ap-lang':{grades:[11],source:AP+'ap-english-language-and-composition',basis:'Recommended Prerequisites: "None". Placed after English 10 in the game\'s suggested order.'},
 'ap-lit':{grades:[12],source:AP+'ap-english-literature-and-composition',basis:'Recommended Prerequisites: "None". Placed after AP Language in the game\'s suggested order.'},
 'personal-finance':{grades:[9,10],source:'docs/design/COURSES.md',basis:'Non-AP course in the catalog.'},
 'ap-macro':{grades:[11,12],source:AP+'ap-macroeconomics',basis:'Recommended Prerequisites: "None".'},
 'ap-micro':{grades:[11,12],source:AP+'ap-microeconomics',basis:'Recommended Prerequisites: "None".'}});
/* the course each grade starts in, per subject (the three starter subjects of the seven classes are cs, math and history) */
export const FIRST=Object.freeze({
 math:{9:'math-1',10:'math-2',11:'ap-precalc',12:'ap-calc-ab'},
 cs:{9:'programming-python',10:'programming-python',11:'ap-csp',12:'ap-csp'},
 history:{9:'ap-world',10:'ap-world',11:'apush',12:'ap-gov'},
 geography:{9:'world-geography',10:'world-geography',11:'ap-hug',12:'ap-hug'},
 science:{9:'ap-physics-1',10:'ap-physics-1',11:'ap-chem',12:'ap-bio'},
 language:{9:'english-9',10:'english-10',11:'ap-lang',12:'ap-lit'},
 finance:{9:'personal-finance',10:'personal-finance',11:'ap-macro',12:'ap-macro'}});
export const HIGH_GRADES=Object.freeze([9,10,11,12]);
/* the High School grade a save stated: 9-12, "Not sure" (0) counts as 9; null when the save is not in High School or never said */
export function hsGrade(save){if(save?.schoolMode!=='high')return null;const g=save?.schoolGrade;return g===0?9:HIGH_GRADES.includes(g)?g:null;}
export const firstCourse=(subject,g)=>FIRST[subject]?.[g]||null;
/* every High School course of a subject in suggested order for grade g: the FIRST course, then courses suggested for g, then by distance
   from g, then catalog order. null grade: catalog order. */
export function courseOrder(subject,g){
 const cs=COURSES.filter(c=>c.subject===subject&&c.level===HIGH_COURSE_LEVEL).map((c,i)=>({c,i}));if(g==null)return cs.map(x=>x.c.id);
 const f=firstCourse(subject,g),dist=id=>{const gs=COURSE_GRADES[id]?.grades||[9];return gs.includes(g)?0:Math.min(...gs.map(x=>Math.abs(x-g)));};
 return cs.sort((a,b)=>(b.c.id===f)-(a.c.id===f)||dist(a.c.id)-dist(b.c.id)||a.i-b.i).map(x=>x.c.id);}
/* High School topics (Grade 9 rung) of a list, stably re-sorted by their home course's place in courseOrder; other topics keep their place
   and come first in the same relative order. Unchanged when the save has no High School grade. */
export function orderHigh(save,ts){const g=hsGrade(save);if(g==null)return ts;
 const rank=new Map(),of=t=>{const c=courseOf(t.id)?.course;if(!c)return 999;const k=c.subject+'|'+c.id;if(!rank.has(k))rank.set(k,courseOrder(c.subject,g).indexOf(c.id));return rank.get(k);};
 const low=ts.filter(t=>rungOf(t)<9),high=ts.filter(t=>rungOf(t)>=9).map((t,i)=>({t,i,r:of(t)}));
 return [...low,...high.sort((a,b)=>a.r-b.r||a.i-b.i).map(x=>x.t)];}
/* the first topic of the grade's first course in a subject (built units only), or null */
export function firstHighTopic(save,subject){const g=hsGrade(save);if(g==null)return null;return orderHigh(save,TOPICS.filter(t=>t.subject===subject&&rungOf(t)===9))[0]||null;}
