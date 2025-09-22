import "./App.css";
import { useEffect, useReducer } from "react";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import StartScreen from "@/components/StartScreen";
import Question from "@/components/Question";
import TotalPoints from "@/components/TotalPoints";
import NextButton from "@/components/NextButton";
import FinishScreen from "@/components/FinishScreen";
import Timer from "@/components/Timer";

const SECS_PER_QUESTION = 30;

const initialState = {
	questions: [],
	// loading, error, ready, active, finished
	status: "loading",
	currentQuestion: 0,
	points: 0,
	answer: null,
	secondsRemains: null,
	highScore: 0,
};

function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case "dataReceived":
			return { ...state, questions: payload, status: "ready" };
		case "dataFailed":
			return { ...state, status: "error" };
		case "startQuiz":
			return {
				...state,
				status: "active",
				secondsRemains: state.questions.length * SECS_PER_QUESTION,
			};
		case "newAnswer": {
			const question = state.questions[state.currentQuestion];
			return {
				...state,
				answer: payload,
				points:
					payload === question.correctOption
						? state.points + question.points
						: state.points,
			};
		}
		case "nextQuestion":
			return {
				...state,
				currentQuestion: state.currentQuestion + 1,
				answer: null,
			};
		case "finish":
			return {
				...state,
				status: "finished",
				highScore:
					state.points > state.highScore ? state.points : state.highScore,
			};
		case "restart":
			return {
				...initialState,
				questions: state.questions,
				status: "ready",
			};
		case "tick":
			// if (state.secondsRemains === 0) {
			// 	return {
			// 		...state,
			// 		status: "finished",
			// 		highScore:
			// 			state.points > state.highScore ? state.points : state.highScore,
			// 	};
			// }
			return {
				...state,
				secondsRemains: state.secondsRemains - 1,
				status: state.secondsRemains === 0 ? "finished" : state.status,
			};
		default:
			throw new Error("Invalid action type");
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const {
		questions,
		status,
		currentQuestion,
		answer,
		points,
		highScore,
		secondsRemains,
	} = state;

	const numberOfQuestions = questions.length;
	const totalQuestionsPoint = questions
		.map((question) => question.points)
		.reduce((a, b) => a + b, 0);

	useEffect(() => {
		async function fetchQuestions() {
			try {
				const questions = await fetch("http://localhost:3000/questions");
				const data = await questions.json();

				setTimeout(() => {
					dispatch({ type: "dataReceived", payload: data });
				}, 1000);
			} catch (e) {
				dispatch({ type: "dataFailed", payload: e.message });
			}
		}

		fetchQuestions();
	}, []);

	return (
		<main className="app">
			<Header />
			<Main>
				<div>
					{/* Display loading screen */}
					{status === "loading" && <Loader />}
					{status === "error" && <Error />}

					{/* Display welcome screen */}
					{status === "ready" && (
						<StartScreen
							dispatch={dispatch}
							numberOfQuestions={numberOfQuestions}
						/>
					)}

					{/* Display questions */}
					{status === "active" && (
						<>
							<TotalPoints
								points={points}
								numberOfQuestions={numberOfQuestions}
								index={currentQuestion}
								totalQuestionsPoint={totalQuestionsPoint}
								answer={answer}
							/>
							<Question
								index={currentQuestion}
								question={questions[currentQuestion]}
								numberOfQuestions={numberOfQuestions}
								dispatch={dispatch}
								answer={answer}
							/>
							<footer>
								<Timer secondsRemains={secondsRemains} dispatch={dispatch} />

								<NextButton
									dispatch={dispatch}
									answer={answer}
									index={currentQuestion}
									numberOfQuestions={numberOfQuestions}
								/>
							</footer>
						</>
					)}

					{/* When finish the quiz */}
					{status === "finished" && (
						<FinishScreen
							points={points}
							totalQuestionsPoint={totalQuestionsPoint}
							highScore={highScore}
							dispatch={dispatch}
						/>
					)}
				</div>
			</Main>
		</main>
	);
}
