import React, { useEffect } from "react";

const Timer = ({ secondsRemains, dispatch }) => {
	useEffect(() => {
		// Start the timer
		const timer = setInterval(function tick() {
			dispatch({ type: "tick" });
		}, 1000);

		// Stop the timer when the component unmounts
		return () => clearInterval(timer);
	}, [dispatch]);

	let minutes = Math.floor(secondsRemains / 60);
	let seconds = secondsRemains % 60;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	return (
		<div className="timer">
			{minutes}:{seconds}
		</div>
	);
};

export default Timer;
