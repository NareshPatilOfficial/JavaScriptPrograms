/******************************************************************************
 *  Execution       : 1. default node         cmd> node couponMain.js
 *
 *  Purpose         : N Distinct Coupon Number
 *
 *  @description    : Given N distinct Coupon Numbers, how many random numbers do 
 *                    you need to generate distinct coupon number? This program 
 *                    simulates this random process.
 *  
 *  @overview       : repeatedly choose a random number and check whether it's a new one. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 22-01-2020
 ******************************************************************************/
const readLine = require('readline-sync');
const couponLib = require('./couponBL');
try{
    let cnum = readLine.questionInt('Enter The Number : ');
    console.log(`count number : ${couponLib.collectCoupon(cnum)}`);
}catch(err){
    console.log(err);
}