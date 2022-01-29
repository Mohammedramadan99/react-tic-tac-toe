import React, { useState } from "react";
import "./App.css";
import { gameBoard } from "./gameboard";
import Board from "./components/Board";

function App() {
  const N = gameBoard.getN();

  const [state, setState] = useState({
    board: gameBoard,
  });

  console.log(state.board.getBoard());

  return (
    <div className="App">
      <Board board={state.board} />
    </div>
  );
}

export default App;
