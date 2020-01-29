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
const readLine = require('readline-sync');
try{
    let num = readLine.questionInt('Enter The Number : ');
    let binaryResult = toBinLib.toBinary(num);
    console.log('After Swap nibble Decimal will be : '+toBinLib.swapAndDecimal(binaryResult));
}catch(err){
    console.log(err);
}