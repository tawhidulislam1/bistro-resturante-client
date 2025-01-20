import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../MainLayout/DashboardLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },

            //admin route
            {
                path: 'addItems',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>

            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)

            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>

            },
            {
                path: "users",
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },

        ]
    }
]);