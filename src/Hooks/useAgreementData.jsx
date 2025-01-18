import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAgreementData = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: agreementItems = [], isLoading, refetch } = useQuery({
        queryKey: ['agreementItems', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/accepted-request/${user?.email}`);
            return data; // Fallback to 'guest'
        },
        
    });

    return [agreementItems, isLoading, refetch];
};

export default useAgreementData;