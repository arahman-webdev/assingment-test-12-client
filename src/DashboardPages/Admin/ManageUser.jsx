import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';
import MemberTableRow from '../../Components/Dahsboard/TableRow/MemberTableRow';

const ManageUser = () => {

    const axiosSecure = useAxiosSecure()

    // const [members, setMembers] = useState([])

    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get('/users')
            return data
        }
    })

    if(isLoading) return <LoadingSpinenr></LoadingSpinenr>

    const members =  users.filter(user => user.role === 'member')
    



console.log(members)


    return (
        <div>
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
                                            User Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3  border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            User Email
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
                                        members.map(member => <MemberTableRow key={member._id} member={member} refetch={refetch} />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;