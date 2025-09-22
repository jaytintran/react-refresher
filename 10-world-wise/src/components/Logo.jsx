import styles from "./Logo.module.css";

function Logo() {
	return (
		<div className={styles.logoContainer}>
			<img src="/globe-2.png" alt="WorldWise logo" className={styles.logo} />
			<h1>WorldWise</h1>
		</div>
	);
}

export default Logo;
