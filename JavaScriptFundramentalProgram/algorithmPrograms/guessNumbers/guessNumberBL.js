/**
 * algorithmPrograms/guessNumber.
 * @module algorithmPrograms/guessNumber 
 */
const readline = require('readline-sync');
/**
 *@module - its a simulation of a game guess the number where user have to guess a number between some range
 * @param {Number} low - lower range 
 * @param {Number} high - higher range 
 * @returns {function} guessTheNumber - it is a recursive call 
 */
module.exports = {
    guessTheNumber:(low, high) => {
    if ((high - low) == 1) {
        return low
    }
    let mid = low + (high - low) / 2;
    console.log('is it less than ' + mid);
    let temp = readline.question(' ');
    if (temp == 'true') return module.exports.guessTheNumber(low, mid)
    else return module.exports.guessTheNumber(mid, high)
}
}