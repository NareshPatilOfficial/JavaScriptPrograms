/**
 * @class Node
 * @class Queue
 */
/**
 * @module- class node that has value and next parameter assign to null 
 */
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
/**
 * @module- class Queue that has front and back parameter assign to null 
 */
class Queue{
    constructor(){
        this.front=null
        this.back=null
    }
    /**
     * @module-it will check queue is empty or not.
    */
    isEmpty(){
        return this.front==null ? true : false
    }
    /**
     * @module-it will insert the customer at the first in the queue.
     * @param {Number} value - value to insert in the queue 
    */
    enqueue(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.front=this.back=node;
        }else{
            this.back.next=node;
            this.back=node
        }
    }
    /**
     * @module-it will print the queue.
    */
    printQueue(){
        if(this.isEmpty()){
            console.log('no data available')
        }else{
            let tempArr=[]
            let temp=this.front
            while(temp){
                tempArr.push(temp.value)
                temp=temp.next
            }
            console.log(tempArr);
        }
    }
    /**
     * @module-it will remove the customer from the queue.
    */
    dequeue(){
        let node =this.front
        if(!this.isEmpty()){
            this.front=this.front.next;
        }
        if(!this.front){
            this.back=null
        }
        this.printQueue()
        return node
    }
}
module.exports={
    Node,
    Queue
}