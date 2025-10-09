import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Manu from "../pages/manuSection/Manu";


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
                    path:'/Menu',
                    element:<Manu></Manu>
                }
            ]
        }
])

export default Routes;