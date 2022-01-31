import { gameBoard } from "./gameboard";
import { boardEvaluation } from "./boardEvaluation";

export const computer = ((board, evaluation) => {
  const n = board.getN();
  const _maxDepth = n * n - 1;
  let gameboard;

  function _getBoard() {
    gameboard = board.getBoard();
  }

  function winner(gboard) {
    return evaluation.winner(gboard);
  }

  function randomMove() {
    let col = 0;
    let row = 0;
    _getBoard();
    do {
      col = Math.floor(n * Math.random());
      row = Math.floor(n * Math.random());
    } while (gameboard[row][col] != "");
    return { col, row };
  }

  function _minimax(depth, isPlayerComputer) {
    const win = winner(gameboard);
    let value = 0;
    let char = "";
    let newValue = 0;
    let isTerminalNode = true;
    let bestMove;
    switch (win) {
      case "x":
        value = -1;
        break;
      case "o":
        value = 1;
        break;
      case "tie":
        value = 0;
        break;
      case "":
        isTerminalNode = false;
        break;
    }
    if (depth == 0 || isTerminalNode) {
      return value;
    } else {
      if (isPlayerComputer) {
        value = -1;
        char = "o";
      } else {
        value = 1;
        char = "x";
      }
      for (let col = 0; col < n; col++) {
        for (let row = 0; row < n; row++) {
          if (gameboard[row][col] == "") {
            gameboard[row][col] = char;
            newValue = _minimax(depth - 1, !isPlayerComputer);
            if (
              (newValue > value && isPlayerComputer) ||
              (newValue < value && !isPlayerComputer)
            ) {
              value = newValue;
              bestMove = { col, row, value };
            }
            gameboard[row][col] = "";
          }
        }
      }
      if (depth == _maxDepth) {
        return bestMove;
      } else {
        return value;
      }
    }
  }

  function bestMove() {
    _getBoard();
    return _minimax(_maxDepth, true);
  }

  return { randomMove, bestMove };
})(gameBoard, boardEvaluation);
