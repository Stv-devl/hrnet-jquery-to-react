/**
 * postService function
 * Sends a POST request to the API with the given JSON object and returns the response. Logs an error if the fetch operation fails.
 * @async
 * @param {Object} objetJson - The JSON object to be sent in the body of the POST request.
 * @returns {Promise<Object>} - The response data from the API.
 * @throws {Error} - If the response is not ok or if there is a problem with the fetch operation.
 */

const postService = async (newEmployee) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

export default postService;
