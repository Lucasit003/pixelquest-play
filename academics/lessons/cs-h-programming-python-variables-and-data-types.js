/* Intro to Programming (Python) Unit 1, Variables and Data Types. A standards-based course (CSTA K-12 Computer Science Standards, 2017,
   levels 3A/3B), not an AP course. Python 3 only: variables and assignment, int/float/str/bool and type(), conversion with int()/float()/str(),
   arithmetic with // % ** and precedence, strings (concatenation, repetition, len, indexing, slicing), f-strings, print() with sep and end,
   input() returning a string, and the common errors (TypeError, NameError, SyntaxError, ValueError, ZeroDivisionError, IndexError).
   Original wording. Worked examples (score = 10 then score = score + 5, a swap of 3 and 7, type(42), int("42"), int(3.9), 17 // 5 and 17 % 5,
   2 ** 3 ** 2, "ab" * 3, "python" indexing and slicing, print sep and end, f"{3.14159:.2f}", input() typed 16, "5" + 3) and the five Try-its
   are reserved and never appear in the pool. Every code question is one program of ; separated statements, one per line in the picture. */
const board=(title,lines,why)=>({t:'board',title,lines,...(why?{why}:{})});
const prog=(title,lines)=>({t:'program',title,lines:lines.map((l,i)=>`${i+1}. ${l}`)});
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const scene=p=>{const lines=[];let line='';for(const word of p.split(/ [ABC]: /)[0].split(' ')){if((line+' '+word).length>49){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the question',lines.slice(0,7));};
const cells=(word,title,seg)=>{const n=word.length,pts={},names=[];for(let i=0;i<=n;i++){pts[`P${i}`]=[i,1];pts[`Q${i}`]=[i,0];names.push(`P${i}`,`Q${i}`);}
 const notes=[...word].flatMap((_,i)=>[{at:[i+0.5,-0.5],text:String(i)},{at:[i+0.5,1.5],text:String(i-n)}]);
 if(seg){pts.U1=[seg[0],-1.3];pts.U2=[seg[1],-1.3];names.push('U1','U2');}
 return {t:'figure',title,pts,hide:names.join(' '),dots:'',polys:[...word].map((ch,i)=>({v:`P${i}P${i+1}Q${i+1}Q${i}`,col:i%3,label:ch})),segs:seg?[{v:'U1U2',col:1,label:seg[2],side:-1}]:[],notes};};
const TRY=[
 'Code: print(int("8") + int(9.7)) What is printed?',
 'Code: print(7 + 2 * 3 ** 2 // 4) What is printed?',
 'Code: word = "mountain"; print(word[-4:] + word[:2]) What is printed?',
 'Code: s = input(); print(s * 3) The user types 12. What is printed?',
 'Code: a = 4; b = a + 1; c = "x" + b; print(c) On which numbered line does the first error happen?'];
const codeLines=code=>code.split(/;\s+/);
const check=(i,answer,options,hint,pic)=>({prompt:`Try it: ${TRY[i]}`,answer,options,hint,pic});
export default {
id:'cs-h-programming-python-variables-and-data-types',subject:'cs',level:5,grade:9,standard:'CSTA K-12 Computer Science Standards (2017), levels 3A and 3B: Algorithms and Programming: variables, data types, program development and testing concepts',title:'Variables and Data Types',
skills:{vars:'Variables and assignment',types:'Data types and conversion',arith:'Arithmetic and operator precedence',strs:'Strings: joining, indexing and slicing',io:'Input, output and f-strings',errs:'Common errors'},
outline:[['CSTA Algorithms and Programming: variables','Create prototypes that use algorithms to solve computational problems (variables and assignment hold the data)',['vars']],['CSTA Algorithms and Programming: data types','Choose the right way to store data (simple variables and their types)',['types']],['CSTA Algorithms and Programming: operators','Expressions and operators (arithmetic and precedence)',['arith']],['CSTA Algorithms and Programming: strings','Working with text (strings, indexing and slicing)',['strs']],['CSTA Algorithms and Programming: input and output','Input, output and formatted strings',['io']],['CSTA Program Development: testing and debugging','Reading error messages and finding errors',['errs']]],
steps:[
 {skill:'vars',say:'A variable is a name that refers to a value your program remembers. In Python you create one with an assignment statement: the name goes on the left of a single equals sign and the value on the right. The equals sign means store, not "is equal to". Python works out the right side first and then stores the result, so score = score + 5 reads the old value of score, adds 5 and stores the answer back under the same name.',eq:'name = value',pic:{t:'setups',title:'Fictional game: what score holds after each statement',head:'Statement',cols:['score is now'],rows:[['score = 10','10'],['score = score + 5','15'],['score = score * 2','30']]}},
 {skill:'vars',say:'A variable name can use letters, digits and underscores, but it cannot start with a digit, contain spaces or hyphens, or be a Python keyword such as class. Python is case sensitive, so score and Score are two different names. Python reads assignments one line at a time, top to bottom, and a later assignment replaces the earlier value. To swap two variables you can use a temporary variable, or write a, b = b, a, which evaluates the whole right side before storing anything.',eq:'a, b = b, a swaps two values',pic:prog('Swap a and b (a is 3, b is 7)',['a = 3','b = 7','t = a','a = b','b = t','print(a, b)']),},
 {skill:'types',say:'Every value in Python has a type. The four basic types are int for whole numbers, float for numbers with a decimal point, str (string) for text in quotation marks, and bool for the two truth values True and False, which are spelled with a capital letter. The same digits can be different types: 42 is an int, 42.0 is a float and "42" is a str, and they behave differently when you do arithmetic.',eq:'int, float, str, bool',pic:{t:'setups',title:'The four basic types',head:'Type',cols:['Holds','Example'],rows:[['int','whole numbers','42'],['float','decimal numbers','3.14'],['str','text','"Hi"'],['bool','True or False','True']]}},
 {skill:'types',say:'The built-in function type() tells you the type of any value, and print shows it as a class. Quotation marks are what make a value a string, so type("7") is str even though it looks like a number. Python decides the type from how the value is written, and you never declare it: the same variable name can later refer to a value of a different type.',eq:'type(value) shows the type',pic:board('Asking Python for a type',['type(42)  →  <class \'int\'>','type(3.0)  →  <class \'float\'>','type("7")  →  <class \'str\'>','type(True)  →  <class \'bool\'>'],['a whole number','a decimal point makes a float','quotation marks make a str','capital T, no quotes'])},
 {skill:'types',say:'You change a value from one type to another with a conversion function: int(), float() and str(). int() turns a string of digits into a whole number, and applied to a float it cuts off the decimal part toward zero instead of rounding, so int(3.9) is 3 and int(-3.9) is -3. float() makes a decimal number, and str() makes text, which is how you join a number to words. int("abc") fails with a ValueError because the text is not a whole number.',eq:'int() cuts the decimal part; str() makes text',pic:board('Converting types',['int("42")  →  42','int(3.9)  →  3','int(-3.9)  →  -3','float(7)  →  7.0','str(12) + "!"  →  "12!"'],['text of digits to an int','truncates, not rounds','toward zero','an int becomes a float','a number becomes text to join']),check:check(0,17,[17,18,16],'Convert each piece first: 8, then the float 9.7 cut to 9, then add.',board('Try-it conversions',['int("8")  →  ?','int(9.7)  →  ?','add the two whole numbers']))},
 {skill:'arith',say:'Python has the usual operators + - * and /, and the division operator / always gives a float, even when the answer is whole: 8 / 2 is 4.0 and 7 / 2 is 3.5. Adding, subtracting or multiplying two ints gives an int, but a float anywhere in the expression makes the result a float. Python also has two special division operators, shown in the next step, that work with whole numbers.',eq:'/ always gives a float',pic:{t:'setups',title:'Basic arithmetic',head:'Expression',cols:['Result','Type'],rows:[['7 + 2','9','int'],['7 * 2','14','int'],['7 / 2','3.5','float'],['8 / 2','4.0','float'],['7 + 2.0','9.0','float']]}},
 {skill:'arith',say:'Floor division // divides and rounds the answer down to a whole number, and the modulo operator % gives the remainder. Together they split a number into whole groups and what is left over: 17 // 5 is 3 and 17 % 5 is 2, because 3 × 5 + 2 = 17. With negative numbers, // rounds toward negative infinity, not toward zero, so -17 // 5 is -4, and the remainder takes the sign of the divisor, so -17 % 5 is 3 while 17 % -5 is -3.',eq:'a = (a // b) * b + a % b',pic:board('Floor division and remainder',['17 // 5  →  3','17 % 5  →  2','-17 // 5  →  -4','-17 % 5  →  3','17 % -5  →  -3'],['3 whole fives fit in 17','what is left after 3 fives','rounds down, toward -infinity','-4 × 5 + 3 = -17','the sign follows the divisor'])},
 {skill:'arith',say:'The power operator ** raises a number to an exponent: 2 ** 3 is 8. Python follows the usual order of operations: parentheses first, then **, then * / // % from left to right, then + and - from left to right. Chained ** works from the right, so 2 ** 3 ** 2 is 2 ** 9 = 512, and ** binds tighter than a minus sign in front of it, so -2 ** 2 is -4 while (-2) ** 2 is 4. When in doubt, add parentheses.',eq:'() then ** then * / // % then + -',pic:board('Order of operations',['2 ** 3  →  8','2 ** 3 ** 2  →  512','-2 ** 2  →  -4','(-2) ** 2  →  4','2 + 3 * 4 ** 2  →  50'],['2 × 2 × 2','the right ** first: 3 ** 2 = 9','the minus applies after the power','parentheses make -2 the base','16, then 48, then 50']),check:check(1,11,[11,16,11.5],'Power first (3 ** 2 = 9), then 2 * 9 = 18, then 18 // 4, then add 7.',board('Try-it order',['3 ** 2  →  ?','2 * that  →  ?','that // 4  →  ?','7 + that  →  ?']))},
 {skill:'strs',say:'A string is a sequence of characters inside single or double quotation marks. The + operator joins two strings (concatenation), the * operator repeats a string when the other operand is an int, and len() counts the characters, including spaces and punctuation. Joining a string and a number with + is an error, so convert the number with str() first. Strings also have methods such as upper(), lower(), strip(), replace(), count() and find(), which return a new string or value and leave the original unchanged.',eq:'+ joins, * repeats, len() counts',pic:board('Working with text',['"ab" + "cd"  →  "abcd"','"ab" * 3  →  "ababab"','len("hello world")  →  11','"hello".upper()  →  "HELLO"'],['concatenation','repetition','the space counts as a character','a method returns a new string'])},
 {skill:'strs',say:'Each character in a string has an index, and Python counts from 0, so the first character is s[0]. Negative indices count from the end: s[-1] is the last character and s[-2] the one before it. For a string of length n the valid positions are 0 to n - 1 and -1 to -n, and anything else raises an IndexError. Here "python" has length 6, so s[5] and s[-1] are both "n", while s[6] is an error.',eq:'first is s[0]; last is s[-1]',pic:cells('python','The string "python" has length 6')},
 {skill:'strs',say:'A slice s[start:stop] copies the characters from index start up to but not including index stop, so the result has stop - start characters. Leaving out start means from the beginning and leaving out stop means to the end. A third number sets the step: s[::2] takes every second character and s[::-1] walks backwards through the whole string. Unlike an index, a slice never raises an IndexError, because out-of-range ends are simply clipped.',eq:'s[start:stop] stops before stop',pic:cells('python','s = "python": the slice s[1:4] is "yth"',[1,4,'s[1:4]']),check:check(2,'tainmo',['tainmo','mounmo','motain'],'Negative start -4 means the last four characters; [:2] is the first two.',prog('Try-it code',['word = "mountain"','print(word[-4:] + word[:2])']))},
 {skill:'io',say:'print() shows values on the screen. When you give it several values it puts a single space between them (the sep parameter) and ends with a new line (the end parameter), and you can change either one by naming it. With sep="-" the values are separated by hyphens, and with end="" the next print continues on the same line. Notice that the names sep and end must be written out, because they come after the values.',eq:'print(..., sep=" ", end="\\n")',pic:board('Controlling print',['print("a", "b")  →  a b','print("a", "b", sep="-")  →  a-b','end="!" then print("Now")  →  Go!Now'],['one space','sep swaps it','end swaps the new line'])},
 {skill:'io',say:'An f-string is a string with the letter f in front of the opening quotation mark. Anything inside curly braces is evaluated and put into the text, so f"{name} is {age + 1}" can use variables and whole expressions without calling str(). A format specifier after a colon controls how a number looks: {x:.2f} shows x as a decimal number with exactly two digits after the point, rounding as needed, so f"{3.14159:.2f}" gives 3.14.',eq:'f"text {expression:.2f}"',pic:board('f-strings',['name = "Ada"; age = 16','f"{name} is {age}"  →  Ada is 16','f"next year: {age + 1}"  →  next year: 17','f"{3.14159:.2f}"  →  3.14'],['values slot into the braces','any variable can be used','an expression is calculated first','two digits after the point'])},
 {skill:'io',say:'The input() function pauses the program, waits for the user to type a line and press Enter, and returns what was typed as a string, always, even if the user typed digits. To do arithmetic you must convert it, for example int(input()) for a whole number or float(input()) for a decimal. If age holds the string "16", then age + 1 is a TypeError, but int(age) + 1 is 17. A prompt such as input("Age? ") is shown before the program waits.',eq:'input() always returns a str',pic:{t:'timeline',events:['input("Age? ") waits','user types 16','age holds the str "16"','int(age) makes the int 16','int(age) + 1 is 17']},check:check(3,121212,[121212,36,1212],'input() gives the string "12", and a string times 3 repeats it.',prog('Try-it code (the user types 12)',['s = input()','print(s * 3)']))},
 {skill:'errs',say:'Python reports problems as errors with a name and a message, and the last line of the traceback tells you the most. A SyntaxError means the code breaks the grammar of the language, and it is found before anything runs. A NameError means a name was used before it was assigned (check spelling and capital letters). A TypeError means an operation does not work for those types, such as adding a str and an int. A ValueError means the type is right but the value is not, as in int("abc"). A ZeroDivisionError and an IndexError have the meanings their names suggest.',eq:'read the last line of the error',pic:{t:'setups',title:'Common errors',head:'Code',cols:['Error','Why'],rows:[['"5" + 3','TypeError','str plus int'],['print(scor)','NameError','never assigned'],['print("hi"','SyntaxError','missing )'],['int("abc")','ValueError','not a number'],['"cat"[3]','IndexError','only 0, 1, 2'],['5 / 0','ZeroDivisionError','cannot divide by 0']]},check:check(4,3,[3,2,4],'Run the lines in order; the first line where Python cannot do the operation is the answer.',prog('Try-it code',['a = 4','b = a + 1','c = "x" + b','print(c)']))},
 {skill:'errs',summary:true,say:'Variables store values under names, and every value has a type that decides what you can do with it: int, float, str and bool, converted with int(), float() and str(). Arithmetic follows an order of operations, / always gives a float, and // and % split a number into groups and a remainder. Strings are indexed from 0, sliced with start:stop, and built with f-strings. input() always returns a str. When something goes wrong, read the last line of the error and trace the code one line at a time.',eq:'name → value → type → operation → output',pic:board('Unit 1 at a glance',['variable = value, read right side first','type() tells int, float, str or bool','/ is a float; // floors; % is the remainder','strings: index from 0, slice stops before stop','input() gives a str; convert with int()','errors: read the last line'])}
],
/* A first Python course is open to a beginner: no earlier topic is required. */
progression:{requires:[],operations:3,demand:'Trace short Python programs one line at a time, choose and convert types, evaluate arithmetic and string expressions exactly, format output, and name and fix common errors.'},
items(add){
 const seen=new Set(TRY);let choice=0;
 const put=(skill,prompt,answer,pic,explanation)=>{if(seen.has(prompt))throw Error(`Repeated Python prompt: ${prompt}`);seen.add(prompt);add(skill,prompt,answer,pic||scene(prompt),explanation);};
 const mc=(skill,prompt,right,wrong,explanation)=>{const c=choose(right,wrong,choice++);put(skill,`${prompt} ${c.text}. Answer A, B or C.`,c.letter,null,explanation);};
 const ti=(code,ext)=>ext?`${code} The user types ${ext}.`:code;
 const num=(skill,code,ask,answer,explanation,typed)=>put(skill,`Code: ${ti(code,typed)} ${ask}`,answer,prog('Python code',codeLines(code)),explanation);
 const mcc=(skill,code,ask,right,wrong,explanation,typed)=>{const c=choose(right,wrong,choice++);put(skill,`Code: ${ti(code,typed)} ${ask} ${c.text}. Answer A, B or C.`,c.letter,prog('Python code',codeLines(code)),explanation);};
 const PR='What is printed?',RUN='What happens when the code runs?',LN='How many lines are printed?',FIRST='On which numbered line does the first error happen?';
 /* variables and assignment */
 for(const [p,r,w,e] of [
 ['What does the statement total = 12 do in Python?','it stores the value 12 in a variable named total',['it asks whether total is equal to 12','it promises that total can never change'],'A single equals sign is assignment: the value on the right is stored under the name on the left.'],
 ['In Python, which operator tests whether two values are equal?','==',['=','!='],'A single = assigns, while == compares and gives True or False.'],
 ['Which of these is a valid Python variable name?','total_score',['2nd_place','total score'],'A name cannot start with a digit or contain a space; underscores are allowed.'],
 ['Which of these cannot be used as a variable name because it is a Python keyword?','class',['Class','klass'],'class is reserved by the language; Class is a different, legal name because Python is case sensitive.'],
 ['A program runs Score = 5 and then print(score). What happens?','a NameError, because score is a different name from Score',['it prints 5','it prints 0'],'Python is case sensitive, so score was never assigned.'],
 ['Which line is a comment that Python ignores when the program runs?','# add the tax here',['// add the tax here','-- add the tax here'],'A Python comment starts with a hash sign.'],
 ['Which variable name follows the usual Python style for a name made of two words?','max_speed',['max-speed','Max Speed'],'Python style joins words with underscores; a hyphen would be read as a minus sign and a space is not allowed.'],
 ['Which description of a variable is best?','a name that refers to a value the program can use and change',['a command that prints a value on the screen','a value that can never be changed']
  ,'A variable is a name attached to a value, and a later assignment can attach the name to a new value.']])mc('vars',p,r,w,e);
 num('vars','m = 6; n = m; m = 20; print(n)',PR,6,'n received the value 6 when it was assigned, so changing m later does not change n.');
 num('vars','a = 5; a = a + 3; a = a * 2; print(a)',PR,16,'a is 5, then 8, then 16.');
 num('vars','count = 0; count += 4; count -= 1; print(count)',PR,3,'count is 0, then 4, then 3.');
 num('vars','x = 7; x = x * x - 9; print(x)',PR,40,'The right side is 7 * 7 - 9 = 40, which is stored in x.');
 num('vars','p = 2; q = 3; p = q; q = p; print(p + q)',PR,6,'After p = q both are 3, so q = p changes nothing and the sum is 6.');
 mcc('vars','a = 8; b = 1; t = a; a = b; b = t; print(a, b)',PR,'1 8',['8 1','1 1'],'t keeps 8, a becomes 1, then b becomes 8, so a and b are swapped.');
 num('vars','x, y = 4, 9; x, y = y, x; print(x - y)',PR,5,'After the swap x is 9 and y is 4, so x - y = 5.');
 num('vars','r = s = 5; r += 1; print(r + s)',PR,11,'r and s both start at 5; only r grows to 6, so the sum is 11.');
 num('vars','w = 10; w *= 3; w //= 4; print(w)',PR,7,'w is 10, then 30, then 30 // 4 = 7.');
 num('vars','n = 5; n **= 2; n -= 5; print(n)',PR,20,'n is 5, then 25, then 20.');
 mcc('vars','a = 1; b = 2; a, b = b, a + b; print(a, b)',PR,'2 3',['2 4','3 3'],'The whole right side is evaluated first using the old values: (2, 1 + 2) = (2, 3).');
 num('vars','first = 2; second = first + 1; first = 10; print(second)',PR,3,'second was calculated from the old first, so it stays 3.');
 mcc('vars','price = 8; tax = price * 0.5; price = price + tax; print(price)',PR,'12.0',['12','8.0'],'tax is 4.0 (a float), so price becomes 8 + 4.0 = 12.0.');
 num('vars','x = 5; print(x); x = x + 1; print(x)',LN,2,'Two print calls run, so two lines are printed (5 and then 6).');
 /* types and conversion */
 for(const [p,r,w,e] of [
 ['Which Python type is the value 3.0?','float',['int','str'],'A number written with a decimal point is a float, even when the decimal part is zero.'],
 ['In Python, the value "42" with quotation marks has which type?','str',['int','float'],'Quotation marks make a string, whatever is inside them.'],
 ['Which Python type is the value True?','bool',['str','int'],'True and False are the two bool values.'],
 ['Which of these values is a bool?','False',['"False"','0'],'False with a capital F and no quotation marks is a bool; "False" is a string.'],
 ['Which type is best for storing the number of pets a person owns?','int',['float','str'],'A count is a whole number.'],
 ['Which type is best for storing a price such as 4.99?','float',['int','bool'],'A price has a decimal part.'],
 ['Which type is best for a phone number such as 555-0100 that you will never do arithmetic on?','str',['int','float'],'It contains a hyphen and is an identifier, not a quantity, so it is stored as text.'],
 ['Which function tells you the type of a value?','type()',['kind()','typeof()'],'Python spells it type().'],
 ['What does int(7.8) return?','7, because the decimal part is cut off',['8, because it rounds to the nearest whole number','7.8, because it keeps the decimal part'],'int() truncates a float toward zero; it does not round.'],
 ['Which function turns the number 25 into the text "25"?','str()',['int()','float()'],'str() converts a value to a string.']])mc('types',p,r,w,e);
 mcc('types','print(type(2.5))',PR,"<class 'float'>",["<class 'int'>","<class 'str'>"],'2.5 has a decimal point, so it is a float.');
 mcc('types','print(type("2.5"))',PR,"<class 'str'>",["<class 'float'>","<class 'int'>"],'The quotation marks make it a string.');
 mcc('types','print(type(10 > 3))',PR,"<class 'bool'>",["<class 'int'>","<class 'str'>"],'A comparison gives True or False, which is a bool.');
 mcc('types','print(type(6 / 3))',PR,"<class 'float'>",["<class 'int'>","<class 'bool'>"],'The / operator always gives a float, so 6 / 3 is 2.0.');
 mcc('types','print(type(6 // 3))',PR,"<class 'int'>",["<class 'float'>","<class 'str'>"],'Floor division of two ints gives an int.');
 num('types','print(int("19") + 1)',PR,20,'int("19") is 19, and 19 + 1 = 20.');
 num('types','print(int(-8.9))',PR,-8,'int() cuts the decimal part toward zero, so -8.9 becomes -8.');
 mcc('types','print(float("2") + 1)',PR,'3.0',['3','21'],'float("2") is 2.0, and 2.0 + 1 = 3.0.');
 mcc('types','print(str(5) + str(6))',PR,'56',['11','5 6'],'str() makes the text "5" and "6", and + joins them.');
 mcc('types','print(bool(0), bool(7))',PR,'False True',['False False','True True'],'bool(0) is False and any nonzero number is True.');
 mcc('types','print(bool(""), bool("no"))',PR,'False True',['True True','False False'],'An empty string is False; any non-empty string, even "no", is True.');
 num('types','print(float(4) / 8)',PR,0.5,'float(4) is 4.0, and 4.0 / 8 = 0.5.');
 num('types','x = "7"; y = int(x) * 3; print(y)',PR,21,'int(x) is the number 7, and 7 * 3 = 21.');
 num('types','print(int("12") // 5)',PR,2,'12 // 5 rounds down to 2.');
 mcc('types','print(str(3.0))',PR,'3.0',['3','"3.0"'],'str() of the float 3.0 is the text 3.0, which print shows without quotation marks.');
 /* arithmetic */
 for(const [p,r,w,e] of [
 ['Which operator performs floor division in Python?','//',['/','%'],'// divides and rounds down to a whole number.'],
 ['Which operator gives the remainder after division?','%',['//','**'],'The modulo operator % gives the remainder.'],
 ['Which operator raises a number to a power in Python?','**',['^','*'],'Python uses ** for powers.'],
 ['The result of the / operator in Python 3 is always which type?','float',['int','str'],'Even 8 / 2 gives the float 4.0.'],
 ['In the expression 8 - 2 ** 2, which part does Python evaluate first?','2 ** 2',['8 - 2','the whole expression from left to right'],'The power operator ** comes before subtraction.'],
 ['Which expression is True when the whole number n is even?','n % 2 == 0',['n // 2 == 0','n ** 2 == 0'],'An even number leaves remainder 0 when divided by 2.'],
 ['For a positive whole number x, what does x % 10 give?','its last digit',['its first digit','the number of digits'],'Dividing by 10 leaves the ones digit as the remainder.']])mc('arith',p,r,w,e);
 num('arith','print(29 // 6)',PR,4,'6 fits into 29 four times (24), so 29 // 6 = 4.');
 num('arith','print(29 % 6)',PR,5,'6 fits into 29 four times (24), and 29 - 24 leaves 5.');
 num('arith','print(45 / 4)',PR,11.25,'Dividing 45 by 4 gives 11.25 as a float.');
 mcc('arith','print(45 / 5)',PR,'9.0',['9','8.0'],'The / operator always gives a float, so 45 / 5 is 9.0.');
 num('arith','print(2 ** 5)',PR,32,'2 × 2 × 2 × 2 × 2 = 32.');
 num('arith','print(3 ** 4)',PR,81,'Multiplying four threes together gives 3 × 3 × 3 × 3 = 81.');
 mcc('arith','print(9 ** 0.5)',PR,'3.0',['4.5','81.0'],'An exponent of 0.5 is a square root, and the result is a float.');
 num('arith','print(10 - 4 * 2)',PR,2,'Multiplication first: 4 * 2 = 8, then 10 - 8 = 2.');
 num('arith','print((10 - 4) * 2)',PR,12,'Parentheses first: 6 * 2 = 12.');
 num('arith','print(2 + 3 ** 2 * 2)',PR,20,'3 ** 2 = 9, then 9 * 2 = 18, then 2 + 18 = 20.');
 num('arith','print(100 // 7 % 4)',PR,2,'// and % are on the same level, so left to right: 100 // 7 = 14, then 14 % 4 = 2.');
 num('arith','print(-9 // 4)',PR,-3,'-9 / 4 is -2.25, and floor division rounds down to -3.');
 num('arith','print(-9 % 4)',PR,3,'-9 = (-3) × 4 + 3, so the remainder is 3.');
 num('arith','print(9 % -4)',PR,-3,'9 = (-3) × (-4) + (-3), so the remainder takes the sign of the divisor: -3.');
 num('arith','print(2 ** 2 ** 3)',PR,256,'** works from the right: 2 ** 3 = 8, then 2 ** 8 = 256.');
 num('arith','print(-3 ** 2)',PR,-9,'The power happens first, 3 ** 2 = 9, and then the minus gives -9.');
 num('arith','print(7 + 8 // 3 * 2 - 1)',PR,10,'8 // 3 = 2, then 2 * 2 = 4, then 7 + 4 - 1 = 10.');
 mcc('arith','print(20 / 4 + 1)',PR,'6.0',['6','5.0'],'20 / 4 is the float 5.0, and 5.0 + 1 = 6.0.');
 mcc('arith','print(17 // 2.0)',PR,'8.0',['8','8.5'],'A float operand makes // give a float: 8.0.');
 num('arith','print(7.5 % 2)',PR,1.5,'7.5 = 3 × 2 + 1.5, so the remainder is 1.5.');
 mcc('arith','minutes = 135; print(minutes // 60, minutes % 60)',PR,'2 15',['2 135','2.25 15'],'135 minutes is 2 whole hours (120) and 15 minutes left over.');
 num('arith','n = 4829; print(n % 10)',PR,9,'The remainder after dividing by 10 is the last digit, 9.');
 num('arith','n = 4829; print(n // 100)',PR,48,'4829 // 100 drops the last two digits, leaving 48.');
 num('arith','total = 17; groups = total // 5; left = total % 5; print(groups * 5 + left)',PR,17,'groups is 3 and left is 2, and 3 * 5 + 2 rebuilds 17.');
 /* strings */
 for(const [p,r,w,e] of [
 ['What is the index of the first character of a Python string?','0',['1','-1'],'Python counts positions from 0.'],
 ['Which index refers to the last character of any non-empty string s?','-1',['0','len(s)'],'s[-1] is the last character; s[len(s)] is one past the end and is an IndexError.'],
 ['Strings in Python are immutable. What does that mean?','a string cannot be changed in place; operations make new strings',['a string can only hold digits','a string cannot be printed'],'You can build a new string, but s[0] = "x" is a TypeError.'],
 ['In the slice s[2:5], which index is NOT included in the result?','5',['2','3'],'A slice stops before the stop index.'],
 ['Which operator joins two strings together?','+',['*','&'],'The + operator concatenates strings.'],
 ['What does the * operator do when one operand is a string and the other is an int?','it repeats the string that many times',['it multiplies the letters together','it raises a TypeError'],'"ha" * 3 is "hahaha".']])mc('strs',p,r,w,e);
 mcc('strs','print("ha" * 3)',PR,'hahaha',['ha3','hhhaaa'],'The string "ha" is repeated three times.');
 mcc('strs','print("-" * 5 + ">")',PR,'----->',['-5>','-----'],'Repetition happens before joining: five hyphens, then >.');
 num('strs','print(len("data science"))',PR,12,'4 + 1 + 7 = 12 characters; the space counts.');
 num('strs','print(len("hello" + "!"))',PR,6,'"hello!" has 6 characters.');
 num('strs','print(len(""))',PR,0,'The empty string has no characters.');
 mcc('strs','w = "planet"; print(w[0])',PR,'p',['l','planet'],'Index 0 is the first character.');
 mcc('strs','w = "planet"; print(w[3])',PR,'n',['a','e'],'p0 l1 a2 n3: index 3 is n.');
 mcc('strs','w = "planet"; print(w[-1])',PR,'t',['p','e'],'-1 is the last character.');
 mcc('strs','w = "planet"; print(w[-2])',PR,'e',['t','n'],'-2 is the second from the end.');
 mcc('strs','w = "planet"; print(w[1:4])',PR,'lan',['pla','lane'],'Indexes 1, 2 and 3 are l, a and n.');
 mcc('strs','w = "planet"; print(w[:3])',PR,'pla',['plan','ane'],'From the start up to but not including index 3.');
 mcc('strs','w = "planet"; print(w[2:])',PR,'anet',['plan','lanet'],'From index 2 to the end.');
 mcc('strs','w = "planet"; print(w[-3:])',PR,'net',['pla','ane'],'The last three characters.');
 mcc('strs','w = "planet"; print(w[::2])',PR,'pae',['lne','pnt'],'Every second character from index 0: p, a, e.');
 mcc('strs','w = "planet"; print(w[::-1])',PR,'tenalp',['planet','tnelap'],'A step of -1 reverses the string.');
 mcc('strs','w = "planet"; print(w[1:5:2])',PR,'ln',['la','lne'],'Indexes 1 and 3 are l and n.');
 mcc('strs','w = "planet"; print(w[0] + w[-1])',PR,'pt',['p t','pe'],'The first and last characters are joined: p and t.');
 mcc('strs','s = "ab"; s = s + "c"; s = s * 2; print(s)',PR,'abcabc',['abccc','ababc'],'s is "ab", then "abc", then "abcabc".');
 mcc('strs','a = "9"; b = "4"; print(a + b)',PR,'94',['13','49'],'Both are strings, so + joins them instead of adding.');
 mcc('strs','print("banana".count("a"))',PR,'3',['2','1'],'There are three a letters in banana.');
 num('strs','print("banana".find("n"))',PR,2,'b0 a1 n2: the first n is at index 2.');
 mcc('strs','print("banana".replace("a", "o"))',PR,'bonono',['bonana','banana'],'replace changes every a to o.');
 mcc('strs','print("  hi  ".strip() + "!")',PR,'hi!',['  hi  !','hi !'],'strip removes the spaces at both ends.');
 mcc('strs','print("Moon".upper() + "Moon".lower())',PR,'MOONmoon',['MoonMoon','moonMOON'],'upper gives MOON and lower gives moon.');
 /* input, output, f-strings */
 for(const [p,r,w,e] of [
 ['What type does input() always return?','str',['int','float'],'Even if the user types digits, input() gives a string.'],
 ['Which call prints Hi and Bo with a slash between them and no spaces?','print("Hi", "Bo", sep="/")',['print("Hi", "Bo", end="/")','print("Hi", "Bo", join="/")'],'sep sets what goes between the values.'],
 ['What does the end parameter of print() control?','what is printed after the last value (a new line by default)',['how many times the value is printed','what is printed between the values'],'end replaces the new line at the end of the output.'],
 ['Which letter before the opening quotation mark makes a formatted string literal?','f',['s','$'],'An f-string starts with f, as in f"hi {name}".'],
 ['Which code reads a whole number from the user and stores it in n?','n = int(input())',['n = input(int())','n = input()'],'input() gives a string, so int() converts it to a whole number.'],
 ['In f"{x:.2f}", what does .2f do?','shows x as a decimal number with 2 digits after the point',['shows x two times','rounds x to the nearest 2']
  ,'The format specifier .2f means a float with two decimal places.']])mc('io',p,r,w,e);
 mcc('io','print("x", "y", "z")',PR,'x y z',['xyz','x,y,z'],'print puts one space between values by default.');
 mcc('io','print("x", "y", sep="")',PR,'xy',['x y','x'],'An empty sep removes the spaces.');
 mcc('io','print(1, 2, 3, sep=" + ")',PR,'1 + 2 + 3',['6','1 2 3'],'sep is placed between the values.');
 mcc('io','print("Hi", end="?"); print("Bye")',PR,'Hi?Bye',['Hi? Bye','Hi?'],'The first print ends with ? instead of a new line, so the second continues the line.');
 num('io','print("A"); print("B", end=""); print("C")',LN,2,'A is on line 1, and B and C share line 2.');
 mcc('io','print("Go", end=" "); print("now")',PR,'Go now',['Gonow','Go'],'end=" " leaves a space instead of a new line.');
 mcc('io','print("2" + "3", 2 + 3)',PR,'23 5',['5 5','23 23'],'The strings are joined to "23"; the ints are added to 5; print separates them with a space.');
 mcc('io','name = "Kai"; print(f"Hi {name}!")',PR,'Hi Kai!',['Hi name!','Hi {name}!'],'The braces are replaced by the value of name.');
 mcc('io','n = 6; print(f"{n} x 2 = {n * 2}")',PR,'6 x 2 = 12',['n x 2 = 12','6 x 2 = 6 * 2'],'Each brace holds an expression that is calculated and inserted.');
 mcc('io','e = 2.71828; print(f"{e:.3f}")',PR,'2.718',['2.72','2.71828'],'.3f keeps three digits after the point, rounding the rest.');
 mcc('io','x = 7.0; print(f"{x:.1f}")',PR,'7.0',['7','7.00'],'.1f shows exactly one digit after the point.');
 mcc('io','print(f"{10 / 4}")',PR,'2.5',['2','2.50'],'The expression 10 / 4 is 2.5, inserted as it is.');
 mcc('io','a = 4; b = 5; print(f"{a}{b}")',PR,'45',['9','4 5'],'Two braces side by side put the two values next to each other.');
 mcc('io','a = 4; b = 5; print(f"{a} + {b} = {a + b}")',PR,'4 + 5 = 9',['9 = 9','4 + 5 = 45'],'The plus signs outside the braces are plain text.');
 mcc('io','item = "pen"; qty = 3; print(f"{qty} {item}s")',PR,'3 pens',['qty items','3 pen s'],'The values are inserted and the s after the brace is plain text.');
 mcc('io','x = input(); print(type(x))',PR,"<class 'str'>",["<class 'int'>","<class 'float'>"],'input() returns a string even when the user types a number.','5');
 num('io','n = int(input()); print(n + 1)',PR,16,'int() makes 15 a number, and 15 + 1 = 16.','15');
 num('io','t = input(); print(len(t))',PR,4,'The text "2024" has 4 characters.','2024');
 num('io','x = input(); y = int(x) * 2; print(y)',PR,42,'x is the text "21", int(x) is 21, and 21 * 2 = 42.','21');
 num('io','d = float(input()); print(d / 2)',PR,4.5,'float("9") is 9.0, and 9.0 / 2 = 4.5.','9');
 num('io','h = int(input()); print(h * 60)',PR,180,'int("3") is 3, and 3 * 60 = 180.','3');
 mcc('io','name = input(); print(f"Hello, {name}!")',PR,'Hello, Zoe!',['Hello, name!','Hello, {name}!'],'The typed text Zoe replaces the braces.','Zoe');
 mcc('io','n = input("Number? "); print(n * n)',RUN,'TypeError',['prints 16','prints 4444'],'n holds the string "4", and a string cannot be multiplied by another string.','4');
 /* errors */
 for(const [p,r,w,e] of [
 ['Python finds code that breaks the grammar of the language, such as a missing closing quotation mark. Which error is this?','SyntaxError',['NameError','TypeError'],'Broken grammar is a SyntaxError.'],
 ['Which error appears when the code uses a variable name that has not been assigned yet?','NameError',['SyntaxError','ValueError'],'A name that Python does not know is a NameError.'],
 ['Which error appears when the code tries to add a string and an integer, as in "age: " + 21?','TypeError',['NameError','IndexError'],'+ does not work between a str and an int.'],
 ['Which error does int("hello") raise?','ValueError',['TypeError','SyntaxError'],'The argument has the right type (a string) but its value cannot be a whole number.'],
 ['Which error does 10 / 0 raise?','ZeroDivisionError',['ValueError','NameError'],'Dividing by zero is a ZeroDivisionError.'],
 ['Python prints 10.0 as the average of 4 and 12 because the code is 4 + 12 / 2. Which kind of error is this?','logic error',['syntax error','name error'],'The program runs without an error message but gives a wrong answer, which is a logic error; it needed (4 + 12) / 2.'],
 ['When does Python report a SyntaxError?','before the program runs, so none of its lines run',['after the first line has run','only when the program ends'],'The whole file is checked for grammar before anything is executed.'],
 ['A student writes Print("hi") with a capital P. Which error does Python raise?','NameError',['SyntaxError','TypeError'],'Python is case sensitive, so Print is an unknown name; the grammar itself is fine.']])mc('errs',p,r,w,e);
 mcc('errs','age = 15; print("Age: " + age)',RUN,'TypeError',['prints Age: 15','NameError'],'A str plus an int is a TypeError; convert with str(age).');
 mcc('errs','x = 5; print(X)',RUN,'NameError',['prints 5','SyntaxError'],'X (capital) was never assigned.');
 mcc('errs','print("Hello)',RUN,'SyntaxError',['NameError','prints Hello'],'The string is missing its closing quotation mark.');
 mcc('errs','x = 10 y = 3',RUN,'SyntaxError',['prints nothing and finishes','NameError'],'Two statements on one line need a semicolon or a new line; this breaks the grammar.');
 mcc('errs','print(8 / (4 - 4))',RUN,'ZeroDivisionError',['prints 0','prints 2.0'],'4 - 4 is 0, so the division is by zero.');
 mcc('errs','print(5 // 0)',RUN,'ZeroDivisionError',['prints 0','ValueError'],'Floor division by zero is also a ZeroDivisionError.');
 mcc('errs','n = int("4.5"); print(n)',RUN,'ValueError',['prints 4','prints 5'],'The text 4.5 is not a whole number, so int() fails; int(4.5) on a float would work.');
 mcc('errs','n = int("12"); print(n + 1)',RUN,'prints 13',['TypeError','ValueError'],'int("12") is 12, so the addition works.');
 mcc('errs','s = "cat"; print(s[3])',RUN,'IndexError',['prints t','prints cat'],'A string of length 3 has indexes 0, 1 and 2 only.');
 mcc('errs','print("cat"[2])',RUN,'prints t',['IndexError','TypeError'],'Index 2 is the last character, t.');
 mcc('errs','s = "dog"; s[0] = "l"',RUN,'TypeError',['changes s to log','IndexError'],'Strings are immutable, so you cannot assign to one of their characters.');
 mcc('errs','print("5" * "2")',RUN,'TypeError',['prints 10','prints 55'],'You can repeat a string only by an int, not by another string.');
 mcc('errs','print(3 * "ab")',RUN,'prints ababab',['TypeError','prints 6ab'],'int times string is repetition.');
 mcc('errs','5 = x',RUN,'SyntaxError',['NameError','prints 5'],'You cannot assign to a number; the name goes on the left.');
 mcc('errs','float("abc")',RUN,'ValueError',['TypeError','prints 0.0'],'The text is not a number, so the value is wrong.');
 mcc('errs','print(len(5))',RUN,'TypeError',['prints 1','ValueError'],'len() works on sequences like strings, not on an int.');
 num('errs','n = 3; m = n * "2"; k = m + n; print(k)',FIRST,3,'Line 2 is fine (it makes the string "222"); line 3 adds a string and an int, which is a TypeError.');
 num('errs','x = 10; y = x / 0; print(y)',FIRST,2,'The ZeroDivisionError happens on line 2.');
 num('errs','s = "abc"; t = s[1]; u = t + 1; v = s[5]',FIRST,3,'Line 3 adds a string and an int before the IndexError on line 4 can happen.');
 num('errs','a = 5; b = a - c; c = 2',FIRST,2,'c is used on line 2 before it is assigned on line 3, so line 2 raises a NameError.');
 num('errs','print("a"); print("b"); print(1 / 0); print("c")',LN,2,'Two lines are printed before the ZeroDivisionError stops the program.');
}
};
