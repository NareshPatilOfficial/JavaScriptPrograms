/**
 * dataStructure/palindromChecker.
 * @module dataStructure/palindromChecker
*/
let resultArr = [];
let index = 0;
let range = 100;
let i =0;
let arr = [];
module.exports = {
    resultArr,
    /**
     * it will find prime numbers,
     * @param {number} number - find prime till given number. 
    */
    primeNumbers: (number) => {
        for(let i=2;i<=number+10;i++){
            let isPrime =true;
            for(j=2;j<=i/2;j++){
                if(i%j == 0){
                    isPrime=false;
                }
            }
            isPrime ? module.exports.storeDataInRange(i) : j;
        }
    },
    /**
         * it will store the value in array.
         * @param {number} value - store in corresponding array
    **/
    storeDataInRange: (value) => {
        if(value < range){
            arr[i++] = value;
        } else if(value > range) {
            range = range + 100;
            resultArr[index++] = arr;
            arr = [];
            i = 0;
            arr[i++] = value;
        }
    }
}