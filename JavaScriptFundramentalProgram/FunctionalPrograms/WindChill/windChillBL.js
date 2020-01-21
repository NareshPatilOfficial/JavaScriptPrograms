/**  FunctionalPrograms/windChill
* @module FunctionalPrograms/windChill.
*/

module.exports = {

     /**
     * Find And Print distinct triples which sum = 0.
     * @param {t, v} Numbers - it take temprature and wind speed.
     * @return {Double} return Wind-Chill.
     */
    findWindChill:function(t,v){
        return 35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
    }
}