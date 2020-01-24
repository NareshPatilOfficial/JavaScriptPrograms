/******************************************************************************
 *  Execution       : 1. default node         cmd> node powerOf2Main.js
 *
 *  Purpose         : Get series of Power of 2 till given number.
 *
 *  @description    : This program takes a command-line argument N and prints a table of 
 *                    the powers of 2 that are less than or equal to 2^N.
 *
 *  @file           : powerOf2Main.js
 *  @overview       : User Input and The Power Value of input. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-01-2020
 ******************************************************************************/

const readLine = require('readline-sync');
const powerOf2BL = require('./powerOf2BL');
try {
    let num = readLine.question('Enter The Number : ');
    for (let i = 1; i <= num; i++) {
        console.log('Pow Of ' + i + ' is = ' + powerOf2BL.pow(2, i));
    }

} catch (err) {
    console.log(err);
}