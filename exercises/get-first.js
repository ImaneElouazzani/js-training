'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 */

// Your code :
const getFirst = (x) => {
    if(typeof x == 'string')
        return(x.substring(0,1));
    if(Array.isArray(x))
        return(x.shift());
}
//* Begin of tests
const assert = require('assert')
console.log(getFirst("Hello"))
console.log(getFirst([1,2,3]))
assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
