// src/utils/favorites.js
// Simple localStorage helpers to store favorite games.
// Stored format: array of game objects (with at least id, name, background_image, released, rating)

const KEY = "favorites";

/**
 * Get favorites from localStorage (returns array)
 */
export function getFavorites() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse favorites from localStorage", e);
    return [];
  }
}

/**
 * Save favorites array to localStorage
 * @param {Array} favs
 */
export function saveFavorites(favs) {
  try {
    localStorage.setItem(KEY, JSON.stringify(favs));
  } catch (e) {
    console.error("Failed to save favorites to localStorage", e);
  }
}

/**
 * Check if a game id is in favorites
 * @param {number} id
 */
export function isFavorite(id) {
  const favs = getFavorites();
  return favs.some((g) => g.id === id);
}

/**
 * Add a game object to favorites (id uniqueness checked)
 * @param {object} game
 */
export function addFavorite(game) {
  if (!game || !game.id) return;
  const favs = getFavorites();
  if (!favs.some((g) => g.id === game.id)) {
    favs.push({
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
    });
    saveFavorites(favs);
  }
}

/**
 * Remove a game from favorites by id
 * @param {number} id
 */
export function removeFavorite(id) {
  const favs = getFavorites();
  const filtered = favs.filter((g) => g.id !== id);
  saveFavorites(filtered);
}
