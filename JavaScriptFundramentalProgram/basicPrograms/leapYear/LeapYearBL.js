/**
 * BasicPr/FlipCoin.
 * @module BasicPrograms/LeapYear
 */


module.exports = {
     /**
     * Check given year is valid or not.
     * @param {number} year - it take num.
     * @return {boolean} .
     */
    checkYear: (year) => {
        let regex = new RegExp('^[0-9]{4}$');
        return regex.test(year);
    },

    /**
     * Check given year is leap year or not.
     * @param {number} year - it take num.
     * @return {void} .
     */
    isLeap:(year) => {
        console.log('Check Valid Year : '+this.checkYear(year));
        if(this.checkYear(year)){
            
            if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)))
                console.log('Given Year is Leap Year.');
            else
                console.log('Given Year is Not Leap Year.')

        }else{
            console.log("Enter Valid Year..");
        }   
    }
}