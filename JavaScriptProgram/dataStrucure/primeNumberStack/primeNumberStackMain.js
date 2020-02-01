/******************************************************************************
 *  Execution       :  1. default node         cmd> node anagramStackMain.js
 *  @description    :  Extend the Prime Number Program and store only the numbers in that 
                       range that are Anagrams. For e.g. 17 and 71 are both Prime and Anagrams 
                       in the 0 to 1000 range. Further store in a linked list the numbers that are
                       Anagram and numbers that are not Anagram
 *  @file           :  anagramStackMain.js
 *  @overview       :  Print the anagram prime numbers in a given range in a linked list. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 01-02-2020
 ******************************************************************************/
const anaPriLib = require('./primeNumberStackBL');
const readline = require('readline-sync');
try {
    const range = readline.question('enter the range of number ');
    let resultantAnagramNumbers = anaPriLib.primeNumbersGenerator(range);
    const ll = new anaPriLib.LinkedList();
    for (let i = resultantAnagramNumbers.length - 1; i >= 0; i--) {
        ll.push(resultantAnagramNumbers[i]);
    }
    ll.printList();
    console.log(resultantAnagramNumbers)
}
catch (err) {
    console.log(err);
}