// Returns true if the specified value is equal to at least one 
// element of the given list; false otherwise. Ramda has its own 
// equals function that it uses for comparison. We can import and 
// use that, too.

// contains(3, [1, 2, 3])  // returns true
// contains(4, [1, 2, 3])  // returns false
// contains([42], [[42]])  // returns true


// Ramda's equals function:
// Returns true if its arguments are equivalent, 
// false otherwise. Handles cyclical data structures.

// Dispatches symmetrically to the equals methods of both 
// arguments, if present.

// Open in REPLRun it here
// R.equals(1, 1); //=> true
// R.equals(1, '1'); //=> false
// R.equals([1, 2, 3], [1, 2, 3]); //=> true

// var a = {}; a.v = a;
// var b = {}; b.v = b;
// R.equals(a, b); //=> true


// With recursion but not reduce:

import { equals } from 'ramda'

const contains = (n, [x, ...xs]) => equals(n, x) || contains(n, xs)



// With reduce:

import { equals, reduce } from 'ramda'

const contains = (n, c) => reduce((a, v) => a || equals(n, v), false, c)
