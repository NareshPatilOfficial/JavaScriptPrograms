/******************************************************************************
 *  Execution       : 1. default node         cmd> node harmonicNumber.js
 *
 *  Purpose         : Get Harmonic Number.
 *
 *  @description    : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N .
 *
 *  @file           : harmonicNumber.js
 *  @overview       : Print the Nth Harmonic Value.. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-01-2020
 ******************************************************************************/

const readLine = require('F:/BridgeLabzAngular/Angular/JavaScriptFundramentalProgram/node_modules/readline-sync');
const harmonicNumberBL = require('./harmonicNumberBL');
try{
    let num = readLine.question('Enter Number Number : ');
    console.log(harmonicNumberBL.harmonicOf(num));
}catch(err){
    console.log(err);
}