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
const assert = require('assert');
try{
    let celsius = 100;
    let celsiusToFahrenheit = tempLib.celsiusToFahrenheit(celsius);
    let celsiusToFahrenheitResult = 212;
    let fahrenheitToCelsius = tempLib.fahrenheitToCelsius(celsiusToFahrenheit);
    let fahrenheitToCelsiusResult = 100;
    describe('Celsius To Fahrenheit', () => {
        'asd',
        it('Check Celsius To Fahrenheit', () => {
            assert.equal(celsiusToFahrenheit,celsiusToFahrenheitResult);
        })
    })
    describe('Fahrenheit To Celsius', () => {
        'asd',
        it('Check Fahrenheit To Celsius', () => {
            assert.equal(fahrenheitToCelsius,fahrenheitToCelsiusResult);
        })
    })
}catch(err){
    throw err;
}