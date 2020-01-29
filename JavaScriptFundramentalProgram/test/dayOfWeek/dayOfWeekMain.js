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
 *  @since          : 29-01-2020
 ******************************************************************************/

const dayOfWeekLib = require('./dayOfWeekBL');
const assert = require('assert');
try{
     describe('Test SqureRoot', () => {
        let month = 1;;
        let date = 29;
        let year = 2020;
        let days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        month == 2 && dayOfWeekLib.isLeapYear(year) ? days[month] = 29 : days[month] ;
        let test1 = dayOfWeekLib.day(month, date, year);
        let checkResult1 = 3;
        it('SqureRoot1', () => {
            assert.equal(test1,checkResult1);
        })
    })
}catch(err){
    console.log(err);
}