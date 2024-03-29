const postService = async (objetJson) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetJson),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
};

export default postService;
