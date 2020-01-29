/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionSortMain.js 
                       
 *  @description     : Reads in strings and prints them in sorted order using insertion sort.
 *  @file           : insertionSortMain.js
 *  @overview       : Print the Sorted List using insertion sort 
    @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 
 ******************************************************************************/
const readline = require('readline-sync');
const Inslibrary = require('./insertionSortBL');
try {
    const arr = readline.question(' Enter the string : ').split('');
    console.log('Before sorting => ' + arr);
    const result = Inslibrary.insertionSort(arr);
    console.log('After sorting => ' + result);
} catch (err) {
    console.log(err);
}