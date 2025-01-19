import React from 'react';

const MemberTableRow = ({member}) => {

    const handleRemove = (id)=>{
        console.log(id)
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