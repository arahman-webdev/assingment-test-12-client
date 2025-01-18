import React, { useState } from 'react';
import Card from '../Components/SharedComponents/Card';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { Spinner } from 'flowbite-react';
import LoadingSpinenr from '../Components/SharedComponents/Spinner';


const Apartment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page

    const axiosSecure = useAxiosSecure();

    // Fetch paginated apartments
    const { data, isLoading } = useQuery({
        queryKey: ['apartments', currentPage],
        queryFn: async () => {
          const res = await axiosSecure.get('/apartment-items', {
            params: {
              page: currentPage,
              limit: itemsPerPage,
            },
          });
          return res.data;
        },
        keepPreviousData: true, // Keep previous data while fetching new data
      });
      

    const apartments = data?.items || [];
    const totalPages = Math.ceil(data?.total / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className=''>
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center h-96 md:h-[500px]"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/M50BVM2/card.jpg')`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-65"></div>
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Welcome to Our Apartments</h1>
                </div>
            </div>

            {/* Main Content */}
            <div>
                <div className='text-5xl py-8 text-center z-20'>
                    <h2>Rent Our Houses Easily</h2>
                </div>
                {isLoading ? (
                   <LoadingSpinenr></LoadingSpinenr>
                ) : (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-6'>
                            {apartments.map((apartment) => (
                                <Card key={apartment._id} aprtment={apartment} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center space-x-2 mt-6">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-900 text-white' : 'bg-gray-200 text-black'}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Apartment;
