/******************************************************************************
 *  Execution       : 1. default node         cmd> node distanceMain.js 4 5
 *
 *  Purpose         : Find distance from the point (x, y) to the origin (0, 0);
 *
 *  @description    : Write a program Distance.java that takes two integer command-line
 *                    arguments x and y and prints the Euclidean distance from the
 *                    point (x, y) to the origin (0, 0). The formulae to calculate 
 *                    distance = sqrt(x*x + y*y). Use Math.power function
 *  @file           : distanceMain.js
 *  @overview       : prints the Euclidean distance from the point (x, y) to the origin (0, 0) 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-01-2020
 ******************************************************************************/
const distanceLib = require('./distanceBL');
try {
    var myArgs = process.argv.slice(2);
    console.log(myArgs[0]);
    let x2 = myArgs[0];
    let y2 = myArgs[1];
    console.log(`Distance From (0, 0) to (${x2}, ${y2}) is ${distanceLib.distance(x2, y2)}`);
} catch (err) {
    throw err;
}