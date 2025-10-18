import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gamepad2, Sun, Moon, Menu, X } from "lucide-react"; // Added Menu & X icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // for hamburger toggle

  // Apply/remove dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-lg">
          <Gamepad2 size={20} />
          <span>Game Explorer</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Favorites
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About
          </Link>
        </div>

        {/* Right-side buttons */}
        <div className="flex items-center gap-2">
          {/* Dark Mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Hamburger icon (visible only on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Home
            </Link>
            <Link
              to="/favorites"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Favorites
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
