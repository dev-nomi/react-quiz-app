import quizCompletedImg from "../../assets/quiz-complete.png";
import QUESTIONS from "../../question.js";
import SummaryStat from "./SummaryStat.jsx";
import UserAnswer from "./UserAnswer.jsx";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompletedImg} alt="Quiz completed" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <SummaryStat label="skipped">{skippedAnswersShare}</SummaryStat>
        <SummaryStat label="correct">{correctAnswersShare}</SummaryStat>
        <SummaryStat label="wrong">{wrongAnswersShare}</SummaryStat>
      </div>
      <ol>
        {userAnswers.map((answer, index) => (
          <UserAnswer key={answer} answer={answer} index={index} />
        ))}
      </ol>
    </div>
  );
}
