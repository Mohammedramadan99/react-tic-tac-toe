import "./Board.css";

const Board = (props) => {
  const { board, handleClick,extendedMode } = props;

  return (
    <div className={extendedMode ? "board extended" : "board normal"}>
      {board.getBoard().map((line, row) => {
        const column = line.map((cell, col) => {
          return (
            <div
              key={`(${row}, ${col})`}
              row={row}
              col={col}
              className={extendedMode ? "cell extended" : "cell normal"}
              onClick={(e) => {
                handleClick(col, row);
              }}
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