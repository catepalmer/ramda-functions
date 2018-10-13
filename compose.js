// Performs right-to-left function composition. The 
// rightmost function may have any number of parameters 
// (any "arity"); the remaining functions must take only 
// one parameter (because it will be the output of the 
// function to the right). In other words, they must be 
// unary.

// To use Ramda's example:

// import { compose, inc, negate } from 'ramda'

// const f = compose(inc, negate, Math.pow);

// f(3, 4);                // returns -80





// My crappy attempt at a solution:

const compose = (f, ...fx) => {
    const args = new Array(f, ...fx)
    if (args.length === 0) return
    return f(compose(args.slice(1).map((arg) => arg)))
}



// Proposed solution:

import { head, reduceRight } from 'ramda'

const compose = (...funcs) => {
  return (...args) => head(
    reduceRight((acc, f) => [f(...acc)], args, funcs)
  )
}

