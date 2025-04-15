import s from "./Options.module.css";
const Options = ({ updateInfo, reset, total, feedbacksData }) => {
  return (
    <ul className={s.options}>
      {feedbacksData.map((item) => {
        return (
          <li className={s.optionItem} key={item}>
            <button onClick={() => updateInfo(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        );
      })}

      <li className={s.optionItem}>
        {total > 0 && <button onClick={() => reset()}>Reset</button>}
      </li>
    </ul>
  );
};

export default Options;
