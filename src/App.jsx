import { useState } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

import "./App.css";

const OPTIONS = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(OPTIONS);

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
      <Options options={feedback} onClick={updateFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
}

export default App;
