/**
 * dataStructure/unorderedList.
 * @module dataStructure/unorderedList
 */
/**
* @module-its a implementation of stack using class Stack which have functionality like push(),pop(),isEmpty()
 */
class Stack {
    constructor() {
        this.items = [];
    }
    /**
  * @module-it will insert the value in the stack class
  * @param {String} value - enter the expression to push in stack class 
    */
    push(value) {
        this.items.push(value);
    }
    /**
 * @module-it will delete the value in the stack class
    */
    pop() {
        if (this.items.length === 0) return console.log('stack is underflow');
        return this.items.pop();
    }
    /**
 * @module-it will will check whether the stack is empty or not
    */
    isEmpty() {
        if (this.items.length === 0) return true;
        else return false;
    }
    /**
 * @module-it will print the element of stack
    */
    printStack() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}
/**
 * @module-this will check for the given expression's parantheses are balanced or not
 * @param {String} expression - enter the expression to check whether the parantheses are balanced or not 
   */
exports.balanceParentheses = (expression) => {
    const stack = new Stack();
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            stack.push(expression[i]);
        }
        else if (expression[i] === ')') {
            if (stack.isEmpty() || stack.pop() != '(') {
                return false;
            }
        }
    }
    return stack.isEmpty();
}