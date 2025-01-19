import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CouponRow = ({coupon, refetch}) => {

    const axiosSecure = useAxiosSecure()

    const handleRemove = (id)=>{
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/coupon/${id}`)
                .then(res =>{
                    const data = res.data;
                    if(data.deletedCount >0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    refetch()
                })
            }
          });

    }

    return (
        <tr>
            <td className='px-5 py-5 border-b bg-white text-sm'>{coupon?.name}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{coupon?.discount}%</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>
                <button
                    onClick={()=>handleRemove(coupon?._id)}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300'
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default CouponRow;