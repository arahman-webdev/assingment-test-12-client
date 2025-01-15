import React from "react";

const Card = () => {

    const handleClick = () =>{
        console.log('clicked')
    }
    return (
        <div className=" bg-[#ECEBF8] rounded-lg hover:shadow-xl overflow-hidden border">
            {/* Header */}
            <div className="bg-blue-900 text-white px-4 py-2 text-sm font-medium flex justify-between items-center">
                <p>
                    <span className="mr-2">🔑</span> Sold and Rented since{" "}
                    <span className="font-bold">APR 04, 2023</span>
                </p>
            </div>

            {/* Image */}
            <img
                src="https://i.ibb.co.com/DKYNzNQ/pexels-fotoaibe-1571468.jpg"
                alt="Apartment"
                className="w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">Parq Penthouse 61</h2>
                <p className="text-gray-600 font-medium">$171,612</p>
                <p className="text-gray-600 text-sm">
                    <span className="text-green-600 font-bold">226 Investors</span>
                </p>
                <div className="space-y-1">
                    <p className="flex justify-between">
                        <span>Annual Rental Return</span>
                        <span className="font-bold">12%</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Projected Value Growth</span>
                        <span className="font-bold">10%</span>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div onClick={handleClick} className="flex justify-center bg-blue-900 w-full items-center cursor-pointer">
                <button className=" text-white text-xl font-bold text-center py-4">
                    Agreement
                </button>
            </div>
        </div>
    );
};

export default Card;
