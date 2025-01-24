import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';
import CouponRow from '../../Components/Dahsboard/TableRow/CouponRow';


const ManageCoupon = () => {


  const axiosSecure = useAxiosSecure()



  const [showModal, setShowModal] = useState(false);



  const { data: coupons = [], isLoading, refetch } = useQuery({
    queryKey: ['coupons'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/coupons')
      return data
    }
  })


  useEffect(() => {
    document.title = "Dashboard-manage-coupon | AptEase";
}, []);

  if (isLoading) return <LoadingSpinenr></LoadingSpinenr>


  console.log(coupons)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.code.value;
    const discount = form.discount.value;
    const description = form.description.value;

    const couponData = {
      name,
      discount,
      description,
      available: true,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_ULR}/coupons`, couponData);
      Swal.fire({
        icon: 'success',
        title: 'Coupon Added',
        text: 'The coupon has been added successfully!',
      });
      setShowModal(false);
      refetch()
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
      <div>
        <h1 className="text-2xl font-bold mb-4">Manage Coupons</h1>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead className='bg-[#233876] text-white'>
                    <tr >
                      <th
                        scope='col'
                        className='px-5 py-3   border-b border-gray-200  text-left text-sm uppercase font-normal'
                      >
                        Coupon Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3  border-b border-gray-200   text-left text-sm uppercase font-normal'
                      >
                        Discount
                      </th>

                      <th
                        scope='col'
                        className='px-5 py-3  border-b border-gray-200   text-left text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      coupons.map(coupon => <CouponRow key={coupon._id} coupon={coupon} refetch={refetch} />)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      

        <div className='flex justify-center items-center'>
          <button
            className="bg-blue-900 text-white text-center px-4 py-2 rounded hover:bg-blue-950"
            onClick={() => setShowModal(true)}
          >
            Add Coupon
          </button>
        </div>

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
