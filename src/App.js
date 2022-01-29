import React, { useState } from "react";
import "./App.css";
import { gameBoard } from "./gameboard";

function App() {
  const N = gameBoard.getN();

  const [state, setState] = useState({
    board: gameBoard,
  });

  console.log(state.board.getBoard());

  return (
    <div className="App">
      <div className="board">
        {state.board.getBoard().map((line, row) => {
          const column = line.map((cell, col) => {
            console.log(`(${row}, ${col})`);
            return (
              <div
                key={`(${row}, ${col})`}
                row={row}
                col={col}
                className="cell"
              >
                ({row}, {col})
              </div>
            );
          });
          return column;
        })}
      </div>
    </div>
  );
}

export default App;
