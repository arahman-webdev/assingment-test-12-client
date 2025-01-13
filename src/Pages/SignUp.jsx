import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

  const {googleRegister} = useContext(AuthContext)

  const handlerGoogle = () =>{
    googleRegister()
    .then(res =>{
      console.log(res)
    })
  }


    return (
        <div
        className="relative flex items-center justify-center w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/DKYNzNQ/pexels-fotoaibe-1571468.jpg')`, // Replace this URL with your desired background image
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
  
        {/* Login Form */}
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 w-3/12">
          <h1 className="text-2xl font-bold text-center text-white mb-6">Register</h1>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="password">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-white text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-white text-sm">
              Don’t have an account?{' '}
              <a
                href="/register"
                className="text-blue-400 hover:underline font-medium"
              >
                Register
              </a>
            </p>
            <div>
              <button onClick={handlerGoogle}>
                Google login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;