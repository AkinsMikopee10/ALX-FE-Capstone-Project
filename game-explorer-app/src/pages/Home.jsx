import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";
import fetchGames from "../api/fetchGames";
import Loader from "../components/Loader"; // simple spinner

const Home = () => {
  // ✅ State: games, search query, loading & error
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch popular games when the app first loads
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

  // ✅ Handle search
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
      {/* 🔍 Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* ⏳ Loading indicator */}
      {loading && <Loader />}

      {/* ⚠️ Error message */}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* 🎮 Games grid */}
      {!loading && !error && games.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}

      {/* 🚫 No results */}
      {!loading && !error && games.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No games found. Try another search!
        </p>
      )}
    </div>
  );
};

export default Home;
