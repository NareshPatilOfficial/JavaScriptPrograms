/******************************************************************************
 *  Execution       :  1. default node         cmd> node simpleBalanceParanthesesMain.js
 *  @description    :  Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)
                       where parentheses are used to order the performance of operations. 
                       Ensure parentheses must appear in a balanced fashion.
 *  @file           :  simpleBalanceParanthesesMain.js
 *  @overview       :  Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. 
 *                     At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const readline = require('readline-sync');
const SBPLib = require('./simpleBalancedParenthesesBL');
try {
    const exp = readline.question('Enter the expression to check balanced ');
    console.log(SBPLib.balanceParentheses(exp));
}
catch (err) {
    console.log(err);
}