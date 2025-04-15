import s from "./Description.module.css";

const Descriptions = () => {
  return (
    <div className={s.container}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Sip Happens Café</h1>
        <div className={s.cup}>
          ☕<span className={s.steam}></span>
        </div>
      </div>
      <p className={s.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Descriptions;
