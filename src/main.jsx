import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import DateCounter from "./DateCounter.jsx";
import { ReactQuiz } from "./ReactQuiz.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactQuiz />
  </StrictMode>
);
