import { player } from "./player";

export const players = (function () {
  const playerA = player("Player A", "x");
  const human = player("Player B", "o");
  const _computer = player("Computer", "o");
  let _playerB = human;
  let _playerNext = playerA;

  function getPlayerNext() {
    return _playerNext;
  }

  function getOpponent() {
    return _playerB;
  }

  function toggleOpponent() {
    if (_playerB == human) {
      _playerB = _computer;
    } else {
      _playerB = human;
    }
  }

  function toggleNext() {
    if (_playerNext == playerA) {
      _playerNext = _playerB;
    } else {
      _playerNext = playerA;
    }
  }

  return {
    playerA,
    human,
    getPlayerNext,
    getOpponent,
    toggleOpponent,
    toggleNext,
  };
})();
