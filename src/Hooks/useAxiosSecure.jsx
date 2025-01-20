import axios from 'axios';
import React from 'react';

export const axiosSecure = axios.create({
    baseURL: 'https://assingment-test-12-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;