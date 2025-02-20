import PropTypes from "prop-types";

function MainQuiz({ children }) {
  return <main className="main">{children}</main>;
}

export default MainQuiz;
MainQuiz.propTypes = {
  children: PropTypes.node.isRequired,
};
