/* High School and College by course (owner, 9 Oct 2026; docs/design/COURSES.md). A course belongs to one of the seven
   subjects and is a list of units; a unit is a topic (lesson, quiz, practice, test), so mastering a unit is mastering a
   topic and every gate, count and weighted-mastery sum keeps working. Unit lists follow each course's public outline
   (2024-25); check each against the current Course and Exam Description before its content is written. All lesson and
   question content is our own. Topic ids follow the lesson convention: <subject>-h-<slug> for High, -c- for College.
   A unit whose topic is not in academics/lessons.js yet is planned, not built (builtUnits). */
/* The exam each AP course prepares for, from its public Course and Exam Description (the five first courses checked
   10 Oct 2026; Calculus AB and Statistics updated 12 Oct for May 2027): sections as [name, what is asked, minutes, percent of the score], mcq as [questions, minutes] for the
   multiple-choice section, and each unit's share of the exam as [low, high] percent, in unit order. The Library shows
   these so students can plan and time themselves; PixelQuest itself never times anyone (CLAUDE.md). */
export const EXAMS=Object.freeze({
 'ap-stats':{"edition":"2026–27 · May 2027 exam","source":"https://apcentral.collegeboard.org/courses/ap-statistics/exam","frameworkSource":"https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf","sections":[["Section I","42 multiple-choice questions with four choices each, including two three-question sets",90,50],["Section II","4 free-response questions: study design; analysis and interpretation; inference; multiple content areas",90,50]],"mcq":[42,90],"note":"The May 2027 exam is fully digital. Its five exam units draw on the learning units below. Enrichment remains available for study but is excluded from current-exam practice. PixelQuest practice uses shorter mixed questions and is not a full-length exam simulation.","learningNotes":["Exam units 1 and 2","Exam units 2 and 5; transformations are enrichment","Exam unit 1","Exam unit 2; combining random variables and geometric distributions are enrichment","Exam units 2, 3 and 4","Exam unit 3","Exam unit 4","Exam unit 3; goodness of fit is enrichment","Enrichment: slope inference is outside the current exam"],"framework":[{"name":"Exploring One-Variable Data and Collecting Data","weight":[20,30],"members":[[0,"investigate variables categorical catgraphs quantgraphs shape center iqr outliers sd box compare"],[2,null]]},{"name":"Probability, Random Variables, and Probability Distributions","weight":[15,25],"members":[[0,"normal"],[1,"categorical frequencies"],[3,"patterns simulation probability exclusive conditional rules variables moments binomial parameters"],[4,"sampling normal clt"]]},{"name":"Inference for Categorical Data: Proportions","weight":[15,25],"members":[[4,"estimates proportions diffProportions"],[5,null],[7,"unexpected expected tableSetup tableTest"]],"questionIds":["math-5-16ay8rr","math-5-1v45dsd","math-5-1qfs6vx","math-5-1jw78l8","math-5-s4les6"]},{"name":"Inference for Quantitative Data: Means","weight":[10,20],"members":[[4,"means diffMeans"],[6,null]]},{"name":"Regression Analysis","weight":[10,20],"members":[[1,"related scatter correlation models residuals leastSquares"]]}]},
 'ap-world':{sections:[['Section I, Part A','55 multiple-choice questions',55,40],['Section I, Part B','3 short-answer questions',40,20],['Section II, Part A','1 document-based question (with a 15-minute reading period)',60,25],['Section II, Part B','1 long essay question',40,15]],mcq:[55,55],
  weights:[[8,10],[8,10],[12,15],[12,15],[12,15],[12,15],[8,10],[8,10],[8,10]]},
 'ap-hug':{sections:[['Section I','60 multiple-choice questions',60,50],['Section II','3 free-response questions',75,50]],mcq:[60,60],weights:[[8,10],[12,17],[12,17],[12,17],[12,17],[12,17],[12,17]]},
 'ap-calc-ab':{sections:[['Section I','42 multiple-choice questions: 29 without a calculator (62 minutes), then 13 with one (38 minutes)',100,50],['Section II','6 free-response questions: 2 with a calculator (30 minutes), then 4 without (60 minutes)',90,50]],mcq:[42,100],
  weights:[[10,12],[10,12],[9,13],[10,15],[15,18],[17,20],[6,12],[10,15]]},
 'ap-bio':{sections:[['Section I','60 multiple-choice questions',90,50],['Section II','6 free-response questions: 2 long and 4 short',90,50]],mcq:[60,90],weights:[[8,11],[10,13],[12,16],[10,15],[8,11],[12,16],[13,20],[10,15]]},
 'ap-macro':{sections:[['Section I','60 multiple-choice questions',70,66],['Section II','3 free-response questions: 1 long and 2 short (with a 10-minute reading period)',60,33]],mcq:[60,70],weights:[[5,10],[12,17],[17,27],[18,23],[20,30],[10,13]]}});
