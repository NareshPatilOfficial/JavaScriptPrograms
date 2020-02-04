/******************************************************************************
 *  Execution       :   1. default node         cmd> node ricePlusesWheatsMain.js 
                      
 * @description     : Calculating the total price of items in inventory based on their quantity
                      which store in JSON file.  
 *  @file           : ricePlusesWheatsMain.js
 *  @overview       : calculating the total price of items in inventory based on their quantity
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 04-02-2020
 ******************************************************************************/
const fs = require('fs');
const inventoryLib = require('./ricePlusesWheatsBL');
try{
    let main = () => {
        let shop = new inventoryLib.ManageInventory();
        shop.calculateInventoryTotal();
    }
    main();
}catch(err){
    throw err;
}