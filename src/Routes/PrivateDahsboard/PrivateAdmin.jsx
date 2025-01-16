import React from 'react';
import useRole from '../../Hooks/useRole';
import { Navigate } from 'react-router-dom';

const PrivateAdmin = ({children}) => {

    const [role, isLoading] = useRole()


    if(isLoading) return <p>loading .......</p>

    if(role === 'admin') return children
    return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default PrivateAdmin;