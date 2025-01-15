import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Apartment from "../Pages/Apartment";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/apartment',
                element: <Apartment></Apartment>
            },

        ]
    },
    
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/register',
            element: <SignUp></SignUp>
        }
    
])

export default routes