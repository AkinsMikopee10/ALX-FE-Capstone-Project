// src/components/GameCard.jsx
// Purpose: Display a single game card with cover image, title, and favorite toggle.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function GameCard({ game }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    // check if this game is already in favorites on mount
    if (game && game.id) {
      setFav(isFavorite(game.id));
    }
  }, [game]);

  const handleToggleFavorite = () => {
    if (!game) return;
    if (fav) {
      removeFavorite(game.id);
      setFav(false);
    } else {
      addFavorite(game);
      setFav(true);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
      {/* Cover image */}
      {game.background_image ? (
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* Game Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {game.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Released: {game.released || "N/A"}
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <Link
            to={`/game/${game.id}`}
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 text-sm font-medium"
          >
            View Details
          </Link>

          <button
            onClick={handleToggleFavorite}
            className={`text-xs px-2 py-1 rounded ${
              fav
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {fav ? "Remove" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
