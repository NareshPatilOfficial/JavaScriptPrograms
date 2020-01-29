/******************************************************************************
 *  Execution       : 1. default node         cmd> node toBinaryMain.js
 *
 *  Purpose         : find the binary representation
 *
 *  @description    : Write function toBinary that outputs the binary (base 2) 
 *                    representation of the decimal number typed as the input. 
 *                    It is based on decomposing the number into a sum of powers of 2
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const toBinLib = require('./toBinaryBL');
const assert = require('assert');
try{
    let test = toBinLib.toBinary(60);
    let checkResult = '111100';
    describe('binaryNumber', () => {
        'asd',
        it('Check BinaryNumber', () => {
            assert.equal(test,checkResult);
        })
    })
}catch(err){
    console.log(err);
}