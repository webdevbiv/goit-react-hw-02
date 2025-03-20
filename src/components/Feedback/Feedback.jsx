const Feedback = ({ feedback }) => {
  if (Object.values(feedback).every((value) => value === 0)) {
    return (
      <div>
        <p>No feedback yet</p>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {Object.keys(feedback).map((key, index) => (
          <li key={index}>{`${key}: ${feedback[key]}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
