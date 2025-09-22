import { useParams, useNavigate, useSearchParams } from "react-router";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import SpinnerFullPage from "./SpinnerFullPage";

const BASE_URL = "http://localhost:8000";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
		weekday: "long",
	}).format(new Date(date));

function City() {
	const { cityId } = useParams();
	const navigate = useNavigate();
	const [currentCity, setCurrentCity] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const latitude = searchParams.get("lat");
	const longitude = searchParams.get("lng");

	console.log(cityId);

	useEffect(() => {
		// Fetch data from API based on the cityId
		const fetchCity = async () => {
			try {
				setError(null); // Reset error state
				const response = await fetch(`${BASE_URL}/cities/${cityId}`);

				if (!response.ok) {
					throw new Error(`Failed to fetch city data: ${response.status}`);
				}

				const data = await response.json();
				setCurrentCity(data);
			} catch (err) {
				console.error("Error fetching city:", err);
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCity();
	}, [cityId]);

	// TEMP DATA
	// const currentCity = {
	// 	cityName: "Lisbon",
	// 	emoji: "🇵🇹",
	// 	date: "2027-10-31T15:59:59.138Z",
	// 	notes: "My favorite city so far!",
	// };

	// Only destructure if currentCity exists
	const { cityName, emoji, date, notes } = currentCity || {};

	return (
		<div>
			{isLoading && <SpinnerFullPage />}

			{error && (
				<div className={styles.city}>
					<div className={styles.row}>
						<h6>Error</h6>
						<p>Failed to load city data: {error}</p>
					</div>
					<div>
						<button className={styles.backBtn} onClick={() => navigate(-1)}>
							&larr; Back
						</button>
					</div>
				</div>
			)}

			{currentCity && !error && (
				<div className={styles.city}>
					<div className={styles.row}>
						<h6>City name</h6>
						<h3>
							<span>{emoji}</span> {cityName}
						</h3>
					</div>

					<div className={styles.row}>
						<h6>You went to {cityName} on</h6>
						<p>{formatDate(date || null)}</p>
					</div>

					{notes && (
						<div className={styles.row}>
							<h6>Your notes</h6>
							<p>{notes}</p>
						</div>
					)}

					{latitude && longitude && (
						<div className={styles.row}>
							<h6>Position</h6>
							<p>
								Latitude: {latitude} <br />
								Longitude: {longitude}
							</p>
						</div>
					)}

					<div className={styles.row}>
						<h6>Learn more</h6>
						<a
							href={`https://en.wikipedia.org/wiki/${cityName}`}
							target="_blank"
							rel="noreferrer"
						>
							Check out {cityName} on Wikipedia &rarr;
						</a>
					</div>

					<div>
						<button className={styles.backBtn} onClick={() => navigate(-1)}>
							&larr; Back
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default City;
