/******************************************************************************
 *  Execution       :   1. default node         cmd> node binarySearchMain.js 
 *                                           
 * @description     : Read in a list of words from File. Then prompt the user to enter a word to search the list. 
 *                    The program reports if the search word is found in the list.
 *  @file           : binarySearchMain.js
 *  @overview       : To print the result if word is found or not in a list of words using binary search. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 *
 ******************************************************************************/
const readline = require('readline-sync');
const binLibrary = require('./binarySearchBL');
try {
    const word = readline.question('Enter the word to search : ').toString();
    binLibrary.getInput().then((input) => {  //calling getInput() to get the words from the file
        console.log(input);
        binLibrary.doBinarySearch(word, input); //calling doBinarySearch() to search word from input arrray
    })
}
catch (err) {
    console.log(err);
}