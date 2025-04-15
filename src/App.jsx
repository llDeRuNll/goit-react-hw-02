import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Descriptions from "./components/Descriptions/Descriptions";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setCount((prevCount) => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1,
    }));
  };
  const totalFeedback = count.good + count.neutral + count.bad;
  return (
    <>
      <Descriptions />
      <Options updateInfo={updateFeedback} />
      <Feedback count={count} total={totalFeedback} />
    </>
  );
}

export default App;
