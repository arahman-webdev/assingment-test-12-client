import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminRequestRow = ({ agreement, refetch }) => {
    const { _id, blockName, floorNo, apartmentNo, rent, date, customer } = agreement || {};
    const axiosSecure = useAxiosSecure()

    const handleAccept = async () => {
        try {
            // Update agreement status
            await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/agreements/status/${_id}`, { status: 'Checked' });

            // Update user role
            await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/users/role/${customer?.email}`, { role: 'member' });

            Swal.fire('Success', 'Agreement accepted and user role updated to member!', 'success');
            refetch(); // Refresh the data
        } catch (error) {
            Swal.fire('Error', 'Failed to process the request. Try again later.', 'error');
        }
    };

    const handleReject = async () => {
        try {
            // Update agreement status
            await axiosSecure.patch(`${import.meta.env.VITE_API_ULR}/agreements/${_id}/status`, { status: 'Checked' });

            Swal.fire('Rejected', 'Agreement has been rejected!', 'info');
            refetch(); // Refresh the data
        } catch (error) {
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
                    onClick={handleReject}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300'
                >
                    Reject
                </button>
            </td>
        </tr>
    );
};

export default AdminRequestRow;
