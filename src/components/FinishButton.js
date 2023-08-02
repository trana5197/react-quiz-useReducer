import { useQuiz } from "../context/QuizContext";

function FinishButton() {
  const { dispatch, answer } = useQuiz();

  if (answer === null) return null;

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}

export default FinishButton;
