import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer } = useQuiz();

  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
