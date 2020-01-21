/******************************************************************************
 *  Execution       : 1. default node         cmd> node quadraticMain.js
 *
 *  Purpose         : Find Quadratic result;
 *
 *  @description    : Write a program Quadratic.java to find the roots of the 
 *                    equation a*x*x + b*x + c. Since the equation is x*x, hence 
 *                    there are 2 roots. The 2 roots of the equation can be found 
 *                    using a formula (Note: Take a, b and c as input values)

 *  @file           : quadraticMain.js
 *  @overview       : delta = b*b - 4*a*c
                      Root 1 of x = (-b + sqrt(delta))/(2*a)
                      Root 2 of x = (-b - sqrt(delta))/(2*a)
 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 21-01-2020
 ******************************************************************************/


const readLine = require('F:/BridgeLabzAngular/Angular/JavaScriptFundramentalProgram/node_modules/readline-sync');
const quadraticBL = require('./quadraticBL');
try{
    let a = readLine.questionFloat('Enter The a :');
    let b = readLine.questionFloat('Enter The b :');
    let c = readLine.questionFloat('Enter The c :');
    quadraticBL.findQuadratic(a,b,c);

}catch(err){
    console.log(err);
}