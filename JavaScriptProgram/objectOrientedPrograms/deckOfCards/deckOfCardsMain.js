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