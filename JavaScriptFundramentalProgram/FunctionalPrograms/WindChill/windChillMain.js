/******************************************************************************
 *  Execution       : 1. default node         cmd> node windChillMain.js 2.4 3.6
 *
 *  Purpose         : Find Wind Chill by given temprature and wind speed;
 *
 *  @description    : Given the temperature t (in Fahrenheit) and the wind speed v
 *                    (in miles per hour), compute the wind chill w using the formula
 *                    from the National Weather Service.

 *  @file           : windChillMain.js
 *  @overview       : w = 35.74 + 0.6215*t + (0.4275*t - 35.75)  *  v ^ 0.16s
 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-01-2020
 ******************************************************************************/


const WindChildLib = require('./windChillBL');

try{
    let myArr = process.argv.slice(2);
    let t = myArr[0];
    let v = myArr[1];
    
    console.log(`Temperature = ${t}`);
    console.log(`Wind Speed = ${v}`);
    console.log(`Wind Chill = ${WindChildLib.findWindChill(t,v)}`);

}catch(err){
    console.log(err);
}