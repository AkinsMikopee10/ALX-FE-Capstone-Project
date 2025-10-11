// src/api/fetchGameDetails.js
// Purpose: Fetch detailed info for a single game from RAWG API.

const BASE_URL = "https://api.rawg.io/api/games";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export default async function fetchGameDetails(id) {
  try {
    if (!id) throw new Error("No game id provided to fetchGameDetails");
    const url = `${BASE_URL}/${id}?key=${API_KEY}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`RAWG API responded with ${res.status}`);
    }

    const data = await res.json();
    return data; // full game detail object
  } catch (error) {
    console.error("Error in fetchGameDetails:", error);
    return null; // caller should handle null case
  }
}
