/******************************************************************************
 *  Execution       : 1. default node         cmd> node gamblerMain.js
 *
 *  Purpose         : Take User Input and store it into diffrent kind of array
 *                    and print corresponding that array.
 *
 *  @description    : Simulates a gambler who start with $stake and place fair $1 
 *                    bets until he/she goes broke (i.e. has no money) or reach 
 *                    $goal. Keeps track of the number of times he/she wins and     
 *                    the number of bets he/she makes. Run the experiment N times, 
 *                    averages the results, and prints them out.

 *  @overview       : Play till the gambler is broke or has won. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 22-01-2020
 ******************************************************************************/
const readLine = require('readline-sync');
const gamblerLib = require('./gamblerBL');
try {
    console.log(gamblerLib.getRandomInt(2));
    let choice = 0;
    do {
        let stake = readLine.questionInt('Enter the beggining stake : ');
        while (stake < 1) {
            console.log('Hey you can`t start empty handed!');
            console.log("Please enter an amount greater than 0");
            stake = readLine.questionInt('Enter the beggining stake AGAIN : ');
        }
        let goal = readLine.questionInt('Enter you goal to be a millionare!');
        if (goal == stake) {
            console.log("You already reached your Goal.");
            return;
        }
        while (goal < stake) {
            goal = readLine.questionInt("Dear to be millionare, your here to win! So enter an amount greater than your stake!");
        }
        gamblerLib.simulator(stake, goal);
        choice = readLine.questionInt("press 1 for continue");
    } while (choice == 1);
} catch (err) {
    console.log(err);
}