// src/pages/GameDetails.jsx
// Purpose: Show extended info for a single game (fetched from RAWG).
// Shows: title, cover image, release date, rating, description, platforms, genres, developer, publisher, age rating.
// Also: Add / Remove favorites using localStorage helpers.

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchGameDetails from "../api/fetchGameDetails";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function GameDetails() {
  const { id } = useParams(); // grabs :id from route /game/:id
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState(false); // whether current game is favorited

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGameDetails(id);
        if (!data) {
          throw new Error("No data returned for this game.");
        }
        if (mounted) {
          setGame(data);
          setFav(isFavorite(data.id));
        }
      } catch (err) {
        console.error("Failed to load game details:", err);
        if (mounted) setError("Failed to load game details. Please try again.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [id]);

  // Toggle favorite state and persist
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

  if (loading)
    return (
      <div className="text-center py-16">
        <p className="animate-pulse text-gray-600 dark:text-gray-300">
          Loading game details...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-16">
        <p className="text-red-500 font-semibold">{error}</p>
        <Link
          to="/"
          className="inline-block mt-4 text-indigo-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );

  if (!game)
    return (
      <div className="text-center py-16">
        <p className="text-gray-600 dark:text-gray-300">Game not found.</p>
        <Link
          to="/"
          className="inline-block mt-4 text-indigo-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );

  // Helper getters with safe fallbacks
  const platforms =
    game.platforms
      ?.map((p) => p.platform?.name)
      .filter(Boolean)
      .join(", ") || "N/A";
  const genres = game.genres?.map((g) => g.name).join(", ") || "N/A";
  const developer = game.developers?.[0]?.name || "N/A";
  const publisher = game.publishers?.[0]?.name || "N/A";
  const ageRating = game.esrb_rating?.name || "N/A"; // RAWG uses esrb_rating

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back link */}
      <div className="mb-4">
        <Link to="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {game.name}
      </h1>

      {/* Cover + meta */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cover image */}
        <div className="lg:w-1/3">
          {game.background_image ? (
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full rounded-lg shadow-md"
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 dark:text-gray-300">
                No Image Available
              </span>
            </div>
          )}

          {/* Add / Remove Favorites */}
          <button
            onClick={handleToggleFavorite}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
          >
            {fav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>

        {/* Details */}
        <div className="lg:w-2/3">
          <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="mr-4">
              <strong>Release:</strong> {game.released || "N/A"}
            </span>
            <span className="mr-4">
              <strong>Rating:</strong> {game.rating || "N/A"}
            </span>
            <span className="mr-4">
              <strong>Age Rating:</strong> {ageRating}
            </span>
          </div>

          <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            <p>
              <strong>Platforms:</strong> {platforms}
            </p>
            <p>
              <strong>Genres:</strong> {genres}
            </p>
            <p>
              <strong>Developer:</strong> {developer}
            </p>
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="leading-relaxed text-gray-800 dark:text-gray-100">
              {game.description_raw || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
