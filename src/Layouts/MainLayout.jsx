import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/SharedComponents/Navbar';
import Footer from '../Components/SharedComponents/Footer';
import { AuthContext } from '../Providers/AuthProvider';
import LoadingSpinenr from '../Components/SharedComponents/Spinner';

const MainLayout = () => {

    const {user, loading} = useContext(AuthContext)


        useEffect(() => {
            document.title = "Home | AptEase";
        }, []);
    
    if(loading) return <LoadingSpinenr></LoadingSpinenr>

    return (
        <div className='font-manrope'>
            <Navbar></Navbar>
            <div className=' min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;