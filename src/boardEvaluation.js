import { gameBoard } from "./gameboard";

export const boardEvaluation = (function (gameboard) {
  const _n = gameboard.getN();

  function winner(board) {
    const directionVectors = [
      { col: 1, row: 0 },
      { col: 1, row: 1 },
      { col: 0, row: 1 },
      { col: -1, row: 1 },
      { col: -1, row: 0 },
      { col: -1, row: -1 },
      { col: 0, row: -1 },
      { col: 1, row: -1 },
    ];

    let char = "";
    let newcol = 0;
    let newrow = 0;
    let count = 0;
    let winner = "";
    let isBoardFull = true;
    let out = false;
    for (let col = 0; col < _n; col++) {
      for (let row = 0; row < _n; row++) {
        char = board[row][col];
        if (char != "") {
          for (let i = 0; i < 8; i++) {
            count = 0;
            newcol = col;
            newrow = row;
            out = false;
            while (count < 3 && !out && char == board[newrow][newcol]) {
              newcol = newcol + directionVectors[i].col;
              newrow = newrow + directionVectors[i].row;
              out = newrow < 0 || newrow >= _n || newcol < 0 || newcol >= _n;
              count++;
            }
            if (count == 3) {
              winner = char;
            }
          }
        } else {
          isBoardFull = false;
        }
      }
    }
    if (isBoardFull && winner == "") {
      return "tie";
    } else {
      return winner;
    }
  }

  return { winner };
})(gameBoard);
