/******************************************************************************
 *  Execution       : 1. default node         cmd> node tictactoeMain.js
 *
 *  Purpose         : The User or the Computer can only take the unoccupied cell.
 *                    The Game is played till either wins or till draw...
 *
 *  @description    : Write a Program to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the 
 *                    Player 2 is the user. Player 1 take Random Cell that is the Column and Row.
 *  
 *  @overview       : Print the Col and the Cell after every step.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-01-2020
 ******************************************************************************/


const readLine = require('F:/BridgeLabzAngular/Angular/JavaScriptFundramentalProgram/node_modules/readline-sync');
const t = require('./tictactoeBL');
try{
    let x=0,y=0;
    do
        {
            console.log(t.player==t.X?"Player X turn":"Player O turn");
            
            x = readLine.question("Enter x places : ");
            y = readLine.question("Enter y places : ");

              
            t.putSign(x, y);
            console.log(t.toString());
            console.log("_____________________________");
            t.displayWinner();
              
        }while(t.isEmpty);
      

}catch(err){
    console.log(err);
}