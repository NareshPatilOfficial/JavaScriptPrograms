/******************************************************************************
 *  Execution       :   1. default node         cmd> node deckOfCardsMain.js
 *                      2. if nodemon installed cmd> nodemon deckOfCardsMain.js
 *  Purpose         : playing card implementation.
 *  @description    : Write a Program DeckOfCards.js, to initialize deck of cards having
 *                    suit ("Clubs", "Diamonds", "Hearts", "Spades") &
 *                    Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
 *                    Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and
 *                    Print the Cards the received by the 4 Players using 2D Array.
 *  @file           : deckOfCardsMain.js
 *  @overview       : playing card implementation.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 05-02-2020
 ******************************************************************************/
const deckLib = require('./deckOfCardsBL');
try{
    let main = () => {
        let cardObj = new deckLib.CardGame();
        cardObj.cards();
        cardObj.shuffleCards();
        cardObj.distributeCards();
    }  
    main();
}catch(err){
    throw err;
}