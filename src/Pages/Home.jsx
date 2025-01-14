import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Carousel from '../Components/Carousel';
import AboutBuilding from '../Components/AboutBuilding';
import ApartmentLocation from '../Components/ApartmentLocation';


const Home = () => {

    const {name} = useContext(AuthContext)

    return (
        <div>
       <Carousel></Carousel>
       <AboutBuilding></AboutBuilding>
       <ApartmentLocation></ApartmentLocation>
        </div>
    );
};

export default Home;