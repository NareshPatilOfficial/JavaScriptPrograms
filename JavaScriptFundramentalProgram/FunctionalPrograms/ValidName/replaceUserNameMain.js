/******************************************************************************
 *  Execution       : 1. default node         cmd> node replaceUserNameMain.js
 *
 *  Purpose         : Get Valid UserName.
 *
 *  @description    : User will input username and if username is containt numbers or 
 *                    special charcter so after remove it return valid username.
 *
 *  @file           : replaceUserNameMain.js
 *  @overview       : User Input and Replace String Template “Hello <<UserName>>, How are you?”. 
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 18-01-2020
 ******************************************************************************/


const readline = require('F:/BridgeLabzAngular/Angular/JavaScriptFundramentalProgram/node_modules/readline-sync');
const validator  = require('./replaceUserNameBL');

try{
    var name = readline.question('What is your n ame? : ');
    console.log("your number : " +name);

    console.log('Valid Name is : '+validator.validName(name));
}
catch(err){
    console.log(err);
}