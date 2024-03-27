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
  }
};

export default apiService;
