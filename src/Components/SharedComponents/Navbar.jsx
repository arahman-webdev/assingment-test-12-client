import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ user, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-[#ffffff] text-black w-full p-4 shadow-md fixed top-0 left-0 z-50 font-semibold">
        <div className="flex justify-between items-center w-11/12 mx-auto p-3">
          {/* Left side: Hamburger Menu or Website Name */}
          <div className="flex items-center">
            <button
              className="text-2xl md:hidden mr-4 focus:outline-none"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <Link to="/" className="text-2xl  text-blue-900 font-bold hover:text-blue-800">
            MyFlatHub
            </Link>
          </div>

          {/* Middle side: Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/apartment" className="hover:text-gray-400">Apartment</Link>
          </div>

          {/* Right side: Login/Profile */}
          <div className="relative">
            {!user ? (
              <Link to="/login" className="hover:text-gray-400">Login</Link>
            ) : (
              <div className="relative">
                <img
                  src={user.profilePicture || '/default-avatar.jpg'}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                    <div className="py-2 px-4">{user.name}</div>
                    <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-100">Dashboard</Link>
                    <button
                      className="w-full text-left py-2 px-4 hover:bg-gray-100"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile with Smooth Transition */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-lg font-semibold mb-6">
            <Link to="/" onClick={toggleSidebar}>Apartment Management</Link>
          </div>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-400" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/apartment" className="hover:text-gray-400" onClick={toggleSidebar}>
                Apartment
              </Link>
            </li>
            {!user ? (
              <li>
                <Link to="/login" className="hover:text-gray-400" onClick={toggleSidebar}>
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <div className="flex items-center">
                  <img
                    src={user.profilePicture || '/default-avatar.jpg'}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>{user.name}</div>
                </div>
                <Link
                  to="/dashboard"
                  className="block py-2 px-4 mt-2 hover:bg-gray-100"
                  onClick={toggleSidebar}
                >
                  Dashboard
                </Link>
                <button
                  className="w-full text-left py-2 px-4 mt-2 hover:bg-gray-100"
                  onClick={() => {
                    onLogout();
                    toggleSidebar();
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
