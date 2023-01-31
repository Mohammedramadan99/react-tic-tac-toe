import { matrix } from "./matrix";

export const gameBoard = (function () {
  let _n = 10;
  let _board = matrix(_n, _n);

  function setField(col, row, char) {
    _board.setElement(col, row, char);
  }

  function getField(col, row) {
    return _board.getElement(col, row);
  }

  function erase() {
    _board.fillUp("");
  }

  function turnOnExtendedMode(status) {
    status ? _n = 10 : _n = 3
    console.log("gameBoard _n", _n)
  }
  function getN() {
    return _n;
  }

  function getBoard() {
    return _board.getMatrix();
  }

  erase();
  return { getN, setField, getField, erase, getBoard, turnOnExtendedMode };
})();
