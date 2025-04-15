const Feedback = ({ countFeedbacks, total, positivePercent }) => {
  return (
    <ul>
      {Object.keys(countFeedbacks).map((item) => {
        return (
          <li key={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}:
            {countFeedbacks[item]}
          </li>
        );
      })}
      <li>Total: {total}</li>
      <li>Positive: {positivePercent}%</li>
    </ul>
  );
};

export default Feedback;
