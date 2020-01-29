

module.exports = {
    day: (month,day,year) => {
        let y = year - (14 - month) / 12;
        let x = y + y/4 - y/100 + y/400;
        let m = month + 12 * ((14 - month) / 12) + 2 ;
        let d = (day + x + (31*m)/12) % 7;
        return Math.floor(d);
    },

    isLeapYear: (year) => {
        if  ((year % 4 == 0) && (year % 100 != 0)) return true;
        if  (year % 400 == 0) return true;
        return false;
    }
    
}