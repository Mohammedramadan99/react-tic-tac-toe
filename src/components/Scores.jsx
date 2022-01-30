const Scores = (props) => {
  const { nameA, nameB, scoreA, scoreB } = props;

  return (
    <div className="score-bar">
      <div className="names">
        <h2 className="name">{nameA}</h2>
        <h2 className="name">{nameB}</h2>
      </div>
      <div className="scores">
        <h2 className="score">{scoreA}</h2>
        <h2 className="score">{scoreB}</h2>
      </div>
    </div>
  );
};

export default Scores;
