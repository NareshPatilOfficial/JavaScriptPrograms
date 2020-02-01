/********************************************************************************************
 *  Execution       :  1. default node         cmd> node calenderMain.js
 *  @description    :  Write a program Calendar.java that takes the month and 
                       year as command-line arguments and prints the Calendar of the month.
                       Store the Calendar in an 2D Array, the first dimension the week of 
                       the month and the second dimension stores the day of the week.
 *  @file           :  calenderMain.js
 *  @overview       :  Print the calender in 2D array using gregorian calender formula. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 01-02-2020
 ******************************************************************************/
const readline = require("readline-sync");
const caleLib = require('./calenderBL');
try {
    const month = readline.question("enter the month ");
    const year = readline.question("enter the year ");
    if (year.length == 4) {
        caleLib.calender(month, year);
    }
    else {
        console.log("enter a valid year");
    }
}
catch (err) {
    console.log(err);
}