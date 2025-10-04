import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Sun, Moon } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark mode class on <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // Header background changes with dark mode
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with Gamepad icon */}
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
          <Gamepad2 size={20} />{" "}
          {/* the Gamepad icon from lucide-react is here */}
          <span>Game Explorer</span>
        </div>

        {/*the nav links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            Favorites
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
          >
            About
          </Link>
        </div>

        {/* Dark Mode Toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
