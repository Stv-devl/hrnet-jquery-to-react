import { createContext, useState, useEffect, useCallback } from "react";
import apiService from "../services/apiService";

export const ApiContext = createContext();

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
        setError(err);
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
