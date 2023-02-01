import { matrix } from "./matrix";

export const gameBoard = (function () {
  let _n = 3; // default is 3
  let _board = matrix(_n, _n);
  let extended = false; // so the default mode is the normalMode 

  function setField(col, row, char) {
    _board.setElement(col, row, char);
  }

  function getField(col, row) {
    return _board.getElement(col, row);
  }

  function erase() {
    _board.fillUp("");
  }

  // a new method
  function toggleMode() {
    _n = !extended ? 10 : 3
    extended = !extended
    _board = matrix(_n, _n)
    
    console.log({_n,extended})
    
    return extended
  }

  function getN() {
    return _n;
  }

  function getBoard() {
    return _board.getMatrix();
  }

  erase();
  return { getN, setField, getField, erase, getBoard, toggleMode };
})();
