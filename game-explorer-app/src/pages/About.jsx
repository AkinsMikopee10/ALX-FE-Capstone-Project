import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        About Game Explorer
      </h1>

      {/* Paragraph */}
      <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
        <strong>Game Explorer</strong> is a React-based web application that
        allows users to discover, search, and save their favorite video games.
        It connects to the
        <a
          href="https://rawg.io/apidocs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
        >
          RAWG Video Games API
        </a>{" "}
        to provide real-time data about thousands of games across multiple
        platforms.
      </p>
    </div>
  );
};

export default About;
