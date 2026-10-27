/* Original course unit. Review record: docs/review/lessons/high-completion/python-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "CSTA 3A-AP-14 / 1",
  "name": "List values, indices and membership",
  "skill": "s1",
  "teach": [
   "A Python list stores an ordered sequence of references to objects. Square brackets create a list, and commas separate its elements. Lists can contain duplicates and values of different types. For scores = [12, 7, 12], len(scores) is 3; scores[0] is 12 and scores[1] is 7 because indices start at zero. The last positive index is len(scores) - 1. A negative index counts backward: scores[-1] is the last element, 12. Index 3 is outside this three-element list and raises IndexError. An empty list has length zero and has no valid element index.",
   "Membership asks whether an equal value occurs anywhere in the list. In [12, 7, 12], 7 in scores is True, while 1 in scores is False: membership checks values, not positions. Access by index gives one element; len gives a count. The expression list('map') creates three one-character strings rather than one element containing the whole word. A list can mix types, but choosing a consistent meaning for its elements makes processing easier. In these lessons, each displayed code block is one independent Python 3 program; a bar in the question separates source lines and leading spaces indicate indentation. If it raises an exception, identify the exception class."
  ],
  "boards": [
   [
    "A list is an ordered, mutable sequence",
    "Indices start at 0; -1 means the final element",
    "len counts elements, including duplicates",
    "An out-of-range element index raises IndexError"
   ],
   [
    "in tests values, not indices",
    "Empty list: []; length: 0",
    "A string passed to list becomes characters",
    "Each code block starts with a fresh namespace"
   ]
  ],
  "eqs": [
   "scores[0] = 12; scores[1] = 7; len(scores) = 3",
   "7 in [12, 7, 12] → True"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. scores = [12, 7, 12]",
     "2. print(scores[0], scores[-1])",
     "3. print(len(scores))"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. scores = [12, 7, 12]",
     "2. print(7 in scores)",
     "3. print(1 in scores)"
    ]
   }
  ],
  "questions": [
   [
    "Code: a = [8, 3, 11] | print(a[1]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "3",
    "8",
    "11",
    "Index 1 selects the second element, which is 3; Python list indexing starts at zero."
   ],
   [
    "Code: a = [9, 4, 6] | print(a[-1]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "6",
    "9",
    "IndexError",
    "Negative index -1 selects the last element, so this program prints 6 rather than the first element."
   ],
   [
    "Code: a = [2, 2, 5, 2] | print(len(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "4",
    "2",
    "3",
    "Length counts all four stored elements, including repeated values; it is not a count of distinct values."
   ],
   [
    "Code: a = [] | print(len(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "0",
    "None",
    "IndexError",
    "An empty list is valid and has length zero; len does not try to access an element."
   ],
   [
    "Code: a = [5, 10, 15] | print(a[3]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "IndexError",
    "15",
    "None",
    "A list of length three has nonnegative indices 0, 1 and 2; index 3 is out of range."
   ],
   [
    "Code: a = [5, 10, 15] | print(1 in a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "False",
    "True",
    "10",
    "Membership checks whether the value 1 occurs, not whether index 1 exists in the list."
   ],
   [
    "Code: a = [5, 10, 15] | print(10 in a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "True",
    "False",
    "1",
    "The value 10 is present, so the membership expression is True; it does not return its index."
   ],
   [
    "Code: a = [4, 9, 2, 7] | print(a[-2]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "2",
    "9",
    "7",
    "Index -2 counts two positions from the end, selecting the third element of this four-element list."
   ],
   [
    "Code: a = list('ink') | print(len(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "3",
    "1",
    "0",
    "list receives an iterable string and stores its three characters as three separate elements."
   ],
   [
    "Code: a = [6, 'blue', False] | print(a[1]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "blue",
    "'blue'",
    "6",
    "Index 1 selects the string blue, and print displays its characters without surrounding representation quotes."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [8, 3, 11]",
     "2. print(a[1])"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [9, 4, 6]",
     "2. print(a[-1])"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 2, 5, 2]",
     "2. print(len(a))"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = []",
     "2. print(len(a))"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [5, 10, 15]",
     "2. print(a[3])"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [5, 10, 15]",
     "2. print(1 in a)"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [5, 10, 15]",
     "2. print(10 in a)"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 9, 2, 7]",
     "2. print(a[-2])"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = list('ink')",
     "2. print(len(a))"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [6, 'blue', False]",
     "2. print(a[1])"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 2",
  "name": "Slicing and sequence combinations",
  "skill": "s2",
  "teach": [
   "A slice a[start:stop] selects elements beginning at start and ending before stop. For a = [3, 6, 9, 12, 15], a[1:4] gives [6, 9, 12], while a[:2] gives [3, 6]. Omitted bounds reach the relevant end. Unlike a single out-of-range index, a slice can be clipped to the available range without raising IndexError. a[3:1] with the default positive step is empty. A slice produces a new outer list, but its elements still refer to the same underlying objects; nested copying needs special care later in the unit.",
   "The optional third slice component is a step: a[::2] selects every second element, starting at index zero. With a negative step, traversal goes backward; a[::-1] makes a reversed shallow copy. A zero step raises ValueError. Adding two lists concatenates their elements into a new list; it does not add the corresponding numbers. Multiplying a list by a nonnegative integer repeats its references: [2, 5] * 2 gives [2, 5, 2, 5]. This is convenient for immutable elements but can accidentally share nested lists. The operations +, slicing and repetition do not themselves modify their source lists."
  ],
  "boards": [
   [
    "a[start:stop] includes start but excludes stop",
    "Omitted bounds use the relevant end",
    "Out-of-range slice bounds are clipped",
    "Slicing creates a new outer list"
   ],
   [
    "a[::2] takes every other element",
    "a[::-1] reverses into a shallow copy",
    "A slice step cannot be zero",
    "+ concatenates; * repeats references"
   ]
  ],
  "eqs": [
   "[3, 6, 9, 12, 15][1:4] → [6, 9, 12]",
   "[2, 5] * 2 → [2, 5, 2, 5]"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [3, 6, 9, 12, 15]",
     "2. print(a[1:4])",
     "3. print(a[:2])"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [3, 6, 9, 12, 15]",
     "2. print(a[::2])",
     "3. print(a[::-1])"
    ]
   }
  ],
  "questions": [
   [
    "Code: a = [4, 8, 12, 16, 20] | print(a[1:3]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[8, 12]",
    "[8, 12, 16]",
    "[4, 8, 12]",
    "The slice includes indices 1 and 2 but excludes index 3, producing the two-element list [8, 12]."
   ],
   [
    "Code: a = [7, 14, 21, 28] | print(a[:2]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[7, 14]",
    "[7, 14, 21]",
    "[21, 28]",
    "The omitted start begins at index zero and stop 2 is excluded, so the first two elements are selected."
   ],
   [
    "Code: a = [5, 10, 15, 20] | print(a[2:]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[15, 20]",
    "[10, 15, 20]",
    "[5, 10]",
    "Start index 2 selects 15 and the omitted stop continues through the end of the list."
   ],
   [
    "Code: a = [1, 3, 5] | print(a[:20]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[1, 3, 5]",
    "IndexError",
    "[]",
    "Slice bounds beyond the list end are clipped, unlike an attempt to access a single nonexistent index."
   ],
   [
    "Code: a = [2, 4, 6, 8] | print(a[3:1]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[]",
    "[8, 6]",
    "[4, 6, 8]",
    "The default step is positive, so a start after the stop selects no elements."
   ],
   [
    "Code: a = [6, 7, 8, 9, 10] | print(a[::2]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[6, 8, 10]",
    "[7, 9]",
    "[6, 7]",
    "A step of two starting at zero selects indices 0, 2 and 4, including the final value 10."
   ],
   [
    "Code: a = [1, 4, 9] | print(a[::-1]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[9, 4, 1]",
    "[1, 4, 9]",
    "[]",
    "An omitted start and stop with step -1 traverse the entire list backward into a new outer list."
   ],
   [
    "Code: a = [3, 5] | b = a + [7] | print(a, b) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[3, 5] [3, 5, 7]",
    "[3, 5, 7] [3, 5, 7]",
    "[10, 12] [7]",
    "Concatenation creates b without changing a; print separates the two list representations with a space."
   ],
   [
    "Code: a = [2, 8] | print(a * 2) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[2, 8, 2, 8]",
    "[4, 16]",
    "[2, 2, 8, 8]",
    "List repetition repeats the sequence of references in order; it is not elementwise multiplication."
   ],
   [
    "Code: a = [1, 2] | print(a[::0]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "ValueError",
    "[]",
    "[1, 2]",
    "A slice step of zero is invalid and raises ValueError rather than producing a list."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 8, 12, 16, 20]",
     "2. print(a[1:3])"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [7, 14, 21, 28]",
     "2. print(a[:2])"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [5, 10, 15, 20]",
     "2. print(a[2:])"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 3, 5]",
     "2. print(a[:20])"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 4, 6, 8]",
     "2. print(a[3:1])"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [6, 7, 8, 9, 10]",
     "2. print(a[::2])"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 4, 9]",
     "2. print(a[::-1])"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 5]",
     "2. b = a + [7]",
     "3. print(a, b)"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 8]",
     "2. print(a * 2)"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 2]",
     "2. print(a[::0])"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 3",
  "name": "Changing a list with methods",
  "skill": "s3",
  "teach": [
   "Lists are mutable: assigning a[i] replaces an existing element. Methods can also change length. append(x) adds one object at the end, while extend(iterable) adds each object produced by the iterable. Starting with [4], append([7, 8]) makes [4, [7, 8]], a two-element list; extend([7, 8]) makes [4, 7, 8], a three-element list. insert(i, x) places x before position i and shifts later elements. These methods modify the list and return None. A common mistake is writing a = a.append(x): the append happens, then the name a is rebound to None.",
   "Removal methods differ in what they identify and return. remove(value) deletes the first equal element and raises ValueError if no match exists. pop(index) removes and returns an element at a position; without an index it removes the last element, and popping an empty list raises IndexError. del a[i] deletes by index without yielding a return value. clear() removes all elements while preserving the list object itself. For [3, 6, 3, 9], remove(3) leaves [6, 3, 9], while pop(1) would return 6 from the original list. Trace each mutation in order, since earlier changes can shift later indices."
  ],
  "boards": [
   [
    "Index assignment replaces an existing element",
    "append adds one object; extend adds each item",
    "insert puts an element before a position",
    "append, extend and insert return None"
   ],
   [
    "remove selects the first equal value",
    "pop selects an index and returns the element",
    "del removes by index; clear empties the list",
    "After removal, later indices shift left"
   ]
  ],
  "eqs": [
   "append([7, 8]) adds one nested element to [4]",
   "remove(value) differs from pop(index)"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [4]",
     "2. a.append([7, 8])",
     "3. print(a)",
     "4. b = [4]",
     "5. b.extend([7, 8])",
     "6. print(b)"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [3, 6, 3, 9]",
     "2. a.remove(3)",
     "3. print(a)",
     "4. print(a.pop())",
     "5. print(a)"
    ]
   }
  ],
  "questions": [
   [
    "Code: a = [2, 5] | a.append(9) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[2, 5, 9]",
    "[9, 2, 5]",
    "[2, 5]",
    "append adds the new object at the end and mutates the existing list."
   ],
   [
    "Code: a = [2] | a.append([4, 6]) | print(len(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "2",
    "3",
    "1",
    "append adds the entire inner list as one element, so the outer list has two elements."
   ],
   [
    "Code: a = [2] | a.extend([4, 6]) | print(len(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "3",
    "2",
    "1",
    "extend adds 4 and 6 as separate elements, increasing the outer length from one to three."
   ],
   [
    "Code: a = [5, 9] | a.insert(1, 7) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[5, 7, 9]",
    "[7, 5, 9]",
    "[5, 9, 7]",
    "insert with index 1 places 7 before the element currently at that position, which is 9."
   ],
   [
    "Code: a = [3, 8, 3] | a.remove(3) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[8, 3]",
    "[8]",
    "[3, 8]",
    "remove deletes only the first equal occurrence, leaving the later 3 in place."
   ],
   [
    "Code: a = [6, 10, 14] | print(a.pop(1)) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "10 then [6, 14]",
    "1 then [6, 14]",
    "10 then [6, 10, 14]",
    "pop returns the removed value 10 and mutates the list, leaving 6 and 14."
   ],
   [
    "Code: a = [4, 7] | result = a.append(8) | print(result) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "None",
    "[4, 7, 8]",
    "8",
    "append changes a but returns None; the result variable therefore refers to None."
   ],
   [
    "Code: a = [1, 2] | a.remove(9) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "ValueError",
    "[1, 2]",
    "None",
    "No element equals 9, so remove raises ValueError before the later print runs."
   ],
   [
    "Code: a = [] | print(a.pop()) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "IndexError",
    "None",
    "0",
    "An empty list has no last element to remove, so pop raises IndexError."
   ],
   [
    "Code: a = [4, 5, 6] | a[1] = 20 | del a[0] | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[20, 6]",
    "[4, 20, 6]",
    "[5, 6]",
    "Assignment changes the middle value to 20; deleting index zero then removes 4 and shifts the remaining values."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 5]",
     "2. a.append(9)",
     "3. print(a)"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2]",
     "2. a.append([4, 6])",
     "3. print(len(a))"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2]",
     "2. a.extend([4, 6])",
     "3. print(len(a))"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [5, 9]",
     "2. a.insert(1, 7)",
     "3. print(a)"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 8, 3]",
     "2. a.remove(3)",
     "3. print(a)"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [6, 10, 14]",
     "2. print(a.pop(1))",
     "3. print(a)"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 7]",
     "2. result = a.append(8)",
     "3. print(result)"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 2]",
     "2. a.remove(9)",
     "3. print(a)"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = []",
     "2. print(a.pop())"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 5, 6]",
     "2. a[1] = 20",
     "3. del a[0]",
     "4. print(a)"
    ]
   }
  },
  "check": [
   "Code: a = [3, 8] | a.extend([10, 12]) | print(a.pop()) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
   "12",
   "10",
   "[10, 12]",
   "extend adds two separate values, and pop without an index removes and returns the last value, 12."
  ],
  "checkPic": {
   "t": "program",
   "title": "Python 3 code",
   "lines": [
    "1. a = [3, 8]",
    "2. a.extend([10, 12])",
    "3. print(a.pop())"
   ]
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 4",
  "name": "Ordering, counting and reductions",
  "skill": "s4",
  "teach": [
   "sort() orders a list in place, while sorted(iterable) returns a new sorted list and leaves an ordinary input list unchanged. Both default to ascending order, and reverse=True requests descending order. a.reverse() simply reverses the current order, which need not be sorted. For [8, 2, 5], reverse gives [5, 2, 8] while sort gives [2, 5, 8]. Like other mutating list methods, sort and reverse return None. Sorting requires an ordering that the elements support; ordinary integers and strings cannot be directly ordered together in Python 3.",
   "Several operations summarize a list. count(x) counts equal occurrences; index(x) gives the first matching index and raises ValueError when no match exists. sum adds numeric elements, while min and max find extremes. sum([]) is zero with the default start value, but min([]) and max([]) have no element to choose and raise ValueError unless a suitable default is supplied. A program that needs an average must handle an empty list before dividing by len. For readings = [4, 10, 4], sum is 18, count(4) is 2 and index(4) is 0. These answer different questions about the same data."
  ],
  "boards": [
   [
    "sort changes the list; sorted makes a new one",
    "reverse flips order without sorting",
    "sort and reverse return None",
    "A common ordering must be defined for the elements"
   ],
   [
    "count gives occurrences; index gives first position",
    "sum totals numeric values",
    "min and max select existing extreme values",
    "Handle empty collections before taking averages"
   ]
  ],
  "eqs": [
   "[8, 2, 5] reversed → [5, 2, 8]; sorted → [2, 5, 8]",
   "sum([4, 10, 4]) = 18; count(4) = 2"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [8, 2, 5]",
     "2. b = sorted(a)",
     "3. print(a)",
     "4. print(b)"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [4, 10, 4]",
     "2. print(sum(a))",
     "3. print(a.count(4))",
     "4. print(a.index(4))"
    ]
   }
  ],
  "questions": [
   [
    "Code: a = [9, 1, 5] | a.sort() | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[1, 5, 9]",
    "[9, 5, 1]",
    "None",
    "sort changes a to ascending order; the later print displays the sorted list itself."
   ],
   [
    "Code: a = [9, 1, 5] | b = sorted(a) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[9, 1, 5]",
    "[1, 5, 9]",
    "None",
    "sorted creates another list and does not change the original a, which retains its order."
   ],
   [
    "Code: a = [2, 9, 4] | a.reverse() | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[4, 9, 2]",
    "[9, 4, 2]",
    "[2, 4, 9]",
    "reverse flips the current sequence without sorting its values; 4 becomes first and 2 becomes last."
   ],
   [
    "Code: a = [6, 2, 8] | print(a.sort()) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "None",
    "[2, 6, 8]",
    "[8, 6, 2]",
    "The sort operation mutates a and returns None; print receives that return value."
   ],
   [
    "Code: a = [3, 8, 5] | print(sorted(a, reverse=True)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[8, 5, 3]",
    "[5, 8, 3]",
    "[3, 5, 8]",
    "reverse=True requests descending sorted order, not just reversal of the original arrangement."
   ],
   [
    "Code: a = [7, 2, 7, 7] | print(a.count(7)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "3",
    "4",
    "0",
    "Three stored elements equal 7; count reports the number of matches rather than a position."
   ],
   [
    "Code: a = [7, 2, 7] | print(a.index(7)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "0",
    "2",
    "7",
    "index finds the first equal value at zero-based position 0, even though another match occurs later."
   ],
   [
    "Code: a = [4, 6, 9] | print(sum(a), min(a), max(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "19 4 9",
    "3 4 9",
    "19 9 4",
    "The numeric total is 19, the smallest element is 4 and the largest is 9, in that printed order."
   ],
   [
    "Code: a = [] | print(sum(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "0",
    "ValueError",
    "None",
    "sum uses an initial zero by default, so adding no elements produces zero."
   ],
   [
    "Code: a = [] | print(max(a)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "ValueError",
    "0",
    "None",
    "Without a default, max cannot select a largest element from an empty iterable and raises ValueError."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [9, 1, 5]",
     "2. a.sort()",
     "3. print(a)"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [9, 1, 5]",
     "2. b = sorted(a)",
     "3. print(a)"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 9, 4]",
     "2. a.reverse()",
     "3. print(a)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [6, 2, 8]",
     "2. print(a.sort())"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 8, 5]",
     "2. print(sorted(a, reverse=True))"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [7, 2, 7, 7]",
     "2. print(a.count(7))"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [7, 2, 7]",
     "2. print(a.index(7))"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 6, 9]",
     "2. print(sum(a), min(a), max(a))"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = []",
     "2. print(sum(a))"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = []",
     "2. print(max(a))"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 5",
  "name": "Iteration, filtering and comprehensions",
  "skill": "s5",
  "teach": [
   "A for loop over a list visits its elements in order. The loop variable receives each element, not its index. enumerate(a) provides pairs of index and element, starting at zero unless a different start is supplied. To accumulate a total, initialize it once before the loop and update it for each value. For [5, 1, 8], a running total goes 0, 5, 6, 14. Assigning a new integer to the loop variable does not replace an element in the list; change a[i] explicitly when index-based replacement is intended.",
   "A list comprehension creates a new list from an expression applied to each visited item, optionally after a filter. [x * 2 for x in [3, 7]] gives [6, 14]. [x for x in values if x > 0] retains positive values in their original order, including duplicates. Map the expression and test the condition separately; filtering does not sort. A reliable way to remove selected elements is to build a new filtered list. Removing from the same list being traversed can shift elements and skip them. Check empty, singleton, repeated and boundary values when testing a list algorithm."
  ],
  "boards": [
   [
    "for x in a visits values in sequence order",
    "enumerate pairs each index with its value",
    "Initialize accumulators before the loop",
    "Rebinding the loop name does not replace an element"
   ],
   [
    "Comprehensions create new lists",
    "Expression transforms; if condition filters",
    "Filtering preserves order and duplicates",
    "Avoid removing from the list being traversed"
   ]
  ],
  "eqs": [
   "0 + 5 + 1 + 8 = 14",
   "[x * 2 for x in [3, 7]] → [6, 14]"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [5, 1, 8]",
     "2. total = 0",
     "3. for x in a:",
     "4.     total += x",
     "5. print(total)"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [-2, 4, 0, 4]",
     "2. positives = [x for x in a if x > 0]",
     "3. print(positives)"
    ]
   }
  ],
  "questions": [
   [
    "Code: a = [2, 5, 4] | total = 0 | for x in a: |     total += x | print(total) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "11",
    "4",
    "3",
    "The accumulator adds each value to its previous total, so 2 plus 5 plus 4 gives 11."
   ],
   [
    "Code: a = [3, 6] | for x in a: |     print(x * 2) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "6 then 12",
    "0 then 2",
    "[6, 12]",
    "The loop visits values 3 and 6 and prints each doubled value on its own line."
   ],
   [
    "Code: a = [4, 7] | for x in a: |     x = 0 | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[4, 7]",
    "[0, 0]",
    "[4, 0]",
    "Rebinding x to an integer does not assign into either list position, so the list remains unchanged."
   ],
   [
    "Code: a = [4, 7] | for i in range(len(a)): |     a[i] += 1 | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[5, 8]",
    "[4, 7]",
    "[1, 1]",
    "The code explicitly updates a[i] for indices 0 and 1, increasing both stored values by one."
   ],
   [
    "Code: a = [1, 5, 2] | print([x * 3 for x in a]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[3, 15, 6]",
    "[1, 5, 2, 1, 5, 2, 1, 5, 2]",
    "[3, 5, 2]",
    "The comprehension multiplies each numeric element, unlike multiplying the list itself to repeat it."
   ],
   [
    "Code: a = [-3, 2, 0, 2] | print([x for x in a if x > 0]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[2, 2]",
    "[0, 2, 2]",
    "[2]",
    "The strict positive test excludes -3 and 0, while both occurrences of 2 remain in order."
   ],
   [
    "Code: a = [1, 2, 3, 4] | print([x*x for x in a if x % 2 == 0]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[4, 16]",
    "[1, 9]",
    "[2, 4]",
    "The condition selects even values 2 and 4, then the expression squares them to 4 and 16."
   ],
   [
    "Code: a = [8, 5] | print(list(enumerate(a))) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[(0, 8), (1, 5)]",
    "[(1, 8), (2, 5)]",
    "[(8, 0), (5, 1)]",
    "enumerate uses zero-based positions by default and pairs each position with its corresponding value."
   ],
   [
    "Code: a = [] | print([x + 1 for x in a]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[]",
    "[1]",
    "IndexError",
    "The empty input provides no iterations, so the comprehension produces an empty list without indexing anything."
   ],
   [
    "Code: a = [3, 3, 5] | print([x for x in a if x != 3]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[5]",
    "[3, 5]",
    "[3, 3]",
    "A new filtered list excludes every element equal to 3 without mutating the traversed input list."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 5, 4]",
     "2. total = 0",
     "3. for x in a:",
     "4.     total += x",
     "5. print(total)"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 6]",
     "2. for x in a:",
     "3.     print(x * 2)"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 7]",
     "2. for x in a:",
     "3.     x = 0",
     "4. print(a)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [4, 7]",
     "2. for i in range(len(a)):",
     "3.     a[i] += 1",
     "4. print(a)"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 5, 2]",
     "2. print([x * 3 for x in a])"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [-3, 2, 0, 2]",
     "2. print([x for x in a if x > 0])"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 2, 3, 4]",
     "2. print([x*x for x in a if x % 2 == 0])"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [8, 5]",
     "2. print(list(enumerate(a)))"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = []",
     "2. print([x + 1 for x in a])"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 3, 5]",
     "2. print([x for x in a if x != 3])"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 6",
  "name": "Aliasing, copying and mutation",
  "skill": "s6",
  "teach": [
   "Assignment does not copy a list. After a = [6, 2] and b = a, both names refer to the same object, so b.append(9) is visible through a as well. Equality, written ==, compares list contents; identity, written is, asks whether two references identify the same object. Two independently created lists can be equal without being identical. Rebinding b to a new list changes what b refers to, leaving a attached to the earlier object. Mutating the shared list and rebinding a name are different operations.",
   "a.copy() and a[:] make shallow copies: a new outer list containing the same element references. Replacing a position in the copy does not replace that position in the original. But if an element is itself a mutable list, changing that inner list is visible through both outer lists. For a = [[4], [8]], b = a.copy(), then b[0].append(6) changes the shared inner list to [4, 6]. For a two-level grid, [row.copy() for row in a] copies each row too; deeper nesting may require a deeper copying strategy. A function can mutate a passed list even though rebinding its local parameter does not rebind the caller's variable."
  ],
  "boards": [
   [
    "b = a creates another reference, not a copy",
    "Mutation is visible through shared references",
    "== compares contents; is compares identity",
    "Rebinding a name leaves other references intact"
   ],
   [
    "copy and slicing make new outer lists",
    "Nested mutable elements can still be shared",
    "Copy rows separately for an independent 2D grid",
    "A function can mutate a list passed as an argument"
   ]
  ],
  "eqs": [
   "a = [6, 2]; b = a; b.append(9) → a is [6, 2, 9]",
   "A shallow copy shares its nested element objects"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [6, 2]",
     "2. b = a",
     "3. b.append(9)",
     "4. print(a)",
     "5. print(a is b)"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. a = [[4], [8]]",
     "2. b = a.copy()",
     "3. b[0].append(6)",
     "4. print(a)",
     "5. print(a is b)"
    ]
   }
  ],
  "questions": [
   [
    "Code: a = [2, 9] | b = a | b.append(5) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[2, 9, 5]",
    "[2, 9]",
    "[5]",
    "a and b refer to the same list, so appending through b changes the object seen through a."
   ],
   [
    "Code: a = [2, 9] | b = a | b = [5] | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[2, 9]",
    "[5]",
    "[2, 9, 5]",
    "Rebinding b to a new object does not mutate the old list that a still references."
   ],
   [
    "Code: a = [1, 6] | b = a.copy() | b[0] = 8 | print(a, b) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[1, 6] [8, 6]",
    "[8, 6] [8, 6]",
    "[1, 6] [1, 6]",
    "The shallow copy is a distinct outer list, so replacing its first element does not replace a's first element."
   ],
   [
    "Code: a = [1, 6] | b = a[:] | print(a == b, a is b) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "True False",
    "True True",
    "False False",
    "Slicing creates a different outer list with equal elements; content equality is True and identity is False."
   ],
   [
    "Code: a = [[2], [7]] | b = a.copy() | b[0].append(4) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[[2, 4], [7]]",
    "[[2], [7]]",
    "[[4], [7]]",
    "The shallow copy shares its inner lists, so appending to the first inner list is visible through a."
   ],
   [
    "Code: a = [[2], [7]] | b = a.copy() | b[0] = [4] | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[[2], [7]]",
    "[[4], [7]]",
    "[[2, 4], [7]]",
    "Assigning a replacement inner list changes only b's outer position; it does not mutate the formerly shared inner list."
   ],
   [
    "Code: a = [3, 8] | b = a | b.clear() | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[]",
    "[3, 8]",
    "None",
    "clear mutates the shared list to contain no elements, and a still refers to that now-empty object."
   ],
   [
    "Code: a = [3, 8] | b = a | del b | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[3, 8]",
    "[]",
    "NameError",
    "Deleting the name b does not empty the list or remove a's separate reference to it."
   ],
   [
    "Code: def add(a): |     a.append(12) | x = [4] | add(x) | print(x) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[4, 12]",
    "[4]",
    "[12]",
    "The function's parameter refers to the caller's list, and append mutates that object."
   ],
   [
    "Code: def reset(a): |     a = [] | x = [4] | reset(x) | print(x) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[4]",
    "[]",
    "None",
    "Rebinding the local parameter to a new empty list does not rebind the caller's variable x."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 9]",
     "2. b = a",
     "3. b.append(5)",
     "4. print(a)"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [2, 9]",
     "2. b = a",
     "3. b = [5]",
     "4. print(a)"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 6]",
     "2. b = a.copy()",
     "3. b[0] = 8",
     "4. print(a, b)"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [1, 6]",
     "2. b = a[:]",
     "3. print(a == b, a is b)"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [[2], [7]]",
     "2. b = a.copy()",
     "3. b[0].append(4)",
     "4. print(a)"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [[2], [7]]",
     "2. b = a.copy()",
     "3. b[0] = [4]",
     "4. print(a)"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 8]",
     "2. b = a",
     "3. b.clear()",
     "4. print(a)"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. a = [3, 8]",
     "2. b = a",
     "3. del b",
     "4. print(a)"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def add(a):",
     "2.     a.append(12)",
     "3. x = [4]",
     "4. add(x)",
     "5. print(x)"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. def reset(a):",
     "2.     a = []",
     "3. x = [4]",
     "4. reset(x)",
     "5. print(x)"
    ]
   }
  },
  "check": [
   "Code: a = [[5]] | b = a.copy() | b[0].append(9) | print(a) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
   "[[5, 9]]",
   "[[5]]",
   "[[9]]",
   "copy creates a new outer list, but both outer lists still reference the same inner list, which append mutates."
  ],
  "checkPic": {
   "t": "program",
   "title": "Python 3 code",
   "lines": [
    "1. a = [[5]]",
    "2. b = a.copy()",
    "3. b[0].append(9)",
    "4. print(a)"
   ]
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 7",
  "name": "Nested lists and row structure",
  "skill": "s7",
  "teach": [
   "A nested list can represent rows of a table. In grid = [[2, 4, 6], [8, 10, 12]], grid[1] selects the second row and grid[1][2] selects its third element, 12. The first index is applied to the outer list; the second is applied to the selected row. len(grid) counts rows, not all cells. Different rows can have different lengths, so a nested list is not automatically rectangular. To count cells in a ragged structure, sum the row lengths. Here the two row lengths are 3 and 3, giving six cells.",
   "Repeated references are a common grid bug. In grid = [[0, 0]] * 3, all three positions refer to one inner list; changing grid[0][1] also appears in the other rows. Build independent rows with [[0, 0] for _ in range(3)] when that is intended. Nested loops visit each row and then each value within it. A comprehension such as [value for row in grid for value in row] flattens one level into a new list in row order. Copying the outer list alone still shares rows. Test both the selected cell and neighboring rows when checking a grid update."
  ],
  "boards": [
   [
    "grid[row][column] applies two indices",
    "len(grid) counts rows, not cells",
    "Rows can have unequal lengths",
    "Cell count = sum of the row lengths"
   ],
   [
    "[[0, 0]] * 3 repeats one row reference",
    "Use a comprehension to create separate rows",
    "Nested loops visit rows, then their cells",
    "A shallow outer copy still shares its rows"
   ]
  ],
  "eqs": [
   "grid[1][2] selects row 1, column 2: 12",
   "sum(len(row) for row in grid) counts all cells"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. grid = [[2, 4, 6], [8, 10, 12]]",
     "2. print(grid[1][2])",
     "3. print(len(grid))"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. grid = [[0, 0] for _ in range(3)]",
     "2. grid[0][1] = 7",
     "3. print(grid)"
    ]
   }
  ],
  "questions": [
   [
    "Code: g = [[3, 6], [9, 12]] | print(g[1][0]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "9",
    "6",
    "12",
    "The first index selects the second row [9, 12]; index zero within that row selects 9."
   ],
   [
    "Code: g = [[1, 2, 3], [4]] | print(len(g)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "2",
    "4",
    "3",
    "The outer list contains two row objects; len does not recursively count their elements."
   ],
   [
    "Code: g = [[1, 2, 3], [4]] | print(sum(len(row) for row in g)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "4",
    "2",
    "3",
    "The row lengths are three and one, so the total cell count is four even though the grid is ragged."
   ],
   [
    "Code: g = [[1, 2], [3, 4]] | g[0][1] = 9 | print(g) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[[1, 9], [3, 4]]",
    "[[9, 2], [3, 4]]",
    "[[1, 2], [3, 9]]",
    "The assignment targets row zero and column one, replacing 2 with 9 in the first row."
   ],
   [
    "Code: g = [[0]] * 2 | g[0][0] = 7 | print(g) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[[7], [7]]",
    "[[7], [0]]",
    "[[0], [7]]",
    "Repetition stores the same inner list reference twice, so both positions display the mutation of that one row."
   ],
   [
    "Code: g = [[0] for _ in range(2)] | g[0][0] = 7 | print(g) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[[7], [0]]",
    "[[7], [7]]",
    "[[0], [7]]",
    "Each comprehension iteration constructs a new inner list, so changing row zero leaves row one unchanged."
   ],
   [
    "Code: g = [[1, 5], [2, 8]] | print([v for row in g for v in row]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[1, 5, 2, 8]",
    "[1, 2, 5, 8]",
    "[[1, 5], [2, 8]]",
    "The outer traversal selects each row, and the inner traversal emits all its values before moving to the next row."
   ],
   [
    "Code: g = [[2, 3], [4, 5]] | print(sum(row[1] for row in g)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "8",
    "6",
    "14",
    "Column index one contains 3 and 5; their sum is 8, not the sum of every cell."
   ],
   [
    "Code: g = [[2, 3], [4]] | print(g[1][1]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "IndexError",
    "4",
    "None",
    "The second row contains only one element at index zero, so its index one is out of range."
   ],
   [
    "Code: g = [[2], [8]] | h = [row.copy() for row in g] | h[0][0] = 6 | print(g) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[[2], [8]]",
    "[[6], [8]]",
    "[[2, 6], [8]]",
    "Copying each row makes separate inner lists for this two-level grid, so changing h's first cell leaves g unchanged."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[3, 6], [9, 12]]",
     "2. print(g[1][0])"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[1, 2, 3], [4]]",
     "2. print(len(g))"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[1, 2, 3], [4]]",
     "2. print(sum(len(row) for row in g))"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[1, 2], [3, 4]]",
     "2. g[0][1] = 9",
     "3. print(g)"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[0]] * 2",
     "2. g[0][0] = 7",
     "3. print(g)"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[0] for _ in range(2)]",
     "2. g[0][0] = 7",
     "3. print(g)"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[1, 5], [2, 8]]",
     "2. print([v for row in g for v in row])"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[2, 3], [4, 5]]",
     "2. print(sum(row[1] for row in g))"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[2, 3], [4]]",
     "2. print(g[1][1])"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. g = [[2], [8]]",
     "2. h = [row.copy() for row in g]",
     "3. h[0][0] = 6",
     "4. print(g)"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 8",
  "name": "Dictionary keys, values and updates",
  "skill": "s8",
  "teach": [
   "A dictionary maps unique keys to values. Write pairs inside braces, such as stock = {'pens': 4, 'pads': 2}; stock['pens'] retrieves 4. Keys describe lookup meaning and need not be sequential positions. A dictionary may have an integer key 0, but d[0] then means the value associated with key 0, not necessarily the first inserted value. Assigning to an existing key replaces its value without adding another key; assigning to a new key adds a pair. len(d) counts pairs. Repeating a key in a literal retains the last assigned value for that key.",
   "Dictionary keys must be hashable. Strings, integers and tuples of hashable elements can be keys; a list cannot and causes TypeError if used as a key. Values can be mutable objects, including lists or other dictionaries. In Python 3.7 and later, dictionaries preserve insertion order, but that does not make integer positions into implicit keys. Replacing an existing key's value keeps that key in its original order; deleting and reinserting it moves it to the end. A dictionary is suitable for lookup by a meaningful identifier, while a list is useful when sequence order and positions are central."
  ],
  "boards": [
   [
    "Dictionary: unique keys mapped to values",
    "d[key] looks up a key, not a list position",
    "Assignment replaces or adds one key-value pair",
    "len(d) counts key-value pairs"
   ],
   [
    "Keys must be hashable; lists cannot be keys",
    "Values can be lists or other mutable objects",
    "Python 3.7+ preserves key insertion order",
    "Replacing a value does not move its existing key"
   ]
  ],
  "eqs": [
   "stock = {\"pens\": 4, \"pads\": 2}; stock[\"pens\"] = 4",
   "Key meaning differs from sequence position"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. stock = {'pens': 4, 'pads': 2}",
     "2. stock['pens'] = 7",
     "3. print(stock['pens'])",
     "4. print(len(stock))"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. d = {'elm': 2, 'oak': 5}",
     "2. d['elm'] = 9",
     "3. print(list(d))"
    ]
   }
  ],
  "questions": [
   [
    "Code: d = {'red': 4, 'blue': 7} | print(d['blue']) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "7",
    "blue",
    "1",
    "Dictionary lookup uses the key blue and returns its associated value, 7, rather than an index."
   ],
   [
    "Code: d = {'red': 4} | d['red'] = 9 | print(len(d), d['red']) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "1 9",
    "2 9",
    "1 4",
    "Assigning an existing key replaces its value, so the dictionary still has one pair and its value is now 9."
   ],
   [
    "Code: d = {'red': 4} | d['green'] = 2 | print(len(d)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "2",
    "1",
    "6",
    "green is a new key, so adding its pair increases the dictionary length from one to two."
   ],
   [
    "Code: d = {'a': 2, 'b': 3, 'a': 8} | print(d['a'], len(d)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "8 2",
    "2 3",
    "8 3",
    "The repeated key a receives its last value, 8, while only the distinct keys a and b remain."
   ],
   [
    "Code: d = {0: 'north', 5: 'south'} | print(d[0]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "north",
    "south",
    "KeyError",
    "The integer zero is an explicit dictionary key mapped to north; this is key lookup, not positional indexing."
   ],
   [
    "Code: d = {'a': 2, 'b': 3} | print(d[0]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "KeyError",
    "2",
    "IndexError",
    "No key equal to zero exists, so lookup raises KeyError even though the dictionary contains two entries."
   ],
   [
    "Code: d = {} | d[[1, 2]] = 5 | print(d) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "TypeError",
    "{[1, 2]: 5}",
    "{}",
    "A list is unhashable and cannot be used as a dictionary key, so assignment raises TypeError."
   ],
   [
    "Code: d = {(1, 2): 5} | print(d[(1, 2)]) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "5",
    "TypeError",
    "KeyError",
    "A tuple containing integers is hashable and can serve as a dictionary key for this lookup."
   ],
   [
    "Code: d = {'a': 2, 'b': 4} | d['a'] = 6 | print(list(d)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "['a', 'b']",
    "['b', 'a']",
    "[6, 4]",
    "Updating an existing value does not change its key's insertion position; iterating a dictionary gives keys."
   ],
   [
    "Code: d = {'a': 2, 'b': 4} | del d['a'] | d['a'] = 6 | print(list(d)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "['b', 'a']",
    "['a', 'b']",
    "[4, 6]",
    "Deleting removes a's original entry; inserting it again places it after the remaining key b."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'red': 4, 'blue': 7}",
     "2. print(d['blue'])"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'red': 4}",
     "2. d['red'] = 9",
     "3. print(len(d), d['red'])"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'red': 4}",
     "2. d['green'] = 2",
     "3. print(len(d))"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 2, 'b': 3, 'a': 8}",
     "2. print(d['a'], len(d))"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {0: 'north', 5: 'south'}",
     "2. print(d[0])"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 2, 'b': 3}",
     "2. print(d[0])"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {}",
     "2. d[[1, 2]] = 5",
     "3. print(d)"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {(1, 2): 5}",
     "2. print(d[(1, 2)])"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 2, 'b': 4}",
     "2. d['a'] = 6",
     "3. print(list(d))"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 2, 'b': 4}",
     "2. del d['a']",
     "3. d['a'] = 6",
     "4. print(list(d))"
    ]
   }
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 9",
  "name": "Safe dictionary access and traversal",
  "skill": "s9",
  "teach": [
   "Direct lookup d[key] raises KeyError for a missing key. d.get(key, default) instead returns the default when absent, or None if no default is supplied. It does not insert the missing key. Membership, key in d, also checks keys by default; use d.values() when looking for a value. pop(key) removes and returns the mapped value, while pop(key, default) can safely handle an absent key. clear() empties the existing dictionary. An alias such as other = d observes these mutations because it references the same object.",
   "A loop over a dictionary visits keys in insertion order. d.items() provides key-value pairs, and d.values() provides values. These are views of the dictionary rather than detached snapshots; list(d) or list(d.items()) creates a list snapshot of the current entries. update(other) replaces overlapping keys and inserts new ones, returning None. Build a separate result or iterate over a snapshot if adding or removing keys during traversal, since changing the dictionary's size during iteration can raise RuntimeError. For a frequency counter, counts.get(word, 0) + 1 handles the first occurrence as well as later ones."
  ],
  "boards": [
   [
    "d[key] raises KeyError for a missing key",
    "get supplies a fallback without inserting a key",
    "in checks keys; d.values() exposes values",
    "pop removes and returns a value"
   ],
   [
    "Iteration visits keys in insertion order",
    "items gives pairs; values gives values",
    "Dictionary views reflect later changes",
    "Avoid changing dictionary size during traversal"
   ]
  ],
  "eqs": [
   "{}.get(\"new\", 0) → 0; the dictionary stays empty",
   "counts[word] = counts.get(word, 0) + 1"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. d = {'oak': 3}",
     "2. print(d.get('pine', 0))",
     "3. print('pine' in d)",
     "4. print(3 in d.values())"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. d = {'oak': 3, 'elm': 2}",
     "2. for name, count in d.items():",
     "3.     print(name, count)"
    ]
   }
  ],
  "questions": [
   [
    "Code: d = {'x': 3} | print(d.get('y', 0)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "0",
    "KeyError",
    "None",
    "The missing key y causes get to return the explicitly supplied default zero without raising KeyError."
   ],
   [
    "Code: d = {'x': 3} | print(d.get('y')) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "None",
    "KeyError",
    "0",
    "With no explicit default, get returns None for a missing key; it does not automatically use zero."
   ],
   [
    "Code: d = {'x': 3} | d.get('y', 0) | print(len(d)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "1",
    "2",
    "0",
    "get only reads and supplies a return fallback; it does not insert the missing y key."
   ],
   [
    "Code: d = {'x': 3} | print(3 in d, 3 in d.values()) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "False True",
    "True True",
    "False False",
    "Membership in d checks keys, where 3 is absent; membership in its values finds the stored number 3."
   ],
   [
    "Code: d = {'x': 3, 'y': 5} | print(d.pop('x')) | print(len(d)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "3 then 1",
    "x then 1",
    "3 then 2",
    "pop returns the value associated with x and removes that entry, leaving one key-value pair."
   ],
   [
    "Code: d = {'x': 3} | print(d.pop('z', 9)) | print(d) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "9 then {'x': 3}",
    "KeyError",
    "9 then {}",
    "A missing key with an explicit pop default returns 9 and leaves the existing dictionary unchanged."
   ],
   [
    "Code: d = {'b': 2, 'a': 4} | print(list(d.items())) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[('b', 2), ('a', 4)]",
    "[('a', 4), ('b', 2)]",
    "[2, 4]",
    "items yields key-value pairs in insertion order, not sorted-key order or values alone."
   ],
   [
    "Code: d = {'a': 1} | keys = d.keys() | d['b'] = 2 | print(list(keys)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "['a', 'b']",
    "['a']",
    "[1, 2]",
    "The keys view reflects the later insertion of b; it is not a detached list snapshot."
   ],
   [
    "Code: d = {'a': 1} | keys = list(d) | d['b'] = 2 | print(keys) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "['a']",
    "['a', 'b']",
    "[1, 2]",
    "Constructing list(d) captures the keys at that time, so later insertion does not add to that list."
   ],
   [
    "Code: d = {'a': 1, 'b': 2} | d.update({'b': 8, 'c': 3}) | print(list(d.values())) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[1, 8, 3]",
    "[1, 2, 8, 3]",
    "[8, 3]",
    "update replaces b's value and appends new key c; the existing a value and key order remain."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 3}",
     "2. print(d.get('y', 0))"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 3}",
     "2. print(d.get('y'))"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 3}",
     "2. d.get('y', 0)",
     "3. print(len(d))"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 3}",
     "2. print(3 in d, 3 in d.values())"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 3, 'y': 5}",
     "2. print(d.pop('x'))",
     "3. print(len(d))"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'x': 3}",
     "2. print(d.pop('z', 9))",
     "3. print(d)"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'b': 2, 'a': 4}",
     "2. print(list(d.items()))"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 1}",
     "2. keys = d.keys()",
     "3. d['b'] = 2",
     "4. print(list(keys))"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 1}",
     "2. keys = list(d)",
     "3. d['b'] = 2",
     "4. print(keys)"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. d = {'a': 1, 'b': 2}",
     "2. d.update({'b': 8, 'c': 3})",
     "3. print(list(d.values()))"
    ]
   }
  },
  "check": [
   "Code: d = {'cat': 2} | print(d.get('dog', 5)) | print('dog' in d) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
   "5 then False",
   "5 then True",
   "KeyError",
   "get returns the fallback 5 without inserting dog, so the later membership test is False."
  ],
  "checkPic": {
   "t": "program",
   "title": "Python 3 code",
   "lines": [
    "1. d = {'cat': 2}",
    "2. print(d.get('dog', 5))",
    "3. print('dog' in d)"
   ]
  }
 },
 {
  "code": "CSTA 3A-AP-14 / 10",
  "name": "Modeling records and collection algorithms",
  "skill": "s10",
  "teach": [
   "Choose a structure that matches the question. A list can hold records in a chosen order, while each dictionary record associates field names with values. For records = [{'name': 'Ada', 'score': 6}, {'name': 'Bo', 'score': 9}], records[1]['score'] retrieves 9. A dictionary keyed by a unique student identifier supports direct lookup; a list allows repeated entries when order or repeated events matters. When several records share a category, a dictionary of lists can group them. Each new group needs its own list rather than one shared mutable default reused for every key.",
   "A counting algorithm reads one item at a time and updates a dictionary: start counts as {}, then assign counts[word] = counts.get(word, 0) + 1. For ['sun', 'rain', 'sun'], the final sun count is 2 and rain count is 1. A record-filtering algorithm can build a new list whose score satisfies a threshold; use >= when equality should qualify. Validate the model with empty input, repeated keys, missing fields and boundary values. Break a larger task into stages: choose the structure, trace one pass, then test a case that could expose a mistake. Mutable structures make it especially important to track which objects are shared."
  ],
  "boards": [
   [
    "Lists model order; dictionaries model keyed lookup",
    "A list of dictionaries can represent records",
    "Select a row, then a named field",
    "Each independent group needs its own list"
   ],
   [
    "A counter uses get(key, 0) for a first occurrence",
    "Filtering needs a precise boundary condition",
    "Test empty, repeated, missing and boundary cases",
    "Trace both values and shared references"
   ]
  ],
  "eqs": [
   "records[1][\"score\"] → 9",
   "sun: 0 → 1 → 2; rain: 0 → 1"
  ],
  "pics": [
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. records = [{'name': 'Ada', 'score': 6},",
     "2.            {'name': 'Bo', 'score': 9}]",
     "3. print(records[1]['score'])"
    ]
   },
   {
    "t": "program",
    "title": "Worked Python example",
    "lines": [
     "1. words = ['sun', 'rain', 'sun']",
     "2. counts = {}",
     "3. for word in words:",
     "4.     counts[word] = counts.get(word, 0) + 1",
     "5. print(counts)"
    ]
   }
  ],
  "questions": [
   [
    "Code: rows = [{'name': 'Jo', 'score': 4}, |         {'name': 'Li', 'score': 8}] | print(rows[1]['score']) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "8",
    "4",
    "Li",
    "The list index selects Li's record, and the score key then selects its numeric value 8."
   ],
   [
    "Code: rows = [{'score': 4}, {'score': 8}] | print(sum(r['score'] for r in rows)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "12",
    "2",
    "8",
    "The generator extracts both score values and sum adds them, giving 4 plus 8 equals 12."
   ],
   [
    "Code: rows = [{'score': 4}, {'score': 8}, {'score': 8}] | print(len([r for r in rows if r['score'] >= 8])) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "2",
    "0",
    "1",
    "The inclusive threshold retains both score-8 records, so the filtered list has length two."
   ],
   [
    "Code: words = ['red', 'blue', 'red'] | counts = {} | for word in words: |     counts[word] = counts.get(word, 0) + 1 | print(counts['red']) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "2",
    "1",
    "3",
    "The red key starts from default zero and is incremented on its two occurrences."
   ],
   [
    "Code: words = [] | counts = {} | for word in words: |     counts[word] = counts.get(word, 0) + 1 | print(counts) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "{}",
    "{'word': 0}",
    "KeyError",
    "With no words, the loop performs no updates and the initially empty dictionary remains empty."
   ],
   [
    "Code: prices = {'pen': 3, 'pad': 5} | cart = ['pen', 'pad', 'pen'] | print(sum(prices[x] for x in cart)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "11",
    "8",
    "3",
    "Each cart entry contributes its price, including the repeated pen: 3 plus 5 plus 3 gives 11."
   ],
   [
    "Code: groups = {'A': [], 'B': []} | groups['A'].append(4) | print(groups['B']) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "[]",
    "[4]",
    "KeyError",
    "The two list literals create separate objects, so adding to group A does not change group B."
   ],
   [
    "Code: row = {'name': 'Jo'} | print(row.get('score', 0)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "0",
    "KeyError",
    "None",
    "The record lacks score, so get returns the supplied fallback zero without requiring that field."
   ],
   [
    "Code: counts = {'red': 2, 'blue': 1} | print(sum(counts.values())) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "3",
    "2",
    "1",
    "Summing the category counts reconstructs the total number of recorded occurrences, here two plus one."
   ],
   [
    "Code: rows = [{'score': 8}, {'score': 9}] | print(len([r for r in rows if r['score'] > 8])) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
    "1",
    "2",
    "0",
    "The strict greater-than condition excludes score 8 and includes score 9, producing one qualifying record."
   ]
  ],
  "qpics": {
   "0": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. rows = [{'name': 'Jo', 'score': 4},",
     "2.         {'name': 'Li', 'score': 8}]",
     "3. print(rows[1]['score'])"
    ]
   },
   "1": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. rows = [{'score': 4}, {'score': 8}]",
     "2. print(sum(r['score'] for r in rows))"
    ]
   },
   "2": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. rows = [{'score': 4}, {'score': 8}, {'score': 8}]",
     "2. print(len([r for r in rows if r['score'] >= 8]))"
    ]
   },
   "3": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. words = ['red', 'blue', 'red']",
     "2. counts = {}",
     "3. for word in words:",
     "4.     counts[word] = counts.get(word, 0) + 1",
     "5. print(counts['red'])"
    ]
   },
   "4": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. words = []",
     "2. counts = {}",
     "3. for word in words:",
     "4.     counts[word] = counts.get(word, 0) + 1",
     "5. print(counts)"
    ]
   },
   "5": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. prices = {'pen': 3, 'pad': 5}",
     "2. cart = ['pen', 'pad', 'pen']",
     "3. print(sum(prices[x] for x in cart))"
    ]
   },
   "6": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. groups = {'A': [], 'B': []}",
     "2. groups['A'].append(4)",
     "3. print(groups['B'])"
    ]
   },
   "7": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. row = {'name': 'Jo'}",
     "2. print(row.get('score', 0))"
    ]
   },
   "8": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. counts = {'red': 2, 'blue': 1}",
     "2. print(sum(counts.values()))"
    ]
   },
   "9": {
    "t": "program",
    "title": "Python 3 code",
    "lines": [
     "1. rows = [{'score': 8}, {'score': 9}]",
     "2. print(len([r for r in rows if r['score'] > 8]))"
    ]
   }
  },
  "check": [
   "Code: prices = {'kit': 4, 'card': 2} | cart = ['kit', 'card', 'kit'] | print(sum(prices[x] for x in cart)) What is printed, or which exception class is raised? Multiple printed lines are joined by then.",
   "10",
   "6",
   "8",
   "The repeated kit appears twice, so the total is 4 plus 2 plus 4, giving 10."
  ],
  "checkPic": {
   "t": "program",
   "title": "Python 3 code",
   "lines": [
    "1. prices = {'kit': 4, 'card': 2}",
    "2. cart = ['kit', 'card', 'kit']",
    "3. print(sum(prices[x] for x in cart))"
   ]
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Choose a list for an ordered sequence and a dictionary for lookup by meaningful keys. Trace indexing and slicing with their bounds, and distinguish mutating methods from operations that create a new object. Separate contents from identity: assignment shares a reference, and a shallow copy can still share nested objects. In a loop or comprehension, identify the visited values, the transformation and the filter. For records and frequency counts, follow every update and test empty, repeated, missing and boundary cases. Python 3.7+ dictionary insertion order does not turn keys into implicit list positions.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"cs-h-programming-python-lists-and-dictionaries","subject":"cs","level":5,"grade":9,"standard":"CSTA K-12 Computer Science Standards (2017), 3A-AP-14: collections and data abstraction; original Python 3 applications","title":"Lists and Dictionaries","goal":"Choose, trace and test Python lists and dictionaries, including mutation, shallow copying, nested records and collection algorithms.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
