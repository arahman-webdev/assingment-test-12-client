import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import useRole from "../../Hooks/useRole";

const Card = ({ aprtment }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [role] = useRole()

    const { _id, apartmentNo, floorNo, blockName, roomNo, rent, image } = aprtment || {};

    console.log(aprtment)

    const handleClick = () => {
        console.log("clicked");

        if (!user) {
            // Redirect to login with the current location
            return navigate("/login", { state: { from: location }, replace: true });
        }


        if (role === 'admin') {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are not elligible to make a request!",

            });
        }



        // Get today's date
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD

        const agreementInfo = {
            customer: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
            },
            agreementId: _id,
            blockName: blockName,
            image: image,
            rent: rent,
            floorNo: floorNo,
            roomNo: roomNo,
            apartmentNo: apartmentNo,
            status: "Pending",
            date: formattedDate, // Add the current date
        };

        axios.post(`${import.meta.env.VITE_API_ULR}/agreements`, agreementInfo)
            .then((res) => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        title: "Agreement Submitted!",
                        text: "Your agreement request has been submitted successfully.",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    title: "Error",
                    text: "Agreement already exists for this user.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    return (
        <div className=" bg-[#ECEBF8] rounded-lg hover:shadow-xl overflow-hidden border transition-shadow duration-500 group">
            {/* Image */}
            <img
                src={image}
                alt="Apartment"
                className="w-full sm:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />

            {/* Content */}
            <div className="p-4 space-y-2">
                <h2 className="text-2xl font-bold text-blue-900">Block Name: <span className="text-gray-400">{blockName}</span></h2>
                <div className="flex justify-between items-center space-y-3">
                    <div className="space-y-3">
                        <p className="text-gray-600 font-medium">Floor No: {floorNo}</p>
                        <p className="text-gray-600 text-sm">
                            <span className=" font-bold">Apartment No: {apartmentNo}</span>
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-600 text-sm">
                            <span className=" font-bold">Room No: {roomNo}</span>
                        </p>
                        
                            <p>

                                <span className="font-bold">Rent: ${rent}/month</span>
                            </p>
                        
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div onClick={handleClick} className="flex justify-center bg-blue-900 w-full items-center cursor-pointer">
                <button className="text-white text-xl font-bold text-center py-4">
                    Agreement
                </button>
            </div>
        </div>
    );
};

export default Card;
