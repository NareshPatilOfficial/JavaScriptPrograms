/******************************************************************************
 *  Execution       : 1. default node         cmd> node stopWatchMain.js
 *
 *  Purpose         : Measure the elapsed time between start and end
 *
 *  @description    : Write a Stopwatch Program for measuring the time 
 *                    that elapses between the start and end clicks
 *  
 *  @overview       : Start the Stopwatch and End the Stopwatch
 *                     Measure the elapsed time between start and end.
 *  @module         : module_name - This is optional if expeclictly its an npm or local package
 *  @author         : Naresh Patil <nareshpatil.nrp@gmail.com>
 *  @version        : 1.0
 *  @since          : 22-01-2020
 ******************************************************************************/

 /**
 * LogicalPrograms/stopWatchMain.
 * @module LogicalPrograms/stopWatchMain
 */

class Stopwatch {

    constructor() {
        this.start = this.cuurentMilSec();;
    }

    /**
     * It will return cuurent Time milliSeconds.
     * @return {Float} MilliSeconds .
     */
    cuurentMilSec (){
        let currentdate = new Date();
        return currentdate.getMilliseconds();
    }

    /**
     * It will calculate required timeand return.
     * @return {Float} MilliSeconds .
     */ 
    elapsedTime() {
        let now = this.cuurentMilSec();
        return (now - this.start) / 1000.0;
    }

}

try {
    let n = 5;

    // sum of square roots of integers from 1 to n using Math.sqrt(x).
    let timer1 = new Stopwatch();
    let sum1 = 0.0;
    for (let i = 1; i <= n; i++) {
        sum1 += Math.sqrt(i);
    }
    let time1 = timer1.elapsedTime();
    console.log(`${sum1} (${time1} seconds)`);

    // sum of square roots of integers from 1 to n using Math.pow(x, 0.5).
    let timer2 = new Stopwatch();
    let sum2 = 0.0;
    for (let i = 1; i <= n; i++) {
        sum2 += Math.pow(i, 0.5);
    }
    let time2 = timer2.elapsedTime();
    console.log(`${sum2} (${time2} seconds)`);

} catch (err) {
    console.log(err);
}