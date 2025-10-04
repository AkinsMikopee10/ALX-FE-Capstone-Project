import React from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Later: connect to RAWG API
  };

  return (
    <div className="p-6">
      {/* Heading inherits parent text color (dark/light) */}
      <h1 className="text-2xl font-bold mb-4 text-center">
        Welcome to Game Explorer
      </h1>

      {/* This is the Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Body text changes with dark mode color */}
      <p className="text-center text-gray-600 dark:text-gray-300">
        Start by searching for your favorite games!
      </p>
    </div>
  );
};

export default Home;
