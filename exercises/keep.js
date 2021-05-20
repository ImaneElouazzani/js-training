'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (s)=>{
    return(s.slice(0, 2))
};

const keepLast = (s) => {
    var len = s.length;

    return (s.slice(len - 2, len))
};

const keepFirstLast = (s)=>{
    return(s.slice(2,4))
}
//* Begin of tests
const assert = require('assert')
console.log(keepFirstLast("imane"))
// End of tests */
