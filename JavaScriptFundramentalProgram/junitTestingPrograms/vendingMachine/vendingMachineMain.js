/******************************************************************************
 *  Execution       : 1. default node         cmd> node vendingMachineMain.js
 *
 *  Purpose         : Use Recursion and check for largest value of the Note to
 *                    return change to get to minimum number of Notes .
 *
 *  @description    : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be 
 *                    returned by Vending Machine. Write a Program to calculate the minimum 
 *                    number of Notes as well as the Notes to be returned by the Vending 
 *                    Machine as a Change.

 *  @file           : vendingMachineMain.js
 *  @overview       : read the Change in Rs to be returned by the Vending Machine
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-01-2020
 ******************************************************************************/

const vendingLib = require('./vendingMachineBL');
const assert = require('assert');
/* describe('vedingMachine', () => {
    'asd',
        it('Check Currency', () => {
            assert.equal(true, true);
        })
}) */
try {
    vendingLib.countCurrency(868);
    vendingLib.giveCurrency();
} catch (err) {
    console.log(err);
}