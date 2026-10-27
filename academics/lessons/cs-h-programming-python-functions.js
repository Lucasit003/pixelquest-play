/* Intro to Programming (Python) Unit 4, Functions. A standards-based course (CSTA K-12 Computer Science Standards, 2017, levels 3A/3B), not an AP
   course. Python 3 only: defining and calling functions with def, parameters and arguments (positional, keyword and default values), return
   versus print and the implicit None, local and global scope (and the global statement), calling functions from functions and decomposing a
   problem, docstrings and comments, the built-ins len, max, min, abs and round (round-half-to-even), the math module (import math, math.sqrt,
   math.floor, math.ceil, math.pi) and simple recursion with a base case. Original wording. Worked examples (cheer, greet, power, f(4) with
   return and print, sign, mix and paint, rate and show, half and quarter, the report-card tree, perimeter and its docstring, the built-in table
   with robot, 11, 7, -9, 7.3, 2.5, 3.5 and 3.14159, sqrt of 49, floor of 3.9, ceil of 3.1, fact(4) and countdown) and the six Try-its are
   reserved and never appear in the pool. Code in a question is one program: lines are separated by a bar, and four spaces after a bar are one
   level of indentation. Several printed lines are written joined by then; print(x, end=" ") keeps the output on one line. */
const board=(title,lines,why)=>({t:'board',title,lines,...(why?{why}:{})});
const prog=(title,lines)=>({t:'program',title,lines:lines.map((l,i)=>`${i+1}. ${l}`)});
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const scene=p=>{const lines=[];let line='';for(const word of p.split(/ [ABC]: /)[0].split(' ')){if((line+' '+word).length>49){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the question',lines.slice(0,7));};
const L=(...ls)=>ls.join(' | ');
const TRY=[
 'Code: def diff(a, b): |     print(a - b) | diff(2, 9) What is printed?',
 'Code: def f(n): |     print(n * 2) | x = f(4) | print(x) What is printed?',
 'Code: v = 3 | def g(): |     v = 8 | g() | print(v) What is printed?',
 'Code: def inc(n): |     return n + 1 | def add3(n): |     return inc(inc(inc(n))) | print(add3(10)) What is printed?',
 'Code: print(max(3, 8) + min(3, 8) + abs(-4)) What is printed?',
 'Code: def f(n): |     if n == 0: |         return 0 |     return n + f(n - 1) | print(f(4)) What is printed?'];
const codeLines=code=>code.split(' | ');
const check=(i,answer,options,hint,pic)=>({prompt:`Try it: ${TRY[i]}`,answer,options,hint,pic});
const tree=(title,top,kids)=>{const pts={T1:[3,4.2],T2:[7,4.2],T3:[7,5.4],T4:[3,5.4]},polys=[{v:'T1T2T3T4',col:0,label:top}],segs=[];
 kids.forEach((k,i)=>{const x=i*5-0.5,n='ABC'[i];pts[n+1]=[x,0.2];pts[n+2]=[x+4,0.2];pts[n+3]=[x+4,1.6];pts[n+4]=[x,1.6];polys.push({v:`${n}1${n}2${n}3${n}4`,col:i+1,label:k});
  pts['F'+i]=[5,4.2];pts['G'+i]=[x+2,1.6];segs.push({v:`F${i}G${i}`,arrows:1,col:3});});
 return {t:'figure',title,pts,hide:Object.keys(pts).join(' '),dots:'',polys,segs};};
export default {
id:'cs-h-programming-python-functions',subject:'cs',level:5,grade:9,standard:'CSTA K-12 Computer Science Standards (2017), levels 3A and 3B: Algorithms and Programming: modularity, variables, algorithms, program development and documentation',title:'Functions',
skills:{def:'Defining and calling functions',params:'Parameters, arguments and default values',ret:'return, print and None',scope:'Local and global scope',call:'Calling functions from functions and decomposition',doc:'Docstrings and comments',builtin:'Built-in functions',math:'The math module and import',rec:'Simple recursion'},
outline:[['CSTA Algorithms and Programming: modularity (defining and calling functions)','Define a function with def and call it, and tell defining from calling',['def']],['CSTA Algorithms and Programming: modularity (parameters and arguments)','Pass positional and keyword arguments and give parameters default values',['params']],['CSTA Algorithms and Programming: modularity (return values)','Send a value back with return and tell it from print, including the implicit None',['ret']],['CSTA Algorithms and Programming: variables (scope)','Tell local variables from global ones and use the global statement',['scope']],['CSTA Algorithms and Programming: modularity (decomposition)','Break a problem into functions that call one another',['call']],['CSTA Algorithms and Programming: program development (documentation)','Describe a function with a docstring and comments',['doc']],['CSTA Algorithms and Programming: modularity (built-in functions)','Use len, max, min, abs and round',['builtin']],['CSTA Algorithms and Programming: modularity (libraries and modules)','Import the math module and use math.sqrt, math.floor, math.ceil and math.pi',['math']],['CSTA Algorithms and Programming: algorithms (recursion)','Write and trace a simple recursive function with a base case',['rec']]],
steps:[
 {skill:'def',say:'A function is a named block of code that you write once and run whenever you need it. You define it with the keyword def, a name, parentheses and a colon, and the indented lines below are its body. Defining a function does not run the body. The body runs each time you call the function by writing its name with parentheses. In the program below, cheer is defined once and called twice, so "Go team!" is printed two times.',eq:'def name(): body   then   name()',pic:prog('Defining once, calling twice (fictional)',['def cheer():','    print("Go team!")','cheer()','cheer()'])},
 {skill:'def',say:'Keep defining and calling apart. When Python reaches a def line it stores the function under its name and moves on, so nothing is printed. Only a call with parentheses runs the body. Writing the bare name cheer, without parentheses, names the function but does not call it, so nothing happens. A function must also be defined before the line that calls it actually runs; a call above the def raises a NameError.',eq:'def stores it; name() runs it',pic:board('Defining is not calling',['def cheer():   (then the indented body)','cheer()','cheer','cheer() written above its def'],['stored by Python, nothing printed','the body runs: Go team!','no (), so no call','NameError: not defined yet'])},
 {skill:'params',say:'A function can take information in through parameters, the names listed in the parentheses of the def line. The values given in a call are the arguments. In greet("Ana"), the argument "Ana" is copied into the parameter name for that call. A parameter exists only while the function runs, and each call can pass a different argument, so greet("Ana") prints Hi Ana and greet("Bo") prints Hi Bo. Positional arguments are matched to parameters in order.',eq:'parameter = name in def; argument = value in the call',pic:prog('Parameter name, arguments "Ana" and "Bo" (fictional)',['def greet(name):','    print("Hi " + name)','greet("Ana")','greet("Bo")']),check:check(0,-7,[-7,7,11],'The first argument goes to a and the second to b, so the function prints 2 - 9.',prog('Try-it code',['def diff(a, b):','    print(a - b)','diff(2, 9)']))},
 {skill:'params',say:'A call can name its arguments as keyword arguments, such as power(exp=3, base=2), and then the order does not matter. A parameter can also have a default value, written exp=2 in the def line, which is used when the call leaves that argument out. Parameters with defaults must come after those without. Giving too few or too many arguments, or a keyword that is not a parameter, raises a TypeError. A default is worked out once, when the def line runs.',eq:'def power(base, exp=2): defaults go last',pic:{t:'setups',title:'def power(base, exp=2): return base ** exp',head:'Call',cols:['Result'],rows:[['power(5)','25'],['power(2, 3)','8'],['power(exp=3, base=2)','8'],['power(2, 3, 4)','TypeError']]}},
 {skill:'ret',say:'The print function only shows text on the screen. The return statement hands a value back to the code that called the function, so the caller can store it or use it in a calculation. In x = f(4), x receives whatever f returns. If f returns n * 2, then x is 8. If f only prints n * 2, the 8 appears on the screen but x receives None, the value that stands for nothing. The table runs both versions with x = f(4) followed by print(x).',eq:'return gives a value back; print only shows it',pic:{t:'setups',title:'Two versions of f, run as x = f(4) then print(x)',head:'Body of f',cols:['Screen shows','x holds'],rows:[['return n * 2','8','8'],['print(n * 2)','8 then None','None']]}},
 {skill:'ret',say:'A return statement ends the function at once: any lines after it in that call are skipped. A function can have several returns, for example one inside an if and one at the end. If the function reaches its last line without meeting a return, or meets a bare return, the call produces None. In sign(-3) below, the first return runs, so "negative" comes back and the last line is never reached. For sign(5) the if fails and the last return gives "not negative".',eq:'return ends the call; no return means None',pic:prog('A function with two returns (fictional)',['def sign(n):','    if n < 0:','        return "negative"','    return "not negative"','print(sign(-3))','print(sign(5))']),check:check(1,'8 then None',['8 then None','8','8 then 8'],'f prints 8 itself and returns nothing, so x holds None and the last line prints it.',prog('Try-it code',['def f(n):','    print(n * 2)','x = f(4)','print(x)']))},
 {skill:'scope',say:'Scope is the part of a program where a name can be used. A variable that a function creates by assignment, and its parameters, are local: they exist only while that call runs and cannot be used outside it. In the program below, paint is made inside mix, so when the last line asks for paint, Python raises a NameError. Two functions can each have a local variable with the same name without affecting each other. The values here are fictional.',eq:'a local name lives only inside its function',pic:prog('A local variable used outside (fictional)',['def mix():','    paint = "red"','mix()','print(paint)'])},
 {skill:'scope',say:'A variable made outside every function is global, and a function can read it. If a function assigns to a name, though, Python treats that name as a new local variable unless the function declares it with the global statement, so the global value stays the same. Reading a name in a function that also assigns to it later raises an UnboundLocalError. With global rate in the function, the assignment changes the global variable. Most programs pass values in and return results instead.',eq:'assignment makes a local unless global is declared',pic:board('Global rate = 3, five different functions',['def show(): print(rate)','def f(): rate = 9','def g(): rate = rate + 1','def h(): global rate; rate = rate + 1'],['reads the global: 3','a new local; the global stays 3','UnboundLocalError','changes the global rate to 4']),check:check(2,3,[3,8,11],'The v inside g is a new local variable, so the global v is still 3.',prog('Try-it code',['v = 3','def g():','    v = 8','g()','print(v)']))},
 {skill:'call',say:'A function can call another function, and a call is an expression that gives a value, so calls can be nested. In half(n) the body returns n // 2, and quarter(n) returns half(half(n)). For quarter(20), the inner call half(20) runs first and gives 10, then the outer call half(10) gives 5, so the answer is 5. While an inner call runs, the function that made the call waits, then carries on with the value that comes back.',eq:'quarter(20) = half(half(20)) = half(10) = 5',pic:{t:'figure',title:'quarter(n) returns half(half(n)), with n = 20',pts:{A1:[0,0],A2:[4,0],A3:[4,1.4],A4:[0,1.4],B1:[6,0],B2:[10,0],B3:[10,1.4],B4:[6,1.4],C1:[12,0],C2:[16,0],C3:[16,1.4],C4:[12,1.4],S:[4,0.7],T:[6,0.7],U:[10,0.7],V:[12,0.7]},hide:'A1 A2 A3 A4 B1 B2 B3 B4 C1 C2 C3 C4 S T U V',dots:'',polys:[{v:'A1A2A3A4',col:0,label:'half(20)'},{v:'B1B2B3B4',col:1,label:'gives 10'},{v:'C1C2C3C4',col:2,label:'half(10) = 5'}],segs:[{v:'ST',arrows:1,col:3},{v:'UV',arrows:1,col:3}]}},
 {skill:'call',say:'Decomposition means breaking a big problem into smaller parts and giving each part its own function. For a fictional report-card program, one function reads the scores, another finds their average, and a third turns the average into a letter. The main program only calls them in order. Small functions with one job each are easier to test, to fix and to reuse, and the code reads like a plan. A helper may be defined below the function that uses it, as long as it exists by the time the call runs.',eq:'one function, one job; main calls them in order',pic:tree('Decomposing a fictional report-card program','report_card()',['get_scores()','average()','letter()']),check:check(3,13,[13,11,12],'Each inc adds 1, and add3 applies it three times to 10.',prog('Try-it code',['def inc(n):','    return n + 1','def add3(n):','    return inc(inc(inc(n)))','print(add3(10))']))},
 {skill:'doc',say:'A docstring is a string literal written as the first statement in a function body, usually in triple quotes, that says what the function does. It does not print when the function runs, but Python keeps it, and perimeter.__doc__ gives it back. A comment starts with # and runs to the end of the line; Python ignores it completely. Use docstrings for what a function does and comments for why a step is done. A string placed after other statements is just an unused string, not a docstring.',eq:'"""docstring""" first in the body; # comment',pic:prog('A docstring and a comment (fictional)',['def perimeter(w, h):','    """Return the perimeter of a rectangle."""','    # add the four sides','    return 2 * (w + h)','print(perimeter.__doc__)'])},
 {skill:'builtin',say:'Python comes with built-in functions that need no import. len gives the number of characters in a string or items in a list. max and min give the largest and smallest of several values, or of one list. abs gives the distance from zero, so abs(-9) is 9. round(x) rounds to a whole number and returns an int, but exact halves go to the nearest even number (round half to even): round(2.5) is 2 and round(3.5) is 4. round(x, 2) keeps two decimals; avoid relying on exact ties there.',eq:'len, max, min, abs, round: no import needed',pic:{t:'setups',title:'Built-in calls and their results',head:'Call',cols:['Result'],rows:[['len("robot")','5'],['max(4, 11, 7)','11'],['abs(-9)','9'],['round(7.3)','7'],['round(2.5)','2'],['round(3.5)','4'],['round(3.14159, 2)','3.14']]},check:check(4,15,[15,11,19],'max(3, 8) is 8, min(3, 8) is 3 and abs(-4) is 4; add them.',prog('Try-it code',['print(max(3, 8) + min(3, 8) + abs(-4))']))},
 {skill:'math',say:'A module is a file of extra tools. Writing import math at the top of a program makes the math module available, and you reach its tools with a dot. math.sqrt(49) gives 7.0, always a float. math.floor(3.9) rounds down to 3 and math.ceil(3.1) rounds up to 4, both as whole numbers. math.pi is a constant close to 3.14159 and has no parentheses. Without the import, the name math does not exist and Python raises a NameError. sqrt of a negative number is a ValueError.',eq:'import math, then math.sqrt(x), math.floor(x), math.pi',pic:{t:'plot',title:'y = math.sqrt(x)',x:[0,16],y:[0,5],paths:[{pts:Array.from({length:33},(_,i)=>[i/2,Math.sqrt(i/2)]),label:'sqrt'}],points:[{x:4,y:2,label:'(4, 2)'},{x:9,y:3,label:'(9, 3)'},{x:1,y:1,label:'(1, 1)'}]}},
 {skill:'rec',say:'A recursive function calls itself. It needs a base case, an input simple enough to answer directly with no further call, and a recursive case that calls itself on a smaller input. The factorial of n is n times the factorial of n - 1, and the base case is fact(1) = 1. For fact(4), the calls go down to fact(1), and the answers come back up: 2 * 1 = 2, then 3 * 2 = 6, then 4 * 6 = 24. Each call is a separate run of the function with its own n.',eq:'fact(n) = n * fact(n - 1), base case fact(1) = 1',pic:board('Tracing fact(4)',['fact(4) = 4 * fact(3)','fact(3) = 3 * fact(2)','fact(2) = 2 * fact(1)','fact(1) = 1','back up: 2, then 6, then 24'],['the first call waits','the second call waits','the third call waits','the base case: no further call','each call finishes with its answer']),check:check(5,10,[10,4,24],'f(4) is 4 + f(3), which is 4 + 3 + f(2), and so on down to f(0) = 0.',prog('Try-it code',['def f(n):','    if n == 0:','        return 0','    return n + f(n - 1)','print(f(4))']))},
 {skill:'rec',say:'In countdown(3) below, each call prints its number and then calls countdown with a number one smaller; the call with n equal to 0 is the base case and prints Liftoff instead of calling again. That is four calls in all and the output is 3, 2, 1, Liftoff. Without a base case, or with a call that never moves toward it, the function would call itself until Python stops it with a RecursionError (by default after about 1000 nested calls).',eq:'every call moves toward the base case',pic:prog('A countdown (fictional)',['def countdown(n):','    if n == 0:','        print("Liftoff")','    else:','        print(n)','        countdown(n - 1)','countdown(3)'])},
 {skill:'rec',summary:true,say:'A function is defined with def and runs only when called. Parameters receive arguments by position, by keyword or from defaults. return sends a value back and ends the call, a function without one gives None, and print only shows text. Names assigned inside a function are local unless declared global. Break problems into small functions that call one another, describe each with a docstring, use built-ins and the math module, and give a recursive function a base case that every call moves toward.',eq:'def, parameters, return, scope, base case',pic:board('Unit 4 at a glance',['def name(params): defines; name(args) calls','keywords, defaults (defaults go last)','return hands a value back; none gives None','assigned inside = local; global to change','small functions, docstrings, import math','recursion: a base case and a smaller call'])}
],
/* Variables and types come from Unit 1, conditions from Unit 2, loops and range from Unit 3. */
progression:{requires:['cs-h-programming-python-loops'],operations:3,demand:'Trace short Python programs with functions: define and call them, match arguments to parameters including keyword and default values, tell return from print, predict local and global variable behaviour, follow functions that call functions, use docstrings, built-ins and the math module, and trace simple recursion.'},
items(add){
 const seen=new Set(TRY);let choice=0;
 const put=(skill,prompt,answer,pic,explanation)=>{if(seen.has(prompt))throw Error(`Repeated Python prompt: ${prompt}`);seen.add(prompt);add(skill,prompt,answer,pic||scene(prompt),explanation);};
 const mc=(skill,prompt,right,wrong,explanation)=>{const c=choose(right,wrong,choice++);put(skill,`${prompt} ${c.text}. Answer A, B or C.`,c.letter,null,explanation);};
 const num=(skill,code,ask,answer,explanation)=>put(skill,`Code: ${code} ${ask}`,answer,prog('Python code',codeLines(code)),explanation);
 const mcc=(skill,code,ask,right,wrong,explanation)=>{const c=choose(right,wrong,choice++);put(skill,`Code: ${code} ${ask} ${c.text}. Answer A, B or C.`,c.letter,prog('Python code',codeLines(code)),explanation);};
 const PR='What is printed?',RUN='What happens when the code runs?',LN='How many lines are printed?';
 /* defining and calling functions */
 for(const [p,r,w,e] of [
 ['Which line correctly starts the definition of a function named total?','def total():',['def total()','function total():'],'A definition needs def, a name, parentheses and a colon.'],
 ['When does the body of a function run?','each time the function is called',['when Python reads the def line','only once, when the program starts'],'Defining stores the function; only a call runs the body.'],
 ['What does Python do when it reaches a def statement?','it stores the function without running its body',['it runs the body once','it prints the name of the function'],'The body waits until the function is called.'],
 ['Which statement calls a function named show that takes no arguments?','show()',['show','def show()'],'A call is the name followed by parentheses; the bare name does nothing.'],
 ['What is the main reason to put repeated steps in a function?','the steps are written once and can be reused by calling the name',['the program then runs much faster','the steps can never contain errors'],'A function names a block of code so it can be reused instead of copied.']])mc('def',p,r,w,e);
 mcc('def',L('def hello():','    print("hi")','hello()','hello()'),PR,'hi then hi',['hi','hello then hello'],'Each call runs the body once, so hi is printed twice.');
 num('def',L('def line():','    print("-")','line()','line()','line()'),LN,3,'Three calls, one printed line each.');
 mcc('def',L('def ping():','    print("ping")','ping'),RUN,'prints nothing',['prints ping','NameError'],'The name without parentheses is not a call, so the body never runs.');
 mcc('def',L('show()','def show():','    print("hi")'),RUN,'NameError',['prints hi','prints nothing'],'The call comes before the def has run, so show does not exist yet.');
 num('def',L('def beep():','    print("b")','for i in range(4):','    beep()'),LN,4,'The loop calls beep four times.');
 mcc('def',L('def a():','    print("one")','def b():','    print("two")','b()','a()'),PR,'two then one',['one then two','two'],'The calls run in the order they are written, b first, then a.');
 mcc('def',L('def msg():','    print("A")','print("B")'),PR,'B',['A then B','A'],'msg is defined but never called, so only the last line prints.');
 mcc('def',L('def f():','    print("x")','f()','print("y")','f()'),PR,'x then y then x',['x then x then y','x then y'],'The calls and the print run in order.');
 mcc('def',L('def go():','print("go")','go()'),RUN,'IndentationError',['prints go','SyntaxError'],'The body of a function must be indented below the def line.');
 mcc('def',L('def go:','    print("go")','go()'),RUN,'SyntaxError',['IndentationError','NameError'],'The def line is missing its parentheses, which Python reports as a SyntaxError.');
 /* parameters, arguments and defaults */
 for(const [p,r,w,e] of [
 ['In def welcome(person):, what is person?','a parameter',['an argument','a return value'],'The names in the def line are parameters.'],
 ['In the call welcome("Mia"), what is "Mia"?','an argument',['a parameter','a docstring'],'The values in a call are arguments.'],
 ['What is a default value?','a value a parameter takes when the call leaves that argument out',['a value that cannot be changed','the value a function returns when it has no return'],'A default is written in the def line, as in exp=2.'],
 ['What is a keyword argument?','an argument written as name=value in the call',['an argument that must come first','a parameter that has a default'],'Keyword arguments name their parameter, so their order does not matter.']])mc('params',p,r,w,e);
 mc('params','Which function header is valid Python?','def f(a, b=1):',['def f(a=1, b):','def f(a b):'],'Parameters with defaults must come after those without, and parameters are separated by commas.');
 mcc('params',L('def pair(x, y):','    print(y, x)','pair("a", "b")'),PR,'b a',['a b','x y'],'The arguments go to x and y in order, and the function prints y first.');
 mcc('params',L('def pair(x, y):','    print(x, y)','pair(y=1, x=2)'),PR,'2 1',['1 2','TypeError'],'Keyword arguments name their parameters, so x is 2 and y is 1.');
 num('params',L('def pay(h, rate=15):','    print(h * rate)','pay(4)'),PR,60,'rate keeps its default 15, so 4 * 15 = 60.');
 num('params',L('def pay(h, rate=15):','    print(h * rate)','pay(rate=10, h=3)'),PR,30,'The keywords set h to 3 and rate to 10, so the product is 30.');
 mcc('params',L('def add(a, b):','    print(a + b)','add(5)'),RUN,'TypeError',['prints 5','prints 0'],'b has no default and no argument, so Python raises a TypeError.');
 mcc('params',L('def add(a, b):','    print(a + b)','add(1, 2, 3)'),RUN,'TypeError',['prints 3','prints 6'],'A call with too many arguments raises a TypeError.');
 mcc('params',L('def tag(text, mark="*"):','    print(mark + text + mark)','tag("hi")'),PR,'*hi*',['hi','hihi'],'mark is left out, so its default * goes on both sides.');
 mcc('params',L('def tag(text, mark="*"):','    print(mark + text + mark)','tag("hi", "#")'),PR,'#hi#',['*hi*','#hi'],'The second argument replaces the default.');
 mcc('params',L('x = 5','def f(a=x):','    print(a)','x = 9','f()'),PR,'5',['9','NameError'],'The default is worked out when the def line runs, when x was 5.');
 mcc('params',L('def f(a):','    print(a)','f(b=2)'),RUN,'TypeError',['prints 2','NameError'],'f has no parameter named b.');
 mcc('params',L('def f(a, b):','    print(a, b)','f(a=1, 2)'),RUN,'SyntaxError',['prints 1 2','TypeError'],'A positional argument may not follow a keyword argument.');
 mcc('params',L('def bump(n):','    n = n + 1','    print(n)','v = 5','bump(v)','print(v)'),PR,'6 then 5',['6 then 6','5 then 5'],'The parameter is a separate copy of the value, so v stays 5.');
 /* return, print and None */
 for(const [p,r,w,e] of [
 ['What does the return statement do?','it ends the function and hands a value back to the caller',['it shows the value on the screen','it stores the value in a global variable'],'return sends the value to the code that made the call.'],
 ['A function has no return statement. What value does a call to it produce?','None',['0','an empty string'],'A function that finishes without a return gives None.'],
 ['A student wants result = convert(5) to store the converted number. What must convert do with its answer?','return it',['only print it','define it as a global'],'print shows text, but only return gives the value back to be stored.'],
 ['What happens to the lines of a function body that come after a return that has been reached?','they are skipped',['they run before the return','they run on the next call'],'return ends the call at once.']])mc('ret',p,r,w,e);
 num('ret',L('def twice(n):','    return n * 2','print(twice(6))'),PR,12,'twice(6) returns 12 and print shows it.');
 mcc('ret',L('def twice(n):','    print(n * 2)','x = twice(6)','print(x)'),PR,'12 then None',['12','12 then 12'],'The function prints 12 but returns nothing, so x is None.');
 num('ret',L('def f(n):','    return n + 1','x = f(1)','y = f(x)','print(y)'),PR,3,'f(1) is 2 and f(2) is 3.');
 mcc('ret',L('def g():','    return 1','    print("never")','print(g())'),PR,'1',['never then 1','never'],'The return ends the call, so the print inside is never reached.');
 mcc('ret',L('def pos(n):','    if n > 0:','        return "yes"','    return "no"','print(pos(-4))'),PR,'no',['yes','None'],'The test fails, so the last return gives "no".');
 mcc('ret',L('def pos(n):','    if n > 0:','        return "yes"','print(pos(-4))'),PR,'None',['no','yes'],'The test fails and there is no later return, so the call gives None.');
 mcc('ret',L('def f():','    print("a")','    return 5','print(f())'),PR,'a then 5',['5','5 then a'],'The function prints a, returns 5, and the outer print shows 5.');
 mcc('ret',L('def total(a, b):','    a + b','print(total(2, 3))'),PR,'None',['5','TypeError'],'The sum is worked out and thrown away; without return the call gives None.');
 num('ret',L('def first_big():','    for n in range(1, 20):','        if n * n > 30:','            return n','print(first_big())'),PR,6,'5 * 5 is 25 and 6 * 6 is 36, so the return happens at n equal to 6.');
 mcc('ret',L('def a():','    return','print(a())'),PR,'None',['0','SyntaxError'],'A bare return ends the call and gives None.');
 num('ret',L('def sq(n):','    return n * n','print(sq(3) + sq(4))'),PR,25,'9 + 16 = 25; each call returns a value that can be used in a sum.');
 /* local and global scope */
 for(const [p,r,w,e] of [
 ['Where can a variable that is assigned inside a function be used?','only inside that function call',['anywhere in the program','only in the line just below it'],'Names assigned in a function are local to it.'],
 ['What is a global variable?','a variable created outside every function',['a variable that is a capital letter','a variable that every function must change'],'Global variables belong to the main program, and functions can read them.'],
 ['In which case does assigning to a name inside a function change the global variable of that name?','when the function declares the name with global',['always, because the names match','never, in any program'],'Without a global statement, an assignment makes a new local variable.'],
 ['Two different functions each create a variable named count. What is true?','each function has its own separate count',['they share one count','the second function raises an error'],'Local variables belong to their own function calls.']])mc('scope',p,r,w,e);
 mcc('scope',L('def setup():','    size = 4','setup()','print(size)'),RUN,'NameError',['prints 4','prints None'],'size was local to setup and no longer exists.');
 num('scope',L('rate = 3','def show():','    print(rate * 2)','show()'),PR,6,'The function reads the global rate, 3, and prints 6.');
 mcc('scope',L('n = 10','def f():','    n = 1','    print(n)','f()','print(n)'),PR,'1 then 10',['1 then 1','10 then 10'],'The n inside f is a separate local variable.');
 num('scope',L('count = 0','def bump():','    global count','    count = count + 1','bump()','bump()','print(count)'),PR,2,'global makes the function change the global count twice.');
 mcc('scope',L('count = 0','def bump():','    count = count + 1','bump()','print(count)'),RUN,'UnboundLocalError',['prints 1','prints 0'],'The assignment makes count local, so reading it first fails.');
 mcc('scope',L('x = 7','def f(x):','    return x + 1','print(f(2), x)'),PR,'3 7',['8 7','3 3'],'The parameter x is local and holds 2; the global x stays 7.');
 num('scope',L('total = 5','def add():','    total = 99','add()','print(total)'),PR,5,'The assignment inside add makes a local total, so the global one is unchanged.');
 num('scope',L('a = 2','def f(b):','    return a + b','a = 10','print(f(1))'),PR,11,'The global a is read when f runs, and by then it is 10.');
 mcc('scope',L('score = 0','def win(score):','    score = score + 10','    return score','print(win(score), score)'),PR,'10 0',['10 10','0 0'],'The parameter is a local copy; the global score stays 0.');
 mcc('scope',L('def f(v):','    return v * 2','f(4)','print(v)'),RUN,'NameError',['prints 8','prints 4'],'The parameter v exists only during the call.');
 /* functions calling functions, decomposition */
 for(const [p,r,w,e] of [
 ['What is decomposition?','breaking a big problem into smaller parts, each solved by its own function',['copying code to many places','removing all the comments'],'Decomposition makes a big problem manageable.'],
 ['A program must read three scores, find their average and print a grade. Which design is best decomposed?','one function for each job: get scores, average them, print the grade',['one very long function that does everything','three copies of the same code'],'One job per function keeps each part simple to test.'],
 ['When function a calls function b, what happens to a while b runs?','it waits until b finishes, then carries on',['it keeps running at the same time','it stops for good'],'The call is finished before the next step of a.'],
 ['Which is a benefit of small functions that each do one job?','each can be tested and fixed on its own',['the program needs no variables','the program can never raise errors'],'Separate small parts are easier to check and reuse.'],
 ['When must a helper function be defined so another function can call it?','before the call actually runs, even if its def is written lower down',['directly above the function that calls it, always','after the program has ended'],'Python looks the name up when the call runs.']])mc('call',p,r,w,e);
 num('call',L('def sq(n):','    return n * n','def sumsq(a, b):','    return sq(a) + sq(b)','print(sumsq(3, 4))'),PR,25,'sq(3) is 9 and sq(4) is 16, and 9 + 16 = 25.');
 num('call',L('def inc(n):','    return n + 1','def inc2(n):','    return inc(inc(n))','print(inc2(5))'),PR,7,'inc2 applies inc twice, so it adds 2 to 5.');
 mcc('call',L('def a():','    print("A")','def b():','    print("B1")','    a()','    print("B2")','b()'),PR,'B1 then A then B2',['A then B1 then B2','B1 then B2 then A'],'b prints B1, waits while a runs, then prints B2.');
 mcc('call',L('def outer():','    inner()','def inner():','    print("in")','outer()'),PR,'in',['nothing is printed','NameError'],'inner exists by the time outer runs, so the call works.');
 mcc('call',L('def outer():','    helper()','outer()'),RUN,'NameError',['prints nothing','prints helper'],'helper was never defined.');
 num('call',L('def two():','    return 2','def four():','    return two() * two()','print(four() + two())'),PR,6,'four() is 4, two() is 2, and 4 + 2 = 6.');
 num('call',L('def line():','    print("*")','def box():','    line()','    line()','    line()','box()','box()'),LN,6,'Each box call makes three line calls, and box is called twice.');
 mcc('call',L('def hi(n):','    return "Hi " + n','def shout(n):','    return hi(n).upper()','print(shout("bo"))'),PR,'HI BO',['Hi bo','HI bo'],'hi gives Hi bo and upper() makes all of it capitals.');
 num('call',L('def area(w, h):','    return w * h','def cost(w, h, price):','    return area(w, h) * price','print(cost(3, 4, 5))'),PR,60,'area is 12, and 12 * 5 = 60.');
 num('call',L('def f(n):','    return n + 1','def g(n):','    return f(n) * 2','print(f(g(3)))'),PR,9,'g(3) is 8, and f(8) is 9.');
 /* docstrings and comments */
 for(const [p,r,w,e] of [
 ['What is a docstring?','a string literal placed first in a function body to describe the function',['a comment that starts with #','the value that return sends back'],'Docstrings are kept by Python and read as __doc__.'],
 ['Which symbol begins a comment in Python?','#',['//','/*'],'A comment starts with # and runs to the end of the line.'],
 ['Which quotes are normally used for a docstring that spans several lines?','triple quotes ("""...""")',['single backticks','a pair of # signs'],'Triple-quoted strings can run over several lines.'],
 ['What effect does a # comment have when the program runs?','none: Python ignores it',['it is printed on the screen','it is returned by the function'],'Comments are only for human readers.'],
 ['Which text is the better docstring for def area(w, h): return w * h ?','Return the area of a rectangle w wide and h high.',['Does stuff.','w times h is a number'],'A good docstring says what the function does and what it returns.'],
 ['Where must a docstring be placed to count as one?','as the very first statement of the function body',['on the line after the function is called','at the end of the function body'],'Only a string that is the first statement is stored as the docstring.']])mc('doc',p,r,w,e);
 mcc('doc',L('def f():','    """Say hi."""','    print("hi")','f()'),PR,'hi',['Say hi.','Say hi. then hi'],'The docstring is not printed when the function runs.');
 mcc('doc',L('def f():','    """Say hi."""','    print("hi")','print(f.__doc__)'),PR,'Say hi.',['hi','None'],'__doc__ holds the docstring; f is never called.');
 mcc('doc',L('def f():','    print("hi")','print(f.__doc__)'),PR,'None',['hi','an empty line'],'With no docstring, __doc__ is None.');
 mcc('doc',L('def f():','    print("hi")','    """Say hi."""','print(f.__doc__)'),PR,'None',['Say hi.','hi'],'The string is not the first statement, so it is not a docstring.');
 num('doc',L('def add(a, b):','    # adds two numbers','    return a + b','print(add(1, 2))'),PR,3,'The comment is ignored.');
 num('doc',L('total = 10 # the start','total = total + 5 # add five','print(total)'),PR,15,'Both comments are ignored, so the total is 15.');
 num('doc',L('def f():','    """abc"""','    return 1','print(len(f.__doc__))'),PR,3,'The docstring is the text abc, which has 3 characters.');
 mcc('doc',L('def f():','    """Add."""','    return 0','print(f.__doc__ + "!")'),PR,'Add.!',['Add.','None!'],'The docstring text is joined with an exclamation mark.');
 /* built-in functions */
 for(const [p,r,w,e] of [
 ['Which built-in function returns the number of items in a string or list?','len',['count','size'],'len gives the length of a string or list.'],
 ['Which built-in returns the larger of two numbers?','max',['top','big'],'max returns the largest value.']])mc('builtin',p,r,w,e);
 mc('builtin','What does round(6.5) return in Python 3?','6',['7','6.5'],'Exact halves go to the nearest even whole number, which is 6.');
 mc('builtin','What does round(4.5) return in Python 3?','4',['5','4.5'],'4.5 is exactly halfway and 4 is even.');
 mc('builtin','What does round(5.5) return in Python 3?','6',['5','5.5'],'5.5 is exactly halfway and 6 is even.');
 mc('builtin','What does abs(3 - 10) return?','7',['-7','13'],'3 - 10 is -7 and abs removes the sign.');
 mc('builtin','What does len("python") return?','6',['5','7'],'The word has six characters.');
 mc('builtin','What does min(8, 3, 5) return?','3',['8','5'],'3 is the smallest value.');
 num('builtin',L('print(max(3, 9, 4) - min(3, 9, 4))'),PR,6,'max is 9 and min is 3, and 9 - 3 = 6.');
 num('builtin',L('word = "banana"','print(len(word) * 2)'),PR,12,'len is 6 and 6 * 2 = 12.');
 mcc('builtin',L('print(round(7.6), round(7.4))'),PR,'8 7',['7 7','8 8'],'7.6 rounds up to 8 and 7.4 rounds down to 7.');
 mcc('builtin',L('print(round(2.71828, 3))'),PR,'2.718',['2.71','2.719'],'Three decimals of 2.71828 are 2.718.');
 num('builtin',L('print(abs(-12) + abs(5))'),PR,17,'abs(-12) is 12 and abs(5) is 5, so the sum is 17.');
 mcc('builtin',L('print(max("apple", "pear"))'),PR,'pear',['apple','p'],'Strings compare alphabetically, and pear comes after apple.');
 num('builtin',L('print(min([4, 2, 9]))'),PR,2,'min of a list gives its smallest item.');
 mcc('builtin',L('print(round(0.5), round(1.5))'),PR,'0 2',['1 2','0 1'],'0.5 goes to even 0 and 1.5 goes to even 2.');
 mcc('builtin',L('print(len(5))'),RUN,'TypeError',['prints 1','prints 5'],'A number has no length.');
 num('builtin',L('def longest(a, b):','    return max(len(a), len(b))','print(longest("fig", "melon"))'),PR,5,'The lengths are 3 and 5.');
 mcc('builtin',L('print(abs(-2.5))'),PR,'2.5',['-2.5','2'],'abs removes the sign and keeps the decimal part.');
 /* the math module */
 mc('math','Which line makes math.sqrt available to a program?','import math',['include math','using math'],'Python modules are loaded with import.');
 mc('math','What type of value does math.sqrt(25) return?','a float',['an int','a string'],'sqrt always gives a float, here 5.0.');
 mc('math','What type of value does math.floor(7.9) return in Python 3?','an int',['a float','a string'],'floor gives a whole number as an int.');
 mc('math','What does math.floor do to a number?','rounds it down to the largest whole number not above it',['rounds it to the nearest whole number','removes its minus sign'],'floor(-2.1) is -3, not -2.');
 mc('math','What is math.pi?','a constant close to 3.14159, used without parentheses',['a function that returns 3','a string that holds "pi"'],'It is a value, so it is written math.pi.');
 mcc('math',L('import math','print(math.sqrt(81))'),PR,'9.0',['9','81.0'],'sqrt returns a float.');
 num('math',L('import math','print(math.floor(7.9))'),PR,7,'floor rounds 7.9 down to the whole number 7.');
 num('math',L('import math','print(math.floor(-2.1))'),PR,-3,'Rounding down goes toward the smaller number, -3.');
 num('math',L('import math','print(math.ceil(4.1))'),PR,5,'ceil rounds 4.1 up to the whole number 5.');
 mcc('math',L('import math','print(round(math.pi, 2))'),PR,'3.14',['3.1','3.142'],'Two decimals of pi are 3.14.');
 mcc('math',L('print(math.sqrt(16))'),RUN,'NameError',['prints 4.0','prints 4'],'math was never imported.');
 mcc('math',L('import math','print(math.sqrt(-4))'),RUN,'ValueError',['prints -2.0','prints 2.0'],'The square root of a negative number is outside the domain.');
 num('math',L('import math','r = 2','print(math.floor(math.pi * r * r))'),PR,12,'pi * 4 is about 12.57, rounded down to 12.');
 num('math',L('import math','print(int(math.sqrt(50)))'),PR,7,'sqrt(50) is about 7.07 and int() cuts it to 7.');
 mcc('math',L('import math','print(math.sqrt(9) + 1)'),PR,'4.0',['4','10'],'sqrt(9) is the float 3.0, and 3.0 + 1 is 4.0.');
 mcc('math',L('import math','print(math.pi())'),RUN,'TypeError',['prints 3.14','NameError'],'pi is a number, so calling it with parentheses raises a TypeError.');
 mcc('math',L('import math','print(sqrt(25))'),RUN,'NameError',['prints 5.0','prints 5'],'The name sqrt lives inside math and must be written math.sqrt.');
 mcc('math',L('import math','def hyp(a, b):','    return math.sqrt(a * a + b * b)','print(hyp(6, 8))'),PR,'10.0',['10','14.0'],'a * a + b * b is 100, and sqrt(100) is the float 10.0.');
 /* recursion */
 for(const [p,r,w,e] of [
 ['What is recursion?','a function that calls itself',['a loop that never ends','a function with no parameters'],'A recursive function solves a problem by calling itself on a smaller one.'],
 ['What is a base case?','the case where the function returns without calling itself',['the first line of the program','the largest input a function can take'],'The base case stops the chain of calls.'],
 ['What happens to a recursive function that has no base case?','it keeps calling itself until Python raises a RecursionError',['it returns 0','it runs exactly once'],'Python limits the depth of nested calls.'],
 ['Each recursive call should work on what?','a smaller version of the problem',['the same problem again','a bigger problem'],'Moving toward the base case ends the recursion.']])mc('rec',p,r,w,e);
 num('rec',L('def fact(n):','    if n <= 1:','        return 1','    return n * fact(n - 1)','print(fact(5))'),PR,120,'5 * 4 * 3 * 2 * 1 = 120.');
 num('rec',L('def total(n):','    if n == 0:','        return 0','    return n + total(n - 1)','print(total(5))'),PR,15,'5 + 4 + 3 + 2 + 1 + 0 = 15.');
 num('rec',L('def show(n):','    print(n)','    if n > 0:','        show(n - 1)','show(3)'),LN,4,'The calls use 3, 2, 1 and 0, and each prints once.');
 mcc('rec',L('def down(n):','    if n == 0:','        print("go")','        return','    print(n)','    down(n - 1)','down(3)'),PR,'3 then 2 then 1 then go',['go then 1 then 2 then 3','3 then 2 then 1'],'Each call prints before calling again; the base case prints go.');
 mcc('rec',L('def up(n):','    if n == 0:','        return','    up(n - 1)','    print(n)','up(3)'),PR,'1 then 2 then 3',['3 then 2 then 1','0 then 1 then 2 then 3'],'The print comes after the inner call, so the smallest n prints first.');
 mcc('rec',L('def f(n):','    return f(n + 1)','f(1)'),RUN,'RecursionError',['prints nothing','prints 1'],'There is no base case, so the calls never stop until Python gives up.');
 mcc('rec',L('def f(n):','    if n == 0:','        return 0','    return n + f(n - 2)','print(f(5))'),RUN,'RecursionError',['prints 9','prints 0'],'n goes 5, 3, 1, -1 and never equals 0.');
 num('rec',L('def digits(n):','    if n < 10:','        return 1','    return 1 + digits(n // 10)','print(digits(4821))'),PR,4,'4821, 482, 48 and 4 make four calls.');
 num('rec',L('def pw(b, e):','    if e == 0:','        return 1','    return b * pw(b, e - 1)','print(pw(2, 6))'),PR,64,'2 multiplied six times is 64.');
 mcc('rec',L('def fib(n):','    if n < 2:','        return n','    return fib(n - 1) + fib(n - 2)','print(fib(6))'),PR,'8',['6','13'],'The values go 0, 1, 1, 2, 3, 5, 8.');
 mcc('rec',L('def rev(s):','    if s == "":','        return ""','    return rev(s[1:]) + s[0]','print(rev("tab"))'),PR,'bat',['tab','abt'],'Each call puts its first letter after the reversed rest.');
}
};
