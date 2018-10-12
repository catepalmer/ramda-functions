import { isNil } from 'ramda'

const add = (a, b) => {
  if (isNil(a)) { return add }
  if (isNil(b)) { return (v) => add(a, v) }

  return a + b
}

const adder = add()
const addToFive = adder(5)

addToFive(10)           // returns 15