// src/components/GameCard.jsx
// Component: GameCard
// Purpose: Displays individual game info (image, title, release, rating)
// and lets users add/remove favorites with a short feedback message.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function GameCard({ game }) {
  const [fav, setFav] = useState(false);
  const [message, setMessage] = useState(""); // Stores feedback text for user actions

  // Check if the current game is already in favorites
  useEffect(() => {
    if (game && game.id) {
      setFav(isFavorite(game.id));
    }
  }, [game]);

  // Handles adding or removing a game from favorites
  const handleToggleFavorite = () => {
    if (!game) return;

    if (fav) {
      removeFavorite(game.id);
      setFav(false);
      setMessage("Removed from Favorites ❌");
    } else {
      addFavorite(game);
      setFav(true);
      setMessage("Added to Favorites ✅");
    }

    // Clear message after 1.5 seconds
    setTimeout(() => setMessage(""), 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
      {/* --- Game Cover Image --- */}
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

      {/* --- Game Information --- */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {game.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Released: {game.released || "N/A"}
        </p>
        <p className="text-sm text-yellow-500 dark:text-yellow-400 mb-3">
          ⭐ Rating: {game.rating ? game.rating.toFixed(1) : "N/A"}
        </p>

        {/* --- Buttons: View Details + Add/Remove Favorite --- */}
        <div className="flex justify-between items-center">
          <Link
            to={`/game/${game.id}`}
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 text-sm font-medium"
          >
            View Details
          </Link>

          <button
            onClick={handleToggleFavorite}
            className={`text-xs px-2 py-1 rounded transition ${
              fav
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {fav ? "Remove" : "Add"}
          </button>
        </div>

        {/* --- Temporary Feedback Message --- */}
        {message && (
          <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-2 transition-opacity duration-300">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
