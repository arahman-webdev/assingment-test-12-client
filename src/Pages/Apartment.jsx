import React from 'react';
import Card from '../Components/SharedComponents/Card';
import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../Hooks/useAxiosSecure';


const Apartment = () => {

  const axiosSecure = useAxiosSecure()
    
     const {data: apartments=[], isLoading, refetch} = useQuery({
      queryKey: ['apartments'],
      queryFn: async()=>{
        const res = await axiosSecure.get('/apartment-entries')
        return res.data
      }
     })

   
      

    return (
        <div className='mt-10'>
            <div
                className="relative bg-cover bg-center h-96 md:h-[500px]"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/M50BVM2/card.jpg')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-65"></div>

                {/* Content on top of the overlay */}
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Welcome to Our Cars</h1>
                </div>
            </div>
            <div>
                <div className='text-5xl py-8 text-center'>
                    <h2>Reant Our House easily</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-6'>
                {
                  apartments.map(aprtment =><Card key={aprtment._id} aprtment={aprtment}></Card>)
                }
                </div>
            </div>
        </div>
    );
};

export default Apartment;