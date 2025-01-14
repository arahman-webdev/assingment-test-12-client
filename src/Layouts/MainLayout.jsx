import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/SharedComponents/Navbar';
import Footer from '../Components/SharedComponents/Footer';

const MainLayout = () => {
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