import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";

const Map = () => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();
	const latitude = searchParams.get("lat");
	const longitude = searchParams.get("lng");

	return (
		<div className={styles.mapContainer} onClick={() => navigate("form")}>
			<h2>
				Position: {latitude} {longitude}
			</h2>

			<button onClick={() => setSearchParams({ latitude: 32, longitude: 32 })}>
				Change Position
			</button>
		</div>
	);
};

export default Map;
