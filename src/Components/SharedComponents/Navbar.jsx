import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-5">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left: Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-orange-600 text-3xl md:hidden"
        >
          &#9776;
        </button>

        <div className="md:block hidden text-xl font-bold text-[#1E3A8A] uppercase ">
            <Link to="/">MyFlatHub</Link>
          </div>
        {/* Middle: Logo and Center Links */}
        <div className="flex-1 flex items-center justify-center">
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-600 text-lg">
              Home
            </Link>
            <Link to="/apartment" className="hover:text-blue-600 text-lg">
              Apartment
            </Link>
            <Link to="/services" className="hover:text-blue-600 text-lg">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-600 text-lg">
              Contact
            </Link>
          </div>
          <div className="md:hidden text-xl font-bold text-orange-600 uppercase">
            <Link to="/">MyFlatHub</Link>
          </div>
        </div>

        {/* Right: Login/Profile */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          ) : (
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white shadow-lg w-64 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-2xl text-gray-600 absolute top-4 right-4"
        >
          &times;
        </button>
        <ul className="mt-16 space-y-4 pl-6">
          <li>
            <Link to="/" className="text-lg text-white hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/apartment" className="text-lg hover:text-blue-600">
              Apartment
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-lg hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay (optional for closing the menu) */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
