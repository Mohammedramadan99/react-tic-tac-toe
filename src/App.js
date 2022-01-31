import React, { useState } from "react";
import "./App.css";
import { gameBoard } from "./gameboard";
import { boardEvaluation } from "./boardEvaluation";
import { players } from "./players";
import { computer } from "./computer";
import Board from "./components/Board";
import Scores from "./components/Scores";

function App() {
  const playerA = players.playerA;
  const human = players.human;
  const win = winner();

  const [state, setState] = useState({
    board: gameBoard,
    nextPlayer: playerA,
    scoreA: 0,
    scoreB: 0,
    nameA: playerA.name,
    nameB: getPlayerB().name,
    isComputerPlaying: false,
    isGameStopped: false,
  });

  function setField(col, row, char) {
    return gameBoard.setField(col, row, char);
  }

  function erase() {
    gameBoard.erase();
  }

  function render() {
    setState(state);
  }

  function showNextPlayer() {
    setState({
      ...state,
      nextPlayer: getPlayerNext(),
    });
  }

  function showScores() {
    setState({
      ...state,
      scoreA: players.playerA.getScore(),
      scoreB: getPlayerB().getScore(),
    });
  }

  function showMessage() {
    alert(message(win));
  }

  function showNames() {
    setState({
      ...state,
      nameA: playerA.name,
      nameB: getPlayerB().name,
    });
  }

  function getPlayerB() {
    return players.getOpponent();
  }

  function getPlayerNext() {
    return players.getPlayerNext();
  }

  function toggleOpponent() {
    setState({
      ...state,
      isComputerPlaying: !state.isComputerPlaying,
    });
    players.toggleOpponent();
  }

  function toggleNext() {
    players.toggleNext();
  }

  function winner() {
    return boardEvaluation.winner(gameBoard.getBoard());
  }

  function incScore() {
    if (win != "tie") {
      getPlayerNext().incScore();
    }
  }

  function computerMove() {
    if (!state.isComputerPlaying || getPlayerNext() == playerA) return;
    const bestMove = computer.bestMove();
    move(bestMove.col, bestMove.row);
  }

  function move(col, row) {
    if (state.isGameStopped) return;
    const char = getPlayerNext().char;
    setField(col, row, char);
    render();
    if (isGameOver()) {
      stop();
      showMessage();
      incScore();
      showScores();
    } else {
      toggleNext();
      showNextPlayer();
      computerMove();
    }
  }

  function isGameOver() {
    const win = winner();
    if (win != "") {
      return true;
    } else {
      return false;
    }
  }

  function message(winner) {
    let message = "";
    if (winner == "tie") {
      message = "It is a tie!";
    } else {
      message = getPlayerNext().name + " is the winner!";
    }
    return message;
  }

  function stop() {
    setState({
      ...state,
      isGameStopped: true,
    });
  }

  function start() {
    if (state.isComputerPlaying && getPlayerNext() != playerA) {
      toggleNext();
    }
    erase();
    setState({
      ...state,
      board: gameBoard,
      isGameStopped: false,
      scoreA: players.playerA.getScore(),
      scoreB: getPlayerB().getScore(),
      nameA: players.playerA.name,
      nameB: getPlayerB().name,
    });
  }

  function updateNames(nameA, nameB) {
    if (nameA != nameB && nameA != "" && nameB != "") {
      playerA.name = nameA;
      human.name = nameB;
    }
    showNames();
  }

  function reset() {
    playerA.delScore();
    getPlayerB().delScore();
    start();
  }

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
