import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminRequestRow = ({ agreement, refetch }) => {
    const { _id, blockName, floorNo, apartmentNo, rent, date, customer } = agreement || {};
    const axiosSecure = useAxiosSecure()



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
