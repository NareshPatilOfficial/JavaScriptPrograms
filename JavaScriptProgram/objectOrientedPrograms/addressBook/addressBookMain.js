/******************************************************************************
 *  Execution       :   1. default node         cmd> node addressBookMain.js 
                      
 * @description     : To make address book using oops concept and stores and retrieve 
                      the data from json file.  
 *  @file           : addressBookMain.js
 *  @overview       : Implementation of address book program
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 03-02-2020
 ******************************************************************************/
const addBookLib = require('./addressBookBL');
const readLine = require('readline-sync');
try{
    let main = () => {
        let AB = new addBookLib.AddressBook();
        // AB.addEntry();
            while(true){
                console.log('1 = For Add Entry.');
                console.log('2 = For Delete Entry.');
                console.log('3 = For Edit Entry.');
                console.log('4 = For Print Entries.');
                console.log('5 = For Sort By Name.');
                console.log('6 = For Sort By Zip.');
                console.log('7 = For EXIT.');
                let choice = readLine.questionInt('Enter Your Choice : ');
                switch(choice){
                    case 1:
                        AB.addEntry();
                        break;
                    case 2:
                        AB.deleteEntry();
                        break;
                    case 3:
                        AB.editEntry();
                        break;
                    case 4:
                        AB.printBookData();
                        break;
                    case 5:
                        AB.shortByName();
                        break;
                    case 6:
                        AB.shortByZip();
                        break;
                    case 7:
                        process.exit(0);
                }
            }
        }
    main();
}catch(err){
    throw err
}