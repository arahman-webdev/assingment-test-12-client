import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';
import PaymentHistoryRow from '../../Components/Dahsboard/TableRow/PaymentHistoryRow';
import { AuthContext } from '../../Providers/AuthProvider';

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)

    // Fetch coupons with React Query
    const { data: payment_history = [], isLoading, refetch } = useQuery({
        queryKey: ["payment_history", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`payment-history/${user?.email}`);
            return data;
        },
    });

    useEffect(() => {
        document.title = "Dashboard-payment-history | AptEase";
    }, []);

    if (isLoading) return <LoadingSpinenr></LoadingSpinenr>

    console.log(payment_history)

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
                                            className='px-5 py-3  border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            User Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Amount
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3   border-b border-gray-200   text-left text-sm uppercase font-normal'
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payment_history.map(payment => <PaymentHistoryRow key={payment._id} payment={payment} refetch={refetch} />)
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

export default PaymentHistory;