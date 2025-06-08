import "./App.css";
import { useEffect, useReducer } from "react";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import StartScreen from "@/components/StartScreen";
import Question from "@/components/Question";
import TotalPoints from "./components/TotalPoints";

const initialState = {
	questions: [],
	// loading, error, ready, active, finished
	status: "loading",
	currentQuestion: 0,
	points: 0,
	answer: null,
	secondsRemaining: 300,
};

function reducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case "dataReceived":
			return { ...state, questions: payload, status: "ready" };
		case "dataFailed":
			return { ...state, status: "error" };
		case "startQuiz":
			return { ...state, status: "active" };
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
				answer: payload,
			};
		default:
			throw new Error("Invalid action type");
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { questions, status, currentQuestion, answer, points } = state;
	const numberOfQuestions = questions.length;

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
					{status === "loading" && <Loader />}
					{status === "error" && <Error />}

					{/* Display welcome screen */}
					{status === "ready" && (
						<StartScreen
							dispatch={dispatch}
							numberOfQuestions={numberOfQuestions}
						/>
					)}

					<TotalPoints points={points} />

					{status === "active" && (
						<Question
							index={currentQuestion}
							question={questions[currentQuestion]}
							numberOfQuestions={numberOfQuestions}
							dispatch={dispatch}
							answer={answer}
						/>
					)}
				</div>
			</Main>
		</main>
	);
}
