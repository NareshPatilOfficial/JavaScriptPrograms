
/**
 * BasicPrograms/FlipCoin.
 * @module BasicPrograms/FlipCoin
 */
// 
module.exports = {
    /**
     * Find Percentage of Tose Coin.
     * @param {string} num - it take num.
     * @return {string} 0.
     */
    flipCoin: (num) => {
        var sum = 0.0;
        var headCount= 0;
        var tailCount = 0;
        for(let i=1;i<=num;i++){
            let flip = Math.random();
            flip<0.5?
                // console.log('tail');
                headCount = headCount+1
            :
                // console.log('heads');
                tailCount = tailCount+1;
            
        }

        console.log('Persentage Of heads : '+((headCount/num)*100));
        
        console.log('Persentage Of heads : '+((tailCount/num)*100));
        return 0;
    },

    
};