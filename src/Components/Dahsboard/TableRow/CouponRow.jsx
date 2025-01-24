import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CouponRow = ({coupon, refetch}) => {

    const axiosSecure = useAxiosSecure()

    // const handleRemove = (id)=>{
    //     console.log(id)

    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/coupon/${id}`)
    //             .then(res =>{
    //                 const data = res.data;
    //                 if(data.deletedCount >0){
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your file has been deleted.",
    //                         icon: "success"
    //                       });
    //                 }
    //                 refetch()
    //             })
    //         }
    //       });

    // }

    const { _id, name, discount, available } = coupon;

    const handleToggleAvailability = async () => {
      try {
        const response = await axiosSecure.patch(
          `/coupons/${_id}`,
          { available: !available }
        );
        if (response.data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Coupon availability updated!',
          });
          refetch(); // Refresh the data
        }
      } catch (error) {
        console.error('Error updating coupon availability:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update coupon availability. Please try again.',
        });
      }
    };

    return (
        <tr>
        <td className="px-5 py-3 border-b border-gray-200">{name}</td>
        <td className="px-5 py-3 border-b border-gray-200">{discount}%</td>
        <td className="px-5 py-3 border-b border-gray-200">
          <button
            onClick={handleToggleAvailability}
            className={`px-4 py-2 rounded ${
              available ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            } text-white`}
          >
            {available ? 'Available' : 'Unavailable'}
          </button>
        </td>
      </tr>
    );
};

export default CouponRow;