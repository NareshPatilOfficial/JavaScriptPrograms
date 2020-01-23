/******************************************************************************
 *  Execution       : 1. default node         cmd> node flipCoinMain.js
 *
 *  Purpose         : Get Valid UserName.
 *
 *  @description    : User will input number and tose it till taht number show it
 *                    tail or head by 0.5 and give percentage of heads and tail.
 *
 *  @file           : flipCoinMain.js
 *  @overview       : Flip Coin and print percentage of Heads and Tails 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 18-01-2020
 ******************************************************************************/

const readline = require('readline-sync');
const flipObj  = require('./flipCoinBL');

try{
    var number = readline.question('Enter The number of times to Flip Coin : ');
    

    console.log('Percentage of  : '+flipObj.flipCoin(number));
}
catch(err){
    console.log(err);
}