/******************************************************************************
 *  Execution       : 1. default node         node monthlyPaymentMain.js
 *
 *  Purpose         : Find Mothly Payment.
 *
 *  @description    : takes a date as input and prints the day of the week that date 
 *                    falls on. Your program should take three 
 *                    command-line arguments: m (month), d (day), and y (year)

 *  @file           : monthlyPaymentMain.js
 *  @overview       : Print Mothly Paymen.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const paymentLib = require('./monthlyPaymentBL');
try{
    let myArg = process.argv.slice(2);
    console.log(myArg);
    let p = parseInt(myArg[0]);
    let y = parseInt(myArg[1]);
    let r = parseInt(myArg[2]);
    let result = paymentLib.payment(p,y,r);
    console.log(result);
}catch(err){
    throw err;
}