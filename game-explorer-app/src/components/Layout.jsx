import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex items-center justify-between p-4 shadow-sm bg-white dark:bg-gray-800">
        <Link to="/" className="text-xl font-bold">
          GameDB
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="text-center p-4 text-sm bg-gray-100 dark:bg-gray-800">
        Powered by RAWG API
      </footer>
    </div>
  );
};
export default Layout;
