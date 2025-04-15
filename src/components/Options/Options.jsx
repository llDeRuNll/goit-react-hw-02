const Options = ({ updateInfo, reset, total, feedbacksData }) => {
  return (
    <ul>
      {feedbacksData.map((item) => {
        return (
          <li key={item}>
            <button onClick={() => updateInfo(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        );
      })}

      <li>{total > 0 && <button onClick={() => reset()}>Reset</button>}</li>
    </ul>
  );
};

export default Options;
