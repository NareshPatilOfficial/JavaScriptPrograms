/**
 * mochaChaitestingPrograms/swapNibble.
 * @module mochaChaitestingPrograms/swapNibble
 */ 

module.exports = {
    /**
     * it will swap nibbles and return decimal number.
     * @param {y} m - it take y as a number.
     * @return {number} return number .
     */
    swapAndDecimal: (y) => {
        let x = module.exports.toDecimal(y);
        return ((x & 0x0F) << 4 | (x & 0xF0) >> 4); 
    },

     /**
     * it will convert to binary.
     * @param {number} decimal - it take decimal as a number.
     * @return {number} return number .
     */
    toBinary: (decimal) => {
        let binary = '';   
        while(decimal > 0){    
            binary += decimal%2;    
            decimal = parseInt(decimal/2);     
        }
        while(binary%2 != 0){
            binary += '0'; 
        } 
        console.log(binary);
        let beforSwap = binary.split("").reverse().join().replace(/,/g, '');
        return beforSwap;
    },

    /**
     * it will convert to Binary.
     * @param {number} Binary - it take Binary as a number.
     * @return {number} return Decimal number .
     */
    toDecimal: (n) => {
        return parseInt(n, 2)
    }
}