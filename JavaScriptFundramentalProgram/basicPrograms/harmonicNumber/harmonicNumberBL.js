
/**
 * BasicPrograms/HarmonicNumber.
 * @module BasicPrograms/FlipCoin
 */

module.exports = {
    /**
     * Check given year is valid or not.
     * @param {number} num - it take number for find harmonic number.
     * @return {number} harmonic .
     */
    harmonicOf: (num) => {
        let harmonic = 0.0;
        for (let i = 1; i <= num; i++) {
            harmonic = harmonic + (1 / i);
        }
        return harmonic;
    }
}