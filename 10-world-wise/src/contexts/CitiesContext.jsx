import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

/* 











createContext() ------> the mother sphere of context -2----> Context.Provider (another sphere ) contains the things to be shared
                                                     -----> useContext ( another sphere ) consume things provided by Context.Provider



*/

const CitiesContext = createContext();

function CitiesProvider({ children }) {
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
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside of its Provider");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
