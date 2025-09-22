// import styles from "./City.module.css";
import { Link } from "react-router";
import styles from "./CityItem.module.css";
import ReactCountryFlag from "react-country-flag";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(date));

function CityItem({ city }) {
	const { cityName, date, position, id: cityId, country, countryCode } = city;

	console.log(position);
	return (
		<>
			<div>
				<Link
					to={`/app/cities/${cityId}?lat=${position.lat}&lng=${position.lng}`}
					className={styles.cityItem}
				>
					<ReactCountryFlag
						countryCode={countryCode}
						svg
						style={{
							width: "1em",
							height: "1em",
						}}
						title={country}
					/>
					<h3 className={styles.name}>{cityName}</h3>
					<time className={styles.date}>{formatDate(date)}</time>
					<button className={styles.deleteBtn}>&times;</button>
				</Link>
			</div>

			{/* {notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{notes}</p>
				</div>
			)} */}

			{/* <div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target="_blank"
					rel="noreferrer"
				>
					Check out {cityName} on Wikipedia &rarr;
				</a>
			</div> */}

			<div>{/* <ButtonBack /> */}</div>
		</>
	);
}

export default CityItem;
