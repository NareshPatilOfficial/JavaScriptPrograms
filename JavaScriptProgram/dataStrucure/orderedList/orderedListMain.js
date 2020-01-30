/******************************************************************************
 *  Execution       :   1. default node         cmd> node orderedListMain.js
 *  @description    :  Read a List of Numbers from a file and arrange it ascending 
                       Order in a Linked List. Take user input for a number, if found
                       then pop the number out of the list else insert the number in appropriate position
 *  @file           :  orderedListMain.js
 *  @overview       :  Create a Ordered Linked List having Numbers in ascending order. 
 *                    One ref to the data field and  second the ref to the next node object.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const fs = require('fs');
const unoLib = require('./orderedListBL');
const readline = require('readline-sync');
try {
    let output = false;
    let num = readline.question(' Enter the Number to be searched ')
    main = () => {
        return new Promise((resolve, reject) => {
            fs.readFile('test1.txt', (err, data) => {
                if (err) return reject(err);
                let input = data.toString().split(',').map((ele) => {
                    return parseInt(ele)
                });
                return resolve(input.sort((a, b) => { return a - b }))
            })
        });
    }
    const llN = new unoLib.LinkedList();
    // main().then((mapp)=>{
    //     console.log(mapp);
    // })
    main().then((input) => {
        let temp = 0;
        for (let i = input.length - 1; i >= 0; i--) {
            llN.insertFirst(input[i])
            if (num === input[i]) {
                output = true;
                temp = i;
            }
        }
        console.log('the list is - ')
        llN.printList();
        console.log('element found at ' + temp);
        if (output != true) {
            for (let i = 0; i < input.length; i++) {
                if (num < input[i]) {
                    llN.insertAt(num, i);
                    llN.saveToFile().then((number) => {
                        fs.writeFile('test1.txt', number, (err) => {  
                            if (err) throw err; 
                        }) 
                    });
                    break;

                }
                else {
                    llN.insertAt(num, (input.length));
                    llN.saveToFile().then((number) => {
                        fs.writeFile('test1.txt', number, (err) => {  
                            if (err) throw err; 
                        }) 
                    });
                    break;
                }
            }
            console.log('list after inserting');
            llN.printList();
        }
        else {
            llN.deleteElement(temp);
            console.log('list after deleting');
            llN.saveToFile().then((number) => {
                fs.writeFile('test1.txt', number, (err) => {  
                    if (err) throw err; 
                }) 
            });
            llN.printList();
        }
    })
}
catch (err) {
    console.log(err);
}