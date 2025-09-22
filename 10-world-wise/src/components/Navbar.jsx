import { navLinks } from "../constants";
import { NavLink } from "react-router";

import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to="/">
				<img src="/globe-2.png" alt="WorldWise logo" className={styles.logo} />
			</NavLink>

			<ul>
				{navLinks.map((link) => (
					<li key={link.name} className={link.name === "Login" && styles.cta}>
						<NavLink to={link.path}>{link.name}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
