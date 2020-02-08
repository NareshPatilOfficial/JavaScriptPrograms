/******************************************************************************
 *  Execution       : 1. default node         cmd> node prototypeDesignPatternMain.js
 *                    2. if nodemon installed cmd> nodemon prototypeDesignPatternMain.js
 * 
 *  @description    : prototype Design Pattern
 *
 *  @file           : prototypeDesignPatternMain.js
 *  @overview       : prototype design pattern implementation
 *  @module         : module_name This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil<nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-02-2020
 ******************************************************************************/
const proLib = require('./prototypeDesignPatternBL');
try{
    let main = () => {
        let syskaObj = new proLib.Syska();
        let philipsObj = new proLib.Philips();
        console.log(syskaObj.getName());
        console.log(philipsObj.getName());
    }
    main();
}catch(err){
    throw err;
}