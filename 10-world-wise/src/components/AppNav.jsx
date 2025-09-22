import { NavLink } from "react-router";
import styles from "./AppNav.module.css";

const AppNav = () => {
	return (
		<div className={styles.nav}>
			<ul>
				<li>
					<NavLink to="/app/cities" active>
						Your cities
					</NavLink>
				</li>
				<li>
					<NavLink to="/app/countries">Your countries</NavLink>
				</li>
				{/* <li>
					<Link to="/app/form">Add city</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default AppNav;
