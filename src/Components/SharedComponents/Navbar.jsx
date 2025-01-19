import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import useRole from '../../Hooks/useRole';

const Navbar = () => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State for scrolling effect
  const navigate = useNavigate();
  const [role, isLoading] = useRole();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    logOutUser().then((res) => {
      console.log(res);
      navigate('/login');
    });
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed  top-0 left-0 z-50 w-full p-4 shadow-md font-semibold transition-all duration-300 ${isScrolled ? 'bg-[#FFFFFF] text-black' : 'bg-black opacity-65 text-white'
          }`}
      >
        <div className="flex justify-between items-center w-11/12 mx-auto p-3 z-50">
          {/* Left side: Hamburger Menu or Website Name */}
          <div className="flex items-center text-blue-900">
            <button
              className="text-2xl md:hidden mr-4 focus:outline-none"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <NavLink
              to="/"
              className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'
                } hover:text-blue-800`}
            >
              MyFlatHub
            </NavLink>
          </div>

          {/* Middle side: Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-600 ${isActive
                  ? 'text-blue-600 font-bold' // Active link styles
                  : isScrolled
                    ? 'text-blue-900'
                    : 'text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/apartment"
              className={({ isActive }) =>
                `hover:text-blue-600 ${isActive
                  ? 'text-blue-600  font-bold' // Active link styles
                  : isScrolled
                    ? 'text-blue-900'
                    : 'text-white'
                }`
              }
            >
              Apartment
            </NavLink>

          </div>

          {/* Right side: Login/Profile */}
          <div className="relative">
            {!user ? (
              <>
                <div className="mr-3">
                  <Link
                    to="/login"
                    className={`mr-4 px-4 py-3 ${isScrolled ? 'text-blue-700' : 'text-white'
                      }`}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className={`px-4 py-3 rounded-lg ${isScrolled
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-blue-900'
                      }`}
                  >
                    Sign up
                  </Link>
                </div>
              </>
            ) : (
              <div className="relative">
                <img
                  src={user.photoURL || '/default-avatar.jpg'}
                  alt="Profile"
                  className={`w-10 h-10 rounded-full cursor-pointer ring-2 transition ${isScrolled ? 'ring-white' : 'ring-blue-900'
                    }`}
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-blue-950 rounded-md shadow-lg z-10">
                    <div className="py-2 px-4">{user?.displayName}</div>
                    <Link
                      to={
                        role === 'admin' || role === 'user' || role === 'member'
                          ? '/dashboard/my-profile'
                          : '/dashboard'
                      }
                      className="block py-2 px-4 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <button
                      className="w-full text-left py-2 px-4 hover:bg-gray-100"
                      onClick={handleLogout}
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
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#233876] text-white p-4 shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-lg font-semibold mb-6">
            <Link to="/" onClick={toggleSidebar}>
              
            </Link>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/apartment"
                className="hover:text-gray-400"
                onClick={toggleSidebar}
              >
                Apartment
              </Link>
            </li>
            {!user ? (
              <li>
                <Link
                  to="/login"
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li>
                <div className="flex items-center">
                  <img
                    src={user.photoURL || '/default-avatar.jpg'}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>{user?.displayName}</div>
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
                    handleLogout();
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
