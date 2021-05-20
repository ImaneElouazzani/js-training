'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = (s) => {
    return(s.slice(2))
}
const cutLast = (z) => {
    return(z.slice(0,-2))
} 
const cutFisrtLast = (x) => {
    return(cutLast(cutFirst(x)))
}
//* Begin of tests
//const assert = require('assert')
console.log(cutFirst("mila"))
console.log(cutLast("mila"))
console.log(cutFisrtLast("bonbon"))
//assert.fail('You must write your own tests')
// End of tests */
