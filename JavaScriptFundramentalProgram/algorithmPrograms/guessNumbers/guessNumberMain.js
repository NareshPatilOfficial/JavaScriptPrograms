/******************************************************************************
 *  Execution       :   1. default node         cmd> node guessNumberMain.js 
 *  @description    : takes a command-line argument N, asks you to think of a number
 *                    between 0 and N-1, where N = 2^n, and always guesses the answer with n questions.
 *  @file           : guessNumberMain.js
 *  @overview       : Print the intermediary number and the final answer using binary search
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const readline = require('readline-sync');
const GNlibrary = require('./guessNumberBL');
let main = () => {
    try {
        let k = readline.question('Enter the range ');
        let n = 2 ** k;
        console.log('think of a number between 0 and ' + (n - 1));
        let result = GNlibrary.guessTheNumber(0, n);
        console.log('your number is ' + result);
    }catch (err) {
        console.log(err);
    }
}
main();