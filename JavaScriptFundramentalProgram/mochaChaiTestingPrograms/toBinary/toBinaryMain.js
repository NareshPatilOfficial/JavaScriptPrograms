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
try{
    let binaryResult = toBinLib.toBinary(60);
    console.log(binaryResult);
}catch(err){
    console.log(err);
}