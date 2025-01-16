import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaBars,
  FaSignOutAlt,
  FaGift,
  FaBullhorn,
  FaFileContract,
  FaCreditCard,
} from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [role, isLoading] = useRole()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-blue-800">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            className="text-white md:hidden"
            onClick={toggleSidebar}
          >
            ✕
          </button>
        </div>
        <nav className="mt-6 space-y-4 px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
              }`
            }
          >
            <FaHome className="mr-3" /> Home
          </NavLink>
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
              }`
            }
          >
            <FaCalendarAlt className="mr-3" /> My Profile
          </NavLink>
          {/* admin  */}

          {
            role === 'admin' && <>

              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
                  }`
                }
              >
                <MdManageAccounts className="mr-3" />Manage Users

              </NavLink>
              <NavLink
                to="/dashboard/manage-coupon"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
                  }`
                }
              >
                <FaGift className="mr-3" />Manage Coupon

              </NavLink>
              <NavLink
                to="/dashboard/make-announcement"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
                  }`
                }
              >
                <FaBullhorn className="mr-3" />Make Announcement

              </NavLink>
              <NavLink
                to="/dashboard/agreement-request"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
                  }`
                }
              >

                <FaFileContract className="mr-3" /> Agreement Request

              </NavLink>

            </>
          }

          {/* member nav */}

          {
            role === 'member' &&
            <>
              <NavLink
                to="/dashboard/payment"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
                  }`
                }
              >

                <FaCreditCard className="mr-3" /> Make Payment

              </NavLink>
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md hover:bg-blue-700 ${isActive ? "bg-blue-700" : ""
                  }`
                }
              >


                <FaMoneyBillTransfer className="mr-3" /> Payment History

              </NavLink>
            </>
          }




          <button className="flex items-center px-4 py-2 rounded-md hover:bg-red-700">
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          <button
            className="text-blue-900 md:hidden"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
          <h2 className="text-xl font-bold">Welcome, {user?.displayName || "User"}!</h2>
        </header>

        {/* Dynamic Content */}
        <main className="p-6 flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
