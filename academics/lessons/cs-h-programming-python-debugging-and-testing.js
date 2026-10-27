/* Original course unit. Review record: docs/review/lessons/high-completion/python-u6-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "CSTA 3A-AP-21 / 1",
  "name": "Specifications and kinds of errors",
  "skill": "s1",
  "teach": [
   "Debugging starts with a specification: what should a program do for a given input? Compare an expected result with the actual result, then investigate the difference. A syntax error prevents a source block from being parsed. A runtime exception occurs while syntactically valid code executes, such as ZeroDivisionError for dividing a number by zero. A logic error can return an incorrect result without raising an exception. If double(4) should return 8 but returns 6, successful execution does not establish correctness. A test needs an expected result derived from the requirement, not copied from the program being checked.",
   "Python exception classes narrow the investigation. NameError can signal a name that has not been defined; TypeError can signal an unsupported operation on those types; ValueError can signal an unacceptable value for an operation, such as int('stone'). IndexError concerns an invalid sequence index, while KeyError concerns a missing dictionary key. IndentationError is a kind of SyntaxError. The exception tells you what failed at that point, but the underlying mistake may be earlier. Read the exact code and input rather than guessing only from a message. In this unit, programs run in normal Python 3 mode, with assertions enabled. In output questions, give the exception class if execution fails; otherwise give the printed output."
  ],
  "boards": [
   [
    "Specification → expected result → actual comparison",
    "Syntax errors prevent parsing",
    "Runtime exceptions interrupt execution",
    "Logic errors can produce a wrong result silently"
   ],
   [
    "NameError: name unavailable",
    "TypeError: unsupported operation or argument type",
    "ValueError: unacceptable value",
    "IndexError and KeyError concern different lookups"
   ]
  ],
  "eqs": [
   "Expected double(4) = 8; observed 6 reveals a defect",
   "int(\"stone\") raises ValueError"
  ],
  "pics": [
   null,
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. print(int('stone'))"
    ]
   }
  ],
  "questions": [
   [
    "A function is required to double an integer. It returns 7 for input 4 without raising an exception. What kind of defect does this demonstrate?",
    "A logic error",
    "Proof that the program is correct",
    "A missing network connection",
    "The output violates the stated requirement even though the source parsed and executed without an exception."
   ],
   [
    "Code: print(8 / 0) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "ZeroDivisionError",
    "0",
    "ValueError",
    "Numeric division by zero raises ZeroDivisionError during execution; it does not produce zero."
   ],
   [
    "Code: print(unknown_total) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "NameError",
    "None",
    "0",
    "The name has not been defined in this fresh program, so evaluating it raises NameError."
   ],
   [
    "Code: print('4' + 2) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "TypeError",
    "6",
    "42",
    "Python does not add a string and an integer with this operation; the incompatible operand types raise TypeError."
   ],
   [
    "Code: print(int('pebble')) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "ValueError",
    "TypeError",
    "0",
    "A string is an accepted argument type for int, but this string does not represent a valid integer value."
   ],
   [
    "Code: a = [3, 8] | print(a[2]) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "IndexError",
    "8",
    "KeyError",
    "The list has indices zero and one; index two is outside the list and raises IndexError."
   ],
   [
    "Code: d = {'x': 4} | print(d['y']) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "KeyError",
    "None",
    "IndexError",
    "The dictionary has no y key, so direct key lookup raises KeyError rather than a sequence IndexError."
   ],
   [
    "Code: if True |     print('ready') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "SyntaxError",
    "ready",
    "NameError",
    "The if header lacks its required colon, so the source cannot be parsed as a valid block."
   ],
   [
    "A programmer writes an expected answer by running the same buggy function and copying its output. Why is this a weak test oracle?",
    "It can preserve the bug as the expected result",
    "Every function output is a specification",
    "Expected results must never be calculated",
    "An expected result should come from the requirement or an independent method, not simply repeat the implementation being tested."
   ],
   [
    "Which statement about IndentationError is correct?",
    "It is a subclass of SyntaxError",
    "It only occurs after every statement finishes",
    "It means a dictionary key is missing",
    "Python treats invalid indentation as a syntax-related exception, not a dictionary lookup error."
   ]
  ],
  "qpics": {
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print(8 / 0)"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print(unknown_total)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print('4' + 2)"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print(int('pebble'))"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 8]",
     "2. print(a[2])"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 4}",
     "2. print(d['y'])"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. if True",
     "2.     print('ready')"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-21 / 2",
  "name": "Tracing state and control flow",
  "skill": "s2",
  "teach": [
   "A trace table records variable values after each relevant statement. For total = 1 followed by adding each number in [2, 5], the values of total are 1, 3 and 8. An assignment uses the current right-hand value before rebinding the left-hand name. Conditions choose which branch runs, and range(stop) excludes stop. Trace the actual path rather than the intended one. If an accumulator is reset inside the loop, earlier work can be lost. Record the loop value, condition result and accumulator to locate the first divergence from the expected algorithm.",
   "Control statements affect which operations can happen. return exits the current function call immediately; code after that return on the same path does not execute. break exits the nearest enclosing loop, while continue skips the rest of the current iteration. A print statement can expose intermediate state during debugging, but printed output is not the same as a function's returned value. A function reaching its end without return supplies None. Trace a small example with distinct values so an accidental reset, skipped iteration or premature return is visible."
  ],
  "boards": [
   [
    "Record state after each relevant statement",
    "Use the current values on the right-hand side",
    "range excludes its stop value",
    "Look for the first divergence from the requirement"
   ],
   [
    "return exits the current function call",
    "break exits the nearest loop",
    "continue skips to the next iteration",
    "Printing a value does not return that value"
   ]
  ],
  "eqs": [
   "total: 1 → 3 → 8 for inputs [2, 5]",
   "A function without return yields None"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. total = 1",
     "2. for x in [2, 5]:",
     "3.     total += x",
     "4. print(total)"
    ]
   },
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. def show(n):",
     "2.     print(n + 1)",
     "3. value = show(6)",
     "4. print(value)"
    ]
   }
  ],
  "questions": [
   [
    "Code: x = 3 | y = x + 2 | x = 9 | print(y) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "5",
    "11",
    "9",
    "y was assigned the value five before x was rebound; changing x later does not recompute y."
   ],
   [
    "Code: total = 2 | for x in [3, 7]: |     total += x | print(total) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "12",
    "10",
    "7",
    "The accumulator begins at two and then adds three and seven, giving twelve."
   ],
   [
    "Code: for x in [3, 7]: |     total = 0 |     total += x | print(total) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "7",
    "10",
    "0",
    "Resetting total inside each iteration discards earlier contributions; only the final value seven remains."
   ],
   [
    "Code: print(list(range(1, 4))) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "[1, 2, 3]",
    "[1, 2, 3, 4]",
    "[0, 1, 2, 3]",
    "range starts at one and stops before four, which makes its last included value three."
   ],
   [
    "Code: def f(): |     return 5 |     return 9 | print(f()) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "5",
    "9",
    "14",
    "The first return ends the function call, so the second return is not reached on this path."
   ],
   [
    "Code: for x in [2, 4, 6]: |     if x == 4: |         break |     print(x) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "2",
    "2 then 4",
    "2 then 6",
    "The loop prints two, then breaks before printing four or visiting six."
   ],
   [
    "Code: for x in [2, 4, 6]: |     if x == 4: |         continue |     print(x) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "2 then 6",
    "2",
    "2 then 4 then 6",
    "continue skips the print for four but permits the next iteration, which prints six."
   ],
   [
    "Code: def f(): |     print(7) | print(f()) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "7 then None",
    "7",
    "None then 7",
    "The function prints seven internally and implicitly returns None, which the outer print then displays."
   ],
   [
    "Code: x = 5 | if x > 3: |     x += 2 | else: |     x -= 2 | print(x) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "7",
    "3",
    "5",
    "The condition is true for five, so only the first branch runs and adds two."
   ],
   [
    "Code: n = 3 | while n > 0: |     n -= 1 | print(n) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "0",
    "1",
    "-1",
    "The loop decrements three to two, one and zero; at zero the condition becomes false and the loop stops."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. x = 3",
     "2. y = x + 2",
     "3. x = 9",
     "4. print(y)"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. total = 2",
     "2. for x in [3, 7]:",
     "3.     total += x",
     "4. print(total)"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. for x in [3, 7]:",
     "2.     total = 0",
     "3.     total += x",
     "4. print(total)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print(list(range(1, 4)))"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def f():",
     "2.     return 5",
     "3.     return 9",
     "4. print(f())"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. for x in [2, 4, 6]:",
     "2.     if x == 4:",
     "3.         break",
     "4.     print(x)"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. for x in [2, 4, 6]:",
     "2.     if x == 4:",
     "3.         continue",
     "4.     print(x)"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def f():",
     "2.     print(7)",
     "3. print(f())"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. x = 5",
     "2. if x > 3:",
     "3.     x += 2",
     "4. else:",
     "5.     x -= 2",
     "6. print(x)"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. n = 3",
     "2. while n > 0:",
     "3.     n -= 1",
     "4. print(n)"
    ]
   }
  }
 },
 {
  "code": "CSTA 3B-AP-21 / 3",
  "name": "Boundary cases and input partitions",
  "skill": "s3",
  "teach": [
   "Select tests that distinguish correct behavior from a plausible defect. For a rule that admits an integer score of at least 10, inputs 9, 10 and 11 test below, exactly at, and above the threshold. Testing only 11 would miss using > instead of >=. Partition inputs by behavior, such as negative, zero and positive numbers, and include meaningful boundaries between groups. Empty and singleton collections expose mistakes hidden by longer lists. These cases increase the chance of finding defects, but a finite set of passing examples does not generally prove correctness for every possible input.",
   "The specification decides what counts as correct behavior for unusual input. If an average function is required to return None on empty input, test that explicitly; do not silently assume the result should be zero. For an inclusive interval from 2 through 5, both endpoints should qualify. For a search, test a first match, a later match, no match and repeated values when relevant. A useful failing test includes an input and an independently expected result. Keep those expectations stable when fixing a bug unless the requirement itself deliberately changes."
  ],
  "boards": [
   [
    "Test below, at and above a threshold",
    "Partition inputs by expected behavior",
    "Include empty and singleton collections",
    "Passing samples do not prove all possible cases"
   ],
   [
    "Requirements define unusual-input behavior",
    "Check both ends of an inclusive interval",
    "Test missing and repeated matches where relevant",
    "A failing test needs an independently expected result"
   ]
  ],
  "eqs": [
   "At least 10: 9 → False; 10 → True; 11 → True",
   "Inclusive [2, 5] includes both 2 and 5"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. def allowed(n):",
     "2.     return n >= 10",
     "3. print([allowed(n) for n in [9, 10, 11]])"
    ]
   },
   null
  ],
  "questions": [
   [
    "A specification says at least 18, but the code uses age > 18. Which single age most directly reveals the boundary defect?",
    "18",
    "19",
    "30",
    "At exactly eighteen the intended inclusive rule accepts the input while the strict comparison rejects it."
   ],
   [
    "Code: print([n >= 5 for n in [4, 5, 6]]) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "[False, True, True]",
    "[False, False, True]",
    "[True, True, True]",
    "The >= comparison includes five, so only the value below the threshold is rejected."
   ],
   [
    "Code: print([2 <= n <= 5 for n in [1, 2, 5, 6]]) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "[False, True, True, False]",
    "[False, False, True, False]",
    "[True, True, True, True]",
    "Both endpoints satisfy the inclusive chained comparison, while one and six lie outside it."
   ],
   [
    "A function must count positive numbers, but its condition is x >= 0. Which one-element input exposes the mistake?",
    "[0]",
    "[1]",
    "[-1]",
    "Zero is not positive, but the buggy inclusive comparison counts it; the other inputs behave as required."
   ],
   [
    "Code: def first(a): |     return a[0] | print(first([])) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "IndexError",
    "None",
    "0",
    "Accessing the first element of an empty list raises IndexError, so an empty-input contract needs explicit handling."
   ],
   [
    "Code: def mean(a): |     if not a: |         return None |     return sum(a) / len(a) | print(mean([])) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "None",
    "0",
    "ZeroDivisionError",
    "The empty-list guard returns None before the division, matching this explicitly written behavior."
   ],
   [
    "A search returns the first matching index or -1 when absent. Which set provides broader behavioral coverage?",
    "First, later, absent and repeated matches",
    "Four copies of the same successful case",
    "Only the list's length",
    "Distinct positions, absence and repeated values exercise different behaviors, including the first-match requirement."
   ],
   [
    "An average function passes tests on several long lists. Which additional input most directly checks an empty-input requirement?",
    "[]",
    "[4, 5, 6, 7]",
    "[8, 9, 10, 11]",
    "The empty list directly exercises behavior with no elements, which nonempty examples do not establish."
   ],
   [
    "Why is a singleton list a useful test for a loop-based summary?",
    "It checks handling of exactly one element",
    "It proves correctness for every list length",
    "It must always raise an exception",
    "A single-element case can reveal initialization and off-by-one mistakes without implying universal correctness."
   ],
   [
    "A program passes ten chosen test cases. Which conclusion is justified?",
    "It passed those cases under the tested conditions",
    "No other input can reveal a defect",
    "Its specification is automatically complete",
    "Passing results provide evidence for those tests; untested inputs, environments and requirements can still reveal defects."
   ]
  ],
  "qpics": {
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print([n >= 5 for n in [4, 5, 6]])"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. print([2 <= n <= 5 for n in [1, 2, 5, 6]])"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def first(a):",
     "2.     return a[0]",
     "3. print(first([]))"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def mean(a):",
     "2.     if not a:",
     "3.         return None",
     "4.     return sum(a) / len(a)",
     "5. print(mean([]))"
    ]
   }
  },
  "check": [
   "A filter should retain values at least 0, but uses x > 0. Which test value directly distinguishes the two rules?",
   "0",
   "4",
   "-3",
   "Zero should pass an at-least-zero requirement but fails a strict positive comparison, exposing the boundary error."
  ]
 },
 {
  "code": "CSTA 3A-AP-21 / 4",
  "name": "Handling and raising exceptions",
  "skill": "s4",
  "teach": [
   "A try block groups code whose exceptions may be handled. If an exception occurs, execution skips the rest of that try block and searches for a matching except clause. A handler for ValueError does not catch ZeroDivisionError. If no exception occurs, the except block is skipped; an optional else block runs after the successful try. Keep the protected operation narrow so an unrelated error is not accidentally treated as an expected input problem. Catching every exception and ignoring it can hide defects rather than repair their cause.",
   "A finally block normally runs as control leaves the try statement, whether execution succeeded or an exception is propagating; it is commonly used for cleanup. It does not mean that errors can never escape. The raise statement explicitly signals an exception, such as raising ValueError when an argument violates a documented condition. A handler should either provide a meaningful recovery or allow an error to be reported. Use exception classes deliberately, and test both the normal path and the error path. Do not use a bare catch-and-ignore block as evidence that the underlying computation is correct."
  ],
  "boards": [
   [
    "An exception skips the rest of its try block",
    "Only a matching handler catches an exception",
    "else runs when the try finishes without an exception",
    "Catch specific expected failures"
   ],
   [
    "finally normally runs when leaving try",
    "raise explicitly signals an exception",
    "An unhandled error can still propagate",
    "Test successful and failing paths separately"
   ]
  ],
  "eqs": [
   "int(\"bad\") → ValueError → matching handler",
   "Handling a failure is different from fixing its cause"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. try:",
     "2.     value = int('bad')",
     "3. except ValueError:",
     "4.     value = 0",
     "5. print(value)"
    ]
   },
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. try:",
     "2.     print('work')",
     "3. finally:",
     "4.     print('cleanup')"
    ]
   }
  ],
  "questions": [
   [
    "Code: try: |     print(int('bad')) | except ValueError: |     print('invalid') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "invalid",
    "ValueError",
    "0",
    "int raises ValueError and the matching handler prints invalid instead of allowing that error to escape."
   ],
   [
    "Code: try: |     print(6 / 0) | except ValueError: |     print('invalid') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "ZeroDivisionError",
    "invalid",
    "0",
    "The raised ZeroDivisionError does not match the ValueError handler, so it propagates."
   ],
   [
    "Code: try: |     x = int('5') | except ValueError: |     print('bad') | else: |     print(x + 1) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "6",
    "bad",
    "5",
    "Conversion succeeds, so the handler is skipped and else prints six."
   ],
   [
    "Code: try: |     x = int('bad') |     print('later') | except ValueError: |     print('caught') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "caught",
    "later then caught",
    "ValueError",
    "The exception prevents the later print in the try block from executing; the handler prints caught."
   ],
   [
    "Code: try: |     print('start') | finally: |     print('end') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "start then end",
    "start",
    "end",
    "With no error, the try body prints start and the finally block then prints end."
   ],
   [
    "Code: try: |     raise ValueError('bad input') | except ValueError: |     print('handled') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "handled",
    "bad input",
    "None",
    "raise creates the specified exception, which is caught by the matching handler that prints handled."
   ],
   [
    "Code: def require_positive(n): |     if n <= 0: |         raise ValueError('positive required') |     return n | print(require_positive(0)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "ValueError",
    "0",
    "AssertionError",
    "The explicit condition rejects zero by raising ValueError before the return can run."
   ],
   [
    "Code: try: |     x = [4][2] | except IndexError: |     print('missing') | finally: |     print('done') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "missing then done",
    "missing",
    "IndexError",
    "The handler responds to the invalid index, and finally still runs afterward to print done."
   ],
   [
    "A program catches every Exception and silently continues with an incorrect total. What is the main problem?",
    "The handler can conceal the underlying defect",
    "Catching an exception proves the total is correct",
    "Exceptions can only occur in network programs",
    "Suppressing an exception changes control flow but does not establish that subsequent values satisfy the program's requirement."
   ],
   [
    "Which paths should tests cover for a parser that recovers from invalid integers?",
    "Valid conversion and expected invalid input",
    "Only the easiest successful conversion",
    "Only its comment text",
    "Both the normal path and the matching error-handling path have specified behavior that should be exercised."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     print(int('bad'))",
     "3. except ValueError:",
     "4.     print('invalid')"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     print(6 / 0)",
     "3. except ValueError:",
     "4.     print('invalid')"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     x = int('5')",
     "3. except ValueError:",
     "4.     print('bad')",
     "5. else:",
     "6.     print(x + 1)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     x = int('bad')",
     "3.     print('later')",
     "4. except ValueError:",
     "5.     print('caught')"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     print('start')",
     "3. finally:",
     "4.     print('end')"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     raise ValueError('bad input')",
     "3. except ValueError:",
     "4.     print('handled')"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def require_positive(n):",
     "2.     if n <= 0:",
     "3.         raise ValueError('positive required')",
     "4.     return n",
     "5. print(require_positive(0))"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. try:",
     "2.     x = [4][2]",
     "3. except IndexError:",
     "4.     print('missing')",
     "5. finally:",
     "6.     print('done')"
    ]
   }
  }
 },
 {
  "code": "CSTA 3B-AP-21 / 5",
  "name": "Assertions and expected outcomes",
  "skill": "s5",
  "teach": [
   "In normal Python mode, assert condition checks that the condition is true. If it is false, Python raises AssertionError, optionally with a message. For square(3), assert square(3) == 9 checks a result against the expected value. A passing assert prints nothing. Do not confuse assignment = with comparison ==, and do not derive the expected result by calling the same implementation a second time. An assertion is useful for a test or an internal assumption when its condition clearly expresses a requirement.",
   "Python can omit assert statements when run with optimization, such as python -O. Therefore assertions must not be the only mechanism enforcing required external-input validation or essential side effects. For a required check, use an explicit condition and raise an appropriate exception. Floating-point calculations can involve representation error, so a carefully chosen math.isclose comparison may express a numerical requirement better than exact equality; a tolerance should come from the problem's needs. Tests should still reject values outside that tolerance. In this lesson, all output questions state normal mode so assertions are enabled."
  ],
  "boards": [
   [
    "A true assert continues without printing",
    "A false assert raises AssertionError",
    "Compare actual output with an independent expectation",
    "Use == for equality, not assignment"
   ],
   [
    "Optimized Python may omit assert statements",
    "Required validation needs an explicit check",
    "Floating-point tests may need a justified tolerance",
    "Normal mode here means assertions are enabled"
   ]
  ],
  "eqs": [
   "assert square(3) == 9 checks a stated result",
   "assert is a check, not an external-input guard"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. def square(n):",
     "2.     return n * n",
     "3. assert square(3) == 9",
     "4. print('passed')"
    ]
   },
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. import math",
     "2. print(math.isclose(0.1 + 0.2, 0.3))"
    ]
   }
  ],
  "questions": [
   [
    "Code: assert 3 + 4 == 7 | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "True",
    "The equality is true, so the assert produces no output and execution reaches the print."
   ],
   [
    "Code: assert 3 + 4 == 8 | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "passed",
    "False",
    "The asserted condition is false, raising AssertionError before the following print can run."
   ],
   [
    "Code: def square(n): |     return n + n | assert square(3) == 9 | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "passed",
    "6",
    "The buggy function returns six, which differs from the independently expected nine, so the assertion fails."
   ],
   [
    "Code: def square(n): |     return n + n | assert square(2) == 4 | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "9",
    "This input happens to make doubling and squaring agree, so the test passes despite the function's broader defect."
   ],
   [
    "Why should required validation of a user-supplied amount not rely only on assert?",
    "Optimized execution can omit the assertion",
    "Assertions always print passwords",
    "Assertions cannot compare numbers",
    "Python optimization can remove assert statements, so required checks must be expressed in code that is still executed."
   ],
   [
    "Which test most directly checks a function required to triple 5?",
    "assert triple(5) == 15",
    "assert triple(5) == triple(5)",
    "assert 5 == 5",
    "Comparing with independently computed fifteen tests the required behavior; comparing a result with itself can preserve a bug."
   ],
   [
    "Code: import math | print(math.isclose(0.1 + 0.2, 0.3)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "True",
    "False",
    "TypeError",
    "The small representation difference lies within math.isclose's default tolerances for these values."
   ],
   [
    "Code: import math | print(math.isclose(10.0, 10.2, abs_tol=0.01)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "False",
    "True",
    "ValueError",
    "The difference of 0.2 exceeds the absolute tolerance 0.01 and the much smaller default relative tolerance."
   ],
   [
    "A test asserts result == result. Why is this generally weak evidence about the required output?",
    "It lacks an independent expected value",
    "It always raises SyntaxError",
    "It proves the result matches every requirement",
    "For ordinary reflexively equal values, the comparison can pass regardless of the intended answer; it does not encode the required value."
   ],
   [
    "A developer puts a necessary function call only inside assert. What can happen under optimization?",
    "That required call can be skipped",
    "The function is guaranteed to run twice",
    "The program automatically writes a test report",
    "Because the assertion can be omitted, its expression and any required side effects may not execute."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. assert 3 + 4 == 7",
     "2. print('passed')"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. assert 3 + 4 == 8",
     "2. print('passed')"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def square(n):",
     "2.     return n + n",
     "3. assert square(3) == 9",
     "4. print('passed')"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def square(n):",
     "2.     return n + n",
     "3. assert square(2) == 4",
     "4. print('passed')"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import math",
     "2. print(math.isclose(0.1 + 0.2, 0.3))"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import math",
     "2. print(math.isclose(10.0, 10.2, abs_tol=0.01))"
    ]
   }
  }
 },
 {
  "code": "CSTA 3B-AP-21 / 6",
  "name": "Designing useful function tests",
  "skill": "s6",
  "teach": [
   "A function test supplies inputs, calls the function and compares the result with a specification-derived expectation. Use several cases that exercise different paths. Suppose total_to(n) should sum integers from 1 through n for n >= 0. A buggy range(1, n) omits n, so n = 3 gives 3 instead of 6, while n = 0 may still appear correct. Checking only zero would miss the defect. Add a case that fails for the plausible bug, then verify the repaired algorithm against both the new case and existing cases.",
   "Test properties can complement exact examples. If a filter must keep only positive numbers, every returned value should be positive and qualifying duplicates should remain in order. A property that is too weak, such as output length is nonnegative, can pass even when the result is wrong. Tests for a function that should not mutate input must inspect the input afterward as well as the returned value. Repeated calls may expose accidental shared state. Choose the expectation before inspecting the implementation, and distinguish a failure in the program from a failure in a mistaken test."
  ],
  "boards": [
   [
    "Input + call + expected result form a test",
    "Choose cases that distinguish plausible defects",
    "A passing special case can hide a broader error",
    "Retest both the correction and earlier behavior"
   ],
   [
    "Properties supplement exact examples",
    "Weak properties may accept incorrect results",
    "Check input mutation when the contract forbids it",
    "Repeated calls can expose unwanted shared state"
   ]
  ],
  "eqs": [
   "sum 1 through 3 = 1 + 2 + 3 = 6",
   "range(1, n) excludes n; range(1, n + 1) includes it"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. def total_to(n):",
     "2.     return sum(range(1, n))",
     "3. print(total_to(3))",
     "4. assert total_to(3) == 6"
    ]
   },
   null
  ],
  "questions": [
   [
    "Code: def total_to(n): |     return sum(range(1, n)) | print(total_to(4)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "6",
    "10",
    "4",
    "The exclusive stop omits four, so the function adds one, two and three for a result of six."
   ],
   [
    "Code: def total_to(n): |     return sum(range(1, n + 1)) | assert total_to(4) == 10 | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "6",
    "The repaired range includes four, so its sum is ten and the assertion passes."
   ],
   [
    "An inclusive sum function mistakenly uses range(1, n). Which input exposes the defect when n must be a nonnegative integer?",
    "1",
    "0",
    "No allowed input can expose it",
    "At n equal to one, the buggy range is empty and sums to zero instead of the required one."
   ],
   [
    "Code: def positive(a): |     return [x for x in a if x >= 0] | assert positive([0, 2]) == [2] Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "None",
    "TypeError",
    "The implementation wrongly includes zero, so its result [0, 2] differs from the expected positive-only list."
   ],
   [
    "Code: def keep_even(a): |     return [x for x in a if x % 2 == 0] | assert keep_even([2, 2, 3]) == [2, 2] | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "[2]",
    "The comprehension preserves both qualifying occurrences of two in order, satisfying the duplicate-retention test."
   ],
   [
    "A function promises a sorted copy without changing its input. What should a test inspect?",
    "Both the returned list and the original input",
    "Only whether the function has a name",
    "Only the input length before the call",
    "The contract includes output ordering and absence of input mutation, so both must be checked after the call."
   ],
   [
    "Code: def ordered(a): |     a.sort() |     return a | x = [4, 1] | ordered(x) | assert x == [4, 1] Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "None",
    "ValueError",
    "Sorting in place changes x to [1, 4], violating this test's requirement that input remain unchanged."
   ],
   [
    "Code: def ordered(a): |     return sorted(a) | x = [4, 1] | y = ordered(x) | assert x == [4, 1] and y == [1, 4] | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "None",
    "sorted creates a new ordered list while x retains its original arrangement, so both assertions in the condition hold."
   ],
   [
    "A test for a numeric total checks only that its answer is an integer. What important defect can it miss?",
    "An incorrect integer value",
    "A syntax error in the test source never matters",
    "Every possible logic error is detected",
    "The type condition can hold for a wrong numeric total, so it is weaker than the stated arithmetic requirement."
   ],
   [
    "A test expects 12 from a function specified to square input 3. Which should be corrected?",
    "The test expectation should be 9",
    "The correct function should be changed to return 12",
    "Every square function must reject 3",
    "Three squared is nine, so the expectation itself conflicts with the stated specification."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def total_to(n):",
     "2.     return sum(range(1, n))",
     "3. print(total_to(4))"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def total_to(n):",
     "2.     return sum(range(1, n + 1))",
     "3. assert total_to(4) == 10",
     "4. print('passed')"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def positive(a):",
     "2.     return [x for x in a if x >= 0]",
     "3. assert positive([0, 2]) == [2]"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def keep_even(a):",
     "2.     return [x for x in a if x % 2 == 0]",
     "3. assert keep_even([2, 2, 3]) == [2, 2]",
     "4. print('passed')"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def ordered(a):",
     "2.     a.sort()",
     "3.     return a",
     "4. x = [4, 1]",
     "5. ordered(x)",
     "6. assert x == [4, 1]"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def ordered(a):",
     "2.     return sorted(a)",
     "3. x = [4, 1]",
     "4. y = ordered(x)",
     "5. assert x == [4, 1] and y == [1, 4]",
     "6. print('passed')"
    ]
   }
  },
  "check": [
   "Code: def total_to(n): |     return sum(range(1, n + 1)) | assert total_to(3) == 6 | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
   "passed",
   "AssertionError",
   "3",
   "The range includes one, two and three, whose sum is six, so the independently stated assertion passes."
  ],
  "checkPic": {
   "t": "program",
   "title": "Python 3 code",
   "lines": [
    "1. def total_to(n):",
    "2.     return sum(range(1, n + 1))",
    "3. assert total_to(3) == 6",
    "4. print('passed')"
   ]
  }
 },
 {
  "code": "CSTA 3B-AP-21 / 7",
  "name": "Unit-test tools and fixtures",
  "skill": "s7",
  "teach": [
   "Python's unittest module organizes automated tests. A TestCase provides methods such as assertEqual(actual, expected), assertTrue(condition) and assertRaises(ExceptionType). A failed equality assertion signals a test failure; an expected exception can be a successful outcome when that is the behavior being tested. Test methods in a TestCase subclass normally have names beginning with test so the loader discovers them. This unit uses short TestCase method calls to focus on what each assertion checks without requiring a large test class.",
   "A fixture prepares the state that a test needs, and cleanup releases or restores it. For a test that runs, unittest calls setUp before the test method; when setup succeeds, tearDown normally follows the test method. Separate tests should not rely on execution order or on a previous test's leftover mutable data. For example, create a fresh list before each mutation test. Unit tests focus on a small component; integration tests exercise cooperating components and their interfaces. Both can be useful, but a mock or test double for a dependency cannot by itself prove that the real external dependency behaves identically."
  ],
  "boards": [
   [
    "assertEqual compares actual and expected",
    "assertTrue checks truth of a condition",
    "assertRaises checks an expected exception",
    "Test discovery normally looks for test-prefixed names"
   ],
   [
    "setUp prepares each test method",
    "tearDown follows when setUp succeeded",
    "Fresh mutable state helps tests stay independent",
    "Unit and integration tests examine different scopes"
   ]
  ],
  "eqs": [
   "Expected exception + matching assertRaises = a pass",
   "Independent fixtures avoid order-dependent tests"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. t.assertEqual(2 + 5, 7)",
     "4. print('passed')"
    ]
   },
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. with t.assertRaises(ValueError):",
     "4.     int('bad')",
     "5. print('passed')"
    ]
   }
  ],
  "questions": [
   [
    "Code: import unittest | t = unittest.TestCase() | t.assertEqual(4 + 5, 9) | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "True",
    "The actual and expected values are equal, so assertEqual returns normally and the later print runs."
   ],
   [
    "Code: import unittest | t = unittest.TestCase() | t.assertEqual(4 + 5, 10) | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "passed",
    "False",
    "The values differ, so the assertion method raises AssertionError before the print statement."
   ],
   [
    "Code: import unittest | t = unittest.TestCase() | t.assertTrue(6 > 2) | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "6",
    "The condition is true, so the assertion succeeds and the program prints passed."
   ],
   [
    "Code: import unittest | t = unittest.TestCase() | with t.assertRaises(ValueError): |     int('no') | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "ValueError",
    "AssertionError",
    "The context manager observes the expected ValueError and treats it as the required behavior."
   ],
   [
    "Code: import unittest | t = unittest.TestCase() | with t.assertRaises(ValueError): |     int('7') | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "passed",
    "7",
    "No exception is raised by the valid conversion, so assertRaises fails because its expected exception did not occur."
   ],
   [
    "Code: import unittest | t = unittest.TestCase() | t.assertEqual([2, 5], [5, 2]) | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "passed",
    "True",
    "List equality compares elements in order; the differently ordered lists fail this equality assertion."
   ],
   [
    "Which name is normally discovered as a unittest test method?",
    "test_total",
    "helper_total",
    "calculate_total",
    "The default loader recognizes methods whose names begin with test, rather than every method in a class."
   ],
   [
    "Why create a fresh mutable list in setUp for each test?",
    "To avoid state left by another test",
    "To guarantee every algorithm is correct",
    "To force tests to depend on their order",
    "A new fixture prevents earlier mutations from contaminating later tests, supporting independent outcomes."
   ],
   [
    "A test calls a checkout function using a fake payment service that always succeeds. What does that passing test fail to establish about the real dependency?",
    "The real service's behavior under failure",
    "The result produced with that fake",
    "Whether the tested function was called",
    "A test double supplies controlled behavior; it is not direct evidence of how the actual external service responds."
   ],
   [
    "A test checks that a parser and a storage component exchange the expected record format. Which testing scope best fits?",
    "Integration testing",
    "Only checking one arithmetic expression",
    "Only checking spelling in comments",
    "The test exercises the interaction between components, including their shared interface and data format."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. t.assertEqual(4 + 5, 9)",
     "4. print('passed')"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. t.assertEqual(4 + 5, 10)",
     "4. print('passed')"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. t.assertTrue(6 > 2)",
     "4. print('passed')"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. with t.assertRaises(ValueError):",
     "4.     int('no')",
     "5. print('passed')"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. with t.assertRaises(ValueError):",
     "4.     int('7')",
     "5. print('passed')"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. import unittest",
     "2. t = unittest.TestCase()",
     "3. t.assertEqual([2, 5], [5, 2])",
     "4. print('passed')"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-21 / 8",
  "name": "Tracebacks, logging and debugger controls",
  "skill": "s8",
  "teach": [
   "A traceback shows the active call path that led to an exception and identifies source locations. Start with the exception type and message, then inspect the relevant frames, values and input. The line where an error surfaces is not always where its cause began: a caller may have supplied the wrong value. Reduce a failure to a small reproducible example that retains the problem. Temporary diagnostic output can reveal actual values and branch choices. Keep secrets and personal data out of logs, and do not mistake adding more output for repairing the underlying bug.",
   "A debugger can pause at a breakpoint so you can inspect variables and the current stack. In Python's pdb, step advances to the next possible stop including inside a called function; next continues to the next line in the current function or until it returns. continue resumes execution until another stopping condition, such as a breakpoint, is reached. A breakpoint alone does not change the algorithm into a correct one. Inspect the first point where actual state differs from the expected trace, form a specific hypothesis, and make a focused change whose effect you can test."
  ],
  "boards": [
   [
    "Tracebacks show the call path and source locations",
    "The failing line may receive a bad earlier value",
    "Reduce the case while preserving the failure",
    "Logs should reveal relevant state without secrets"
   ],
   [
    "A breakpoint pauses execution for inspection",
    "pdb step can enter a called function",
    "pdb next advances within the current function",
    "continue resumes until the next stopping condition"
   ]
  ],
  "eqs": [
   "Observed state → hypothesis → focused experiment",
   "A debugger observes execution; it does not prove correctness"
  ],
  "pics": [
   null,
   null
  ],
  "questions": [
   [
    "A traceback ends at a division where denominator is zero. What is a useful next investigation?",
    "Trace how that denominator was produced",
    "Assume every caller is correct",
    "Delete the traceback and declare success",
    "The immediate failure identifies a value to inspect, but an earlier computation or input may have produced it."
   ],
   [
    "What does a breakpoint primarily allow a developer to do?",
    "Pause and inspect program state",
    "Automatically repair every wrong value",
    "Guarantee complete test coverage",
    "Pausing makes variables and control flow available for investigation; it does not itself repair or certify the program."
   ],
   [
    "In pdb, which command is appropriate when you want to enter a called Python function while advancing execution?",
    "step",
    "continue until program exit only",
    "quit",
    "step can stop inside a called function, allowing its internal behavior to be traced."
   ],
   [
    "In pdb, what does next generally aim to do?",
    "Advance within the current function without stepping through a called function line by line",
    "Restart the entire operating system",
    "Edit every variable automatically",
    "next continues to the next line in the current function or until it returns, rather than tracing each line of a called function."
   ],
   [
    "In pdb, what does continue do?",
    "Resume execution until a stopping condition",
    "Execute only the previous source line",
    "Erase all breakpoints and source files",
    "continue resumes program execution and may stop again at a breakpoint or another debugger stopping condition."
   ],
   [
    "A failure appears only for a long list. What makes a useful reduced example?",
    "The smallest understood case that still reproduces the failure",
    "An unrelated case that always passes",
    "A screenshot with no input or code",
    "Reduction preserves the failure while removing irrelevant complexity, making the cause easier to isolate."
   ],
   [
    "A developer logs an account password to diagnose a loop counter. What is a better diagnostic choice?",
    "Log the relevant counter and omit the password",
    "Keep the password because more data is always better",
    "Remove all tests permanently",
    "The loop counter provides relevant evidence without unnecessarily recording a secret unrelated to the failure."
   ],
   [
    "Why inspect the first state divergence in a trace?",
    "Later incorrect values may be consequences of it",
    "The last line is always the only possible cause",
    "Early values cannot influence later calculations",
    "An early mistaken update can propagate into later results, so the first divergence helps locate a causal defect."
   ],
   [
    "Why change one well-defined cause at a time during diagnosis?",
    "It makes the effect of each change easier to evaluate",
    "It proves no regression test is needed",
    "It guarantees the first hypothesis is correct",
    "A focused experiment helps connect the observed change with a specific hypothesis while still requiring tests."
   ],
   [
    "A debug print shows the expected value at one line. What has been established?",
    "That value at that point in that execution",
    "Correctness for every later statement and input",
    "The absence of all exceptions in other runs",
    "One observation is local evidence; other paths, later mutations and other inputs remain to be checked."
   ]
  ],
  "qpics": {}
 },
 {
  "code": "CSTA 3B-AP-21 / 9",
  "name": "Isolation, repeatability and shared state",
  "skill": "s9",
  "teach": [
   "A useful test can reproduce the conditions that produced its result. Record the relevant input, code version and environment, and control dependencies where practical. Time, randomness, network responses and shared mutable state can make outcomes vary. Dependency injection means supplying a dependency explicitly, such as passing a clock function, so a test can use a controlled value. A seeded pseudo-random generator can aid reproducibility, but its exact sequence may depend on the chosen generator and software version. The goal is to make the cause of a failure interpretable, not to conceal real variability.",
   "Shared state can make one test affect another. A function using a mutable default parameter may retain changes across calls because the default object is created when the function definition executes. Use a default such as None and create a fresh list inside when each call needs its own container. Copying only an outer list can still share nested lists. For a nonmutating function, test the input after the call. A reliable regression case should fail because the requirement was violated, not because an unrelated prior test happened to run first."
  ],
  "boards": [
   [
    "Record inputs, version and relevant environment",
    "Control time, randomness and dependencies in tests",
    "Inject a dependency to supply a controlled substitute",
    "A fixed seed alone does not define every environment"
   ],
   [
    "Mutable defaults can retain changes across calls",
    "Use None then create a fresh container when needed",
    "Shallow copies can still share nested objects",
    "Tests should not depend on earlier leftover state"
   ]
  ],
  "eqs": [
   "Controlled dependency → repeatable input to the unit",
   "A default list is shared across calls using that default"
  ],
  "pics": [
   null,
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. def add(n, values=None):",
     "2.     if values is None:",
     "3.         values = []",
     "4.     values.append(n)",
     "5.     return values",
     "6. print(add(2))",
     "7. print(add(5))"
    ]
   }
  ],
  "questions": [
   [
    "Code: def add(n, values=[]): |     values.append(n) |     return len(values) | print(add(4)) | print(add(7)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "1 then 2",
    "1 then 1",
    "2 then 2",
    "Calls using the omitted argument share the default list created at definition time, so its length grows across calls."
   ],
   [
    "Code: def add(n, values=None): |     if values is None: |         values = [] |     values.append(n) |     return len(values) | print(add(4)) | print(add(7)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "1 then 1",
    "1 then 2",
    "0 then 0",
    "Each call receiving None creates a fresh list, so both returned lengths are one."
   ],
   [
    "Code: x = [3] | y = x | y.append(8) | print(x) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "[3, 8]",
    "[3]",
    "[8]",
    "The two names refer to one mutable list, so a mutation through y is visible through x."
   ],
   [
    "Code: x = [3] | y = x.copy() | y.append(8) | print(x) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "[3]",
    "[3, 8]",
    "[8]",
    "The copied outer list is a different object; appending to y does not append to x."
   ],
   [
    "Code: x = [[3]] | y = x.copy() | y[0].append(8) | print(x) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "[[3, 8]]",
    "[[3]]",
    "[[8]]",
    "The outer copy still shares its inner list, so mutating that inner object affects what x displays."
   ],
   [
    "A test fails only when run after another test that changes a global list. What should be investigated first?",
    "Leaked shared state between tests",
    "The assumption that all failures are random hardware faults",
    "Whether comments use the same font",
    "Dependence on test order strongly suggests that shared mutable state is not being reset or isolated correctly."
   ],
   [
    "How can passing a clock function help test time-dependent logic?",
    "The test can supply a controlled time value",
    "It eliminates the need for expected results",
    "It guarantees every real clock is accurate",
    "An explicit dependency allows a deterministic substitute while the test checks the unit's behavior for a known time."
   ],
   [
    "Which information makes an intermittent defect report more reproducible?",
    "Input, steps, code version and relevant environment",
    "Only the phrase sometimes broken",
    "Only the developer's favorite color",
    "These details help recreate the circumstances of a failure and distinguish environmental differences from code changes."
   ],
   [
    "A seeded random test changes after switching generator libraries. Why is the seed alone insufficient?",
    "The generator algorithm and environment also affect the sequence",
    "All seeded generators must produce identical values",
    "Seeds disable every random operation",
    "Reproducibility depends on the algorithm and relevant version as well as the seed value."
   ],
   [
    "A test replaces a network client with a fixed response. What does this most directly improve?",
    "Control of that dependency during the test",
    "Proof that the live network can never fail",
    "Elimination of all logic errors in the caller",
    "A fixed response isolates the unit from network variation but does not certify real-world service behavior."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def add(n, values=[]):",
     "2.     values.append(n)",
     "3.     return len(values)",
     "4. print(add(4))",
     "5. print(add(7))"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def add(n, values=None):",
     "2.     if values is None:",
     "3.         values = []",
     "4.     values.append(n)",
     "5.     return len(values)",
     "6. print(add(4))",
     "7. print(add(7))"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. x = [3]",
     "2. y = x",
     "3. y.append(8)",
     "4. print(x)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. x = [3]",
     "2. y = x.copy()",
     "3. y.append(8)",
     "4. print(x)"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. x = [[3]]",
     "2. y = x.copy()",
     "3. y[0].append(8)",
     "4. print(x)"
    ]
   }
  },
  "check": [
   "Code: def add(n, values=[]): |     values.append(n) |     return len(values) | print(add(2)) | print(add(6)) Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
   "1 then 2",
   "1 then 1",
   "2 then 1",
   "Both calls omit the argument and reuse the same default list, so the second call sees the first call's element."
  ],
  "checkPic": {
   "t": "program",
   "title": "Python 3 code",
   "lines": [
    "1. def add(n, values=[]):",
    "2.     values.append(n)",
    "3.     return len(values)",
    "4. print(add(2))",
    "5. print(add(6))"
   ]
  }
 },
 {
  "code": "CSTA 3A-AP-21 / 10",
  "name": "Regression checks, repairs and bug reports",
  "skill": "s10",
  "teach": [
   "After reproducing a defect, preserve a test that demonstrates it, make a targeted repair, and rerun the relevant existing tests. A regression test guards behavior that should keep working after a change. A passing new test alone does not show that old behavior remains correct. For a rule requiring numbers at least 5, changing > to >= should make input 5 pass while preserving the outcomes for 4 and 6. Review the code change as well as the test result, especially if the new test could pass for an unintended reason.",
   "A useful bug report states the steps to reproduce, relevant input and environment, expected behavior and actual behavior. Include a small example or traceback when helpful, without publishing secrets. Distinguish a defect from an intentional requirement change; changing an assertion to match a wrong result hides rather than repairs a bug. Tests can check functions and interfaces, while usability checks also ask whether people can understand instructions, use controls and recover from errors. The course's final workflow is to specify, reproduce, isolate, repair, retest and explain the evidence and its limits."
  ],
  "boards": [
   [
    "Preserve the failing case before repairing",
    "Rerun relevant earlier tests after the change",
    "A regression test protects intended old behavior",
    "Inspect why the new test passes"
   ],
   [
    "Report steps, input, environment, expected and actual",
    "A changed expectation needs a changed requirement",
    "Check understandable errors and usable controls",
    "Specify, reproduce, isolate, repair and retest"
   ]
  ],
  "eqs": [
   "At least 5: tests for 4, 5 and 6 should remain consistent",
   "Evidence of a fix includes the regression case and context"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked debugging example",
    "lines": [
     "1. def allowed(n):",
     "2.     return n >= 5",
     "3. assert not allowed(4)",
     "4. assert allowed(5)",
     "5. assert allowed(6)",
     "6. print('passed')"
    ]
   },
   null
  ],
  "questions": [
   [
    "Code: def allowed(n): |     return n >= 7 | assert not allowed(6) | assert allowed(7) | assert allowed(8) | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "passed",
    "AssertionError",
    "False",
    "The repaired inclusive rule rejects the below-boundary value and accepts the boundary and above-boundary values."
   ],
   [
    "Code: def allowed(n): |     return n > 7 | assert allowed(7) | print('passed') Run in normal Python 3 mode. What is printed, or which exception class is raised? Multiple output lines are joined by then.",
    "AssertionError",
    "passed",
    "7",
    "The strict comparison still rejects the required boundary value, so the regression test fails."
   ],
   [
    "What is the purpose of preserving a test for a repaired bug?",
    "Detect reintroduction of that defect",
    "Guarantee no future specification can change",
    "Replace every other relevant test",
    "A regression test records intended behavior and can fail if a later change brings the defect back."
   ],
   [
    "A patch passes its new test but breaks an existing supported case. What should happen next?",
    "Investigate and repair the regression",
    "Declare the patch complete because one test passed",
    "Delete the existing case without examining its requirement",
    "Supported behavior remains part of the contract, so a failing existing case needs investigation rather than dismissal."
   ],
   [
    "Which bug report is most actionable?",
    "Specific input and steps with expected and actual results",
    "It is broken sometimes, with no other details",
    "A request to guess which version was used",
    "Concrete reproduction details and a stated expectation allow another developer to observe and analyze the same discrepancy."
   ],
   [
    "A correct test fails on buggy code. The developer changes its expected value solely to make it pass. What occurred?",
    "The test was weakened to accept the defect",
    "The program was necessarily repaired",
    "The requirement was automatically approved to change",
    "Altering an otherwise valid expectation to match the implementation hides the mismatch unless the requirement deliberately changes."
   ],
   [
    "A requirement deliberately changes an allowed maximum from 10 to 12. What should be updated together?",
    "The implementation and requirement-based tests",
    "Only the test report's color",
    "Every unrelated function without evidence",
    "Both behavior and its expected results must reflect the new documented boundary, including relevant edge cases."
   ],
   [
    "A function's numeric tests pass, but its error message gives users no recovery guidance. What additional review is relevant?",
    "Usability of error handling",
    "Only its variable names in alphabetical order",
    "Proof that no further evaluation is possible",
    "Functional results do not settle whether users can understand a failure and recover, so usability remains relevant."
   ],
   [
    "Why record the code version with a reproduced failure?",
    "Behavior can differ between revisions",
    "Version numbers guarantee correctness",
    "The input no longer matters once a version is known",
    "A version identifies the implementation that produced the result and helps others reproduce the same conditions."
   ],
   [
    "What is a defensible report after a repair passes the relevant tests?",
    "The repair passes those tests, with their scope stated",
    "Every possible input is now proven correct",
    "No later change can cause a regression",
    "A clear report states the evidence and its coverage without claiming that finite testing proves every possible execution."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def allowed(n):",
     "2.     return n >= 7",
     "3. assert not allowed(6)",
     "4. assert allowed(7)",
     "5. assert allowed(8)",
     "6. print('passed')"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def allowed(n):",
     "2.     return n > 7",
     "3. assert allowed(7)",
     "4. print('passed')"
    ]
   }
  },
  "check": [
   "A repaired filter passes a new boundary test. Which next action best checks for regressions?",
   "Run relevant existing tests as well",
   "Delete every earlier failing report immediately",
   "Assume all other inputs are proven correct",
   "Existing tests check behavior that the repair should preserve, while the new case protects the specific corrected boundary."
  ]
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Begin with a clear requirement and an independently expected result. Distinguish syntax failures, runtime exceptions and silent logic defects. Trace state and control flow, then use boundaries and contrasting input classes to challenge plausible mistakes. Assertions, unit-test tools and debuggers provide different kinds of evidence. Keep tests independent, control relevant dependencies and check both successful and failing paths. Preserve a reproduced defect as a regression case, repair its cause, rerun relevant tests, and report what was tested and what remains outside that evidence.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"cs-h-programming-python-debugging-and-testing","subject":"cs","level":5,"grade":9,"standard":"CSTA K-12 Computer Science Standards (2017), 3A-AP-21 and 3B-AP-21: debugging, refinement and specification-based tests; original Python applications","title":"Debugging and Testing","goal":"Diagnose Python defects, choose revealing test cases, handle expected failures and verify repairs against explicit requirements.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
