/**
 * LogicalPrograms/Gambler.
 * @module BasicPrograms/Gambler
 */
module.exports = {
    /**
     * It will genrate randome number from 0 to given perameter.
     * @param {number} max - it take number for genrate number.
     * @return {number} randome number .
     */
    getRandomInt:(max) => {
        return Math.floor(Math.random() * Math.floor(max));
    },

    /**
     * this is simulatore by this we get to know the palyer won or loss.
     * @param {number} stake - it take number as invest the stake.
     * @param {number} goal - it take number to reach the goal.
     * @return {void}  .
     */
    simulator:(stake,goal) => {
        let win = 0;
		let loss = 0;
		let totalGambles = 0;
		let gamble = 0;
		do {
			gamble = this.getRandomInt(2);
            console.log(gamble);
			totalGambles++;
			if (gamble == 0) {
                stake++;
                console.log(`Yay you won! You now have ${stake}. Your goal: ${goal}`);
				win++;
			} else {
                stake--;
                console.log(`Bad luck!You lost! You now have ${stake}. Your goal: ${goal}`);
				loss++;
			}
		} while (!(stake == 0 || stake == goal));
        console.log(`you won ${win} times`);
        let winp = (win / totalGambles) * 100;
        console.log(`Win percent% ${winp}`);
        let lossp = (loss / totalGambles) * 100;
        console.log(`Loss percent% ${lossp}`);
    }
}