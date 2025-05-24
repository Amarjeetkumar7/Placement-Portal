import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-gray-300">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
