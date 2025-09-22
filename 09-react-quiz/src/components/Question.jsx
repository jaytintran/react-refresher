import React from "react";

const Question = ({ index, question, numberOfQuestions, dispatch, answer }) => {
	// console.log(question);
	const { question: questionText, options, correctOption, points } = question;
	return (
		<section>
			<h3>{questionText}</h3>
			<Options
				options={options}
				dispatch={dispatch}
				answer={answer}
				correctOption={correctOption}
			/>
			<span>
				{index + 1}/{numberOfQuestions} Questions
			</span>
		</section>
	);
};

const Options = ({ options, dispatch, answer, correctOption }) => {
	const hasAnswered = answer !== null;
	return (
		<div className="options">
			{options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? "answer" : ""} ${
						hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
					}`}
					key={option}
					disabled={hasAnswered}
					onClick={() => dispatch({ type: "newAnswer", payload: index })}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default Question;
