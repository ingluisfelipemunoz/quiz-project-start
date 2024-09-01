import { useRef } from "react";
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((x) => {
        const isSelected = selectedAnswer == x;
        let cssClasses = "";
        if (answerState == "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState == "correct" || answerState == "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }

        return (
          <li key={x} className="answer">
            <button onClick={() => onSelect(x)} className={cssClasses}>
              {x}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
