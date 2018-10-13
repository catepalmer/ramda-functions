import { isNil } from 'ramda'

const add = (a, b) => {
  if (isNil(a)) { return add }
  if (isNil(b)) { return (v) => add(a, v) }

  return a + b
}

const adder = add()
const addToFive = adder(5)

addToFive(10)           // returns 15






const add = (x, ...xs) => x ? x + add(...xs) : 0

add()                   // returns 0
add(5)                  // returns 5
add(5, 10)              // returns 15
add(5, 10, 15)          // returns 30
add(5, 10, 15, 20)      // returns 50