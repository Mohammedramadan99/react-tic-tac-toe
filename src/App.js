import React, { useState } from "react";
import "./App.css";
import { gameBoard } from "./gameboard";
import Board from "./components/Board";
import Scores from "./components/Scores";

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
        <Scores nameA={"playerA"} nameB={"playerB"} scoreA={0} scoreB={0} />
      </header>
      <Board board={state.board} />
      <div className="buttons">
        <button className="button">START</button>
        <button className="button">RESET</button>
        <button className="button">AI</button>
        <button className="button">Change Names</button>
      </div>
    </div>
  );
}

export default App;
