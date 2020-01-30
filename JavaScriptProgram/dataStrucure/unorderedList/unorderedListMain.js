/******************************************************************************
 *  Execution       :   1. default node         cmd> node unorderedListMain.js
 *  @description    :  Read the Text from a file, split it into words and arrange it as Linked List.
                       Take a user input to search a Word in the List.
                       If the Word is not found then add it to the list,
                       and if it found then remove the word from the List. In the end save the list into a file
 *  @file           : unorderedListMain.js
 *  @overview       : Create a Unordered Linked List. The Basic Building Block is the Node Object.
 *                    Each node object must hold at least two pieces of information.
 *                    One ref to the data field and  second the ref to the next node object.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
const fs = require('fs');
const unoLib = require('./unorderedListBL');
const readline = require('readline-sync');
try {
    let output = false;
    let word = readline.question(' Enter the word to be searched ')

    main = () => {
        return new Promise((resolve, reject) => {
            // let input = [];
            fs.readFile('test1.txt', (err, data) => {
                if (err) return reject(err);
                let input = data.toString().split(' ');
                // let size = data.length;
                return resolve(input);
            })
        });
    }
    const ll = new unoLib.LinkedList();
    main().then((input) => {
        let temp = 0;
        for (let i = input.length - 1; i >= 0; i--) {
            ll.insertAtFirst(input[i])
            if (word === input[i]) {
                output = true;
                temp = i;
            }
        }
        if (output != true) {
            ll.insertAtFirst(word);
            ll.printList();
            ll.saveToFile().then((str) => {
                fs.writeFile('test1.txt', str, (err) => {  
                    if (err) throw err; 
                }) 
            })   
        } else {
            ll.deleteElement(temp);
            ll.printList();
            ll.saveToFile().then((str) => {
                fs.writeFile('test1.txt', str, (err) => {  
                    if (err) throw err; 
                }) 
            }) 
        }
    })
}
catch (err) {
    console.log(err);
}