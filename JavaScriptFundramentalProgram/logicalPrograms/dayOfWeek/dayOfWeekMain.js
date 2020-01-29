/******************************************************************************
 *  Execution       : 1. default node         cmd> node dayOfWeekMain,js
 *
 *  Purpose         : Find Day of week.
 *
 *  @description    : To the Util Class add dayOfWeek static function that takes 
 *                    a date as input and prints the day of the week that date falls on.
 *                    Your program should take three command-line arguments: m (month), d (day), and y (year.

 *  @file           : dayOfWeekMain.js
 *  @overview       : read the Change in Rs to be returned by the Vending Machine
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-01-2020
 ******************************************************************************/

const dayOfWeekLib = require('./dayOfWeekBL');
try{
     let myArg = process.argv.slice(2);
     let month = parseInt(myArg[0], 10);;
     let date = parseInt(myArg[1], 10);
     let year = parseInt(myArg[2], 10);
     let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     month == 2 && dayOfWeekLib.isLeapYear(year) ? days[month] = 29 : days[month] ;
     let d = dayOfWeekLib.day(month, date, year);
     console.log(d);
    // describe('vedingMachine', () => {
    //     'asd',
    //     it('Check Currency', () => {
    //         assert.equal(true,true);
    //     })
    // })
}catch(err){
    console.log(err);
}