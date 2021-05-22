'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (str) => {
    let newStr = "";

    var arr = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 1)
            newStr += arr[i];
        else
            newStr += arr[i] + ' ';
    }
    return newStr;
}

//* Begin of tests
const assert = require('assert')
console.log(jadenCase("hello imane"))
//assert.fail('You must write your own tests')
// End of tests */
