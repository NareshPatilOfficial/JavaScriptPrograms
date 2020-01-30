/******************************************************************************
 *  Execution       :   1. default node         cmd> node palindromeCheckerMAin.js
 *                      2. if nodemon installed cmd> nodemon palindromeCheckerMAin.js
 *
 *  Purpose         : create a palindrome checker program using queue.
 *  @file           : palindromeCheckerMAin.js
 *  @overview       : create a palindrome checker.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 29-01-2020
 ******************************************************************************/
let read = require('readline-sync');
let access = require('./palindromeCheckerBL')
let str = read.question("Enter the string :")
let length = str.length;
let deque = new access.Dequeue();
for (let i = length - 1; i >= 0; i--) {
	deque.addFirst(str.charAt(i));
}
let reverse = "";
for (let i = 0; i < length; i++) {
	let ch = deque.removeLast();
	reverse += ch;
}
if (str == reverse) {
	console.log("it is palindrome !!!");
}
else {
	console.log("it's not palindrome !!!");
}