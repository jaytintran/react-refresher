import Logo from "./Logo";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Logo />
		</div>
	);
};

export default Sidebar;
