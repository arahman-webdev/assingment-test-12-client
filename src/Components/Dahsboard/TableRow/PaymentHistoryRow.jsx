import React from 'react';

const PaymentHistoryRow = ({payment}) => {
    return (
        <tr>
        
            <td className='px-5 py-5 border-b bg-white text-sm'>{payment?.email}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>${payment?.amount}</td>
            <td className='px-5 py-5 border-b bg-white text-sm'>{payment?.status}</td>
        </tr>
    );
};

export default PaymentHistoryRow;