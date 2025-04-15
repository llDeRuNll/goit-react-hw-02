import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Descriptions from "./components/Descriptions/Descriptions";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };
  const [countFeedbacks, setCountFeedbacks] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("feedbacks-data")) || initialFeedbacks
      );
    } catch (error) {
      console.log(error);
      return initialFeedbacks;
    }
  });

  useEffect(() => {
    localStorage.setItem("feedbacks-data", JSON.stringify(countFeedbacks));
  }, [countFeedbacks]);

  const updateFeedback = (feedbackType) => {
    setCountFeedbacks((prevCount) => ({
      ...prevCount,
      [feedbackType]: prevCount[feedbackType] + 1,
    }));
  };

  const resetCounter = () => {
    setCountFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback =
    countFeedbacks.good + countFeedbacks.neutral + countFeedbacks.bad;

  const positiveFeedback = Math.round(
    (countFeedbacks.good / totalFeedback) * 100
  );

  return (
    <>
      <Descriptions />
      <Options
        updateInfo={updateFeedback}
        total={totalFeedback}
        reset={resetCounter}
        feedbacksData={Object.keys(countFeedbacks)}
      />
      {!totalFeedback && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          countFeedbacks={countFeedbacks}
          total={totalFeedback}
          positivePercent={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
