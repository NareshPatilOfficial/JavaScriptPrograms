/******************************************************************************
 *  Execution       : 1. default node         cmd> node tempraturConversionMain,js
 *
 *  Purpose         : fahrenheit as input outputs the temperature in Celsius or viceversa.
 *
 *  @description    : To the Util Class add temperaturConversion static function, given the temperature in 
 *                    fahrenheit as input outputs the temperature in Celsius or viceversa using the formula
 *  @overview       : convert to Binary using toBinary function and perform the following functions.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const readLine = require('readline-sync');
const tempLib = require('./temperaturConversionBL');
try{
    let celsius = readLine.questionFloat('Enter the celsius : ');
    let celsiusToFahrenheit = tempLib.celsiusToFahrenheit(celsius);
    console.log(`${celsius} = ${celsiusToFahrenheit}`);
    let fahrenheitToCelsius = tempLib.fahrenheitToCelsius(celsiusToFahrenheit);
    console.log(`${celsiusToFahrenheit} = ${fahrenheitToCelsius}`);
}catch(err){
    throw err;
}