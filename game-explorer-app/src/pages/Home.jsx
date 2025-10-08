import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";

const Home = () => {
  const [games, setGames] = useState([
    // Placeholder games for now
    {
      title: "Cyberpunk 2077",
      releaseDate: "2020-12-10",
      rating: "4.2",
      image: "https://via.placeholder.com/400x200",
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
    {
      title: "Horizon Forbidden West",
      releaseDate: "2022-02-18",
      rating: "4.7",
      image: "https://via.placeholder.com/400x200",
    },
  ]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Later: fetch data from RAWG API
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4 text-center">
        Welcome to Game Explorer
      </h1>

      {/* Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Game results grid */}
      {games.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          No games found. Try searching for something else.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {games.map((game, index) => (
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

export default Home;
