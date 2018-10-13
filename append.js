// Returns a new list containing the contents of the given 
// list, followed by the given element.

// import { append } from 'ramda'

// append('z', ['x', 'y'])   // returns ['x', 'y', 'z']


// My (clunky) solution:
const append = (item, list) => {
    const newList = [...list]
    newList.push(item)
    return newList
}


// Provided solution:
const append = (v, a) => [...a, v]