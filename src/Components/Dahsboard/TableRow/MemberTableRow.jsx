import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MemberTableRow = ({member, refetch}) => {

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
            confirmButtonText: "Yes, remove it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/users/role/${member?.email}`, { role: 'user' });
                Swal.fire({
                    title: "Removed!",
                    text: "Member has been removed.",
                    icon: "success"
                  });

                  refetch()
            }
          });


    }
    return (
        <tr>
            <td className='px-5 py-5 border-b bg-white text-sm'>{member?.name}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{member?.email}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>
                <button
                    onClick={()=>handleRemove(member?._id)}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300'
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default MemberTableRow;