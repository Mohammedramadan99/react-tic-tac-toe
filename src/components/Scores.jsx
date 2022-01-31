import "./Scores.css";

const Scores = (props) => {
  const { nameA, nameB, scoreA, scoreB } = props;

  return (
    <div className="score-bar">
      <div className="names">
        <h3 className="name">{nameA}</h3>
        <h3 className="name">{nameB}</h3>
      </div>
      <div className="scores">
        <div className="score">{scoreA}</div>
        <div className="score">{scoreB}</div>
      </div>
    </div>
  );
};

export default Scores;
