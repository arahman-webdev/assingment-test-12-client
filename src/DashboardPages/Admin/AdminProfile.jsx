import React from 'react';

const AdminProfile = ({user, role}) => {
    return (
        <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url("")`,
        }}
      >
        {/* Background overlay */}
     
  
        {/* Profile Card */}
        <div className="relative bg-white/45 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-xl w-full">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">
        My MemberProfile
      </h1>
      <div className="flex items-center flex-col gap-4">
        <img
          src={user?.photoURL}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-900"
        />
        <div className="bg-blue-600 text-white -mt-5 px-4 py-1 rounded-full">
          {role}
        </div>
        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>
  
      <div className="mt-6 space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-700">Agreement Date:</span>
          <span className="text-gray-600"></span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-700">Floor:</span>
          <span className="text-gray-600"></span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-700">Block:</span>
          <span className="text-gray-600"></span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-700">Room No:</span>
          <span className="text-gray-600"></span>
        </div>
      </div>
    </div>
      </div>
    );
};

export default AdminProfile;