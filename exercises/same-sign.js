'use strict'

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code :
const sameSign = (x, y)=> {
    if(x >= 0 && y >= 0)
        return true;
    else if(x < 0 && y < 0)
        return true;
    else
        return false;
}
//* Begin of tests
const assert = require('assert')

console.log(sameSign(-2,0))
// End of tests */
