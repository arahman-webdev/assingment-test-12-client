import React, { useContext } from 'react';
import useRole from '../../Hooks/useRole';
import { AuthContext } from '../../Providers/AuthProvider';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';
import { Navigate } from 'react-router-dom';

const PrivateMember = ({children}) => {
    const [role, isLoading] = useRole()
    const { loading} = useContext(AuthContext)


if(isLoading || loading) return <LoadingSpinenr></LoadingSpinenr>


if(role === 'member') return children


    return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default PrivateMember;