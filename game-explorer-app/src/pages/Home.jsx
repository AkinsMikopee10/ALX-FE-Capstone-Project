import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";
import fetchGames from "../api/fetchGames";
import Loader from "../components/Loader"; // imports a simple spinner

const Home = () => {
  const [games, setGames] = useState([]); // stores and updates the list of games (from API)
  const [query, setQuery] = useState(""); // stores and updates the current search text
  const [loading, setLoading] = useState(false); // stores and updates the loading state for fetch
  const [error, setError] = useState(""); // stores and updates the error message, if any

  // Fetches popular games when the app first loads
  useEffect(() => {
    const loadPopular = async () => {
      setLoading(true);
      try {
        const data = await fetchGames("");
        setGames(data);
      } catch (err) {
        setError("Failed to load popular games.");
      } finally {
        setLoading(false);
      }
    };
    loadPopular();
  }, []);

  //this handles user search
  const handleSearch = async (searchTerm) => {
    setQuery(searchTerm);
    setLoading(true);
    setError("");

    try {
      const data = await fetchGames(searchTerm);
      setGames(data);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* this is the Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* this is the Loading indicator */}
      {loading && <Loader />}

      {/* this is the Error message */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* this is the Games grid */}
      {!loading && !error && games.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

      {/* this is the display message for when there is no results */}
      {!loading && !error && games.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No games found. Try another search!
        </p>
      )}
    </div>
  );
};

export default Home;
