import { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import MainQuiz from "./MainQuiz";
export function ReactQuiz() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainQuiz>
        <p>1/15</p>
        <p>Questions?</p>
      </MainQuiz>
    </div>
  );
}
