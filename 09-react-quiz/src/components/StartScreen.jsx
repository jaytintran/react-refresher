import React from "react";

const StartScreen = ({ dispatch, numberOfQuestions }) => {
	return (
		<section className="start">
			<h2>Welcome to the React Quiz</h2>
			<h3>{numberOfQuestions} questions to check your mastery</h3>
			<button
				onClick={() => dispatch({ type: "startQuiz" })}
				className="btn btn-ui"
			>
				Let's Start
			</button>
		</section>
	);
};

export default StartScreen;
