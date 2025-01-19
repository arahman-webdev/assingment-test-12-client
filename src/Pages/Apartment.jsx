import React, { useState } from 'react';
import Card from '../Components/SharedComponents/Card';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import LoadingSpinenr from '../Components/SharedComponents/Spinner';

const Apartment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [minRent, setMinRent] = useState(''); // State for minimum rent
    const [maxRent, setMaxRent] = useState(''); // State for maximum rent
    const [searchParams, setSearchParams] = useState(null); // Stores search criteria
    const itemsPerPage = 6;

    const axiosSecure = useAxiosSecure();

    // Fetch apartments based on pagination and search criteria
    const { data, isLoading } = useQuery({
        queryKey: ['apartments', currentPage, searchParams],
        queryFn: async () => {
            const res = await axiosSecure.get('/apartment-items', {
                params: {
                    page: currentPage,
                    limit: itemsPerPage,
                    minRent: searchParams?.minRent || 0,
                    maxRent: searchParams?.maxRent || Infinity,
                },
            });
            return res.data;
        },
        keepPreviousData: true,
    });

    const apartments = data?.items || [];
    const totalPages = Math.ceil(data?.total / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle Rent Range Search
    const handleSearch = () => {
        setSearchParams({ minRent, maxRent });
        setCurrentPage(1); // Reset to the first page when a new search is performed
    };

    return (
        <div>
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

            {/* Rent Range Search Section */}
            <div className="flex justify-center my-4 space-x-4 py-20">
                <input
                    type="number"
                    value={minRent}
                    onChange={(e) => setMinRent(e.target.value)}
                    placeholder="Min Rent ($)"
                    className="px-4 py-2 md:w-64 w-44 border rounded-md"
                />
                <input
                    type="number"
                    value={maxRent}
                    onChange={(e) => setMaxRent(e.target.value)}
                    placeholder="Max Rent ($)"
                    className="px-4 py-2 border md:w-64 w-44 rounded-md"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 md:w-36 bg-blue-500 text-white rounded-md"
                >
                    Search
                </button>
            </div>

            {/* Main Content */}
            <div>

                {isLoading ? (
                    <LoadingSpinenr />
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-6">
                            {
                                apartments.length > 0 ? <>
                                    {
                                        apartments.map((apartment) => (
                                            <Card key={apartment._id} aprtment={apartment} />
                                        ))
                                    }</> :
                                    <>
                                        <div className='col-span-3 flex justify-center items-center min-h-screen'>
                                            <p className='text-center'>No content card</p>
                                        </div>
                                    </>
                            }
                        </div>

                        {/* Pagination Controls */}
                        {
                            apartments.length > 0 && (
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
                            )
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export default Apartment;
