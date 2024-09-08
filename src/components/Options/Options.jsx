const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className="btn-wrapper">
      <button className="btn-good" onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className="btn-neutral" onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className="btn-bad" onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
