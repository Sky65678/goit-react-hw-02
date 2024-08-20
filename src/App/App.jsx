import Feedback from "../components/Feedback/Feedback";
import Options from "../components/Options/Options";
import Description from "../components/Description/Description";
import Notification from "../components/Notification/Notification";
import { useEffect, useState } from "react";

const getInitialIndex = () => {
  const savedIndex = window.localStorage.getItem("article-idx");
  return savedIndex !== null
    ? JSON.parse(savedIndex)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [values, setValues] = useState(getInitialIndex);

  useEffect(() => {
    window.localStorage.setItem("article-idx", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setValues({
        ...values,
        [feedbackType]: values[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
