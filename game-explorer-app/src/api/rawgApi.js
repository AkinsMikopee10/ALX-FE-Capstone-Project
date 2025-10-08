// src/api/rawgApi.js

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

/**
 * Helper function to make API requests to RAWG
 * @param {string} endpoint - The endpoint path (e.g., '/games')
 * @param {object} params - Optional query parameters (e.g., { search: "Mario" })
 * @returns {Promise<object>} - The JSON response
 */
export async function fetchFromRawg(endpoint, params = {}) {
  try {
    // Add the API key to every request
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.set("key", API_KEY);

    // Add any extra parameters from the 'params' object
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `RAWG API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching from RAWG API:", error);
    throw error; // Re-throw for components to handle
  }
}
