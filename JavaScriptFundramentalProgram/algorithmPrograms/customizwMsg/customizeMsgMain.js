/******************************************************************************
 *  Execution       :   1. default node         cmd> node customizeMsgMain.js 
                       
 *  @description    :  Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
                        Use Regex to replace name, full name, Mobile#, and Date with proper value.
 *  @file           : customizeMsgMain.js
 *  @overview       : read in the Message                
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const custLib = require('./customizeMsgBL');
main = () => {
    let msg = 'Read in the following message: Hello <<name>>, We have your full name as <<fullname>> in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.';
    console.log(custLib.customize(msg));
}
main();
