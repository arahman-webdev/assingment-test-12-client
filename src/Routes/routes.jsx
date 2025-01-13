import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])

export default routes