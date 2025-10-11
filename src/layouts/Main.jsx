import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/share/Footer";
import Nav from "../pages/share/Nav";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div className="container px-2 mx-auto w-full">
            {noHeaderFooter || <Nav></Nav>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;