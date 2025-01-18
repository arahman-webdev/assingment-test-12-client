import React, { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const MemberProfile = ({ user, role }) => {

  const axiosSecure = useAxiosSecure()


  const { data: acceptedItem = [] } = useQuery({
    queryKey: ["acceptedItems", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/accepted-request/${user?.email}`);
      return data;
    },
  });

  console.log(acceptedItem)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-10 px-4"
      style={{
        backgroundImage: `url("")`,
      }}
    >
      {/* Profile Card */}
      <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-lg w-full max-w-5xl">
        <div className="flex flex-col md:flex-row">
          {/* Profile Section */}
          <div className="p-6 bg-gradient-to-br from-blue-700 to-blue-950 text-white rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex flex-col items-center md:w-1/3">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div className="bg-white text-blue-600 text-sm font-bold mt-3 px-4 py-1 rounded-full">
              {role}
            </div>
            <h2 className="text-lg font-semibold mt-4">{user?.displayName}</h2>
            <p className="text-sm text-gray-200">{user?.email}</p>
          </div>

          {/* Room Info Section */}
          <div className="p-6 bg-white rounded-b-lg md:rounded-bl-none md:rounded-r-lg md:w-2/3 ">
            <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
              Apartment Information
            </h2>
            <div className="grid grid-cols-1 gap-4 pr-20">
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b  pb-3">
                  <span className="font-medium text-gray-700 ">Accepted Date:</span>
                  <span className="text-gray-600">{acceptedItem?.date || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="font-medium text-gray-700">Floor No:</span>
                  <span className="text-gray-600">{acceptedItem?.floorNo || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center border-b  pb-3">
                  <span className="font-medium text-gray-700">Block Name:</span>
                  <span className="text-gray-600">{acceptedItem?.blockName || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center border-b  pb-3">
                  <span className="font-medium text-gray-700">Room No:</span>
                  <span className="text-gray-600">{acceptedItem?.roomNo || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center border-b  pb-3">
                  <span className="font-medium text-gray-700">Rent:</span>
                  <span className="text-gray-600">
                    ${acceptedItem?.rent || "N/A"}/month
                  </span>
                </div>
              </div>

            </div>
            <Link to='/dashboard/payment' className="flex flex-col col-span-2 bg-blue-900 p-3 text-white">
              <button>$Pay Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MemberProfile;
