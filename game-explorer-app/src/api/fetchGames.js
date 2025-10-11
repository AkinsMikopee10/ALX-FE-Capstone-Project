// src/api/fetchGames.js

// This helper function fetches game data from the RAWG API.
// It can handle both popular games and search queries.

const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

async function fetchGames(searchQuery = "") {
  try {
    // If there's a search query, add it to the request
    const url = searchQuery
      ? `${BASE_URL}?key=${API_KEY}&search=${searchQuery}`
      : `${BASE_URL}?key=${API_KEY}`;

    const response = await fetch(url);

    // If something goes wrong (like a 404 or 500), throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    // Parse JSON data
    const data = await response.json();

    // Return only the list of games
    return data.results || [];
  } catch (error) {
    console.error("Error fetching games:", error);
    return []; // Return an empty array so the app doesn’t crash
  }
}

// ✅ Default export so it can be imported easily in other files
export default fetchGames;
