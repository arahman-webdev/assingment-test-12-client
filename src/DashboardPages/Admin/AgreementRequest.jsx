import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import AdminRequestRow from '../../Components/Dahsboard/TableRow/AdminRequestRow';
import { AuthContext } from '../../Providers/AuthProvider';


const AgreementRequest = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: customerAgreements =[], isLoading, refetch} = useQuery({
        queryKey: ['customerAgreements '],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/agreements-request`)
            return data
        }
    })


    console.log(customerAgreements)


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
                                            Floor no
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Block name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Room no
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Rent 
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Request date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Action
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
                                        customerAgreements.map(agreement => <AdminRequestRow key={agreement._id} agreement={agreement} refetch={refetch} />)
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

export default AgreementRequest;