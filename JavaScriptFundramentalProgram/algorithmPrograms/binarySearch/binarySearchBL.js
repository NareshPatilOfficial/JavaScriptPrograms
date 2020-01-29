/**
 * algorithmPrograms/binarySearchBL.
 * @module algorithmPrograms/binarySearchBL
 */
const fs = require('fs');
/**
    * @module - fetches the input from given file input.txt using fs.readfile() method inside a promise 
    * @returns {Array} - it will return a promises which is resolved , if it is rejected it will return err.
    */
getInput = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('test1.txt', (err, data) => {
            if (err) return reject(err);
            let input = data.toString().split(' ').map((ele) => {
                return ele
            });
            return resolve(input.sort()); //apply sorting using predefined sort method
        })

    })
}
/**
 * do binary search having given input word to search in a given array
 * @param {string} word - passed as a parameter which is need to be searched
 * @param {Array} input - passed as a paramter which is an array of words fetched from file
*/
doBinarySearch = (word, input) => {
    const mid = Math.round(input.length / 2)
    // console.log(mid)
    let flag = true;
    if (word === input[mid]) {
        console.log('element found and at index' + mid)
    } else if (word > input[mid]) {
        for (let i = mid; i < input.length; i++) {
            if (word === input[i]) {
                console.log('element found at index' + i)
            }else {
                flag = true;
            }
        }
    } else {
        for (let i = 0; i < mid; i++) {
            if (word === input[i]) {
                console.log('element found at index' + i)
            }else {
                flag = true;
            }
        }
    }
    flag?console.log('Given Element Not Founded'):1; 
}
module.exports = {
    getInput,
    doBinarySearch
}