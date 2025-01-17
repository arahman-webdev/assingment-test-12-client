import React, { useContext } from 'react';
import useRole from '../../Hooks/useRole';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';

const PrivateAdmin = ({children}) => {

    const [role, isLoading] = useRole()
    const {loading} = useContext(AuthContext)


    if(isLoading || loading) return <LoadingSpinenr></LoadingSpinenr>

    if(role === 'admin') return children
    return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default PrivateAdmin;