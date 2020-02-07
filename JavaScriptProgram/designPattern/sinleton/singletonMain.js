/******************************************************************************
 *  Execution       :   1. default node         cmd> node singletonMain.js
 *                      2. if nodemon installed cmd> nodemon singletonMain.js
 *
 *  Purpose         : example of singleton design pattern
 *
 *  @description    : Singleton Design Pattern
 *
 *  @file           : singletonMain.js
 *  @overview       : Singleton design pattern
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 07-02-2020
 ******************************************************************************/
const singlLib = require('./singletonBL');
try{
    let main = () => {
        let singObj = new singlLib.SingltonPat('Naresh');
        const obj1 = singObj.getObject();
        const obj2 = singObj.getObject();
        console.log(obj1)
        console.log(obj2)
        console.log(obj1 == obj2);
    }
    main();
}catch(err){
    throw err;
}   