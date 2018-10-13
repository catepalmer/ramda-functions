// Returns the result of concatenating the given lists or strings. 
// The Ramda concat bases the concatenation on the type of the first 
// argument, so if the first argument is a String, then it will do 
// string concatenation; if the first argument is an Array, then it 
// will do array concatenation.

// concat([], [])                // returns []
// concat([4, 5, 6], [1, 2, 3])  // returns [4, 5, 6, 1, 2, 3]
// concat('ABC', 'DEF')          // returns 'ABCDEF'


// My half-finished, non-functioning 'solution':

import { type } from 'ramda'

const concat = (arg, ...args) => {
  if ([arg, ...args].length === 1) return arg
  if ([arg, ...args].every(arg => type(arg) === 'String') === true) return arg + concat(...args)
  if ([arg, ...args].every(arg => type(arg) === 'Array') === true) return arg + concat(...args)
}


// Proposed solution:

import { flatten, head, join } from 'ramda'

const concat = (...args) => typeof head(args) === 'string'
  ? join('', args)
  : flatten(args)

concat('abc', 'def')                 // returns 'abcdef'
concat(['a', 'b', 'c'], [1, 2, 3])   // returns ['a', 'b', 'c', 1, 2, 3]