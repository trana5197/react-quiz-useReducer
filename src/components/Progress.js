import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { numQuestions, index, answer, points, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Questions:{" "}
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
