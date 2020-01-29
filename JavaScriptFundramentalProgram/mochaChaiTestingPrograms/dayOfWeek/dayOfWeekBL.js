/**
 * mochaChaitestingPrograms/dayOfWeekBL.
 * @module mochaChaitestingPrograms/dayOfWeekBL
 */

module.exports = {
    /**
     * it will give day of week number.
     * @param {month} m - it take month as a number.
     * @param {day} m - it take day as a number.
     * @param {year} m - it take year as a number.
     * @return {number} return day .
     */
    day: (month,day,year) => {
        let y = year - (14 - month) / 12;
        let x = y + y/4 - y/100 + y/400;
        let m = month + 12 * ((14 - month) / 12) + 2 ;
        let d = (day + x + (31*m)/12) % 7;
        return Math.floor(d);
    },

    /**
     * it check leap year.
     * @param {year} m - it take year as a number.
     * @return {boolean} return boolean value.
    */
    isLeapYear: (year) => {
        if  ((year % 4 == 0) && (year % 100 != 0)) return true;
        if  (year % 400 == 0) return true;
        return false;
    }
    
}