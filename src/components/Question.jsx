import Options from "./Options";
import PropTypes from "prop-types";
function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
