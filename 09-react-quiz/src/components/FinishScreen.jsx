import React from "react";

const FinishScreen = ({ points, totalQuestionsPoint, highScore, dispatch }) => {
	const percentage = (points / totalQuestionsPoint) * 100;

	let emoji;
	if (percentage === 100) {
		emoji = "🥇";
	} else if (percentage >= 80) {
		emoji = "🥈";
	} else if (percentage >= 50) {
		emoji = "🥉";
	} else {
		emoji = "💩";
	}

	return (
		<div>
			<p className="result">
				{emoji} You scored {points} out of {totalQuestionsPoint} (
				{Math.ceil(percentage)}%)
			</p>

			<p className="highscore">Highscore: {highScore} points</p>

			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "restart" })}
			>
				Restart Quiz
			</button>
		</div>
	);
};

export default FinishScreen;
