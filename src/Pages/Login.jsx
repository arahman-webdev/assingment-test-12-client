import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import googleImg from '../assets/images/google.png'
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

  const [showPassword, setShowPassword] = useState('')
  const {loginUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
        .then((res) => {
            console.log(res);
            Swal.fire({
                title: "Good job!",
                text: "Welcome back! You are successfully registered!",
                icon: "success",
                background: "#CDF7FF",
                color: "#111",
                width: '450px',
            });
            const user = res.user;
            console.log(user)
            setUser(user);
            navigate(location?.state ? location.state: '/')
            const from = location.state?.from?.pathname || "/"
            navigate(from, {replace: true})
            // const from = location.state?.from?.pathname || "/";
            
            // navigate(from, { replace: true });
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login failed. Please check your email or password!",
                background: "#CDF7FF",
                color: "#111",
                width: '450px',
              });
        });
};


const handleSignInWithGoogle = () =>{
  console.log('clicked')
}


  return (
    <div style={{ minHeight: 'calc(100vh - 20px)' }} className="flex items-center w-4/5 mx-auto">
    <div className="max-w-lg mx-auto bg-gray-50 rounded-lg shadow-lg px-8 py-10 flex flex-col items-center justify-center w-full relative border">
        <div className='space-y-2'>
          <h2 className='text-2xl md:text-4xl font-bold text-center text-blue-900'>Register</h2>
        <p className='text-blue-950'>Welcome to AptEase</p>
        </div>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">

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
                Log in
            </button>
        </form>

        <div className="mt-4 text-center cursor-pointer">
            <p>Don't have an account? <Link to="/register" className="text-red-500">Please resiter now</Link></p>
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

export default Login;
