import React from "react";

const NextButton = ({ dispatch, answer, index, numberOfQuestions }) => {
	const hasAnswered = answer !== null;

	if (!hasAnswered) return null;

	if (index < numberOfQuestions - 1) {
		return (
			<button
				onClick={() => dispatch({ type: "nextQuestion" })}
				disabled={!hasAnswered}
				className="btn btn-ui"
			>
				Next Question
			</button>
		);
	}

	return (
		<button onClick={() => dispatch({ type: "finish" })} className="btn btn-ui">
			Finish
		</button>
	);
};

export default NextButton;
