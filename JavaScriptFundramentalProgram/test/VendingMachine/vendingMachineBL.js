/**
 * BasicPrograms/FlipCoin.
 * @module BasicPrograms/FlipCoin
 */
let notes = [2000,500,200,100,50,20,10,5,1];
let noteCounter = [];
let len = notes.length;

module.exports = {

    /**
     * it will count currency.
     * @param {number} amount - it take amount.
     * @return {void} .
     */
    countCurrency:(amount) => {
        for(let i=0;i<len;i++){
            if(amount >= notes[i]){
                noteCounter[i] = Math.floor(amount/notes[i]);
                amount = amount - (noteCounter[i] * notes[i]);
            }
        }
    },

    /**
     * it will print count currency.
     * @return {void} .
     */
    giveCurrency:() => {
        let result = ''
        for(let i=0;i<len;i++){
            if(noteCounter[i] != undefined){
                // process.stdout.write(`${noteCounter[i]} `);
                result += noteCounter[i]+' '
            }
        }
        return result;
    }
}