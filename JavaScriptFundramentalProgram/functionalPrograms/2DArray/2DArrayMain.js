/******************************************************************************
 *  Execution       : 1. default node         cmd> node 2DArrayMain.js
 *
 *  Purpose         : Take User Input and store it into diffrent kind of array
 *                    and print corresponding that array.
 *
 *  @description    : A library for reading in 2D arrays of integers, doubles,
 *                    or booleans from standard input and printing them out to standard output.
 *  @file           : 2DArrayMain.js
 *  @overview       : take user input and enter store it into the array. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-01-2020
 ******************************************************************************/
const lib = require('./2DArrayBL');
try {
    // For Interger.
    let intArr = lib.readIntArr();
    lib.printIntArr(intArr);
    // For Float.
    let floatArr = lib.readFloatArr();
    lib.printFloatArr(floatArr);
    // For int.
    let boolArr = lib.readBoolArr();
    lib.printFloatArr(boolArr);
} catch (err) {
    console.log(err);
}
