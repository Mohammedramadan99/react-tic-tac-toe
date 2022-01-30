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
      <header>
        <h1>TIC-TAC-TOE</h1>
      </header>
      <Board board={state.board} />
    </div>
  );
}

export default App;
