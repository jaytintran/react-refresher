import ReactCountryFlag from "react-country-flag";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
	const { countryName, countryCode } = country;
	return (
		<li
			className={styles.countryItem}
			style={{
				alignItems: "center",
				display: "flex",
				flexDirection: "row",
				gap: "0.5rem",
			}}
		>
			{/* <span>{country.emoji}</span> */}
			<ReactCountryFlag
				countryCode={countryCode}
				svg
				style={{
					width: ".75em",
					height: ".75em",
				}}
				title={countryName}
			/>
			<span>{countryName}</span>
		</li>
	);
}

export default CountryItem;
