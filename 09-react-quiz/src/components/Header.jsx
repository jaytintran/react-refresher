import logo from "@/assets/react.svg";

function Header() {
	return (
		<header className="app-header">
			<img src={logo} alt="React" className="" width={80} height={80} />
			<h1>The React Quiz</h1>
		</header>
	);
}

export default Header;
