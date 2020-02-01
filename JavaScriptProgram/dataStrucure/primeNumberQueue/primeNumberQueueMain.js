/******************************************************************************
 *  Execution       :  1. default node         cmd> node anagramQueueMain.js
 *  @description    :  Extend the Prime Number Program and store only the numbers in that 
                       range that are Anagrams. For e.g. 17 and 71 are both Prime and Anagrams 
                       in the 0 to 1000 range. Further store in a queue implemented using linked list
                       the numbers that are Anagram and numbers that are not Anagram
 *  @file           :  anagramQueueMain.js
 *  @overview       :  Print the anagram prime numbers in a given range in a queue implemented using linked list. 
 *
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 01-02-2020
 ******************************************************************************/
const anaPriQu = require('./primeNumberQueueBL');
const readline = require('readline-sync');
try {
    const range = readline.question('enter the range of number ');
    let resultantAnagramNumbers = anaPriQu.primeNumbersGenerator(range);
    const q = new anaPriQu.Queue();
    for (let i = resultantAnagramNumbers.length - 1; i >= 0; i--) {
        q.enqueue(resultantAnagramNumbers[i]);
    }
    q.printQueue();
}
catch (err) {
    console.log(err);
}