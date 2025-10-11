// src/components/SearchBar.jsx

import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // ignore empty search
    onSearch(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4"
    >
      <input
        type="text"
        placeholder="Search games..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full sm:w-1/2 p-3 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500
                   dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg
                   hover:bg-indigo-700 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
