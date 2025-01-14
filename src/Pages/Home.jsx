import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Carousel from '../Components/Carousel';
import AboutBuilding from '../Components/AboutBuilding';


const Home = () => {

    const {name} = useContext(AuthContext)

    return (
        <div>
       <Carousel></Carousel>
       <AboutBuilding></AboutBuilding>
        </div>
    );
};

export default Home;