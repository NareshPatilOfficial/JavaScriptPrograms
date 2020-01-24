/******************************************************************************
 *  Execution       : 1. default node         cmd> node LeapYearMain.js
 *
 *  Purpose         : Get Valid UserName.
 *
 *  @description    : This program takes a command-line argument N and prints a 
 *                    table of the powers of 2 that are less than or equal to 2^N.
 *  @file           : LeapYearMain.js
 *  @overview       : The Power Value N. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 18-01-2020
 ******************************************************************************/


const readline = require('readline-sync');
const yearUT = require('./LeapYearBL');

try {
    var year = readline.questionInt('Enter The Year : ');
    yearUT.isLeap(year);
}
catch (err) {
    console.log(err);
}