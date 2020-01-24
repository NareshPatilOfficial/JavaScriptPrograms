/**
 * LogicalPrograms/tictactoe.
 * @module BasicPrograms/tictactoe
 */
let X = 1, O = -1;
let EMPTY = 0;
let player = X;
let board = [[], [], []];
let isEmpty = false;
module.exports = {
    /**
     * It will put sign in board.
     * @param {number} x - it take number for put sign on board position.
     * @param {number} y - it take number for put sign on board position.
     */
    putSign: (x,y) => {
        if (x < 0 || x > 2 || y < 0 || y > 2) {
            console.log("Invalid board position");
            return;
        }
        if (board[x][y] != EMPTY) {
            console.log("Board position occupied");
            return;
        }
        board[x][y] = player;   // place the mark for the current player
        player = -player;
    },
    /**
     * It will put sign in board.
     * @return {array} randome number .
     */
    isWin : () => {
        return ((board[0][0] + board[0][1] + board[0][2] == player * 3) ||
            (board[1][0] + board[1][1] + board[1][2] == player * 3) ||
            (board[2][0] + board[2][1] + board[2][2] == player * 3) ||
            (board[0][0] + board[1][0] + board[2][0] == player * 3) ||
            (board[0][1] + board[1][1] + board[2][1] == player * 3) ||
            (board[0][2] + board[1][2] + board[2][2] == player * 3) ||
            (board[0][0] + board[1][1] + board[2][2] == player * 3) ||
            (board[2][0] + board[1][1] + board[0][2] == player * 3));
    },

    /**
     * It will dispaly winnner.
     */
    displayWinner: () => {
        if (this.isWin(X)) {
            console.log(" X wins...!!");
            isEmpty = false;
        }
        else if (this.isWin(O)) {
            console.log(" O wins...!!");
            isEmpty = false;
        }
        else {
            if (!isEmpty) {
                console.log("its a tie");
            }
        }

    },

    /**
     * It will return string.
     * @return {string} it return string.
     */
    toString: () => {
        let s;
        isEmpty = false;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                switch (board[i][j]) {
                    case X:
                        // s.append(" X ");
                        s = s + ' X ';
                        break;
                    case O:
                        // s.append(" O ");
                        s = s + ' O ';
                        break;
                    case EMPTY:
                        // s.append("   ");
                        s = s + '  ';
                        isEmpty = true;
                        break;
                }
                if (j < 2) {
                    // s.append("|");
                    s = s +'|';
                }

            }
            if (i < 2) {
                // s.append("\n-----------\n");
                s = s + '\n-----------\n';
            }
        }
        return s;
    }


}