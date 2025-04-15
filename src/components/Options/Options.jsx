const Options = ({ updateInfo }) => {
  return (
    <>
      <button onClick={() => updateInfo("good")}>Good</button>
      <button onClick={() => updateInfo("neutral")}>Neutral</button>
      <button onClick={() => updateInfo("bad")}>Bad</button>
    </>
  );
};

export default Options;
