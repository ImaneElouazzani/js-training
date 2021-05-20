'use strict'

/*
 * Create a `getLast` function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code :
const getLast = (x) => {
    if(typeof x == 'string')
        return(x.charAt(x.length - 1));
    if(Array.isArray(x))
        return(x[x.length - 1]);
}
//* Begin of tests
const assert = require('assert')
console.log(getLast("Hello"))
console.log(getLast([1,2,3]))
assert.strictEqual(getLast([ 2, 42 ]), 42)
assert.strictEqual(getLast([ 'pouet', 4, true ]), true)
assert.strictEqual(getLast([ getLast ]), getLast)
assert.strictEqual(getLast('salut'), 't')
assert.strictEqual(getLast([]), undefined)
// End of tests */
