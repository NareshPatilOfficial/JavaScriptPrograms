/**
 * @module - calender implemented using Gregorian calendar (where / denotes integer division):
             y0 = y − (14 − m) / 12
             x = y0 + y0/4 − y0/100 + y0/400
             m0 = m + 12 × ((14 − m) / 12) − 2
             d0 = (d + x + 31m0 / 12) mod 7
 * @param  {Number} month- enter the month in number form 
 * @param  {Number} year - enter the 4 digit year 
 */
exports.calender = (month, year) => {
    day = (month, day, year) => {
        let y = year - (14 - month) / 12;
        let x = y + y / 4 - y / 100 + y / 400;
        let m = month + 12 * ((14 - month) / 12) - 2;
        let d = (day + x + (31 * m) / 12) % 7;
        return d;
    }
    /**
     * @module - this checks for the leap year  
     */
    isLeapYear = () => {
        if (year % 4 == 0 && year % 100 != 0 || year % 400) {
            return true;
        }
        else {
            return false;
        }
    }
    const months = [" ", "january", "february", "march", "april", "may", "june", "july", "august",
        "september", "october", "november", "december"]
    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (month == 2 && isLeapYear(year))
        days[month] = 29;
    console.log(" " + months[month] + " " + year);
    console.log("S M Tu W Th F S");
    let x = day(month, 1, year)
    let str = "";
    for (let i = 1; i < days[month]; i++) {
        if (i % 8 == 0)
            str = str.concat('\n');
        else
            str = str.concat(i + " ");
    }
    console.log(str);
}