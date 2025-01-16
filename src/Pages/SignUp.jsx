import React, { useState, useEffect, useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../assets/images/google.png'

import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import axios from 'axios';




const Register = () => {
    const { createUser, googleRegister, logOutUser, user } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    
    // Redirect logged-in users
    useEffect(() => {
        if (user) {
            navigate(location?.state?.from || '/', { replace: true }); // Redirect to home if logged in
        }
    }, [user, navigate, location?.state?.from]);
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const image = form.image.files[0];
    
        if (image.size > 1000000) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Image size exceeds 1MB. Please upload a smaller file.",
            });
        }
    
        const formData = new FormData();
        formData.append('image', image);
    
        try {
            // Upload image to imgbb
            const imgResponse = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );
    
            const img_url = imgResponse.data.data?.display_url;
    
            const userInfo = {
                name,
                email,
                img_url,
                role: 'user',
            };
    
            // Create user with email and password
            const res = await createUser(email, password);
            console.log("User created:", res.user);
    
            // Post user info to database
            await axiosSecure.post('/users', userInfo);
    
            // Update profile with name and photo
            await updateProfile(res.user, {
                displayName: name,
                photoURL: img_url,
            });
    
            Swal.fire({
                title: "Good job!",
                text: "Welcome! You are successfully registered!",
                icon: "success",
            });
    
            navigate("/"); // Redirect to home page
            form.reset();
        } catch (error) {
            console.error("Error during registration:", error);
    
            Swal.fire({
                title: "Error!",
                text: "This email is already in use. Please provide a different email address.",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };
    
    const handleSignInWithGoogle = async () => {
        try {
            const result = await googleRegister();
            const user = result.user;
    
            // Send Google user info to the database
            const userInfo = {
                name: user.displayName,
                email: user.email,
                img_url: user.photoURL,
                role: 'user',
            };
    
            await axiosSecure.post('/users', userInfo);
    
            Swal.fire({
                title: "Success!",
                text: "Welcome! Google sign-in successful.",
                icon: "success",
            });
    
            navigate(location?.state?.from || '/'); // Redirect to the desired page or home
        } catch (error) {
            console.error("Google sign-in error:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Google sign-in failed. Please try again.",
            });
        }
    };
    

    return (
        <div style={{ minHeight: 'calc(100vh - 20px)' }} className="flex items-center w-4/5 mx-auto">
            <div className="max-w-lg mx-auto bg-gray-50 rounded-lg shadow-lg px-8 py-10 flex flex-col items-center justify-center w-full relative border">
                <div className='space-y-2'>
                    <h2 className='text-2xl md:text-4xl font-bold text-center text-blue-900'>Register</h2>
                    <p className='text-blue-950'>Welcome to AptEase</p>
                </div>
                <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-200">Name:</label>
                        <input
                            type="text"
                            placeholder="name"
                            id="name"
                            name="name"
                            required
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* image upload */}
                    <div className='flex items-start flex-col justify-start'>
                        <label htmlFor='image' className='text-sm text-gray-700 dark:text-gray-200'>
                            Select Image:
                        </label>
                        <input
                            required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200">Email:</label>
                        <input
                            type="email"
                            placeholder="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="bg-blue-900 hover:bg-blue-950 text-white font-medium py-2 px-4 rounded-md shadow-sm">
                        Register
                    </button>
                </form>

                <div onClick={() => setShowPassword(!showPassword)} className="absolute bottom-56 right-10 cursor-pointer">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>

                <div className="mt-4 text-center ">
                    <p>Already have an account? <Link to="/login" className="text-blue-950 cursor-pointer">Login now</Link></p>
                </div>
                <div className="divider">OR</div>
                <div onClick={handleSignInWithGoogle} className="flex gap-2 cursor-pointer border bg-blue-900 text-white px-5 py-3 rounded-md  transition duration-200">
                    <img className="w-7 h-7" src={googleImg} alt="Google" />
                    <h1>Login With Google</h1>
                </div>
            </div>
        </div>
    );
};

export default Register;





