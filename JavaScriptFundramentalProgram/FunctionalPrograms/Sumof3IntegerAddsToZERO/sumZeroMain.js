/******************************************************************************
 *  Execution       : 1. default node         cmd> node sumZeroMain.js
 *
 *  Purpose         : Find distinct triples which sum = 0;
 *
 *  @description    : A program with cubic running time. Read in N integers and 
 *                    counts the   number of triples that sum to exactly 0.
 *  @file           : sumZeroMain.js
 *  @overview       : Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-01-2020
 ******************************************************************************/


const tripleZEROLib = require('./sumZeroBL');
try{
    let arr = [0, -1, 2, -3, 1];
    tripleZEROLib.findTriples(arr);
}catch(err){
    console.log(err);
}