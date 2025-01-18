import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Providers/AuthProvider';
import useRole from '../../Hooks/useRole';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';

const MakePayment = () => {


    const axiosSecure = useAxiosSecure()
    const {user, loading} = useContext(AuthContext)
    const [role, isLoading] = useRole()


    if(loading || isLoading) return <LoadingSpinenr></LoadingSpinenr>

    const { data: acceptedItem = [] } = useQuery({
      queryKey: ["acceptedItems", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/accepted-request/${user?.email}`);
        return data;
      },
    });


    const {floorNo, roomNo,blockName, date, rent, apartmentNo} = acceptedItem || {}
  
    console.log(acceptedItem)



  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Payment submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Make Payment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Member Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Member Email
            </label>
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Floor */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Floor
            </label>
            <input
              type="text"
              value={floorNo}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Block Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Block Name
            </label>
            <input
              type="text"
              value={blockName}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Apartment/Room No */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Apartment No / Room No
            </label>
            <input
              type="text"
              value={apartmentNo}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Rent */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Rent
            </label>
            <input
              type="text"
              value={`$${rent}/month`}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Month */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Month
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            >
              <option value="" disabled selected>
                Select Month
              </option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
