import React from "react";

const GameCard = ({ title, releaseDate, rating, image }) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      {/* Game cover image here */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Game info here */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Release: {releaseDate}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Rating: {rating}
        </p>

        {/* The View Details button */}
        <button className="mt-2 w-full bg-indigo-600 dark:bg-indigo-500 text-white py-1 rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default GameCard;
