/******************************************************************************
 *  Execution       :   1. default node         cmd> node bubbleSortMain.js                    
 *  @description     : Reads in integers and prints them in sorted order using bubble sort.
 *  @file           : bubbleSortMain.js
 *  @overview       : Print the Sorted List using bubble sort                    
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const readline = require('readline-sync');
const library = require('./bubbleSortBL');
try {
    let arr = [];
    let size = readline.question('enter the size of array ');
    for (i = 0; i < size; i++) {
        arr[i] = readline.question('enter the element of array ');
    }
    const arr1 = arr.map(Number);
    console.log('Before sorting ' + arr1);
    console.log('After sorting ' + library.doBubbleSort(arr1));
}
catch (err) {
    console.log(err);
}