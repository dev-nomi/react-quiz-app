import QUESTIONS from "../../question.js";

export default function UserAnswer({ answer, index }) {
  let cssClass = "user-answer";

  if (answer == null) {
    cssClass += " skipped";
  } else if (answer == QUESTIONS[index].answers[0]) {
    cssClass += " correct";
  } else {
    cssClass += " wrong";
  }

  return (
    <li key={answer}>
      <h3>{index + 1}</h3>
      <p className="question">{QUESTIONS[index].text}</p>
      <p className={cssClass}>{answer ?? "Skipped"}</p>
    </li>
  );
}
