

let notes = [2000,500,200,100,50,20,10,5,1];
let noteCounter = [];
let len = notes.length;

module.exports = {
    countCurrency:function(amount){
        for(let i=0;i<len;i++){
            if(amount >= notes[i]){
                noteCounter[i] = Math.floor(amount/notes[i]);
                amount = amount - (noteCounter[i] * notes[i]);
            }
        }
    },

    giveCurrency:function(){

        for(let i=0;i<len;i++){
            if(noteCounter[i] != undefined){
                console.log(`${notes[i]} = ${noteCounter[i]}`);
            }
        }
    }
}