import "./Board.css";

const Board = (props) => {
  const { board, handleClick } = props;

  return (
    <div className="board">
      {board.getBoard().map((line, row) => {
        const column = line.map((cell, col) => {
          return (
            <div
              key={`(${row}, ${col})`}
              row={row}
              col={col}
              className="cell"
              onClick={() => handleClick(col, row)}
            >
              {cell}
            </div>
          );
        });
        return column;
      })}
    </div>
  );
};

export default Board;
