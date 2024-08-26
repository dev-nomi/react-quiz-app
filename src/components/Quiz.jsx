import { useState, useCallback } from "react";
import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question.js";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnwers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnwers((prevUserAnwers) => {
      return [...prevUserAnwers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Quiz completed" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
