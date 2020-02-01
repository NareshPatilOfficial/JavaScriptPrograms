/**
 * @module- class node that has value and next parameter assign to null 
 */
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
/**
 * @module- class queue that has front and back and methods like enqueue(),dequeue(),printQueue() 
 */
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }
    /**
     * @module - add elements to queue in O(1) time
     * @param {*} element - element need to be added in queue 
     */
    enqueue(element) {
        const N = new Node(element, null);
        if (this.back === null) {
            this.front = N;
            this.back = N;
        } else {
            this.back.next = N;
            this.back = this.back.next;
        }
    }
    /**
     * @module -  remove first element from queue in O(1) time
    */
    dequeue() {
        if (this.front !== null) {
            const first = this.front;
            this.front = this.front.next;
            return first.value;
        } else {
            if (Queue.back !== null) { Queue.back = null; }
            return 'Cannot dequeue because queue is empty';
        }
    }
    /**                        
      * @module-it will print the element of the queue
    */
    printQueue() {
        let current = this.front;
        console.log('Elements of queue is ->>>>>> ')
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}
/**
    * @module- it will generate prime numbers in a given range
    * @param {number} n - range of numbers.
 */
let pnumbers = [];
primeNumbersGenerator = (n) => {
    pnumbers = checkPrimeNumber(n);
    //let arr = new Array();
    //tempPNumbers array stores the prime number in string form so to work on anagram logic
    let tempPNumbers = pnumbers.map((ele) => {
        return ele.toString();
    });
    let anagramArr = [];
    for (let i = 0; i < tempPNumbers.length; i++) {
        for (let j = i + 1; j < tempPNumbers.length; j++) {
            if (checkAnagram(tempPNumbers[i], tempPNumbers[j])) {
                anagramArr.push(tempPNumbers[i], tempPNumbers[j]);
            }
        }
    }
    return anagramArr;
}
/**
 * @module- it will check for the number is prime or not
 * @param {Number} n - number to check for prime number 
 * @returns {Array} arr - returns an array of prime numbers
 */
checkPrimeNumber = (n) => {
    let arr = [];
    for (let i = 2; i < n; i++) {
        let count = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (!(count > 0))
            arr.push(i);
    }
    return arr;
}
/**
 * @module-it will check for the number is anagram or not
 * @param {Number} number1 - number to check for anagram with other number
 * @param {Number} number2 - number to check for anagram with other number
 * @returns {Boolean}  - returns true or false
 */
checkAnagram = (number1, number2) => {
    if (number1.length == number2.length) {
        number1 = number1.split('').sort((a, b) => { return a - b }).join();
        number2 = number2.split('').sort((a, b) => { return a - b }).join();
        if (number1 == number2) {
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}
module.exports = {
    Node, Queue, checkAnagram, checkPrimeNumber, primeNumbersGenerator
}