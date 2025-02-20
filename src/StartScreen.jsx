function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>welcome to react quis</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button className="btn btn-ui">LET&apos;S START</button>
    </div>
  );
}

export default StartScreen;
