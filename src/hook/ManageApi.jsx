import { createContext, useState, useEffect } from "react";
import apiService from "../services/apiService";

export const ApiContext = createContext();

function ApiProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <ApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
