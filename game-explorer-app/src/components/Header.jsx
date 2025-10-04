import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      {/* Website Name/Logo */}
      <h1 className="text-xl font-bold">
        <Link to="/">Game Explorer</Link>
      </h1>
      {/* Nav Links */}
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/favorites" className="hover:underline">
          Favorites
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
