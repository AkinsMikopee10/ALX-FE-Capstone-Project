// src/pages/Favorites.jsx
// Purpose: Display all favorite games saved in localStorage.

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../utils/favorites";
import GameCard from "../components/GameCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage when page mounts
    const favs = getFavorites();
    setFavorites(favs);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Your Favorite Games
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>You have no favorites yet.</p>
          <Link
            to="/"
            className="inline-block mt-4 text-indigo-600 hover:underline"
          >
            Browse Games
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
