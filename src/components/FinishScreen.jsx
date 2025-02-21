import PropTypes from "prop-types";

function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "😎";
  if (percentage >= 80 && percentage < 100) emoji = "😊";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "😫";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of
        <strong> {maxPossiblePoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}

FinishScreen.propTypes = {
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number.isRequired,
  highscore: PropTypes.number.isRequired,
};

export default FinishScreen;
