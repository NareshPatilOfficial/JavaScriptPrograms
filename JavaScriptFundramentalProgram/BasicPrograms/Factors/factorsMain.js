/******************************************************************************
 *  Execution       : 1. default node         cmd> node factorMain.js
 *
 *  Purpose         : Get Prime Factors.
 *
 *  @description    : Computes the prime factorization of N using brute force.
 *
 *  @file           : factorMain.js
 *  @overview       : Genrate Prime Factorial Of given number 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 20-01-2020
 ******************************************************************************/


const readLine = require('F:/BridgeLabzAngular/Angular/JavaScriptFundramentalProgram/node_modules/readline-sync');
const factorBL = require('./factorBL');

try{
    let n = 315;
    let num = readLine.question('Enter The Number : ');
    factorBL.factorOf(num);
}catch(err){
    console.log(err);
}