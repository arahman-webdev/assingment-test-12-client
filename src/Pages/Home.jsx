import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Carousel from '../Components/Carousel';
import AboutBuilding from '../Components/AboutBuilding';
import ApartmentLocation from '../Components/ApartmentLocation';
import Cover from '../Components/SharedComponents/Cover';
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
import QuestionAnswers from '../Components/QuestionAnswers';




const Home = () => {

    const {name} = useContext(AuthContext)

    return (
        <div>
       <Carousel></Carousel>
       <AboutBuilding></AboutBuilding>
       <Cover></Cover>
       <Services></Services>
       <QuestionAnswers />
       <Testimonial></Testimonial>
       <ApartmentLocation></ApartmentLocation>
        </div>
    );
};

export default Home;