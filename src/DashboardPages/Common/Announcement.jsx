import React, { useState, useEffect } from "react";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinenr from "../../Components/SharedComponents/Spinner";
import { useQuery } from "@tanstack/react-query";

const Announcement = () => {

  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure()



  const { data: announcements = [], isLoading, refetch } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/save-announcement')
      return data
    }
  })

  if (isLoading) {
    return <LoadingSpinenr></LoadingSpinenr>
  }

  if (!announcements.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No announcements available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Announcements
      </h1>
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div
            key={announcement._id}
            className="bg-white shadow-lg rounded-lg p-6 border"
          >
            <h2 className="text-xl font-semibold text-blue-800">
              {announcement.title}
            </h2>
            <p className="text-gray-700 mt-2">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
