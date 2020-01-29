/**
 * mochaChaitestingPrograms/sqrt.
 * @module mochaChaitestingPrograms/sqrt
 */
module.exports = {
    /**
     * it will give squre root.
     * @param {c} m - it take c as a number.
     * @return {number} return t .
     */
    sqr: (c) => {
        let epsilon = 1.0e-15;  
        let t = c;
        while (Math.abs(t - c/t) > epsilon*t) {
            t = (c/t + t) / 2.0;
        }
        return t;
    }
}