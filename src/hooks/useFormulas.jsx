const useFormulas = ({ feedback }) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
  console.log(totalFeedback, positivePercentage);

  return { totalFeedback, positivePercentage };
};

export default useFormulas;
