import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/MenuPage/MenuCom/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Secret/Secret";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // normal user only
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            // admin panel
            {
                path:'alluser',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'AddItems',
                element:<AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path:'ManagesItem',
                element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
            }
        ]
    }
])

export default Routes;