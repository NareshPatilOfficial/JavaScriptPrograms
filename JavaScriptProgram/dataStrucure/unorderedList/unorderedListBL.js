/**
 * dataStructure/simpleBalanceParantheses.
 * @module dataStructure/simpleBalanceParantheses
 */
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
 * @module - class Linked List that has functionality like insertAtValue(),deleteElement(),printList()  
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    /**
  * @module-it will insert the value at the first in the linked list
  * @param {String} value - enter the word to add in the linked list 
    */
    insertAtFirst(value) {
        this.head = new Node(value, this.head)
        this.size++
    }
    /**                        
 * @module-it will delete the element for the given index
 * @param {Number} index - specify the index of element to delete 
  */
    deleteElement(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    /**                        
      * @module-it will print the element of the Linked list
    */
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next;
        }
    }
    /**                        
      * @module-it will store the element of the Linked list to file.
    */
    saveToFile() {
        return new Promise((resolve,reject) => {
            try{
                let current = this.head;
                let str = '';
                while (current) {
                    str += current.value +' ';
                    current = current.next;
                }
                return resolve(str);
            }catch(err){
                return reject(err);
            }
        })
    }
}
module.exports = {
    Node, LinkedList
}