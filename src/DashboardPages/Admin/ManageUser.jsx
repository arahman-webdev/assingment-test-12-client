import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinenr from '../../Components/SharedComponents/Spinner';

const ManageUser = () => {

    const axiosSecure = useAxiosSecure()

    // const [members, setMembers] = useState([])

    const {data: members = [], isLoading} = useQuery({
        queryKey: ['members'],
        queryFn: async()=>{
            const {data} = await axiosSecure.get('/users')
            return data
        }
    })

    if(isLoading) return <LoadingSpinenr></LoadingSpinenr>

    const member =  members.filter(member => member.role === 'member')
    



console.log(member)


    return (
        <div>
            
        </div>
    );
};

export default ManageUser;