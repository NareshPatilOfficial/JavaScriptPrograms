/**
 * dataStructure/binarySearchTree.
 * @module dataStructure/binarySearchTree
*/
/**
 * @module- class node that has value and next parameter assign to null 
*/
class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree{
    constructor(){
        this.root = null;
    }
    /**
     * @module-it will insert the data into the BinaryTree.
     * @param {Number} data - data to insert in the BinaryTree.
    */
    insert(data){
        let newnode = new Node(data);
        if(this.root===null){
            console.log("root is null");
            this.root = newnode;
        }else{
            this.insertNewNode(this.root,newnode);
        }
    }
    /**
     * @module-it will insert the data into the BinaryTree at corresponding position.
     * @param {node} node - node fir comparision.
     * @param {node} node - node fir comparision.
    */
    insertNewNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNewNode(node.left,newNode);
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNewNode(node.right,newNode);
            }
        }
    }
     /**
     * @module-it will return root node.
     * @return root node.
    */
    getRootNode(){
        return this.root;
    }
    /**
     * @module-it will print nodes data in left,root,right.
    */
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    /**
      * @module-it will print nodes data in root,left,right.
    */
    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
}
module.exports = {
    Node,binarySearchTree
}