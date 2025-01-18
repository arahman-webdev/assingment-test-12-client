import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

const ManageCoupon = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.code.value;
    const discount = form.discount.value;
    const description = form.description.value;

    const couponData = {
      name,
      discount,
      description
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_ULR}/coupons`, couponData);
      Swal.fire({
        icon: 'success',
        title: 'Coupon Added',
        text: 'The coupon has been added successfully!',
      });
      setShowModal(false);
      form.reset();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add coupon. Please try again.',
      });
      console.error('Error saving coupon:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Coupons</h1>
      <button
        className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950"
        onClick={() => setShowModal(true)}
      >
        Add Coupon
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Add a New Coupon</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="code" className="block text-sm font-medium mb-1">Coupon Code</label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="discount" className="block text-sm font-medium mb-1">Discount Percentage</label>
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                  min="1"
                  max="100"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium mb-1">Coupon Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCoupon;
