import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import MainQuiz from "./MainQuiz";
import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";

export function ReactQuiz() {
  const initialState = { questions: [], status: "loading" };

  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "dataFailed":
        return { ...state, status: "error" };
      default:
        throw new Error("Action Unknown");
    }
  }
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainQuiz>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        {status === "active" && <Question />}
      </MainQuiz>
    </div>
  );
}
