/**
 * LogicalPrograms/Coupon.
 * @module LogicalPrograms/Coupon
 */
module.exports = {
     /**
     * It will genrate randome number from 0 to given perameter.
     * @param {number} m - it take number for genrate number.
     * @return {number} randome number .
     */
    getCoupon:(n) => {
        return parseInt(((Math.random() * n )+ 1));
    },
     /**
     * It will collect the distinct coupon.
     * @param {number} max - it take number and genarate distinct coupon till given number.
     * @return {number} return number of time to generate distinct coupon.
     */
    collectCoupon:(n) => {
        let coupon = [];
        let count = 0;
        let distict = 0;
        while(distict < n){
            let coNum = this.getCoupon(n);
            count++;

            if(!coupon.includes(coNum)){
                coupon.push(coNum);
                distict--;
            }
            
            distict++;
        }
        return count;
    }
}