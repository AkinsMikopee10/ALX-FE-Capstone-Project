import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {/* the page header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      {/* the page footer */}
      <Footer />
    </div>
  );
};

export default Layout;
