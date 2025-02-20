import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
// import DateCounter from "./DateCounter.jsx";
import { ReactQuiz } from "./components/ReactQuiz.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactQuiz />
  </StrictMode>
);
