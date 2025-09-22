import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;

	if (!cities.length)
		return (
			<Message message="Add your first city by clicking on a city on the map" />
		);

	// Reduce the cities array to an array of unique countries
	let countries = cities.reduce((arr, currentValueCity) => {
		// Check if the accumulated array is already containing the current value's country
		// If not,
		if (!arr.map((el) => el.countryName).includes(currentValueCity.country)) {
			return [
				...arr,
				{
					countryName: currentValueCity.country,
					countryCode: currentValueCity.countryCode,
				},
			];
		} else {
			return arr;
		}
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem country={country} key={country.countryCode} />
			))}
		</ul>
	);
}

export default CountryList;
