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
 *  @overview       : playing card implementation using Linked-List.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 06-02-2020
 ******************************************************************************/
const DOFElib = require('./deckOfCardsExtendBL');
try{
    let main = () => {
        let doceObj = new DOFElib.DeckOfCardLinkesList();
        doceObj.cards();
        doceObj.printCards();
        doceObj.shuffleCards();
        doceObj.printCards();
    }
    main();
}catch(err){
    throw err
}