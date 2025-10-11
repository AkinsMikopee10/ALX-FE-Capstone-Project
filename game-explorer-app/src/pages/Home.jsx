// src/pages/Home.jsx

import React, { useEffect, useState } from "react";
import fetchGames from "../api/fetchGames"; // ✅ uses the default export
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";

function Home() {
  // State variables
  const [games, setGames] = useState([]); // store list of games
  const [loading, setLoading] = useState(true); // show spinner while loading
  const [error, setError] = useState(null); // store error message
  const [query, setQuery] = useState(""); // store search text

  // Fetch games when the page first loads
  useEffect(() => {
    loadGames(); // no query = fetch popular games
  }, []);

  // Function to load games (can be used for default or searched games)
  const loadGames = async (searchTerm = "") => {
    setLoading(true);
    setError(null);

    const data = await fetchGames(searchTerm);

    if (data.length === 0) {
      setError("No games found. Try another search!");
    }

    setGames(data);
    setLoading(false);
  };

  // Handle the search action when user submits a search
  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    loadGames(searchTerm);
  };

  console.log(games);

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Loading games...
        </p>
      )}

      {/* Error Message */}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      {/* Game List */}
      {!loading && !error && (
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
