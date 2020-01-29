/******************************************************************************
 *  Execution       : 1. default node         cmd> node primeNumberRangeMain.js                      
 *  @description    : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range and 
 *                    also find the palindrome among them
 *  @file           : primeNumberRangeMain.js
 *  @overview       : check for prime number form 0 t0 1000 and also check for palindrome
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const library = require('./primeNumberRangeBL');
try {
    let input = library.display(100);
    console.log("Prime Numbers");
    console.log(input);
    let result2 = [];
    for (let i = 0; i < input.length; i++) {
        if (library.checkPalindrome(input[i])) {
            result2.push(input[i]);
        }
    }
    console.log("Prime Numbers With Palindrome");
    console.log(result2);
}
catch (err) {
    console.log(err);
}