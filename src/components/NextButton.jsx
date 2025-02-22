import PropTypes from "prop-types";

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.any,
  index: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
};

export default NextButton;
