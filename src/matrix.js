export function matrix(col, row) {
  const _create = (amount) => new Array(amount).fill(0);
  const _matrix = (rows, cols) => _create(cols).map((o, i) => _create(rows));
  const _storage = _matrix(row, col);

  function _isElementDefined(cols, rows) {
    return cols >= 0 && cols < col && rows >= 0 && rows < row;
  }

  function getElement(cols, rows) {
    if (!_isElementDefined(cols, rows)) return;
    return _storage[rows][cols];
  }

  function setElement(cols, rows, element) {
    if (!_isElementDefined(cols, rows)) return;
    _storage[rows][cols] = element;
  }

  function getMatrix() {
    return _storage;
  }

  function fillUp(element) {
    for (let cols = 0; cols < col; cols++) {
      for (let rows = 0; rows < row; rows++) {
        _storage[rows][cols] = element;
      }
    }
  }

  return { col, row, getElement, setElement, getMatrix, fillUp };
}
