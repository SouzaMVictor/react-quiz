import PropTypes from "prop-types";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>welcome to react quis</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        LET&apos;S START
      </button>
    </div>
  );
}

export default StartScreen;

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};
