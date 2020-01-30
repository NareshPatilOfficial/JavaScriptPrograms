/******************************************************************************
 *  Execution       :   1. default node         cmd> node bankingCashCounterMain.js
 *                      2. if nodemon installed cmd> nodemon bankingCashCounterMain.js
 *
 *  Purpose         : create a banking queue.
 *
 *  @description    : Create a Program which creates Banking Cash Counter where people come in to deposit Cash and 
 *                    withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and 
 *                    dequeue the people. Maintain the Cash Balance.
 *
 *  @file           : bankingCashCounterMain.js
 *  @overview       : create a banking queue.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
let queueLib = require('./simulateBankingCashCounterBL')
try {
    let q = new queueLib.Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    console.log("---current queue---")
    q.printQueue();
    q.dequeue();
    q.dequeue();
    q.dequeue();
} catch (err) {
    console.log(err);
}