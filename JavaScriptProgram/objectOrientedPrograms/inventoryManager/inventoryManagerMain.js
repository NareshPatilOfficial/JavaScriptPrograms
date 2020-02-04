/******************************************************************************
 *  Execution       :   1. default node         cmd> node ricePlusesWheatsMain.js 
                      
 * @description     : Extend the above program to Create InventoryManager to manage the Inventory.
                      The Inventory Manager will use InventoryFactory to create Inventory Object
                      from JSON. The InventoryManager will call each Inventory Object in its list 
                      to calculate the Inventory Price and then call the Inventory Object to return 
                      the JSON String. The main program will be with InventoryManager.  
 *  @file           : ricePlusesWheatsMain.js
 *  @overview       : calculate the Inventory Price and then call the Inventory Object to return 
 *                    the JSON String
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 04-02-2020
 ******************************************************************************/
const fs = require('fs');
const inventoryLib = require('./inventoryManagerBL');
try{
    let main = () => {
        let shop = new inventoryLib.ManageInventory();
        shop.calculateInventoryTotal();
        shop.inventoryObject();
    }
    main();
}catch(err){
    throw err;
}