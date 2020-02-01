 /******************************************************************************
 *  @Execution      : 1. default node         cmd> node primeRange2DArrayMain.js
 *
 *  @Purpose        : ake a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
 *                    Store the prime numbers in a 2D Array.
 *
 *  @description    : the first dimension represents the range 0-100, 100-200, and so on. While the second 
 *                    dimension represents the prime numbers in that range
 *  @file           : primeRange2DArrayMain.js
 *  @overview       : create a binary search tree.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 01-02-2020
 ******************************************************************************/
const pr2aLib = require('./primeRange2DArrayBL');
try{
    let b = 100;
    let main = () => {
        pr2aLib.primeNumbers(1000);
        let res = pr2aLib.resultArr;
        // console.log(res);
        for(let a in res){
            console.log(`${b-100} to ${b} => ${res[a]}`);//backtic
            b = b + 100;
        };
    }
    main();
}catch(err){
    throw err;
}