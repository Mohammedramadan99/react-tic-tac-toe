import "./Scores.css";

const Scores = (props) => {
  const { nameA, nameB, scoreA, scoreB, nextPlayer } = props;

  const isANext = nameA === nextPlayer.name;

  const activeStyle = {
    backgroundColor: "rgb(90, 90, 23)",
    color: "#011414",
    borderRadius: "5px",
  };

  return (
    <div className="score-bar">
      <div className="names">
        <h3 className="name" style={isANext ? activeStyle : {}}>
          {nameA}
        </h3>
        <h3 className="name" style={isANext ? {} : activeStyle}>
          {nameB}
        </h3>
      </div>
      <div className="scores">
        <div className="score">{scoreA}</div>
        <div className="score">{scoreB}</div>
      </div>
    </div>
  );
};

export default Scores;
