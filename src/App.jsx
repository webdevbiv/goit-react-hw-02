import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import useLocalStorage from "./hooks/useLocalStorage";
import useFormulas from "./hooks/useFormulas";

import "./App.css";

const OPTIONS = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useLocalStorage("feedback", OPTIONS);
  const { totalFeedback, positivePercentage } = useFormulas({ feedback });

  const updateFeedback = (option) => {
    if (option === "reset") {
      setFeedback(OPTIONS);
      return;
    }

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options
        options={feedback}
        onClick={updateFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}

export default App;
