import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:8000";

function Layout() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCities = async () => {
			try {
				const response = await fetch(`${BASE_URL}/cities`);
				const data = await response.json();

				setCities(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCities();
	}, []);

	return (
		<>
			{/* {showNavbar && <Navbar />} */}
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="/product" element={<Product />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/app" element={<AppLayout />}>
					<Route
						index
						element={<Navigate replace to="cities" />}
						isLoading={isLoading}
					/>
					<Route element={<CityList cities={cities} isLoading={isLoading} />} />
					<Route
						path="cities"
						element={<CityList cities={cities} isLoading={isLoading} />}
					/>
					<Route path="cities/:cityId" element={<City />} />
					<Route
						path="countries"
						element={<CountryList cities={cities} isLoading={isLoading} />}
					/>
					<Route path="form" element={<Form />} />
				</Route>
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
