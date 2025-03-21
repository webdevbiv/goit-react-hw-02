const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        {Object.keys(feedback).map((key, index) => (
          <li key={index}>{`${key}: ${feedback[key]}`}</li>
        ))}
        <li>{`Total: ${total}`}</li>
        <li>{`Positive feedback: ${positivePercentage}%`}</li>
      </ul>
    </div>
  );
};

export default Feedback;
