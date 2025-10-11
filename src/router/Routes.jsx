import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/MenuPage/MenuCom/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";


const Routes =createBrowserRouter([
        {
            path: '/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/menu',
                    element:<Menu></Menu>
                },
                {
                    path:'/order/:category',
                    element:<Order></Order>
                },
                {
                    path:'/order',
                    element:<Order></Order>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signUp',
                    element: <SignUp></SignUp>
                }
            ]
        }
])

export default Routes;