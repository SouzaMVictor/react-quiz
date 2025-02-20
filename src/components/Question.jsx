import Options from "./Options";
import PropTypes from "prop-types";
function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
