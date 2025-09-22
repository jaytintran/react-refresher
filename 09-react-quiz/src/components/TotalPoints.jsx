import React from "react";

const TotalPoints = ({
	points,
	numberOfQuestions,
	index,
	totalQuestionsPoint,
	answer,
}) => {
	return (
		<header className="progress">
			<progress
				max={numberOfQuestions}
				value={index + Number(answer !== null)}
			/>
			<span>
				Question: <strong>{index + 1}</strong>/{numberOfQuestions}
			</span>
			<span>
				Total Points: {points} / {totalQuestionsPoint}
			</span>
		</header>
	);
};

export default TotalPoints;
