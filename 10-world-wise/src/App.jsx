import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function Layout() {
	const location = useLocation();
	const showNavbar = location.pathname !== "/app";
	return (
		<>
			{/* {showNavbar && <Navbar />} */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/product" element={<Product />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/app" element={<AppLayout />} />
			</Routes>
		</>
	);
}

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</>
	);
}

export default App;
