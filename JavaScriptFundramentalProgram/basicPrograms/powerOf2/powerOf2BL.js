/**
 * FuctionalPrograms/FlipCoin.
 * @module BasicPrograms/PowerOf2
 */
module.exports = {
    /**
     * found the power.
     * @param {number} num - it take which we want find of given raise.
     * @param {number} rais - it take raised number.
     * @return {number} power of given above value.
     */
    pow: (num, rais) => {
        let pow = 1;
        for (let i = 1; i <= rais; i++) {
            pow = pow * num;
        }
        return pow;
    }
}