export const AP_NOTE='AP® is a trademark registered by the College Board, which is not affiliated with PixelQuest.';
const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
/* [id, subject, name, exam (an AP course), units: [name, topic id?], includes?]; a unit without an id gets
   <subject>-<tag>-<course>-<slug>; `includes` puts another course's units (the same topics) first, as BC contains AB */
const HIGH=[
 ['ap-world','history','AP World History: Modern',true,['The Global Tapestry (1200-1450)','Networks of Exchange','Land-Based Empires (1450-1750)','Transoceanic Interconnections','Revolutions (1750-1900)','Consequences of Industrialization','Global Conflict (1900-present)','Cold War and Decolonization','Globalization']],
 ['apush','history','AP United States History',true,['Period 1: 1491-1607','Period 2: 1607-1754','Period 3: 1754-1800','Period 4: 1800-1848','Period 5: 1844-1877','Period 6: 1865-1898','Period 7: 1890-1945','Period 8: 1945-1980','Period 9: 1980-present']],
 ['ap-euro','history','AP European History',true,['Renaissance and Exploration','Age of Reformation','Absolutism and Constitutionalism','Scientific, Philosophical and Political Developments','Conflict, Crisis and Reaction in the Late 18th Century','Industrialization and Its Effects','19th-Century Perspectives and Political Developments','20th-Century Global Conflicts','Cold War and Contemporary Europe']],
 ['ap-gov','history','AP US Government and Politics',true,['Foundations of American Democracy','Interactions Among Branches','Civil Liberties and Civil Rights','American Political Ideologies and Beliefs','Political Participation']],
 ['ap-hug','geography','AP Human Geography',true,['Thinking Geographically','Population and Migration','Cultural Patterns and Processes','Political Patterns and Processes','Agriculture and Rural Land Use','Cities and Urban Land Use','Industrial and Economic Development']],
 /* geography had only AP Human Geography (owner, 10 Oct): World Geography on the National Geography Standards (2nd ed., 2012),
    physical geography and world regions, so it complements AP HuG rather than repeating it */
 ['world-geography','geography','World Geography',false,['Maps and Geospatial Tools','Physical Systems of Earth','Climate and Weather','The Americas','Europe and Africa','Asia and Oceania','Resources and the Environment']],
 /* math follows the integrated sequence Math 1, 2 and 3 (owner, 10 Oct: "actual courses in hs math 1 2, 3 pre calc"), with
    units from the Common Core integrated pathway; the four older math topics are units of Math 1 and Math 2 */
 ['math-1','math','Math 1',false,['Expressions, Equations and Units',['Linear Functions','math-h-linear-functions'],['Systems of Equations','math-h-systems'],'Linear Inequalities',['Exponent Rules','math-h-exponent-rules'],'Exponential Functions','Descriptive Statistics','Congruence and Constructions','Coordinate Geometry']],
 ['math-2','math','Math 2',false,['Radicals and Complex Numbers',['Quadratic Functions','math-h-quadratics'],'Quadratic Equations','Polynomials and Factoring','Probability','Similarity and Proof','Right Triangle Trigonometry','Circles']],
 ['math-3','math','Math 3',false,['Statistical Inference','Polynomial Functions','Rational Functions','Radical Functions','Exponential and Logarithmic Functions','Trigonometric Functions','Modeling with Functions','Geometric Modeling and Volume']],
 ['ap-precalc','math','AP Precalculus',true,['Polynomial and Rational Functions','Exponential and Logarithmic Functions','Trigonometric and Polar Functions','Functions with Parameters, Vectors and Matrices']],
 ['ap-calc-ab','math','AP Calculus AB',true,['Limits and Continuity','Differentiation: Definition and Properties','Composite, Implicit and Inverse Functions','Contextual Applications of Differentiation','Analytical Applications of Differentiation','Integration and Accumulation of Change','Differential Equations','Applications of Integration']],
 ['ap-calc-bc','math','AP Calculus BC',true,[['Parametric, Polar and Vector-Valued Functions','math-h-ap-calc-bc-parametric-polar-and-vector-functions'],['Infinite Sequences and Series','math-h-ap-calc-bc-infinite-sequences-and-series']],'ap-calc-ab'],
 ['ap-stats','math','AP Statistics',true,[['One-Variable Data','math-h-spread'],'Two-Variable Data','Collecting Data','Probability and Random Variables','Sampling Distributions','Inference for Proportions','Inference for Means','Chi-Square','Inference for Slopes']],
 ['ap-bio','science','AP Biology',true,['Chemistry of Life','Cell Structure and Function','Cellular Energetics','Cell Communication and Cell Cycle','Heredity','Gene Expression and Regulation','Natural Selection','Ecology']],
 ['ap-chem','science','AP Chemistry',true,[['Atomic Structure and Properties','science-h-moles'],'Compound Structure and Properties','Intermolecular Forces and Properties','Chemical Reactions','Kinetics','Thermochemistry','Equilibrium','Acids and Bases','Thermodynamics and Electrochemistry']],
 ['ap-physics-1','science','AP Physics 1',true,[['Kinematics','science-h-acceleration'],['Force and Translational Dynamics','science-h-force-momentum'],['Work, Energy and Power','science-h-work-energy-power'],'Linear Momentum','Torque and Rotational Dynamics','Energy and Momentum of Rotating Systems','Oscillations','Fluids']],
 ['ap-enviro','science','AP Environmental Science',true,['Ecosystems','Biodiversity','Populations','Earth Systems and Resources','Land and Water Use','Energy Resources','Atmospheric Pollution','Aquatic and Terrestrial Pollution','Global Change']],
 ['ap-psych','science','AP Psychology',true,['Biological Bases of Behavior','Cognition','Development and Learning','Social Psychology and Personality','Mental and Physical Health']],
 ['ap-csp','cs','AP Computer Science Principles',true,['Creative Development','Data','Algorithms and Programming','Computer Systems and Networks','Impact of Computing']],
 ['ap-csa','cs','AP Computer Science A',true,['Using Objects and Methods','Selection and Iteration','Class Creation','Data Collections']],
 /* CS had only the two AP courses (owner, 10 Oct: "if theres not enough courses for something like comp sci just bring it
    similar topics"): two standards-based courses on the CSTA K-12 standards (levels 3A/3B), no overlap with CSP or CSA units */
 ['programming-python','cs','Intro to Programming (Python)',false,['Variables and Data Types','Conditionals and Logic','Loops','Functions','Lists and Dictionaries','Debugging and Testing']],
 ['cybersecurity','cs','Cybersecurity and Networks',false,['How the Internet Works','Encryption and Hashing','Threats and Attacks','Defending Systems','Privacy and Digital Citizenship']],
 ['english-9','language','English 9',false,['Reading Literature','Reading Informational Texts','Argument Writing','Grammar and Usage','Vocabulary in Context']],
 ['english-10','language','English 10',false,['Literary Analysis','Rhetoric in Nonfiction','Research and Citation','Grammar and Style','Word Study']],
 ['ap-lang','language','AP English Language and Composition',true,['Rhetorical Situation','Claims and Evidence','Reasoning and Organization','Style']],
 ['ap-lit','language','AP English Literature and Composition',true,['Short Fiction','Poetry','Longer Fiction and Drama']],
 ['personal-finance','finance','Personal Finance',false,[['Budgeting','finance-h-budget'],['Credit','finance-h-credit'],['Saving and Compound Interest','finance-h-compound-interest'],['Income Tax','finance-h-income-tax'],['Loans','finance-h-loans'],'Banking','Insurance']],
 ['ap-macro','finance','AP Macroeconomics',true,['Basic Economic Concepts','Economic Indicators and the Business Cycle','National Income and Price Determination','Financial Sector','Long-Run Consequences of Stabilization Policies','Open Economy']],
 ['ap-micro','finance','AP Microeconomics',true,['Basic Economic Concepts','Supply and Demand','Production, Cost and Perfect Competition','Imperfect Competition','Factor Markets','Market Failure and the Role of Government']],
];
/* College courses are listed now; their units are outlined when their content is planned. */
const COLLEGE=[
 ['western-civ-1','history','Western Civilization I'],['western-civ-2','history','Western Civilization II'],['us-history-1','history','US History I'],['us-history-2','history','US History II'],['world-history-1500','history','World History since 1500'],
 ['world-regional','geography','World Regional Geography'],['physical-geo','geography','Introduction to Physical Geography'],
 ['calc-1','math','Calculus I'],['calc-2','math','Calculus II'],['calc-3','math','Calculus III'],['linear-algebra','math','Linear Algebra'],['discrete-math','math','Discrete Mathematics'],['intro-stats','math','Introductory Statistics'],
 ['gen-chem-1','science','General Chemistry I'],['gen-chem-2','science','General Chemistry II'],['gen-bio-1','science','General Biology I'],['gen-bio-2','science','General Biology II'],['uni-physics-1','science','University Physics I'],['uni-physics-2','science','University Physics II'],['intro-psych','science','Introduction to Psychology'],
 ['intro-programming','cs','Introduction to Programming'],['data-structures','cs','Data Structures'],['algorithms','cs','Algorithms'],['computer-org','cs','Computer Organization'],
 ['composition-1','language','College Composition I'],['composition-2','language','College Composition II'],['intro-lit','language','Introduction to Literature'],
 ['principles-macro','finance','Principles of Macroeconomics'],['principles-micro','finance','Principles of Microeconomics'],['financial-accounting','finance','Financial Accounting'],['corporate-finance','finance','Personal and Corporate Finance'],
];
const built=new Map();
const build=(level,tag)=>([id,subject,name,exam=false,units=[],includes])=>{const own=units.map(u=>{const [n,topic]=Array.isArray(u)?u:[u];return Object.freeze({name:n,topic:topic||`${subject}-${tag}-${id}-${slug(n)}`});});
 const c=Object.freeze({id,subject,name,level,exam,...(includes?{includes}:{}),units:Object.freeze([...(includes?built.get(includes).units:[]),...own])});built.set(id,c);return c;};
