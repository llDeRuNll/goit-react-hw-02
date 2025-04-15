const Feedback = ({ count, total }) => {
  return (
    <>
      <p>Good:{count.good}</p>
      <p>Neutral:{count.neutral}</p>
      <p>Bad:{count.bad}</p>
      <p>Total:{total}</p>
    </>
  );
};

export default Feedback;
