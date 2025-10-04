import React from "react";

const Favorites = () => {
  // Placeholder for now
  const favorites = [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Favorites</h1>

      {/* when there are no favorites yet */}
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No favorites yet. Browse games to add some!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* the favorite game cards comes here */}
        </div>
      )}
    </div>
  );
};

export default Favorites;
