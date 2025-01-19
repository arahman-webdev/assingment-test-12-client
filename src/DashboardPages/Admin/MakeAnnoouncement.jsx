import React, { useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MakeAnnouncement = () => {
  
  
  const axiosSecure = useAxiosSecure()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const announcementData = {
      title,
      description
    };

    try {
      
      const response = await axiosSecure.post('/save-announcement', announcementData);
      const data = response.data;
     
     if(data.insertedId){
        Swal.fire({
            title: "Good job!",
            text: "Succefully added your announcement!",
            icon: "success"
          });
     }


     
    } catch (error) {
      console.log(error)
    }finally{
        form.reset()
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">Add Announcement</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
        <button
          type="submit"
          
          className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
