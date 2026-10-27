/* Intro to Programming (Python) Unit 3, Loops. A standards-based course (CSTA K-12 Computer Science Standards, 2017, levels 3A/3B), not an AP
   course. Python 3 only: while loops and loop conditions, infinite loops and how to stop them (the condition never turns False, Ctrl+C,
   break), for loops over range(stop), range(start, stop) and range(start, stop, step) with the stop left out and a negative step counting
   down, for over a string, accumulators and counters, sentinel loops with input(), break and continue, nested loops and counting their
   passes, tracing tables and off-by-one errors. Original wording. Worked examples (tick, day and coins, fuel, the range(5)/range(1)/range(0)
   table, range(3, 8), range(2, 14, 3), the countdown table, kiwi, education, hits, the reading sentinel loop typed 4 6 0, step * 3 > 14,
   lap == 3, the 3 by 4 grid, the 1-to-6 off-by-one table) and the six Try-its are reserved and never appear in the pool. Code in a question is
   one program: lines are separated by a bar, and four spaces after a bar are one level of indentation. Several printed lines are written
   joined by then; print(x, end=" ") keeps the output on one line. */
const board=(title,lines,why)=>({t:'board',title,lines,...(why?{why}:{})});
const prog=(title,lines)=>({t:'program',title,lines:lines.map((l,i)=>`${i+1}. ${l}`)});
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const scene=p=>{const lines=[];let line='';for(const word of p.split(/ [ABC]: /)[0].split(' ')){if((line+' '+word).length>49){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the question',lines.slice(0,7));};
const L=(...ls)=>ls.join(' | ');
const TRY=[
 'Code: x = 20 | while x > 5: |     x = x - 6 | print(x) What is printed?',
 'Code: p = 2 | while p < 50: |     print(p) What happens when the code runs?',
 'Code: for i in range(2, 30, 5): |     print(i) How many lines are printed?',
 'Code: tot = 0 | for ch in "pizzazz": |     if ch == "z": |         tot = tot + 1 | print(tot) What is printed?',
 'Code: s = 0 | for n in range(1, 8): |     if n % 3 == 0: |         continue |     s = s + n | print(s) What is printed?',
 'Code: for a in range(4): |     for b in range(a): |         print("x") How many lines are printed?'];
const codeLines=code=>code.split(' | ');
const check=(i,answer,options,hint,pic)=>({prompt:`Try it: ${TRY[i]}`,answer,options,hint,pic});
export default {
id:'cs-h-programming-python-loops',subject:'cs',level:5,grade:9,standard:'CSTA K-12 Computer Science Standards (2017), levels 3A and 3B: Algorithms and Programming: control structures (iteration), variables, program development and testing concepts',title:'Loops',
skills:{while:'while loops and loop conditions',inf:'Infinite loops and how to stop them',range:'for loops and range()',acc:'Accumulators, counters and for over strings',sentinel:'Sentinel loops with input()',bc:'break and continue',nest:'Nested loops',trace:'Tracing tables and off-by-one errors'},
outline:[['CSTA Algorithms and Programming: control structures (iteration)','Repeat code with a while loop and write a condition that ends it',['while']],['CSTA Algorithms and Programming: control structures (infinite loops)','Recognise a loop that never ends, stop it and repair it',['inf']],['CSTA Algorithms and Programming: control structures (counted iteration)','Repeat a set number of times with for and range(start, stop, step)',['range']],['CSTA Algorithms and Programming: variables (accumulators and counters)','Build totals and counts in a variable and loop over the characters of a string',['acc']],['CSTA Algorithms and Programming: control structures (input loops)','Read input until a sentinel value ends the loop',['sentinel']],['CSTA Algorithms and Programming: control structures (loop control)','Leave a loop with break and skip a pass with continue',['bc']],['CSTA Algorithms and Programming: control structures (nested iteration)','Put one loop inside another and count the passes',['nest']],['CSTA Algorithms and Programming: algorithms (tracing and testing loops)','Trace a loop with a table and find off-by-one errors',['trace']]],
steps:[
 {skill:'while',say:'A while loop repeats a block of code for as long as its condition is True. Python tests the condition before every pass, including the first, and runs the indented body only when the test passes. When a test fails, the loop ends and the program carries on with the first unindented line after it. With tick = 1 below, the loop prints 1, 2 and 3 and then Done, because tick is 4 on the fourth test and 4 <= 3 is False.',eq:'while condition: body',pic:prog('A while loop (fictional counter)',['tick = 1','while tick <= 3:','    print(tick)','    tick = tick + 1','print("Done")'])},
 {skill:'while',say:'Every while loop goes round the same circle: test the condition, run the body, change something the condition depends on, then test again. The loop leaves the circle only when a test comes out False, and a condition that is False the very first time means the body runs zero times. The change inside the body is what makes progress toward that False; without it the circle never ends.',eq:'test → body → update → test again',pic:{t:'cycle',stages:['test the condition','run the body','update the variable']}},
 {skill:'trace',say:'To see what a loop really does, trace it with a table: one row for each time the condition is tested, with the value of every variable. Below, day starts at 1 and coins at 0. The test day <= 4 passes four times and coins grows 1, 3, 6, 10. On the fifth test day is 5, the test fails, and the loop ends with coins equal to 10. The numbers are fictional.',eq:'one row per test',pic:{t:'setups',title:'Trace: coins = 0, day = 1, while day <= 4 (fictional)',head:'Test',cols:['day when tested','coins after the body'],rows:[['1st','1','1'],['2nd','2','3'],['3rd','3','6'],['4th','4','10'],['5th','5 (fails)','10']]},check:check(0,2,[2,8,14],'Write down x after each pass: 20, 14, 8, 2. Stop when the test x > 5 fails.',prog('Try-it code',['x = 20','while x > 5:','    x = x - 6','print(x)']))},
 {skill:'inf',say:'An infinite loop is a loop that never ends because its condition never becomes False. The classic cause is forgetting to update the variable that the condition tests. In the program below fuel stays at 3, so fuel > 0 is True on every test, "go" is printed again and again, and the last line is never reached. Adding fuel = fuel - 1 inside the body lets the test fail after three passes.',eq:'no update → the test never fails',pic:prog('A loop that forgets to update (fictional)',['fuel = 3','while fuel > 0:','    print("go")','print("landed")'])},
 {skill:'inf',say:'If a program seems frozen inside a loop, you can usually stop it from the keyboard: in most terminals and in IDLE, pressing Ctrl+C interrupts it and Python reports a KeyboardInterrupt. Then repair the cause. Check that something in the body changes the variable in the condition, that the change moves toward making the condition False, and that the update is indented inside the loop. A deliberate while True: loop is ended from inside by break.',eq:'Ctrl+C stops it; the fix is inside the loop',pic:board('Stopping and repairing an infinite loop',['Stop it now: Ctrl+C','Is the variable changed in the body?','Does the change head toward False?','Is the update indented in the loop?','A planned while True: needs break'],['KeyboardInterrupt appears','fuel never changed','n + 1 never ends n > 0','not left at the margin','the exit comes from inside']),check:check(1,'it never stops (infinite loop)',['it never stops (infinite loop)','prints 2','prints nothing'],'Does anything in the body change p? If not, p < 50 stays True.',prog('Try-it code',['p = 2','while p < 50:','    print(p)']))},
 {skill:'range',say:'A for loop repeats its body once for each value in a sequence, and range() makes a sequence of whole numbers. With one number, range(stop) gives the whole numbers from 0 up to but not including stop, so range(5) gives 0, 1, 2, 3, 4: five values, and the body runs five times. The loop variable takes the next value at the start of every pass, so you never update it yourself. The stop is exclusive, which is why 5 is never reached.',eq:'range(stop): 0 up to stop - 1',pic:{t:'setups',title:'What range(stop) produces',head:'Call',cols:['Values','How many'],rows:[['range(5)','0 1 2 3 4','5'],['range(1)','0','1'],['range(0)','none','0']]}},
 {skill:'range',say:'With two numbers, range(start, stop) begins at start and stops before stop, so range(3, 8) gives 3, 4, 5, 6, 7. The stop is left out, so the number of values is stop minus start: 8 - 3 = 5. The picture marks each value that is used with a filled dot on the number line and the excluded stop with an open circle.',eq:'range(start, stop): stop is left out',pic:{t:'figure',title:'range(3, 8) on a number line',grid:{x:[2,9],y:[-1,1]},pts:{A:[3,0],B:[4,0],C:[5,0],D:[6,0],E:[7,0],S:[8,0]},hide:'ABCDES',dots:'ABCDE',circles:[{c:'S',r:0.12,col:'#c8372d'}],notes:[{at:[5,0.55],text:'used: 3 4 5 6 7'},{at:[8,-0.5],text:'stop 8: left out',col:'#c8372d'}]}},
 {skill:'range',say:'A third number is the step: range(start, stop, step) moves by step each time instead of by 1. For range(2, 14, 3) the values are 2, 5, 8 and 11. The next value would be 14, which equals the stop, so it is left out, and the loop ends. In general the sequence stops as soon as the next value would reach or pass stop.',eq:'range(start, stop, step)',pic:{t:'figure',title:'range(2, 14, 3): steps of 3, stop 14 left out',grid:{x:[1,15],y:[-1,1]},pts:{A:[2,0],B:[5,0],C:[8,0],D:[11,0],S:[14,0]},hide:'ABCDS',dots:'ABCD',circles:[{c:'S',r:0.22,col:'#c8372d'}],notes:[{at:[3.5,0.5],text:'+3'},{at:[6.5,0.5],text:'+3'},{at:[9.5,0.5],text:'+3'},{at:[12.5,-0.5],text:'next is the stop',col:'#c8372d'}]}},
 {skill:'range',say:'A negative step counts down. The start must then be larger than the stop, and the stop is still left out: range(10, 0, -3) gives 10, 7, 4, 1, and range(5, 0, -1) gives 5, 4, 3, 2, 1 and never reaches 0. If the step points the wrong way, as in range(5, 2) where the step is the default 1, the sequence is empty and the body runs zero times. A step of 0 is an error.',eq:'negative step: start above stop',pic:{t:'setups',title:'Counting down, and empty ranges',head:'Call',cols:['Values'],rows:[['range(10, 0, -3)','10 7 4 1'],['range(5, 0, -1)','5 4 3 2 1'],['range(3, 3)','none'],['range(5, 2)','none']]},check:check(2,6,[6,5,7],'List the values 2, 7, 12 and so on, and stop before the next would reach 30.',prog('Try-it code',['for i in range(2, 30, 5):','    print(i)']))},
 {skill:'acc',say:'A for loop can also go through a string, one character at a time. In for ch in word:, ch holds the first character on the first pass, the second character on the next, and so on until the characters run out, so the body runs once for every character, spaces included. No range() or index is needed. After the loop, ch still holds the last character.',eq:'for ch in text: one character per pass',pic:{t:'setups',title:'for ch in "kiwi": print(ch)',head:'Pass',cols:['ch','printed'],rows:[['1st','k','k'],['2nd','i','i'],['3rd','w','w'],['4th','i','i']]}},
 {skill:'acc',say:'An accumulator is a variable that builds up a result as the loop runs. It must be set before the loop, usually to 0 for a sum or a counter and to 1 for a product, and updated inside the body: total = total + n adds each value and hits = hits + 1 counts. Setting it inside the loop would reset it on every pass. An if inside the loop counts only the items that pass a test, such as the vowels in "education": e, u, a, i and o make 5.',eq:'start before the loop; update inside it',pic:board('Accumulator and counter patterns',['total = 0  →  start before the loop','total = total + n  →  add each value','hits = 0  →  a counter starts at 0','hits = hits + 1  →  one more match','"education"  →  e u a i o: 5 vowels'],['never inside the loop','the running total','a count of matches','add 1 when the test passes','d, c, t, n are not vowels']),check:check(3,4,[4,2,7],'Count only the passes where ch is "z"; the other letters leave tot alone.',prog('Try-it code',['tot = 0','for ch in "pizzazz":','    if ch == "z":','        tot = tot + 1','print(tot)']))},
 {skill:'sentinel',say:'A sentinel loop reads input until the user types a special value, the sentinel, that means stop. Read once before the loop, test the value in the condition, and read again as the last line of the body so that the next test sees the newest input. Because input() returns text, convert it with int() before adding. The sentinel itself is not added: with 4, 6 and 0 typed, the loop handles 4 and 6, the 0 ends it, and the total is 10.',eq:'read, test, process, read again',pic:prog('Sentinel loop: the user types 4, then 6, then 0',['total = 0','reading = int(input())','while reading != 0:','    total = total + reading','    reading = int(input())','print(total)'])},
 {skill:'bc',say:'The break statement ends the loop at once, even if the condition would still be True or the range has more values, and the program continues with the first line after the loop. It is used to stop a search when the answer is found or to leave a while True: loop. Below, step * 3 is 6, 9, 12 and then 15 for steps 2, 3, 4 and 5. Since 15 > 14, the loop ends at step 5 after printing 2, 3 and 4.',eq:'break: leave the loop now',pic:prog('break ends the loop',['for step in range(2, 12):','    if step * 3 > 14:','        break','    print(step)','print("end")'])},
 {skill:'bc',say:'The continue statement is different: it skips only the rest of the current pass and jumps to the next one, so the loop keeps going. Where break leaves the loop, continue stays in it. In a while loop, make sure the variable is updated before continue, or the same value is tested forever. The table shows one loop run with each statement placed where lap equals 3.',eq:'continue: skip this pass, stay in the loop',pic:{t:'setups',title:'for lap in range(1, 6): if lap == 3: ... then print(lap)',head:'Statement at lap == 3',cols:['Printed'],rows:[['break','1 2'],['continue','1 2 4 5'],['(neither)','1 2 3 4 5']]},check:check(4,19,[19,28,3],'Skip 3 and 6 and add 1, 2, 4, 5 and 7.',prog('Try-it code',['s = 0','for n in range(1, 8):','    if n % 3 == 0:','        continue','    s = s + n','print(s)']))},
 {skill:'nest',say:'A loop inside another loop is a nested loop. For every single pass of the outer loop, the inner loop runs through all of its passes, so with 3 outer passes and 4 inner passes the inner body runs 3 × 4 = 12 times. The inner body is indented one level further than the inner for line. The picture shows 3 rows of 4 dots: each row is one outer pass and each dot is one inner pass. When the inner range uses the outer variable, add up the inner counts instead of multiplying.',eq:'inner passes = outer passes × inner passes',pic:{t:'array',r:3,c:4},check:check(5,6,[6,16,10],'The inner loop runs a times: 0, 1, 2 and 3 times, then add them up.',prog('Try-it code',['for a in range(4):','    for b in range(a):','        print("x")']))},
 {skill:'trace',say:'An off-by-one error is a loop that runs one pass too many or one too few. The usual causes are the excluded stop in range() and a condition written with < where <= was needed. To print 1 to 6 the stop must be 7, one past the last wanted value. Trace the first and the last pass, and count the values with stop minus start.',eq:'last wanted value + 1 = stop',pic:{t:'setups',title:'Goal: print the numbers 1 to 6',head:'Header',cols:['Prints','Verdict'],rows:[['range(1, 6)','1 2 3 4 5','one short'],['range(1, 7)','1 2 3 4 5 6','correct'],['range(1, 8)','1 2 3 4 5 6 7','one extra'],['range(0, 6)','0 1 2 3 4 5','starts at 0']]}},
 {skill:'trace',summary:true,say:'A while loop repeats while its condition is True, tested before every pass, and its body must change something so the test can fail; otherwise the loop is infinite and Ctrl+C is the emergency stop. A for loop takes each value of range(start, stop, step), where stop is left out, or each character of a string. Set accumulators and counters before the loop. A sentinel ends an input loop, break leaves a loop, continue skips a pass, nested loops multiply their passes, and tracing tables catch off-by-one errors.',eq:'test → body → update; stop is left out',pic:board('Unit 3 at a glance',['while: test first, update inside the body','for i in range(start, stop, step): stop is out','total = 0 before the loop, update inside it','sentinel: read, test, process, read again','break leaves, continue skips; nested multiply','trace with a table; check the first and last pass'])}
],
/* Variables, types and input come from Unit 1; conditions and if statements come from Unit 2. */
progression:{requires:['cs-h-programming-python-conditionals-and-logic'],operations:3,demand:'Trace short Python programs with while and for loops, list exactly what range(start, stop, step) produces, predict the final value of an accumulator, tell break from continue, count the passes of nested loops, and spot infinite loops and off-by-one errors.'},
items(add){
 const seen=new Set(TRY);let choice=0;
 const put=(skill,prompt,answer,pic,explanation)=>{if(seen.has(prompt))throw Error(`Repeated Python prompt: ${prompt}`);seen.add(prompt);add(skill,prompt,answer,pic||scene(prompt),explanation);};
 const mc=(skill,prompt,right,wrong,explanation)=>{const c=choose(right,wrong,choice++);put(skill,`${prompt} ${c.text}. Answer A, B or C.`,c.letter,null,explanation);};
 const ti=(code,ext)=>ext?`${code} The user types ${ext}.`:code;
 const num=(skill,code,ask,answer,explanation,typed)=>put(skill,`Code: ${ti(code,typed)} ${ask}`,answer,prog('Python code',codeLines(code)),explanation);
 const mcc=(skill,code,ask,right,wrong,explanation,typed)=>{const c=choose(right,wrong,choice++);put(skill,`Code: ${ti(code,typed)} ${ask} ${c.text}. Answer A, B or C.`,c.letter,prog('Python code',codeLines(code)),explanation);};
 const PR='What is printed?',RUN='What happens when the code runs?',LN='How many lines are printed?';
 const INF='it never stops (infinite loop)';
 /* while loops and loop conditions */
 for(const [p,r,w,e] of [
 ['When does Python test the condition of a while loop?','before every pass through the body, including the first',['only once, before the loop starts','only after the body has run'],'The condition is checked before each pass, so the body can run zero times.'],
 ['What happens if a while condition is False the very first time it is tested?','the body never runs',['the body runs once','Python raises an error'],'The test comes before the body, so a False test skips the loop completely.'],
 ['Which line correctly starts a loop that repeats while the number n is below 10?','while n < 10:',['while n < 10','if n < 10:'],'A while header needs the keyword while, a condition and a colon; an if would decide only once.'],
 ['A program must keep asking until the player types the right password, and nobody knows how many tries that takes. Which loop fits best?','a while loop',['a for loop over range() with a fixed number','an if statement with no loop'],'A while loop repeats until a condition changes, which suits an unknown number of tries.'],
 ['What must be true for a while loop to run its body one more time?','its condition is True when Python tests it',['its loop variable has just changed','its body printed something'],'Only the result of the test decides whether another pass happens.']])mc('while',p,r,w,e);
 mcc('while',L('n = 3','while n > 0:','    print(n, end=" ")','    n = n - 1'),PR,'3 2 1',['3 2 1 0','2 1 0'],'The test n > 0 fails when n reaches 0, so 0 is never printed.');
 num('while',L('n = 1','while n < 20:','    n = n * 2','print(n)'),PR,32,'1, 2, 4, 8 and 16 are below 20, so one more doubling gives 32, and 32 < 20 is False.');
 num('while',L('x = 10','while x > 10:','    x = x + 1','print(x)'),PR,10,'10 > 10 is False at the first test, so the body never runs and x stays 10.');
 num('while',L('t = 0','n = 2','while n <= 8:','    t = t + n','    n = n + 2','print(t)'),PR,20,'The loop adds 2, 4, 6 and 8, which makes 20.');
 num('while',L('w = 100','while w >= 30:','    w = w - 25','print(w)'),PR,25,'w goes 100, 75, 50, 25; 25 >= 30 is False, so the loop stops with 25.');
 num('while',L('k = 1','while k <= 3:','    print("go")','    k = k + 1','print("stop")'),LN,4,'go prints three times and stop once.');
 mcc('while',L('n = 5','while n < 5:','    print("hi")','print("bye")'),PR,'bye',['hi','hi then bye'],'5 < 5 is False at once, so only the last line runs.');
 num('while',L('a = 1','while a < 50:','    a = a * 3','print(a)'),PR,81,'a goes 1, 3, 9, 27, 81; 81 < 50 is False.');
 num('while',L('n = 12','while n != 0:','    n = n - 3','print(n)'),PR,0,'n goes 12, 9, 6, 3, 0 and the loop ends when n is 0.');
 num('while',L('i = 1','s = 0','while i < 4:','    s = s + i * i','    i = i + 1','print(s)'),PR,14,'The loop adds 1, 4 and 9.');
 mcc('while',L('s = ""','n = 1','while n <= 4:','    s = s + str(n)','    n = n + 1','print(s)'),PR,'1234',['10','4321'],'The text 1, 2, 3, 4 is joined in order; no numbers are added.');
 mcc('while',L('a = 0','b = 10','while a < 5 and b > 6:','    a = a + 1','    b = b - 1','print(a, b)'),PR,'4 6',['5 5','3 7'],'After four passes b is 6, so b > 6 fails even though a < 5 is still True.');
 mcc('while',L('word = "go"','while len(word) < 5:','    word = word + "!"','print(word)'),PR,'go!!!',['go!!!!','go!!'],'The word grows from 2 to 5 characters, so three marks are added.');
 num('while',L('n = 4','while n > 1:','    print("x")','    n = n // 2'),LN,2,'n is 4, then 2, then 1; the body runs for 4 and for 2.');
 mcc('while',L('while total < 3:','    print("x")'),RUN,'NameError',['prints nothing',INF],'total has never been given a value, so the first test raises a NameError.');
 num('while',L('n = 2','while n < 100:','    n = n * n','print(n)'),PR,256,'n goes 2, 4, 16, 256 and 256 < 100 is False.');
 /* infinite loops */
 for(const [p,r,w,e] of [
 ['What is an infinite loop?','a loop whose stopping condition is never reached',['a loop with an empty body','a loop that runs zero times'],'It keeps repeating because nothing makes the condition False and no break is reached.'],
 ['A while loop never ends because nothing in its body changes the variable that its condition tests. What is the usual fix?','change that variable inside the body so the condition can become False',['indent the while line one more level','add a second print statement'],'The update inside the body is what moves the loop toward its end.'],
 ['A program seems frozen inside a loop in a terminal. Which key press normally interrupts it?','Ctrl+C',['Ctrl+S','the Enter key'],'In most terminals Ctrl+C interrupts a running program and Python shows a KeyboardInterrupt.'],
 ['Which statement can end a loop from the middle of its body while the condition is still True?','break',['continue','pass'],'break leaves the loop at once; continue only skips to the next pass and pass does nothing.'],
 ['Which loop header is written to repeat until something inside the body stops it?','while True:',['while False:','for i in range(2):'],'True is always True, so only something in the body, such as break, ends the loop (or an interrupt or an error).'],
 ['Starting with n = 5, loop A is while n > 0: with n = n - 1 in the body, and loop B is while n > 0: with n = n + 1 in the body. Which loop ends by itself?','loop A',['loop B','both of them'],'In loop A, n shrinks to 0 and the test fails; in loop B, n only gets bigger, so n > 0 is always True.']])mc('inf',p,r,w,e);
 mcc('inf',L('n = 1','while n < 5:','    print(n)'),RUN,INF,['prints 1 then 2 then 3 then 4','prints 1'],'n is never changed, so n < 5 stays True and 1 is printed forever.');
 mcc('inf',L('n = 10','while n > 0:','    n = n + 1'),RUN,INF,['prints nothing','ValueError'],'n grows, so n > 0 is always True.');
 mcc('inf',L('n = 10','while n != 0:','    n = n - 3'),RUN,INF,['prints nothing','ZeroDivisionError'],'n goes 10, 7, 4, 1, -2 and never equals 0, so the test n != 0 is always True.');
 mcc('inf',L('x = 0','while x < 3:','    x = x - 1'),RUN,INF,['prints nothing','NameError'],'x goes down, away from 3, so x < 3 stays True.');
 mcc('inf',L('k = 1','while k < 10:','    if k % 2 == 0:','        k = k + 1','    print(k)'),RUN,INF,['prints 1 then 3 then 5 then 7 then 9','prints nothing'],'k is 1, which is odd, so the update inside the if never runs and k stays 1.');
 mcc('inf',L('n = 0','while n < 3:','    print("beep")','n = n + 1'),RUN,INF,['prints beep then beep then beep','prints nothing'],'The update is not indented, so it is after the loop, which never reaches it.');
 num('inf',L('t = 5','while t:','    t = t - 1','print(t)'),PR,0,'A number is true until it reaches 0, so the loop ends when t becomes 0.');
 mcc('inf',L('while True:','    print("hi")','    break'),RUN,'prints hi',[INF,'prints nothing'],'The first pass prints hi and then break ends the loop.');
 num('inf',L('n = 0','while True:','    n = n + 1','    if n == 4:','        break','print(n)'),PR,4,'The loop only ends through break, which happens when n reaches 4.');
 mcc('inf',L('n = 3','while n > 0:','    print(n)','    n = n - 1'),PR,'3 then 2 then 1',['3 then 2 then 1 then 0','1 then 2 then 3'],'This loop is repaired: n shrinks and the test fails at 0.');
 num('inf',L('n = 0','while True:','    n = n + 2','    print(n)','    if n >= 6:','        break'),LN,3,'It prints 2, 4 and 6, and then break ends the loop.');
 mcc('inf',L('n = 8','while n > 1:','    n = n // 2'),RUN,'prints nothing',[INF,'ZeroDivisionError'],'n goes 8, 4, 2, 1 and the loop ends; there is no print statement.');
 mcc('inf',L('n = 7','while n % 2 == 1:','    n = n + 2'),RUN,INF,['prints nothing','prints 9'],'Adding 2 to an odd number gives another odd number, so the test is always True.');
 mcc('inf',L('n = 6','while n % 2 == 1:','    n = n + 2'),RUN,'prints nothing',[INF,'prints 8'],'6 is even, so the test fails at once and the body never runs.');
 /* for loops and range */
 for(const [p,r,w,e] of [
 ['How many values does range(9) produce?','9',['8','10'],'range(9) gives 0 up to 8, which is nine values.'],
 ['Which number is the last one produced by range(2, 9)?','8',['9','7'],'The stop value 9 is left out.'],
 ['Which call produces the numbers 4, 5, 6, 7?','range(4, 8)',['range(4, 7)','range(5, 8)'],'The stop must be one past the last wanted number.'],
 ['Which call counts down 9, 6, 3?','range(9, 0, -3)',['range(9, 3, 3)','range(3, 9, -3)'],'A negative step needs a start above the stop; the other calls are empty.'],
 ['What does the third number in range(0, 20, 5) control?','the step: how much the value changes each time',['the number of values produced','the last value that is included'],'range(0, 20, 5) gives 0, 5, 10, 15.'],
 ['Which call produces the numbers 1 to 10, including 10?','range(1, 11)',['range(1, 10)','range(0, 10)'],'The stop is left out, so it must be 11.'],
 ['What does range(4, 4) produce?','no numbers at all',['the number 4 once','an error message'],'Start and stop are equal, so nothing lies between them.'],
 ['Which call produces 0, 2, 4, 6, 8?','range(0, 10, 2)',['range(0, 8, 2)','range(2, 10, 2)'],'Start 0, step 2, and a stop of 10 so that 8 is included.']])mc('range',p,r,w,e);
 mcc('range',L('for i in range(4):','    print(i, end=" ")'),PR,'0 1 2 3',['1 2 3 4','0 1 2 3 4'],'range(4) starts at 0 and leaves out 4.');
 mcc('range',L('for i in range(2, 6):','    print(i, end=" ")'),PR,'2 3 4 5',['2 3 4 5 6','3 4 5 6'],'The stop 6 is left out.');
 mcc('range',L('for i in range(1, 12, 4):','    print(i, end=" ")'),PR,'1 5 9',['1 5 9 13','5 9'],'1, 5, 9 and the next value 13 would pass the stop 12.');
 mcc('range',L('for i in range(9, 2, -2):','    print(i, end=" ")'),PR,'9 7 5 3',['9 7 5 3 1','9 7 5'],'9, 7, 5, 3 and the next value 1 would pass the stop 2.');
 mcc('range',L('for i in range(6, 0, -1):','    print(i, end=" ")'),PR,'6 5 4 3 2 1',['6 5 4 3 2 1 0','5 4 3 2 1'],'The stop 0 is left out even when counting down.');
 mcc('range',L('for i in range(6, 2):','    print("x")'),RUN,'prints nothing',['prints x then x then x','ValueError'],'The step is +1 and the start is above the stop, so the range is empty.');
 num('range',L('for i in range(3):','    print("ho")'),LN,3,'range(3) has three values.');
 num('range',L('for i in range(2, 20, 6):','    print(i)'),LN,3,'The values are 2, 8 and 14.');
 mcc('range',L('for k in range(10, 0, -4):','    print(k, end=" ")'),PR,'10 6 2',['10 6 2 -2','6 2'],'10, 6, 2 and the next value -2 would pass the stop 0.');
 mcc('range',L('for n in range(1, 4):','    print(n * n, end=" ")'),PR,'1 4 9',['1 4 9 16','1 2 3'],'The loop squares 1, 2 and 3.');
 num('range',L('for i in range(3):','    x = i','print(i)'),PR,2,'The loop variable keeps its last value, 2, after the loop.');
 mcc('range',L('for i in range(2, 2):','    x = 1','print(i)'),RUN,'NameError',['prints 2','prints 0'],'The range is empty, so i was never given a value.');
 mcc('range',L('for i in range(2.5):','    print(i)'),RUN,'TypeError',['prints 0 then 1 then 2','prints 0 then 1'],'range() needs whole numbers; a float raises a TypeError.');
 mcc('range',L('for i in range(2, 8, 0):','    print(i)'),RUN,'ValueError',['prints nothing',INF],'A step of 0 is not allowed and raises a ValueError.');
 mcc('range',L('for i in range(0, 10, 3):','    print(i, end=" ")'),PR,'0 3 6 9',['3 6 9','0 3 6'],'0, 3, 6 and 9 are all below the stop 10.');
 num('range',L('print(len(range(3, 15, 4)))'),PR,3,'The values are 3, 7 and 11; the next, 15, equals the stop.');
 /* accumulators, counters and strings */
 for(const [p,r,w,e] of [
 ['What is an accumulator?','a variable that starts at a value such as 0 and is updated on each pass to build a result',['a loop that never ends','a function that returns the largest number'],'A running total or count is an accumulator.'],
 ['A loop will add up numbers. What should the total variable start as?','0',['1','an empty string'],'Adding to 0 leaves the first number unchanged.'],
 ['A loop will multiply numbers together. What should the product variable start as?','1',['0','an empty string'],'Starting at 0 would leave every product 0; 1 does not change a product.'],
 ['Where must total = 0 be placed so the loop can build a running total?','before the loop',['inside the loop body','after the loop'],'Inside the loop it would reset to 0 on every pass.'],
 ['In the loop for ch in word:, what does ch hold on each pass?','one character of word',['the whole word','the position number of a character'],'A for loop over a string takes one character at a time.']])mc('acc',p,r,w,e);
 put('acc','A for loop runs over a string with 9 characters. How many times does the body run?',9,null,'The body runs once for each character.');
 num('acc',L('total = 0','for n in range(1, 5):','    total = total + n','print(total)'),PR,10,'The loop adds 1 + 2 + 3 + 4, which is 10.');
 num('acc',L('t = 0','for n in range(3, 7):','    t = t + n','print(t)'),PR,18,'The loop adds 3 + 4 + 5 + 6, which is 18.');
 num('acc',L('p = 1','for n in range(1, 5):','    p = p * n','print(p)'),PR,24,'The loop multiplies 1 × 2 × 3 × 4, which is 24.');
 mcc('acc',L('s = ""','for ch in "stop":','    s = ch + s','print(s)'),PR,'pots',['stop','spot'],'Each new character is put in front, so the word is reversed.');
 num('acc',L('n = 0','for ch in "banana":','    if ch == "a":','        n = n + 1','print(n)'),PR,3,'banana has three letters a.');
 mcc('acc',L('s = ""','for ch in "tree":','    s = s + ch + ch','print(s)'),PR,'ttrreeee',['tree','treetree'],'Every letter is added twice: tt, rr, ee, ee.');
 mcc('acc',L('for ch in "dog":','    print(ch.upper(), end="")'),PR,'DOG',['dog','D O G'],'end="" keeps the capitals on one line without spaces.');
 num('acc',L('for ch in "abc":','    print(ch)'),LN,3,'One print for each character.');
 num('acc',L('n = 0','for ch in "Programming":','    if ch in "aeiou":','        n = n + 1','print(n)'),PR,3,'The vowels of Programming are o, a and i.');
 num('acc',L('total = 0','for ch in "2024":','    total = total + int(ch)','print(total)'),PR,8,'int() turns each character into a number: 2 + 0 + 2 + 4 = 8.');
 mcc('acc',L('t = 0','for ch in "123":','    t = t + ch','print(t)'),RUN,'TypeError',['prints 6','prints 123'],'A number and a string cannot be added.');
 num('acc',L('s = 0','for n in range(4):','    s = s + 2','print(s)'),PR,8,'The loop adds 2 four times.');
 num('acc',L('count = 0','for i in range(10):','    if i % 3 == 0:','        count = count + 1','print(count)'),PR,4,'The multiples of 3 below 10 are 0, 3, 6 and 9.');
 mcc('acc',L('w = ""','for ch in "a-b-c":','    if ch != "-":','        w = w + ch','print(w)'),PR,'abc',['a-b-c','a b c'],'The dashes fail the test, so only the letters are added.');
 num('acc',L('total = 10','for n in range(3):','    total = total - n','print(total)'),PR,7,'The loop takes away 0, 1 and 2.');
 num('acc',L('tot = 0','n = 0','for v in range(10, 40, 10):','    tot = tot + v','    n = n + 1','print(tot / n)'),PR,20,'The total is 60 over 3 passes, so the average is 20.0.');
 /* sentinel loops */
 for(const [p,r,w,e] of [
 ['What is a sentinel value in a loop that reads input?','a special value, such as "stop", that tells the loop to end',['the biggest value the user types','the first value the user types'],'The sentinel is chosen so that it cannot be mistaken for real data.'],
 ['Why does a sentinel loop usually read once before the loop and again at the end of the body?','so the condition always tests the newest input before the next pass',['so the program asks twice as many questions','because input() only works two times'],'Each test must look at a fresh value.'],
 ['input() returns a value of which type?','str',['int','bool'],'Even digits typed by the user arrive as text.'],
 ['A loop must keep going until the user types "done". Which header does that?','while answer != "done":',['while answer == "done":','while answer = "done":'],'The loop runs while the answer is not the sentinel; = would be a SyntaxError.']])mc('sentinel',p,r,w,e);
 const SUMLOOP=L('total = 0','n = int(input())','while n != 0:','    total = total + n','    n = int(input())','print(total)');
 num('sentinel',SUMLOOP,PR,12,'5 + 7 = 12; the 0 ends the loop and is not added.','5 then 7 then 0');
 num('sentinel',SUMLOOP,PR,9,'The loop adds 3 + 3 + 3 and stops at the 0.','3 then 3 then 3 then 0');
 num('sentinel',SUMLOOP,PR,0,'The first value is the sentinel, so the body never runs and total stays 0.','0');
 mcc('sentinel',L('word = input()','while word != "stop":','    print(word.upper())','    word = input()'),PR,'HI then YO',['HI then YO then STOP','hi then yo'],'stop ends the loop before it is printed.','hi then yo then stop');
 const ENDLOOP=L('n = 0','w = input()','while w != "end":','    n = n + 1','    w = input()','print(n)');
 num('sentinel',ENDLOOP,PR,3,'Three words come before end.','ant then bee then cow then end');
 num('sentinel',ENDLOOP,PR,0,'The first word is the sentinel, so nothing is counted.','end');
 num('sentinel',L('x = input()','while x != "q":','    print("again")','    x = input()'),LN,2,'a and b are handled; q ends the loop.','a then b then q');
 num('sentinel',L('best = 0','n = int(input())','while n != -1:','    if n > best:','        best = n','    n = int(input())','print(best)'),PR,9,'best follows the largest value seen: 3, 9, then 4 does not beat 9.','3 then 9 then 4 then -1');
 mcc('sentinel',L('while True:','    w = input()','    if w == "exit":','        break','    print(w)'),PR,'one then two',['one then two then exit','exit'],'The break comes before the print, so exit is not printed.','one then two then exit');
 mcc('sentinel',L('n = int(input())','while n != 0:','    print(n)'),RUN,INF,['prints 4','ValueError'],'The program never reads again, so n stays 4 forever.','4');
 mcc('sentinel',L('n = int(input())','while n != 0:','    print(n)','    n = int(input())'),RUN,'ValueError',['prints 3',INF],'int("stop") cannot make a number, so a ValueError ends the program after 3 is printed.','3 then stop');
 num('sentinel',L('pos = 0','v = int(input())','while v != 0:','    if v > 0:','        pos = pos + 1','    v = int(input())','print(pos)'),PR,2,'4 and 7 are positive; -2 is not.','4 then -2 then 7 then 0');
 num('sentinel',L('total = 0','while True:','    n = int(input())','    if n < 0:','        break','    total = total + n','print(total)'),PR,5,'2 + 3 = 5; the negative number ends the loop.','2 then 3 then -1');
 num('sentinel',L('secret = 7','g = int(input())','tries = 1','while g != secret:','    g = int(input())','    tries = tries + 1','print(tries)'),PR,3,'The guesses are 3, 9 and 7, so there are three tries.','3 then 9 then 7');
 mcc('sentinel',L('s = ""','w = input()','while w != "x":','    s = s + w','    w = input()','print(s)'),PR,'abc',['abcx','a b c'],'The letters are joined in order and the x is not added.','a then b then c then x');
 /* break and continue */
 for(const [p,r,w,e] of [
 ['What does break do inside a loop?','it ends the loop at once and continues after the loop',['it skips to the next pass of the loop','it stops the whole program'],'break leaves only the loop it is in.'],
 ['What does continue do inside a loop?','it skips the rest of this pass and goes on to the next pass',['it ends the loop at once','it restarts the program from the first line'],'The loop itself keeps going.'],
 ['Which statement would you use to stop searching as soon as a match is found?','break',['continue','pass'],'break ends the search early.'],
 ['Which statement would you use to skip unwanted items but keep the loop going?','continue',['break','pass'],'continue jumps to the next item; pass does nothing at all.'],
 ['In a while loop, what danger comes from putting continue before the line that updates the variable?','the update is skipped, so the loop may never end',['Python raises a SyntaxError','the loop runs only once'],'continue jumps straight to the next test with the same value.'],
 ['Where may a break statement appear?','inside a for loop or a while loop',['anywhere in a program','only inside an if statement'],'Outside a loop, break is a SyntaxError.']])mc('bc',p,r,w,e);
 mcc('bc',L('for i in range(1, 9):','    if i == 4:','        break','    print(i, end=" ")'),PR,'1 2 3',['1 2 3 4','1 2 3 5 6 7 8'],'The loop ends when i is 4, before the print.');
 mcc('bc',L('for i in range(1, 9):','    if i == 4:','        continue','    print(i, end=" ")'),PR,'1 2 3 5 6 7 8',['1 2 3','1 2 3 4 5 6 7 8'],'Only the pass with i equal to 4 is skipped.');
 num('bc',L('n = 0','for i in range(10):','    if i % 2 == 1:','        continue','    n = n + i','print(n)'),PR,20,'The odd numbers are skipped, leaving 0 + 2 + 4 + 6 + 8.');
 num('bc',L('for i in range(6):','    if i == 2:','        break','print(i)'),PR,2,'break leaves the loop with i still equal to 2.');
 num('bc',L('n = 0','while n < 10:','    n = n + 3','    if n > 7:','        break','print(n)'),PR,9,'n goes 3, 6, 9; at 9 the test n > 7 is True and break ends the loop.');
 num('bc',L('total = 0','for v in range(1, 9):','    if v == 3:','        continue','    total = total + v','print(total)'),PR,33,'1 to 8 adds up to 36, and the 3 is skipped.');
 num('bc',L('for i in range(6):','    if i < 3:','        continue','    print("x")'),LN,3,'Only i equal to 3, 4 and 5 reach the print.');
 mcc('bc',L('for ch in "banana":','    if ch == "n":','        break','    print(ch, end="")'),PR,'ba',['baaa','banana'],'The loop ends at the first n.');
 mcc('bc',L('for ch in "banana":','    if ch == "n":','        continue','    print(ch, end="")'),PR,'baaa',['ba','banana'],'The n characters are skipped, but the loop goes on.');
 mcc('bc',L('n = 0','while n < 5:','    if n == 2:','        continue','    n = n + 1'),RUN,INF,['prints nothing','SyntaxError'],'When n reaches 2, continue skips the update, so n stays 2 forever.');
 mcc('bc',L('n = 0','while n < 5:','    n = n + 1','    if n == 2:','        continue','    print(n, end=" ")'),PR,'1 3 4 5',['1 2 3 4 5','1 3 4'],'The update comes first, so only the print for 2 is skipped.');
 num('bc',L('for i in range(2, 10):','    if i * i > 30:','        break','print(i)'),PR,6,'5 * 5 = 25 is not above 30 but 6 * 6 = 36 is, so the loop ends at 6.');
 num('bc',L('for n in range(20, 40):','    if n % 7 == 0:','        print(n)','        break'),PR,21,'21 is the first multiple of 7 from 20 on.');
 num('bc',L('for a in range(3):','    for b in range(3):','        if b == 1:','            break','        print(a, b)'),LN,3,'break leaves only the inner loop, so each value of a prints once with b equal to 0.');
 mcc('bc',L('print("a")','break'),RUN,'SyntaxError',['prints a','IndentationError'],'break outside a loop is rejected before anything runs.');
 mcc('bc',L('x = 3','if x > 1:','    continue'),RUN,'SyntaxError',['prints nothing','IndentationError'],'continue is only allowed inside a loop; an if is not a loop.');
 num('bc',L('s = 0','for i in range(1, 100):','    s = s + i','    if s > 20:','        break','print(i)'),PR,6,'The running sum goes 1, 3, 6, 10, 15, 21, so it passes 20 at i equal to 6.');
 /* nested loops */
 for(const [p,r,w,e] of [
 ['In nested loops, what happens for each single pass of the outer loop?','the inner loop runs all of its passes',['the inner loop runs one pass','the outer loop runs all of its passes again'],'The inner loop starts again from its first value each time.'],
 ['How should the body of an inner for loop be indented compared with the inner for line?','one more level to the right',['at the same level','one level to the left'],'Each block sits one level deeper than its header.'],
 ['Where does a break in the inner loop of two nested loops take the program?','out of the inner loop only, back into the outer loop',['out of both loops','to the first line of the program'],'break ends only the loop that directly holds it.'],
 ['An outer loop uses for a in range(6) and an inner loop uses for b in range(3). Which expression gives the number of passes of the inner body?','6 * 3',['6 + 3','6 ** 3'],'Each of the 6 outer passes runs 3 inner passes.']])mc('nest',p,r,w,e);
 put('nest','An outer loop runs 6 times and, on each of those passes, an inner loop runs 4 times. How many times does the inner body run in total?',24,null,'Each of the 6 outer passes runs 4 inner passes: 6 × 4 = 24.');
 put('nest','Nested loops draw a grid with 8 rows and 5 columns and print one star per cell. How many stars are printed?',40,null,'Each of the 8 rows holds 5 stars: 8 × 5 = 40.');
 num('nest',L('for r in range(2):','    for c in range(3):','        print("*", end="")','    print()'),LN,2,'The outer loop makes two lines of three stars.');
 num('nest',L('n = 0','for a in range(3):','    for b in range(4):','        n = n + 1','print(n)'),PR,12,'Three outer passes with four inner passes each make 3 × 4 = 12.');
 num('nest',L('n = 0','for a in range(2, 5):','    for b in range(a):','        n = n + 1','print(n)'),PR,9,'The inner loop runs 2, 3 and 4 times, which is 9.');
 mcc('nest',L('for a in range(1, 4):','    for b in range(1, 3):','        print(a * b, end=" ")'),PR,'1 2 2 4 3 6',['1 2 3 2 4 6','1 4 9'],'For a = 1, 2, 3 the products with b = 1 and 2 are 1 2, then 2 4, then 3 6.');
 mcc('nest',L('for a in range(3):','    for b in range(a + 1):','        print("o", end="")','    print()'),PR,'o then oo then ooo',['o then o then o','ooo then oo then o'],'The inner loop runs 1, 2 and 3 times, one line each.');
 num('nest',L('for a in range(4):','    for b in range(2):','        print(a, b)'),LN,8,'Four outer passes with two inner passes each make 4 × 2 = 8.');
 num('nest',L('total = 0','for a in range(1, 4):','    for b in range(1, 4):','        if a == b:','            total = total + 1','print(total)'),PR,3,'Only the pairs (1, 1), (2, 2) and (3, 3) match.');
 num('nest',L('n = 0','for a in range(4):','    n = n + 1','    for b in range(3):','        n = n + 10','print(n)'),PR,124,'The outer body adds 1 four times and the inner body adds 10 twelve times: 4 + 120.');
 mcc('nest',L('for a in range(2):','    for b in range(2):','        print(a + b, end=" ")'),PR,'0 1 1 2',['0 1 2 3','0 0 1 1'],'The sums for (0, 0), (0, 1), (1, 0), (1, 1).');
 mcc('nest',L('for a in range(2):','    for b in range(2):','    print(b)'),RUN,'IndentationError',['prints 0 then 1 then 0 then 1','SyntaxError'],'The inner for has no indented body.');
 mcc('nest',L('for a in range(2):','    for b in range(2):','        print(a, end=" ")'),PR,'0 0 1 1',['0 1 0 1','0 1'],'a changes only once per two inner passes.');
 num('nest',L('i = 0','while i < 2:','    j = 0','    while j < 3:','        j = j + 1','    i = i + 1','print(i * j)'),PR,6,'i ends at 2 and j ends at 3, and 2 * 3 = 6.');
 num('nest',L('for a in range(3):','    for b in range(a):','        print("-")'),LN,3,'The inner loop runs 0, 1 and 2 times.');
 num('nest',L('n = 0','for a in range(3):','    for b in range(3):','        if b > a:','            break','        n = n + 1','print(n)'),PR,6,'The inner loop counts 1, 2 and 3 passes before break, which is 6.');
 /* tracing and off-by-one errors */
 for(const [p,r,w,e] of [
 ['What does a trace table for a loop record?','the values of the variables after each pass through the body',['the number of lines in the program','every error Python could raise'],'Tracing by hand shows what the loop really does.'],
 ['A programmer wants to print the numbers 1 to 10 with a for loop. Which header is correct?','for i in range(1, 11):',['for i in range(1, 10):','for i in range(10):'],'The stop must be one past the last number wanted.'],
 ['What is an off-by-one error?','a loop that runs one time too many or one time too few',['a variable that is one letter too long','an indented line that is one space short'],'It is usually a wrong stop value or a < that should be <=.'],
 ['A loop with for i in range(2, 6) was meant to print 5 stars but prints only 4. Which change to the header fixes it?','range(2, 7)',['range(2, 5)','range(3, 7)'],'Five values from 2 need a stop of 7.'],
 ['A while loop should run while n <= 10 but was written as while n < 10. What is the effect?','the pass with n equal to 10 is left out',['the loop runs forever','the pass with n equal to 11 is added'],'< 10 fails when n is 10, so that pass never happens.'],
 ['How many values does range(a, b) produce when a is less than b and the step is 1?','b - a',['b - a + 1','a + b'],'range(3, 8) gives 5 values, and 8 - 3 = 5.']])mc('trace',p,r,w,e);
 num('trace',L('n = 0','for i in range(1, 5):','    n = n + 1','print(n)'),PR,4,'range(1, 5) has four values, so n counts to 4 rather than 5.');
 num('trace',L('n = 1','total = 0','while n <= 5:','    total = total + n','    n = n + 1','print(total)'),PR,15,'The loop adds 1 to 5.');
 num('trace',L('n = 1','total = 0','while n < 5:','    total = total + n','    n = n + 1','print(total)'),PR,10,'With < the pass for 5 is left out, so the loop adds only 1 to 4.');
 mcc('trace',L('a = 2','b = 5','while a < b:','    a = a + 2','    b = b + 1','print(a, b)'),PR,'8 8',['6 7','10 9'],'The pairs are (2, 5), (4, 6), (6, 7), (8, 8); the last fails a < b.');
 num('trace',L('x = 1','for i in range(3):','    x = x * 2','    x = x + 1','print(x)'),PR,15,'x goes 1, then 3, then 7, then 15.');
 num('trace',L('n = 100','steps = 0','while n > 1:','    n = n // 2','    steps = steps + 1','print(steps)'),PR,6,'n goes 100, 50, 25, 12, 6, 3, 1, which is six halvings.');
 num('trace',L('for i in range(1, 11):','    print(i)'),LN,10,'range(1, 11) has ten values.');
 num('trace',L('for i in range(1, 10):','    print(i)'),LN,9,'range(1, 10) has nine values, one short of ten.');
 num('trace',L('for i in range(2, 9, 2):','    last = i','print(last)'),PR,8,'The values are 2, 4, 6, 8, and the last one is kept.');
 num('trace',L('i = 10','while i > 0:','    i = i - 4','print(i)'),PR,-2,'i goes 10, 6, 2, -2; the loop ends once i is not above 0.');
 mcc('trace',L('n = 20','k = 0','while n >= 5:','    n = n - 5','    k = k + 1','print(k, n)'),PR,'4 0',['3 5','4 5'],'Four subtractions take 20 down to 0, and 0 >= 5 is False.');
 num('trace',L('n = 1','while n <= 6:','    print(n)','    n = n + 2'),LN,3,'n is 1, 3 and 5; 7 fails the test.');
 num('trace',L('for i in range(7, 2, -1):','    print(i)'),LN,5,'The values are 7, 6, 5, 4 and 3.');
 mcc('trace',L('t = 0','for i in range(4):','    t = t + i','    print(t)'),PR,'0 then 1 then 3 then 6',['0 then 1 then 2 then 3','6'],'The print is inside the loop, so it shows the running total.');
 num('trace',L('s = 0','for i in range(1, 4):','    s = s + i * 10','print(s)'),PR,60,'The loop adds 10 + 20 + 30, which is 60.');
 num('trace',L('x = 5','while x > 0:','    x = x - 2','print(x)'),PR,-1,'x goes 5, 3, 1, -1 and the loop stops once x is not above 0.');
}
};
