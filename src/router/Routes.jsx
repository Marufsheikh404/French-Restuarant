import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/MenuPage/MenuCom/Menu";
import Order from "../pages/Order/Order";


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
                }
            ]
        }
])

export default Routes;