import React from "react";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  const favorites = [
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
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Favorites</h1>
      <FavoritesList favorites={favorites} />
    </div>
  );
};

export default Favorites;
