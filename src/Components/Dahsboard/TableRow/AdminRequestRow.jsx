import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminRequestRow = ({ agreement, refetch }) => {
    const { _id, blockName, floorNo,roomNo, apartmentNo, rent, date, customer, agreementId } = agreement || {};
    const axiosSecure = useAxiosSecure()

    console.log(agreement)

    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    const acceptedInfo = {
        acceptedId: _id,
        blockName,
        floorNo,
        roomNo,
        apartmentNo,
        rent,
        date: formattedDate,
        name: customer?.name,
        email: customer?.email
        
    }

    const handleAccept = async () => {
        try {
            // Update agreement status
            await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/agreements/status/${_id}`, { status: 'Checked' });

            // Update apartment availability
            await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/apartment/availability/${agreementId}`, { availability: 'Unavailable' });

            // Update user role
            await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/users/role/${customer?.email}`, { role: 'member' });

            await axiosSecure.post(`${import.meta.env.VITE_API_ULR}/accepted-request`, acceptedInfo)


            Swal.fire('Success', 'Agreement accepted and user role updated to member!', 'success');
            refetch(); // Refresh the data
        } catch (error) {
            Swal.fire('Error', 'Failed to process the request. Try again later.', 'error');
        }
    };



    const handleReject = async (id) => {
        try {
            // Show confirmation dialog
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, reject it!",
            });
    
            // If user confirms, update agreement status
            if (result.isConfirmed) {
                await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/agreements/status/${_id}`, { status: 'Checked' });

                await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/apartment/availability/${agreementId}`, { availability: 'available' });
                await axiosSecure.delete(`${import.meta.env.VITE_API_ULR}/agreement/${id}`)
                // Show success message
                await Swal.fire({
                    title: "Rejected!",
                    text: "Agreement has been rejected successfully.",
                    icon: "info",
                });
    
                // Refresh the data
                refetch();
            }
        } catch (error) {
            // Show error message
            Swal.fire('Error', 'Failed to process the request. Try again later.', 'error');
        }
    };
    

    return (
        <tr>
            <td className='px-5 py-5 border-b bg-white text-sm'>{customer.name}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{customer.email}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{floorNo}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{blockName}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{apartmentNo}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{rent}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{date}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>
                <button
                    onClick={handleAccept}
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                >
                    Accept
                </button>
            </td>
            <td className='px-5 py-5 border-b bg-white text-sm'>
                <button
                    onClick={()=>handleReject(_id)}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300'
                >
                    Reject
                </button>
            </td>
        </tr>
    );
};

export default AdminRequestRow;
