import "./Board.css";

const Board = (props) => {
  const board = props.board;

  return (
    <div className="board">
      {board.getBoard().map((line, row) => {
        const column = line.map((cell, col) => {
          console.log(`(${row}, ${col})`);
          return (
            <div key={`(${row}, ${col})`} row={row} col={col} className="cell">
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
