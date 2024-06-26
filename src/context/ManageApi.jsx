import { createContext, useState, useEffect, useCallback } from "react";
import apiService from "../services/apiService";
import { mockedData } from "../data/mockedData";

export const ApiContext = createContext();

/**
 * ApiProvider component
 * Provides API data context to its children components. Fetches data from an API and handles loading and error states.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components to be wrapped by the provider.
 * @returns {JSX.Element} - The API context provider component.
 */

function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateData = useCallback((newData) => {
    setData((prevData) => [...prevData, newData]);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resData = await apiService();
        setData(resData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setData(mockedData.workers);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, updateData, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
