// this is a simple loading spinner component to show while fetching data

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      {/* this is the animated spinner */}
      <div
        className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
        aria-label="Loading spinner"
      ></div>
    </div>
  );
};

export default Loader;
