import Notification from "./components/Notification/Notification";
import React, { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options"

  function App = () => {
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    });

    useEffect(() => {
      const savedFeedback = JSON.parce(localStorage.getItem('feedback'));
      if (savedFeedback) {
        setFeedback(savedFeedback)
      }
    }, []
    );

    useEffect(() => {
      localStorage.setItem('feedback', JSON.stringify(feedback)), [feedback]
    })

    
const updateFeedback = (feedbackType) => {
  setFeedback((prevFeedback) => ({
    ...prevFeedback,
    [feedbackType]: prevFeedback[feedbackType] + 1,
  }));
};

}

export default App;
