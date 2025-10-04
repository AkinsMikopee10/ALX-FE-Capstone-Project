import React from "react";
import GameCard from "../components/GameCard";

const Favorites = () => {
  // Placeholder favorites data for now
  const favorites = [
    {
      title: "Cyberpunk 2077",
      releaseDate: "2020-12-10",
      rating: "4.2",
      image: "https://via.placeholder.com/400x200", // placeholder image
    },
    {
      title: "The Witcher 3",
      releaseDate: "2015-05-19",
      rating: "4.9",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Elden Ring",
      releaseDate: "2022-02-25",
      rating: "5.0",
      image: "https://via.placeholder.com/400x200",
    },
  ];

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
          {/* Some placeholder favorites game cards here */}
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

export default Favorites;
