/**
 * mochaChaitestingPrograms/toBinary.
 * @module mochaChaitestingPrograms/toBinary
 */
module.exports = {
    /**
     * it will convert to binary.
     * @param {number} decimal - it take decimal as a number.
     * @return {number} return binary .
     */
    toBinary: (decimal) => {
        let binary = '';   
        while(decimal > 0){    
            binary += decimal%2;    
            decimal = parseInt(decimal/2);     
        }
        return binary.split("").reverse().join().replace(/,/g, '');   
    }
}