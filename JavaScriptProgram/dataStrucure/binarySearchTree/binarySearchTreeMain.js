 /******************************************************************************
 *  @Execution      : 1. default node         cmd> node binarySearchTreeMain.js
 *
 *  @Purpose        : create a binary search tree.
 *
 *  @description    : number of binary search tree
 *  @file           : binarySearchTreeMain.js
 *  @overview       : create a binary search tree.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 1-02-2020
 ******************************************************************************/
const BstLib = require('./binarySearchTreeBL');
try{
    let main = () => {
        let BST = new BstLib.binarySearchTree();
        BST.insert(2);
        BST.insert(5);
        BST.insert(3);
        BST.insert(1);
        BST.insert(9);
        let rootNode = BST.getRootNode();
        // console.log(root);
        console.log('inorder');
        BST.inorder(rootNode);
        console.log('Preorder');
        BST.preorder(rootNode);
    }
    main();
}catch(err){
    throw err;
}