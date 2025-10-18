import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchGameDetails from "../api/fetchGameDetails";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchGameDetails(id);
        if (!data) throw new Error("No data returned for this game.");
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
    return () => (mounted = false);
  }, [id]);

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

  const platforms =
    game.platforms
      ?.map((p) => p.platform?.name)
      .filter(Boolean)
      .join(", ") || "N/A";
  const genres = game.genres?.map((g) => g.name).join(", ") || "N/A";
  const developer = game.developers?.[0]?.name || "N/A";
  const publisher = game.publishers?.[0]?.name || "N/A";
  const ageRating = game.esrb_rating?.name || "N/A";

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back link */}
      <div className="mb-4">
        <Link to="/" className="text-indigo-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      {/* Cover image (full width + increased height) */}
      <div className="w-full mb-6">
        {game.background_image ? (
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        ) : (
          <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 dark:text-gray-300">
              No Image Available
            </span>
          </div>
        )}
      </div>

      {/* Title + Favorite Button side by side */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-0">
          {game.name}
        </h1>

        <button
          onClick={handleToggleFavorite}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            fav
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {fav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>

      {/* Metadata */}
      <div className="mb-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <p>
          <strong>Release:</strong> {game.released || "N/A"}
        </p>
        <p>
          <strong>Rating:</strong> {game.rating || "N/A"}
        </p>
        <p>
          <strong>Age Rating:</strong> {ageRating}
        </p>
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

      {/* About Section */}
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          About
        </h2>
        <p className="leading-relaxed text-gray-800 dark:text-gray-200">
          {game.description_raw || "No description available."}
        </p>
      </div>
    </div>
  );
}
