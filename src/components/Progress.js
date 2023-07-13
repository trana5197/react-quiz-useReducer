function Progress({ numQuestions, index, answer, points, maxPossiblePoints }) {
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
