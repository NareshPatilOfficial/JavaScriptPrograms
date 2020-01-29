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
const assert = require('assert');
try{
    describe('Test SqureRoot', () => {
        let p = 2000;
        let y = 2;
        let r = 3;
        let test1 = paymentLib.payment(p,y,r);
        let checkResult1 = 85.96242395911403; 
        it('SqureRoot1', () => {
            assert.equal(test1,checkResult1);
        })
    })
}catch(err){
    throw err;
}