/**
 * apiService function
 * Fetches data from the API and returns it. Logs an error if the fetch operation fails.
 * @async
 * @returns {Promise<Object>} - The data fetched from the API.
 * @throws {Error} - If the response is not ok or if there is a problem with the fetch operation.
 */

const apiService = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};

export default apiService;
