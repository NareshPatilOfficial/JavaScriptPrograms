/**
 * mochaChaitestingPrograms/dayOfWeekBL.
 * @module mochaChaitestingPrograms/monthlypayment
 */

module.exports = {
     /**
     * it will give monthly payment.
     * @param {p} m - it take principle as a number.
     * @param {y} m - it take year as a number.
     * @param {rate} m - it take rate as a number.
     * @return {number} return payment.
     */
    payment: (p,y,rate) => {
        let r = (rate / 100) / 12; 
        let n = 12 * y;
        return (p*r)/(1 - Math.pow(1 + r,-n));
    }
}