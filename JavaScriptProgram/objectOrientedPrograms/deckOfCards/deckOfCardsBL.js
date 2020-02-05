
class CardGame{
    constructor(){
        this.card = [];
    }
    cards(){
        let suit  = ["Clubs", "Diamonds", "Hearts", "Spades"];
        let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        let cardNumbers = suit.length * rank.length;
        let cardindex = 0;
        for(let i=0;i<suit.length;i++){
            for(let j=0;j<rank.length;j++){
                this.card[cardindex++] = `[${suit[i]}][${rank[j]}]`;
            }
        }
        console.log(this.card);
    }
    shuffleCards(){
        let len = this.card.length;
        for(let i=0;i<len;i++){
            let n = parseInt(Math.random()*(len-1))+1;
            let temp = this.card[i];
            this.card[i] = this.card[n];
            this.card[n] = temp;
        }
        console.log(this.card);
    }
    distributeCards(){
        let cardsDistribute = {"players":[]};
        let playersNo = cardsDistribute.players.length;
        let cardIndex = 0;
        for(let i=1;i<=4;i++){
            let dist = [];
            for(let j=0;j<9;j++){
                dist[j] = this.card[cardIndex++];
            }
            // console.log(dist);
            cardsDistribute.players.push(dist);
        }
        console.log("***PLAYER-1****");
        console.log(cardsDistribute.players[0]);
        console.log("***PLAYER-2****");
        console.log(cardsDistribute.players[1]);
        console.log("***PLAYER-3****");
        console.log(cardsDistribute.players[2]);
        console.log("***PLAYER-4****");
        console.log(cardsDistribute.players[3]);
    }
}
module.exports = {
    CardGame
}