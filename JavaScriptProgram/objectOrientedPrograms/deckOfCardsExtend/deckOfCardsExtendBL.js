/**
 * objectOrientedPrograms/deckOfCardsExtend.
 * @module objectOrientedPrograms/deckOfCardsExtend
 */
/**
 * @class CardNode
*/
class CardNode{
    constructor(suit,rank){
        this.suit = suit;
        this.rank = rank;
        this.next = null;
    }
}
/**
 * @class DeckOfCardLinkesList
*/
class DeckOfCardLinkesList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.suit  = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    }
    /**
     * @module-it will generate cards and store it into the linked-list.. 
    */
    cards(){
        for(let i=0;i<this.suit.length;i++){
            for(let j=0;j<this.rank.length;j++){
               let card = new CardNode(this.suit[i],this.rank[j]);
               if(this.tail == null && this.head == null){
                    this.head = this.tail = card;
                    this.size++;
               }else{
                    let temp = this.tail;
                    this.tail = card;
                    temp.next = this.tail;
                    this.size++;
               }
            }
        }
    }
    /**
     * @module-it will shuffle cards in linked-list.
    */
    shuffleCards(){
        let randomSuitIndex = parseInt(Math.random() * this.suit.length) ;
        let randomRankIndex = parseInt(Math.random() * this.rank.length) ;
        let currant = this.head;
        console.log(randomSuitIndex);
        console.log(randomRankIndex);
        console.log("Currant Head ");
        console.log("Currant Head = "+this.head);
        console.log("Currant Head ");
        console.log("Currant Tail = "+this.tail);
        let currantHead = this.head;
        while(currant){
            if(currant.suit == this.suit[randomSuitIndex] && currant.rank == this.rank[randomRankIndex]){
                // if it matched then the range from head to match & match to tail will be relpaced.
                let matchedNode = currant;
                this.head = matchedNode.next;
                matchedNode.next = null;
                this.tail.next = currantHead;
                this.tail = matchedNode;
            }
            currant = currant.next;
        }
    }
    /**
     * @module-it will print cards from linked-list.
    */
    printCards(){
        let currant = this.head;
        while(currant){
            console.log(`${currant.suit} = ${currant.rank}.`);
            currant = currant.next;
        }
}
}
module.exports = {
    DeckOfCardLinkesList
}