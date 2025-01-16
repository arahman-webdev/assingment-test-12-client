import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: role = 'guest', isLoading, refetch } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/role/${user?.email}`);
            return data.role || 'guest'; // Fallback to 'guest'
        },
        
    });

    return [role, isLoading, refetch];
};

export default useRole;
