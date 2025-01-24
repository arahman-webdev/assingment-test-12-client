import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Apartment from "../Pages/Apartment";
import DashboardLyout from "../Layouts/DashboardLayout";
import Profile from "../DashboardPages/Common/Profile";
import ManageUser from "../DashboardPages/Admin/ManageUser";
import PrivateAdmin from "./PrivateDahsboard/PrivateAdmin";
import ManageCoupon from "../DashboardPages/Admin/ManageCoupon";
import MakeAnnoouncement from "../DashboardPages/Admin/MakeAnnoouncement";
import AgreementRequest from "../DashboardPages/Admin/AgreementRequest";
import MakePayment from "../DashboardPages/Members/MakePayment";
import Payment from "../DashboardPages/Members/Payment";
import PrivateMember from "./PrivateDahsboard/PrivateMember";
import PaymentHistory from "../DashboardPages/Members/PaymentHistory";
import Announcement from "../DashboardPages/Common/Announcement";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/apartment',
                element: <Apartment></Apartment>,
            },
        ],
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <SignUp></SignUp>,
    },
    // Dashboard layout
    {
        path: '/dashboard',
        element: <DashboardLyout></DashboardLyout>,
        children: [
            // admin dashboard --------------------------------
            {
                path: 'my-profile', // Simplified path
                element:<Profile></Profile>
            },
            {
                path: 'announcements',
                element: <Announcement />
            },
            {
                path: 'manage-users',
                element: <PrivateAdmin><ManageUser></ManageUser></PrivateAdmin>
            },
            {
                path: 'manage-coupon',
                element: <PrivateAdmin><ManageCoupon></ManageCoupon></PrivateAdmin>
            },
            {
                path: 'make-announcement',
                element: <PrivateAdmin><MakeAnnoouncement></MakeAnnoouncement> </PrivateAdmin>
            },
            {
                path: 'agreement-request',
                element: <PrivateAdmin><AgreementRequest></AgreementRequest> </PrivateAdmin>
            },

            // member dashboard --------------------------

            {
                path: 'make-payment',
                element:<PrivateMember><MakePayment></MakePayment></PrivateMember>
            },
            {
                path: 'payment',
                element:<PrivateMember><Payment></Payment></PrivateMember>
            },
            {
                path: 'payment-history',
                element: <PrivateMember><PaymentHistory></PaymentHistory></PrivateMember>
            },



        ],
    },
]);

export default routes;


