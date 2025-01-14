import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Section */}
      <nav className="sticky top-0 z-10 shadow-lg font-bold bg-[var(--neutral-gray)] border-[var(--dark-blue-gray)]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="font-poppins text-[var(--primary-red)] self-center text-2xl font-semibold whitespace-nowrap">
              Eterna
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-[var(--primary-red)] md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col font-medium mt-4 md:mt-0 md:flex-row md:space-x-8 md:items-center">
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-[var(--primary-red)] hover:text-[var(--primary-red-light)] md:bg-transparent md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/exhibits"
                  className="block py-2 pl-3 pr-4 text-[var(--primary-red)] hover:text-[var(--primary-red-light)] md:bg-transparent md:p-0"
                >
                  Exhibits
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="block py-2 pl-3 pr-4 text-[var(--primary-red)] hover:text-[var(--primary-red-light)] md:bg-transparent md:p-0"
                >
                  Events
                </Link>
              </li>
              {/* Buy Tickets Button */}
              <li className="md:flex md:items-center">
                <Link
                  to="/tickets"
                  className="block py-2 px-4 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-md md:inline-block md:ml-4 transition font-bold"
                >
                  Buy Tickets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
