/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagramMain.js 
                       
 *  @description     : One string is an anagram of another if the second is simply a rearrangement of the first.
 *                     For example, 'heart' and 'earth' are anagrams...
 *  @file           : anagramMain.js
 *  @overview       : check for two strings are anagram or not                 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const readline = require('readline-sync');
const anaLibrary = require('./anagramBL');
try {
    let sample1 = readline.question('enter first string ');
    let sample2 = readline.question('enter second string ');
    anaLibrary.checkAnagram(sample1, sample2); 
}catch (err) {
    console.log(err);
}