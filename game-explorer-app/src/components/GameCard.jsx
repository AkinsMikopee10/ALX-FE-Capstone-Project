// src/components/GameCard.jsx
// Purpose: Display a single game's summary (image, title, release date, rating, and a link to details)
// Includes: Gentle hover scale effect for interactivity

import React from "react";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    // Outer card container with hover scale effect
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden 
                 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Game image or placeholder if image not available */}
      {game.background_image ? (
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            No Image Available
          </span>
        </div>
      )}

      {/* Game details (name, release date, rating) */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {game.name}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          Released: {game.released || "N/A"}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Rating: ⭐ {game.rating || "N/A"}
        </p>

        {/* Link to detailed game info page */}
        <Link
          to={`/game/${game.id}`}
          className="block text-center bg-indigo-600 text-white py-2 rounded-lg 
                     hover:bg-indigo-700 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
