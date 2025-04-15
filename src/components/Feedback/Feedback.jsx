import s from "./Feedback.module.css";
const Feedback = ({ countFeedbacks, total, positivePercent }) => {
  return (
    <ul className={s.feedbacks}>
      {Object.keys(countFeedbacks).map((item) => {
        return (
          <li className={s.feedbacksItem} key={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}:{" "}
            {countFeedbacks[item]}
          </li>
        );
      })}
      <li className={s.feedbacksItem}>Total: {total}</li>
      <li className={s.feedbacksItem}>Positive: {positivePercent}%</li>
    </ul>
  );
};

export default Feedback;
