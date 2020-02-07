/******************************************************************************
 *  Execution       : 1. default node         cmd> node factoryMain.js
 *                    2. if nodemon installed cmd> nodemon factoryMain.js
 * 
 *  @description    : factory Design Pattern
 *
 *  @file           : factoryMain.js
 *  @overview       : Factory design pattern implementation
 *  @module         : module - This is optional if expeclictly its an npm or local package
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 07-02-2020
 ******************************************************************************/
const factLib = require('./factoryDesignPatternBL');
try{
    let main = () => {
        let factory = new factLib.LaptopFactory();
        let producResult = factory.fectoryMethod('Asus');
        console.log(producResult);
    }
    main();
}catch(err){
    throw err;
}