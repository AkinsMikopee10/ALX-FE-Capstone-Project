import React from "react";
import GameCard from "./GameCard";

const FavoritesList = ({ favorites }) => {
  return (
    <div className="p-4">
      {favorites.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          No favorites yet. Browse games to add some!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              releaseDate={game.releaseDate}
              rating={game.rating}
              image={game.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
