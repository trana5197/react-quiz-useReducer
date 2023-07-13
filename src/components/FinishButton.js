function FinishButton({ dispatch, answer }) {
  if (answer === null) return null;

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Finish
    </button>
  );
}

export default FinishButton;
