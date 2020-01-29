/******************************************************************************
 *  Execution       : 1. default node         cmd> node sqrtMain,js
 *
 *  Purpose         : Find square root of a nonnegative number.
 *
 *  @description    : Write a static function sqrt  to compute the square root of a 
 *                    nonnegative number c.
 * 
 *  @file           : sqrtMain.js
 *  @overview       : repeat until desired accuracy reached using condition Math.abs(t - c/t) > epsilon*t where epsilon = 1e-1;
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const sqrtLib = require('./sqrtBL');
const assert = require('assert');
try{
    let number1 = 13;
    let test1 = sqrtLib.sqr(number1);
    let checkResult1 = 3.6055512754639905;
    describe('Find SqureRoot', () => {
        'asd',
        it('Check SqureRoot', () => {
            assert.equal(test1,checkResult1);
        })
    })
}catch(err){
    console.log(err);
}