export const HIGH_COURSE_LEVEL=5,COLLEGE_COURSE_LEVEL=6;
export const COURSES=Object.freeze([...HIGH.map(build(HIGH_COURSE_LEVEL,'h')),...COLLEGE.map(build(COLLEGE_COURSE_LEVEL,'c'))]);
export const course=id=>COURSES.find(c=>c.id===id)||null;
export const coursesFor=(subject,level)=>COURSES.filter(c=>c.subject===subject&&(level==null||c.level===level));
/* the course and unit a topic belongs to (its home course: the first that lists it, so AB before BC), or null */
export function courseOf(topicId){for(const c of COURSES){const i=c.units.findIndex(u=>u.topic===topicId);if(i>=0)return {course:c,unit:c.units[i],index:i};}return null;}
/* every course that teaches a topic (AB's units are also BC's) */
export const coursesOf=topicId=>COURSES.filter(c=>c.units.some(u=>u.topic===topicId));
/* the units whose topic exists (topicIds: a Set of the ids academics/lessons.js registers) */
export const builtUnits=(c,topicIds)=>c.units.filter(u=>topicIds.has(u.topic));
/* a subject's distinct High School units, planned ones included: each is worth 100 / this (docs/design/COURSES.md, Points) */
export const highUnitCount=subject=>new Set(coursesFor(subject,HIGH_COURSE_LEVEL).flatMap(c=>c.units.map(u=>u.topic))).size;

/* Course practice follows current exam groups when a course’s learning sequence differs from the official units.
   Explicit question lists keep mixed legacy skills out unless individually mapped. Callers supply mastered topics. */
export function examPracticeGroups(courseId,topics,pools,items){
 const c=course(courseId),ex=EXAMS[courseId];if(!c)return [];const available=new Set(topics.map(t=>t.id));
 if(!ex?.framework)return topics.map(t=>{const i=c.units.findIndex(u=>u.topic===t.id),w=ex?.weights?.[i];return {topic:t,weight:w?(w[0]+w[1])/2:1};});
 return ex.framework.map(g=>{const ids=g.members.flatMap(([i,skills])=>{const id=c.units[i].topic;return available.has(id)?(pools[id]||[]).filter(q=>!skills||skills.split(' ').includes(items[q].skill)):[];});for(const id of g.questionIds||[])if(items[id]&&available.has(items[id].topic))ids.push(id);return {weight:(g.weight[0]+g.weight[1])/2,questionIds:[...new Set(ids)]};}).filter(g=>g.questionIds.length);
}
