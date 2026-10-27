/* A lesson's place in the game's progression. Grade 1 material that opens the Grade 2 rung reads as a
   "Grade 2 warm-up" (Oct 19: "Grade 1 review · Grade 2 path" confused kids). */
import {rungOf} from '../academics/lessons.js';
export function lessonGradeLabel(topic){const rung=rungOf(topic);return rung===topic.grade?`Grade ${topic.grade}`:`Grade ${rung} warm-up`;}
