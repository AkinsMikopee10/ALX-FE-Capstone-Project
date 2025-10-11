import React, { useEffect } from "react";
import { fetchGames } from "../api/fetchGames";

const Home = () => {
  useEffect(() => {
    async function loadGames() {
      try {
        const games = await fetchGames(); // fetch popular games
        console.log("Fetched games:", games);
      } catch (error) {
        console.error("Failed to load games:", error);
      }
    }
    loadGames();
  }, []);

  return (
    <div className="p-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Game Explorer</h1>
      <p>Check the console for fetched game data 👇</p>
    </div>
  );
};

export default Home;
