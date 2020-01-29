/******************************************************************************
 *  Execution       : 1. default node         cmd> node swapNibblesMain,js
 *
 *  Purpose         : Swap nibbles and find the new number.
 *
 *  @description    : A nibble is a four-bit aggregation, or half an octet. There are 
 *                    two nibbles in a byte. Given a byte, swap the two nibbles in it.
 *  @file           : swapNibblesMain.js
 *  @overview       : convert to Binary using toBinary function and perform the following functions.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const toBinLib = require('./swapNibbleBL');
const assert = require('assert');
try{
    let num = 100;
    let binaryResult = toBinLib.toBinary(num);
    let testRinaryResult = toBinLib.swapAndDecimal(binaryResult);
    let checkResult = 70;
    describe('Swap Nibbles', () => {
        'asd',
        it('Check Swap Nibbles', () => {
            assert.equal(testRinaryResult,checkResult);
        })
    })
}catch(err){
    console.log(err);
}