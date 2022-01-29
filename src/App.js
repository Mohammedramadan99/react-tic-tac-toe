import React, { useState } from "react";
import "./App.css";
import { gameBoard } from "./gameboard";

function App() {
  const N = gameBoard.getN();

  const [state, setState] = useState({
    board: gameBoard,
  });

  return (
    <div className="App">
      <div className="board">
        {state.board.getBoard().map((column, col) => {
          column.map((cell, row) => {
            return (
              <div
                key={`(${row}, ${col})`}
                row={row}
                col={col}
                className="cell"
              >
                `(${row}, ${col})`
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
