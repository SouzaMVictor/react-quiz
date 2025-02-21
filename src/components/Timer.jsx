import { useEffect } from "react";
import PropTypes from "prop-types";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  secondsRemaining: PropTypes.number.isRequired,
};

export default Timer;
