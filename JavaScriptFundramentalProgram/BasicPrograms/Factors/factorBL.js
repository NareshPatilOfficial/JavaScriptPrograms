
/**
 * FuctionalPrograms/Factors.
 * @module BasicPrograms/Factors
 */

module.exports = {

    /**
     * Genarate .
     * @param {number} n - it take number for find prime factores.
     * @return {number} factor .
     */
    factorOf:function(n){
        while (n % 2 == 0)  
            {  
                n = n/2;  
            }
            
            for (let i = 3; i <= n*n; i = i + 2)  
            {  
                // While i divides n, print i and divide n  
                while (n % i == 0)  
                {  
                    console.log(i);
                    n = n/i;  
                }  
            }  

            if (n > 2)  
                console.log(n);
            }
}