/* improve20-r13a-nov2 #7 (audit10 #11): a Try-it prompt shows with a capital first letter (the bank writes many in lower case), except when
   that letter starts a symbol: "f(x) = ..." must never read "F(x)" (capital F is a different function, such as an antiderivative). Display
   only: the prompt's own text, and so its question id, never changes. The letter is kept when it is followed by "(", a digit, "_", "^" or
   "=", by a space and a maths sign, or when it stands alone before a non-letter (a variable: "x is 2", "x⁵ · x⁶"), other than the words
   "a" and "i"; a mixed-case word (pH, mRNA, eBay) or a letter-digit word (x2) is kept too. */
export const keepStart=p=>/^[a-z][(\d_^=]/.test(p)||/^[a-z]\s+[=+\-−×÷·<>≤≥*/^]/.test(p)||/^[b-hj-z](?![a-z])/.test(p)||/^[a-z]+[A-Z]/.test(p)||/^[a-z]+\d/.test(p);
export const capStart=p=>{p=String(p);return /^[a-z]/.test(p)&&!keepStart(p)?p[0].toUpperCase()+p.slice(1):p;};
