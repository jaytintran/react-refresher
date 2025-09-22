import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router";

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />

			<Outlet />
			{/* <p>List of cities</p> */}

			<footer className={styles.footer}>
				<p className={styles.copyright}>
					Copyright &copy; {new Date().getFullYear()} by WorldWise. All rights
					reserved
				</p>
			</footer>
		</div>
	);
};

export default Sidebar;
